import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import routes from './routes.js'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)
Vue.use(VueRouter)



const router=new VueRouter({
  routes
})



new Vue({
  el: '#app',
  router,
  render: h=>h(App),
  
})