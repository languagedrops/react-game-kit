function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/* eslint-disable no-console */
var AudioPlayer = /*#__PURE__*/function () {
  function AudioPlayer(url, callback) {
    _classCallCheck(this, AudioPlayer);
    this.url = url || null;
    this.callback = callback || function () {};
    this.buffer = null;
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    this.context = window.context || new AudioContext();
    this.loadBuffer();
  }
  return _createClass(AudioPlayer, [{
    key: "play",
    value: function play(options) {
      var volume = options && options.volume;
      var offset = options && options.offset;
      var loop = options && options.loop;
      var source = this.context.createBufferSource();
      var gainNode = this.context.createGain();
      gainNode.gain.value = volume || 0.5;
      gainNode.connect(this.context.destination);
      source.connect(gainNode);
      source.buffer = this.buffer;
      source.start(offset ? this.context.currentTime + offset : 0);
      source.loop = loop || false;
      return source.stop.bind(source);
    }
  }, {
    key: "loadBuffer",
    value: function loadBuffer() {
      var _this = this;
      var request = new XMLHttpRequest();
      request.open('GET', this.url, true);
      request.responseType = 'arraybuffer';
      request.onload = function () {
        _this.context.decodeAudioData(request.response, function (buffer) {
          if (!buffer) {
            console.error("error decoding file data: ".concat(_this.url));
            return;
          }
          _this.buffer = buffer;
          _this.callback();
        }, function (error) {
          console.error('decodeAudioData error', error);
        });
      };
      request.onerror = function onError() {
        console.error('BufferLoader: XHR error');
      };
      request.send();
    }
  }]);
}();
export { AudioPlayer as default };