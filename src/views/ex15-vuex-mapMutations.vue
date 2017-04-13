<template>
  <div>
    <p>mapMutations</p>
    <p>你可以在组件中使用 this.$store.commit('xxx') 提交 mutation，或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用（需要在根节点注入 store）。</p>

    <p>count: {{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="dec">-</button>
    </p>
  </div>
</template>

<script>
  import { mapMutations } from 'vuex'
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
      ...mapMutations([
        'increment' // 映射 this.increment() 为 this.$store.commit('increment')
      ]),
      ...mapMutations({
        dec: 'decrement' // 映射 this.dec() 为 this.$store.commit('decrement')
      })
    }
  }
</script>
