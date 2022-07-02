<template>
  <div :key="cancion" v-for="cancion in canciones" class="playlist">
    <p>
      <span id="title">Nombre: </span>
      {{ cancion.title }}
    </p>
    <p>
      <span id="artist">Artista: </span>
      {{ cancion["artist-credit"][0].name }}
    </p>
    <p>
      <span id="time">Duración: </span>
      {{ cancion.length / 1000 }}
    </p>
    <i class="uil uil-play-circle"></i>
  </div>
</template>
<script>
export default {
  props: {
    canciones: {
      required: true,
      type: Array,
    },
  },
};
</script>
