App({
  onLaunch: function() {
   this._initCloud()
  },
 
  _initCloud() {
   wx.cloud.init({
    // 云开发环境id从云开发控制台中获取
    env: 'lin-hy5l0'
   })
  },
     
  baseUrl: 'http://t.yushu.im/',
  appKey: 'test'
 })