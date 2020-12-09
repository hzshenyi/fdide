<template>
   <fd-tabs  v-model="activeName">
       <fd-tab-pane label="资源树" name="a">
           <div  id="ideDesigner">
           <resourceTree :elList="data.resourceTree"></resourceTree>
           </div>
           <div>{{state.help.value}}</div>
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
import resource from '../lib/resource.js'
import dom from '../lib/dom.js'
import store from '../lib/store.js'
export default {
    components:{
        resourceTree
    },
    setup(){
        let activeName = ref("a");
        let help = ref("help");
        let state = store.state;
        state.help = help;
        let data = reactive({});
        data.resourceTree=[{title:"a",children:[{title:"a1"}]}]
        resource.load((html)=>{
           let json = dom.parseHtmlToJson(html);
           data.resourceTree = [json];
           
        })
        return {
            activeName,data,state
        }
    }
}
</script>