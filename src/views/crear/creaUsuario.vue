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
                              <div v-if="menu=='Docente'" >
                            <img src="../../assets/docen.svg"  style="max-width:400px; margin-top:100px">
                          </div>
                          <div v-if="menu=='Estudiante'">
                            <img  src="../../assets/estudiante.svg"  style="max-width:400px; margin-top:100px">  
                          </div>
                          <div v-if="menu=='Administrador'">
                            <img  src="../../assets/admin.svg"  style="max-width:400px; margin-top:100px">  
                          </div>
                          </v-col>
                              <v-col col="8"
                              xs="4">  
                                                       
                            <div >
   

                              
                                   
                              <template>
                                <v-stepper v-model="e1" style="margin:10px;">
                                  <v-stepper-header style="display: flex;
                                  justify-content: center; "  class="fondoTitle">

                                    <label style="margin-top:20px;font-weight: bold;">{{heading}}</label>
                                  </v-stepper-header>
                                  <v-stepper-header style="background-color:rgba(255, 192, 203, 0.26)">
                                    <v-stepper-step
                                      :complete="e1 > 1"
                                      step="1"
                                    >
                                      Datos Generales
                                    </v-stepper-step>
                              
                                    <v-divider></v-divider>
                              
                                    <v-stepper-step
                                      :complete="e1 > 2"
                                      step="2"
                                      
                                    >
                                      Datos Academicos
                                    </v-stepper-step>
                              
                                  
                                    
                                  </v-stepper-header>
                              
                                  <v-stepper-items class="fondocard">
                                    <v-stepper-content step="1">
                                      <v-card
                                        class="mb-12 fondocaja"
                                        
                                        height="220px"
                                      >
                                    <v-row>
                                      <v-col cols="12" sm="6">
                                        <v-text-field
                                        background-color="#D4D4D4"
                                        style="margin:10px;font-weight: bold;"
                                        v-model="menu"
                                        label="Rol"
                                        readonly
                                        outlined
                                        dense
                                        color="blue"
                                        autocomplete="false"
                                       class="mt-4"
                                      />
                                       </v-col>
                            
                                      <v-col cols="12" sm="6">
                                        <v-text-field
                                        style="margin:10px"
                                        v-model="name"
                                        background-color="#D4D4D4"
                                        onkeyup="javascript:this.value=this.value.toUpperCase();"
                                        label="Digite Nombres"
                                        outlined
                                        dense
                                        color="blue"
                                        autocomplete="false"
                                       class="mt-4"
                                      />
                                       </v-col></v-row>
                                       <v-row style="margin-top:-60px">
                                       <v-col cols="12" sm="6">
                                        <v-text-field
                                        style="margin:10px"
                                        v-model="apellido"
                                        background-color="#D4D4D4"
                                        onkeyup="javascript:this.value=this.value.toUpperCase();"
                                        label="Digite Apellidos"
                                        outlined
                                        dense
                                        color="blue"
                                        autocomplete="false"
                                       class="mt-4"
                        
                                      />
                                       </v-col>
                                       
                                        <v-col cols="12" sm="6">
                                          
                                          <v-select style="margin:10px"
                                              v-model="selected"
                                              background-color="#D4D4D4"
                                               label="Sexo"
                                              dense
                                              outlined
                                              :items="items"
                                              >
                                           </v-select>
                                        </v-col>
                                      </v-row>
                                      <v-row style="margin-top:-60px">
                                        <v-col cols="12" sm="6">
                                        
                                    
                                          <vs-input  v-model="usuario" style=" font-weight: bold;background-color:#D4D4D4;margin:10px;margin-top:30px; color:#636060;border:solid 1px;border-radius:5px" border
                                          label-placeholder="Usuario O Email"
                                         >
                                             
                                            <template v-if="validEmail" #message-success>
                                              Email Valid
                                            </template>
                                            <template v-if="!validEmail && usuario !== ''" #message-danger>
                                              Email Invalid
                                            </template>
                                          </vs-input>
                                        </v-col>
                                        <v-col cols="12" sm="6">
                                          <v-text-field
                                          style="margin:10px;margin-top:30px"
                                          v-model="contrasena1"
                                          background-color="#D4D4D4"
                                          type="number"
                                          label="N° Identificacion"
                                          outlined
                                          dense
                                          color="blue"
                                        autocomplete="false"
                                        
                                        
                                        />
                                      </v-col>
                                      </v-row>
                                    </v-card>
                                    <v-btn
                                    v-if="name!='' && apellido!='' && selected!='' && menu!='Administrador'&& usuario!=''&&contrasena1!=''"
                                      color="green"
                                      @click="pasaPantalla2()"
                                    >
                                      Continue
                                    </v-btn>
                                    <v-btn
                                    v-if="name!='' && apellido!='' && selected!='' && menu=='Administrador'&&usuario!=''&&contrasena1!=''"
                                      color="green"
                                      @click="crearDocente()"
                                    >
                                      Guardar
                                    </v-btn>
                                    <template v-if="menu=='Administrador'">
                                    <v-btn 
                                    v-if="name=='' || apellido=='' || selected=='' || usuario==''||contrasena1==''"
                                      color="green"
                                      disabled
                                    >
                                      Guardar
                                    </v-btn>
                                  </template>
                                  <template v-if="menu!='Administrador'">
                                    <v-btn disabled
                                      
                                      v-if=" name=='' || apellido=='' || selected=='' || usuario==''||contrasena1==''"
                                    >
                                      Continue
                                    </v-btn>
                                  </template>
                                    </v-stepper-content>
                              
                                    <v-stepper-content step="2" v-if="menu=='Docente'">
                                      <!--Docente datos academicos-->
                                      <v-card 
                                        class="mb-12 fondocaja"
                                      
                                        
                                      >
                                      <v-row>
                                      <v-col cols="12" sm="6">
                                        <v-text-field
                                        style="margin:10px"
                                        v-model="titulo"
                                        background-color="#D4D4D4"
                                        onkeyup="javascript:this.value=this.value.toUpperCase();"
                                        label="Titulo Del Docente"
                                        outlined
                                        dense
                                        color="blue"
                                      autocomplete="false"
                                      />
                                      </v-col>
                                      <v-col cols="12" sm="6">


                                        <div class="input-group mb-2"   style="margin:10px;margin-left:-10px">
                                           <v-select
                                          v-model="asignatu"
                                          background-color="#D4D4D4"
                                          style=" width:60%;"
                                          :items="asignaturas"
                                          item-text="name"
                                          label="Asignaturas"
                                          dense
                                          outlined
                                        ></v-select>
                                          <button class="input-group-append"  @click="buscarAsignatura()">
                                            <span style="height: 60%; color:green;background-color:none" ><b-icon  icon="gear-fill" font-scale="2"></b-icon></span>
                                          </button>
                                        </div>
                                      </v-col> 
                                    </v-row>
                                      















                                    <v-row style="margin-top:-50px">
                                      <v-col cols="12" sm="6">
                                          <v-select
                                         v-model="grados_asigantira"
                                         background-color="#D4D4D4"
                                         @input="buscarGrado_asignatura(grados_asigantira)"
                                         style="margin:10px"
                                         :items="grados_asigantura"
                                         item-text=""
                                         label="Grados2"
                                         dense
                                         outlined
                                       ></v-select>
                                      </v-col>
                                      <v-col cols="12" sm="6">
                                        <div class="input-group mb-2"  style="margin:10px;margin-left:-10px">
                                          <v-select
                                          v-model="curso"
                                          background-color="#D4D4D4"
                                          style=" width:80%"
                                          :items="asignarcurso_asigantura"
                                          return-object
                                          item-text="nomenclature"
                                          filled
                                          chips
                                          label="cursos"
                                          multiple
                                          dense
                                          outlined
                                        ></v-select>

                                        <!--
                                        <v-select
                                        v-model="curso"
                                        background-color="#D4D4D4"
                                        style=" width:80%"
                                        :items="asignarcurso_asigantura"
                                        item-text="nomenclature"
                                        label="cursos"
                                        dense
                                        outlined
                                      ></v-select>-->
                                         
                                          <button v-if="gradosAsignados.length==0" class="input-group-append" @click="guardarAsignatura()">
                                            <span style="height: 60%; color:green;background-color:none;" ><b-icon  icon="gear" font-scale="2"></b-icon></span>
                                          </button>
                                        </div>
                                      </v-col>
                                    </v-row>















                                      <v-col cols="12" sm="12">
                                        <div style="border:solid #9B9494 0px;margin-top:-30px" >
                                          <label style="font-size:15px;font-weight: bold; ">Asignaturas asignadas:</label>
                                          <label
                                          v-for="(roles, index) in asignaturasAsignadas" :key="index"
                                          style="margin-left:10px"
                                        >
                                          
                                            <label style="font-size:15px">{{roles.name}}
                                           <label v-for="(cur, i) in roles.curso" :key="i">   <b-icon  style="color:green;" icon="arrow-right" font-scale="1"></b-icon> {{cur.nomenclature}}</label>
                                            </label>
                                            
                                              <b-icon @click="aliminarAsignatura(index)" style="color:red; height: 20px;margin-top:-20px;" icon="x-circle-fill" font-scale="1"></b-icon>
                                        </label>
                                      </div>
                                      </v-col>
                                    </v-card>
                                      
                                    <v-btn
                                    style=" margin-right:10px"
                                    color="rgba(0, 0, 255, 0.356)"
                                    @click="e1 = 1"
                                    v-if="menu!='Administrador'"
                                  >
                                   Regresar
                                  </v-btn>
                                  <v-btn
                                    style=" margin-right:10px"
                                    color="rgba(0, 0, 255, 0.356)"
                                    @click="e1 = 1"
                                    v-if="menu=='Administrador'"
                                  >
                                   Regresar
                                  </v-btn>
                                    <v-btn
                                    v-if="titulo!=''  && asignaturasAsignadas.length>=1"
                                      color="green"
                                      @click="crearDocente()"
                                    >
                                      Guardar
                                    </v-btn>

                                    <v-btn disabled
                                      
                                      v-if="titulo=='' || asignaturasAsignadas.length<=0 "
                                    >
                                      Guardar
                                    </v-btn>
                                   
                                    
                                    </v-stepper-content>
                              


