<template>
  <div id="sidebar" :class="{'open': active}">
    <el-menu theme="light" router @select="handleSelect" :default-active="activeIndex" :default-openeds="defaultOpeneds" :unique-opened="true">
      <Logo></Logo>
      <!--<div class="logo-container">-->
        <!--<img class="logo" src="https://vuejs.org/images/logo.png" />-->
      <!--</div>-->
<!--       <el-menu-item index="/hello">Hello</el-menu-item>
      <el-menu-item index="/test">Test</el-menu-item> -->
      <Submenu v-for="item in submenu" :key="item.path" :model="item"></Submenu>
      <!--<el-menu-item index="/">Dashboard</el-menu-item>-->
      <!--<el-submenu index="m1">-->
        <!--<template slot="title">m1</template>-->
        <!--<el-submenu index="m1-1">-->
          <!--<template slot="title">m1-1</template>-->
          <!--<el-menu-item index="/m1/m1-1/m1-1-1">m1-1-1</el-menu-item>-->
          <!--<el-menu-item index="/m1/m1-1/m1-1-2">m1-1-2</el-menu-item>-->
        <!--</el-submenu>-->
        <!--<el-submenu index="m1-2">-->
          <!--<template slot="title">m1-2</template>-->
        <!--</el-submenu>-->
      <!--</el-submenu>-->
      <!--<el-submenu index="m2">-->
        <!--<template slot="title">m2</template>-->
      <!--</el-submenu>-->
      <el-menu-item index="/login">登录</el-menu-item>
      <el-menu-item index="/404">404</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  // import submenuConfig from '../../router/config'
  import Logo from './logo'
  import Submenu from './submenu'
  export default {
    name: 'Sidebar',
    props: ['active'],
    components: {
      Logo,
      Submenu
    },
    data () {
      return {
        // submenu: submenuConfig
      }
    },
    computed: {
      ...mapState({
        submenu: 'menuTree'
      }),
      // 标记左侧菜单选中状态
      activeIndex () {
        return this.$route.path
      },
      // 设置左侧菜单展开项
      defaultOpeneds () {
        console.log('defaultOpeneds=', this.$store.state.currentBreadcrumbKeypath)
        return this.$store.state.currentBreadcrumbKeypath
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log('handleSelect=', key, keyPath)
        this.$store.commit('setCurrentBreadcrumbKeypath', {keyPath})
      }
    },
    mounted () { // ready
      this.$store.dispatch('getAllMenu')
      // console.log(this.$store.menuTree)
    }
  }
</script>

<style lang="scss">
// You can import all your SCSS variables using webpack alias
@import '~scss_vars';
@import './style.scss';
</style>
