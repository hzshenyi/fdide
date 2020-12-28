<template>
  <div
    class="group"
    @click.stop="resourceTreeApi.selectElement(el,elList,index)"
    :class="[
      `nodeType-${el.$$nodeType}`,
      { actived: el.$$actived, overed: el.$$overed, fold: el.$$fold },
    ]"
    v-for="(el, index) in elList"
    @mouseover.stop="el.$$overed = true"
    @mouseout="el.$$overed = false"
  >
    <span v-if="el.children">-</span>
    <div class="line">
      <span v-show="el.$$nodeType != 3"
        >&lt;{{ el.tagName }}
        <span v-for="propName in getPropList(el)" class="prop"
          >{{ propName }}=<span class="prop1"
            ><span style="width: 100%">{{ el[propName] }}</span
            ><input
              type="text"
              v-model="el[propName]"
              @change="domChange(el, propName)" /></span
          ><span class="autoSize">{{ el[propName] }}</span></span
        >
        ></span
      >
    </div>
     <span class="prop1" v-if="!el.children||true"
      ><span style="width: 100%">{{ el.innerHTML }}</span
      ><input
        type="text"
        v-model="el.innerHTML"
        @change="domChangeInnerHtml(el)"
    /></span>
    <ResourceTree v-if="el.children" :elList="el.children"></ResourceTree>
   
    <span class="tagEnd" v-show="el.$$nodeType != 3"
      >&lt;/{{ el.tagName }}></span
    >
  </div>
</template>

<style>
#ideDesigner,
#ideDesigner span {
  font-family: "Microsoft YaHei", "Courier New", Courier, monospace;
  font-size: 13px;
}
#ideDesigner div {
}
#ideDesigner .group {
  margin-left: 20px;
  border: solid 1px white;
}

#ideDesigner .group.overed {
  border: dotted 1px red;
}
#ideDesigner .group.actived {
  border: solid 1px blue;
  background-color: ivory;
}
#ideDesigner .group.fold {
  height: 24px;
  overflow-y: hidden;
}
#ideDesigner .line {
  display: inline-block;
  cursor: default;
  border: solid 1px white;
  height: 20px;
  margin-top: 2px;
}
#ideDesigner .line.nodeType-3 {
  height: auto !important;
}
#ideDesigner .line:hover {
  border1: solid 1px blue;
}
#ideDesigner .line.actived {
  border: solid 1px blue;
}

#ideDesigner .prop {
  border: 0px solid rgb(240, 237, 237);
  margin-left: 10px;
  position: relative;
}
#ideDesigner .autoSize {
  display: none;
}
#ideDesigner .prop1 {
  display: inline-block;
  position: relative;
}
#ideDesigner .prop2 {
  display: inline-block;
  position: relative;
}

#ideDesigner span {
  margin-left: 2px;
}
#ideDesigner input {
  display: inline-block;
  position: absolute;
  width: 100%;
  border: 1px solid white;
  left: 0;
  outline: none;
  line-height: 16px;
  height: 16px;
}

#ideDesigner input:hover {
  color: red;
  border: 1px solid rgb(236, 227, 227);
}
#ideDesigner input:focus {
  color: red;
  border: 1px solid rgb(167, 159, 159);
  width: 100%;
}
#ideDesigner .tagEnd {
  margin-left: 4px;
}
*,
::before,
::after {
  box-sizing: inherit;
}
</style>

<script>
import { ref, reactive, getCurrentInstance } from "vue";
import resourceTreeApi from "./ResourceTree.js";
import resource from "../lib/resource.js"
export default {
  name: "ResourceTree",
  props: {
    elList: {
      type: Array,
      default: [],
    },
  },
  setup() {
    const ctx = getCurrentInstance().ctx;
    let getPropList = (dom) => {
      let propList = [];
      for (let propName in dom) {
        if (
          propName != "tagName" &&
          propName != "children" &&
          propName != "innerHTML" &&
          propName.substring(0, 2) != "$$"
        ) {
          propList.push(propName);
        }
      }
      return propList;
    };
    let domChange = (el, propName) => {
      el.$$targetDom.setAttribute(propName, el[propName]);
      resource.saveResource();
      
    };
    let domChangeInnerHtml = (el) => {
      if (el.$$targetDom.nodeType == 3) {
        //如果是纯文本节点
        el.$$targetDom.nodeValue = el.innerHTML;
      } else {
        el.$$targetDom.innerHTML = el.innerHTML;
      }
      resource.saveResource();
    };
    let editGroup = () => {};
    return {
      getPropList,
      domChange,
      domChangeInnerHtml,
      editGroup,
      resourceTreeApi,
    };
  },
};
</script>
