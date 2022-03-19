import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Edit from '@/views/Edit.vue'
import RecipeDetail from '../components/RecipeDetail.vue'
import RecipeCreate from '../components/RecipeCreate.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit
  },
  {
    path: '/recipe/:id',
    name: 'RecipeDetail',
    component: RecipeDetail
  },
  {
    path: '/add',
    name: 'Add',
    component: RecipeCreate
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
