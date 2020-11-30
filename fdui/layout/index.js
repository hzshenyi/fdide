import FdLayout from './src/layout.vue'
import FdLayoutPane from './src/layout-pane.vue'
FdLayout.install = function(Vue) {
  Vue.component(FdLayout.name, FdLayout);
  Vue.component(FdLayoutPane.name, FdLayoutPane);
};

export default FdLayout;