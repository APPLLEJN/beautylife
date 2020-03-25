module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { __MODS__[modId].m.exports.__proto__ = m.exports.__proto__; Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; var desp = Object.getOwnPropertyDescriptor(m.exports, k); if(desp && desp.configurable) Object.defineProperty(m.exports, k, { set: function(val) { __MODS__[modId].m.exports[k] = val; }, get: function() { return __MODS__[modId].m.exports[k]; } }); }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1584500597659, function(require, module, exports) {


var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Effects", {
  enumerable: true,
  get: function get() {
    return _spriteAnimator.Effects;
  }
});
Object.defineProperty(exports, "Easings", {
  enumerable: true,
  get: function get() {
    return _spriteAnimator.Easings;
  }
});
Object.defineProperty(exports, "Timeline", {
  enumerable: true,
  get: function get() {
    return _spriteAnimator.Timeline;
  }
});
Object.defineProperty(exports, "SvgPath", {
  enumerable: true,
  get: function get() {
    return _svgPathToCanvas.default;
  }
});
Object.defineProperty(exports, "BaseSprite", {
  enumerable: true,
  get: function get() {
    return _basesprite.default;
  }
});
Object.defineProperty(exports, "Sprite", {
  enumerable: true,
  get: function get() {
    return _sprite.default;
  }
});
Object.defineProperty(exports, "Label", {
  enumerable: true,
  get: function get() {
    return _label.default;
  }
});
Object.defineProperty(exports, "Layer", {
  enumerable: true,
  get: function get() {
    return _layer.default;
  }
});
Object.defineProperty(exports, "Group", {
  enumerable: true,
  get: function get() {
    return _group.default;
  }
});
Object.defineProperty(exports, "BaseNode", {
  enumerable: true,
  get: function get() {
    return _basenode.default;
  }
});
Object.defineProperty(exports, "Path", {
  enumerable: true,
  get: function get() {
    return _path.default;
  }
});
Object.defineProperty(exports, "Batch", {
  enumerable: true,
  get: function get() {
    return _batch.default;
  }
});
Object.defineProperty(exports, "use", {
  enumerable: true,
  get: function get() {
    return _use.default;
  }
});
Object.defineProperty(exports, "registerNodeType", {
  enumerable: true,
  get: function get() {
    return _dom.registerNodeType;
  }
});
Object.defineProperty(exports, "createNode", {
  enumerable: true,
  get: function get() {
    return _dom.createNode;
  }
});
Object.defineProperty(exports, "createElement", {
  enumerable: true,
  get: function get() {
    return _dom.createElement;
  }
});
Object.defineProperty(exports, "isValidNodeType", {
  enumerable: true,
  get: function get() {
    return _dom.isValidNodeType;
  }
});
Object.defineProperty(exports, "querySelector", {
  enumerable: true,
  get: function get() {
    return _dom.querySelector;
  }
});
Object.defineProperty(exports, "querySelectorAll", {
  enumerable: true,
  get: function get() {
    return _dom.querySelectorAll;
  }
});
Object.defineProperty(exports, "stylesheet", {
  enumerable: true,
  get: function get() {
    return _css.default;
  }
});
exports.utils = exports.math = exports.Color = void 0;

var _spriteAnimator = require("sprite-animator");

var _svgPathToCanvas = _interopRequireDefault(require("svg-path-to-canvas"));

var math = _interopRequireWildcard(require("sprite-math"));

exports.math = math;

var utils = _interopRequireWildcard(require("./utils"));

exports.utils = utils;

var _basesprite = _interopRequireDefault(require("./core/basesprite"));

var _sprite = _interopRequireDefault(require("./core/sprite"));

var _label = _interopRequireDefault(require("./core/label"));

var _layer = _interopRequireDefault(require("./core/layer"));

var _group = _interopRequireDefault(require("./core/group"));

var _basenode = _interopRequireDefault(require("./core/basenode"));

var _path = _interopRequireDefault(require("./core/path"));

var _batch = _interopRequireDefault(require("./core/batch"));

var _use = _interopRequireDefault(require("./core/use"));

require("./modules/animation");

require("./modules/actions");

require("./modules/layout");

var _dom = require("./modules/dom");

var _css = _interopRequireDefault(require("./modules/css"));

// load modules
var Color = utils.Color;
exports.Color = Color;
}, function(modId) {var map = {"./utils":1584500597660,"./core/basesprite":1584500597667,"./core/sprite":1584500597672,"./core/label":1584500597673,"./core/layer":1584500597674,"./core/group":1584500597677,"./core/basenode":1584500597670,"./core/path":1584500597679,"./core/batch":1584500597676,"./core/use":1584500597680,"./modules/animation":1584500597681,"./modules/actions":1584500597685,"./modules/layout":1584500597688,"./modules/dom":1584500597691,"./modules/css":1584500597694}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597660, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "parseFont", {
  enumerable: true,
  get: function get() {
    return _parseFont.default;
  }
});
Object.defineProperty(exports, "createSvgPath", {
  enumerable: true,
  get: function get() {
    return _svgpath.default;
  }
});
Object.defineProperty(exports, "notice", {
  enumerable: true,
  get: function get() {
    return _utils.notice;
  }
});
Object.defineProperty(exports, "Color", {
  enumerable: true,
  get: function get() {
    return _utils.Color;
  }
});
Object.defineProperty(exports, "parseColor", {
  enumerable: true,
  get: function get() {
    return _utils.parseColor;
  }
});
Object.defineProperty(exports, "oneOrTwoValues", {
  enumerable: true,
  get: function get() {
    return _utils.oneOrTwoValues;
  }
});
Object.defineProperty(exports, "praseString", {
  enumerable: true,
  get: function get() {
    return _utils.praseString;
  }
});
Object.defineProperty(exports, "parseStringInt", {
  enumerable: true,
  get: function get() {
    return _utils.parseStringInt;
  }
});
Object.defineProperty(exports, "parseStringFloat", {
  enumerable: true,
  get: function get() {
    return _utils.parseStringFloat;
  }
});
Object.defineProperty(exports, "parseColorString", {
  enumerable: true,
  get: function get() {
    return _utils.parseColorString;
  }
});
Object.defineProperty(exports, "fourValuesShortCut", {
  enumerable: true,
  get: function get() {
    return _utils.fourValuesShortCut;
  }
});
Object.defineProperty(exports, "eightValuesShortCut", {
  enumerable: true,
  get: function get() {
    return _utils.eightValuesShortCut;
  }
});
Object.defineProperty(exports, "parseStringTransform", {
  enumerable: true,
  get: function get() {
    return _utils.parseStringTransform;
  }
});
Object.defineProperty(exports, "rectVertices", {
  enumerable: true,
  get: function get() {
    return _utils.rectVertices;
  }
});
Object.defineProperty(exports, "appendUnit", {
  enumerable: true,
  get: function get() {
    return _utils.appendUnit;
  }
});
Object.defineProperty(exports, "sortOrderedSprites", {
  enumerable: true,
  get: function get() {
    return _utils.sortOrderedSprites;
  }
});
Object.defineProperty(exports, "generateID", {
  enumerable: true,
  get: function get() {
    return _utils.generateID;
  }
});
Object.defineProperty(exports, "sizeToPixel", {
  enumerable: true,
  get: function get() {
    return _utils.sizeToPixel;
  }
});
Object.defineProperty(exports, "attr", {
  enumerable: true,
  get: function get() {
    return _decorators.attr;
  }
});
Object.defineProperty(exports, "flow", {
  enumerable: true,
  get: function get() {
    return _decorators.flow;
  }
});
Object.defineProperty(exports, "absolute", {
  enumerable: true,
  get: function get() {
    return _decorators.absolute;
  }
});
Object.defineProperty(exports, "inherit", {
  enumerable: true,
  get: function get() {
    return _decorators.inherit;
  }
});
Object.defineProperty(exports, "inheritAttributes", {
  enumerable: true,
  get: function get() {
    return _decorators.inheritAttributes;
  }
});
Object.defineProperty(exports, "setDeprecation", {
  enumerable: true,
  get: function get() {
    return _decorators.setDeprecation;
  }
});
Object.defineProperty(exports, "deprecate", {
  enumerable: true,
  get: function get() {
    return _decorators.deprecate;
  }
});
Object.defineProperty(exports, "parseValue", {
  enumerable: true,
  get: function get() {
    return _decorators.parseValue;
  }
});
Object.defineProperty(exports, "relative", {
  enumerable: true,
  get: function get() {
    return _decorators.relative;
  }
});
Object.defineProperty(exports, "cachable", {
  enumerable: true,
  get: function get() {
    return _decorators.cachable;
  }
});
Object.defineProperty(exports, "composit", {
  enumerable: true,
  get: function get() {
    return _decorators.composit;
  }
});
Object.defineProperty(exports, "decorators", {
  enumerable: true,
  get: function get() {
    return _decorators.decorators;
  }
});
Object.defineProperty(exports, "attributeNames", {
  enumerable: true,
  get: function get() {
    return _store.attributeNames;
  }
});
Object.defineProperty(exports, "relatedAttributes", {
  enumerable: true,
  get: function get() {
    return _store.relatedAttributes;
  }
});
Object.defineProperty(exports, "findColor", {
  enumerable: true,
  get: function get() {
    return _render.findColor;
  }
});
Object.defineProperty(exports, "cacheContextPool", {
  enumerable: true,
  get: function get() {
    return _render.cacheContextPool;
  }
});
Object.defineProperty(exports, "drawRadiusBox", {
  enumerable: true,
  get: function get() {
    return _render.drawRadiusBox;
  }
});

var _parseFont = _interopRequireDefault(require("./parse-font"));

var _svgpath = _interopRequireDefault(require("./svgpath"));

var _utils = require("./utils");

var _decorators = require("./decorators");

var _store = require("./store");

var _render = require("./render");
}, function(modId) { var map = {"./parse-font":1584500597661,"./svgpath":1584500597663,"./utils":1584500597662,"./decorators":1584500597664,"./store":1584500597665,"./render":1584500597666}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597661, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parseFont;

var _utils = require("./utils");

// borrow from node-canvas (https://github.com/Automattic/node-canvas)

/**
 * Font RegExp helpers.
 */
var weights = 'bold|bolder|lighter|[1-9]00',
    styles = 'italic|oblique',
    variants = 'small-caps',
    stretches = 'ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded',
    units = 'px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin|%',
    string = "'([^']+)'|\"([^\"]+)\"|([\\w-]|[\u4E00-\u9FA5])+"; // [ [ <‘font-style’> || <font-variant-css21> || <‘font-weight’> || <‘font-stretch’> ]?
//    <‘font-size’> [ / <‘line-height’> ]? <‘font-family’> ]
// https://drafts.csswg.org/css-fonts-3/#font-prop

var weightRe = new RegExp("(".concat(weights, ") +"), 'i');
var styleRe = new RegExp("(".concat(styles, ") +"), 'i');
var variantRe = new RegExp("(".concat(variants, ") +"), 'i');
var stretchRe = new RegExp("(".concat(stretches, ") +"), 'i');
/* eslint-disable prefer-template */

var sizeFamilyRe = new RegExp('([\\d\\.]+)(' + units + ') *' + '((?:' + string + ')( *, *(?:' + string + '))*)');
/* eslint-enable prefer-template */

/**
 * Parse font `str`.
 *
 * @param {String} str
 * @return {Object} Parsed font. `size` is in device units. `unit` is the unit
 *   appearing in the input string.
 * @api private
 */

function parseFont(str, defaultHeight) {
  // Try for required properties first.
  var sizeFamily = sizeFamilyRe.exec(str);
  if (!sizeFamily) return; // invalid
  // Default values and required properties

  var font = {
    weight: 'normal',
    style: 'normal',
    stretch: 'normal',
    variant: 'normal',
    size: parseFloat(sizeFamily[1]),
    unit: sizeFamily[2],
    family: sizeFamily[3].replace(/ *, */g, ',')
  }; // Stop search at `sizeFamily.index`

  var substr = str.substring(0, sizeFamily.index); // Optional, unordered properties.

  var weight = weightRe.exec(substr),
      style = styleRe.exec(substr),
      variant = variantRe.exec(substr),
      stretch = stretchRe.exec(substr);
  if (weight) font.weight = weight[1];
  if (style) font.style = style[1];
  if (variant) font.variant = variant[1];
  if (stretch) font.stretch = stretch[1];
  font.size0 = font.size;
  font.size = (0, _utils.sizeToPixel)({
    size: font.size0,
    unit: font.unit
  }, defaultHeight);

  if (font.unit === 'vw' || font.unit === 'vh') {
    if (typeof document !== 'undefined' && document.documentElement) {
      var _document$documentEle = document.documentElement,
          clientWidth = _document$documentEle.clientWidth,
          clientHeight = _document$documentEle.clientHeight;
      var val = font.unit === 'vw' ? clientWidth : clientHeight;
      font.size = val * font.size / 100;
    }
  }

  return font;
}
/* eslint-enable */
}, function(modId) { var map = {"./utils":1584500597662}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597662, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseColor = parseColor;
exports.parseColorString = parseColorString;
exports.parseStringTransform = parseStringTransform;
exports.parseValuesString = parseValuesString;
exports.praseString = praseString;
exports.parseStringInt = parseStringInt;
exports.parseStringFloat = parseStringFloat;
exports.oneOrTwoValues = oneOrTwoValues;
exports.fourValuesShortCut = fourValuesShortCut;
exports.eightValuesShortCut = eightValuesShortCut;
exports.rectVertices = rectVertices;
exports.appendUnit = appendUnit;
exports.sortOrderedSprites = sortOrderedSprites;
exports.notice = notice;
exports.generateID = generateID;
exports.sizeToPixel = sizeToPixel;
exports.Color = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var colorString = require('color-string');

var Color =
/*#__PURE__*/
function () {
  function Color(color) {
    (0, _classCallCheck2.default)(this, Color);

    if (typeof color === 'string') {
      var _colorString$get = colorString.get(color || 'rgba(0,0,0,1)'),
          model = _colorString$get.model,
          value = _colorString$get.value;

      this.model = model;
      this.value = value;
    } else {
      this.model = color.model;
      this.value = color.value;
    }
  }

  (0, _createClass2.default)(Color, [{
    key: "toString",
    value: function toString() {
      var _this$value = (0, _slicedToArray2.default)(this.value, 4),
          a = _this$value[0],
          b = _this$value[1],
          c = _this$value[2],
          d = _this$value[3];

      var model = this.model;

      if (model === 'rgb') {
        return "".concat(model, "a(").concat(a, ",").concat(b, ",").concat(c, ",").concat(d, ")");
      }

      return "".concat(model, "a(").concat(a, ",").concat(b, "%,").concat(c, "%,").concat(d, ")");
    }
  }, {
    key: "str",
    get: function get() {
      return String(this);
    }
  }]);
  return Color;
}();

exports.Color = Color;

function parseColor(color) {
  return new Color(color);
}

function parseColorString(color) {
  if (color && typeof color === 'string' && color !== 'inherit') {
    return parseColor(color).toString();
  }

  return color;
}

function parseStringTransform(str) {
  if (typeof str !== 'string') return str;
  var rules = str.match(/(?:^|\s)+((?:scale|rotate|translate|skew|matrix)\([^()]+\))/g);
  var ret = {};

  if (rules) {
    rules.forEach(function (rule) {
      var matched = rule.match(/(scale|rotate|translate|skew|matrix)\(([^()]+)\)/);

      var _matched = (0, _slicedToArray2.default)(matched, 3),
          m = _matched[1],
          v = _matched[2];

      if (m === 'rotate') {
        ret[m] = parseStringFloat(v)[0];
      } else {
        ret[m] = parseStringFloat(v);
      }
    });
  }

  return ret;
}

function parseValuesString(str, parser) {
  if (typeof str === 'string' && str !== '' && str !== 'inherit') {
    var values = str.split(/[\s,]+/g);
    return values.map(function (v) {
      var ret = parser ? parser(v) : v;
      return Number.isNaN(ret) ? v : ret;
    });
  }

  return str;
}

function praseString(str) {
  return parseValuesString(str);
}

function parseStringInt(str) {
  return parseValuesString(str, parseInt);
}

function parseStringFloat(str) {
  return parseValuesString(str, function (v) {
    if (v === 'center') return 0.5;
    if (v === 'left' || v === 'top') return 0;
    if (v === 'right' || v === 'bottom') return 1;
    return parseFloat(v);
  });
}

function oneOrTwoValues(val) {
  if (!Array.isArray(val)) {
    return [val, val];
  }

  if (val.length === 1) {
    return [val[0], val[0]];
  }

  return val;
}

function fourValuesShortCut(val) {
  if (!Array.isArray(val)) {
    return [val, val, val, val];
  }

  if (val.length === 1) {
    return [val[0], val[0], val[0], val[0]];
  }

  if (val.length === 2) {
    return [val[0], val[1], val[0], val[1]];
  }

  return (0, _toConsumableArray2.default)(val).concat([0, 0, 0, 0]).slice(0, 4);
}

function eightValuesShortCut(val) {
  if (!Array.isArray(val)) {
    return [val, val, val, val, val, val, val, val];
  }

  if (val.length === 1) {
    return eightValuesShortCut(val[0]);
  }

  if (val.length === 2) {
    return [val[0], val[1], val[0], val[1], val[0], val[1], val[0], val[1]];
  }

  if (val.length === 4) {
    return [val[0], val[1], val[2], val[3], val[0], val[1], val[2], val[3]];
  }

  return (0, _toConsumableArray2.default)(val).concat([0, 0, 0, 0, 0, 0, 0, 0]).slice(0, 8);
}

function rectVertices(rect) {
  var _rect = (0, _slicedToArray2.default)(rect, 4),
      x = _rect[0],
      y = _rect[1],
      w = _rect[2],
      h = _rect[3];

  return [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
}

function appendUnit(value) {
  var defaultUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';

  if (value === '') {
    return value;
  }

  if (typeof value === 'string' && Number.isNaN(Number(value))) {
    return value;
  }

  return value + defaultUnit;
}

function sortOrderedSprites(sprites) {
  var reversed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return (0, _toConsumableArray2.default)(sprites).sort(function (a, b) {
    if (reversed) {
      var _ref = [b, a];
      a = _ref[0];
      b = _ref[1];
    }

    if (a.zIndex === b.zIndex) {
      return a.zOrder - b.zOrder;
    }

    return a.zIndex - b.zIndex;
  });
}

var noticed = new Set();

function notice(msg) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'warn';

  if (typeof console !== 'undefined' && !noticed.has(msg)) {
    console[level](msg); // eslint-disable-line no-console

    noticed.add(msg);
  }
}

var IDMap = new WeakMap();

function generateID(obj) {
  if (IDMap.has(obj)) {
    return IDMap.get(obj);
  }

  var id = Math.random().toString(36).slice(2);
  IDMap.set(obj, id);
  return id;
}

function sizeToPixel(value, defaultWidth) {
  // eslint-disable-line complexity
  if (typeof value === 'string') {
    var matched = value.trim().match(/^([\d.]+)(px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin|%)$/);

    if (matched) {
      value = {
        size: parseFloat(matched[1]),
        unit: matched[2]
      };
    } else {
      value = {
        size: parseInt(value, 10),
        unit: 'px'
      };
    }
  }

  var _value = value,
      size = _value.size,
      unit = _value.unit;

  if (unit === 'pt') {
    size /= 0.75;
  } else if (unit === 'pc') {
    size *= 16;
  } else if (unit === 'in') {
    size *= 96;
  } else if (unit === 'cm') {
    size *= 96.0 / 2.54;
  } else if (unit === 'mm') {
    size *= 96.0 / 25.4;
  } else if (unit === 'em' || unit === 'rem' || unit === 'ex') {
    if (!defaultWidth && typeof getComputedStyle === 'function' && typeof document !== 'undefined') {
      var root = getComputedStyle(document.documentElement).fontSize;
      defaultWidth = sizeToPixel(root, 16);
    }

    size *= defaultWidth;
    if (unit === 'ex') size /= 2;
  } else if (unit === 'q') {
    size *= 96.0 / 25.4 / 4;
  } else if (unit === 'vw' || unit === 'vh') {
    if (typeof document !== 'undefined') {
      var val = unit === 'vw' ? document.documentElement.clientWidth : document.documentElement.clientHeight;
      size *= val / 100;
    }
  } else if (unit === 'vmax' || unit === 'vmin') {
    if (typeof document !== 'undefined') {
      var width = document.documentElement.clientWidth;
      var height = document.documentElement.clientHeight;

      if (unit === 'vmax') {
        size *= Math.max(width, height) / 100;
      } else {
        size *= Math.min(width, height) / 100;
      }
    }
  }

  return size;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597663, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSvgPath;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _svgPathToCanvas = _interopRequireDefault(require("svg-path-to-canvas"));

function createSvgPath(path) {
  if (typeof path === 'string') path = {
    d: path
  };
  var p = new _svgPathToCanvas.default(path.d);

  if (path.transform || path.trim) {
    if (path.transform) {
      Object.entries(path.transform).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        if (!Array.isArray(value)) value = [value];
        p[key].apply(p, (0, _toConsumableArray2.default)(value));
      });
    }

    if (path.trim) {
      p.trim();
    }
  }

  return p;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597664, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attr = attr;
exports.composit = composit;
exports.cachable = cachable;
exports.inherit = inherit;
exports.relative = relative;
exports.flow = flow;
exports.absolute = absolute;
exports.setDeprecation = setDeprecation;
exports.deprecate = deprecate;
exports.parseValue = parseValue;
exports.decorators = decorators;
exports.inheritAttributes = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("./utils");

var _store = require("./store");

var _attrAbsolute = Symbol('attrAbsolute');
/* eslint-disable prefer-rest-params */


function polyfillLegacy(target, key, descriptor) {
  return {
    target: target,
    key: key,
    descriptor: descriptor
  };
}

function getPV(subject, relative) {
  var parent = subject.parent;
  var pv = null;

  if (parent) {
    var attrSize = parent.attrSize;

    if (attrSize) {
      var attrV = relative === 'pw' ? attrSize[0] : attrSize[1];

      while (attrSize && attrV === '') {
        // flexible value
        parent = parent.parent;
        attrSize = parent.attrSize;
      }
    }

    if (relative === 'pw') {
      pv = attrSize ? parent.contentSize[0] : parent.resolution[0];
    } else if (relative === 'ph') {
      pv = attrSize ? parent.contentSize[1] : parent.resolution[1];
    }
  }

  return pv;
}

function attr(options) {
  var cache = false,
      reflow = false,
      relayout = false,
      quiet = false,
      value = null,
      extra = null;

  var decorator = function decorator(elementDescriptor) {
    if (arguments.length === 3) {
      elementDescriptor = polyfillLegacy.apply(this, arguments);
    }

    var _elementDescriptor = elementDescriptor,
        key = _elementDescriptor.key,
        kind = _elementDescriptor.kind;

    _store.attributeNames.add(key);

    if (quiet && (cache || reflow || relayout)) {
      throw new Error("".concat(key, ": quietSet cannot enable cache or reflow or relayout"));
    } // let _symbolKey = key;


    var defaultValue = value != null ? value : elementDescriptor.value;
    var relativeType = elementDescriptor.descriptor.__relative;
    var inheritValue = elementDescriptor.descriptor.__inherit;
    var composit = elementDescriptor.descriptor.__composit;

    if (kind === 'field') {
      defaultValue = elementDescriptor.initializer ? elementDescriptor.initializer() : value; // _symbolKey = Symbol(key);

      var setter = quiet ? function (val) {
        this.quietSet(key, val);
      } : function (val) {
        this.set(key, val);
      };
      elementDescriptor = {
        kind: 'method',
        key: key,
        placement: 'prototype',
        descriptor: {
          configurable: true,
          enumerable: true,
          set: setter,
          get: function get() {
            return this.get(key);
          }
        }
      };
    }

    if (relativeType) {
      elementDescriptor = applyRative(elementDescriptor, relativeType);
    }

    if (inheritValue) {
      elementDescriptor = applyInherit(elementDescriptor, inheritValue.defaultValue);
    }

    var descriptor = elementDescriptor.descriptor;
    var _getter = descriptor.get;

    if (!_getter) {
      _getter = function _getter() {
        var ret = this.get(key);
        return ret != null ? ret : this.getDefaultValue(key, defaultValue);
      };
    }

    if (composit) {
      if (cache || reflow || relayout || quiet || value || extra) {
        throw new Error('Cannot apply state to composit attribute.');
      }

      descriptor.get = _getter;
    } else if (!relativeType && !inheritValue) {
      descriptor.get = function () {
        var ret = _getter.call(this);

        return ret != null ? ret : this.getDefaultValue(key, defaultValue);
      };
    } else if (relativeType) {
      // enable set default to user defined getter
      descriptor.get = function () {
        var ret = _getter.call(this);

        var subject = this.subject;

        if (ret == null) {
          ret = this.getDefaultValue(key, defaultValue);
        } else if (ret.relative) {
          var _relative = ret.relative.trim();

          if (_relative === 'pw' || _relative === 'ph') {
            var pv = getPV(subject, _relative);

            if (pv !== ret.pv) {
              this[key] = ret.rv;
              return this[key];
            }

            subject.cache = null;

            if (subject[_attrAbsolute]) {
              return pv * ret.v;
            }

            return ret.rv;
          }

          if (_relative === 'rw' || _relative === 'rh') {
            var layer = subject.layer;
            var _pv = null;

            if (layer) {
              if (_relative === 'rw') {
                _pv = layer.resolution[0];
              } else if (_relative === 'rh') {
                _pv = layer.resolution[1];
              }
            }

            if (_pv !== ret.pv) {
              this[key] = ret.rv;
              return this[key];
            }

            subject.cache = null;

            if (subject[_attrAbsolute]) {
              return _pv * ret.v;
            }

            return ret.rv;
          }
        }

        return ret;
      };
    } else {
      // enable set default to user defined getter
      descriptor.get = function () {
        var ret = _getter.call(this);

        var subject = this.subject;

        if (ret == null) {
          ret = this.getDefaultValue(key, defaultValue);
        }

        if (ret === 'inherit') {
          var _value = null;
          var parent = subject.parent;

          while (parent && parent.attr) {
            _value = parent.attr(key);
            if (_value != null) break;
            parent = parent.parent;
          }

          return _value != null ? _value : this.__inheritDefaults[key];
        }

        return ret;
      };
    }

    if (!composit) {
      var _setter = descriptor.set;

      var _clearCache = !(descriptor.__cachable || cache);

      descriptor.set = function (val) {
        var subject = this.subject;
        this.__updateTag = false;
        this.__reflowTag = reflow;
        this.__clearLayout = relayout;

        if (!this.__styleTag && val != null && this.__attributesSet) {
          this.__attributesSet.add(key);
        }

        if (!this.__styleTag && val == null && this.__attributesSet) {
          if (this.__attributesSet.has(key)) {
            this.__attributesSet.delete(key);
          }
        }

        _setter.call(this, val);

        if (subject && !this.__quietTag && this.__updateTag) {
          var clearLayout = this.__clearLayout;

          if (this.__reflowTag) {
            // reflow must before clearLayout because boxOffsetSize is also flowed.
            subject.reflow();
          }

          if (subject.hasLayout) {
            var offsetSize = subject.boxOffsetSize,
                layoutSize = subject.__lastLayout;
            clearLayout |= !layoutSize || offsetSize[0] !== layoutSize[0] || offsetSize[1] !== layoutSize[1];
            subject.__lastLayout = offsetSize;
          }

          if (clearLayout) subject.clearLayout();
          subject.forceUpdate(_clearCache);
        }

        if (this.__updateTag) {
          if (_store.relatedAttributes.has(key)) {
            subject.updateStyles();
          }

          if (extra) {
            this[extra](key, val);
          }
        }
      }; // delete this.__reflowTag;
      // delete this.__updateTag;

    }

    if (arguments.length === 3) return elementDescriptor.descriptor;
    return elementDescriptor;
  };

  if (options.descriptor) {
    return decorator(options);
  }

  if (arguments.length === 3) {
    return decorator.apply(this, arguments);
  }

  quiet = !!options.quiet;
  cache = !!options.cache;
  reflow = !!options.reflow;
  relayout = !!options.relayout;
  value = options.value;
  extra = options.extra;
  return decorator;
}

function composit(struct) {
  return function (elementDescriptor) {
    if (arguments.length === 3) {
      elementDescriptor = polyfillLegacy.apply(this, arguments);
    }

    var _elementDescriptor2 = elementDescriptor,
        kind = _elementDescriptor2.kind,
        key = _elementDescriptor2.key;

    if (kind !== 'field') {
      throw new Error("Invalid composit attribute ".concat(key));
    }

    elementDescriptor.kind = 'method';
    var set, get;

    if (typeof struct === 'string') {
      set = function set(val) {
        this[struct] = val;
      };

      get = function get() {
        return this[struct];
      };
    } else if (Array.isArray(struct)) {
      set = function set(val) {
        var _this = this;

        struct.forEach(function (key, i) {
          _this[key] = val != null ? val[i] : null;
        });
      };

      get = function get() {
        var _this2 = this;

        return struct.map(function (key) {
          return _this2[key];
        });
      };
    } else {
      struct = Object.entries(struct);

      set = function set(val) {
        var _this3 = this;

        struct.forEach(function (_ref) {
          var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
              prop = _ref2[0],
              key = _ref2[1];

          _this3[key] = val != null ? val[prop] : null;
        });
      };

      get = function get() {
        var _this4 = this;

        var ret = {};
        struct.forEach(function (_ref3) {
          var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
              prop = _ref4[0],
              key = _ref4[1];

          ret[prop] = _this4[key];
        });
        return ret;
      };
    }

    elementDescriptor.descriptor = {
      get: get,
      set: set,
      __composit: true
    };
    if (arguments.length === 3) return elementDescriptor.descriptor;
    return elementDescriptor;
  };
} // after attr


function cachable(elementDescriptor) {
  if (arguments.length === 3) {
    elementDescriptor = polyfillLegacy.apply(this, arguments);
  }

  var _elementDescriptor3 = elementDescriptor,
      descriptor = _elementDescriptor3.descriptor;
  descriptor.__cachable = true;
  if (arguments.length === 3) return elementDescriptor.descriptor;
  return elementDescriptor;
}

var inheritAttributes = new Set(); // after attr

exports.inheritAttributes = inheritAttributes;

function inherit() {
  var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return function (elementDescriptor) {
    if (arguments.length === 3) {
      elementDescriptor = polyfillLegacy.apply(this, arguments);
    }

    var _elementDescriptor4 = elementDescriptor,
        descriptor = _elementDescriptor4.descriptor;
    descriptor.__inherit = {
      defaultValue: defaultValue
    };
    if (arguments.length === 3) return elementDescriptor.descriptor;
    return elementDescriptor;
  };
}

function applyInherit(elementDescriptor, defaultValue) {
  var key = elementDescriptor.key,
      _finisher = elementDescriptor.finisher,
      target = elementDescriptor.target;
  inheritAttributes.add(key);

  if (target) {
    if (!target.hasOwnProperty('__inheritDefaults')) {
      // eslint-disable-line no-prototype-builtins
      target.__inheritDefaults = Object.create(target.__inheritDefaults || null);
    }

    target.__inheritDefaults[key] = defaultValue;
    return elementDescriptor;
  }

  return (0, _objectSpread2.default)({}, elementDescriptor, {
    finisher: function finisher(klass) {
      if (_finisher) _finisher(klass);
      var proto = klass.prototype;

      if (!proto.hasOwnProperty('__inheritDefaults')) {
        // eslint-disable-line no-prototype-builtins
        proto.__inheritDefaults = Object.create(proto.__inheritDefaults || null);
      }

      proto.__inheritDefaults[key] = defaultValue;
    }
  });
} // after attr
// relative -> width | height


function relative() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'width';
  return function (elementDescriptor) {
    if (arguments.length === 3) {
      elementDescriptor = polyfillLegacy.apply(this, arguments);
    }

    var _elementDescriptor5 = elementDescriptor,
        descriptor = _elementDescriptor5.descriptor;
    descriptor.__relative = type;
    if (arguments.length === 3) return elementDescriptor.descriptor;
    return elementDescriptor;
  };
}

function applyRative(elementDescriptor, type) {
  var descriptor = elementDescriptor.descriptor;
  var setter = descriptor.set;

  descriptor.set = function (val) {
    if (typeof val === 'string') {
      val = val.trim();

      if (val.slice(-1) === '%') {
        var _relative2 = type === 'width' ? 'pw' : 'ph';

        var pv = getPV(this.subject, _relative2);
        val = {
          relative: _relative2,
          pv: pv,
          v: parseFloat(val) / 100,
          rv: val
        };
      } else {
        var _relative3 = val.slice(-2);

        if (_relative3 === 'rw' || _relative3 === 'rh') {
          var _pv2 = null;
          var layer = this.subject.layer;

          if (layer) {
            _pv2 = layer.resolution[_relative3 === 'rw' ? 0 : 1];
          }

          val = {
            relative: _relative3,
            pv: _pv2,
            v: parseFloat(val) / 100,
            rv: val
          };
        } else {
          val = val ? parseFloat(val) : val;
        }
      }
    }

    setter.call(this, val);
  };

  return elementDescriptor;
}

function flow(elementDescriptor) {
  if (arguments.length === 3) {
    elementDescriptor = polyfillLegacy.apply(this, arguments);
  }

  var _elementDescriptor6 = elementDescriptor,
      descriptor = _elementDescriptor6.descriptor,
      key = _elementDescriptor6.key;

  if (descriptor.get) {
    var _getter = descriptor.get;

    descriptor.get = function () {
      var ret = this.flow(key);

      if (ret === undefined) {
        ret = _getter.call(this);
        this.flow(key, ret);
      }

      return ret;
    };
  }

  if (arguments.length === 3) return elementDescriptor.descriptor;
  return elementDescriptor;
} // set tag force to get absolute value from relative attributes


function absolute(elementDescriptor) {
  if (arguments.length === 3) {
    elementDescriptor = polyfillLegacy.apply(this, arguments);
  }

  var _elementDescriptor7 = elementDescriptor,
      descriptor = _elementDescriptor7.descriptor;

  if (descriptor.get) {
    var _getter = descriptor.get;

    descriptor.get = function () {
      this[_attrAbsolute] = true;

      var ret = _getter.call(this);

      this[_attrAbsolute] = false;
      return ret;
    };
  }

  if (arguments.length === 3) return elementDescriptor.descriptor;
  return elementDescriptor;
}

function setDeprecation(apiName) {
  var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  msg = "[Deprecation] ".concat(apiName, " has been deprecated.").concat(msg);
  (0, _utils.notice)(msg);
}

