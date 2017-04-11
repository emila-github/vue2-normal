<script>
  import config from '../config/config'
  export default {
    data () {
      return {
        views: config.views,
        treeViews: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
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
      console.log('created')
      this.getTreeDatas()
    },
    methods: {
      getTreeDatas () {
        console.log('getTreeDatas')
        console.log('views=', this.views)
        let treeDatas = []
        for (let i = 0, len = this.views.length; i < len; i++) {
          let item = this.views[i]
          console.log(item)
          treeDatas.push({
            label: item,
            children: []
          })
        }
        return treeDatas
      },
      handleNodeClick (data, node, self) {
        console.log(data, node, self, data.label)
        this.$router.push({name: data.label})
//        this.$router.go('/views/' + data.label)
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
    <el-tree :data="treeViewsc" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
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
