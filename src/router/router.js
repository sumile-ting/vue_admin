import Vue from 'vue';
import VueRouter from 'vue-router';
// import HelloWorld from "../components/HelloWorld";
import GuideRouter from "./GuideRouter";
import ComponentRouter from "./ComponentRouter";
import AboutRouter from './AboutRouter';

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    redirect: () => {
      let path = '/guide/install';
      return {path: path};
    },
  },
  // { path: '/hello', component: HelloWorld },
  GuideRouter,
  ComponentRouter,
  AboutRouter
]

const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})

export default router;

