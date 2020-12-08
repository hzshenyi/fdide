<template>
   <fd-tabs  v-model="activeName">
       <fd-tab-pane label="资源树" name="a">
           <resourceTree :elList="data.resourceTree"></resourceTree>
       </fd-tab-pane>
       <fd-tab-pane label="源码"  name="b">
       </fd-tab-pane>
   </fd-tabs>
</template>

<style scoped>

</style>
<script>
import {ref,reactive} from 'vue' 
import resourceTree from '../components/resourceTree.vue'
export default {
    components:{
        resourceTree
    },
    setup(){
        let activeName = ref("a");
        let data = reactive({});
        data.resourceTree=[{title:"a",children:[{title:"a1"}]}]
       
        return {
            activeName,data
        }
    }
}
</script>