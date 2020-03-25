module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { __MODS__[modId].m.exports.__proto__ = m.exports.__proto__; Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; var desp = Object.getOwnPropertyDescriptor(m.exports, k); if(desp && desp.configurable) Object.defineProperty(m.exports, k, { set: function(val) { __MODS__[modId].m.exports[k] = val; }, get: function() { return __MODS__[modId].m.exports[k]; } }); }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1584500598093, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _node = require('./node');

Object.defineProperty(exports, 'Node', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_node).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
}, function(modId) {var map = {"./node":1584500598094}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500598094, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _compose = require('./compose');

var _compose2 = _interopRequireDefault(_compose);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var id = 1;

var Node = function () {
  function Node(config) {
    (0, _classCallCheck3.default)(this, Node);

    this.config = new _config2.default(config, this);
    this.parent = null;
    this.children = [];
    this.id = id++;
  }

  (0, _createClass3.default)(Node, [{
    key: 'appendChild',
    value: function appendChild(node) {
      if (!(node instanceof Node)) {
        throw new Error('appended Child must be instance of Node');
      }
      node.parent = this;
      this.children.push(node);
      return this;
    }
  }, {
    key: 'calculateLayout',
    value: function calculateLayout(width, height, direction) {
      if (width) this.width = width;
      if (height) this.height = height;
      if (direction) this.flexDirection = direction;
      var instance = new _compose2.default(this);
      instance.compose();
    }
  }, {
    key: 'getComputedLayout',
    value: function getComputedLayout() {
      var _this = this;

      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var width = this.computedWidth;
      if (width === undefined) {
        width = this.width;
      }
      var height = this.computedHeight;
      if (height === undefined) {
        height = this.height;
      }
      var layout = { left: this.left || 0, top: this.top || 0, width: width, height: height };
      props.forEach(function (item) {
        layout[item] = _this[item];
      });
      return layout;
    }
  }, {
    key: 'getAllComputedLayout',
    value: function getAllComputedLayout(props) {
      var layout = this.getComputedLayout();
      layout.children = this.children.sort(function (a, b) {
        return a.id > b.id ? 1 : -1;
      }).map(function (item) {
        return item.getComputedLayout(props);
      });
      return layout;
    }
  }], [{
    key: 'create',
    value: function create(config) {
      return new Node(config);
    }
  }]);
  return Node;
}();

_util.flexProperties.forEach(function (property) {
  (0, _defineProperty2.default)(Node.prototype, property, {
    get: function get() {
      return this.config[property];
    },
    set: function set(value) {
      this.config[property] = value;
    }
  });
});

exports.default = Node;
}, function(modId) { var map = {"./config":1584500598095,"./compose":1584500598097,"./util":1584500598096}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500598095, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Config = function () {
  function Config() {
    var _this = this;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var node = arguments[1];
    (0, _classCallCheck3.default)(this, Config);

    this.config = {};
    this.node = node;
    (0, _keys2.default)(config).forEach(function (item) {
      if (!_util.flexProperties.includes(item)) {
        throw new Error('config ' + item + ' is not valid');
      }
      _this[item] = config[item];
    });
  }

  (0, _createClass3.default)(Config, [{
    key: 'parse',
    value: function parse() {
      this.parseBorder();
      this.parsePadding();
      this.parseMargin();
      this.parseFlex();
      this.parseFlexFlow();
      this.parseFlexProps();
      this.parseSize();
      this.parseComputedWidth();
      this.parseComputedHeight();
      this.parseLayoutWidth();
      this.parseLayoutHeight();
    }
  }, {
    key: 'parseNumberValue',
    value: function parseNumberValue(value, parentValue) {
      if (value === 'auto' || typeof value === 'number') return value;
      if (!value) return 0;
      var percentValue = (0, _util.parsePercentValue)(value);
      if (typeof percentValue === 'number') {
        if (typeof parentValue === 'string') {
          parentValue = this.node.parent[parentValue];
        }
        value = percentValue * parentValue;
      } else if (/^[\d.-]+$/.test(value)) {
        value = parseFloat(value, 10);
      } else {
        throw new Error(value + ' is not a number');
      }
      return value;
    }
  }, {
    key: 'parseBorder',
    value: function parseBorder() {
      var _this2 = this;

      var border = this.border || [0, 0, 0, 0];
      if (border) {
        border = (0, _util.parseCombineValue)(border).map(function (item) {
          return _this2.parseNumberValue(item);
        });
      }
      var borderList = ['borderTop', 'borderRight', 'borderBottom', 'borderLeft'];
      this.border = borderList.map(function (item, index) {
        _this2[item] = _this2.parseNumberValue(_this2[item]) || border[index];
        if (_this2[item] < 0 || _this2[item] === 'auto') {
          throw new Error(item + ':' + _this2[item] + ' is not valid');
        }
        return _this2[item];
      });
    }
  }, {
    key: 'parsePadding',
    value: function parsePadding() {
      var _this3 = this;

      var padding = this.padding || [0, 0, 0, 0];
      if (padding) {
        padding = (0, _util.parseCombineValue)(padding).map(function (item) {
          return _this3.parseNumberValue(item, 'width');
        });
      }
      var paddingList = ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'];
      this.padding = paddingList.map(function (item, index) {
        _this3[item] = _this3.parseNumberValue(_this3[item], 'width') || padding[index];
        if (_this3[item] < 0 || _this3[item] === 'auto') {
          throw new Error(item + ':' + _this3[item] + ' is not valid');
        }
        return _this3[item];
      });
    }
  }, {
    key: 'parseMargin',
    value: function parseMargin() {
      var _this4 = this;

      var margin = this.margin || [0, 0, 0, 0];
      if (margin) {
        margin = (0, _util.parseCombineValue)(margin).map(function (item) {
          return _this4.parseNumberValue(item, 'width');
        });
      }
      var marginList = ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'];
      this.margin = marginList.map(function (item, index) {
        _this4[item] = _this4.parseNumberValue(_this4[item], 'width') || margin[index];
        return _this4[item];
      });
    }
  }, {
    key: 'parseFlex',
    value: function parseFlex() {
      var flex = this.flex;
      if (flex) {
        if (typeof flex === 'number') {
          this.flexGrow = this.flexGrow || flex;
        } else {
          var _flex$split = flex.split(/\s+/),
              _flex$split2 = (0, _slicedToArray3.default)(_flex$split, 3),
              flexFlow = _flex$split2[0],
              flexShrink = _flex$split2[1],
              _flexBasis = _flex$split2[2];

          if (!this.flexFlow) {
            this.flexFlow = flexFlow;
          }
          if (!this.flexShrink) {
            this.flexShrink = flexShrink;
          }
          if (!this.flexBasis) {
            this.flexBasis = _flexBasis;
          }
        }
      }
      this.flexShrink = parseFloat(this.flexShrink) || 1;
      this.flexGrow = parseFloat(this.flexGrow) || 0;
      var flexBasis = this.flexBasis;
      if (flexBasis) {
        var flexDirection = this.node.parent.flexDirection;
        var isRow = flexDirection === 'row' || flexDirection === 'row-reverse';
        flexBasis = this.parseNumberValue(flexBasis, isRow ? 'width' : 'height');
        this.flexBasis = flexBasis;
      } else if (this.flexBasis === '') {
        this.flexBasis = undefined;
      }
    }
  }, {
    key: 'parseSize',
    value: function parseSize() {
      var _this5 = this;

      var widths = ['width', 'minWidth', 'maxWidth'];
      widths.forEach(function (item) {
        _this5[item] = _this5.parseNumberValue(_this5[item], 'width') || 0;
      });
      if (this.width && !this.offsetWidth) {
        this.offsetWidth = this.width;
      }
      var heights = ['height', 'minHeight', 'maxHeight'];
      heights.forEach(function (item) {
        _this5[item] = _this5.parseNumberValue(_this5[item], 'height') || 0;
      });
      if (this.height && !this.offsetHeight) {
        this.offsetHeight = this.height;
      }
    }
  }, {
    key: 'parseFlexFlow',
    value: function parseFlexFlow() {
      var _this6 = this;

      var flexFlow = this.flexFlow;
      if (flexFlow) {
        flexFlow.split(/\s+/).forEach(function (item) {
          if (_util.flexDirectionValues.includes(item)) {
            _this6.flexDirection = item;
          } else if (_util.flexWrapValues.includes(item)) {
            _this6.flexWrap = item;
          } else {
            throw new Error('FlexFlow: ' + flexFlow + ' is not valid');
          }
        });
      }
    }
  }, {
    key: 'parseFlexProps',
    value: function parseFlexProps() {
      var _this7 = this;

      var props = {
        flexDirection: _util.flexDirectionValues,
        flexWrap: _util.flexWrapValues,
        justifyContent: _util.justifyContentValues,
        alignItems: _util.alignItemsValues,
        alignSelf: _util.alignSelfValues,
        alignContent: _util.alignContentValues
      };
      (0, _keys2.default)(props).forEach(function (item) {
        if (_this7[item]) {
          var allowValues = props[item];
          if (allowValues.indexOf(_this7[item]) === -1) {
            throw new Error(item + ' value:' + _this7[item] + ' is not valid');
          }
        } else {
          _this7[item] = props[item][0];
        }
      });
    }
  }, {
    key: 'getFlexBasis',
    value: function getFlexBasis() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'width';

      var flexDirection = this.node.parent.flexDirection;
      var flexBasis = this.flexBasis;
      if (flexBasis !== undefined && flexBasis !== 'auto') {
        var isRow = flexDirection === 'row' || flexDirection === 'row-reverse';
        if (type === 'width' && isRow || type === 'height' && !isRow) {
          return this.parseNumberValue(flexBasis, isRow ? 'width' : 'height');
        }
      }
    }
  }, {
    key: 'parseComputedWidth',
    value: function parseComputedWidth() {
      var width = this.getFlexBasis('width');
      if (width === undefined) {
        width = this.offsetWidth || 0;
      }
      var minWidth = this.minWidth;
      var maxWidth = this.maxWidth;
      if (maxWidth && minWidth && maxWidth < minWidth) {
        maxWidth = minWidth;
      }
      if (minWidth && width < minWidth) {
        width = minWidth;
      }
      if (maxWidth && width > maxWidth) {
        width = maxWidth;
      }
      this.config.computedWidth = width;
    }
  }, {
    key: 'parseLayoutWidth',
    value: function parseLayoutWidth() {
      var _this8 = this;

      var width = this.computedWidth;

      var marginLeft = (0, _util.parseMarginAuto)(this.marginLeft);
      var marginRight = (0, _util.parseMarginAuto)(this.marginRight);
      width += marginLeft + marginRight;
      if (this.boxSizing !== 'border-box') {
        var props = ['borderLeft', 'borderRight', 'paddingLeft', 'paddingRight'];
        props.forEach(function (item) {
          width += _this8[item] || 0;
        });
      }
      this.layoutWidth = width;
    }
  }, {
    key: 'parseComputedHeight',
    value: function parseComputedHeight() {
      var height = this.getFlexBasis('height');
      if (height === undefined) {
        height = this.offsetHeight || 0;
      }
      var minHeight = this.minHeight;
      var maxHeight = this.maxHeight;
      if (maxHeight && minHeight && maxHeight < minHeight) {
        maxHeight = minHeight;
      }
      if (minHeight && height < minHeight) {
        height = minHeight;
      }
      if (maxHeight && height > maxHeight) {
        height = maxHeight;
      }
      this.config.computedHeight = height;
    }
  }, {
    key: 'parseLayoutHeight',
    value: function parseLayoutHeight() {
      var _this9 = this;

      var height = this.computedHeight;

      var marginTop = (0, _util.parseMarginAuto)(this.marginTop);
      var marginBottom = (0, _util.parseMarginAuto)(this.marginBottom);
      height += marginTop + marginBottom;
      if (this.boxSizing !== 'border-box') {
        var props = ['borderTop', 'borderBottom', 'paddingTop', 'paddingBottom'];
        props.forEach(function (item) {
          height += _this9[item] || 0;
        });
      }
      this.layoutHeight = height;
    }
  }, {
    key: 'computedWidth',
    get: function get() {
      return this.config.computedWidth;
    },
    set: function set(value) {
      this.config.computedWidth = value;
      this.parseLayoutWidth();
    }
  }, {
    key: 'computedHeight',
    get: function get() {
      return this.config.computedHeight;
    },
    set: function set(value) {
      this.config.computedHeight = value;
      this.parseLayoutHeight();
    }
  }]);
  return Config;
}();

