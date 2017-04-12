<template>
  <div>
    父msg:{{msg}}<br/>
    <input v-model="msg"><br/> <br/> <br/>
    <custom-input :msg = "msg" @panentEvent="changeMsg"></custom-input>
  </div>
</template>

<script>
  import customInput from './prop-emit/custom-input'
  export default {
    data () {
      return {
        msg: '父组件'
      }
    },
    components: {
      'custom-input': customInput
    },
    methods: {
      changeMsg (msg) {
        console.log('changeMsg')
        this.msg = msg
      }
    }
  }
</script>
<style>

</style>
