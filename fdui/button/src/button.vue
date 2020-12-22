<template>
    <button class="fd-button" :class="[`fd-button--${type}`,{
        'is-round':round
    }]">
         <slot></slot>
    </button>
</template>
<style>
.fd-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #FFF;
    border: 1px solid #DCDFE6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    padding: 12px 20px;
    font-size: inherit;
    border-radius: 4px;
}
.fd-button--primary{
    color: #FFF;
    background-color: #409EFF;
    border-color: #409EFF;
}
.fd-button--success{
    background-color:green;
}
.fd-button.is-round{
    border-radius: 20px;
}
</style>
<script>
import {reactive,getCurrentInstance } from 'vue'
export default {
    name:"fd-button",
    props:{
        type:{
            type:String,default:"default"
        },
        round:{
            type:Boolean
        }
    },
    setup(){
   
      const ctx = getCurrentInstance().ctx;
    //   const handleClick = (e)=>{
    //        ctx.$emit("click",e);
    //    } 

        return {
            
        };
    }
} 
</script>