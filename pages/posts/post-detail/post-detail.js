// pages/posts/post-detail/post-detail.js
var postsData = require('../../../data/posts-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var postId = options.id;
    var postData = postsData.postList[postId];
    //如果在onload方法中，不是异步的去执行一个数据绑定
    //则不需要使用this.setData 只需要对this.data赋值即可实现数据绑定
    this.setData({
      postContent: postData
    })
    //本地缓存 如果用户不主动清除缓存 一直存在
    //缓存修改 键名和要修改的键名一致 可以实现缓存的更新
    wx.setStorageSync('key', {
      game: "7777",
      developer: "七酱"
    })
  },
  onCollectionTap: function(event) {
    //如何在脚本里获取缓存的变量 缓存的上限最大不能超过10MB
    //小程序 缓存四类操作 八种方法 同时具备同步异步
    //获取缓存
    var game = wx.getStorageSync('key');
    console.log(game);
  },
  onShareTap: function(event){
    //清除缓存
    // wx.removeStorageSync('key');
    //清除所有缓存
    wx.clearStorageSync();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})