<template>
  <div>
    <tab-bar :nav="nav"/>
    <router-view></router-view>
  </div>
</template>
<script>
import tabBar from "../components/tabBar";
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

