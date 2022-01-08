import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAxios from 'vue-axios'
import axios from 'axios'

import VueHtml2pdf from 'vue-html2pdf'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)
Vue.use(require('vue-moment'))
Vue.use(VueHtml2pdf)

Vue.component('navbar-component', require('./components/template/Navbar.vue').default);
Vue.component('sidebar-component', require('./components/template/Sidebar.vue').default);
Vue.component('footer-component', require('./components/template/Footer.vue').default);

axios.defaults.baseURL = `http://localhost:8000/api`

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
