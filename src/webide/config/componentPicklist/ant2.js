let data = [{
    title: "布局",
    children: [{
            title: "主容器",
            html: `<a-layout>
            <a-layout-header>Header</a-layout-header>
            <a-layout-content>Content</a-layout-content>
            <a-layout-footer>Footer</a-layout-footer>
          </a-layout>`
        }, {
            title: "栅格",
            html: ` <a-row>
            <a-col :span="12">
              col-12
            </a-col>
            <a-col :span="12">
              col-12
            </a-col>
          </a-row>`
        },{
            title:"标签页",
            html:`<a-tabs type="card" @change="callback">
            <a-tab-pane key="1" tab="Tab 1">
              Content of Tab Pane 1
            </a-tab-pane>
            <a-tab-pane key="2" tab="Tab 2">
              Content of Tab Pane 2
            </a-tab-pane>
            <a-tab-pane key="3" tab="Tab 3">
              Content of Tab Pane 3
            </a-tab-pane>
          </a-tabs>`
        },{
            title:"卡片",
            html:`<a-card title="Default size card" style="width: 300px">
            <template #extra><a href="#">more</a></template>
            <p>card content</p>
            <p>card content</p>
            <p>card content</p>
          </a-card>`
        }
    ]

}, {
    title: "数据视图",
    children: [{
            title: "折叠面板",
            html: `<a-collapse v-model:activeKey="activeKey" accordion>
            <a-collapse-panel key="1" header="This is panel header 1">
              <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
              <p>{{ text }}</p>
            </a-collapse-panel>
            <a-collapse-panel key="3" header="This is panel header 3">
              <p>{{ text }}</p>
            </a-collapse-panel>
          </a-collapse>`
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