exports.default = Config;
}, function(modId) { var map = {"./util":1584500598096}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500598096, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseCombineValue = parseCombineValue;
exports.parsePercentValue = parsePercentValue;
exports.parseSpaceBetween = parseSpaceBetween;
exports.getProp = getProp;
exports.exchangeFlexProp = exchangeFlexProp;
exports.parseMarginAuto = parseMarginAuto;
var flexProperties = exports.flexProperties = ['flex', 'flexDirection', 'flexWrap', 'flexFlow', 'justifyContent', 'alignContent', 'alignItems', 'alignSelf', 'flexShrink', 'flexBasis', 'flexGrow', 'maxHeight', 'maxWidth', 'minHeight', 'minWidth', 'border', 'borderTop', 'borderRight', 'borderBottom', 'borderLeft', 'height', 'width', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'boxSizing', 'layoutWidth', 'layoutHeight', 'offsetWidth', 'offsetHeight', 'computedWidth', 'computedHeight', 'order'];

var flexDirectionValues = exports.flexDirectionValues = ['row', 'row-reverse', 'column', 'column-reverse'];

var flexWrapValues = exports.flexWrapValues = ['nowrap', 'wrap', 'wrap-reverse'];

var justifyContentValues = exports.justifyContentValues = ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];

var alignItemsValues = exports.alignItemsValues = ['stretch', 'flex-start', 'flex-end', 'center', 'baseline'];

