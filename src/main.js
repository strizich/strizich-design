import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PortalVue from 'portal-vue'

import './registerServiceWorker'

Vue.config.productionTip = false
Vue.config.performance = true

Vue.use(PortalVue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
