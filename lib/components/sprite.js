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
var Sprite = /*#__PURE__*/function (_Component) {
  function Sprite(props) {
    var _this;
    _classCallCheck(this, Sprite);
    _this = _callSuper(this, Sprite, [props]);
    _this.loopID = null;
    _this.tickCount = 0;
    _this.finished = false;
    _this.state = {
      currentStep: 0
    };
    return _this;
  }
  _inherits(Sprite, _Component);
  return _createClass(Sprite, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onPlayStateChanged(1);
      var animate = this.animate.bind(this, this.props);
      this.loopID = this.context.loop.subscribe(animate);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;
      if (nextProps.state !== this.props.state) {
        this.finished = false;
        this.props.onPlayStateChanged(1);
        this.context.loop.unsubscribe(this.loopID);
        this.tickCount = 0;
        this.setState({
          currentStep: 0
        }, function () {
          var animate = _this2.animate.bind(_this2, nextProps);
          _this2.loopID = _this2.context.loop.subscribe(animate);
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.context.loop.unsubscribe(this.loopID);
    }
  }, {
    key: "animate",
    value: function animate(props) {
      var repeat = props.repeat,
        ticksPerFrame = props.ticksPerFrame,
        state = props.state,
        steps = props.steps;
      if (this.tickCount === ticksPerFrame && !this.finished) {
        if (steps[state] !== 0) {
          var currentStep = this.state.currentStep;
          var lastStep = steps[state];
          var nextStep = currentStep === lastStep ? 0 : currentStep + 1;
          this.setState({
            currentStep: nextStep
          });
          if (currentStep === lastStep && repeat === false) {
            this.finished = true;
            this.props.onPlayStateChanged(0);
          }
        }
        this.tickCount = 0;
      } else {
        this.tickCount++;
      }
    }
  }, {
    key: "getImageStyles",
    value: function getImageStyles() {
      var currentStep = this.state.currentStep;
      var _this$props = this.props,
        state = _this$props.state,
        tileWidth = _this$props.tileWidth,
        tileHeight = _this$props.tileHeight;
      var left = this.props.offset[0] + currentStep * tileWidth;
      var top = this.props.offset[1] + state * tileHeight;
      return {
        position: 'absolute',
        transform: "translate(-".concat(left, "px, -").concat(top, "px)")
      };
    }
  }, {
    key: "getWrapperStyles",
    value: function getWrapperStyles() {
      return {
        height: this.props.tileHeight,
        width: this.props.tileWidth,
        overflow: 'hidden',
        position: 'relative',
        transform: "scale(".concat(this.props.scale || this.context.scale, ")"),
        transformOrigin: 'top left',
        imageRendering: 'pixelated'
      };
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_jsx("div", {
        style: _objectSpread(_objectSpread({}, this.getWrapperStyles()), this.props.style),
        children: /*#__PURE__*/_jsx("img", {
          style: this.getImageStyles(),
          src: this.props.src
        })
      });
    }
  }]);
}(Component);
_defineProperty(Sprite, "propTypes", {
  offset: PropTypes.array,
  onPlayStateChanged: PropTypes.func,
  repeat: PropTypes.bool,
  scale: PropTypes.number,
  src: PropTypes.string,
  state: PropTypes.number,
  steps: PropTypes.array,
  style: PropTypes.object,
  ticksPerFrame: PropTypes.number,
  tileHeight: PropTypes.number,
  tileWidth: PropTypes.number
});
_defineProperty(Sprite, "defaultProps", {
  offset: [0, 0],
  onPlayStateChanged: function onPlayStateChanged() {},
  repeat: true,
  src: '',
  state: 0,
  steps: [],
  ticksPerFrame: 4,
  tileHeight: 64,
  tileWidth: 64
});
_defineProperty(Sprite, "contextTypes", {
  loop: PropTypes.object,
  scale: PropTypes.number
});
export { Sprite as default };