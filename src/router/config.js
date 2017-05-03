// 左侧菜单中出现的路由配置
const routes = [
  // {
  //   path: 'm1/m1-1',
  //   alias: '',
  //   component: resolve => {
  //     require.ensure([], () => {
  //       resolve(require('../components/views/m1-1'))
  //     })
  //   },
  //   name: 'm1-1',
  //   meta: {title: 'm1-1', description: 'm1-1', id: '0101', pid: '01'}
  // },
  // {
  //   path: 'm1/m1-1/m1-1-2',
  //   alias: '',
  //   component: require(`../components/views/m1-1-2`),
  //   name: 'm1-1-2',
  //   meta: {title: 'm1-1-2', description: 'm1-1-2', id: '010102', pid: '0101'},
  //   children: []
  // },
  // {
  //   path: 'm1/m1-1/m1-1-1',
  //   alias: '',
  //   component: require(`../components/views/m1-1-1`),
  //   name: 'm1-1-1',
  //   meta: {title: 'm1-1-1', description: 'm1-1-1', id: '010101', pid: '0101'},
  //   children: []
  // },
  // {
  //   path: 'm1/m1-2',
  //   alias: '',
  //   component: require(`../components/views/m1-2`),
  //   name: 'm1-2',
  //   meta: {title: 'm1-2', description: 'm1-2', id: '0102', pid: '01'},
  //   children: []
  // },
  // {
  //   path: 'm1',
  //   alias: '',
  //   component: require(`../components/views/m1`),
  //   name: 'm1',
  //   meta: {title: 'm1', description: 'm1', id: '01'}
  // },
  // {
  //   path: 'm2',
  //   alias: '',
  //   component: require(`../components/views/m2`),
  //   name: 'm2',
  //   meta: {title: 'm2', description: 'm2', id: '02'},
  //   children: []
  // },
  // {
  //   path: 'm3',
  //   alias: '',
  //   component: require(`../components/views/Test`),
  //   name: 'm3',
  //   meta: {title: 'm3', description: 'm3', id: '03'}
  // },
  {
    path: 'vue-ex',
    alias: '',
    component: require(`../components/views/vue-ex`),
    name: 'vue-ex',
    meta: {title: 'vue示例', description: 'vue示例', id: '01'}
  },
  {
    path: 'vuex-ex',
    alias: '',
    component: resolve => {
      require.ensure([], () => {
        resolve(require('../components/views/m2'))
      })
    },
    name: 'vuex-ex',
    meta: {title: 'vuex示例', description: 'vuex示例', id: '02'}
  },
  {
    path: 'vue-ex/hello',
    alias: '',
    component: resolve => {
      require.ensure([], () => {
        resolve(require('../components/views/Hello'))
      })
    },
    name: 'hello',
    meta: {title: 'hello', description: 'vue hello', id: '0101', pid: '01'}
  },
  {
    path: 'vue-ex/ex01-component-recursive',
    alias: '',
    component: resolve => {
      require.ensure([], () => {
        resolve(require('../components/views/ex01-component-recursive/'))
      })
    },
    name: '递归组件',
    meta: {title: '递归组件', description: '递归组件递归示例', id: '0102', pid: '01'}
  }
]

export default routes
