const routes = [
  {
    path: 'm1/m1-1',
    alias: '',
    component: resolve => {
      require.ensure([], () => {
        resolve(require('../components/views/m1-1'))
      })
    },
    name: 'm1-1',
    meta: {title: 'm1-1', description: 'm1-1', id: '0101', pid: '01'}
  },
  {
    path: 'm1/m1-1/m1-1-2',
    alias: '',
    component: require(`../components/views/m1-1-2`),
    name: 'm1-1-2',
    meta: {title: 'm1-1-2', description: 'm1-1-2', id: '010102', pid: '0101'},
    children: []
  },
  {
    path: 'm1/m1-1/m1-1-1',
    alias: '',
    component: require(`../components/views/m1-1-1`),
    name: 'm1-1-1',
    meta: {title: 'm1-1-1', description: 'm1-1-1', id: '010101', pid: '0101'},
    children: []
  },
  {
    path: 'm1/m1-2',
    alias: '',
    component: require(`../components/views/m1-2`),
    name: 'm1-2',
    meta: {title: 'm1-2', description: 'm1-2', id: '0102', pid: '01'},
    children: []
  },
  {
    path: 'm1',
    alias: '',
    component: require(`../components/views/m1`),
    name: 'm1',
    meta: {title: 'm1', description: 'm1', id: '01'}
  },
  {
    path: 'm2',
    alias: '',
    component: require(`../components/views/m2`),
    name: 'm2',
    meta: {title: 'm2', description: 'm2', id: '02'},
    children: []
  },
  {
    path: 'm3',
    alias: '',
    component: require(`../components/views/Test`),
    name: 'm3',
    meta: {title: 'm3', description: 'm3', id: '03'}
  }

]

export default routes
