<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Login',
    data () {
      return {
        username: null,
        password: null
      }
    },
    computed: {
    },
    methods: {
      ...mapActions(['login'])
    }
  }
</script>

<template>
  <div>
    login<br/>
    用户名： <input name="username" v-model="username" /><br/>
    密码： <input name="password" v-model="password" /><br/>
    <button @click="login({username: username, password: password})">login</button>

  </div>
</template>

<style scoped>

</style>
