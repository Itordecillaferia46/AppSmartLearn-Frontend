<template>
    <div >
      <div  class="box-style box-style-l fondosub">
        <v-avatar
            color="red"
            size="30"
            style="float:right;margin-right:40px;margin-top:10px"
          >
            <button @click="vuelveInicio()" class="white--text text-h5">X</button>
          </v-avatar>
        <div style=" height:80px;margin-left:50px;margin-top:20px">
          <div class="  text-capitalize " style="font-weight: bold;font-size:30px;color:rgb(6, 90, 187);">
            <b-icon icon="card-checklist" font-scale="1.5" style="color:rgb(6, 90, 187)"></b-icon>
                Actividades pendientes
            </div>
       </div>
          <div class="row justify-content-md-center">
            <div class="col-md-12">
             
                
              <v-row>
                <v-col cols="12" sm="8">
               <div class="  text-capitalize " style="font-weight: bold;font-size:25px">
                 
                     Tabla Con El Listado
                     
                 </div>
                </v-col></v-row>
                  

                  <div class="px-5 py-5">
                    <v-row>
                    <v-col col="8" xs="4">                           
                  
                  <div>
                  <table class="table table-striped" >
                    <thead>
                      <tr>
                        <th scope="col">Asignature</th>
                        <th scope="col">Grado</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Título</th>
                       <!-- <th scope="col">Descripción</th> -->
                        <th scope="col">Fecha inicial</th>
                        <th scope="col">Fecha final</th>
                        <th scope="col">Estado de la tarea</th>
                        <th scope="col">Archivo</th>
                        <th scope="col">Opciones</th>
                      </tr>
                    </thead>

                    <tbody>
                          
                      <tr v-for="(exercise, index) in exercises" :key="exercise._id" >
                        <td>{{exercise.task_asignature[0].name}}</td>
                        <td><span v-for="(g, index) in exercise.topic" :key="index">
                               {{ g.nomenclature}}
                        </span></td>
                        <td>{{exercise.task_type}}</td>
                        <td>{{exercise.task_title}}</td>
                     <!--   <td>{{exercise.task_description}}</td> -->                     
                        <td>{{exercise.deliveryDateInicial | moment('YYYY-MM-DD')}}</td>
                        <td>{{exercise.deliveryDateFinal | moment('YYYY-MM-DD')}}</td>
                        <td>{{exercise.task_status}}</td>
                        <td>{{exercise.archivo[0].originalname}}</td>
                        <td>
                          <v-menu
                
                          bottom
                          origin="center center"
                          transition="scale-transition"
                        
                        >
                        <template v-slot:activator="{ on, attrs }">
                        <b-icon v-bind="attrs"
                        v-on="on" icon="chevron-down" font-scale="1.5" aria-hidden="true">
                        </b-icon></template>
                              <v-list class="fondosubP" >
                              <v-list-item @click="editar(index)">
                              <v-icon style="color:green">mdi-pen</v-icon>
                             <v-list-item-title style="margin-left:20px">Editar</v-list-item-title>
                              </v-list-item>
                      
                              <v-list-item @click="eliminar(exercise._id)">
                                <v-icon style="color:red">mdi-delete</v-icon>
                                  <v-list-item-title style="margin-left:20px">Eliminar</v-list-item-title>
                                </v-list-item>

                                <v-list-item @click="calificar(index)">
                                  <v-icon style="color:blue">mdi-notebook-edit</v-icon>
                                    <v-list-item-title style="margin-left:20px">Calificar</v-list-item-title>
                                  </v-list-item>
                            </v-list>
                          </v-menu>  
                        </td>

                      </tr>
                    </tbody>
                  </table>

                <div class="center">
                <vs-dialog  prevent-close  width="300px" not-center v-model="active3" >
      
                <template #header >
                  <h4 class="not-margin">
                    Editar datos del <b>ejercicio</b>
                  </h4>
                </template>
    
    
                <div class="con-content">
                  <input v-model="title" type="name" style="background-color:#EDE2E2;"  
                         class="form-control input_pass"> <br>
                  <textarea v-model="description" type="name" style="background-color:#EDE2E2;"  
                         class="form-control input_pass"></textarea> <br>
                  <input v-model="date" type="Date" style="background-color:#EDE2E2;"  
                         class="form-control input_pass">
                </div>
    
                <template #footer>
                  <div class="con-footer">
                    <vs-button @click="guardarEdicion()">
                      Guardar Cambios
                    </vs-button>
                    <vs-button @click="active3=false" >
                      Cancelar
                    </vs-button>
                  </div>
                </template>
              </vs-dialog>
            </div>
          </div>
  </v-col>
  </v-row>

  <v-dialog v-if="dialogo" v-model="dialogo" persistent max-width="500">
        
        <v-card :style="colo">
          <v-card-title class="text-h5 justify-center">
            {{mensaje}}
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="black darken-1" text @click="limpiar()"
            style="background-color:#05AFF2;"           >
            OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
                            
          </div>
       
      </div>
     </div>
         
