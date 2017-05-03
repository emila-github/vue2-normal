import {request} from './base'
import * as urls from './map-urls'
// 登录
export function login ({username, password}) {
  const params = {
    username,
    password
  }
  return request('post', urls.LOGIN, params)
}
