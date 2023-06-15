   <template>
      <div >
        
        <div id="personal" class="fondosub">
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
                  {{heading}}
              </div>
         </div>
            
            <div class="row justify-content-md-center">
              
                <div class="col-md-12">
                    <div class="main-card mb-3 ">
    
    
                        <div>
                          <v-row>
                            <v-col cols="12" sm="8">
                           <div class="  text-capitalize " style="font-weight: bold;font-size:25px">
                             
                                 Tabla Con El Listado
                                 
                             </div>
                            </v-col>
                            <v-col cols="12" sm="4">
                              <div class="  text-capitalize " style="font-weight: bold;font-size:25px">
                              <v-text-field
                                 v-model="search"
                                 append-icon="mdi-magnify"
                                 label="Buscar"
                                 single-line
                               ></v-text-field>
                              </div>
                            </v-col>
                            </v-row>
                        </div>
    
    
    
                            <div class="px-5 py-5">
                              <v-row>
                                <v-col col="8"
                                xs="4">   
                                <vuescroll :ops="ops">     
                                  
                                <!--  <template >
                                    <v-card
                                      class="mx-auto mt-12"
                                      max-width="450"
                                    >
                                     
                                  
                                      <v-toolbar
                                        flat
                                        color="transparent"
                                      >
                                        
                                  
                                        <v-text-field
                                          v-model="search"
                                          append-icon="mdi-magnify"
                                          label="Search News"
                                          single-line
                                        ></v-text-field>
                                      </v-toolbar>
                                      
                                    </v-card>
                                  </template>-->
                                    <template>
                                  <table class="table table-striped">
                                    <thead>
                                      <tr style="font-size:18px">
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Dirección</th>
                                        <th scope="col">Contacto</th>
                                        <th scope="col">Grados</th>
                                        <th scope="col">Acciones</th>
                                     <!--   <th scope="col">Menu</th>
                                        <th scope="col">Rutas</th>-->
                                       
                                      </tr>
                                    </thead>
                                    <tbody v-for="(school, index) in  schools" :key="school._id">
                                      <tr>
                                        <td style="background-color:rgba(128, 128, 128, 0.329);">{{school.name}}</td>
                                        <td style="background-color:rgba(128, 128, 128, 0.329);">{{school.direction}}</td>
                                        <td style="background-color:rgba(128, 128, 128, 0.329);">{{school.contact}}</td>
                                        <td style="background-color:rgba(128, 128, 128, 0.329);">{{school.grade}}</td>
                                        <td style="border-top-right-radius:40px;background-color:rgba(128, 128, 128, 0.329);"><button @click="editar(index)"><b-icon icon="pen-fill" font-scale="2" variant="success"></b-icon></button>
                                          
                                          <button  @click="guardaId(school._id, school.name)" style="margin-left:30px;"> <b-icon icon="trash-fill" font-scale="2" style="color:rgba(243, 71, 71, 0.719)"></b-icon></button>
                                       </td>
                                      <!-- <td>{{roles.menu}}</td>
                                        <td>{{roles.rutas}}</td>--> 
                                      </tr>
                                    </tbody>
                                  </table> 
                                </template>
                                        
     <div >
    <div class="center">
      <vs-dialog  prevent-close  width="300px" not-center v-model="active3" >
        
        <template #header >
          <h4 class="not-margin">
            Editar <b>Escuela</b>
          </h4>
        </template>
        <div class="con-content"  style="margin-top:20px">
          <input v-model="name" type="name" style="background-color:#EDE2E2;"  class="form-control input_pass" placeholder="Digite El Nombre Del Rol.">
        </div>
        <div class="con-content" style="margin-top:20px">
          <input v-model="direction" type="name" style="background-color:#EDE2E2;"  class="form-control input_pass" placeholder="Digite El Nombre.">
        </div>
        <div class="con-content" style="margin-top:20px">
          <input v-model="contact" type="name" style="background-color:#EDE2E2;"  class="form-control input_pass" placeholder="Digite El Apellido.">
        </div>
        <div>
          <v-col cols="12" sm="100%">
                                  <v-container fluid>
                                    <v-checkbox
                                      v-model="primary"
                                      label="De grado 1(primero) a grado 5(quinto)"
                                      value="primaria"
                                    ></v-checkbox>
                                    <v-checkbox
                                      v-model="secundary"
                                      label="De grado 6(sexto) a grado 11(undecimo)"
                                      value="secundaria"
                                    ></v-checkbox>
                                  </v-container>
                                </v-col>
        </div>
      
        <template #footer>
          <div class="con-footer">
            <vs-button @click="guardarEdicion()">
              Guardar Cambios
            </vs-button>
            <vs-button @click="active3=false" style="background-color: #E2583E">
              Cancelar
            </vs-button>
          </div>
        </template>
      </vs-dialog></div>
    </div>
    </vuescroll>
    </v-col>
    </v-row>
    <vs-dialog  prevent-close  width="300px" not-center v-model="activeDelete" >
    
    <template #header >
      <h4 class="not-margin">
        ¿Seguro que desea eliminar la escuela <b> {{areaName}} </b>?
      </h4>
    </template>
  
    <template #footer>
      <div class="con-footer">
        <vs-button @click="eliminar(guardaIdSchool)">
          Sí
        </vs-button>
        <vs-button @click="activeDelete=false" style="background-color: #E2583E">
          No
        </vs-button>
      </div>
    </template>
  </vs-dialog>
                              

          </div>
            </div>
           </div>
            </div>
            </div>
          
       
       
      </div>
      </template>
      
      <script>
