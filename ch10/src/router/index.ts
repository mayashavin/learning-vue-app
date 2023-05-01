import {
  createRouter,
  createWebHistory,
  type RouteLocationNormalizedLoaded,
  type RouteRecordRaw,
} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import PizzasView from "@/views/PizzasView.vue";
import ContactView from "@/views/ContactView.vue";
import LoginView from "@/views/LoginView.vue";
import ErrorView from "@/views/ErrorView.vue";
import ContactFormView from "@/views/ContactFormView.vue";
import ContactFaqView from "@/views/ContactFaqView.vue";
import PizzaView from "@/views/PizzaView.vue";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
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
    path: "/contact",
    name: "contact",
    component: ContactView,
    children: [
      {
        path: "faq",
        name: "contact-faq",
        component: ContactFaqView,
      },
      {
        path: "form",
        name: "contact-form",
        component: ContactFormView,
      },
    //   {
    //     path: "",
    //     name: "contact",
    //     component: ContactView,
    //   }
    ],
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
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