function deprecate(msg) {
  var apiName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var decorator = function decorator(elementDescriptor) {
    if (arguments.length === 3) {
      elementDescriptor = polyfillLegacy.apply(this, arguments);
    }

    var _elementDescriptor8 = elementDescriptor,
        descriptor = _elementDescriptor8.descriptor,
        key = _elementDescriptor8.key;
    apiName = apiName || "Method ".concat(key);

    if (typeof descriptor.value === 'function') {
      var func = descriptor.value;

      descriptor.value = function () {
        setDeprecation(apiName, msg);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return func.apply(this, args);
      };
    }

    if (descriptor.set) {
      var setter = descriptor.set;

      descriptor.set = function (val) {
        setDeprecation(apiName, msg);
        return setter.call(this, val);
      };
    }

    if (descriptor.get) {
      var getter = descriptor.get;

      descriptor.get = function () {
        setDeprecation(apiName, msg);
        return getter.call(this);
      };
    }

    if (arguments.length === 3) return elementDescriptor.descriptor;
    return elementDescriptor;
  };

  if (msg.descriptor) {
    return decorator(msg);
  }

  if (arguments.length === 3) {
    return decorator.apply(this, arguments);
  }

  return decorator;
} // before attr


function parseValue() {
  for (var _len2 = arguments.length, parsers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    parsers[_key2] = arguments[_key2];
  }

  return function (elementDescriptor) {
    if (arguments.length === 3) {
      elementDescriptor = polyfillLegacy.apply(this, arguments);
    }

    var _elementDescriptor9 = elementDescriptor,
        descriptor = _elementDescriptor9.descriptor;
    var setter = descriptor.set;

    descriptor.set = function (val) {
      if (val != null && val !== '' && val !== 'inherit') {
        val = parsers.reduce(function (v, parser) {
          return parser(v);
        }, val);
      }

      setter.call(this, val);
    };

    if (arguments.length === 3) return elementDescriptor.descriptor;
    return elementDescriptor;
  };
} // return a function to apply any decorators to a descriptor


function decorators() {
  for (var _len3 = arguments.length, funcs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    funcs[_key3] = arguments[_key3];
  }

  return function (key, value, descriptor) {
    var elementDescriptor;

    if (!descriptor) {
      elementDescriptor = key;
    } else {
      elementDescriptor = {
        key: key,
        descriptor: descriptor,
        value: value
      };
    }

    var ret = funcs.reduceRight(function (a, b) {
      return b.call(this, a);
    }, elementDescriptor);
    return ret && ret.descriptor;
  };
}
/* eslint-enable prefer-rest-params */
}, function(modId) { var map = {"./utils":1584500597662,"./store":1584500597665}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597665, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.relatedAttributes = exports.attributeNames = void 0;
var attributeNames = new Set();
exports.attributeNames = attributeNames;
var relatedAttributes = new Set();
exports.relatedAttributes = relatedAttributes;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597666, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawRadiusBox = drawRadiusBox;
exports.findColor = findColor;
exports.cacheContextPool = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

// export function drawRadiusBox(context, {x, y, w, h, r}) {
//   // avoid radius larger than width or height
//   r = Math.min(r, Math.floor(Math.min(w, h) / 2));
//   // avoid radius is negative
//   r = Math.max(r, 0);
//   context.beginPath();
//   context.moveTo(x + r, y);
//   context.arcTo(x + w, y, x + w, y + h, r);
//   context.arcTo(x + w, y + h, x, y + h, r);
//   context.arcTo(x, y + h, x, y, r);
//   context.arcTo(x, y, x + w, y, r);
//   context.closePath();
// }
function drawEllipseBorder(ctx, x, y, w, h) {
  var pos = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'leftTop';
  var kappa = 0.5522848,
      ox = w / 2 * kappa,
      // control point offset horizontal
  oy = h / 2 * kappa,
      // control point offset vertical
  xe = x + w,
      // x-end
  ye = y + h,
      // y-end
  xm = x + w / 2,
      // x-middle
  ym = y + h / 2; // y-middle

  if (pos === 'leftTop') {
    ctx.moveTo(x, ym);
    ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
  } else if (pos === 'rightTop') {
    ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
  } else if (pos === 'rightBottom') {
    ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
  } else if (pos === 'leftBottom') {
    ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
  }
}

function drawRadiusBox(context, _ref, radius) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 4),
      x = _ref2[0],
      y = _ref2[1],
      w = _ref2[2],
      h = _ref2[3];

  if (!radius) {
    context.beginPath();
    context.rect(x, y, w, h);
  } else {
    if (!radius) radius = [0, 0, 0, 0, 0, 0, 0, 0];
    if (typeof radius === 'number') radius = Array(8).fill(radius);

    var _radius$map = radius.map(function (r, i) {
      if (i % 2) return Math.min(r, h / 2);
      return Math.min(r, w / 2);
    }),
        _radius$map2 = (0, _slicedToArray2.default)(_radius$map, 8),
        tl0 = _radius$map2[0],
        tl1 = _radius$map2[1],
        tr0 = _radius$map2[2],
        tr1 = _radius$map2[3],
        br0 = _radius$map2[4],
        br1 = _radius$map2[5],
        bl0 = _radius$map2[6],
        bl1 = _radius$map2[7];

    context.beginPath();
    context.moveTo(x, y + tl1);
    drawEllipseBorder(context, x, y, tl0 * 2, tl1 * 2, 'leftTop');
    context.lineTo(x + w - tr0, y);
    drawEllipseBorder(context, x + w - tr0 * 2, y, tr0 * 2, tr1 * 2, 'rightTop');
    context.lineTo(x + w, y + h - br1);
    drawEllipseBorder(context, x + w - br0 * 2, y + h - br1 * 2, br0 * 2, br1 * 2, 'rightBottom');
    context.lineTo(x + bl0, y + h);
    drawEllipseBorder(context, x, y + h - bl1 * 2, bl0 * 2, bl1 * 2, 'leftBottom');
    context.closePath();
  }
}
/* istanbul ignore next  */


function gradientBox(angle, rect) {
  var _rect = (0, _slicedToArray2.default)(rect, 4),
      x = _rect[0],
      y = _rect[1],
      w = _rect[2],
      h = _rect[3];

  angle %= 360;

  if (angle < 0) {
    angle += 360;
  }

  var ret = [x, y, x + w, y + h];

  if (angle >= 0 && angle < 90) {
    var tan = Math.tan(Math.PI * angle / 180);
    var d = tan * w;

    if (d <= h) {
      ret = [x, y, x + w, y + d];
    } else {
      d = h / tan;
      ret = [x, y, x + d, y + h];
    }
  } else if (angle >= 90 && angle < 180) {
    var _tan = Math.tan(Math.PI * (angle - 90) / 180);

    var _d = _tan * h;

    if (_d <= w) {
      ret = [x + w, y, x + w - _d, y + h];
    } else {
      _d = w / _tan;
      ret = [x + w, y, x, y + _d];
    }
  } else if (angle >= 180 && angle < 270) {
    var _tan2 = Math.tan(Math.PI * (angle - 180) / 180);

    var _d2 = _tan2 * w;

    if (_d2 <= h) {
      ret = [x + w, y + h, x, y + h - _d2];
    } else {
      _d2 = h / _tan2;
      ret = [x + w, y + h, x + w - _d2, y];
    }
  } else if (angle >= 270 && angle < 360) {
    var _tan3 = Math.tan(Math.PI * (angle - 270) / 180);

    var _d3 = _tan3 * h;

    if (_d3 <= w) {
      ret = [x, y + h, x + _d3, y];
    } else {
      _d3 = w / _tan3;
      ret = [x, y + h, x + w, y + h - _d3];
    }
  }

  return ret;
}

function findColor(context, sprite, prop) {
  var gradients = sprite.attr('gradients') || {};
  var color = prop === 'border' ? sprite.attr(prop).color : sprite.attr(prop),
      gradient;

  if (gradients[prop]) {
    /* istanbul ignore next */
    gradient = gradients[prop];
  } else if (typeof color !== 'string') {
    gradient = color;
  }

  if (gradient) {
    var _gradient = gradient,
        colors = _gradient.colors,
        vector = _gradient.vector,
        direction = _gradient.direction,
        rect = _gradient.rect;
    /* istanbul ignore if  */

    if (direction != null) {
      if (prop === 'border') {
        rect = rect || [0, 0].concat((0, _toConsumableArray2.default)(sprite.outerSize));
      } else {
        var _sprite$attr = sprite.attr('border'),
            borderWidth = _sprite$attr.width;

        rect = rect || [borderWidth, borderWidth].concat((0, _toConsumableArray2.default)(sprite.innerSize));
      }

      vector = gradientBox(direction, rect);
    }

    if (vector.length === 4) {
      color = context.createLinearGradient.apply(context, (0, _toConsumableArray2.default)(vector));
    } else if (vector.length === 6) {
      color = context.createRadialGradient.apply(context, (0, _toConsumableArray2.default)(vector));
    }
    /* istanbul ignore next  */
    else if (vector.length === 3) {
        // for wxapp
        color = context.createCircularGradient.apply(context, (0, _toConsumableArray2.default)(vector));
      }
      /* istanbul ignore next  */
      else {
          throw Error('Invalid gradient vector!');
        }

    colors.forEach(function (o) {
      color.addColorStop(o.offset, o.color);
    });
  }

  return color;
}

var contextPool = [],
    contextReady = [],
    maxPollSize = 50;
var cacheContextPool = {
  get: function get(context) {
    if (contextReady.length > 0) {
      return contextReady.pop();
    }

    var canvas = context.canvas;

    if (!canvas || !canvas.cloneNode) {
      return;
    }

    var copied = canvas.cloneNode();
    return copied.getContext('2d');
  },
  flush: function flush() {
    contextReady.push.apply(contextReady, contextPool);
    contextPool.length = 0;
  },
  put: function put() {
    var size = this.size;

    for (var _len = arguments.length, contexts = new Array(_len), _key = 0; _key < _len; _key++) {
      contexts[_key] = arguments[_key];
    }

    contexts.every(function (context) {
      var ret = size++ < maxPollSize;

      if (ret) {
        context.canvas.width = 0;
        context.canvas.height = 0;
        contextPool.push(context);
      }

      return ret;
    });
  },

  get size() {
    return contextPool.length + contextReady.length;
  }

};
exports.cacheContextPool = cacheContextPool;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597667, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _decorate2 = _interopRequireDefault(require("@babel/runtime/helpers/decorate"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _spriteMath = require("sprite-math");

var _spriteAnimator = require("sprite-animator");

var _utils = require("../utils");

var _baseattr = _interopRequireDefault(require("./baseattr"));

var _basenode = _interopRequireDefault(require("./basenode"));

var _filters = _interopRequireDefault(require("./filters"));

var _animations = Symbol('animations'),
    _cachePriority = Symbol('cachePriority'),
    _effects = Symbol('effects'),
    _flow = Symbol('flow'),
    _releaseKeys = Symbol('releaseKeys');

var CACHE_PRIORITY_THRESHOLDS = 6; // const CACHE_PRIORITY_THRESHOLDS = 0; // disable cache_priority, for canvas drawing bug...

var BaseSprite = (0, _decorate2.default)(null, function (_initialize, _BaseNode) {
  var BaseSprite =
  /*#__PURE__*/
  function (_BaseNode2) {
    (0, _inherits2.default)(BaseSprite, _BaseNode2);

    /**
      new Sprite({
        attr: {
          ...
        }
      })
     */
    function BaseSprite(attrs) {
      var _this;

      (0, _classCallCheck2.default)(this, BaseSprite);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(BaseSprite).call(this, attrs));

      _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

      _this[_animations] = new Set();
      _this[_cachePriority] = 0;
      _this[_flow] = {};
      _this[_releaseKeys] = new Set();
      return _this;
    }

    return BaseSprite;
  }(_BaseNode);

  return {
    F: BaseSprite,
    d: [{
      kind: "field",
      static: true,
      key: "Attr",
      value: function value() {
        return _baseattr.default;
      }
    }, {
      kind: "method",
      static: true,
      key: "setAttributeEffects",
      value: function value() {
        var effects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (this.prototype[_effects] == null) {
          this.prototype[_effects] = effects;
        }

        Object.assign(this.prototype[_effects], effects);
      }
    }, {
      kind: "method",
      static: true,
      key: "addAttributes",
      value: function value() {
        var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return this.Attr.addAttributes(attrs);
      }
    }, {
      kind: "method",
      static: true,
      key: "defineAttributes",
      value: function value(attrs, effects) {
        this.Attr =
        /*#__PURE__*/
        function (_this$Attr) {
          (0, _inherits2.default)(_class, _this$Attr);

          function _class(subject) {
            var _this2;

            (0, _classCallCheck2.default)(this, _class);
            _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this, subject));

            if (attrs.init) {
              attrs.init.call((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this2)), (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this2)), subject);
            }

            return _this2;
          }

          return _class;
        }(this.Attr);

        if (attrs) this.addAttributes(attrs);
        if (effects) this.setAttributeEffects(effects);
        return this.Attr;
      }
    }, {
      kind: "get",
      key: "effects",
      value: function value() {
        return this[_effects];
      }
    }, {
      kind: "method",
      key: "setReleaseKey",
      value: function value(key) {
        this[_releaseKeys].add(key);
      }
    }, {
      kind: "method",
      key: "reflow",
      value: function value() {
        this[_flow] = {};
      }
    }, {
      kind: "method",
      key: "flow",
      value: function value(prop, _value) {
        if (_value === undefined) {
          return this[_flow][prop];
        }

        this[_flow][prop] = _value;
      }
    }, {
      kind: "get",
      key: "hasLayout",
      value: function value() {
        if (this.attr('position') === 'absolute') return false;

        if (this.parent && this.parent.relayout) {
          var display = this.parent.attr('display');
          return display !== '' && display !== 'static';
        }

        return false;
      }
    }, {
      kind: "set",
      key: "zIndex",
      value: function value(val) {
        this.attr('zIndex', val);
      }
    }, {
      kind: "get",
      key: "zIndex",
      value: function value() {
        return this.attr('zIndex');
      }
    }, {
      kind: "get",
      key: "isVirtual",
      value: function value() {
        return false;
      }
    }, {
      kind: "method",
      key: "isVisible",
      value: function value() {
        if (!this.parent) return false;
        var display = this.attr('display');

        if (display === 'none') {
          return false;
        }

        var opacity = this.attr('opacity');

        if (opacity <= 0) {
          return false;
        }

        if (this.isVirtual) return true;

        var _this$offsetSize = (0, _slicedToArray2.default)(this.offsetSize, 2),
            width = _this$offsetSize[0],
            height = _this$offsetSize[1];

        if (width <= 0 || height <= 0) {
          return false;
        }

        if (this.parent.isVisible) {
          return this.parent.isVisible();
        }

        return true;
      }
    }, {
      kind: "get",
      key: "transform",
      value: function value() {
        var transform = new _spriteMath.Matrix(this.attr('transformMatrix'));
        var transformOrigin = this.attr('transformOrigin');

        if (transformOrigin) {
          var t = new _spriteMath.Matrix();
          t.translate.apply(t, (0, _toConsumableArray2.default)(transformOrigin));
          t.multiply(transform);
          t.translate.apply(t, (0, _toConsumableArray2.default)(transformOrigin.map(function (v) {
            return -v;
          })));
          return t;
        }

        return transform;
      }
    }, {
      kind: "method",
      key: "connect",
      value: function value(parent) {
        var _this3 = this;

        var zOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        if (parent && typeof parent.stroke === 'function') {
          // directly connect to canvas2d context
          var node = new _basenode.default();
          node.context = parent;
          node.timeline = new _spriteAnimator.Timeline();

          node.update = function () {
            var currentTime = this.timeline.currentTime;
            node.dispatchEvent('update', {
              target: this,
              timeline: this.timeline,
              renderTime: currentTime
            }, true, true);
          };

          parent = node;
        }

        var ret = (0, _get2.default)((0, _getPrototypeOf2.default)(BaseSprite.prototype), "connect", this).call(this, parent, zOrder);
        Object.defineProperty(this, 'context', {
          get: function get() {
            return parent.cache || parent.context;
          },
          configurable: true
        });

        this[_animations].forEach(function (animation) {
          if (parent.layer) {
            animation.baseTimeline = parent.layer.timeline;
          }

          animation.play();
          animation.finished.then(function () {
            _this3[_animations].delete(animation);
          });
        });

        if (this.hasLayout) this.clearLayout();
        this.reflow();
        return ret;
      }
    }, {
      kind: "method",
      key: "disconnect",
      value: function value(parent) {
        var _this4 = this;

        this[_animations].forEach(function (animation) {
          return animation.cancel();
        });

        if (this.cache) {
          this.cache = null;
        }

        if (this.hasLayout) this.clearLayout();
        this.reflow();
        var ret = (0, _get2.default)((0, _getPrototypeOf2.default)(BaseSprite.prototype), "disconnect", this).call(this, parent);
        delete this.context;
        (0, _toConsumableArray2.default)(this[_releaseKeys]).forEach(function (key) {
          return delete _this4[key];
        });
        return ret;
      }
    }, {
      kind: "get",
      decorators: [_utils.absolute],
      key: "xy",
      value: function value() {
        var x, y;

        if (this.hasLayout) {
          x = this.attr('layoutX');
          y = this.attr('layoutY');
        } else {
          var _this$attr = this.attr('pos');

          var _this$attr2 = (0, _slicedToArray2.default)(_this$attr, 2);

          x = _this$attr2[0];
          y = _this$attr2[1];
        }

        return [x, y];
      }
    }, {
      kind: "get",
      key: "animations",
      value: function value() {
        return this[_animations];
      }
    }, {
      kind: "get",
      decorators: [_utils.absolute, _utils.flow],
      key: "attrSize",
      value: function value() {
        var _this$attr3 = this.attr('size'),
            _this$attr4 = (0, _slicedToArray2.default)(_this$attr3, 2),
            width = _this$attr4[0],
            height = _this$attr4[1];

        var isBorderBox = this.attr('boxSizing') === 'border-box';

        if (this.hasLayout) {
          var layoutWidth = this.attr('layoutWidth'),
              layoutHeight = this.attr('layoutHeight');
          var _ref = [layoutWidth !== '' ? layoutWidth : width, layoutHeight !== '' ? layoutHeight : height];
          width = _ref[0];
          height = _ref[1];
        }

        if (isBorderBox) {
          var borderWidth = this.attr('border').width,
              _this$attr5 = this.attr('padding'),
              _this$attr6 = (0, _slicedToArray2.default)(_this$attr5, 4),
              paddingTop = _this$attr6[0],
              paddingRight = _this$attr6[1],
              paddingBottom = _this$attr6[2],
              paddingLeft = _this$attr6[3];

          if (width !== '') {
            width = Math.max(0, width - 2 * borderWidth - paddingLeft - paddingRight);
          }

          if (height !== '') {
            height = Math.max(0, height - 2 * borderWidth - paddingTop - paddingBottom);
          }
        }

        return [width, height];
      }
    }, {
      kind: "get",
      decorators: [_utils.absolute, _utils.flow],
      key: "boxOffsetSize",
      value: function value() {
        // get original boxSize, without layout
        if (this.isVirtual) return [0, 0];

        var _this$attr7 = this.attr('size'),
            _this$attr8 = (0, _slicedToArray2.default)(_this$attr7, 2),
            width = _this$attr8[0],
            height = _this$attr8[1];

        var _this$attr9 = this.attr('padding'),
            _this$attr10 = (0, _slicedToArray2.default)(_this$attr9, 4),
            top = _this$attr10[0],
            right = _this$attr10[1],
            bottom = _this$attr10[2],
            left = _this$attr10[3];

        var _this$attr11 = this.attr('border'),
            borderWidth = _this$attr11.width,
            lw = borderWidth * 2;

        return [left + (width | 0) + right + lw, top + (height | 0) + bottom + lw];
      }
    }, {
      kind: "get",
      decorators: [_utils.flow],
      key: "contentSize",
      value: function value() {
        if (this.isVirtual) return [0, 0];

        var _this$attrSize = (0, _slicedToArray2.default)(this.attrSize, 2),
            width = _this$attrSize[0],
            height = _this$attrSize[1];

        return [width | 0, height | 0];
      }
    }, {
      kind: "get",
      decorators: [_utils.flow],
      key: "clientSize",
      value: function value() {
        var _this$attr12 = this.attr('padding'),
            _this$attr13 = (0, _slicedToArray2.default)(_this$attr12, 4),
            top = _this$attr13[0],
            right = _this$attr13[1],
            bottom = _this$attr13[2],
            left = _this$attr13[3],
            _this$contentSize = (0, _slicedToArray2.default)(this.contentSize, 2),
            width = _this$contentSize[0],
            height = _this$contentSize[1];

        return [left + width + right, top + height + bottom];
      }
    }, {
      kind: "get",
      decorators: [_utils.flow],
      key: "offsetSize",
      value: function value() {
        var _this$attr14 = this.attr('border'),
            borderWidth = _this$attr14.width,
            _this$clientSize = (0, _slicedToArray2.default)(this.clientSize, 2),
            width = _this$clientSize[0],
            height = _this$clientSize[1];

        return [width + 2 * borderWidth, height + 2 * borderWidth];
      }
    }, {
      kind: "get",
      key: "layoutSize",
      value: function value() {
        var size = this.offsetSize;

        var _this$attr15 = this.attr('margin'),
            _this$attr16 = (0, _slicedToArray2.default)(_this$attr15, 4),
            top = _this$attr16[0],
            right = _this$attr16[1],
            bottom = _this$attr16[2],
            left = _this$attr16[3];

        return [left + size[0] + right, top + size[1] + bottom];
      }
    }, {
      kind: "get",
      key: "innerSize",
      value: function value() {
        return this.contentSize;
      }
    }, {
      kind: "get",
      key: "outerSize",
      value: function value() {
        return this.offsetSize;
      }
    }, {
      kind: "method",
      key: "getParentXY",
      value: function value() {
        var lx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var ly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var layer = this.layer;
        if (!layer) return [0, 0];
        var parents = [];
        var target = this.parent;

        while (target && target !== layer) {
          parents.push(target);
          target = target.parent;
        }

        parents.reverse();
        var parentX = lx,
            parentY = ly;
        parents.forEach(function (node) {
          var scrollLeft = node.attr('scrollLeft'),
              scrollTop = node.attr('scrollTop'),
              borderWidth = node.attr('border').width,
              padding = node.attr('padding');

          var _node$pointToOffset = node.pointToOffset(parentX, parentY);

          var _node$pointToOffset2 = (0, _slicedToArray2.default)(_node$pointToOffset, 2);

          parentX = _node$pointToOffset2[0];
          parentY = _node$pointToOffset2[1];
          parentX = parentX - node.originalRect[0] - borderWidth - padding[3] + scrollLeft;
          parentY = parentY - node.originalRect[1] - borderWidth - padding[0] + scrollTop;
        });
        return [parentX, parentY];
      }
    }, {
      kind: "method",
      key: "getLayerXY",
      value: function value() {
        var dx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var dy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var layer = this.layer;
        if (!layer) return [0, 0];
        var target = this;
        var x = dx,
            y = dy;

        while (target && target !== layer) {
          var _target$offsetToPoint = target.offsetToPoint(x, y);

          var _target$offsetToPoint2 = (0, _slicedToArray2.default)(_target$offsetToPoint, 2);

          x = _target$offsetToPoint2[0];
          y = _target$offsetToPoint2[1];
          var parent = target.parent;

          if (parent !== layer) {
            var borderWidth = parent.attr('border').width;
            var padding = parent.attr('padding'),
                scrollLeft = parent.attr('scrollLeft') || 0,
                scrollTop = parent.attr('scrollTop') || 0; // const parentX = evt.offsetX - this.originalRect[0] - borderWidth - padding[3] + scrollLeft
            // const parentY = evt.offsetY - this.originalRect[1] - borderWidth - padding[0] + scrollTop

            x = x + parent.originalRect[0] + borderWidth + padding[3] - scrollLeft;
            y = y + parent.originalRect[1] + borderWidth + padding[0] - scrollTop;
          }

          target = parent;
        }

        return [x, y];
      }
    }, {
      kind: "get",
      key: "boundingRect",
      value: function value() {
        var transform = this.transform;

        var _this$originalRect = (0, _slicedToArray2.default)(this.originalRect, 4),
            ox = _this$originalRect[0],
            oy = _this$originalRect[1],
            width = _this$originalRect[2],
            height = _this$originalRect[3];

        if (this.hasLayout) {
          var margin = this.attr('margin');
          width += margin[1];
          height += margin[2];
        }

        var vertexs = [[ox, oy], [width + ox, oy], [ox, height + oy], [width + ox, height + oy]];
        var transformed = vertexs.map(function (v) {
          return transform.transformPoint(v[0], v[1]);
        });
        var vx = transformed.map(function (v) {
          return v[0];
        }),
            vy = transformed.map(function (v) {
          return v[1];
        });
        var minX = Math.min.apply(Math, (0, _toConsumableArray2.default)(vx)),
            minY = Math.min.apply(Math, (0, _toConsumableArray2.default)(vy)),
            maxX = Math.max.apply(Math, (0, _toConsumableArray2.default)(vx)),
            maxY = Math.max.apply(Math, (0, _toConsumableArray2.default)(vy));
        return [minX, minY].concat([maxX - minX, maxY - minY]);
      }
    }, {
      kind: "get",
      decorators: [_utils.flow],
      key: "originalRect",
      value: function value() {
        var _this$offsetSize2 = (0, _slicedToArray2.default)(this.offsetSize, 2),
            width = _this$offsetSize2[0],
            height = _this$offsetSize2[1],
            _this$attr17 = this.attr('anchor'),
            _this$attr18 = (0, _slicedToArray2.default)(_this$attr17, 2),
            anchorX = _this$attr18[0],
            anchorY = _this$attr18[1];

        var rect = [-anchorX * width, -anchorY * height, width, height];

        if (this.hasLayout) {
          var margin = this.attr('margin');
          rect[0] += margin[3];
          rect[1] += margin[0];
        }

        return rect;
      }
    }, {
      kind: "get",
      key: "originalRenderRect",
      value: function value() {
        var bound = this.originalRect,
            pos = this.xy;
        return [pos[0] + bound[0], pos[1] + bound[1], bound[2], bound[3]];
      }
    }, {
      kind: "get",
      key: "renderBox",
      value: function value() {
        var bound = this.boundingRect,
            pos = this.xy;
        return [pos[0] + bound[0], pos[1] + bound[1], pos[0] + bound[0] + bound[2], pos[1] + bound[1] + bound[3]];
      }
    }, {
      kind: "get",
      key: "renderRect",
      value: function value() {
        var _this$renderBox = (0, _slicedToArray2.default)(this.renderBox, 4),
            x0 = _this$renderBox[0],
            y0 = _this$renderBox[1],
            x1 = _this$renderBox[2],
            y1 = _this$renderBox[3];

        return [x0, y0, x1 - x0, y1 - y0];
      }
    }, {
      kind: "get",
      key: "vertices",
      value: function value() {
        var vertices = (0, _utils.rectVertices)(this.originalRect),
            transform = this.transform,
            _this$xy = (0, _slicedToArray2.default)(this.xy, 2),
            x0 = _this$xy[0],
            y0 = _this$xy[1];

        return vertices.map(function (v) {
          var _transform$transformP = transform.transformPoint(v[0], v[1]),
              _transform$transformP2 = (0, _slicedToArray2.default)(_transform$transformP, 2),
              x = _transform$transformP2[0],
              y = _transform$transformP2[1];

          return [x0 + x, y0 + y];
        });
      }
    }, {
      kind: "set",
      key: "cache",
      value: function value(context) {
        if (context == null) {
          this[_cachePriority] = 0;

          if (this.parent && this.parent.cache) {
            this.parent.cache = null;
          }
        }

        if (this.cacheContext && context !== this.cacheContext) {
          _utils.cacheContextPool.put(this.cacheContext);
        }

        this.cacheContext = context;
      }
    }, {
      kind: "get",
      key: "cache",
      value: function value() {
        if (this[_cachePriority] >= CACHE_PRIORITY_THRESHOLDS) {
          return this.cacheContext;
        }

        if (this.cacheContext) {
          this.cache = null;
        }

        return false;
      }
    }, {
      kind: "method",
      decorators: [(0, _utils.deprecate)('Instead use sprite.cache = null')],
      key: "clearCache",
      value: function value() {
        this.cache = null;
      }
    }, {
      kind: "method",
      key: "appendTo",
      value: function value(parent) {
        parent.appendChild(this);
      }
    }, {
      kind: "method",
      key: "forceUpdate",
      value: function value() {
        var clearCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (clearCache) {
          this.cache = null;
        }

        (0, _get2.default)((0, _getPrototypeOf2.default)(BaseSprite.prototype), "forceUpdate", this).call(this);
      }
    }, {
      kind: "method",
      key: "pointToOffset",
      value: function value(x, y) {
        var _this$xy2 = (0, _slicedToArray2.default)(this.xy, 2),
            x0 = _this$xy2[0],
            y0 = _this$xy2[1];

        var dx = x - x0,
            dy = y - y0;
        var transform = this.transform;
        return transform.inverse().transformPoint(dx, dy);
      }
    }, {
      kind: "method",
      key: "offsetToPoint",
      value: function value(dx, dy) {
        var transform = this.transform;

        var _this$xy3 = (0, _slicedToArray2.default)(this.xy, 2),
            x0 = _this$xy3[0],
            y0 = _this$xy3[1];

        var _transform$transformP3 = transform.transformPoint(dx, dy),
            _transform$transformP4 = (0, _slicedToArray2.default)(_transform$transformP3, 2),
            x = _transform$transformP4[0],
            y = _transform$transformP4[1];

        return [x + x0, y + y0];
      }
    }, {
      kind: "method",
      key: "getOffsetXY",
      value: function value(evt) {
        var parentX, parentY;

        if (evt.parentX != null) {
          // group
          parentX = evt.parentX;
          parentY = evt.parentY;
        } else {
          parentX = evt.layerX;
          parentY = evt.layerY;
        }

        if (parentX != null && parentY != null) {
          return this.pointToOffset(parentX, parentY);
        }
      }
    }, {
      kind: "method",
      key: "dispatchEvent",
      value: function value(type, evt) {
        var collisionState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var swallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var useCapturePhase = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

        if (collisionState) {
          var offsetXY = this.getOffsetXY(evt);

          if (offsetXY) {
            evt.offsetX = offsetXY[0];
            evt.offsetY = offsetXY[1];
          }
        }

        return (0, _get2.default)((0, _getPrototypeOf2.default)(BaseSprite.prototype), "dispatchEvent", this).call(this, type, evt, collisionState, swallow, useCapturePhase);
      }
    }, {
      kind: "method",
      key: "pointCollision",
      value: function value(evt) {
        /* istanbul ignore if */
        if (!this.isVisible()) {
          return false;
        }

        var offsetXY = this.getOffsetXY(evt);
        if (!offsetXY) return true;

        var _offsetXY = (0, _slicedToArray2.default)(offsetXY, 2),
            nx = _offsetXY[0],
            ny = _offsetXY[1];

        evt.offsetX = nx;
        evt.offsetY = ny;

        var _this$originalRect2 = (0, _slicedToArray2.default)(this.originalRect, 4),
            ox = _this$originalRect2[0],
            oy = _this$originalRect2[1],
            ow = _this$originalRect2[2],
            oh = _this$originalRect2[3];

        if (nx >= ox && nx - ox < ow && ny >= oy && ny - oy < oh) {
          if (this.context && this.context.isPointInPath) {
            var borderWidth = this.attr('border').width,
                borderRadius = this.attr('borderRadius');

            if (borderWidth || borderRadius) {
              var _this$outerSize = (0, _slicedToArray2.default)(this.outerSize, 2),
                  width = _this$outerSize[0],
                  height = _this$outerSize[1];

              var x = 0,
                  y = 0,
                  w = width,
                  h = height,
                  r = borderRadius;
              (0, _utils.drawRadiusBox)(this.context, [x, y, w, h], r);

              if (this.layer && this.layer.offset) {
                nx += this.layer.offset[0];
                ny += this.layer.offset[1];
              }

              return this.context.isPointInPath(nx - ox, ny - oy);
            }
          }

          return true;
        }
      }
    }, {
      kind: "method",
      key: "OBBCollision",
      value: function value(sprite) {
        // vertices: [p1, p2, p3, p4]
        var _this$vertices = (0, _slicedToArray2.default)(this.vertices, 3),
            p11 = _this$vertices[0],
            p12 = _this$vertices[1],
            p13 = _this$vertices[2],
            _sprite$vertices = (0, _slicedToArray2.default)(sprite.vertices, 3),
            p21 = _sprite$vertices[0],
            p22 = _sprite$vertices[1],
            p23 = _sprite$vertices[2];

        var a1 = new _spriteMath.Vector(p12, p11).unit(),
            a2 = new _spriteMath.Vector(p13, p12).unit(),
            a3 = new _spriteMath.Vector(p22, p21).unit(),
            a4 = new _spriteMath.Vector(p23, p22).unit(); // The projection of the axis of a vertex in a certain direction

        function verticesProjection(vertices, axis) {
          var _vertices$map = vertices.map(function (v) {
            return axis.dot(new _spriteMath.Vector(v));
          }),
              _vertices$map2 = (0, _slicedToArray2.default)(_vertices$map, 4),
              p1 = _vertices$map2[0],
              p2 = _vertices$map2[1],
              p3 = _vertices$map2[2],
              p4 = _vertices$map2[3];

          return [Math.min(p1, p2, p3, p4), Math.max(p1, p2, p3, p4)];
        }

        function projectionIntersect(p1, p2) {
          var m1 = (p1[0] + p1[1]) / 2,
              l1 = Math.abs(p1[1] - p1[0]),
              m2 = (p2[0] + p2[1]) / 2,
              l2 = Math.abs(p2[1] - p2[0]);
          return Math.abs(m2 - m1) <= (l1 + l2) / 2;
        }

        return projectionIntersect(verticesProjection(this.vertices, a1), verticesProjection(sprite.vertices, a1)) && projectionIntersect(verticesProjection(this.vertices, a2), verticesProjection(sprite.vertices, a2)) && projectionIntersect(verticesProjection(this.vertices, a3), verticesProjection(sprite.vertices, a3)) && projectionIntersect(verticesProjection(this.vertices, a4), verticesProjection(sprite.vertices, a4));
      }
    }, {
      kind: "method",
      key: "relayout",
      value: function value() {}
    }, {
      kind: "method",
      key: "draw",
      value: function value(t) {
        var drawingContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;
        // eslint-disable-line complexity
        (0, _get2.default)((0, _getPrototypeOf2.default)(BaseSprite.prototype), "draw", this).call(this, t, drawingContext);

        if (!this.isVisible()) {
          return;
        }

        var bound = this.originalRect;
        var cachableContext = !this.isVirtual && this.cache;
        var filter = this.attr('filter'),
            shadow = this.attr('shadow'),
            clipOverflow = this.attr('clipOverflow'),
            enableCache = this.attr('enableCache') === true || this.attr('enableCache') === 'auto' && !this.__labelCount && clipOverflow || shadow || filter;
        var ratio = this.layer ? this.layer.displayRatio || 1.0 : 1.0;

        if (enableCache && (shadow || filter || cachableContext !== false) && !cachableContext) {
          cachableContext = _utils.cacheContextPool.get(drawingContext);

          if (cachableContext) {
            // +2 to solve 1px problem
            cachableContext.canvas.width = Math.ceil(bound[2] * ratio) + 2;
            cachableContext.canvas.height = Math.ceil(bound[3] * ratio) + 2;
          }
        }

        var evtArgs = {
          context: drawingContext,
          cacheContext: cachableContext,
          target: this,
          renderTime: t,
          fromCache: !!this.cache
        };
        drawingContext.save();
        drawingContext.translate.apply(drawingContext, (0, _toConsumableArray2.default)(this.xy));
        drawingContext.transform.apply(drawingContext, (0, _toConsumableArray2.default)(this.transform.m)); // fix for wxapp

        var alpha = drawingContext.globalAlpha != null ? drawingContext.globalAlpha : 1;
        drawingContext.globalAlpha = alpha * this.attr('opacity');

        if (!cachableContext) {
          drawingContext.translate(bound[0], bound[1]);
        } else {
          cachableContext.save(); // solve 1px problem

          cachableContext.translate(bound[0] - Math.floor(bound[0]) + 1, bound[1] - Math.floor(bound[1]) + 1);

          if (ratio !== 1.0) {
            cachableContext.scale(ratio, ratio);
          }
        }

        this.dispatchEvent('beforedraw', evtArgs, true, true);

        if (cachableContext) {
          // set cache before render for group
          if (!this.cache) {
            this.cache = cachableContext;
            this.render(t, cachableContext);
          }
        } else {
          this.render(t, drawingContext);
        }

        if ((shadow || filter) && !cachableContext) {
          console.warn('No cachable context. Shadows and filters have been ignored.');
        }

        if (!clipOverflow && cachableContext) {
          console.warn('Clip overflow is ignored because of cache enabled.');
        }

        if (cachableContext && cachableContext.canvas.width > 0 && cachableContext.canvas.height > 0) {
          if (filter) {
            drawingContext.filter = _filters.default.compile(filter);
          }

          if (shadow) {
            var blur = shadow.blur,
                color = shadow.color,
                offset = shadow.offset;
            blur = blur || 1;
            color = color || 'rgba(0,0,0,1)';
            drawingContext.shadowBlur = blur;
            drawingContext.shadowColor = color;

            if (offset) {
              drawingContext.shadowOffsetX = offset[0];
              drawingContext.shadowOffsetY = offset[1];
            }
          }

          drawingContext.drawImage(cachableContext.canvas, Math.floor(bound[0]) - 1, Math.floor(bound[1]) - 1, bound[2] + 2, bound[3] + 2);
        }

        this.dispatchEvent('afterdraw', evtArgs, true, true);

        if (cachableContext) {
          cachableContext.restore();
        }

        drawingContext.restore();
        this[_cachePriority]++;
        return drawingContext;
      }
    }, {
      kind: "get",
      key: "needRender",
      value: function value() {
        if (this.isVirtual) return false;

        var _this$offsetSize3 = (0, _slicedToArray2.default)(this.offsetSize, 2),
            offsetWidth = _this$offsetSize3[0],
            offsetHeight = _this$offsetSize3[1];

        if (offsetWidth <= 0 || offsetHeight <= 0) return false;
        var border = this.attr('border');

        if (border.width <= 0 && this.attr('borderRadius') <= 0 && !this.attr('bgcolor') && !this.attr('gradients').bgcolor && !this.attr('bgimage')) {
          return false; // don't need to render
        }

        return true;
      }
    }, {
      kind: "method",
      key: "show",
      value: function value() {
        this.attr('display', this.__originalDisplay || '');
        return this;
      }
    }, {
      kind: "method",
      key: "hide",
      value: function value() {
        var display = this.attr('display');

        if (display !== 'none') {
          this.__originalDisplay = display;
          this.attr('display', 'none');
        }

        return this;
      }
    }, {
      kind: "method",
      key: "render",
      value: function value(t, drawingContext) {
        var border = this.attr('border'),
            borderRadius = this.attr('borderRadius'),
            padding = this.attr('padding'),
            _this$offsetSize4 = (0, _slicedToArray2.default)(this.offsetSize, 2),
            offsetWidth = _this$offsetSize4[0],
            offsetHeight = _this$offsetSize4[1],
            _this$clientSize2 = (0, _slicedToArray2.default)(this.clientSize, 2),
            clientWidth = _this$clientSize2[0],
            clientHeight = _this$clientSize2[1];

        if (!this.needRender) {
          drawingContext.translate(padding[3], padding[0]);
          return false;
        }

        var borderWidth = border.width;
        var borderStyle = border.style; // draw border

        if (borderWidth) {
          drawingContext.lineWidth = borderWidth;
          var x = borderWidth / 2,
              y = borderWidth / 2,
              w = offsetWidth - borderWidth,
              h = offsetHeight - borderWidth,
              r = borderRadius;
          (0, _utils.drawRadiusBox)(drawingContext, [x, y, w, h], r);
          drawingContext.save();

          if (borderStyle && borderStyle !== 'solid') {
            var dashOffset = this.attr('dashOffset');
            drawingContext.lineDashOffset = dashOffset;

            if (borderStyle === 'dashed') {
              borderStyle = [borderWidth * 3, borderWidth * 3];
            }

            drawingContext.setLineDash(borderStyle);
          }

          drawingContext.strokeStyle = (0, _utils.findColor)(drawingContext, this, 'border');
          drawingContext.stroke();
          drawingContext.restore();
        } // draw bgcolor


        var bgcolor = (0, _utils.findColor)(drawingContext, this, 'bgcolor');
        var bgimage = this.attr('bgimage');

        if (!this.cacheContext || borderWidth || borderRadius || bgcolor || bgimage && bgimage.display !== 'none') {
          var _x = borderWidth,
              _y = borderWidth,
              _w = clientWidth,
              _h = clientHeight,
              _r = borderRadius;

          if (Array.isArray(_r)) {
            _r = _r.map(function (r) {
              return r - borderWidth / 2;
            });
          }

          (0, _utils.drawRadiusBox)(drawingContext, [_x, _y, _w, _h], _r);

          if (bgcolor) {
            drawingContext.fillStyle = bgcolor;
            drawingContext.fill();
          } // clip is expensive, we should only perform clip when it has to.


          if (bgimage && bgimage.display !== 'none' || borderRadius && (this.nodeType !== 'sprite' || this.textures && this.textures.length)) {
            drawingContext.clip();
          }

          if (bgimage && bgimage.image && bgimage.display !== 'none') {
            drawBgImage(drawingContext, bgimage, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight);
          }
        }

        drawingContext.translate(borderWidth + padding[3], borderWidth + padding[0]);
        return true;
      }
    }]
  };
}, _basenode.default);
exports.default = BaseSprite;

