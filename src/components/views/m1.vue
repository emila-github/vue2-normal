<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <router-link :to="{ name: 'm1-1' }">/m1-1</router-link>
    <router-link :to="{ name: 'm1-2' }">/m1-2</router-link>
    <router-view class="nested-child"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'm1',
    data () {
      return {
        msg: 'm1'
      }
    },
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
