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
    import news from '@/views/modules/news/list'
    import discusssheyinggenpai from '@/views/modules/discusssheyinggenpai/list'
    import sheyingshi from '@/views/modules/sheyingshi/list'
    import leibie from '@/views/modules/leibie/list'
    import genpailiucheng from '@/views/modules/genpailiucheng/list'
    import zhoubianshangpin from '@/views/modules/zhoubianshangpin/list'
    import chengpinxinxi from '@/views/modules/chengpinxinxi/list'
    import storeup from '@/views/modules/storeup/list'
    import pinglunxinxi from '@/views/modules/pinglunxinxi/list'
    import sheyinggenpai from '@/views/modules/sheyinggenpai/list'
    import discusszhoubianshangpin from '@/views/modules/discusszhoubianshangpin/list'
    import shangpindingdan from '@/views/modules/shangpindingdan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import genpaiyuyue from '@/views/modules/genpaiyuyue/list'
    import shangpinleixing from '@/views/modules/shangpinleixing/list'
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
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/discusssheyinggenpai',
        name: '摄影跟拍评论',
        component: discusssheyinggenpai
      }
      ,{
	path: '/sheyingshi',
        name: '摄影师',
        component: sheyingshi
      }
      ,{
	path: '/leibie',
        name: '类别',
        component: leibie
      }
      ,{
	path: '/genpailiucheng',
        name: '跟拍流程',
        component: genpailiucheng
      }
      ,{
	path: '/zhoubianshangpin',
        name: '周边商品',
        component: zhoubianshangpin
      }
      ,{
	path: '/chengpinxinxi',
        name: '成品信息',
        component: chengpinxinxi
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/pinglunxinxi',
        name: '评论信息',
        component: pinglunxinxi
      }
      ,{
	path: '/sheyinggenpai',
        name: '摄影跟拍',
        component: sheyinggenpai
      }
      ,{
	path: '/discusszhoubianshangpin',
        name: '周边商品评论',
        component: discusszhoubianshangpin
      }
      ,{
	path: '/shangpindingdan',
        name: '商品订单',
        component: shangpindingdan
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/genpaiyuyue',
        name: '跟拍预约',
        component: genpaiyuyue
      }
      ,{
	path: '/shangpinleixing',
        name: '商品类型',
        component: shangpinleixing
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

export default router;
