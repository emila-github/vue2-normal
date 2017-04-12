<script>
  import config from '../config/config'
  export default {
    data () {
      return {
        url: null,
        views: config.views,
        treeViews: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    computed: {
      treeViewsc () {
        return this.getTreeDatas()
      }
    },
    created () {
      // console.log('created')
      this.getTreeDatas()
    },
    methods: {
      getTreeDatas () {
        // console.log('getTreeDatas')
        // console.log('views=', this.views)
        let treeDatas = []
        for (let i = 0, len = this.views.length; i < len; i++) {
          let item = this.views[i]
          console.log(item)
          treeDatas.push({
            url: item,
            label: item,
            children: []
          })
        }
        return treeDatas
      },
      handleNodeClick (data, node, self) {
       // console.log(data, node, self, data.url)
        this.$router.push({name: data.url})
       // this.$router.go('/views/' + data.label)
      }
    }
  }
</script>

<template>
  <div>
    <!--<div id="links">-->
      <!--<router-link-->
        <!--v-for="(item, index) in views"-->
        <!--:to="{name: item}"-->
        <!--:key="index">{{ item }}</router-link>-->
    <!--</div>-->
    <el-tree :data="treeViewsc" :nodo-key="url" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>

<style scoped lang="css">
  #links{
    text-align: left;
  }
  #links a{
    line-height: 24px;
    padding-left: 10px;
    font-size: 12px;
    display: block;
  }

</style>
