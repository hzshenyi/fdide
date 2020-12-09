<template>
    <div>
        <span>{{el.title}}</span>
    </div>
</template>

<script>
import store from '../lib/store.js'
import {ref,reactive,getCurrentInstance,watch} from 'vue' 
export default {
    setup(){
        let ctx = getCurrentInstance().ctx;
        let el = store.get("component");
       
        return {
           store,el
        }
    }
}
</script>