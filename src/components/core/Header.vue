<template>
    <v-app-bar 
      app
      elevate-on-scroll
      elevation="8"
      relative
     >
    <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          src="../../assets/Tulbar.png"
        ></v-img>
      </template>
      <v-app-bar-nav-icon class="btn" dark @click="procesa()"></v-app-bar-nav-icon>

      <v-toolbar-title class="font-weight-bold letra text-h5 mx-2">SMARTLEARN</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <span v-bind="attrs" v-on="on" style="cursor:point" class="mx-5 mr-10"> 
                 
                    <v-avatar size="40">
                       <img src="https://randomuser.me/api/portraits/women/80.jpg"/>
                   
                    </v-avatar>
         </span>
      </template>
      <v-list dense>
       <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    </v-menu>
      
    </v-app-bar>
</template>

<script>
   export default {
    data() {
      return {
        items: [
        { text: 'Perfil', icon: 'mdi-clock' },
        { text: 'Salir', icon: 'mdi-account' },
      ],
      }
    },
    methods: {
      procesa(){
        console.log("generado");
        this.$emit('handrawer');
      }
    },
   }
</script>
<style lang="scss" scoped>
   .letra{
    color: #FFFFFF;
    font-size: 30px;
    
    font-weight: 500;
   }
   
</style>
