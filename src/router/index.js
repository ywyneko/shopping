import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Profile from "@/views/Profile.vue";
import ProductHome from "@/views/ProductHome.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import Login from "@/views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/product",
    component: ProductHome
  },
  {
    path: "/product/:id",
    component: ProductDetail
  },
  {
    path: "/profile",
    component: Profile,
  },
  {
    path: "/login",
    component: Login
  },
];

const router = new VueRouter({
  routes,
  mode : 'history',
});

router.beforeEach((to,from,next)=>{
  if(to.path === '/profile' || to.path === '/product'){
      let auth = localStorage.getItem('auth');
      if(auth){
        next();
      }else{
        next('/login');
      }
  }
  next();
})

export default router;
