import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "Login",
    component:() => import("../views/Login/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component:() => import("../views/Register/Register.vue")
  },
  {
    path: "/resetpassword",
    name: "ResetPassword",
    component:() => import("../views/ResetPassword/ResetPassword.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
