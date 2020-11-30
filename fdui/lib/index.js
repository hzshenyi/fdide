import {defineAsyncComponent} from 'vue'
const fdApi={
    getStyle(style={}){
        let parentStyle = (JSON.stringify(style).replace("{","").replace("}","").replace(/\"/g,"").replace(/,/g,";"));//转换json对象为style格式
         return parentStyle;
    },
    component:{
        create(param){//创建组件
            let asyncComp;
            if(typeof(param)==="string"){
                param = this.getPath(param); //判断传入参数是否为已注册的组件，如果是，则转化为地址
                 asyncComp = defineAsyncComponent(() =>
                 import(param)
                 )
            }else{
                 asyncComp = defineAsyncComponent(() =>
                  param
                 )
            }
            return asyncComp
        },
        getPath(name){
            let path = name;
            if(name==="fd-button"){
                path = "../button/src/button.vue";
            }
            return path;
        }
    }
   
}
export default fdApi