// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './directives'
import './components'
import store from './store'
import VueSweetalert2 from './plugins/sweetalert2'
import Message from './plugins/message'
import './filters'
import {mockArticles} from "./mock/data";
import ls from './utils/localStorage'
import './mock'
import axios from 'axios'

Vue.use(VueSweetalert2)
Vue.use(Message)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

const AddMockData = (()=>{
  const isAddMockData = true

    let userArticles = ls.getItem('articles')

    if(Array.isArray(userArticles)){
      userArticles = userArticles.filter(article=>parseInt(article.uid)===1)
    }else{
      userArticles = []
    }

    if(isAddMockData){
      store.commit('UPDATE_ARTICLES',[...userArticles,...mockArticles(60)])
    }else{
      store.commit('UPDATE_ARTICLES',userArticles)
    }
})()


/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
