const state = {
  count: 0
}
const getters = {
}
const mutations = {
  increment: state => state.count++,
  decrement: (state) => {
    state.count = state.count - 1
  }
}

const actions = {

}
export default {
  state,
  getters,
  mutations,
  actions
}
