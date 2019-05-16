//index.js
//获取应用实例
var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  onTap:function(){
    wx.navigateTo({
      url: '../posts/post',
      success:function(){},
      fail:function(){},
      complete:function(){}
    })
    // wx.redirectTo({
    //   跳转另一页面 无返回
    //   url: '../posts/post'
    // })
  },
  onUnload:function(){

  },
  onHide:function(){

  },
  data: {
  },
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000
  },
  changeIndicatorDots: function (e) {

  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad: function (options) {
    //生命周期函数--监听页面加载
    this.loadMove();
  },
  loadMove(){
    let thispage = this;
    // wx.request({
    //   url: '',
    //   method:'GET',
    //   header: {'content-type':'json'},
    //   success:function(res){
    //     console.log(res);
    //   }
    // })
  }
})