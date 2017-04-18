<template>
  <ul>
    <li v-for="hero in heros">{{hero.sName}}</li>
  </ul>
</template>
<script>
  export default {
    name: 'hero-list',
    data () {
      return {
      }
    },
    props: ['heros'],
    methods: {
    },
    created () {
    }
  }
</script>
