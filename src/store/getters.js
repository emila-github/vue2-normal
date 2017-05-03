import _ from 'lodash'
export default {
  // 获取当前面包屑数组
  getCurrentBreadcrumb (state) {
    let breadcrumb = []
    let menuOrigin = state.menuOrigin
    let currentBreadcrumbKeypath = state.currentBreadcrumbKeypath
    console.log('getCurrentBreadcrumb state=', state)
    for (let i = 0, len = currentBreadcrumbKeypath.length; i < len; i++) {
      let item = currentBreadcrumbKeypath[i]
      let current = _.find(menuOrigin, (mo) => {
        return '/' + mo.path === item
      })
      current && breadcrumb.push({
        name: current.name,
        url: current.meta.url
      })
    }
    return breadcrumb
  }
}
