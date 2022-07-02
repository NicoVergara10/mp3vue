import axios from "axios";

const clienteApi = axios.create({});

export default {
  getCanciones(cancionBuscar) {
    return clienteApi.get(
      "https://musicbrainz.org/ws/2/recording?fmt=json&query=" + cancionBuscar
    );
  },
  getLetras(artista, cancion) {
    debugger;
    return clienteApi.get(
      "https://api.lyrics.ovh/v1/" + artista + "/" + cancion
    );
  },
};
