<template>
  <div>
    <p>组合 Actions - Promise</p>
    <p>Action 通常是异步的，那么如何知道 action 什么时候结束呢？更重要的是，我们如何才能组合多个 action，以处理更加复杂的异步流程？</p>


    <p>首先，你需要明白 store.dispatch 可以处理被触发的action的回调函数返回的Promise，并且store.dispatch仍旧返回Promise：</p>
    <p>count: {{ count }}</p>
    <p>
      <button @click="actionA">+1(延迟1秒)</button>
      <button @click="actionB">-1+1(延迟1秒，一个请求)</button>
      <button @click="actionC">-1+1(延迟2秒,两个请求)</button>
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
      actionA () {
        // 以对象形式分发
        this.$store.dispatch({
          type: 'actionA'
        }).then(() => {
          console.log('actionA successed then!')
        })
      },
      actionB () {
        // 以对象形式分发
        this.$store.dispatch({
          type: 'actionB'
        }).then(() => {
          console.log('actionB successed then!')
        })
      },
      actionC () {
        // 以对象形式分发
        this.$store.dispatch({
          type: 'actionC'
        }).then(() => {
          console.log('actionC successed then!')
        })
      }
    }
  }
</script>
