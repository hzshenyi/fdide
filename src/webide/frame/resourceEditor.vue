<template>
 <fd-layout>
    <fd-layout-pane style="height:700px">
        
         <fd-tabs  v-model="activeName">
       <fd-tab-pane label="资源树" name="a">
           <div  id="ideDesigner">
           <ResourceTree :elList="resourceTree"></ResourceTree>
          
           </div>
       </fd-tab-pane>
       <fd-tab-pane label="源码"  name="b" style="height:500px" :tabClick="selectResource">
           <textarea style="width:100%;height:100%;border:0" v-model="resourceHtml"></textarea>
       </fd-tab-pane>
        <fd-tab-pane label="预览"  name="c" style="height:700px" :tabClick="selectResource">
          <ResourcePreview></ResourcePreview>
       </fd-tab-pane>
   </fd-tabs>

    </fd-layout-pane>
    <fd-layout-pane  style="height:500px">
 <ResourcePreview></ResourcePreview>

    </fd-layout-pane>
    </fd-layout>

  
</template>

<style scoped>

</style>
<script>
import {ref,reactive,getCurrentInstance,watch, computed} from 'vue' 
import ResourceTree from '../components/ResourceTree.vue'
import ResourcePreview from '../components/ResourcePreview.vue'
import resource from '../lib/resource.js'
import store from '../lib/store.js'
import dom from '../lib/dom.js'
export default {
    components:{
        ResourceTree,ResourcePreview
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
                     
           })
        })
         let selectResource = ()=>{
           let resourceTreeDom = store.get("resourceTreeDom");
             resourceHtml.value = resourceTreeDom.value.$$root.outerHTML;           
         }
        return {
            store,activeName,resourceTree,resourceHtml,selectResource
        }
    }
}
</script>