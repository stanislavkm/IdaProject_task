import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './vuex/store'
import Axios from 'axios'
import './assets/fonts/fonts.css'

const app = createApp(App).use(router).use(store);
app.config.globalProperties.$http = Axios;

app.mount("#app")
