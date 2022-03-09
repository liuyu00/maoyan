import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FooterBar from './components/FooterBar'
import SearchBar from './components/SearchBar'
import TabBar from './components/TabBar'

import './assets/css/reset.css'
import './assets/font/iconfont.css'

Vue.config.productionTip = false
Vue.component('FooterBar', FooterBar)
Vue.component('SearchBar', SearchBar)
Vue.component('TabBar', TabBar)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
