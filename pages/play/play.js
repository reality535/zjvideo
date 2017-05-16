//获取应用实例
var api = require('../../utils/api.js')
var app = getApp()
Page({
  data: {
    name:'视频1',
    video_detail:{},
    hotList: [
      {
        pic: '../images/videocard-dim.png',
        title: '玻璃棧道',
        desc: '22W人去過'
      }, {
        pic: '../images/videocard-dim.png',
        title: '玻璃棧道',
        desc: '22W人去過'
      }, {
        pic: '../images/videocard-dim.png',
        title: '玻璃棧道',
        desc: '22W人去過'
      }, {
        pic: '../images/videocard-dim.png',
        title: '玻璃棧道',
        desc: '22W人去過'
      }, {
        pic: '../images/videocard-dim.png',
        title: '玻璃棧道',
        desc: '22W人去過'
      }
    ]
  },


  onLoad: function (options) {
    console.log(options);
    if(options){
      this.setData({
        id: options.id
      });
      console.log(this.data.id)
      this.loadVideoDetail(this.data.id);
    }
  },


  onReady: function () {
    wx.setNavigationBarTitle({
      title: this.data.name
    })
  },

  loadVideoDetail: function (id) {
    api.get(api.VIDEO_CONTENT + id)
      .then(res => {
        console.log(res);
        this.setData({
          video_detail: res.data
        });
        console.log(this.data.video_detail);
      })
  }

})