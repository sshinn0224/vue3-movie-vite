import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'
import loadImage from './plugins/loadImage'

// Import our custom CSS
import './scss/main.scss'

createApp(App).use(router).use(store).use(loadImage).mount('#app')
