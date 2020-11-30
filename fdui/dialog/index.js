import FdDialog from './src/dialog.vue'

FdDialog.install = function(Vue) {
  Vue.component(FdDialog.name, FdDialog);
};

export default FdDialog;