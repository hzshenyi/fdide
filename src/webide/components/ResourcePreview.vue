<template>
    <fd-service ref="service"></fd-service>
</template>
<script>
import {getCurrentInstance,onMounted} from 'vue'
export default {
     setup() {
          const ctx = getCurrentInstance().ctx;
          onMounted(()=>{
               ctx.$refs.service.load("/src/app/oa/filesend.vue")
          })
          //ctx.$refs.service.load(import("../src/oa/filesend.vue"), {}, "");
     }
}
</script>