import axios from 'axios'
  export default {
    
    
      data() {
        return {
          guardaIdSchool: '',
          activeDelete: false,
          schools: [],
          mensaje:"",
          dialogo: false,
          name: '',
          direction: '',
          contact: '',
          grades: [],
          subtopic_id: null,
          active3: false,
          items: null,
          heading: 'Escuela',
          icon: 'pe-7s-note2 icon-gradient bg-tempting-azure',
          subheading: 'Listado de las tareas',
          posEditar:0,
          id_edit: "",
          primary: "",
          secundary: "",
          send_total : []
        }
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
                  return [6,7,8,9,10]
                }else{
                  return []
                }
              }
      },
      methods: {
        vuelveInicio(){
      this.$router.push('/dashboard/welcome');
    },
        guardaId(id, name){
        this.guardaIdSchool = id;
        this.areaName = name
        this.activeDelete = true;
      },

        editar(index){
          this.active3=true
          this.name=this.schools[index].name
          this.direction=this.schools[index].direction
          this.contact=this.schools[index].contact
          this.grades=this.schools[index].grade
          this.id_edit=this.schools[index]._id
          if(this.grades.length > 6){
            this.primary = "primaria";
            this.secundary = "secundaria";
          }else if(this.grades.includes(6)){
            this.primary = "";
            this.secundary = "secundaria";
          }else {
            this.secundary = "";
            this.primary = "primaria";
          }
        },
      
      guardarEdicion(color, position){

        let school= {
            "schools":{
                "name": `${this.name}`,
                "direction": `${this.direction}`,
                "contact": `${this.contact}`,
                "grade": this.total
            }
        }

        axios.put(`http://localhost:3001/schools/${this.id_edit}`, school)
        .then((response) => {
          console.log(response);
          this.active3=false
            this.limpiar();
                        color = "primary"
                        this.noti = this.$vs.notification({
                        color,
                        position,
                        title: "La escuela ha sido actualizada"})
          let vue = this;
          axios.get('http://localhost:3001/schools').then(
            function(response){
                vue.schools = response.data;
                console.log(vue.schools)
            }
        )
        })
        
      },

      eliminar(i, position = null, color){
        axios.delete(`http://localhost:3001/schools/${i}`)
        .then((response) => {
            if(response.data.status == 200){
                this.schools.splice(i,1);

            }
            this.activeDelete = false;
            this.limpiar();
                        color = "danger"
                        this.noti = this.$vs.notification({
                        color,
                        position,
                        title: "La escuela ha sido eliminada"})
                        let vue = this;
            axios.get('http://localhost:3001/schools').then(
            function(response){
                vue.schools = response.data;
                console.log(vue.schools)
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
       .fondosub{
        background-image:url("../../assets/disenomio.png");
        background-repeat: no-repeat;
        background-size: cover;
      
      margin:0; 
      }
      </style>
      