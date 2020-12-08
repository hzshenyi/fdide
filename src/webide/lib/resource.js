import axios from 'axios'
let resource = {
    load(fn){
       this.get("",fn)
    },
    get(resourcePath,fn){
        let url = "http://127.0.0.1:3001/module/get?_app=zmcc.app&module=flow&resource=_view/test.vue";
        axios({
            method: "get",
            url: url
          }).then(res => {
            
            fn(res.data);
          });
    }
}
export default resource