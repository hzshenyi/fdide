import {defineAsyncComponent} from 'vue'
let componentService = {
    create(param){
        let asyncComp;
        if(typeof(param)==="string"){
             asyncComp = defineAsyncComponent(() =>
             import(param)
             )
        }else{
             asyncComp = defineAsyncComponent(() =>
              param
             )
        }
        return asyncComp
    }
}
export default componentService