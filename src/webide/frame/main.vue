<template>
    <fd-layout>
    <fd-layout-pane style="height:50px">header</fd-layout-pane>
    <fd-layout-pane  style="height:100%">
    <fd-layout lr>
           <fd-layout-pane  style="width:200px">left</fd-layout-pane>
           <fd-layout-pane  style="width:100%">
               <ResourceEditor></ResourceEditor>
           </fd-layout-pane>
    </fd-layout>
    </fd-layout-pane>
    <fd-layout-pane  style="height:50px">foot</fd-layout-pane>
    </fd-layout>
</template>

<style scoped>
.fd-layout-pane{
    border:1px rgb(207, 205, 205) solid;border-color:rgb(207, 205, 205);margin:2px;
}
</style>
<script>
import ResourceEditor from './resourceEditor.vue'
export default {
    components: {
    ResourceEditor
  }
}
</script>