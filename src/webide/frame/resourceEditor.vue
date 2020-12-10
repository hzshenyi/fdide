<template>
   <fd-tabs  v-model="activeName">
       <fd-tab-pane label="资源树" name="a">
           <div  id="ideDesigner">
           <ResourceTree :elList="resourceTree"></ResourceTree>
           </div>
       </fd-tab-pane>
       <fd-tab-pane label="源码"  name="b">
       </fd-tab-pane>
   </fd-tabs>
</template>

<style scoped>

</style>
<script>
import {ref,reactive,getCurrentInstance,watch} from 'vue' 
import ResourceTree from '../components/resourceTree.vue'
import resource from '../lib/resource.js'
import store from '../lib/store.js'
import dom from '../lib/dom.js'
export default {
    components:{
        ResourceTree 
    },
    setup(){
        let ctx = getCurrentInstance().ctx;
        let activeName = ref("a"); 
        let resourceTree = store.get("resourceTree");//从全局中得到资源树json
        resource.load((html)=>{
           let json = dom.parseHtmlToJson(html);
           store.put("resourceTree",[json]);
           watch(resourceTree.value,(value)=>{
            //  console.log(value)
           })
        })
    
        return {
            store,activeName,resourceTree
        }
    }
}
</script>