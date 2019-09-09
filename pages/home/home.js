// pages/home/home.js
import request from '../../service/network.js';
Page({

  //页面的初始数据
  data: {

  },

  //生命周期函数--监听页面加载
  onLoad: function (options) {
    // 1.原生发送网络请求
    this.get_data_origin();
    
    // 2.使用封装的request发送网络请求
    // 使用Promise最大的好处就是防止出现回调地狱
    request({
      url: "juhe/getNewsList",
      method: 'post',
    }).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  },

  //原生发送请求
  get_data_origin() {
    // 1.发送简单的get请求
    // wx.request({
    //   url: 'http://api.jsplusplus.com/juhe/getNewsList',
    //   success(res) {
    //     console.log(res);
    //   }
    // });

    // // 2.get请求,并且携带参数
    // wx.request({
    //   url: 'http://api.jsplusplus.com/juhe/getNewsList',
    //   data: {
    //     field
    //   },
    //   success(res) {
    //     console.log(res);
    //   }
    // });

    // //3.post请求,并且携带参数
    // var field = 'tiyu'
    // wx.request({
    //   url: 'http://api.jsplusplus.com/juhe/getNewsList',
    //   method: 'post',//请求方式必须写
    //   dataType: 'json',//默认，可不写
    //   header: {//必须设置请求头，才能请求非默认数据
    //     "Content-Type": "application/x-www-form-urlencoded"
    //   },
    //   data: {
    //     field
    //   },
    //   success(res) {
    //     console.log(res);
    //   },
    // });
    // wx.request({
    //   url: 'http://httpbin.org/post',
    //   method: 'post',
    //   data: {
    //     name: 'chen',
    //     age: 18
    //   },
    //   success(res) {
    //     console.log(res);
    //   },
    //   fail(err) {
    //     console.log(err);
    //   }
    // });
  }
})