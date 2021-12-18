import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory('/05-vue-router/01-AuthPages'),
  routes: [
    {
      path: '/',
      component: () => import('../views/PageIndex'),
    },
    {
      path: '/login',
      component: () => import('../views/PageLogin'),
    },
    {
      path: '/register',
      component: () => import('../views/PageRegister'),
    },
  ],
});
