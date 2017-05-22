<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <!--工具条-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" :model="formSearchParams" ref="searchForm">
        <el-form-item prop="userCode">
          <el-input v-model="formSearchParams.userCode" placeholder="用户账号"></el-input>
        </el-form-item>
        <el-form-item prop="userStatus">
          <el-select v-model="formSearchParams.userStatus" placeholder="请选择状态" clearable>
            <el-option label="激活" :value="1"></el-option>
            <el-option label="禁用" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" v-on:click="handleFormSearch">查询</el-button>
          <el-button @click="handleFormReset('searchForm')">重置</el-button>
        </el-form-item>
        <el-form-item style="float: right;">
          <el-button type="primary" @click="handleAdd">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <!--列表-->
    <el-table :data="tableDatas" highlight-current-row style="width: 100%;" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column type="index" label="序号" width="80">
      </el-table-column>
      <el-table-column prop="id" label="id" min-width="80" sortable>
      </el-table-column>
      <el-table-column prop="userCode" label="用户账号" min-width="130" sortable>
      </el-table-column>
      <el-table-column prop="trueName" label="真实姓名" width="130" sortable>
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="200" sortable>
      </el-table-column>
      <el-table-column prop="mobile" label="手机号码" width="150" sortable>
      </el-table-column>
      <el-table-column prop="department" label="部门" width="100" sortable>
      </el-table-column>
      <el-table-column prop="roleName" label="角色" width="100" sortable>
      </el-table-column>
      <el-table-column prop="status" label="状态" width="100" sortable>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间" width="150" sortable>
      </el-table-column>
      <el-table-column prop="createTime" label="创建时间(格式化)" :formatter="formarDatetime" width="200" sortable>
      </el-table-column>
      <el-table-column label="创建时间(格式化)" width="200" sortable>
        <template scope="scope">
          <el-icon name="time" v-if="scope.row.createTime"></el-icon>
          <span style="margin-left: 10px" v-if="scope.row.createTime">{{ scope.row.createTime | datetime }}</span>
          <span v-if="!scope.row.createTime">永久</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="150" fixed="right">
        <template scope="scope">
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--工具条-->
    <el-col :span="24" class="toolbar" style="margin-top: 20px;">
      <el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>
      <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :current-page="tableSearchParams.pageNo" :page-size="tableSearchParams.pageSize" :total="totalCount" style="float:right;">
      </el-pagination>
    </el-col>

    <!--新增界面-->
    <el-dialog title="新增用户" v-model="addFormVisible" :close-on-click-modal="false" :modal-append-to-body="false">
      <el-form :model="addForm" label-width="120px" :rules="addFormRules" ref="addForm">
        <el-form-item label="用户帐号" prop="userCode">
          <el-input v-model="addForm.userCode"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" prop="trueName">
          <el-input v-model="addForm.trueName"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="mobile">
          <el-input v-model="addForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="部门" prop="department">
          <el-input v-model="addForm.department"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="addForm.status" placeholder="请选择状态">
            <el-option label="激活" :value="1"></el-option>
            <el-option label="禁用" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="addForm.sex">
            <el-radio class="radio" :label="1">男</el-radio>
            <el-radio class="radio" :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number v-model="addForm.age" :min="0" :max="200"></el-input-number>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker type="date" placeholder="选择日期" v-model="addForm.birth"></el-date-picker>
        </el-form-item>
        <el-form-item label="地址">
          <el-input type="textarea" v-model="addForm.addr"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="addFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
      </div>
    </el-dialog>

    <!--编辑界面-->
    <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false" :modal-append-to-body="false">
      <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
        <el-form-item label="用户帐号" prop="userCode">
          <el-input v-model="editForm.userCode" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="真实姓名" prop="trueName">
          <el-input v-model="editForm.trueName"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" prop="mobile">
          <el-input v-model="editForm.mobile"></el-input>
        </el-form-item>
        <el-form-item label="部门" prop="department">
          <el-input v-model="editForm.department"></el-input>
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="editForm.status" placeholder="请选择状态">
            <el-option label="激活" :value="1"></el-option>
            <el-option label="禁用" :value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="editForm.sex">
            <el-radio class="radio" :label="1">男</el-radio>
            <el-radio class="radio" :label="0">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input-number v-model="editForm.age" :min="0" :max="200"></el-input-number>
        </el-form-item>
        <el-form-item label="生日">
          <el-date-picker type="date" placeholder="选择日期" v-model="editForm.birth"></el-date-picker>
        </el-form-item>
        <el-form-item label="地址">
          <el-input type="textarea" v-model="editForm.addr"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editFormVisible = false">取消</el-button>
        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
      </div>
    </el-dialog>


  </div>
</template>

