<template>
  <div class="main">
    <h1>{{ msg }}</h1>
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





  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'vr-store-list',
  data () {
    return {
      msg: 'vr-store-list'// ,
      // tableData: [
      //   {
      //     date: '2016-05-03',
      //     name: '王小虎',
      //     province: '上海',
      //     city: '普陀区',
      //     address: '上海市普陀区金沙江路 1518 弄',
      //     zip: 200333
      //   }, {
      //     date: '2016-05-02',
      //     name: '王小虎',
      //     province: '上海',
      //     city: '普陀区',
      //     address: '上海市普陀区金沙江路 1518 弄',
      //     zip: 200333
      //   }, {
      //     date: '2016-05-04',
      //     name: '王小虎',
      //     province: '上海',
      //     city: '普陀区',
      //     address: '上海市普陀区金沙江路 1518 弄',
      //     zip: 200333
      //   }, {
      //     date: '2016-05-01',
      //     name: '王小虎',
      //     province: '上海',
      //     city: '普陀区',
      //     address: '上海市普陀区金沙江路 1518 弄',
      //     zip: 200333
      //   }, {
      //     date: '2016-05-08',
      //     name: '王小虎',
      //     province: '上海',
      //     city: '普陀区',
      //     address: '上海市普陀区金沙江路 1518 弄',
      //     zip: 200333
      //   }, {
      //     date: '2016-05-06',
      //     name: '王小虎',
      //     province: '上海',
      //     city: '普陀区',
      //     address: '上海市普陀区金沙江路 1518 弄',
      //     zip: 200333
      //   }, {
      //     date: '2016-05-07',
      //     name: '王小虎',
      //     province: '上海',
      //     city: '普陀区',
      //     address: '上海市普陀区金沙江路 1518 弄',
      //     zip: 200333
      //   }
      // ]
    }
  },
  computed: {
    ...mapGetters({
      tableData: 'getTableData'
    })
  },
  methods: {
    fetchList () {
      let scope = this
      scope.$store.dispatch('getStoreList')
      // console.log('fetchList listData = ', scope.$store.state.storeList.listData)
    }
  },
  created () {
    console.log('do created')
  },
  mounted () {
    console.log('do mounted')
    this.fetchList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
