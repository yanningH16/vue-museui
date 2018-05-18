// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css'
import './assets/rest.styl'
import './assets/base.styl'
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.use(MuseUI)
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  beforeCreate: function () {
    this.$router.addRoutes([{
      'path': 'a'
    }])
    console.dir(this.$router)
  },
  components: {
    App
  },
  template: '<App/>'
})
