import FdButton from './src/button.vue'

FdButton.install = function(Vue) {
  Vue.component(FdButton.name, FdButton);
};

export default FdButton;