var alignSelfValues = exports.alignSelfValues = ['auto', 'stretch', 'flex-start', 'flex-end', 'center', 'baseline'];

var alignContentValues = exports.alignContentValues = ['stretch', 'flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'];

function parseCombineValue(value) {
  if (!Array.isArray(value)) {
    value = [value, value, value, value];
  } else if (value.length === 1) {
    value = [value[0], value[0], value[0], value[0]];
  } else if (value.length === 2) {
    value = [value[0], value[1], value[0], value[1]];
  } else if (value.length === 3) {
    value[3] = value[1];
  }
  return value;
}

/**
 * parse percent value
 * @param {String} value percent value, like `10%`
 */
function parsePercentValue(value) {
  if (!/%$/.test(value)) return false;
  return 0.01 * parseFloat(value, 10);
}

/**
 * parse space between items
 * @param {Number} space space size
 * @param {String} type flex-start/flex-end/...
 * @param {Number} num array size
 */
function parseSpaceBetween(space, type, num) {
  var marginSize = [];
  var fillFull = function fillFull() {
    var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    for (var i = marginSize.length; i < num + 1; i++) {
      marginSize[i] = size;
    }
  };
  if (space < 0) {
    if (type === 'space-between' || type === 'stretch') {
      type = 'flex-start';
    } else if (type === 'space-around' || type === 'space-evenly') {
      type = 'center';
    }
  }
  if (type === 'flex-end') {
    marginSize[0] = space;
    fillFull();
  } else if (type === 'center') {
    var itemSize = space / 2;
    marginSize[0] = itemSize;
    fillFull();
    marginSize[num] = itemSize;
  } else if (type === 'space-between') {
    marginSize[0] = 0;
    if (num === 1) {
      fillFull(space);
    } else {
      fillFull(space / (num - 1));
      marginSize[num] = 0;
    }
  } else if (type === 'space-between-reverse') {
    if (num === 1) {
      marginSize[0] = space;
      fillFull(0);
    } else {
      marginSize[0] = 0;
      fillFull(space / (num - 1));
      marginSize[num] = 0;
    }
  } else if (type === 'space-around') {
    var _itemSize = space / num;
    marginSize[0] = _itemSize / 2;
    fillFull(_itemSize);
    marginSize[num] = _itemSize / 2;
  } else if (type === 'space-evenly') {
    var _itemSize2 = space / (num + 1);
    fillFull(_itemSize2);
  } else if (type === 'stretch') {
    var _itemSize3 = space / num;
    marginSize[0] = 0;
    fillFull(_itemSize3);
  } else {
    // flex-start
    fillFull();
  }
  return marginSize;
}