<!--Estudiante datos academicos-->
<v-stepper-content step="2" v-if="menu=='Estudiante'">
<v-card 
class="mb-12 fondocaja"

height="200px"
>
<v-row>
<v-col cols="12" sm="6">
  <v-select
 v-model="grados"
 background-color="#D4D4D4"
 @input="buscarGrado(grados)"
 style=" width:80%;margin:10px"
 :items="gradoscolegio"
 item-text=""
 label="Grados2"
 dense
 outlined
></v-select>
</v-col>
<v-col cols="12" sm="6">
<div class="input-group mb-2"  style="margin:10px;margin-left:-20px">
  
  <v-select
  v-model="curso"
  background-color="#D4D4D4"
  style=" width:80%"
  :items="asiganrCurso"
  item-text="nomenclature"
  label="cursos"
  dense
  outlined
></v-select>

 
  <button v-if="gradosAsignados.length==0" class="input-group-append" @click="guardarGrado()">
    <span style="height: 60%; color:green;" ><b-icon  icon="gear" font-scale="2"></b-icon></span>
  </button>
</div>
</v-col>
</v-row> 
<v-col cols="12" sm="12" >
<div style=" text-align: center;">
<label style="font-size:20px;font-weight: bold; ">Curso asignado:</label>
<label
v-for="(roles, index) in gradosAsignados" :key="index"
style="margin-left:10px"
>
<v-avatar size="60">
<label style="font-size:20px">{{roles.nomenclature}}</label>
</v-avatar>
  <b-icon @click="aliminarGrado(index)" style="color:red; height: 20px;margin-top:-20px;" icon="x-circle-fill" font-scale="1"></b-icon>
