import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'
import Home from './pages/Home.vue'
import ChildCenters from './pages/ChildCenter.vue'
import Children from './pages/Children.vue'
import Child from './pages/Child.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/child-centers', component: ChildCenters },
    { 
      path: '/children', 
      children: [
        { path: '', component: Children },
        { path: 'child', component: Child }
      ] 
    },
  ]
  
const router = createRouter({
    history: createMemoryHistory(),
    routes,
    linkActiveClass: 'border-b-4 border-sky-500 text-sky-600',
})

createApp(App).use(router).mount('#app')
