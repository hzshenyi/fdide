<template>
    <div v-if="el.$$help">
        <div> <span>{{el.$$help.title}}</span></div>
        <div><fd-button v-for="el1 in el.$$help.buttons" @click="executeAction(el1)">{{el1.title}}</fd-button></div>
       
      
    </div>
</template>

<script>
import store from '../lib/store.js'
import resource from '../lib/resource.js'
import {ref,reactive,getCurrentInstance,watch} from 'vue' 
export default {
    setup(){
        let ctx = getCurrentInstance().ctx;
        let el = store.get("component");
        let executeAction = (el)=>{
             let elementSelected = store.getValue("elementSelected");
             let html = el.html||"";
             resource.addComponent(html,elementSelected,"append")
        }
        return {
           el,executeAction
        }
    }
}
</script>