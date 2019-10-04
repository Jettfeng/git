<template>
  <div id="app">
    <keep-alive include="detail">
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
import tabBar from "./components/tabBar";
export default {
  data() {
    return {
      msg: "this is msg in App.vue",
      nav: [
        {
          content: "Home",
          path: "/"
        },
        {
          content: "About",
          path: "/about"
        },
        {
          content: "List",
          path: "/list"
        }
      ]
    };
  },
  components: {
    tabBar
  }
};
</script>

<style lang="less" scoped>
</style>
