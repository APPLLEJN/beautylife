//logs.js
const util = require('../../utils/util.js')
const { Sprite, Label, Scene } = require('@spritejs/wxapp');

const app = getApp()
Page({
  data: {
    bg: '',
    height: ''
  },
  onLoad: function () {
    this.setData({
      bg: app.globalData.imageSrc
    })
    // const scene = new Scene();
    // scene.preload(['../../images/zhanglangmove.png']);
    // const layer = scene.layer('bglayer');
    // console.log(layer, 'layerlayer')
    // const bg = new Sprite();
    // const center = [1, 1];
    // bg.attr({
    //   anchor: 0,
    //   size: [500, 500],
    //   pos: center,
    //   bgcolor: 'red',
    //   borderRadius: 0,
    // });
    // layer.append(bg);
    // this.layer = layer
  },
  tap: function(event) {
    const {x, y} = event.touches[0]
    if(this.isShit) this.throwShit(x, y)
  },
  toRpx: function(px) {
    var systemInfo = wx.getSystemInfoSync();
    return px * 750/systemInfo.windowWidth
  },
  imageLoad: function () {
    const query = wx.createSelectorQuery();
    const self = this
    query.select('#bg').boundingClientRect().exec(([rect]) => {
      if(rect) {
        this.setData({
          width: rect.width,
          height: rect.height
        });
        const scene = new Scene(rect.width, rect.height);
        const layer = scene.layer('bglayer');
        self.layer = layer
        console.log(self.layer.resolution)
      }
    });
  },
  addShit: function() {
    this.flag = true;
    this.isShit = true;
  },
  throwShit: function (x_e, y_e) {
    const shit = new Sprite('../../images/shit.png');
    const { width, height } = this.data
    const posArray = [[-100, -100], [this.toRpx(width), -100], [-100, this.toRpx(height)], [this.toRpx(width) + 100, this.toRpx(height) + 100]]
    var index = Math.floor((Math.random()*posArray.length));
    const [x, y] = posArray[index] 
    shit.attr({
      anchor: [0.5, 0.5],
      pos: posArray[index],
      size: [80, 80],
      zIndex: 200,
    });
    this.layer.append(shit);
    shit.animate([
      {x, y, scale: 1},
      {x: this.toRpx(x_e), y: this.toRpx(y_e), scale: 2, textures: '../../images/shitend.png', opacity: 0.8},
    ], {
      delay: 100,
      duration: 1000,
      easing: 'ease-in',
      fill: 'forwards',
    });
  },
  addChong: function() {
    console.log('---')
    const bg = new Sprite('../../images/zhanglangmove.png');
    const center = [1, 1];
    bg.attr({
      anchor: 0,
      size: [500, 500],
      pos: center,
      borderRadius: 0,
    });
    this.layer.append(bg);
  }
})
