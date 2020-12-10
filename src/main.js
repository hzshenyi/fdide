import { createApp } from 'vue'
import  fdui from '../fdui/index.js'
import App from './App.vue'
import store from './webide/lib/store.js'
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import './index.css'

store.put("component",{});
store.put("resourceTree",[]);
createApp(App).use(fdui).use(store).mount('#app')
