<template>
  <v-container class="container">
  
     <v-row class="estilocompleto" >
      <v-bottom-navigation
  :value="value"
  color="teal"
  width="100%"
  max-height="60px"
  background-color="#f6f2f2"
  style="margin-left:-18px; margin-bottom: -2.6%; border-radius: 20px;"
  
>
      <div style="margin-left:-200px; margin-top:1%; margin-right:10px;">
      <v-icon 
      color="blue"
      size="300%"
      left="true"
      >
      mdi-book-account</v-icon>
    </div>
     <h1>{{datos.nombre_asignatura.name}}</h1>
      
    <v-avatar
          color="red"
          size="30"
          style="float:right;margin-right:-200px;margin-left:80px;margin-top:10px; position:right;"
        >
          <button @click="vuelveInicio()" class="white--text text-h5">X</button>
        </v-avatar>
  
</v-bottom-navigation>

       <v-row>
             <v-col col="8"
             sm="8">
            <v-card class="elevation-12 mt-12" color="transparent">
              <v-row style=" margin-left: 20px; padding-top: 40px;">
                <h6 style="font-weight: bold;">{{datos.task_type}}</h6>
              </v-row>
              <v-row style=" margin-left: 20px; ">
                  <h5>{{datos.task_title}}</h5>
                </v-row>
                <v-row style=" margin-left: 20px; margin-top:20px">
                  <h6 style="font-weight: bold;">descripcion:</h6>
                </v-row>
                <v-row style=" margin: 20px;text-align: justify ">
                  <li>
                    {{datos.descripcion}}
                 </li>
                </v-row>
                
                
                <v-row style=" margin-left: 20px; margin-top:20px">
                  <h6 style="font-weight: bold;">Entregable:</h6>
                </v-row>
                <v-row style=" margin-left: 20px; ">
                  <h6>{{datos.tipo}} diligenciado en formato PDF</h6>
                </v-row>
                <v-row style=" margin-left: 20px; margin-top:20px">
                  <h6 style="font-weight: bold;">recurso:</h6>
                </v-row>
               <v-row style=" margin-left: 40px;">
                  <a :href="datos.archivo[0].location" target="_blank" ><b-icon icon="file-earmark-pdf-fill" font-scale="5" style="color:#BC0B0B"></b-icon></a>  
                </v-row>
                <v-row style=" margin-left: 20px;padding:10px;margin-top:-1px">
                  <template>{{datos.archivo[0].originalname}}</template>
                </v-row>
               
            </v-card>
          </v-col>
          <v-col col="4"
          sm="4">
            <v-card class="elevation-12 mt-12" color="transparent">
             
             <v-row style=" margin-left: 20px;  padding-top: 40px;">
              <h3>Estado de la entrega</h3>
              </v-row>
              <v-row style=" margin-left: 20px; margin-top:20px">
                  <h6 style="font-weight: bold;">Estado:</h6>
                </v-row>
                <v-row style=" margin-left: 20px; ">
                  <h6>No entregado</h6>
                </v-row>
                <v-row style=" margin-left: 20px; margin-top:20px">
                  <h6 style="font-weight: bold;">Estado de califcación:</h6>
                </v-row>
                <v-row style=" margin-left: 20px; ">
                  <h6>Sin calificar</h6>
                </v-row>
                <v-row style=" margin-left: 20px; margin-top:20px">
                  <h6 style="font-weight: bold;">Ultima modificación:</h6>
                </v-row>
                <v-row style=" margin-left: 20px; ">
                  <h6>{{datos.deliveryDateInicial}}</h6>
                </v-row>
                <v-row style=" margin-left: 20px; margin-top:20px">
                  <h6 style="font-weight: bold;">Enviar archivo:</h6>
                </v-row>
                <v-row style=" margin-left: -5px; ">
                  <v-col
                  cols="12"
                  md="11"
                >
                  <div
                    style="height:80px; width: 108%;padding: 5px; background-color:#D4D4D4;text-align:center; border-radius:20px; margin-top:-20px"
                  >
                  <div v-if="archivo==''" id="box-droppable" class="box-iner" @dragover="dragover" @dragleave="dragleave" @drop="drop"> 
                     <label style="font-size:13px;"> Arrastrar archivo o haga click en el icono</label>
                  <!----   <v-file-input style="position: absolute;top: 50%;left: 50%; margin: -25px 0 0 -25px;"
                     hide-input
                     v-model="archivo"
                     @change="onChange" ref="file"
                     prepend-icon="mdi-tray-arrow-up"
                     truncate-length="1"
                    ></v-file-input>
                    <b-icon icon="arrow-bar-up" font-scale="4" style="color:#BC0B0B"></b-icon> 
                  -->  
                     
                    <input class="inputfile inputfile-5"
                    id="file-5" type="file" 
                     @change="onChange" ref="file" 
                     /><label for="file-5">
                      <figure >
                        <svg   viewBox="0 0 20 17">
                          <b-icon icon="arrow-bar-up" font-scale="1.5" style="color:primary"></b-icon> 
                          </svg>
                        </figure>
                      </label>
                 
                     
                 






                  </div>
                  <div v-if="archivo!=''">
                   <button style="color:#BC0B0B; float:right;"><b-icon @click="simulacion()"   icon="x-circle-fill" font-scale="1.5"></b-icon></button> 
                <b-icon icon="file-earmark-pdf" font-scale="4" style="color:#BC0B0B"></b-icon> 
                  <template>{{archivo[0].name}}</template>
                 </div>
                 </div>
                 
                </v-col>
              
                </v-row>
                <v-row>
                
                  <vs-button v-if="btn==false" loading class="save" >
                  Enviar
                </vs-button>
                <vs-button v-if="btn==true" @click="enviarActividad()" class="save" >
                  Enviar
                </vs-button>
                
              </v-row>
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
            </v-card>
          </v-col>
          </v-row>
      </v-row>
  </v-container>
