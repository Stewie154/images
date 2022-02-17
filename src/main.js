import Vue from "vue"
import App from "./App"
//webpack automatically imports the /index.js file, which is why the import stops at ./store
import store from "./store"

new Vue({
    store, 
    render: h => h(App)
}).$mount('#app')