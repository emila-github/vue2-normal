const routes = [
  {
    path: 'm1',
    alias: '',
    component: require(`../components/views/Test`),
    name: 'm1',
    meta: {title: 'm1', description: 'm1'},
    children: [
      {
        path: 'm1-1',
        alias: '',
        component: require(`../components/views/Test`),
        name: 'm1-1',
        meta: {title: 'm1-1', description: 'm1-1'},
        children: [
          {
            path: 'm1-1-1',
            alias: '',
            component: require(`../components/views/Test`),
            name: 'm1-1-1',
            meta: {title: 'm1-1-1', description: 'm1-1-1'},
            children: []
          },
          {
            path: 'm1-1-2',
            alias: '',
            component: require(`../components/views/Hello`),
            name: 'm1-1-2',
            meta: {title: 'm1-1-2', description: 'm1-1-2'},
            children: []
          }
        ]
      },
      {
        path: 'm1-2',
        alias: '',
        component: require(`../components/views/Test`),
        name: 'm1-2',
        meta: {title: 'm1-2', description: 'm1-2'},
        children: []
      }
    ]
  },
  {
    path: 'm2',
    alias: '',
    component: require(`../components/views/Test`),
    name: 'm2',
    meta: {title: 'm2', description: 'm2'},
    children: []
  },
  {
    path: 'm3',
    alias: '',
    component: require(`../components/views/Test`),
    name: 'm3',
    meta: {title: 'm3', description: 'm3'}
  }

]

export default routes
