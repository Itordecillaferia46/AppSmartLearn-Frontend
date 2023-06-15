<template>
    <v-container class="body-component">
        <v-row class="row">
        <v-col>
            <v-img src="../assets/welcome.png" class="logo"></v-img>
        <h3>¡Nueva plataforma, con una mejor experiencia de usuario! 
            TrackApp, una herramienta segura y fácil de usar que
            ayuda a los educadores y aprendices a administrar, medir
            y enriquecer las experiencias de aprendizaje.    
        </h3>
        </v-col>
        <v-col>
            <v-img src="../assets/DashboardImg.svg" class="img"/>
        </v-col>
    </v-row>
    </v-container>
  </template>
    
  <style scoped>
   
   .row{
    align-items: center;
    justify-content: center;
   }
   .img{
    height: 500px;
    width: 500px;
}

h3{
    padding-top: 0px;
}
.logo{
    height: 100px;
    width: 400px;
    margin: 0;
    padding: 0;
}
    </style>