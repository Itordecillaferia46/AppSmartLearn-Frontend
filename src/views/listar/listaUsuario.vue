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
                             label="Buscar Por Apellido"
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
                              <table class="table table-striped" v-if="search!=''&& searching.length>=1&&pantalla==1">
                                <thead>
                                  <tr style="font-size:18px">
                                    <th scope="col">Id</th>
                                    <th scope="col">Rol</th>
                                    <th scope="col">Nombres</th>
                                    <th scope="col">Apellidos</th>
                                    <th scope="col">Sexo</th>
                                    <th scope="col">Usuario</th>
                                    <th scope="col">Contraseña</th>
                                    <th scope="col">Accion</th>
                                 <!--   <th scope="col">Menu</th>
                                    <th scope="col">Rutas</th>-->
                                   
                                  </tr>
                                </thead>
                                <tbody v-for="(roles, index) in  searching" :key="roles._id">
                                       
                                  <tr   v-if="roles.rol=='Docente'">
                                    <td  style="border-top-left-radius:40px;background-color:rgba(128, 128, 128, 0.329);">{{roles._id}}</td>
                                    <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.rol}}</td>
                                    <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.name}}</td>
                                    <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.last_name}}</td>
                                    <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.gender}}</td>
                                    <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.username}}</td>
                                    <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.password}}</td>
                                    <td style="border-top-right-radius:40px;background-color:rgba(128, 128, 128, 0.329);"><button @click="editar(index)"><b-icon icon="pen-fill" font-scale="2" variant="success"></b-icon></button>
                                      
                                      <button  @click="eliminar(roles._id)" style="margin-left:30px;"> <b-icon icon="trash-fill" font-scale="2" style="color:rgba(243, 71, 71, 0.719)"></b-icon></button>
                                   </td>
                                  <!-- <td>{{roles.menu}}</td>
                                    <td>{{roles.rutas}}</td>--> 
                                  </tr>
                                </tbody>
                              </table> </template>
                                    <template>
                                <table class="table table-striped" v-if="search!=''&& searching.length>=1&&pantalla==2">
                                  <thead>
                                    <tr style="font-size:18px">
                                      <th scope="col">Id</th>
                                      <th scope="col">Rol</th>
                                      <th scope="col">Nombres</th>
                                      <th scope="col">Apellidos</th>
                                      <th scope="col">Sexo</th>
                                      <th scope="col">Usuario</th>
                                      <th scope="col">Contraseña</th>
                                      <th scope="col">Accion</th>
                                   <!--   <th scope="col">Menu</th>
                                      <th scope="col">Rutas</th>-->
                                     
                                    </tr>
                                  </thead>
                                  <tbody v-for="(roles, index) in  searching" :key="roles._id">
                                         
                                    <tr   v-if="roles.rol=='Estudiante'">
                                      <td  style="border-top-left-radius:40px;background-color:rgba(128, 128, 128, 0.329);">{{roles._id}}</td>
                                      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.rol}}</td>
                                      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.name}}</td>
                                      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.last_name}}</td>
                                      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.gender}}</td>
                                      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.username}}</td>
                                      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.password}}</td>
                                      <td style="border-top-right-radius:40px;background-color:rgba(128, 128, 128, 0.329);"><button @click="editar(index)"><b-icon icon="pen-fill" font-scale="2" variant="success"></b-icon></button>
                                        
                                        <button  @click="eliminar(roles._id)" style="margin-left:30px;"> <b-icon icon="trash-fill" font-scale="2" style="color:rgba(243, 71, 71, 0.719)"></b-icon></button>
                                     </td>
                                    <!-- <td>{{roles.menu}}</td>
                                      <td>{{roles.rutas}}</td>--> 
                                    </tr>
                                  </tbody>
                                </table> </template>
                                  <template>
                                  <table class="table table-striped" v-if="search!=''&& searching.length>=1&&pantalla==3">
                                    <thead>
                                      <tr style="font-size:18px">
                                        <th scope="col">Id</th>
                                        <th scope="col">Rol</th>
                                        <th scope="col">Nombres</th>
                                        <th scope="col">Apellidos</th>
                                        <th scope="col">Sexo</th>
                                        <th scope="col">Usuario</th>
                                        <th scope="col">Contraseña</th>
                                        <th scope="col">Accion</th>
                                     <!--   <th scope="col">Menu</th>
                                        <th scope="col">Rutas</th>-->
                                       
                                      </tr>
                                    </thead>
                                    <tbody v-for="(roles, index) in  searching" :key="roles._id">
                                           
                                      <tr   v-if="roles.rol=='Administrador'">
                                        <td  style="border-top-left-radius:40px;background-color:rgba(128, 128, 128, 0.329);">{{roles._id}}</td>
                                        <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.rol}}</td>
                                        <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.name}}</td>
                                        <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.last_name}}</td>
                                        <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.gender}}</td>
                                        <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.username}}</td>
                                        <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.password}}</td>
                                        <td style="border-top-right-radius:40px;background-color:rgba(128, 128, 128, 0.329);"><button @click="editar(index)"><b-icon icon="pen-fill" font-scale="2" variant="success"></b-icon></button>
                                          
                                          <button  @click="eliminar(roles._id)" style="margin-left:30px;"> <b-icon icon="trash-fill" font-scale="2" style="color:rgba(243, 71, 71, 0.719)"></b-icon></button>
                                       </td>
                                      <!-- <td>{{roles.menu}}</td>
                                        <td>{{roles.rutas}}</td>--> 
                                      </tr>
                                    </tbody>
                                  </table> </template>
 <div >
  <template v-if="pantalla==1" >
    <table class="table table-striped" v-if="search==''|| searching.length<=0 " >
  <thead>
    <tr style="font-size:18px">
      <th scope="col">Rol</th>
      <th scope="col">Nombres</th>
      <th scope="col">Apellidos</th>
      <th scope="col">Sexo</th>
      <th scope="col">Usuario</th>
      <th scope="col">Contraseña</th>
      <th scope="col">Accion</th>
   <!--   <th scope="col">Menu</th>
      <th scope="col">Rutas</th>-->
     
    </tr>
  </thead>
  <tbody v-for="(roles, index) in items" :key="roles._id" >
         
    <tr  v-if="roles.rol=='Docente'" >
      <td style="border-top-left-radius:40px; background-color:rgba(128, 128, 128, 0.329);">{{roles.rol}}</td>
      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.name}}</td>
      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.last_name}}</td>
      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.gender}}</td>
      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.username}}</td>
      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.password}}</td>
      <td style="border-top-right-radius:40px;background-color:rgba(128, 128, 128, 0.329);"><button @click="editar(index)"><b-icon icon="pen-fill" font-scale="2" variant="success"></b-icon></button>
        
        <button  @click="eliminar(roles._id)" style="margin-left:30px;"> <b-icon icon="trash-fill" font-scale="2" style="color:rgba(243, 71, 71, 0.719)"></b-icon></button>
       
      </td>
    <!-- <td>{{roles.menu}}</td>
      <td>{{roles.rutas}}</td>--> 
    </tr>
  </tbody>
