import Vue from 'vue'
import Router from 'vue-router'
import routerConfig from './config'
import LoginView from '../components/Login'
import NotFoundView from '../components/404.vue'
import DashView from '../components/Dash/'
// import HelloView from '../components/views/Hello'
// import TestView from '../components/views/Test'
import store from '../store/index'
Vue.use(Router)

const router = new Router({
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
      path: '/signin',
      name: 'Login',
      component: LoginView,
      meta: {withoutAuth: true}
    },
    {
      // not found handler
      path: '*',
      component: NotFoundView
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.meta.withoutAuth) {
    next()
  } else if (!store.state.account.username) {
    next({
      path: '/signin',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router
