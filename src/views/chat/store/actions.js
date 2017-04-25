import * as api from '../api'
import * as types from './mutation-types'
export const getAllMessages = ({ commit }) => {
  api.getAllMessages(messages => {
    commit(types.RECEIVE_ALL, {
      messages
    })
  })
}
export const switchThread = ({ commit }, payload) => {
  commit(types.SWITCH_THREAD, payload)
}
