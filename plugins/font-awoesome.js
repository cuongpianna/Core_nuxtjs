import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faTools, faLifeRing, faCog, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCommentAlt, faSave } from '@fortawesome/free-regular-svg-icons'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'

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
