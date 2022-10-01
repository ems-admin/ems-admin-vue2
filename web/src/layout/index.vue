<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside>
        <Aside></Aside>
      </el-aside>
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

</style>