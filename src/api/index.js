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
export function storeList ({
  pageNo = 1,
  pageSize = 20,
  name,
  province,
  city,
  recommendFlag,
  activingFlag
}) {
  const params = {
    pageNo,
    pageSize,
    name,
    province,
    city,
    recommendFlag,
    activingFlag
  }
  return request('get', urls.STORELIST, {params})
}
