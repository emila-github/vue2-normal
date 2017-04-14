const moduleA = {
  state: {
    count: 11,
    todos: [{
      id: 1,
      text: 'mmm1',
      done: true
    }, {
      id: 2,
      text: 'mmm2',
      done: true
    }, {
      id: 3,
      text: 'mmm3',
      done: false
    }]
  },
  mutations: {
    incrementA: (state) => {
      console.log('incrementA', state)
      state.count = state.count + 2
    },
    decrement: (state) => {
      console.log('decrementA', state)
      state.count = state.count - 2
    }
  },
  getters: {
    getState (state) {
      return state.count
    }
  }
}

export default moduleA
