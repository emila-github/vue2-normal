<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {}
    },
    computed: {
      ...mapGetters(['username'])
    },
    methods: {
      logout () {
        console.log('logout')
        this.$store.commit('setUsername', {username: ''})
      }
    }
  }
</script>

<template>
  <div>
    <h1>Demos of Vue2</h1>
    {{username}}<button @click="logout">logout</button>
  </div>
</template>

<style scoped>
  h1 {
    margin: 0;
  }
</style>
