import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Browse from "../views/Browse.vue";
import Article from "../views/Article.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    props: { hasAccount: true },
  },
  {
    path: "/register",
    name: "Register",
    component: Login,
  },
  {
    path: "/browse",
    name: "Browse",
    component: Browse,
  },
  {
    path: "/article/:id",
    name: "Article",
    component: Article,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
