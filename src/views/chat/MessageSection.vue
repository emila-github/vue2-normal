<template>
  <div class="message-section">
    <h3 class="message-thread-heading">{{ thread.name }}</h3>
    <ul class="message-list" ref="list">
      <message
        v-for="message in messages"
        :key="message.id"
        :message="message">
      </message>
    </ul>
  </div>
</template>
<script>
  import Message from './Message.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: 'MessageSection',
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters({
        thread: 'currentThread',
        // messages: 'messages'
        messages: 'currentMessages'
      })
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
