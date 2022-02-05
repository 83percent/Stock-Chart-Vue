import Vue from 'vue'

// Route
import VueRouter from 'vue-router';
import RouterInfo from './router/router';

// State Store
import store from './store/index';

import App from './App.vue'

import './assets/fonts/AppleSDGothicNeo.css';
import './assets/fonts/Montserrat.css';

Vue.config.productionTip = false

const router = new VueRouter(RouterInfo);
Vue.use(VueRouter);
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
