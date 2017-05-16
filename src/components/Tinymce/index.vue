<template>
  <div class='tinymce-container editor-container'>
    <textarea class='tinymce-textarea' :id="id"></textarea>
    <!--业务需求可删除-->
    <div class="editor-custom-btn-container">
       <editorImage v-if="customButton.indexOf('editorImage')>=0" color="#20a0ff" class="editor-upload-btn" @successCBK="imageSuccessCBK"></editorImage>
    </div>
    <!--业务需求可删除-->
  </div>
  
</template>

<script>
  import editorImage from './editorImage'
  export default {
    name: 'Tinymce',
    components: {
      editorImage
    },
    props: {
      id: {
        type: String,
        default: 'tinymceEditor'
      },
      value: {
        type: String,
        default: ''
      },
      customButton: {
        type: Array,
        required: false,
        default () {
          return ['editorAudio', 'editorImage']
        }
      },
      toolbar: {
        type: Array,
        required: false,
        default () {
          return ['removeformat undo redo |  bullist numlist | outdent indent | forecolor | fullscreen code', 'bold italic blockquote | h2 p  media link | alignleft aligncenter alignright']
        }
      },
      data () {
        return {
          hasChange: false,
          hasInit: false
        }
      },
      menubar: {
        default: ''
      },
      height: {
        type: Number,
        required: false,
        default: 360
      }
    },
    methods: {
      imageSuccessCBK (arr) {
        console.log(arr)
        const _this = this
        arr.forEach(v => {
          const node = document.createElement('img')
          node.setAttribute('src', v)
          node.onload = function () {
            $(this).addClass('wscnph')
            $(this).attr('data-wscntype', 'image')
            $(this).attr('data-wscnh', this.height)
            $(this).attr('data-wscnw', this.width)
            tinymce.get(_this.id).insertContent(node.outerHTML)
          }
        })
      }
    },
    watch: {
      value (val) {
        if (!this.hasChange && this.hasInit) {
          this.$nextTick(() => tinymce.get(this.id).setContent(val))
        }
      }
    },
    mounted () {
      const _this = this
      tinymce.init({
        selector: `#${this.id}`,
        height: this.height,
        body_class: 'panel-body ',
        object_resizing: false,
        //  language: 'zh_CN',
        //  language_url: '/static/tinymce/langs/zh_CN.js',
        toolbar: this.toolbar,
        menubar: this.menubar,
        // plugins: 'advlist,autolink,code,paste,textcolor, colorpicker,fullscreen,link,lists,media,wordcount, imagetools,watermark',
        plugins: 'advlist,autolink,code,paste,textcolor, colorpicker,fullscreen,link,lists,media,wordcount, imagetools',
        end_container_on_empty_block: true,
        powerpaste_word_import: 'clean',
        code_dialog_height: 450,
        code_dialog_width: 1000,
        advlist_bullet_styles: 'square',
        advlist_number_styles: 'default',
        block_formats: '普通标签=p;小标题=h2;',
        imagetools_cors_hosts: ['wpimg.wallstcn.com', 'wallstreetcn.com'],
        imagetools_toolbar: 'watermark',
        default_link_target: '_blank',
        link_title: false,
        textcolor_map: [
          '1482f0', '1482f0',
          '4595e6', '4595e6'],
        init_instance_callback: editor => {
          if (_this.value) {
            editor.setContent(_this.value)
          }
          _this.hasInit = true
          editor.on('Change', () => {
            this.hasChange = true
            this.$emit('input', editor.getContent({ format: 'raw' }))
          })
        },
        setup (editor) {
          editor.addButton('h2', {
            title: '小标题', // tooltip text seen on mouseover
            text: '小标题',
            onclick () {
              editor.execCommand('mceToggleFormat', false, 'h2')
            },
            onPostRender () {
              const btn = this
              editor.on('init', () => {
                editor.formatter.formatChanged('h2', state => {
                  btn.active(state)
                })
              })
            }
          })
          editor.addButton('p', {
            title: '正文',
            text: '正文',
            onclick () {
              editor.execCommand('mceToggleFormat', false, 'p')
            },
            onPostRender () {
              const btn = this
              editor.on('init', () => {
                editor.formatter.formatChanged('p', state => {
                  btn.active(state)
                })
              })
            }
          })
        }
      })
    },
    destroyed () {
      tinymce.get(this.id).destroy()
    }
  }
</script>


<style scoped>
.tinymce-container {
  position: relative
}

.tinymce-textarea {
  visibility: hidden;
  z-index: -1;
}

.editor-custom-btn-container {
  position: absolute;
  right: 15px;
  z-index: 2005;
  top: 18px;
}

.editor-upload-btn {
  display: inline-block;
}
</style>
