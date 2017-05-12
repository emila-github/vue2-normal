<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <ul>
      <li><a href="http://mp.weixin.qq.com/s/SJOzGQK9eaeVzyoG-m1tEw" taget="">Vue框架引入JS库的正确姿势</a></li>
    </ul>

    <p>最简单靠谱的方式是用库变成Vue的原型对象的属性。</p>

    <h3>Moment 库引入：</h3>
    <p>在main.js中引入</p>
    <div class="tip">
      <pre>
        import moment from 'moment'
        Object.defineProperty(Vue.prototype, '$moment', { value: moment })
      </pre>
    </div>
    <p>由于所有的组件都会继承Vue原型对象上的方法，因此这些方法在任何组件文件中都能通过this.$moment 访问到：</p>

    <h3>MyNewComponent.vue</h3>
    <div class="tip">
      <pre>
        export default {
          created() {
            console.log('The time is ' . this.$moment().format("HH:mm"))
          }
        }
      </pre>
    </div> 





  </div>
</template>

<script>
  export default {
    name: 'vue-js',
    data () {
      return {
        msg: 'Vue框架引入JS库的正确姿势'
      }
    },
    created () {
      console.log('The time is ' + this.$moment().format('HH:mm'))
      console.log(this.$axios ? 'Axios works!' : 'Uh oh..')
    },
    components: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
