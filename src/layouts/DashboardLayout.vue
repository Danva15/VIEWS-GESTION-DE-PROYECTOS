<template>
  <div class="dashboard-layout">
    <aside class="sidebar">
      <h2>Menú</h2>
      <nav>
        <ul>
          <li><router-link to="/dashboard">Inicio</router-link></li>
          <li><router-link to="/dashboard/profile">Perfil</router-link></li>
          <li><router-link to="/dashboard/settings">Configuración</router-link></li>
          <li><button @click="logout">Cerrar Sesión</button></li>
        </ul>
      </nav>
    </aside>

    <main class="dashboard-content">
      <router-view /> <!-- Aquí se renderizarán las vistas del dashboard -->
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const logout = () => {
  // Aquí puedes limpiar el estado de autenticación si usas Pinia o Vuex
  router.push('/login'); // Redirigir a la vista de login
};
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: white;
  padding: 20px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin: 10px 0;
}

.sidebar a {
  color: white;
  text-decoration: none;
}

.dashboard-content {
  flex-grow: 1;
  padding: 20px;
}
</style>
