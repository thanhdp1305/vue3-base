import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const Dashboard = () => import("../views/Dashboard/Dashboard.vue");
const SignIn = () => import("../views/SignIn/SignIn.vue");

const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  // {
  //   path: "/404",
  //   component: () => import("@/views/error-page/404.vue"),
  //   meta: {
  //     hidden: true,
  //   },
  //   alias: "/:pathMatch(.*)*",
  // },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "ErrorPage",
    meta: {
      hidden: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
});

export default router;
