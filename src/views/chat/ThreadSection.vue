<template>
  <div class="thread-section">
    <div class="thread-count">
      {{currentThread.id}}
    </div>
    <ul class="thread-list">
      <thread
        v-for="thread in threads"
        :key="thread.id"
        :thread="thread"
        :active="thread.id === currentThread.id"
        @switch-thread="switchThread"
        >
      </thread>
    </ul>
  </div>
</template>
<script>
  import Thread from './Thread.vue'
  import { mapGetters } from 'vuex'
  export default {
    name: 'ThreadSection',
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters([
        'threads',
        'currentThread'
      ])
    },
    methods: {
      switchThread (id) {
        console.log('switchThread')
        this.$store.dispatch('switchThread', { id })
      }
    },
    components: {
      Thread
    },
    created () {
    }
  }
</script>
