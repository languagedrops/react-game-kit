function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
var Stage = /*#__PURE__*/function (_Component) {
  function Stage(props) {
    var _this;
    _classCallCheck(this, Stage);
    _this = _callSuper(this, Stage, [props]);
    _this.container = null;
    _this.state = {
      dimensions: [0, 0]
    };
    _this.setDimensions = _this.setDimensions.bind(_this);
    return _this;
  }
  _inherits(Stage, _Component);
  return _createClass(Stage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.setDimensions);
      this.setDimensions();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setDimensions);
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        scale: this.getScale().scale,
        loop: this.context.loop
      };
    }
  }, {
    key: "getScale",
    value: function getScale() {
      var _this$state$dimension = _slicedToArray(this.state.dimensions, 2),
        vwidth = _this$state$dimension[0],
        vheight = _this$state$dimension[1];
      var _this$props = this.props,
        height = _this$props.height,
        width = _this$props.width;
      var targetWidth;
      var targetHeight;
      var targetScale;
      if (height / width > vheight / vwidth) {
        targetHeight = vheight;
        targetWidth = targetHeight * width / height;
        targetScale = vheight / height;
      } else {
        targetWidth = vwidth;
        targetHeight = targetWidth * height / width;
        targetScale = vwidth / width;
      }
      if (!this.container) {
        return {
          height: height,
          width: width,
          scale: 1
        };
      } else {
        return {
          height: targetHeight,
          width: targetWidth,
          scale: targetScale
        };
      }
    }
  }, {
    key: "getWrapperStyles",
    value: function getWrapperStyles() {
      return {
        height: '100%',
        width: '100%',
        position: 'relative'
      };
    }
  }, {
    key: "getInnerStyles",
    value: function getInnerStyles() {
      var scale = this.getScale();
      var xOffset = Math.floor((this.state.dimensions[0] - scale.width) / 2);
      var yOffset = Math.floor((this.state.dimensions[1] - scale.height) / 2);
      return {
        height: Math.floor(scale.height),
        width: Math.floor(scale.width),
        position: 'absolute',
        overflow: 'hidden',
        transform: "translate(".concat(xOffset, "px, ").concat(yOffset, "px)")
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      return /*#__PURE__*/_jsx("div", {
        style: this.getWrapperStyles(),
        ref: function ref(c) {
          _this2.container = c;
        },
        children: /*#__PURE__*/_jsx("div", {
          style: _objectSpread(_objectSpread({}, this.getInnerStyles()), this.props.style),
          children: this.props.children
        })
      });
    }
  }, {
    key: "setDimensions",
    value: function setDimensions() {
      this.setState({
        dimensions: [this.container.offsetWidth, this.container.offsetHeight]
      });
    }
  }]);
}(Component);
_defineProperty(Stage, "propTypes", {
  children: PropTypes.any,
  height: PropTypes.number,
  style: PropTypes.object,
  width: PropTypes.number
});
_defineProperty(Stage, "defaultProps", {
  width: 1024,
  height: 576
});
_defineProperty(Stage, "contextTypes", {
  loop: PropTypes.object
});
_defineProperty(Stage, "childContextTypes", {
  loop: PropTypes.object,
  scale: PropTypes.number
});
export { Stage as default };