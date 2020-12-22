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
    selectElement(el,elList,index){
        el.$$parent = elList;
        el.$$index = index;
      /*选中组件  */
        if(typeof(el.$$actived)=="undefined"){
            this.elList.push(el);
        }
        this.elList.forEach((el)=>{//将所有列表设置为非选中
            el.$$actived = false;
       })
        el.$$actived = true;
      
        store.put("elementSelected",el)

    }
}
export default resourceTree