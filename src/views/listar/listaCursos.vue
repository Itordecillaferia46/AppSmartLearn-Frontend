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
                                        <th scope="col">Grado</th>
                                        <th scope="col">Grupo</th>
                                        <th scope="col">Nomenclatura</th>
                                        <th scope="col">Opciones</th>
                                     <!--   <th scope="col">Menu</th>
                                        <th scope="col">Rutas</th>-->
                                       
                                      </tr>
                                    </thead>
                                    <tbody v-for="(course, index) in  courses" :key="course._id">
                                      <tr>
                                        <td style="background-color:rgba(128, 128, 128, 0.329);">{{course.grade}}</td>
                                        <td style="background-color:rgba(128, 128, 128, 0.329);">{{course.group}}</td>
                                        <td style="background-color:rgba(128, 128, 128, 0.329);">{{course.nomenclature}}</td>
                                        <td style="border-top-right-radius:40px;background-color:rgba(128, 128, 128, 0.329);"><button @click="editar(index)"><b-icon icon="pen-fill" font-scale="2" variant="success"></b-icon></button>
                                          
                                          <button  @click="guardaId(course._id, course.nomenclature)" style="margin-left:30px;"> <b-icon icon="trash-fill" font-scale="2" style="color:rgba(243, 71, 71, 0.719)"></b-icon></button>
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
        
        <template #header>
                  <h4 class="not-margin">
                    Editar datos del <b>curso</b>
                  </h4>
                </template>
    
    
                <div class="con-content">
                  <b-form-select 
                                    v-for="i in school" 
                                    :key="i._id"  
                                    v-model="grade"
                                    style="background-color: #f6f2f2; 
                                                  border: 1px solid gray;">
                                    
                                      <option value="">Seleccione un grado</option>
                                      <option v-for="a in i.grade" :value="a" :key="a">{{a}}</option>
                                    </b-form-select><br> <br>
                                    <b-form-select style="background-color: #f6f2f2; 
                                                  border: 1px solid gray;"   v-model="group">
                                        <option value="">Grupo</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </b-form-select> <br>
                                    <b-input-group prepend="Nomenclatura" class="mt-3">
                                        <b-form-input v-model="nomenclature" readonly></b-form-input>
                                    </b-input-group>
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
        ¿Seguro que desea eliminar el curso<b> {{courseName}} </b>?
      </h4>
    </template>
  
    <template #footer>
      <div class="con-footer">
        <vs-button @click="eliminar(guardaIdCourse)">
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
                courses: [],
                mensaje:"",
                activeDelete: false,
                dialogo: false,
                grade: '',
                group: '',
                description: '',
                date: "",
                subtopic_id: null,
                active3: false,
                items: null,
                heading: 'Cursos',
                icon: 'pe-7s-note2 icon-gradient bg-tempting-azure',
                subheading: 'Listado de las tareas',
                posEditar:0,
                id_edit: "",
                guardaIdCourse: '',
                courseName: '',
                school: []

              }
            },
        
            mounted(){
              let vue = this;
              axios.get('http://localhost:3001/courses').then(
                  function(response){
                      vue.courses = response.data;
                      console.log(vue.courses)
                  }
              ),
              axios.get('http://localhost:3001/schools').then(
              function(response){
                vue.school = response.data;
                console.log(vue.school)
            })
          },
      
              computed:{
                          nomenclature:{
                              get(){
                                  return `${this.grade} - ${this.group}`
                              }
                          }
                      },
      
            methods: {
              vuelveInicio(){
      this.$router.push('/dashboard/welcome');
    },
              guardaId(id, nomenclature){
              this.guardaIdCourse = id;
              this.courseName = nomenclature;
              this.activeDelete = true;
            },
              editar(index){
                this.active3=true
                this.grade=this.courses[index].grade
                this.group=this.courses[index].group
                this.nomenclature=this.courses[index].nomenclature
                this.id_edit=this.courses[index]._id
              },
            
            guardarEdicion(color, position){
              let course= {
                  "courses":{
                      "grade": `${this.grade}`,
                      "group": `${this.group}`,
                      "nomenclature": `${this.nomenclature}`
                  }
              }
              axios.put(`http://localhost:3001/courses/${this.id_edit}`, course)
              .then((response) => {
                console.log(response);
                this.active3 = false
                this.limpiar();
                        color = "primary"
                        this.noti = this.$vs.notification({
                        color,
                        progress: 'auto',
                        position,
                        title: "El curso ha sido actualizado"})
                let vue = this;
                axios.get('http://localhost:3001/courses').then(
                  function(response){
                      vue.courses = response.data;
                      console.log(vue.courses)
                  }
              )
              })
              
            },
      
            eliminar(i, position = null, color){
              axios.delete(`http://localhost:3001/courses/${i}`)
              .then((response) => {
                  if(response.data.status == 200){
                      this.courses.splice(i,1);
                  }
                  this.activeDelete = false;
                  this.limpiar();
                      color = "danger"
                      this.noti = this.$vs.notification({
                      color,
                      position,
                      progress: 'auto',
                      title: "El curso ha sido eliminado"})
                  let vue = this;
                  axios.get('http://localhost:3001/courses').then(
                  function(response){
                      vue.courses = response.data;
                      console.log(vue.courses)
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
          </style>