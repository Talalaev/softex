import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueCarousel from 'vue-carousel'

import App from './App.vue'
import { Home, Main, AboutUs, ContactUs } from './components'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VueCarousel)

// 3. Create the router
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Main },
        { path: '/home', component: Home },
        { path: '/about-us', component: AboutUs },
        { path: '/contact-us', component: ContactUs }
    ]
})

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
