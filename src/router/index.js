import Vue from 'vue'
import Router from 'vue-router'
import routerConfig from './config'
import LoginView from '../components/Login'
import NotFoundView from '../components/404'
import NotPermissionView from '../components/401/index'
import DashView from '../components/Dash/'
// import HelloView from '../components/views/Hello'
// import TestView from '../components/views/Test'
import store from '../store/index'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/signin',
      name: 'Login',
      component: LoginView,
      meta: {withoutAuth: true}
    },
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
      // not permission handler
      path: '/401',
      component: NotPermissionView,
      meta: {withoutAuth: true}
    }
  ]
})

let notFoundRoutes = [
  {
    // not found handler
    path: '*',
    component: NotFoundView
  }
]
router.addRoutes(notFoundRoutes)
// console.log('router===', router)
router.beforeEach((to, from, next) => {
  // console.log('beforeEach=', to, from, next)
  let permissionRoutes = store.state.account.permission
  // let hasPermission = permissionRoutes.includes(to.fullPath)
  let hasPermission = to.matched.some(record => permissionRoutes.includes(record.path))
  if (to.meta.withoutAuth) {
    next()
  } else if (!store.state.account.username) {
    next({
      path: '/signin',
      query: { redirect: to.fullPath }
    })
  } else if (!hasPermission) {
    next({
      path: '/401',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router
