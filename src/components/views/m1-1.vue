<template>
  <div class="test">
    <h1>{{ msg }}</h1>
    <router-link :to="{ name: 'm1-1-1' }">/m1-1-1</router-link>
    <router-link :to="{ name: 'm1-1-2' }">/m1-1-2</router-link>
    <router-view class="nested-child"></router-view>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'm1-1'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
