import { createRouter, createWebHistory } from "vue-router";
import AppLogin from '../views/page-login.vue';
import AppHomepage from '../views/page-homepage.vue';
import AppTemplate from '../views/page-template.vue';

const routes = [
  {
    path: '/page-login',
    name: 'AppLogin',
    component: AppLogin
  },
  {
    path: '/',
    name: 'AppHomepage',
    component: AppHomepage,
  },
  {
    path: '/page-template',
    name: 'AppTemplate',
    component: AppTemplate,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
