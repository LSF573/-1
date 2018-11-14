// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
Vue.prototype.$Axios=Axios
import iView from 'iview';
import 'iview/dist/styles/iview.css'
Vue.use(iView);


import Jq from 'jquery'
Vue.prototype.$ajax=Jq
// import {Row,Col} from 'iview'
// Vue.component('lsf-Row',Row)
// Vue.component('lsf-Col',Col)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<router-view/>'
})
