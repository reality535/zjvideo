//index.js
//获取应用实例
var api = require('../../utils/api.js')
var app = getApp()
Page({
  data: {
    currentNavbar:'0',
    navbar: ['全部', '影评', '美食'],
    list: [],
    latest_id: 42,
    systemInfo: {},
    name:"jfjfdkfjkdfjk"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    this.loadVideo();
    // this.pullDownRefresh();
    
  },
  onShow: function (e) {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    });
    // 获取本机系统信息
    app.getSystemInfo(function (systemInfo) {
      console.log(systemInfo);
      //更新数据
      that.setData({
        systemInfo: systemInfo
      })
    });
  },

  swichNav(e){
    this.setData({
      currentNavbar: e.currentTarget.dataset.idx
    })
  },
  // 加载视频数据
  loadVideo:function(){
       api.get(api.VIDEO_LIST)
        .then(res => {
          if(res.data.length){
            this.setData({
              list: this.data.list.concat(res.data),
            });
            console.log(this.data.list);
          }
        })
  },
  /**
   * 下拉刷新
   */
  // pullDownRefresh: function (e) {
  //   api.get(api.VIDEO_LIST + this.data.latest_id)
  //     .then(res => {

  //       this.setData({
  //         list: this.data.list.concat(res),

  //       });
  //       console.log(this.data.list);
        
  //     })

  // },

  // pullUpLoad: function (e) {
  //   console.log("上拉加载！！！")
  // }
  onPullDownRefresh: function () {
    console.log("????????");

  },

  onReachBottom: function () {
    console.log("!!!!!!!!");
  }

})
