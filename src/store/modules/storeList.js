import * as api from '../../api/index'
import * as types from '../types'
const state = {
  totalCount: 0,
  pageNo: 1,
  pageSize: 20,
  listData: []
}
const mutations = {
  [types.STORELIST_SETLIST] (state, payload) {
    state.totalCount = payload.totalCount
    state.pageNo = payload.pageNo
    state.pageSize = payload.pageSize
    state.listData = payload.listData
    // console.log('mutations state = ', state)
  },
  setPageNo (state, payload) {
    state.pageNo = payload && payload.pageNo || 1
  },
  setPageSize (state, payload) {
    state.pageNo = payload && payload.pageSize || 20
  }
}
const getters = {
  [types.STORELIST_GETTABLEDATA]: state => {
    // console.log('getters state = ', state)
    return state.listData
  }
}
const actions = {
  // 获取门店列表
  [types.STORELIST_GETSTORELIST] ({commit}, payload = {}) {
    // console.log('getStoreList payload=', payload)
    return api.storeList(payload).then((datas) => {
      // console.log('getStoreList datas=', datas)
      commit(types.STORELIST_SETLIST, datas)
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
