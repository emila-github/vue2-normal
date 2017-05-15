<template>
  <div class="main">

    <h2>Getters</h2>
    <p>doneTodosCountOther: {{doneTodosCountOther}}</p>
    <p>mapGetters doneTodosCount: {{doneTodosCount}}</p>
    <p>Alias doneCount: {{doneCount}}</p>

    <h2>get doneTodos</h2>
    <!-- <p>doneTodos: {{ doneTodos }}</p> -->
    <ul>
      <li v-for="todo in doneTodos" :key="todo.id">{{todo.text}} {{todo.done}}</li>
    </ul>

  </div>
</template>

<script>
  // 在单独构建的版本中辅助函数为 Vuex.mapState
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    components: {},
    computed: {
      // 方式1：
      doneTodosCountOther () {
        return this.$store.getters.doneTodosCount
      },
      // 方式2：
      // 使用对象展开运算符将 getters 混入 computed 对象中
      ...mapGetters([
        'doneTodos',
        'doneTodosCount'
        // ...
      ]),
      // 方式3：
      ...mapGetters({
        // 映射 this.doneCount 为 store.getters.doneTodosCount
        doneCount: 'doneTodosCount'
      })
    }
  }
</script>

<style scoped>

</style>
