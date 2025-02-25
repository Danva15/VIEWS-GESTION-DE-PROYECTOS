<script setup lang="ts">
const props = defineProps<{
  imageUrl: string
}>()
const imageSrc = new URL(`../assets/${props.imageUrl}`, import.meta.url).href
</script>

<template>
  <img :src="imageSrc" alt="Lobo Logo" class="logo" />
</template>

<style>
.logo {
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center; /* Asegura la alineación vertical */
  justify-content: flex-start; /* Alinea el contenido a la izquierda */
  position: absolute; /* Posicionamiento absoluto si es necesario */
  top: 20px; /* Ajusta la distancia desde la parte superior */
  left: 20px; /* Ajusta la distancia desde la izquierda */
}

</style>
