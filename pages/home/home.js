// pages/home/home.js
Page({
//小程序登录

/*
// 弹窗类API
  handleShowToast() {
    wx.showToast({
      title: '你好', //内容
      duration: 2500, //延时
      icon: 'loading', //图标
      image: '', //自定义图标
      mask: 'true', //蒙版
      success() {
        console.log('展示弹窗成功'); //立马执行，不需要等待延时    
      },
      fail() {
        console.log('展示弹窗失败'); //立马执行，不需要等待延时
      },
      complete() {
        console.log('展示弹窗完成'); //立马执行，不需要等待延时
      }
    })
  },
  handleShowModel() {
    wx.showModal({
      title: '标题',
      content: 'showModel内容',
      showCancel: true, //取消按钮
      cancelText: '退出', //取消按钮的文本
      cancelColor: 'red', //取消文本颜色
      // confirmText: '确定', //确认按钮的文本
      confirmColor: 'green',
      success(res) {
        console.log(res);
        if (res.cancel) {
          console.log('用户点击了取消按钮');
        }
        if (res.confirm) {
          console.log('用户点击了确定按钮');
        }
      },
      fail(err) {
        console.log(err);
      },
      complete() {} //接口调用结束的回调
    })
  },
  // wx.showLoading 和 wx.showToast 同时只能显示一个
  // wx.showLoading 应与 wx.hideLoading 配对使用
  handleShowLoading() {
    //网络请求时使用，在请求完成后调用hideLoading
    wx.showLoading({
      title: '加载中',
      mask: true,
      success(res) {}, //接口调用成功的回调
      fail(err) {}, //接口调用失败的回调
      complete() {} //接口调用结束的回调
    });
    setTimeout(() => {
      //必须手动调用hideLoading才会让loading消失
      wx.hideLoading();
    }, 1000);
  },
  handleShowAction() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'red',
      success(res) {
        console.log(res);
        switch (res.tapIndex) {
          case 0:
            console.log('item 1');
            break;
          case 1:
            console.log('item 2');
            break;
          default:
            console.lo('其他');
            break;
        }
      },
      fail() {},
      complete() {}
    })
  },

  onShareAppMessage: function(otions) {
    return {
      title: "你好，elizabeth_olsen！",
      path: '/pages/about/about',//分享页
      //默认首页的截图。可以传本地图片，也可以传网络图片
      imageUrl: '/assets/images/elizabeth_olsen.jpg',
    }
  }
*/
})