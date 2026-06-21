import { createRouter, createWebHistory } from 'vue-router'
import AxonInterviewPrepView from '../views/AxonInterviewPrepView.vue'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/axon-interview-prep',
      name: 'axon-interview-prep',
      component: AxonInterviewPrepView,
    },
  ],
})

export default router
