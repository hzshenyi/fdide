<template>


 <fd-tabs  v-model="activeName">
       <fd-tab-pane label="预览" name="a">
           <fd-service ref="service"></fd-service>
       </fd-tab-pane>
       <fd-tab-pane label="属性"  name="b" >
           
       </fd-tab-pane>
   </fd-tabs>
</template>
<script>
import {getCurrentInstance,onMounted} from 'vue'
export default {
     setup() {
          const activeName = "a"
          const ctx = getCurrentInstance().ctx;
          onMounted(()=>{
               ctx.$refs.service.load("/src/app/oa/filesend.vue")
          })
         return {
              activeName
         }
     }
}
</script>