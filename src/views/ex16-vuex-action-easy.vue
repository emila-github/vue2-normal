<template>
  <div>
    <p>Mutations action</p>
    <p>action 内部执行异步操作</p>


    <p>count: {{ count }}</p>
    <p>
      <button @click="increment">+1(延迟1秒)</button>
      <button @click="dec">-1(延迟1秒)</button>
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
      increment () {
        this.$store.dispatch('incrementAsync')
      },
      ...mapActions({
        dec: 'decrementAsync' // 映射 this.dec() 为 this.$store.dispatch('decrement')
      })
    }
  }
</script>
