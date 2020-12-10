<template>
    <div v-if="el.$$help">
        <span>{{el.$$help.title}}</span>
        <textarea v-model="el.innerHTML"></textarea>
    </div>
</template>

<script>
import store from '../lib/store.js'
import {ref,reactive,getCurrentInstance,watch} from 'vue' 
export default {
    setup(){
        let ctx = getCurrentInstance().ctx;
        let el = store.get("component");
         watch(el,(value)=>{
            // console.log(value)
           })
        return {
           el
        }
    }
}
</script>