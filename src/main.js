import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/global.css'
import 'element-ui/lib/theme-chalk/display.css'
import VueTouch from 'vue-touch'
import './plugins/axios'
import './assets/js/get_film'
// eslint-disable-next-line no-undef
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
// eslint-disable-next-line no-undef
Vue.prototype.$ajax = axios
// eslint-disable-next-line no-undef
axios.defaults.baseURL = 'http://localhost:8080/'
// eslint-disable-next-line no-undef
axios.defaults.withCredentials = true
Vue.config.productionTip = false
Vue.use(VueTouch, { name: 'v-touch' })
VueTouch.config.swipe = {
  threshold: 100 // 手指左右滑动距离
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
