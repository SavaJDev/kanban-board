import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Modal from './../components/Modal'

const routes = [
  {
      name: 'main',
      path: '/',
      redirect: '/main'    
  },    
  {
    name: 'modal',  
    path: '/modal/:id',
    component: Modal
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
