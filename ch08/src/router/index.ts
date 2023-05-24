import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalizedLoaded,
  type RouteRecordRaw,
} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import PizzasView from "@/views/PizzasView.vue";
import ErrorView from "@/views/ErrorView.vue";
import PizzaView from "@/views/PizzaView.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/pizzas",
    props: (route: RouteLocationNormalizedLoaded) => ({
      searchTerm: route.query?.search || "",
    }),
    children: [
      {
        path: ":id",
        name: "pizza",
        component: PizzaView,
        props: true,
      },
      {
        path: "",
        name: "pizzas",
        component: PizzasView,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: ErrorView,
    // redirect: { name: 'home' }
    // redirect: "/",
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
