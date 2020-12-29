<template>
    <fd-layout>
    <fd-layout-pane style="height:50px"><resourceMenu></resourceMenu></fd-layout-pane>
    <fd-layout-pane  style="height:100%">
    <fd-layout lr>
           <fd-layout-pane  style="width:300px">
               <div style="height:50%">
 <resourcePicklist></resourcePicklist>
               </div>
               <div>
 <resourceProp></resourceProp>
               </div>
              
       
           </fd-layout-pane>
           <fd-layout-pane  style="width:100%">
               <resourceEditor></resourceEditor>
           </fd-layout-pane>
             <fd-layout-pane  style="width:700px">
                  <resourcePreview></resourcePreview>
                 <!-- <resourceProp></resourceProp> -->
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
import resourceMenu from './resourceMenu.vue'
import resourcePicklist from './resourcePicklist.vue'
import resourceEditor from './resourceEditor.vue'
import resourceProp from './resourceProp.vue'
import resourcePreview from './resourcePreview.vue'
import foot from './foot.vue'
import store from '../lib/store.js'

export default {
    components: {
    resourcePicklist,resourceMenu,resourceEditor,resourceProp,resourcePreview,foot
        
  },
  setup(){
  

  }
}
</script>