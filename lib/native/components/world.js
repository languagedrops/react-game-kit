function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useState, useEffect, useContext } from 'react';
import { View } from 'react-native';
import Matter, { Engine, Events } from 'matter-js';
import { LoopContext } from './loop';
import { jsx as _jsx } from "react/jsx-runtime";
var EngineContext = /*#__PURE__*/React.createContext();
var World = function World(_ref) {
  var children = _ref.children,
    _ref$gravity = _ref.gravity,
    gravity = _ref$gravity === void 0 ? {
      x: 0,
      y: 0,
      scale: 0.001
    } : _ref$gravity,
    _ref$onCollision = _ref.onCollision,
    onCollision = _ref$onCollision === void 0 ? function () {
      return 0;
    } : _ref$onCollision,
    _ref$onInit = _ref.onInit,
    onInit = _ref$onInit === void 0 ? function () {
      return 0;
    } : _ref$onInit,
    _ref$onUpdate = _ref.onUpdate,
    onUpdate = _ref$onUpdate === void 0 ? function () {
      return 0;
    } : _ref$onUpdate;
  var loop = useContext(LoopContext);
  var _useState = useState(function () {
      var world = Matter.World.create({
        gravity: gravity
      });
      return Engine.create({
        world: world
      });
    }),
    _useState2 = _slicedToArray(_useState, 1),
    engine = _useState2[0];
  useEffect(function () {
    var loopID = loop.subscribe(function () {
      var currTime = 0.001 * Date.now();
      Engine.update(engine, 1000 / 60, currTime);
    });
    return function () {
      return loop.unsubscribe(loopID);
    };
  }, [loop, engine]);
  useEffect(function () {
    onInit(engine);
    Events.on(engine, 'afterUpdate', onUpdate);
    Events.on(engine, 'collisionStart', onCollision);
    return function () {
      Events.off(engine, 'afterUpdate', onUpdate);
      Events.off(engine, 'collisionStart', onCollision);
    };
  }, [engine, onInit, onUpdate, onCollision]);
  useEffect(function () {
    if (gravity) {
      engine.world.gravity = gravity;
    }
  }, [gravity, engine]);
  return /*#__PURE__*/_jsx(EngineContext.Provider, {
    value: engine,
    children: /*#__PURE__*/_jsx(View, {
      style: {
        flex: 1
      },
      children: children
    })
  });
};
export { EngineContext };
export default World;