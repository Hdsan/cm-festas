import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './views/Home-view.vue'
import AdminView from './views/Admin-view.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/admin', component: AdminView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})
export default router