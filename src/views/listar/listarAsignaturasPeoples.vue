<template>
   <div>
    
    <v-avatar
            color="red"
            size="30"
            style="float:right"
          >
            <button @click="vuelveInicio()" class="white--text text-h5">X</button>
          </v-avatar>
   
   
    <div class="div" v-if="infoUsuario.rol=='Docente'">
    <div class="fondosub" v-for="(dato,index) in infoUsuario.asignatures" :key="index">
                <v-menu
                
      bottom
      origin="center center"
      transition="scale-transition"
    
    >
      <template v-slot:activator="{ on, attrs }">
        <label
          v-bind="attrs"
          v-on="on"
        >
       
            {{dato._id.name}}
     
      </label>
      </template>

      <v-list class="fondosubP" >
        <v-list-item @click="crearActividad(index)">
        <v-icon>mdi-notebook-edit</v-icon>
       <v-list-item-title style="margin-left:20px">Crear Actividad</v-list-item-title>
        </v-list-item>

        <v-list-item @click="listarActividad(index)">
          <v-icon>mdi-clipboard-list-outline</v-icon>
            <v-list-item-title style="margin-left:20px">Listar Actividades</v-list-item-title>
          </v-list-item>

          <v-list-item @click="CrearMicro(index)">
            <v-icon>mdi-human-male-board-poll</v-icon>
              <v-list-item-title style="margin-left:20px">Crear Micro Clase</v-list-item-title>
            </v-list-item>
      </v-list>
    </v-menu>       
