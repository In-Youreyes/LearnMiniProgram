const TOKEN = 'token';
const api_url = "http://123.207.32.32:3000/";
const request = (options) => {
  return new Promise((resolve, reject) => {
    var opt = options || {};
    wx.request({
      url: api_url + opt.url,
      method: (opt.method || 'GET').toUpperCase(),
      header: opt.header || 'application/json',
      dataType: opt.dataType || 'json',
      data: opt.data || {},
      success: resolve,
      fail: reject,
      complete() {}
    });
  })
}
App({
  globalData: {
    token: ''
  },
  // 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  onLaunch: function() {
    //从缓存中取出token
    const token = wx.getStorageSync(TOKEN)

    //判断token是否有值
    //已有token,验证token是否过期
    if (token && token.length !== 0) {
      this.check_token(token); //验证token是否过期

    //没有token，进行登录操作
    } else {
      this.login();
    }
  },

  //验证token函数
  check_token(token) {
    console.log('验证操作');
    request({
      url: "auth",
      method: 'post',
      header: {
        token
      }
    }).then((res) => {
      if (!res.data.errCode) {
        console.log('有效token', token);
        this.globalData.token = token;
      } else {
        console.log('无效token，重新登录', token);
        this.login();
      }
    }).catch((err) => {
      console.log(err);
    });
  },

  //登录函数
  login() {
    console.log('登录操作');
    var that = this;

    wx.login({
      //code只有5分钟有效期
      success: function(res) {
        //1，获取code
        const code = res.code;

        //2.将code发送给本地服务器
        request({
          url: "http://123.207.32.32:3000/login",
          method: 'post',
          data: {
            code
          },
        }).then(res => {
          //1.取出token
          const token = res.data.token;

          //2.将token保存到globalData中
          that.globalData.token = token;
          console.log(that.globalData.token);

          //3.进行本地存储
          wx.setStorageSync(TOKEN, token);
        }).catch(err => {
          console.log(err);
        });
      }
    });
  },
});