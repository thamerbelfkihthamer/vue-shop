// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'jquery/dist/jquery.min'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faTrash, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const JQuery = {
  install (Vue) {
    Vue.prototype.$JQuery = require('jquery')
  }
}
Vue.use(JQuery)

library.add(faUserSecret, faTrash, faPlusCircle)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
