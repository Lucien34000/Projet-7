import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Signup from '../components/Signup.vue'

Vue.use(Router)

export default new Router({

  mode: 'history',
  
  routes: [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/signup', component: Signup}
  ]

})


