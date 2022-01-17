import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Page1.vue";
import About from "@/views/Page2.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;