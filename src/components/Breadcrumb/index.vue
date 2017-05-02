<template>
  <div id="app">
    <slot name="breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <template v-for="item in getCurrentBreadcrumb">
          <el-breadcrumb-item v-if="item.url" :to="{ path: item.url }">{{item.name}}</el-breadcrumb-item>
          <el-breadcrumb-item v-if="!item.url">{{item.name}}</el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </slot>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'Breadcrumb',
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters({
        getCurrentBreadcrumb: 'getCurrentBreadcrumb'
      })
    },
    methods: {
    },
    components: {
    },
    created: function () {
      // console.log('menuOrigin=', this.menuOrigin)
    }
  }
</script>

<style lang="scss">

</style>
