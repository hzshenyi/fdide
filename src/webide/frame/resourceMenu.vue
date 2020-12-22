<template>
    <fd-button @click="save()">保存</fd-button>
    <fd-button @click="copy()">复制</fd-button>
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
        let copy = ()=>{
         let el = store.getValue("elementSelected");
         resource.copy(el);
      
        }
        return {
            save,copy
        }
    }
}
</script>