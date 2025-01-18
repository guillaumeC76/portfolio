import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/style.scss'
import './assets/css/reset.css'
import './assets/css/fonts.css'
import './assets/css/responsive.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
    duration: 2000
  });

createApp(App).mount('#app')
