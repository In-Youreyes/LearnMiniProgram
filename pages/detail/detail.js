// pages/detail/detail.js
Page({
  //生命周期函数--监听页面加载
  onLoad: function (options) {
    console.log(options)
  },

  // 生命周期函数--监听页面卸载
  onUnload: function () {
    //获取首页页面对象
    // getCurrentPage当前栈里的所有页面
    const pages = getCurrentPages();
    const home = pages[pages.length - 2];
    // console.log(pages, home, pages[1], pages[2]);//[p1,p2],home,home,undefined

    //调用页面对象的setData
    home.setData({
      title: 'from detail'
    });
  },

  handleBackHome() {
    wx.navigateBack({
      delta: 1
    })
  }
})