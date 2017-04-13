<template>
  <div>
    <p>mapGetters 辅助函数</p>
    <p>doneTodos: {{ doneTodos }}</p>
    <p>donedoneTodos: {{ donedoneTodos }}</p>
    <p>别名 doneCount: {{ doneCount }}</p>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
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
      ...mapGetters({
        // 映射 this.doneCount 为 store.getters.donedoneTodos
        doneCount: 'donedoneTodos'
      }),
      ...mapGetters([
        'doneTodos',
        'donedoneTodos'
      ])
    },
    methods: {
    }
  }
</script>
