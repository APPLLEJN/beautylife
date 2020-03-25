module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { __MODS__[modId].m.exports.__proto__ = m.exports.__proto__; Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; var desp = Object.getOwnPropertyDescriptor(m.exports, k); if(desp && desp.configurable) Object.defineProperty(m.exports, k, { set: function(val) { __MODS__[modId].m.exports[k] = val; }, get: function() { return __MODS__[modId].m.exports[k]; } }); }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1584500598088, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timeline = exports.Effects = exports.Easings = exports.Animator = undefined;

var _spriteTimeline = require('sprite-timeline');

var _spriteTimeline2 = _interopRequireDefault(_spriteTimeline);

var _effect = require('./effect');

var _effect2 = _interopRequireDefault(_effect);

var _easing = require('./easing');

var _animator = require('./animator');

var _animator2 = _interopRequireDefault(_animator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Animator = _animator2.default;
exports.Easings = _easing.Easings;
exports.Effects = _effect2.default;
exports.Timeline = _spriteTimeline2.default;
}, function(modId) {var map = {"./effect":1584500598089,"./easing":1584500598090,"./animator":1584500598091}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500598089, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  // s - startFrame, e - endFrame
  default: function _default(from, to, p, s, e) {
    if (typeof from === 'number' && typeof to === 'number') {
      return from + (p - s) / (e - s) * (to - from);
    }

    if (p - s > e - p) {
      return to;
    }
    return from;
  }
};
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500598090, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseEasing = exports.Easings = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BezierEasing = require('bezier-easing');
var bezierFuncCache = new _map2.default();

function getBezierEasing() {
  for (var _len = arguments.length, value = Array(_len), _key = 0; _key < _len; _key++) {
    value[_key] = arguments[_key];
  }

  var easing = bezierFuncCache.get(value);
  if (easing) {
    return easing;
  }
  easing = BezierEasing.apply(undefined, value);
  bezierFuncCache.set(value, easing);
  return easing;
}

function getStepsEasing(step) {
  var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'end';

  return function (p, frames) {
    for (var i = 1; i < frames.length; i++) {
      var offset = frames[i].offset;

      if (p <= offset) {
        var start = frames[i - 1].offset,
            end = offset;
        var fp = (p - start) / (end - start),
            d = 1 / step;

        var t = fp / d;
        if (pos === 'end') {
          t = Math.floor(t);
        } else {
          t = Math.ceil(t);
        }

        return d * t * (end - start) + start;
      }
    }
    return 0;
  };
}

function parseEasingStr(easingStr) {
  var pattern = /^cubic-bezier\((.*)\)/,
      matched = easingStr.match(pattern);

  if (matched) {
    var value = matched[1].trim();
    value = value.split(',').map(function (v) {
      return parseFloat(v.trim());
    });
    return getBezierEasing.apply(undefined, (0, _toConsumableArray3.default)(value));
  }

  pattern = /^steps\((.*)\)/;
  matched = easingStr.match(pattern);

  if (matched) {
    var _value = matched[1].trim();
    _value = _value.split(',').map(function (v) {
      return v.trim();
    });

    var _value2 = _value,
        _value3 = (0, _slicedToArray3.default)(_value2, 2),
        step = _value3[0],
        pos = _value3[1];

    return getStepsEasing(parseInt(step, 10), pos);
  }
  return easingStr;
}

var Easings = {
  linear: function linear(p) {
    return p;
  },

  ease: getBezierEasing(0.25, 0.1, 0.25, 1),
  'ease-in': getBezierEasing(0.42, 0, 1, 1),
  'ease-out': getBezierEasing(0, 0, 0.58, 1),
  'ease-in-out': getBezierEasing(0.42, 0, 0.58, 1),
  // 'step-start': function(p, frames){
  //   let ret = 0
  //   for(let i = 0; i < frames.length; i++){
  //     const {offset} = frames[i]
  //     ret = offset
  //     if(p < offset){
  //       break
  //     }
  //   }
  //   return ret
  // },
  // 'step-end': function(p, frames){
  //   let ret = 0
  //   for(let i = 0; i < frames.length; i++){
  //     const {offset} = frames[i]
  //     if(p < offset){
  //       break
  //     }
  //     ret = offset
  //   }
  //   return ret
  // }
  'step-start': getStepsEasing(1, 'start'),
  'step-end': getStepsEasing(1, 'end')
};

