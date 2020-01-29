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

const fixIdScrolling = {
  watch: {
    $route (to, from) {
      const currentRoute = this.$router.currentRoute
      const idToScrollTo = currentRoute.hash
      this.$nextTick(() => {
        if (idToScrollTo && document.querySelector(idToScrollTo)) {
          document.querySelector(idToScrollTo).scrollIntoView()
        }
      })
    }
  }
}

new Vue({
  mixins: [fixIdScrolling],
  router,
  store,
  render: h => h(App)
}).$mount('#app')
