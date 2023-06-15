
  <template>
  <div >
    
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
                            <img src="../../assets/imgCrear/institucion.svg"  style="max-width:400px; margin-top:100px">
                          </div>
                          </v-col>
                              <v-col col="8"
                              xs="4">  
                                                       
                            <div >
   

                              
                                   
                              <template>
                                <v-card-text class="mt-12">
                        <h4 class="text-center">AGREGAR DATOS DE LA INSTITUCIÓN</h4>
                          <h6 class="text-center  grey--text">
                            Ingresar los datos solicitados.
                          </h6>
                          <br><br>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                              <v-row>
                                <!-- <v-col cols="12" sm="100%"> -->
                                  <v-text-field
                                  rounded
                                  background-color="#f6f2f2"
                                  dense
                                  v-model="name"
                                  label="Nombre"
                                  outlined
                                  color="blue"
                                  autocomplete="false"
                                  />
                                  <!-- </v-col> -->
                                </v-row>
                                <v-row cols="12" sm="100%">
                                  <!-- <v-col> -->
                                  <v-text-field
                                  rounded
                                  background-color="#f6f2f2"
                                  v-model="direction"
                                  label="Dirección"
                                  outlined
                                  dense
                                  color="blue"
                                  autocomplete="false"
                                  />
                                <!-- </v-col> -->
                              </v-row>
                                <v-row>
                                  <!-- <v-col cols="12" sm="100%"> -->
                                  <v-text-field
                                  rounded
                                  background-color="#f6f2f2"
                                  v-model="contact"
                                  label="Contacto"
                                  outlined
                                  dense
                                  color="blue"
                                  autocomplete="false"
                                  />
                                  <!-- </v-col> -->
                                </v-row>
                                  
                                <v-row>
                                      <v-checkbox
                                        color="#3BA839"
                                        dense
                                        v-model="primary"
                                        label="Primaria (1°,2°,3°,4°,5°)"
                                        value="primaria"
                                      ></v-checkbox>
                                      <v-checkbox
                                      color="#3BA839"
                                        dense
                                        v-model="secundary"
                                        label="Bachillerato (6°,7°,8°,9°,10°,11°)"
                                        value="secundaria"
                                      ></v-checkbox>
                                </v-row>
  
                         
                            <center> 
                            <vs-button @click="crear('bottom-center', vsColor)">
                                GUARDAR
                              </vs-button>
                            </center>
                            
                            <br> <br> <br>
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

      <v-snackbar
      v-model="hasSaved"
      :timeout="2000"
      absolute
      bottom
      left
      color="green"
    >
      {{msg}}
    </v-snackbar>
    
  
  
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
        data: function(){
            return{
            
            colo:"",
            mensaje:"",
            dialogo: false,
            name:"",
            title:"",
            description:"",
            inicio: null,
            fin: null,
            numero: "",
            primary: "",
            secundary: "",
            hasSaved: false,
            noti: '',
            schools: [],
            }
        },

            props: {
                source: String
            }, 

            mounted(){
              let vue = this;
                        axios.get('http://localhost:3001/schools').then(
                            function(response){
                                vue.schools = response.data;
                                console.log(vue.schools)
                            }
                        )
    },  

            computed:{
              total(){
                if(this.primary && this.secundary){
                  return [1,2,3,4,5,6,7,8,9,10,11]
                }else if(this.primary){
                  return [1,2,3,4,5]
                }else if(this.secundary){
                  return [6,7,8,9,10,11]
                }else{
                  return []
                }
              }
            },

            methods:{
          
              vuelveInicio(){
      this.$router.push('/dashboard/welcome');
    },
                crear(position = null, color, progress = 5){
                  if(this.schools.length > 0){
                    this.limpiar();
                    color = "danger"
                    this.noti = this.$vs.notification({
                        progress,
                        color,
                        position,
                        title: "Ya existe una escuela"
                      })
                  }else{
                    if(this.name != ""){
                    if(this.direction != ""){
                      if(this.contact != ""){
                        if(this.total != ""){
                          let school={
                            "name":this.name,
                            "direction":this.direction,
                            "contact":this.contact,
                            "grade":this.total
                            };
                          axios.post('http://localhost:3001/schools',school)
                    .then((response) => {
                        console.log(response)
                        if(response.status =="200"){
                        this.limpiar();
                        color = "success"
                        this.noti = this.$vs.notification({
                        progress,
                        color,
                        position,
                        title: "La escuela ha sido creada"
                      })
                      let vue = this;
                        axios.get('http://localhost:3001/schools').then(
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
                    this.msg="Seleccione grados"
                    this.hasSaved=true
                  }
                  }else{
                    this.msg="Digite contacto"
                    this.hasSaved=true
                  }
                  }else{
                    this.msg="Digite dirección"
                    this.hasSaved=true
                  }
                  }else{
                    this.msg="Digite nombre"
                    this.hasSaved=true
                  }
                  }
                  
                    
                    },
                limpiar(){
                  this.dialogo = false;
                  this.name="";
                  this.contact="";
                  this.direction="";
                  this.primary="";
                  this.secundary="";
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
  }
  .image-col{
    background-image: url("../../assets/imgCrear/institucion.svg");
    background-size:cover;
  }

  .fondosub{
  background-image:url("../../assets/disenomio.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 90%;

margin:0; 
}
  
  </style>
  