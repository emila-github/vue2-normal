<template>
  <li class="message-list-item">
    <h5 class="message-author-name">{{ message.authorName }}</h5>
    <div class="message-time">
      {{ message.timestamp | time }}
    </div>
    <div class="message-text"><p>id:{{message.id}}; isRead:{{message.isRead}}; threadID: {{message.threadID}}</p><p>{{ message.text }}</p></div>
  </li>
</template>
<script>
  export default {
    name: 'Thread',
    // filters: {
    //   time (timestamp) {
    //     return new Date(timestamp).toLocaleTimeString()
    //   }
    // },
    props: {
      message: Object
    }
  }
</script>
