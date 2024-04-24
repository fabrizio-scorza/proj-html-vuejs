import { createApp } from 'vue'
import './style/general.scss'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faQuoteLeft, faCircle, faLocationDot, faUserGroup, faCalendar, faClock, faEye } from '@fortawesome/free-solid-svg-icons'

library.add(faQuoteLeft, faCircle, faLocationDot, faUserGroup, faCalendar, faClock, faEye)
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
