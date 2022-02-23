import Vue from "vue"
import App from "./App"
import VueRouter from "vue-router"
//webpack automatically imports the /index.js file, which is why the import stops at ./store
import store from "./store"
import AuthHandler from './components/AuthHandler'
import ImageList from './components/ImageList'
import UploadForm from './components/UploadForm'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: ImageList
        },
        {
            path: '/upload',
            component: UploadForm
        },
        {
            path: '/oauth2/callback',
            component: AuthHandler
        }
    ]
})

new Vue({
    router,
    store, 
    render: h => h(App)
}).$mount('#app')