function drawDot9Image(drawingContext, image, clip9, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight) {
  var w = image.width,
      h = image.height;

  var _ref2 = clip9 || [16, 16, 16, 16],
      _ref3 = (0, _slicedToArray2.default)(_ref2, 4),
      top = _ref3[0],
      right = _ref3[1],
      bottom = _ref3[2],
      left = _ref3[3];

  var leftTop = [0, 0, left, top],
      rightTop = [w - right, 0, right, top],
      rightBottom = [w - right, h - bottom, right, bottom],
      leftBottom = [0, h - bottom, left, bottom];
  var boxRight = offsetWidth - right - borderWidth,
      boxBottom = offsetHeight - borderWidth - bottom; // draw .9 cross

  var midWidth = w - left - right,
      midHeight = h - top - bottom;

  if (midWidth > 0) {
    var midBoxWidth = clientWidth - left - right + 2;
    var leftOffset = borderWidth + left - 1;

    while (midBoxWidth > 0) {
      var ww = Math.min(midBoxWidth, midWidth) + 1;
      var topPiece = [left - 1, 0, ww, top],
          bottomPiece = [left - 1, h - bottom, ww, bottom];
      drawingContext.drawImage.apply(drawingContext, [image].concat(topPiece, [leftOffset, borderWidth, ww, top]));
      drawingContext.drawImage.apply(drawingContext, [image].concat(bottomPiece, [leftOffset, boxBottom, ww, bottom]));
      midBoxWidth -= midWidth;

      if (midBoxWidth > 0) {
        leftOffset += midWidth;
      }
    }
  }

  if (midHeight > 0) {
    var midBoxHeight = clientHeight - top - bottom + 2;
    var topOffset = borderWidth + top - 1;

    while (midBoxHeight > 0) {
      var hh = Math.min(midBoxHeight, midHeight) + 1;
      var leftPiece = [0, top - 1, left, hh],
          rightPiece = [w - right, top - 1, right, hh];
      drawingContext.drawImage.apply(drawingContext, [image].concat(leftPiece, [borderWidth, topOffset, left, hh]));
      drawingContext.drawImage.apply(drawingContext, [image].concat(rightPiece, [boxRight, topOffset, right, hh]));
      midBoxHeight -= midHeight;

      if (midBoxHeight > 0) {
        topOffset += midHeight;
      }
    }
  }

  if (midHeight && midWidth > 0) {
    var _midBoxWidth = clientWidth - left - right + 2;

    var _leftOffset = borderWidth + left - 1;

    while (_midBoxWidth > 0) {
      var _midBoxHeight = clientHeight - top - bottom + 2;

      var _topOffset = borderWidth + top - 1;

      while (_midBoxHeight > 0) {
        var _ww = Math.min(_midBoxWidth, midWidth) + 1,
            _hh = Math.min(_midBoxHeight, midHeight) + 1;

        var midPiece = [left - 1, top - 1, _ww, _hh];
        drawingContext.drawImage.apply(drawingContext, [image].concat(midPiece, [_leftOffset, _topOffset, _ww, _hh]));
        _midBoxHeight -= midWidth;

        if (_midBoxHeight > 0) {
          _topOffset += midHeight;
        }
      }

      _midBoxWidth -= midWidth;

      if (_midBoxWidth > 0) {
        _leftOffset += midWidth;
      }
    }
  } // draw four corners


  drawingContext.drawImage.apply(drawingContext, [image].concat(leftTop, [borderWidth, borderWidth, left, top]));
  drawingContext.drawImage.apply(drawingContext, [image].concat(rightTop, [boxRight, borderWidth, right, top]));
  drawingContext.drawImage.apply(drawingContext, [image].concat(rightBottom, [boxRight, boxBottom, left, bottom]));
  drawingContext.drawImage.apply(drawingContext, [image].concat(leftBottom, [borderWidth, boxBottom, left, bottom]));
}