</div> 

<v-dialog   fullscreen hide-overlay transition="dialog-bottom-transition" v-model="activar" >
  
  
  <v-card class="fondosub">
    <v-toolbar
      class="voyencamino"
    >
      <v-btn
        icon
        dark
        @click="activar = false"
        style=" background-color:#E2583E"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <div class="  text-capitalize " style="font-weight: bold;font-size:30px;color:white;">
        <b-icon icon="card-checklist" font-scale="1.5" style="color:white"></b-icon>
            Listado de estudiantes
        </div>
      <v-spacer></v-spacer>
    </v-toolbar>
    <div  class="box-style box-style-l fonsub" style="overflow: scroll">
      <div style="font-weight: bold;color:rgb(6, 90, 187);margin-left:60px">
         <p style="font-size:20px;"> Tipo actividad : {{exercises[poscalificar].task_type }}</p>
         <p style="font-size:20px;"> Titulo  : {{exercises[poscalificar].task_title}}</p>
         <p style="font-size:20px;"> Descripcion  : {{exercises[poscalificar].task_description}}</p>
         <p style="font-size:20px;">
             <v-select
               @change="cambio()"
               :items="cursos"
               v-model="cursoselect"
               item-text="valor"
               :item-value="'index'"
  
/>

        </p>
      </div>
        
      <v-spacer></v-spacer>

      
<div  class="div" >
  <v-row >
  <v-col col="12" sm="12">
    <v-card class="mefui" style="border-radius: 25px;">
    <table class="table table-striped"  >
      <thead>
        <tr class="tr">
          <th scope="col">Nombre</th>
          <th scope="col">Archivo</th>
          <th scope="col">Nota</th>
          <th scope="col">Observacion</th>
        </tr>
      </thead>

      <tbody>
           
              
              <tr  v-for="(estudiantes, k) in notas" :key="k">
                <td >{{estudiantes.people_id.name +' '+estudiantes.people_id.last_name}}</td>
                            
                  <td> <a href="http://www.scielo.org.pe/pdf/hm/v18n2/a05v18n2.pdf" target="_blank" ><b-icon icon="file-earmark-pdf-fill" font-scale="3" style="color:#BC0B0B"></b-icon></a>  </td>
                  <td><v-text-field
                    v-model="estudiantes.nota.calificacion"  
                    step="0.1" min="0" max="5" 
                    style="width:50%; opacity:0.8"
                    background-color="#D4D4D4"
                    type="Number"
                    solo
                    label="Nota"></v-text-field></td>

                  <td><v-textarea
                    v-model="estudiantes.nota.observacion"
                    cols="50" rows="1.5"
                    solo
                    style="border_radius:20px;opacity:0.8"
                    background-color="#D4D4D4"
                    label="Observación"
                  ></v-textarea></td>
                </tr>
              
      </tbody>
    </table></v-card>
  </v-col>
</v-row>
<v-row style="margin-left: 45%;">
  <div>
<v-btn @click="enviarnotas()" style="font-size:20px;background-color:green;margin:40px"
>
    <v-icon left
    large>
      mdi-content-save-check-outline
    </v-icon>
    Guardar
  </v-btn></div>

</v-row></div>
</div>

  </v-card>
  
</v-dialog>

</div>

</template>

<script>
import axios from 'axios'

