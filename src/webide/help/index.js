import components from './components.js'
let help = {
    getComponent(tagName){
        let component = {}
          components.api.forEach((el)=>{
                 if(el.tagName===tagName){
                    component = el;
                    return false
                   
                 }
          })
          return component;
    }
}
export default help