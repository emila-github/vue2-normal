<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <el-row :gutter="10">
      <el-col>
        <el-button type="text"><a href="https://github.com/pagekit/vue-resource" target="_blank">vue-resource API</a></el-button>
      </el-col>
      <el-col>
        <el-button type="primary" @click="doGet">get</el-button>
        <el-button type="primary" @click="doGetError">getError</el-button>
        <el-button type="primary" @click="doPost">post</el-button>
        <el-button type="primary" @click="doRequestGet">requestGet</el-button>
        <el-button type="primary" @click="doRequestPost">requestPost</el-button>
        <el-button type="primary" @click="doRequestPostError">requestPostError</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {request} from '../../api/base'
  export default {
    name: 'vue-resource',
    data () {
      return {
        msg: 'vue-resource'
      }
    },
    methods: {
      doGet () {
        console.log('doGet')
        let params = {username: 'test'}
        this.$http.get('/login.do', params).then(response => {
          // success callback
          console.log('success callback', response)
        }, response => {
          // error callback
        })
      },
      doPost () {
        console.log('doPost')
        let params = {username: 'wcj'}
        this.$http.post('/login.do', params).then(response => {
          // success callback
          console.log('success callback', response)
        }, response => {
          // error callback
          console.log('error callback', response)
        })
      },
      doGetError () {
        console.log('doGetError')
        let params = {username: 'test'}
        this.$http.get('/error/login.do', params).then(response => {
          // success callback
          console.log('success callback', response)
        }, response => {
          // error callback
          console.log('error callback', response)
        })
      },
      doRequestGet () {
        let params = {username: 'requestGet'}
        request('get', 'login.do', params).then(response => {
          // success callback
          console.log('success callback', response)
        }, response => {
          // error callback
          console.log('error callback', response)
        })
      },
      doRequestPost () {
        let params = {username: 'requestGet'}
        request('post', 'login.do', params).then(response => {
          // success callback
          console.log('success callback', response)
        }, response => {
          // error callback
          console.log('error callback', response)
        })
      },
      doRequestPostError () {
        let params = {username: 'doRequestPostError'}
        request('post', 'error/login.do', params).then(response => {
          // success callback
          console.log('success callback', response)
        }, response => {
          // error callback
          console.log('error callback', response)
        })
      }

    },
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
