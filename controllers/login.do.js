module.exports = function(req, res, next) {
  var reqParams = req.body || {};
  var reqQueryParams = req.query || {};
  let data = {}
  if (reqQueryParams.userName === 'wcj') {
    data = {
      result: 'failure', // failure | success
      messages: ['账号不存在'],
      data: true
    }
  } else if (reqQueryParams.password === '123456') {
    data = {
      result: 'failure', // failure | success
      messages: ['密码有误'],
      data: {}
    }
  } else if (reqQueryParams.userName === 'CY3846') {
    // 模拟部分权限
    let permissions = [
      '/',
      '/submenu-test',
      '/submenu-test/m1',
      // '/submenu-test/m1/m1-1',
      '/submenu-test/m1/m1-1/m1-1-2'
    ]
    data = {
      result: 'success', // failure | success
      messages: ['登录成功'],
      data: {
        token: "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTM5Njk4ODYsImNpZCI6MiwidWlkIjo1MywiaWF0IjoxNDkzODgzNDg2LCJqdGkiOiI0YmRmMTcxYy0xN2RlLTQxNjItYTMxZi1lZGI5ZDZjYmY0NWMifQ.PfV5S8-QY1Hds3sDRfQ_24AojyxMU1g2UVA5ClMCOaE",
        userId: 53,
        permission: permissions
      }
    }
  } else {
    // 模拟全部权限用
    let permissions = [
      '/', '/submenu-test',
      '/vue-ex',
      '/vuex-ex',
      '/element',
      '/vue-resource',
      '/axios',
      '/vr/store/list',
      '/vr/store/list/add',
      '/vr/store/list/add/:type',
      '/vue-ex/hello',
      '/vue-ex/lifecycle',
      '/vue-ex/vue-componet-countup',
      '/vue-ex/vue-js',
      '/vue-ex/form-tinymce',
      '/vue-ex/ex01-component-recursive',
      '/vuex-ex/vuex-ex-local',
      '/vuex-ex/vuex-ex-global',
      '/vuex-ex/vuex-ex-mapState',
      '/vuex-ex/vuex-ex-getters',
      '/vuex-ex/vuex-ex-mutations',
      '/vuex-ex/vuex-ex-actions',
      '/submenu-test/m1', '/submenu-test/m1/m1-1', '/submenu-test/m1/m1-1/m1-1-1', '/submenu-test/m1/m1-1/m1-1-2', '/submenu-test/m2',
      '/element/el01-element-dialog',
      '/element/el02-element-table',
      '/element/mai-system-user-table',
      '/element/el03-element-dialog'
     ]
    data = {
      result: 'success', // failure | success
      messages: ['登录成功'],
      data: {
        token: "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0OTM5Njk4ODYsImNpZCI6MiwidWlkIjo1MywiaWF0IjoxNDkzODgzNDg2LCJqdGkiOiI0YmRmMTcxYy0xN2RlLTQxNjItYTMxZi1lZGI5ZDZjYmY0NWMifQ.PfV5S8-QY1Hds3sDRfQ_24AojyxMU1g2UVA5ClMCOaE",
        userId: 53,
        permission: permissions
      }
    }
  }
  data = JSON.stringify(data);
  res.end(data);
};
