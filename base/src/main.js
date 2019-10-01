import Vue from 'vue'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import iViewRwDispatcher from 'iview-rw-dispatcher'
import 'iview-rw-dispatcher/styles/index.less'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(iView)
Vue.use(iViewRwDispatcher)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
