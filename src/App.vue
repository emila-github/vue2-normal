<template>
  <div id="app">
    <slot name="login" v-if="!username">
      <login></login>
    </slot>
    <slot v-if="username">
      <MyTitle id="header"></MyTitle>
      <el-row>
        <el-col :span="4">
          <NavMenu></NavMenu>
          <!--<RouterLinks></RouterLinks>-->
        </el-col>
        <el-col :span="20" style="padding: 10px;">
          <h2>Content</h2>
          <router-view></router-view>
        </el-col>
      </el-row>
    </slot>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Login from './components/Login'
import RouterLinks from './components/RouterLinks'
import MyTitle from './components/Header'
import NavMenu from './components/NavMenu'
export default {
  name: 'app',
  components: {
    Login,
    RouterLinks,
    MyTitle,
    NavMenu
  },
  methods: {
    // login () {
    //   console.log('login')
    //   this.$store.commit('setUsername', {username: 'wcj'})
    // }
  },
  computed: {
    ...mapGetters(['username'])
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
}
*{margin: 0; padding: 0;}

</style>
