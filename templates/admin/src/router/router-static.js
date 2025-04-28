import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import fangyuan from '@/views/modules/fangyuan/list'
    import zufanghetong from '@/views/modules/zufanghetong/list'
    import news from '@/views/modules/news/list'
    import zhuangxiu from '@/views/modules/zhuangxiu/list'
    import zufangfangyuan from '@/views/modules/zufangfangyuan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import huxing from '@/views/modules/huxing/list'
    import zufangyuyue from '@/views/modules/zufangyuyue/list'
    import fangdong from '@/views/modules/fangdong/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/fangyuan',
        name: '房源信息',
        component: fangyuan
      }
      ,{
	path: '/zufanghetong',
        name: '租房合同',
        component: zufanghetong
      }
      ,{
	path: '/news',
        name: '行业新闻',
        component: news
      }
      ,{
	path: '/zhuangxiu',
        name: '装修',
        component: zhuangxiu
      }
      ,{
	path: '/zufangfangyuan',
        name: '租房房源',
        component: zufangfangyuan
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/huxing',
        name: '户型',
        component: huxing
      }
      ,{
	path: '/zufangyuyue',
        name: '租房预约',
        component: zufangyuyue
      }
      ,{
	path: '/fangdong',
        name: '房东',
        component: fangdong
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
