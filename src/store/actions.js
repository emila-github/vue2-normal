import * as types from './mutation-types'
import menuConfig from '../router/config'
import _ from 'lodash'

var isArray = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]'
}
// 格式化menu路由，格式化为左侧菜单父子关系格式
const formatMenu = (menus = []) => {
  let ms = [...menus]
  // 根据id降序排列
  ms = _.sortBy(ms, item => {
    return -item.meta.id
  })
  // 添加子类菜单到父类菜单中
  for (let i = 0, len = ms.length; i < len; i++) {
    let item = ms[i] || {}
    if (!item.meta) {
      item.meta = {}
    }
    item.meta.url = `/${item.path}`
    if (item.meta.pid) {
      let parent = _.find(ms, {meta: {id: item.meta.pid}})
      if (parent) { // 父级存在添加到父级
        if (!isArray(parent._submenu || !parent._submenu)) {
          parent._submenu = []
        }
        parent._submenu.push(item)
        // 根据id升序排列
        parent._submenu = _.sortBy(parent._submenu, childrenItem => {
          return childrenItem.meta.id
        })
        ms.splice(i, 1)
        len = ms.length
        i--
      } else { // 父级不存在 说明数据出错， 直接删除子集
        ms.splice(i, 1)
        len = ms.length
        i--
      }
    }
  }
  ms = _.sortBy(ms, item => {
    return item.meta.id
  })
  return ms
}
export default {
  getAllMenu ({commit}) {
    const allMenu = formatMenu(menuConfig)
    commit(types.MENU_ORIGIN, {
      menu: menuConfig
    })
    commit(types.MENU_TREE, {
      menu: allMenu
    })
  }
}
