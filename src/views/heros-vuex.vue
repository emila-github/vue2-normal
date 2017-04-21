<template>
  <div>
    <el-row>
      createdTime: {{createdTime}}; (methods)<br/>
      currentTime: {{currentTime}} ; (computed)<br/>
    </el-row>
    <el-row>
      异步获取英雄列表
    </el-row>
    <el-row>
      <el-tabs v-model="activeName" @tab-click="handleClick"  type="border-card">
        <el-tab-pane  v-for="tab in tabs" :label="tab.name" :name="tab.id" :key="tab.id">
          <hero-list :heros="changeHeroType(tab.id)"></hero-list>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>
<script>
  // import axios from 'axios'
  // import heros from './heros/heros'
  import heroList from './heros/hero-list'
  export default {
    data () {
      return {
        time: '',
        createdTime: '',
        tabs: [
          {
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
          }
        ],
        activeName: 'all',
        heros: [], // 请求回来原始数据
        allHeroList: [] // 全部英雄数据 加工后
      }
    },
    computed: {
      currentTime () {
        return this.time
      }
      // allHeroList () {
      //   console.log('allHeroList')
      //   return this.filterData(this.heros)
      // },
    },
    methods: {
      getCreatedTime () {
        let scope = this
        console.log('createdTime', scope.time)
        scope.$set(scope, 'createdTime', scope.time)
      },
      getAllHeros () {
        let scope = this
        let url = '/hero/heros'
        return scope.$http.get(url)
      },
      handleClick (tab, event) {
        // console.log(tab, event, tab.name)
        // let heroType = tab.name
        // this.changeHeroType(heroType)
      },
      filterData: function (data) {
        let retData = []
        $.each(data, function (k, v) {
          let item = {
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
      changeHeroType (heroType) {
        let scope = this
        scope.curTypeId = heroType
        if (!scope.allHeroList) {
          return []
        }
        if (heroType === 'all') {
          // scope.heroList = scope.allHeroList  // 所有英雄
          return scope.allHeroList
        } else {
          let curTypeList = []
          $.each(scope.allHeroList, function (k, v) {
            if (v['hero_type'] === +heroType) {
              curTypeList.push(v)
            }
          })
          // scope.heroList = curTypeList
          return curTypeList
        }
      }
    },
    components: {
      [heroList.name]: heroList
    },
    created () {
      let scope = this
      setInterval(() => {
        scope.$set(scope, 'time', new Date())
      }, 1000)
      setTimeout(() => {
        scope.getCreatedTime()
      }, 2000)
      scope.getAllHeros().then(res => {
        console.log('res=', res)
        // scope.heros = res.data.data
        scope.$set(scope, 'heros', JSON.parse(res.bodyText).data)
        console.log(scope.heros)
        scope.allHeroList = scope.filterData(scope.heros)
      })
    }
  }
</script>
