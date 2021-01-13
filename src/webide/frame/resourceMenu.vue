<template>
<div> <span style="color:white;width:200px;margin-left:10px;margin-right:100px">FDV1.0 前端开发平台</span> <span><a-button-group>
    <a-button  type="primary" @click="save()" id="saveResource">保存 </a-button>
    <a-button  type="primary" @click="copyComponent()"> 复制</a-button>
    <a-button   type="primary" @click="cutComponent()"> 剪切</a-button>
    <a-button  type="primary" @click="pasteComponent()"> 粘贴</a-button>
     <a-button  type="primary" @click="pasteComponent('before')"> 粘贴到前面</a-button>
    <a-button  type="primary" @click="removeComponent()"> 删除</a-button>
    <a-button  type="primary" @click="moveComponent()"> 上移</a-button>
  </a-button-group></span> </div>
  
    <!-- <fd-button @click="save()" id="saveResource">保存</fd-button>
    <fd-button @click="copyComponent()">复制</fd-button>
    <fd-button @click="cutComponent()">剪切</fd-button>
    <fd-button @click="pasteComponent()">粘贴</fd-button>
    <fd-button @click="removeComponent()">删除</fd-button> -->
</template>
<style>
.fd-button{
    margin-right:5px;
}
</style>
<script>
import resource from '../lib/resource.js'
import store from '../lib/store.js'
export default {
    setup(){
        let save = ()=>{
           let resourceTreeDom = store.get("resourceTreeDom");
           let html = resourceTreeDom.value.$$root.outerHTML; 
            resource.save("",html);
        }
        let copyComponent = ()=>{
         let el = store.getValue("elementSelected");
         resource.copyComponent(el)
        }
        let cutComponent = ()=>{          
         let elCutted = store.get("elementCuted");
         if(elCutted){
            elCutted.value.$$cutted = false;
         }
         let el = store.getValue("elementSelected");
        
         el.$$cutted = true;//标记为剪切
         store.put("elementCuted",el);
        // resource.cutComponent(el)
        }
        let pasteComponent = (type="append")=>{
         let el = store.getValue("elementSelected");
         let elementCuted = store.getValue("elementCuted");
         resource.pasteComponent(el,elementCuted,type);
        }
        let addComponent = ()=>{
         let el = store.getValue("elementSelected");
         let html = "<button>aa</button>";
         resource.addComponent(html,el,"append")
        }
        let removeComponent = ()=>{
            let el = store.getValue("elementSelected");
             resource.removeComponent(el)
        }
        let moveComponent = ()=>{//上移
            let el = store.getValue("elementSelected");
            resource.moveComponent(el);
       
        }
        return {
            save,copyComponent,cutComponent,pasteComponent,addComponent,removeComponent,moveComponent
        }
    }
}
</script>