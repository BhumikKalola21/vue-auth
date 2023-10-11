import Vue from 'vue'
import store from "../store/index"
import VueRouter from 'vue-router'
import TheLogin from '../components/TheLogin'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: TheLogin,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../components/TheDashboard.vue'),
  }
]
const router = new VueRouter({
  routes,
  mode: 'history',
})

router.beforeEach((to, from, next) => {
  const auth = store.getters["auth"];
  const user = store.getters["user"];
  if (auth && user) {
    next();
  } else if (to.path !== '/') {
    next('/');
  } else {
    next();
  }
});
export default router
