<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <el-row :gutter="10">
      <el-col>
        <el-button type="text"><a href="https://github.com/pagekit/vue-resource" target="_blank">vue-resource API</a></el-button>
      </el-col>
      <el-col>
        <el-button type="primary" @click="doJsonp">jsonp</el-button>
        <el-button type="primary" @click="doGet">get</el-button>
        <el-button type="primary" @click="doGetError">getError</el-button>
        <el-button type="primary" @click="doPost">post(Request Payload)</el-button>
        <el-button type="primary" @click="doRequestGet">requestGet</el-button>
        <el-button type="primary" @click="doRequestPost">requestPost</el-button>
        <el-button type="primary" @click="doRequestPostError">requestPostError</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col>
        <el-button type="primary" @click="doPostQSP">post(query string parameters)</el-button>
        <el-button type="primary" @click="doPostFormData">post(Form Data)</el-button>
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
      doJsonp () {
        console.log('doJsonp')
        let params = {heroid: 187}
        let uri = 'https://ac.ingame.qq.com/php/ingame/smoba/top_hero_detail.php'
        this.$http.jsonp(uri, params).then(response => {
          // success callback
          console.log('success callback', response)
        }, response => {
          // error callback
          console.log('error callback', response)
        })
      },
      doGet () {
        console.log('doGet')
        let params = {username: 'test'}
        this.$http.get('/login.do', params).then(response => {
          // success callback
          console.log('success callback', response)
        }, response => {
          // error callback
          console.log('error callback', response)
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
      doPostQSP () {
        console.log('doPostQSP')
        let params = {username: 'wcj'}
        this.$http.post('/login.do', null, {params}).then(response => {
          // success callback
          console.log('success callback', response)
        }, response => {
          // error callback
          console.log('error callback', response)
        })
      },
      doPostFormData () {
        // https://github.com/pagekit/vue-resource/issues/267
        console.log('doPostFormData')
        let formData = new FormData()
        formData.append('foo', 'bar')
        // let headers = {'Content-Type': 'multipart/form-data'}
        this.$http.post('/login.do', formData, {emulateJSON: true}).then(response => {
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
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
