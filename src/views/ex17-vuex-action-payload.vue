<template>
  <div>
    <p>Mutations action</p>
    <p>action 内部执行异步操作</p>
    <p>Actions 支持同样的载荷方式和对象方式进行分发</p>


    <p>count: {{ count }}</p>
    <p>
      <button @click="increment">+10(延迟1秒)</button>
      <button @click="decrement">-10(延迟1秒)</button>
    </p>
  </div>
</template>

<script>
  // import { mapActions } from 'vuex'
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
