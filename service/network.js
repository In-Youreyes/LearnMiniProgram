const api_url = 'http://api.jsplusplus.com/';

export default (options) => {
  return new Promise((resolve, reject) => {
    var opt = options || {};
    wx.request({
      url: api_url + opt.url,
      method: (opt.methods || 'GET').toUpperCase(),
      dataType: opt.dataType || 'json',
      data: opt.data || null,
      //简写success、fail
      success: resolve,
      fail: reject,
      complete(res) {

      }
    });
  })
}

// export default (options) => {
//   return new Promise((resolve, reject) => {
//     var opt = options || {};
//     wx.request({
//       url: api_url + opt.url,
//       method : (opt.methods || 'GET').toUpperCase(),
//       dataType : opt.dataType || 'json',
//       data : opt.data || null,
//       success(res) {
//         resolve(res);
//       },
//       fail (err) {
//         reject(err);
//       },
//       complete () { 

//       }
//     });
//   })
// }