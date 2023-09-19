import { createApp } from 'vue'
import './style.css'
import router from "./router.js"
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css';



const app = createApp(App)
app.use(router)

app.mount('#app')
