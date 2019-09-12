import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Course from '@/components/Course'
import Question from '@/components/Question'
import Vip from '@/components/Vip'
import One from '@/components/One'
import Two from '@/components/Two'
import Three from '@/components/Three'
import HomeRight from '@/components/HomeRight'
import HomeLeft from '@/components/HomeLeft'
import Hello from '@/components/Hello'
import User from '@/components/User'
import AxiosDemo from '@/components/axiosDemo/Demo'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  linkActiveClass: 'actv',
  // 低版本浏览器需要代码实现滚动位置记录
  // scrollBehavior (to, from, savePosition) {
  //   console.log(to, '===>', from)
  //   // 保存滚动位置信息
  //   console.log(savePosition)
  //   if (savePosition) {
  //     return savePosition
  //   } else {
  //     return {x: 0, y: 0}
  //   }
  // },
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        left: HomeLeft,
        right: HomeRight
      }
    },
    {
      path: '/vip',
      component: Vip,
      children: [
        {
          path: 'one',
          component: One
        },
        {
          path: 'two',
          component: Two
        },
        {
          path: 'Three',
          component: Three
        }
      ],
      meta: {
        required: true
      }
    },
    {
      path: '/course',
      component: Course
    },
    {
      path: '/question',
      name: 'wd',
      component: Question
    },
    // 重定向
    {
      path: '/hello',
      // 1 后面给一个字符串路由
      // redirect: '/course'
      // 2 后面各一个对象
      // redirect: {name: 'wd'}
      // 3 后面给一个函数
      // redirect: (to) => {
      //   // to 路由信息对象
      //   console.log(to)
      //   if (to.hash) {
      //     return './course'
      //   } else {
      //     return './vip'
      //   }
      // 取别名
      alias: '/hi',
      component: Hello
    },
    {
      path: '/user/:id?',
      component: User,
      props: true
    },
    {
      path: '/axios',
      component: AxiosDemo
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('进入路由之前执行', to)
  if (to.meta.required) {
    // alert('需要登录')
    if (to.meta.isLogin) {
      next()
    } else {
      alert('需要登录后查看')
      next('/hello')
    }
  } else {
    next()
  }
})

router.afterEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title
  } else {
    document.title = '略略略'
  }
})

export default router
