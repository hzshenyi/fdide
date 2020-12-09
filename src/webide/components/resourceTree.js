import store from '../lib/store.js'
let resourceTree = {
    showHelp(el){
        
        store.state.help.value = "oooo"
        return "ok"
    }
}
export default resourceTree