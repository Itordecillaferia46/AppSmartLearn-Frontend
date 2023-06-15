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
                              <table class="table table-striped" style="width: 500px;">
                                <thead>
                                  <tr style="font-size:18px">
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Opciones</th>
                                 <!--   <th scope="col">Menu</th>
                                    <th scope="col">Rutas</th>-->
                                   
                                  </tr>
                                </thead>
                                <tbody v-for="(rol, index) in items" :key="rol._id">
                                  <tr>
                                    <td style="border-bottom-left-radius:40px; background-color:rgba(128, 128, 128, 0.329);">{{rol.name}}</td>
                                    <td style="border-top-right-radius:40px;background-color:rgba(128, 128, 128, 0.329);">
                                      <button @click="editar(index)"><b-icon icon="pen-fill" font-scale="2" variant="success"></b-icon></button>
                                      
                                      <button  @click="guardaId(rol._id, rol.name)" style="margin-left:30px;"> <b-icon icon="trash-fill" font-scale="2" style="color:rgba(243, 71, 71, 0.719)"></b-icon></button>
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
        Editar <b>Rol</b>
      </h4>
    </template>
    <div class="con-content"  style="margin-top:20px">
      <input v-model="input1" type="name" style="background-color:#EDE2E2;"  class="form-control input_pass" placeholder="Digite El Nombre Del Rol.">
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
    ¿Seguro que desea eliminar el rol <b> {{rolName}} </b>?
  </h4>
</template>

<template #footer>
  <div class="con-footer">
    <vs-button @click="eliminar(guardaIdRol)">
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
        input1: '',
        active3: false,
        activeDelete: false,
        items: null,
        heading: 'Lista De Roles',
        icon: 'pe-7s-note2 icon-gradient bg-tempting-azure',
        subheading: 'Listado De Los Diferentes Roles..',
        posEditar:0,
        guardaIdRol: '',
        rolName: '',
        roles: []
      }
    },

    mounted() {
      
         this.cargar()
    },
    methods: {
      vuelveInicio(){
      this.$router.push('/dashboard/welcome');
    },
      guardaId(id, name){
        this.guardaIdRol = id;
        this.rolName = name
        this.activeDelete = true;
      },

      openNotification(position = null, color, title) {
          this.noti = this.$vs.notification({
            progress: 'auto',
            color,
            position,
            title,
          })
        },
      guardarEdicion(){
        this.items[this.posEditar].name=this.input1
        let json={
          'roles':{name:this.items[this.posEditar].name}
        }
       // console.log( this.items[this.posEditar]._id)
       axios.put('http://localhost:3001/roles/'+this.items[this.posEditar]._id, json )
      .then((response) => {
       console.log(response)
       console.log("actualizado")
        this.active3=false
        this.cargar()
        this.openNotification('bottom-rigth', 'primary','El rol fue actualizado')
        })
      },
      editar(id){
        this.posEditar=id;
        this.active3=true
       this.input1=this.items[id].name
       
      },
      
      cargar(){
        this.axios.get('http://localhost:3001/roles')
      .then((response) => {
       console.log(response)
    //  for (let i = 0; i < response.data.length; i++) {
       // console.log(response.data[i]._id)
        
    //  }
         //console.log(response.data[length].name)
         this.items=response.data;

        })
      },
       eliminar(id){
        this.axios.delete('http://localhost:3001/roles/'+id)
        .then((response) => {console.log(response.data)
        this.activeDelete = false;
        this.cargar()
        this.openNotification('bottom-rigth', 'danger','El rol fue eliminado')
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
  </style>
  