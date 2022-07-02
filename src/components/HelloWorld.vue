<template>
  <div class="search">
    <input type="search" v-model="busqueda" placeholder="Ingrese canción a buscar" />
    <button id="cancionBuscar" @click="buscarCancion"> BUSCAR</button>
  </div>
  <div class="playlist">
    <p>
      <span id="title">Nombre: </span>
      askdsakof
    </p>
    <p>
      <span id="artist">Artista: </span>
      martin garris
    </p>
    <p>
      <span id="time">Duración: </span>
      5:03 mins
    </p>
    <i class="uil uil-play-circle"></i>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      busqueda: '',
      canciones: [

      ]
    }
  },
  methods:{
    buscarCancion(){
      alert(this.busqueda)
    }
  }
}

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
