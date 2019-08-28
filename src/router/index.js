import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
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
        path: '/index',
        name: 'index',
        component: Index
    },
    {
        path: '/usermanage',
        name: 'usermanage',
        component: UserManage
    },
    ]
})
