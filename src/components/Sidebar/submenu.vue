<template>
  <div>
    <el-menu-item v-if="!hasChildren" :index="model.path">{{model.name}}({{model.path}})</el-menu-item>
    <el-submenu v-if="hasChildren" :index="model.path">
      <template slot="title">{{model.name}}</template>
      <el-menu-item v-if="model._submenu" :index="model.path">{{model.name}}({{model.path}})</el-menu-item>
      <items v-for='cel in model._submenu' :key="model.path" :model='cel'></items>
    </el-submenu>
  </div>
</template>
<script>
  export default {
    name: 'items',
    props: ['model'],
    components: {},
    data () {
      return {
      }
    },
    computed: {
      hasChildren: function () {
        return this.model._submenu && this.model._submenu.length
      }
    },
    methods: {
    }
  }
</script>
