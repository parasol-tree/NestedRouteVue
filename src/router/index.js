import Vue from 'vue'
import Router from 'vue-router'

import User from '@/User/'
import UserHome from '@/UserHome/'
import UserProfile from '@/UserProfile/'
import UserPosts from '@/UserPosts/'

Vue.use(Router)

const children = [
  { path: '/user', component: UserHome, name: 'userHome' },
  { path: '/user/profile', component: UserProfile, name: 'userProfile' },
  { path: '/user/posts', component: UserPosts, name: 'userPosts' }
]

// [vue-router] Named Route 'user' has a default child route.
// When navigating to this named route (:to="{name: 'user'"),
// the default child route will not be rendered.
// emove the name from this route
// and use the name of the default child route for named links instead.
// 综上所述,不得给User这个组件在router内写名字(name: 'user'),协商就会有上面的警告
export default new Router({
  routes: [
    {
      path: '/',
      component: User,
      children
    }
  ]
})
