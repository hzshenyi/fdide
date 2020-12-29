<template>
  <fd-layout>
    <fd-layout-pane>
         <fd-tabs  v-model="activeName">
       <fd-tab-pane label="控件列表" name="a">
           <div  id="ideDesigner">
           <fd-button v-for="el in data" @click="addComponent(el)">
               {{el.title}}
           </fd-button>
           </div>
       </fd-tab-pane>
       <fd-tab-pane label="资源树"  name="b">
                  <resourceProp></resourceProp>
       </fd-tab-pane>
   </fd-tabs>
    </fd-layout-pane>
  
    </fd-layout>
</template>
<style scoped>
</style>
<script>
import {ref,reactive,getCurrentInstance,watch, computed} from 'vue' 
import resource from '../lib/resource.js'
import store from '../lib/store.js'
import resourceProp from './resourceProp.vue'
export default {
    components:{
        resourceProp
    },
    setup(){
       let data = [{title:"容器",html:"<fd-layout></fd-layout>"},
       {title:"标签表格",html:"<fd-tabs  v-model='activeName'><fd-tab-pane label='a' name='a'>内容a</fd-tab-pane><fd-tab-pane label='b' name='b'>内容b</fd-tab-pane></fd-tabs>"},
       {title:"按钮",html:"<fd-button>无标题</fd-button>"},
       {title:"链接",html:`<a-tabs type="card" @change="callback">
    <a-tab-pane key="1" tab="Tab 1">
      Content of Tab Pane 1
    </a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2">
      Content of Tab Pane 2
    </a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3">
      Content of Tab Pane 3
    </a-tab-pane>
  </a-tabs>`}];
       let activeName = "a"
        let addComponent = (el)=>{
         let elSelected = store.getValue("elementSelected");
         let html = el.html;
         resource.addComponent(html,elSelected,"append")
        }
       return {data,activeName,addComponent}
    }
}
</script>