<template>
<fd-service ref="service" class="preview"></fd-service>
</template>
<style scoped>
.preview{
  height:100%; border: 1px solid rgb(209, 203, 203);padding:2px;
}
</style>
<script>
import { getCurrentInstance, onMounted } from "vue";
import resourceProp from "./resourceProp.vue";
export default {
  components: {
    resourceProp,
  },
  setup() {
    const activeName = "a";
    const ctx = getCurrentInstance().ctx;
    onMounted(() => {
      ctx.$refs.service.load("/src/app/oa/filesend.vue");
    });
    return {
      activeName,
    };
  },
};
</script>
