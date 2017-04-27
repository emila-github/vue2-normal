<template>
  <div>
    <el-menu-item v-if="!hasChildren" :index="model.meta.uri">{{model.name}}</el-menu-item>
    <el-submenu v-if="hasChildren" :index="model.path">
      <template slot="title">{{model.name}}</template>
      <items v-for='cel in model.children' :key="model.path" :model='cel'></items>
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
        return this.model.children && this.model.children.length
      }
    },
    methods: {
    }
  }
</script>
