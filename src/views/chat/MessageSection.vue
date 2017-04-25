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
    <textarea class="message-composer" @keyup.enter="sendMessage"></textarea>
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
      sendMessage (e) {
        const text = e.target.value
        if (text.trim()) {
          this.$store.dispatch('sendMessage', {
            text,
            thread: this.thread
          })
          e.target.value = ''
        }
      }
    },
    components: {
      Message
    },
    created () {
    }
  }
</script>
