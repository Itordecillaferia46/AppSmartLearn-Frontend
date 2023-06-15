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
      <div style="margin-left:200px">
      <v-icon 
      color="blue"
      size="300%"
      left="true"
      >
      mdi-book-account</v-icon>
    </div>
     <h1>{{asignatura._id.name}}</h1>
      
    <v-avatar
          color="red"
          size="30"
          style="margin-top:10px; position:right;margin-right:200px"
        >
          <button @click="vuelveInicio()" class="white--text text-h5">X</button>
        </v-avatar>
  
</v-bottom-navigation>
        
            <v-row >
              <v-col cols="12" sm="8">
              <v-card class="elevation-12 mt-10" color="transparent">
                <v-row style="max-width: 500px; margin-left: 20px; padding-top: 40px;">
                  <v-text-field
                  v-model="nombre"
                    dense
                    rounded
                    background-color="#f6f2f2" 
                    label="Nombre Del Tema"
                    outlined
                  ></v-text-field>
                  <v-select
                    :error-messages="alertTareaCurse"
                    filled
                  chips
                  multiple
                    dense
                    rounded
                    background-color="#f6f2f2"
                   style="width: 50px;margin-left:20px"
                   :items="asignatura.curso"
                    :item-value="'_id'"
                    v-model="Cursos"
                    item-text="nomenclature"
                    label="Curso"
                    outlined
                    
                  ></v-select>
                </v-row>
                <v-row style="max-width: 500px; margin-left: 20px; ">
                    <v-textarea
                    v-model="objetivos"
                    height="110px"
                        class="estilotextarea"
                        name="input-7-1"
                        label="Objetivos"
                        rounded
                        dense
                        background-color="#f6f2f2"
                        auto-grow
                        outlined
                        >
                    </v-textarea>
                 </v-row>
                <v-row style="max-width: 500px; margin-left: 20px; ">
                  <v-textarea
                  v-model="descripcion"
                  height="100px"
                      class="estilotextarea"
                      name="input-7-1"
                      label="Descripción"
                      rounded
                      dense
                      background-color="#f6f2f2"
                      auto-grow
                      outlined
                      >
                  </v-textarea>
               </v-row>
               <v-row style=" margin-left: 10px;" >
                <label class="leta">Agregar Videos</label>
              </v-row>
               <v-row style="max-width: 500px; margin-left: 25px; ">
                <div class="input-group mb-2"  >
                  <v-text-field
                  v-model="video"
                type="url"
                placeholder="https://example.com"
                  dense
                  rounded
                  background-color="#f6f2f2" 
                  label="Enlace De Video"
                  prepend-icon="mdi-file-link-outline"
                  outlined
                ></v-text-field>
                  <button style="margin:5px" @click="agregarVideo()"  class="input-group-append" >
                    <span style="height: 60%; color:green;background-color:none;" ><b-icon  icon="file-earmark-play" font-scale="2.5"></b-icon></span>
                  </button>
                </div>
                
               
              </v-row>
              <v-row v-for="(video,index) in videos" :key="index" style="max-width: 500px; margin-left: 20px; ">
               <ul style="font-weight: bold;color:blue;text-decoration: underline">
                <b-icon color="red"  icon="play-btn-fill" font-scale="1"></b-icon> {{video.url}}
               </ul>
             </v-row>

                  
              </v-card>
              
            </v-col>
            <v-col cols="12" sm="4">
              <v-card class="elevation-12 mt-10" color="transparent" style="min-width: 320px;">
                <v-row style=" margin-left: 5px;  padding-top: 10px;" >
                    <label class="leta">Agregar Recursos</label>
                  </v-row>
                <v-row style="width: 290px; margin-left: 20px; margin-right: 60px; " >
                  <div class="input-group mb-2"  >
                  <v-file-input
                  style="width: 200px"
                  accept=".pdf, .pptx"
                  v-model="pdf"
                  outlined
                  dense
                  rounded
                  background-color="#f6f2f2" 
                  label="Agregar PDF"
                  variant="filled"
                ></v-file-input>
                    <button v-if="boton===true" style="margin-left:25px" @click="agregarPdf()" class="input-group-append" >
                      <span style="height: 60%; color:green;background-color:none;" ><b-icon    icon="file-earmark-arrow-up" font-scale="2.5"></b-icon></span>
                    </button>
                  </div>
                 
                  </v-row>
                  <v-row v-for="(pdf,index) in pdfs" :key="index"  style="max-width: 500px; margin-left: 20px; ">
                    <ul style="font-weight: bold;color:blue;text-decoration: underline">
                     <b-icon color="red"  icon="file-earmark-pdf-fill" font-scale="1"></b-icon> {{pdf.nombre}}
                    </ul>
                  </v-row>
                  <v-row style=" margin-left: 5x;  padding-top: 10px;" >
                    <label class="leta">Agregar Ejercicios H5P</label>
                  </v-row>
                  <v-row style="width: 250px; margin-left: 20px; margin-right: 60px; " >
                    <div class="input-group mb-2"  >
                    <v-file-input
                    style="width: 100px"
                    v-model="h5p"
                    accept=".html"
                    outlined
                    dense
                    rounded
                    background-color="#f6f2f2" 
                    label="Agregar H5P"
                    prepend-icon="mdi-folder-file-outline"
                    variant="filled"
                  ></v-file-input>
                  <button v-if="botonh5p===true" style="margin-left:25px" @click="agregarH5P()" class="input-group-append" >
                      <span style="height: 60%; color:green;background-color:none;" ><b-icon  icon="gear" font-scale="2.5"></b-icon></span>
                    </button>
                  </div>
                  </v-row>
                  <v-row v-for="(h5p,index) in h5ps" :key="index" style="max-width: 500px; margin-left: 20px; ">
                    <ul style="font-weight: bold;color:blue;text-decoration: underline">
                     <b-icon color="red"  icon="file-earmark-pdf-fill" font-scale="1"></b-icon> {{h5p.nombre}}
                    </ul>
                  </v-row>
                <v-row>
                      <vs-button @click="crearMicroClase()" style="margin-left:40%">
                         GUARDAR
                        </vs-button>
                        
                  </v-row>
                  <v-snackbar
                  v-model="hasSaved"
                  :timeout="5000"
                  :color="color"
                >
                  {{msg}}
                  
                </v-snackbar>
                  <v-snackbar
        v-model="hasSa"
        :timeout="5000"
        absolute
        bottom
        left
        :color="col"
      >
        {{mensaje}}
        
      </v-snackbar>
                          <br>
              </v-card>
            </v-col>
            </v-row>
           <!-- <div>
                    <h2 class="text-center mb-3">Vue Get Full Date and Time Example</h2>
                    <ul class="list-group">
                      <li class="list-group-item" v-show="timestamp"><strong>Timestamp:</strong> {{ timestamp }}</li>
                      <li class="list-group-item" v-show="date1"><strong>Date:</strong> {{ date1 }}</li>
                      <li class="list-group-item" v-show="time"><strong>Time:</strong> {{ time }}</li>
                      <li class="list-group-item" v-show="year"><strong>Current Year:</strong> {{ year }}</li>
                      <li class="list-group-item" v-show="fulldatetime"><strong>Full Date:</strong> {{ fulldatetime }}</li>
                    </ul>
                </div>  -->
               
        </v-row>
        
        
     <!-- 
  <v-snackbar
      v-model="hasSaved"
      :timeout="5000"
      absolute
      bottom
      left
      color="green"
    >
      {{msg}}
      
    </v-snackbar>
      <v-dialog v-model="hasSaved" persistent max-width="500">
        
        <v-card :style="colo">
          <v-card-title class="text-h5 justify-center">
            {{msg}}
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="black darken-1" text @click="limpiar()"
                    style=" background-color:#05AFF2;"             >
            OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>-->
   
     
    </v-container>
    
  </template>
