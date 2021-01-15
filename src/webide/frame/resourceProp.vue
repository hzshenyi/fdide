<template>
  <fd-tabs v-model="activeName">
    <fd-tab-pane label="属性" name="a">&nbsp;
      <div v-if="el.$$help">
{{el.$$help.title}}
<a-collapse v-model:activekey="activeKey">
            <a-collapse-panel key="1" header="行为" style="padding:2px">
              <fd-button
            v-for="el1 in el.$$help.buttons"
            @click="executeAction(el1)"
            >{{ el1.title }}</fd-button>
            </a-collapse-panel>
            <a-collapse-panel key="2" header="帮助" :disabled="false">
               <span>{{ el.$$help.help }}</span>
            </a-collapse-panel>
            <a-collapse-panel key="3" header="样式">
              
            </a-collapse-panel>
          </a-collapse>

      </div>
    </fd-tab-pane>
  </fd-tabs>
</template>

<script>
import store from "../lib/store.js";
import resource from "../lib/resource.js";
import { ref, reactive, getCurrentInstance, watch } from "vue";
export default {
  setup() {
    let ctx = getCurrentInstance().ctx;
    let el = store.get("component");
    let activeKey = [1,2,3]
    let executeAction = (el) => {
      let elementSelected = store.getValue("elementSelected");
      let html = el.html || "";
      if(html){
        resource.addComponent(html, elementSelected, "append");
      }
      if(el.js){
        el.js(elementSelected)
      }
    };
    let activeName = "a"
    return {
      el,
      executeAction,activeName,activeKey
    };
  },
};
</script>
