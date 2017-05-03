<template>
  <div>
    <el-menu-item v-if="!hasChildren" :index="model.meta.url">{{model.name}}</el-menu-item>
    <el-submenu v-if="hasChildren" :index="model.meta.url">
      <template slot="title">{{model.name}}</template>
      <el-menu-item v-if="model._submenu" :index="model.meta.url">{{model.name}}</el-menu-item>
      <items v-for='cel in model._submenu' :key="model.meta.url" :model='cel'></items>
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
