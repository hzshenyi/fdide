<template>
    <fd-button @click="save()" id="saveResource">保存</fd-button>
    <fd-button @click="copyComponent()">复制</fd-button>
    <fd-button @click="addComponent()">增加</fd-button>
    <fd-button @click="removeComponent()">删除</fd-button>
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
        let addComponent = ()=>{
         let el = store.getValue("elementSelected");
         let html = "<button>aa</button>";
         resource.addComponent(html,el,"append")
        }
        let removeComponent = ()=>{
            let el = store.getValue("elementSelected");
             resource.removeComponent(el)
        }
        return {
            save,copyComponent,addComponent,removeComponent
        }
    }
}
</script>