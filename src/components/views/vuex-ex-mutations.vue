<template>
  <div class="main">

    <h2>Mutations</h2>
    <div class="tip">
      <p>更改 Vuex 的 store 中的状态的唯一方法是提交 mutation.</p>
      <p>Vuex 中的 mutations 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。</p>
      <p>回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数</p>
      <p>接受 载荷（payload） 作为第二个参数,载荷应该是一个对象，这样可以包含多个字段并且记录的 mutation 会更易读</p>
      <p>调用store.commit('type', payload) 方法提交变更</p>
      <p>mutation 必须是同步函数</p>
    </div>
  

    <h2>Example</h2>
    <p>count: {{ count }}</p>
    <p>
      <button @click="incrementAlias">+</button>
      <button @click="decrementAlias">-</button>
    </p>
    <p>
      <button @click="incrementPayload(10)">+10</button>
      <button @click="incrementPayloadType(5)">+5(Type)</button>
      <button @click="decrementPayload(2)">-2</button>
    </p>

    <h3>mapMutations方式</h3>
    <p>
      <button @click="vuexexIncrementPayload({amount: 1})">+</button>
      <button @click="add">+</button>
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
        // 非模块方式 this.$store.state.count
        return this.$store.state.vuexEx.count
      }
    },
    components: {},
    methods: {
      // 方式1：
      incrementAlias () {
        this.$store.commit('vuexex/increment')
      },
      decrementAlias () {
        this.$store.commit('vuexex/decrement')
      },
      incrementPayload (num) {
        this.$store.commit('vuexex/incrementPayload', {amount: num})
      },
      decrementPayload (num) {
        this.$store.commit('vuexex/decrementPayload', {amount: num})
      },
      incrementPayloadType (num) {
        this.$store.commit({
          type: 'vuexex/incrementPayload',
          amount: num
        })
      },
      // 方式2：(模块化的一般都有模块名，需要以别名方式使用，即使用方法3)
      ...mapMutations([
        ['vuexexIncrementPayload'] // 映射 this.increment() 为 this.$store.commit('increment')
      ]),
      // 方式3：
      ...mapMutations({
        add: 'vuexex/increment' // 映射 this.add() 为 this.$store.commit('increment')
      })
    }
  }
</script>

<style scoped>

</style>
