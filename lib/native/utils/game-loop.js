function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var GameLoop = /*#__PURE__*/function () {
  function GameLoop() {
    _classCallCheck(this, GameLoop);
    this.subscribers = [];
    this.loopID = null;
    this.loop = this.loop.bind(this);
  }
  return _createClass(GameLoop, [{
    key: "start",
    value: function start() {
      if (!this.loopID) {
        this.loop();
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      if (!this.loopID) {
        window.cancelAnimationFrame(this.loopID);
        this.loopID = null;
      }
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      return this.subscribers.push(callback);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(id) {
      delete this.subscribers[id - 1];
    }
  }, {
    key: "loop",
    value: function loop() {
      this.subscribers.forEach(function (callback) {
        callback.call();
      });
      this.loopID = window.requestAnimationFrame(this.loop);
    }
  }]);
}();
export { GameLoop as default };