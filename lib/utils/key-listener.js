function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var KeyListener = /*#__PURE__*/function () {
  function KeyListener() {
    _classCallCheck(this, KeyListener);
    _defineProperty(this, "LEFT", 37);
    _defineProperty(this, "RIGHT", 39);
    _defineProperty(this, "UP", 38);
    _defineProperty(this, "DOWN", 40);
    _defineProperty(this, "SPACE", 32);
    this.keys = {};
    this.down = this.down.bind(this);
    this.up = this.up.bind(this);
    this.isDown = this.isDown.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
  }
  return _createClass(KeyListener, [{
    key: "down",
    value: function down(event) {
      if (event.keyCode in this.keys) {
        event.preventDefault();
        this.keys[event.keyCode] = true;
      }
    }
  }, {
    key: "up",
    value: function up(event) {
      if (event.keyCode in this.keys) {
        event.preventDefault();
        this.keys[event.keyCode] = false;
      }
    }
  }, {
    key: "isDown",
    value: function isDown(keyCode) {
      return this.keys[keyCode] || false;
    }
  }, {
    key: "subscribe",
    value: function subscribe(keys) {
      var _this = this;
      window.addEventListener('keydown', this.down);
      window.addEventListener('keyup', this.up);
      keys.forEach(function (key) {
        _this.keys[key] = false;
      });
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe() {
      window.removeEventListener('keydown', this.down);
      window.removeEventListener('keyup', this.up);
      this.keys = {};
    }
  }]);
}();
export { KeyListener as default };