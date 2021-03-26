import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import '@mdi/font/css/materialdesignicons.css';
import '@fortawesome/fontawesome-free/css/all.css'

Vue.config.productionTip = false

Vue.use(Buefy);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
