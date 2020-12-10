<template>
    <div v-if="elHelp.$target">
        <span>{{elHelp.title}}</span>
        <textarea v-model="elHelp.$target.innerHTML"></textarea>
    </div>
</template>

<script>
import store from '../lib/store.js'
import {ref,reactive,getCurrentInstance,watch} from 'vue' 
export default {
    setup(){
        let ctx = getCurrentInstance().ctx;
        let elHelp = store.get("component");
        return {
           elHelp
        }
    }
}
</script>