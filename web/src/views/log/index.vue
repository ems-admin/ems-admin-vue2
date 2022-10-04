<template>
  <div>
    <div class="searchDiv">
      <el-input class="searchInput" v-model="blurry" placeholder="请输入操作人或说明" clearable></el-input>
      <el-select class="searchInput" v-model="logType" placeholder="请选择日志类型" clearable>
        <el-option value="1" label="成功"></el-option>
        <el-option value="2" label="失败"></el-option>
      </el-select>
      <el-button type="primary" @click="getLogs">查询</el-button>
    </div>
    <el-table :data="tableData" row-key="id" border>
      <el-table-column label="序号" type="index" width="60">
        <template slot-scope="scope">
          <span>{{(current - 1) * size + 1 + scope.$index}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作人" prop="username"></el-table-column>
      <el-table-column label="操作说明" prop="description" show-overflow-tooltip></el-table-column>
      <el-table-column label="请求方法" prop="method" show-overflow-tooltip></el-table-column>
      <el-table-column label="请求参数" prop="params" show-overflow-tooltip></el-table-column>
      <el-table-column label="IP" prop="ip"></el-table-column>
      <el-table-column label="日志类型" prop="logType"></el-table-column>
      <el-table-column label="请求耗时" prop="time"></el-table-column>
      <el-table-column label="错误详情" prop="exceptionDetail" show-overflow-tooltip></el-table-column>
    </el-table>
    <pagination :current.sync="current" :size.sync="size" :total="total" @get-list="getLogs"></pagination>
  </div>
</template>

<script>
import {getLogList} from "../../api/log/sysLog";
import {errorMsg} from "../../utils/message";
import Pagination from "../../components/Pagination";
export default {
  name: "index",
  components: {
    Pagination
  },
  data(){
    return{
      blurry: '',
      tableData: [],
      logType: '',
      current: 1,
      size: 10,
      total: 0
    }
  },
  mounted() {
    this.getLogs()
  },
  methods: {
    getLogs(){
      const params = {
        blurry: this.blurry,
        currentPage: this.current,
        size: this.size
      }
      getLogList(params).then(res => {
        if (res.success){
          this.tableData = res.data.records
          this.total = res.data.total
        } else {
          errorMsg(res.msg)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>