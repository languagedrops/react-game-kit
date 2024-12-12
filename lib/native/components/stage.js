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
// Users/anton/Documents/Develop/Projects/react-game-kit/src/native/components/stage.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions } from 'react-native';

// Create a new context for scale
import { jsx as _jsx } from "react/jsx-runtime";
var ScaleContext = /*#__PURE__*/React.createContext();
export var useScale = function useScale() {
  return React.useContext(ScaleContext);
};
var Stage = function Stage(_ref) {
  var children = _ref.children,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 576 : _ref$height,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 1024 : _ref$width,
    style = _ref.style;
  var _useState = useState([0, 0]),
    _useState2 = _slicedToArray(_useState, 2),
    dimensions = _useState2[0],
    setDimensions = _useState2[1];
  useEffect(function () {
    var _Dimensions$get = Dimensions.get('window'),
      vheight = _Dimensions$get.height,
      vwidth = _Dimensions$get.width;
    setDimensions([vheight, vwidth]);
  }, []);
  var getScale = function getScale() {
    var _dimensions = _slicedToArray(dimensions, 2),
      vheight = _dimensions[0],
      vwidth = _dimensions[1];
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
    return {
      height: targetHeight,
      width: targetWidth,
      scale: targetScale
    };
  };
  var scale = getScale();
  var getWrapperStyles = function getWrapperStyles() {
    return {
      flex: 1
    };
  };
  var getInnerStyles = function getInnerStyles() {
    var xOffset = Math.floor((dimensions[1] - scale.width) / 2);
    var yOffset = Math.floor((dimensions[0] - scale.height) / 2);
    return {
      height: Math.floor(scale.height),
      width: Math.floor(scale.width),
      position: 'absolute',
      overflow: 'hidden',
      left: xOffset,
      top: yOffset
    };
  };
  return /*#__PURE__*/_jsx(ScaleContext.Provider, {
    value: scale.scale,
    children: /*#__PURE__*/_jsx(View, {
      style: getWrapperStyles(),
      children: /*#__PURE__*/_jsx(View, {
        style: _objectSpread(_objectSpread({}, getInnerStyles()), style),
        children: children
      })
    })
  });
};
export default Stage;