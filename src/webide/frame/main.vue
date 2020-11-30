<template>
    <fd-layout>
    <fd-layout-pane style="height:100px">header</fd-layout-pane>
    <fd-layout-pane  style="height:100%">
    <fd-layout lr>
           <fd-layout-pane  style="width:100px">left</fd-layout-pane>
           <fd-layout-pane  style="width:100%">
               <ResourceTree></ResourceTree>
           </fd-layout-pane>
    </fd-layout>
    </fd-layout-pane>
    <fd-layout-pane  style="height:100px">foot</fd-layout-pane>
    </fd-layout>
</template>

<style scoped>
.fd-layout-pane{
    border:1px rgb(207, 205, 205) solid;border-color:rgb(207, 205, 205);margin:2px;
}
</style>
<script>
import ResourceTree from './resourceTree.vue'
export default {
    components: {
    ResourceTree
  }
}
</script>