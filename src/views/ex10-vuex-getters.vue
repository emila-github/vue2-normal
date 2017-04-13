<template>
  <div>
    <p>Getters</p>
    <p>doneTodosCount: {{ doneTodosCount }}</p>
    <p>doneTodosCount2: {{ doneTodosCount2 }}</p>
    <p>donedoneTodosCount2: {{ donedoneTodosCount2 }}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      // 计算属性方法获取数据
      doneTodosCount () {
        return this.$store.state.todos.filter(todo => todo.done).length
      },
      // 调用 store getters
      doneTodosCount2 () {
        return this.$store.getters.doneTodos.length
      },
      donedoneTodosCount2 () {
        return this.$store.getters.donedoneTodos
      }
    },
    methods: {
    }
  }
</script>