function parseEasing(easing) {
  if (typeof easing === 'string') {
    if (!Easings[easing]) {
      easing = parseEasingStr(easing);
    } else {
      // load default Easing
      easing = Easings[easing];
    }
  } else if (easing.type === 'cubic-bezier') {
    easing = getBezierEasing.apply(undefined, (0, _toConsumableArray3.default)(easing.value));
  } else if (easing.type === 'steps') {
    easing = getStepsEasing(easing.step, easing.pos);
  }
  return easing;
}

exports.Easings = Easings;
exports.parseEasing = parseEasing;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500598091, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _spriteTimeline = require('sprite-timeline');

var _spriteTimeline2 = _interopRequireDefault(_spriteTimeline);

var _utils = require('./utils');

var _easing = require('./easing');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _timing = (0, _symbol2.default)('timing'),
    _keyframes = (0, _symbol2.default)('keyframes'),
    _initState = (0, _symbol2.default)('initState'),
    _readyDefer = (0, _symbol2.default)('readyDefer'),
    _finishedDefer = (0, _symbol2.default)('finishedDefer'),
    _effects = (0, _symbol2.default)('effects'),
    _activeReadyTimer = (0, _symbol2.default)('activeReadyTimer'),
    _activeFinishTimer = (0, _symbol2.default)('activeFinishTimer'),
    _removeDefer = (0, _symbol2.default)('removeDefer');

/**
  easing: {
    type: 'cubic-bezier',
    value: [...]
  }
  easing: {
    type: 'steps',
    step: 1,
    pos: 'end'
  }
 */
var defaultTiming = {
  delay: 0,
  endDelay: 0,
  fill: 'auto',
  iterations: 1.0,
  playbackRate: 1.0,
  direction: 'normal',
  easing: 'linear',
  effect: null
};

/**
  animation: play --> delay --> effect --> endDelay
  playState: idle --> pending --> running --> pending --> finished
 */

