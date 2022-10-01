import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from "./router/routers";
import store from "./store";

import './utils/message'
import './router/index'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  ElementUI,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
