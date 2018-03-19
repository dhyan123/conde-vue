import Vue from 'vue'
import Router from 'vue-router'

import Ariticl from '@/components/Ariticl.vue'
import Details from '@/components/details.vue'
import Login from '@/components/login.vue'
import iView from 'iview';

Vue.use(iView);
Vue.use(Router);

const router=new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
     redirect:'/ariticl'
    },
    {
      path: '/ariticl',
      name: 'ariticl',
      component:Ariticl
    },
    {
      path: '/topic/:id',
      name: 'details',
      component:Details
    },
    {
      path: '/login',
      name: 'login',
      component:Login
    },
  ]
})
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  next();
});

router.afterEach(route => {
  iView.LoadingBar.finish();
});
export default router