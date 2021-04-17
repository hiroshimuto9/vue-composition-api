import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '@/views/home.vue'
import Todos from '@/views/todo/todos.vue'
import AddTodo from '@/views/todo/addTodo.vue'
import EditTodo from '@/views/todo/editTodo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/todos',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/todos/new',
    name: 'AddTodo',
    component: AddTodo
  },
  {
    path: '/todos/edit/:id',
    name: 'EditTodo',
    component: EditTodo
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
