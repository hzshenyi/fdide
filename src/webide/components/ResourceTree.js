import {watch} from 'vue'
import store from '../lib/store.js'
import help from '../help/index.js'
let resourceTree = {
    elList:[],
    showHelp(el){
        let component = help.getComponent(el.tagName);
       
        el.$$help = component;
       
        store.put("component",el)

    //     watch(el,(value)=>{
    //        el.$$targetDom.innerHTML = value.innerHTML
         
    //    })
    },
    //选择元素
    selectElement(el,elList,index){
        el.$$parent = elList;// 记录当前元素的父列表，为删除操作
        el.$$index = index;// 记录当前元素在父列表中位置，为删除操作
      /*选中组件  */
        if(typeof(el.$$actived)=="undefined"){//突出显示当前选中元素
            this.elList.push(el);
        }
        this.elList.forEach((el)=>{//将所有列表设置为非选中
            el.$$actived = false;
       })
        el.$$actived = true;     
        store.put("elementSelected",el);
        //显示当前元素的帮助信息或操作
        this.showHelp(el)
    }
}
export default resourceTree