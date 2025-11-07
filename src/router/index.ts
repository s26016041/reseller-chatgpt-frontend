import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 匯入頁面元件
import Login from '@/views/login/Login.vue'
// 定義路由資料結構（TS 用）
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login',  // ✅ 自動導向 Login 頁面
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
]

// 建立 router instance
const router = createRouter({
  history: createWebHistory(), // history 模式
  routes,
})

export default router
