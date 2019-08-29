import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Login from '@/components/login'
import UserManage from '@/components/usermanage'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        redirect: {
            name: 'index'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
    },
    {
        path: '/index',
        name: 'index',
        component: Index,
        children: [
            {
                path: 'usermanage',
                name: 'usermanage',
                component: UserManage
            },
        ]
    }
    ]
})
