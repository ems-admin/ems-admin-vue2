<template>
  <div>
    <el-form :model="loginForm" :rules="rules">
      <h1>登    录</h1>
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username" aria-placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="">
        <el-input></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return {
      loginForm: {
        username: null,
        password: null
      },
      rules: {
        username: [{require: true, message: '用户名不能为空', trigger: 'blur'}],
        password: [{require: true, message: '密码不能为空', trigger: 'blur'}]
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>