function drawBgImage(drawingContext, bgimage, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight) {
  var image = bgimage.image,
      display = bgimage.display,
      clip9 = bgimage.clip9;

  if (display === '.9') {
    drawDot9Image(drawingContext, image, clip9, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight);
  } else {
    var offset = bgimage.offset || [0, 0],
        w = image.width,
        h = image.height;

    if (display === 'center') {
      offset = [(clientWidth - w) * 0.5, (clientHeight - h) * 0.5];
    } else if (display === 'stretch') {
      w = clientWidth - offset[0];
      h = clientHeight - offset[1];
    }

    drawingContext.drawImage(image, borderWidth + offset[0], borderWidth + offset[1], w, h);

    if (w > 0 && (display === 'repeat' || display === 'repeatX')) {
      var cw = clientWidth - borderWidth - offset[0] - w;

      while (cw > borderWidth) {
        drawingContext.drawImage(image, clientWidth - cw, borderWidth + offset[1], w, h);

        if (h > 0 && display === 'repeat') {
          var ch = clientHeight - borderWidth - offset[1] - h;

          while (ch > borderWidth) {
            drawingContext.drawImage(image, clientWidth - cw, clientHeight - ch, w, h);
            ch -= h;
          }
        }

        cw -= w;
      }
    }

    if (h > 0 && (display === 'repeat' || display === 'repeatY')) {
      var _ch = clientHeight - borderWidth - offset[1] - h;

      while (_ch > borderWidth) {
        drawingContext.drawImage(image, borderWidth + offset[0], clientHeight - _ch, w, h);
        _ch -= h;
      }
    }
  }
}
}, function(modId) { var map = {"../utils":1584500597660,"./baseattr":1584500597668,"./basenode":1584500597670,"./filters":1584500597671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597668, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _decorate2 = _interopRequireDefault(require("@babel/runtime/helpers/decorate"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _svgPathToCanvas = _interopRequireDefault(require("svg-path-to-canvas"));

var _spriteMath = require("sprite-math");

var _attr = _interopRequireDefault(require("./attr"));

var _utils = require("../utils");

var cache = true,
    reflow = true,
    relayout = true;

function parseBorderValue(val) {
  if (val == null) {
    return null;
  }

  if (typeof val === 'number' || typeof val === 'string') {
    val = {
      width: parseFloat(val)
    };
  } else if (Array.isArray(val)) {
    val = {
      width: parseFloat(val[0]),
      color: (0, _utils.parseColorString)(val[1] || '#000')
    };
  } else {
    val.width = parseFloat(val.width);
    val.color = (0, _utils.parseColorString)(val.color || '#000');
  }

  val = Object.assign({
    width: 1,
    color: (0, _utils.parseColorString)('#000'),
    style: 'solid'
  }, val);
  return val;
}

var SpriteAttr = (0, _decorate2.default)(null, function (_initialize, _NodeAttr) {
  var SpriteAttr =
  /*#__PURE__*/
  function (_NodeAttr2) {
    (0, _inherits2.default)(SpriteAttr, _NodeAttr2);

    function SpriteAttr(subject) {
      var _this;

      (0, _classCallCheck2.default)(this, SpriteAttr);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SpriteAttr).call(this, subject));

      _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

      Object.defineProperty((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), '__reflowTag', {
        writable: true,
        value: false
      });
      return _this;
    }

    return SpriteAttr;
  }(_NodeAttr);

  return {
    F: SpriteAttr,
    d: [{
      kind: "method",
      key: "clearFlow",
      value: function value() {
        this.__reflowTag = true;
        return this;
      }
    }, {
      kind: "method",
      key: "set",
      value: function value(key, _value) {
        var isQuiet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        (0, _get2.default)((0, _getPrototypeOf2.default)(SpriteAttr.prototype), "set", this).call(this, key, _value, isQuiet); // auto reflow

        if (key === 'margin') {
          this.__reflowTag = true;
        }
      }
    }, {
      kind: "method",
      key: "merge",
      value: function value(attrs) {
        var _this2 = this;

        if (typeof attrs === 'string') {
          attrs = JSON.parse(attrs);
        }

        Object.entries(attrs).forEach(function (_ref) {
          var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          if (key !== 'offsetPath' && key !== 'offsetDistance' && key !== 'offsetRotate' && key !== 'offsetAngle' && key !== 'offsetPoint') {
            // this[key] = value;
            _this2.subject.attr(key, value);
          } else if (key === 'offsetPath') {
            var offsetPath = new _svgPathToCanvas.default(value);

            _this2.set('offsetPath', offsetPath.d);

            _this2.saveObj('offsetPath', offsetPath);
          } else {
            _this2.set(key, value);
          }
        });
        return this;
      }
    }, {
      kind: "method",
      key: "serialize",
      value: function value() {
        var attrs = this.getAttributes();
        delete attrs.id;
        var offsetAngle = this.get('offsetAngle');
        if (offsetAngle != null) attrs.offsetAngle = offsetAngle;
        var offsetPoint = this.get('offsetPoint');
        if (offsetPoint != null) attrs.offsetPoint = offsetPoint;
        return JSON.stringify(attrs);
      }
    }, {
      kind: "field",
      decorators: [_utils.attr],
      key: "enableCache",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(_utils.parseStringFloat, _utils.oneOrTwoValues), (0, _utils.attr)({
        cache: cache,
        relayout: relayout,
        reflow: reflow
      })],
      key: "anchor",
      value: function value() {
        return [0, 0];
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        reflow: reflow
      })],
      key: "display",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        cache: cache
      }), (0, _utils.relative)('width')],
      key: "layoutX",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        cache: cache
      }), (0, _utils.relative)('height')],
      key: "layoutY",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        cache: cache
      }), (0, _utils.relative)('width')],
      key: "x",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        cache: cache
      }), (0, _utils.relative)('height')],
      key: "y",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(_utils.parseStringInt), _utils.attr, (0, _utils.composit)(['x', 'y'])],
      key: "pos",
      value: void 0
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(_utils.parseColorString), _utils.attr],
      key: "bgcolor",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(parseFloat), (0, _utils.attr)({
        cache: cache
      })],
      key: "opacity",
      value: function value() {
        return 1;
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        reflow: reflow
      }), (0, _utils.relative)('width')],
      key: "width",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        reflow: reflow
      }), (0, _utils.relative)('height')],
      key: "height",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        reflow: reflow
      }), (0, _utils.relative)('width')],
      key: "layoutWidth",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        reflow: reflow
      }), (0, _utils.relative)('height')],
      key: "layoutHeight",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(_utils.parseStringInt), _utils.attr, (0, _utils.composit)(['width', 'height'])],
      key: "size",
      value: void 0
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(parseInt), (0, _utils.attr)({
        reflow: reflow
      })],
      key: "borderWidth",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        reflow: reflow
      })],
      key: "borderColor",
      value: function value() {
        return 'rgba(0,0,0,0)';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        reflow: reflow
      })],
      key: "borderStyle",
      value: function value() {
        return 'solid';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(parseBorderValue), _utils.attr, (0, _utils.composit)({
        width: 'borderWidth',
        color: 'borderColor',
        style: 'borderStyle'
      })],
      key: "border",
      value: void 0
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(parseFloat), (0, _utils.attr)({
        reflow: reflow
      })],
      key: "paddingTop",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(parseFloat), (0, _utils.attr)({
        reflow: reflow
      })],
      key: "paddingRight",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(parseFloat), (0, _utils.attr)({
        reflow: reflow
      })],
      key: "paddingBottom",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(parseFloat), (0, _utils.attr)({
        reflow: reflow
      })],
      key: "paddingLeft",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(_utils.parseStringInt, _utils.fourValuesShortCut), _utils.attr, (0, _utils.composit)(['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'])],
      key: "padding",
      value: void 0
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(_utils.parseStringFloat, _utils.eightValuesShortCut), (0, _utils.attr)({
        reflow: reflow
      })],
      key: "borderRadius",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        reflow: reflow
      })],
      key: "boxSizing",
      value: function value() {
        return 'content-box';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(parseFloat), _utils.attr],
      key: "dashOffset",
      value: function value() {
        return 0;
      }
    }, {
      kind: "set",
      decorators: [(0, _utils.parseValue)(_utils.parseStringTransform), (0, _utils.attr)({
        cache: cache,
        value: 'matrix(1,0,0,1,0,0)'
      })],
      key: "transform",
      value: function value(val) {
        var _this3 = this;

        /*
          rotate: 0,
          scale: [1, 1],
          translate: [0, 0],
          skew: [0, 0],
          matrix: [1,0,0,1,0,0],
         */
        Object.assign(this.__attr, {
          rotate: 0,
          scale: [1, 1],
          translate: [0, 0],
          skew: [0, 0]
        });

        if (Array.isArray(val)) {
          this.transformMatrix = val;
          this.set('transform', "matrix(".concat(val, ")"));
        } else {
          this.transformMatrix = [1, 0, 0, 1, 0, 0];
          var transformStr = [];
          Object.entries(val).forEach(function (_ref3) {
            var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
                key = _ref4[0],
                value = _ref4[1];

            if (key === 'matrix' && Array.isArray(value)) {
              _this3.transformMatrix = new _spriteMath.Matrix(value).m;
            } else {
              _this3[key] = value;
            }

            transformStr.push("".concat(key, "(").concat(value, ")"));
          });
          this.set('transform', transformStr.join(' '));
        }
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(_utils.parseStringFloat), (0, _utils.attr)({
        cache: cache
      })],
      key: "transformOrigin",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        cache: cache
      })],
      key: "transformMatrix",
      value: function value() {
        return [1, 0, 0, 1, 0, 0];
      }
    }, {
      kind: "set",
      decorators: [(0, _utils.parseValue)(parseFloat), (0, _utils.attr)({
        cache: cache,
        value: 0
      })],
      key: "rotate",
      value: function value(val) {
        var delta = this.rotate - val;
        this.set('rotate', val);
        var transform = new _spriteMath.Matrix(this.transformMatrix).rotate(-delta);
        this.transformMatrix = transform.m;
      }
    }, {
      kind: "set",
      decorators: [(0, _utils.parseValue)(_utils.parseStringFloat, _utils.oneOrTwoValues), (0, _utils.attr)({
        cache: cache,
        value: [1, 1]
      })],
      key: "scale",
      value: function value(val) {
        val = (0, _utils.oneOrTwoValues)(val).map(function (v) {
          if (Math.abs(v) > 0.001) {
            return v;
          }

          return 1 / v > 0 ? 0.001 : -0.001;
        });
        var oldVal = this.scale || [1, 1];
        var delta = [val[0] / oldVal[0], val[1] / oldVal[1]];
        this.set('scale', val);
        var offsetAngle = this.get('offsetAngle');

        if (offsetAngle) {
          this.rotate -= offsetAngle;
        }

        var transform = new _spriteMath.Matrix(this.transformMatrix);
        transform.scale.apply(transform, delta);
        this.transformMatrix = transform.m;

        if (offsetAngle) {
          this.rotate += offsetAngle;
        }
      }
    }, {
      kind: "set",
      decorators: [(0, _utils.attr)({
        cache: cache,
        value: [0, 0]
      })],
      key: "translate",
      value: function value(val) {
        var oldVal = this.translate || [0, 0];
        var delta = [val[0] - oldVal[0], val[1] - oldVal[1]];
        this.set('translate', val);
        var transform = new _spriteMath.Matrix(this.transformMatrix);
        transform.translate.apply(transform, delta);
        this.transformMatrix = transform.m;
      }
    }, {
      kind: "set",
      decorators: [(0, _utils.attr)({
        cache: cache,
        value: [0, 0]
      })],
      key: "skew",
      value: function value(val) {
        var _ref5, _transform$multiply;

        var oldVal = this.skew || [0, 0];

        var invm = (_ref5 = new _spriteMath.Matrix()).skew.apply(_ref5, (0, _toConsumableArray2.default)(oldVal)).inverse();

        this.set('skew', val);
        var transform = new _spriteMath.Matrix(this.transformMatrix);

        (_transform$multiply = transform.multiply(invm)).skew.apply(_transform$multiply, (0, _toConsumableArray2.default)(val));

        this.transformMatrix = transform.m;
      }
    }, {
      kind: "set",
      decorators: [(0, _utils.parseValue)(parseInt), (0, _utils.attr)({
        cache: cache,
        value: 0
      })],
      key: "zIndex",
      value: function value(val) {
        this.set('zIndex', val);
        var subject = this.subject;

        if (subject.parent) {
          subject.parent.sortedChildNodes = (0, _utils.sortOrderedSprites)(subject.parent.childNodes);
        }
      }
    }, {
      kind: "set",
      decorators: [_utils.attr],
      key: "linearGradients",
      value: function value(val)
      /* istanbul ignore next  */
      {
        this.gradients = val;
      }
    }, {
      kind: "get",
      key: "linearGradients",
      value: function value() {
        return this.gradients;
      }
    }, {
      kind: "field",
      decorators: [_utils.attr],
      key: "gradients",
      value: function value() {
        return {};
      }
    }, {
      kind: "method",
      key: "resetOffset",
      value: function value() {
        var offsetPath = this.offsetPath;
        var dis = this.offsetDistance;

        if (offsetPath) {
          var pathObj = this.loadObj('offsetPath');

          if (pathObj) {
            offsetPath = pathObj;
          } else {
            offsetPath = new _svgPathToCanvas.default(offsetPath);
            this.saveObj('offsetPath', offsetPath);
          }
        }

        if (offsetPath != null) {
          var len = dis * offsetPath.getTotalLength();

          var _offsetPath$getPointA = offsetPath.getPointAtLength(len),
              _offsetPath$getPointA2 = (0, _slicedToArray2.default)(_offsetPath$getPointA, 2),
              x = _offsetPath$getPointA2[0],
              y = _offsetPath$getPointA2[1];

          var angle = this.offsetRotate;

          if (angle === 'auto' || angle === 'reverse') {
            if (angle === 'reverse' && len === 0) {
              len = 1;
            }

            var _offsetPath$getPointA3 = offsetPath.getPointAtLength(angle === 'auto' ? len + 1 : len - 1),
                _offsetPath$getPointA4 = (0, _slicedToArray2.default)(_offsetPath$getPointA3, 2),
                x1 = _offsetPath$getPointA4[0],
                y1 = _offsetPath$getPointA4[1];

            if (x1 === x && y1 === y) {
              // last point
              angle = this.get('offsetAngle');
            } else {
              angle = 180 * Math.atan2(y1 - y, x1 - x) / Math.PI;
            }

            if (this.offsetRotate === 'reverse') {
              angle = -angle;
            }
          }

          var offsetAngle = this.get('offsetAngle');

          if (offsetAngle) {
            this.rotate -= offsetAngle;
          }

          this.set('offsetAngle', angle);
          this.rotate += angle;
          var offsetPoint = this.get('offsetPoint');

          if (offsetPoint) {
            this.pos = [this.x - offsetPoint[0], this.y - offsetPoint[1]];
          }

          this.set('offsetPoint', [x, y]);
          this.pos = [this.x + x, this.y + y];
        }
      }
    }, {
      kind: "set",
      decorators: [(0, _utils.attr)({
        cache: cache
      })],
      key: "offsetPath",
      value: function value(val) {
        var offsetPath = new _svgPathToCanvas.default(val);
        this.set('offsetPath', offsetPath.d);
        this.saveObj('offsetPath', offsetPath);
        this.resetOffset();
      }
    }, {
      kind: "set",
      decorators: [(0, _utils.parseValue)(parseFloat), (0, _utils.attr)({
        cache: cache,
        value: 0
      })],
      key: "offsetDistance",
      value: function value(val) {
        this.set('offsetDistance', val);
        this.resetOffset();
      }
    }, {
      kind: "set",
      decorators: [(0, _utils.attr)({
        cache: cache,
        value: 'auto'
      })],
      key: "offsetRotate",
      value: function value(val) {
        if (typeof val === 'string' && val !== 'auto' && val !== 'reverse') {
          val = parseFloat(val);
        }

        this.set('offsetRotate', val);
        this.resetOffset();
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        cache: cache
      })],
      key: "filter",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        cache: cache
      })],
      key: "shadow",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        cache: cache,
        relayout: relayout
      })],
      key: "position",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(parseFloat), (0, _utils.attr)({
        reflow: reflow,
        relayout: relayout,
        cache: cache
      })],
      key: "marginTop",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(parseFloat), (0, _utils.attr)({
        reflow: reflow,
        relayout: relayout,
        cache: cache
      })],
      key: "marginRight",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(parseFloat), (0, _utils.attr)({
        reflow: reflow,
        relayout: relayout,
        cache: cache
      })],
      key: "marginBottom",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(parseFloat), (0, _utils.attr)({
        reflow: reflow,
        relayout: relayout,
        cache: cache
      })],
      key: "marginLeft",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(_utils.parseStringInt, _utils.fourValuesShortCut), _utils.attr, (0, _utils.composit)(['marginTop', 'marginRight', 'marginBottom', 'marginLeft'])],
      key: "margin",
      value: void 0
    }, {
      kind: "set",
      decorators: [(0, _utils.attr)({
        value: ''
      })],
      key: "bgimage",
      value: function value(val) {
        if (val && val.clip9) val.clip9 = (0, _utils.fourValuesShortCut)(val.clip9);

        if (val && !val.image && this.subject.loadBgImage) {
          val = this.subject.loadBgImage(val);
        }

        this.set('bgimage', val);
      }
    }, {
      kind: "field",
      decorators: [_utils.attr],
      key: "clipOverflow",
      value: function value() {
        return true;
      }
    }]
  };
}, _attr.default);
exports.default = SpriteAttr;
}, function(modId) { var map = {"./attr":1584500597669,"../utils":1584500597660}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597669, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _decorate2 = _interopRequireDefault(require("@babel/runtime/helpers/decorate"));

var _utils = require("../utils");

var _attr = Symbol('attr'),
    _style = Symbol('style'),
    _temp = Symbol('store'),
    _subject = Symbol('subject'),
    _default = Symbol('default');

var Attr = (0, _decorate2.default)(null, function (_initialize) {
  var Attr = function Attr(subject) {
    (0, _classCallCheck2.default)(this, Attr);

    _initialize(this);

    this[_subject] = subject;
    this[_default] = {};
    this[_attr] = {};
    this[_style] = {};
    this.__cached = {};
    if (!subject.updateStyles) subject.updateStyles = function () {};
    this[_temp] = new Map(); // save non-serialized values

    Object.defineProperty(this, '__attributesSet', {
      value: new Set()
    });
    Object.defineProperty(this, '__styleTag', {
      writable: true,
      value: false
    });
    Object.defineProperty(this, '__updateTag', {
      writable: true,
      value: false
    });
  };

  return {
    F: Attr,
    d: [{
      kind: "field",
      static: true,
      key: "relatedAttributes",
      value: function value() {
        return _utils.relatedAttributes;
      }
    }, {
      kind: "field",
      static: true,
      key: "attributeNames",
      value: function value() {
        return _utils.attributeNames;
      }
    }, {
      kind: "method",
      static: true,
      key: "addAttributes",
      value: function value(attrs) {
        var descriptors = {};
        Object.entries(attrs).forEach(function (_ref) {
          var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
              key = _ref2[0],
              v = _ref2[1];

          if (typeof v === 'function') {
            var _setter = v;
            v = {
              set: function set(val) {
                _setter(this, val);
              }
            };
          }

          var _v = v,
              wrappers = _v.decorators,
              value = _v.value,
              get = _v.get,
              set = _v.set;
          wrappers = wrappers || [_utils.attr];

          if (set == null) {
            set = function set(val) {
              this.set(key, val);
            };
          }

          if (get == null) {
            get = function get() {
              return this.get(key);
            };
          }

          var $decorator = _utils.decorators.apply(void 0, (0, _toConsumableArray2.default)(wrappers));

          descriptors[key] = $decorator(key, value, {
            set: set,
            get: get
          });
        });
        Object.defineProperties(this.prototype, descriptors);
      }
    }, {
      kind: "get",
      key: "__attr",
      value: function value() {
        return this[_attr];
      }
    }, {
      kind: "method",
      key: "setDefault",
      value: function value(attrs) {
        Object.assign(this[_default], attrs);
      }
    }, {
      kind: "method",
      key: "getDefaultValue",
      value: function value(key, defaultValue) {
        if (key in this[_default]) return this[_default][key];
        return defaultValue;
      }
    }, {
      kind: "method",
      key: "saveObj",
      value: function value(key, val) {
        this[_temp].set(key, val);

        this.__updateTag = true;
      }
    }, {
      kind: "method",
      key: "loadObj",
      value: function value(key) {
        return this[_temp].get(key);
      }
    }, {
      kind: "method",
      key: "quietSet",
      value: function value(key, val) {
        this.set(key, val, true);
      }
    }, {
      kind: "method",
      key: "clearStyle",
      value: function value() {
        this[_style] = {};
      }
    }, {
      kind: "method",
      key: "clearLayout",
      value: function value() {
        this.__clearLayout = true;
        return this;
      }
    }, {
      kind: "get",
      key: "style",
      value: function value() {
        return this[_style];
      }
    }, {
      kind: "method",
      key: "set",
      value: function value(key, val) {
        var isQuiet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        this.__quietTag = isQuiet;
        var oldVal;

        if (isQuiet && key.length > 5 && key.indexOf('data-') === 0) {
          var dataKey = key.slice(5);
          oldVal = this.subject.data(dataKey);
          this.subject.data(dataKey, val);
        } else if (this.__styleTag) {
          oldVal = this[_style][key];

          if (val != null) {
            this[_style][key] = val;
          } else {
            delete this[_style][key];
          }
        } else {
          oldVal = this[_attr][key];
        }

        if (val && (0, _typeof2.default)(val) === 'object') {
          if (oldVal !== val && JSON.stringify(val) === JSON.stringify(oldVal)) {
            return false;
          }
        } else if (oldVal === val) {
          return false;
        }

        if (!this.__styleTag) {
          this[_attr][key] = val;
        }

        this.__updateTag = true;
        return true;
      }
    }, {
      kind: "method",
      key: "get",
      value: function value(key) {
        if (key.length > 5 && key.indexOf('data-') === 0) {
          return this.subject.data(key.slice(5));
        }

        if (this.__getStyleTag || this[_style][key] != null && !this.__attributesSet.has(key)) {
          return this[_style][key];
        }

        return this[_attr][key];
      }
    }, {
      kind: "method",
      key: "getAttributes",
      value: function value() {
        var _this = this;

        var includeDefault = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var ret = {};

        if (includeDefault) {
          (0, _toConsumableArray2.default)(_utils.attributeNames).forEach(function (key) {
            if (key in _this) {
              ret[key] = _this[key];
            }
          });
        }

        (0, _toConsumableArray2.default)(this.__attributesSet).forEach(function (key) {
          if (key.indexOf('__internal') !== 0) {
            ret[key] = _this[key];
          }
        });
        Object.entries(this).forEach(function (_ref3) {
          var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
              key = _ref4[0],
              value = _ref4[1];

          if (key.indexOf('__') !== 0) {
            ret[key] = value;
          }
        });
        return ret;
      }
    }, {
      kind: "get",
      key: "attrs",
      value: function value() {
        return this.getAttributes(true);
      }
    }, {
      kind: "method",
      decorators: [(0, _utils.deprecate)('You can remove this call.')],
      key: "clearCache",
      value: function value() {
        return this;
      }
    }, {
      kind: "method",
      key: "merge",
      value: function value(attrs) {
        var _this2 = this;

        if (typeof attrs === 'string') {
          attrs = JSON.parse(attrs);
        }

        Object.entries(attrs).forEach(function (_ref5) {
          var _ref6 = (0, _slicedToArray2.default)(_ref5, 2),
              key = _ref6[0],
              value = _ref6[1];

          _this2.subject.attr(key, value);
        });
        return this;
      }
    }, {
      kind: "method",
      key: "serialize",
      value: function value() {
        var attrs = this.getAttributes();
        delete attrs.id;
        return JSON.stringify(attrs);
      }
    }, {
      kind: "get",
      key: "subject",
      value: function value() {
        return this[_subject];
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(String), (0, _utils.attr)({
        quiet: true
      })],
      key: "id",
      value: void 0
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(String), (0, _utils.attr)({
        quiet: true
      })],
      key: "name",
      value: void 0
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(String), (0, _utils.attr)({
        quiet: true
      })],
      key: "class",
      value: void 0
    }]
  };
});
exports.default = Attr;
}, function(modId) { var map = {"../utils":1584500597660}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597670, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _attr2 = _interopRequireDefault(require("./attr"));

var _utils = require("../utils");

// import stylesheet from './stylesheet';
function createAttribute(attr, key) {
  Object.defineProperty(attr, key, {
    enumerable: false,
    configurable: true,
    set: function set(value) {
      if (!this.__styleTag && value != null) {
        this.__attributesSet.add(key);
      }

      if (!this.__styleTag && value == null) {
        if (this.__attributesSet.has(key)) {
          this.__attributesSet.delete(key);
        }
      }

      this.quietSet(key, value);
      var subject = this.subject; // fixed color inherit
      // if(key === 'color') {
      //   subject.attr('fillColor', value);
      // }
      // fixed font inherit

      if (key === 'fontSize' || key === 'fontFamily' || key === 'fontStyle' || key === 'fontVariant' || key === 'fontWeight') {
        var font = this.get('font') || 'normal normal normal 16px Arial';
        var parsed = (0, _utils.parseFont)(font);
        parsed.fontSize = parsed.size + parsed.unit;

        if (key === 'fontSize' && (typeof value === 'number' || /[\d.]$/.test(value))) {
          value += 'px';
        }

        parsed[key] = value;
        var style = parsed.style,
            variant = parsed.variant,
            weight = parsed.weight,
            family = parsed.family,
            fontSize = parsed.fontSize;
        subject.attr('font', "".concat(style, " ").concat(variant, " ").concat(weight, " ").concat(fontSize, " ").concat(family));
      }

      if ((key === 'font' || key === 'lineHeight' || key === 'lineBreak' || key === 'wordBreak' || key === 'letterSpacing' || key === 'textIndent') && subject.querySelectorAll) {
        var children = subject.querySelectorAll('*');
        children.forEach(function (node) {
          if (node.retypesetting) node.retypesetting();
        });
      }

      if (_utils.inheritAttributes.has(key)) {
        subject.forceUpdate();
      }
    },
    get: function get() {
      var ret = this.get(key);
      return ret != null ? ret : this.getDefaultValue(key);
    }
  });
}

var _eventHandlers = Symbol('eventHandlers'),
    _collisionState = Symbol('collisionState'),
    _data = Symbol('data'),
    _mouseCapture = Symbol('mouseCapture');

var _attr = Symbol('attr');

var BaseNode =
/*#__PURE__*/
function () {
  function BaseNode(attrs) {
    (0, _classCallCheck2.default)(this, BaseNode);
    this[_eventHandlers] = {};
    this[_data] = {};
    this[_attr] = new this.constructor.Attr(this);

    if (attrs) {
      this.attr(attrs);
    }
  }

  (0, _createClass2.default)(BaseNode, [{
    key: "serialize",
    value: function serialize() {
      var nodeType = this.nodeType,
          attrs = this[_attr].serialize(),
          dataset = JSON.stringify(this.dataset),
          id = this.id;

      return {
        nodeType: nodeType,
        attrs: attrs,
        dataset: dataset,
        id: id
      };
    }
  }, {
    key: "clearLayout",
    value: function clearLayout() {
      if (this.hasLayout) {
        this.parent.clearLayout();
      }
    }
  }, {
    key: "merge",
    value: function merge(attrs) {
      this[_attr].merge(attrs);
    }
  }, {
    key: "cloneNode",
    value: function cloneNode() {
      var node = new this.constructor();
      node.merge(this[_attr].serialize());
      node.data(this.dataset);
      var bgimage = this.attr('bgimage');

      if (bgimage && bgimage.image) {
        node.attr('bgimage', null);
        node.attr('bgimage', Object.assign({}, bgimage));
      }

      return node;
    }
  }, {
    key: "attr",
    value: function attr(props, val) {
      var _this = this;

      var setVal = function setVal(key, value) {
        if (!(key in _this[_attr])) {
          createAttribute(_this[_attr], key);
        }

        _this[_attr][key] = value;
      };

      if ((0, _typeof2.default)(props) === 'object') {
        Object.entries(props).forEach(function (_ref) {
          var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
              prop = _ref2[0],
              value = _ref2[1];

          _this.attr(prop, value);
        });
        return this;
      }

      if (typeof props === 'string') {
        if (val !== undefined) {
          if (props === 'attrs') {
            if (Array.isArray(val)) {
              val = Object.assign.apply(Object, [{}].concat((0, _toConsumableArray2.default)(val)));
            }

            Object.entries(val).forEach(function (_ref3) {
              var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
                  prop = _ref4[0],
                  value = _ref4[1];

              _this.attr(prop, value);
            });
            return this;
          }

          if (props === 'style') {
            if (Array.isArray(val)) {
              val = Object.assign.apply(Object, [{}].concat((0, _toConsumableArray2.default)(val)));
            }

            Object.entries(val).forEach(function (_ref5) {
              var _ref6 = (0, _slicedToArray2.default)(_ref5, 2),
                  prop = _ref6[0],
                  value = _ref6[1];

              _this.style[prop] = value;
            });
            return this;
          }

          if (typeof val === 'function') {
            val = val(this.attr(props));
          }

          if (val && typeof val.then === 'function') {
            return val.then(function (res) {
              setVal(props, res);
            });
          }

          setVal(props, val);
          return this;
        }

        if (!(props in this[_attr])) {
          createAttribute(this[_attr], props);
        }

        return this[_attr][props];
      }

      return this[_attr].attrs;
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate(clearCache) {
      var parent = this.parent;

      if (parent) {
        this.parent.update(this);
      }
    }
  }, {
    key: "restyle",
    value: function restyle() {// stylesheet.computeStyle(this);
    }
  }, {
    key: "draw",
    value: function draw() {
      var styleNeedUpdate = this.__styleNeedUpdate;

      if (styleNeedUpdate) {
        this.restyle();

        if (this.querySelectorAll) {
          var children = this.querySelectorAll('*');
          children.forEach(function (child) {
            return child.restyle();
          });
        }

        if (styleNeedUpdate === 'siblings') {
          if (this.parent) {
            var _children = this.parent.children;

            var index = _children.indexOf(this);

            var len = _children.length;

            for (var i = index + 1; i < len; i++) {
              var node = _children[i];
              node.restyle();

              if (node.querySelectorAll) {
                var nodes = node.querySelectorAll('*');
                nodes.forEach(function (child) {
                  return child.restyle();
                });
              }
            }
          }
        }
      }
    }
  }, {
    key: "data",
    value: function data(props, val) {
      var _this2 = this;

      var setVal = function setVal(key, value) {
        _this2[_data][key] = value;

        if (_this2.attr) {
          var attrKey = "data-".concat(key); // this.attr(attrKey, value);

          if (_attr2.default.relatedAttributes.has(attrKey)) {
            _this2.updateStyles();
          }
        }

        if (value == null) {
          delete _this2[_data][key];
        }
      };

      if ((0, _typeof2.default)(props) === 'object') {
        Object.entries(props).forEach(function (_ref7) {
          var _ref8 = (0, _slicedToArray2.default)(_ref7, 2),
              prop = _ref8[0],
              value = _ref8[1];

          _this2.data(prop, value);
        });
        return this;
      }

      if (typeof props === 'string') {
        if (val !== undefined) {
          if (typeof val === 'function') {
            val = val(this[_data][props]);
          }

          if (val && typeof val.then === 'function') {
            return val.then(function (res) {
              setVal(props, res);
            });
          }

          setVal(props, val);
          return this;
        }

        return this[_data][props];
      }

      return this[_data];
    }
  }, {
    key: "updateStyles",
    value: function updateStyles() {
      var nextSibling = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // append to parent & reset name or class or id auto updateStyles
      this.__styleNeedUpdate = nextSibling ? 'siblings' : 'children';
      this.forceUpdate(true);
    }
  }, {
    key: "getEventHandlers",
    value: function getEventHandlers(type) {
      return type != null ? this[_eventHandlers][type] || [] : this[_eventHandlers];
    }
  }, {
    key: "on",
    value: function on(type, handler) {
      var _this3 = this;

      var useCapture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (Array.isArray(type)) {
        type.forEach(function (t) {
          return _this3.on(t, handler);
        });
      } else {
        this[_eventHandlers][type] = this[_eventHandlers][type] || [];

        this[_eventHandlers][type].push({
          handler: handler,
          useCapture: useCapture
        });
      }

      return this;
    }
  }, {
    key: "once",
    value: function once(type, handler) {
      var _this4 = this;

      var useCapture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (Array.isArray(type)) {
        type.forEach(function (t) {
          return _this4.once(t, handler);
        });
      } else {
        this.on(type, function f() {
          this.off(type, f);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return handler.apply(this, args);
        });
      }

      return this;
    }
  }, {
    key: "off",
    value: function off(type, handler) {
      var _this5 = this;

      if (Array.isArray(type)) {
        type.forEach(function (t) {
          return _this5.off(t, handler);
        });
      } else if (handler && this[_eventHandlers][type]) {
        var handlers = this[_eventHandlers][type];

        if (handlers) {
          for (var i = 0; i < handlers.length; i++) {
            var _handler = handlers[i].handler;

            if (_handler === handler) {
              this[_eventHandlers][type].splice(i, 1);

              break;
            }
          }
        }
      } else {
        delete this[_eventHandlers][type];
      }

      return this;
    }
  }, {
    key: "remove",
    value: function remove() {
      var exit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!this.parent) return null;
      return this.parent.removeChild(this, exit);
    }
  }, {
    key: "pointCollision",
    value: function pointCollision(evt) {
      throw Error('you must override this method');
    }
  }, {
    key: "setMouseCapture",
    value: function setMouseCapture() {
      this[_mouseCapture] = true;
    }
  }, {
    key: "releaseMouseCapture",
    value: function releaseMouseCapture() {
      this[_mouseCapture] = false;
    }
  }, {
    key: "isCaptured",
    value: function isCaptured(evt) {
      return (evt.type === 'mousemove' || evt.type === 'mousedown' || evt.type === 'mouseup') && this[_mouseCapture];
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(type, evt) {
      var _this6 = this;

      var collisionState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var swallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var useCapturePhase = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      // eslint-disable-line complexity
      var handlers = this.getEventHandlers(type);
      if (this.children && useCapturePhase === true) handlers = handlers.filter(function (handler) {
        return handler.useCapture;
      });
      if (this.children && useCapturePhase === false) handlers = handlers.filter(function (handler) {
        return !handler.useCapture;
      });
      evt.returnValue = true;

      if (swallow && handlers.length === 0) {
        return;
      }

      if (!evt.stopDispatch) {
        evt.stopDispatch = function () {
          evt.terminated = true;
        };
      }

      if (!evt.stopPropagation) {
        evt.stopPropagation = function () {
          evt.cancelBubble = true;
        };
      }

      if (!evt.preventDefault) {
        evt.preventDefault = function () {
          evt.returnValue = false;
        };
      }

      if (evt.type !== type) {
        if (evt.type) {
          evt.originalType = evt.type;
        }

        evt.type = type;
      }

      var isCollision = collisionState || this.pointCollision(evt);
      var captured = this.isCaptured(evt);

      if (this[_collisionState] && type === 'mouseleave') {
        // dispatched from group
        evt.target = this;
        this[_collisionState] = false;
        isCollision = true;
        this.attr('__internal_state_hover_', null);
      }

      if (!evt.terminated && (isCollision || captured)) {
        if (!evt.target) evt.target = this;
        var identifier = evt.identifier;

        if (identifier != null) {
          if (type === 'touchstart') {
            var layer = this.layer;
            layer.touchedTargets[identifier] = layer.touchedTargets[identifier] || [];
            layer.touchedTargets[identifier].push(this);
          }

          if (/^touch/.test(type)) {
            var touches = Array.from(evt.originalEvent.touches),
                _layer = this.layer;
            evt.targetTouches = [];
            touches.forEach(function (touch) {
              var identifier = touch.identifier;

              if (_layer.touchedTargets[identifier] && _layer.touchedTargets[identifier].indexOf(_this6) >= 0) {
                evt.targetTouches.push(touch);
              }
            });
          }
        }

        if (type === 'mousedown' || type === 'touchstart') {
          this.attr('__internal_state_active_', 'active');
        } else if (type === 'mouseup' || type === 'touchend') {
          this.attr('__internal_state_active_', null);
        }

        (0, _toConsumableArray2.default)(handlers).forEach(function (handler) {
          return handler.handler.call(_this6, evt);
        });

        if (!this[_collisionState] && isCollision && type === 'mousemove') {
          var _evt = Object.assign({}, evt);

          _evt.type = 'mouseenter';
          delete _evt.target;
          _evt.terminated = false;
          this.dispatchEvent('mouseenter', _evt, true, true);
          this.attr('__internal_state_hover_', 'hover');
          this[_collisionState] = true;
        }
      }

      if (this[_collisionState] && !isCollision && type === 'mousemove') {
        var _evt2 = Object.assign({}, evt);

        _evt2.type = 'mouseleave';
        delete _evt2.target;
        _evt2.terminated = false;
        this.dispatchEvent('mouseleave', _evt2);
        this.attr('__internal_state_hover_', null); // this[_collisionState] = false;
      }

      return isCollision;
    } // called when layer appendChild

  }, {
    key: "connect",
    value: function connect(parent) {
      var zOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this.parent) {
        // throw new Error('This node belongs to another parent node! Remove it first...')
        this.remove();
      }

      Object.defineProperty(this, 'zOrder', {
        value: zOrder,
        writable: false,
        configurable: true
      });
      Object.defineProperty(this, 'parent', {
        get: function get() {
          return parent;
        },
        configurable: true
      });
      this.dispatchEvent('append', {
        parent: parent,
        zOrder: zOrder
      }, true, true);
      parent.dispatchEvent('appendChild', {
        child: this,
        zOrder: zOrder
      }, true, true);

      if (this.layer) {
        this.updateStyles(true);
      }

      return this;
    } // override to recycling resources

  }, {
    key: "disconnect",
    value: function disconnect(parent) {
      if (!this.parent || parent !== this.parent) {
        throw new Error('Invalid node to disconnect');
      }

      if (this.layer) {
        var nextSibling = this.nextElementSilbing;
        if (nextSibling) nextSibling.updateStyles(true);
      }

      var zOrder = this.zOrder;
      delete this.zOrder;
      delete this.parent;
      delete this.isDirty;
      this.dispatchEvent('remove', {
        parent: parent,
        zOrder: zOrder
      }, true, true);
      parent.dispatchEvent('removeChild', {
        child: this,
        zOrder: zOrder
      }, true, true);
      return this;
    }
  }, {
    key: "enter",
    value: function enter() {
      // override to do atction after connection, can return a promise
      return this;
    }
  }, {
    key: "exit",
    value: function exit() {
      // override to do atction before disconnection, can return a promise
      return this;
    }
  }, {
    key: "__attr",
    get: function get() {
      return this[_attr];
    }
  }, {
    key: "layer",
    get: function get() {
      return this.parent && this.parent.layer;
    }
  }, {
    key: "dataset",
    get: function get() {
      return this[_data];
    }
  }, {
    key: "id",
    set: function set(val) {
      this.attr('id', val);
    },
    get: function get() {
      return this.attr('id');
    }
  }, {
    key: "name",
    set: function set(val) {
      this.attr('name', val);
    },
    get: function get() {
      return this.attr('name');
    }
  }, {
    key: "className",
    set: function set(val) {
      this.attr('class', val);
    },
    get: function get() {
      return this.attr('class');
    }
  }]);
  return BaseNode;
}();

exports.default = BaseNode;
(0, _defineProperty2.default)(BaseNode, "Attr", _attr2.default);
(0, _defineProperty2.default)(BaseNode, "inheritAttributes", _utils.inheritAttributes);
}, function(modId) { var map = {"./attr":1584500597669,"../utils":1584500597660}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597671, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../utils");

// http://www.runoob.com/cssref/css3-pr-filter.html
var _default = {
  blur: function blur(px) {
    return "blur(".concat((0, _utils.appendUnit)(px), ")");
  },
  brightness: function brightness(percent) {
    return "brightness(".concat(percent, ")");
  },
  contrast: function contrast(percent) {
    return "contrast(".concat(percent, ")");
  },
  dropShadow: function dropShadow(_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 4),
        offsetX = _ref2[0],
        offsetY = _ref2[1],
        shadowRadius = _ref2[2],
        color = _ref2[3];

    return "drop-shadow(".concat((0, _utils.appendUnit)(offsetX), " ").concat((0, _utils.appendUnit)(offsetY), " ").concat((0, _utils.appendUnit)(shadowRadius), " ").concat(color, ")");
  },
  grayscale: function grayscale(percent) {
    return "grayscale(".concat(percent, ")");
  },
  hueRotate: function hueRotate(value) {
    return "hue-rotate(".concat((0, _utils.appendUnit)(value, 'deg'), ")");
  },
  invert: function invert(percent) {
    return "invert(".concat(percent, ")");
  },
  opacity: function opacity(percent) {
    return "opacity(".concat(percent, ")");
  },
  saturate: function saturate(percent) {
    return "saturate(".concat(percent, ")");
  },
  sepia: function sepia(percent) {
    return "sepia(".concat(percent, ")");
  },
  url: function url(path) {
    return "url(".concat(path, ")");
  },
  compile: function compile() {
    var _this = this;

    var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.entries(filter).reduce(function (accumulator, curVal) {
      return accumulator.concat(_this[curVal[0]](curVal[1]));
    }, []).join(' ');
  }
};
exports.default = _default;
}, function(modId) { var map = {"../utils":1584500597660}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597672, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _set2 = _interopRequireDefault(require("@babel/runtime/helpers/set"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _decorate2 = _interopRequireDefault(require("@babel/runtime/helpers/decorate"));

var _utils = require("../utils");

var _basesprite = _interopRequireDefault(require("./basesprite"));

var _filters = _interopRequireDefault(require("./filters"));

var _texturesCache = Symbol('_texturesCache');

var _images = Symbol('_images');

var TextureAttr = (0, _decorate2.default)(null, function (_initialize, _BaseSprite$Attr) {
  var TextureAttr =
  /*#__PURE__*/
  function (_BaseSprite$Attr2) {
    (0, _inherits2.default)(TextureAttr, _BaseSprite$Attr2);

    function TextureAttr() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, TextureAttr);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TextureAttr)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

      return _this;
    }

    return TextureAttr;
  }(_BaseSprite$Attr);

  return {
    F: TextureAttr,
    d: [{
      kind: "field",
      decorators: [_utils.attr],
      key: "enableCache",
      value: function value() {
        return true;
      }
    }, {
      kind: "set",
      decorators: [(0, _utils.attr)({
        value: []
      })],
      key: "textures",
      value: function value(textures) {
        if (!Array.isArray(textures)) {
          textures = [textures];
        }

        textures = textures.map(function (texture) {
          if (!texture.image) {
            texture = {
              image: texture
            };
          }

          texture.__tag = (0, _utils.generateID)(texture.image); // prevent JSON.stringify ignorance

          return texture;
        });
        this.loadTextures(textures);
        this.set('textures', textures);
      }
    }, {
      kind: "method",
      key: "loadTextures",
      value: function value(textures) {
        var subject = this.subject; // adaptive textures

        var width = 0,
            height = 0;
        subject.images = textures.map(function (texture) {
          var image = texture.image,
              rect = texture.rect,
              srcRect = texture.srcRect;
          var w, h;

          if (rect) {
            w = rect[2] + rect[0];
            h = rect[3] + rect[1];
          } else if (srcRect) {
            w = srcRect[2];
            h = srcRect[3];
          } else {
            w = image.width;
            h = image.height;
          }

          if (width < w) {
            width = w;
          }

          if (height < h) {
            height = h;
          }

          delete texture.image;
          return image;
        });
        var texturesSize = subject.texturesSize;

        if (!texturesSize || texturesSize[0] !== width || texturesSize[1] !== height) {
          var attrSize = subject.attrSize;

          if (attrSize[0] === '' || attrSize[1] === '') {
            subject.reflow();
            subject.clearLayout();
          }
        }

        subject.texturesSize = [width, height];
        return textures;
      }
    }]
  };
}, _basesprite.default.Attr);
var Sprite = (0, _decorate2.default)(null, function (_initialize2, _BaseSprite) {
  var Sprite =
  /*#__PURE__*/
  function (_BaseSprite2) {
    (0, _inherits2.default)(Sprite, _BaseSprite2);

    /**
      new Sprite({
        attr: {
          ...
        },
        attributeChangedCallback: function(prop, oldValue, newValue){
         }
      })
     */
    function Sprite(attr) {
      var _this2;

      (0, _classCallCheck2.default)(this, Sprite);

      if (attr && attr.constructor !== Object) {
        attr = {
          textures: [attr]
        };
      }

      _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf3.default)(Sprite).call(this));

      _initialize2((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this2)));

      _this2[_texturesCache] = new Map();

      if (attr) {
        _this2.attr(attr);
      }

      return _this2;
    }

    return Sprite;
  }(_BaseSprite);

  return {
    F: Sprite,
    d: [{
      kind: "field",
      static: true,
      key: "Attr",
      value: function value() {
        return TextureAttr;
      }
    }, {
      kind: "method",
      key: "cloneNode",
      value: function value() {
        var _this3 = this;

        var node = (0, _get2.default)((0, _getPrototypeOf3.default)(Sprite.prototype), "cloneNode", this).call(this);

        if (this.images) {
          node.textures = this.textures.map(function (texture, i) {
            texture.image = _this3.images[i];
            return texture;
          });
        }

        return node;
      }
    }, {
      kind: "set",
      key: "images",
      value: function value(images) {
        this[_images] = images;
      }
    }, {
      kind: "get",
      key: "images",
      value: function value() {
        return this[_images];
      }
    }, {
      kind: "set",
      key: "textures",
      value: function value(textures) {
        this.attr('textures', textures);
      }
    }, {
      kind: "get",
      key: "textures",
      value: function value() {
        return this.attr('textures');
      }
    }, {
      kind: "get",
      decorators: [_utils.flow],
      key: "contentSize",
      value: function value() {
        var _this$attrSize = (0, _slicedToArray2.default)(this.attrSize, 2),
            width = _this$attrSize[0],
            height = _this$attrSize[1];

        var boxSize = this.texturesSize || [0, 0];
        var w = width,
            h = height;

        if (width === '') {
          w = boxSize[0] | 0;

          if (height !== '' && boxSize[1]) {
            w *= height / boxSize[1];
          }
        }

        if (height === '') {
          h = boxSize[1] | 0;

          if (width !== '' && boxSize[0]) {
            h *= width / boxSize[0];
          }
        }

        return [w, h];
      }
    }, {
      kind: "method",
      key: "pointCollision",
      value: function value(evt) {
        var _this4 = this;

        if ((0, _get2.default)((0, _getPrototypeOf3.default)(Sprite.prototype), "pointCollision", this).call(this, evt)) {
          var textures = this.textures;

          if (textures) {
            var offsetX = evt.offsetX,
                offsetY = evt.offsetY;
            if (offsetX == null && offsetY == null) return true;
            evt.targetTextures = [];

            var _this$attr = this.attr('anchor'),
                _this$attr2 = (0, _slicedToArray2.default)(_this$attr, 2),
                anchorX = _this$attr2[0],
                anchorY = _this$attr2[1],
                _this$contentSize = (0, _slicedToArray2.default)(this.contentSize, 2),
                width = _this$contentSize[0],
                height = _this$contentSize[1];

            offsetX += width * anchorX;
            offsetY += height * anchorY;
            textures.forEach(function (texture) {
              var _ref = texture.rect || [0, 0].concat((0, _toConsumableArray2.default)(_this4.innerSize)),
                  _ref2 = (0, _slicedToArray2.default)(_ref, 4),
                  x = _ref2[0],
                  y = _ref2[1],
                  w = _ref2[2],
                  h = _ref2[3];

              if (offsetX >= x && offsetX - x < w && offsetY >= y && offsetY - y < h) {
                // touched textures
                evt.targetTextures.push(texture);
              }
            });
          }

          return true;
        }

        return false;
      }
    }, {
      kind: "get",
      key: "cache",
      value: function value() {
        var bg = this.attr('bgcolor') || this.attr('gradients').bgcolor;

        if (!bg && this.textures.length <= 1) {
          return false;
        }

        return (0, _get2.default)((0, _getPrototypeOf3.default)(Sprite.prototype), "cache", this);
      }
    }, {
      kind: "set",
      key: "cache",
      value: function value(context) {
        (0, _set2.default)((0, _getPrototypeOf3.default)(Sprite.prototype), "cache", context, this, true);
      }
    }, {
      kind: "method",
      key: "render",
      value: function value(t, drawingContext) {
        var _this5 = this;

        (0, _get2.default)((0, _getPrototypeOf3.default)(Sprite.prototype), "render", this).call(this, t, drawingContext);
        var textures = this.textures;
        var cliped = !this.attr('clipOverflow');

        if (this.images && this.images.length) {
          textures.forEach(function (texture, i) {
            var img = _this5.images[i];

            var _this5$contentSize = (0, _slicedToArray2.default)(_this5.contentSize, 2),
                w = _this5$contentSize[0],
                h = _this5$contentSize[1];

            var rect = texture.rect || [0, 0, w, h];
            var srcRect = texture.srcRect;

            if (!cliped && texture.rect && (rect[2] > w || rect[3] > h)) {
              cliped = true;
              drawingContext.beginPath();
              drawingContext.rect(0, 0, w, h);
              drawingContext.clip();
            }

            drawingContext.save();

            if (texture.filter) {
              (0, _utils.setDeprecation)('texture.filter', 'Instead use sprite.attr({filter}).');
              var imgRect = srcRect ? [0, 0, srcRect[2], srcRect[3]] : [0, 0, img.width, img.height];
              var sx = rect[2] / imgRect[2],
                  sy = rect[3] / imgRect[3];
              drawingContext.filter = _filters.default.compile(texture.filter);

              if (srcRect) {
                drawingContext.drawImage.apply(drawingContext, [img].concat((0, _toConsumableArray2.default)(srcRect), [sx * imgRect[0] + rect[0], sy * imgRect[1] + rect[1], sx * srcRect[2], sy * srcRect[3]]));
              } else {
                drawingContext.drawImage(img, sx * imgRect[0] + rect[0], sy * imgRect[1] + rect[1], sx * img.width, sy * img.height);
              }
            } else if (srcRect) {
              drawingContext.drawImage.apply(drawingContext, [img].concat((0, _toConsumableArray2.default)(srcRect), (0, _toConsumableArray2.default)(rect)));
            } else {
              drawingContext.drawImage.apply(drawingContext, [img].concat((0, _toConsumableArray2.default)(rect)));
            }

            drawingContext.restore();
          });
        }
      }
    }]
  };
}, _basesprite.default);
exports.default = Sprite;
}, function(modId) { var map = {"../utils":1584500597660,"./basesprite":1584500597667,"./filters":1584500597671}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597673, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _decorate2 = _interopRequireDefault(require("@babel/runtime/helpers/decorate"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _cssLineBreak = require("css-line-break");

var _utils = require("../utils");

var _basesprite = _interopRequireDefault(require("./basesprite"));

var _render = require("../utils/render");

var _boxSize = Symbol('boxSize'),
    _outputText = Symbol('outputText');

var measureText = function measureText(node, text, font) {
  var lineHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var ctx = node.context;

  if (!ctx) {
    return [0, 0];
  }

  ctx.save();
  ctx.font = font;

  var _ctx$measureText = ctx.measureText(text),
      width = _ctx$measureText.width;

  ctx.restore();
  var letterSpacing = node.attr('letterSpacing');

  if (letterSpacing) {
    width += letterSpacing * (text.length - 1);
  }

  var _parseFont = (0, _utils.parseFont)(font),
      size = _parseFont.size;

  var height = lineHeight || size * 1.2;
  return [width, height].map(Math.round);
};

function calculTextboxSize(node) {
  if (!node.context) return '';
  var text = node.text,
      font = node.attr('font'),
      lineHeight = node.attr('lineHeight'),
      textIndent = node.attr('textIndent');
  var lines = [];
  var width = 0,
      height = 0;
  node[_outputText] = text;
  var lineBreak = node.attr('lineBreak'),
      textboxWidth = node.hasLayout ? node.attr('layoutWidth') : node.attr('width');

  if (lineBreak !== '' && textboxWidth !== '') {
    var wordBreak = node.attr('wordBreak');
    text.split(/\n/).forEach(function (line) {
      var breaker = (0, _cssLineBreak.LineBreaker)(line, {
        lineBreak: lineBreak,
        wordBreak: wordBreak
      });
      var words = [];
      var bk = breaker.next();

      while (!bk.done) {
        words.push(bk.value.slice());
        bk = breaker.next();
      }

      var l = '';
      words.forEach(function (word) {
        if (!l) {
          l = word;
        } else {
          var ll = "".concat(l).concat(word);

          var _measureText = measureText(node, ll, font),
              _measureText2 = (0, _slicedToArray2.default)(_measureText, 1),
              w = _measureText2[0];

          if (w > (lines.length === 0 ? textboxWidth - textIndent : textboxWidth)) {
            lines.push(l);
            l = word;
          } else {
            l = ll;
          }
        }
      });
      lines.push(l);
    }); // lines = node[_outputText].split(/\n/)

    node[_outputText] = lines.join('\n');
  } else {
    lines = text.split(/\n/);
  }

  lines.forEach(function (line, idx) {
    var _measureText3 = measureText(node, line, font, lineHeight),
        _measureText4 = (0, _slicedToArray2.default)(_measureText3, 2),
        w = _measureText4[0],
        h = _measureText4[1];

    if (idx === 0) w += textIndent;
    width = Math.max(width, w);
    height += h;
  });
  var boxSize = node[_boxSize];

  if (!boxSize || boxSize[0] !== width || boxSize[1] !== height) {
    var attrSize = node.attrSize;

    if (attrSize[0] === '' || attrSize[1] === '') {
      node.reflow();
      node.clearLayout();
    }
  }

  node[_boxSize] = [width, height];
}

function setFontPart(font, part) {
  var _Object$assign = Object.assign((0, _utils.parseFont)(font), part),
      style = _Object$assign.style,
      variant = _Object$assign.variant,
      weight = _Object$assign.weight,
      size0 = _Object$assign.size0,
      unit = _Object$assign.unit,
      family = _Object$assign.family;

  return "".concat(style, " ").concat(variant, " ").concat(weight, " ").concat(size0).concat(unit, " ").concat(family);
}

var LabelSpriteAttr = (0, _decorate2.default)(null, function (_initialize, _BaseSprite$Attr) {
  var LabelSpriteAttr =
  /*#__PURE__*/
  function (_BaseSprite$Attr2) {
    (0, _inherits2.default)(LabelSpriteAttr, _BaseSprite$Attr2);

    function LabelSpriteAttr() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, LabelSpriteAttr);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(LabelSpriteAttr)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

      return _this;
    }

    return LabelSpriteAttr;
  }(_BaseSprite$Attr);

  return {
    F: LabelSpriteAttr,
    d: [{
      kind: "method",
      key: "retypesetting",
      value: function value() {
        this.subject.retypesetting();
      }
    }, {
      kind: "method",
      key: "widthRetypeseting",
      value: function value() {
        if (this.lineBreak !== '') this.subject.retypesetting();else this.subject.reflow();
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(String), (0, _utils.attr)({
        extra: 'retypesetting'
      })],
      key: "text",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        extra: 'retypesetting'
      }), (0, _utils.inherit)('normal normal normal 16px Arial')],
      key: "font",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "set",
      decorators: [_utils.attr],
      key: "fontSize",
      value: function value(val) {
        if (val == null) val = '16px';
        var unit = 'px';

        if (typeof val === 'string') {
          var unitReg = /^([\d.]+)(\w+)/;
          var matches = val.match(unitReg);

          if (!matches) {
            return null;
          }

          val = parseFloat(matches[1]);
          unit = matches[2];
        }

        this.font = setFontPart(this.font, {
          size0: val,
          unit: unit
        });
      }
    }, {
      kind: "get",
      key: "fontSize",
      value: function value() {
        var font = this.font;

        var _parseFont2 = (0, _utils.parseFont)(font),
            size0 = _parseFont2.size0,
            unit = _parseFont2.unit;

        return "".concat(size0).concat(unit);
      }
    }, {
      kind: "set",
      decorators: [_utils.attr],
      key: "fontFamily",
      value: function value(val) {
        if (val == null) val = 'Arial';
        this.font = setFontPart(this.font, {
          family: val
        });
      }
    }, {
      kind: "get",
      key: "fontFamily",
      value: function value() {
        return (0, _utils.parseFont)(this.font).family;
      }
    }, {
      kind: "set",
      decorators: [_utils.attr],
      key: "fontStyle",
      value: function value(val) {
        if (val == null) val = 'normal';
        this.font = setFontPart(this.font, {
          style: val
        });
      }
    }, {
      kind: "get",
      key: "fontStyle",
      value: function value() {
        return (0, _utils.parseFont)(this.font).style;
      }
    }, {
      kind: "set",
      decorators: [_utils.attr],
      key: "fontVariant",
      value: function value(val) {
        if (val == null) val = 'normal';
        this.font = setFontPart(this.font, {
          variant: val
        });
      }
    }, {
      kind: "get",
      key: "fontVariant",
      value: function value() {
        return (0, _utils.parseFont)(this.font).variant;
      }
    }, {
      kind: "set",
      decorators: [_utils.attr],
      key: "fontWeight",
      value: function value(val) {
        if (val == null) val = 'normal';
        this.font = setFontPart(this.font, {
          weight: val
        });
      }
    }, {
      kind: "get",
      key: "fontWeight",
      value: function value() {
        return (0, _utils.parseFont)(this.font).weight;
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(parseFloat), (0, _utils.attr)({
        extra: 'retypesetting'
      }), (0, _utils.inherit)('')],
      key: "lineHeight",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        extra: 'retypesetting'
      }), (0, _utils.inherit)('left')],
      key: "textAlign",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(_utils.parseColorString), _utils.attr, (0, _utils.inherit)('')],
      key: "strokeColor",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(parseFloat), _utils.attr],
      key: "strokeWidth",
      value: function value() {
        return 1;
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(_utils.parseColorString), _utils.attr, (0, _utils.inherit)('')],
      key: "color",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [_utils.attr, (0, _utils.composit)('color')],
      key: "fillColor",
      value: void 0
    }, {
      kind: "field",
      decorators: [_utils.attr],
      key: "flexible",
      value: void 0
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        extra: 'retypesetting'
      }), (0, _utils.inherit)('')],
      key: "lineBreak",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        extra: 'retypesetting'
      }), (0, _utils.inherit)('')],
      key: "wordBreak",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(parseFloat), (0, _utils.attr)({
        extra: 'retypesetting'
      }), (0, _utils.inherit)(0)],
      key: "letterSpacing",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(parseFloat), (0, _utils.attr)({
        extra: 'retypesetting'
      }), (0, _utils.inherit)(0)],
      key: "textIndent",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        extra: 'widthRetypeseting'
      }), (0, _utils.relative)('width')],
      key: "width",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        extra: 'widthRetypeseting'
      }), (0, _utils.relative)('width')],
      key: "layoutWidth",
      value: function value() {
        return '';
      }
    }]
  };
}, _basesprite.default.Attr);
var Label = (0, _decorate2.default)(null, function (_initialize2, _BaseSprite) {
  var Label =
  /*#__PURE__*/
  function (_BaseSprite2) {
    (0, _inherits2.default)(Label, _BaseSprite2);

    function Label(attr) {
      var _this2;

      (0, _classCallCheck2.default)(this, Label);

      if ((0, _typeof2.default)(attr) !== 'object') {
        attr = {
          text: String(attr)
        };
      }

      _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf3.default)(Label).call(this, attr));

      _initialize2((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this2)));

      return _this2;
    }

    return Label;
  }(_BaseSprite);

  return {
    F: Label,
    d: [{
      kind: "field",
      static: true,
      key: "Attr",
      value: function value() {
        return LabelSpriteAttr;
      }
    }, {
      kind: "set",
      key: "text",
      value: function value(val) {
        this.attr('text', val);
      }
    }, {
      kind: "get",
      key: "text",
      value: function value() {
        return this.attr('text');
      }
    }, {
      kind: "get",
      key: "textboxSize",
      value: function value() {
        if (!this[_boxSize]) calculTextboxSize(this);
        return this[_boxSize];
      }
    }, {
      kind: "get",
      key: "flexibleFont",
      value: function value() {
        var font = this.attr('font');
        if (this.attr('width') === '' && this.attr('layoutWidth') === '') return font;
        var textboxSize = this.textboxSize,
            contentSize = this.contentSize;

        var _parseFont3 = (0, _utils.parseFont)(font),
            style = _parseFont3.style,
            variant = _parseFont3.variant,
            weight = _parseFont3.weight,
            size = _parseFont3.size,
            family = _parseFont3.family;

        size *= contentSize[0] / textboxSize[0];
        return "".concat(style, " ").concat(variant, " ").concat(weight, " ").concat(Math.floor(size), "px \"").concat(family, "\"");
      }
    }, {
      kind: "get",
      decorators: [_utils.flow],
      key: "contentSize",
      value: function value() {
        var _this$attrSize = (0, _slicedToArray2.default)(this.attrSize, 2),
            width = _this$attrSize[0],
            height = _this$attrSize[1];

        if (width === '' || height === '') {
          var textboxSize = this.textboxSize;
          if (!textboxSize) return [0, 0];
          width = width || textboxSize[0];
          height = height || textboxSize[1];
        }

        if (this.attr('flexible') && this.attr('height') === '' && this.attr('layoutHeight') === '') {
          height = Math.ceil(height * width / this.textboxSize[0]);
        }

        return [width, height];
      }
    }, {
      kind: "method",
      key: "connect",
      value: function value(parent) {
        var zOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var ret = (0, _get2.default)((0, _getPrototypeOf3.default)(Label.prototype), "connect", this).call(this, parent, zOrder);
        var _p = parent;

        while (_p && _p.__labelCount != null) {
          ++_p.__labelCount;
          _p = _p.parent;
        }

        return ret;
      }
    }, {
      kind: "method",
      key: "disconnect",
      value: function value(parent) {
        var ret = (0, _get2.default)((0, _getPrototypeOf3.default)(Label.prototype), "disconnect", this).call(this, parent);
        var _p = parent;

        while (_p && _p.__labelCount != null) {
          --_p.__labelCount;
          _p = _p.parent;
        }

        return ret;
      }
    }, {
      kind: "method",
      key: "retypesetting",
      value: function value() {
        // calculTextboxSize(this);
        this[_boxSize] = false;
        this[_outputText] = null;
        this.reflow();
        this.forceUpdate(true);
      }
    }, {
      kind: "method",
      key: "restyle",
      value: function value() {
        (0, _get2.default)((0, _getPrototypeOf3.default)(Label.prototype), "restyle", this).call(this);
        this.retypesetting();
      }
    }, {
      kind: "method",
      key: "render",
      value: function value(t, drawingContext) {
        var _this3 = this;

        (0, _get2.default)((0, _getPrototypeOf3.default)(Label.prototype), "render", this).call(this, t, drawingContext);
        var textAlign = this.attr('textAlign'),
            flexible = this.attr('flexible'),
            font = flexible ? this.flexibleFont : this.attr('font'),
            strokeWidth = this.attr('strokeWidth'),
            lineHeight = this.attr('lineHeight');
        var text = this.text;

        if (text) {
          var _this$contentSize = (0, _slicedToArray2.default)(this.contentSize, 2),
              w = _this$contentSize[0],
              h = _this$contentSize[1];

          if (!this[_outputText]) calculTextboxSize(this);
          text = this[_outputText] || this.text;

          if ((this.textboxSize[0] > w || this.textboxSize[1] > h) && this.attr('clipOverflow')) {
            drawingContext.beginPath();
            drawingContext.rect(0, 0, w, h);
            drawingContext.clip();
          }

          drawingContext.font = font;
          var lines = text.split(/\n/);
          drawingContext.textBaseline = 'top';
          var align = textAlign;
          drawingContext.textBaseline = 'middle';
          var strokeColor = (0, _render.findColor)(drawingContext, this, 'strokeColor');

          if (strokeColor) {
            drawingContext.strokeStyle = strokeColor;
          }

          var fillColor = (0, _render.findColor)(drawingContext, this, 'fillColor');

          if (!strokeColor && !fillColor) {
            fillColor = (0, _utils.parseColorString)('black');
          }

          if (fillColor) {
            drawingContext.fillStyle = fillColor;
          }

          drawingContext.lineWidth = strokeWidth;
          var top = 0;
          var width = this.contentSize[0];
          var letterSpacing = this.attr('letterSpacing'),
              textIndent = this.attr('textIndent');
          lines.forEach(function (line, idx) {
            var _measureText5 = measureText(_this3, line, font, lineHeight),
                _measureText6 = (0, _slicedToArray2.default)(_measureText5, 2),
                w = _measureText6[0],
                h = _measureText6[1];

            var left = 0;

            if (align === 'center') {
              left = (width - w) / 2;
            } else if (align === 'right') {
              left = width - w;
            }

            var indent = 0;

            if (textIndent && idx === 0 && align !== 'right') {
              indent = textIndent;
            }

            if (letterSpacing) {
              var l = left;
              (0, _toConsumableArray2.default)(line).forEach(function (letter, i) {
                if (idx === 0 && i === 0) {
                  l += indent;
                }

                if (fillColor) {
                  drawingContext.fillText(letter, l, top + h / 2);
                }

                if (strokeColor) {
                  drawingContext.strokeText(letter, l, top + h / 2);
                }

                l += measureText(_this3, letter, font)[0] + letterSpacing;
              });
            } else {
              if (fillColor) {
                drawingContext.fillText(line, left + indent, top + h / 2);
              }

              if (strokeColor) {
                drawingContext.strokeText(line, left + indent, top + h / 2);
              }
            }

            top += h;
          });
        }
      }
    }]
  };
}, _basesprite.default);
exports.default = Label;
}, function(modId) { var map = {"../utils":1584500597660,"./basesprite":1584500597667,"../utils/render":1584500597666}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597674, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _decorate2 = _interopRequireDefault(require("@babel/runtime/helpers/decorate"));

var _spriteAnimator = require("sprite-animator");

var _fastAnimationFrame = require("../helpers/fast-animation-frame");

var _basenode = _interopRequireDefault(require("./basenode"));

var _basesprite = _interopRequireDefault(require("./basesprite"));

var _batch = _interopRequireDefault(require("./batch"));

var _group = _interopRequireDefault(require("./group"));

var _group2 = _interopRequireDefault(require("../helpers/group"));

var _utils = require("../utils");

// import stylesheet from './stylesheet';
var _zOrder = Symbol('zOrder'),
    _timeline = Symbol('timeline'),
    _renderDeferer = Symbol('renderDeferrer'),
    _drawTask = Symbol('drawTask'),
    _autoRender = Symbol('autoRender'),
    _adjustTimer = Symbol('adjustTimer');

var LayerAttr = (0, _decorate2.default)(null, function (_initialize, _BaseNode$Attr) {
  var LayerAttr =
  /*#__PURE__*/
  function (_BaseNode$Attr2) {
    (0, _inherits2.default)(LayerAttr, _BaseNode$Attr2);

    function LayerAttr(subject) {
      var _this;

      (0, _classCallCheck2.default)(this, LayerAttr);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LayerAttr).call(this, subject));

      _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

      _this.setDefault({
        bgcolor: ''
      });

      return _this;
    }

    return LayerAttr;
  }(_BaseNode$Attr);

  return {
    F: LayerAttr,
    d: [{
      kind: "set",
      decorators: [(0, _utils.parseValue)(_utils.parseColorString), _utils.attr],
      key: "bgcolor",
      value: function value(val) {
        this.set('bgcolor', val);
        var subject = this.subject;

        if (subject.canvas && subject.canvas.style) {
          if (val != null) {
            this.quietSet('canvasBgColor', subject.canvas.style.backgroundColor);
            subject.canvas.style.backgroundColor = val;
          } else {
            subject.canvas.style.backgroundColor = this.get('canvasBgColor');
          }
        }
      }
    }]
  };
}, _basenode.default.Attr);

