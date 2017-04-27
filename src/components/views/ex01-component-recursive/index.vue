<template>
  <div class="tree">
    <h2>递归组件</h2>
    <ul>
      <Items v-for="item in tree" :key="item.id" :model="item"></Items>
    </ul>
  </div>
</template>

<script>
  import Items from './items'
  export default {
    name: 'tree',
    data () {
      return {
        tree: [{
          id: '1',
          data: {
            menuName: '项目管理',
            menuCode: ''
          },
          childTreeNode: [{
            data: {
              menuName: '项目',
              menuCode: 'BusProject'
            },
            childTreeNode: [
              {
                data: {
                  menuName: '项目-1',
                  menuCode: 'BusProject-1'
                },
                childTreeNode: []
              }
            ]
          }, {
            data: {
              menuName: '我的任务',
              menuCode: 'BusProject'
            },
            childTreeNode: []
          }, {
            data: {
              menuName: '人员周报',
              menuCode: 'BusProject'
            },
            childTreeNode: []
          }]
        }, {
          id: '2',
          data: {
            menuName: '数据统计',
            menuCode: 'BusClock'
          },
          childTreeNode: [
            {
              id: '2-1',
              data: {
                menuName: '数据统计2-1',
                menuCode: 'BusClock2-1'
              },
              childTreeNode: []
            }
          ]
        }, {
          id: '3',
          data: {
            menuName: '人事管理',
            menuCode: ''
          },
          childTreeNode: []
        }, {
          id: '4',
          data: {
            menuName: '基础管理',
            menuCode: ''
          },
          childTreeNode: []
        }]
      }
    },
    components: {
      Items
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