</table> 
</template>
<template v-if="pantalla==2">
  <table class="table table-striped" v-if="search==''|| searching.length<=0 " >
<thead>
  <tr style="font-size:18px">
    <th scope="col">Rol</th>
    <th scope="col">Nombres</th>
    <th scope="col">Apellidos</th>
    <th scope="col">Sexo</th>
    <th scope="col">Usuario</th>
    <th scope="col">Contraseña</th>
    <th scope="col">Accion</th>
 <!--   <th scope="col">Menu</th>
    <th scope="col">Rutas</th>-->
   
  </tr>
</thead>
<tbody v-for="(roles, index) in items" :key="roles._id">
       
  <tr  v-if="roles.rol=='Estudiante'">
      <td style="border-top-left-radius:40px; background-color:rgba(128, 128, 128, 0.329);">{{roles.rol}}</td>
      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.name}}</td>
      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.last_name}}</td>
      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.gender}}</td>
      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.username}}</td>
      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.password}}</td>
      <td style="border-top-right-radius:40px;background-color:rgba(128, 128, 128, 0.329);"><button @click="editar(index)"><b-icon icon="pen-fill" font-scale="2" variant="success"></b-icon></button>
      
      <button  @click="eliminar(roles._id)" style="margin-left:30px;"> <b-icon icon="trash-fill" font-scale="2" style="color:rgba(243, 71, 71, 0.719)"></b-icon></button>
   </td>
  <!-- <td>{{roles.menu}}</td>
    <td>{{roles.rutas}}</td>--> 
  </tr>