var Layer =
/*#__PURE__*/
function (_BaseNode) {
  (0, _inherits2.default)(Layer, _BaseNode);

  function Layer() {
    var _this2;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        context = _ref.context,
        _ref$evaluateFPS = _ref.evaluateFPS,
        evaluateFPS = _ref$evaluateFPS === void 0 ? false : _ref$evaluateFPS,
        _ref$renderMode = _ref.renderMode,
        renderMode = _ref$renderMode === void 0 ? 'repaintAll' : _ref$renderMode,
        _ref$autoRender = _ref.autoRender,
        autoRender = _ref$autoRender === void 0 ? true : _ref$autoRender,
        _ref$useDocumentCSS = _ref.useDocumentCSS,
        useDocumentCSS = _ref$useDocumentCSS === void 0 ? false : _ref$useDocumentCSS;

    (0, _classCallCheck2.default)(this, Layer);
    _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Layer).call(this));
    _this2[_autoRender] = autoRender; // renderMode: repaintAll | repaintDirty

    if (renderMode === 'repaintDirty') {
      (0, _utils.setDeprecation)('renderRepaintDirty');
    }

    if (evaluateFPS !== false) {
      (0, _utils.setDeprecation)('evaluateFPS');
    }

    _this2.outputContext = context;
    if (context.canvas) context.canvas.layer_ = (0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this2));
    _this2.childNodes = [];
    _this2.sortedChildNodes = [];
    _this2[_zOrder] = 0;
    _this2[_timeline] = new _spriteAnimator.Timeline(_fastAnimationFrame.timeline);
    _this2[_renderDeferer] = null;
    _this2.touchedTargets = {}; // auto release

    /* istanbul ignore if  */

    if (context.canvas && context.canvas.addEventListener) {
      context.canvas.addEventListener('DOMNodeRemovedFromDocument', function () {
        var _this3;

        _this2._savePlaybackRate = _this2.timeline.playbackRate;
        _this2._saveChildren = (0, _toConsumableArray2.default)(_this2.childNodes);

        (_this3 = _this2).remove.apply(_this3, (0, _toConsumableArray2.default)(_this2.childNodes));

        _this2.timeline.playbackRate = 0;
      });
      context.canvas.addEventListener('DOMNodeInsertedIntoDocument', function () {
        if (_this2._saveChildren) {
          var _this4;

          _this2.timeline.playbackRate = _this2._savePlaybackRate;

          (_this4 = _this2).append.apply(_this4, (0, _toConsumableArray2.default)(_this2._saveChildren));

          delete _this2._saveChildren;
        }
      });
    }

    if (useDocumentCSS) {
      _this2.fromDocumentCSS();
    }

    return _this2;
  }

  (0, _createClass2.default)(Layer, [{
    key: "fromDocumentCSS",
    value: function fromDocumentCSS() {// stylesheet.fromDocumentCSS();
    }
  }, {
    key: "clearContext",
    value: function clearContext() {
      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.outputContext;

      if (context.canvas) {
        var _context$canvas = context.canvas,
            width = _context$canvas.width,
            height = _context$canvas.height;
        context.clearRect(0, 0, width, height);
      }
    }
  }, {
    key: "prepareRender",
    value: function prepareRender() {
      var _this5 = this;

      if (!this[_renderDeferer]) {
        this[_renderDeferer] = {};
        this[_renderDeferer].promise = new Promise(function (resolve, reject) {
          Object.assign(_this5[_renderDeferer], {
            resolve: resolve,
            reject: reject
          });

          if (_this5.autoRender) {
            _this5[_drawTask] = (0, _fastAnimationFrame.requestAnimationFrame)(function () {
              delete _this5[_drawTask];

              _this5.draw();
            });
          }
        }); // .catch(ex => console.error(ex.message))
      }

      return this[_renderDeferer] ? this[_renderDeferer].promise : Promise.resolve();
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate() {
      return this.prepareRender();
    }
  }, {
    key: "restyle",
    value: function restyle() {
      var bgcolor = this.style.bgcolor;
      (0, _get2.default)((0, _getPrototypeOf2.default)(Layer.prototype), "restyle", this).call(this);

      if (bgcolor) {
        var color = this.attr('bgcolor');

        if (color !== bgcolor && this.canvas && this.canvas.style) {
          this.canvas.style = color;
        }
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      var clearContext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      // if(this.__styleNeedUpdate) {
      //   stylesheet.computeStyle(this);
      // }
      (0, _get2.default)((0, _getPrototypeOf2.default)(Layer.prototype), "draw", this).call(this);
      var renderDeferrer = this[_renderDeferer];
      this[_renderDeferer] = null;

      if (this[_drawTask]) {
        (0, _fastAnimationFrame.cancelAnimationFrame)(this[_drawTask]);
        delete this[_drawTask];
      }

      var currentTime = this.timeline.currentTime;
      this.repaint(currentTime, clearContext);
      (0, _get2.default)((0, _getPrototypeOf2.default)(Layer.prototype), "dispatchEvent", this).call(this, 'update', {
        target: this,
        timeline: this.timeline,
        renderTime: currentTime
      }, true, true);

      if (renderDeferrer) {
        renderDeferrer.resolve();
      }
    }
  }, {
    key: "update",
    value: function update(target) {
      if (target && target.isDirty) return;

      if (target) {
        target.isDirty = true;
      }

      this.prepareRender();
    }
  }, {
    key: "isVisible",
    value: function isVisible() {
      if (this.canvas) {
        return this.canvas.width > 0 && this.canvas.height > 0;
      }

      return true;
    }
  }, {
    key: "drawSprites",
    value: function drawSprites(renderEls, t) {
      _utils.cacheContextPool.flush();

      if (this.beforeDrawTransform) {
        this.outputContext.save();
        this.beforeDrawTransform();
      }

      for (var i = 0; i < renderEls.length; i++) {
        var child = renderEls[i],
            isDirty = child.isDirty;
        child.isDirty = false;

        if (child.parent === this) {
          child.draw(t);

          if (isDirty) {
            child.dispatchEvent('update', {
              target: child,
              renderTime: t
            }, true, true);
          }
        }
      }

      if (this.beforeDrawTransform) {
        this.outputContext.restore();
      }
    }
  }, {
    key: "repaint",
    value: function repaint(t) {
      var clearContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var renderEls = this.sortedChildNodes;
      var outputContext = this.outputContext;
      if (clearContext) this.clearContext(outputContext);
      this.drawSprites(renderEls, t);
    }
  }, {
    key: "pointCollision",
    value: function pointCollision(evt) {
      if (this.outputContext.canvas) {
        var layerX = evt.layerX,
            layerY = evt.layerY;
        var _this$outputContext$c = this.outputContext.canvas,
            width = _this$outputContext$c.width,
            height = _this$outputContext$c.height;

        if (layerX == null && layerY == null || layerX >= 0 && layerY >= 0 && layerX < width && layerY < height) {
          return true;
        }

        return false;
      }
      /* istanbul ignore next  */


      return true;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(type, evt) {
      var _this6 = this;

      var collisionState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var swallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var useCapturePhase = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      // eslint-disable-line complexity
      var handlers = this.getEventHandlers(type);

      if (swallow && handlers.length === 0) {
        return;
      }

      var hasCapturePhase = false;

      if (!swallow && !evt.terminated && type !== 'mouseenter') {
        var isCollision = collisionState || this.pointCollision(evt);
        var identifier = evt.identifier;

        if (identifier != null && (type === 'touchend' || type === 'touchmove')) {
          isCollision = true;
        }

        if (isCollision || type === 'mouseleave') {
          var sprites = this.sortedChildNodes.slice(0).reverse();
          var targetSprites = [];

          if (identifier != null && (type === 'touchend' || type === 'touchmove')) {
            var touches = evt.originalEvent.changedTouches;

            for (var i = 0; i < touches.length; i++) {
              var touch = touches[i];

              if (touch.identifier === identifier) {
                var targets = this.layer.touchedTargets[identifier];

                if (targets) {
                  targets.forEach(function (target) {
                    if (target !== _this6 && target.layer === _this6) {
                      var _target$getParentXY = target.getParentXY(evt.layerX, evt.layerY),
                          _target$getParentXY2 = (0, _slicedToArray2.default)(_target$getParentXY, 2),
                          parentX = _target$getParentXY2[0],
                          parentY = _target$getParentXY2[1];

                      var _parent = [evt.parentX, evt.parentY];
                      evt.parentX = parentX;
                      evt.parentY = parentY;
                      target.dispatchEvent(type, evt, true, true, useCapturePhase);
                      evt.parentX = _parent[0];
                      evt.parentY = _parent[1];
                    }
                  });
                  if (type === 'touchend') delete this.layer.touchedTargets[identifier];
                }
              }
            }
          } else {
            evt.parentX = evt.layerX;
            evt.parentY = evt.layerY;

            if (isCollision && handlers.length && handlers.some(function (handler) {
              return handler.useCapture;
            })) {
              hasCapturePhase = true;
              if (!evt.target) evt.target = this.getTargetFromXY(evt.parentX, evt.parentY);
              (0, _get2.default)((0, _getPrototypeOf2.default)(Layer.prototype), "dispatchEvent", this).call(this, type, evt, isCollision, swallow, true);
            }

            if (!hasCapturePhase || !evt.cancelBubble) {
              for (var _i = 0; _i < sprites.length; _i++) {
                var sprite = sprites[_i];
                var hit = sprite.dispatchEvent(type, evt, collisionState, swallow, useCapturePhase);

                if (hit) {
                  if (evt.targetSprites) {
                    targetSprites.push.apply(targetSprites, (0, _toConsumableArray2.default)(evt.targetSprites));
                    delete evt.targetSprites;
                  } // detect mouseenter/mouseleave


                  targetSprites.push(sprite);
                }

                if (evt.terminated && type !== 'mousemove') {
                  break;
                }
              }
            }

            delete evt.parentX;
            delete evt.parentY;
          }

          evt.targetSprites = targetSprites; // stopDispatch can only terminate event in the same level

          evt.terminated = false;
          collisionState = isCollision;
        }
      }

      evt.targetSprites = evt.targetSprites || [];

      if (evt.cancelBubble) {
        // stop bubbling
        return false;
      }

      if (hasCapturePhase) {
        return (0, _get2.default)((0, _getPrototypeOf2.default)(Layer.prototype), "dispatchEvent", this).call(this, type, evt, collisionState, swallow, false);
      }

      if (evt.targetSprites.length > 0) {
        // bubbling
        collisionState = true;
      }

      var layerX = evt.layerX,
          layerY = evt.layerY;

      if (layerX != null && layerY != null) {
        evt.offsetX = layerX + this.offset[0];
        evt.offsetY = layerY + this.offset[1];
      }

      return (0, _get2.default)((0, _getPrototypeOf2.default)(Layer.prototype), "dispatchEvent", this).call(this, type, evt, collisionState, swallow, useCapturePhase);
    }
  }, {
    key: "group",
    value: function group() {
      var group = new _group.default();
      group.append.apply(group, arguments);
      this.appendChild(group);
      return group;
    }
  }, {
    key: "batch",
    value: function batch() {
      var _this7 = this;

      for (var _len = arguments.length, sprites = new Array(_len), _key = 0; _key < _len; _key++) {
        sprites[_key] = arguments[_key];
      }

      sprites.forEach(function (sprite) {
        if (sprite.layer !== _this7) {
          _this7.appendChild(sprite);
        }
      });
      var batch = new _batch.default(this);
      batch.add.apply(batch, sprites);
      return batch;
    }
  }, {
    key: "adjust",
    value: function adjust(handler)
    /* istanbul ignore next  */
    {
      var _this8 = this;

      var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!update) return;
      var outputContext = this.outputContext;
      var shadowContext = this.adjustContext || outputContext.canvas.cloneNode().getContext('2d');

      if (!this[_adjustTimer]) {
        this.autoRender = false;
        shadowContext.clearRect(0, 0, shadowContext.canvas.width, shadowContext.canvas.height);
        shadowContext._clearTag = false;
        shadowContext.drawImage(outputContext.canvas, 0, 0);
        this.adjustContext = shadowContext;
      } else {
        clearTimeout(this[_adjustTimer]);
      }

      this[_adjustTimer] = setTimeout(function () {
        _this8.autoRender = true;
        delete _this8[_adjustTimer];
      }, 100);

      if (shadowContext.canvas.width > 0 && shadowContext.canvas.height > 0) {
        this.clearContext(outputContext);
        outputContext.save();
        handler.call(this, outputContext);
        outputContext.drawImage(shadowContext.canvas, 0, 0);
        outputContext.restore();
      }
    }
  }, {
    key: "resolution",
    get: function get() {
      return [this.canvas.width, this.canvas.height];
    }
  }, {
    key: "autoRender",
    set: function set(value) {
      this[_autoRender] = value;

      if (value) {
        this.draw();
      }
    },
    get: function get() {
      return this[_autoRender];
    }
  }, {
    key: "layer",
    get: function get() {
      return this;
    }
  }, {
    key: "children",
    get: function get() {
      return this.childNodes.filter(function (child) {
        return child instanceof _basesprite.default;
      });
    }
  }, {
    key: "timeline",
    get: function get() {
      return this[_timeline];
    }
  }, {
    key: "context",
    get: function get() {
      return this.outputContext;
    }
  }, {
    key: "canvas",
    get: function get() {
      return this.outputContext && this.outputContext.canvas;
    }
  }, {
    key: "offset",
    get: function get() {
      return [0, 0];
    }
  }]);
  return Layer;
}(_basenode.default);

exports.default = Layer;
(0, _defineProperty2.default)(Layer, "Attr", LayerAttr);
Object.assign(Layer.prototype, _group2.default);
}, function(modId) { var map = {"../helpers/fast-animation-frame":1584500597675,"./basenode":1584500597670,"./basesprite":1584500597667,"./batch":1584500597676,"./group":1584500597677,"../helpers/group":1584500597678,"../utils":1584500597660}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597675, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.timeline = exports.cancelAnimationFrame = exports.requestAnimationFrame = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _spriteAnimator = require("sprite-animator");

var _requestAnimationFrame, _cancelAnimationFrame;

if (typeof global.requestAnimationFrame === 'undefined') {
  _requestAnimationFrame = function _requestAnimationFrame(fn) {
    return setTimeout(function () {
      fn(Date.now());
    }, 16);
  };

  _cancelAnimationFrame = function _cancelAnimationFrame(id) {
    return clearTimeout(id);
  };
} else {
  _requestAnimationFrame = global.requestAnimationFrame;
  _cancelAnimationFrame = global.cancelAnimationFrame;
}

var steps = new Map();
var timerId;
var currentTime = Date.now();

var requestAnimationFrame = function requestAnimationFrame(step) {
  var id = Symbol('requestId');
  steps.set(id, step);

  if (timerId == null) {
    if (steps.size === 1) {
      currentTime = Date.now();
    }

    timerId = _requestAnimationFrame(function (t) {
      timerId = null;
      currentTime = Date.now();
      (0, _toConsumableArray2.default)(steps).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            id = _ref2[0],
            callback = _ref2[1];

        callback(t);
        steps.delete(id);
      });
    });
  }

  return id;
};

exports.requestAnimationFrame = requestAnimationFrame;

var cancelAnimationFrame = function cancelAnimationFrame(id) {
  steps.delete(id);

  if (!steps.size && timerId) {
    _cancelAnimationFrame(timerId);

    timerId = null;
  }
};

exports.cancelAnimationFrame = cancelAnimationFrame;
var timeline = new _spriteAnimator.Timeline({
  nowtime: function nowtime() {
    return steps.size ? currentTime : Date.now();
  }
});
exports.timeline = timeline;
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597676, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _utils = require("../utils");

var _batch = Symbol('batch');

var Batch =
/*#__PURE__*/
function () {
  function Batch(layer) {
    (0, _classCallCheck2.default)(this, Batch);
    this.layer = layer;
    this[_batch] = new Set();
    this.cache = null;
  }

  (0, _createClass2.default)(Batch, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
        nodes[_key] = arguments[_key];
      }

      nodes.forEach(function (node) {
        if (!node.layer || node.layer !== _this.layer) {
          /* istanbul ignore next  */
          throw new Error('Batch node must append to this layer first!');
        }

        if (node[_batch]) {
          /* istanbul ignore next  */
          throw new Error('Node already batched!');
        }

        node.attr('enableCache', true);
        var that = _this;
        Object.defineProperty(node, 'cache', {
          configurable: true,
          get: function get() {
            return that.cache;
          },
          set: function set(context) {
            if (that.baseNode === this) {
              if (that.cache && context !== that.cache) {
                _utils.cacheContextPool.put(that.cache);
              }

              that.cache = context;
            } else if (context == null) {
              throw new Error('Cannot set non-cachable attributes to batch members.Use batch.baseNode.attr(...)');
            }
          }
        });
        node[_batch] = _this;

        _this[_batch].add(node);
      });
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this2 = this;

      for (var _len2 = arguments.length, nodes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nodes[_key2] = arguments[_key2];
      }

      nodes.forEach(function (node) {
        if (_this2[_batch].has(node)) {
          delete node[_batch];
          delete node.cache;

          _this2[_batch].delete(node);
        }
      });
    }
  }, {
    key: "baseNode",
    get: function get() {
      var batchNodes = (0, _toConsumableArray2.default)(this[_batch]);
      var baseNode = batchNodes[0],
          zOrder = Infinity,
          zIndex = Infinity;

      for (var i = 0; i < batchNodes.length; i++) {
        var node = batchNodes[i];

        if (zIndex > node.zIndex) {
          zIndex = node.zIndex;
          zOrder = node.zOrder;
          baseNode = node;
        } else if (zIndex === node.zIndex && zOrder > node.zOrder) {
          zOrder = node.zOrder;
          baseNode = node;
        }
      }

      return baseNode;
    }
  }]);
  return Batch;
}();

exports.default = Batch;
}, function(modId) { var map = {"../utils":1584500597660}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597677, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _decorate2 = _interopRequireDefault(require("@babel/runtime/helpers/decorate"));

var _utils = require("../utils");

var _basesprite = _interopRequireDefault(require("./basesprite"));

var _group = _interopRequireDefault(require("../helpers/group"));

var _zOrder = Symbol('zOrder'),
    _layoutTag = Symbol('layoutTag');

var reflow = true,
    relayout = true;
var GroupAttr = (0, _decorate2.default)(null, function (_initialize, _BaseSprite$Attr) {
  var GroupAttr =
  /*#__PURE__*/
  function (_BaseSprite$Attr2) {
    (0, _inherits2.default)(GroupAttr, _BaseSprite$Attr2);

    function GroupAttr(subject) {
      var _this;

      (0, _classCallCheck2.default)(this, GroupAttr);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(GroupAttr).call(this, subject));

      _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

      GroupAttr.inits.forEach(function (init) {
        init((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), subject);
      });
      return _this;
    }

    return GroupAttr;
  }(_BaseSprite$Attr);

  return {
    F: GroupAttr,
    d: [{
      kind: "field",
      static: true,
      key: "inits",
      value: function value() {
        return [];
      }
    }, {
      kind: "field",
      decorators: [_utils.attr],
      key: "enableCache",
      value: function value() {
        return 'auto';
      }
    }, {
      kind: "set",
      decorators: [(0, _utils.attr)({
        reflow: reflow,
        value: null
      })],
      key: "clip",
      value: function value(val) {
        if (val) {
          val = typeof val === 'string' ? {
            d: val
          } : val;
          this.subject.svg = (0, _utils.createSvgPath)(val);
          this.set('clip', val);
        } else {
          this.subject.svg = null;
          this.set('clip', null);
        }
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        reflow: reflow,
        relayout: relayout
      }), (0, _utils.relative)('width')],
      key: "layoutWidth",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        reflow: reflow,
        relayout: relayout
      }), (0, _utils.relative)('height')],
      key: "layoutHeight",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        reflow: reflow,
        relayout: relayout
      }), (0, _utils.relative)('width')],
      key: "width",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        reflow: reflow,
        relayout: relayout
      }), (0, _utils.relative)('height')],
      key: "height",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        relayout: relayout
      })],
      key: "display",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(parseFloat), _utils.attr],
      key: "scrollLeft",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(parseFloat), _utils.attr],
      key: "scrollTop",
      value: function value() {
        return 0;
      }
    }]
  };
}, _basesprite.default.Attr);

var _layout = Symbol('layout');

