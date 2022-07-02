<template>
  <div class="search">
    <input
      type="search"
      v-model="busqueda"
      placeholder="Ingrese canción a buscar"
    />
    <button id="cancionBuscar" @click="buscarCancion">BUSCAR</button>
  </div>
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
import service from "@/services/apis.js";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      busqueda: "",
      canciones: [],
    };
  },
  methods: {
    buscarCancion() {
      service.getCanciones(this.busqueda).then((response) => {
        this.canciones = response.data.recordings;
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
