import { createRouter, createWebHashHistory } from 'vue-router';

import EditarComuna from '@/components/Comuna/EditarComuna.vue';
import NewComuna from '@/components/Comuna/NewComuna.vue';
import Comunas from '@/views/Comunas.vue';
import Home from '@/views/HomeView.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/comunas',
    name: 'Comunas',
    component: Comunas,
  },

  {
    path: '/editar-comuna/:id',
    name: 'EditarComuna',
    component: EditarComuna,
  },

  {
    path: '/add-comuna/',
    name: 'NewComuna',
    component: NewComuna,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
