<template>
  <div>
    <p>在组件中分发 Action</p>
    <p>你在组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）：</p>


    <p>count: {{ count }}</p>
    <p>
      <button @click="incrementAsync">+1(延迟1秒)</button>
      <button @click="decAsync">-1(延迟1秒)</button>
    </p>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    computed: {
      count () {
        return this.$store.state.count
      }
    },
    methods: {
      ...mapActions([
        'incrementAsync' // 映射 this.increment() 为 this.$store.dispatch('incrementAsync')
      ]),
      ...mapActions({
        decAsync: 'decrementAsync' // 映射 this.add() 为 this.$store.dispatch('decrementAsync')
      }),
      increment () {
        // 以对象形式分发
        this.$store.dispatch({
          type: 'incrementAsyncPayload10',
          amount: 10
        })
      },
      decrement () {
        // 以载荷形式分发
        this.$store.dispatch('decrementAsyncPayload10', {
          amount: 10
        })
      }
    }
  }
</script>
