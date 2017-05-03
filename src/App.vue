<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  // import { mapMutations } from 'vuex'
  export default {
    name: 'app',
    watch: {
      '$route' (val, oldVal) {
        // console.log('new: ', val)
        // console.log('old: ', oldVal)
        // 监听路由变化 修改keypath
        let path = val.path
        this.$store.commit('routeSetCurrentBreadcrumbKeypath', {
          routePath: path
        })
      }
    }
  }
</script>

<style>
body, html{
  margin: 0;
  padding: 0;
}
body{
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  font-size: 15px;
}
#app {

}
</style>
