import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import fangdongList from '../pages/fangdong/list'
import fangdongDetail from '../pages/fangdong/detail'
import fangdongAdd from '../pages/fangdong/add'
import fangyuanList from '../pages/fangyuan/list'
import fangyuanDetail from '../pages/fangyuan/detail'
import fangyuanAdd from '../pages/fangyuan/add'
import huxingList from '../pages/huxing/list'
import huxingDetail from '../pages/huxing/detail'
import huxingAdd from '../pages/huxing/add'
import zhuangxiuList from '../pages/zhuangxiu/list'
import zhuangxiuDetail from '../pages/zhuangxiu/detail'
import zhuangxiuAdd from '../pages/zhuangxiu/add'
import zufangfangyuanList from '../pages/zufangfangyuan/list'
import zufangfangyuanDetail from '../pages/zufangfangyuan/detail'
import zufangfangyuanAdd from '../pages/zufangfangyuan/add'
import zufangyuyueList from '../pages/zufangyuyue/list'
import zufangyuyueDetail from '../pages/zufangyuyue/detail'
import zufangyuyueAdd from '../pages/zufangyuyue/add'
import zufanghetongList from '../pages/zufanghetong/list'
import zufanghetongDetail from '../pages/zufanghetong/detail'
import zufanghetongAdd from '../pages/zufanghetong/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'fangdong',
					component: fangdongList
				},
				{
					path: 'fangdongDetail',
					component: fangdongDetail
				},
				{
					path: 'fangdongAdd',
					component: fangdongAdd
				},
				{
					path: 'fangyuan',
					component: fangyuanList
				},
				{
					path: 'fangyuanDetail',
					component: fangyuanDetail
				},
				{
					path: 'fangyuanAdd',
					component: fangyuanAdd
				},
				{
					path: 'huxing',
					component: huxingList
				},
				{
					path: 'huxingDetail',
					component: huxingDetail
				},
				{
					path: 'huxingAdd',
					component: huxingAdd
				},
				{
					path: 'zhuangxiu',
					component: zhuangxiuList
				},
				{
					path: 'zhuangxiuDetail',
					component: zhuangxiuDetail
				},
				{
					path: 'zhuangxiuAdd',
					component: zhuangxiuAdd
				},
				{
					path: 'zufangfangyuan',
					component: zufangfangyuanList
				},
				{
					path: 'zufangfangyuanDetail',
					component: zufangfangyuanDetail
				},
				{
					path: 'zufangfangyuanAdd',
					component: zufangfangyuanAdd
				},
				{
					path: 'zufangyuyue',
					component: zufangyuyueList
				},
				{
					path: 'zufangyuyueDetail',
					component: zufangyuyueDetail
				},
				{
					path: 'zufangyuyueAdd',
					component: zufangyuyueAdd
				},
				{
					path: 'zufanghetong',
					component: zufanghetongList
				},
				{
					path: 'zufanghetongDetail',
					component: zufanghetongDetail
				},
				{
					path: 'zufanghetongAdd',
					component: zufanghetongAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
