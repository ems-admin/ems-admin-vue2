<template>
  <el-row>
    <el-col :span="12">
      <span>EMS后台管理系统</span>
    </el-col>
    <el-col :span="12">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">{{username}}<i class="el-icon-arrow-down el-icon--right"></i></span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="pwd">修改密码</el-dropdown-item>
          <el-dropdown-item command="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
import store from "../../store";
import routers from "../../router/routers";
export default {
  name: "Header",
  data(){
    return{
      username: store.state.userInfo.nickName
    }
  },
  methods: {
    handleCommand(command){
      if (command === 'logout'){
        this.logout()
      } else if (command === 'pwd'){
        console.info('修改密码')
      }
    },
    logout(){
      //  清空token
      store.dispatch('tokenAction', null)
      //  清空refreshToken
      store.dispatch('refreshAction', null)
      //  跳转到登录页面
      routers.push({path: '/login'})
    }
  }
}
</script>

<style scoped>
  .el-row{
    width: 100%;
  }
  .el-dropdown{
    float: right;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>