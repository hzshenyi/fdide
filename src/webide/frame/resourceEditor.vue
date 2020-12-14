<template>
   <fd-tabs  v-model="activeName">
       <fd-tab-pane label="资源树" name="a">
           <div  id="ideDesigner">
           <ResourceTree :elList="resourceTree"></ResourceTree>
           <textarea style="width:100%;height:200px" v-model="resourceHtml"></textarea>
           </div>
       </fd-tab-pane>
       <fd-tab-pane label="源码"  name="b">
       </fd-tab-pane>
   </fd-tabs>
</template>

<style scoped>

</style>
<script>
import {ref,reactive,getCurrentInstance,watch, computed} from 'vue' 
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
        let resourceHtml = ref("");
        resource.load((html)=>{
           let resourceTreeDom = dom.parseHtmlToDom(html);
        //    let json = dom.parseHtmlToJson(html);
          let json = dom.parseDomToJson(resourceTreeDom);
          store.put("resourceTreeDom",resourceTreeDom);
           store.put("resourceTree",[json]);
           watch(resourceTree.value,(value)=>{//监控资源对象树的变化
             resourceHtml.value = resourceTreeDom.$$root.outerHTML;            
           })
        })
  
        return {
            store,activeName,resourceTree,resourceHtml
        }
    }
}
</script>