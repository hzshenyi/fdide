<template>


 <fd-tabs  v-model="activeName">
       <fd-tab-pane label="属性"  name="a" >
            <resourceProp></resourceProp>
       </fd-tab-pane>
       <fd-tab-pane label="预览" name="b">
         
       </fd-tab-pane>
      
   </fd-tabs>
</template>
<script>
import {getCurrentInstance,onMounted} from 'vue'
import resourceProp from "./resourceProp.vue";
export default {
   components: {
    resourceProp,
  },
     setup() {
          const activeName = "a"
          const ctx = getCurrentInstance().ctx;
          onMounted(()=>{
               // ctx.$refs.service.load("/src/app/oa/filesend.vue")
          })
         return {
              activeName
         }
     }
}
</script>