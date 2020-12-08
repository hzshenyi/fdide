<template>
  <div v-for="el in elList">
    {{ el.title }}
    <resourceTree v-if="el.children" :elList = "el.children"></resourceTree>
  </div>
</template>

<style scoped></style>
<script>
import { ref, reactive } from "vue";
export default {
  name: "resourceTree",
  props: {
    elList: {
      type: Array,
    },
  },
  setup() {},
};
</script>
