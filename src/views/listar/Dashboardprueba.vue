<template>
  <div id="settings-wrapper">
    <v-card
      id="settings"
      class="py-2 px-4 fondo icon-container"
      color="rgba(0, 0, 0, .3)"
      dark
      flat
      link
      min-width="100"
      style="position: fixed; top: 115px; right: -35px; border-radius: 16px;"
    >
      <v-icon large class="anima">
        mdi-memory
      </v-icon>
    </v-card>

    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      activator="#settings"
      bottom
      content-class="v-settings"
      left
      nudge-left="8"
      offset-x
      origin="top right"
      transition="scale-transition"
    >
      <v-card
        class="text-center mb-0"
        width="250"
      >
        <v-card-text>
         
            <template>
  <v-card
    class="mx-auto"
    max-width="200"
    tile
  >
    <v-list dense>
        <v-list-item-content>
            <v-list-item-title class="text-h6">
              CATEGORIAS
            </v-list-item-title>
            
          </v-list-item-content>
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
  </v-card>
</template>
<br>

          <!-- <v-divider class="my-4 secondary" /> -->

          <v-row
            align="center"
            no-gutters
          >
            <v-col cols="auto">
              Dark Mode
            </v-col>

            <v-spacer />

            <v-col cols="auto">
              <v-switch
                v-model="$vuetify.theme.dark"
                class="ma-0 pa-0"
                color="secondary"
                hide-details
              />
            </v-col>
          </v-row>
<!-- 
          <v-divider class="my-4 secondary" />

 

          <v-divider class="my-4 secondary" /> -->



<!-- 
          <div class="my-12" /> -->


        </v-card-text>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
  // Mixins
  import Proxyable from 'vuetify/lib/mixins/proxyable'
  import { mapMutations, mapState } from 'vuex'

  export default {
    name: 'DashboardCoreSettings',

    mixins: [Proxyable],

    data: () => ({
        items: [
        { text: 'Ciencia', icon: 'mdi-atom' },
        { text: 'Deporte', icon: 'mdi-run' },
        {text:'Economía', icon: 'mdi-currency-usd'},
        {text:'Tecnología', icon: 'mdi-laptop'},
        { text: 'Política', icon: 'mdi-account-tie-voice-outline' },
        { text: 'Arte', icon: 'mdi-palette' },
        { text: 'Internacional', icon: 'mdi-earth' },
        { text: 'Nacional', icon: 'mdi-google-maps' },
        { text: 'Cultura', icon: 'mdi-apple-finder' },
        
        
      ],
      color: '#E91E63',
      colors: [
        '#9C27b0',
        '#00CAE3',
        '#4CAF50',
        '#ff9800',
        '#E91E63',
        '#FF5252',
      ],

      menu: false,
      saveImage: '',
      showImg: true,
    }),

    computed: {
      ...mapState(['barImage']),
    },

    watch: {
      color (val) {
        this.$vuetify.theme.themes[this.isDark ? 'dark' : 'light'].primary = val
      },
      showImg (val) {
        if (!val) {
          this.saveImage = this.barImage
          this.setBarImage('')
        } else if (this.saveImage) {
          this.setBarImage(this.saveImage)
          this.saveImage = ''
        } else {
          this.setBarImage(val)
        }
      },
      image (val) {
        this.setBarImage(val)
      },
    },

    methods: {
      ...mapMutations({
        setBarImage: 'SET_BAR_IMAGE',
      }),
    },
  }
</script>

<style>




.fondo{
   background: linear-gradient(90deg, rgba(103,219,216,0.8436624649859944) 4%, rgba(11,9,121,0.8632703081232493) 26%, rgba(120,13,111,0.44030112044817926) 55%, rgba(0,212,255,1) 98%)
}

.icon-container {
  width: 100px;
  height: 50px;
  position: relative;
}

.anima {
  font-size: 48px;
  color: #000;
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translate(-50%, -50%);
  animation: rotate 2s infinite linear;
}

@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
  </style>
