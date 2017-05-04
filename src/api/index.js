import {request} from './base'
import * as urls from './map-urls'
// 登录
export function login ({username, password}) {
  const params = {
    userName: username,
    password
  }
  return request('post', urls.LOGIN, params)
}
// 登出
export function logout () {
  return request('post', urls.LOGOUT)
}
