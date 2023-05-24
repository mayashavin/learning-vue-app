import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import {router} from './router/index'

const app = createApp(App)

const pinia = createPinia();

pinia.use(({ store }) => {
    if (store.$id === 'cart') {

        store.$subscribe((options) => {
            console.log('cart changed', options)
        });

        store.$onAction(({ name, args }) => {
            if (name === 'add') {
                console.log('item added to cart', args)
            }
        });
    }

})

app.use(pinia)
app.use(router)

app.mount('#app')
