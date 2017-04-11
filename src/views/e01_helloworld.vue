<style>

</style>

<template>
  <div>
    msg:{{msg}} <br/>
    <el-button v-on:click="fn1">fn1</el-button>
    <el-button @click="fn2">fn2</el-button>
  </div>
</template>

<script>
  import Vue from 'Vue'
  export default {
    data () {
      return {
        msg: 'e01_helloworld'
      }
    },
    methods: {
      fn1 () {
        console.log('fn1')
        this.msg = this.msg + 1
      },
      fn2 () {
        console.log('fn2')
        Vue.set(this, 'msg', this.msg + 2)
//        this.msg = this.msg + 2
      }
    }
  }
</script>
