<template>
  <el-tabs v-model="activeName" @tab-click="handleClick"  type="border-card">
    <el-tab-pane label="全部" name="all">
      <hero-list :heros="allHeroList"></hero-list>
    </el-tab-pane>
    <el-tab-pane label="战士" name="1">
      <hero-list :heros="heroList"></hero-list>
    </el-tab-pane>
    <el-tab-pane label="法师" name="2">
      <hero-list :heros="heroList"></hero-list>
    </el-tab-pane>
    <el-tab-pane label="坦克" name="3">
      <hero-list :heros="heroList"></hero-list>
    </el-tab-pane>
    <el-tab-pane label="刺客" name="4">
      <hero-list :heros="heroList"></hero-list>
    </el-tab-pane>
    <el-tab-pane label="射手" name="5">
      <hero-list :heros="heroList"></hero-list>
    </el-tab-pane>
    <el-tab-pane label="辅助" name="6">
      <hero-list :heros="heroList"></hero-list>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
  // import axios from 'axios'
  import heros from './heros/heros'
  import heroList from './heros/hero-list'
  export default {
    data () {
      return {
        heroList: [],
        activeName: 'all'
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event, tab.name)
        let heroType = tab.name
        this.changeHeroType(heroType)
      },
      filterData: function (data) {
        var retData = []
        $.each(data, function (k, v) {
          var item = {
            iType: v['ename'],
            sName: v['cname'],
            imgSrc: '// game.gtimg.cn/images/yxzj/ingame/index_heros/' + v['ename'] + '.jpg',
            new_type: v['new_type'],
            pay_type: v['pay_type'],
            hero_type: v['hero_type'],
            title: v['title']
          }
          retData.push(item)
        })
        return retData
      },
      changeHeroType: function (heroType) {
        var scope = this
        scope.curTypeId = heroType
        if (heroType === 'all') {
          scope.heroList = scope.allHeroList  // 所有英雄
        } else {
          var curTypeList = []
          $.each(scope.allHeroList, function (k, v) {
            if (v['hero_type'] === +heroType) {
              curTypeList.push(v)
            }
          })
          scope.heroList = curTypeList
        }
      }
    },
    components: {
      [heroList.name]: heroList
    },
    created () {
      this.heros = heros
      var scope = this
      // let herosList = []// 最终英雄数据
      // var tempList = []// 临时英雄数据
      // var newHeros = []// 新英雄数据
      // var freeHeros = []// 周免英雄数据
      scope.allHeroList = scope.filterData(this.heros)
      // axios.get('https://pvp.qq.com/web201605/js/herolist.json?ieg_ingame_domain=pvp')
      //   .then(function (response) {
      //     console.log(response)
      //   })
      //   .catch(function (error) {
      //     console.log(error)
      //   })
    }
  }
</script>