//import PageTitle from "../../Layout/Components/PageTitle.vue";
  export default {
      components: {
            //  PageTitle
          },
    
      data() {
        return {
          estudiantesCalificar:null,
          exercises: [],
          
          
          
          pruebo:[],
          puto:[],
          asignaturaDocente:null,
          activar:false,
          mensaje:"",
          dialogo: false,
          title: '',
          description: '',
          date: "",
          subtopic_id: null,
          active3: false,
          items: null,
          heading: 'Tareas asignadas',
          icon: 'pe-7s-note2 icon-gradient bg-tempting-azure',
          subheading: 'Listado de las tareas',
          posEditar:0,
          id_edit: "",
          poscalificar: 0,
          cursos : [],
          cursoselect : '',
          notas:[
             {
              nota :{
                 calificacion : 0,
                 observacion : ''
              }
             }
        ]
        }
      },
  
      
    async  mounted(){
        await  axios.get(`http://localhost:3001/exercisesdocente/${this.$store.state.userData._id}`)
        .then( (response)=>  {
           this.exercises = response.data.exercise
           this.notas = JSON.parse(JSON.stringify(this.exercises[0].enviados[0].trabajos))
           console.log("actividad" + JSON.stringify(this.exercises))
            })

    },

      methods: {
        vuelveInicio(){
      this.$router.push('/dashboard/welcome');
    },

    cambio(){
      var vm = this
      this.notas = this.exercises[this.poscalificar].enviados.filter((ele)=>{
       
                return   ele.curso == vm.cursoselect
          })
        
     this.notas =this.notas[0].trabajos
     console.log(this.notas)
    },
    enviarnotas(){

      var paq = new Object();
      paq.id_actividad = this.exercises[this.poscalificar]._id;
      paq.curso = this.cursoselect;
      paq.trabajos = this.notas;
      axios.post('http://localhost:3001/exercisescalificar/',paq)
        .then((response) => {
           console.log(response)
        })

    },
        calificar(index){
          this.poscalificar = index
         this.cursos = []
         for (var p in this.exercises[index].enviados)
         {
          var pq = new Object();
          pq.pos = p
          pq.valor = this.exercises[index].enviados[p].curso
          this.cursos.push(pq)
         }
          this.cursoselect = this.cursos[0].valor


          this.notas = JSON.parse(JSON.stringify(this.exercises[index].enviados[0].trabajos))
          this.activar=true
        },

        editar(index){
          this.active3=true
          this.title=this.exercises[index].title
          this.description=this.exercises[index].description
          this.date=this.exercises[index].date
          this.id_edit=this.exercises[index]._id
          console.log(this.date)
        },
      
      guardarEdicion(){
        console.log(this.date);
        let exercise= {
            "exercises":{
                "title": `${this.title}`,
                "description": `${this.description}`,
                "date": `${this.date}`
            }
        }
        axios.put(`http://localhost:3001/exercises/${this.id_edit}`, exercise)
        .then((response) => {
          console.log(response);
          this.active3 = false
          this.colo="background-color:#8188CE"
          this.dialogo=true
          this.mensaje="La tarea ha sido actualizada"
          let vue = this;
          axios.get('http://localhost:3001/exercises').then(
            function(response){
                vue.exercises = response.data;
                console.log(vue.exercises)
            }
        )
        })
        
      },

      eliminar(i){
        axios.delete(`http://localhost:3001/exercises/${i}`)
        .then((response) => {
            if(response.data.status == 200){
                this.exercises.splice(i,1);
            }
            this.active3 = false
            this.colo="background-color: #E2583E"
            this.dialogo=true
            this.mensaje="La tarea ha sido eliminada"
            axios.get('http://localhost:3001/exercises')
        .then( (response)=> {
              this.puto= response.data
              this.exercises=[]
                  for (let i = 0; i < this.puto.length; i++) {
                   if(this.puto[i].task_asignature[0]._id._id==this.asignaturaDocente._id._id){
                   this.exercises.push(this.puto[i]);
                   }
                    
                  }
            }
        )
        })
      },
      limpiar(){
        this.dialogo = false;
      }
    }
  }
    </script>
    
    <style scoped>
     .container{
      height: auto;
      max-width: auto;
     }
  
  
     
  .con-footer{
   display: flex;
   align-items: center;
   justify-content: flex-end}
   .vs-button{
     margin: 0px}
     .vs-button__content{
       padding: 10px 30px}
     .vs-button{
       margin-left: 10px}
  .not-margin{
   margin :0px;
   font-weight :normal;
   padding :10px;
   padding-bottom: 0px}
  .con-content{
   width: 100%}
   p{
     font-size: .8rem;
     padding: 0px 10px}
   .vs-checkbox-label{
     font-size :.8rem}
   .vs-input-parent{
     width: 100%}
   .vs-input-content{
     margin: 10px 0px;
     width: calc(100%)}
     .vs-input{
       width: 100%}
  .footer-dialog{
   display: flex;
   align-items :center;
   justify-content :center;
   flex-direction :column;
   width :calc(100%)}
   .new{
     margin: 0px;
     margin-top :20px;
     padding: 0px;
     font-size: .7rem}
   .vs-button{
     margin :0px}
     .dialogo{
      width: 100%;
      height: 100%;
     
  }
 .div{
  margin-top: 30px;
    margin-left: 40px;
    margin-right: 40px;  
 }
 .fondosub{
  background-image:url("../../assets/disenomio.png");
  background-repeat: no-repeat;
  background-size: cover;

margin:0; 
}
.fonsub{
  background-image:url("../../assets/fondo.png");
  background-repeat: no-repeat;
  background-size: cover;
  width: 85%;
  max-height: 550px;
  top:30px;
  margin: 0 auto;
 
  box-shadow:
       inset 0 -3em 3em rgba(0,0,0,0.1),
             0 0  0 2px rgb(255,255,255),
             0.3em 0.3em 1em rgba(0,0,0,0.3)
}
  .mefui{
    background-image:url("../../assets/fondo.png");
    background-repeat: no-repeat;
    background-size: cover;
  margin:0; 
  
  }
  .voyencamino{
    background-image:url("../../assets/Tulbar.png");
    background-repeat: no-repeat;
    background-size: cover;
  margin:0;
  }
  .tr{
    background-color:#05aff256;
  }
  .fonsub::-webkit-scrollbar {
    border-radius: 50px;
   
    width: 13px;
}

.fonsub::-webkit-scrollbar:hover {
    background-color: gray;
}

.fonsub::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 255, 0.459);
    border-radius: 20px;
    border: 3px solid rgba(120, 198, 201, 0.87);
  }
    </style>
    
