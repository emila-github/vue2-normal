<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <h3>message: {{ message }}</h3>
    <p><input type="text" v-model="message"></p>
    <h3>相关资料</h3>
    <ul>
      <li><a href="https://cn.vuejs.org/v2/guide/instance.html#生命周期图示" target="_black">生命周期图示</a></li>
      <li><a href="https://segmentfault.com/a/1190000008010666" target="_black">Vue2.0 探索之路——生命周期和钩子函数的一些理解(看控制台输出)</a></li>
      <li><a href="https://segmentfault.com/a/1190000008570622" target="_black">关于Vue实例的生命周期created和mounted的区别</a></li>
    </ul>


    <h3>什么是生命周期</h3>
    <div class="tip">
      Vue实例有一个完整的生命周期，也就是从开始创建、初始化数据、编译模板、挂载Dom、渲染→更新→渲染、卸载等一系列过程，我们称这是Vue的生命周期。通俗说就是Vue实例从创建到销毁的过程，就是生命周期。
    </div>
    <p>在Vue的整个生命周期中，它提供了一系列的事件，可以让我们在事件触发时注册js方法，可以让我们用自己注册的js方法控制整个大局，在这些事件响应方法中的this直接指向的是vue的实例。</p>

    <h3>每个钩子函数都在啥时间触发</h3>
    <h4>beforeCreate</h4>
    <div class="tip">在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。</div>

    <h4>created</h4>
    <div class="tip">
      实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
    </div>
    <h4>beforeMount</h4>
    <div class="tip">
      在挂载开始之前被调用：相关的 render 函数首次被调用。(模板编译/挂载之前)
    </div>
    <h4>mounted</h4>
    <div class="tip">
      el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。(模板编译/挂载之后，不保证组件已经在document中)
    </div>
    <h4>beforeUpdate</h4>
    <div class="tip">
      数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
    </div>
    <h4>updated</h4>
    <div class="tip">
      <p>由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。</p>
    </div>

    <p>当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。</p>
    <p>该钩子在服务器端渲染期间不被调用。</p>
    
    <h4>beforeDestroy</h4>
    <div class="tip">
      <p>实例销毁之前调用。在这一步，实例仍然完全可用。</p>
    </div>

    <h4>destroyed</h4>
    <div class="tip">
      <p>Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。</p>
    </div>

  </div>
</template>

<script>
  export default {
    name: 'vue-lifecycle',
    data () {
      return {
        msg: 'vue-生命周期钩子',
        message: 'initMessage'
      }
    },
    components: {
    },
    beforeCreate: function () {
      console.group('beforeCreate 创建前状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el) // undefined
      console.log('%c%s', 'color:red', 'data   : ' + this.$data) // undefined
      console.log('%c%s', 'color:red', 'message: ' + this.message)
    },
    created: function () {
      console.group('created 创建完毕状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el) // undefined
      console.log('%c%s', 'color:red', 'data   : ' + this.$data) // 已被初始化
      console.log('%c%s', 'color:red', 'message: ' + this.message) // 已被初始化
    },
    beforeMount: function () {
      console.group('beforeMount 挂载前状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + (this.$el))  // undefined
      console.log(this.$el) // undefined
      console.log('%c%s', 'color:red', 'data   : ' + this.$data) // 已被初始化
      console.log('%c%s', 'color:red', 'message: ' + this.message) // 已被初始化
    },
    mounted: function () {
      console.group('mounted 挂载结束状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el) // 已被初始化
      console.log(this.$el)
      console.log('%c%s', 'color:red', 'data   : ' + this.$data) // 已被初始化
      console.log('%c%s', 'color:red', 'message: ' + this.message) // 已被初始化
    },
    beforeUpdate: function () {
      console.group('beforeUpdate 更新前状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el)
      console.log(this.$el)
      console.log('%c%s', 'color:red', 'data   : ' + this.$data)
      console.log(this.$data)
      console.log('%c%s', 'color:red', 'message: ' + this.message)
      return
    },
    updated: function () {
      console.group('updated 更新完成状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el)
      console.log(this.$el)
      console.log('%c%s', 'color:red', 'data   : ' + this.$data)
      console.log(this.$data)
      console.log('%c%s', 'color:red', 'message: ' + this.message)
    },
    beforeDestroy: function () {
      console.group('beforeDestroy 销毁前状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el)
      console.log(this.$el)
      console.log('%c%s', 'color:red', 'data   : ' + this.$data)
      console.log('%c%s', 'color:red', 'message: ' + this.message)
    },
    destroyed: function () {
      console.group('destroyed 销毁完成状态===============》')
      console.log('%c%s', 'color:red', 'el     : ' + this.$el)
      console.log(this.$el)
      console.log('%c%s', 'color:red', 'data   : ' + this.$data)
      console.log('%c%s', 'color:red', 'message: ' + this.message)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
