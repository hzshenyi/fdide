<template>
<div>  <a-collapse v-model:activekey="activeKey">
    <a-collapse-panel key="1" header="This is panel header 1">abcd</a-collapse-panel>
    <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
      b
    </a-collapse-panel>
    <a-collapse-panel key="3" header="This is panel header 3" disabled="">   s</a-collapse-panel>
  <a-collapse-panel key="4" header="新增面板">test</a-collapse-panel><a-collapse-panel key="4" header="新增面板">test</a-collapse-panel><a-collapse-panel key="4" header="新增面板">test</a-collapse-panel><a-collapse-panel key="4" header="新增面板">test</a-collapse-panel><a-collapse-panel key="4" header="新增面板">test</a-collapse-panel><a-collapse-panel key="4" header="新增面板">test</a-collapse-panel><a-collapse-panel key="4" header="新增面板">test</a-collapse-panel></a-collapse><fd-layout><fd-tabs v-model="activeName"><fd-tab-pane label="a" name="a">内容a</fd-tab-pane><fd-tab-pane label="b" name="b">内容b</fd-tab-pane></fd-tabs></fd-layout></div>
</template>