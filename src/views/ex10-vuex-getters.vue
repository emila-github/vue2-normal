<template>
  <div>
    <p>Getters</p>
    <p>{{ doneTodosCount }}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      //计算属性方法获取数据
      doneTodosCount () {
        return this.$store.state.todos.filter(todo => todo.done).length
      }
    },
    methods: {
    }
  }
</script>
