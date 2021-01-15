import resource from "../lib/resource.js";
let components = {
    api:[
        {
            "tagName":"a-collapse","title":"折叠面板","buttons":[{title:"增加子面板",html:`<a-collapse-panel key="index" header="新增面板">test</a-collapse-panel>`}]
        },
        {
            "tagName":"fd-button","title":"按钮","buttons":[{title:"子按钮",html:`<button>test</button>`}]
        }
        ,
        {
            "tagName":"a-tabs","title":"标签表格","buttons":[{title:"增加子标签",html:`<a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>`}]
        },
        {
            "tagName":"fd-layout","title":"主容器","buttons":[{title:"增加子容器",html:`<fd-layout-pane style="height: 100%;border: 1px dotted rgb(218 214 214);"></fd-layout-pane>`}],
            help:`Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。`
        },
        {
            "tagName":"fd-layout-pane","title":"子容器","buttons":[{title:"设置背景色",js:function(el){
               el.style = el.style + ";background-color:#c8d2d4"
               el.$$targetDom.setAttribute("style", el.style);
               resource.saveResource();
            }}],
            help:`Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。`
        },
        {
            "tagName":"a-row","title":"网格","buttons":[{title:"设置边框",js:function(el){
               el.style = el.style||"" + ";border:solid 1px black"
               el.$$targetDom.setAttribute("style", el.style);
               resource.saveResource();
            }}],
            help:`Layout：布局容器，其下可嵌套 Header Sider Content Footer 或 Layout 本身，可以放在任何父容器中。`
        }
    ]
}
export default components