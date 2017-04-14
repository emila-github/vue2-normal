<template>
  <div>
    <p>Modules</p>
    <p>根节点count： {{ count }}</p>
    <p>moduleA count: {{ getState }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      count () {
        return this.$store.state.count
        // return this.$store.state.moduleA.count // 访问moduleA中的count
      },
      ...mapGetters([
        'getState'
      ])
    },
    methods: {
      increment () {
        this.$store.commit('incrementA')
      },
      decrement () {
        // 模块和根节点存在同名mutations方法时，两方法都运行
        this.$store.commit('decrement')
      }
    }
  }
</script>
