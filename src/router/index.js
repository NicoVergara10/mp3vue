import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SongLyrics from "@/views/SongLyrics.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/letra/:artista/:cancion",
    name: "SongLyrics",
    props: true,
    component: SongLyrics,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
