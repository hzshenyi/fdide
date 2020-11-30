import Dialog from '../../dialog';
class dialogService {
  constructor(component){
    this.$target = component;//绑定服务组件对象
  }
    open(param={}){
        let newCom = this.$target.load(
        Dialog,
        {
          title: param.title||"",
          id: "mytest",
          visible: true,
          "onUpdate:visible": (value, ctx) => {
            ctx.$parent.fd_newComponent.props.visible = value;
          },
          "onOnsure":()=>{
              
             if(typeof(param.onsure)==="function"){
                param.onsure()
             }
           
          }
        },
        param.content||" "
      );
      return newCom;
    }
}
export default dialogService