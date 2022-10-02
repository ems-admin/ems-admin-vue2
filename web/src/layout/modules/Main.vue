<template>
  <el-tabs v-model="activeTab" type="card" closable>
    <el-tab-pane v-for="(item, index) in tabs" :key="index" :label="item.name" :name="item.name"></el-tab-pane>
  </el-tabs>
</template>

<script>
import store from "../../store";
export default {
  name: "Main",
  computed: {
    activeTab: {
      get: function (){
        return store.state.activeIndex
      },
      set: function (val) {
        store.dispatch('activeIndexAction', val)
      }
    },
    tabs: {
      get: function () {
        return store.state.openTabs
      }
    }
  },
}
</script>

<style scoped>

</style>