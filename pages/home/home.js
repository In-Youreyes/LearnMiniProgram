// pages/home/home.js
Page({
  data: {
    title: 'home'
  },
  handlePushDetail() {
    // open-type = 'navigate'
    wx.navigateTo({
      url: '/pages/detail/detail?title=nihao',
    });
  },
  handlePushDetail1() {
    // open-type = 'redirect'
    wx.redirectTo({
      url: '/pages/detail/detail',
    });
  },
  handlePushAbout() {
    // open-type = 'switchTab'
    wx.switchTab({
      url: '/pages/about/about',
    });
  },
  handlePushDetail2() {
    // open-type = 'reLaunch'
    wx.reLaunch({
      url: '/pages/detail/detail',
    });
  }
})