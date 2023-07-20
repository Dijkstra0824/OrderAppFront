const WXAPI = require('apifm-wxapi')
const APP = getApp()
Page({
  onLoad: function (options) {
    this.noticeDetail(options.id)
  },
  async noticeDetail(id) {
    const res = await WXAPI.noticeDetail(id)
    if (res.success == true) {
      this.setData({
        noticeDetail: res.data
      })
    }
  },
})