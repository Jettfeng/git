<template>
  <div id="nav">
    <router-link
      class="item"
      v-for="item in nav"
      :key="item.content"
      :exact="item.path=='/'"
      :to="item.path"
    >{{item.content}}</router-link>
  </div>
</template>
<script>
export default {
  name: "tabBar",
  props: {
    nav: {
      type: Array
    }
  }
};
</script>
<style lang="less" scoped>
#nav {
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #42b983;
  .item {
    flex: 1;
    display: flex;
    width: 100%;
    height: 100%;
    text-align: center;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }
  .router-link-active {
    background: #42b983;
    color: #ffffff;
  }
}
</style>

