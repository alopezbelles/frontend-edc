import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage/HomePage.vue';
import AboutPage from '@/components/AboutPage/AboutPage.vue';

const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;