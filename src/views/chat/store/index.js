import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

const state = {
  currentThreadID: null,
  threads: {
    /*
     id: {
     id,
     name,
     messages: [...ids],
     lastMessage
     }
     */
  },
  messages: {
    /*
     id: {
     id,
     threadId,
     threadName,
     authorName,
     text,
     timestamp,
     isRead
     }
     */
  }
}
export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
