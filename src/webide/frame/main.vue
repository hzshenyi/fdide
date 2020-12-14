<template>
    <fd-layout>
    <fd-layout-pane style="height:50px">header</fd-layout-pane>
    <fd-layout-pane  style="height:100%">
    <fd-layout lr>
           <fd-layout-pane  style="width:200px">left</fd-layout-pane>
           <fd-layout-pane  style="width:100%">
               <resourceEditor></resourceEditor>
           
           </fd-layout-pane>
             <fd-layout-pane  style="width:200px">
                 <resourceProp></resourceProp>
                 </fd-layout-pane>
    </fd-layout>
    </fd-layout-pane>
    <fd-layout-pane  style="height:50px"><foot></foot></fd-layout-pane>
    </fd-layout>
</template>

<style scoped>
.fd-layout-pane{
    border:1px rgb(207, 205, 205) solid;border-color:rgb(207, 205, 205);margin:2px;
}
</style>
<script>
import {getCurrentInstance,watch} from 'vue'
import resourceEditor from './resourceEditor.vue'
import resourceProp from './resourceProp.vue'
import foot from './foot.vue'
import store from '../lib/store.js'
export default {
    components: {
    resourceEditor,resourceProp,foot
  },
  setup(){

  }
}
</script>