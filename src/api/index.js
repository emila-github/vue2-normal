import Vue from 'vue'
import {request} from './base'
import * as urls from './map-urls'
// 登录
export function login ({username, password}) {
  const params = {
    userName: username,
    username: username,
    password
  }
  return request('post', urls.LOGIN, null, {params})
}
// 登出
export function logout () {
  return request('post', urls.LOGOUT)
}

// 门店列表
export function storeList (params = {
  pageNo: 1,
  pageSize: 20,
  name: '',
  province: '',
  city: '',
  recommendFlag: '',
  activingFlag: '',
  lowerTime: '',
  upperTime: ''
}) {
  return request('get', urls.STORELIST, null, {params})
  // return Vue.http.get(urls.STORELIST, {params})
}

// 省份下拉列表
export function provinceSelect () {
  return request('get', urls.PROVINCESELECT)
  // return Vue.http.get(urls.PROVINCESELECT)
}
// 市下拉列表
export function citySelect ({provinceCode}) {
  return request('get', urls.CITYSELECT, null, {params: {provinceCode}})
  // return Vue.http.get(urls.CITYSELECT)
}

// 公用测试接口
// 表单提交
export function formSubmitTest (params = {}) {
  return request('post', '/test/form.do', params)
}
// 表单提交
export function formSubmitFormDataTest (params = {}) {
  return request('post', '/test/form.do', params, {emulateJSON: true})
}

// mai 系统管理   账号管理
export function maiAdminSystemUserList (params = {}) {
  return request('get', '/mai/admin/system/user/list.do', null, {params})
  // return Vue.http.get(urls.STORELIST, {params})
}
// mai 系统管理   账号管理 添加
export function maiAdminSystemUserAdd (params = {}) {
  /*
    params = {
      userCode:CY0001,
      trueName:CY0001,
      email:CY0001@c.com,
      mobile:13458585288,
      department:11,
      status:2,
    }
  */
  return request('post', '/mai/admin/system/user/add.do', params, {emulateJSON: true})
}

// mai 系统管理   账号管理 更新
export function maiAdminSystemUserUpdate (params = {}) {
  /*
    params = {
      roleId:-1,
      userId:27,
      trueName:CY0001,
      email:CY0001@c.com,
      mobile:13458585288,
      department:11,
      status:2,
    }
  */
  return request('post', '/mai/admin/system/user/update.do', params, {emulateJSON: true})
}

// mai 系统管理   账号管理 删除
export function maiAdminSystemUserDelete (params = {}) {
  /*
    params = {
      userId:27
    }
  */
  return request('post', '/mai/admin/system/user/delete.do', params, {emulateJSON: true})
}
// mai 系统管理   账号管理 账号合法性检查
export function maiSystemAdminUserCodeCheck (params = {}) {
  /*
    params = {
      userCode: CYxxx
    }
  */
  // return request('get', '/mai/admin/system/user/code/check.do', null, {params: params})
  return Vue.http.get('/mai/admin/system/user/code/check.do', {params})
}
// mai 系统管理   账号管理 批量删除
export function maiAdminSystemUserBatchDelete (params = {}) {
  console.log('maiAdminSystemUserBatchDelete', params)
  /*
    params = {
      ids: '23,27'
    }
  */
  return request('post', '/mai/admin/system/user/batchDelete.do', params, {emulateJSON: true})
}
