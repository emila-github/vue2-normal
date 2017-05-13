<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <h2>Vuex学习资料</h2>
    <ul>
      <li><a href="http://vuex.vuejs.org/zh-cn/" target="_blank">Vuex</a></li>
    </ul>

    <h2>安装</h2>
    <h3>npm</h3>
    <div class="tip">
      npm install vuex --save
    </div> 
    <h3>yarn</h3>
    <div class="tip">
      yarn add vuex
    </div>

    <p>通过 Vue.use() 来安装 Vuex, 在入口文件main.js中添加如下代码</p>
    <div class="tip">
      <pre>
      import Vue from 'vue'
      import Vuex from 'vuex'

      Vue.use(Vuex)
      </pre>
    </div>
    

  </div>
</template>

<script>
  export default {
    name: 'vuex-ex',
    data () {
      return {
        msg: 'vuex-ex'
      }
    },
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
