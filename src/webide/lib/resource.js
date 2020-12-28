import axios from 'axios'
import domApi from './dom.js'
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
    },
    save(resourcePath,body="",fn){
      let url = "http://127.0.0.1:3001/module/save?_app=zmcc.app&module=flow&resource=_view/test.vue";
      axios({
          method: "post",
          url: url,
          data: { body: body },
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          transformRequest: function(obj) {
            var str = [];
            for (var p in obj) {
              str.push(
                encodeURIComponent(p) +
                  "=" +
                  encodeURIComponent(
                    typeof obj[p] == "object" ? JSON.stringify(obj[p]) : obj[p]
                  )
              );
            }
            return str.join("&");
          }
        }).then(res => {
         // fn();
          console.log(res.data);
        });
  },
  copyComponent(el,type="after"){
    let dom = el.$$targetDom;
    let domCopy = dom.cloneNode(true);
    domApi._createDom(el,domCopy,type);
    this.saveResource();
  },
  addComponent(html,el,type="after"){
    let dom = el.$$targetDom;
    domApi._createDom(el,html,type);
    this.saveResource();
  },
  removeComponent(el){
    domApi.removeDom(el);
    this.saveResource();
  },
  saveResource(){
    document.getElementById("saveResource").click()
  }
}
export default resource