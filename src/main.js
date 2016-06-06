import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'

import store from './store'

import App from './App.vue'

import index from './components/index.vue'
import article from './components/article.vue'
import adminList from './components/list.vue'
import adminPost from './components/post.vue'
import adminEdit from './components/edit.vue'

Vue.use(VueRouter)

var router = new VueRouter({
    hashbang: true,
    history: false,
    saveScrollPosition: true,
    suppressTransitionError: true
})

router.map({
    '/': {
        name: 'index',
        component: index
    },
    '/category/:id': {
        name: 'category',
        component: index
    },
    '/search/:q': {
        name: 'search',
        component: index
    },
    '/article/:id': {
        name: 'article',
        component: article
    },
    '/list/:page': {
        name: 'adminList',
        component: adminList
    },
    '/post': {
        name: 'adminPost',
        component: adminPost
    },
    '/edit/:id/:page': {
        name: 'adminEdit',
        component: adminEdit
    },
    '*': {
        component: index
    }
})

sync(store, router)

router.afterEach(() => {
    window.scrollTo(0, 0)
})
router.start(App, '#app')
