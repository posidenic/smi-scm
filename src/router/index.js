import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Login from '@/components/login'
import UserManage from '@/components/usermanage'
import UserAdd from '@/components/useradd'
import StorehouseManage from '@/components/storehousemanage'

Vue.use(Router)

const router =  new Router({
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
            {
                path: 'useradd',
                name: 'useradd',
                component: UserAdd
            },
            {
                path: 'storehousemanage',
                name: 'storehousemanage',
                component: StorehouseManage
            },
        ]
    }
    ]
})

// 路由守卫
router.beforeEach(function(to,from,next){
    
    const isLogin = sessionStorage.smi_login?true:false;
    if(to.path==="/login"){
        next();
    }else{
        isLogin?next():next("/login")
    }
})

export default router
