import {ref,reactive,getCurrentInstance} from 'vue' 
let store = {
    state:{},
    install(App){
        App.$store = this;
    },
    put(key,value){
        if(!this[key]){
            this[key] = ref(value);
        }else{
            this[key].value = value;
        }
        
    },
    get(key){
       return this[key];
    },
    getValue(key){
        if(this[key]){
            return this[key].value;
        }else{
            return null;
        }
    }
}
export default store