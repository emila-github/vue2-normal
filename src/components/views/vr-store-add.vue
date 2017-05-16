<template>
  <div class="main">
  	<div slot="breadcrumb"></div>
    <h1>{{ msg }}</h1>
<!--     <form action="http://p.act.17173.com/api/v2/activity/7749/picture/upload" method="post">
      <input type="file" name="uploadimg"></input>
      <input type="submit" value="提交">
    </form>
    <form @submit.prevent="testFormSubmit">
      <input type="file" name="file"></input>
      <input type="submit" value="提交">
    </form> -->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch on-text="" off-text="" v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <!-- https://jsonplaceholder.typicode.com/posts/ -->
      <!-- http://bptw9y.app.test.173ops.com/image/upload -->
      <el-form-item label="体验店图片上传" prop="fileListVr">
      <!-- :on-change="handleChange" -->
        <el-upload
          class="upload-demo"
          ref="uploadVr"
          :on-success="handleVrUploadSuccess" :multiple="true" accept=".jpg, .png, .gif"
          :action="$http.options.root + '/image/upload'"
          :headers="jwt"
          :data="fileParams"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="ruleForm.fileListVr"
          list-type="picture"
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitVrUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
      <!-- http://p.act.17173.com/api/v2/activity/7749/picture/upload -->
      <el-form-item label="act图片上传" prop="fileListAct">
        <el-upload
          name="uploadimg"
          :headers="uploadHeaders"
          class="upload-demo"
          ref="uploadAct"
          :on-success="handleActUploadSuccess"
          action="/api/v2/activity/7844/picture/upload"
          :multiple="true"
          :data="fileParams"
          :on-change="handleChange"
          :on-preview="handlePreview"
          :on-remove="handleActUploadRemove"
          :file-list="ruleForm.fileListAct"
          list-type="picture"
          :auto-upload="false">
          <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
          <el-button style="margin-left: 10px;" size="small" type="success" @click="submitActUpload">上传到服务器</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
        <el-form-item prop="fileListActCache">
        </el-form-item>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'vr-store-add',
    data () {
      return {
        uploadHeaders: {
          // 'Content-Type': 'multipart/form-data;'
        },
        fileParams: {
          a: 1,
          b: 2
        },
        msg: 'vr-store-add',
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          fileList: [
            // {
            //   name: 'food.jpeg',
            //   url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            // },
            // {
            //   name: 'food2.jpeg',
            //   url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            // }
          ],
          fileListAct: [
            {
              name: 'food.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            },
            {
              name: 'food2.jpeg',
              url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
            }
          ],
          fileListActCache: [],
          fileListVr: []
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ],
          fileListActCache: [
            { type: 'array', required: true, message: '请至少添加一张图片', trigger: 'change' }
          ]
        }
      }
    },
    computed: {
      jwt () {
        return {
          Authorization: `JWT ${this.$store.state.account.token}`,
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
    },
    methods: {
      handleActUploadRemove (file, fileList) {
        console.log('handleActUploadRemove', file, fileList)
        this.ruleForm.fileListActCache = this.$_.reject(this.ruleForm.fileListActCache, {name: file.name})
      },
      handleActUploadSuccess (response, file, fileList) {
        console.log('handleActUploadSuccess', response, file, fileList)  // eslint-disable-line no-console
        // this.isUploading = false
        if (response.result === 'info.upload.success') {
          this.ruleForm.fileListActCache.push({name: file.name, url: response.image[0]})
        } else {
          this.$notify.error({
            title: file.messages.join(' '),
            message: file.errors.join(' ')
          })
        }
      },
      handleVrUploadSuccess (file) {
        console.log('handleVrUploadSuccess file', file)  // eslint-disable-line no-console
        // this.isUploading = false
        if (file.result === 'success') {
          // this.ruleForm.fileListVr.push({id, name, normalImage, smallImage, largeImage, url: smallImage})
          // this.$set(this.ruleForm.fileListVr, ++this.ruleForm.fileListVr.length, {id, name, normalImage, smallImage, largeImage, url: smallImage})
        } else {
          this.$notify.error({
            title: file.messages.join(' '),
            message: file.errors.join(' ')
          })
        }
      },
      // testFormSubmit () {
      //   var formData = new FormData(event.target)
      //   // this.$http.post('http://p.act.17173.com/api/v2/activity/7749/picture/upload', formData, {
      //   this.$http.post('/image/upload', formData, {
      //     emulateJSON: true,
      //     headers: {
      //       'Access-Control-Allow-Origin': '*',
      //       'Content-Type': 'application/x-www-form-urlencoded',
      //       'Accept': 'application/json, text/plain, */*',
      //       'Access-Control-Allow-Headers': 'Origin, Accept, Content-Type, Authorization, Access-Control-Allow-Origin'
      //     }
      //   }).then((response) => {
      //       // success callback
      //   }, (response) => {
      //       // error callback
      //   })
      // },
      ...mapActions({
        formTest: 'test/formTest',
        formDataTest: 'test/formDataTest'
      }),
      submitActUpload () {
        this.$refs.uploadAct.submit()
      },
      submitVrUpload () {
        this.$refs.uploadVr.submit()
      },
      handleRemove (file, fileList) {
        console.log('handleRemove', file, fileList)
      },
      handlePreview (file) {
        console.log('handlePreview=', file)
      },
      handleChange (file, fileList) {
        console.log('handleChange', file, fileList)
        // this.ruleForm.fileList = fileList.slice(-3)
      },
      submitForm (formName) {
        // console.log('this.$refs.upload=', this.$refs.upload.uploadFiles)
        console.log('validate before submit!', this.ruleForm)
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('submit!', this.ruleForm)
            // Post - FormData方式
            let formData = new FormData()
            for (let item in this.ruleForm) {
              console.log(item, this.ruleForm[item])
              formData.append(item, this.ruleForm[item])
            }
            // // 和表单一起上传 示例
            // let uploadFiles = this.$refs.upload.uploadFiles
            // for (let i = 0, len = uploadFiles.length; i < len; i++) {
            //   let imgFile = uploadFiles[i].raw
            //   formData.append(`uploadFiles[${i}]`, imgFile)
            // }
            console.log('formData=', formData)
            this.formDataTest(formData)
            // Post - query stting parameters 方式
            // this.formTest(this.ruleForm)
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    },
    created () {
      console.log('do created')
      this.ruleForm.fileListActCache = this.$_.cloneDeep(this.ruleForm.fileListAct)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .line {
      text-align: center;
  }
</style>
