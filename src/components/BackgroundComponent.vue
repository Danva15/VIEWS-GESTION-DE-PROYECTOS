<script setup lang="ts">
defineProps<{ imageUrl: string }>();
</script>

<template>
  <div class="background" :style="{ backgroundImage: `url(${imageUrl})` }"></div>
</template>

<style scoped>
.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: -1; /* Se coloca detrás del contenido */
}
</style>
