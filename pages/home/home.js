// pages/home/home.js
//getApp()获取App产生的实例对象
// const app = getApp();
// const name = app.globalData.name;
// const age = app.globalData.age;
// console.log(name, age);

// 注册页面 - 每个页面都有自己的生命周期
Page({

  /************2.初始化数据****************************/
  data: {
    message: 'message',
    list: []
  },


  /************3.监听WXML页面中相关事件*****************/
  handleUserInfo(event) {
    console.log(event);
  },
  handleViewClick() {
    console.log('message is clicked');
  },


  /************4.监听其他事件**************************/
  //监听页面滚动
  onPageScroll(obj) {
    console.log(obj); //scrollTop
  },
  //监听页面滚动到底部
  onReachBottom() {
    console.log('页面滚动到底部');
  },
  //监听下拉刷新
  onPullDownRefresh() {
    console.log('下拉刷新'); //打开刷新"enablePullDownRefresh":true
  },


  /************1.监听页面生命周期函数*******************/
  //页面被加载进来
  onLoad() {
    console.log('onLoad');
    console.log(this); //当前Page对象
    var $this = this;
    wx.request({
      //
      url: 'http://api.jsplusplus.com/juhe/getNewsList',
      success(res) {
        const data = res.data.result.data;
        console.log(res, data, this);
        $this.setData({
          list: data
        });
      }
    })
  },

  //页面显示出来时
  onShow() {
    console.log('onShow');
  },

  //页面初次渲染完成时
  onReady() {
    console.log('onReady');
  },

  //页面被隐藏时
  onHide() {
    console.log('onHide');
  },

  //页面被卸载时
  onUnload() {
    console.log('onUnload');
  }
})