</template>

<script>  
/* import {library} from '@fortawesome/fontawesome-svg-core'
  import {
      faStar,
      faPlus
  } from '@fortawesome/free-solid-svg-icons'
  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

  library.add(
      faStar,
      faPlus,
  ); */

  
 import axios from 'axios'
  export default {
      data: function(){
          return{
            btn:true,
            hasSaved:false,
            msg:'',
            puto:[],
            datos:[],
            archivo:'',
          }
      },
      mounted() {
      
      this.datos= this.$store.state.tareaEstudiante
      console.log(this.datos)
      this.fechaModificacion()
      },


      methods: {
        enviarActividad(){
          
          if(this.archivo!=''){
            this.btn=false;
            const formData = new FormData();
                         formData.append('file', this.archivo[0])    
                         axios.post('http://localhost:3001/exer',formData)
                            .then((response) => {
                               
                               var dia = this.$store.state.userData.asignatures[this.$store.state.posasig].Actividades[this.$store.state.posacti].dia
                               const puto =new Object
                               puto.people_id= this.$store.state.userData._id
                               puto.archivo= response.data.nU
                               puto.id_actividad= this.datos._id_actividad
                               puto.id_asignatura= this.datos.nombre_asignatura._id
                               puto.dia = dia
                               puto.curso = this.$store.state.userData.courestu.nomenclature
                              

                          axios.post('http://localhost:3001/exercisesss',puto)
                            .then((response) => {
                              console.log(response.status)
                              let autentication = {
                                "username": this.$store.state.userData.username,
                                "password": this.$store.state.userData.password,
                               };
                              axios.post("http://localhost:3001/auth", autentication).then((data) => {
                               if(data.status === 200){
                                this.$store.state.userData = data.data;
                                this.hasSaved=true;
                               this.msg='Envio Exitoso'
                               this.btn=true;
                               }
                              })
                              }).catch((error) => {
                             console.warn(error.response.status=="500")
                            })
                            }).catch((error) => {
                             console.warn(error.response.status=="500")
                            })
                          }else{
                            this.hasSaved=true;
                               this.msg='Recuerda que debes selecionar un documento'
                          }
        },
onChange() {
    this.archivo = [...this.$refs.file.files];
  },
  dragover(event) {
    event.preventDefault();
    if (!event.currentTarget.classList.contains('bg-green-300')) {
      event.currentTarget.classList.add('bg-green-300');
    }
  },
  dragleave(event) {
    event.currentTarget.classList.add('bg-gray-100');
  },
  drop(event) {
    event.preventDefault();
    this.$refs.file.files = event.dataTransfer.files;
    this.onChange(); 
    event.currentTarget.classList.add('bg-gray-100');
  },
        fechaModificacion(){
          const date =this.datos.deliveryDateInicial;
        const brusco =date[0]+date[1]+date[2]+date[3]+date[4]+date[5]+date[6]+date[7]+date[8]+date[9];
        this.datos.deliveryDateInicial=brusco;
        },
        vuelveInicio(){     
    this.$router.push('/dashboard/welcome');
  },
  simulacion(){
    this.archivo='';
    this.puto=true;
  }
      },
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
  background-image: url("../../assets/imgCrear/actividad.svg");
  background-size: 80vh 50vw;
  background-repeat: no-repeat;
}

.container{
  display: flex;
  margin-bottom: 50px;
  
}
.estado-tarea{
  width: 240px;
  height: 100px;
}

.estado-tarea .estado-tarea__buttons{
  background-color: #f6f2f2;
  border-radius: 20px;
  border: 1px solid #C3C3C5;
  height: 130px;
}

.estado-tarea .estado-tarea__buttons:hover{
  border: 1px solid black;
}


.adjuntar{
  background-color: #f6f2f2;
  border-radius: 20px;
  border: 1px solid #C3C3C5;
  width: 300px;
  margin-left: 50px;
  margin-top: 50px;
  padding: 2%;
}

.adjuntar:hover{
  border: 1px solid black;
}

h4{
  color: black;
  font-weight: 300;
}

.save{
  margin-left: 90px;
  background-color: green;
  max-width: 100px;
  max-height: 50px;
}

.divNew{
  position: absolute;
  background-color: #b99f9f;
  width: 78%;
  background-position-x: center;
  border-radius: 10px;
 
}

h1{
  font-size: 36px;
  font-weight: 800;
  color: #0F5C8c;
  display: inline;
  margin-right: 50%;
  margin-top: auto;
}
.estilocompleto{
  margin-left: 30px;
  margin-right: 30px;
  margin-block: 10px;
  
}
.box-iner {
  color:black;
  border-style: dashed;
border-radius: 20px;
margin:0px auto;
width:100%;
height: 70px;
}
.box-iner:link{
text-decoration: none;
}
.box-iner:hover {
color: #1717FF;
cursor: pointer;
}

.inputfile {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}



.inputfile-5 + label figure {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: block;

}

.inputfile-5 + label:hover figure {
  background-color: rgba(0, 0, 255, 0.212);
}

.inputfile-5 + label:hover svg {
  width: 80%;
  height: 80%;
  fill: blue;
}

</style>
