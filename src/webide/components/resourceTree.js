import store from '../lib/store.js'
import help from '../help/index.js'
let resourceTree = {
    showHelp(el){
        let component = help.getComponent(el.tagName);
        
        component.$target = el;
        store.put("component",component)
    }
}
export default resourceTree