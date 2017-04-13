import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'ttt1', done: true },
      { id: 2, text: 'ttt2', done: true },
      { id: 3, text: 'ttt3', done: false }
    ]
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  }
})
export default store
