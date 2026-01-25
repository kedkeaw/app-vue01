import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/customer',
    name: 'customer',

    component: () => import('../views/Customers.vue')
  },
  {
    path: '/contact',
    name: 'contact',

    component: () => import('../views/Contact.vue')
  },{
    path: '/type',
    name: 'type',

    component: () => import('../views/Type.vue')
  },{
    path: '/employee',
    name: 'employee',
    
    component: () => import('../views/Employee.vue')
  },{
    path: '/addcustomers',
    name: 'addcustomers',
    
    component: () => import('../views/Add_customers.vue')
  },{
    path: '/addemployees',
    name: 'addemployees',
    
    component: () => import('../views/Add_employees.vue')
  },{
    path: '/product',
    name: 'product',
    
    component: () => import('../views/Product.vue')
  },{
    path: '/productapi',
    name: 'productapi',
    
    component: () => import('../views/Product_api.vue')
  },{
    path: '/showproduct',
    name: 'showproduct',
    
    component: () => import('../views/Show_product.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