</tbody>
</table> 
</template>
<template v-if="pantalla==3">
  <table class="table table-striped" v-if="search==''|| searching.length<=0 " >
<thead>
  <tr style="font-size:18px">
    <th scope="col">Id</th>
    <th scope="col">Rol</th>
    <th scope="col">Nombres</th>
    <th scope="col">Apellidos</th>
    <th scope="col">Sexo</th>
    <th scope="col">Usuario</th>
    <th scope="col">Contraseña</th>
    <th scope="col">Accion</th>
 <!--   <th scope="col">Menu</th>
    <th scope="col">Rutas</th>-->
   
  </tr>
</thead>
<tbody v-for="(roles, index) in items" :key="roles._id">
       
  <tr  v-if="roles.rol=='Administrador'">
    <td  style="border-top-left-radius:40px;background-color:rgba(128, 128, 128, 0.329);">{{roles._id}}</td>
      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.rol}}</td>
      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.name}}</td>
      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.last_name}}</td>
      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.gender}}</td>
      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.username}}</td>
      <td style="background-color:rgba(128, 128, 128, 0.329);">{{roles.password}}</td>
      <td style="border-top-right-radius:40px;background-color:rgba(128, 128, 128, 0.329);"><button @click="editar(index)"><b-icon icon="pen-fill" font-scale="2" variant="success"></b-icon></button>
      
      <button  @click="eliminar(roles._id)" style="margin-left:30px;"> <b-icon icon="trash-fill" font-scale="2" style="color:rgba(243, 71, 71, 0.719)"></b-icon></button>
   </td>
  <!-- <td>{{roles.menu}}</td>
    <td>{{roles.rutas}}</td>--> 
  </tr>
</tbody>
</table> 
</template>
<div class="center">
  <vs-dialog  prevent-close  width="300px" not-center v-model="active3" >
    
    <template #header >
      <h4 class="not-margin">
        Editar Nombre Del <b>Rol</b>
      </h4>
    </template>
    <div class="con-content"  style="margin-top:20px">
      <input v-model="input1" type="name" style="background-color:#EDE2E2;"  class="form-control input_pass" placeholder="Digite El Nombre Del Rol.">
    </div>
    <div class="con-content" style="margin-top:20px">
      <input v-model="input2" type="name" style="background-color:#EDE2E2;"  class="form-control input_pass" placeholder="Digite El Nombre.">
    </div>
    <div class="con-content" style="margin-top:20px">
      <input v-model="input3" type="name" style="background-color:#EDE2E2;"  class="form-control input_pass" placeholder="Digite El Apellido.">
    </div>
    <div class="con-content" style="margin-top:20px">
      <b-form-select style="background-color:#EDE2E2;"  class="form-control input_pass"    v-model="sexo">
                                      
        <option disabled selected>Sexo</option>
        <option value="M">M</option>
        <option value="F">F</option>
       </b-form-select>
    </div>
    <div class="con-content" style="margin-top:20px">
      <input v-model="input5" type="name" style="background-color:#EDE2E2;"  class="form-control input_pass" placeholder="Digite El Usuario.">
    </div>
  
    <div class="con-content" style="margin-top:20px">
      <input v-model="input6" type="name" style="background-color:#EDE2E2;"  class="form-control input_pass" placeholder="Digite La Contraseña.">
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
  </vs-dialog></div>
