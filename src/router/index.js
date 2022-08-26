import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: () => import("@/views/home/index.vue") },
  { path: "/favor", component: () => import("@/views/favor/index.vue") },
  { path: "/order", component: () => import("@/views/order/index.vue") },
  { path: "/message", component: () => import("@/views/message/index.vue") },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
