import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PortalVue from 'portal-vue'
import VueMeta from 'vue-meta'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.config.performance = true

Vue.use(PortalVue)
Vue.use(VueMeta)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
