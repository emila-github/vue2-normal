<template>
  <div>
    <p>使用常量替代 Mutation 事件类型</p>

    <p>count: {{ count }}</p>
    <p>
      <button @click="increment">+10</button>
      <button @click="decrement">-2</button>
    </p>
  </div>
</template>

<script>
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
        this.$store.commit('SOME_MUTATION', {
          amount: 10
        })
      },
      // 提交 mutation 的另一种方式是直接使用包含 type 属性的对象：
      decrement () {
        this.$store.commit({
          type: 'decrementPayload',
          amount: 2
        })
      }
    }
  }
</script>
