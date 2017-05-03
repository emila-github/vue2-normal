<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'Login',
    data () {
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          callback()
        }
      }
      var checkUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'))
        } else {
          callback()
        }
      }
      return {
        ruleForm2: {
          pass: '',
          user: ''
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          user: [
            { validator: checkUser, trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
    },
    methods: {
      submitForm (formName) {
        // console.log('formName', formName)
        this.$refs[formName].validate((valid) => {
          // console.log('valid', valid)
          if (valid) {
            // alert('submit!')
            // const {password: pass, username: user} = this.ruleForm2
            const {pass: password, user: username} = this.ruleForm2
            // const cb = () => {
            //   this.$router.push({path: '/'})
            // }
            // this.signin({username, password, cb})
            this.signin({username, password}).then((datas) => {
              // console.log('do 2', datas)
              this.$router.push({path: '/'})
            },
            () => {})
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      ...mapActions(['signin'])
    }
  }
</script>

<template>
  <div>
    <div class="login-box">
      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="user">
          <el-input v-model="ruleForm2.user"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
          <el-button @click="resetForm('ruleForm2')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style scoped>
  .login-box{
    position: fixed;
    left: 50%;
    top:30%;
    width: 500px;
    margin-left: -250px;
  }
</style>
