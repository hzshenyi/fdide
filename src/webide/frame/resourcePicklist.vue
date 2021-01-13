<template>
  <fd-layout>
    <fd-layout-pane>
      <fd-tabs v-model="activeName">
         <fd-tab-pane label="控件列表" name="a">
          <div id="ideDesigner">
            <a-collapse v-model:activeKey="activeKey">
              <a-collapse-panel
                key="1"
                :header="el.title"
                v-for="(el, index) in data"
              >             
 <a-list bordered :data-source="el.children" style="cursor:pointer">
      <template #renderItem="{ item, index }">
        <a-list-item @click="addComponent(item)">{{ item.title }}</a-list-item>
      </template>
      
    </a-list>
                
              </a-collapse-panel>
            </a-collapse>
          </div>
        </fd-tab-pane>
        <fd-tab-pane label="资源树" name="b">
         
        </fd-tab-pane>
       
      </fd-tabs>
    </fd-layout-pane>
  </fd-layout>
</template>
<style>
.ant-collapse-content{
  border:0 !important;
}
.ant-collapse-content > .ant-collapse-content-box{
  padding: 0 !important;
}
</style>
<script>
import { ref, reactive, getCurrentInstance, watch, computed } from "vue";
import resource from "../lib/resource.js";
import store from "../lib/store.js";
import componentPicklist from "../config/componentPicklist/ant2.js";

export default {
  components: {
    
  },
  setup() {
    let data = componentPicklist;
    let activeName = "a";
    let activeKey = [1,2,3];
    let addComponent = (el) => {
      let elSelected = store.getValue("elementSelected");
      let html = el.html;
      resource.addComponent(html, elSelected, "append");
    };
    return { data, activeName, activeKey, addComponent };
  },
};
</script>
