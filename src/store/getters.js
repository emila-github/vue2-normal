import _ from 'lodash'
export default {
  // 获取当前面包屑数组
  getCurrentBreadcrumb (state) {
    let breadcrumb = []
    let menuOrigin = state.menuOrigin
    let currentBreadcrumbKeypath = state.currentBreadcrumbKeypath
    for (let i = 0, len = currentBreadcrumbKeypath.length; i < len; i++) {
      let item = currentBreadcrumbKeypath[i]
      let current = _.find(menuOrigin, (mo) => {
        return '/' + mo.path === item
      })
      current && breadcrumb.push({
        name: current.meta.title,
        url: '/' + current.path
      })
    }
    return breadcrumb
  }
}
