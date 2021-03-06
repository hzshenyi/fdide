<template>
 <div style="height:100%"><fd-layout><fd-layout-pane style="height: 50px;border: 1px dotted rgb(241 211 211);">FDV1.0</fd-layout-pane><fd-layout-pane style="height: 100%;border: 1px dotted rgb(218 214 214);"><fd-layout lr=""><fd-layout-pane style="width: 250px;border: 1px dotted rgb(241 211 211);"><a-collapse v-model:activekey="activeKey" accordion="">
            <a-collapse-panel key="1" header="标题1">
              
            </a-collapse-panel>
            <a-collapse-panel key="2" header="标题2" :disabled="false">
              
            </a-collapse-panel>
            <a-collapse-panel key="3" header="标题3">
              
            <a-timeline>
          <a-timeline-item>起点</a-timeline-item>
          <a-timeline-item>审批</a-timeline-item>
          <a-timeline-item>会签</a-timeline-item>
          <a-timeline-item>结束</a-timeline-item>
        </a-timeline></a-collapse-panel>
          </a-collapse></fd-layout-pane><fd-layout-pane style="width: 100%;border: 1px dotted rgb(218 214 214);"></fd-layout-pane></fd-layout></fd-layout-pane></fd-layout></div>
</template>