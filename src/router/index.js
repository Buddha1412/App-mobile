import { createRouter, createWebHistory } from "vue-router";
import Login from '../views/Login.vue';
import Homepage from '../views/Homepage.vue';
import Template from '../views/Template.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/homepage',
    name: 'AppHomepage',
    component: Homepage,
  },
  {
    path: '/template',
    name: 'AppTemplate',
    component: Template,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
