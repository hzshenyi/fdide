<template>
  <div class="fd-layout"  :class="[{'lr':lr}]">
      <slot></slot>
  </div>
</template>
<style   scoped>
.fd-layout{
    width:100%;height:100%;border: 0px red solid;display: flex;flex-direction: column;
}
.fd-layout.lr{
    border: 0px red solid;display: flex;flex-direction:row;
}
.fd-layout-pane{
    border:0px rgb(207, 205, 205) solid;border-color:rgb(207, 205, 205);margin:2px;
}

.fd-layout.lr{
    width:100%;height:100%;display: flex;flex-direction: row;
}
</style>
<script>
export default {
    name:"fd-layout",
   props:{
        type:{
            type:String,default:"default"
        },
        lr:{
            type:Boolean
        }
    },
}
</script>