//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isShowModal: false,
  },
  onLoad: function () {
   
    
  },
  showModal(){
    this.setData({
      isShowModal: true
    });
  },
  modalClosed(e){
    this.setData({
      isShowModal: false
    });
    if (e.detail.confirm) {
      //用户点击确定
      console.log("用户点击确定");
    } else {
      //用户点击取消
      console.log("用户点击取消");
    }
  }
})
