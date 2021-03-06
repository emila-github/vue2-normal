import Vue from 'vue'
import * as types from './mutation-types'
export default {
  [types.RECEIVE_ALL] (state, { messages }) {
    // Vue.set(state, 'tmpMessages', messages)
    let latestMessage
    messages.forEach(message => {
      // create new thread if the thread doesn't exist
      if (!state.threads[message.threadID]) {
        createThread(state, message.threadID, message.threadName)
      }
      // mark the latest message
      if (!latestMessage || message.timestamp > latestMessage.timestamp) {
        latestMessage = message
      }
      // add message
      addMessage(state, message)
    })
    console.log(state)
    // set initial thread to the one with the latest message
    setCurrentThread(state, latestMessage.threadID)
  },
  [types.SWITCH_THREAD] (state, { id }) {
    setCurrentThread(state, id)
  },
  [types.RECEIVE_MESSAGE] (state, { message }) {
    addMessage(state, message)
  }
}
function createThread (state, id, name) {
  Vue.set(state.threads, id, {
    id,
    name,
    messages: [],
    lastMessage: null
  })
}
function addMessage (state, message) {
  // add a `isRead` field before adding the message
  message.isRead = message.threadID === state.currentThreadID
  // add it to the thread it belongs to
  const thread = state.threads[message.threadID]
  if (!thread.messages.some(id => id === message.id)) {
    thread.messages.push(message.id)
    thread.lastMessage = message
  }
  // add it to the messages map
  Vue.set(state.messages, message.id, message)
}
function setCurrentThread (state, id) {
  state.currentThreadID = id
  if (!state.threads[id]) {
    debugger
  }
  // mark thread as read
  state.threads[id].lastMessage.isRead = true
  console.log(state)
}
