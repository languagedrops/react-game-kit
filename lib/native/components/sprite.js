function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState, useEffect, useContext } from 'react';
import { View, Image } from 'react-native';
import { LoopContext } from './loop';
import { ScaleContext } from './stage';
import { jsx as _jsx } from "react/jsx-runtime";
var Sprite = function Sprite(_ref) {
  var _ref$offset = _ref.offset,
    offset = _ref$offset === void 0 ? [0, 0] : _ref$offset,
    _ref$onPlayStateChang = _ref.onPlayStateChanged,
    onPlayStateChanged = _ref$onPlayStateChang === void 0 ? function () {} : _ref$onPlayStateChang,
    _ref$repeat = _ref.repeat,
    repeat = _ref$repeat === void 0 ? true : _ref$repeat,
    propsScale = _ref.scale,
    _ref$src = _ref.src,
    src = _ref$src === void 0 ? '' : _ref$src,
    _ref$state = _ref.state,
    state = _ref$state === void 0 ? 0 : _ref$state,
    _ref$steps = _ref.steps,
    steps = _ref$steps === void 0 ? [] : _ref$steps,
    _ref$style = _ref.style,
    style = _ref$style === void 0 ? {} : _ref$style,
    _ref$ticksPerFrame = _ref.ticksPerFrame,
    ticksPerFrame = _ref$ticksPerFrame === void 0 ? 4 : _ref$ticksPerFrame,
    _ref$tileHeight = _ref.tileHeight,
    tileHeight = _ref$tileHeight === void 0 ? 64 : _ref$tileHeight,
    _ref$tileWidth = _ref.tileWidth,
    tileWidth = _ref$tileWidth === void 0 ? 64 : _ref$tileWidth;
  var loop = useContext(LoopContext);
  var scale = useContext(ScaleContext);
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentStep = _useState2[0],
    setCurrentStep = _useState2[1];
  var _useState3 = useState(0),
    _useState4 = _slicedToArray(_useState3, 2),
    tickCount = _useState4[0],
    setTickCount = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    finished = _useState6[0],
    setFinished = _useState6[1];
  useEffect(function () {
    var animate = function animate() {
      if (tickCount === ticksPerFrame && !finished) {
        if (steps[state] !== 0) {
          var nextStep = currentStep === steps[state] ? 0 : currentStep + 1;
          setCurrentStep(nextStep);
          if (currentStep === steps[state] && repeat === false) {
            setFinished(true);
            onPlayStateChanged(0);
          }
        }
        setTickCount(0);
      } else {
        setTickCount(tickCount + 1);
      }
    };
    var subscription = loop.subscribe(animate);
    onPlayStateChanged(1);
    return function () {
      loop.unsubscribe(subscription);
    };
  }, [loop, state, steps, repeat, currentStep, tickCount, finished]);
  useEffect(function () {
    if (state !== 0) {
      setFinished(false);
      setTickCount(0);
      setCurrentStep(0);
    }
  }, [state]);
  var getImageStyles = function getImageStyles() {
    var left = offset[0] + currentStep * tileWidth;
    var top = offset[1] + state * tileHeight;
    return {
      position: 'absolute',
      transform: [{
        translateX: left * -1
      }, {
        translateY: top * -1
      }]
    };
  };
  var getWrapperStyles = function getWrapperStyles() {
    var appliedScale = propsScale || scale;
    return {
      height: tileHeight,
      width: tileWidth,
      overflow: 'hidden',
      position: 'relative',
      transform: [{
        scale: appliedScale
      }]
    };
  };
  return /*#__PURE__*/_jsx(View, {
    style: _objectSpread(_objectSpread({}, getWrapperStyles()), style),
    children: /*#__PURE__*/_jsx(Image, {
      style: getImageStyles(),
      source: src
    })
  });
};
export default Sprite;