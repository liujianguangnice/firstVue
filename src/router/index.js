import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloWorld2 from '@/components/HelloWorld2'
import HelloWorld3 from '@/components/HelloWorld3'
import HelloWorld4 from '@/components/HelloWorld4'

// 引入子路由
import Blog from '../pages/page.vue'
// 引入子路由页面
import page1 from '../pages/page1.vue'
import page2 from '../pages/page2.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'about',
      component: Blog,
      children: [
        {
          path: '/',
          component: page1
        },
        {
          path: 'info',
          component: page2
        }
      ]
    },
    {
      path: '/about3',
      name: 'HelloWorld3',
      component: HelloWorld3
    },
    {
      path: '/about4',
      name: 'HelloWorld4',
      component: HelloWorld4
    },
    {
      path: '/about4/about4',
      name: 'HelloWorld4',
      component: HelloWorld4
    }
  ]
})
