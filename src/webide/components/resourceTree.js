import {watch} from 'vue'
import store from '../lib/store.js'
import help from '../help/index.js'
let resourceTree = {
    showHelp(el){
        let component = help.getComponent(el.tagName);
       
        el.$$help = component;
       
        store.put("component",el)

    //     watch(el,(value)=>{
    //        el.$$targetDom.innerHTML = value.innerHTML
         
    //    })
    }
}
export default resourceTree