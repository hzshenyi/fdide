<template>
   <fd-tabs  v-model="activeName">
       <fd-tab-pane label="资源树" name="a">
           <ResourceTree></ResourceTree>
       </fd-tab-pane>
       <fd-tab-pane label="源码"  name="b">
       </fd-tab-pane>
   </fd-tabs>
</template>

<style scoped>

</style>
<script>
import {ref} from 'vue'
import ResourceTree from '../components/resourceTree.vue'
export default {
    components:{
        ResourceTree
    },
    setup(){
        let activeName = ref("a");
        return {
            activeName
        }
    }
}
</script>