import Vue from 'vue'

import App from './App'
import '../static/weui/weui.css'
import '../static/weui/zanui.wxss'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()



export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [ 
      '^pages/index/main',
      'pages/classification/main',
      'pages/shopping/main',
      'pages/me/main',
      'pages/order_my/main',
      'pages/detail/main',
      'pages/new_order/main',
      'pages/new_success/main',
      'pages/address_select/main',
      'pages/address/main',
      'pages/address_admin/main',
      'pages/comment/main',
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '派普肽商城',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#272636",
      selectedColor: "#272636",
      backgroundColor: "#fff",
      borderStyle: "#a8a8a8",
      list: [
        {
          pagePath: "pages/index/main",
          iconPath: "static/img/main.png",
          selectedIconPath: "static/img/main-select.png",
          color:"white",
          text: "首页"
        },
        {
          pagePath: "pages/classification/main",
          iconPath: "static/img/class.png",
          selectedIconPath: "static/img/class-select.png",
          text: "分类"
        },
        {
          pagePath: "pages/shopping/main",
          iconPath: "static/img/shopping.png",
          selectedIconPath: "static/img/shopping-select.png",
          text: "购物车"
        },
        {
          pagePath: "pages/me/main",
          iconPath: "static/img/me.png",
          selectedIconPath: "static/img/me-select.png",
          text: "我的"
        }
      ]
    }
  }
}
