function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["args", "friction", "frictionStatic", "restitution", "shape"];
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var s = Object.getOwnPropertySymbols(e); for (r = 0; r < s.length; r++) o = s[r], t.includes(o) || {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (e.includes(n)) continue; t[n] = r[n]; } return t; }
import React, { useContext, useEffect, useState } from 'react';
import Matter, { Bodies, World } from 'matter-js';
import { EngineContext } from './world';
import { jsx as _jsx } from "react/jsx-runtime";
var BodyContext = /*#__PURE__*/React.createContext();
var Body = function Body(_ref) {
  var _ref$args = _ref.args,
    args = _ref$args === void 0 ? [0, 0, 100, 100] : _ref$args,
    _ref$friction = _ref.friction,
    friction = _ref$friction === void 0 ? 1 : _ref$friction,
    _ref$frictionStatic = _ref.frictionStatic,
    frictionStatic = _ref$frictionStatic === void 0 ? 0 : _ref$frictionStatic,
    _ref$restitution = _ref.restitution,
    restitution = _ref$restitution === void 0 ? 0 : _ref$restitution,
    _ref$shape = _ref.shape,
    shape = _ref$shape === void 0 ? 'rectangle' : _ref$shape,
    options = _objectWithoutProperties(_ref, _excluded);
  var engine = useContext(EngineContext);
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    body = _useState2[0],
    setBody = _useState2[1];
  var optionsWithDefaults = React.useMemo(function () {
    return _objectSpread(_objectSpread({}, options), {}, {
      friction: friction,
      frictionStatic: frictionStatic,
      restitution: restitution
    });
  }, [options, friction, frictionStatic, restitution]);
  useEffect(function () {
    var newBody = Bodies[shape].apply(Bodies, _toConsumableArray(args).concat([optionsWithDefaults]));
    World.addBody(engine.world, newBody);
    setBody(newBody);
    return function () {
      World.remove(engine.world, newBody);
    };
  }, [args, engine, optionsWithDefaults, shape]);
  useEffect(function () {
    if (body) {
      Object.keys(optionsWithDefaults).forEach(function (option) {
        if (option in body) {
          Matter.Body.set(body, option, optionsWithDefaults[option]);
        }
      });
    }
  }, [body, optionsWithDefaults]);
  return /*#__PURE__*/_jsx(BodyContext.Provider, {
    value: body,
    children: children
  });
};
export { BodyContext };
export default Body;