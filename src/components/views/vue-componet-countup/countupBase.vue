<template>
  <span ref='countup'></span>
</template>

<script>
  import CountUp from 'countup.js'
  export default {
    name: 'countupBase',
    data () {
      return {
        numAnim: null
      }
    },
    mounted () {
      this.initCountUp()
    },
    methods: {
      initCountUp () {
        this.numAnim = new CountUp(this.$refs.countup, 0, 2017)
        this.numAnim.start()
      }
    }
  }
</script>

<style scoped>

</style>
