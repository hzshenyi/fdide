<template>
    <fd-button @click="save()">保存</fd-button>
</template>
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
        return {
            save
        }
    }
}
</script>