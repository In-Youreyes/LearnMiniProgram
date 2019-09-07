// pages/wxml/wxml.js
Page({

  //页面的初始数据
  data: {
    message: '你好,小程序!',
    firstName: 'kobe',
    lastName: 'bryant',
    age: 20,
    time: new Date().toLocaleTimeString(),
    nowTime: Date(),
    nowTime1: new Date().toString(),
    nowTime2: new Date().toDateString(),
    nowTime3: new Date().toLocaleString(),
    nowTime4: new Date().toLocaleDateString(),
    nowTime5: new Date().getDate(),
    nowTime6: new Date().getDay(),
    nowTime7: new Date().getTime(),

    isActive: false,
    isShow: true,
    score: 45,

    movies: ['记忆裂痕', '盗梦空间', '恐怖游轮', '蝴蝶效应'],
    numbers: [
      [101, 102, 103],
      [201, 202, 203],
      [301, 302, 303]
    ],
    letters: ['a', 'b', 'c', 'd']
  },
  onLoad() {
    // setInterval(()=> {
    //   this.setData({
    //     time: new Date().toLocaleTimeString()
    //   });
    // }, 1000);
  },
  handleSwitchColor() {
    //小程序无法进行DOM操作
    this.setData({
      isActive: !this.data.isActive
    });
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    });
  },
  handleIncrement() {
    this.setData({
      score: this.data.score + 6 > 100 ?
                    100 : this.data.score + 6
    });
  }
})