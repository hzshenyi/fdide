let data = [{
    title: "常用",
    children: [{
            title: "主页模板",
            html: `<fd-layout><fd-layout-pane style="height: 50px;border: 1px dotted rgb(218 214 214);">主页LOG</fd-layout-pane><fd-layout-pane style="height: 100%;border: 1px dotted rgb(218 214 214);"><fd-layout lr=""><fd-layout-pane style="width: 250px;border: 1px dotted rgb(218 214 214);"><a-card title="标题" style="width: 100%;height:100%"></a-card></fd-layout-pane><fd-layout-pane style="width: 100%;border: 1px dotted rgb(218 214 214);"><a-tabs type="card" @change="callback">
            <a-tab-pane key="1" tab="标题1"></a-tab-pane>
            <a-tab-pane key="2" tab="标题2"></a-tab-pane>
            <a-tab-pane key="3" tab="标题3"></a-tab-pane>
          </a-tabs></fd-layout-pane></fd-layout></fd-layout-pane></fd-layout>`
        },{
          title: "子页模板",
          html: `<fd-layout lr><fd-layout-pane style="width: 250px;border: 1px dotted rgb(218 214 214);"></fd-layout-pane><fd-layout-pane style="width: 100%;border: 1px dotted rgb(218 214 214);"></fd-layout-pane></fd-layout>`
      }
    ]

}, {
    title: "表单类",
    children: [{
            title: "公文表单",
            html: `<a-descriptions title="User Info" bordered><a-descriptions-item label="标题"><a-input  placeholder="标题">
            </a-input></a-descriptions-item>
              <a-descriptions-item label="日期">   <a-date-picker show-time="" type="date" placeholder="Pick a date" style="width: 100%;">
              </a-date-picker></a-descriptions-item>
              <a-descriptions-item label="部门">      </a-descriptions-item>
              <a-descriptions-item label="会签"></a-descriptions-item>
              <a-descriptions-item label="文号" :span="2"></a-descriptions-item>
              <a-descriptions-item label="Status" :span="3">
                <a-badge status="processing" text="Running">
              </a-badge></a-descriptions-item>
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
              <a-textarea placeholder="正文内容" :auto-size="{ minRows: 2, maxRows: 5 }"></a-textarea></a-descriptions-item>
            </a-descriptions></a-descriptions>`
        }
    ]
}, {
    title: "视图类",
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
