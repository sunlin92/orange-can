import {
  DBPost
} from '../../data/db-cloud.js'

Page({
  data: {},

  async onLoad() {
    const posts = await DBPost.getAllPostData()
    this.setData({
     postList: posts
    })
   },

  onTapToDetail(event) {
    var postId = event.currentTarget.dataset.postId
    console.log(postId)
    wx.navigateTo({
      url: 'post-detail/post-detail?id=' + postId,
    })
  },

  onSwiperTap: function(event) {
    var postId = event.target.dataset.postId;
    wx.navigateTo({
      url: "post-detail/post-detail?id=" + postId
    })
  },

  onShareAppMessage(res) {

  }
})