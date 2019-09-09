// components/tab-control/tab-control.js
Component({
  // 配置项
  options: {
    styleIsolation: "apply-shared" //不隔离样式
  },
  //组件的属性列表
  properties: {
    titles: {
      type: Array,
      value: []
    }
  },
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItemClick(ev) {
      //获取索引
      const index = ev.currentTarget.dataset.index;
      console.log(ev, index,this.data);
      //修改currentIndex
      this.setData({
        currentIndex: index
      })
      //通知页面内部的点击事件
      this.triggerEvent('itemclick', {
        index, title: 
        this.properties.titles[index]
      }, [])
    }
  }
})