import { h, ref } from "vue";
import dialogService from "./src/dialog.js";
import componentService from "./src/component.js";
import fd from '../lib'
let fdService = {
  init: function (app) {
    this.$app = app;
    app.component("fd-service", {
      render: function () {
        //绑定各个服务对象到当前fd-service组件上
        fdService.bindService(this);
        this.load = function (a, b, c) {
        //  a = !a.then?import(a):a; 
                  
          if (!a.then) { //判断如果不是一个import组件
            var t  = typeof(a)
            if(typeof(a)=="string"){ // 如果是字符，则表示一个url
              if(a.indexOf(".vue")!=-1){
                a = import(a);
                a = this.$service.$component.create(a);
              }else{
                a = fd.component.create(a);
              }
              
            }          
          }else{
            a = this.$service.$component.create(a);
          }
          
          this.fd_newComponent = h(a, b, c); //创建新组件，并保存到临时变量中
          this.$forceUpdate(); //强制重新渲染当前组件，会重新调用 render
          return this.fd_newComponent;
        };
        this.getService = function () {
          return this.$service;
        };
        let bodyObj = this.fd_newComponent;
        if (!bodyObj) {
          bodyObj =
            typeof this.$slots.default === "undefined"
              ? ""
              : this.$slots.default(); //如果组件有内容，则调插槽
        }
        return h("div", {}, bodyObj);
      },
      setup() {
        let fd_newComponent = ref("");
        return { fd_newComponent };
      },
      mounted() {
        if (this.component) {
            //如果fd-service定义了 component 属性，则在加载服务组件时直接载入此组件定义的component的子组件
            this.load(this.component);       
        }
      },
      watch:{
        component(value){
          this.load(this.component);
        }
      },
      props: ["title", "component"],
    });
    app.$fdService = this;
  },
  bindService: function (fdServiceComponent) {
    // //绑定各个服务对象到当前fd-service组件上
    this.$service = { $dialog: new dialogService(fdServiceComponent), $component: componentService };
    fdServiceComponent.$service = this.$service;
    for (let key in this.$service) {
      fdServiceComponent[key] = this.$service[key]; //绑定 $dialog属性到当前组件指向到 dialogService,其它类似循环
      this.$service[key].fdServiceComponent = fdServiceComponent; //绑定到代理对象 $service 上
    }
   
  },
};

export default fdService;
