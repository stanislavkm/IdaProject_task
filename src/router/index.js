import { createRouter, createWebHistory } from 'vue-router'
const routes = [
    {
        path: '/',
        name: 'MainLayout',
        component: () => import('../layouts/MainLayout'),
        children: [
            {
                path: '',
                name: 'CatalogLayout',
                component: () => import('../layouts/CatalogLayout'),
            }
        ]
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router