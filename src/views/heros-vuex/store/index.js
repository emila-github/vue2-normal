import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import heros from './modules/heros'
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    heros
  }
})
