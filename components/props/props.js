// components/props/props.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String, //这种方式没有默认值
    content: {
      type: String,
      value: "默认显示内容",
      observer(newVal, oldVal) {
        console.log('新的值：'+newVal, "， 默认值" + oldVal);
      }
    }
  },
  externalClasses: ['titleclass'],
})
