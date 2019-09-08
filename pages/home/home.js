// pages/home/home.js
Page({
  data: {
    titles: ['衣服', '裤子', '鞋子', '帽子']
  },

  handleClick(event) {
    console.log(event);
  },
  handleTouchStart(event) {
    console.log('handleTouchStart:开始触摸');
  },
  handleTouchNove(event) {
    console.log('handleTouchNove：触摸后移动');
  },
  handleTouchEnd(event) {
    console.log('handleTouchEnd：触摸结束');
  },
  handleTap(event) {
    console.log('handleTap：触摸立刻离开');
  },
  handleLongpress(event) {
    console.log('handleLongpress：触摸长时间');
  },
  handleEvent(event) {
    console.log('--------------',event);
  },
  handleEventEnd(event) {
    console.log('+++++++++++++++',event);
  },
  
  // 源组件与当前组件的点击事件
  // handleInner(event) {
  //   console.log(event.target, event.currentTarget);
  // },
  handleOuter(event) {
    console.log(event.target, event.currentTarget);
  },

  //点击事件获取内容-dataset
  handleItemClick(event) {
    console.log(event);
    //title - index
    const dataset = event.currentTarget.dataset;
    const title = dataset.item;
    const index = dataset.index;
    console.log(title, index);
  },

  //事件冒泡和事件捕获
  handleCapture1() {
    console.log("handleCapture1");
  },
  handleBindView1() {
    console.log("handleBindView1");
  },
  handleCapture2() {
    console.log("handleCapture2");
  },
  handleBindView2() {
    console.log("handleBindView2");
  },
  handleCapture3() {
    console.log("handleCapture3");
  },
  handleBindView3() {
    console.log("handleBindView3");
  },
})