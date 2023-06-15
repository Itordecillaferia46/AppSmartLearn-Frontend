import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import vuescroll from "vuescroll";



Vue.use(require('vue-moment'));
Vue.use(vuescroll, {
    ops: {
        // The global config
    },
    name: "myScroll",
});

Vue.use(BootstrapVueIcons)
Vue.use(Vuesax, {
})

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.config.productionTip = false
Vue.use(VueAxios, axios)



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
