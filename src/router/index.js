import Vue from 'vue';
import VueRouter from 'vue-router';
import firebase from 'firebase/app'
import Home from '@/components/Home.vue';
import Login from '@/components/Login.vue';
import Questions from '@/components/Questions.vue';
import Game from '@/components/Game.vue'
import Error from '@/components/Error.vue';


Vue.use(VueRouter);

let router= new VueRouter ({
    routes: [
        {
            path: '/',
            component: Home,
            meta:{
                requiresAuth: true
            }
        },
        {
            path: '/fromgame',
            name: 'fromgame',
            component: Home,
            meta:{
                requiresAuth: true
            }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/play',
            component: Game,
            meta:{
                requiresAuth: true
            }
        },
        {
            path: '/addquestion',
            component: Questions,
            meta:{
                requiresAuth: true
            }
        },
        {
            path: '*',
            component: Error
        }
    ]
})

router.beforeEach((to, from, next) => {
    let currentUser = firebase.auth().currentUser;
    //let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
    console.log(to);
    console.log('Usuario actual', currentUser);
    
    //if (requiresAuth && !currentUser) next('/')
    if (to.meta.requiresAuth && currentUser == null){
        next('/login')
    } else {
    next()
    }
})

export default router;