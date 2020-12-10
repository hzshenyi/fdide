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
          fn();
          console.log(res.data);
        });
  }
}
export default resource