import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from '@/store'

import Panel from './components/Penel'

Vue.component(Panel.name, Panel)

Vue.config.productionTip = false

Vue.use(ElementUI)

import axios from 'axios'
Vue.prototype.$axios = axios

//接口地址
let apiUrl = process.env.VUE_APP_URL
Vue.prototype.$apiUrl = apiUrl

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
