<template>
  <div class="fd-tabs" ref="tabsObj">
  <div class="fd-tabs__frame1"><div class="fd-tabs__header">
      <div class="fd-tabs__item" :class="{'actived':el.name==modelValue}" v-for="el in data.tabPanes" @click="selectPane(el.name,el)">{{el.label}}</div>
      <div class="fd-tabs__item__blank">&nbsp;</div>
      </div></div>
  <div  class="fd-tabs__frame2"><slot></slot></div>
  </div>
</template>
<style>
.fd-tabs {
  border: 0px solid rgb(228, 220, 220);width:100%;display: flex;flex-direction:column;
}
.fd-tabs__frame1{
  width:100%;
}
.fd-tabs__frame2{
  width:100%;border: 1px solid #c0c3c7;
}
.fd-tabs__header{
  
}
.fd-tabs__item {
  display: inline-block;
  padding: 5px;
  border: 1px solid #c0c3c7;border-color:#c0c3c7;border-bottom: 0;border-right:0;
  cursor: pointer;
}
.fd-tabs__item__blank {
  display: inline-block;
  padding: 5px;
  border-left: 1px solid #c0c3c7;
 
}
.fd-tabs__item.actived {
  background-color: #409eff;border-color:#409eff;
  color: aliceblue;
  transition: all .1s cubic-bezier(.645,.045,.355,1);
}
.fd-tabs__content {
  display: block;
  width: 99%;margin:2px;
}
.fd-tabs__content.actived {
  border: solid 1px rgb(78, 75, 75);
  display: block;
}
.fade-leave-active {
  display: none;
}

.fade-enter-active{
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
<script>
import { getCurrentInstance,ref,reactive,watch } from "vue";
export default {
  name: "fd-tabs",
  props: ["modelValue","style"],
  setup() {
    let ctx = getCurrentInstance().ctx;
    let data = reactive({tabPanes:[]});
    ctx.$children = data.tabPanes;
    //定义方法
   let selectPane = (name,elActived)=>{
      ctx.$emit("update:modelValue",name);
      ctx.$children.forEach(el => {
        // el.isActived = false;
        // el.data.isActived = false;
        el.data.activeName = name;
      });
      
      if(elActived){
        setTimeout(() => {
          //  elActived.data.isActived = true;
        }, 1);
       
        // elActived.isActived = true;
        
      }
    }
 
    return {
      data,selectPane
    };
  },
  watch:{
    modelValue(value){
      this.selectPane(value)
    }
  },
  mounted() {
    let activeName = this.modelValue;
    if(!activeName){//如果没有定义 v-model,则选择第一个为缺省
        activeName = this.$children[0].name;
    }
    this.selectPane(activeName);//缺省选择pane
  }
};
</script>
