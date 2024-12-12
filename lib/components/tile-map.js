function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { jsx as _jsx } from "react/jsx-runtime";
var TileMap = /*#__PURE__*/function (_Component) {
  function TileMap() {
    _classCallCheck(this, TileMap);
    return _callSuper(this, TileMap, arguments);
  }
  _inherits(TileMap, _Component);
  return _createClass(TileMap, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {
      return this.context.scale !== nextContext.scale;
    }
  }, {
    key: "generateMap",
    value: function generateMap() {
      var _this = this;
      var _this$props = this.props,
        columns = _this$props.columns,
        layers = _this$props.layers,
        rows = _this$props.rows;
      var mappedLayers = [];
      layers.forEach(function (l, index) {
        var layer = [];
        for (var r = 0; r < rows; r++) {
          for (var c = 0; c < columns; c++) {
            var gridIndex = r * columns + c;
            if (l[gridIndex] !== 0) {
              layer.push(/*#__PURE__*/_jsx("div", {
                style: _this.getImageWrapperStyles(r, c),
                children: _this.props.renderTile(_this.getTileData(r, c, l[gridIndex]), _this.props.src, _this.getImageStyles(l[gridIndex]))
              }, "tile-".concat(index, "-").concat(r, "-").concat(c)));
            }
          }
        }
        mappedLayers.push(layer);
      });
      return mappedLayers;
    }
  }, {
    key: "getTileData",
    value: function getTileData(row, column, index) {
      var tileSize = this.props.tileSize;
      var size = tileSize;
      var left = column * size;
      var top = row * size;
      return {
        index: index,
        size: tileSize,
        left: left,
        top: top
      };
    }
  }, {
    key: "getImageStyles",
    value: function getImageStyles(imageIndex) {
      var scale = this.context.scale;
      var tileSize = this.props.tileSize;
      var size = Math.round(scale * tileSize);
      var left = (imageIndex - 1) * size;
      return {
        position: 'absolute',
        imageRendering: 'pixelated',
        display: 'block',
        height: '100%',
        transform: "translate(-".concat(left, "px, 0px)")
      };
    }
  }, {
    key: "getImageWrapperStyles",
    value: function getImageWrapperStyles(row, column) {
      var scale = this.context.scale;
      var tileSize = this.props.tileSize;
      var size = Math.round(scale * tileSize);
      var left = column * size;
      var top = row * size;
      return {
        height: size,
        width: size,
        overflow: 'hidden',
        position: 'absolute',
        transform: "translate(".concat(left, "px, ").concat(top, "px)")
      };
    }
  }, {
    key: "getLayerStyles",
    value: function getLayerStyles() {
      return {
        position: 'absolute',
        top: 0,
        left: 0
      };
    }
  }, {
    key: "getWrapperStyles",
    value: function getWrapperStyles() {
      return {
        position: 'absolute',
        top: 0,
        left: 0
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var layers = this.generateMap();
      return /*#__PURE__*/_jsx("div", {
        style: _objectSpread(_objectSpread({}, this.getWrapperStyles()), this.props.style),
        children: layers.map(function (layer, index) {
          return /*#__PURE__*/_jsx("div", {
            style: _this2.getLayerStyles(),
            children: layer
          }, "layer-".concat(index));
        })
      });
    }
  }]);
}(Component);
_defineProperty(TileMap, "propTypes", {
  columns: PropTypes.number,
  layers: PropTypes.array,
  renderTile: PropTypes.func,
  rows: PropTypes.number,
  scale: PropTypes.number,
  src: PropTypes.string,
  style: PropTypes.object,
  tileSize: PropTypes.number
});
_defineProperty(TileMap, "defaultProps", {
  columns: 16,
  layers: [],
  renderTile: function renderTile(tile, src, styles) {
    return /*#__PURE__*/_jsx("img", {
      style: styles,
      src: src
    });
  },
  rows: 9,
  src: '',
  tileSize: 64
});
_defineProperty(TileMap, "contextTypes", {
  scale: PropTypes.number
});
export { TileMap as default };