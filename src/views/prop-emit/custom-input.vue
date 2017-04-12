<template>
  <div>
    子msg:{{msg}} <br/>
    <input ref="custom" :value="msg" @change="changeSubmsg($event.target.value)"><br/>
    <input ref="custom" :value="getCurrentMsg" @change="changeSubmsg($event.target.value)">(computed通知值变化)<br/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // msg: this.$props.msg  // 有props msg时  该同名属性不能存在
      }
    },
    props: ['msg'],
    created () {
      console.log('created->')
      // this.$props.msg 优先级别高于 this.msg
    },
    computed: {
      // 计算属性
      getCurrentMsg: function () {
        console.log('computed->')
        return this.$props.msg
      }
    },
    methods: {
      changeSubmsg (value) {
        // this.$refs.custom.value = value // 通过refs引用直接设置子组件值
        this.$emit('panentEvent', value) // 触发父组件方法修改父组件子 再通过props 传入子组件
      }
    }
  }
</script>
<style>

</style>
