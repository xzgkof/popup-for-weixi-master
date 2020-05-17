# popup-for-weixin
微信小程序 自定义可交互弹窗

效果:
![Alt text](https://github.com/sajiang/popup-for-weixin/blob/master/%E6%95%88%E6%9E%9C%E5%9B%BE/QQ%E6%88%AA%E5%9B%BE20180626122727.jpg?raw=true)
![Alt text](https://github.com/sajiang/popup-for-weixin/blob/master/%E6%95%88%E6%9E%9C%E5%9B%BE/QQ%E6%88%AA%E5%9B%BE20180626122826.jpg?raw=true)

使用步骤：
1.引入component/popUp

2.is-show-pop-up="{{isShowModal}}"来控制popUp的弹出和关闭

3.bind:closepopup="modalClosed"方法

```
modalClosed(e){
  if (e.detail.confirm){
    //用户点击确定
  }else{
    //用户点击取消
  }
}
```
