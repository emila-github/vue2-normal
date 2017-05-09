// import Vue from 'vue'
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
