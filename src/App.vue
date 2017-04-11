<template>
  <div id="app">
    <MyTitle id="header"></MyTitle>
    <el-row>
      <el-col :span="4">
        <RouterLinks></RouterLinks>
      </el-col>
      <el-col :span="20">
        <h2>Content</h2>
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RouterLinks from './components/RouterLinks'
import MyTitle from './components/Header'
export default {
  name: 'app',
  components: {
    RouterLinks,
    MyTitle
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
