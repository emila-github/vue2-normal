<template>
  <div class="chatapp">
    <thread-section></thread-section>
    <message-section></message-section>
  </div>
</template>
<script>
  import ThreadSection from './chat/ThreadSection.vue'
  import MessageSection from './chat/MessageSection.vue'
  import store from './chat/store/index'
  // import { mapState, mapGetters, mapActions } from 'vuex'

  export default {
    name: 'char',
    store,
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
    },
    components: {
      ThreadSection,
      MessageSection

    },
    created () {
      // scope.$store.dispatch('getAllHeros')
    }
  }
</script>
