import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import LoginView from '../components/Login'
import NotFoundView from '../components/404.vue'
import DashView from '../components/Dash/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: DashView,
      children: [
        {
          path: 'hello',
          alias: '',
          component: Hello,
          name: 'hello',
          meta: {description: 'hello'}
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView
    },
    {
      // not found handler
      path: '*',
      component: NotFoundView
    }
  ]
})
