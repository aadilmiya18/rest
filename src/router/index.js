import Home from "@/components/Home.vue";
import SignUp from "@/components/SignUp.vue";
import { createRouter, createWebHistory } from "vue-router";
import Login from "@/components/Login.vue";
import Add from "@/components/Add.vue";
import Update from "@/components/Update.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
 
  {
    path: "/add",
    name: "Restaurant",
    component: Add,
  },
 
  {
    path: "/update",
    name: "Update",
    component: Update,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
