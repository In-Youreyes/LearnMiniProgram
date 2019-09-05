App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log(options);
    // 获取用户信息
    wx.getUserInfo({
      // 异步调用,数据拿到之后再进行回调的
      success: function (res) {
        console.log(res);
      }      
    });

    //onError演示
    // setTimeout(() => {
    //   const err = new Error();
    //   throw err;
    // }, 1000);
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {
    console.log(options);

    //1.判断小程序入口场景
    switch (options.scene) {
      case 1001:
        console.log('我的小程序');
        break;
      case 1011:
        console.log('扫描二维码');
        break;
      default:
        console.log('其他的途径');
        break;
    }

    //2.获取用户的信息，并且获取到用户信息之后，将用户的信息传递给服务器
    //不再支持。开发版无法弹出授权询问框，默认调用失败,正式版暂不受影响
    // wx.getUserInfo({
    //   success: function (res) {
    //     console.log(res);
    //   }
    // });
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {
    console.log('界面被隐藏');
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {
    console.log('小程序中发生错误时执行');
  },

  /**
   * 定义全局数据
   */
  globalData: {
    name: 'chen',
    age: 18
  }
})