<template>
<transition name="fade">
 <div class="fd-dialog__wrapper" style="z-index: 2001"  v-show="visible">
    <div
      role="dialog"
      aria-modal="true"
      aria-label="提示"
      class="fd-dialog"
      :style="styleComputed"
    >
      <div class="fd-dialog__header">
        <span class="fd-dialog__title"><slot name="title">{{title}}</slot></span>
        <button type="button" aria-label="Close" class="fd-dialog__headerbtn">
          <i class="fd-dialog__close fd-icon fd-icon-close"></i>
        </button>
      </div>
      <div class="fd-dialog__body"><slot></slot></div>
      <div class="fd-dialog__footer">
        <span class="dialog-footer"><fd-button @click="close()" style="margin-right:20px;">
            <!----><!----><span>取 消</span></fd-button>
            <fd-button type="primary" @click="onsure()">
            <!----><!----><span>确 定</span>
          </fd-button></span>
      </div>
    </div>
  </div>
</transition>
<div class="fd-modal"  v-show="visible"></div>
</template>
<style>
.fd-dialog{
    position: relative; margin: 0 auto 50px; border-radius: 2px; box-shadow: 0 1px 3px rgba(0,0,0,.3); box-sizing: border-box;background: #FFF;
    }
.fd-dialog__wrapper {
    position: fixed; top: 0; right: 0; bottom: 0; left: 0; overflow: auto; margin: 0;
}
.fd-dialog__header{
    padding: 20px 20px 10px;
}
.fd-dialog__title{
  line-height: 24px;
    font-size: 18px;
    color: #303133;
}
.fd-dialog__headerbtn{
   position: absolute;
    top: 20px;
    right: 20px;
    padding: 0;
    background: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 16px;
}
.fd-dialog__body{
    padding: 30px 20px; color: #606266; font-size: 14px; word-break: break-all;
}
.fd-dialog__footer{
    padding: 10px 20px 20px; text-align: right; box-sizing: border-box;
}
.fd-modal {
    position: fixed; left: 0; top: 0; width: 100%; height: 100%; opacity: .5; background: #000;
}
.fade-enter-active,.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,.fade-leave-to {
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

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
<script>
import {computed,getCurrentInstance} from 'vue'
import fdApi from '../../lib'
export default {
  name: "fd-dialog",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    title:{
      type:String,
      default:""
    },
    style:{
        type:String,
        default:""
    },
    visible:{
      type:Boolean,
      default:false
    }
  },
  
  setup() {
       let ctx = getCurrentInstance().ctx;//得到当前vue实例 
    const close = (e) => {    
      ctx.$emit('update:visible',false,ctx);
      ctx.$parent.$forceUpdate();
    };
    const styleComputed = computed(()=>{
      const  parentStyle = fdApi.getStyle(ctx.style)
      let defaultStyle = `margin-top: 15vh; width: 30%;${parentStyle}`;
      //   let parentStyle = (JSON.stringify(ctx.style).replace("{","").replace("}","").replace(/\"/g,"").replace(/,/g,";"));//转换json对象为style格式
      //  let defaultStyle = `margin-top: 15vh; width: 30%;${parentStyle}`;
       return defaultStyle;
    })
    const onsure = ()=>{
      ctx.$emit("onsure",ctx);
    }
    return {
      close,onsure,styleComputed
    };
  },
};
</script>