</label>
</div>
</v-col>
</v-card>
<v-btn
                                    style=" margin-right:10px"
                                    color="rgba(0, 0, 255, 0.356)"
                                    @click="e1 = 1"
                                    v-if="menu!='Administrador'"
                                  >
                                   Regresar
                                  </v-btn>
                                  <v-btn
                                    style=" margin-right:10px"
                                    color="rgba(0, 0, 255, 0.356)"
                                    @click="e1 = 1"
                                    v-if="menu=='Administrador'"
                                  >
                                   Regresar
                                  </v-btn>
                                    <v-btn
                                    v-if="gradosAsignados.length>=1"
                                      color="green"
                                      @click="crearDocente()"
                                    >
                                      Guardar
                                    </v-btn>

                                    <v-btn disabled
                                      
                                      v-if="gradosAsignados.length<=0"
                                    >
                                      Guardar
                                    </v-btn>
                                   

</v-stepper-content>






                               <!--    <v-stepper-content step="3">
                                      <v-card
                                        class="mb-12"
                                        color="rgba(128, 128, 128, 0.267)"
                                        height="200px"
                                      >
                                      <v-col cols="12" sm="12">
                                        
                                    
                                      <vs-input v-model="usuario" style="margin-top:30px; color:#636060;border:solid 1px;border-radius:5px" border
                                      label-placeholder="Usuario O Email"
                                     >
                                         
                                        <template v-if="validEmail" #message-success>
                                          Email Valid
                                        </template>
                                        <template v-if="!validEmail && usuario !== ''" #message-danger>
                                          Email Invalid
                                        </template>
                                      </vs-input>
                                    </v-col>
                                      
                                     
                                     
                                      <v-row>
                                      <v-col cols="12" sm="6">
                                        <v-text-field
                                        style="margin:10px"
                                        v-model="contrasena1"
                                        type="password"
                                        label="Contraseña"
                                        outlined
                                        dense
                                        color="blue"
                                      autocomplete="false"
                                      
                                      
                                      />
                                    </v-col>
                                    <v-col cols="12" sm="6">
                                      <v-text-field
                                      style="margin:10px"
                                      v-model="contrasena2"
                                      type="password"
                                      label="Confirme La Contraseña"
                                      outlined
                                      dense
                                      color="blue"
                                    autocomplete="false"
                                    
                                    
                                    />
                                  </v-col></v-row>
                                    </v-card>
                                    <v-btn
                                    style=" margin-right:10px"
                                    color="rgba(0, 0, 255, 0.356)"
                                    @click="e1 = 2"
                                    v-if="menu!='Administrador'"
                                  >
                                   Regresar
                                  </v-btn>
                                  <v-btn
                                    style=" margin-right:10px"
                                    color="rgba(0, 0, 255, 0.356)"
                                    @click="e1 = 1"
                                    v-if="menu=='Administrador'"
                                  >
                                   Regresar
                                  </v-btn>
                                    <v-btn
                                    v-if="usuario!=''  && contrasena1!='' &&contrasena2!=''"
                                      color="green"
                                      @click="crearDocente()"
                                    >
                                      Guardar
                                    </v-btn>

                                    <v-btn disabled
                                      
                                      v-if="usuario=='' || contrasena1=='' || contrasena2==''"
                                    >
                                      Guardar
                                    </v-btn>
                                   
                                    </v-stepper-content>-->
                                  </v-stepper-items>
                                </v-stepper>
                              </template>
                                    
                                    <!-------
                                    <v-col cols="12" sm="12">
                                      
                                      <b-form-select    v-model="menu">
                                      
                                        <option value="">Rol</option>
                                        <option value="Docente">Docente</option>
                                        <option value="Estudiante">Estudiante</option>
                                        <option value="Administrador">Administrador</option>
                                       </b-form-select>
                                       <pre>{{$data}}</pre>
                                    </v-col>
                             
                           

                             <div v-if="menu=='Estudiante'">
                              <v-row>
                              <v-col cols="12" sm="6">
                               <v-text-field
                               v-model="name"
                               label="Digite Nombres"
                               outlined
                               dense
                               color="blue"
                               autocomplete="false"
                              class="mt-4"
                             />
                              </v-col>
                              <v-col cols="12" sm="6">
                               <v-text-field
                               v-model="apellido"
                               label="Digite Apellidos"
                               outlined
                               dense
                               color="blue"
                               autocomplete="false"
                              class="mt-4"
               
                             />
                              </v-col>
                              </v-row>
 
 
 
 
 
 
 
 
                              <v-row>
                               <v-col cols="12" sm="6">
                                 
                                 <b-form-select    v-model="selected">
                                 
                                   <option value="null">Sexo</option>
                                   <option value="M">M</option>
                                   <option value="F">F</option>
                                  </b-form-select>
                               </v-col>
                               
                                   <v-col cols="12" sm="6">
                                 
                                     <b-form-select    v-model="grados" @input="buscarGrado(grados)">
                                     
                                       <option value="null">Grado</option>
                                       <option value="2">2</option>
                                       <option value="7">7</option>
                                       <option value="8">8</option>
                                       <option value="9">9</option>
                                       <option value="11">11</option>
                                      </b-form-select>
                                   </v-col>
                                   <v-col cols="12" sm="6">
                                     <div class="input-group mb-2">
                                       
                                       <v-select
                                       v-model="curso"
                                       style=" width:80%"
                                       :items="asiganrCurso"
                                       item-text="nomenclature"
                                       label="cursos"
                                       dense
                                       outlined
                                     ></v-select>
                                   
                                      
                                       <button class="input-group-append" @click="guardarGrado()">
                                         <span style="height: 60%; color:green;" class="input-group-text"><b-icon  icon="patch-check" font-scale="1.5"></b-icon></span>
                                       </button>
                                     </div>
                                   </v-col>
                                   <v-col cols="12" sm="6" >
                                     <div style="border:solid #9B9494 1px">
                                     <label style="font-size:15px;font-weight: bold; ">Curso asignado:</label>
                                     <label
                                     v-for="(roles, index) in gradosAsignados" :key="index"
                                     style="margin-left:10px"
                                   >
                                     <v-avatar size="40">
                                       <label style="font-size:15px">{{roles.nomenclature}}</label>
                                     </v-avatar>
                                         <b-icon @click="aliminarGrado(index)" style="color:red; height: 20px;margin-top:-20px;" icon="x-circle-fill" font-scale="1"></b-icon>
                                   </label>
                                 </div>
                                   </v-col>
                                   <v-col cols="12" sm="6">


                                     <div class="input-group mb-2">
                                        <v-select
                                       v-model="asignatu"
                                       style=" width:80%"
                                       :items="asignaturas"
                                       item-text="name"
                                       label="Asignaturas"
                                       dense
                                       outlined
                                     ></v-select>
                                       <button class="input-group-append" @click="guardarAsignatura()">
                                         <span style="height: 60%; color:green;" class="input-group-text"><b-icon  icon="journal-check" font-scale="1.5"></b-icon></span>
                                       </button>
                                     </div>
                                   </v-col>
                                   <v-col cols="12" sm="6">
                                     <div style="border:solid #9B9494 1px">
                                       <label style="font-size:15px;font-weight: bold; ">Asignaturas asignadas:</label>
                                       <label
                                       v-for="(roles, index) in asignaturasAsignadas" :key="index"
                                       style="margin-left:10px"
                                     >
                                       
                                         <label style="font-size:15px">{{roles.name}}</label>
                                       
                                           <b-icon @click="aliminarAsignatura(index)" style="color:red; height: 20px;margin-top:-20px;" icon="x-circle-fill" font-scale="1"></b-icon>
                                     </label>
                                   </div>
                                   </v-col>
                              
                                   <v-col cols="12" sm="12">
                                     <v-text-field
                                     v-model="usuario"
                                     label="usuario"
                                     outlined
                                     dense
                                     color="blue"
                                   autocomplete="false"
                                   
                                   
                                   /></v-col>
                                   <v-col cols="12" sm="6">
                                     <v-text-field
                                     v-model="contrasena1"
                                     type="password"
                                     label="Contraseña"
                                     outlined
                                     dense
                                     color="blue"
                                   autocomplete="false"
                                   
                                   
                                   />
                                 </v-col>
                                 <v-col cols="12" sm="6">
                                   <v-text-field
                                   v-model="contrasena2"
                                   type="password"
                                   label="Confirme La Contraseña"
                                   outlined
                                   dense
                                   color="blue"
                                 autocomplete="false"
                                 
                                 
                                 />
                               </v-col>
                               </v-row>
                               <center> <b-button @click="crearEstudiantes()"  variant="info" ><b-icon icon="person-plus" font-scale="2"></b-icon>  Guardar</b-button></center>
                             </div>



                        
                                   <div v-if="menu=='Administrador'">
                                    <v-row>
                                      <v-col cols="12" sm="6">
                                       <v-text-field
                                       v-model="name"
                                       label="Digite Nombres"
                                       outlined
                                       dense
                                       color="blue"
                                       autocomplete="false"
                                      class="mt-4"
                                     />
                                      </v-col>
                                      <v-col cols="12" sm="6">
                                       <v-text-field
                                       v-model="apellido"
                                       label="Digite Apellidos"
                                       outlined
                                       dense
                                       color="blue"
                                       autocomplete="false"
                                      class="mt-4"
                       
                                     />
                                      </v-col>
                                      </v-row>
         
         
         
         
         
         
         
         
                                      <v-row>
                                       <v-col cols="12" sm="6">
                                         
                                         <b-form-select    v-model="selected">
                                         
                                           <option disabled selected>Sexo</option>
                                           <option value="M">M</option>
                                           <option value="F">F</option>
                                          </b-form-select>
                                       </v-col>
                                       
                                       
                                         
                                         
                                          
                                           <v-col cols="12" sm="6">
                                             <v-text-field
                                             v-model="usuario"
                                             label="usuario"
                                             outlined
                                             dense
                                             color="blue"
                                           autocomplete="false"
                                           
                                           
                                           /></v-col>
                                           <v-col cols="12" sm="6">
                                             <v-text-field
                                             v-model="contrasena1"
                                             type="password"
                                             label="Contraseña"
                                             outlined
                                             dense
                                             color="blue"
                                           autocomplete="false"
                                           
                                           
                                           />
                                         </v-col>
                                         <v-col cols="12" sm="6">
                                           <v-text-field
                                           v-model="contrasena2"
                                           type="password"
                                           label="Confirme La Contraseña"
                                           outlined
                                           dense
                                           color="blue"
                                         autocomplete="false"
                                         
                                         
                                         />
                                       </v-col>
                                       </v-row>
                                       <center> <b-button @click=" crearAdmin()"  variant="info" ><b-icon icon="person-plus" font-scale="2"></b-icon>  Guardar</b-button></center>
                                   
                                   </div>
                        ------>
                                
                                
                                   



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
    
  
  
  </div>
  </v-col>
  </v-row>
                            
        
          
         
          </div>
        
          </div>
        
   
  <!--<pre>{{$data}}</pre>-->
    </div>
