<template>
  <div class="letra">
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
<style>
.letra {
  border: 1px solid black;
  margin-left: 200px;
  margin-right: 200px;
  border-radius: 5px;
  box-shadow: 0px 10px 10px -6px black;
}
</style>
