<template>
  <div class="message-section">
    message-section
    <message></message>
  </div>
</template>
<script>
  import Message from './Message.vue'
  // apState, mapGetters, mapActions } from 'vuex'
  export default {
    name: 'MessageSection',
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
    },
    components: {
      Message
    },
    created () {
    }
  }
</script>
