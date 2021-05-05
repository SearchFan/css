const app = getApp()

Page({
  data: {
    // is:1
  },
  onLoad() {
    
  },

  toMenu(){
    this.setData({
      is:1
    })
  },

  hide(){
    this.setData({
      is:0
    })
  }
})
