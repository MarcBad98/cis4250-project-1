import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import FAQ from '../views/FAQ.vue'
import Whistleblow from '../views/Whistleblow.vue'
import ViewWhistleblow from '../views/ViewWhistleblow.vue';
import UserAgreement from '../views/UserAgreement.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/whistleblow',
    name: 'Whistleblow',
    component: Whistleblow
  },
  {
    path: '/whistleblow/:id',
    name: 'ViewWhistleblow',
    component: ViewWhistleblow
  },
  {
    path: '/user-agreement',
    name: 'UserAgreement',
    component: UserAgreement
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
