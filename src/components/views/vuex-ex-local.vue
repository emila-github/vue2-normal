<template>
  <div class="main">

    <h2>在局部引入vuex</h2>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

  </div>
</template>

<script>
  // 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)
  import Vuex from 'vuex'
  const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment: state => state.count++,
      decrement: state => state.count--
    }
  })
  // 通过 store.state 来获取状态对象，以及通过 store.commit 方法触发状态变更
  // 通过提交 mutation 的方式，而非直接改变 store.state.count，是要更明确地追踪到状态的变化。
  // 简单的约定能够让你的意图更加明显，在阅读代码的时候能更容易地解读应用内部的状态改变。
  // 此外，也让我们有机会去实现一些能记录每次状态改变，保存状态快照的调试工具。

  // store 中的状态是响应式的
  // 在组件中调用 store 中的状态简单到仅需要在computed(计算属性)中返回即可。
  // 触发变化也仅仅是在组件的 methods 中提交 mutations。
  export default {
    computed: {
      count () {
        return store.state.count
      }
    },
    methods: {
      increment () {
        store.commit('increment')
      },
      decrement () {
        store.commit('decrement')
      }
    }
  }
</script>

<style scoped>

</style>
