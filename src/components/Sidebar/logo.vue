<template>
  <div class="sidebar__logo-container">
    <img class="sidebar__logo" src="https://vuejs.org/images/logo.png" />
    <span>Vue.js</span>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
  .sidebar__logo-container{
    padding: 10px 15px;
    .sidebar__logo{
      vertical-align: middle;
      margin-right: 6px;
      width: 40px;
      height: 40px;
    }
  }
</style>
