<template>
  <div class="main">

    <h2>Actions</h2>
    <div class="tip">
      <p>Action 提交的是 mutation，而不是直接变更状态.</p>
      <p>Action 可以包含任意异步操作。</p>
      <p>Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。</p>
      <p>Action 通过 store.dispatch 方法触发：store.dispatch('increment')</p>
    </div>
  

    <h2>Example</h2>
    <p>count: {{ count }}</p>
    <p>
      <button @click="incrementSync">+1(同步)</button>
      <button @click="incrementAsyncAlias">+10(别名调用，1秒后+10)</button>
      <button @click="decrementAsyncAlias">-10(别名调用，1秒后-10)</button>
    </p>
    <p>

    </p>

    <h3>mapActions方式</h3>
    <p>
      <button @click="incrementSync">+1(同步+1)</button>
      <button @click="incrementAsync">+1(1秒后+1)</button>
      <button @click="add">+1(别名调用，1秒后+1)</button>
      <button @click="add10({amount: 10})">+10(别名调用，1秒后+10)</button>
      <button @click="decrementAsync">-1(1秒后-1)</button>
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
        // 非模块方式 this.$store.state.count
        return this.$store.state.vuexEx.count
      }
    },
    components: {},
    methods: {
      // 方式1：
      incrementAsyncAlias () {
        // 以载荷形式分发
        this.$store.dispatch('incrementAsyncPayload10', {
          amount: 10
        })
      },
      decrementAsyncAlias () {
        // 以对象形式分发
        this.$store.dispatch({
          type: 'decrementAsyncPayload10',
          amount: 10
        })
      },
      // 方式2：
      ...mapActions([
        'incrementSync', 'incrementAsync', 'decrementAsync' // 映射 this.incrementAsync() 为 this.$store.dispatch('incrementAsync')
      ]),
      // 方式3：
      ...mapActions({
        add10: 'incrementAsyncPayload10',
        add: 'incrementAsync' // 映射 this.add() 为 this.$store.dispatch('incrementAsync')
      })
    }
  }
</script>

<style scoped>

</style>
