<template>
  <div :key="cancion" v-for="cancion in canciones" class="playlist">
    <div class="info">
      <h2>
        {{ cancion.title }}
      </h2>
      <h3>
        {{ cancion["artist-credit"][0].name }}
      </h3>
      <p>{{ (cancion.length / 1000 / 60).toFixed(2) }} mins</p>
    </div>
    <div class="img">
      <router-link
        :to="{
          name: 'SongLyrics',
          params: {
            artista: cancion['artist-credit'][0].name,
            cancion: cancion.title,
          },
        }"
      >
        <i class="uil uil-align-letter-right"></i>
      </router-link>
    </div>
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
<style scoped>
.playlist {
  width: 60%;
  padding-left: 20%;
  padding-right: 20%;
  display: grid;
  grid-template-columns: auto auto;
}
.info {
  text-align: left;
}
.img {
  padding-top: 25%;
  padding-bottom: 25%;
}
.img > i {
  font-size: 250%;
}
</style>