</div>
    </div>


    <div class="div" v-if="infoUsuario.rol=='Estudiante'">

      <v-row style=" width:120%; " >
        <v-col cols="12" sm="3"  class="fondosub" v-for="(i, index) in pruebamil" :key="index">
          <v-badge
          color="pink"
          :content="i.Actividades.length"
        >
        <v-menu
                
        bottom
        origin="center center"
        transition="scale-transition"
      
      >
        <template v-slot:activator="{ on, attrs }">
          <label
            v-bind="attrs"
            v-on="on"
          >
        {{i._id.name}} 
      </label>
    </template>

    <v-list class="fondosubP" >
      <v-list-item @click="Cambia(index)" >
      <v-icon>mdi-notebook-edit</v-icon>
     <v-list-item-title style="margin-left:20px">Actividades</v-list-item-title>
      </v-list-item>

      <v-list-item @click="listarclases(i._id._id)">
        <v-icon>mdi-clipboard-list-outline</v-icon>
          <v-list-item-title style="margin-left:20px">Micro Clases</v-list-item-title>
        </v-list-item>

       
    </v-list>
  </v-menu>
        </v-badge>
      </v-col>
      </v-row>




            <vs-dialog blur prevent-close  v-model="active" class="dialogo">
              <v-row class="  text-capitalize " style="font-weight: bold;font-size:30px;color:rgb(6, 90, 187);">
                      
                <v-col cols="12" sm="5" style="float:left"><b-icon icon="bell-fill" font-scale="1.5" style="color:rgb(6, 90, 187);"></b-icon>  Actividades</v-col>
                <v-col cols="12" sm="2" >
                  
                <v-select
                style="margin-top:-10px;"
                :items="items"
                v-model="search"
                label="filtro"
                single-line
              ></v-select> 
            </v-col>
           <v-col cols="12" sm="3"  style="color:rgb(31, 29, 29);font-size:25px;font-weight: normal;">
              Pendientes: {{searching.length}}
            </v-col>
            <v-col cols="12" sm="2"  style="color:rgb(31, 29, 29);font-size:25px;font-weight: normal;">
              <v-tooltip bottom color="green" >
                <template v-slot:activator="{ on, attrs }">
                  <button @click="activador=!activador">
                   <img  v-bind="attrs"
                   v-on="on" src="../../assets/Icono.png" alt="icono" style="max-height:35px;max-width:40px;">
                  </button>
                  </template>
                  <span>Convección de calores</span>
                </v-tooltip>
            </v-col>
          </v-row>
                      <hr style=" height: 3px;"  width="100%" color="black">
                <div style="max-height:350px; overflow: scroll;" class="yerlis">
                <div v-for="(dato, index) in searching" :key="index">
                 <div style="background-color:#D4D4D4;height:115px;padding:4px;border-radius:10px;margin:10px">
                   
                    <div class="pruebaColor" :style="{'background-color':dato.color}"></div>
                  <div style="float:left">
                   
                    <h5 style="font-weight: bold;">{{dato.task_title}}</h5>
                    <h6>Disponible desde: {{dato.deliveryDateInicial | moment('YYYY-MM-DD HH:mm:ss')}}</h6>
                    <h6>Tipo actividad: {{dato.tipo}}</h6>

                </div>
                <div style="height:80px;float:right; width: 70px; display: flex;justify-content: center;align-items: center;">
                   <button> <b-icon v-if="dato.tiempoRestante>0" @click="cambiarEnvioTarea(index)" style="color:green;" icon="telegram" font-scale="3"></b-icon></button>
                   <button> <b-icon v-if="dato.tiempoRestante<=0"  style="color:gray;" icon="telegram" font-scale="3"></b-icon></button>
                  </div>
                    <div style="float:right">
                        <h6 align="right">Vence</h6>
                    <h5 align="right" style="font-weight: bold;">{{dato.deliveryDateFinal.substring(0, 10)}}</h5>
                    <h6 align="right">Dias para Actividad: {{dato.tiempoDias}} dias</h6>
                    <h6 align="right">Dias Restantes: {{dato.tiempoRestante}} dias</h6>
                    
                    </div>
                   
                 </div>
                 
                </div>
              </div>
            </vs-dialog>
            <vs-dialog blur prevent-close  v-model="activado" class="dialogo">
              <v-row class="  text-capitalize " style="font-weight: bold;font-size:30px;color:rgb(6, 90, 187);">
                      
                <v-col cols="12" sm="8" style="float:left"><b-icon icon="bell-fill" font-scale="1.5" style="color:rgb(6, 90, 187);"></b-icon>  Micro Clases</v-col>
               
           <v-col cols="12" sm="3"  style="color:rgb(31, 29, 29);font-size:25px;font-weight: normal;">
            Pendientes: {{ cuentaCantidad}}
            </v-col>
            
          </v-row>
                      <hr style=" height: 3px;"  width="100%" color="black">
                <div style="min-height:350px; overflow: scroll;" class="yerlis">
                <div  v-for="(cla,index) in clasesEstudiante" :key="index">
                 <div v-for="(claEs,i) in cla" :key="i" style="background-color:#D4D4D4;padding:4px;border-radius:10px;margin:10px">
                  
                   <v-row>
                   <v-col cols="4" sm="4" >
                    <h2>Tema: </h2>
                    <h4>{{claEs.name}}</h4>
                   </v-col>
                   <v-col cols="6" sm="6" > 
                    <h2>Descripción</h2>
                     <h4 >
                        {{claEs.descripcion}}
                     </h4></v-col>
                     <v-col cols="2" sm="2" > 
                      <button @click="irClase(i)" style="margin-top: 40px">
                         <b-icon   style="color:green;" icon="book-half" font-scale="3"></b-icon>
                        </button> </v-col></v-row>
                
              
                   
                   
                 </div>
                 
                </div>
              </div>
            </vs-dialog>
    </div>

    <vs-dialog blur  v-model="activador">
      <template #header>
        <h4 class="not-margin" style="font-weight: bold;font-size:30px;color:rgb(6, 90, 187);">
          <b>Significado de los colores</b>
        </h4>
      </template>
      <hr style=" height: 3px;margin-top:-15px"  width="100%" color="black">

      <v-row>
        <v-col cols="12" sm="4">
        <div class="ConveColor" style="background-color:white;border:solid black 1px;"></div>
        <div style="float:left">        
          <h5 style="font-weight: bold;">Programadas</h5>
          <h6>Color blanco</h6>
      </div>
    </v-col>
    <v-col cols="12" sm="4">
      <div class="ConveColor" style="background-color:green;margin-left:50px"></div>
      <div style="float:left">        
        <h5 style="font-weight: bold;">Enviadas</h5>
        <h6>Color verde</h6>
    </div>
    </v-col>
    <v-col cols="12" sm="4">
    <div class="ConveColor" style="background-color:gray;margin-left:50px"></div>
    <div style="float:left">        
      <h5 style="font-weight: bold;">Vencidas</h5>
      <h6>Color gris</h6>
  </div>
