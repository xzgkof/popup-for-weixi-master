// pages/component/popUp/popUp.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  properties: {
    isShowPopUp:{
      value: false,
      type: Boolean
    },
    isShowFooter:{
      value: true,
      type: Boolean
    },
    isShowShadow:{
      value:true,
      type:Boolean
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    prevent(){
      return;
    },
    clickCancel(){
      this.triggerEvent('closepopup', {confirm:false});
    },
    clickSure() {
      this.triggerEvent('closepopup', { confirm: true });
    },
  }
})
