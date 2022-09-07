/*
	bg-sound
	
	The MIT License (MIT)

	Copyright (c) Feross Aboukhadijeh

	Permission is hereby granted, free of charge, to any person obtaining a copy of
	this software and associated documentation files (the "Software"), to deal in
	the Software without restriction, including without limitation the rights to
	use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
	the Software, and to permit persons to whom the Software is furnished to do so,
	subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
	FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
	COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
	IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
	CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/*
	Modified by Zumi in 2022 from production code
	
	- timidity.cfg changed to reflect DGGUSPAT patches
	- Sample rate follows AudioContext instead of being fixed to 48khz
 */
(function (e)
{
	if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
	else if ("function" == typeof define && define.amd) define([], e);
	else
	{
		var t;
		t = "undefined" == typeof window ? "undefined" == typeof global ? "undefined" == typeof self ? this : self : global : window, t.BgSound = e()
	}
})(function ()
{
	var n, e = Math.floor,
		t = Math.abs;
	return function ()
	{
		function s(d, e, n)
		{
			function t(o, i)
			{
				if (!e[o])
				{
					if (!d[o])
					{
						var l = "function" == typeof require && require;
						if (!i && l) return l(o, !0);
						if (r) return r(o, !0);
						var _ = new Error("Cannot find module '" + o + "'");
						throw _.code = "MODULE_NOT_FOUND", _
					}
					var a = e[o] = {
						exports:
						{}
					};
					d[o][0].call(a.exports, function (e)
					{
						var r = d[o][1][e];
						return t(r || e)
					}, a, a.exports, s, d, e, n)
				}
				return e[o].exports
			}
			for (var r = "function" == typeof require && require, o = 0; o < n.length; o++) t(n[o]);
			return t
		}
		return s
	}()(
	{
		1: [function (e, t, n)
		{
			(function (o)
			{
				(function ()
				{
					function r()
					{
						let e;
						try
						{
							e = n.storage.getItem("debug")
						}
						catch (e)
						{}
						return !e && "undefined" != typeof o && "env" in o && (e = o.env.DEBUG), e
					}
					n.formatArgs = function (e)
					{
						if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors) return;
						const n = "color: " + this.color;
						e.splice(1, 0, n, "color: inherit");
						let r = 0,
							o = 0;
						e[0].replace(/%[a-zA-Z%]/g, e =>
						{
							"%%" === e || (r++, "%c" === e && (o = r))
						}), e.splice(o, 0, n)
					}, n.save = function (e)
					{
						try
						{
							e ? n.storage.setItem("debug", e) : n.storage.removeItem("debug")
						}
						catch (e)
						{}
					}, n.load = r, n.useColors = function ()
					{
						return !!("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) || !("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
					}, n.storage = function ()
					{
						try
						{
							return localStorage
						}
						catch (e)
						{}
					}(), n.destroy = (() =>
					{
						let e = !1;
						return () =>
						{
							e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
						}
					})(), n.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], n.log = console.debug || console.log || (() =>
					{}), t.exports = e("./common")(n);
					const
					{
						formatters: a
					} = t.exports;
					a.j = function (e)
					{
						try
						{
							return JSON.stringify(e)
						}
						catch (e)
						{
							return "[UnexpectedJSONParseError]: " + e.message
						}
					}
				}).call(this)
			}).call(this, e("_process"))
		},
		{
			"./common": 2,
			_process: 6
		}],
		2: [function (e, n)
		{
			n.exports = function (n)
			{
				function r(e)
				{
					function t(...e)
					{
						if (!t.enabled) return;
						const o = t,
							a = +new Date,
							s = a - (n || a);
						o.diff = s, o.prev = n, o.curr = a, n = a, e[0] = r.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
						let i = 0;
						e[0] = e[0].replace(/%([a-zA-Z%])/g, (t, n) =>
						{
							if ("%%" === t) return "%";
							i++;
							const a = r.formatters[n];
							if ("function" == typeof a)
							{
								const n = e[i];
								t = a.call(o, n), e.splice(i, 1), i--
							}
							return t
						}), r.formatArgs.call(o, e);
						const d = o.log || r.log;
						d.apply(o, e)
					}
					let n, a, s, i = null;
					return t.namespace = e, t.useColors = r.useColors(), t.color = r.selectColor(e), t.extend = o, t.destroy = r.destroy, Object.defineProperty(t, "enabled",
					{
						enumerable: !0,
						configurable: !1,
						get: () => null === i ? (a !== r.namespaces && (a = r.namespaces, s = r.enabled(e)), s) : i,
						set: e =>
						{
							i = e
						}
					}), "function" == typeof r.init && r.init(t), t
				}

				function o(e, t)
				{
					const n = r(this.namespace + ("undefined" == typeof t ? ":" : t) + e);
					return n.log = this.log, n
				}

				function a(e)
				{
					return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
				}
				return r.debug = r, r.default = r, r.coerce = function (e)
				{
					return e instanceof Error ? e.stack || e.message : e
				}, r.disable = function ()
				{
					const e = [...r.names.map(a), ...r.skips.map(a).map(e => "-" + e)].join(",");
					return r.enable(""), e
				}, r.enable = function (e)
				{
					r.save(e), r.namespaces = e, r.names = [], r.skips = [];
					let t;
					const n = ("string" == typeof e ? e : "").split(/[\s,]+/),
						o = n.length;
					for (t = 0; t < o; t++) n[t] && (e = n[t].replace(/\*/g, ".*?"), "-" === e[0] ? r.skips.push(new RegExp("^" + e.substr(1) + "$")) : r.names.push(new RegExp("^" + e + "$")))
				}, r.enabled = function (e)
				{
					if ("*" === e[e.length - 1]) return !0;
					let t, n;
					for (t = 0, n = r.skips.length; t < n; t++)
						if (r.skips[t].test(e)) return !1;
					for (t = 0, n = r.names.length; t < n; t++)
						if (r.names[t].test(e)) return !0;
					return !1
				}, r.humanize = e("ms"), r.destroy = function ()
				{
					console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
				}, Object.keys(n).forEach(e =>
				{
					r[e] = n[e]
				}), r.names = [], r.skips = [], r.formatters = {}, r.selectColor = function (e)
				{
					let n = 0;
					for (let t = 0; t < e.length; t++) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
					return r.colors[t(n) % r.colors.length]
				}, r.enable(r.load()), r
			}
		},
		{
			ms: 5
		}],
		3: [function (e, t)
		{
			function n()
			{
				this._events && Object.prototype.hasOwnProperty.call(this, "_events") || (this._events = E(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
			}

			function r(e)
			{
				return void 0 === e._maxListeners ? n.defaultMaxListeners : e._maxListeners
			}

			function a(e, t, n)
			{
				if (t) e.call(n);
				else
					for (var r = e.length, o = f(e, r), a = 0; a < r; ++a) o[a].call(n)
			}

			function s(e, t, n, r)
			{
				if (t) e.call(n, r);
				else
					for (var o = e.length, a = f(e, o), s = 0; s < o; ++s) a[s].call(n, r)
			}

			function d(e, t, n, r, o)
			{
				if (t) e.call(n, r, o);
				else
					for (var a = e.length, s = f(e, a), d = 0; d < a; ++d) s[d].call(n, r, o)
			}

			function l(e, t, n, r, o, a)
			{
				if (t) e.call(n, r, o, a);
				else
					for (var s = e.length, d = f(e, s), l = 0; l < s; ++l) d[l].call(n, r, o, a)
			}

			function p(e, t, n, r)
			{
				if (t) e.apply(n, r);
				else
					for (var o = e.length, a = f(e, o), s = 0; s < o; ++s) a[s].apply(n, r)
			}

			function _(e, t, n, o)
			{
				var a, s, i;
				if ("function" != typeof n) throw new TypeError("\"listener\" argument must be a function");
				if (s = e._events, s ? (s.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), s = e._events), i = s[t]) : (s = e._events = E(null), e._eventsCount = 0), !i) i = s[t] = n, ++e._eventsCount;
				else if ("function" == typeof i ? i = s[t] = o ? [n, i] : [i, n] : o ? i.unshift(n) : i.push(n), !i.warned && (a = r(e), a && 0 < a && i.length > a))
				{
					i.warned = !0;
					var d = new Error("Possible EventEmitter memory leak detected. " + i.length + " \"" + (t + "\" listeners added. Use emitter.setMaxListeners() to increase limit."));
					d.name = "MaxListenersExceededWarning", d.emitter = e, d.type = t, d.count = i.length, "object" == typeof console && console.warn && console.warn("%s: %s", d.name, d.message)
				}
				return e
			}

			function m()
			{
				if (!this.fired) switch (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length)
				{
				case 0:
					return this.listener.call(this.target);
				case 1:
					return this.listener.call(this.target, arguments[0]);
				case 2:
					return this.listener.call(this.target, arguments[0], arguments[1]);
				case 3:
					return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);
				default:
					for (var e = Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
					this.listener.apply(this.target, e);
				}
			}

			function u(e, t, n)
			{
				var r = {
						fired: !1,
						wrapFn: void 0,
						target: e,
						type: t,
						listener: n
					},
					o = k.call(m, r);
				return o.listener = n, r.wrapFn = o, o
			}

			function c(e, t, n)
			{
				var r = e._events;
				if (!r) return [];
				var o = r[t];
				return o ? "function" == typeof o ? n ? [o.listener || o] : [o] : n ? y(o) : f(o, o.length) : []
			}

			function g(e)
			{
				var t = this._events;
				if (t)
				{
					var n = t[e];
					if ("function" == typeof n) return 1;
					if (n) return n.length
				}
				return 0
			}

			function h(e, t)
			{
				for (var r = t, o = r + 1, a = e.length; o < a; r += 1, o += 1) e[r] = e[o];
				e.pop()
			}

			function f(e, t)
			{
				for (var n = Array(t), r = 0; r < t; ++r) n[r] = e[r];
				return n
			}

			function y(e)
			{
				for (var t = Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
				return t
			}
			var E = Object.create || function (e)
				{
					var t = function () {};
					return t.prototype = e, new t
				},
				b = Object.keys || function (e)
				{
					var t = [];
					for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n);
					return n
				},
				k = Function.prototype.bind || function (e)
				{
					var t = this;
					return function ()
					{
						return t.apply(e, arguments)
					}
				};
			t.exports = n, n.EventEmitter = n, n.prototype._events = void 0, n.prototype._maxListeners = void 0;
			var v, C = 10;
			try
			{
				var F = {};
				Object.defineProperty && Object.defineProperty(F, "x",
				{
					value: 0
				}), v = 0 === F.x
			}
			catch (e)
			{
				v = !1
			}
			v ? Object.defineProperty(n, "defaultMaxListeners",
			{
				enumerable: !0,
				get: function ()
				{
					return C
				},
				set: function (e)
				{
					if ("number" != typeof e || 0 > e || e !== e) throw new TypeError("\"defaultMaxListeners\" must be a positive number");
					C = e
				}
			}) : n.defaultMaxListeners = C, n.prototype.setMaxListeners = function (e)
			{
				if ("number" != typeof e || 0 > e || isNaN(e)) throw new TypeError("\"n\" argument must be a positive number");
				return this._maxListeners = e, this
			}, n.prototype.getMaxListeners = function ()
			{
				return r(this)
			}, n.prototype.emit = function (e)
			{
				var t, n, r, o, _, m, u = "error" === e;
				if (m = this._events, m) u = u && null == m.error;
				else if (!u) return !1;
				if (u)
				{
					if (1 < arguments.length && (t = arguments[1]), t instanceof Error) throw t;
					else
					{
						var c = new Error("Unhandled \"error\" event. (" + t + ")");
						throw c.context = t, c
					}
					return !1
				}
				if (n = m[e], !n) return !1;
				var g = "function" == typeof n;
				switch (r = arguments.length, r)
				{
				case 1:
					a(n, g, this);
					break;
				case 2:
					s(n, g, this, arguments[1]);
					break;
				case 3:
					d(n, g, this, arguments[1], arguments[2]);
					break;
				case 4:
					l(n, g, this, arguments[1], arguments[2], arguments[3]);
					break;
				default:
					for (o = Array(r - 1), _ = 1; _ < r; _++) o[_ - 1] = arguments[_];
					p(n, g, this, o);
				}
				return !0
			}, n.prototype.addListener = function (e, t)
			{
				return _(this, e, t, !1)
			}, n.prototype.on = n.prototype.addListener, n.prototype.prependListener = function (e, t)
			{
				return _(this, e, t, !0)
			}, n.prototype.once = function (e, t)
			{
				if ("function" != typeof t) throw new TypeError("\"listener\" argument must be a function");
				return this.on(e, u(this, e, t)), this
			}, n.prototype.prependOnceListener = function (e, t)
			{
				if ("function" != typeof t) throw new TypeError("\"listener\" argument must be a function");
				return this.prependListener(e, u(this, e, t)), this
			}, n.prototype.removeListener = function (e, t)
			{
				var n, r, o, a, s;
				if ("function" != typeof t) throw new TypeError("\"listener\" argument must be a function");
				if (r = this._events, !r) return this;
				if (n = r[e], !n) return this;
				if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = E(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
				else if ("function" != typeof n)
				{
					for (o = -1, a = n.length - 1; 0 <= a; a--)
						if (n[a] === t || n[a].listener === t)
						{
							s = n[a].listener, o = a;
							break
						} if (0 > o) return this;
					0 === o ? n.shift() : h(n, o), 1 === n.length && (r[e] = n[0]), r.removeListener && this.emit("removeListener", e, s || t)
				}
				return this
			}, n.prototype.removeAllListeners = function (e)
			{
				var t, n, r;
				if (n = this._events, !n) return this;
				if (!n.removeListener) return 0 === arguments.length ? (this._events = E(null), this._eventsCount = 0) : n[e] && (0 == --this._eventsCount ? this._events = E(null) : delete n[e]), this;
				if (0 === arguments.length)
				{
					var o, a = b(n);
					for (r = 0; r < a.length; ++r) o = a[r], "removeListener" !== o && this.removeAllListeners(o);
					return this.removeAllListeners("removeListener"), this._events = E(null), this._eventsCount = 0, this
				}
				if (t = n[e], "function" == typeof t) this.removeListener(e, t);
				else if (t)
					for (r = t.length - 1; 0 <= r; r--) this.removeListener(e, t[r]);
				return this
			}, n.prototype.listeners = function (e)
			{
				return c(this, e, !0)
			}, n.prototype.rawListeners = function (e)
			{
				return c(this, e, !1)
			}, n.listenerCount = function (e, t)
			{
				return "function" == typeof e.listenerCount ? e.listenerCount(t) : g.call(e, t)
			}, n.prototype.listenerCount = g, n.prototype.eventNames = function ()
			{
				return 0 < this._eventsCount ? Reflect.ownKeys(this._events) : []
			}
		},
		{}],
		4: [function (e, t)
		{
			function n(e, t)
			{
				if (t = t ||
					{}, void 0 === e) throw new Error("insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).");
				var n = !0 === t.prepend ? "prepend" : "append",
					s = void 0 === t.container ? document.querySelector("head") : t.container,
					i = o.indexOf(s); - 1 === i && (i = o.push(s) - 1, a[i] = {});
				var d;
				return void 0 !== a[i] && void 0 !== a[i][n] ? d = a[i][n] : (d = a[i][n] = r(), "prepend" === n ? s.insertBefore(d, s.childNodes[0]) : s.appendChild(d)), 65279 === e.charCodeAt(0) && (e = e.substr(1, e.length)), d.styleSheet ? d.styleSheet.cssText += e : d.textContent += e, d
			}

			function r()
			{
				var e = document.createElement("style");
				return e.setAttribute("type", "text/css"), e
			}
			var o = [],
				a = [];
			t.exports = n, t.exports.insertCss = n
		},
		{}],
		5: [function (e, n)
		{
			var r = Math.round;

			function o(e)
			{
				if (e += "", !(100 < e.length))
				{
					var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
					if (t)
					{
						var r = parseFloat(t[1]),
							n = (t[2] || "ms").toLowerCase();
						return "years" === n || "year" === n || "yrs" === n || "yr" === n || "y" === n ? 31557600000 * r : "weeks" === n || "week" === n || "w" === n ? 604800000 * r : "days" === n || "day" === n || "d" === n ? 86400000 * r : "hours" === n || "hour" === n || "hrs" === n || "hr" === n || "h" === n ? 3600000 * r : "minutes" === n || "minute" === n || "mins" === n || "min" === n || "m" === n ? 60000 * r : "seconds" === n || "second" === n || "secs" === n || "sec" === n || "s" === n ? 1000 * r : "milliseconds" === n || "millisecond" === n || "msecs" === n || "msec" === n || "ms" === n ? r : void 0
					}
				}
			}

			function a(e)
			{
				var n = t(e);
				return 86400000 <= n ? r(e / 86400000) + "d" : 3600000 <= n ? r(e / 3600000) + "h" : 60000 <= n ? r(e / 60000) + "m" : 1000 <= n ? r(e / 1000) + "s" : e + "ms"
			}

			function s(e)
			{
				var n = t(e);
				return 86400000 <= n ? i(e, n, 86400000, "day") : 3600000 <= n ? i(e, n, 3600000, "hour") : 60000 <= n ? i(e, n, 60000, "minute") : 1000 <= n ? i(e, n, 1000, "second") : e + " ms"
			}

			function i(e, t, o, n)
			{
				return r(e / o) + " " + n + (t >= 1.5 * o ? "s" : "")
			}
			var l = 24 * (60 * 60000);
			n.exports = function (e, t)
			{
				t = t ||
				{};
				var n = typeof e;
				if ("string" == n && 0 < e.length) return o(e);
				if ("number" === n && isFinite(e)) return t.long ? s(e) : a(e);
				throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
			}
		},
		{}],
		6: [function (e, t)
		{
			function n()
			{
				throw new Error("setTimeout has not been defined")
			}

			function r()
			{
				throw new Error("clearTimeout has not been defined")
			}

			function o(t)
			{
				if (_ === setTimeout) return setTimeout(t, 0);
				if ((_ === n || !_) && setTimeout) return _ = setTimeout, setTimeout(t, 0);
				try
				{
					return _(t, 0)
				}
				catch (n)
				{
					try
					{
						return _.call(null, t, 0)
					}
					catch (n)
					{
						return _.call(this, t, 0)
					}
				}
			}

			function a(t)
			{
				if (m === clearTimeout) return clearTimeout(t);
				if ((m === r || !m) && clearTimeout) return m = clearTimeout, clearTimeout(t);
				try
				{
					return m(t)
				}
				catch (n)
				{
					try
					{
						return m.call(null, t)
					}
					catch (n)
					{
						return m.call(this, t)
					}
				}
			}

			function s()
			{
				h && c && (h = !1, c.length ? g = c.concat(g) : f = -1, g.length && d())
			}

			function d()
			{
				if (!h)
				{
					var e = o(s);
					h = !0;
					for (var t = g.length; t;)
					{
						for (c = g, g = []; ++f < t;) c && c[f].run();
						f = -1, t = g.length
					}
					c = null, h = !1, a(e)
				}
			}

			function l(e, t)
			{
				this.fun = e, this.array = t
			}

			function p()
			{}
			var _, m, u = t.exports = {};
			(function ()
			{
				try
				{
					_ = "function" == typeof setTimeout ? setTimeout : n
				}
				catch (t)
				{
					_ = n
				}
				try
				{
					m = "function" == typeof clearTimeout ? clearTimeout : r
				}
				catch (t)
				{
					m = r
				}
			})();
			var c, g = [],
				h = !1,
				f = -1;
			u.nextTick = function (e)
			{
				var t = Array(arguments.length - 1);
				if (1 < arguments.length)
					for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
				g.push(new l(e, t)), 1 !== g.length || h || o(d)
			}, l.prototype.run = function ()
			{
				this.fun.apply(null, this.array)
			}, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = p, u.addListener = p, u.once = p, u.off = p, u.removeListener = p, u.removeAllListeners = p, u.emit = p, u.prependListener = p, u.prependOnceListener = p, u.listeners = function ()
			{
				return []
			}, u.binding = function ()
			{
				throw new Error("process.binding is not supported")
			}, u.cwd = function ()
			{
				return "/"
			}, u.chdir = function ()
			{
				throw new Error("process.chdir is not supported")
			}, u.umask = function ()
			{
				return 0
			}
		},
		{}],
		7: [function (t, n)
		{
			/*! timidity. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
			const r = t("debug"),
				o = t("events").EventEmitter,
				a = t("./libtimidity"),
				s = r("timidity"),
				i = r("timidity:verbose"),
				d = 2,
				l = 2 * d,
				p = 16384,
				_ = "undefined" != typeof window && (window.AudioContext || window.webkitAudioContext);
			class m extends o
			{
				constructor(e = "/")
				{
					super(), this.destroyed = !1, e.endsWith("/") || (e += "/"), this._baseUrl = new URL(e, window.location.origin).href, this._ready = !1, this._playing = !1, this._pendingFetches = {}, this._songPtr = 0, this._bufferPtr = 0, this._array = new Int16Array(2 * p), this._currentUrlOrBuf = null, this._interval = null, this._startInterval = this._startInterval.bind(this), this._stopInterval = this._stopInterval.bind(this), this._audioContext = new _, this._node = this._audioContext.createScriptProcessor(p, 0, d), this._onAudioProcess = this._onAudioProcess.bind(this), this._node.addEventListener("audioprocess", this._onAudioProcess), this._node.connect(this._audioContext.destination), a(
					{
						locateFile: e => new URL(e, this._baseUrl).href
					}).then(e =>
					{
						this._lib = e, this._onLibReady()
					})
				}
				_onLibReady()
				{
					this._lib.FS.writeFile("/timidity.cfg", "\nbank 0\n\n0 GUS/acpiano.pat\n1 GUS/britepno.pat\n2 GUS/synpiano.pat\n3 GUS/honky.pat\n4 GUS/epiano1.pat\n5 GUS/epiano2.pat\n6 GUS/hrpschrd.pat\n7 GUS/clavinet.pat\n8 GUS/celeste.pat\n9 GUS/glocken.pat\n10 GUS/musicbox.pat\n11 GUS/vibes.pat\n12 GUS/marimba.pat\n13 GUS/xylophon.pat\n14 GUS/tubebell.pat\n15 GUS/santur.pat\n16 GUS/homeorg.pat\n17 GUS/percorg.pat\n18 GUS/rockorg.pat\n19 GUS/church.pat\n20 GUS/reedorg.pat\n21 GUS/accordn.pat\n22 GUS/harmonca.pat\n23 GUS/concrtna.pat\n24 GUS/nyguitar.pat\n25 GUS/acguitar.pat\n26 GUS/jazzgtr.pat\n27 GUS/cleangtr.pat\n28 GUS/mutegtr.pat\n29 GUS/odguitar.pat\n30 GUS/distgtr.pat\n31 GUS/gtrharm.pat\n32 GUS/acbass.pat\n33 GUS/fngrbass.pat\n34 GUS/pickbass.pat\n35 GUS/fretless.pat\n36 GUS/slapbas1.pat\n37 GUS/slapbas2.pat\n38 GUS/synbass1.pat\n39 GUS/synbass2.pat\n40 GUS/violin.pat\n41 GUS/viola.pat\n42 GUS/cello.pat\n43 GUS/contraba.pat\n44 GUS/tremstr.pat\n45 GUS/pizzcato.pat\n46 GUS/harp.pat\n47 GUS/timpani.pat\n48 GUS/marcato.pat\n49 GUS/slowstr.pat\n50 GUS/synstr1.pat\n51 GUS/synstr2.pat\n52 GUS/choir.pat\n53 GUS/doo.pat\n54 GUS/voices.pat\n55 GUS/orchhit.pat\n56 GUS/trumpet.pat\n57 GUS/trombone.pat\n58 GUS/tuba.pat\n59 GUS/mutetrum.pat\n60 GUS/frenchrn.pat\n61 GUS/hitbrass.pat\n62 GUS/synbras1.pat\n63 GUS/synbras2.pat\n64 GUS/sprnosax.pat\n65 GUS/altosax.pat\n66 GUS/tenorsax.pat\n67 GUS/barisax.pat\n68 GUS/oboe.pat\n69 GUS/englhorn.pat\n70 GUS/bassoon.pat\n71 GUS/clarinet.pat\n72 GUS/piccolo.pat\n73 GUS/flute.pat\n74 GUS/recorder.pat\n75 GUS/woodflut.pat\n76 GUS/bottle.pat\n77 GUS/shakazul.pat\n78 GUS/whistle.pat\n79 GUS/ocarina.pat\n80 GUS/sqrwave.pat\n81 GUS/sawwave.pat\n82 GUS/calliope.pat\n83 GUS/chiflead.pat\n84 GUS/voxlead.pat\n85 GUS/charang.pat\n86 GUS/lead5th.pat\n87 GUS/basslead.pat\n88 GUS/fantasia.pat\n89 GUS/warmpad.pat\n90 GUS/polysyn.pat\n91 GUS/ghostie.pat\n92 GUS/bowglass.pat\n93 GUS/metalpad.pat\n94 GUS/halopad.pat\n95 GUS/sweeper.pat\n96 GUS/aurora.pat\n97 GUS/soundtrk.pat\n98 GUS/crystal.pat\n99 GUS/atmosphr.pat\n100 GUS/freshair.pat\n101 GUS/unicorn.pat\n102 GUS/ghostie.pat\n103 GUS/startrak.pat\n104 GUS/sitar.pat\n105 GUS/banjo.pat\n106 GUS/shamisen.pat\n107 GUS/koto.pat\n108 GUS/kalimba.pat\n109 GUS/bagpipes.pat\n110 GUS/fiddle.pat\n111 GUS/shannai.pat\n112 GUS/carillon.pat\n113 GUS/agogo.pat\n114 GUS/steeldrm.pat\n115 GUS/woodblk.pat\n116 GUS/taiko.pat\n117 GUS/toms.pat\n118 GUS/syntom.pat\n119 GUS/revcym.pat\n120 GUS/fx-fret.pat\n121 GUS/fx-blow.pat\n122 GUS/seashore.pat\n123 GUS/jungle.pat\n124 GUS/telephon.pat\n125 GUS/helicptr.pat\n126 GUS/applause.pat\n127 GUS/ringwhsl.pat\n\ndrumset 0\n\n27 GUS/highq.pat\n28 GUS/slap.pat\n29 GUS/scratch1.pat\n30 GUS/scratch2.pat\n31 GUS/sticks.pat\n32 GUS/sqrclick.pat\n33 GUS/metclick.pat\n34 GUS/metbell.pat\n35 GUS/kick1.pat\n36 GUS/kick2.pat\n37 GUS/stickrim.pat\n38 GUS/snare1.pat\n39 GUS/claps.pat\n40 GUS/snare2.pat\n41 GUS/tomlo2.pat\n42 GUS/hihatcl.pat\n43 GUS/tomlo1.pat\n44 GUS/hihatpd.pat\n45 GUS/tommid2.pat\n46 GUS/hihatop.pat\n47 GUS/tommid1.pat\n48 GUS/tomhi2.pat\n49 GUS/cymcrsh1.pat\n50 GUS/tomhi1.pat\n51 GUS/cymride1.pat\n52 GUS/cymchina.pat\n53 GUS/cymbell.pat\n54 GUS/tamborin.pat\n55 GUS/cymsplsh.pat\n56 GUS/cowbell.pat\n57 GUS/cymcrsh2.pat\n58 GUS/vibslap.pat\n59 GUS/cymride2.pat\n60 GUS/bongohi.pat\n61 GUS/bongolo.pat\n62 GUS/congahi1.pat\n63 GUS/congahi2.pat\n64 GUS/congalo.pat\n65 GUS/timbaleh.pat\n66 GUS/timbalel.pat\n67 GUS/agogohi.pat\n68 GUS/agogolo.pat\n69 GUS/cabasa.pat\n70 GUS/maracas.pat\n71 GUS/whistle1.pat\n72 GUS/whistle2.pat\n73 GUS/guiro1.pat\n74 GUS/guiro2.pat\n75 GUS/clave.pat\n76 GUS/woodblk1.pat\n77 GUS/woodblk2.pat\n78 GUS/cuica1.pat\n79 GUS/cuica2.pat\n80 GUS/triangl1.pat\n81 GUS/triangl2.pat\n82 GUS/shaker.pat\n83 GUS/jingles.pat\n84 GUS/belltree.pat\n85 GUS/castinet.pat\n86 GUS/surdo1.pat\n87 GUS/surdo2.pat\n\n");
					const e = this._lib._mid_init("/timidity.cfg");
					return 0 === e ? void(this._bufferPtr = this._lib._malloc(p * l), i("Initialized libtimidity"), this._ready = !0, this.emit("_ready")) : this._destroy(new Error("Failed to initialize libtimidity"))
				}
				async load(e)
				{
					if (s("load %o", e), this.destroyed) throw new Error("load() called after destroy()");
					if (this._audioContext.resume(), this._songPtr && this._destroySong(), this.emit("unstarted"), this._stopInterval(), !this._ready) return this.once("_ready", () => this.load(e));
					this.emit("buffering"), this._currentUrlOrBuf = e;
					let t;
					if ("string" == typeof e)
					{
						if (t = await this._fetch(new URL(e, this._baseUrl)), this._currentUrlOrBuf !== e) return;
					}
					else if (e instanceof Uint8Array) t = e;
					else throw new Error("load() expects a `string` or `Uint8Array` argument");
					let n = this._loadSong(t),
						r = this._lib._mid_get_load_request_count(n);
					if (0 < r)
					{
						let o = this._getMissingInstruments(n, r);
						if (i("Fetching instruments: %o", o), await Promise.all(o.map(e => this._fetchInstrument(e))), this._currentUrlOrBuf !== e) return;
						this._lib._mid_song_free(n), n = this._loadSong(t), r = this._lib._mid_get_load_request_count(n), 0 < r && (o = this._getMissingInstruments(n, r), s("Playing with missing instruments: %o", o))
					}
					this._songPtr = n, this._lib._mid_song_start(this._songPtr), i("Song and instruments are loaded")
				}
				_getMissingInstruments(e, t)
				{
					const n = [];
					for (let r = 0; r < t; r++)
					{
						const t = this._lib._mid_get_load_request(e, r),
							o = this._lib.UTF8ToString(t);
						n.push(o)
					}
					return n
				}
				_loadSong(e)
				{
					const t = this._lib._mid_alloc_options(this._audioContext.sampleRate, 32784, d, p),
						n = this._lib._malloc(e.byteLength);
					this._lib.HEAPU8.set(e, n);
					const r = this._lib._mid_istream_open_mem(n, e.byteLength),
						o = this._lib._mid_song_load(r, t);
					return this._lib._mid_istream_close(r), this._lib._free(t), this._lib._free(n), 0 === o ? this._destroy(new Error("Failed to load MIDI file")) : o
				}
				async _fetchInstrument(e)
				{
					if (this._pendingFetches[e]) return this._pendingFetches[e];
					const t = new URL(e, this._baseUrl),
						n = this._fetch(t);
					this._pendingFetches[e] = n;
					const r = await n;
					return this._writeInstrumentFile(e, r), delete this._pendingFetches[e], r
				}
				_writeInstrumentFile(e, t)
				{
					const n = e.split("/").slice(0, -1).join("/");
					this._mkdirp(n), this._lib.FS.writeFile(e, t,
					{
						encoding: "binary"
					})
				}
				_mkdirp(e)
				{
					const t = e.split("/");
					let n = "/";
					for (let r = 0; r < t.length; r++)
					{
						const e = t[r];
						try
						{
							this._lib.FS.mkdir(`${n}${e}`)
						}
						catch (e)
						{}
						n += `${e}/`
					}
				}
				async _fetch(e)
				{
					const t = await window.fetch(e,
					{
						mode: "cors",
						credentials: "same-origin"
					});
					if (200 !== t.status) throw new Error(`Could not load ${e}`);
					const n = await t.arrayBuffer(),
						r = new Uint8Array(n);
					return r
				}
				play()
				{
					if (s("play"), this.destroyed) throw new Error("play() called after destroy()");
					this._audioContext.resume(), this._playing = !0, this._ready && !this._currentUrlOrBuf && (this.emit("playing"), this._startInterval())
				}
				_onAudioProcess(e)
				{
					const t = this._songPtr && this._playing ? this._readMidiData() : 0;
					0 < t && this._currentUrlOrBuf && (this._currentUrlOrBuf = null, this.emit("playing"), this._startInterval());
					const n = e.outputBuffer.getChannelData(0),
						r = e.outputBuffer.getChannelData(1);
					for (let o = 0; o < t; o++) n[o] = this._array[2 * o] / 32767, r[o] = this._array[2 * o + 1] / 32767;
					for (let o = t; o < p; o++) n[o] = 0, r[o] = 0;
					this._songPtr && this._playing && 0 === t && (this.seek(0), this.pause(), this._lib._mid_song_start(this._songPtr), this.emit("ended"))
				}
				_readMidiData()
				{
					const e = this._lib._mid_song_read_wave(this._songPtr, this._bufferPtr, p * l),
						t = e / l;
					return 0 === t ? 0 : (this._array.set(this._lib.HEAP16.subarray(this._bufferPtr / 2, (this._bufferPtr + e) / 2)), t)
				}
				pause()
				{
					if (s("pause"), this.destroyed) throw new Error("pause() called after destroy()");
					this._playing = !1, this._stopInterval(), this.emit("paused")
				}
				seek(t)
				{
					if (s("seek %d", t), this.destroyed) throw new Error("seek() called after destroy()");
					if (this._songPtr)
					{
						const n = e(1e3 * t);
						this._lib._mid_song_seek(this._songPtr, n), this._onTimeupdate()
					}
				}
				get currentTime()
				{
					return this.destroyed || !this._songPtr ? 0 : this._lib._mid_song_get_time(this._songPtr) / 1e3
				}
				get duration()
				{
					return this.destroyed || !this._songPtr ? 1 : this._lib._mid_song_get_total_time(this._songPtr) / 1e3
				}
				_onTimeupdate()
				{
					this.emit("timeupdate", this.currentTime)
				}
				_startInterval()
				{
					this._onTimeupdate(), this._interval = setInterval(() => this._onTimeupdate(), 1e3)
				}
				_stopInterval()
				{
					this._onTimeupdate(), clearInterval(this._interval), this._interval = null
				}
				destroy()
				{
					if (s("destroy"), this.destroyed) throw new Error("destroy() called after destroy()");
					this._destroy()
				}
				_destroy(e)
				{
					this.destroyed || (this.destroyed = !0, this._stopInterval(), this._array = null, this._songPtr && this._destroySong(), this._bufferPtr && (this._lib._free(this._bufferPtr), this._bufferPtr = 0), this._node && (this._node.disconnect(), this._node.removeEventListener("audioprocess", this._onAudioProcess)), this._audioContext && this._audioContext.close(), e && this.emit("error", e), s("destroyed (err %o)", e))
				}
				_destroySong()
				{
					this._lib._mid_song_free(this._songPtr), this._songPtr = 0
				}
			}
			n.exports = m
		},
		{
			"./libtimidity": 8,
			debug: 1,
			events: 3
		}],
		8: [function (r, o, a)
		{
			var s = function ()
			{
				var n = "undefined" != typeof document && document.currentScript ? document.currentScript.src : void 0;
				return function (r)
				{
					var o = Math.max,
						a = Math.min,
						s = Math.ceil;

					function i(e)
					{
						return J.locateFile ? J.locateFile(e, de) : de + e
					}

					function d(e, t)
					{
						return t || (t = 16), s(e / t) * t
					}

					function l(e, t)
					{
						e || w("Assertion failed: " + t)
					}

					function p(e, t, n)
					{
						for (var r = String.fromCharCode, o = t + n, a = t; e[a] && !(a >= o);) ++a;
						if (16 < a - t && e.subarray && we) return we.decode(e.subarray(t, a));
						for (var s, i = ""; t < a;)
						{
							if (s = e[t++], !(128 & s))
							{
								i += r(s);
								continue
							}
							var d = 63 & e[t++];
							if (192 == (224 & s))
							{
								i += r((31 & s) << 6 | d);
								continue
							}
							var l = 63 & e[t++];
							if (s = 224 == (240 & s) ? (15 & s) << 12 | d << 6 | l : (7 & s) << 18 | d << 12 | l << 6 | 63 & e[t++], 65536 > s) i += r(s);
							else
							{
								var p = s - 65536;
								i += r(55296 | p >> 10, 56320 | 1023 & p)
							}
						}
						return i
					}

					function _(e, t)
					{
						return e ? p(fe, e, t) : ""
					}

					function m(e, t, n, r)
					{
						if (!(0 < r)) return 0;
						for (var o, a = n, s = n + r - 1, d = 0; d < e.length; ++d)
						{
							if (o = e.charCodeAt(d), 55296 <= o && 57343 >= o)
							{
								var l = e.charCodeAt(++d);
								o = 65536 + ((1023 & o) << 10) | 1023 & l
							}
							if (127 >= o)
							{
								if (n >= s) break;
								t[n++] = o
							}
							else if (2047 >= o)
							{
								if (n + 1 >= s) break;
								t[n++] = 192 | o >> 6, t[n++] = 128 | 63 & o
							}
							else if (65535 >= o)
							{
								if (n + 2 >= s) break;
								t[n++] = 224 | o >> 12, t[n++] = 128 | 63 & o >> 6, t[n++] = 128 | 63 & o
							}
							else
							{
								if (n + 3 >= s) break;
								t[n++] = 240 | o >> 18, t[n++] = 128 | 63 & o >> 12, t[n++] = 128 | 63 & o >> 6, t[n++] = 128 | 63 & o
							}
						}
						return t[n] = 0, n - a
					}

					function u(e, t, n)
					{
						return m(e, fe, t, n)
					}

					function c(e)
					{
						for (var t, n = 0, r = 0; r < e.length; ++r) t = e.charCodeAt(r), 55296 <= t && 57343 >= t && (t = 65536 + ((1023 & t) << 10) | 1023 & e.charCodeAt(++r)), 127 >= t ? ++n : 2047 >= t ? n += 2 : 65535 >= t ? n += 3 : n += 4;
						return n
					}

					function g(e, t)
					{
						return 0 < e % t && (e += t - e % t), e
					}

					function h(e)
					{
						ge = e, J.HEAP8 = he = new Int8Array(e), J.HEAP16 = ye = new Int16Array(e), J.HEAP32 = be = new Int32Array(e), J.HEAPU8 = fe = new Uint8Array(e), J.HEAPU16 = Ee = new Uint16Array(e), J.HEAPU32 = ke = new Uint32Array(e), J.HEAPF32 = ve = new Float32Array(e), J.HEAPF64 = Ce = new Float64Array(e)
					}

					function f()
					{
						if (J.preRun)
							for ("function" == typeof J.preRun && (J.preRun = [J.preRun]); J.preRun.length;) k(J.preRun.shift());
						A(Te)
					}

					function y()
					{
						Be = !0, J.noFSInit || qe.init.initialized || qe.init(), Ue.init(), A(xe)
					}

					function E()
					{
						qe.ignorePermissions = !1, A(Ae)
					}

					function b()
					{
						if (J.postRun)
							for ("function" == typeof J.postRun && (J.postRun = [J.postRun]); J.postRun.length;) v(J.postRun.shift());
						A(Le)
					}

					function k(e)
					{
						Te.unshift(e)
					}

					function v(e)
					{
						Le.unshift(e)
					}

					function C(e)
					{
						return e
					}

					function F()
					{
						Re++, J.monitorRunDependencies && J.monitorRunDependencies(Re)
					}

					function D()
					{
						if (Re--, J.monitorRunDependencies && J.monitorRunDependencies(Re), 0 == Re && (null !== Me && (clearInterval(Me), Me = null), Oe))
						{
							var e = Oe;
							Oe = null, e()
						}
					}

					function w(t)
					{
						J.onAbort && J.onAbort(t), t += "", pe(t), Fe = !0, De = 1, t = "abort(" + t + "). Build with -s ASSERTIONS=1 for more info.";
						var n = new WebAssembly.RuntimeError(t);
						throw $(n), n
					}

					function S(e, t)
					{
						var n = String.prototype;
						return n.startsWith ? e.startsWith(t) : 0 === e.indexOf(t)
					}

					function P(e)
					{
						return S(e, "data:application/octet-stream;base64,")
					}

					function T()
					{
						try
						{
							if (_e) return new Uint8Array(_e);
							if (ne) return ne(Ie);
							throw "both async and sync fetching of the wasm failed"
						}
						catch (e)
						{
							w(e)
						}
					}

					function x()
					{
						return _e || 0 || "function" != typeof fetch ? Promise.resolve().then(T) : fetch(Ie,
						{
							credentials: "same-origin"
						}).then(function (e)
						{
							if (!e.ok) throw "failed to load wasm binary file at '" + Ie + "'";
							return e.arrayBuffer()
						}).catch(function ()
						{
							return T()
						})
					}

					function A(e)
					{
						for (; 0 < e.length;)
						{
							var t = e.shift();
							if ("function" == typeof t)
							{
								t(J);
								continue
							}
							var n = t.func;
							"number" == typeof n ? void 0 === t.arg ? ce.get(n)() : ce.get(n)(t.arg) : n(void 0 === t.arg ? null : t.arg)
						}
					}

					function L(e)
					{
						return e
					}

					function B(e)
					{
						return e.replace(/\b_Z[\w\d_]+/g, function (e)
						{
							var t = L(e);
							return e === t ? e : t + " [" + e + "]"
						})
					}

					function R()
					{
						var t = new Error;
						if (!t.stack)
						{
							try
							{
								throw new Error
							}
							catch (n)
							{
								t = n
							}
							if (!t.stack) return "(no stack trace available)"
						}
						return t.stack.toString()
					}

					function M()
					{
						var e = R();
						return J.extraStackTrace && (e += "\n" + J.extraStackTrace()), B(e)
					}

					function O(e)
					{
						return be[ct() >> 2] = e, e
					}

					function I()
					{
						if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues)
						{
							var e = new Uint8Array(1);
							return function ()
							{
								return crypto.getRandomValues(e), e[0]
							}
						}
						return function ()
						{
							w("randomDevice")
						}
					}

					function N(e)
					{
						for (var t = d(e, 16384), n = Qe(t); e < t;) he[n + e++] = 0;
						return n
					}

					function z(e, t, n)
					{
						Ge.varargs = n;
						try
						{
							var r = Ge.getStreamFromFD(e);
							switch (t)
							{
							case 0:
							{
								var o = Ge.get();
								if (0 > o) return -28;
								var a;
								return a = qe.open(r.path, r.flags, 0, o), a.fd
							}
							case 1:
							case 2:
								return 0;
							case 3:
								return r.flags;
							case 4:
							{
								var o = Ge.get();
								return r.flags |= o, 0
							}
							case 12:
							{
								var o = Ge.get();
								return ye[o + 0 >> 1] = 2, 0
							}
							case 13:
							case 14:
								return 0;
							case 16:
							case 8:
								return -28;
							case 9:
								return O(28), -1;
							default:
								return -28;
							}
						}
						catch (t)
						{
							return "undefined" != typeof qe && t instanceof qe.ErrnoError || w(t), -t.errno
						}
					}

					function j(e, t, n)
					{
						Ge.varargs = n;
						try
						{
							var r = Ge.getStreamFromFD(e);
							switch (t)
							{
							case 21509:
							case 21505:
								return r.tty ? 0 : -59;
							case 21510:
							case 21511:
							case 21512:
							case 21506:
							case 21507:
							case 21508:
								return r.tty ? 0 : -59;
							case 21519:
							{
								if (!r.tty) return -59;
								var o = Ge.get();
								return be[o >> 2] = 0, 0
							}
							case 21520:
								return r.tty ? -28 : -59;
							case 21531:
							{
								var o = Ge.get();
								return qe.ioctl(r, t, o)
							}
							case 21523:
								return r.tty ? 0 : -59;
							case 21524:
								return r.tty ? 0 : -59;
							default:
								w("bad ioctl syscall " + t);
							}
						}
						catch (t)
						{
							return "undefined" != typeof qe && t instanceof qe.ErrnoError || w(t), -t.errno
						}
					}

					function H(e, t, n)
					{
						fe.copyWithin(e, t, t + n)
					}

					function U()
					{
						return fe.length
					}

					function W(e)
					{
						try
						{
							return ue.grow(e - ge.byteLength + 65535 >>> 16), h(ue.buffer), 1
						}
						catch (t)
						{}
					}

					function q(e, t, n, r)
					{
						try
						{
							var o = Ge.getStreamFromFD(e),
								a = Ge.doReadv(o, t, n);
							return be[r >> 2] = a, 0
						}
						catch (t)
						{
							return "undefined" != typeof qe && t instanceof qe.ErrnoError || w(t), t.errno
						}
					}

					function G(n, r, o, i, d)
					{
						try
						{
							var l = Ge.getStreamFromFD(n),
								p = o * 4294967296 + (r >>> 0),
								_ = 9007199254740992;
							return p <= -_ || p >= _ ? -61 : (qe.llseek(l, p, i), ze = [l.position >>> 0, (Ne = l.position, 1 <= +t(Ne) ? 0 < Ne ? (0 | a(+e(Ne / 4294967296), 4294967295)) >>> 0 : ~~+s((Ne - +(~~Ne >>> 0)) / 4294967296) >>> 0 : 0)], be[d >> 2] = ze[0], be[d + 4 >> 2] = ze[1], l.getdents && 0 === p && 0 === i && (l.getdents = null), 0)
						}
						catch (t)
						{
							return "undefined" != typeof qe && t instanceof qe.ErrnoError || w(t), t.errno
						}
					}

					function V(e, t, n, r)
					{
						try
						{
							var o = Ge.getStreamFromFD(e),
								a = Ge.doWritev(o, t, n);
							return be[r >> 2] = a, 0
						}
						catch (t)
						{
							return "undefined" != typeof qe && t instanceof qe.ErrnoError || w(t), t.errno
						}
					}

					function K(e, t, n)
					{
						var r = 0 < n ? n : c(e) + 1,
							o = Array(r),
							a = m(e, o, 0, o.length);
						return t && (o.length = a), o
					}

					function X(e)
					{
						function t()
						{
							gt || (gt = !0, J.calledRun = !0, Fe || (y(), E(), Y(J), J.onRuntimeInitialized && J.onRuntimeInitialized(), b()))
						}(e = e || oe, !(0 < Re)) && (f(), 0 < Re || (J.setStatus ? (J.setStatus("Running..."), setTimeout(function ()
						{
							setTimeout(function ()
							{
								J.setStatus("")
							}, 1), t()
						}, 1)) : t()))
					}
					r = r ||
					{}, null;
					var Y, $, J = "undefined" == typeof r ?
					{} : r;
					J.ready = new Promise(function (e, t)
					{
						Y = e, $ = t
					});
					var Q, Z = {};
					for (Q in J) J.hasOwnProperty(Q) && (Z[Q] = J[Q]);
					var ee, te, ne, re, oe = [],
						ae = "./this.program",
						se = function (e, t)
						{
							throw t
						},
						ie = !1,
						de = "";
					(!0 || ie) && (document.currentScript && (de = document.currentScript.src), n && (de = n), de = 0 === de.indexOf("blob:") ? "" : de.substr(0, de.lastIndexOf("/") + 1), ee = function (e)
					{
						var t = new XMLHttpRequest;
						return t.open("GET", e, !1), t.send(null), t.responseText
					}, ie && (ne = function (e)
					{
						var t = new XMLHttpRequest;
						return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response)
					}), te = function (e, t, n)
					{
						var r = new XMLHttpRequest;
						r.open("GET", e, !0), r.responseType = "arraybuffer", r.onload = function ()
						{
							return 200 == r.status || 0 == r.status && r.response ? void t(r.response) : void n()
						}, r.onerror = n, r.send(null)
					}, re = function (e)
					{
						document.title = e
					});
					var le = J.print || console.log.bind(console),
						pe = J.printErr || console.warn.bind(console);
					for (Q in Z) Z.hasOwnProperty(Q) && (J[Q] = Z[Q]);
					Z = null, J.arguments && (oe = J.arguments), J.thisProgram && (ae = J.thisProgram), J.quit && (se = J.quit);
					var _e;
					J.wasmBinary && (_e = J.wasmBinary);
					var me;
					J.noExitRuntime && (me = J.noExitRuntime), "object" != typeof WebAssembly && w("no native wasm support detected");
					var ue, ce, ge, he, fe, ye, Ee, be, ke, ve, Ce, Fe = !1,
						De = 0,
						we = "undefined" == typeof TextDecoder ? void 0 : new TextDecoder("utf8"),
						Se = 65536,
						Pe = J.INITIAL_MEMORY || 16777216;
					ue = J.wasmMemory ? J.wasmMemory : new WebAssembly.Memory(
					{
						initial: Pe / Se,
						maximum: 2147483648 / Se
					}), ue && (ge = ue.buffer), Pe = ge.byteLength, h(ge);
					var Te = [],
						xe = [],
						Ae = [],
						Le = [],
						Be = !1,
						Re = 0,
						Me = null,
						Oe = null;
					J.preloadedImages = {}, J.preloadedAudios = {};
					var Ie = "libtimidity.wasm";
					P(Ie) || (Ie = i(Ie));
					var Ne, ze, je = {
							splitPath: function (e)
							{
								return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1)
							},
							normalizeArray: function (e, t)
							{
								for (var n, r = 0, o = e.length - 1; 0 <= o; o--) n = e[o], "." === n ? e.splice(o, 1) : ".." === n ? (e.splice(o, 1), r++) : r && (e.splice(o, 1), r--);
								if (t)
									for (; r; r--) e.unshift("..");
								return e
							},
							normalize: function (e)
							{
								var t = "/" === e.charAt(0),
									n = "/" === e.substr(-1);
								return e = je.normalizeArray(e.split("/").filter(function (e)
								{
									return !!e
								}), !t).join("/"), e || t || (e = "."), e && n && (e += "/"), (t ? "/" : "") + e
							},
							dirname: function (e)
							{
								var t = je.splitPath(e),
									n = t[0],
									r = t[1];
								return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : "."
							},
							basename: function (e)
							{
								if ("/" === e) return "/";
								e = je.normalize(e), e = e.replace(/\/$/, "");
								var t = e.lastIndexOf("/");
								return -1 === t ? e : e.substr(t + 1)
							},
							extname: function (e)
							{
								return je.splitPath(e)[3]
							},
							join: function ()
							{
								var e = Array.prototype.slice.call(arguments, 0);
								return je.normalize(e.join("/"))
							},
							join2: function (e, t)
							{
								return je.normalize(e + "/" + t)
							}
						},
						He = {
							resolve: function ()
							{
								for (var e, t = "", n = !1, r = arguments.length - 1; - 1 <= r && !n; r--)
								{
									if (e = 0 <= r ? arguments[r] : qe.cwd(), "string" != typeof e) throw new TypeError("Arguments to path.resolve must be strings");
									else if (!e) return "";
									t = e + "/" + t, n = "/" === e.charAt(0)
								}
								return t = je.normalizeArray(t.split("/").filter(function (e)
								{
									return !!e
								}), !n).join("/"), (n ? "/" : "") + t || "."
							},
							relative: function (e, t)
							{
								function n(e)
								{
									for (var t = 0; t < e.length && "" === e[t]; t++);
									for (var n = e.length - 1; 0 <= n && "" === e[n]; n--);
									return t > n ? [] : e.slice(t, n - t + 1)
								}
								e = He.resolve(e).substr(1), t = He.resolve(t).substr(1);
								for (var r = n(e.split("/")), o = n(t.split("/")), s = a(r.length, o.length), d = s, l = 0; l < s; l++)
									if (r[l] !== o[l])
									{
										d = l;
										break
									} for (var p = [], l = d; l < r.length; l++) p.push("..");
								return p = p.concat(o.slice(d)), p.join("/")
							}
						},
						Ue = {
							ttys: [],
							init: function () {},
							shutdown: function () {},
							register: function (e, t)
							{
								Ue.ttys[e] = {
									input: [],
									output: [],
									ops: t
								}, qe.registerDevice(e, Ue.stream_ops)
							},
							stream_ops:
							{
								open: function (e)
								{
									var t = Ue.ttys[e.node.rdev];
									if (!t) throw new qe.ErrnoError(43);
									e.tty = t, e.seekable = !1
								},
								close: function (e)
								{
									e.tty.ops.flush(e.tty)
								},
								flush: function (e)
								{
									e.tty.ops.flush(e.tty)
								},
								read: function (e, t, n, r)
								{
									if (!e.tty || !e.tty.ops.get_char) throw new qe.ErrnoError(60);
									for (var o = 0, a = 0; a < r; a++)
									{
										var s;
										try
										{
											s = e.tty.ops.get_char(e.tty)
										}
										catch (t)
										{
											throw new qe.ErrnoError(29)
										}
										if (void 0 === s && 0 === o) throw new qe.ErrnoError(6);
										if (null === s || void 0 === s) break;
										o++, t[n + a] = s
									}
									return o && (e.node.timestamp = Date.now()), o
								},
								write: function (e, t, n, r)
								{
									if (!e.tty || !e.tty.ops.put_char) throw new qe.ErrnoError(60);
									try
									{
										for (var o = 0; o < r; o++) e.tty.ops.put_char(e.tty, t[n + o])
									}
									catch (t)
									{
										throw new qe.ErrnoError(29)
									}
									return r && (e.node.timestamp = Date.now()), o
								}
							},
							default_tty_ops:
							{
								get_char: function (e)
								{
									if (!e.input.length)
									{
										var t = null;
										if ("undefined" != typeof window && "function" == typeof window.prompt ? (t = window.prompt("Input: "), null !== t && (t += "\n")) : "function" == typeof readline && (t = readline(), null !== t && (t += "\n")), !t) return null;
										e.input = K(t, !0)
									}
									return e.input.shift()
								},
								put_char: function (e, t)
								{
									null === t || 10 === t ? (le(p(e.output, 0)), e.output = []) : 0 != t && e.output.push(t)
								},
								flush: function (e)
								{
									e.output && 0 < e.output.length && (le(p(e.output, 0)), e.output = [])
								}
							},
							default_tty1_ops:
							{
								put_char: function (e, t)
								{
									null === t || 10 === t ? (pe(p(e.output, 0)), e.output = []) : 0 != t && e.output.push(t)
								},
								flush: function (e)
								{
									e.output && 0 < e.output.length && (pe(p(e.output, 0)), e.output = [])
								}
							}
						},
						We = {
							ops_table: null,
							mount: function ()
							{
								return We.createNode(null, "/", 16895, 0)
							},
							createNode: function (e, t, n, r)
							{
								if (qe.isBlkdev(n) || qe.isFIFO(n)) throw new qe.ErrnoError(63);
								We.ops_table || (We.ops_table = {
									dir:
									{
										node:
										{
											getattr: We.node_ops.getattr,
											setattr: We.node_ops.setattr,
											lookup: We.node_ops.lookup,
											mknod: We.node_ops.mknod,
											rename: We.node_ops.rename,
											unlink: We.node_ops.unlink,
											rmdir: We.node_ops.rmdir,
											readdir: We.node_ops.readdir,
											symlink: We.node_ops.symlink
										},
										stream:
										{
											llseek: We.stream_ops.llseek
										}
									},
									file:
									{
										node:
										{
											getattr: We.node_ops.getattr,
											setattr: We.node_ops.setattr
										},
										stream:
										{
											llseek: We.stream_ops.llseek,
											read: We.stream_ops.read,
											write: We.stream_ops.write,
											allocate: We.stream_ops.allocate,
											mmap: We.stream_ops.mmap,
											msync: We.stream_ops.msync
										}
									},
									link:
									{
										node:
										{
											getattr: We.node_ops.getattr,
											setattr: We.node_ops.setattr,
											readlink: We.node_ops.readlink
										},
										stream:
										{}
									},
									chrdev:
									{
										node:
										{
											getattr: We.node_ops.getattr,
											setattr: We.node_ops.setattr
										},
										stream: qe.chrdev_stream_ops
									}
								});
								var o = qe.createNode(e, t, n, r);
								return qe.isDir(o.mode) ? (o.node_ops = We.ops_table.dir.node, o.stream_ops = We.ops_table.dir.stream, o.contents = {}) : qe.isFile(o.mode) ? (o.node_ops = We.ops_table.file.node, o.stream_ops = We.ops_table.file.stream, o.usedBytes = 0, o.contents = null) : qe.isLink(o.mode) ? (o.node_ops = We.ops_table.link.node, o.stream_ops = We.ops_table.link.stream) : qe.isChrdev(o.mode) && (o.node_ops = We.ops_table.chrdev.node, o.stream_ops = We.ops_table.chrdev.stream), o.timestamp = Date.now(), e && (e.contents[t] = o), o
							},
							getFileDataAsRegularArray: function (e)
							{
								if (e.contents && e.contents.subarray)
								{
									for (var t = [], n = 0; n < e.usedBytes; ++n) t.push(e.contents[n]);
									return t
								}
								return e.contents
							},
							getFileDataAsTypedArray: function (e)
							{
								return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0)
							},
							expandFileStorage: function (e, t)
							{
								var n = e.contents ? e.contents.length : 0;
								if (!(n >= t))
								{
									t = o(t, n * (1048576 > n ? 2 : 1.125) >>> 0), 0 != n && (t = o(t, 256));
									var r = e.contents;
									return e.contents = new Uint8Array(t), void(0 < e.usedBytes && e.contents.set(r.subarray(0, e.usedBytes), 0))
								}
							},
							resizeFileStorage: function (e, t)
							{
								if (e.usedBytes != t)
								{
									if (0 == t) return e.contents = null, void(e.usedBytes = 0);
									if (!e.contents || e.contents.subarray)
									{
										var n = e.contents;
										return e.contents = new Uint8Array(t), n && e.contents.set(n.subarray(0, a(t, e.usedBytes))), void(e.usedBytes = t)
									}
									if (e.contents || (e.contents = []), e.contents.length > t) e.contents.length = t;
									else
										for (; e.contents.length < t;) e.contents.push(0);
									e.usedBytes = t
								}
							},
							node_ops:
							{
								getattr: function (e)
								{
									var t = {};
									return t.dev = qe.isChrdev(e.mode) ? e.id : 1, t.ino = e.id, t.mode = e.mode, t.nlink = 1, t.uid = 0, t.gid = 0, t.rdev = e.rdev, t.size = qe.isDir(e.mode) ? 4096 : qe.isFile(e.mode) ? e.usedBytes : qe.isLink(e.mode) ? e.link.length : 0, t.atime = new Date(e.timestamp), t.mtime = new Date(e.timestamp), t.ctime = new Date(e.timestamp), t.blksize = 4096, t.blocks = s(t.size / t.blksize), t
								},
								setattr: function (e, t)
								{
									void 0 !== t.mode && (e.mode = t.mode), void 0 !== t.timestamp && (e.timestamp = t.timestamp), void 0 !== t.size && We.resizeFileStorage(e, t.size)
								},
								lookup: function ()
								{
									throw qe.genericErrors[44]
								},
								mknod: function (e, t, n, r)
								{
									return We.createNode(e, t, n, r)
								},
								rename: function (e, t, n)
								{
									if (qe.isDir(e.mode))
									{
										var r;
										try
										{
											r = qe.lookupNode(t, n)
										}
										catch (t)
										{}
										if (r)
											for (var o in r.contents) throw new qe.ErrnoError(55)
									}
									delete e.parent.contents[e.name], e.name = n, t.contents[n] = e, e.parent = t
								},
								unlink: function (e, t)
								{
									delete e.contents[t]
								},
								rmdir: function (e, t)
								{
									var n = qe.lookupNode(e, t);
									for (var r in n.contents) throw new qe.ErrnoError(55);
									delete e.contents[t]
								},
								readdir: function (e)
								{
									var t = [".", ".."];
									for (var n in e.contents) e.contents.hasOwnProperty(n) && t.push(n);
									return t
								},
								symlink: function (e, t, n)
								{
									var r = We.createNode(e, t, 41471, 0);
									return r.link = n, r
								},
								readlink: function (e)
								{
									if (!qe.isLink(e.mode)) throw new qe.ErrnoError(28);
									return e.link
								}
							},
							stream_ops:
							{
								read: function (e, t, n, r, o)
								{
									var s = e.node.contents;
									if (o >= e.node.usedBytes) return 0;
									var d = a(e.node.usedBytes - o, r);
									if (8 < d && s.subarray) t.set(s.subarray(o, o + d), n);
									else
										for (var l = 0; l < d; l++) t[n + l] = s[o + l];
									return d
								},
								write: function (e, t, n, r, a, s)
								{
									if (t.buffer === he.buffer && (s = !1), !r) return 0;
									var d = e.node;
									if (d.timestamp = Date.now(), t.subarray && (!d.contents || d.contents.subarray))
									{
										if (s) return d.contents = t.subarray(n, n + r), d.usedBytes = r, r;
										if (0 === d.usedBytes && 0 === a) return d.contents = t.slice(n, n + r), d.usedBytes = r, r;
										if (a + r <= d.usedBytes) return d.contents.set(t.subarray(n, n + r), a), r
									}
									if (We.expandFileStorage(d, a + r), d.contents.subarray && t.subarray) d.contents.set(t.subarray(n, n + r), a);
									else
										for (var l = 0; l < r; l++) d.contents[a + l] = t[n + l];
									return d.usedBytes = o(d.usedBytes, a + r), r
								},
								llseek: function (e, t, n)
								{
									var r = t;
									if (1 === n ? r += e.position : 2 == n && qe.isFile(e.node.mode) && (r += e.node.usedBytes), 0 > r) throw new qe.ErrnoError(28);
									return r
								},
								allocate: function (e, t, n)
								{
									We.expandFileStorage(e.node, t + n), e.node.usedBytes = o(e.node.usedBytes, t + n)
								},
								mmap: function (e, t, n, r, o, a)
								{
									if (l(0 === t), !qe.isFile(e.node.mode)) throw new qe.ErrnoError(43);
									var s, i, d = e.node.contents;
									if (!(2 & a) && d.buffer === ge) i = !1, s = d.byteOffset;
									else
									{
										if ((0 < r || r + n < d.length) && (d.subarray ? d = d.subarray(r, r + n) : d = Array.prototype.slice.call(d, r, r + n)), i = !0, s = N(n), !s) throw new qe.ErrnoError(48);
										he.set(d, s)
									}
									return {
										ptr: s,
										allocated: i
									}
								},
								msync: function (e, t, n, r, o)
								{
									if (!qe.isFile(e.node.mode)) throw new qe.ErrnoError(43);
									if (2 & o) return 0;
									We.stream_ops.write(e, t, 0, r, n, !1);
									return 0
								}
							}
						},
						qe = {
							root: null,
							mounts: [],
							devices:
							{},
							streams: [],
							nextInode: 1,
							nameTable: null,
							currentPath: "/",
							initialized: !1,
							ignorePermissions: !0,
							trackingDelegate:
							{},
							tracking:
							{
								openFlags:
								{
									READ: 1,
									WRITE: 2
								}
							},
							ErrnoError: null,
							genericErrors:
							{},
							filesystems: null,
							syncFSRequests: 0,
							handleFSError: function (t)
							{
								if (!(t instanceof qe.ErrnoError)) throw t + " : " + M();
								return O(t.errno)
							},
							lookupPath: function (e, t)
							{
								if (e = He.resolve(qe.cwd(), e), t = t ||
									{}, !e) return {
									path: "",
									node: null
								};
								var n = {
									follow_mount: !0,
									recurse_count: 0
								};
								for (var r in n) void 0 === t[r] && (t[r] = n[r]);
								if (8 < t.recurse_count) throw new qe.ErrnoError(32);
								for (var o, a = je.normalizeArray(e.split("/").filter(function (e)
									{
										return !!e
									}), !1), s = qe.root, d = "/", l = 0; l < a.length && (o = l == a.length - 1, !(o && t.parent)); l++)
									if (s = qe.lookupNode(s, a[l]), d = je.join2(d, a[l]), qe.isMountpoint(s) && (!o || o && t.follow_mount) && (s = s.mounted.root), !o || t.follow)
										for (var p, _ = 0; qe.isLink(s.mode);)
										{
											p = qe.readlink(d), d = He.resolve(je.dirname(d), p);
											var m = qe.lookupPath(d,
											{
												recurse_count: t.recurse_count
											});
											if (s = m.node, 40 < _++) throw new qe.ErrnoError(32)
										}
								return {
									path: d,
									node: s
								}
							},
							getPath: function (e)
							{
								for (var t;;)
								{
									if (qe.isRoot(e))
									{
										var n = e.mount.mountpoint;
										return t ? "/" === n[n.length - 1] ? n + t : n + "/" + t : n
									}
									t = t ? e.name + "/" + t : e.name, e = e.parent
								}
							},
							hashName: function (e, t)
							{
								for (var n = 0, r = 0; r < t.length; r++) n = 0 | (n << 5) - n + t.charCodeAt(r);
								return (e + n >>> 0) % qe.nameTable.length
							},
							hashAddNode: function (e)
							{
								var t = qe.hashName(e.parent.id, e.name);
								e.name_next = qe.nameTable[t], qe.nameTable[t] = e
							},
							hashRemoveNode: function (e)
							{
								var t = qe.hashName(e.parent.id, e.name);
								if (qe.nameTable[t] === e) qe.nameTable[t] = e.name_next;
								else
									for (var n = qe.nameTable[t]; n;)
									{
										if (n.name_next === e)
										{
											n.name_next = e.name_next;
											break
										}
										n = n.name_next
									}
							},
							lookupNode: function (e, t)
							{
								var n = qe.mayLookup(e);
								if (n) throw new qe.ErrnoError(n, e);
								for (var r, o = qe.hashName(e.id, t), a = qe.nameTable[o]; a; a = a.name_next)
									if (r = a.name, a.parent.id === e.id && r === t) return a;
								return qe.lookup(e, t)
							},
							createNode: function (e, t, n, r)
							{
								var o = new qe.FSNode(e, t, n, r);
								return qe.hashAddNode(o), o
							},
							destroyNode: function (e)
							{
								qe.hashRemoveNode(e)
							},
							isRoot: function (e)
							{
								return e === e.parent
							},
							isMountpoint: function (e)
							{
								return !!e.mounted
							},
							isFile: function (e)
							{
								return 32768 == (61440 & e)
							},
							isDir: function (e)
							{
								return 16384 == (61440 & e)
							},
							isLink: function (e)
							{
								return 40960 == (61440 & e)
							},
							isChrdev: function (e)
							{
								return 8192 == (61440 & e)
							},
							isBlkdev: function (e)
							{
								return 24576 == (61440 & e)
							},
							isFIFO: function (e)
							{
								return 4096 == (61440 & e)
							},
							isSocket: function (e)
							{
								return 49152 == (49152 & e)
							},
							flagModes:
							{
								r: 0,
								rs: 1052672,
								"r+": 2,
								w: 577,
								wx: 705,
								xw: 705,
								"w+": 578,
								"wx+": 706,
								"xw+": 706,
								a: 1089,
								ax: 1217,
								xa: 1217,
								"a+": 1090,
								"ax+": 1218,
								"xa+": 1218
							},
							modeStringToFlags: function (e)
							{
								var t = qe.flagModes[e];
								if ("undefined" == typeof t) throw new Error("Unknown file open mode: " + e);
								return t
							},
							flagsToPermissionString: function (e)
							{
								var t = ["r", "w", "rw"][3 & e];
								return 512 & e && (t += "w"), t
							},
							nodePermissions: function (e, t)
							{
								return qe.ignorePermissions ? 0 : -1 === t.indexOf("r") || 292 & e.mode ? -1 === t.indexOf("w") || 146 & e.mode ? -1 === t.indexOf("x") || 73 & e.mode ? 0 : 2 : 2 : 2
							},
							mayLookup: function (e)
							{
								var t = qe.nodePermissions(e, "x");
								return t ? t : e.node_ops.lookup ? 0 : 2
							},
							mayCreate: function (e, t)
							{
								try
								{
									qe.lookupNode(e, t);
									return 20
								}
								catch (t)
								{}
								return qe.nodePermissions(e, "wx")
							},
							mayDelete: function (e, t, n)
							{
								var r;
								try
								{
									r = qe.lookupNode(e, t)
								}
								catch (t)
								{
									return t.errno
								}
								var o = qe.nodePermissions(e, "wx");
								if (o) return o;
								if (n)
								{
									if (!qe.isDir(r.mode)) return 54;
									if (qe.isRoot(r) || qe.getPath(r) === qe.cwd()) return 10
								}
								else if (qe.isDir(r.mode)) return 31;
								return 0
							},
							mayOpen: function (e, t)
							{
								return e ? qe.isLink(e.mode) ? 32 : qe.isDir(e.mode) && ("r" !== qe.flagsToPermissionString(t) || 512 & t) ? 31 : qe.nodePermissions(e, qe.flagsToPermissionString(t)) : 44
							},
							MAX_OPEN_FDS: 4096,
							nextfd: function (e, t)
							{
								e = e || 0, t = t || qe.MAX_OPEN_FDS;
								for (var n = e; n <= t; n++)
									if (!qe.streams[n]) return n;
								throw new qe.ErrnoError(33)
							},
							getStream: function (e)
							{
								return qe.streams[e]
							},
							createStream: function (e, t, n)
							{
								qe.FSStream || (qe.FSStream = function () {}, qe.FSStream.prototype = {
									object:
									{
										get: function ()
										{
											return this.node
										},
										set: function (e)
										{
											this.node = e
										}
									},
									isRead:
									{
										get: function ()
										{
											return 1 != (2097155 & this.flags)
										}
									},
									isWrite:
									{
										get: function ()
										{
											return 0 != (2097155 & this.flags)
										}
									},
									isAppend:
									{
										get: function ()
										{
											return 1024 & this.flags
										}
									}
								});
								var r = new qe.FSStream;
								for (var o in e) r[o] = e[o];
								e = r;
								var a = qe.nextfd(t, n);
								return e.fd = a, qe.streams[a] = e, e
							},
							closeStream: function (e)
							{
								qe.streams[e] = null
							},
							chrdev_stream_ops:
							{
								open: function (e)
								{
									var t = qe.getDevice(e.node.rdev);
									e.stream_ops = t.stream_ops, e.stream_ops.open && e.stream_ops.open(e)
								},
								llseek: function ()
								{
									throw new qe.ErrnoError(70)
								}
							},
							major: function (e)
							{
								return e >> 8
							},
							minor: function (e)
							{
								return 255 & e
							},
							makedev: function (e, t)
							{
								return e << 8 | t
							},
							registerDevice: function (e, t)
							{
								qe.devices[e] = {
									stream_ops: t
								}
							},
							getDevice: function (e)
							{
								return qe.devices[e]
							},
							getMounts: function (e)
							{
								for (var t, n = [], r = [e]; r.length;) t = r.pop(), n.push(t), r.push.apply(r, t.mounts);
								return n
							},
							syncfs: function (e, t)
							{
								function n(e)
								{
									return qe.syncFSRequests--, t(e)
								}

								function r(e)
								{
									return e ? r.errored ? void 0 : (r.errored = !0, n(e)) : void(++a >= o.length && n(null))
								}
								"function" == typeof e && (t = e, e = !1), qe.syncFSRequests++, 1 < qe.syncFSRequests && pe("warning: " + qe.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
								var o = qe.getMounts(qe.root.mount),
									a = 0;
								o.forEach(function (t)
								{
									return t.type.syncfs ? void t.type.syncfs(t, e, r) : r(null)
								})
							},
							mount: function (e, t, n)
							{
								var r, o = "/" === n,
									a = !n;
								if (o && qe.root) throw new qe.ErrnoError(10);
								else if (!o && !a)
								{
									var s = qe.lookupPath(n,
									{
										follow_mount: !1
									});
									if (n = s.path, r = s.node, qe.isMountpoint(r)) throw new qe.ErrnoError(10);
									if (!qe.isDir(r.mode)) throw new qe.ErrnoError(54)
								}
								var i = {
										type: e,
										opts: t,
										mountpoint: n,
										mounts: []
									},
									d = e.mount(i);
								return d.mount = i, i.root = d, o ? qe.root = d : r && (r.mounted = i, r.mount && r.mount.mounts.push(i)), d
							},
							unmount: function (e)
							{
								var t = qe.lookupPath(e,
								{
									follow_mount: !1
								});
								if (!qe.isMountpoint(t.node)) throw new qe.ErrnoError(28);
								var n = t.node,
									r = n.mounted,
									o = qe.getMounts(r);
								Object.keys(qe.nameTable).forEach(function (e)
								{
									for (var t, n = qe.nameTable[e]; n;) t = n.name_next, -1 !== o.indexOf(n.mount) && qe.destroyNode(n), n = t
								}), n.mounted = null;
								var a = n.mount.mounts.indexOf(r);
								n.mount.mounts.splice(a, 1)
							},
							lookup: function (e, t)
							{
								return e.node_ops.lookup(e, t)
							},
							mknod: function (e, t, n)
							{
								var r = qe.lookupPath(e,
									{
										parent: !0
									}),
									o = r.node,
									a = je.basename(e);
								if (!a || "." === a || ".." === a) throw new qe.ErrnoError(28);
								var s = qe.mayCreate(o, a);
								if (s) throw new qe.ErrnoError(s);
								if (!o.node_ops.mknod) throw new qe.ErrnoError(63);
								return o.node_ops.mknod(o, a, t, n)
							},
							create: function (e, t)
							{
								return t = void 0 === t ? 438 : t, t &= 4095, t |= 32768, qe.mknod(e, t, 0)
							},
							mkdir: function (e, t)
							{
								return t = void 0 === t ? 511 : t, t &= 1023, t |= 16384, qe.mknod(e, t, 0)
							},
							mkdirTree: function (e, t)
							{
								for (var n = e.split("/"), r = "", o = 0; o < n.length; ++o)
									if (n[o])
									{
										r += "/" + n[o];
										try
										{
											qe.mkdir(r, t)
										}
										catch (t)
										{
											if (20 != t.errno) throw t
										}
									}
							},
							mkdev: function (e, t, n)
							{
								return "undefined" == typeof n && (n = t, t = 438), t |= 8192, qe.mknod(e, t, n)
							},
							symlink: function (e, t)
							{
								if (!He.resolve(e)) throw new qe.ErrnoError(44);
								var n = qe.lookupPath(t,
									{
										parent: !0
									}),
									r = n.node;
								if (!r) throw new qe.ErrnoError(44);
								var o = je.basename(t),
									a = qe.mayCreate(r, o);
								if (a) throw new qe.ErrnoError(a);
								if (!r.node_ops.symlink) throw new qe.ErrnoError(63);
								return r.node_ops.symlink(r, o, e)
							},
							rename: function (t, n)
							{
								var r, o, a, s = je.dirname(t),
									i = je.dirname(n),
									d = je.basename(t),
									l = je.basename(n);
								if (r = qe.lookupPath(t,
									{
										parent: !0
									}), o = r.node, r = qe.lookupPath(n,
									{
										parent: !0
									}), a = r.node, !o || !a) throw new qe.ErrnoError(44);
								if (o.mount !== a.mount) throw new qe.ErrnoError(75);
								var p = qe.lookupNode(o, d),
									_ = He.relative(t, i);
								if ("." !== _.charAt(0)) throw new qe.ErrnoError(28);
								if (_ = He.relative(n, s), "." !== _.charAt(0)) throw new qe.ErrnoError(55);
								var m;
								try
								{
									m = qe.lookupNode(a, l)
								}
								catch (t)
								{}
								if (p !== m)
								{
									var u = qe.isDir(p.mode),
										c = qe.mayDelete(o, d, u);
									if (c) throw new qe.ErrnoError(c);
									if (c = m ? qe.mayDelete(a, l, u) : qe.mayCreate(a, l), c) throw new qe.ErrnoError(c);
									if (!o.node_ops.rename) throw new qe.ErrnoError(63);
									if (qe.isMountpoint(p) || m && qe.isMountpoint(m)) throw new qe.ErrnoError(10);
									if (a !== o && (c = qe.nodePermissions(o, "w"), c)) throw new qe.ErrnoError(c);
									try
									{
										qe.trackingDelegate.willMovePath && qe.trackingDelegate.willMovePath(t, n)
									}
									catch (r)
									{
										pe("FS.trackingDelegate['willMovePath']('" + t + "', '" + n + "') threw an exception: " + r.message)
									}
									qe.hashRemoveNode(p);
									try
									{
										o.node_ops.rename(p, a, l)
									}
									catch (t)
									{
										throw t
									}
									finally
									{
										qe.hashAddNode(p)
									}
									try
									{
										qe.trackingDelegate.onMovePath && qe.trackingDelegate.onMovePath(t, n)
									}
									catch (r)
									{
										pe("FS.trackingDelegate['onMovePath']('" + t + "', '" + n + "') threw an exception: " + r.message)
									}
								}
							},
							rmdir: function (t)
							{
								var n = qe.lookupPath(t,
									{
										parent: !0
									}),
									r = n.node,
									o = je.basename(t),
									a = qe.lookupNode(r, o),
									s = qe.mayDelete(r, o, !0);
								if (s) throw new qe.ErrnoError(s);
								if (!r.node_ops.rmdir) throw new qe.ErrnoError(63);
								if (qe.isMountpoint(a)) throw new qe.ErrnoError(10);
								try
								{
									qe.trackingDelegate.willDeletePath && qe.trackingDelegate.willDeletePath(t)
								}
								catch (n)
								{
									pe("FS.trackingDelegate['willDeletePath']('" + t + "') threw an exception: " + n.message)
								}
								r.node_ops.rmdir(r, o), qe.destroyNode(a);
								try
								{
									qe.trackingDelegate.onDeletePath && qe.trackingDelegate.onDeletePath(t)
								}
								catch (n)
								{
									pe("FS.trackingDelegate['onDeletePath']('" + t + "') threw an exception: " + n.message)
								}
							},
							readdir: function (e)
							{
								var t = qe.lookupPath(e,
									{
										follow: !0
									}),
									n = t.node;
								if (!n.node_ops.readdir) throw new qe.ErrnoError(54);
								return n.node_ops.readdir(n)
							},
							unlink: function (t)
							{
								var n = qe.lookupPath(t,
									{
										parent: !0
									}),
									r = n.node,
									o = je.basename(t),
									a = qe.lookupNode(r, o),
									s = qe.mayDelete(r, o, !1);
								if (s) throw new qe.ErrnoError(s);
								if (!r.node_ops.unlink) throw new qe.ErrnoError(63);
								if (qe.isMountpoint(a)) throw new qe.ErrnoError(10);
								try
								{
									qe.trackingDelegate.willDeletePath && qe.trackingDelegate.willDeletePath(t)
								}
								catch (n)
								{
									pe("FS.trackingDelegate['willDeletePath']('" + t + "') threw an exception: " + n.message)
								}
								r.node_ops.unlink(r, o), qe.destroyNode(a);
								try
								{
									qe.trackingDelegate.onDeletePath && qe.trackingDelegate.onDeletePath(t)
								}
								catch (n)
								{
									pe("FS.trackingDelegate['onDeletePath']('" + t + "') threw an exception: " + n.message)
								}
							},
							readlink: function (e)
							{
								var t = qe.lookupPath(e),
									n = t.node;
								if (!n) throw new qe.ErrnoError(44);
								if (!n.node_ops.readlink) throw new qe.ErrnoError(28);
								return He.resolve(qe.getPath(n.parent), n.node_ops.readlink(n))
							},
							stat: function (e, t)
							{
								var n = qe.lookupPath(e,
									{
										follow: !t
									}),
									r = n.node;
								if (!r) throw new qe.ErrnoError(44);
								if (!r.node_ops.getattr) throw new qe.ErrnoError(63);
								return r.node_ops.getattr(r)
							},
							lstat: function (e)
							{
								return qe.stat(e, !0)
							},
							chmod: function (e, t, n)
							{
								var r;
								if ("string" == typeof e)
								{
									var o = qe.lookupPath(e,
									{
										follow: !n
									});
									r = o.node
								}
								else r = e;
								if (!r.node_ops.setattr) throw new qe.ErrnoError(63);
								r.node_ops.setattr(r,
								{
									mode: 4095 & t | -4096 & r.mode,
									timestamp: Date.now()
								})
							},
							lchmod: function (e, t)
							{
								qe.chmod(e, t, !0)
							},
							fchmod: function (e, t)
							{
								var n = qe.getStream(e);
								if (!n) throw new qe.ErrnoError(8);
								qe.chmod(n.node, t)
							},
							chown: function (e, t, n, r)
							{
								var o;
								if ("string" == typeof e)
								{
									var a = qe.lookupPath(e,
									{
										follow: !r
									});
									o = a.node
								}
								else o = e;
								if (!o.node_ops.setattr) throw new qe.ErrnoError(63);
								o.node_ops.setattr(o,
								{
									timestamp: Date.now()
								})
							},
							lchown: function (e, t, n)
							{
								qe.chown(e, t, n, !0)
							},
							fchown: function (e, t, n)
							{
								var r = qe.getStream(e);
								if (!r) throw new qe.ErrnoError(8);
								qe.chown(r.node, t, n)
							},
							truncate: function (e, t)
							{
								if (0 > t) throw new qe.ErrnoError(28);
								var n;
								if ("string" == typeof e)
								{
									var r = qe.lookupPath(e,
									{
										follow: !0
									});
									n = r.node
								}
								else n = e;
								if (!n.node_ops.setattr) throw new qe.ErrnoError(63);
								if (qe.isDir(n.mode)) throw new qe.ErrnoError(31);
								if (!qe.isFile(n.mode)) throw new qe.ErrnoError(28);
								var o = qe.nodePermissions(n, "w");
								if (o) throw new qe.ErrnoError(o);
								n.node_ops.setattr(n,
								{
									size: t,
									timestamp: Date.now()
								})
							},
							ftruncate: function (e, t)
							{
								var n = qe.getStream(e);
								if (!n) throw new qe.ErrnoError(8);
								if (0 == (2097155 & n.flags)) throw new qe.ErrnoError(28);
								qe.truncate(n.node, t)
							},
							utime: function (e, t, n)
							{
								var r = qe.lookupPath(e,
									{
										follow: !0
									}),
									a = r.node;
								a.node_ops.setattr(a,
								{
									timestamp: o(t, n)
								})
							},
							open: function (t, n, r, o, a)
							{
								if ("" === t) throw new qe.ErrnoError(44);
								n = "string" == typeof n ? qe.modeStringToFlags(n) : n, r = "undefined" == typeof r ? 438 : r, r = 64 & n ? 32768 | 4095 & r : 0;
								var s;
								if ("object" == typeof t) s = t;
								else
								{
									t = je.normalize(t);
									try
									{
										var i = qe.lookupPath(t,
										{
											follow: !(131072 & n)
										});
										s = i.node
									}
									catch (t)
									{}
								}
								var d = !1;
								if (64 & n)
									if (!s) s = qe.mknod(t, r, 0), d = !0;
									else if (128 & n) throw new qe.ErrnoError(20);
								if (!s) throw new qe.ErrnoError(44);
								if (qe.isChrdev(s.mode) && (n &= -513), 65536 & n && !qe.isDir(s.mode)) throw new qe.ErrnoError(54);
								if (!d)
								{
									var l = qe.mayOpen(s, n);
									if (l) throw new qe.ErrnoError(l)
								}
								512 & n && qe.truncate(s, 0), n &= -131713;
								var p = qe.createStream(
								{
									node: s,
									path: qe.getPath(s),
									flags: n,
									seekable: !0,
									position: 0,
									stream_ops: s.stream_ops,
									ungotten: [],
									error: !1
								}, o, a);
								p.stream_ops.open && p.stream_ops.open(p), J.logReadFiles && !(1 & n) && (!qe.readFiles && (qe.readFiles = {}), !(t in qe.readFiles) && (qe.readFiles[t] = 1, pe("FS.trackingDelegate error on read file: " + t)));
								try
								{
									if (qe.trackingDelegate.onOpenFile)
									{
										var _ = 0;
										1 != (2097155 & n) && (_ |= qe.tracking.openFlags.READ), 0 != (2097155 & n) && (_ |= qe.tracking.openFlags.WRITE), qe.trackingDelegate.onOpenFile(t, _)
									}
								}
								catch (n)
								{
									pe("FS.trackingDelegate['onOpenFile']('" + t + "', flags) threw an exception: " + n.message)
								}
								return p
							},
							close: function (e)
							{
								if (qe.isClosed(e)) throw new qe.ErrnoError(8);
								e.getdents && (e.getdents = null);
								try
								{
									e.stream_ops.close && e.stream_ops.close(e)
								}
								catch (t)
								{
									throw t
								}
								finally
								{
									qe.closeStream(e.fd)
								}
								e.fd = null
							},
							isClosed: function (e)
							{
								return null === e.fd
							},
							llseek: function (e, t, n)
							{
								if (qe.isClosed(e)) throw new qe.ErrnoError(8);
								if (!e.seekable || !e.stream_ops.llseek) throw new qe.ErrnoError(70);
								if (0 != n && 1 != n && 2 != n) throw new qe.ErrnoError(28);
								return e.position = e.stream_ops.llseek(e, t, n), e.ungotten = [], e.position
							},
							read: function (e, t, n, r, o)
							{
								if (0 > r || 0 > o) throw new qe.ErrnoError(28);
								if (qe.isClosed(e)) throw new qe.ErrnoError(8);
								if (1 == (2097155 & e.flags)) throw new qe.ErrnoError(8);
								if (qe.isDir(e.node.mode)) throw new qe.ErrnoError(31);
								if (!e.stream_ops.read) throw new qe.ErrnoError(28);
								var a = "undefined" != typeof o;
								if (!a) o = e.position;
								else if (!e.seekable) throw new qe.ErrnoError(70);
								var s = e.stream_ops.read(e, t, n, r, o);
								return a || (e.position += s), s
							},
							write: function (t, n, r, o, a, s)
							{
								if (0 > o || 0 > a) throw new qe.ErrnoError(28);
								if (qe.isClosed(t)) throw new qe.ErrnoError(8);
								if (0 == (2097155 & t.flags)) throw new qe.ErrnoError(8);
								if (qe.isDir(t.node.mode)) throw new qe.ErrnoError(31);
								if (!t.stream_ops.write) throw new qe.ErrnoError(28);
								t.seekable && 1024 & t.flags && qe.llseek(t, 0, 2);
								var i = "undefined" != typeof a;
								if (!i) a = t.position;
								else if (!t.seekable) throw new qe.ErrnoError(70);
								var d = t.stream_ops.write(t, n, r, o, a, s);
								i || (t.position += d);
								try
								{
									t.path && qe.trackingDelegate.onWriteToFile && qe.trackingDelegate.onWriteToFile(t.path)
								}
								catch (n)
								{
									pe("FS.trackingDelegate['onWriteToFile']('" + t.path + "') threw an exception: " + n.message)
								}
								return d
							},
							allocate: function (e, t, n)
							{
								if (qe.isClosed(e)) throw new qe.ErrnoError(8);
								if (0 > t || 0 >= n) throw new qe.ErrnoError(28);
								if (0 == (2097155 & e.flags)) throw new qe.ErrnoError(8);
								if (!qe.isFile(e.node.mode) && !qe.isDir(e.node.mode)) throw new qe.ErrnoError(43);
								if (!e.stream_ops.allocate) throw new qe.ErrnoError(138);
								e.stream_ops.allocate(e, t, n)
							},
							mmap: function (e, t, n, r, o, a)
							{
								if (0 != (2 & o) && 0 == (2 & a) && 2 != (2097155 & e.flags)) throw new qe.ErrnoError(2);
								if (1 == (2097155 & e.flags)) throw new qe.ErrnoError(2);
								if (!e.stream_ops.mmap) throw new qe.ErrnoError(43);
								return e.stream_ops.mmap(e, t, n, r, o, a)
							},
							msync: function (e, t, n, r, o)
							{
								return e && e.stream_ops.msync ? e.stream_ops.msync(e, t, n, r, o) : 0
							},
							munmap: function ()
							{
								return 0
							},
							ioctl: function (e, t, n)
							{
								if (!e.stream_ops.ioctl) throw new qe.ErrnoError(59);
								return e.stream_ops.ioctl(e, t, n)
							},
							readFile: function (e, t)
							{
								if (t = t ||
									{}, t.flags = t.flags || "r", t.encoding = t.encoding || "binary", "utf8" !== t.encoding && "binary" !== t.encoding) throw new Error("Invalid encoding type \"" + t.encoding + "\"");
								var n, r = qe.open(e, t.flags),
									o = qe.stat(e),
									a = o.size,
									s = new Uint8Array(a);
								return qe.read(r, s, 0, a, 0), "utf8" === t.encoding ? n = p(s, 0) : "binary" === t.encoding && (n = s), qe.close(r), n
							},
							writeFile: function (e, t, n)
							{
								n = n ||
								{}, n.flags = n.flags || "w";
								var r = qe.open(e, n.flags, n.mode);
								if ("string" == typeof t)
								{
									var o = new Uint8Array(c(t) + 1),
										a = m(t, o, 0, o.length);
									qe.write(r, o, 0, a, void 0, n.canOwn)
								}
								else if (ArrayBuffer.isView(t)) qe.write(r, t, 0, t.byteLength, void 0, n.canOwn);
								else throw new Error("Unsupported data type");
								qe.close(r)
							},
							cwd: function ()
							{
								return qe.currentPath
							},
							chdir: function (e)
							{
								var t = qe.lookupPath(e,
								{
									follow: !0
								});
								if (null === t.node) throw new qe.ErrnoError(44);
								if (!qe.isDir(t.node.mode)) throw new qe.ErrnoError(54);
								var n = qe.nodePermissions(t.node, "x");
								if (n) throw new qe.ErrnoError(n);
								qe.currentPath = t.path
							},
							createDefaultDirectories: function ()
							{
								qe.mkdir("/tmp"), qe.mkdir("/home"), qe.mkdir("/home/web_user")
							},
							createDefaultDevices: function ()
							{
								qe.mkdir("/dev"), qe.registerDevice(qe.makedev(1, 3),
								{
									read: function ()
									{
										return 0
									},
									write: function (e, t, n, r)
									{
										return r
									}
								}), qe.mkdev("/dev/null", qe.makedev(1, 3)), Ue.register(qe.makedev(5, 0), Ue.default_tty_ops), Ue.register(qe.makedev(6, 0), Ue.default_tty1_ops), qe.mkdev("/dev/tty", qe.makedev(5, 0)), qe.mkdev("/dev/tty1", qe.makedev(6, 0));
								var e = I();
								qe.createDevice("/dev", "random", e), qe.createDevice("/dev", "urandom", e), qe.mkdir("/dev/shm"), qe.mkdir("/dev/shm/tmp")
							},
							createSpecialDirectories: function ()
							{
								qe.mkdir("/proc"), qe.mkdir("/proc/self"), qe.mkdir("/proc/self/fd"), qe.mount(
								{
									mount: function ()
									{
										var e = qe.createNode("/proc/self", "fd", 16895, 73);
										return e.node_ops = {
											lookup: function (e, t)
											{
												var n = qe.getStream(+t);
												if (!n) throw new qe.ErrnoError(8);
												var r = {
													parent: null,
													mount:
													{
														mountpoint: "fake"
													},
													node_ops:
													{
														readlink: function ()
														{
															return n.path
														}
													}
												};
												return r.parent = r, r
											}
										}, e
									}
								},
								{}, "/proc/self/fd")
							},
							createStandardStreams: function ()
							{
								J.stdin ? qe.createDevice("/dev", "stdin", J.stdin) : qe.symlink("/dev/tty", "/dev/stdin"), J.stdout ? qe.createDevice("/dev", "stdout", null, J.stdout) : qe.symlink("/dev/tty", "/dev/stdout"), J.stderr ? qe.createDevice("/dev", "stderr", null, J.stderr) : qe.symlink("/dev/tty1", "/dev/stderr");
								var e = qe.open("/dev/stdin", "r"),
									t = qe.open("/dev/stdout", "w"),
									n = qe.open("/dev/stderr", "w")
							},
							ensureErrnoError: function ()
							{
								qe.ErrnoError || (qe.ErrnoError = function (e, t)
								{
									this.node = t, this.setErrno = function (e)
									{
										this.errno = e
									}, this.setErrno(e), this.message = "FS error"
								}, qe.ErrnoError.prototype = new Error, qe.ErrnoError.prototype.constructor = qe.ErrnoError, [44].forEach(function (e)
								{
									qe.genericErrors[e] = new qe.ErrnoError(e), qe.genericErrors[e].stack = "<generic error, no stack>"
								}))
							},
							staticInit: function ()
							{
								qe.ensureErrnoError(), qe.nameTable = Array(4096), qe.mount(We,
								{}, "/"), qe.createDefaultDirectories(), qe.createDefaultDevices(), qe.createSpecialDirectories(), qe.filesystems = {
									MEMFS: We
								}
							},
							init: function (e, t, n)
							{
								qe.init.initialized = !0, qe.ensureErrnoError(), J.stdin = e || J.stdin, J.stdout = t || J.stdout, J.stderr = n || J.stderr, qe.createStandardStreams()
							},
							quit: function ()
							{
								qe.init.initialized = !1;
								var e = J._fflush;
								e && e(0);
								for (var t, n = 0; n < qe.streams.length; n++)(t = qe.streams[n], !!t) && qe.close(t)
							},
							getMode: function (e, t)
							{
								var n = 0;
								return e && (n |= 365), t && (n |= 146), n
							},
							findObject: function (e, t)
							{
								var n = qe.analyzePath(e, t);
								return n.exists ? n.object : (O(n.error), null)
							},
							analyzePath: function (e, t)
							{
								try
								{
									var n = qe.lookupPath(e,
									{
										follow: !t
									});
									e = n.path
								}
								catch (t)
								{}
								var r = {
									isRoot: !1,
									exists: !1,
									error: 0,
									name: null,
									path: null,
									object: null,
									parentExists: !1,
									parentPath: null,
									parentObject: null
								};
								try
								{
									var n = qe.lookupPath(e,
									{
										parent: !0
									});
									r.parentExists = !0, r.parentPath = n.path, r.parentObject = n.node, r.name = je.basename(e), n = qe.lookupPath(e,
									{
										follow: !t
									}), r.exists = !0, r.path = n.path, r.object = n.node, r.name = n.node.name, r.isRoot = "/" === n.path
								}
								catch (t)
								{
									r.error = t.errno
								}
								return r
							},
							createPath: function (e, t)
							{
								e = "string" == typeof e ? e : qe.getPath(e);
								for (var n, r = t.split("/").reverse(); r.length;)
									if (n = r.pop(), n)
									{
										var o = je.join2(e, n);
										try
										{
											qe.mkdir(o)
										}
										catch (t)
										{}
										e = o
									} return o
							},
							createFile: function (e, t, n, r, o)
							{
								var a = je.join2("string" == typeof e ? e : qe.getPath(e), t),
									s = qe.getMode(r, o);
								return qe.create(a, s)
							},
							createDataFile: function (e, t, n, r, o, a)
							{
								var s = t ? je.join2("string" == typeof e ? e : qe.getPath(e), t) : e,
									d = qe.getMode(r, o),
									l = qe.create(s, d);
								if (n)
								{
									if ("string" == typeof n)
									{
										for (var p = Array(n.length), _ = 0, m = n.length; _ < m; ++_) p[_] = n.charCodeAt(_);
										n = p
									}
									qe.chmod(l, 146 | d);
									var u = qe.open(l, "w");
									qe.write(u, n, 0, n.length, 0, a), qe.close(u), qe.chmod(l, d)
								}
								return l
							},
							createDevice: function (e, t, n, r)
							{
								var o = je.join2("string" == typeof e ? e : qe.getPath(e), t),
									a = qe.getMode(!!n, !!r);
								qe.createDevice.major || (qe.createDevice.major = 64);
								var s = qe.makedev(qe.createDevice.major++, 0);
								return qe.registerDevice(s,
								{
									open: function (e)
									{
										e.seekable = !1
									},
									close: function ()
									{
										r && r.buffer && r.buffer.length && r(10)
									},
									read: function (e, t, r, o)
									{
										for (var a = 0, s = 0; s < o; s++)
										{
											var d;
											try
											{
												d = n()
											}
											catch (t)
											{
												throw new qe.ErrnoError(29)
											}
											if (void 0 === d && 0 === a) throw new qe.ErrnoError(6);
											if (null === d || void 0 === d) break;
											a++, t[r + s] = d
										}
										return a && (e.node.timestamp = Date.now()), a
									},
									write: function (e, t, n, o)
									{
										for (var a = 0; a < o; a++) try
										{
											r(t[n + a])
										}
										catch (t)
										{
											throw new qe.ErrnoError(29)
										}
										return o && (e.node.timestamp = Date.now()), a
									}
								}), qe.mkdev(o, a, s)
							},
							forceLoadFile: function (e)
							{
								if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
								var t = !0;
								if ("undefined" != typeof XMLHttpRequest) throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
								else if (ee) try
								{
									e.contents = K(ee(e.url), !0), e.usedBytes = e.contents.length
								}
								catch (n)
								{
									t = !1
								}
								else throw new Error("Cannot load without read() or XMLHttpRequest.");
								return t || O(29), t
							},
							createLazyFile: function (e, t, n, r, o)
							{
								function s()
								{
									this.lengthKnown = !1, this.chunks = []
								}
								if (s.prototype.get = function (e)
									{
										if (!(e > this.length - 1 || 0 > e))
										{
											var t = e % this.chunkSize,
												n = 0 | e / this.chunkSize;
											return this.getter(n)[t]
										}
									}, s.prototype.setDataGetter = function (e)
									{
										this.getter = e
									}, s.prototype.cacheLength = function ()
									{
										var e = new XMLHttpRequest;
										if (e.open("HEAD", n, !1), e.send(null), !(200 <= e.status && 300 > e.status || 304 === e.status)) throw new Error("Couldn't load " + n + ". Status: " + e.status);
										var t, r = +e.getResponseHeader("Content-length"),
											o = (t = e.getResponseHeader("Accept-Ranges")) && "bytes" === t,
											s = (t = e.getResponseHeader("Content-Encoding")) && "gzip" === t,
											i = 1048576;
										o || (i = r);
										var d = function (e, t)
											{
												if (e > t) throw new Error("invalid range (" + e + ", " + t + ") or no bytes requested!");
												if (t > r - 1) throw new Error("only " + r + " bytes available! programmer error!");
												var o = new XMLHttpRequest;
												if (o.open("GET", n, !1), r !== i && o.setRequestHeader("Range", "bytes=" + e + "-" + t), "undefined" != typeof Uint8Array && (o.responseType = "arraybuffer"), o.overrideMimeType && o.overrideMimeType("text/plain; charset=x-user-defined"), o.send(null), !(200 <= o.status && 300 > o.status || 304 === o.status)) throw new Error("Couldn't load " + n + ". Status: " + o.status);
												return void 0 === o.response ? K(o.responseText || "", !0) : new Uint8Array(o.response || [])
											},
											l = this;
										l.setDataGetter(function (e)
										{
											var t = e * i,
												n = (e + 1) * i - 1;
											if (n = a(n, r - 1), "undefined" == typeof l.chunks[e] && (l.chunks[e] = d(t, n)), "undefined" == typeof l.chunks[e]) throw new Error("doXHR failed!");
											return l.chunks[e]
										}), (s || !r) && (i = r = 1, r = this.getter(0).length, i = r, le("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = r, this._chunkSize = i, this.lengthKnown = !0
									}, "undefined" != typeof XMLHttpRequest)
								{
									if (!ie) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
									var i = new s;
									Object.defineProperties(i,
									{
										length:
										{
											get: function ()
											{
												return this.lengthKnown || this.cacheLength(), this._length
											}
										},
										chunkSize:
										{
											get: function ()
											{
												return this.lengthKnown || this.cacheLength(), this._chunkSize
											}
										}
									});
									var d = {
										isDevice: !1,
										contents: i
									}
								}
								else var d = {
									isDevice: !1,
									url: n
								};
								var l = qe.createFile(e, t, d, r, o);
								d.contents ? l.contents = d.contents : d.url && (l.contents = null, l.url = d.url), Object.defineProperties(l,
								{
									usedBytes:
									{
										get: function ()
										{
											return this.contents.length
										}
									}
								});
								var p = {},
									_ = Object.keys(l.stream_ops);
								return _.forEach(function (e)
								{
									var t = l.stream_ops[e];
									p[e] = function ()
									{
										if (!qe.forceLoadFile(l)) throw new qe.ErrnoError(29);
										return t.apply(null, arguments)
									}
								}), p.read = function (e, t, n, r, o)
								{
									if (!qe.forceLoadFile(l)) throw new qe.ErrnoError(29);
									var s = e.node.contents;
									if (o >= s.length) return 0;
									var d = a(s.length - o, r);
									if (s.slice)
										for (var p = 0; p < d; p++) t[n + p] = s[o + p];
									else
										for (var p = 0; p < d; p++) t[n + p] = s.get(o + p);
									return d
								}, l.stream_ops = p, l
							},
							createPreloadedFile: function (e, t, n, r, o, a, s, i, d, l)
							{
								function p(n)
								{
									function p(n)
									{
										l && l(), i || qe.createDataFile(e, t, n, r, o, d), a && a(), D(m)
									}
									var u = !1;
									J.preloadPlugins.forEach(function (e)
									{
										u || e.canHandle(_) && (e.handle(n, _, p, function ()
										{
											s && s(), D(m)
										}), u = !0)
									}), u || p(n)
								}
								Browser.init();
								var _ = t ? He.resolve(je.join2(e, t)) : e,
									m = C("cp " + _);
								F(m), "string" == typeof n ? Browser.asyncLoad(n, function (e)
								{
									p(e)
								}, s) : p(n)
							},
							indexedDB: function ()
							{
								return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
							},
							DB_NAME: function ()
							{
								return "EM_FS_" + window.location.pathname
							},
							DB_VERSION: 20,
							DB_STORE_NAME: "FILE_DATA",
							saveFilesToDB: function (e, t, n)
							{
								t = t || function () {}, n = n || function () {};
								var r = qe.indexedDB();
								try
								{
									var o = r.open(qe.DB_NAME(), qe.DB_VERSION)
								}
								catch (t)
								{
									return n(t)
								}
								o.onupgradeneeded = function ()
								{
									le("creating db");
									var e = o.result;
									e.createObjectStore(qe.DB_STORE_NAME)
								}, o.onsuccess = function ()
								{
									function r()
									{
										0 == l ? t() : n()
									}
									var a = o.result,
										s = a.transaction([qe.DB_STORE_NAME], "readwrite"),
										i = s.objectStore(qe.DB_STORE_NAME),
										d = 0,
										l = 0,
										p = e.length;
									e.forEach(function (e)
									{
										var t = i.put(qe.analyzePath(e).object.contents, e);
										t.onsuccess = function ()
										{
											d++, d + l == p && r()
										}, t.onerror = function ()
										{
											l++, d + l == p && r()
										}
									}), s.onerror = n
								}, o.onerror = n
							},
							loadFilesFromDB: function (e, t, n)
							{
								t = t || function () {}, n = n || function () {};
								var r = qe.indexedDB();
								try
								{
									var o = r.open(qe.DB_NAME(), qe.DB_VERSION)
								}
								catch (t)
								{
									return n(t)
								}
								o.onupgradeneeded = n, o.onsuccess = function ()
								{
									function r()
									{
										0 == l ? t() : n()
									}
									var a = o.result;
									try
									{
										var s = a.transaction([qe.DB_STORE_NAME], "readonly")
									}
									catch (t)
									{
										return void n(t)
									}
									var i = s.objectStore(qe.DB_STORE_NAME),
										d = 0,
										l = 0,
										p = e.length;
									e.forEach(function (e)
									{
										var t = i.get(e);
										t.onsuccess = function ()
										{
											qe.analyzePath(e).exists && qe.unlink(e), qe.createDataFile(je.dirname(e), je.basename(e), t.result, !0, !0, !0), d++, d + l == p && r()
										}, t.onerror = function ()
										{
											l++, d + l == p && r()
										}
									}), s.onerror = n
								}, o.onerror = n
							}
						},
						Ge = {
							mappings:
							{},
							DEFAULT_POLLMASK: 5,
							umask: 511,
							calculateAt: function (e, t)
							{
								if ("/" !== t[0])
								{
									var n;
									if (-100 === e) n = qe.cwd();
									else
									{
										var r = qe.getStream(e);
										if (!r) throw new qe.ErrnoError(8);
										n = r.path
									}
									t = je.join2(n, t)
								}
								return t
							},
							doStat: function (n, r, o)
							{
								try
								{
									var i = n(r)
								}
								catch (t)
								{
									if (t && t.node && je.normalize(r) !== je.normalize(qe.getPath(t.node))) return -54;
									throw t
								}
								return be[o >> 2] = i.dev, be[o + 4 >> 2] = 0, be[o + 8 >> 2] = i.ino, be[o + 12 >> 2] = i.mode, be[o + 16 >> 2] = i.nlink, be[o + 20 >> 2] = i.uid, be[o + 24 >> 2] = i.gid, be[o + 28 >> 2] = i.rdev, be[o + 32 >> 2] = 0, ze = [i.size >>> 0, (Ne = i.size, 1 <= +t(Ne) ? 0 < Ne ? (0 | a(+e(Ne / 4294967296), 4294967295)) >>> 0 : ~~+s((Ne - +(~~Ne >>> 0)) / 4294967296) >>> 0 : 0)], be[o + 40 >> 2] = ze[0], be[o + 44 >> 2] = ze[1], be[o + 48 >> 2] = 4096, be[o + 52 >> 2] = i.blocks, be[o + 56 >> 2] = 0 | i.atime.getTime() / 1e3, be[o + 60 >> 2] = 0, be[o + 64 >> 2] = 0 | i.mtime.getTime() / 1e3, be[o + 68 >> 2] = 0, be[o + 72 >> 2] = 0 | i.ctime.getTime() / 1e3, be[o + 76 >> 2] = 0, ze = [i.ino >>> 0, (Ne = i.ino, 1 <= +t(Ne) ? 0 < Ne ? (0 | a(+e(Ne / 4294967296), 4294967295)) >>> 0 : ~~+s((Ne - +(~~Ne >>> 0)) / 4294967296) >>> 0 : 0)], be[o + 80 >> 2] = ze[0], be[o + 84 >> 2] = ze[1], 0
							},
							doMsync: function (e, t, n, r, o)
							{
								var a = fe.slice(e, e + n);
								qe.msync(t, a, o, n, r)
							},
							doMkdir: function (e, t)
							{
								return e = je.normalize(e), "/" === e[e.length - 1] && (e = e.substr(0, e.length - 1)), qe.mkdir(e, t, 0), 0
							},
							doMknod: function (e, t, n)
							{
								switch (61440 & t)
								{
								case 32768:
								case 8192:
								case 24576:
								case 4096:
								case 49152:
									break;
								default:
									return -28;
								}
								return qe.mknod(e, t, n), 0
							},
							doReadlink: function (e, t, n)
							{
								if (0 >= n) return -28;
								var r = qe.readlink(e),
									o = a(n, c(r)),
									s = he[t + o];
								return u(r, t, n + 1), he[t + o] = s, o
							},
							doAccess: function (e, t)
							{
								if (-8 & t) return -28;
								var n, r = qe.lookupPath(e,
								{
									follow: !0
								});
								if (n = r.node, !n) return -44;
								var o = "";
								return 4 & t && (o += "r"), 2 & t && (o += "w"), 1 & t && (o += "x"), o && qe.nodePermissions(n, o) ? -2 : 0
							},
							doDup: function (e, t, n)
							{
								var r = qe.getStream(n);
								return r && qe.close(r), qe.open(e, t, 0, n, n).fd
							},
							doReadv: function (e, t, n, r)
							{
								for (var o = 0, a = 0; a < n; a++)
								{
									var s = be[t + 8 * a >> 2],
										d = be[t + (8 * a + 4) >> 2],
										l = qe.read(e, he, s, d, r);
									if (0 > l) return -1;
									if (o += l, l < d) break
								}
								return o
							},
							doWritev: function (e, t, n, r)
							{
								for (var o = 0, a = 0; a < n; a++)
								{
									var s = be[t + 8 * a >> 2],
										d = be[t + (8 * a + 4) >> 2],
										l = qe.write(e, he, s, d, r);
									if (0 > l) return -1;
									o += l
								}
								return o
							},
							varargs: void 0,
							get: function ()
							{
								Ge.varargs += 4;
								var e = be[Ge.varargs - 4 >> 2];
								return e
							},
							getStr: function (e)
							{
								var t = _(e);
								return t
							},
							getStreamFromFD: function (e)
							{
								var t = qe.getStream(e);
								if (!t) throw new qe.ErrnoError(8);
								return t
							},
							get64: function (e)
							{
								return e
							}
						},
						Ve = function (e, t, n, r)
						{
							e || (e = this), this.parent = e, this.mount = e.mount, this.mounted = null, this.id = qe.nextInode++, this.name = t, this.mode = n, this.node_ops = {}, this.stream_ops = {}, this.rdev = r
						},
						Ke = 365,
						Xe = 146;
					Object.defineProperties(Ve.prototype,
					{
						read:
						{
							get: function ()
							{
								return (this.mode & Ke) === Ke
							},
							set: function (e)
							{
								e ? this.mode |= Ke : this.mode &= ~Ke
							}
						},
						write:
						{
							get: function ()
							{
								return (this.mode & Xe) === Xe
							},
							set: function (e)
							{
								e ? this.mode |= Xe : this.mode &= ~Xe
							}
						},
						isFolder:
						{
							get: function ()
							{
								return qe.isDir(this.mode)
							}
						},
						isDevice:
						{
							get: function ()
							{
								return qe.isChrdev(this.mode)
							}
						}
					}), qe.FSNode = Ve, qe.staticInit(), J.FS_createPath = qe.createPath, J.FS_createDataFile = qe.createDataFile, J.FS_createPreloadedFile = qe.createPreloadedFile, J.FS_createLazyFile = qe.createLazyFile, J.FS_createDevice = qe.createDevice, J.FS_unlink = qe.unlink, xe.push(
					{
						func: function ()
						{
							Je()
						}
					});
					var Ye = {
							c: z,
							i: j,
							j: function (e, t, n)
							{
								Ge.varargs = n;
								try
								{
									var r = Ge.getStr(e),
										o = Ge.get(),
										a = qe.open(r, t, o);
									return a.fd
								}
								catch (t)
								{
									return "undefined" != typeof qe && t instanceof qe.ErrnoError || w(t), -t.errno
								}
							},
							f: H,
							g: function (e)
							{
								e >>>= 0;
								var t = U(),
									n = 2147483648;
								if (e > n) return !1;
								for (var r, s = 1; 4 >= s; s *= 2)
								{
									r = t * (1 + .2 / s), r = a(r, e + 100663296);
									var i = a(n, g(o(16777216, e, r), 65536)),
										d = W(i);
									if (d) return !0
								}
								return !1
							},
							d: function (e)
							{
								try
								{
									var t = Ge.getStreamFromFD(e);
									return qe.close(t), 0
								}
								catch (t)
								{
									return "undefined" != typeof qe && t instanceof qe.ErrnoError || w(t), t.errno
								}
							},
							h: q,
							e: G,
							b: V,
							a: ue
						},
						$e = function ()
						{
							function e(e)
							{
								var t = e.exports;
								J.asm = t, ce = J.asm.k, D("wasm-instantiate")
							}

							function t(t)
							{
								e(t.instance)
							}

							function n(e)
							{
								return x().then(function (e)
								{
									return WebAssembly.instantiate(e, o)
								}).then(e, function (e)
								{
									pe("failed to asynchronously prepare wasm: " + e), w(e)
								})
							}

							function r()
							{
								return _e || "function" != typeof WebAssembly.instantiateStreaming || P(Ie) || "function" != typeof fetch ? n(t) : void fetch(Ie,
								{
									credentials: "same-origin"
								}).then(function (e)
								{
									var r = WebAssembly.instantiateStreaming(e, o);
									return r.then(t, function (e)
									{
										return pe("wasm streaming compile failed: " + e), pe("falling back to ArrayBuffer instantiation"), n(t)
									})
								})
							}
							var o = {
								a: Ye
							};
							if (F("wasm-instantiate"), J.instantiateWasm) try
							{
								var a = J.instantiateWasm(o, e);
								return a
							}
							catch (t)
							{
								return pe("Module.instantiateWasm callback failed with error: " + t), !1
							}
							return r(),
							{}
						}(),
						Je = J.___wasm_call_ctors = function ()
						{
							return (Je = J.___wasm_call_ctors = J.asm.l).apply(null, arguments)
						},
						Qe = J._malloc = function ()
						{
							return (Qe = J._malloc = J.asm.m).apply(null, arguments)
						},
						Ze = J._free = function ()
						{
							return (Ze = J._free = J.asm.n).apply(null, arguments)
						},
						et = J._mid_song_start = function ()
						{
							return (et = J._mid_song_start = J.asm.o).apply(null, arguments)
						},
						tt = J._mid_song_seek = function ()
						{
							return (tt = J._mid_song_seek = J.asm.p).apply(null, arguments)
						},
						nt = J._mid_song_get_total_time = function ()
						{
							return (nt = J._mid_song_get_total_time = J.asm.q).apply(null, arguments)
						},
						rt = J._mid_song_get_time = function ()
						{
							return (rt = J._mid_song_get_time = J.asm.r).apply(null, arguments)
						},
						ot = J._mid_song_read_wave = function ()
						{
							return (ot = J._mid_song_read_wave = J.asm.s).apply(null, arguments)
						},
						at = J._mid_istream_open_mem = function ()
						{
							return (at = J._mid_istream_open_mem = J.asm.t).apply(null, arguments)
						},
						st = J._mid_istream_close = function ()
						{
							return (st = J._mid_istream_close = J.asm.u).apply(null, arguments)
						},
						it = J._mid_exit = function ()
						{
							return (it = J._mid_exit = J.asm.v).apply(null, arguments)
						},
						dt = J._mid_init = function ()
						{
							return (dt = J._mid_init = J.asm.w).apply(null, arguments)
						},
						lt = J._mid_song_load = function ()
						{
							return (lt = J._mid_song_load = J.asm.x).apply(null, arguments)
						},
						pt = J._mid_song_free = function ()
						{
							return (pt = J._mid_song_free = J.asm.y).apply(null, arguments)
						},
						_t = J._mid_alloc_options = function ()
						{
							return (_t = J._mid_alloc_options = J.asm.z).apply(null, arguments)
						},
						mt = J._mid_get_load_request_count = function ()
						{
							return (mt = J._mid_get_load_request_count = J.asm.A).apply(null, arguments)
						},
						ut = J._mid_get_load_request = function ()
						{
							return (ut = J._mid_get_load_request = J.asm.B).apply(null, arguments)
						},
						ct = J.___errno_location = function ()
						{
							return (ct = J.___errno_location = J.asm.C).apply(null, arguments)
						};
					J.UTF8ToString = _, J.addRunDependency = F, J.removeRunDependency = D, J.FS_createPath = qe.createPath, J.FS_createDataFile = qe.createDataFile, J.FS_createPreloadedFile = qe.createPreloadedFile, J.FS_createLazyFile = qe.createLazyFile, J.FS_createDevice = qe.createDevice, J.FS_unlink = qe.unlink, J.FS = qe;
					var gt;
					if (Oe = function e()
						{
							gt || X(), gt || (Oe = e)
						}, J.run = X, J.preInit)
						for ("function" == typeof J.preInit && (J.preInit = [J.preInit]); 0 < J.preInit.length;) J.preInit.pop()();
					return me = !0, X(), r.ready
				}
			}();
			"object" == typeof a && "object" == typeof o ? o.exports = s : "function" == typeof n && n.amd ? n([], function ()
			{
				return s
			}) : "object" == typeof a && (a.LibTimidity = s)
		},
		{}],
		9: [function (e, t, r)
		{
			(function (e, o)
			{
				"object" == typeof r && "undefined" != typeof t ? t.exports = o() : "function" == typeof n && n.amd ? n(o) : e.whenDomReady = o()
			})(this, function ()
			{
				"use strict";
				var e = ["interactive", "complete"],
					t = function (t, n)
					{
						return new Promise(function (r)
						{
							t && "function" != typeof t && (n = t, t = null), n = n || window.document;
							var o = function ()
							{
								return r(void(t && setTimeout(t)))
							}; - 1 === e.indexOf(n.readyState) ? n.addEventListener("DOMContentLoaded", o) : o()
						})
					};
				return t.resume = function (e)
				{
					return function (n)
					{
						return t(e).then(function ()
						{
							return n
						})
					}
				}, t
			})
		},
		{}],
		"/": [function (e, t)
		{
			const n = e("debug")("bg-sound"),
				r = e("timidity"),
				o = e("insert-css"),
				a = e("when-dom-ready");
			class s extends HTMLElement
			{
				static get observedAttributes()
				{
					return ["src", "baseUrl", "loop"]
				}
				constructor()
				{
					super(), this._playingFired = !1, this._onClick = this._onClick.bind(this), this._onPlaying = this._onPlaying.bind(this), this._onEnded = this._onEnded.bind(this)
				}
				connectedCallback()
				{
					document.addEventListener("click", this._onClick), this.hasAttribute("baseUrl") || this.setAttribute("baseUrl", "https://zoomten.github.io/dgguspat/"), this.hasAttribute("loop") || this.setAttribute("loop", 1), this.playCount = 0, this._initPlayer()
				}
				disconnectedCallback()
				{
					document.removeEventListener("click", this._onClick), this._destroyPlayer()
				}
				get src()
				{
					return this.getAttribute("src")
				}
				set src(e)
				{
					this.setAttribute("src", e)
				}
				get loop()
				{
					return this.getAttribute("loop")
				}
				set loop(e)
				{
					this.setAttribute("loop", e)
				}
				get baseUrl()
				{
					return this.getAttribute("baseUrl")
				}
				set baseUrl(e)
				{
					this.setAttribute("baseUrl", e)
				}
				attributeChangedCallback(e, t, r)
				{
					n(`${e} changed from ${t} to ${r}`), "src" === e, "baseUrl" === e
				}
				_initPlayer()
				{
					this.player = new r(this.baseUrl), this.player.once("playing", this._onPlaying), this.player.once("ended", this._onEnded), this.player.load(this.src), this.player.play()
				}
				_destroyPlayer()
				{
					this.player.pause(), this.player.destroy(), this.player.removeListener("playing", this._onPlaying), this.player.removeListener("ended", this._onEnded), this.player = null
				}
				_onPlaying()
				{
					this._playingFired = !0
				}
				_onEnded()
				{
					this._destroyPlayer(), this.playCount += 1;
					const e = (this.loop + "").toLowerCase();
					("infinite" === e || "true" === e || "-1" === e || +this.loop > this.playCount) && this._initPlayer()
				}
				_onClick()
				{
					this._playingFired || this.player.play()
				}
			}
			window.customElements.define("bg-sound", s), t.exports = s, t.exports.enableCompatMode = function (e = {})
			{
				o(`
    embed {
      display: none;
    }
  `), a().then(() =>
				{
					const t = [...document.querySelectorAll("embed"), ...document.querySelectorAll("bgsound")];
					t.forEach(t =>
					{
						let n = t.getAttribute("src");
						const r = t.getAttribute("loop");
						if (t.remove(), n = new URL(n, window.location.href).href, console.log(n), !!n)
						{
							if (n.endsWith(".mid") || n.endsWith(".midi"))
							{
								const t = document.createElement("bg-sound");
								t.setAttribute("src", n), r && t.setAttribute("loop", r), e.baseUrl && t.setAttribute("baseUrl", e.baseUrl), document.body.appendChild(t)
							}
							if (n.endsWith(".wav"))
							{
								const e = document.createElement("audio");
								e.src = n, e.controls = !1, e.autoplay = !0, r && ("infinite" === r.toLowerCase() || "true" === r || "-1" === r || 2 <= +r) && (e.loop = !0);
								let t = !1;
								e.addEventListener("playing", () =>
								{
									t = !0
								}), document.body.addEventListener("click", () =>
								{
									t || e.play()
								}), document.body.appendChild(e)
							}
						}
					})
				})
			}
		},
		{
			debug: 1,
			"insert-css": 4,
			timidity: 7,
			"when-dom-ready": 9
		}]
	},
	{}, [])("/")
});
