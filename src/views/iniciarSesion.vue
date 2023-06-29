<template>
<div class="background" fluid>
  <v-app-bar  dark style="background: linear-gradient(90deg, rgba(0,112,192,0.75) 0%, rgba(112,48,160,0.5) 51%);">
        <img src="../assets/logos/Logo.svg"  class="icon-move" width="50" alt="Logo" />

      <v-toolbar-title class="font-weight-bold text-h5 mx-2">
        SmartLearn
      </v-toolbar-title>

      <v-spacer></v-spacer>

     
      
      <v-spacer></v-spacer>
  
      <v-btn dark rounded text @click="dialog=true" class="mx-3 text-capitalize" >
        <v-icon x-large>mdi-account</v-icon> Iniciar Sesión
      </v-btn>

  
    </v-app-bar>


<v-container fluid  > 
      <div class="row">
        <div class="col-6 my-auto">
            <v-img
              contain
              max-height="500"
              max-width="500"
              class="mx-auto"
              src="../assets/logos/Logotipo.svg"
            >
          </v-img>
          <v-divider class="my-0"></v-divider>
          <div class="container-md">
            <p class="text-center purple--text text-h5"> Tiene como objetivo ofrecer a una solución eficiente para la organización de tareas y la planificación de clases en el entorno académico.</p>
        </div>

   
         

        </div>
        <div class="col-6 my-auto">
          <div class="">
            <v-img
              max-width="520"
              src="../assets/PortalEducativo.svg"
              class="mx-auto"
            ></v-img>
          </div> 
        </div>
      </div>

  
  
      <div class="fondo" >
        <v-row>  
          <v-dialog v-model="dialog" max-width="350" height="400"> 
          <div class="container h-60">
            <div class="d-flex justify-content-center h-50">
              <div class="user_card">
                <div class="d-flex justify-content-center">
                  <div class="brand_logo_container">
                    <img src="../assets/logos/Logo_Color.svg" class="brand_logo"  alt="Logo">
                  </div>
                </div>
                <div class="d-flex justify-content-center form_container">
                  <form v-on:submit.prevent>
                    <div class="input-group mb-3">
                      <div class="input-group-append">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                      </div>
                      <input v-model="usuario" type="text" name="" class="form-control input_user" placeholder="Username">
                    </div>
                    <div class="input-group mb-2">
                      <div class="input-group-append">
                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                      </div>
                      <input v-model="contrasena" type="password" name="" class="form-control input_pass" placeholder="Password">
                    </div>
                      <div class="d-flex justify-content-center mt-3 login_container" v-if="prueba==0">
                   <vs-button dark  class="btn login_btn" @click="login">Iniciar Sesión</vs-button>
                   </div>
                   <div class="d-flex justify-content-center mt-3 login_container" v-if="prueba==1">
                    <vs-button class="btn login_btn"  loading  dark  >
                      Iniciar Sesión
                    </vs-button>
                  </div>
                   <v-snackbar
                    v-model="isBusy"
                    :timeout="2000"
                    absolute
                    bottom
                
                color="red"
              >
                {{msg}}
              </v-snackbar>
                  </form>
                </div>
                
                
                <div class="mt-4">
                  <div class="d-flex justify-content-center links">
                    <a href="#" style="color: black">¿olvidaste tu contraseña?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--  <vs-button flat color="#7d33ff" icon
              @click="openNotification('top-center', '#7d33ff')">
              <i class='bx bx-border-top' ></i>
            </vs-button>-->
          </v-dialog>
  

          </v-row>
        </div>
       
       
       <!-- <div class="fondo2">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                <v-timeline-item
                  color="purple lighten-2"
                  fill-dot
                  right
                >
                  <v-card>
                    <v-card-title class="purple lighten-2">
                      <v-icon
                        dark
                        size="42"
                        class="mr-4"
                      >
                        mdi-magnify
                      </v-icon>
                      <h2 class="text-h4 white--text font-weight-light" style=" font-weight: bold;">
                        ¿Que es EDUCODE?
                      </h2>
                    </v-card-title>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          md="10"
                          class="letras2"
                        >
                        Educode es un software gratuito, sin fines de lucro. Tiene como objetivo principal enseñar conceptos basicos de programacion mediante el uso de Pseudocodigos, para generar en los estudiantes un aprendizaje significativo.
                        </v-col>
                        <v-col
                          class="hidden-sm-and-down text-right"
                          md="2"
                        >
                          <v-icon size="64">
                            mdi-calendar-text
                          </v-icon>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-timeline-item>
          
                <v-timeline-item
                  color="amber lighten-1"
                  fill-dot
                  left
                  small
                >
                  <v-card>
                    <v-card-title class="amber lighten-1 justify-end">
                      <h2 class="text-h4 mr-4 white--text font-weight-light">
                        Historia de EDUCODE
                      </h2>
                      <v-icon
                        dark
                        size="42"
                      >
                        mdi-home-outline
                      </v-icon>
                    </v-card-title>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          md="10"
                          class="letras2"
                        >
                          Educode nace como alternativa para ayudar a solucionar dificultades evidenciadas en estudiantes al momento de resolver problemas mediante el uso de algoritmos.
                        </v-col>
                      
                      </v-row>
                    </v-container>
                  </v-card>
                </v-timeline-item>
          
                <v-timeline-item
                  color="cyan lighten-1"
                  fill-dot
                  right
                >
                  <v-card>
                    <v-card-title class="cyan lighten-1">
                      <v-icon
                        class="mr-4"
                        dark
                        size="42"
                      >
                        mdi-book-check
                      </v-icon>
                      <h2 class="text-h4 white--text font-weight-light">
                        Objetivos de EDUCODE
                      </h2>
                    </v-card-title>
                    <v-container>
                      <v-row>
                        <v-col
                          cols="12"
                          md="10"
                          class="letras2"
                        >
                          Este software educativo espera posicionarse en el mercado digital, como una alternativa que puedan adaptar las instituciones educativas al momento de enseñar temas relacionados a los algortmos.
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-timeline-item>
          
                <v-timeline-item
                  color="red lighten-1"
                  fill-dot
                  left
                  small
                >
                  <v-card>
                    <v-card-title class="red lighten-1 justify-end">
                      <h2 class="text-h4 mr-4 white--text font-weight-light">
                        ¿Como funciona EDUCODE?
                      </h2>
                      <v-icon
                        dark
                        size="42"
                      >
                        mdi-account-multiple-outline
                      </v-icon>
                    </v-card-title>
                    <v-container>
                      <v-row>
                        <v-col
                          class="hidden-sm-and-down"
                          md="2"
                        >
                          <v-icon size="64">
                            mdi-server-network
                          </v-icon>
                        </v-col>
                        <v-col
                          cols="12"
                          md="10"
                          class="letras2"
                        >
                         Educode es una plataforma que plantea diferentes desafios para que los estudiantes superen, estos estan basados en conceptos basicos de programación.
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-timeline-item>
          
                <v-timeline-item
                  color="green lighten-1"
                  fill-dot
                  right
                >
                  <v-card>
                    <v-card-title class="green lighten-1">
                      <v-icon
                        class="mr-4"
                        dark
                        size="42"
                      >
                        mdi-code-tags-check
                      </v-icon>
                      <h2 class="text-h4 white--text font-weight-light">
                        ¡MOTIVATE! Recurda esto.
                      </h2>
                    </v-card-title>
                    <v-container>
                      <v-row>
                        <v-col class="letras2">
                          <li>
                              "No tienes que ser grande para comenzar, pero tienes que comenzar para ser grande” Zig Ziglar.
                          </li>
                          <li>
                            "Si crees que algo es imposible, tú lo harás posible” Bruce Lee.
                          </li>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card>
                </v-timeline-item>
              </v-timeline>
            </v-col>
          </v-row>
        </v-container>
        </div>  -->
    </v-container>
  </div>
  </template>
  <script>
   /* data () {
        return {
          dialog: false,
        }
      },*/
  
  import axios from 'axios'
    
    export default {
      name: 'App',
      data: () => ({
        active: 'home',
        dialog: false,
        usuario:"",
        noti:null,
        contrasena:"",
        error:false,
        msg:"",
        isBusy: false,
        prueba: 0,
        array: [],
        rolMenu: []
      }),
           
        methods: {
          
     async  login() {
       // this.isBusy=true
       if(this.usuario!=""){
        if(this.contrasena!=""){
        this.prueba=1;
        let autentication = {
          "username": this.usuario,
          "password": this.contrasena,
        };
        
        await axios.post("http://localhost:3001/auth", autentication).then((data) => {
            if(data.status === 200)
            console.log(data);
            /* if(data.data.rol == "Administrador"){
            } */
            /* if(data.data.rol == "Administrador"){
              axios.get('http://localhost:3001/roles')
              .then((response) => {
              console.log(response.data)
              for (i of response.data){
                if(i.name == "ADMINISTRADOR"){
                  console.log(i.menu[0]);
                  // this.$store.commit("setMenu", i.menu[0].toString());
                }
              }           })
            this.$store.commit("setAsignaturasDocente", this.array);
          }

            if(data.data.rol == "Docente"){
              axios.get('http://localhost:3001/roles')
              .then((response) => {
              console.log(response)
                this.rolMenu=response.data;
                console.log(response.data[0].menu[0])
                })
            for(var i in data.data.asignatures){
              this.array.push(data.data.asignatures[i].name)
            }
            this.$store.commit("setAsignaturasDocente", this.array);
            console.log(this.$store.state.asignaturasDocente);
          } */

        console.log(data.data);
        this.$store.state.userData = data.data;
            this.$router.push('dashboard/welcome');
             }).catch((error)=>{
              this.error = true;
              console.log(error);
              this.msg="Usuario O Contraseña Son Incorrectos"
              this.isBusy=true
              this.prueba=0;
             });
            }else{
              this.msg="El Campo Contraseña Es Necesario"
              this.isBusy=true
             }
             }else{
              this.msg="El Campo Usuario Es Necesario"
              this.isBusy=true
             }
            }
          }
    };
  
  </script>
  <style scoped>
    
    :root {
    --bd-azul: #59DCE4;
    --bd-violet: #712cf9;
    --bd-accent: #ffe484;
  }
  .icon-move{
    animation: fly 1s infinite alternate;
    transition: all 1s;
  }

  .icon-move:hover{
    rotate: calc(10deg);
  }

  @keyframes fly {
    to {
      transform: translateY(-2px);
    }
  }
  .background{
    background-image:url("../assets/Background.svg");
    background-size: cover;
    background-attachment: fixed;
    margin:0; 
    position: absolute;  
    width: 100%;
    height: 100%;
  }
  .fondo2{
    background-image:url("../assets/fondoTimeLine.png");
    background-size: 100% 100%;
    background-attachment: fixed;
    width: 100%;
    height: 100%;
    margin:0;
    }


  .letras{
    color:white;
    margin:auto;
    text-align:center;
    font: bold 80px/1 arial;
    text-transform: uppercase;
    color: rgb(244, 244, 244);
    text-shadow: 0  2px 0 black,
                 0  4px 0 black,
                 0  6px 0 black,
                 0  8px 0 black,
                 0 10px 0 black,
                 0 12px 0 black;
    }
    
    .letras2{
    font-size:25px;
    color:black;
    margin:auto;
    text-align:justify;
    font-family: "Mystery Quest", cursive;
    }
    
    @import url("https://fonts.googleapis.com/css?family=Mystery+Quest");
    .user_card {
    height: 500px;
    width: 350px;
    margin-top: auto;
    margin-bottom: auto;
    background: #ffffffb9;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 5px;
    }
    
    .brand_logo_container {
    position: absolute;
    height: 170px;
    width: 170px;
    top: -75px;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    margin-top:70px;
    }
    
    .brand_logo {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 2px solid white;
    margin-top: 16px;
    }
    
    .form_container {
    margin-top: 100px;
    }
    
    .login_btn {
    width: 100%;
    background: #0079C4 !important;
    color: #FFFFFF !important;
    font-weight: 700;
    }
    
    .login_btn:focus {
    box-shadow: none !important;
    outline: 0px !important;
    }
    
    .login_container {
    padding: 0 2rem;
    }
    
    .input-group-text {
    background: #0079C4 !important;
    color: #FFFFFF !important;
    border: 0 !important;
    border-radius: 0.25rem 0 0 0.25rem !important;
    }
    
    .input_user,
    .input_pass:focus {
    box-shadow: none !important;
    outline: 0px !important;
    }
    
    .custom-checkbox .custom-control-input:checked~.custom-control-label::before {
    background-color: #c0392b !important;
    }
  </style>