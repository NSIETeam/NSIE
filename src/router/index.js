import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import PostView from '../views/PostView.vue'
import ToolsView from '../views/ToolsView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import PrivacyView from '../views/PrivacyView.vue'
import TermsView from '../views/TermsView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/blog', name: 'blog', component: BlogView },
  { path: '/blog/:id', name: 'post', component: PostView },
  { path: '/tools', name: 'tools', component: ToolsView },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/contact', name: 'contact', component: ContactView },
  { path: '/privacy', name: 'privacy', component: PrivacyView },
  { path: '/terms', name: 'terms', component: TermsView },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
