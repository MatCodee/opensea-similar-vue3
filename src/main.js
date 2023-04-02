import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone,faMagnifyingGlass,faUser,faRightFromBracket,faCartShopping,faAngleRight } from "@fortawesome/free-solid-svg-icons";

import Swiper from 'swiper/bundle'; 
import 'swiper/swiper-bundle.css'

import './assets/main.css'


import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faPhone)
library.add(faMagnifyingGlass)
library.add(faUser)
library.add(faRightFromBracket)
library.add(faCartShopping)
library.add(faAngleRight)


const app = createApp(App)

app.config.globalProperties.$swiper = Swiper;

app.use(createPinia())
app.use(router)

app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')
