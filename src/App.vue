<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  watch: {
    // '$route' (val, oldVal) {
    //   console.log('new: ', val)
    //   console.log('old: ', oldVal)
    // }
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
