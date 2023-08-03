import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage/HomePage.vue';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap';


const routes = [
  {
    path: '/',
    component: HomePage,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;