let components = {
    api:[
        {
            "tagName":"a-collapse","title":"折叠"
        },
        {
            "tagName":"fd-button","title":"按钮","buttons":[{title:"子按钮",html:`<button>test</button>`}]
        }
        ,
        {
            "tagName":"a-tabs","title":"标签表格","buttons":[{title:"增加子标签",html:`<a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>`}]
        }
    ]
}
export default components