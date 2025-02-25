<script setup lang="ts">
import LogoComponent from './LogoComponent.vue'
import NameComponent from './NameComponent.vue'
import BackgroundComponent from './BackgroundComponent.vue';
</script>

<template>
  <header class="header-container">
    <BackgroundComponent imageUrl="./src/assets/fondo.jpg" />
    <div class="header-content">
      <LogoComponent imageUrl="loboLogo.png" />
      <div class="name">
        <NameComponent />
      </div>
    </div>
  </header>
</template>

<style scoped>
/*.header-container {
  position: relative;
  width: 1000%;
  height: 150px; /* Ajusta según necesidad */
  /*display: flex;*/
  /*align-items: center;
  justify-content: center;
  overflow: hidden;
}*/
.header-content {
  display: flex;
  align-items: center;
  gap: 2px; /* Espacio entre el logo y el nombre */
  position: absolute;
  top: 20px;
  left: 20px;
}

</style>