var Group = (0, _decorate2.default)(null, function (_initialize2, _BaseSprite) {
  var Group =
  /*#__PURE__*/
  function (_BaseSprite2) {
    (0, _inherits2.default)(Group, _BaseSprite2);

    function Group() {
      var _this2;

      var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      (0, _classCallCheck2.default)(this, Group);
      _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Group).call(this, attr));

      _initialize2((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this2)));

      _this2.childNodes = [];
      _this2.sortedChildNodes = [];
      _this2[_zOrder] = 0;
      _this2[_layoutTag] = false;
      _this2.__labelCount = 0;
      return _this2;
    }

    return Group;
  }(_BaseSprite);

  return {
    F: Group,
    d: [{
      kind: "field",
      static: true,
      key: "Attr",
      value: function value() {
        return GroupAttr;
      }
    }, {
      kind: "method",
      static: true,
      key: "applyLayout",
      value: function value(name, layout) {
        this[_layout] = this[_layout] || {};
        var attrs = layout.attrs,
            relayout = layout.relayout;

        if (attrs.init) {
          GroupAttr.inits.push(attrs.init);
        }

        Group.addAttributes(attrs);
        this[_layout][name] = relayout;
      }
    }, {
      kind: "get",
      key: "isVirtual",
      value: function value() {
        var display = this.attr('display');
        if (display !== '' && display !== 'none') return false;
        var parent = this.parent;
        if (parent && parent instanceof Group && !parent.isVirtual) return false;

        var _this$attr = this.attr('border'),
            borderWidth = _this$attr.width,
            borderRadius = this.attr('borderRadius'),
            bgcolor = this.attr('bgcolor'),
            _this$attr2 = this.attr('gradients'),
            bgGradient = _this$attr2.bgcolor,
            _this$attrSize = (0, _slicedToArray2.default)(this.attrSize, 2),
            width = _this$attrSize[0],
            height = _this$attrSize[1],
            _this$attr3 = this.attr('anchor'),
            _this$attr4 = (0, _slicedToArray2.default)(_this$attr3, 2),
            anchorX = _this$attr4[0],
            anchorY = _this$attr4[1],
            bgimage = this.attr('bgimage'),
            _this$attr5 = this.attr('padding'),
            _this$attr6 = (0, _slicedToArray2.default)(_this$attr5, 4),
            paddingTop = _this$attr6[0],
            paddingRight = _this$attr6[1],
            paddingBottom = _this$attr6[2],
            paddingLeft = _this$attr6[3];

        return !anchorX && !anchorY && !width && !height && !borderRadius && !borderWidth && !bgcolor && !bgGradient && !bgimage && !paddingTop && !paddingRight && !paddingBottom && !paddingLeft;
      }
    }, {
      kind: "method",
      key: "connect",
      value: function value(parent) {
        var zOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var ret = (0, _get2.default)((0, _getPrototypeOf2.default)(Group.prototype), "connect", this).call(this, parent, zOrder);
        var labelCount = this.__labelCount;
        var _p = parent;

        while (_p && _p.__labelCount != null) {
          _p.__labelCount += labelCount;
          _p = _p.parent;
        }

        return ret;
      }
    }, {
      kind: "method",
      key: "disconnect",
      value: function value(parent) {
        var ret = (0, _get2.default)((0, _getPrototypeOf2.default)(Group.prototype), "disconnect", this).call(this, parent);
        var labelCount = this.__labelCount;
        var _p = parent;

        while (_p && _p.__labelCount != null) {
          _p.__labelCount -= labelCount;
          _p = _p.parent;
        }

        return ret;
      }
    }, {
      kind: "method",
      key: "scrollTo",
      value: function value(x, y) {
        this.attr('scrollLeft', x);
        this.attr('scrollTop', y);
      }
    }, {
      kind: "method",
      key: "scrollBy",
      value: function value(dx, dy) {
        var x = this.attr('scrollLeft'),
            y = this.attr('scrollTop');
        this.scrollTo(x + dx, y + dy);
      }
    }, {
      kind: "method",
      key: "cloneNode",
      value: function value(deepCopy) {
        var node = (0, _get2.default)((0, _getPrototypeOf2.default)(Group.prototype), "cloneNode", this).call(this);

        if (deepCopy) {
          var children = this.childNodes;
          children.forEach(function (child) {
            var subNode = child.cloneNode(deepCopy);
            node.append(subNode);
          });
        }

        return node;
      }
    }, {
      kind: "get",
      key: "children",
      value: function value() {
        var children = this.childNodes || [];
        return children.filter(function (child) {
          return child instanceof _basesprite.default;
        });
      }
    }, {
      kind: "method",
      key: "update",
      value: function value(child) {
        child.isDirty = true;
        var attrSize = this.attrSize;

        if (attrSize[0] === '' || attrSize[1] === '') {
          this.reflow();
        }

        this.forceUpdate(true);
      }
    }, {
      kind: "method",
      key: "pointCollision",
      value: function value(evt) {
        if ((0, _get2.default)((0, _getPrototypeOf2.default)(Group.prototype), "pointCollision", this).call(this, evt) || this.isVirtual) {
          if (this.svg) {
            var offsetX = evt.offsetX,
                offsetY = evt.offsetY;
            if (offsetX == null && offsetY == null) return true;
            var rect = this.originalRect;
            evt.isInClip = this.svg.isPointInPath(offsetX - rect[0], offsetY - rect[1]);
          }

          return true;
        }

        return false;
      }
    }, {
      kind: "get",
      decorators: [_utils.flow],
      key: "contentSize",
      value: function value() {
        if (this.isVirtual) return [0, 0];

        var _this$attrSize2 = (0, _slicedToArray2.default)(this.attrSize, 2),
            width = _this$attrSize2[0],
            height = _this$attrSize2[1];

        if (width === '' || height === '') {
          if (this.attr('clip')) {
            var svg = this.svg;
            var bounds = svg.bounds;
            width = width || bounds[2];
            height = height || bounds[3];
          } else {
            var right, bottom;
            right = 0;
            bottom = 0;
            this.childNodes.forEach(function (sprite) {
              if (sprite.attr('display') !== 'none') {
                var renderBox = sprite.renderBox;

                if (renderBox) {
                  right = Math.max(right, renderBox[2]);
                  bottom = Math.max(bottom, renderBox[3]);
                }
              }
            });
            width = width || right;
            height = height || bottom;
          }
        }

        return [width, height];
      }
    }, {
      kind: "method",
      key: "dispatchEvent",
      value: function value(type, evt) {
        var collisionState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var swallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var useCapturePhase = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var handlers = this.getEventHandlers(type);

        if (swallow && handlers.length === 0) {
          return;
        }

        var hasCapturePhase = false;

        if (!swallow && !evt.terminated && type !== 'mouseenter') {
          var isCollision = collisionState || this.pointCollision(evt);

          if (isCollision || type === 'mouseleave' || !this.attr('clipOverflow')) {
            var scrollLeft = this.attr('scrollLeft'),
                scrollTop = this.attr('scrollTop'),
                borderWidth = this.attr('border').width,
                padding = this.attr('padding');
            var parentX, parentY;
            if ('offsetX' in evt) parentX = evt.offsetX - this.originalRect[0] - borderWidth - padding[3] + scrollLeft;
            if ('offsetY' in evt) parentY = evt.offsetY - this.originalRect[1] - borderWidth - padding[0] + scrollTop;
            var _parentX = evt.parentX,
                _parentY = evt.parentY;
            evt.parentX = parentX;
            evt.parentY = parentY;

            if (isCollision && handlers.length && handlers.some(function (handler) {
              return handler.useCapture;
            })) {
              hasCapturePhase = true;
              if (!evt.target) evt.target = this.getTargetFromXY(parentX, parentY);
              (0, _get2.default)((0, _getPrototypeOf2.default)(Group.prototype), "dispatchEvent", this).call(this, type, evt, isCollision, swallow, true);
            }

            var targetSprites = [];

            if (!hasCapturePhase || !evt.cancelBubble) {
              var sprites = this.sortedChildNodes.slice(0).reverse();

              for (var i = 0; i < sprites.length && evt.isInClip !== false; i++) {
                var sprite = sprites[i];
                var hit = sprite.dispatchEvent(type, evt, collisionState, swallow, useCapturePhase);

                if (hit) {
                  if (evt.targetSprites) {
                    targetSprites.push.apply(targetSprites, (0, _toConsumableArray2.default)(evt.targetSprites));
                    delete evt.targetSprites;
                  }

                  targetSprites.push(sprite);
                }

                if (evt.terminated && type !== 'mousemove') {
                  break;
                }
              }
            }

            evt.targetSprites = targetSprites; // stopDispatch can only terminate event in the same level

            evt.terminated = false;
            evt.parentX = _parentX;
            evt.parentY = _parentY;
            collisionState = isCollision;
          }
        }

        evt.targetSprites = evt.targetSprites || [];

        if (evt.cancelBubble) {
          // stop bubbling
          return false;
        }

        if (hasCapturePhase) {
          return (0, _get2.default)((0, _getPrototypeOf2.default)(Group.prototype), "dispatchEvent", this).call(this, type, evt, collisionState, swallow, false);
        }

        if (evt.targetSprites.length > 0) {
          // bubbling
          collisionState = true;
        }

        return (0, _get2.default)((0, _getPrototypeOf2.default)(Group.prototype), "dispatchEvent", this).call(this, type, evt, collisionState, swallow, useCapturePhase);
      }
    }, {
      kind: "method",
      key: "relayout",
      value: function value() {
        var items = this.childNodes.filter(function (child) {
          if (child.hasLayout) {
            child.attr('layoutWidth', null);
            child.attr('layoutHeight', null);
            child.attr('layoutX', null);
            child.attr('layoutY', null);
          }

          if (child.relayout) {
            var _display = child.attr('display');

            if (_display !== '' && _display !== 'static') {
              child.relayout();
            }
          }

          return child.hasLayout && child.attr('display') !== 'none';
        });
        var display = this.attr('display');
        var doLayout = Group[_layout][display];

        if (doLayout) {
          doLayout(this, items);
        }
      }
    }, {
      kind: "method",
      key: "clearLayout",
      value: function value() {
        this[_layoutTag] = false;
        if (this.hasLayout) this.parent.clearLayout();
      }
    }, {
      kind: "method",
      key: "draw",
      value: function value(t) {
        var drawingContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;
        // must relayout before draw
        // prevent originalRect changing when rendering.
        var display = this.attr('display');

        if (display !== '' && display !== 'static' && !this[_layoutTag]) {
          this.relayout();
          this[_layoutTag] = true;
        }

        return (0, _get2.default)((0, _getPrototypeOf2.default)(Group.prototype), "draw", this).call(this, t, drawingContext);
      }
    }, {
      kind: "method",
      key: "render",
      value: function value(t, drawingContext) {
        var clipPath = this.attr('clip');

        if (clipPath) {
          this.svg.beginPath().to(drawingContext);
          drawingContext.clip();
        }

        if (!this.isVirtual) {
          (0, _get2.default)((0, _getPrototypeOf2.default)(Group.prototype), "render", this).call(this, t, drawingContext);

          if (this.attr('clipOverflow')) {
            drawingContext.beginPath();
            drawingContext.rect(0, 0, this.contentSize[0], this.contentSize[1]);
            drawingContext.clip();
          }
        }

        drawingContext.save();
        var scrollLeft = this.attr('scrollLeft'),
            scrollTop = this.attr('scrollTop');
        drawingContext.translate(-scrollLeft, -scrollTop);
        var sprites = this.sortedChildNodes;

        for (var i = 0; i < sprites.length; i++) {
          var child = sprites[i],
              isDirty = child.isDirty;
          child.isDirty = false;
          child.draw(t, drawingContext);

          if (isDirty) {
            child.dispatchEvent('update', {
              target: child,
              renderTime: t
            }, true, true);
          }
        }

        drawingContext.restore();
      }
    }]
  };
}, _basesprite.default);
exports.default = Group;
Object.assign(Group.prototype, _group.default);
}, function(modId) { var map = {"../utils":1584500597660,"./basesprite":1584500597667,"../helpers/group":1584500597678}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597678, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

var _zOrder = Symbol('zOrder');

var _removeTask = Symbol('removeTask');

var _default = {
  getTargetFromXY: function getTargetFromXY(x, y) {
    var children = this.children;
    var target = this;
    children.some(function (child) {
      var evt = {
        parentX: x,
        parentY: y
      };
      var hit = child.pointCollision(evt);

      if (hit) {
        if (child.getTargetFromXY) {
          target = child.getTargetFromXY(evt.offsetX, evt.offsetY);
        } else {
          target = child;
        }
      }

      return hit;
    });
    return target;
  },
  appendChild: function appendChild(sprite) {
    var _this = this;

    var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var _append = function _append() {
      _this[_zOrder] = _this[_zOrder] || 0;
      sprite.connect(_this, _this[_zOrder]++);
      var children = _this.childNodes;
      children.push(sprite); // quick insert

      var orderedSprites = _this.sortedChildNodes || [];
      var len = orderedSprites.length;
      var i;
      var left = 0,
          right = len - 1;
      var zIndex = sprite.attr('zIndex') | 0;

      for (; i == null && left <= right;) {
        var rightSprite = orderedSprites[right];
        var leftSprite = orderedSprites[left];
        if (zIndex >= rightSprite.zIndex) i = right + 1;else if (zIndex < leftSprite.zIndex) i = left;else if (left >= right - 1) i = right;else {
          // between left & right
          var mid = Math.ceil((left + right) / 2);
          var midSprite = orderedSprites[mid];
          if (zIndex >= midSprite.zIndex) left = mid;else right = mid;
        }
      }

      if (i == null || i === len) orderedSprites.push(sprite);else orderedSprites.splice(i, 0, sprite);
      _this.sortedChildNodes = orderedSprites;

      if (update) {
        sprite.forceUpdate();
      }

      if (sprite.layer) {
        return sprite.enter();
      }

      return sprite;
    };

    var _remove = this.removeChild(sprite);

    if (_remove && _remove.promise) {
      // deferred
      if (_remove.resolve) _remove.resolve();

      _remove.promise.then(function () {
        return _append();
      });

      return _remove;
    }

    return _append();
  },
  append: function append() {
    var _this2 = this;

    for (var _len = arguments.length, sprites = new Array(_len), _key = 0; _key < _len; _key++) {
      sprites[_key] = arguments[_key];
    }

    sprites.forEach(function (sprite) {
      _this2.appendChild(sprite);
    });
    return this;
  },
  removeChild: function removeChild(child) {
    if (child[_removeTask]) return child[_removeTask];
    var idx = this.childNodes.indexOf(child);

    if (idx === -1) {
      return null;
    }

    var that = this;

    function remove(sprite) {
      delete child[_removeTask]; // re-calculate index because it's async...

      var idx = that.childNodes.indexOf(child);

      if (idx === -1) {
        return null;
      }

      that.childNodes.splice(idx, 1);
      that.sortedChildNodes = (0, _utils.sortOrderedSprites)(that.childNodes);

      if (sprite.isVisible() || sprite.lastRenderBox) {
        sprite.forceUpdate();
      }

      sprite.disconnect(that);
      return sprite;
    }

    var action = child.exit();

    if (action.promise) {
      child[_removeTask] = action;
      action.promise.then(function () {
        return remove(child);
      });
      return action;
    }

    return remove(child);
  },
  clear: function clear() {
    var _this3 = this;

    var children = this.childNodes.slice(0);
    children.forEach(function (child) {
      return _this3.removeChild(child);
    });
    return this;
  },
  remove: function remove() {
    var _this4 = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (args.length === 0) {
      if (!this.parent) return null;
      return this.parent.removeChild(this);
    }

    args.forEach(function (sprite) {
      _this4.removeChild(sprite);
    });
    return this;
  },
  insertBefore: function insertBefore(newchild, refchild) {
    var _this5 = this;

    if (refchild == null) {
      return this.appendChild(newchild);
    }

    var idx = this.childNodes.indexOf(refchild);
    var refZOrder = refchild.zOrder;

    if (idx >= 0) {
      var _insert = function _insert() {
        for (var i = 0; i < _this5.childNodes.length; i++) {
          var child = _this5.childNodes[i],
              zOrder = child.zOrder;

          if (zOrder >= refZOrder) {
            delete child.zOrder;
            Object.defineProperty(child, 'zOrder', {
              value: zOrder + 1,
              writable: false,
              configurable: true
            });
          }
        }

        _this5.childNodes.splice(idx, 0, newchild);

        newchild.connect(_this5, refZOrder);
        _this5.sortedChildNodes = (0, _utils.sortOrderedSprites)(_this5.childNodes);
        newchild.forceUpdate();
        _this5[_zOrder] = _this5[_zOrder] || 0;
        _this5[_zOrder]++;

        if (_this5.layer) {
          return newchild.enter();
        }
      };

      var _remove = this.removeChild(newchild);

      if (_remove && _remove.promise) {
        if (_remove.resolve) _remove.resolve();

        _remove.promise.then(function () {
          return _insert();
        });

        return _remove;
      }

      return _insert();
    }

    return null;
  },
  replaceChild: function replaceChild(newChild, oldChild) {
    var _this6 = this;

    Promise.resolve(this.insertBefore(newChild, oldChild)).then(function () {
      _this6.removeChild(oldChild);
    });
  }
};
exports.default = _default;
}, function(modId) { var map = {"../utils":1584500597660}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597679, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _decorate2 = _interopRequireDefault(require("@babel/runtime/helpers/decorate"));

var _utils = require("../utils");

var _basesprite = _interopRequireDefault(require("./basesprite"));

var reflow = true,
    quiet = true;
var PathSpriteAttr = (0, _decorate2.default)(null, function (_initialize, _BaseSprite$Attr) {
  var PathSpriteAttr =
  /*#__PURE__*/
  function (_BaseSprite$Attr2) {
    (0, _inherits2.default)(PathSpriteAttr, _BaseSprite$Attr2);

    function PathSpriteAttr() {
      var _getPrototypeOf2;

      var _this;

      (0, _classCallCheck2.default)(this, PathSpriteAttr);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(PathSpriteAttr)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)));

      return _this;
    }

    return PathSpriteAttr;
  }(_BaseSprite$Attr);

  return {
    F: PathSpriteAttr,
    d: [{
      kind: "set",
      decorators: [(0, _utils.attr)({
        reflow: reflow
      })],
      key: "path",
      value: function value(val) {
        if (val) {
          val = typeof val === 'string' ? {
            d: val
          } : val;
          this.subject.svg = (0, _utils.createSvgPath)(val);
          this.set('path', val);
        } else {
          this.subject.svg = null;
          this.set('path', null);
        }
      }
    }, {
      kind: "set",
      decorators: [_utils.attr],
      key: "d",
      value: function value(val) {
        if (val) {
          var path = this.path;

          if (!path) {
            this.path = {
              d: val
            };
          } else {
            this.path = Object.assign(path, {
              d: val
            });
          }
        } else {
          this.path = null;
        }
      }
    }, {
      kind: "get",
      key: "d",
      value: function value() {
        return this.path ? this.path.d : null;
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(parseFloat), (0, _utils.attr)({
        reflow: reflow
      }), (0, _utils.inherit)(1)],
      key: "lineWidth",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(_utils.parseStringFloat, function (val) {
        return typeof val === 'number' ? [val] : val;
      }), _utils.attr],
      key: "lineDash",
      value: void 0
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(parseFloat), _utils.attr],
      key: "lineDashOffset",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [_utils.attr, (0, _utils.inherit)('butt')],
      key: "lineCap",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [_utils.attr, (0, _utils.inherit)('miter')],
      key: "lineJoin",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(_utils.parseColorString), _utils.attr, (0, _utils.inherit)('')],
      key: "strokeColor",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.parseValue)(_utils.parseColorString), _utils.attr, (0, _utils.inherit)('')],
      key: "fillColor",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        reflow: reflow
      })],
      key: "flexible",
      value: void 0
    }, {
      kind: "field",
      decorators: [(0, _utils.attr)({
        quiet: quiet
      }), (0, _utils.inherit)('auto')],
      key: "bounding",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [_utils.attr, (0, _utils.composit)('strokeColor')],
      key: "color",
      value: void 0
    }]
  };
}, _basesprite.default.Attr);
var Path = (0, _decorate2.default)(null, function (_initialize2, _BaseSprite) {
  var Path =
  /*#__PURE__*/
  function (_BaseSprite2) {
    (0, _inherits2.default)(Path, _BaseSprite2);

    function Path(attr) {
      var _this2;

      (0, _classCallCheck2.default)(this, Path);

      if (typeof attr === 'string') {
        attr = {
          d: attr
        };
      }

      _this2 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf3.default)(Path).call(this, attr));

      _initialize2((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this2)));

      return _this2;
    }

    return Path;
  }(_BaseSprite);

  return {
    F: Path,
    d: [{
      kind: "field",
      static: true,
      key: "Attr",
      value: function value() {
        return PathSpriteAttr;
      }
    }, {
      kind: "set",
      key: "path",
      value: function value(val) {
        this.attr('path', val);
      }
    }, {
      kind: "get",
      key: "path",
      value: function value() {
        return this.attr('path');
      }
    }, {
      kind: "method",
      key: "getPointAtLength",
      value: function value(length) {
        if (this.svg) {
          return this.svg.getPointAtLength(length);
        }

        return [0, 0];
      }
    }, {
      kind: "method",
      key: "getPathLength",
      value: function value() {
        if (this.svg) {
          return this.svg.getTotalLength();
        }

        return 0;
      }
    }, {
      kind: "method",
      key: "isClosed",
      value: function value() {
        var d = this.attr('d');

        if (d) {
          return /z$/img.test(d);
        }

        return false;
      }
    }, {
      kind: "method",
      key: "findPath",
      value: function value(offsetX, offsetY) {
        var rect = this.originalRect;
        var pathOffset = this.pathOffset;
        var svg = this.svg;

        if (svg) {
          var x = offsetX - rect[0] - pathOffset[0],
              y = offsetY - rect[1] - pathOffset[1];
          var collision = false;

          if (this.isClosed()) {
            collision = svg.isPointInPath(x, y);
          }

          if (!collision) {
            var lineWidth = this.attr('lineWidth') + (parseFloat(this.attr('bounding')) || 0),
                lineCap = this.attr('lineCap'),
                lineJoin = this.attr('lineJoin');
            collision = svg.isPointInStroke(x, y, {
              lineWidth: lineWidth,
              lineCap: lineCap,
              lineJoin: lineJoin
            });
          }

          if (collision) {
            return [svg];
          }
        }

        return [];
      }
    }, {
      kind: "get",
      key: "lineWidth",
      value: function value() {
        var lineWidth = this.attr('lineWidth'),
            gradients = this.attr('gradients'),
            fillColor = this.attr('fillColor'),
            strokeColor = this.attr('strokeColor');
        var hasStrokeColor = strokeColor || gradients && gradients.strokeColor,
            hasFillColor = fillColor || gradients && gradients.fillColor;

        if (!hasStrokeColor && hasFillColor) {
          // fill: ignore stroke
          return 0;
        }

        return lineWidth;
      }
    }, {
      kind: "get",
      key: "pathOffset",
      value: function value() {
        var lw = Math.round(this.lineWidth);
        return [lw, lw];
      }
    }, {
      kind: "get",
      key: "pathSize",
      value: function value() {
        return this.svg ? this.svg.size : [0, 0];
      }
    }, {
      kind: "get",
      decorators: [_utils.flow],
      key: "contentSize",
      value: function value() {
        if (!this.svg) return (0, _get2.default)((0, _getPrototypeOf3.default)(Path.prototype), "contentSize", this);
        var bounds = this.svg.bounds;

        var _this$attrSize = (0, _slicedToArray2.default)(this.attrSize, 2),
            width = _this$attrSize[0],
            height = _this$attrSize[1];

        var pathOffset = this.pathOffset;

        if (width === '') {
          width = bounds[2] - Math.min(0, bounds[0]) + 2 * pathOffset[0];
        }

        if (height === '') {
          height = bounds[3] - Math.min(0, bounds[1]) + 2 * pathOffset[1];
        }

        if (this.attr('flexible') && this.attr('height') === '' && this.attr('layoutHeight') === '') {
          height = Math.ceil(height * width / (bounds[2] - Math.min(0, bounds[0]) + 2 * pathOffset[0]));
        }

        return [width, height].map(Math.ceil);
      }
    }, {
      kind: "get",
      decorators: [_utils.flow],
      key: "originalRect",
      value: function value() {
        var svg = this.svg;

        if (svg) {
          var bounds = svg.bounds,
              offset = this.pathOffset;

          var _this$offsetSize = (0, _slicedToArray2.default)(this.offsetSize, 2),
              width = _this$offsetSize[0],
              height = _this$offsetSize[1],
              _this$attr = this.attr('anchor'),
              _this$attr2 = (0, _slicedToArray2.default)(_this$attr, 2),
              anchorX = _this$attr2[0],
              anchorY = _this$attr2[1];

          var rect = [0, 0, width, height],
              offsetX = Math.min(0, bounds[0]),
              offsetY = Math.min(0, bounds[1]);
          rect[0] = offsetX - offset[0] - anchorX * (width + offsetX - 2 * offset[0]);
          rect[1] = offsetY - offset[1] - anchorY * (height + offsetY - 2 * offset[1]);
          return rect;
        }

        return (0, _get2.default)((0, _getPrototypeOf3.default)(Path.prototype), "originalRect", this);
      }
    }, {
      kind: "method",
      key: "pointCollision",
      value: function value(evt) {
        var bounding = this.attr('bounding');

        if ((0, _get2.default)((0, _getPrototypeOf3.default)(Path.prototype), "pointCollision", this).call(this, evt) || bounding !== 'auto' && bounding !== 'box' && bounding !== 'path' && bounding !== 0) {
          var offsetX = evt.offsetX,
              offsetY = evt.offsetY;
          if (offsetX == null && offsetY == null) return true;
          var svg = this.svg;

          if (svg) {
            var bounds = svg.bounds;
            offsetX += Math.min(0, bounds[0]);
            offsetY += Math.min(0, bounds[1]);
          }

          evt.targetPaths = this.findPath(offsetX, offsetY);

          if (bounding !== 'box' && !(bounding === 'auto' && (this.attr('borderWidth') > 0 || this.attr('bgcolor') || this.attr('gradients').bgcolor))) {
            return evt.targetPaths.length > 0;
          }

          return true;
        }

        return false;
      }
    }, {
      kind: "method",
      key: "render",
      value: function value(t, drawingContext) {
        (0, _get2.default)((0, _getPrototypeOf3.default)(Path.prototype), "render", this).call(this, t, drawingContext);
        var d = this.attr('d'),
            lineWidth = this.attr('lineWidth'),
            lineCap = this.attr('lineCap'),
            lineJoin = this.attr('lineJoin'),
            lineDash = this.attr('lineDash'),
            flexible = this.attr('flexible');

        if (d) {
          var svg = this.svg;

          var _svg$bounds = (0, _slicedToArray2.default)(svg.bounds, 4),
              ox = _svg$bounds[0],
              oy = _svg$bounds[1],
              ow = _svg$bounds[2],
              oh = _svg$bounds[3];

          var _this$pathOffset = (0, _slicedToArray2.default)(this.pathOffset, 2),
              px = _this$pathOffset[0],
              py = _this$pathOffset[1];

          var _this$contentSize = (0, _slicedToArray2.default)(this.contentSize, 2),
              w = _this$contentSize[0],
              h = _this$contentSize[1];

          if ((w < ow || h < oh) && this.attr('clipOverflow')) {
            drawingContext.beginPath();
            drawingContext.rect(0, 0, w, h);
            drawingContext.clip();
          }

          if (flexible) {
            svg.save();
            var sw = w / (ow - Math.min(0, ox) + 2 * px);
            svg.scale(sw, sw);
            ox *= sw;
            oy *= sw;
            px *= sw;
            py *= sw;
          }

          if (ox < 0 || oy < 0) {
            drawingContext.translate(-Math.min(0, ox), -Math.min(0, oy));
          }

          drawingContext.translate(px, py);
          svg.beginPath().to(drawingContext);

          if (flexible) {
            svg.restore();
          }

          drawingContext.lineWidth = lineWidth;
          drawingContext.lineCap = lineCap;
          drawingContext.lineJoin = lineJoin;

          if (lineDash != null) {
            drawingContext.setLineDash(lineDash);
            var lineDashOffset = this.attr('lineDashOffset');
            drawingContext.lineDashOffset = lineDashOffset;
          }

          var fillColor = (0, _utils.findColor)(drawingContext, this, 'fillColor');

          if (fillColor) {
            drawingContext.fillStyle = fillColor;
          }

          var strokeColor = (0, _utils.findColor)(drawingContext, this, 'strokeColor');

          if (!strokeColor && !fillColor) {
            strokeColor = (0, _utils.parseColorString)('black');
          }

          if (strokeColor) {
            drawingContext.strokeStyle = strokeColor;
          }

          if (fillColor) {
            drawingContext.fill();
          }

          if (strokeColor) {
            drawingContext.stroke();
          }
        }
      }
    }]
  };
}, _basesprite.default);
exports.default = Path;
}, function(modId) { var map = {"../utils":1584500597660,"./basesprite":1584500597667}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597680, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = use;
var installed = new WeakMap();

var _merged = Symbol('merged');

var target = null;

function use(plugin) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var merge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!target) {
    target = Object.assign({}, this);
    target.__spritejs = this; // target.use = use.bind(target);

    target.use = function (plugin) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var merge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return use.call(target, plugin, options, merge);
    };
  }

  if (typeof options === 'boolean') {
    merge = options;
    options = null;
  }

  if (installed.has(plugin)) {
    var _ret = installed.get(plugin);

    if (merge && !_ret[_merged]) {
      Object.assign(target, _ret);
      _ret[_merged] = true;
    }

    return _ret;
  }

  var install = plugin.install || plugin;
  var ret = install.call(plugin, target, options) || {};
  installed.set(plugin, ret);

  if (merge) {
    Object.assign(target.__spritejs, ret);
    ret[_merged] = true;
  }

  return ret;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597681, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _basesprite = _interopRequireDefault(require("../../core/basesprite"));

var _animation2 = _interopRequireDefault(require("./animation"));

Object.assign(_basesprite.default.prototype, {
  animate: function animate(frames, timing) {
    var _this = this;

    var isStyleAnim = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var setter = null;

    if (isStyleAnim) {
      setter = function setter(frame, target) {
        target.__attr.__styleTag = true;
        target.attr(frame);
        target.__attr.__styleTag = false;
      };
    }

    var animation = new _animation2.default(this, frames, timing, setter);
    if (this.effects) animation.applyEffects(this.effects);

    if (this.layer) {
      animation.baseTimeline = this.layer.timeline;
      animation.play();
      animation.finished.then(function () {
        _this.animations.delete(animation);
      });
    }

    this.animations.add(animation);
    return animation;
  },
  transition: function transition(sec) {
    var _ref3;

    var easing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'linear';
    var isStyleAnim = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    var that = this,
        _animation = Symbol('animation');

    easing = easing || 'linear';
    var delay = 0;

    if ((0, _typeof2.default)(sec) === 'object') {
      delay = sec.delay || 0;
      sec = sec.duration;
    }

    return _ref3 = {}, (0, _defineProperty2.default)(_ref3, _animation, null), (0, _defineProperty2.default)(_ref3, "cancel", function cancel() {
      var preserveState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var animation = this[_animation];

      if (animation) {
        animation.cancel(preserveState);
      }
    }), (0, _defineProperty2.default)(_ref3, "end", function end() {
      var animation = this[_animation];

      if (animation && (animation.playState === 'running' || animation.playState === 'pending')) {
        animation.finish();
      }
    }), (0, _defineProperty2.default)(_ref3, "reverse", function reverse() {
      var animation = this[_animation];

      if (animation) {
        if (animation.playState === 'running' || animation.playState === 'pending') {
          animation.playbackRate = -animation.playbackRate;
        } else {
          var direction = animation.timing.direction;
          animation.timing.direction = direction === 'reverse' ? 'normal' : 'reverse';
          animation.play();
        }
      }

      return animation.finished;
    }), (0, _defineProperty2.default)(_ref3, "attr", function attr(prop, val) {
      this.end();

      if (typeof prop === 'string') {
        prop = (0, _defineProperty2.default)({}, prop, val);
      }

      Object.entries(prop).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        if (typeof value === 'function') {
          prop[key] = value(that.attr(key));
        }
      });
      this[_animation] = that.animate([prop], {
        duration: sec * 1000,
        delay: delay * 1000,
        fill: 'forwards',
        easing: easing
      }, isStyleAnim);
      return this[_animation].finished;
    }), _ref3;
  }
});
}, function(modId) { var map = {"../../core/basesprite":1584500597667,"./animation":1584500597682}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597682, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _spriteAnimator = require("sprite-animator");

var _spriteMath = require("sprite-math");

var _utils = require("../../utils");

var _patheffect = _interopRequireDefault(require("./patheffect"));

var _fastAnimationFrame = require("../../helpers/fast-animation-frame");

var _defaultEffect = _spriteAnimator.Effects.default;

var defaultEffect = function defaultEffect(from, to, p, start, end) {
  var unitFrom = 'px',
      unitTo = 'px';
  var matchFrom = null,
      matchTo = null;
  var exp = /^([\d.]+)(%|rh|rw)$/i;

  if (typeof from === 'string') {
    matchFrom = exp.exec(from);

    if (matchFrom) {
      unitFrom = matchFrom[2];
    }
  }

  if (typeof to === 'string') {
    matchTo = exp.exec(to);

    if (matchTo) {
      unitTo = matchTo[2];
    }
  }

  if (unitFrom === unitTo) {
    if (matchFrom) from = parseFloat(matchFrom[1]);
    if (matchTo) to = parseFloat(matchTo[1]);
  }

  var v = _defaultEffect(from, to, p, start, end);

  return unitFrom !== 'px' ? "".concat(v).concat(unitFrom) : v;
};

_spriteAnimator.Effects.default = defaultEffect;

function arrayEffect(arr1, arr2, p, start, end) {
  if (typeof arr1 === 'string') {
    arr1 = (0, _utils.parseStringFloat)(arr1);
  }

  if (typeof arr2 === 'string') {
    arr2 = (0, _utils.parseStringFloat)(arr2);
  }

  if (Array.isArray(arr1)) {
    return arr1.map(function (o, i) {
      return defaultEffect(o, arr2[i] != null ? arr2[i] : arr2, p, start, end);
    });
  }

  return defaultEffect(arr1, arr2, p, start, end);
}

function objectEffect(obj1, obj2, p, start, end) {
  var t1 = Object.assign({}, obj2, obj1),
      t2 = Object.assign({}, obj1, obj2);
  Object.entries(t1).forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    t1[key] = arrayEffect(value, t2[key], p, start, end);
  });
  return t1;
}

function getTransformMatrix(trans) {
  var matrix = new _spriteMath.Matrix();
  Object.entries(trans).forEach(function (_ref3) {
    var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
        key = _ref4[0],
        val = _ref4[1];

    if (key === 'matrix') {
      matrix = new _spriteMath.Matrix(val);
    } else if (Array.isArray(val)) {
      var _matrix;

      (_matrix = matrix)[key].apply(_matrix, (0, _toConsumableArray2.default)(val));
    } else if (key === 'scale') {
      matrix.scale(val, val);
    } else {
      matrix[key](val);
    }
  });
  return matrix.m;
}

function arrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

function transformEffect(trans1, trans2, p, start, end) {
  trans1 = (0, _utils.parseStringTransform)(trans1);
  trans2 = (0, _utils.parseStringTransform)(trans2);

  if (!arrayEqual(Object.keys(trans1), Object.keys(trans2))) {
    trans1 = getTransformMatrix(trans1);
    trans2 = getTransformMatrix(trans2);
  }

  if (Array.isArray(trans1) || Array.isArray(trans2)) {
    return arrayEffect(trans1, trans2, p, start, end);
  }

  return objectEffect(trans1, trans2, p, start, end);
}

function colorEffect(color1, color2, p, start, end) {
  var c1 = (0, _utils.parseColor)(color1);
  var c2 = (0, _utils.parseColor)(color2);

  if (c1.model === c2.model) {
    c1.value = arrayEffect(c1.value, c2.value, p, start, end).map(function (c, i) {
      return i < 3 ? Math.round(c) : Math.round(c * 100) / 100;
    });
    return c1.str;
  }

  return defaultEffect(color1, color2, p, start, end);
}

function pathEffect(path1, path2, p, start, end) {
  path1 = (0, _utils.createSvgPath)(path1);
  path2 = (0, _utils.createSvgPath)(path2);
  return (0, _patheffect.default)(path1.d, path2.d, p, start, end);
}

Object.assign(_spriteAnimator.Effects, {
  arrayEffect: arrayEffect,
  transformEffect: transformEffect,
  colorEffect: colorEffect,
  pathEffect: pathEffect,
  pos: arrayEffect,
  size: arrayEffect,
  transform: transformEffect,
  bgcolor: colorEffect,
  border: function border(v1, v2, p, start, end) {
    if (Array.isArray(v2)) {
      v2 = {
        width: v2[0],
        color: v2[1],
        style: v2[2] || 'solid'
      };
    }

    return {
      width: defaultEffect(v1.width, v2.width, p, start, end),
      color: colorEffect(v1.color, v2.color, p, start, end),
      style: arrayEffect(v1.style, v2.style, p, start, end)
    };
  },
  scale: arrayEffect,
  translate: arrayEffect,
  skew: arrayEffect,
  padding: arrayEffect,
  margin: arrayEffect,
  color: colorEffect,
  strokeColor: colorEffect,
  fillColor: colorEffect,
  d: _patheffect.default,
  path: pathEffect,
  clip: pathEffect
});

var _default =
/*#__PURE__*/
function (_Animator) {
  (0, _inherits2.default)(_default, _Animator);

  function _default(sprite, frames, timing, setter) {
    var _this;

    (0, _classCallCheck2.default)(this, _default);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_default).call(this, sprite.attr(), frames, timing));
    _this.target = sprite;

    _this.setter = setter || function (frame, target) {
      target.attr(frame);
    };

    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "finish",
    value: function finish() {
      // finish should change attrs synchronously
      (0, _get2.default)((0, _getPrototypeOf2.default)(_default.prototype), "finish", this).call(this);
      (0, _fastAnimationFrame.cancelAnimationFrame)(this.requestId);
      this.setter(this.frame, this.target);
    }
  }, {
    key: "play",
    value: function play() {
      if (!this.target.parent || this.playState === 'running') {
        return;
      }

      (0, _get2.default)((0, _getPrototypeOf2.default)(_default.prototype), "play", this).call(this);
      this.setter(this.frame, this.target);
      var that = this;
      this.ready.then(function () {
        that.setter(that.frame, that.target);
        that.requestId = (0, _fastAnimationFrame.requestAnimationFrame)(function update() {
          var target = that.target;

          if (typeof document !== 'undefined' && document.documentElement && document.documentElement.contains && target.layer && target.layer.canvas && !document.documentElement.contains(target.layer.canvas)) {
            // if dom element has been removed stop animation.
            // it usually occurs in single page applications.
            that.cancel();
            return;
          }

          var playState = that.playState;
          that.setter(that.frame, that.target);
          if (playState === 'idle') return;

          if (playState === 'running') {
            that.requestId = (0, _fastAnimationFrame.requestAnimationFrame)(update);
          } else if (playState === 'paused' || playState === 'pending' && that.timeline.currentTime < 0) {
            // playbackRate < 0 will cause playState reset to pending...
            that.ready.then(function () {
              that.setter(that.frame, that.target);
              that.requestId = (0, _fastAnimationFrame.requestAnimationFrame)(update);
            });
          }
        });
      });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      var preserveState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      (0, _fastAnimationFrame.cancelAnimationFrame)(this.requestId);

      if (preserveState) {
        this.setter(this.frame, this.target);
        (0, _get2.default)((0, _getPrototypeOf2.default)(_default.prototype), "cancel", this).call(this);
      } else {
        (0, _get2.default)((0, _getPrototypeOf2.default)(_default.prototype), "cancel", this).call(this);
        this.setter(this.frame, this.target);
      }
    }
  }, {
    key: "playState",
    get: function get() {
      if (!this.target.parent) {
        return 'idle';
      }

      return (0, _get2.default)((0, _getPrototypeOf2.default)(_default.prototype), "playState", this);
    }
  }, {
    key: "finished",
    get: function get() {
      var _this2 = this;

      // set last frame when finished
      // because while the web page is not focused
      // requestAnimationFrame will not trigger while deferTime of
      // the animator is still running
      return (0, _get2.default)((0, _getPrototypeOf2.default)(_default.prototype), "finished", this).then(function () {
        var that = _this2;
        return new Promise(function (resolve) {
          function update() {
            that.setter(that.frame, that.target);
            var playState = that.playState;

            if (playState === 'finished' || playState === 'idle') {
              (0, _fastAnimationFrame.cancelAnimationFrame)(that.requestId);
              resolve();
            } else {
              (0, _fastAnimationFrame.requestAnimationFrame)(update);
            }
          }

          update();
        });
      });
    }
  }]);
  return _default;
}(_spriteAnimator.Animator);

