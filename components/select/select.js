// components/select/select.js
Component({
  data: {
    counter: 0
  },
  methods: {
    incrementCounter(num) {
      this.setData({
        counter: this.data.counter + num
      })
    }
  }
})
