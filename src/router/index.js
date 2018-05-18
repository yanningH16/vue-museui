import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// const HelloWorld = resolve => {
//   import('@/components/HelloWorld').then((module) => {
//     console.log(module)
//     resolve(module)
//   })
// }
const HelloWorld = () =>
  import(/* webpackChunkName: "大的" */ '@/components/HelloWorld')
const First = () => import(/* webpackChunkName: "小的" */ '@/components/first')
// const First = resolve => {
//   import('@/components/first').then((module) => {
//     console.log(module)
//     resolve(module)
//   })
// }
const Cube = () => import(/* webpackChunkName: "滴滴" */ '@/components/cube')
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/aa',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { title: '首页' }
    },
    {
      path: '/ff',
      name: 'first',
      component: First,
      meta: { title: '首页' }
    },
    {
      path: '/',
      name: 'cube',
      component: Cube,
      meta: { title: '首页' }
    }
  ],
  mode: 'history'
})
