<template>
  <div class="main">

    <h2>在全局引入vuex</h2>
    <counter></counter>
    <p>Counter 父组件: {{count}}</p>
    <p>别名:{{ countAlias }}</p>
    <p>countPlusLocalState:{{ countPlusLocalState }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

  </div>
</template>

<script>
  // 创建一个 Counter 组件
  const Counter = {
    template: `<div>Counter 组件:{{ count }}</div>`,
    computed: {
      count () {
        return this.$store.state.vuexEx.count
      }
    }
  }

  // 在单独构建的版本中辅助函数为 Vuex.mapState
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        localCount: 100
      }
    },
    components: { Counter },
    computed: mapState({
      // 箭头函数可使代码更简练
      count: state => state.vuexEx.count,

      // 传字符串参数 'count' 等同于 `state => state.count`
      // countAlias: 'count', // 有命名空间时 该方法读取不到count值
      countAlias: state => state.vuexEx.count,

      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        return state.vuexEx.count + this.localCount
      }
    }),
    methods: {
      increment () {
        this.$store.commit('vuexex/increment')
      },
      decrement () {
        this.$store.commit('vuexex/decrement')
      }
    }
  }
</script>

<style scoped>

</style>
