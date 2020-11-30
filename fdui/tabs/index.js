import FdTabs from './src/tabs.vue'
import FdTabPane from './src/tab-pane.vue'

FdTabs.install = function(Vue) {
  Vue.component(FdTabs.name, FdTabs);
  Vue.component(FdTabPane.name, FdTabPane);
};

export default FdTabs;