exports.default = _default;
}, function(modId) { var map = {"../../utils":1584500597660,"./patheffect":1584500597683,"../../helpers/fast-animation-frame":1584500597675}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597683, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pathEffect;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _svgPathToCanvas = _interopRequireDefault(require("svg-path-to-canvas"));

var _sort = require("./sort");

// https://github.com/AlloyTeam/pasition
function _subShapes(shapes, count) {
  var _loop = function _loop(i) {
    var shape = shapes[shapes.length - 1];
    var newShape = [];
    var x = shape[0][0],
        y = shape[0][1];
    shape.forEach(function () {
      newShape.push([x, y, x, y, x, y, x, y]);
    });
    shapes.push(newShape);
  };

  for (var i = 0; i < count; i++) {
    _loop(i);
  }
}

function _upShapes(shapes, count) {
  var _loop2 = function _loop2(i) {
    var shape = shapes[shapes.length - 1];
    var newShape = [];
    shape.forEach(function (curve) {
      newShape.push(curve.slice(0));
    });
    shapes.push(newShape);
  };

  for (var i = 0; i < count; i++) {
    _loop2(i);
  }
}

function split(x1, y1, x2, y2, x3, y3, x4, y4, t) {
  return {
    left: _split(x1, y1, x2, y2, x3, y3, x4, y4, t),
    right: _split(x4, y4, x3, y3, x2, y2, x1, y1, 1 - t, true)
  };
}

function _split(x1, y1, x2, y2, x3, y3, x4, y4, t, reverse) {
  var x12 = (x2 - x1) * t + x1;
  var y12 = (y2 - y1) * t + y1;
  var x23 = (x3 - x2) * t + x2;
  var y23 = (y3 - y2) * t + y2;
  var x34 = (x4 - x3) * t + x3;
  var y34 = (y4 - y3) * t + y3;
  var x123 = (x23 - x12) * t + x12;
  var y123 = (y23 - y12) * t + y12;
  var x234 = (x34 - x23) * t + x23;
  var y234 = (y34 - y23) * t + y23;
  var x1234 = (x234 - x123) * t + x123;
  var y1234 = (y234 - y123) * t + y123;

  if (reverse) {
    return [x1234, y1234, x123, y123, x12, y12, x1, y1];
  }

  return [x1, y1, x12, y12, x123, y123, x1234, y1234];
}

function _splitCurves(curves, count) {
  var i = 0,
      index = 0;

  for (; i < count; i++) {
    var curve = curves[index];
    var cs = split(curve[0], curve[1], curve[2], curve[3], curve[4], curve[5], curve[6], curve[7], 0.5);
    curves.splice(index, 1);
    curves.splice(index, 0, cs.left, cs.right);
    index += 2;

    if (index >= curves.length - 1) {
      index = 0;
    }
  }
}

function pathToShapes(path) {
  var x = 0,
      y = 0;
  var shapes = [];
  path.forEach(function (p) {
    var _p = (0, _toArray2.default)(p),
        cmd = _p[0],
        points = _p.slice(1);

    if (cmd === 'M') {
      x = points[0];
      y = points[1];
    } else {
      shapes.push([x, y].concat((0, _toConsumableArray2.default)(points)));
      x = points[4];
      y = points[5];
    }
  });
  return [shapes];
} // match two path


function match(pathA, pathB) {
  var minCurves = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  var shapesA = pathToShapes(pathA.path);
  var shapesB = pathToShapes(pathB.path);
  var lenA = shapesA.length,
      lenB = shapesB.length;

  if (lenA > lenB) {
    _subShapes(shapesB, lenA - lenB);
  } else if (lenA < lenB) {
    _upShapes(shapesA, lenB - lenA);
  }

  shapesA = (0, _sort.sort)(shapesA, shapesB);
  shapesA.forEach(function (curves, index) {
    var lenA = curves.length,
        lenB = shapesB[index].length;

    if (lenA > lenB) {
      if (lenA < minCurves) {
        _splitCurves(curves, minCurves - lenA);

        _splitCurves(shapesB[index], minCurves - lenB);
      } else {
        _splitCurves(shapesB[index], lenA - lenB);
      }
    } else if (lenA < lenB) {
      if (lenB < minCurves) {
        _splitCurves(curves, minCurves - lenA);

        _splitCurves(shapesB[index], minCurves - lenB);
      } else {
        _splitCurves(curves, lenB - lenA);
      }
    }
  });
  shapesA.forEach(function (curves, index) {
    shapesA[index] = (0, _sort.sortCurves)(curves, shapesB[index]);
  });
  return [shapesA, shapesB];
}

function lerpPoints(x1, y1, x2, y2, t) {
  return [x1 + (x2 - x1) * t, y1 + (y2 - y1) * t];
}

function lerpCurve(curveA, curveB, t) {
  return lerpPoints(curveA[0], curveA[1], curveB[0], curveB[1], t).concat(lerpPoints(curveA[2], curveA[3], curveB[2], curveB[3], t)).concat(lerpPoints(curveA[4], curveA[5], curveB[4], curveB[5], t)).concat(lerpPoints(curveA[6], curveA[7], curveB[6], curveB[7], t));
}

function lerp(pathA, pathB, t) {
  var _match = match(pathA, pathB),
      _match2 = (0, _slicedToArray2.default)(_match, 2),
      shapesA = _match2[0],
      shapesB = _match2[1];

  var closed = /z$/img.test(pathB.d) ? 'z' : '';
  return "".concat(shapesA.map(function (shapeA, i) {
    var shapeB = shapesB[i];
    return shapeA.map(function (curveA, i) {
      var curveB = shapeB[i];
      var curve = lerpCurve(curveA, curveB, t);

      if (i === 0) {
        return "M".concat(curve[0], " ").concat(curve[1], " C").concat(curve[2], " ").concat(curve[3], ", ").concat(curve[4], " ").concat(curve[5], ", ").concat(curve[6], " ").concat(curve[7]);
      }

      return "".concat(curve[2], " ").concat(curve[3], ", ").concat(curve[4], " ").concat(curve[5], ", ").concat(curve[6], " ").concat(curve[7]);
    });
  }).join(' ')).concat(closed);
}

function pathEffect(pathA, pathB, p, s, e) {
  var ep = (p - s) / (e - s);
  if (ep <= 0) return pathA;
  if (ep >= 1) return pathB;
  pathA = new _svgPathToCanvas.default(pathA);
  pathB = new _svgPathToCanvas.default(pathB);
  return lerp(pathA, pathB, ep);
}
}, function(modId) { var map = {"./sort":1584500597684}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597684, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sort = sort;
exports.sortCurves = sortCurves;

// https://github.com/AlloyTeam/pasition
function shapeBox(shape) {
  var minX = shape[0][0],
      minY = shape[0][1],
      maxX = minX,
      maxY = minY;
  shape.forEach(function (curve) {
    var x1 = curve[0],
        x2 = curve[2],
        x3 = curve[4],
        x4 = curve[6],
        y1 = curve[1],
        y2 = curve[3],
        y3 = curve[5],
        y4 = curve[7];
    minX = Math.min(minX, x1, x2, x3, x4);
    minY = Math.min(minY, y1, y2, y3, y4);
    maxX = Math.max(maxX, x1, x2, x3, x4);
    maxY = Math.max(maxY, y1, y2, y3, y4);
  });
  return [minX, minY, maxX, maxY];
}

function boxDistance(boxA, boxB) {
  return Math.sqrt(Math.pow(boxA[0] - boxB[0], 2) + Math.pow(boxA[1] - boxB[1], 2)) + Math.sqrt(Math.pow(boxA[2] - boxB[2], 2) + Math.pow(boxA[3] - boxB[3], 2));
}

function curveDistance(curveA, curveB) {
  var x1 = curveA[0],
      x2 = curveA[2],
      x3 = curveA[4],
      x4 = curveA[6],
      y1 = curveA[1],
      y2 = curveA[3],
      y3 = curveA[5],
      y4 = curveA[7],
      xb1 = curveB[0],
      xb2 = curveB[2],
      xb3 = curveB[4],
      xb4 = curveB[6],
      yb1 = curveB[1],
      yb2 = curveB[3],
      yb3 = curveB[5],
      yb4 = curveB[7];
  return Math.sqrt(Math.pow(xb1 - x1, 2) + Math.pow(yb1 - y1, 2)) + Math.sqrt(Math.pow(xb2 - x2, 2) + Math.pow(yb2 - y2, 2)) + Math.sqrt(Math.pow(xb3 - x3, 2) + Math.pow(yb3 - y3, 2)) + Math.sqrt(Math.pow(xb4 - x4, 2) + Math.pow(yb4 - y4, 2));
}

function sortCurves(curvesA, curvesB) {
  var arrList = permuteCurveNum(curvesA.length);
  var list = [];
  arrList.forEach(function (arr) {
    var distance = 0;
    var i = 0;
    arr.forEach(function (index) {
      distance += curveDistance(curvesA[index], curvesB[i++]);
    });
    list.push({
      index: arr,
      distance: distance
    });
  });
  list.sort(function (a, b) {
    return a.distance - b.distance;
  });
  var result = [];
  list[0].index.forEach(function (index) {
    result.push(curvesA[index]);
  });
  return result;
}

function sort(pathA, pathB) {
  var arrList = permuteNum(pathA.length);
  var list = [];
  arrList.forEach(function (arr) {
    var distance = 0;
    arr.forEach(function (index) {
      distance += boxDistance(shapeBox(pathA[index]), shapeBox(pathB[index]));
    });
    list.push({
      index: arr,
      distance: distance
    });
  });
  list.sort(function (a, b) {
    return a.distance - b.distance;
  });
  var result = [];
  list[0].index.forEach(function (index) {
    result.push(pathA[index]);
  });
  return result;
}

function permuteCurveNum(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    var indexArr = [];

    for (var j = 0; j < num; j++) {
      var index = j + i;
      if (index > num - 1) index -= num;
      indexArr[index] = j;
    }

    arr.push(indexArr);
  }

  return arr;
}

function permuteNum(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push(i);
  }

  return permute(arr);
}

function permute(input) {
  var permArr = [],
      usedChars = [];

  function main(input) {
    var i, ch;

    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);

      if (input.length === 0) {
        permArr.push(usedChars.slice());
      }

      main(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }

    return permArr;
  }

  return main(input);
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597685, function(require, module, exports) {


require("./attr");

require("./node");
}, function(modId) { var map = {"./attr":1584500597686,"./node":1584500597687}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597686, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _baseattr = _interopRequireDefault(require("../../core/baseattr"));

var defaultValues = {
  state: 'default',
  states: {},
  actions: {
    'beforeEnter:': {
      duration: 300,
      easing: 'ease-in'
    },
    'beforeExit:': {
      duration: 300,
      easing: 'ease-out'
    },
    'hide:': {
      duration: 300,
      easing: 'ease-in'
    },
    ':hide': {
      duration: 300,
      easing: 'ease-out'
    },
    'hide:beforeShow': 'none',
    'beforeShow:': {
      duration: 300,
      easing: 'ease-in'
    }
  },
  enterMode: 'normal',
  exitMode: 'normal'
};

_baseattr.default.addAttributes({
  states: {
    value: defaultValues.states,
    set: function set(val) {
      val = Object.assign({}, val);
      var states = this.states; // recover __default

      Object.entries(states).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        if (value.__default && !(key in val)) {
          val[key] = value;
        }
      });
      this.quietSet('states', val);
    }
  },
  actions: {
    value: defaultValues.actions,
    set: function set(val) {
      if (Array.isArray(val)) {
        var value = {};
        val.forEach(function (v) {
          var key;
          var action = v.action;

          if (!action) {
            action = Object.assign({}, v);
            delete action.from;
            delete action.to;
            delete action.both;
          }

          if (v.both) {
            if (!Array.isArray(v.both)) {
              v.both = [v.both];
            }

            if (v.both.length > 1) {
              key = v.both.join(':');
              value[key] = Object.assign({}, action);
              key = v.both.reverse().join(':');
              value[key] = Object.assign({}, action);
            } else {
              value["".concat(v.both[0], ":")] = Object.assign({}, action);
              value[":".concat(v.both[0])] = Object.assign({}, action);
            }
          } else {
            key = "".concat(v.from || '', ":").concat(v.to || '');
            value[key] = Object.assign({}, action);
          }
        });
        val = value;
      }

      var defaultVal = defaultValues.actions;
      val = Object.assign({}, defaultVal, val);
      this.quietSet('actions', val);
    }
  },
  state: {
    value: defaultValues.state,
    set: function set(val) {
      if (val == null) val = 'default';
      var oldState = this.state;

      if (oldState !== val) {
        this.quietSet('state', val);
        var states = this.states;
        var action = null;
        var toState = states[val] || {};
        var subject = this.subject;

        if (!subject.__ignoreAction && subject.layer) {
          var fromState = states[oldState],
              actions = this.actions;
          action = actions["".concat(oldState, ":").concat(val)] || actions[":".concat(val)] || actions["".concat(oldState, ":")];
          if (!action || action === 'none') action = {
            duration: 0
          };
          var animation = subject.changeState(fromState, toState, action);
          var tag = Symbol('tag');
          animation.tag = tag;

          if (animation.__reversed) {
            subject.dispatchEvent("state-to-".concat(oldState), {
              from: val,
              to: oldState,
              action: animation.__reversed,
              cancelled: true,
              animation: animation
            }, true, true);
          }

          subject.dispatchEvent("state-from-".concat(oldState), {
            from: oldState,
            to: val,
            action: action,
            animation: animation
          }, true, true);
          animation.finished.then(function () {
            if (animation.tag === tag) {
              subject.dispatchEvent("state-to-".concat(val), {
                from: oldState,
                to: val,
                action: action,
                animation: animation
              }, true, true);
            }
          });

          if (oldState === 'afterExit') {
            animation.finish();
          }
        } else {
          subject.dispatchEvent("state-from-".concat(oldState), {
            from: oldState,
            to: val
          }, true, true);
          if (toState) subject.attr(toState);
          subject.dispatchEvent("state-to-".concat(val), {
            from: oldState,
            to: val
          }, true, true);
        }
      }
    }
  },
  enterMode: {
    value: defaultValues.enterMode
  },
  exitMode: {
    value: defaultValues.exitMode
  }
});
}, function(modId) { var map = {"../../core/baseattr":1584500597668}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597687, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _basesprite = _interopRequireDefault(require("../../core/basesprite"));

function doActions(ret, target, act) {
  var actions = target.children.map(function (c) {
    return c[act]();
  }).filter(function (d) {
    return d.promise;
  });

  if (ret.promise) {
    actions.unshift(ret);
  }

  if (actions.length) {
    var deferred = {
      promise: Promise.all(actions.map(function (d) {
        return d.promise;
      })),
      resolve: function resolve() {
        actions.forEach(function (d) {
          return d.resolve();
        });
        return this.promise;
      }
    };
    return deferred;
  }

  return null;
}

var _resolveState = Symbol('resolveState'),
    _changeStateAction = Symbol('changeStateAction'),
    _show = Symbol('show'),
    _hide = Symbol('hide'),
    _enter = Symbol('enter');

var _enter2 = _basesprite.default.prototype.enter;
var _exit2 = _basesprite.default.prototype.exit;
Object.assign(_basesprite.default.prototype, {
  changeState: function changeState(fromState, toState, action) {
    var _this = this;

    var animation;

    if (this[_changeStateAction]) {
      var currentAnim = this[_changeStateAction].animation;

      if (this[_changeStateAction].reversable && (currentAnim.playState === 'running' || currentAnim.playState === 'pending') && this[_changeStateAction].fromState === toState && this[_changeStateAction].toState === fromState) {
        currentAnim.playbackRate = -currentAnim.playbackRate;
        animation = currentAnim;
        animation.__reversed = this[_changeStateAction].action;
      } else {
        currentAnim.finish();
      }
    }

    if (!animation) {
      // const [_fromState, _toState] = [Object.assign({}, fromState), Object.assign({}, toState)];
      // delete _fromState.__default;
      // delete _toState.__default;
      var _fromState = {},
          _toState = {};
      Object.entries(fromState || {}).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        if (key !== '__default') {
          if (typeof value === 'function') {
            _fromState[key] = _this.attr(key);
          } else {
            _fromState[key] = value;
          }
        }
      });
      Object.entries(toState || {}).forEach(function (_ref3) {
        var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
            key = _ref4[0],
            value = _ref4[1];

        if (key !== '__default') {
          if (typeof value === 'function') {
            _toState[key] = value(_this.attr(key));
          } else {
            _toState[key] = value;
          }
        }
      });
      animation = this.animate([_fromState, _toState], Object.assign({
        fill: 'forwards'
      }, action));
      animation.finished.then(function () {
        if (_this[_changeStateAction] && _this[_changeStateAction].animation === animation) delete _this[_changeStateAction];
      });
    }

    this[_changeStateAction] = {
      animation: animation,
      fromState: fromState,
      toState: toState,
      action: action,
      reversable: action.reversable !== false
    };
    return animation;
  },
  resolveStates: function resolveStates(states, before, after) {
    var _this2 = this;

    var currentAnimation = null,
        resolved = false;
    var _states = [];
    var prev = null;

    for (var i = 0; i < states.length; i++) {
      var s = states[i];

      if (prev !== s) {
        prev = s;

        _states.push(s);
      }
    }

    states = _states;

    var _resolveStates = function _resolveStates() {
      _this2.__ignoreAction = false;

      var fromState = _this2.attr('state');

      if (fromState === states[0]) {
        states.shift();
      }

      var len = states.length;

      var resolveState = function resolveState(state, i) {
        var promise = new Promise(function (resolve) {
          _this2.once("state-to-".concat(state), function () {
            fromState = state;

            if (i === len - 1) {
              // lastState
              delete _this2[_resolveState];
            }

            if (after) after.call(_this2, states);
            resolve(_this2);
          });

          _this2.once("state-from-".concat(fromState), function (_ref5) {
            var animation = _ref5.animation;
            if (animation && resolved) animation.finish();else currentAnimation = animation;
          });

          _this2.attr('state', state);
        });
        return promise;
      };

      var promise = Promise.resolve();
      states.forEach(function (state, i) {
        promise = promise.then(function () {
          return resolveState(state, i);
        });
      });
      var ret = {
        get animation() {
          return currentAnimation;
        },

        states: states,
        resolve: function resolve() {
          resolved = true;
          if (currentAnimation) currentAnimation.finish();
          return promise;
        },
        promise: promise
      };
      _this2[_resolveState] = ret;
      return ret;
    };

    var rs = this[_resolveState];

    if (rs) {
      rs.resolve();
      this.__ignoreAction = true;
      var promise = rs.promise.then(function () {
        if (before) before.call(_this2, states);
        return _resolveStates().promise;
      });
      return {
        promise: promise,
        resolve: function resolve() {
          resolved = true;
          if (currentAnimation) currentAnimation.finish();
          return promise;
        }
      };
    }

    if (before) before.call(this, states);
    return _resolveStates();
  },
  // state: original -> show -> hide -> show -> original
  show: function show() {
    var _this3 = this;

    if (this[_show]) return this[_show];
    var originalDisplay = this.attr('__originalDisplay') || '';
    var originalState = this.attr('__originalState') || 'default';
    var states = this.attr('states');

    if (states.show) {
      var _st = ['show', originalState];

      if (states.beforeShow) {
        _st.unshift('beforeShow');
      }

      var deferred = this.resolveStates(_st, function () {
        var state = _this3.attr('state');

        if (state === 'hide') {
          _this3.once('state-from-hide', function () {
            _this3.attr('display', originalDisplay);
          });
        }
      });
      deferred.promise = deferred.promise.then(function () {
        if (!_this3[_hide]) {
          delete _this3.__attr.__originalDisplay;
          delete _this3.__attr.__originalState;

          if (states.show.__default) {
            delete states.show;

            _this3.attr('states', states);
          }
        }

        delete _this3[_show];
      });
      this[_show] = deferred;
      return deferred;
    }

    var rs = this[_resolveState];

    if (rs) {
      rs.resolve();
      rs.promise.then(function () {
        _this3.attr('state', originalState);

        _this3.attr('display', originalDisplay);
      });
      return rs;
    }

    this.attr('state', originalState);
    this.attr('display', originalDisplay);
    return this;
  },
  hide: function hide() {
    var _this4 = this;

    var state = this.attr('state');
    if (this[_hide] || state === 'hide' || state === 'afterExit' || state === 'beforeExit') return this[_hide];

    var __originalDisplay = this.attr('__originalDisplay');

    if (__originalDisplay == null) {
      var display = this.attr('display');
      this.attr({
        __originalDisplay: display !== 'none' ? display : '',
        __originalState: state !== 'hide' ? state : 'default'
      });
    }

    var states = this.attr('states');

    if (states.hide) {
      var deferred = this.resolveStates(['show', 'hide'], function () {
        if (!states.show) {
          var beforeHide = {
            __default: true
          };

          if (states.beforeShow) {
            Object.keys(states.beforeShow).forEach(function (key) {
              beforeHide[key] = _this4.attr(key);
            });
          }

          Object.keys(states.hide).forEach(function (key) {
            beforeHide[key] = _this4.attr(key);
          });
          states.show = beforeHide;

          _this4.attr('states', states);
        }
      });
      deferred.promise = deferred.promise.then(function () {
        _this4.attr('display', 'none');

        delete _this4[_hide];
        return _this4;
      });
      this[_hide] = deferred;
      return deferred;
    }

    var rs = this[_resolveState];

    if (rs) {
      rs.resolve();
      rs.promise.then(function () {
        _this4.attr('state', 'hide');

        _this4.attr('display', 'none');
      });
      return rs;
    }

    this.attr('state', 'hide');
    this.attr('display', 'none');
    return this;
  },
  enter: function enter(toState) {
    var _this5 = this;

    var states = this.attr('states');
    var ret;

    if (states && (states.beforeEnter || states.afterEnter)) {
      var deferred = this.resolveStates(['beforeEnter', 'afterEnter'], function (_states) {
        var state = _this5.attr('state');

        _states.push(toState || state);

        if (state !== 'beforeEnter' && state !== 'afterEnter' && (!states.afterEnter || states.afterEnter.__default)) {
          var afterEnter = {
            __default: true
          };
          Object.keys(states.beforeEnter).forEach(function (key) {
            afterEnter[key] = _this5.attr(key);
          });
          states.afterEnter = afterEnter;

          _this5.attr('states', states);
        }
      });
      ret = deferred;
    } else {
      ret = _enter2.call(this);
    }

    this[_enter] = ret;

    if (this.children) {
      var enterMode = this.attr('enterMode');

      if (enterMode === 'onebyone' || enterMode === 'onebyone-reverse') {
        var promise = null;
        var resolved = false;

        if (ret.promise) {
          promise = ret.promise;
        } else {
          promise = Promise.resolve(this);
        }

        var children = this.children;

        if (enterMode === 'onebyone-reverse') {
          children = (0, _toConsumableArray2.default)(children).reverse();
        }

        var currentTask = ret;
        children.forEach(function (c) {
          var states = c.attr('states');

          if (states && (states.beforeEnter || states.afterEnter)) {
            if (!states.afterEnter || states.afterEnter.__default) {
              var afterEnter = {
                __default: true
              };
              Object.keys(states.beforeEnter).forEach(function (key) {
                afterEnter[key] = c.attr(key);
              });
              states.afterEnter = afterEnter;
              c.attr('states', states);
            }
          }

          var toState = c.attr('state');
          c.attr('state', 'beforeEnter');
          promise = promise.then(function () {
            var d = c.enter(toState);

            if (d.promise) {
              currentTask = d;

              if (resolved && d.resolve) {
                d.resolve();
              }

              return d.promise;
            }

            return d;
          });
        });
        this[_enter] = {
          promise: promise,
          resolve: function resolve() {
            if (currentTask && currentTask.resolve) currentTask.resolve();
            resolved = true;
          }
        };
      } else {
        var _deferred = doActions(ret, this, 'enter');

        if (_deferred) this[_enter] = _deferred;
      }
    }

    return this[_enter];
  },
  exit: function exit(toState) {
    var _this6 = this;

    var onbyone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var _exit = function _exit() {
      var states = _this6.attr('states');

      var ret;
      var afterEnter = states.afterEnter || {};

      if (states && (states.beforeExit || states.afterExit)) {
        var state;

        var deferred = _this6.resolveStates(['beforeExit', 'afterExit'], function () {
          state = _this6.attr('state');

          if (state !== 'beforeExit' && state !== 'afterExit' && (!states.beforeExit || states.beforeExit.__default)) {
            states.beforeExit = Object.assign({}, afterEnter);
            states.beforeExit.__default = true;

            _this6.attr('states', states);
          }
        });

        deferred.promise.then(function () {
          if (!onbyone) {
            _this6.attr(afterEnter);

            _this6.__attr.quietSet('state', toState || state);
          }

          return _this6;
        });
        ret = deferred;
      } else {
        var rs = _this6[_resolveState];

        if (rs) {
          rs.resolve();
          rs.promise.then(function () {
            _this6.attr(afterEnter);

            return _exit2.call(_this6);
          });
          ret = rs;
        } else {
          ret = _exit2.call(_this6);

          _this6.attr(afterEnter);
        }
      }

      if (_this6.children) {
        var exitMode = _this6.attr('exitMode');

        if (exitMode === 'onebyone' || exitMode === 'onebyone-reverse') {
          var promise = Promise.resolve(_this6);
          var resolved = false;
          var children = _this6.children;

          if (exitMode === 'onebyone-reverse') {
            children = (0, _toConsumableArray2.default)(children).reverse();
          }

          var currentTask = null;
          children.forEach(function (c) {
            var states = c.attr('states');

            if (states && (states.beforeExit || states.afterExit)) {
              if (!states.beforeExit || states.beforeExit.__default) {
                states.beforeExit = Object.assign({}, afterEnter);
                states.beforeExit.__default = true;
                c.attr('states', states);
              }
            }

            var toState = c.attr('state');
            c.attr('state', 'beforeExit');
            promise = promise.then(function () {
              var d = c.exit(toState, true);

              if (d.promise) {
                currentTask = d;
                if (resolved && d.resolve) d.resolve();
                return d.promise;
              }

              return d;
            });
            c.__toState = toState;
          });
          promise = promise.then(function () {
            var p = ret.promise || Promise.resolve(_this6);
            currentTask = ret;
            return p.then(function () {
              _this6.children.forEach(function (c) {
                var states = c.attr('states');
                c.attr(states.afterEnter);

                c.__attr.quietSet('state', c.__toState);

                delete c.__toState;
              });
            });
          });
          return {
            promise: promise,
            resolve: function resolve() {
              if (currentTask && currentTask.resolve) currentTask.resolve();
              resolved = true;
            }
          };
        }

        var _deferred2 = doActions(ret, _this6, 'exit');

        if (_deferred2) return _deferred2;
      }

      return ret;
    };

    if (this[_enter] && this[_enter].promise) {
      var resolved = false;

      this[_enter].resolve();

      var promise = this[_enter].promise.then(function () {
        var deferred = _exit();

        if (resolved && deferred.resolve) {
          deferred.resolve();
        }

        return deferred.promise;
      });

      return {
        promise: promise,
        resolve: function resolve() {
          resolved = true;
        }
      };
    }

    return _exit();
  }
});
}, function(modId) { var map = {"../../core/basesprite":1584500597667}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597688, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

require("./attr");

var flexLayout = _interopRequireWildcard(require("./flex"));

var _group = _interopRequireDefault(require("../../core/group"));

_group.default.applyLayout('flex', flexLayout);
}, function(modId) { var map = {"./attr":1584500597689,"./flex":1584500597690,"../../core/group":1584500597677}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597689, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _baseattr = _interopRequireDefault(require("../../core/baseattr"));

var _utils = require("../../utils");

/*
  BaseAttr.addAttributes({
    flexGrow: {
      decorators: [],
      value: ...,
      set: ...,
      get: ...,
    },
  });
*/
var relayout = true,
    reflow = true,
    cache = true;

_baseattr.default.addAttributes({
  flexGrow: {
    decorators: [(0, _utils.parseValue)(parseFloat), (0, _utils.attr)({
      relayout: relayout
    })],
    value: 0
  },
  flexShrink: {
    decorators: [(0, _utils.parseValue)(parseFloat), (0, _utils.attr)({
      relayout: relayout
    })],
    value: 1
  },
  flexBasis: {
    decorators: [(0, _utils.attr)({
      relayout: relayout,
      reflow: reflow
    })],
    value: 'auto'
  },
  order: {
    decorators: [(0, _utils.parseValue)(parseInt), (0, _utils.attr)({
      cache: cache,
      relayout: relayout
    })],
    value: 0
  },
  alignSelf: {
    decorators: [(0, _utils.attr)({
      cache: cache,
      relayout: relayout
    })],
    value: ''
  },
  flex: {
    set: function set(val) {
      this.clearFlow();

      if (val != null && val !== 'initial') {
        if (val === 'auto') {
          this.flexGrow = 1;
          this.flexShrink = 1;
          this.flexBasis = 'auto';
        } else if (val === 'none') {
          this.flexGrow = 0;
          this.flexShrink = 0;
          this.flexBasis = 'auto';
        } else if (typeof val === 'string') {
          var values = val.trim().split(/\s+/);
          this.flexGrow = values[0];
          this.flexShrink = values[1];
          this.flexBasis = values[2];
        } else {
          this.flexGrow = val;
          this.flexShrink = 1;
          this.flexBasis = 'auto';
        }
      } else {
        this.flexGrow = 0;
        this.flexShrink = 1;
        this.flexBasis = 'auto';
      }
    },
    get: function get() {
      return "".concat(this.flexGrow, " ").concat(this.flexShrink, " ").concat(this.flexBasis);
    }
  }
});
}, function(modId) { var map = {"../../core/baseattr":1584500597668,"../../utils":1584500597660}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597690, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.relayout = relayout;
exports.attrs = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _spriteFlexLayout = require("sprite-flex-layout");

var _utils = require("../../utils");

var attrs = {
  flexDirection: {
    decorators: [(0, _utils.attr)({
      relayout: relayout
    })],
    value: 'row'
  },
  flexWrap: {
    decorators: [(0, _utils.attr)({
      relayout: relayout
    })],
    value: 'nowrap'
  },
  justifyContent: {
    decorators: [(0, _utils.attr)({
      relayout: relayout
    })],
    value: 'flex-start'
  },
  alignItems: {
    decorators: [(0, _utils.attr)({
      relayout: relayout
    })],
    value: 'stretch'
  },
  alignContent: {
    decorators: [(0, _utils.attr)({
      relayout: relayout
    })],
    value: 'stretch'
  }
};
exports.attrs = attrs;

function relayout(containerSprite, itemsSprite) {
  itemsSprite.sort(function (a, b) {
    var orderA = a.attributes.order | 0,
        orderB = b.attributes.order | 0;

    if (orderA !== orderB) {
      return orderA - orderB;
    }

    return a.zOrder - b.zOrder;
  });

  var container = _spriteFlexLayout.Node.create({
    width: containerSprite.attrSize[0],
    height: containerSprite.attrSize[1],
    flexDirection: containerSprite.attributes.flexDirection,
    alignItems: containerSprite.attributes.alignItems,
    justifyContent: containerSprite.attributes.justifyContent,
    flexWrap: containerSprite.attributes.flexWrap,
    alignContent: containerSprite.attributes.alignContent
  });

  itemsSprite.forEach(function (item) {
    var _item$attr = item.attr('margin'),
        _item$attr2 = (0, _slicedToArray2.default)(_item$attr, 4),
        marginTop = _item$attr2[0],
        marginRight = _item$attr2[1],
        marginBottom = _item$attr2[2],
        marginLeft = _item$attr2[3];

    var _item$attr3 = item.attr('padding'),
        _item$attr4 = (0, _slicedToArray2.default)(_item$attr3, 4),
        paddingTop = _item$attr4[0],
        paddingRight = _item$attr4[1],
        paddingBottom = _item$attr4[2],
        paddingLeft = _item$attr4[3];

    var borderWidth = item.attr('border').width;

    var _item$attrSize = (0, _slicedToArray2.default)(item.attrSize, 2),
        width = _item$attrSize[0],
        height = _item$attrSize[1];

    var config = {
      width: width,
      height: height,
      offsetWidth: item.contentSize[0],
      offsetHeight: item.contentSize[1],
      minWidth: item.attributes.minWidth,
      maxWidth: item.attributes.maxWidth,
      minHeight: item.attributes.minHeight,
      maxHeight: item.attributes.maxHeight,
      boxSizing: item.attr('boxSizing'),
      marginTop: marginTop,
      marginRight: marginRight,
      marginBottom: marginBottom,
      marginLeft: marginLeft,
      paddingTop: paddingTop,
      paddingRight: paddingRight,
      paddingBottom: paddingBottom,
      paddingLeft: paddingLeft,
      borderTop: borderWidth,
      borderRight: borderWidth,
      borderBottom: borderWidth,
      borderLeft: borderWidth,
      alignSelf: item.attributes.alignSelf,
      // flex: item.attributes.flex,
      flexBasis: item.attributes.flexBasis,
      flexGrow: item.attributes.flexGrow,
      flexShrink: item.attributes.flexShrink
    };

    var node = _spriteFlexLayout.Node.create(config);

    container.appendChild(node);
  });
  container.calculateLayout();
  var layout = container.getAllComputedLayout();
  containerSprite.attr({
    layoutWidth: layout.width,
    layoutHeight: layout.height
  });
  layout.children.forEach(function (item, index) {
    var sprite = itemsSprite[index];

    var _sprite$originalRect = (0, _slicedToArray2.default)(sprite.originalRect, 2),
        ox = _sprite$originalRect[0],
        oy = _sprite$originalRect[1]; // fix anchor


    sprite.attr({
      layoutX: item.left - ox,
      layoutY: item.top - oy,
      layoutWidth: item.width,
      layoutHeight: item.height,
      layoutRight: item.left + item.width,
      layoutBottom: item.top + item.height
    });
  });
}
}, function(modId) { var map = {"../../utils":1584500597660}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597691, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "querySelector", {
  enumerable: true,
  get: function get() {
    return _selector.querySelector;
  }
});
Object.defineProperty(exports, "querySelectorAll", {
  enumerable: true,
  get: function get() {
    return _selector.querySelectorAll;
  }
});
Object.defineProperty(exports, "registerNodeType", {
  enumerable: true,
  get: function get() {
    return _nodetype.registerNodeType;
  }
});
Object.defineProperty(exports, "createNode", {
  enumerable: true,
  get: function get() {
    return _nodetype.createNode;
  }
});
Object.defineProperty(exports, "createElement", {
  enumerable: true,
  get: function get() {
    return _nodetype.createElement;
  }
});
Object.defineProperty(exports, "isValidNodeType", {
  enumerable: true,
  get: function get() {
    return _nodetype.isValidNodeType;
  }
});

var _selector = require("./selector");

var _nodetype = require("./nodetype");

var _basenode = _interopRequireDefault(require("../../core/basenode"));

var _basesprite = _interopRequireDefault(require("../../core/basesprite"));

var _sprite = _interopRequireDefault(require("../../core/sprite"));

var _label = _interopRequireDefault(require("../../core/label"));

var _path = _interopRequireDefault(require("../../core/path"));

var _group = _interopRequireDefault(require("../../core/group"));

var _layer = _interopRequireDefault(require("../../core/layer"));

