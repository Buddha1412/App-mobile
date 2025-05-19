import { createRouter, createWebHistory } from "vue-router";
import HomePage from '../views/HomePage.vue';
import UserForms from '../views/UserForms.vue';

const routes = [
  {
    path: '/userform',
    name: 'UserForms',
    component: UserForms
  },
  {
    path: '/homepage',
    name: 'HomePage',
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
