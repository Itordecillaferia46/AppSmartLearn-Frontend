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
                            <img src="../../assets/imgCrear/escuela.svg"  style="max-width:400px; margin-top:100px">
                          </div>
                          </v-col>
                              <v-col col="8"
                              xs="4">  
                                                       
                            <div >
   

                              
                                   
                              <template>
                                <v-card-text class="mt-12">
                        <h4 class="text-center">AGREGAR NUEVO CURSO</h4>
                          <h6 class="text-center  grey--text">
                            Ingresar los datos solicitados para la creación de un curso.
                          </h6>

                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                            <v-row>
                                <v-col cols="12" sm="100%">
                                    <b-form-select 
                                    v-for="i in school" 
                                    :key="i._id"  
                                    v-model="grade"
                                    style="background-color: #f6f2f2; 
                                                  border: 1px solid gray;">
                                    
                                      <option value="">Seleccione un grado</option>
                                      <option v-for="a in i.grade" :value="a" :key="a">{{a}}</option>
                                    </b-form-select>
                                </v-col>
                                </v-row>
                                <v-row>
                                <v-col cols="12" sm="100%">
                                    <b-form-select    v-model="group"
                                    style="background-color: #f6f2f2; 
                                                  border: 1px solid gray;">
                                        <option value="">Seleccione un grupo</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </b-form-select>
                                </v-col>
                             </v-row>
                             <v-row>
                              <v-col cols="12" sm="100%">
                                    <b-input-group prepend="Nomenclatura" class="mt-3">
                                        <b-form-input v-model="nomenclature" readonly
                                        
                                        ></b-form-input>
                                    </b-input-group>
                              </v-col>
                             </v-row>
                             <br>
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
            selected:"",
            colo:"",
            mensaje:"",
            hasSaved: false,
            dialogo: false,
            name:"",
            title:"",
            description:"",
            date: null,
            group: "",
            grade: "",
            school: [],
            courses: [],
            existe: undefined
            }
        },
        
        computed:{
                nomenclature:{
                    get(){
                        return `${this.grade} - ${this.group}`
                    }
                }
            },

            props: {
                source: String
            }, 
          
            mounted(){
              let vue = this;
              axios.get('http://localhost:3001/courses').then(
              function(response){
                vue.courses = response.data;
                console.log(vue.courses)
            })
            axios.get('http://localhost:3001/schools').then(
              function(response){
                vue.school = response.data;
                console.log(vue.school)
            })
          },

        methods:{
          vuelveInicio(){
      this.$router.push('/dashboard/welcome');
    },
                crear(color){

                  
                    this.existe = this.courses.find(curso => curso.nomenclature == this.nomenclature);
                  
                  if(this.existe == undefined){
                    if(this.grade != ""){
                    if(this.group != ""){
                    let course={
                    "grade":this.grade,
                    "group":this.group,
                    "nomenclature":this.nomenclature
                    };
                    axios.post('http://localhost:3001/courses',course)
                    .then((response) => {
                        console.log(response)
                        if(response.status =="200"){
                          this.limpiar();
                        color = "success"
                        this.noti = this.$vs.notification({
                        progress: 'auto',
                        color,
                        
                        title: "El curso ha sido creado"
                      })
                        }
                        let vue = this;
                        axios.get('http://localhost:3001/courses').then(
                            function(response){
                                vue.courses = response.data;
                                console.log(vue.courses)
                            }
                        )
                    }).catch((error) => {
                        if(error.response.status=="500"){
                        this.mensaje="Ocurrio Un Error Vuelve A Intentar"
                        this.colo="background-color:rgb(212, 80, 80);"
                        this.dialogo=true
                        }
                        })
                    }else{
                      this.msg="El Campo Grupos Es Necesario."
                      this.hasSaved=true
                    }
                    
                  }else{
                    this.msg="El Campo Grados Es Necesario."
                    this.hasSaved=true
                  }
                  }else{
                    this.limpiar();
                    color = "danger"
                    this.noti = this.$vs.notification({
                        color,
                        
                        title: "Este curso ya existe"
                      })
                  }
                  
                    

                    
                    },
                limpiar(){
                  this.dialogo = false;
                  this.group="";
                  this.grade="";
                  this.nomenclature="";
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
    background-image: url("../../assets/imgCrear/escuela.svg");
    background-size:cover;
  }
  .estilotextarea {border: 1px solid #515e64;
  border-bottom: 0;
  height: 85%;
  }





  @media(max-height: 930px){
    .v-window{
    height: 500px;
    padding-bottom: 0;
  }
  }

  @media(max-height: 770px){
    .v-window{
    height: 400px;
    padding-bottom: 0;
  }
  }
  .fondosub{
  background-image:url("../../assets/disenomio.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 90%;

margin:0; 
}
  </style>
  