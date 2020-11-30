<template>
   <fd-tabs  v-model="activeName">
       <fd-tab-pane label="资源树" name="a">
           tree
       </fd-tab-pane>
       <fd-tab-pane label="源码"  name="b">
       </fd-tab-pane>
   </fd-tabs>
</template>

<style scoped>

</style>
<script>
import {ref} from 'vue'
export default {
    setup(){
        let activeName = ref("a");
        return {
            activeName
        }
    }
}
</script>