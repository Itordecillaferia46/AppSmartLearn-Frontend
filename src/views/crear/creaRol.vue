<template>
  <div >
    <pre>{{$data}}</pre>
    <v-avatar
        color="red"
        size="30"
        style="float:right;margin-right:40px;margin-top:10px"
      >
        <button @click="vuelveInicio()" class="white--text text-h5">X</button>
      </v-avatar>
      <div id="personal"  style="width: 90%; margin-left:50px" class="fondosub">
        
          <div class="row justify-content-md-center">
           
          
                            <v-row>
                              
                              <v-col col="4"
                              xs="4"> 
                              <div>
                            <img src="../../assets/imgCrear/roles.svg"  style="max-width:400px; margin-top:100px">
                          </div>
                          </v-col>
                              <v-col col="8"
                              xs="4">  
                                                       
                            <div >
   

                              
                                   
                              <template>
                                <v-card-text class="mt-12">
  <h4 class="text-center">Crear rol</h4>
  <h6 class="text-center  grey--text">
    Ingresar los datos solicitados para la creación de un rol.
  </h6>

  <v-row align="center" justify="center">
    <v-col cols="12" sm="8">
        <v-row>
        <v-col cols="12" sm="100%">
        <v-text-field
        rounded
        dense
        background-color="#D4D4D4"
        v-model="name"
        label="Nombre"
        outlined
        color="blue"
        autocomplete="false"
        class="mt-4"/>
        </v-col>
        <textarea v-model="jsonstr" rows="8" cols="40"></textarea>
  <pre>{{ puto }}</pre>
        </v-row>
 
    <center> 
    <b-button 
    style="background-color: #0378A6; 
            color: #FFFFFF; 
            border: none;
            padding-bottom: 0;
            " 
    @click="crear()" 
    pill variant="success">
      <h5 class="button-text">Guardar</h5>
    </b-button>
    <b-button 
    style="background-color: #0378A6; 
            color: #FFFFFF; 
            border: none;
            padding-bottom: 0;
            " 
    @click="mou()" 
    pill variant="success">
      <h5 class="button-text">prueva</h5>
    </b-button>
    </center>
    
        <div>
          <v-snackbar
          v-model="hasSaved"
          :timeout="2000"
          absolute
          bottom
          left
          color="red"
        >
          {{msg}}
        </v-snackbar>
        </div>
    </v-col>
  </v-row>  
</v-card-text>
                              </template>

      
    
  
  
  </div>
  </v-col>
  </v-row>


          </div>
          </div>

    </div>
</template>

<script>

    import axios from 'axios'
    export default {
        components: {

        },
        data: () => ({
          jsonstr: '{"id":1,"name":"A green door","price":12.50,"tags":["home","green"]}',
          puto:null,
          colo:"",
          hasSaved: false,
          mensaje:"",
          heading: 'Crear Roles',
          icon: 'pe-7s-users icon-gradient bg-tempting-azure',
          subheading: 'Creación de los diferenes roles.',
          name:"",
          menu:"",
          rutas:"",
          msg:"",
          dialogo: false,
        }),
     
  
        methods: {
          mou() {
            const myObjStr = JSON.stringify(this.jsonstr);
    this.puto=JSON.parse(myObjStr)
    alert(typeof(this.puto))
  },
          vuelveInicio(){
      this.$router.push('/dashboard/welcome');
    },
          crear(position = null, color){
        if(this.name!=""){
          /* if(this.menu!=""){
            if(this.rutas!=""){ */
        let json={
        "name":this.name,
     //  "menu":this.menu,
     //  "rutas":this.rutas,
       };
      axios.post('http://localhost:3001/roles',json)
      .then((response) => {
        console.log(response)
        if(response.status =="200"){
                        this.limpiar();
                        color = "success"
                        this.noti = this.$vs.notification({
                        progress: 'auto',
                        color,
                        position,
                        title: "El rol ha sido creado"
                      })
                      let vue = this;
                        axios.get('http://localhost:3001/roles').then(
                            function(response){
                                vue.schools = response.data;
                                console.log(vue.schools)
                            }
                        )
                        }
      }).catch((error) => {
          if(error.response.status=="500"){
          this.mensaje="Ocurrio Un Error Vuelve A Intentar"
          this.colo="background-color:rgb(212, 80, 80);"
           this.dialogo=true
          }
        })
           
        }else{
          this.msg="El Campo Nombre Es Necesario."
          this.hasSaved=true
        }
        /* }else{
          this.msg="El Campo Menu Es Necesario."
          this.hasSaved=true
        }
        }else{
          this.msg="El Campo Rol Es Necesario."
          this.hasSaved=true
        } */
        
       
       // this.$router.push('about');
      },
      vuelve(){
        this.$router.push('/dashboard');
      },
      limpiar(){
        this.dialogo = false
        this.name="";
        this.menu="";
        this.rutas="";
     
       // this.hasSaved=true
      }
        }
    }
</script>

<style scoped>
  .v-application .rounded-bl-xl {
      border-bottom-left-radius: 300px !important; 
  }
  .v-application .rounded-br-xl {
      border-bottom-right-radius: 300px !important;
      height: 60vh;
  }
  .image-col{
    background-image: url("../../assets/roles.png");
    background-size:cover;
  }
  .estilotextarea {border: 1px solid #515e64;
  border-bottom: 0;
  height: 85%;
  }
  
  .fondosub{
  background-image:url("../../assets/disenomio.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin:0; 
}
  </style>