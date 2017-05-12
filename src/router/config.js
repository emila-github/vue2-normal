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
        resolve(require('../components/views/vuex-ex'))
      })
    },
    name: 'vuex-ex',
    meta: {title: 'vuex示例', description: 'vuex示例', id: '02'}
  },
  {
    path: 'element',
    alias: '',
    component: resolve => {
      require.ensure([], () => {
        resolve(require('../components/views/element'))
      })
    },
    name: '',
    meta: {title: 'element示例', description: '', id: '03'}
  },
  {
    path: 'vue-resource',
    alias: '',
    component: resolve => {
      require.ensure([], () => {
        resolve(require('../components/views/vue-resource'))
      })
    },
    name: '',
    meta: {title: 'vue-resource示例', description: '', id: '04'}
  },
  {
    path: 'vr/store/list',
    alias: '',
    component: resolve => {
      require.ensure([], () => {
        resolve(require('../components/views/vr-store-list'))
      })
    },
    name: '',
    meta: {title: '门店管理模块', description: '', id: '05'}
  },
  {
    path: 'vr/store/list/add',
    alias: '',
    component: resolve => {
      require.ensure([], () => {
        resolve(require('../components/views/vr-store-add'))
      })
    },
    name: '',
    meta: {title: '添加门店', description: '', id: '0501', pid: '05'}
  },
  {
    path: 'vue-ex/hello',
    alias: '',
    component: resolve => {
      require.ensure([], () => {
        resolve(require('../components/views/Hello'))
      })
    },
    name: '',
    meta: {title: 'hello', description: 'vue hello', id: '0101', pid: '01'}
  },
  {
    path: 'vue-ex/lifecycle',
    alias: '',
    component: require(`../components/views/vue-lifecycle`),
    name: '',
    meta: {title: '生命周期钩子', description: '生命周期钩子', id: '0103', pid: '01'}
  },
  {
    path: 'vue-ex/ex01-component-recursive',
    alias: '',
    component: resolve => {
      require.ensure([], () => {
        resolve(require('../components/views/ex01-component-recursive/'))
      })
    },
    name: '',
    meta: {title: '递归组件', description: '递归组件递归示例', id: '0102', pid: '01'}
  },
  {
    path: 'vuex-ex/m1',
    alias: '',
    // component: resolve => {s
    //   require.ensure([], () => {
    //     resolve(require('../components/views/m1'))
    //   })
    // },
    name: '',
    meta: {title: 'm1', description: 'vuex示例', id: '0201', pid: '02'}
  },
  {
    path: 'vuex-ex/m1/m1-1',
    alias: '',
    component: resolve => {
      require.ensure([], () => {
        resolve(require('../components/views/m1-1'))
      })
    },
    name: '',
    meta: {title: 'm1-1', description: 'vuex示例', id: '020101', pid: '0201'}
  },
  {
    path: 'vuex-ex/m1/m1-1/m1-1-1',
    alias: '',
    component: resolve => {
      require.ensure([], () => {
        resolve(require('../components/views/m1-1-1'))
      })
    },
    name: '',
    meta: {title: 'm1-1-1', description: 'vuex示例', id: '02010101', pid: '020101'}
  },
  {
    path: 'vuex-ex/m1/m1-1/m1-1-2',
    alias: '',
    component: resolve => {
      require.ensure([], () => {
        resolve(require('../components/views/m1-1-2'))
      })
    },
    name: '',
    meta: {title: 'm1-1-2', description: 'vuex示例', id: '02010102', pid: '020101'}
  },
  {
    path: 'vuex-ex/m2',
    alias: '',
    component: resolve => {
      require.ensure([], () => {
        resolve(require('../components/views/m2'))
      })
    },
    name: '',
    meta: {title: 'm2', description: 'vuex示例', id: '0202', pid: '02'}
  },
  {
    path: 'element/el01-element-dialog',
    alias: '',
    component: resolve => {
      require.ensure([], () => {
        resolve(require('../components/views/el01-element-dialog'))
      })
    },
    name: '',
    meta: {title: 'element Dialog 对话框', description: '', id: '0301', pid: '03'}
  },
  {
    path: 'element/el02-element-table',
    alias: '',
    component: resolve => {
      require.ensure([], () => {
        resolve(require('../components/views/el02-element-table'))
      })
    },
    name: '',
    meta: {title: 'element Table 表格', description: '', id: '0302', pid: '03'}
  },
  {
    path: 'element/el03-element-dialog',
    alias: '',
    component: resolve => {
      require.ensure([], () => {
        resolve(require('../components/views/el03-element-dialog'))
      })
    },
    name: '',
    meta: {title: 'element Dialog 对话框', description: '', id: '0303', pid: '03'}
  }
]

export default routes
