<template>
  <div>
    <el-row>
      异步获取英雄列表 -vuex
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
  import store from './heros-vuex/store/index'
  import { mapState, mapGetters, mapActions } from 'vuex'
  // import heros from './heros/heros'
  import heroList from './heros/hero-list'
  export default {
    store,
    data () {
      return {
        baseTabs: [
          {
            id: 'all',
            name: '全部'
          }
        ],
        activeName: 'all'
      }
    },
    computed: {
      ...mapState({
        heros: 'baseHeros'
      }),
      ...mapGetters({
        allHeroList: 'allHeros',
        heroTypes: 'heroTypes'
      }),
      tabs () {
        return [...this.baseTabs, ...this.heroTypes]
      }
    },
    methods: {
      ...mapActions([
        'getAllHeros'
      ]),
      handleClick (tab, event) {
        // console.log(tab, event, tab.name)
        // let heroType = tab.name
        // this.changeHeroType(heroType)
      },
      changeHeroType (heroType) {
        let scope = this
        scope.curTypeId = heroType
        if (!scope.allHeroList) {
          return []
        }
        if (heroType === 'all') {
          return scope.allHeroList // 所有英雄
        } else {
          let curTypeList = []
          $.each(scope.allHeroList, function (k, v) {
            if (v['hero_type'] === +heroType) {
              curTypeList.push(v)
            }
          })
          return curTypeList
        }
      }
    },
    components: {
      [heroList.name]: heroList
    },
    created () {
      let scope = this
      scope.$store.dispatch('getAllHeros')
    }
  }
</script>
