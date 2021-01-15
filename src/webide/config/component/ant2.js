let data = [{
    title: "布局",
    children: [{
            title: "上下布局",
            html: `<fd-layout><fd-layout-pane style="height: 50px;border: 1px dotted rgb(218 214 214);"></fd-layout-pane><fd-layout-pane style="height: 100%;border: 1px dotted rgb(218 214 214);"></fd-layout-pane></fd-layout>`
        },{
          title: "左右布局",
          html: `<fd-layout lr><fd-layout-pane style="width: 250px;border: 1px dotted rgb(218 214 214);"></fd-layout-pane><fd-layout-pane style="width: 100%;border: 1px dotted rgb(218 214 214);"></fd-layout-pane></fd-layout>`
      }, {
            title: "2列栅格",
            html: ` <a-row>
            <a-col :span="12">列1</a-col>
            <a-col :span="12">列2</a-col>
          </a-row>`
        }, {
          title: "4列栅格",
          html: ` <a-row>
          <a-col :span="6">列1</a-col>
          <a-col :span="6">列2</a-col> <a-col :span="6">列3</a-col>
          <a-col :span="6">列4</a-col>
        </a-row>`
      },{
            title:"标签页",
            html:`<a-tabs type="card" @change="callback">
            <a-tab-pane key="1" tab="标题1" style="height:100px;overflow-y:auto"></a-tab-pane>
            <a-tab-pane key="2" tab="标题2" style="height:100px;overflow-y:auto"></a-tab-pane>
            <a-tab-pane key="3" tab="标题3" style="height:100px;overflow-y:auto"></a-tab-pane>
          </a-tabs>`
        },{
            title:"卡片",
            html:`<a-card title="标题" style="width: 100%;height:100%">内容</a-card>`
        },{
          title:"菜单",
          html:`<a-dropdown>
          <a class="ant-dropdown-link" @click="e => e.preventDefault()"> 菜单</a>
          <template #overlay>
            <a-menu>
              <a-menu-item key="0">
               菜单一
              </a-menu-item>
              <a-menu-item key="1">
              菜单二
              </a-menu-item>
              <a-menu-divider />
              <a-menu-item key="3" disabled>
                3rd menu item（disabled）
              </a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>`
        },{
          title:"表格",
          html:`<a-descriptions title="User Info" bordered>
          <a-descriptions-item label="Product">
            Cloud Database
          </a-descriptions-item>
          <a-descriptions-item label="Billing Mode">
            Prepaid
          </a-descriptions-item>
          <a-descriptions-item label="Automatic Renewal">
            YES
          </a-descriptions-item>
          <a-descriptions-item label="Order time">
            2018-04-24 18:00:00
          </a-descriptions-item>
          <a-descriptions-item label="Usage Time" :span="2">
            2019-04-24 18:00:00
          </a-descriptions-item>
          <a-descriptions-item label="Status" :span="3">
            <a-badge status="processing" text="Running" />
          </a-descriptions-item>
          <a-descriptions-item label="Negotiated Amount">
            $80.00
          </a-descriptions-item>
          <a-descriptions-item label="Discount">
            $20.00
          </a-descriptions-item>
          <a-descriptions-item label="Official Receipts">
            $60.00
          </a-descriptions-item>
          <a-descriptions-item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1<br />
          </a-descriptions-item>
        </a-descriptions>`
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
        },{
          title:"时间线",
          html:`<a-timeline>
          <a-timeline-item>起点</a-timeline-item>
          <a-timeline-item>审批</a-timeline-item>
          <a-timeline-item>会签</a-timeline-item>
          <a-timeline-item>结束</a-timeline-item>
        </a-timeline>`
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
          <a-radio value="1">选择一</a-radio>
          <a-radio value="2">选择二</a-radio>
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
