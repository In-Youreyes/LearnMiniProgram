// pages/home/home.js
Page({
  data: {
    counter: 0,
    isShow: true
  },
  handleIncrement(ev) {
    this.setData({
      counter: this.data.counter + 1
    });
    console.log(ev.detail.name, ev.detail.age, ev);
  },
  handleTabClick(ev) {
    console.log(ev, '点击了' + ev.detail.index + ',' + ev.detail.title);
  },
  handleIncrementComp() {
    // 修改select组件中的counter
    const sel_cls = this.selectComponent('.sel-cls');
    const sel_id = this.selectComponent('#sel-id');
    //通过setData修改组件中内容
    // sel_cls.setData({
    //   counter: sel_cls.data.counter + 20
    // });
    // sel_id.setData({
    //   counter: sel_id.data.counter + 20
    // });
    //通过方法对数据进行修改
    sel_cls.incrementCounter(10);
  },
  handleChangeShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
})