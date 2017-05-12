<template>
  <div class="main">
    <h1>{{ msg }}</h1>

    <ul>
      <li><a href="https://segmentfault.com/a/1190000009090836" target="_blank">手摸手，带你封装一个vue component</a></li>
    </ul>
    
    <h3>安装countup.js</h3>
    <div class="tip">
      <code>npm install countup.js --save</code>
    </div>
    
    <h3>新建：countupBase.vue</h3> 
    <p>
      countUp.js效果： 
      <countup-base></countup-base>
    </p>

    <h3>新建：countup.vue</h3> 
    <p>可配置项目对应vue就是props</p>
    <p>countUp.js效果： 
      <countup class="myCounter" :end="2500" :duration="2.5" :options="{useEasing : true,
              useGrouping : true,
              separator : ',',
              decimal : '.',
              prefix : '',
              suffix : ''}"></countup>
    </p>


  </div>
</template>

<script>
  import countupBase from './countupBase'
  import countup from './countup'
  export default {
    name: 'vue-componet-countup',
    data () {
      return {
        msg: 'vue-componet-countup'
      }
    },
    components: {
      countupBase,
      countup
    },
    mounted () {
    },
    methods: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
