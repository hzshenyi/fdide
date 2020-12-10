import store from '../lib/store.js'
import help from '../help/index.js'
let resourceTree = {
    showHelp(el){
        let component = help.getComponent(el.tagName);
        // component.$target = el;
        el.$$help = component;
        // store.put("component",component)
        store.put("component",el)
    }
}
export default resourceTree