<template>
  <div>
    <div>Home</div>
  </div>
</template>
<script>
import item from "../components/item";
import { mapGetters, mapState, mapActions } from "vuex";
export default {
  name: "home",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      rootState: state => state.rootState,
      moduleA: state => state.moduleA.moduleA,
      moduleB: state => state.moduleB.moduleB
    })
  },
  created() {},
  methods: {},
  components: {
    item
  }
};
</script>
<style scoped>
</style>

