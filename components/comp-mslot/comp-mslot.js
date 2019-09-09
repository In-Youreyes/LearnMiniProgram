// components/comp-mslot/comp-mslot.js
Component({
  options: {
    multipleSlots: true
  },

  //组件中监听生命周期函数
  //1.所在页生命周期
  pageLifetimes: {
    show() {
      console.log('监听组件所在页面显示出来时');
    }, 
    hide() {
      console.log('监听组件所在页面隐藏起来时');
    },
    resize() { //很少用
      console.log('监听页面尺寸改变');
    }
  },
  //2.组件本身生命周期
  lifetimes: {
    created() {
      console.log('组件被创建出来');
    },
    attached() {
      console.log('组件被添加到页面或其他组件');
    },
    ready() {
      console.log('组件被渲染出来');
    },
    moved() {
      console.log('组件被移动到另一个节点');
    },
    detached() {
      console.log('组件被移除掉');
    }
  }
})
