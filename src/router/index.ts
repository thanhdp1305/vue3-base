import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const ExampleCode = () => import("../views/ExampleCode/ExampleCode.vue");

const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "example",
    component: ExampleCode,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
});

export default router;
