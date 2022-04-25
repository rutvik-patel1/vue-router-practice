import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Section from './components/Section.vue'
import About from './components/About.vue'                                       
const routes = [
    {   name: 'Home',
        path:'/home',
        component: Home,
        children:[
            {
                path:'',
                component: About
            },    
        {
            path:':id',
            components: {
                section2: Section
              }
        }]

    },
    {   name:'About',
        path:'/about',
        component: About
    }
]

const router = createRouter({
    routes:routes,
    history: createWebHistory(),
})


export default router


// import { createWebHistory, createRouter } from 'vue-router'


// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     { path: '/', name: 'Home', component: Home },
//     { path: '/about', name: 'About', component: About },
//   ]
// })

// export default router
