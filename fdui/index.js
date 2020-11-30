import Service from './service/index'
import Layout from './layout'
import Button from './button'
import Dialog from './dialog'
import Tabs from './tabs'

const fdui = {};
fdui.install = function(app){
  app.use(Layout);
  app.use(Dialog)
  app.use(Button)
  app.use(Tabs);
  Service.init(app);//服务组件，可通过脚本动态创建组件
}
export default fdui 