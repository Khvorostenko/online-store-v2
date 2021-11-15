import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/registration',
      name: 'Registration',
      component: () => import ('../components/auth/Registration.vue')
    },
    {
      path: '/',
      name: 'Home',
      component: () => import ('../components/pages/Home.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../components/auth/Login.vue')
    },
    {
      path: '/men',
      name: 'Men',
      component: () => import('../components/pages/product-men.vue')
    },
    {
      path: '/women',
      name: 'Women',
      component: () => import('../components/pages/product-woman.vue')
    },
    {
      path: '/boys',
      name: 'Boys',
      component: () => import('../components/pages/product-boy.vue')
    },
    {
      path: '/girls',
      name: 'Girls',
      component: () => import('../components/pages/product-girl.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('../components/pages/product-basket.vue')
    },
    {
      path: '/product/:id',
      props:true,
      name: 'Product',
      component: () => import('../components/pages/product-information.vue')
    },
    {
      path:'*',
      component: () => import('../components/pages/Home.vue')
    }
  ],
  mode: 'history'
})
