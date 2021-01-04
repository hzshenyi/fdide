<template>
  <fd-layout>
    <fd-layout-pane>
      <fd-tabs v-model="activeName">
         <fd-tab-pane label="控件列表" name="a">
          <div id="ideDesigner">
            <a-collapse>
              <a-collapse-panel
                :key="index"
                :header="el.title"
                v-for="(el, index) in data"
              >
                <a-button
                  v-for="el1 in el.children"
                  @click="addComponent(el1)"
                  style="width: 70px; margin-top: 2px;margin-right:2px;font-size:13px"
                >
                  <template #icon><SearchOutlined />{{ el1.title }}</template>
                </a-button>
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
<style scoped></style>
<script>
import { ref, reactive, getCurrentInstance, watch, computed } from "vue";
import resource from "../lib/resource.js";
import store from "../lib/store.js";
import componentPicklist from "../config/componentPicklist/fd.js";

export default {
  components: {
    
  },
  setup() {
    let data = componentPicklist;
    let activeName = "a";
    let activeKey = [1];
    let addComponent = (el) => {
      let elSelected = store.getValue("elementSelected");
      let html = el.html;
      resource.addComponent(html, elSelected, "append");
    };
    return { data, activeName, activeKey, addComponent };
  },
};
</script>
