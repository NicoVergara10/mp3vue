<template>
  <div class="about">
    <h3>{{ cancion }}</h3>
    <h4>{{ artista }}</h4>
    <pre>{{ letra.lyrics }}</pre>
  </div>
</template>

<script>
import service from "@/services/apis.js";
export default {
  name: "SongLyrics",
  props: {
    artista: {
      required: true,
      type: String,
    },
    cancion: {
      required: true,
      type: String,
    },
  },
  data() {
    return {
      letra: "",
    };
  },
  methods: {
    buscarLetra() {
      service.getLetras(this.artista, this.cancion).then((response) => {
        this.letra = response.data;
      });
    },
  },
  created() {
    this.buscarLetra();
  },
};
</script>
