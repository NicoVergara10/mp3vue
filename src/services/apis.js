import axios from "axios";

const clienteApi = axios.create({
  baseURL: "https://musicbrainz.org/ws/2",
});

export default {
  getCanciones(cancionBuscar) {
    return clienteApi.get("/recording?fmt=json&query=" + cancionBuscar);
  },
};