var _class = function () {
  function _class(initState, keyframes, timing) {
    var _this = this;

    (0, _classCallCheck3.default)(this, _class);

    if (Array.isArray(initState)) {
      var _ref = [initState[0], initState, keyframes];
      // 如果 initState 缺省，默认 keyframes 的第一帧为 initState

      initState = _ref[0];
      keyframes = _ref[1];
      timing = _ref[2];
    }

    if (typeof timing === 'number') {
      timing = { duration: timing };
    }

    this[_timing] = (0, _assign2.default)({}, defaultTiming, timing);
    this[_timing].easing = (0, _easing.parseEasing)(this[_timing].easing);
    this[_keyframes] = (0, _utils.calculateFramesOffset)(keyframes);

    var lastFrame = this[_keyframes][this[_keyframes].length - 1];

    this[_initState] = {}; // 初始状态

    (0, _keys2.default)(lastFrame).forEach(function (key) {
      if (Object.prototype.hasOwnProperty.call(initState, key)) {
        if (key !== 'easing' && key !== 'offset') {
          _this[_initState][key] = initState[key];
        }
      }
    });

    // 补齐参数
    this[_keyframes] = this[_keyframes].map(function (frame) {
      return (0, _assign2.default)({}, _this[_initState], frame);
    });

    if (this[_keyframes][0].offset !== 0) {
      // 要补第一帧
      this[_keyframes].unshift((0, _assign2.default)({}, this[_initState], { offset: 0 }));
    }
    if (lastFrame.offset < 1) {
      // 要补最后一帧
      this[_keyframes].push((0, _assign2.default)({}, lastFrame, { offset: 1 }));
    }

    this[_effects] = {};
    this.timeline = null; // idle, no effect
  }

  (0, _createClass3.default)(_class, [{
    key: 'pause',
    value: function pause() {
      this.timeline.playbackRate = 0;
    }
  }, {
    key: _activeReadyTimer,
    value: function value() {
      var _this2 = this;

      if (this[_readyDefer] && !this[_readyDefer].timerID) {
        if (this.timeline.currentTime < 0) {
          this[_readyDefer].timerID = this.timeline.setTimeout(function () {
            _this2[_readyDefer].resolve();
            delete _this2[_readyDefer];
          }, { delay: -this.timeline.currentTime, heading: false });
        } else {
          this[_readyDefer].timerID = this.timeline.setTimeout(function () {
            _this2[_readyDefer].resolve();
            delete _this2[_readyDefer];
          }, { delay: 0, isEntropy: true });
        }
      }
    }
  }, {
    key: _activeFinishTimer,
    value: function value() {
      var _this3 = this;

      var _timing2 = this[_timing],
          duration = _timing2.duration,
          iterations = _timing2.iterations,
          endDelay = _timing2.endDelay;

      var delay = Math.ceil(duration * iterations + endDelay - this.timeline.currentTime) + 1;
      if (this[_finishedDefer] && !this[_finishedDefer].timerID) {
        this[_finishedDefer].timerID = this.timeline.setTimeout(function () {
          _this3[_finishedDefer].resolve();
          _this3[_removeDefer](_readyDefer);
          _this3[_removeDefer](_finishedDefer);
        }, { delay: delay, heading: false });
        this[_finishedDefer].reverseTimerID = this.timeline.setTimeout(function () {
          _this3[_finishedDefer].resolve();
          _this3[_removeDefer](_readyDefer);
          _this3[_removeDefer](_finishedDefer);
          _this3.timeline = null;
        }, { delay: -this[_timing].delay - 1, heading: false });
      }
    }
  }, {
    key: 'play',
    value: function play() {
      if (this.playState === 'finished') {
        this.cancel();
      }

      if (this.playState === 'idle') {
        if (this.playbackRate <= 0) {
          return;
        }
        var _timing3 = this[_timing],
            delay = _timing3.delay,
            playbackRate = _timing3.playbackRate,
            timeline = _timing3.timeline;

        this.timeline = new _spriteTimeline2.default({
          originTime: delay,
          playbackRate: playbackRate
        }, timeline);
        this[_activeReadyTimer]();
        this[_activeFinishTimer]();
      } else if (this.playState === 'paused') {
        this.timeline.playbackRate = this.playbackRate;
        this[_activeReadyTimer]();
      }
    }
  }, {
    key: _removeDefer,
    value: function value(deferID) {
      var defered = this[deferID],
          timeline = this.timeline;


      if (defered && timeline) {
        timeline.clearTimeout(defered.timerID);
        if (defered.reverseTimerID) {
          timeline.clearTimeout(defered.reverseTimerID);
        }
      }
      delete this[deferID];
    }
  }, {
    key: 'cancel',
    value: function cancel() {
      this[_removeDefer](_readyDefer);
      this[_removeDefer](_finishedDefer);
      this.timeline = null;
    }
  }, {
    key: 'finish',
    value: function finish() {
      if (this.timeline) {
        this.timeline.currentTime = Infinity / this.playbackRate;
      }
      this[_removeDefer](_readyDefer);
      this[_removeDefer](_finishedDefer);
    }
  }, {
    key: 'applyEffects',
    value: function applyEffects(effects) {
      return (0, _assign2.default)(this[_effects], effects);
    }
  }, {
    key: 'playbackRate',
    get: function get() {
      return this[_timing].playbackRate;
    },
    set: function set(rate) {
      if (this.timeline) {
        this.timeline.playbackRate = rate;
      }
      this[_timing].playbackRate = rate;
    }
  }, {
    key: 'playState',
    get: function get() {
      var timeline = this.timeline,
          _timing4 = this[_timing],
          iterations = _timing4.iterations,
          duration = _timing4.duration,
          endDelay = _timing4.endDelay;

      var state = 'running';

      if (timeline == null) {
        state = 'idle';
      } else if (timeline.paused) {
        state = 'paused';
      } else if (timeline.currentTime < 0) {
        // 开始 pending
        state = 'pending';
      } else {
        var ed = timeline.currentTime - iterations * duration;
        if (ed > 0 && ed < endDelay) {
          // 结束 pending
          state = 'pending';
        } else if (ed >= endDelay) {
          state = 'finished';
        }
      }
      return state;
    }
  }, {
    key: 'progress',
    get: function get() {
      if (!this.timeline) return 0;

      var _timing5 = this[_timing],
          duration = _timing5.duration,
          iterations = _timing5.iterations;

      var timeline = this.timeline,
          playState = this.playState;

      var p = void 0;

      if (playState === 'idle') {
        p = 0;
      } else if (playState === 'paused' && timeline.currentTime < 0) {
        p = 0;
      } else if (playState === 'pending') {
        if (timeline.currentTime < 0) {
          p = 0;
        } else {
          var time = timeline.seekLocalTime(iterations * duration);
          p = (0, _utils.periodicity)(time, duration)[1] / duration;
        }
      } else if (playState === 'running' || playState === 'paused') {
        p = (0, _utils.periodicity)(timeline.currentTime, duration)[1] / duration;
      }

      if (playState === 'finished') {
        p = (0, _utils.periodicity)(iterations, 1)[1];
      }

      return p;
    }
  }, {
    key: 'frame',
    get: function get() {
      var playState = this.playState,
          initState = this[_initState],
          fill = this[_timing].fill;


      if (playState === 'idle') {
        return initState;
      }

      var currentTime = this.timeline.currentTime,
          keyframes = this[_keyframes].slice(0);

      var _getProgress = (0, _utils.getProgress)(this.timeline, this[_timing], this.progress),
          p = _getProgress.p,
          inverted = _getProgress.inverted;

      var frameState = initState;
      if (currentTime < 0 && playState === 'pending') {
        // 在开始前 delay 阶段
        if (fill === 'backwards' || fill === 'both') {
          frameState = inverted ? keyframes[keyframes.length - 1] : keyframes[0];
        }
      } else if (playState !== 'pending' && playState !== 'finished' || fill === 'forwards' || fill === 'both') {
        // 不在 endDelay 或结束状态，或 forwards
        frameState = (0, _utils.getCurrentFrame)(this[_timing], keyframes, this[_effects], p);
      }
      return frameState;
    }
  }, {
    key: 'timing',
    get: function get() {
      return this[_timing];
    }
  }, {
    key: 'baseTimeline',
    set: function set(timeline) {
      this[_timing].timeline = timeline;
    },
    get: function get() {
      return this[_timing].timeline;
    }
  }, {
    key: 'ready',
    get: function get() {
      if (this[_readyDefer]) {
        return this[_readyDefer].promise;
      }

      if (this.timeline && this.timeline.currentTime >= 0) {
        if (this.playState !== 'paused') {
          return _promise2.default.resolve();
        }
      }

      this[_readyDefer] = (0, _utils.defer)();
      if (this.timeline) {
        // 已经在 pending 状态
        this[_activeReadyTimer]();
      }
      if (this[_readyDefer]) {
        return this[_readyDefer].promise;
      }
      return _promise2.default.resolve();
    }
  }, {
    key: 'finished',
    get: function get() {
      if (this.playState === 'finished') {
        return _promise2.default.resolve();
      }
      if (!this[_finishedDefer]) {
        this[_finishedDefer] = (0, _utils.defer)();

        if (this.timeline) {
          this[_activeFinishTimer]();
        }
      }

      return this[_finishedDefer].promise;
    }
  }]);
  return _class;
}();

