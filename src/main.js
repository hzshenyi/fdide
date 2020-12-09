import { createApp } from 'vue'
import  fdui from '../fdui/index.js'
import App from './App.vue'
import Store from './webide/lib/store.js'
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import './index.css'

Store.put("component",{});

createApp(App).use(fdui).use(Store).mount('#app')
