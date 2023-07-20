const APP = getApp()
const WXAPI = require('apifm-wxapi')

Page({
  data: {
    noticeLastOne: undefined
  },  
  onLoad: function (e) {
    this.noticeLastOne()
  },
  async noticeLastOne() {
    const res = await WXAPI.noticeLastOne()
    if (res.success == true) {
      this.setData({
        noticeLastOne: res.data
      })
    }
  },
  goNotice(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/notice/detail?id=' + id,
    })
  },
})