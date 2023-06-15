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
                            <img src="../../assets/imgCrear/asignatura.svg"  style="max-width:400px; margin-top:100px">
                          </div>
                          </v-col>
                              <v-col col="8"
                              xs="4">  
                                                       
                            <div >
   

                              
                                   
                              <template>
                                <v-card-text class="mt-12">
                        <h4 class="text-center">CREAR ASIGNATURA</h4>
                        <h6 class="text-center  grey--text">
                          Ingresar los datos solicitados para la creación de una asignatura.
                        </h6>

                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                              <v-row>
                              <v-text-field
                              rounded
                              dense
                              background-color="#f6f2f2"
                              v-model="name"
                              label="Nombre"
                              outlined
                              color="blue"
                              autocomplete="false"
                              class="mt-4"/>
                              
                              </v-row>

                             <!--  <v-btn
                              @click="active3 = true"
                              depressed
                              color="primary">
                                Seleccionar los grados
                              </v-btn> -->
                              <v-row v-for="i in courses" :key="i._id">
                              <v-select
                                rounded
                                style="border-radius: 18px;"
                                background-color="#f6f2f2"
                                v-model="grades"
                                :items="i.grade"
                                chips
                                label="Grados"
                                dense
                                solo
                                multiple
                              ></v-select>
                              </v-row>
                          <center> 
                            <br>
                            <vs-button @click="crear('bottom-center', vsColor)">
                            GUARDAR
                          </vs-button>
                          <div class="center">
              <vs-dialog  prevent-close  width="300px" not-center v-model="active3" >
    
              <template #header >
                <h4 class="not-margin">
                  Seleccionar <b>grados</b>
                </h4>
              </template>
  
  
              <div class="con-content">
                <template>
<v-card flat>
  <v-card-text>
    <v-container fluid>
      <v-row v-for="i in courses" :key="i._id">
        <v-col 
          cols="12"
          sm="4"
          md="4"
        >
          <v-checkbox 
            v-model="grades"
            :label="a"
            color="red"
            v-for="a in i.grade" :key="a"
            :value="a"
            hide-details
          ></v-checkbox>
      </v-col>
      </v-row>
    </v-container>
  </v-card-text>
</v-card>
</template>

              </div>
  
              <template #footer>
                <div class="con-footer">
                  <vs-button @click="active3=false">
                    Aceptar
                  </vs-button>
                  <vs-button @click="active3=false" >
                    Cancelar
                  </vs-button>
                </div>
              </template>
            </vs-dialog>
          </div>
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
            dialogo: false,
            name:"",
            msg:"",
            hasSaved: false,
            active3: false,
            courses: [],
            grades: []
            }
        },
            props: {
                source: String
            }, 

            mounted(){
              let vue = this;
              axios.get('http://localhost:3001/schools').then(
                  function(response){
                      vue.courses = response.data;
                      console.log("colegio" + JSON.stringify(vue.courses))
                  }
              )
            },

            methods:{
              vuelveInicio(){
      this.$router.push('/dashboard/welcome');
    },
                crear(position = null, color, progress = 5){
                  if(this.name != ""){
                    if(this.grades != ""){
                      let area={
                    "name":this.name,
                    "courses": this.grades,
                    "creation_date": new Date()
                    };
                     console.log(area)
                    axios.post('http://localhost:3001/areas',area)
                    .then((response) => {
                        console.log("ver")
                        console.log(response)
                        if(response.status =="200"){
                          this.limpiar();
                          color = "success"
                          this.noti = this.$vs.notification({
                          progress,
                          color,
                          position,
                          title: "La asignatura ha sido creada"
                      })
                        }
                    }).catch((error) => {
                        if(error.response.status=="500"){
                        this.mensaje="Ocurrio Un Error Vuelve A Intentar"
                        this.colo="background-color:rgb(212, 80, 80);"
                        this.dialogo=true
                        }
                        })
                    }else{
                      this.msg="Seleccione los grados."
                      this.hasSaved=true
                    }
                    
                  }else{
                    this.msg="El Campo Nombre Es Necesario."
                    this.hasSaved=true
                  }
                    
                    },
                limpiar(){
                  this.dialogo = false;
                  this.name="";
                  this.grades=[];
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
    background-image: url("../../assets/imgCrear/asignatura.svg");
    background-size: cover;
  }
  .estilotextarea {border: 1px solid #515e64;
  border-bottom: 0;
  height: 85%;
  }

  .fondosub{
  background-image:url("../../assets/disenomio.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 90%;

margin:0; 
}
  </style>
  