import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TodoLists from '@/components/TodoLists'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/todo',
      name: 'TodoLists',
      component: TodoLists
    }
  ]
})
