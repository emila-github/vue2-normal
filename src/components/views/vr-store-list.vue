<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <el-form :inline="true" :model="searchCache" class="demo-form-inline">
      <el-form-item label="名称">
        <el-input v-model="searchCache.name" placeholder="名称"></el-input>
      </el-form-item>
      <el-form-item label="省">
        <el-select v-model="searchCache.province" placeholder="省" @change="changeProvince" style="width:120px;" clearable>
          <el-option v-for="d in provinceList" :label="d.name" :value="d.code" :key="d.code"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="市">
        <el-select v-model="searchCache.city" placeholder="市" style="width:120px;" clearable>
          <el-option v-for="d in cityList" :label="d.name" :value="d.code" :key="d.code"></el-option>
        </el-select>
      </el-form-item>
      <el-date-picker
        v-model="searchCache.createTime"
        type="datetimerange"
        placeholder="选择时间范围">
      </el-date-picker>
      <el-form-item>
        <el-button type="primary" @click="formSearch">查询</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        fixed
        prop="id"
        label="ID"
        width="150">
      </el-table-column>
      <el-table-column
        prop="provinceName"
        label="省市"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="店名">
      </el-table-column>
    </el-table>


    <div class="block pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[20, 50, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount">
      </el-pagination>
    </div>


  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { provinceSelect, citySelect } from '../../api/index'
export default {
  name: 'vr-store-list',
  data () {
    return {
      msg: 'vr-store-list',
      provinceList: [],
      cityList: [],
      // 未确定搜索条件缓存
      searchCache: {
        name: '',
        province: '',
        city: '',
        recommendFlag: null,
        activingFlag: null,
        createTime: []
      },
      // 表格数据请求参数
      search: {
        pageNo: 1,
        pageSize: 20,
        name: '',
        province: '',
        city: '',
        recommendFlag: null,
        activingFlag: null,
        lowerTime: '',
        upperTime: ''
      }
    }
  },
  computed: {
    totalCount () {
      return this.$store.state.storeList.totalCount
    },
    currentPage () {
      return this.$store.state.storeList.pageNo
    },
    pageSize () {
      return this.$store.state.storeList.pageSize
    },
    // ...mapMutations(['setPageNo']),
    ...mapGetters({
      tableData: 'store/getTableData'
    })
  },
  methods: {
    changeProvince (provinceCode) {
      this.$set(this.searchCache, 'city', '')
      this.fetchCityList({provinceCode})
    },
    fetchProvinceList () {
      let scope = this
      provinceSelect().then(datas => {
        this.$set(scope, 'provinceList', datas)
      })
    },
    fetchCityList ({provinceCode}) {
      let scope = this
      citySelect({provinceCode}).then(datas => {
        this.$set(scope, 'cityList', datas)
      })
    },
    // 搜索
    formSearch () {
      let createTime = this.searchCache.createTime
      if (createTime.length >= 2) {
        this.$set(this.search, 'lowerTime', createTime[0] ? +createTime[0] : '')
        this.$set(this.search, 'upperTime', createTime[1] ? +createTime[1] : '')
      }
      this.fetchList(this.searchCache)
    },
    // 更新门店列表
    fetchList (params = {}) {
      let scope = this
      Object.assign(this.search, params)
      delete this.search.createTime // 删除无用请求参数
      scope.$store.dispatch('store/getStoreList', this.search)
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
      this.$set(this.search, 'pageNo', 1)
      this.$set(this.search, 'pageSize', val)
      this.fetchList()
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      this.$set(this.search, 'pageNo', val)
      this.fetchList()
    }
  },
  created () {
    // console.log('do created')
  },
  mounted () {
    // console.log('do mounted')
    this.fetchProvinceList()
    this.fetchList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .pagination{
    text-align: right;
    padding: 15px;
  }
</style>
