<template>
  <div>
    <el-menu-item v-if="!hasChildren" :index="model.meta.url">{{model.meta.title}}</el-menu-item>
    <el-submenu v-if="hasChildren" :index="model.meta.url">
      <template slot="title">{{model.meta.title}}</template>
      <el-menu-item v-if="model.component" :index="model.meta.url">{{model.meta.title}}</el-menu-item>
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
