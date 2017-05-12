<template>
  <div class="main">
    <h1>{{ msg }}</h1>

    <h2>参考资料</h2>
    <ul>
      <li><a href="http://www.kancloud.cn/yunye/axios/234845" target="_blank">Axios 中文说明</a></li>
    </ul>

    <div class="tip">
      <pre>
        // 在main.js中以插件方式引入axios
        import AxiosPlugin from './plugin/axios.js'
        Vue.use(AxiosPlugin, '$axios')
      </pre>
    </div>

    
    <div class="tip">
      <p>由于在Vue的Vue.prototype.$axios 上添加了 $axios</p>
      <p>引用方式由</p>
      <pre>
        import axios from 'axios';
        axios.get('/user?ID=12345')  
      </pre>
 
      <p>改为</p> 

      <pre>
        this.$axios.get('/user?ID=12345')  
      </pre>
      
    </div>


    <h2>Example</h2>
    <h3>执行 GET 请求</h3>
    <el-row>
      <el-button type="primary" @click="doGet">get</el-button>
      <el-button type="primary" @click="doGetError">getError</el-button>
    </el-row>

    <h3>执行 POST 请求</h3>
    <el-row>
      <el-button type="primary" @click="doPost">post(Request Payload)</el-button>
      <el-button type="primary" @click="doPostQSP">post(query string parameters)</el-button>
      <el-button type="primary" @click="doPostFormData">post(Form Data)</el-button>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'vue-axios',
    data () {
      return {
        msg: 'axios'
      }
    },
    methods: {
      doGet () {
        console.log('doGet')
        let params = {username: 'test'}
        this.$axios.get('/login.do?ID=12345', {params})
          .then(function (response) {
            console.log('success callback', response)
          })
          .catch(function (error) {
            console.log('error callback', error)
          })
      },
      doGetError () {
        console.log('doGetError')
        let params = {username: 'test'}
        this.$axios.get('/error/login.do', params)
          .then(function (response) {
            console.log('success callback', response)
          })
          .catch(function (error) {
            console.log('error callback', error)
          })
      },
      doPost () {
        this.$axios.post('/user', {
          firstName: 'Fred',
          lastName: 'Flintstone'
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      },
      doPostQSP () {
        this.$axios.post('/user', null, {params: {
          firstName: 'Fred',
          lastName: 'Flintstone'
        }})
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      },
      doPostFormData () {
        let formData = new FormData()
        formData.append('foo', 'bar')
        this.$axios.post('/user', formData)
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        })
      }
    },
    created () {

    },
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
