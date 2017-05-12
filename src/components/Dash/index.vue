<template>
  <div class="page-layout">
      <sidebar-component :active="activeSidebar" :closeDimmer="closeDimmer"/>
      <div class="page-layout-inner">
          <header-component :sidebarOpened="activeSidebar" :openSidebar="openSidebar" />
          <main>
            <div class="main-content">
                <el-row class="container">
                  <Breadcrumb></Breadcrumb>
                  <router-view></router-view>
                </el-row>
              </div>
          </main>
      </div>
      <dimmer :active="activeDimmer" :closeDimmer="closeDimmer" />
  </div>
</template>
<script>
  import Header from '../Header'
  import Sidebar from '../Sidebar'
  import Dimmer from '../Dimmer'
  import Breadcrumb from '../Breadcrumb/'
  export default {
    name: 'App',
    data () {
      return {
        activeSidebar: window.innerWidth > 1024,
        activeDimmer: false
      }
    },
    methods: {
      openSidebar () {
        this.activeSidebar = true
        this.activeDimmer = true
      },
      closeDimmer () {
        this.activeDimmer = false
        this.activeSidebar = false
      },
      handleResize () {
        let {
          innerWidth
        } = window
        this.activeSidebar = (innerWidth > 1024)
      }
    },
    components: {
      'header-component': Header,
      'sidebar-component': Sidebar,
      Breadcrumb,
      Dimmer
    },
    created: function () {
      window.addEventListener('resize', this.handleResize)
    }
  }
</script>

<style lang="scss">
  // You can import all your SCSS variables using webpack alias
  @import '~scss_vars';
  @import './style.scss';
  .container h2, .container h3, .container h4, .container h5{
    font-weight: 400;
    color: #1f2f3d;
  }
  .container{
    a {
      color: #4078c0;
      text-decoration: none;
    }
    h3{
      margin: 45px 0 15px;
      font-size: 22px;
    }
    p{
      font-size: 14px;
      color: #5e6d82;
      line-height: 1.5em;
    }
    .tip{
      padding: 8px 16px;
      background-color: #ecf8ff;
      border-radius: 4px;
      border-left: 5px solid #50bfff;
    }
  }
</style>
