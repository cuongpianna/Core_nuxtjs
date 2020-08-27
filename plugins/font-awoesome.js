import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faTools, faLifeRing, faCog, faPlus, faAngleDown, faStoreAlt, faRocket } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt, faSave, faChartBar } from '@fortawesome/free-regular-svg-icons'
import { faFacebookMessenger, faFacebook } from '@fortawesome/free-brands-svg-icons'

Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faChartBar)
library.add(faUser)
library.add(faTools)
library.add(faLifeRing)
library.add(faCog)
library.add(faPlus)
library.add(faCommentAlt)
library.add(faFacebookMessenger)
library.add(faSave)
library.add(faAngleDown)
library.add(faFacebook)
library.add(faStoreAlt)
library.add(faRocket)
