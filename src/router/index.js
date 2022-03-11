import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase/compat/app'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {layout: 'main', auth: false},
      component: () => import('../views/Home')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {layout: 'main', auth: true},
      component: () => import('../views/Profile')
    },
    {
      path: '/messages',
      name: 'messages',
      meta: {layout: 'main', auth: true},
      component: () => import('../views/Messages')
    },
    {
      path: '/register',
      name: 'register',
      meta: {layout: 'empty'},
      component: () => import('../views/Register')
    },
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'empty'},
      component: () => import('../views/Login')
    }
  ]
})

router.beforeEach((to,from,next) => {
  const currentUser = firebase.auth().currentUser
  const reqireAuth = to.matched.some(record => record.meta.auth)

  if (reqireAuth && !currentUser) {
    next('/?message=login')
  } else {
    next()
  }
})

export default router