<script>
  import { maiAdminSystemUserList, maiAdminSystemUserAdd, maiAdminSystemUserUpdate, maiAdminSystemUserDelete, maiSystemAdminUserCodeCheck } from '../../api/index'
  export default {
    name: 'mai-system-user-table',
    data () {
      let checkUserCode = (rule, value, callback) => {
        // if (!value) {
        //   return callback(new Error('用户帐号不能为空'))
        // }
        let params = {
          userCode: value
        }
        // 异步检查
        maiSystemAdminUserCodeCheck(params).then((datas) => {
          if (!datas.data.data) {
            callback(new Error(datas.data.messages.join('')))
          } else {
            callback()
          }
        })
      }
      let checkMobile = (rule, value, callback) => {
        if (!/^0?(13|14|15|17|18)[0-9]{9}$/.test(value)) {
          return callback(new Error('请输入正确的手机号码！'))
        } else {
          callback()
        }
      }
      return {
        msg: 'mai-system-user-table.vue',
        tableDatas: [], // 表格数据
        sels: [], // 列表选中列
        totalCount: 0,
        getTablesStatus: 0, // 请求的状态 1：进行中 0：完成 // 防止分页页码改变触发二次请求列表
        // 搜索条的搜索条件
        formSearchParams: {
          pageNo: 1,
          userCode: '',
          userStatus: ''
        },
        // 表格数据请求参数
        tableSearchParams: {
          pageNo: 1,
          pageSize: 2
        },
        addFormVisible: false, // 新增界面是否显示
        addLoading: false,
        addFormRules: {
          userCode: [
            { required: true, message: '请输入用户帐号', trigger: 'blur' },
            { validator: checkUserCode, trigger: 'blur' }
          ],
          trueName: [
            { required: true, message: '请输入真实姓名', trigger: 'blur' }
          ],
          email: [
            { required: true, message: '请输入邮箱地址', trigger: 'blur' },
            { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
          ],
          mobile: [
            { required: true, message: '请输入手机号码', trigger: 'blur' },
            { validator: checkMobile, trigger: 'blur' }
          ]
        },
        // 新增界面数据
        addForm: {
          userCode: '',
          sex: -1,
          age: 0,
          birth: '',
          addr: ''
        },
        editFormVisible: false, // 编辑界面是否显示
        editLoading: false,
        editFormRules: {
          trueName: [
            { required: true, message: '请输入真实姓名', trigger: 'blur' }
          ]
        },
        // 编辑界面数据
        editForm: {
          userId: 0,
          userCode: '',
          sex: -1,
          age: 0,
          birth: '',
          addr: ''
        }
      }
    },
    filters: {
      // formarDatetime (value) {
      //   return !value ? '永久' : this.$moment(value).format('YYYY-MM-DD HH:mm:ss')
      // }
    },
    methods: {
      formarDatetime (row, column) {
        return !row.createTime
          ? '-'
          : `${this.$moment(row.createTime).format('YYYY-MM-DD HH:mm:ss')}`
      },
      handleCurrentChange (val) {
        console.log('do handleCurrentChange')
        // console.log(`当前页: ${val}`)
        this.$set(this.tableSearchParams, 'pageNo', val)
        this.getTables()
      },
      handleFormSearch () {
        console.log('do handleFormSearch')
        this.getTables(this.formSearchParams)
      },
      handleFormReset (formName) {
        this.$refs[formName].resetFields()
      },
      handleSelectionChange (val) {
        this.sels = val
        console.log('do handleSelectionChange', this.sels)
      },
      // 批量删除
      batchRemove () {
        var ids = this.sels.map(item => item.id).toString()
        console.log('TODO batchRemove', ids)
      },
      getTables (params) {
        if (this.getTablesStatus === 1) {
          return
        } else {
          this.getTablesStatus = 1
        }
        Object.assign(this.tableSearchParams, params)
        // console.log('this.tableSearchParams', this.tableSearchParams)
        maiAdminSystemUserList(this.tableSearchParams).then(datas => {
          console.log(datas)
          this.tableDatas = datas.listData
          this.tableSearchParams.pageNo = datas.pageNo
          this.tableSearchParams.pageSize = datas.pageSize
          this.totalCount = datas.totalCount
          this.getTablesStatus = 0
        })
      },
      // 删除
      handleDel: function (index, row) {
        this.$confirm('确认删除该记录吗?', '提示', {
          type: 'warning'
        }).then(() => {
          this.listLoading = true
          let params = { userId: row.id }
          maiAdminSystemUserDelete(params).then((res) => {
            this.listLoading = false
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.getTables()
          })
        }).catch(() => {

        })
      },
      // 显示新增界面
      handleAdd: function () {
        this.addFormVisible = true
        this.addForm = {
          userCode: '',
          trueName: '',
          email: '',
          mobile: '',
          department: '',
          status: '',
          sex: -1,
          age: 0,
          birth: '',
          addr: ''
        }
      },
      // 新增
      addSubmit: function () {
        this.$refs.addForm.validate((valid) => {
          if (valid) {
            this.addLoading = true
            let params = Object.assign({}, this.addForm)
            maiAdminSystemUserAdd(params).then((res) => {
              this.addLoading = false
              this.$message({
                message: '提交成功',
                type: 'success'
              })
              this.$refs['addForm'].resetFields()
              this.addFormVisible = false
              // this.getTables()
              this.handleFormReset('searchForm')
              this.handleFormSearch()
            }, (res) => {
              // console.log('error')
              this.addLoading = false
              // NProgress.done()
              this.$message({
                message: '提交失败',
                type: 'error'
              })
              this.addFormVisible = true
            })
            // this.$confirm('确认提交吗？', '提示', {}).then(() => {

            // })
          }
        })
      },
      // 显示编辑界面
      handleEdit: function (index, row) {
        this.editFormVisible = true
        row.userId = row.id
        this.editForm = Object.assign({}, row)
      },
      // 编辑
      editSubmit: function () {
        this.$refs.editForm.validate((valid) => {
          if (valid) {
            this.editLoading = true
            // NProgress.start()
            let params = Object.assign({}, this.editForm)
            maiAdminSystemUserUpdate(params).then((res) => {
              this.editLoading = false
              // NProgress.done()
              this.$message({
                message: '提交成功',
                type: 'success'
              })
              this.$refs['editForm'].resetFields()
              this.editFormVisible = false
              this.getTables()
            })
            // this.$confirm('确认提交吗？', '提示', {}).then(() => {

            // })
          }
        })
      }
    },
    mounted () {
      this.getTables()
    }
  }
</script>

<style scoped>

</style>
