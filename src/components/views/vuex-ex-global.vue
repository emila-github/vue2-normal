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
        // vuex 在状态管理在文件 store/modules/vuexEx.js中
        // 由于全局以modules模块方式引入，在调用时需要添加模块名vuexEx
        // 非模块方式 this.$store.state.count
        return this.$store.state.vuexEx.count
      }
    },
    // 除了state外 getters、mutations、actions 都没有命名空间的概念，需要通过名字区分方法，如 vuexEx/increment 这样的方法名，否则定义为 increment 的方法在调用 store.commit('increment') 时会全部被调用
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
