import Vue from 'vue'
const state = {
  category: [
    {
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
  ], // 英雄分类
  baseHeros: [], // 接口拉取的初始数据
  allHeros: [] // 格式化后的全部英雄数据
}
const getters = {
  allHeros: state => {
    return state.allHeros
  },
  heroTypes: state => {
    return state.category
  }
}
const mutations = {
  receiveHeros (state, {heros}) {
    state.baseHeros = heros
  },
  // 加工baseHeros
  formatHeros (state) {
    var datas = state.baseHeros
    let retData = []
    $.each(datas, function (k, v) {
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
    state.allHeros = retData
  }
}
const actions = {
  getBaseHeros ({commit}) {
    let url = '/hero/heros'
    return Vue.http.get(url).then(res => {
      let heros = res.data.data || []
      commit('receiveHeros', {heros})
    })
  },
  getAllHeros ({dispatch, commit}) {
    return dispatch('getBaseHeros').then(() => {
      commit('formatHeros')
    })
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
