const APP = getApp()
const WXAPI = require('apifm-wxapi')

Page({
  onLoad: function () {
    this.noticeLastOne()
  },
  async noticeLastOne() {
    const res = await WXAPI.noticeLastOne()
    if (res.code == 0) {
      this.setData({
        noticeLastOne: res.data
      })
    }
  },
})