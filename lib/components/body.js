var _excluded = ["angle", "area", "args", "axes", "bounds", "children", "collisionFilter", "density", "force", "friction", "frictionAir", "frictionStatic", "id", "inertia", "inverseInertia", "inverseMass", "isSensor", "isSleeping", "isStatic", "label", "mass", "position", "restitution", "shape", "sleepThreshold", "slop", "slope", "timeScale", "torque", "vertices"];
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
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
  var angle = _ref.angle,
    area = _ref.area,
    _ref$args = _ref.args,
    args = _ref$args === void 0 ? [0, 0, 100, 100] : _ref$args,
    axes = _ref.axes,
    bounds = _ref.bounds,
    children = _ref.children,
    collisionFilter = _ref.collisionFilter,
    density = _ref.density,
    force = _ref.force,
    _ref$friction = _ref.friction,
    friction = _ref$friction === void 0 ? 1 : _ref$friction,
    frictionAir = _ref.frictionAir,
    _ref$frictionStatic = _ref.frictionStatic,
    frictionStatic = _ref$frictionStatic === void 0 ? 0 : _ref$frictionStatic,
    id = _ref.id,
    inertia = _ref.inertia,
    inverseInertia = _ref.inverseInertia,
    inverseMass = _ref.inverseMass,
    isSensor = _ref.isSensor,
    isSleeping = _ref.isSleeping,
    isStatic = _ref.isStatic,
    label = _ref.label,
    mass = _ref.mass,
    position = _ref.position,
    _ref$restitution = _ref.restitution,
    restitution = _ref$restitution === void 0 ? 0 : _ref$restitution,
    _ref$shape = _ref.shape,
    shape = _ref$shape === void 0 ? 'rectangle' : _ref$shape,
    sleepThreshold = _ref.sleepThreshold,
    slop = _ref.slop,
    slope = _ref.slope,
    timeScale = _ref.timeScale,
    torque = _ref.torque,
    vertices = _ref.vertices,
    options = _objectWithoutProperties(_ref, _excluded);
  var engine = useContext(EngineContext);
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    body = _useState2[0],
    setBody = _useState2[1];
  useEffect(function () {
    var newBody = Bodies[shape].apply(Bodies, _toConsumableArray(args).concat([options]));
    World.addBody(engine.world, newBody);
    setBody(newBody);
    return function () {
      World.remove(engine.world, newBody);
    };
  }, [args, engine, options, shape]);
  useEffect(function () {
    if (body) {
      Object.keys(options).forEach(function (option) {
        if (option in body) {
          Matter.Body.set(body, option, options[option]);
        }
      });
    }
  }, [body, options]);
  return /*#__PURE__*/_jsx(BodyContext.Provider, {
    value: body,
    children: children
  });
};
export { BodyContext };
export default Body;