function getProp(flexDirection) {
  if (flexDirection === 'column' || flexDirection === 'column-reverse') {
    return {
      mainLayoutSize: 'layoutHeight',
      crossLayoutSize: 'layoutWidth',
      mainSize: 'height',
      mainComputedSize: 'computedHeight',
      crossSize: 'width',
      crossComputedSize: 'computedWidth',
      mainPos: 'top',
      mainMaxSize: 'maxHeight',
      mainMinSize: 'minHeight',
      crossPos: 'left',
      crossMaxSize: 'maxWidth',
      mainMarginStart: 'marginTop',
      mainMarginEnd: 'marginBottom',
      crossMarginStart: 'marginLeft',
      crossMarginEnd: 'marginRight'
    };
  }
  return {
    mainLayoutSize: 'layoutWidth',
    crossLayoutSize: 'layoutHeight',
    mainSize: 'width',
    mainComputedSize: 'computedWidth',
    crossSize: 'height',
    crossComputedSize: 'computedHeight',
    mainPos: 'left',
    mainMaxSize: 'maxWidth',
    mainMinSize: 'minWidth',
    crossMaxSize: 'maxHeight',
    crossPos: 'top',
    mainMarginStart: 'marginLeft',
    mainMarginEnd: 'marginRight',
    crossMarginStart: 'marginTop',
    crossMarginEnd: 'marginBottom'
  };
}

