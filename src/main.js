import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import axios from 'axios'
import VueI18n from 'vue-i18n'
import messages from './locales/vue-i18n'
import 'animate.css'

Vue.use(VueI18n)
Vue.config.productionTip = false

const i18n = new VueI18n({
  locale: 'en',
  messages
})


new Vue({
  vuetify,
  store,
  router,
  axios,
  i18n,
  render: h => h(App)
}).$mount('#app')
