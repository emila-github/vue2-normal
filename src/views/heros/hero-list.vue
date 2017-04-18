<template>
  <ul class="hero-list">
    <li v-for="item in heros" :key="item.iType">
      <router-link :to="{path: 'heroDetail', query: {id: item.iType}}">
        <span class="waikuang">
            <img v-bind:src="item.imgSrc" alt="" />
        </span>
        <p>{{item.sName}}</p>
        <div v-if="item.new_type==1" class="hero_new"></div>
        <div v-if="item.pay_type==10" class="hero_free"></div>
      </router-link>
    </li>
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
<style scoped lang="sass">
  .hero-list
    display: flex;
    list-style: none;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    li
      flex: 1;
      max-width: 90px;
      padding: 10px;
      text-align: center;
      cursor: poinrer;
      font-size: 12px;
      a
        color: #000;
      img
        border-radius: 10px;
</style>