function exchangeFlexProp(prop) {
  if (prop === 'flex-start') return 'flex-end';
  if (prop === 'flex-end') return 'flex-start';
  if (prop === 'space-between') return 'space-between-reverse';
  return prop;
}

function parseMarginAuto(value) {
  var autoValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (value === 'auto') return autoValue;
  return value || 0;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500598097, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _flexLine = require('./flexLine');

var _flexLine2 = _interopRequireDefault(_flexLine);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Compose = function () {
  function Compose(container) {
    var _this = this;

    (0, _classCallCheck3.default)(this, Compose);

    this.container = container;
    var props = (0, _util.getProp)(container.flexDirection);
    (0, _keys2.default)(props).forEach(function (prop) {
      _this[prop] = props[prop];
    });
    container.children.forEach(function (item) {
      item.config.parse();
    });
    container.children = this.parseOrder(container.children);
    this.flexLines = this.parseFlexLines(container.children);
  }

  (0, _createClass3.default)(Compose, [{
    key: 'parseOrder',
    value: function parseOrder(items) {
      return items.sort(function (a, b) {
        var ar = a.order | 0;
        var br = b.order | 0;
        if (a.order && b.order) return ar > br ? 1 : -1;
        if (a.order) return ar > 0 ? 1 : -1;
        if (b.order) return br > 0 ? -1 : 1;
        return a.id > b.id ? 1 : -1;
      });
    }

    /**
     * parse flex lines by flexWrap
     * @param {Array} items flex items
     */

  }, {
    key: 'parseFlexLines',
    value: function parseFlexLines(items) {
      var _this2 = this;

      var wrap = this.container.flexWrap;
      var flexDirection = this.container.flexDirection;
      var containerPropValue = this.container[this.mainSize];
      var lines = [];
      if (wrap === 'nowrap' || !containerPropValue) {
        lines = [items];
      } else {
        var line = [];
        var propValue = 0;
        items.forEach(function (item) {
          var value = item[_this2.mainLayoutSize];
          if (propValue + value > containerPropValue && line.length) {
            lines.push(line);
            propValue = 0;
            line = [];
          }
          propValue += value;
          line.push(item);
        });
        if (line.length) {
          lines.push(line);
          line = [];
        }
        if (wrap === 'wrap-reverse') {
          lines = lines.reverse();
        }
      }

      if (flexDirection === 'row-reverse' || flexDirection === 'column-reverse') {
        lines = lines.map(function (line) {
          return line.reverse();
        });
      }
      lines = lines.map(function (line) {
        return new _flexLine2.default(line, _this2.container);
      });
      return lines;
    }

    /**
     * parse align-content on multiline flex lines
     */

  }, {
    key: 'parseAlignContent',
    value: function parseAlignContent() {
      var alignContent = this.container.alignContent;
      var crossAxisSize = this.container[this.crossSize];
      var space = 0;
      var lineLength = this.flexLines.length;
      if (crossAxisSize) {
        var linesCrossAxisSize = 0;
        this.flexLines.forEach(function (line) {
          linesCrossAxisSize += line.crossAxisSize;
        });
        // margin between lines
        space = crossAxisSize - linesCrossAxisSize;
      }
      var linesMarginSize = [];
      if (lineLength === 1) {
        this.container.alignContent = 'stretch';
        linesMarginSize = [0, space];
      } else {
        if (this.container.flexWrap === 'wrap-reverse') {
          alignContent = (0, _util.exchangeFlexProp)(alignContent);
        }
        linesMarginSize = (0, _util.parseSpaceBetween)(space, alignContent, lineLength);
      }
      var crossPosition = 0;
      this.flexLines.forEach(function (line, index) {
        crossPosition += linesMarginSize[index] || 0;
        line.crossPosition = crossPosition;
        line.crossSpace = linesMarginSize[index + 1] || 0;
        crossPosition += line.crossAxisSize;
      });
    }
  }, {
    key: 'parseAlignSelf',
    value: function parseAlignSelf() {
      this.flexLines.forEach(function (line) {
        line.parseAlignSelf(line.crossAxisSize);
      });
    }
  }, {
    key: 'computeContainerSize',
    value: function computeContainerSize() {
      var line = this.flexLines[0];
      if (!this.container[this.crossSize]) {
        this.container[this.crossSize] = line.crossAxisSize;
      }
      if (!this.container[this.mainSize]) {
        this.container[this.mainSize] = line.mainAxisSize;
      }
    }
  }, {
    key: 'parseMainAxis',
    value: function parseMainAxis() {
      this.flexLines.forEach(function (line) {
        line.parseMainAxis();
      });
    }
  }, {
    key: 'compose',
    value: function compose() {
      this.parseAlignContent();
      this.parseAlignSelf();
      this.parseMainAxis();
      this.computeContainerSize();
    }
  }]);
  return Compose;
}();

exports.default = Compose;
}, function(modId) { var map = {"./flexLine":1584500598098,"./util":1584500598096}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1584500598098, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CROSS_AXIS_SIZE = (0, _symbol2.default)('crossAxisSize');

var FlexLine = function () {
  function FlexLine(items, container) {
    var _this = this;

    (0, _classCallCheck3.default)(this, FlexLine);

    this.items = items;
    this.container = container;
    this.flexDirection = container.flexDirection;
    this.crossPosition = 0;
    this.crossSpace = 0;
    var props = (0, _util.getProp)(this.flexDirection);
    (0, _keys2.default)(props).forEach(function (prop) {
      _this[prop] = props[prop];
    });
  }

  /**
   * get main axis size base on flex direction
   */


  (0, _createClass3.default)(FlexLine, [{
    key: 'parseAutoCrossMargin',
    value: function parseAutoCrossMargin(item, crossSize) {
      var startAuto = item[this.crossMarginStart] === 'auto';
      var endAuto = item[this.crossMarginEnd] === 'auto';
      if (startAuto || endAuto) {
        if (this.container.alignContent === 'stretch') {
          crossSize += this.crossSpace;
        }
        var layoutSize = item[this.crossLayoutSize];
        var size = 0;
        if (startAuto && endAuto) {
          size = (crossSize - layoutSize) / 2;
        } else if (startAuto) {
          size = crossSize - layoutSize;
        } else {
          size = item[this.crossMarginStart];
        }
        item[this.crossPos] = this.crossPosition + size;
        return true;
      }
      return false;
    }
  }, {
    key: 'parseItemAlignSelf',
    value: function parseItemAlignSelf(item, crossSize) {
      // has auto value in margin on cross axis
      if (this.parseAutoCrossMargin(item, crossSize)) return;

      var alignSelf = item.alignSelf;
      if (alignSelf === 'auto') {
        alignSelf = item.parent.alignItems;
      }
      var flexWrap = this.container.flexWrap;
      if (flexWrap === 'wrap-reverse') {
        alignSelf = (0, _util.exchangeFlexProp)(alignSelf);
      }
      var layoutSize = item[this.crossLayoutSize];
      var itemCrossSize = item[this.crossSize];
      var crossSpace = this.crossSpace;
      if (this.container.alignContent !== 'stretch') {
        crossSpace = 0;
      }
      var crossPosition = 0;
      switch (alignSelf) {
        case 'flex-end':
          crossPosition = crossSpace + crossSize - layoutSize;
          break;
        case 'center':
          crossPosition = (crossSpace + crossSize - layoutSize) / 2;
          break;
        case 'stretch':
          // stretch item cross size
          if (!itemCrossSize) {
            var maxSize = item[this.crossMaxSize] || 0;
            var caculateSize = this.crossAxisSize - item[this.crossLayoutSize] + item[this.crossComputedSize];
            if (this.container.alignContent === 'stretch') {
              caculateSize += this.crossSpace;
            }
            if (maxSize) {
              item[this.crossComputedSize] = Math.min(caculateSize, maxSize);
            } else {
              item[this.crossComputedSize] = caculateSize;
            }
          } else if (flexWrap === 'wrap-reverse') {
            crossPosition = crossSpace + crossSize - layoutSize;
          }
          break;
        case 'baseline':
          throw new Error('align-self:baseline is not support');
        default:
          // default is flex-start
          break;
      }
      var pos = this.crossPosition + crossPosition;
      item[this.crossPos] = pos + (0, _util.parseMarginAuto)(item[this.crossMarginStart]);
    }
  }, {
    key: 'parseAlignSelf',
    value: function parseAlignSelf() {
      var _this2 = this;

      var crossSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      this.items.forEach(function (item) {
        _this2.parseItemAlignSelf(item, crossSize);
      });
    }
  }, {
    key: 'hasMarginAutoInMainAxis',
    value: function hasMarginAutoInMainAxis() {
      var _this3 = this;

      return this.items.some(function (item) {
        return item[_this3.mainMarginStart] === 'auto' || item[_this3.mainMarginEnd] === 'auto';
      });
    }
  }, {
    key: 'hasFlexGrow',
    value: function hasFlexGrow() {
      return this.items.some(function (item) {
        return item.flexGrow;
      });
    }
  }, {
    key: 'parseByFlexGrow',
    value: function parseByFlexGrow(space) {
      var _this4 = this;

      var grow = 0;
      var max = 0;
      var items = [];
      this.items.forEach(function (item) {
        grow += item.flexGrow || 0;
        items.push({ max: item[_this4.mainMaxSize], grow: item.flexGrow });
        if (item[_this4.mainMaxSize]) max++;
      });

      var _loop = function _loop() {
        var itemSpace = space / Math.max(grow, 1);
        if (!max) {
          items.forEach(function (item, index) {
            if (item.grow) {
              var increSpace = item.grow * itemSpace;
              _this4.items[index][_this4.mainComputedSize] += increSpace;
              space -= increSpace;
            }
          });
          return 'break';
        }
        var flag = false;
        items.forEach(function (item, index) {
          if (item.max && item.grow) {
            var leaveSpace = item.max - _this4.items[index][_this4.mainComputedSize];
            if (itemSpace * item.grow > leaveSpace) {
              _this4.items[index][_this4.mainComputedSize] = item.max;
              space -= leaveSpace;
              grow -= item.grow;
              delete item.max;
              delete item.grow;
              flag = true;
            }
          }
        });
        if (!grow) return 'break';
        if (!flag) {
          max = 0;
        }
      };

      while (true) {
        var _ret = _loop();

        if (_ret === 'break') break;
      }
      return space;
    }
  }, {
    key: 'parseByMarginAuto',
    value: function parseByMarginAuto(space) {
      var _this5 = this;

      var marginAutoNum = 0;
      this.items.forEach(function (item) {
        if (item[_this5.mainMarginStart] === 'auto') {
          marginAutoNum++;
        }
        if (item[_this5.mainMarginEnd] === 'auto') {
          marginAutoNum++;
        }
      });
      var itemSpace = space / marginAutoNum;
      var pos = 0;
      this.items.forEach(function (item) {
        pos += (0, _util.parseMarginAuto)(item[_this5.mainMarginStart], itemSpace);
        item[_this5.mainPos] = pos;
        pos += item[_this5.mainLayoutSize] - (0, _util.parseMarginAuto)(item[_this5.mainMarginStart]);
        pos += (0, _util.parseMarginAuto)(item[_this5.mainMarginEnd], itemSpace) - (0, _util.parseMarginAuto)(item[_this5.mainMarginEnd]);
      });
    }
  }, {
    key: 'parseJustifyContent',
    value: function parseJustifyContent() {
      var justifyContent = this.container.justifyContent;
      var flexDirection = this.container.flexDirection;
      if (flexDirection === 'row-reverse' || flexDirection === 'column-reverse') {
        justifyContent = (0, _util.exchangeFlexProp)(justifyContent);
      }
      return justifyContent;
    }
  }, {
    key: 'parseByJustifyContentPositive',
    value: function parseByJustifyContentPositive(space) {
      return this.parseByJustifyContentSpace(space);
    }
  }, {
    key: 'parseByJustifyContentSpace',
    value: function parseByJustifyContentSpace(space) {
      var _this6 = this;

      var justifyContent = this.parseJustifyContent();
      var marginSizes = (0, _util.parseSpaceBetween)(space, justifyContent, this.items.length);
      var pos = 0;
      this.items.forEach(function (item, index) {
        pos += marginSizes[index] || 0;
        item[_this6.mainPos] = pos + (0, _util.parseMarginAuto)(item[_this6.mainMarginStart]);
        pos += item[_this6.mainLayoutSize];
      });
    }
  }, {
    key: 'parseByJustifyContentNegative',
    value: function parseByJustifyContentNegative(space) {
      var _this7 = this;

      var shrink = 0;
      var min = 0;
      var items = [];
      this.items.forEach(function (item) {
        var shrinkItem = item.flexShrink * item[_this7.mainComputedSize];
        shrink += shrinkItem;
        items.push({ min: item[_this7.mainMinSize], shrink: shrinkItem });
        if (item[_this7.mainMinSize]) min++;
      });

      var _loop2 = function _loop2() {
        var itemSpace = (0 - space) / shrink;
        if (!min) {
          items.forEach(function (item, index) {
            if (item.shrink) {
              var decreSpace = item.shrink * itemSpace;
              var size = _this7.items[index][_this7.mainComputedSize] - decreSpace;
              if (size > 0) {
                _this7.items[index][_this7.mainComputedSize] -= decreSpace;
                space += decreSpace;
              } else {
                _this7.items[index][_this7.mainComputedSize] = 1;
                space += decreSpace + size;
              }
            }
          });
          return 'break';
        }
        var flag = false;
        items.forEach(function (item, index) {
          if (item.min) {
            var leaveSpace = _this7.items[index][_this7.mainComputedSize] - item.min;
            if (itemSpace * item.shrink > leaveSpace) {
              _this7.items[index][_this7.mainComputedSize] = item.min;
              space += leaveSpace;
              shrink -= item.shrink;
              delete item.min;
              delete item.shrink;
              flag = true;
            }
          }
        });
        if (!flag) {
          min = 0;
        }
      };

      while (true) {
        var _ret2 = _loop2();

        if (_ret2 === 'break') break;
      }
      this.parseByJustifyContentSpace(space);
    }
  }, {
    key: 'parseMainAxis',
    value: function parseMainAxis() {
      var _this8 = this;

      var mainSize = this.container[this.mainSize];
      // container size is not set
      if (!mainSize) {
        var pos = 0;
        this.items.forEach(function (item) {
          item[_this8.mainPos] = pos;
          pos += item[_this8.mainLayoutSize];
        });
        return;
      }
      var space = mainSize - this.mainAxisSize;
      if (space > 0) {
        if (this.hasFlexGrow()) {
          space = this.parseByFlexGrow(space);
        }
        if (this.hasMarginAutoInMainAxis()) {
          return this.parseByMarginAuto(space);
        }
        return this.parseByJustifyContentPositive(space);
      }
      return this.parseByJustifyContentNegative(space);
    }
  }, {
    key: 'mainAxisSize',
    get: function get() {
      var _this9 = this;

      var value = 0;
      this.items.forEach(function (item) {
        value += item[_this9.mainLayoutSize] || 0;
      });
      return value;
    }

    /**
     * get cross axis size based on flex direction
     */

  }, {
    key: 'crossAxisSize',
    get: function get() {
      var _this10 = this;

      if (this[CROSS_AXIS_SIZE]) return this[CROSS_AXIS_SIZE];
      var values = this.items.map(function (item) {
        return item[_this10.crossLayoutSize] || 0;
      });
      var result = Math.max.apply(Math, (0, _toConsumableArray3.default)(values));
      this[CROSS_AXIS_SIZE] = result;
      return result;
    }
  }]);
  return FlexLine;
}();

exports.default = FlexLine;
}, function(modId) { var map = {"./util":1584500598096}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1584500598093);
})()
//# sourceMappingURL=index.js.map