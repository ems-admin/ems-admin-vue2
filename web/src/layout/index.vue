<template>
  <el-container>
    <el-aside width="250px">
      <Aside></Aside>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <Main></Main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "./modules/Header";
import Main from "./modules/Main";
import Aside from "./modules/Aside";
export default {
  name: "index",
  components: {
    Header,
    Main,
    Aside
  }
}
</script>

<style scoped>
  .el-aside{
    height: calc(100vh);
  }
  .el-header{
    display: flex;
    align-items: center;
  }
</style>