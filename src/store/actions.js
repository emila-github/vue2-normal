import * as types from './mutation-types'
import menuConfig from '../router/config'

const formatMenu = (menus = [], parentMenu = {}) => {
  menus.forEach(menu => {
    menu.meta.urls = []
    if (parentMenu && parentMenu.meta && parentMenu.meta.urls) {
      menu.meta.urls = [...parentMenu.meta.urls] // 保存所有父级路由
    }
    menu.meta.urls.push(menu.path)
    menu.meta.uri = '/' + menu.meta.urls.join('/') // 拼接菜单跳转地址
    if (menu.children && menu.children.length) {
      formatMenu(menu.children, menu)
    }
  })
  return menus
}
export default {
  getAllMenu ({commit}) {
    const allMenu = formatMenu(menuConfig)
    commit(types.MENU_TREE, {
      menu: allMenu
    })
  }
}
