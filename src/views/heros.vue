<template>
  <div>
    <el-row>
      同步获取英雄列表
    </el-row>
    <el-row>
      <el-tabs v-model="activeName" @tab-click="handleClick"  type="border-card">
        <el-tab-pane  v-for="tab in tabs" :label="tab.name" :name="tab.id" :key="tab.id">
          <hero-list :heros="tab.id === 'all' ? allHeroList : heroList"></hero-list>
        </el-tab-pane>
      </el-tabs>
    </el-row>
   </div>
</template>
<script>
  // import axios from 'axios'
  import heros from './heros/heros'
  import heroList from './heros/hero-list'
  export default {
    data () {
      return {
        tabs: [{
          id: 'all',
          name: '全部'
        }, {
          id: '1',
          name: '战士'
        }, {
          id: '2',
          name: '法师'
        }, {
          id: '3',
          name: '坦克'
        }, {
          id: '4',
          name: '刺客'
        }, {
          id: '5',
          name: '射手'
        }, {
          id: '6',
          name: '辅助'
        }],
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
            imgSrc: '//game.gtimg.cn/images/yxzj/ingame/index_heros/' + v['ename'] + '.jpg',
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
