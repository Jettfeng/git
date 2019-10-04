<template>
  <div class="loading" @click="alert">loading</div>
</template>
<script>
export default {
  methods: {
    alert(){
      alert('xxxx')
    }
  }
}
</script>
<style scoped>
.loading {
  width: 100%;
  height: 20px;
  background: red;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
</style>

