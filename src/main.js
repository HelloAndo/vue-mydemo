import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import NextToHome from './components/NextToHome.vue'
import progress from './components/Progress.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

router.map({
	'/Home': {
		component: Home
	},
	'/NextToHome': {
		component: NextToHome,
		subRoutes: {
			'/Progress': {
				component: progress
			}
		}
	}
})

router.redirect({
  '*': '/Home'
})

router.start(App, '#app')