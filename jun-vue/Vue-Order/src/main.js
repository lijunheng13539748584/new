// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/home/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

//二级路由
import  Contact from './components/about/Contact.vue'
import  Delivery from './components/about/Delivery.vue'
import  History from './components/about/History.vue'
import  OrderingGuide from './components/about/OrderingGuide.vue'

import  Breakfast from './components/home/Breakfast.vue'
import  Lunch from './components/home/Lunch.vue'
import  Afternoontea from './components/home/Afternoontea.vue'
import  Dinner from './components/home/Dinner.vue'


Vue.use(VueRouter)
const routes=[
  {path:'/',name:"homeLink",component:Home,children:[
    {path:'/',name:"breakfastLink",component:Breakfast},
    {path:'/lunch',name:"lunchLink",component:Lunch},
    {path:'/afternoontea',name:"afternoonteaLink",component:Afternoontea},
    {path:'/dinner',name:"dinnerLink",component:Dinner},
  ]},
  {path:'/menu',name:"menuLink",component:Menu},
  {path:'/admin',name:"adminLink",component:Admin},
  {path:'/about',name:"aboutLink",component:About,children:[
    {path:'/contact',name:"contactLink",component:Contact},
    {path:'/',name:"historyLink",component:History},
    {path:'/delivery',name:"deliveryLink",component:Delivery},
    {path:'/orderingGuide',name:"orderingGuideLink",component:OrderingGuide},
  ]},
  {path:'/login',name:"loginLink",component:Login},
  {path:'/register',name:"registerLink",component:Register},



]

const  router= new VueRouter({
  routes,
  mode:'history'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
