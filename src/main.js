import Vue from 'vue'
import VueRouter from 'vue-router';
import RouterInfo from './router/router';
import App from './App.vue'

import './assets/fonts/AppleSDGothicNeo.css';
import './assets/fonts/Montserrat.css';

Vue.config.productionTip = false

const router = new VueRouter(RouterInfo);
Vue.use(VueRouter);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
