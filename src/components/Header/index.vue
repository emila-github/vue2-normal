<template>
  <header>
    <el-menu theme="dark" mode="horizontal" @select="handleSelect" router>
      <el-menu-item class="header-navicon" index="">
        <el-button type="text" @click.stop="openSidebar">
          <!--<i class="el-icon-menu"></i>-->
          <i class="md-icon">menu</i>
        </el-button>
      </el-menu-item>
      <span v-if="showPageTitle" class="header-title">{{pageTitle}}</span>

      <el-submenu class="header-menu" index="">
        <template slot="title">我的工作台({{username}})</template>
        <el-menu-item index="" @click.native="signout">登出</el-menu-item>
      </el-submenu>
    </el-menu>
  </header>
</template>

<script>
  // import { mapGetters, mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    name: 'Header',
    props: ['openSidebar', 'sidebarOpened'],
    methods: {
      // ...mapActions(['signout']),
      signout () {
        this.$store.dispatch('signout').then(() => {
          this.$router.push('/login')
        })
      },
      handleSelect (key, keyPath) {
        // console.log(key, keyPath)
        // this.$router.push({path: '/logout'})
      },
      handleResize () {
        if (window.innerWidth > 480) {
          this.showPageTitle = true
        } else {
          this.showPageTitle = false
        }
      }
    },
    data () {
      return {
        showPageTitle: window.innerWidth > 480
      }
    },
    computed: {
      ...mapGetters({
        username: 'username'
      }),
      pageTitle () {
        return this.$route.meta.title || 'Title'
      }
    },
    created () {
      window.addEventListener('resize', this.handleResize)
    }
  }
</script>

<style lang="scss">
  // You can import all your SCSS variables using webpack alias
  @import '~scss_vars';
  @import './style.scss';
</style>