exports.default = _class;
}, function(modId) { var map = {"./utils":1584500598092,"./easing":1584500598090}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500598092, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.defer = defer;
exports.periodicity = periodicity;
exports.calculateFramesOffset = calculateFramesOffset;
exports.getProgress = getProgress;
exports.getCurrentFrame = getCurrentFrame;

var _easing2 = require('./easing');

var _effect = require('./effect');

var _effect2 = _interopRequireDefault(_effect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function defer() {
  var ret = {};
  ret.promise = new _promise2.default(function (resolve, reject) {
    ret.resolve = resolve;
    ret.reject = reject;
  });
  return ret;
}

function periodicity(val, dur) {
  var t = Math.floor(val / dur);
  var v = val - t * dur;
  if (v === 0 && t > 0) {
    v = dur;
    t--;
  }
  return [t, v];
}

function calculateFramesOffset(keyframes) {
  keyframes = keyframes.slice(0);

  var firstFrame = keyframes[0],
      lastFrame = keyframes[keyframes.length - 1];

  lastFrame.offset = lastFrame.offset || 1;
  firstFrame.offset = firstFrame.offset || 0;

  var offset = 0,
      offsetFrom = -1;

  for (var i = 0; i < keyframes.length; i++) {
    var frame = keyframes[i];
    if (frame.offset != null) {
      var dis = i - offsetFrom;
      if (dis > 1) {
        var delta = (frame.offset - offset) / dis;
        for (var j = 0; j < dis - 1; j++) {
          keyframes[offsetFrom + j + 1].offset = offset + delta * (j + 1);
        }
      }
      offset = frame.offset;
      offsetFrom = i;
    }
    if (frame.easing != null) {
      frame.easing = (0, _easing2.parseEasing)(frame.easing);
    }
    if (i > 0) {
      var hasEasing = keyframes[i].easing != null;
      // 如果中间某个属性没有了，需要从前一帧复制过来
      keyframes[i] = (0, _assign2.default)({}, keyframes[i - 1], keyframes[i]);
      if (!hasEasing) {
        // easing 不能复制
        delete keyframes[i].easing;
      }
    }
  }

  return keyframes;
}

function getProgress(timeline, timing, p) {
  var currentTime = timeline.currentTime,
      direction = timing.direction,
      duration = timing.duration;

  var inverted = false;
  if (direction === 'reverse') {
    p = 1 - p;
    inverted = true;
  } else if (direction === 'alternate' || direction === 'alternate-reverse') {
    var period = Math.floor(currentTime / duration);

    if (p === 1) period--;
    // period = Math.max(0, period)

    if (period % 2 ^ direction === 'alternate-reverse') {
      p = 1 - p;
      inverted = true;
    }
  }
  return { p: p, inverted: inverted };
}

function calculateFrame(previousFrame, nextFrame, effects, p) {
  var ret = {};
  (0, _entries2.default)(nextFrame).forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (key !== 'offset' && key !== 'easing') {
      var effect = effects[key] || effects.default;

      var v = effect(previousFrame[key], value, p, previousFrame.offset, nextFrame.offset);

      if (v != null) {
        ret[key] = v;
      }
    }
  });
  return ret;
}

function getCurrentFrame(timing, keyframes, effects, p) {
  var easing = timing.easing,
      effect = timing.effect;


  if (!effect) {
    // timing.effect 会覆盖掉 Effects 和 animator.applyEffects 中定义的 effects
    effects = (0, _assign2.default)({}, effects, _effect2.default);
  }

  var ret = {};

  p = easing(p, keyframes);

  for (var i = 1; i < keyframes.length; i++) {
    var frame = keyframes[i],
        offset = frame.offset;

    if (offset >= p || i === keyframes.length - 1) {
      var previousFrame = keyframes[i - 1],
          previousOffset = previousFrame.offset,
          _easing = previousFrame.easing;

      var ep = p;
      if (_easing) {
        var d = offset - previousOffset;
        ep = _easing((p - previousOffset) / d) * d + previousOffset;
      }

      if (effect) {
        ret = effect(previousFrame, frame, ep, previousOffset, offset);
      } else {
        ret = calculateFrame(previousFrame, frame, effects, ep);
      }
      break;
    }
  }

  return ret;
}
}, function(modId) { var map = {"./easing":1584500598090,"./effect":1584500598089}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1584500598088);
})()
//# sourceMappingURL=index.js.map