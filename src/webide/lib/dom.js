let domApi = {
  parseHtmlToJson(html) {
      let dom = this.parseHtmlToDom(html);
      let json = this.parseDomToJson(dom);
      return json;
  },

  parseHtmlToDom(html) {
    let domRoot = new DOMParser().parseFromString(html, "text/html");
    let resourceTemplateDom = domRoot.querySelector("template");
    resourceTemplateDom.content.$$root = resourceTemplateDom;
    return resourceTemplateDom.content;
  },
  parseDomToJson(dom) {
    let domJson = { tagName: "template", children: [] };
    for (var i = 0; i < dom.children.length; i++) {
      let newDom = {};
      domJson.children.push(newDom);
      this._parseDom(dom.children[i], newDom);
    }
    return domJson;
  },
  removeDom(el){
    let dom = el.$$targetDom;
    dom.parentNode.removeChild(dom);
    el.$$parent.splice(el.$$index,1);
   },
  _parseDom(dom,json) {
    json.$$targetDom = dom;
    this._transDomToJson(dom,json);
    if(!dom.children){return}//如果没有子节点则退出s
    let domList=[];
    if(dom.children.length>0){
      domList = dom.childNodes;
    }else{
      domList = dom.children;   
    }
   
    if(domList.length>0){
        json.children = [];
        for(let i=0;i<domList.length;i++){
            if(domList[i].nodeType==3 && domList[i].nodeValue.trim()==""){//如果是文本节点
             continue
            }
         let newDom = {};
          this._parseDom(domList[i],newDom);
         json.children.push(newDom);
        }
    }
   
  },
  _transDomToJson(dom,json){
    if(dom.nodeType==3){//表示纯文本节点
       json["tagName"] = "text";
       json["innerHTML"] = dom.nodeValue;
       json["$$nodeType"] = dom.nodeType;
       return
    }
    json["$$nodeType"] = dom.nodeType;
    json["tagName"] = dom.localName;
    if(dom.children.length==0){
       json["innerHTML"] = dom.innerHTML;
      // if(dom.innerHTML!=""){
      //    json.children=[{
      //     "tagName":"text",
      //     "innerHTML":dom.innerHTML,
      //     "$$nodeType":3,
      //     "$$targetDom":dom
      //    }]
      // }
    }
    let attList = dom.attributes;
    for(let i = 0;i<attList.length;i++){
        let att = attList[i];
        json[att.name] = att.value;
    }
    
},
_createDom(el,domNew,type="append"){
  if(typeof(domNew)==="string"){
     domNew = new DOMParser().parseFromString(domNew, "text/html").querySelector("body").children[0];
  }
  let dom = el.$$targetDom;
  let elCopy = {};
  this._parseDom(domNew,elCopy);//拷贝json对象
  delete elCopy.$$actived;
  //allElList.push(elCopy);//将新对象加入到所有选择列表中
  if(type==="append"){
    dom.appendChild(domNew);
    el.children = el.children||[];
    el.children.push(elCopy);
  }
  if(type==="after"){
    dom.after(domNew);
    el.$$parent.splice(el.$$index+1,0,elCopy);
  }
  if(type==="last"){
    dom.parentNode.appendChild(domNew);
    el.$$parent.push(elCopy);
  }
 },
};
export default domApi