<script>
import axios from 'axios'
export default{
data() {
  return {
    boton:true,
    botonh5p:true,
    color:null,
    col:null,
    hasSaved:false,
    hasSa:false,
    msg:'',
    mensaje:'',
    asignatura:[],
    Cursos:"",
    nombre:'',
    objetivos:'',
    descripcion:'',
    video:'',
    videos:[],
    pdf:null,
    pdfs:[],
    h5p:null,
    h5ps:[],
  }
},
mounted() {
  this.asignatura= this.$store.state.asignaturasDocente
},
methods: { 
  vuelveInicio(){
      this.$router.push('/dashboard/welcome');
    },
  limpiar(){
    this.Cursos="";
    this.nombre='';
    this.objetivos='';
    this.descripcion='';
    this.video='';
    this.videos=[];
    this.pdf=null;
    this.pdfs=[];
    this.h5p=null;
    this.h5ps=[];
  },
  crearMicroClase(){
   if(this.nombre!=''){
     if(this.Cursos!=''){
      if(this.objetivos!=''){
        if(this.descripcion!=''){
          if(this.videos.length>0){
            if(this.pdfs.length>0){
              //if(this.h5p!=null){
      let micro={
        
        "name":this.nombre,
        "cursos":this.Cursos,
        "objetivos":this.objetivos,
        "descripcion":this.descripcion,
        "videos":this.videos,
        "recursos":this.pdfs,
        "actividadH5p":this.h5ps,
      }

      let paquete ={
        "id_area" : this.asignatura._id._id,
        "cursos":this.Cursos,
        microclase : micro 

      }
      axios.post('http://localhost:3001/microClase',paquete)
     .then((response) => {
        if(response.data.status==200){
          this.col='green'
      this.hasSa=true;
   this.mensaje='Micro clase creada con exito';
   this.limpiar();
        }
     }).catch((error) => {
     console.log(error)
      this.col='red'
      this.hasSa=true;
   this.mensaje="Ocurrio Un Error Vuelve A Intentar"
   })
    /* }else{
    this.col='red'
      this.hasSa=true;
   this.mensaje='Debe ingresar un Archivo H5P'
   }*/
     }else{
    this.col='red'
      this.hasSa=true;
   this.mensaje='Debe ingresar un recurso pdf'
   }
     }else{
    this.col='red'
      this.hasSa=true;
   this.mensaje='Debe agregar un video'
   }
     }else{
    this.col='red'
      this.hasSa=true;
   this.mensaje='Debe ingresar descripción'
   }
     }else{
    this.col='red'
      this.hasSa=true;
   this.mensaje='Debe Ingresar los objetivos'
   }
     }else{
    this.col='red'
      this.hasSa=true;
   this.mensaje='Debe delecionar un curso'
   }
   }else{
    this.col='red'
      this.hasSa=true;
   this.mensaje='Debe ingresar el Nombre del tema'
   }
  },
  agregarPdf(){
    if(this.pdf!=null){
      this.boton=false
      const formData = new FormData();
       formData.append('file',this.pdf)   
      axios.post('http://localhost:3001/microClasepdf',formData)
      .then((response) => {
        let pd = new Object();
       pd.nombre=response.data.nU.originalname
       pd.pdf=response.data.nU.location
    this.pdfs.push(pd);
    this.pdf=null;
    this.col='green'
   this.hasSa=true;
   this.mensaje='El archivo se agrego con exito'
   this.boton=true
       })
    }else{
      this.col='red'
      this.hasSa=true;
   this.mensaje='Debe selecionar PDF o PPTX'
    }
  },
  agregarVideo(){
    if(this.video!=''){
    let vide = new Object();
    vide.url=this.video;
    this.videos.push(vide);
    this.video='';
    this.color='green'
   this.hasSaved=true;
   this.msg='El video se agrego con exito'
    }else{
      this.color='red'
      this.hasSaved=true;
   this.msg='Debe ingresar enlace de video'
    }
  },
  agregarH5P(){
    if(this.h5p!=null){
      this.botonh5p=false
      const formData = new FormData();
       formData.append('file',this.h5p)   
      axios.post('http://localhost:3001/microclaseS3H5p',formData)
      .then((response) => {
        console.log(response)
let h = new Object();
    h.nombre=response.data.nombre
    h.h5p=response.data.nU
    this.h5ps.push(h);
    this.h5p=null;
    this.col='green'
   this.hasSa=true;
   this.mensaje='El archivo H5P se agregó con exito'
   this.botonh5p=true
      })
  /*  let h = new Object();
    h.h5p=this.h5p;
    this.h5ps.push(h);
    this.h5p=null;
    this.col='green'
   this.hasSa=true;
   this.mensaje='El archivo H5P se agregó con exito'*/
    }else{
      this.col='red'
      this.hasSa=true;
   this.mensaje='Debe selecionar un archivo con extensión .h5p'
    }
  },
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
    height: 10px;
  }

   .estado-tarea__buttons{
    background-color: #f6f2f2;
    border-radius: 20px;
    border: 1px solid #C3C3C5;
    height: auto;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: auto;
    margin-right: auto;
  }

  .estado-tarea .estado-tarea__buttons:hover{
    border: 1px solid black;
  }


  .adjuntar{
    background-color: #f6f2f2;
    border-radius: 20px;
    border: 1px solid #C3C3C5;
    width: 300px;
    
    
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
    margin-right: 60%;
    margin-top: auto;
  }
  .leta{
    margin-left: 30px;
    font-size: 25px;
    font-weight: 800;
    color: #0F5C8c;
    display: inline;
    
  }
  .estilocompleto{
    margin-left: 50px;
    margin-right: 50px;
    margin-block: 10px;
    
  }
  
  </style>