import * as api from '../../api/index'
const state = {
  formSubmitResultDatas: {}
}
const mutations = {
  setFormSubmitResultDatas (state, payload) {
    state.formSubmitResultDatas = payload
  }
}
const getters = {
}
const actions = {
  'test/formTest' ({commit}, payload = {}) {
    return api.formSubmitTest(payload).then(datas => {
      commit('setFormSubmitResultDatas', datas)
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
