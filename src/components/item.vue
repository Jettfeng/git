<template>
  <div class="item">
    <div>item</div>
    <div v-for="item in list" :key="item.name">{{item.name}}</div>
  </div>
</template>
<script>
export default {
  name: "item",
  props: {
    list: {
      type: Array
    }
  }
};
</script>
