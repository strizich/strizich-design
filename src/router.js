import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

let scrollBehavior = (to, from, savedPosition) => {
  if (to.hash) {
    return {
      selector: to.hash
    }
  }
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article',
      name: 'article',
      component: () => import(/* webpackChunkName: "article" */ './views/Article.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }, {
      path: '/buttons',
      name: 'buttons',
      component: () => import(/* webpackChunkName: "buttons" */ './views/ButtonsDemo.vue')
    }, {
      path: '/cards',
      name: 'cards',
      component: () => import(/* webpackChunkName: "cards" */ './views/CardDemo.vue')
    }, {
      path: '/modals',
      name: 'modals',
      component: () => import(/* webpackChunkName: "modal" */ './views/ModalDemo.vue')
    }, {
      path: '/chicklets',
      name: 'chicklets',
      component: () => import(/* webpackChunkName: "chicklets" */ './views/ChickletDemo.vue')
    }, {
      path: '/forms',
      name: 'forms',
      component: () => import(/* webpackChunkName: "forms" */ './views/FormsDemo.vue')
    }, {
      path: '/tooltips',
      name: 'tooltips',
      component: () => import(/* webpackChunkName: "forms" */ './views/TooltipDemo.vue')
    }
  ]
})
