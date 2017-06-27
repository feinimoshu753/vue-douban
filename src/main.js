// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Movie from './components/Movie'
import Book from './components/Book'
import Tv from './components/Tv'
import Music from './components/Music'
import { AjaxPlugin, ToastPlugin } from 'vux'

Vue.use(VueRouter)
Vue.use(AjaxPlugin)
Vue.use(ToastPlugin)

const routes = [
  {path: '/', component: Movie},
  {path: '/book', component: Book},
  {path: '/tv', component: Tv},
  {path: '/music', component: Music}
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
