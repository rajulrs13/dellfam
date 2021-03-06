import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Groups from '../views/Groups.vue'
import GroupPage from '../views/GroupPage.vue'
import Events from '../views/Events.vue'
import Gaming from '../views/Gaming.vue'
import GamePage from '../views/GamePage.vue'
import Workspaces from '../views/Workspaces.vue'
import Discussion from '../views/Discussion.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/groups',
    name: 'Groups',
    component: Groups
  },
  {
    path: '/group/:id',
    name: 'GroupPage',
    component: GroupPage
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/gaming',
    name: 'Gaming',
    component: Gaming
  },
  {
    path: '/game/:id',
    name: 'GamePage',
    component: GamePage
  },
  {
    path: '/book',
    name: 'Workspaces',
    component: Workspaces
  },
  {
    path: '/forums',
    name: 'Discussion',
    component: Discussion
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
