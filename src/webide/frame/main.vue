<template>
  <fd-layout>
    <fd-layout-pane style="height: 50px;padding:2px" class="menu"
      ><resourceMenu></resourceMenu
    ></fd-layout-pane>
    <fd-layout-pane style="height: 100%" >
      <fd-layout lr>
        <fd-layout-pane style="width: 300px;padding:5px"   class="comList">
           <!-- 资源列表 -->
          <resourcePicklist></resourcePicklist>
        </fd-layout-pane>
        <fd-layout-pane style="width: 100%">
          <fd-layout  style="padding:5px">
            <fd-layout-pane style="height: 500px">
               <!-- 资源设计 -->
              <resourceEditor></resourceEditor>
            </fd-layout-pane>
            <fd-layout-pane style="height: 400px; overflow-y: auto">
               <!-- 资源预览 -->
              <resourcePreview></resourcePreview>
            </fd-layout-pane>
          </fd-layout>
        </fd-layout-pane>
        <fd-layout-pane style="width: 300px;padding:7px ">
           <!-- 资源属性辅助 -->
          <resourceProp></resourceProp>
          <!-- <resourceProp></resourceProp> -->
        </fd-layout-pane>
      </fd-layout>
    </fd-layout-pane>
   
  </fd-layout>
</template>

<style scoped>
.fd-layout-pane.menu {
  border: 0px rgb(09, 149, 235) solid;
background-color: rgb(47 60 86);

}
.fd-layout-pane.comList {
  border: 0px rgb(70, 168, 230) solid;
background-color: rgb(233 234 234);
  
}
</style>
<script>
import { getCurrentInstance, watch, onMounted } from "vue";
import resourceMenu from "./resourceMenu.vue";
import resourcePicklist from "./resourcePicklist.vue";
import resourceEditor from "./resourceEditor.vue";
import resourceProp from "./resourceProp.vue";
import resourcePreview from "./resourcePreview.vue";
import foot from "./foot.vue";
import store from "../lib/store.js";

export default {
  components: {
    resourcePicklist,
    resourceMenu,
    resourceEditor,
    resourceProp,
    resourcePreview,
    foot,
  },
  setup() {
    const ctx = getCurrentInstance().ctx;
    onMounted(() => {
     // ctx.$refs.service.load("/src/app/oa/filesend.vue");
    });
  },
};
</script>
