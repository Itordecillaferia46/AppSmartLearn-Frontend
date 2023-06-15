<template>
    <v-navigation-drawer v-model="drawer" app class="fon" width="320px">
        <vuescroll :ops="ops"> 

    <v-img contain height="120px" src="../../assets/logos/Logo_BN.svg">
    </v-img>
  <div style=" text-align: center;"> <label class="font-weight-bold letra text-h5 mx-2" for="">AULAS INTELIGENTES</label>
  </div> <v-divider>
    </v-divider>

    <div class="app-sidebar-content">
            <sidebar-menu showOneChild :menu="menu"/>
    </div>
</vuescroll>

    </v-navigation-drawer>

</template>

<script>
import {SidebarMenu} from 'vue-sidebar-menu'
import vuescroll from "vuescroll";


  export default {
    components: {
            SidebarMenu,
            vuescroll
        },

    props:['drawer'],
    data: () => ({
    
    ops: {
       scrollPanel: {
       initialScrollY: false,
    initialScrollX: false,
    scrollingX: false,
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
    
    links: [
        ['mdi-inbox-arrow-down', 'Inbox'],
        ['mdi-send', 'Send'],
        ['mdi-delete', 'Trash'],
        ['mdi-alert-octagon', 'Spam'],
      ],

    menu: [],            
    }),
    mounted(){
        this.menu=this.$store.state.userData.menu
        
},
  }
   </script>
<style scoped>
    .fon{
    /* background-image:url("../../assets/images/sidebar/abstract4.jpg");*/
    background-image:url("../../assets/fondosidebar.png");
    background-size: 100% 100%;
    background-attachment: fixed;
    width: 100%;
    height: 100%;
    margin:0;

    }
    .letra{
      color: #FFFFFF;
      font-size: 20px;
     /* font-family: "Mystery Quest";*/
      font-weight: 400;
     
     }
</style>