function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
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
import Matter, { Engine, Events } from 'matter-js';
import { jsx as _jsx } from "react/jsx-runtime";
var World = /*#__PURE__*/function (_Component) {
  function World(props) {
    var _this;
    _classCallCheck(this, World);
    _this = _callSuper(this, World, [props]);
    _this.loopID = null;
    _this.lastTime = null;
    var world = Matter.World.create({
      gravity: props.gravity
    });
    _this.engine = Engine.create({
      world: world
    });
    _this.loop = _this.loop.bind(_this);
    return _this;
  }
  _inherits(World, _Component);
  return _createClass(World, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var gravity = nextProps.gravity;
      if (gravity !== this.props.gravity) {
        this.engine.world.gravity = gravity;
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loopID = this.context.loop.subscribe(this.loop);
      this.props.onInit(this.engine);
      Events.on(this.engine, 'afterUpdate', this.props.onUpdate);
      Events.on(this.engine, 'collisionStart', this.props.onCollision);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.context.loop.unsubscribe(this.loopID);
      Events.off(this.engine, 'afterUpdate', this.props.onUpdate);
      Events.off(this.engine, 'collisionStart', this.props.onCollision);
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        engine: this.engine
      };
    }
  }, {
    key: "render",
    value: function render() {
      var defaultStyles = {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%'
      };
      return /*#__PURE__*/_jsx("div", {
        style: defaultStyles,
        children: this.props.children
      });
    }
  }, {
    key: "loop",
    value: function loop() {
      var currTime = 0.001 * Date.now();
      Engine.update(this.engine, 1000 / 60, this.lastTime ? currTime / this.lastTime : 1);
      this.lastTime = currTime;
    }
  }]);
}(Component);
_defineProperty(World, "propTypes", {
  children: PropTypes.any,
  gravity: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
    scale: PropTypes.number
  }),
  onCollision: PropTypes.func,
  onInit: PropTypes.func,
  onUpdate: PropTypes.func
});
_defineProperty(World, "defaultProps", {
  gravity: {
    x: 0,
    y: 1,
    scale: 0.001
  },
  onCollision: function onCollision() {},
  onInit: function onInit() {},
  onUpdate: function onUpdate() {}
});
_defineProperty(World, "contextTypes", {
  scale: PropTypes.number,
  loop: PropTypes.object
});
_defineProperty(World, "childContextTypes", {
  engine: PropTypes.object
});
export { World as default };