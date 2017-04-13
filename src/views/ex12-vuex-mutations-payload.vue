<template>
  <div>
    <p>提交载荷（Payload）</p>
    <p>你可以向 store.commit 传入额外的参数，即 mutation 的 载荷（payload）：</p>
    <p>在大多数情况下，载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读</p>
    <p>count: {{ count }}</p>
    <p>
      <button @click="increment">+10</button>
      <button @click="decrement">-</button>
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
        this.$store.commit('incrementPayload', {
          amount: 10
        })
      },
      decrement () {
        this.$store.commit('decrement2')
      }
    }
  }
</script>