</div>
</vuescroll>
</v-col>
</v-row>
                          
      </div>
        </div>
       </div>
        </div>
        </div>
      
   
   
  </div>
  </template>
  
  <script>
   import vuescroll from "vuescroll";
   // import axios from 'axios'
  // import PageTitle from "../../Layout/Components/PageTitle.vue";
  export default {
    components: {
          //  PageTitle,
            vuescroll
        },
  
    data() {
      return {
       
        pantalla:null,
      search: '',
        input1: null,
        input2: null,
        input3: null,
        sexo: null,
        input5: null,
        input6: null,
        active3: false,
        items: [],
        heading: null,
        posEditar:0,
        ops: {
          scrollPanel: {
            initialScrollY: false,
    initialScrollX: false,
    scrollingX: true,
    scrollingY: true,
    speed: 300,
    easing: undefined,
    verticalNativeBarPos: 'right'
          },
          rail: {
            
            background: 'rgba(0, 0, 0, 0.158)',
    opacity: 1,
    size: '10px',
    specifyBorderRadius: false,
    gutterOfEnds: null,
     gutterOfSide: '2px',
    keepShow: false
          },
          bar: {
            showDelay: 500,
    onlyShowBarOnScroll: true,
    keepShow: false,
    background: '#0378a677',
    opacity: 1,
    hoverStyle: false,
    specifyBorderRadius: false,
    minSize: 0,
    size: '9px',
    disable: false
          },
        },
        
      }
    },

    mounted() {
     setInterval(this.created, 10);
         this.cargar()
    },
    computed: {
      searching () {
        if (!this.search) return this.items

        const search = this.search.toLowerCase()

        return this.items.filter(item => {
          const text = item.last_name.toLowerCase()

          return text.indexOf(search) > -1
        })
      },
    
    },
    methods: {



      vuelveInicio(){
      this.$router.push('/dashboard/welcome');
    },
      created(){
           this.pantalla=this.$route.params.id
           if(this.pantalla==1){
            this. heading='Listado De Docentes Registrados'
           }
           if(this.pantalla==2){
            this. heading='Listado De Estudiantes Registrados'
           }
           if(this.pantalla==3){
            this. heading='Listado De Administradores Registrados'
           }
  },
  
      guardarEdicion(){
      this.items[this.posEditar].rol=this.input1
      this.items[this.posEditar].name=this.input2
      this.items[this.posEditar].last_name=this.input3
      this.items[this.posEditar].gender=this.sexo
      this.items[this.posEditar].username=this.input5
      this.items[this.posEditar].password=this.input6
      let json={
        'people':{rol:this.items[this.posEditar].rol,
          name:this.items[this.posEditar].name,
          last_name:this.items[this.posEditar].last_name,
          gender:this.items[this.posEditar].gender,
          username:this.items[this.posEditar].username,
          password:this.items[this.posEditar].password,
        }
      }
     // console.log( this.items[this.posEditar]._id)
     this.axios.put('http://localhost:3001/peoples/'+this.items[this.posEditar]._id, json )
    .then((response) => {
     console.log(response)
     this.active3=false
this.cargar()
      })
    },
      editar(id){
       this.posEditar=id;
       this.active3=true
       this.input1=this.items[id].rol
       this.input2=this.items[id].name
       this.input3=this.items[id].last_name
       this.sexo=this.items[id].gender
       this.input5=this.items[id].username
       this.input6=this.items[id].password
       
      },
      openNotification(position = null) {
          this.noti = this.$vs.notification({
            progress: 'auto',
            color: "danger",
            position,
            title: "El Usuario Fue Eliminado Con Exito",
          })
        },
      cargar(){
        this.axios.get('http://localhost:3001/peoples')
      .then((response) => {
       console.log(response)
    /*   for (let i = 0; i < response.data.length; i++) {
      if(this.pantalla==1 && response.data[i].rol=='Docente'){
        this.items.push(response.data[i]);
      }
      if(this.pantalla==2 && response.data[i].rol=='Estudiante'){
        this.items.push(response.data[i]);
      }
        
       }*/
        this.items=response.data;

        })
      },
       eliminar(id){
     this.axios.delete('http://localhost:3001/peoples/'+id)
      .then((response) => {console.log(response.data)
        this.cargar()
        this.openNotification('bottom-center', '#35BF78')
      })
       // this.cargar()
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
  