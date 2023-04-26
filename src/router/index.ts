import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const ExampleView = () => import("../views/ExampleView.vue");

const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/example",
    name: "example",
    component: ExampleView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
});

export default router;
