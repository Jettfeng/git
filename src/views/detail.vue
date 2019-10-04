<template>
  <keep-alive>
    <div @click="toInner">
      <div>detail</div>
      <div>id:{{id}}</div>
      <router-view></router-view>
    </div>
  </keep-alive>
</template>
<script>
export default {
  name: "detail",
  computed: {
    id() {
      return this.$route.params.id;
    }
  },
  created() {
    console.log("sfsdfsd");
    setTimeout(() => {
      //   this.$router.push({name:'detail',params:{id:'wfksdfksdifsd'}})
    }, 2000);
  },
  methods: {
    toInner() {
      this.$router.push({ name: "inner" });
    }
  },
  watch: {
    $route: {
      handler(to, from) {
        console.log(to);
        console.log(from);
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