(0, _nodetype.registerNodeType)('node', _basenode.default);
(0, _nodetype.registerNodeType)('basesprite', _basesprite.default);
(0, _nodetype.registerNodeType)('sprite', _sprite.default);
(0, _nodetype.registerNodeType)('label', _label.default);
(0, _nodetype.registerNodeType)('path', _path.default);
(0, _nodetype.registerNodeType)('group', _group.default, true);
(0, _nodetype.registerNodeType)('layer', _layer.default, true);
Object.defineProperties(_basenode.default.prototype, {
  attributes: {
    get: function get() {
      if (typeof Proxy === 'function') {
        try {
          return new Proxy(this.__attr, {
            get: function get(target, prop) {
              if (prop in target) return target[prop];
              return target.subject.attr(prop);
            },
            set: function set(target, prop, value) {
              if (typeof prop !== 'string' || /^__/.test(prop)) target[prop] = value;else target.subject.attr(prop, value);
              return true;
            },
            deleteProperty: function deleteProperty(target, prop) {
              if (typeof prop !== 'string' || /^__/.test(prop)) delete target[prop];else target.subject.attr(prop, null);
              return true;
            }
          });
        } catch (ex) {
          return this.__attr;
        }
      }

      return this.__attr;
    }
  },
  style: {
    get: function get() {
      if (typeof Proxy === 'function') {
        try {
          return new Proxy(this.__attr, {
            get: function get(target, prop) {
              if (prop !== 'id' && prop !== 'name' && prop !== 'class') {
                return target[prop];
              }

              return null;
            },
            set: function set(target, prop, value) {
              if (prop !== 'id' && prop !== 'name' && prop !== 'class') {
                target.subject.attr(prop, value);
              }

              return true;
            },
            deleteProperty: function deleteProperty(target, prop) {
              if (prop !== 'id' && prop !== 'name' && prop !== 'class') {
                target.subject.attr(prop, null);
                return true;
              }

              return false;
            }
          });
        } catch (ex) {
          return this.__attr;
        }
      }

      return this.__attr;
    }
  },
  parentNode: {
    get: function get() {
      return this.parent;
    }
  },
  nextSibling: {
    get: function get() {
      return this.getNodeNearBy(1);
    }
  },
  previousSibling: {
    get: function get() {
      return this.getNodeNearBy(-1);
    }
  },
  nextElementSibling: {
    get: function get() {
      return this.getNodeNearBy(1, true);
    }
  },
  previousElementSibling: {
    get: function get() {
      return this.getNodeNearBy(-1, true);
    }
  }
});
Object.assign(_basenode.default.prototype, {
  addEventListener: function addEventListener(type, handler) {
    return this.on(type, handler);
  },
  removeEventListener: function removeEventListener(type, handler) {
    return this.off(type, handler);
  },
  getNodeNearBy: function getNodeNearBy() {
    var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var isElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    if (!this.parent) return null;
    if (distance === 0) return this;
    var children = isElement ? this.parent.children : this.parent.childNodes;
    var idx = children.indexOf(this);
    return children[idx + distance];
  },
  getAttribute: function getAttribute(prop) {
    /* istanbul ignore next */
    return this.attr(prop);
  },
  setAttribute: function setAttribute(prop, val) {
    /* istanbul ignore next */
    return this.attr(prop, val);
  },
  removeAttribute: function removeAttribute(prop) {
    /* istanbul ignore next */
    return this.attr(prop, null);
  },
  contains: function contains(node) {
    while (node && this !== node) {
      node = node.parent;
    }

    return !!node;
  }
});
}, function(modId) { var map = {"./selector":1584500597692,"./nodetype":1584500597693,"../../core/basenode":1584500597670,"../../core/basesprite":1584500597667,"../../core/sprite":1584500597672,"../../core/label":1584500597673,"../../core/path":1584500597679,"../../core/group":1584500597677,"../../core/layer":1584500597674}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597692, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.querySelectorAll = querySelectorAll;
exports.querySelector = querySelector;
exports.isMatched = isMatched;
exports.compile = compile;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _utils = require("../../utils");

var CSSselect = require('css-select');

CSSselect.pseudos.hover = function (next) {
  return !!next.attr('__internal_state_hover_');
};

CSSselect.pseudos.active = function (next) {
  return !!next.attr('__internal_state_active_');
};

function isTag(elem) {
  return elem.nodeType === 1 || typeof elem.nodeType === 'string';
}

function getChildren(elem) {
  if (elem.scene_) {
    return [elem.scene_];
  }

  if (elem.layer_) {
    return [elem.layer_];
  }

  return Array.from(elem.childNodes || []);
}

function getParent(elem) {
  if (elem.nodeType === 1) return elem.parentElement;

  if (typeof elem.nodeType === 'string') {
    return elem.parent || elem.canvas || elem.container;
  }
}

function removeSubsets(nodes) {
  var idx = nodes.length,
      node,
      ancestor,
      replace; // Check if each node (or one of its ancestors) is already contained in the
  // array.

  while (--idx > -1) {
    node = ancestor = nodes[idx]; // Temporarily remove the node under consideration

    nodes[idx] = null;
    replace = true;

    while (ancestor) {
      if (nodes.indexOf(ancestor) > -1) {
        replace = false;
        nodes.splice(idx, 1);
        break;
      }

      ancestor = getParent(ancestor);
    } // If the node has been found to be unique, re-insert it.


    if (replace) {
      nodes[idx] = node;
    }
  }

  return nodes;
}

var adapter = {
  isTag: isTag,
  existsOne: function existsOne(test, elems) {
    return elems.some(function (elem) {
      return isTag(elem) ? test(elem) || adapter.existsOne(test, getChildren(elem)) : false;
    });
  },
  getSiblings: function getSiblings(elem) {
    var parent = getParent(elem);
    return parent && getChildren(parent);
  },
  getChildren: getChildren,
  getParent: getParent,
  getAttributeValue: function getAttributeValue(elem, name) {
    if (elem.nodeType === 1 && name === 'class' || name === 'id') {
      return elem[name];
    }

    if (this.hasAttrib(elem, name)) {
      var val = elem.attributes[name];

      if (Array.isArray(val)) {
        val = "[".concat(val.join(), "]");
      }

      return String(val);
    }
  },
  hasAttrib: function hasAttrib(elem, name) {
    return elem.attributes[name] != null;
  },
  removeSubsets: removeSubsets,
  getName: function getName(elem) {
    return elem.tagName ? elem.tagName.toLowerCase() : null;
  },
  findOne: function findOne(test, arr) {
    var elem = null;

    for (var i = 0, l = arr.length; i < l && !elem; i++) {
      if (test(arr[i])) {
        elem = arr[i];
      } else {
        var childs = getChildren(arr[i]);

        if (childs && childs.length > 0) {
          elem = findOne(test, childs);
        }
      }
    }

    return elem;
  },
  findAll: function findAll(test, elems) {
    var result = [];

    for (var i = 0, j = elems.length; i < j; i++) {
      if (!isTag(elems[i])) continue; // eslint-disable-line

      if (test(elems[i])) result.push(elems[i]);
      var childs = getChildren(elems[i]);
      if (childs) result = result.concat(findAll(test, childs));
    }

    return result;
  },
  getText: function getText(elem) {
    if (Array.isArray(elem)) return elem.map(getText).join('');
    if (isTag(elem)) return getText(getChildren(elem));
    if (elem.nodeType === 3) return elem.nodeValue;
    if (typeof elem.nodeType === 'string') return elem.text;
    return '';
  }
};

function resolveQuery(query) {
  if (typeof query !== 'string') return query;
  var matches = query.match(/\[(bgcolor|fillColor|strokeColor|color)\s*=\s*['"]?\w+['"]?\]/g);

  if (matches) {
    matches = matches.map(function (matched) {
      var kv = matched.slice(1, -1).split('=');
      var color = (0, _utils.parseColorString)(kv[1].replace(/['"]/g, ''));
      return [matched, "[".concat(kv[0], "=\"").concat(color, "\"]")];
    });
    matches.forEach(function (_ref) {
      var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
          r = _ref2[0],
          p = _ref2[1];

      query = query.replace(r, p);
    });
  }

  matches = query.match(/\[\w+\s*=\s*['"]\[.+?\]['"]\]/g);

  if (matches) {
    matches = matches.map(function (matched) {
      var kv = matched.slice(1, -1).split('=');
      var arr = kv[1].slice(2, -2).split(/,/g).map(function (k) {
        return k.trim();
      });
      return [matched, "[".concat(kv[0], "=\"[").concat(arr, "]\"]")];
    });
    matches.forEach(function (_ref3) {
      var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
          r = _ref4[0],
          p = _ref4[1];

      query = query.replace(r, p);
    });
  }

  return query;
}

function querySelectorAll(query, elems) {
  return CSSselect.selectAll(resolveQuery(query), elems, {
    adapter: adapter
  });
}

function querySelector(query, elems) {
  return CSSselect.selectOne(resolveQuery(query), elems, {
    adapter: adapter
  });
}

function isMatched(elem, query) {
  return CSSselect.is(elem, resolveQuery(query), {
    adapter: adapter
  });
}

function compile(query) {
  return CSSselect.compile(resolveQuery(query), {
    adapter: adapter
  });
}
}, function(modId) { var map = {"../../utils":1584500597660}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597693, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerNodeType = registerNodeType;
exports.createNode = createNode;
exports.createElement = createElement;
exports.isValidNodeType = isValidNodeType;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _construct2 = _interopRequireDefault(require("@babel/runtime/helpers/construct"));

var _selector = require("./selector");

var nodeTypes = new Map();
/* istanbul ignore next  */

var ownerDocumentDescriptor = {
  get: function get() {
    return {
      createElementNS: function createElementNS(uri, name) {
        return createNode(name);
      }
    };
  }
};
var elementProto = {
  getElementById: function getElementById(id) {
    return (0, _selector.querySelector)("#".concat(id), this);
  },
  getElementsByName: function getElementsByName(name) {
    return (0, _selector.querySelectorAll)("[name=\"".concat(name, "\"]"), this);
  },
  getElementsByClassName: function getElementsByClassName(className) {
    return (0, _selector.querySelectorAll)(".".concat(className), this);
  },
  getElementsByTagName: function getElementsByTagName(tagName) {
    return (0, _selector.querySelectorAll)(tagName, this);
  },
  querySelector: function querySelector(selector) {
    return (0, _selector.querySelector)(selector, this);
  },
  querySelectorAll: function querySelectorAll(selector) {
    return (0, _selector.querySelectorAll)(selector, this);
  }
};

function registerNodeType(type, Class) {
  var isQuerable = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var nodeType = type.toLowerCase();
  var tagName = type.toUpperCase();
  Object.defineProperty(Class.prototype, 'nodeType', {
    get: function get() {
      return nodeType;
    }
  }); // friendly to snabbdom

  Object.defineProperty(Class.prototype, 'tagName', {
    get: function get() {
      return tagName;
    }
  });
  Object.defineProperty(Class.prototype, 'nodeName', {
    get: function get() {
      return tagName;
    }
  });
  nodeTypes.set(nodeType, Class);

  if (isQuerable && !Class.prototype.ownerDocument) {
    Object.defineProperty(Class.prototype, 'ownerDocument', ownerDocumentDescriptor);
    Class.prototype.namespaceURI = "http://spritejs.org/".concat(type);
    Object.assign(Class.prototype, elementProto);
  }
}

function createNode(type) {
  var Class = getNodeType(type);

  if (Class) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return (0, _construct2.default)(Class, args);
  }

  return null;
}

function createElement(type, attrs, content) {
  var Node = typeof type === 'string' ? getNodeType(type) : type;
  if (!Node) return null;
  var sprite = new Node(typeof content === 'string' ? content : undefined);

  if (attrs !== null) {
    sprite.attr(attrs);
  }

  if ((0, _typeof2.default)(content) === 'object' && sprite.append) {
    if (content instanceof Array) {
      sprite.append.apply(sprite, (0, _toConsumableArray2.default)(content));
    } else {
      sprite.append(content);
    }
  }

  return sprite;
}

function getNodeType(type) {
  return nodeTypes.get(type.toLowerCase());
}

function isValidNodeType(type) {
  return !!getNodeType(type);
}
}, function(modId) { var map = {"./selector":1584500597692}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597694, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _basenode = _interopRequireDefault(require("../../core/basenode"));

var _layer = _interopRequireDefault(require("../../core/layer"));

var _stylesheet = _interopRequireDefault(require("./stylesheet"));

/* istanbul ignore next */
_layer.default.prototype.fromDocumentCSS = function () {
  _stylesheet.default.fromDocumentCSS();
};

_basenode.default.prototype.restyle = function () {
  _stylesheet.default.computeStyle(this);
};

var _default = _stylesheet.default;
exports.default = _default;
}, function(modId) { var map = {"../../core/basenode":1584500597670,"../../core/layer":1584500597674,"./stylesheet":1584500597695}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500597695, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _selector = require("../dom/selector");

var _utils = require("../../utils");

var cssWhat = require('css-what');

var cssRules = [];
var keyFrames = {};

var _matchedSelectors = Symbol('matchedSelectors');

var _transitions = Symbol('transitions');

var _animation = Symbol('animation');
/* istanbul ignore next */


function parseTransitionValue(values) {
  if (typeof values === 'string') values = values.trim().split(/\s*,\s*/g);
  var ret = [];

  for (var i = 0; i < values.length; i++) {
    var value = values[i].toString();

    if (value === 'initial') {
      value = 0;
    } else if (/ms$/.test(value)) {
      value = parseFloat(value) / 1000;
    } else {
      value = parseFloat(value);
    }

    ret.push(value);
  }

  return ret;
}
/* istanbul ignore next */


function parseAnimationValue(value) {
  value = value.toString();

  if (value === 'initial') {
    value = 0;
  } else if (/ms$/.test(value)) {
    value = parseFloat(value);
  } else {
    value = parseFloat(value) * 1000;
  }

  return value;
}
/* istanbul ignore next */


function toPxValue(value, defaultWidth) {
  // eslint-disable-line complexity
  if (typeof value === 'string') {
    var matched = value.match(/^([\d.]+)(px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin)$/);

    if (matched) {
      // console.log(matched);
      var size = parseFloat(matched[1]);
      var unit = matched[2];
      value = (0, _utils.sizeToPixel)({
        size: size,
        unit: unit
      });
    } else {
      var _size = Number(value);

      if (!Number.isNaN(_size)) {
        value = _size;
      }
    }
  }

  return value;
}
/* istanbul ignore next */


var CSSGetter = {
  opacity: true,
  width: true,
  height: true,
  backgroundColor: true,
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  order: true,
  flexDirection: true,
  flexWrap: true,
  justifyContent: true,
  alignItems: true,
  alignContent: true,
  position: true,
  alignSelf: true,
  transform: true,
  transformOrigin: true,
  borderTopWidth: true,
  borderRightWidth: true,
  borderBottomWidth: true,
  borderLeftWidth: true,
  borderTopColor: true,
  borderRightColor: true,
  borderBottomColor: true,
  borderLeftColor: true,
  borderTopStyle: true,
  borderRightStyle: true,
  borderBottomStyle: true,
  borderLeftStyle: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderBottomRightRadius: true,
  borderBottomLeftRadius: true,
  boxSizing: true,
  display: true,
  paddingTop: true,
  paddingRight: true,
  paddingBottom: true,
  paddingLeft: true,
  marginTop: true,
  marginRight: true,
  marginBottom: true,
  marginLeft: true,
  zIndex: true,
  font: true,
  fontSize: true,
  fontFamily: true,
  fontStyle: true,
  fontVariantCaps: true,
  fontWeight: true,
  color: true,
  textAlign: true,
  lineHeight: true,
  lineBreak: true,
  wordBreak: true,
  letterSpacing: true,
  textIndent: true,
  transitionDuration: parseTransitionValue,
  transitionTimingFunction: function transitionTimingFunction(values) {
    if (typeof values === 'string') values = values.trim().split(/\s*,\s*/g);
    var ret = [];

    for (var i = 0; i < values.length; i++) {
      var value = values[i].toString();
      if (value === 'initial') value = 'ease';
      ret.push(value);
    }

    return ret;
  },
  transitionDelay: parseTransitionValue,
  transitionProperty: true,
  animationDuration: parseAnimationValue,
  animationDelay: parseAnimationValue,
  animationTimingFunction: function animationTimingFunction(value) {
    value = value.toString();
    return value !== 'initial' ? value : 'ease';
  },
  animationIterationCount: function animationIterationCount(value) {
    value = value.toString();
    if (value === 'initial') return 1;
    if (value === 'infinity') return Infinity;
    return parseFloat(value);
  },
  animationDirection: function animationDirection(value) {
    value = value.toString();
    return value !== 'initial' ? value : 'normal';
  },
  animationFillMode: function animationFillMode(value) {
    value = value.toString();
    if (value === 'initial' || value === 'none') value = 'auto';
    return value;
  },
  animationPlayState: true,
  animationName: true
};
/* istanbul ignore next */

function parseRuleAttrs(rule) {
  // eslint-disable-line complexity
  var styleAttrs;
  var isStyleMap = !!rule.styleMap;

  if (!isStyleMap) {
    if (!rule.style) return;
    var props = (0, _toConsumableArray2.default)(rule.style).map(function (key) {
      return [key, rule.style[key]];
    }).filter(function (_ref) {
      var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];

      return value != null;
    });
    var matched = rule.cssText.match(/--sprite-[\w-]+\s*:\s*.+?(;|$)/img);

    if (matched) {
      matched.forEach(function (rule) {
        var _rule$split = rule.split(':'),
            _rule$split2 = (0, _slicedToArray2.default)(_rule$split, 2),
            key = _rule$split2[0],
            value = _rule$split2[1];

        props.push([key, value.trim().replace(/;$/, '')]);
      });
    }

    var isIgnore = props['--sprite-ignore'];

    if (isIgnore && isIgnore !== 'false' && isIgnore !== '0') {
      return;
    }

    styleAttrs = props;
  }

  if (rule.styleMap && rule.styleMap.has('--sprite-ignore')) {
    var _isIgnore = rule.styleMap.get('--sprite-ignore')[0].trim();

    if (_isIgnore !== 'false' && _isIgnore !== '0' && _isIgnore !== '') {
      return;
    }
  }

  if (rule.styleMap) {
    styleAttrs = (0, _toConsumableArray2.default)(rule.styleMap);
  }

  var attrs = {},
      reserved = {};
  var borderRadius = null;
  var transition = null;
  var gradient = {};
  styleAttrs.forEach(function (_ref3) {
    var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    // eslint-disable-line complexity
    if (key === '--sprite-transition') {
      throw new Error('Not support --sprite-transition, instead use transition.');
    }

    if (key === '--sprite-animation') {
      throw new Error('Not support --sprite-animation, instead use animation.');
    }

    if (key.indexOf('--sprite-') === 0) {
      key = key.replace('--sprite-', '');
      key = toCamel(key);
      if (isStyleMap) value = value[0][0].trim();

      if (key === 'gradient') {
        // --sprite-gradient: bgcolor,color vector(0, 150, 150, 0) 0,#fff 0.5,rgba(33, 33, 77, 0.7) 1,rgba(128, 45, 88, 0.5)
        var _matched = value.match(/(.+?)vector\((.+?)\)(.+)/);

        if (_matched) {
          var properties = _matched[1].trim().split(/\s*,\s*/g),
              vector = _matched[2].split(',').map(function (s) {
            return Number(s.trim());
          }),
              colors = _matched[3].trim().split(/\s+/).map(function (s) {
            var m = s.match(/^([\d.]+),(.*)/);

            if (m) {
              return {
                offset: Number(m[1].trim()),
                color: m[2].trim()
              };
            }

            return null;
          }).filter(function (c) {
            return c != null;
          });

          properties.forEach(function (prop) {
            gradient[prop] = {
              vector: vector,
              colors: colors
            };
          });
        }
      }

      if (key === 'border') {
        var values = value.split(/\s+/);

        var _values = (0, _slicedToArray2.default)(values, 3),
            style = _values[0],
            width = _values[1],
            color = _values[2];

        reserved.border = {
          style: style,
          width: width,
          color: color
        };
      } else {
        if (key !== 'fontSize' && typeof value === 'string') {
          if (/,/.test(value)) {
            var _values2 = value.split(',');

            value = _values2.map(function (v) {
              return toPxValue(v.trim());
            });
          } else {
            value = toPxValue(value);
          }
        }

        reserved[key] = value;
      }
    } else {
      key = toCamel(key);

      if (key in CSSGetter) {
        if (typeof CSSGetter[key] === 'function') {
          value = CSSGetter[key](value);
        } else {
          if (isStyleMap) {
            value = value[0].toString();
          }

          if (key !== 'fontSize') {
            value = toPxValue(value);
          }
        }

        if (/^animation/.test(key)) {
          attrs.animation = attrs.animation || {};
          attrs.animation[key] = value;
          return;
        }

        if (value === 'initial') return;
        if (key === 'backgroundColor') key = 'bgcolor';
        if (key === 'fontVariantCaps') key = 'fontVariant';
        if (key === 'lineHeight' && value === 'normal') value = '';

        if (/Radius$/.test(key)) {
          if (typeof value === 'string') {
            value = value.split(/\s+/).map(function (v) {
              return toPxValue(v);
            });
          } else {
            value = [value, value];
          }

          borderRadius = borderRadius || [0, 0, 0, 0, 0, 0, 0, 0];

          if (key === 'borderTopLeftRadius') {
            borderRadius[0] = value[0];
            borderRadius[1] = value[1];
          } else if (key === 'borderTopRightRadius') {
            borderRadius[2] = value[0];
            borderRadius[3] = value[1];
          } else if (key === 'borderBottomRightRadius') {
            borderRadius[4] = value[0];
            borderRadius[5] = value[1];
          } else if (key === 'borderBottomLeftRadius') {
            borderRadius[6] = value[0];
            borderRadius[7] = value[1];
          }
        } else if (/^border(Left|Right|Top|Bottom)\w+/.test(key)) {
          if (/Color$/.test(key)) {
            attrs.borderColor = value;
          } else if (/Style$/.test(key)) {
            attrs.borderStyle = value;
          } else if (/Width$/.test(key)) {
            attrs.borderWidth = value;
          }
        } else if (key === 'transitionDelay') {
          transition = transition || {};
          transition.delay = value;
        } else if (key === 'transitionDuration') {
          transition = transition || {};
          transition.duration = value;
        } else if (key === 'transitionTimingFunction') {
          transition = transition || {};
          transition.easing = value;
        } else if (key === 'transitionProperty') {
          transition = transition || {};
          transition.properties = value;
        } else {
          attrs[key] = value;
        }
      }
    }
  });

  if (borderRadius) {
    attrs.borderRadius = borderRadius;
  }

  Object.assign(attrs, reserved, gradient);

  if (transition) {
    transition.properties = transition.properties || 'all';
    transition.delay = transition.delay || [0];
    transition.duration = transition.duration || [0];
    transition.easing = transition.easing || ['ease'];
    attrs.transitions = [];
    var properties = transition.properties.split(',').map(function (p) {
      return p.trim();
    });
    properties.forEach(function (key, i) {
      var _attrs = null;

      if (key.indexOf('--sprite-') === 0) {
        key = key.replace('--sprite-', '');
      }

      key = toCamel(key);

      if (key !== 'borderRadius' && /^border/.test(key)) {
        key = 'border';
      }

      if (key === 'backgroundColor' || key === 'background') key = 'bgcolor';
      if (key === 'fontVariantCaps') key = 'fontVariant';

      if (key === 'all') {
        _attrs = Object.assign({}, attrs);
        delete _attrs.transitions;
        delete _attrs.animation;
      } else if (key in attrs) {
        _attrs = (0, _defineProperty2.default)({}, key, attrs[key]);
      }

      if (_attrs) {
        attrs.transitions.push({
          easing: transition.easing[i],
          attrs: _attrs,
          delay: transition.delay[i],
          duration: transition.duration[i]
        });
      }
    });
  }

  if ('fontSize' in attrs || 'fontFamily' in attrs || 'fontStyle' in attrs || 'fontVariant' in attrs || 'fontWeight' in attrs) {
    // for font inherit
    var font = attrs.font || 'normal normal normal 16px Arial';

    var _parseFont = (0, _utils.parseFont)(font),
        style = _parseFont.style,
        variant = _parseFont.variant,
        weight = _parseFont.weight,
        family = _parseFont.family,
        size = _parseFont.size,
        unit = _parseFont.unit;

    attrs.font = "".concat(attrs.fontStyle || style, " ").concat(attrs.fontVariant || variant, " ").concat(attrs.fontWeight || weight, " ").concat(attrs.fontSize || size + unit, " ").concat(attrs.fontFamily || family);
    delete attrs.fontSize;
    delete attrs.fontFamily;
    delete attrs.fontVariant;
    delete attrs.fontWeight;
    delete attrs.fontStyle;
  }

  return attrs;
}

function parseFrames(rule)
/* istanbul ignore next */
{
  var rules = rule.cssRules || rule.rules;

  if (rules && rules.length > 0) {
    var frames = [];

    for (var i = 0; i < rules.length; i++) {
      var _rule = rules[i];
      var offset = parseFloat(_rule.keyText) / 100;
      var frame = parseRuleAttrs(_rule);
      frame.offset = offset;
      frames.push(frame);
    }

    return frames;
  }
}
/* istanbul ignore next */


function toCamel(str) {
  return str.replace(/([^-])(?:-+([^-]))/g, function ($0, $1, $2) {
    return $1 + $2.toUpperCase();
  });
}

function resolveToken(token) {
  // eslint-disable-line complexity
  var ret = '',
      priority = 0,
      valid = true;

  if (token.type === 'tag') {
    ret = token.name;
    priority = 1;
  } else if (token.type === 'universal') {
    ret = '*';
    priority = 0;
  } else if (token.type === 'pseudo') {
    var data = token.data;

    if (data != null) {
      if (token.name === 'not') {
        data.forEach(function (rules) {
          rules.forEach(function (token) {
            var r = resolveToken(token);
            ret += r.token;
            valid &= r.valid;
          });
        });
        ret = ":".concat(token.name, "(").concat(ret, ")");
      } else {
        ret = ":".concat(token.name, "(").concat(token.data, ")");
      }
    } else {
      ret = ":".concat(token.name);
    }

    if (token.name === 'hover')
      /* istanbul ignore next */
      {
        _utils.relatedAttributes.add('__internal_state_hover_');
      } else if (token.name === 'active')
      /* istanbul ignore next */
      {
        _utils.relatedAttributes.add('__internal_state_active_');
      } // not support yet


    valid = token.name !== 'focus' && token.name !== 'link' && token.name !== 'visited' && token.name !== 'lang';
    priority = token.name !== 'not' ? 1000 : 0;
  } else if (token.type === 'pseudo-element')
    /* istanbul ignore next */
    {
      ret = "::".concat(token.name);
      priority = 1;
      valid = false; // pseudo-element not support
    } else if (token.type === 'attribute') {
    var name = token.name,
        action = token.action,
        value = token.value;

    _utils.relatedAttributes.add(name);

    if (action === 'exists') {
      ret = "[".concat(name, "]");
    } else if (action === 'equals') {
      if (name === 'id') {
        ret = "#".concat(value);
      } else {
        ret = "[".concat(name, "=\"").concat(value, "\"]");
      }
    } else if (action === 'not')
      /* istanbul ignore next */
      {
        throw new Error('Attribute \'not\' action is not allowed.'); // ret = `[${name}!="${value}"]`;
      } else if (action === 'start') {
      ret = "[".concat(name, "^=\"").concat(value, "\"]");
    } else if (action === 'end') {
      ret = "[".concat(name, "$=\"").concat(value, "\"]");
    } else if (action === 'element') {
      if (name === 'class') {
        ret = ".".concat(value);
      } else {
        ret = "[".concat(name, "~=\"").concat(value, "\"]");
      }
    } else if (action === 'any') {
      ret = "[".concat(name, "*=\"").concat(value, "\"]");
    } else if (action === 'hyphen') {
      ret = "[".concat(name, "|=\"").concat(value, "\"]");
    }

    if (name === 'id' && action === 'equals') {
      priority = 1000000;
    } else {
      priority = 1000;
    }
  } else if (token.type === 'child') {
    ret = '>';
    priority = 0;
  } else if (token.type === 'parent')
    /* istanbul ignore next */
    {
      throw new Error('Parent selector is not allowed.'); // ret = '<';
      // priority = 0;
    } else if (token.type === 'sibling') {
    ret = '~';
    priority = 0;
  } else if (token.type === 'adjacent') {
    ret = '+';
    priority = 0;
  } else if (token.type === 'descendant') {
    ret = ' ';
    priority = 0;
  } else
    /* istanbul ignore next */
    {
      throw new Error("Unknown token ".concat(token, "."));
    }

  return {
    token: ret,
    priority: priority,
    valid: valid
  };
}

var order = 0;
var _default = {
  add: function add(rules) {
    var fromDoc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    Object.entries(rules).forEach(function (_ref5) {
      var _ref6 = (0, _slicedToArray2.default)(_ref5, 2),
          rule = _ref6[0],
          attributes = _ref6[1];

      var selectors = cssWhat.parse(rule);

      for (var i = 0; i < selectors.length; i++) {
        var selector = selectors[i];
        var tokens = selector.map(function (token) {
          return resolveToken(token);
        }).filter(function (token) {
          return token.valid;
        });
        var r = tokens.reduce(function (a, b) {
          a.priority += b.priority;
          a.tokens.push(b.token);
          return a;
        }, {
          tokens: [],
          priority: 0
        });
        var selectorStr = r.tokens.join('');

        try {
          var compiled = (0, _selector.compile)(selectorStr);
          var _rule2 = {
            selector: selectorStr,
            compiled: compiled,
            priority: r.priority,
            attributes: attributes,
            order: order++,
            fromDoc: fromDoc
          };
          cssRules.push(_rule2);
        } catch (ex)
        /* istanbul ignore next */
        {
          console.warn(ex.message);
        }
      }
    });
    cssRules.sort(function (a, b) {
      var d = a.priority - b.priority;
      return d !== 0 ? d : a.order - b.order;
    });
  },
  fromDocumentCSS: function fromDocumentCSS(stylesheets, override)
  /* istanbul ignore next */
  {
    if (override) {
      cssRules = cssRules.filter(function (r) {
        return !r.fromDoc;
      });
    }

    if (typeof document === 'undefined') return;
    if (!stylesheets) stylesheets = document.styleSheets;

    if (stylesheets) {
      var styleRules = {};

      for (var i = 0; i < stylesheets.length; i++) {
        var rules = null;

        try {
          rules = stylesheets[i].cssRules || stylesheets[i].rules;
        } catch (ex) {
          rules = null;
        }

        if (!rules) continue; // eslint-disable-line no-continue

        for (var j = 0; j < rules.length; j++) {
          var rule = rules[j];
          var selectorText = rule.selectorText;

          if (rule.type !== 1 && rule.type !== 7) {
            // is not style rule or keyframesrule
            continue; // eslint-disable-line no-continue
          }

          if (rule.type === 7) {
            var frames = parseFrames(rule);
            keyFrames[rule.name] = frames;
            continue; // eslint-disable-line no-continue
          }

          var attrs = parseRuleAttrs(rule);

          if (attrs) {
            styleRules[selectorText] = styleRules[selectorText] || {};
            Object.assign(styleRules[selectorText], attrs);
          }
        }
      }

      this.add(styleRules, true);
    }
  },
  computeStyle: function computeStyle(el) {
    if (!el.attributes) return {};
    el.__styleNeedUpdate = false;
    if (cssRules.length <= 0) return {};
    var attrs = {};
    var selectors = [];
    var transitions = [];
    cssRules.forEach(function (rule) {
      var compiled = rule.compiled,
          selector = rule.selector,
          attributes = rule.attributes;

      if ((0, _selector.isMatched)(el, compiled)) {
        Object.assign(attrs, attributes); // console.log(JSON.stringify(attrs.transitions));

        if (attrs.transitions)
          /* istanbul ignore next */
          {
            transitions.push.apply(transitions, (0, _toConsumableArray2.default)(attrs.transitions));
            attrs.transitions.forEach(function (t) {
              Object.keys(t.attrs).forEach(function (k) {
                // if(k in attrs) delete attrs[k];
                el.attributes.__getStyleTag = true;

                if (el.attributes[k]) {
                  attrs[k] = el.attributes[k];
                }

                el.attributes.__getStyleTag = false; // console.log(el.attributes.style[k]);
              });
            });
            delete attrs.transitions;
          }

        selectors.push(selector);
      }
    }); // if(selectors.length <= 0) return;

    var matchedSelectors = selectors.join();

    if (el[_matchedSelectors] !== matchedSelectors) {
      // console.log(transitions);

      /* istanbul ignore if */
      if (attrs.animation) {
        var animation = attrs.animation;
        var delay = animation.animationDelay,
            direction = animation.animationDirection,
            duration = animation.animationDuration,
            fill = animation.animationFillMode,
            iterations = animation.animationIterationCount,
            name = animation.animationName,
            playState = animation.animationPlayState,
            easing = animation.animationTimingFunction;
        var frames = keyFrames[name];

        if (frames) {
          if (el[_animation]) {
            el[_animation].cancel();
          }

          el[_animation] = el.animate(frames, {
            duration: duration,
            delay: delay,
            fill: fill,
            iterations: iterations,
            easing: easing,
            direction: direction
          });
          el.setReleaseKey(_animation);
          if (playState !== 'running') el[_animation].pause();
        } else {
          console.warn("Unknow animation: ".concat(name));
        }

        delete attrs.animation;
      }
      /* istanbul ignore if */


      if (el[_transitions]) {
        el[_transitions].forEach(function (t) {
          t.cancel(true);
          el.attributes.__styleTag = true;
          el.attr(t.__attrs);
          el.attributes.__styleTag = false;
        });

        delete el[_transitions];
      }
      /* istanbul ignore if */


      if (transitions.length > 0) {
        el[_transitions] = [];
        el.setReleaseKey(_transitions);
        Promise.all(transitions.map(function (t) {
          var attrs = t.attrs,
              delay = t.delay,
              duration = t.duration,
              easing = t.easing;
          var transition = el.transition({
            duration: duration,
            delay: delay
          }, easing, true);
          transition.__attrs = attrs;

          el[_transitions].push(transition);

          return transition.attr(Object.assign({}, attrs));
        })).then(function () {
          el.dispatchEvent('transitionend', {}, true, true);
        });
      }

      el.dispatchEvent('stylechange', {
        oldSelectors: el[_matchedSelectors],
        newSelectors: matchedSelectors
      }, true, true);
      el[_matchedSelectors] = matchedSelectors;
      el.attributes.clearStyle();
      el.attributes.__styleTag = true;
      el.attr(attrs);
      el.attributes.__styleTag = false; // if(el.forceUpdate) el.forceUpdate();
    }

    return attrs;
  },

  get relatedAttributes() {
    return _utils.relatedAttributes;
  },

  get cssRules() {
    return cssRules;
  }

};
exports.default = _default;
}, function(modId) { var map = {"../dom/selector":1584500597692,"../../utils":1584500597660}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1584500597659);
})()
//# sourceMappingURL=index.js.map