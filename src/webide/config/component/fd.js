let data = [{
    title: "布局",
    children: [{
            title: "主容器",
            html: "<fd-layout></fd-layout>"
        }, {
            title: "标签表格",
            html: "<fd-tabs  v-model='activeName'><fd-tab-pane label='a' name='a'>内容a</fd-tab-pane><fd-tab-pane label='b' name='b'>内容b</fd-tab-pane></fd-tabs>"
        }
    ]

}, {
    title: "表单",
    children: [{
            title: "按钮",
            html: "<fd-button>无标题</fd-button>"
        }
    ]
}
]

export default data;
