<template>
  <div class="search">
    <input
      type="search"
      v-model="busqueda"
      placeholder="Ingrese canción a buscar"
    />
    <button id="cancionBuscar" @click="buscarCancion">BUSCAR</button>
  </div>
  <div class="songCard">
    <SongCard :canciones="canciones"></SongCard>
  </div>
</template>

<script>
import service from "@/services/apis.js";
import SongCard from "@/components/songCard.vue";
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
  components: {
    SongCard,
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
.songCard {
  border: 1px solid rgb(128, 128, 128);
  margin-left: 200px;
  margin-right: 200px;
  border-radius: 5px;
  box-shadow: 0px 10px 10px -6px black;
}
</style>
