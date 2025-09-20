import './assets/main.css'
import reveal from './directives/reveal'

import { createApp } from 'vue'
import App from './App.vue'

// Import GSAP
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

// Make GSAP available globally
window.gsap = gsap

const app = createApp(App)
app.directive('reveal', reveal)
app.mount('#app')
