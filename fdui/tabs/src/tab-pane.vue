<template>
  <div class="fd-tabs__content" :id="id" :style="styleComputed" v-show="data.activeName==name">
    <slot></slot>
  </div>
</template>
<style>
</style>
<script>
import { reactive,getCurrentInstance,computed } from "vue";
import fdApi from '../../lib'
export default {
  name: "fd-tab-pane",
  props: {
    label: {
      type: String,
      default: "",
    },
    id:{
      type:String,default:""
    },
    name:{
      type:String,default:""
    },
    tabClick:{
      type:Function,default:null
    }
  },
  setup() {
    const ctx = getCurrentInstance().ctx;
    // 将slot的pane对象追加到tabs对象中
    const ctxTabs = ctx.$parent;
    ctxTabs.$children.push(ctx);
    const style = ctxTabs.$props.style||{"min-height":"100%"};
     const styleComputed = computed(()=>{
       return fdApi.getStyle(style);
    })
    let data = reactive({
      isActived:false
    });
    
    //选择第一个
    return {
      data,styleComputed
      
    };
  },
  mounted(){
    
  }
};
</script>
