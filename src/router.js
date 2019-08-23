import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Index from './components/Index.vue'
import Edit from './components/Edit.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      meta: { requiresAuth: true }
    },
    {
      name: 'edit',
      path: '/edit',
      component: Edit,
      meta: { requiresAuth: true }
    }
  ]
})


router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
      if (data && data.signInUserSession) {
        next()
      }
    }).catch((e) => {
      next({ path: '/' });
    });
  } else {
    next()
  }
})

export default router;