<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <router-link :to="{ name: 'vuex-ex' }">/vuex-ex</router-link>
    <router-link :to="{ name: 'vue-ex' }">/vue-ex</router-link>
    <!--<router-view class="nested-child"></router-view>-->
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
