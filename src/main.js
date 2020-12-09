import { createApp } from 'vue'
import  fdui from '../fdui/index.js'
import App from './App.vue'
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
import './index.css'

createApp(App).use(fdui).mount('#app')
