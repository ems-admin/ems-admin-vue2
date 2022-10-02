<template>
  <el-table :data="tableData" row-key="id" border>
    <el-table-column label="菜单名称" prop="name"></el-table-column>
    <el-table-column label="菜单路径" prop="path"></el-table-column>
    <el-table-column label="component" prop="component"></el-table-column>
    <el-table-column label="权限" prop="permission"></el-table-column>
    <el-table-column label="类型" prop="type">
      <template slot-scope="scope">
        <span v-if="scope.row.type === '1'">菜单</span>
        <span v-else-if="scope.row.type === '2'">页面</span>
        <span v-else-if="scope.row.type === '3'">按钮</span>
      </template>
    </el-table-column>
    <el-table-column label="排序" prop="sort"></el-table-column>
    <el-table-column label="操作" prop="option" width="150px" align="center">
      <template slot-scope="scope">
        <el-button type="primary" @click="editMenu(scope.row)">编辑</el-button>
        <el-button type="danger" @click="delMenu(scope.row.id, scope.row.name)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {getMenuTable} from "../../api/menu/sysMenu";
import {errorMsg} from "../../utils/message";
export default {
  name: "index",
  data(){
    return{
      blurry: '',
      tableData: []
    }
  },
  mounted() {
    this.getMenuList()
  },
  methods: {
    //  获取菜单列表
    getMenuList(){
      getMenuTable({blurry: this.blurry}).then(res => {
        if (res.success){
          this.tableData = res.data
        } else {
          errorMsg(res.msg)
        }
      })
    },
    //  编辑菜单
    editMenu(row){
      console.info(row)
    },
    //  删除菜单
    delMenu(id, name){
      console.info(id)
      console.info(name)
    }
  }
}
</script>

<style scoped>

</style>