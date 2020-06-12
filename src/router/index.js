import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: ()=> import("../components/HelloWorld.vue"),
    redirect: 'home', //此为默认路径 即打开首页的时候自动跳转在list页面
    children:[
      {
        name:'home',path:'/home',component:()=>import("../views/Home.vue"),
      },
      {
        name:"order",path:'/order',component:()=>import("../views/User/Order.vue")
      }
    ]
  },
  
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
  },
  {
    path: "/uploaduserinfo",
    name: "uploaduserinfo",
    component:() => import("../views/UploadUserInfo/UploadUserInfo.vue")

  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
