import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FoodDetail from "../views/FoodDetail.vue";
import KeranjangPage from "../views/KeranjangPage.vue";
import PesananSukses from "../views/PesananSukses.vue";
import signUp from "../components/SignUp.vue";
import LoginPage from "../components/LoginPage.vue";
import DitempatPage from "../components/DitempatPage.vue";
import OnlinePage from "../components/OnlinePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/menu",
      name: "foods",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/FoodsView.vue"),
    },
    {
      path: "/menu/:id",
      name: "FoodDetail",
      component: FoodDetail,
    },
    {
      path: "/keranjang",
      name: "Keranjang",
      component: KeranjangPage,
    },
    {
      path: "/pesanan-sukses",
      name: "PesananSukses",
      component: PesananSukses,
    },
    {
      path: "/daftar",
      name: "signUp",
      component: signUp,
    },
    {
      path: "/masuk",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/online",
      name: "OnlinePage",
      component: OnlinePage,
    },
    {
      path: "/ditempat",
      name: "DitempatPage",
      component: DitempatPage,
    },
  ],
});

export default router;