</template>

<script>

//import PageTitle from "../Layout/Components/PageTitle.vue";
//import menu from '../config/menu'
import axios from 'axios'


  export default {
      components: {
        //  PageTitle
      },

   data: function(){
    
    return{
      asignaturasAsignadas:[],
      menuEstudiante:[
        {
                header: true,
                title: 'ESTUDIANTE',
            },{
                icon: 'pe-7s-note2',
                title: 'Asignaturas',
                href: '/dashboard/welcome/asignaturaPeople',
            },
            {
                icon: 'pe-7s-note2',
                title: 'Micro Clase',
                href: '/dashboard/welcome/MicroClaseEstu',
            }],
      menuDocente:[
        {
                header: true,
                title: 'DOCENTE',
            },{
                icon: 'pe-7s-note2',
                title: 'Asignaturas',
                href: '/dashboard/welcome/asignaturaPeople',
            }
      ],
      menuAdmin:[{
                header: true,
                title: 'ADMINISTRADOR',
            },
            {
                icon: 'pe-7s-global',
                title: 'Escuela',
                child: [{
                        title: 'Crear',
                        href: '/dashboard/creaEscuela',

                    },
                    {
                        title: 'Listar',
                        href: '/dashboard/listaEscuela',
                    },

                ],
            },
            {
                icon: 'pe-7s-portfolio',
                title: 'Cursos',
                child: [{
                        title: 'Crear',
                        href: '/dashboard/creaCurso',

                    },
                    {
                        title: 'Listar',
                        href: '/dashboard/listaCurso',
                    },

                ],
            },
            {
                icon: 'pe-7s-settings',
                title: 'Roles',
                child: [{
                        title: 'Crear',
                        href: '/dashboard/creaRol',

                    },
                    {
                        title: 'Listar',
                        href: '/dashboard/listarRol',
                    },

                ],
            },
            {
                icon: 'pe-7s-plugin',
                title: 'Asignaturas',
                child: [{
                        title: 'Crear',
                        href: '/dashboard/creaAsignatura',

                    },
                    {
                        title: 'Listar',
                        href: '/dashboard/listaAsignatura',
                    },

                ],
            },
            {
                icon: 'pe-7s-add-user',
                title: 'Usuarios',
                child: [{
                        title: 'Docente',
                        // href: '/dashboard/registrarEstudiante',
                        child: [{
                                title: 'Crear',
                                href: '/dashboard/creaUsuario/1',

                            },
                            {
                                title: 'Listar',
                                href: '/dashboard/listarUsuario/1',
                            },
                        ]
                    },
                    {
                        title: 'Estudiante',
                        // href: '/dashboard/registrarEstudiante',
                        child: [{
                                title: 'Crear',
                                href: '/dashboard/creaUsuario/2',

                            },
                            {
                                title: 'Listar',
                                href: '/dashboard/listarUsuario/2',
                            },
                        ]
                    },

                    {
                        title: 'Administrador',
                        // href: '/dashboard/registrarEstudiante',
                        child: [{
                                title: 'Crear',
                                href: '/dashboard/creaUsuario/3',

                            },
                            {
                                title: 'Listar',
                                href: '/dashboard/listarUsuario/3',
                            },
                        ]
                    },

                ],
            },


        ],
        pru:null,
      prueba:null,
      usuaios_todos:[],
      pantalla:null,
      e1: 1,
      curso:null,
      grados_asigantira:null,
      grados:null,
      gradosBaseAsignatura:[],
      gradosBase:[],
      cursos:null,
      apellido:"",
      gradosAsignados:[],
      asiganrCurso:[],
      asignarcurso_asigantura:[],
      menu:"",
      usuario:"",
      contrasena2:"",
      contrasena1:"",
      fn:null,
      titulo:"",
      asignaturas:[],
      asignatu:null,
      
      heading: '',
      icon: 'pe-7s-add-user icon-gradient bg-tempting-azure',
      subheading: 'Formulario de registro...',
      selected:"",
      hasSaved:false,
  msg:"",
  items: ['M', 'F', 'Otro',],
  gradoscolegio:[],
name:"",
grados_asigantura:[],

    }
  },
  props: {
    source: String
  }, 
mounted() {
 
  setInterval(this.created, 10);
  //this.traerasignaturas()
 this.CargarTodosLosGrados()
      this.axios.get('http://localhost:3001/schools')
    .then((response) => {
       console.log(response.data)
        this.gradoscolegio = response.data[0].grade;
       
      })
      this.axios.get('http://localhost:3001/areas')
    .then((response) => {
       console.log(response.data)
        this.asignaturas = response.data;
        
      })
  },
  computed: {
        validEmail() {
          
          return  /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(this.usuario)
        },
       
      },
  methods:{
    vuelveInicio(){
      this.$router.push('/dashboard/welcome');
    },

    CargarTodosLosGrados(){
      this.axios.get('http://localhost:3001/courses')
    .then((response) => {
       console.log("grados " + JSON.stringify(response.data))
        this.gradosBase = response.data;
        this.gradosBaseAsignatura= response.data;
      })
    },
    buscarAsignatura(){
      for (let i = 0; i < this.asignaturas.length; i++) {
          if(this.asignaturas[i].name==this.asignatu){
            this.grados_asigantura=this.asignaturas[i].courses
            this.msg="Grados cargados."
         this.hasSaved=true
          }
      }
    },
    created(){
    this.pantalla=this.$route.params.id
    if(this.pantalla==1){
            this.menu="Docente"
            this.heading="REGISTRO DE DOCENTE"
            
          }
          if(this.pantalla==2){
            this.menu="Estudiante"
            this.heading="REGISTRO DE ESTUDIANTE"
          }
          if(this.pantalla==3){
            this.menu="Administrador"
            this.heading="REGISTRO DE ADMINISTRADOR"
            if(this.e1==2){
              this.e1=1;
            }
          }
  },
    aliminarGrado(p){
      //for (let i = 0; i < this.gradosAsignados.length; i++) {
        
        this.gradosAsignados.splice(p, 1);
    },
    aliminarAsignatura(p){
      //for (let i = 0; i < this.gradosAsignados.length; i++) {
        
        this.asignaturasAsignadas.splice(p, 1);
    },
    guardarGrado(){
      for (let i = 0; i < this.asiganrCurso.length; i++) {
       if(this.asiganrCurso[i].nomenclature==this.curso){
        this.gradosAsignados.push(this.asiganrCurso[i])
        this.grados=null
        this.asiganrCurso=[]
       }
}
    },
    guardarAsignatura(){
      for (let i = 0; i < this.asignaturas.length; i++) {
       if(this.asignaturas[i].name==this.asignatu){
        let x =new Object
        x._id=this.asignaturas[i]._id;
        x.name=this.asignaturas[i].name;
        x.creation_date=this.asignaturas[i].creation_date;
        //x.courses=this.asignaturas[i].courses;
        x.curso=this.curso
        console.log("valor curso" + JSON.stringify(this.curso))
        this.asignaturasAsignadas.push(x)
        console.log( this.asignaturasAsignadas)
       this.asignatu=null;
       this.grados_asigantira=null;
       this.curso=null;
      this.grados_asigantura=[]
       }
}
    },

    buscarGrado (grados ) {
      console.log("buscando grados")
     let x= grados.toString()
      this.asiganrCurso = this.gradosBase.filter(route => route.grade.toLowerCase().startsWith(x.toLowerCase()));
      console.log("cursos seleccionados " + JSON.stringify(this.asiganrCurso))
     
    
    },
    traerasignaturas(){
      this.axios.get('http://localhost:3001/peoples')
      .then((response) => {
        this.usuaios_todos=response.data
        for (let i = 0; i < this.usuaios_todos.length; i++) {
          for (let j = 0; j < this.usuaios_todos[i].asignatures.length; j++) {
            for (let x = 0; x < this.asignarcurso_asigantura.length; x++) {
              for (let h = 0; h < this.usuaios_todos[i].asignatures[j].curso.length; h++) {
       if(this.usuaios_todos[i].asignatures[j].name==this.asignatu && this.asignarcurso_asigantura[x].nomenclature==this.usuaios_todos[i].asignatures[j].curso[h]){
       
        this.asignarcurso_asigantura.splice(x,1)
        }
      }
      }
          }
      }
       })
    },
    buscarGrado_asignatura (grados_asigantira) {
      
      let x= grados_asigantira.toString()
      
      this.asignarcurso_asigantura = this.gradosBaseAsignatura.filter(route => route.grade.toLowerCase().startsWith(x.toLowerCase()));
      console.log("grados " + JSON.stringify(this.asignarcurso_asigantura))
      this.traerasignaturas()
     
    },
    limpiar(){
     // this.dialogo = false
     this.name="";
      this.apellido="";
      this.menu="";
      this.usuario="";
      this.contrasena2="";
      this.contrasena1="";
      this.fn="";
      this.titulo="";
      this.asignatura="";
      this.selected="";
      this.asignaturasAsignadas=[];
    },
    pasaPantalla2(){
      if(this.usuario!=null && this.usuario!=""){
        if(this.validEmail==true){
          if(this.contrasena1!=null && this.contrasena1!=""){
            this.e1=2
          }else{
      this.msg="El campo N° Identificación es necesario."
        this.hasSaved=true
    }
        }else{
      this.msg="Introdusca Una Direccion De Correo Valida"
        this.hasSaved=true
    }
      }else{
      this.msg="El campo Usuario es necesario."
        this.hasSaved=true
    }
    },
        crearDocente(){
     if(this.menu=='Estudiante'){
      this.pru=this.menuEstudiante;
     }
     if(this.menu=='Docente'){
      this.pru=this.menuDocente;
     }
     if(this.menu=='Administrador'){
      this.pru=this.menuAdmin;
     }
    const d = new Date();
      let json={
      "name":this.name,
    "last_name":this.apellido,
    "gender":this.selected,
    "rol":this.menu,
   "title":this.titulo,
   // "fechaNacimiento":this.fn,
    "asignatures":this.asignaturasAsignadas,
    "course":this.gradosAsignados,
    "courestu" : null,
     "username":this.usuario,
    "identification":this.contrasena1,
    "password":this.contrasena1,
    "menu":this.pru,
    "creation_date":d.toUTCString(),
     };
     console.log('creando el usuario');
     console.log(json);
     if (this.menu == 'Estudiante')
      json.courestu = this.gradosAsignados[0]._id;

    axios.post('http://localhost:3001/peoples',json)
    .then((response) => {
      console.log(response)
      if(response.status =="200"){
        this.msg="El Usuario Se Guardo Exitosamente."
         this.hasSaved=true
         this.limpiar()
         this.e1= 1
      }
    }).catch((error) => {
        if(error.response.status=="500"){
        this.msg="Ocurrio Un Error Vuelve A Intentar"
        this.hasSaved=true
        }
      })
   
    
 
    
    
    
    
     
      
     
     // this.$router.push('about');
    },/*
    crearEstudiantes(){
          if(this.name!=null){
            if(this.apellido!=null){
              if(this.selected!=null){
     //           if(this.titulo!=null){
                  if(this.gradosAsignados.length>=1){
                    if(this.asignaturasAsignadas.length>=1){
                      if(this.usuario!=null && this.usuario!=""){
                        if(this.contrasena1!=null && this.contrasena1!=""){
                          if(this.contrasena1=== this.contrasena2){
    const d = new Date();
      let json={
      "name":this.name,
    "last_name":this.apellido,
    "gender":this.selected,
    "rol":this.menu,
   //"title":this.titulo,
   // "fechaNacimiento":this.fn,
    "asignatures":this.asignaturasAsignadas,
    "courses":this.gradosAsignados,
    "username":this.usuario,
    "password":this.contrasena1,
    "creation_date":d.toUTCString(),
     };
    axios.post('https://trackappserver.herokuapp.com/peoples',json)
    .then((response) => {
      console.log(response)
      if(response.status =="200"){
        this.msg="El Usuario Se Guardo Exitosamente."
         this.hasSaved=true
         this.limpiar()
      }
    }).catch((error) => {
        if(error.response.status=="500"){
        this.msg="Ocurrio Un Error Vuelve A Intentar"
        this.hasSaved=true
        }
      })
    }else{
      this.msg="Las contraseñas no coinsiden"
        this.hasSaved=true
    }
    }else{
      this.msg="El campo Contraseña es necesario."
        this.hasSaved=true
    }
    }else{
      this.msg="El campo Usuario es necesario."
        this.hasSaved=true
    }
    }else{
      this.msg="Recuerde asignar Asignaturas."
        this.hasSaved=true
    } 
    }else{
      this.msg="Recuerde asignar Cursos."
        this.hasSaved=true
    } 
    
    }else{
      this.msg="El campo Sexo es necesario."
        this.hasSaved=true
    }  
    }else{
      this.msg="El campo Apellido es necesario."
        this.hasSaved=true
    }  
    }else{
      this.msg="El campo nombre es necesario."
        this.hasSaved=true
    }   
    
     
      
     
     // this.$router.push('about');
    },
    crearAdmin(){
          if(this.name!=null){
            if(this.apellido!=null){
              if(this.selected!=null){
     //         
                      if(this.usuario!=null && this.usuario!=""){
                        if(this.contrasena1!=null && this.contrasena1!=""){
                          if(this.contrasena1=== this.contrasena2){
    const d = new Date();
      let json={
      "name":this.name,
    "last_name":this.apellido,
    "gender":this.selected,
    "rol":this.menu,
   //"title":this.titulo,
   // "fechaNacimiento":this.fn,
    //"asignatures":this.asignaturasAsignadas,
   // "courses":this.gradosAsignados,
    "username":this.usuario,
    "password":this.contrasena1,
    "creation_date":d.toUTCString(),
     };
    axios.post('https://trackappserver.herokuapp.com/peoples',json)
    .then((response) => {
      console.log(response)
      if(response.status =="200"){
        this.msg="El Usuario Se Guardo Exitosamente."
         this.hasSaved=true
         this.limpiar()
      }
    }).catch((error) => {
        if(error.response.status=="500"){
        this.msg="Ocurrio Un Error Vuelve A Intentar"
        this.hasSaved=true
        }
      })
    }else{
      this.msg="Las contraseñas no coinsiden"
        this.hasSaved=true
    }
    }else{
      this.msg="El campo Contraseña es necesario."
        this.hasSaved=true
    }
    }else{
      this.msg="El campo Usuario es necesario."
        this.hasSaved=true
    }
    
    
    }else{
      this.msg="El campo Sexo es necesario."
        this.hasSaved=true
    }  
    }else{
      this.msg="El campo Apellido es necesario."
        this.hasSaved=true
    }  
    }else{
      this.msg="El campo nombre es necesario."
        this.hasSaved=true
    }   
    
     
      
     
     // this.$router.push('about');
    },*/
   // limpiar(){
   //   this.dialogo = false
    //  this.name="";
     
   
     // this.hasSaved=true
  //  }
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
.fondosub{
  background-image:url("../../assets/disenomio.png");
  background-repeat: no-repeat;
  background-size: cover;

margin:0; 
}
.fondoTitle{
  background-image:url("../../assets/Tulbar.png");
  background-repeat: no-repeat;
  background-size: cover;
  margin:0;
  font: oblique bold 20px cursive;
  text-transform: uppercase;
  color: black;
  text-shadow: 0  2px 0 rgb(99, 168, 247),
  0  4px 0 rgb(99, 168, 247);
               
               
}
.fondocard{
  background-image:url("../../assets/Background.png");
background-size: 100% 100%;

}
.fondocaja{
  background-image:url("../../assets/Background.png");
background-size: 100% 100%;

}
</style>
