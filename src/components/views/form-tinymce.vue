<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <h2>资料</h2>
    <ul>
      <li><a href="https://www.tinymce.com/" target="_blank">tinymce官网</a></li>
    </ul>
    <div>
      {{postForm.content}}
    </div>
    <Tinymce :height=400 ref="editor" v-model="postForm.content"></Tinymce>
  </div>
</template>

<script>
  import Tinymce from '../Tinymce/index'
  export default {
    name: 'form-tinymce',
    data () {
      return {
        msg: 'form-tinymce',
        postForm: {
          content: 'test'
        }
      }
    },
    components: {
      Tinymce
    }
  }
</script>

<style scoped>

</style>
