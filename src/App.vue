  <template >
      <v-app id="inspire">
        <div class="app-container">
          
          <router-view/>

        </div>
      </v-app>
    </template>
  



<script>
  const default_layout = "default";
  export default {
    computed: {
      layout() {
        return (this.$route.meta.layout || default_layout) + '-layout';
      }
    }
  }
</script>

<style lang="scss">
@import "assets/base.scss";
@import "scss/_dashboard.scss";

.v-sidebar-menu .vsm-header{
    color: rgb(255, 255, 255);
}

.v-sidebar-menu .vsm-title{
    color: #FFFFFF;
}
.v-sidebar-menu .vsm-icon{
    color: #FFFFFF;
}

.v-sidebar-menu .vsm-link:hover{
    background-color: #ffffff70;;
}


.v-sidebar-menu .vsm-item.active-item > .vsm-link {
  background-color: #ffffff70;;

}
.btn-app-bar{
    border-radius: 50px;
    padding: 6px;
    background-color: #a299a3c5;
   }
   .btn-app-bar:hover{
    border-radius: 50px;
    padding: 6px;
    background-color: #a299a3 !important;
   }

  .button-text{
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }

</style>