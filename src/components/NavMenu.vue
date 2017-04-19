<script>
  import config from '../config/config'
  export default {
    data () {
      return {
        views: config.views
      }
    },
    computed: {
    },
    created () {
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" theme="dark" :router="true">
    <el-submenu index="1">
      <template slot="title">vuex</template>
      <el-menu-item v-for="(item, index) in views" :index="'/views/'+item" :key="item">{{item}}</el-menu-item>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template slot="title">选项4</template>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">导航二</el-menu-item>
    <el-menu-item index="3">导航三</el-menu-item>
  </el-menu>
</template>

<style scoped lang="css">

</style>
