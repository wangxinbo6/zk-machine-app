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
      },
      {
        name:"machinedetails",path:"/machinedetails",component:()=>import("../views/Machine/MachineDetails.vue")
      },
      {
        name:"machinepaymentsuccess",path:"/machinepaymentsuccess",component:()=>import("../views/Machine/MachinePaymentSuccess.vue")
      },
      {
        name:"commerceget",path:"/commerceget",component:()=>import("../views/CommerceUser/CommerceGet.vue")
      },
      {
        name:"commercemyorder",path:"/commercemyorder",component:()=>import("../views/CommerceUser/CommerceMyOrder.vue")
      },
      {
        name:"commercedetails",path:"/commercedetails",component:()=>import("../views/CommerceUser/CommerceDetails.vue")
      },
      {
        name:"financeuser",path:"/financeuser",component:()=>import("../views/FinanceUser/FinanceOrder.vue")
      },
      {
        name:"financedetails",path:"/financedetails",component:()=>import("../views/FinanceUser/FinanceDetails.vue")
      },
      {
        name:"adminorder",path:"/adminorder",component:()=>import("../views/AdminUser/AdminOrder.vue")
      },
      {
        name:"admindetail",path:"/admindetail",component:()=>import("../views/AdminUser/AdminDetail.vue")
      },
      {
        name:"adminparameter",path:"/adminparameter",component:()=>import("../views/AdminUser/AdminParameter.vue")
      }
      ,
      {
        name:"adminpersonal",path:"/adminpersonal",component:()=>import("../views/AdminUser/AdminPersonal.vue")
      },
      {
        name:"adminenterprise",path:"/adminenterprise",component:()=>import("../views/AdminUser/AdminEnterprise.vue")
      },
      {
        name:"AuditUserDetail",path:"/AuditUserDetail",component:()=>import("../views/AuditUser/AuditUserDetail.vue")
      },
      {
        name:"AuditUserOrder",path:"/AuditUserOrder",component:()=>import("../views/AuditUser/AuditUserOrder.vue")
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
  },
  {
    path: "/upmobile",
    name: "upmobile",
    component:()=> import("../views/updataMobile/updataMobile.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
