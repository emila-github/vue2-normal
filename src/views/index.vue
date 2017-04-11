<template>
  <div>
    index
  </div>
</template>

<script>
import RouterLinks from '../components/RouterLinks'
import MyTitle from '../components/Header'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to App Index'
    }
  },
  components: {
    RouterLinks,
    MyTitle
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
