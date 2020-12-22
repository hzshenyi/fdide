<template>
    <fd-layout>
    <fd-layout-pane style="height:50px"><resourceMenu></resourceMenu></fd-layout-pane>
    <fd-layout-pane  style="height:100%">
    <fd-layout lr>
           <fd-layout-pane  style="width:200px">left</fd-layout-pane>
           <fd-layout-pane  style="width:100%">
               <resourceEditor></resourceEditor>
           </fd-layout-pane>
             <fd-layout-pane  style="width:500px">
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
import resourceEditor from './resourceEditor.vue'
import resourceProp from './resourceProp.vue'
import resourcePreview from './resourcePreview.vue'
import foot from './foot.vue'
import store from '../lib/store.js'
import Button from '../../../fdui/button/src/button.vue'
export default {
    components: {
    resourceMenu,resourceEditor,resourceProp,resourcePreview,foot,
        Button
  },
  setup(){
  

  }
}
</script>