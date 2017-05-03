import Vue from 'vue'
import Router from 'vue-router'
import routerConfig from './config'
import LoginView from '../components/Login'
import NotFoundView from '../components/404.vue'
import DashView from '../components/Dash/'
// import HelloView from '../components/views/Hello'
// import TestView from '../components/views/Test'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: DashView,
      children: [
        // {
        //   path: 'hello',
        //   alias: '',
        //   component: HelloView,
        //   name: 'hello',
        //   meta: {title: 'hello', description: 'hello'}
        // },
        // {
        //   path: 'test',
        //   alias: '',
        //   component: require(`../components/views/ex01-component-recursive/`),
        //   name: 'test',
        //   meta: {title: 'test', description: 'test'}
        // },
        ...routerConfig
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
