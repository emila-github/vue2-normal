import _ from 'lodash'
export default {
  getCurrentBreadcrumb (state) {
    let breadcrumb = []
    console.log('state=', state)
    let menuOrigin = state.menuOrigin
    let currentBreadcrumbKeypath = state.currentBreadcrumbKeypath
    console.log('menuOrigin=', menuOrigin)
    console.log('currentBreadcrumbKeypath=', currentBreadcrumbKeypath)
    for (let i = 0, len = currentBreadcrumbKeypath.length; i < len; i++) {
      let item = currentBreadcrumbKeypath[i]
      let current = _.find(menuOrigin, (mo) => {
        return mo.meta.url === item
      })
      current && breadcrumb.push({
        name: current.name,
        url: current.meta.url
      })
      console.log('breadcrumb=', breadcrumb)
    }
    return breadcrumb
  }
}
