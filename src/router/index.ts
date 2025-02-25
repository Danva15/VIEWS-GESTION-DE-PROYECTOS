import { createRouter, createWebHistory } from 'vue-router'
import LoginView from'@/views/LoginView.vue'
import PasswordView from '@/views/PasswordView.vue'
import RegisterForms from '@/views/RegisterForms.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue';
import DashboardView from '@/views/DashboardView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/password',
      component: PasswordView
    },
    {
      path: '/register',
      component: RegisterForms
    },
    {
      path: '/dashboard',
      component: DashboardLayout,
      children: [
        { path: '', component: DashboardView } // Ruta principal del dashboard
      ]
    },
  ],
})

export default router
