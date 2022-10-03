<template>
  <div>
    <div class="searchDiv">
      <el-input class="searchInput" v-model="blurry" placeholder="请输入用户名或昵称" clearable></el-input>
      <el-button type="primary" @click="getUserList">查询</el-button>
      <el-button @click="editUser" style="float: right;">新增</el-button>
    </div>
    <el-table :data="tableData" row-key="id" border>
      <el-table-column label="用户名" prop="username"></el-table-column>
      <el-table-column label="昵称" prop="nickName"></el-table-column>
      <el-table-column label="角色" prop="roles"></el-table-column>
      <el-table-column label="状态" prop="enabled" width="100">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.enabled" type="success" size="mini">启用</el-tag>
          <el-tag v-else type="danger" size="mini">停用</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" prop="option" width="220px" align="center">
        <template slot-scope="scope">
          <el-button type="warning" @click="enabledUser(scope.row.id, !scope.row.enabled)">{{scope.row.enabled ? '停用' : '启用'}}</el-button>
          <el-button type="primary" @click="editUser(scope.row)">编辑</el-button>
          <el-button type="danger" @click="delUser(scope.row.id, scope.row.username)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <edit-user :dialog-visible.sync="dialogVisible" :user-obj="userObj" @get-list="getUserList"></edit-user>
  </div>
</template>

<script>
import editUser from "./editUser";
import {getUserList, delUser} from "../../api/user/sysUser";
import {errorMsg, infoMsg, successMsg} from "../../utils/message";
export default {
  name: "index",
  components: {
    editUser
  },
  data(){
    return{
      blurry: '',
      tableData: [],
      dialogVisible: false,
      userObj: null
    }
  },
  mounted() {
    this.getUserList()
  },
  methods: {
    getUserList(){
      getUserList({blurry: this.blurry}).then(res => {
        if (res.success){
          this.tableData = res.data.records
        }
      })
    },
    editUser(row){
      this.dialogVisible = true
      this.userObj = row
    },
    delUser(id, username){
      this.$confirm('确定删除用户【' + username + '】？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delUser({id: id}).then(res => {
          if (res.success){
            successMsg(res.data)
            this.getUserList()
          } else {
            errorMsg(res.msg)
          }
        })
      }).catch(() => {
        infoMsg('操作已取消')
      })
    },
    //  启用/停用用户
    enabledUser(id, enabled){
      console.info(id)
      console.info(enabled)
    }
  }
}
</script>

<style scoped>

</style>