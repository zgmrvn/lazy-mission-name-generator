import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import '@/assets/css/tailwind.css'

library.add(faGithub)

Vue.component('fontAwesomeIcon', FontAwesomeIcon)

new Vue({
  render: h => h(App)
}).$mount('#app')
