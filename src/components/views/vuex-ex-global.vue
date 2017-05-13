<template>
  <div class="main">

    <h2>在全局引入vuex</h2>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

  </div>
</template>

<script>
  export default {
    computed: {
      count () {
        // 由于全局以modules模块方式引入，在调用时需要添加模块名vuexEx
        // 非模块方式 this.$store.state.count
        return this.$store.state.vuexEx.count
      }
    },
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

<style scoped>

</style>
