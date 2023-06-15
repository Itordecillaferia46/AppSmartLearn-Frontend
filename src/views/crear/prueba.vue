<template>
<div>    <v-avatar
        color="red"
        size="30"
        style="float:right;margin-right:40px;margin-top:10px"
      >
        <button @click="vuelveInicio()" class="white--text text-h5">X</button>
      </v-avatar>
      <v-row align="center" justify="center">
          <v-col cols="12" sm="10">
            <div id="personal"  style="width: 90%; margin-left:50px" class="fondosub">   
              <div class="row justify-content-md-center">
          
                  <v-row >
                    <v-col  cols="12" md="6"  class="image-col rounded-br-xl">
                     <div style="  text-align: center; padding: 5px 0;">
                      <div class="text-center" style="height:60px">
                       
                      </div>
                      </div>
                    </v-col>

                    <v-col cols="12" md="6">
                      <v-card-text class="mt-12">
                        <h4 class="text-center">AGREGAR DATOS DE LA INSTITUCIÓN</h4>
                          <h6 class="text-center  grey--text">
                            Ingresar los datos solicitados.
                          </h6>
                          <br><br>
                        <v-row align="center" justify="center">
                          <v-col cols="12" sm="8">
                              <v-row>
                                <!-- <v-col cols="12" sm="100%"> -->
                                  <v-text-field
                                  rounded
                                  background-color="#f6f2f2"
                                  dense
                                  v-model="name"
                                  label="Nombre"
                                  outlined
                                  color="blue"
                                  autocomplete="false"
                                  />
                                  <!-- </v-col> -->
                                </v-row>
                                <v-row cols="12" sm="100%">
                                  <!-- <v-col> -->
                                  <v-text-field
                                  rounded
                                  background-color="#f6f2f2"
                                  v-model="direction"
                                  label="Dirección"
                                  outlined
                                  dense
                                  color="blue"
                                  autocomplete="false"
                                  />
                                <!-- </v-col> -->
                              </v-row>
                                <v-row>
                                  <!-- <v-col cols="12" sm="100%"> -->
                                  <v-text-field
                                  rounded
                                  background-color="#f6f2f2"
                                  v-model="contact"
                                  label="Contacto"
                                  outlined
                                  dense
                                  color="blue"
                                  autocomplete="false"
                                  />
                                  <!-- </v-col> -->
                                </v-row>
                                  
                                <v-row>
                                      <v-checkbox
                                        color="#3BA839"
                                        dense
                                        v-model="primary"
                                        label="Primaria (1°,2°,3°,4°,5°)"
                                        value="primaria"
                                      ></v-checkbox>
                                      <v-checkbox
                                      color="#3BA839"
                                        dense
                                        v-model="secundary"
                                        label="Bachillerato (6°,7°,8°,9°,10°,11°)"
                                        value="secundaria"
                                      ></v-checkbox>
                                </v-row>
  
                         
                            <center> 
                            <vs-button @click="crear('bottom-center', vsColor)">
                                GUARDAR
                              </vs-button>
                            </center>
                            
                            <br> <br> <br>
                                <div>
                                  <v-snackbar
                                  v-model="hasSaved"
                                  :timeout="2000"
                                  absolute
                                  bottom
                                  left
                                  color="red"
                                >
                                  {{msg}}
                                </v-snackbar>
                                </div>
                            </v-col>
                          </v-row>  
                        </v-card-text>
                      </v-col>
                    </v-row>
              </div>
            </div>
            </v-col>
        </v-row>
  
        <!-- <v-dialog v-model="dialogo" persistent max-width="500">
        
        <v-card :style="colo">
          <v-card-title class="text-h5 justify-center">
            {{mensaje}}
          </v-card-title>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="black darken-1" text @click="limpiar()"
                    style=" background-color:#05AFF2;"             >
            OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog> -->
  
      
  
    </div></template>