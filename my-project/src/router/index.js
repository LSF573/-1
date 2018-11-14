import Vue from 'vue'
import Router from 'vue-router'
import City from '@/components/city'
import Login from '@/components/login'
import Reset from '@/components/reset'
import SearchCity from '@/components/searchCity'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'city',
      component: City
    },
    {
      path:'/login',
      name:'login',
      component:Login
    },
    {
      path:'/reset',
      name:'reset',
      component:Reset
    },
    {
      path:'/searchCity/:id',
      name:'searchCity',
      component:SearchCity
    }
  ]
})
