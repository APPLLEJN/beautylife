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
  throwShit: async function (x_e, y_e) {
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
    await shit.animate([
      {x, y, scale: 1},
      {x: this.toRpx(x_e), y: this.toRpx(y_e), scale: 1.5},
    ], {
      delay: 100,
      duration: 800,
      easing: 'ease-in',
      fill: 'forwards',
    }).finished;
    this.layer.remove(shit)
    const shit2 = new Sprite('../../images/shitend.png');
    shit2.attr({
      anchor: [0, 0],
      pos: [this.toRpx(x_e) - 50, this.toRpx(y_e) - 50],
      size: [100, 100],
      zIndex: 200,
    });
    this.layer.append(shit2);
    const radom = Math.abs(Math.random() - 0.5)
    shit2.transition(0.8).attr({
      scale: [1.0, 1 + radom],
      opacity: radom + 0.6,
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
