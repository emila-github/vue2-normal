<template>
  <div>
    <p>在全局引入vuex</p>
    <p>使用mapState</p>
    <p>{{ count }}</p>
    <p>别名{{ countAlias }}</p>
    <p>countPlusLocalState:{{ countPlusLocalState }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
  // 在单独构建的版本中辅助函数为 Vuex.mapState
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        localCount: 100
      }
    },
    // //当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
    // computed: mapState([
    //   // 映射 this.count 为 store.state.count
    //   'count'
    // ]),
    computed: mapState({
      // 箭头函数可使代码更简练
      count: state => state.count,
      // 传字符串参数 'count' 等同于 `state => state.count`
      countAlias: 'count',
      // 为了能够使用 `this` 获取局部状态，必须使用常规函数
      countPlusLocalState (state) {
        return state.count + this.localCount
      }
    }),
    methods: {
      increment () {
        this.$store.commit('increment')
      },
      decrement () {
        this.$store.commit('decrement')
      }
    }
  }
</script>
