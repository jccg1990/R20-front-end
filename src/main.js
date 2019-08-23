import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import VueAxios from 'vue-axios';
import axios from 'axios';

import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);
Vue.use(AmplifyPlugin, AmplifyModules);

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')