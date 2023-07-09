<template>
  <div class="login">
    <el-form class="form" :model="loginForm" :rules="rules" ref="loginRef">
      <h1>用 户 登 录</h1>
      <el-form-item prop="username">
        <el-input type="text" v-model="loginForm.username" prefix-icon="iconfont icon-username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="loginForm.password" prefix-icon="iconfont icon-password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <div style="display: inline-flex;justify-content: space-between;width: 100%;">
          <el-input type="text" v-model="loginForm.code" prefix-icon="iconfont icon-captcha" style="width: 170px;" placeholder="请输入验证码"></el-input>
          <img :src="image" @click="getCode">
        </div>
      </el-form-item>
      <el-form-item>
        <el-button class="button" type="primary" :loading="isLoading" @click="submitLogin('loginRef')">登  录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import './assets/css/login.css'
import store from "./store";
import routers from "./router/routers";
import {login, getVerifyCode} from "./api/login/login";
import {errorMsg} from "./utils/message";
export default {
  name: "login",
  data(){
    return {
      isLoading: false,
      loginForm: {
        username: '',
        password: '',
        code: '',
        uuid: ''
      },
      image: '',
      rules: {
        username: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
        code: [{ required: true, message: '验证码不能为空', trigger: 'blur' }],
      }
    }
  },
  mounted() {
    this.getCode()
  },
  methods: {
    //  获取验证码
    getCode(){
      getVerifyCode().then(res => {
        this.image = res.img
        this.loginForm.uuid = res.uuid
      })
    },
    //  登录提交
    submitLogin(formName){
      this.$refs[formName].validate((valid) => {
        if (valid){
          this.isLoading = true
          login(this.loginForm).then(res => {
            if (res.success){
              //  缓存token
              store.dispatch('tokenAction', res.data.token)
              //  缓存刷新token
              store.dispatch('refreshAction', res.data.refreshToken)
              //  缓存当前登录用户信息
              store.dispatch('userInfoAction', res.data.userDto)
              //  切换到首页
              routers.push({path: '/Layout'})
            } else {
              this.getCode()
              errorMsg(res.msg)
            }
            this.isLoading = false
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>