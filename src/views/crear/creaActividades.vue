<template>
  <v-container class="container">

    <v-row class="estilocompleto">
      <!--<pre>{{$data}}</pre>-->
      <v-bottom-navigation :value="value" color="teal" height="13%" background-color="#f6f2f2"
        style="border-radius: 12px;  margin-right: 80px; margin-bottom: -2.6%; width: 960px; padding-right: 120px; margin-left: -10px;">
        <div style=" margin-top:1.5%; margin-right:5px; margin-left: -250px;">
          <v-icon color="blue" size="300%" left="true">
            mdi-clipboard-check-multiple-outline</v-icon>
        </div>
        <h1>Tarea</h1>

        <v-avatar color="red" size="30" style="float:right;margin-right:-350px;margin-left:150px;margin-top:10px; ">
          <button @click="vuelveInicio()" class="white--text text-h5">X</button>
        </v-avatar>

      </v-bottom-navigation>

      <v-row>
        <v-col cols="12" sm="8">
          <v-card class="elevation-12 mt-10" color="transparent">
            <v-row style="width: 200px; margin-left: 20px; padding-top: 40px;">
              <v-select :error-messages="alertTareaType" dense rounded background-color="#f6f2f2" :items="tareasType"
                label="Tipo de tarea" outlined v-model="tareaType"></v-select>

            </v-row>
            <v-row style="width: 500px; margin-left: 20px;">
              <v-text-field :error-messages="alertTareaTitulo" dense rounded background-color="#f6f2f2" label="Titulo"
                outlined v-model="tareaTitle"></v-text-field>
            </v-row>
            <v-row style="width: 500px; margin-left: 20px; ">
              <v-textarea :error-messages="alertTareaDescription" class="estilotextarea" name="input-7-1"
                label="Descripción" rounded dense background-color="#f6f2f2" auto-grow outlined
                v-model="tareaDescription">
              </v-textarea>
            </v-row>
            <v-row style="width: 600px; margin-left: 20px;">


              <form @submit.prevent class="adjuntar" enctype="multipart/form-data">

                <v-file-input :error-messages="alertTareaArchivo" :success-messages="alertTareaArchivoAWS" show-size
                  v-model="archive" label="Agregar archivo">
                </v-file-input>

                <!--  <input type="file" ref="file"
                    @change="VerificarArchivo()"/>
                  -->

              </form>
              <v-text-field background-color="#D4D4D4"
                style=" margin-left:20px; margin-right: 20px; font-weight: bold; width: 120px;" v-model="tareaState"
                label="Estado de la tarea" readonly outlined dense color="blue" autocomplete="false" class="mt-4" />
            </v-row>
            <v-row style="width: 250px; margin-left: 20px;">






            </v-row>
            <v-row style="width: 500px; margin-left: 20px; margin-top: 20px;">
              <v-alert prominent type="success" v-model="dialogo">
                <v-row align="center" style="width: 500px; height: 50px; ">
                  <v-col class="grow">
                    Registro exitoso
                  </v-col>
                  <v-col class="shrink">
                    <v-btn @click="limpiar()">Ok</v-btn>
                  </v-col>
                </v-row>
              </v-alert>
            </v-row>

          </v-card>

        </v-col>
        <v-col cols="12" sm="3">
          <v-card class="elevation-12 mt-10" color="transparent">
            <v-row style="width: 170px; margin-left: 20px; margin-right: 60px; padding-top: 40px;">
              <h5>Para</h5>
              <v-text-field background-color="#D4D4D4" style=" margin:0px; font-weight: bold; width: 100%;"
                v-model="TareaItemsAsignature" label="Asignatura" readonly outlined dense color="blue"
                autocomplete="false" class="mt-4" />
            </v-row>
            <v-row style="width: 170px; margin-left: 20px; margin-right: 60px;">
              <v-select :error-messages="alertTareaCurse" filled chips multiple dense rounded background-color="#f6f2f2"
                :items="asignatura.curso" :item-value="'_id'" item-text="nomenclature" label="Curso" outlined
                v-model="TareaItemsCurse"></v-select>
            </v-row>


            <!-- <v-row style="width: 90px; margin-left: 20px;">
                  <h5>Nota</h5>
                  <v-text-field
                  type="number"  
                  dense
                    rounded
                    background-color="#f6f2f2"
                    outlined
                    v-model="note"
                  ></v-text-field>
                </v-row>-->


            <v-row style="width: 190px; margin-left: 20px; margin-right: 40px;">
              <h5>Fecha de inicio</h5>

              <v-text-field :error-messages="alertFechaInicio" style="border-radius: 18px;" background-color="#f6f2f2"
                persistent-placeholder outlined dense color="blue" type="Date" disable v-model="tareaDateinicial" />
              <!--<v-text-field
                    style="border-radius: 18px; margin-top: -13%;"
                    background-color="#f6f2f2"  
                    persistent-placeholder
                    outlined
                    dense
                    color="blue"
                    autocomplete="false"
                    value="23:59"
                    type="time"
                    v-model="tareaHour"
                    />-->

            </v-row>

            <v-row style="width: 190px; margin-left: 20px; margin-right: 40px;">
              <h5>Fecha de final</h5>

              <v-text-field :error-messages="alertFechaFinal" style="border-radius: 18px;" background-color="#f6f2f2"
                persistent-placeholder outlined dense color="blue" autocomplete="false" type="Date" disable
                v-model="tareaDatefinal" />
              <!--<v-text-field
                    style="border-radius: 18px; margin-top: -13%;"
                    background-color="#f6f2f2"  
                    persistent-placeholder
                    outlined
                    dense
                    color="blue"
                    autocomplete="false"
                    value="23:59"
                    type="time"
                    v-model="tareaHour"
                    />-->

            </v-row>

            <v-row>
              <vs-button v-if="dialogo != true && boton == false" class="save" @click="crear('bottom-center', vsColor)">
                GUARDAR
              </vs-button>
              <vs-button loading v-if="dialogo != true && boton == true" class="save">
                GUARDAR
              </vs-button>
            </v-row>

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
  data: function () {
    return {
      boton: false,
      asignatura: [],
      fechaActual: Date,
      time: '',
      year: '',
      timestamp: '',
      fulldatetime: '',
      photo: null,
      radioGroup: ["Habilidata", "Cancelada", "En construcción"],
      estado: null,
      prueba: true,
      selected: "",
      colo: "",
      mensaje: "",
      dialogo: false,
      name: "",
      title: "",
      description: "",
      date: "",
      hasSaved: false,
      areas: [],
      asignature: '',
      topic: '',
      subtopic: '',
      exercise_type: '',
      archive: null,
      people_id: '',
      TareaItemsAsignature: '',
      TareaItemsCurse: "",
      tareasType: ["Taller", "Foro", "Ensayo"],
      tareaType: "",
      tareaTitle: "",
      tareaDescription: "",
      tareaState: "Asignar fecha",
      tareaArchive: null,
      tareaCurse: "",
      tareaAsignature: "",
      note: null,
      archiveType: ["PDF", "Word", "Power point"],
      tipoArchivo: "",
      Asignatureitems: this.$store.state.userData.asignatures,
      Cursetureitems: ["6-2", "6-3", "6-4", ""],
      archiveTypeSelect: "",
      tareaDateinicial: Date,
      tareaDatefinal: Date,
      alertTareaType: false,
      alertTareaDescription: false,
      alertTareaTitulo: false,
      alertTareaArchivo: false,
      alertTareaArchivoAWS: false,
      alertTareaCurse: false,
      alertFechaInicio: false,
      alertFechaFinal: false,

    }

  },
  components: {
    // 'font-awesome-icon': FontAwesomeIcon,
  },




  // ------------------------------ INICIA MOUNTED--------------------------------- //

  // ------------------------------ FINAL MOUNTED--------------------------------- //





  props: {
    source: String,
    icon: String,
    heading: String,
    subheading: String,
  },
  methods: {
    printDate: function () {
      return new Date().toLocaleDateString("sv-SE");
    },
    printTime: function () {
      return new Date().toLocaleTimeString();
    },
    printYear: function () {
      return new Date().getFullYear();
    },
    printTimestamp: function () {
      return Date.now();
    },
    printFullDate: function () {
      return new Date();
    },






    vuelveInicio() {
      this.$router.push('/dashboard/welcome');
    },


    crear() {



      if (this.tareaType != "") {
        this.alertTareaType = false
        if (this.tareaTitle != "") {
          this.alertTareaTitulo = false
          if (this.tareaDescription != "") {
            this.alertTareaDescription = false
            if (this.TareaItemsCurse != "") {
              this.alertTareaCurse = false
              if (this.tareaDateinicial != null & this.fechaActual <= this.tareaDateinicial) {
                this.alertFechaInicio = false
                if (this.tareaDatefinal != null & this.tareaDatefinal > this.tareaDateinicial) {
                  this.alertFechaFinal = false
                  if (this.fechaActual < this.tareaDateinicial) {
                    this.tareaState = "Tarea Programanda";
                    if (this.fechaActual > this.tareaDatefinal) {
                      this.tareaState = "Tarea vencida"
                    }
                  } else {
                    this.tareaState = "Tarea Habilitada"
                  }

                  if (this.archive != null) {
                    this.alertTareaArchivo = false

                    // --------------- Enviado de archivo a AWS --------------- //
                    const formData = new FormData();
                    formData.append('file', this.archive)
                    this.boton = true;
                    axios.post('http://localhost:3001/exer', formData)
                      .then((response) => {
                        if (response.status == "200") {
                          console.log(response.data)
                          let exercise = {
                            //   "task_asignature": this.TareaItemsAsignature,
                            "task_asignature": this.asignatura._id._id,
                            "topic": this.TareaItemsCurse,
                            "task_type": this.tareaType,
                            "task_title": this.tareaTitle,
                            "task_description": this.tareaDescription,
                            "deliveryDateInicial": this.tareaDateinicial,
                            "deliveryDateFinal": this.tareaDatefinal,
                            "task_status": this.tareaState,
                            "archivo": response.data.nU,
                            "people_id": this.people_id
                          };
                          // --------------- Enviado de datos de la tarea --------------- //     
                          axios.post('http://localhost:3001/exercises', exercise).then((response) => {
                            console.log(response)
                            if (response.status == "200") {
                              this.mensaje = "La tarea ha sido asignada"
                              this.colo = "background-color:#8188CE"
                              this.dialogo = true
                              this.alertTareaArchivoAWS = "Archivo Cargado a AWS"

                            }

                          }).catch((error) => {
                            if (error.response.status == "500") {
                              this.mensaje = "Ocurrio Un Error Vuelve A Intentar"
                              this.colo = "background-color:rgb(212, 80, 80);"
                              this.dialogo = true
                            }
                          })
                        }
                      }).catch((error) => {
                        if (error.response.status == "500") {
                          this.mensaje = "Ocurrio Un Error Vuelve A Intentar"
                          this.colo = "background-color:rgb(212, 80, 80);"
                          this.dialogo = true
                        }
                      })
                  } else {
                    this.alertTareaArchivo = "Inserte un archivo"

                  }



                } else {

                  this.alertFechaFinal = "Asigne fecha final valida"
                }

              } else {

                this.alertFechaInicio = "Asigne fecha de inicio valida"
              }
            } else {

              this.alertTareaCurse = "Escoja un grado"
            }
          } else {

            this.alertTareaDescription = "Ponga una descripcion"
          }
        } else {

          this.hasSaved = true
          this.alertTareaTitulo = "Asigne un titulo"
        }
      } else {

        this.alertTareaType = "Asigne un tipo de tarea"
      }


    },


    VerificarArchivo() {  // Este es un boton de prueba para enviar el archivo //
      // this.archive = e.target.files[0]  
      this.archive = this.$refs.file.files[0];
      console.log(this.archive)
    },





    limpiar() {
      this.hasSaved = false;
      this.dialogo = false;
      this.title = "";
      this.description = "";
      this.date = "";
      this.TareaItemsCurse = "";
      this.tareaType = "";
      this.tareaTitle = "";
      this.tareaDescription = "";
      this.tareaDateinicial = "";
      this.tareaDatefinal = "";
      this.tareaState = "";
      this.archive = "";
      this.alertTareaArchivoAWS = false;
      this.boton = false;
    },
    mostrarArchivo() {
      console.log(this.fechaActual)
      console.log(this.tareaDateinicial);
      if (this.fechaActual >= this.tareaDateinicial) {
        this.tareaState = "Habilitada";
      } else {
        this.tareaState = "Programando"
      }
    }
  },
  mounted() {


    // --------------- Trae la informacion del docente desde las Cards iniciales y vuex ---------------- //
    this.asignatura = this.$store.state.asignaturasDocente
    this.people_id = this.$store.state.userData._id;
    this.TareaItemsAsignature = this.asignatura._id.name
    // --------------- Hora y fecha actual ---------------- //
    this.fechaActual = this.printDate();
    this.time = this.printTime();
    this.timestamp = this.printTimestamp();
    this.year = this.printYear();
    this.fulldatetime = this.printFullDate();
    let vue = this;
    //------------------------------------------------------//

    //-------------------- ruta de axios ----------------------- //
    axios.get('http://localhost:3001/areas').then(
      function (response) {
        vue.areas = response.data;
        console.log(vue.areas)
      });
    //-------------------------------------------------------------//

    //--------------- Condiciones para asignar estado de la tarea--------//




    //--------------------------------------------------------------------//
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

.image-col {
  background-image: url("../../assets/imgCrear/actividad.svg");
  background-size: 80vh 50vw;
  background-repeat: no-repeat;
}

.container {
  display: flex;
  margin-bottom: 50px;

}

.estado-tarea {
  width: 240px;
  height: 100px;
}

.estado-tarea__buttons {
  background-color: #f6f2f2;
  border-radius: 20px;
  border: 1px solid #C3C3C5;
  height: auto;
  margin-top: auto;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
}

.estado-tarea .estado-tarea__buttons:hover {
  border: 1px solid black;
}


.adjuntar {
  background-color: #f6f2f2;
  border-radius: 20px;
  border: 1px solid #C3C3C5;
  width: 300px;


  padding: 2%;
}

.adjuntar:hover {
  border: 1px solid black;
}

h4 {
  color: black;
  font-weight: 300;
}

.save {
  margin-left: 90px;
}

.divNew {
  position: absolute;
  background-color: #b99f9f;
  width: 78%;
  background-position-x: center;
  border-radius: 10px;

}

h1 {
  font-size: 36px;
  font-weight: 800;
  color: #0F5C8c;
  display: inline;
  margin-right: 70%;
  margin-top: auto;
}

.estilocompleto {
  margin-left: 50px;
  margin-right: 50px;
  margin-block: 10px;

}
</style>
  