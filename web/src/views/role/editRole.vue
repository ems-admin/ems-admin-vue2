<template>
  <el-dialog :title="title" :visible.sync="visible" :close-on-click-modal="false" @opened="openFun">
    <el-form :model="roleForm" :rules="rules" ref="roleRef" label-width="120px">
      <el-form-item v-show="false" prop="id">
        <el-input v-model="roleForm.id"></el-input>
      </el-form-item>
      <el-form-item label="角色名称" prop="roleName">
        <el-input v-model="roleForm.roleName" placeholder="请输入角色名称"></el-input>
      </el-form-item>
      <el-form-item label="角色代码" prop="roleCode">
        <el-input v-model="roleForm.roleCode" placeholder="请输入角色代码"></el-input>
      </el-form-item>
      <el-form-item label="角色说明" prop="roleIds">
        <el-input type="textarea" v-model="roleForm.description" aria-placeholder="请输入角色说明"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer">
      <el-button @click="resetForm('roleRef')">重置</el-button>
      <el-button type="primary" :loading="isLoading" @click="submitRole('roleRef')">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import {editRole} from "../../api/role/sysRole";
import {errorMsg, successMsg} from "../../utils/message";
import {resetForm} from "../../utils/common";
export default {
  name: "editRole",
  props: {
    dialogVisible: {
      type: Boolean,
      require: true,
      default: false
    },
    roleObj: Object
  },
  computed: {
    visible: {
      get: function () {
        return this.dialogVisible
      },
      set: function (val) {
        this.$emit('update:dialogVisible', val)
      }
    }
  },
  data(){
    return{
      title: '新增',
      isLoading: false,
      roleForm: {
        id: null,
        roleName: '',
        roleCode: '',
        description: ''
      },
      rules: {
        roleName: [{required: true, message: '角色名称不能为空', trigger: 'blur'}],
        roleCode: [{required: true, message: '角色代码不能为空', trigger: 'blur'}]
      }
    }
  },
  methods: {
    resetForm,
    openFun(){
      if (this.roleObj.id){
        this.title = '编辑'
        this.roleForm = this.roleObj
      }
    },
    //  提交
    submitRole(formName){
      this.$refs[formName].validate((valid) => {
        if (valid){
          this.isLoading = true
          editRole(this.roleForm).then(res => {
            if (res.success){
              successMsg(res.data)
              this.visible = false
              this.$emit('get-list')
            } else {
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
 ::v-deep .vue-treeselect__control{
  height: 28px;
}
 ::v-deep .el-form-item__content{
   line-height: 28px;
   font-size: 12px;
 }
</style>