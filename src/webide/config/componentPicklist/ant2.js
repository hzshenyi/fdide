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
            <a-col :span="12">列1</a-col>
            <a-col :span="12">列2</a-col>
          </a-row>`
        },{
            title:"标签页",
            html:`<a-tabs type="card" @change="callback">
            <a-tab-pane key="1" tab="标题1"></a-tab-pane>
            <a-tab-pane key="2" tab="标题2"></a-tab-pane>
            <a-tab-pane key="3" tab="标题3"></a-tab-pane>
          </a-tabs>`
        },{
            title:"卡片",
            html:`<a-card title="标题" style="width: 300px;height:300px"></a-card>`
        }
    ]

}, {
    title: "数据视图",
    children: [{
            title: "折叠面板",
            html: `<a-collapse v-model:activeKey="activeKey" accordion>
            <a-collapse-panel key="1" header="标题1">
              
            </a-collapse-panel>
            <a-collapse-panel key="2" header="标题2" :disabled="false">
              
            </a-collapse-panel>
            <a-collapse-panel key="3" header="标题3">
              
            </a-collapse-panel>
          </a-collapse>`
        }
    ]
}, {
    title: "表单",
    children: [{
            title: "按钮",
            html: "<fd-button>无标题</fd-button>"
        },
        {
          title:"文本字段",
          html:`<a-input v-model:value="" placeholder="Username">
        </a-input>`
        },
        {
          title:"单选",
          html:`<a-radio-group>
          <a-radio value="1">
            Sponsor
          </a-radio>
          <a-radio value="2">
            Venue
          </a-radio>
        </a-radio-group>` 
        },{
          title:"日期选择框",
          html:`<a-date-picker  v-model:value="test"  show-time   type="date"   placeholder="Pick a date"  style="width: 100%;"></a-date-picker>`
        },{
          title:"数字",
          html:`<a-input prefix="￥" suffix="RMB" />`
        },{
          title:"大文本框",
          html:`<a-textarea
          v-model:value=""
          placeholder="Autosize height with minimum and maximum number of lines"
          :auto-size="{ minRows: 2, maxRows: 5 }"
        />`
        }
    ]
}
]

export default data;
