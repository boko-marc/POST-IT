import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Add_new_post_it from '../views/Add_new_post_it.vue'
import Read from '../views/Read.vue'
import Edit from '../views/Edit.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Edit/:Id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/add',
    name: 'Add_new_post_it',
    component: Add_new_post_it
  },
  {
    path: '/read/:id',
    name: 'read',
    component: Read,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
