import config from '../config/config'

const viewsRouters = config.views.map(item => {
  const component = resolve => {
    require.ensure([], () => {
      resolve(require(`../views/${item}`))
    })
  }
  return {
    path: `/views/${item}`,
    name: item,
    component: component
  }
})

const routers = [
  {
    path: '/',
    component: resolve => {
      require.ensure([], () => {
        resolve(require('../components/Hello'))
      })
    }
  },
  ...viewsRouters
]

export default routers
