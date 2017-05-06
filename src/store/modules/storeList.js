import * as api from '../../api/index'
const state = {
  totalCount: '',
  pageNo: '',
  pageSize: '',
  listData: []
}
const mutations = {
  setList (state, payload) {
    state.totalCount = payload.totalCount
    state.pageNo = payload.pageNo
    state.pageSize = payload.pageSize
    state.listData = payload.listData
    console.log('mutations state = ', state)
  }
}
const getters = {
  getTableData: state => {
    console.log('getters state = ', state)
    return state.listData
  }
}
const actions = {
  // 获取门店列表
  getStoreList ({commit}, payload = {}) {
    console.log('getStoreList payload=', payload)
    return api.storeList(payload).then((datas) => {
      console.log('getStoreList datas=', datas)
      commit('setList', datas)
      return datas
    })
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