</v-col>
</v-row>

      <v-row style="margin-top:60px;">
        
        <div class="ConveColor2" style="background-color:red;margin-left:10px"></div>
        <div style="float:left">        
          <h5 style="font-weight: bold;">Activas</h5>
          <h6>Falta 1 dia para vencer</h6>
          <h6>Color rojo</h6>
      </div>

      <div class="ConveColor2" style="background-color:orange;margin-left:10px"></div>
      <div style="float:left">        
        <h5 style="font-weight: bold;">Activas</h5>
        <h6>Faltan 2 o 3 dias para vencer</h6>
        <h6>Color naranja</h6>
    </div>
    <div class="ConveColor2" style="background-color:yellow;margin-left:10px;"></div>
    <div style="float:left">        
      <h5 style="font-weight: bold;">Activas</h5>
      <h6>Faltan 4 o mas dias para vencer</h6>
      <h6>Color Amarrilla</h6>
  </div>
  <div class="ConveColor2" ></div>
</v-row>
    </vs-dialog>


</div>
    </template>
    
   <script>
   import axios from 'axios'
   export default {
    data() {
        return {
          cuentaCantidad:null,
          asignaturamicro:null,
          clasesEstudiante:[],
          clases:[],
          activado:false,
          cursomicro:null,
          contador:0,
          pruebamil:[],
          infoUsuario:null,
          items: ['Todos','Activas', 'Enviadas','Calificadas', 'Programadas','Vencidas'],
          search:'',
          filtro:'',
          ejercicios:[],
          ejercicioMostar:[],
          ejerciciosEstudiante:[],
            active: false,
            activador: false,
        curso:null,
        
        mycolor: '#'
        }
    },
   
    async mounted() {
      this.infoUsuario= this.$store.state.userData
      console.log(this.infoUsuario)
      setInterval(this.vaciar, 10);
      
       if(this.infoUsuario.rol=='Estudiante'){
         this.pruebamil = this.infoUsuario.asignatures
         console.log(this.pruebamil)
         
       /*  for (let i = 0; i < this.pruebamil.length; i++) {
          for (let j = 0; j < this.pruebamil[i].Actividades.length; j++) {
            if(this.pruebamil[i].Actividades[j]._id_state==2){
              this.contador++
            }
          }
         }
        
         // console.log(this.$store.state.userData._id)
      /* await axios.get(`http://localhost:3001/peoples/${this.$store.state.userData._id}`)
       .then((response) => {
         console.log("aqui")
          this.$store.state.userData = response.data.People;
          this.infoUsuario= this.$store.state.userData
          this.pruebamil = this.infoUsuario.asignatures
          console.log(this.pruebamil)

       })*/

     
       await axios.get('http://localhost:3001/areas')
       .then((response) => {
       this.curso=response.data
         })
         const curso ={idCurso:this.$store.state.userData.courestu._id}
   this.cursomicro=curso
   await axios.post('http://localhost:3001/asignaturasMicroClase',curso)
       .then((response) => {
        this.clases=response.data
         
         })
          }
    },
    computed: {
      searching () {
       this.pruebo_filtro();
        if (this.filtro=='Todos') return this.ejercicioMostar

        const search = this.filtro.toLowerCase()

        return this.ejercicioMostar.filter(item => {
          const text = item.estado.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
    },
    methods: {
      tococontar(){
        this.cuentaCantidad= this.clasesEstudiante[0].length
      },
      listarclases(p){
        this.clasesEstudiante=[]
        
        this.activado=true
        for (let index = 0; index < this.clases.length; index++) {
          if(this.clases[index].id_area._id==p){
            for (let i = 0; i < this.clases[index].microclase.length; i++) {
            if(this.clases[index].microclase[i].curso._id==this.cursomicro.idCurso){
              this.asignaturamicro=this.clases[index].id_area.name;
                this.clasesEstudiante.push(this.clases[index].microclase[i].clases)
                
            }
            
        }
          }
          
        }
        this.tococontar()
    },
    irClase(i){
      this.clasesEstudiante[0][i].asignatura=this.asignaturamicro
          this.$store.commit("setClaseEstudiante", this.clasesEstudiante[0][i]);
       this.$router.push('/dashboard/welcome/MicroClaseEstu');
        
       
       // 
    },
      pruebo_filtro(){
      this.filtro=this.search
      if(this.filtro=="Activas"){
        this.filtro='1';
       }
       if(this.filtro=="Enviadas"){
        this.filtro='2';
       }
       if(this.filtro=="Programadas"){
        this.filtro='3';
       }
       if(this.filtro=="Vencidas"){
        this.filtro='4';
       }
       if(this.filtro=="Calificadas"){
        this.filtro='5';
       }
    },
    
      vuelveInicio(){     
      this.$router.push('/dashboard/welcome');
    },
      vaciar(){
if(this.active==false){
  this.ejercicioMostar=[];
}
      },
      cambiarEnvioTarea(index){
        
        this.$store.state.posacti = index
        this.$store.commit("setTareaEstudiante", this.ejercicioMostar[index]);
        this.$router.push('/dashboard/welcome/actividadEstudiante');
      },
      
      ejerEstu(){
        for (let i = 0; i < this.ejercicios.length; i++) {
    for (let j = 0; j < this.ejercicios[i].topic.length; j++) {
        if(this.ejercicios[i].topic[j]==this.infoUsuario.course[0].nomenclature){
          this.ejerciciosEstudiante.push(this.ejercicios[i])
      }
      
    }
        }
      },
      crearActividad(p){
      this.$store.commit("setAsignaturasDocente", this.infoUsuario.asignatures[p]);
        this.$router.push('/dashboard/creaActividades');

      },
      CrearMicro(p){
        this.$store.commit("setAsignaturasDocente", this.infoUsuario.asignatures[p]);
       this.$router.push('/dashboard/crearMicroClase');
      },
      listarActividad(j){
       // console.log(this.infoUsuario.asignatures[j])
       this.$store.commit("setAsignaturasDocente", this.infoUsuario.asignatures[j]);
       this.$router.push('/dashboard/listaEjercicio');

      },
        prueba(){
          for (let i = 0; i < this.curso.length; i++) {
            for (let j = 0; j < this.curso[i].courses.length; j++) {
            if(this.curso[i].courses[j]==this.infoUsuario.course[0].grade){
                this.pruebamil.push(this.curso[i])
            }
            
          }
          }
        },

        generator(){
        this.mycolor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        
      },
      Cambia(index){
        this.generator()
        console.log("aqui")
        this.$store.state.posasig = index
        var acti = this.pruebamil[index].Actividades;
        for (var act of acti)
         {
          var obj = new Object();
          obj._id_actividad=act._id_actividad._id
          obj.task_title = act._id_actividad.task_title;
          obj.descripcion= act._id_actividad.task_description;
          obj.nombre_asignatura = this.pruebamil[index]._id;
          obj.deliveryDateInicial = act._id_actividad.deliveryDateInicial;
          obj.deliveryDateFinal = act._id_actividad.deliveryDateFinal;
          obj.tiempoDias = act.dia.dias;
          obj.tiempoRestante = act.dia.avan;
          obj.color = act.dia.color;
          obj.tipo = act._id_actividad.task_type;
          obj.estado = act._id_state;
          obj.archivo = act._id_actividad.archivo;
          this.ejercicioMostar.push(obj)

         }
        
      
        this.active=true;
      }
    },
   }
   </script>
    
    <style scoped>
    .v-tooltip__content {
      border-radius: 30px;
      opacity: 1 !important;
    }
    ul{
        display: flex;

    }
    
    .fondosub{
      float:left;
    background-image:url("../../assets/CARD.png");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 24px;
    font-weight: 700;
    width: 250px; 
    height: 150px;
    margin: 6px;
    transition: all 0.3s ease; 
    text-decoration: underline;
  }
  .fondosubP{
   border-radius: 20px;
  }
  .fondosub:hover{
      cursor: pointer;
      width: 300px; 
      height: 200px;
     
 }

    .div{
        list-style-type: none;
        
    }
    
.dialogo{
    width: 100%;
    height: 100%;
   
}

.yerlis::-webkit-scrollbar {
    
    width: 12px;               /* width of the entire scrollbar */
  }
  
  
  
  .yerlis::-webkit-scrollbar-thumb {
    background-color: gray;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid gray;  /* creates padding around scroll thumb */
  }
  .pruebaColor{
    margin-right:10px;
    height:110px;float:left;
     width: 20px;
       border-radius:20px;
  }
  .ConveColor{
    margin-right:10px;
    height:60px;
    float:left;
     width: 20px;
       border-radius:20px;
  }
  .ConveColor2{
    margin-right:10px;
    height:80px;
    float:left;
     width: 20px;
       border-radius:20px;
  }
  
</style>