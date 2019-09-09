// components/comp-event/comp-event.js
Component({
  methods: {
    handleIncrement() {
      //发出事件 自定义事件名， 额外数据， 触发选项(忽略)
      // 触发选项：
        // bubbles事件是否冒泡
        // composed事件是否可以穿越组件边界，为false时，事件将只能在引用组件的节点树上触发，不进入其他任何组件内部
        // capturePhase事件是否拥有捕获阶段
      this.triggerEvent('increment', {name: 'chen', age: 18}, {});
      // this.triggerEvent('customevent', {}, { bubbles: true });//会冒泡
      // this.triggerEvent('customevent', {}, { bubbles: true, composed: true });//会捕获

    }
  }
})
