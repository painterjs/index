var t = {
    563: (t, e) => {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = function t(e) {
          e = e.trim();
          for (var r = new Array(), s = '+', i = '', o = e.length, n = 0; n < o; ++n) {
            if ('.' === e[n] || (!isNaN(Number(e[n])) && ' ' !== e[n])) i += e[n];
            else if ('(' === e[n]) {
              for (var a = 1, c = n; a > 0; ) '(' === e[(c += 1)] && (a += 1), ')' === e[c] && (a -= 1);
              (i = '' + t(e.slice(n + 1, c))), (n = c);
            }
            if ((isNaN(Number(e[n])) && '.' !== e[n]) || n === o - 1) {
              var h = parseFloat(i);
              switch (s) {
                case '+':
                  r.push(h);
                  break;
                case '-':
                  r.push(-h);
                  break;
                case '*':
                  r.push(r.pop() * h);
                  break;
                case '/':
                  r.push(r.pop() / h);
              }
              (s = e[n]), (i = '');
            }
          }
          for (var l = 0; r.length; ) l += r.pop();
          return l;
        });
    },
    834: (t, e) => {
      function r(t) {
        for (var e = [], r = [], s = 0, i = t.substring(0, t.length - 1).split('%,'); s < i.length; s++) {
          var o = i[s];
          e.push(o.substring(0, o.lastIndexOf(' ')).trim()), r.push(parseInt(o.slice(o.lastIndexOf(' '))) / 100);
        }
        return { colors: e, percents: r };
      }
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.doGradient = e.isGradient = void 0),
        (e.isGradient = function (t) {
          return !(!t || (!t.startsWith('linear') && !t.startsWith('radial')));
        }),
        (e.doGradient = function (t, e, s, i) {
          t.startsWith('linear')
            ? (function (t, e, s, i) {
                var o = (function (t, e, r) {
                    var s,
                      i = t.match(/([-]?\d{1,3})deg/),
                      o = i && i[1] ? parseFloat(i[1]) : 0;
                    switch (o) {
                      case 0:
                        s = [0, -r / 2, 0, r / 2];
                        break;
                      case 90:
                        s = [e / 2, 0, -e / 2, 0];
                        break;
                      case -90:
                        s = [-e / 2, 0, e / 2, 0];
                        break;
                      case 180:
                        s = [0, r / 2, 0, -r / 2];
                        break;
                      case -180:
                        s = [0, -r / 2, 0, r / 2];
                        break;
                      default:
                        var n = 0,
                          a = 0,
                          c = 0,
                          h = 0;
                        o > 0 && o < 90
                          ? ((c = -(n =
                              e / 2 -
                              (((e / 2) * Math.tan(((90 - o) * Math.PI * 2) / 360) - r / 2) *
                                Math.sin((2 * (90 - o) * Math.PI * 2) / 360)) /
                                2)),
                            (a = -(h = Math.tan(((90 - o) * Math.PI * 2) / 360) * n)))
                          : o > -180 && o < -90
                          ? ((c = -(n =
                              -e / 2 +
                              (((e / 2) * Math.tan(((90 - o) * Math.PI * 2) / 360) - r / 2) *
                                Math.sin((2 * (90 - o) * Math.PI * 2) / 360)) /
                                2)),
                            (a = -(h = Math.tan(((90 - o) * Math.PI * 2) / 360) * n)))
                          : o > 90 && o < 180
                          ? ((c = -(n =
                              e / 2 +
                              (((-e / 2) * Math.tan(((90 - o) * Math.PI * 2) / 360) - r / 2) *
                                Math.sin((2 * (90 - o) * Math.PI * 2) / 360)) /
                                2)),
                            (a = -(h = Math.tan(((90 - o) * Math.PI * 2) / 360) * n)))
                          : ((c = -(n =
                              -e / 2 -
                              (((-e / 2) * Math.tan(((90 - o) * Math.PI * 2) / 360) - r / 2) *
                                Math.sin((2 * (90 - o) * Math.PI * 2) / 360)) /
                                2)),
                            (a = -(h = Math.tan(((90 - o) * Math.PI * 2) / 360) * n))),
                          (s = [n, a, c, h]);
                    }
                    return s;
                  })(s, t, e),
                  n = i.createLinearGradient(o[0], o[1], o[2], o[3]),
                  a = s.match(/linear-gradient\((.+)\)/);
                if (a) {
                  for (var c = a[1], h = r(c.substring(c.indexOf(',') + 1)), l = 0; l < h.colors.length; l++)
                    n.addColorStop(h.percents[l], h.colors[l]);
                  i.fillStyle = n;
                }
              })(e, s, t, i)
            : t.startsWith('radial') &&
              (function (t, e, s, i) {
                var o = s.match(/radial-gradient\((.+)\)/);
                if (o) {
                  for (
                    var n = r(o[1]), a = i.createRadialGradient(0, 0, 0, 0, 0, t < e ? e / 2 : t / 2), c = 0;
                    c < n.colors.length;
                    c++
                  )
                    a.addColorStop(n.percents[c], n.colors[c]);
                  i.fillStyle = a;
                }
              })(e, s, t, i);
        });
    },
    779: function (t, e, r) {
      var s =
          (this && this.__assign) ||
          function () {
            return (s =
              Object.assign ||
              function (t) {
                for (var e, r = 1, s = arguments.length; r < s; r++)
                  for (var i in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
              }).apply(this, arguments);
          },
        i =
          (this && this.__awaiter) ||
          function (t, e, r, s) {
            return new (r || (r = Promise))(function (i, o) {
              function n(t) {
                try {
                  c(s.next(t));
                } catch (t) {
                  o(t);
                }
              }
              function a(t) {
                try {
                  c(s.throw(t));
                } catch (t) {
                  o(t);
                }
              }
              function c(t) {
                var e;
                t.done
                  ? i(t.value)
                  : ((e = t.value),
                    e instanceof r
                      ? e
                      : new r(function (t) {
                          t(e);
                        })).then(n, a);
              }
              c((s = s.apply(t, e || [])).next());
            });
          },
        o =
          (this && this.__generator) ||
          function (t, e) {
            var r,
              s,
              i,
              o,
              n = {
                label: 0,
                sent: function () {
                  if (1 & i[0]) throw i[1];
                  return i[1];
                },
                trys: [],
                ops: [],
              };
            return (
              (o = { next: a(0), throw: a(1), return: a(2) }),
              'function' == typeof Symbol &&
                (o[Symbol.iterator] = function () {
                  return this;
                }),
              o
            );
            function a(o) {
              return function (a) {
                return (function (o) {
                  if (r) throw new TypeError('Generator is already executing.');
                  for (; n; )
                    try {
                      if (
                        ((r = 1),
                        s &&
                          (i = 2 & o[0] ? s.return : o[0] ? s.throw || ((i = s.return) && i.call(s), 0) : s.next) &&
                          !(i = i.call(s, o[1])).done)
                      )
                        return i;
                      switch (((s = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                        case 0:
                        case 1:
                          i = o;
                          break;
                        case 4:
                          return n.label++, { value: o[1], done: !1 };
                        case 5:
                          n.label++, (s = o[1]), (o = [0]);
                          continue;
                        case 7:
                          (o = n.ops.pop()), n.trys.pop();
                          continue;
                        default:
                          if (!((i = (i = n.trys).length > 0 && i[i.length - 1]) || (6 !== o[0] && 2 !== o[0]))) {
                            n = 0;
                            continue;
                          }
                          if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                            n.label = o[1];
                            break;
                          }
                          if (6 === o[0] && n.label < i[1]) {
                            (n.label = i[1]), (i = o);
                            break;
                          }
                          if (i && n.label < i[2]) {
                            (n.label = i[2]), n.ops.push(o);
                            break;
                          }
                          i[2] && n.ops.pop(), n.trys.pop();
                          continue;
                      }
                      o = e.call(t, n);
                    } catch (t) {
                      (o = [6, t]), (s = 0);
                    } finally {
                      r = i = 0;
                    }
                  if (5 & o[0]) throw o[1];
                  return { value: o[0] ? o[1] : void 0, done: !0 };
                })([o, a]);
              };
            }
          };
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.Pen = e.clearPenCache = e.penCache = void 0);
      var n = r(536),
        a = r(834),
        c = r(593);
      (e.penCache = { viewRect: {}, textLines: {} }),
        (e.clearPenCache = function (t) {
          t
            ? ((e.penCache.viewRect[t] = null), (e.penCache.textLines[t] = null))
            : ((e.penCache.viewRect = {}), (e.penCache.textLines = {}));
        });
      var h = (function () {
        function t(t, e) {
          (this.ctx = t), (this.data = e), (this.ctx = t), (this.data = e), (this.style = { width: 0, height: 0 });
        }
        return (
          (t.prototype.paint = function (t) {
            return i(this, void 0, void 0, function () {
              var e, r, s;
              return o(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (this.style = { width: c.toPx(this.data.width), height: c.toPx(this.data.height) }),
                      [4, this._background()]
                    );
                  case 1:
                    i.sent(), (e = 0), (r = this.data.views), (i.label = 2);
                  case 2:
                    return e < r.length ? ((s = r[e]), [4, this._drawAbsolute(s)]) : [3, 5];
                  case 3:
                    i.sent(), (i.label = 4);
                  case 4:
                    return e++, [3, 2];
                  case 5:
                    return t && t(), [2];
                }
              });
            });
          }),
          (t.prototype._background = function () {
            return i(this, void 0, void 0, function () {
              var t, e, r, s, i;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      this.ctx.save(),
                      (t = this.style),
                      (e = t.width),
                      (r = t.height),
                      (s = this.data.background),
                      this.ctx.translate(e / 2, r / 2),
                      this._doClip(this.data.borderRadius, e, r),
                      s
                        ? [3, 1]
                        : ((this.ctx.fillStyle = 'transparent'), this.ctx.fillRect(-e / 2, -r / 2, e, r), [3, 5])
                    );
                  case 1:
                    return s.startsWith('#') || s.startsWith('rgba') || 'transparent' === s.toLowerCase()
                      ? ((this.ctx.fillStyle = s), this.ctx.fillRect(-e / 2, -r / 2, e, r), [3, 5])
                      : [3, 2];
                  case 2:
                    return a.isGradient(s)
                      ? (a.doGradient(s, e, r, this.ctx), this.ctx.fillRect(-e / 2, -r / 2, e, r), [3, 5])
                      : [3, 3];
                  case 3:
                    return [4, c.injection.loadImage(s)];
                  case 4:
                    (i = o.sent().img) && this.ctx.drawImage(i, -e / 2, -r / 2, e, r), (o.label = 5);
                  case 5:
                    return this.ctx.restore(), [2];
                }
              });
            });
          }),
          (t.prototype._drawAbsolute = function (t) {
            var r = this;
            return new Promise(function (n) {
              return i(r, void 0, void 0, function () {
                var r;
                return o(this, function (i) {
                  switch (i.label) {
                    case 0:
                      if (!t || !t.type) return [2];
                      switch ((Array.isArray(t.css) && (t.css = Object.assign.apply(Object, t.css)), t.type)) {
                        case 'image':
                          return [3, 1];
                        case 'text':
                          return [3, 3];
                        case 'rect':
                          return [3, 5];
                        case 'qrcode':
                          return [3, 7];
                      }
                      return [3, 9];
                    case 1:
                      return [4, this._drawAbsImage(t)];
                    case 2:
                      return i.sent(), [3, 13];
                    case 3:
                      return [4, this._fillAbsText(t)];
                    case 4:
                      return i.sent(), [3, 13];
                    case 5:
                      return [4, this._drawAbsRect(t)];
                    case 6:
                      return i.sent(), [3, 13];
                    case 7:
                      return [4, this._drawQRCode(t)];
                    case 8:
                      return i.sent(), [3, 13];
                    case 9:
                      return c.injection.customActions[t.type]
                        ? ((r = c.injection.customActions[t.type].layout(
                            t,
                            JSON.parse(JSON.stringify(e.penCache.viewRect || {})),
                          )),
                          (t.rect = s(s({}, r), { height: r.bottom - r.top, width: r.right - r.left })),
                          t.id && (e.penCache.viewRect[t.id] = JSON.parse(JSON.stringify(t.rect))),
                          this.ctx.save(),
                          [4, c.injection.customActions[t.type].draw(t, this.ctx)])
                        : [3, 11];
                    case 10:
                      return i.sent(), this.ctx.restore(), [3, 12];
                    case 11:
                      console.log('ignore', t.type), (i.label = 12);
                    case 12:
                      return [3, 13];
                    case 13:
                      return n(), [2];
                  }
                });
              });
            });
          }),
          (t.prototype._border = function (t) {
            var e = t.borderRadius,
              r = void 0 === e ? 0 : e,
              s = t.width,
              i = t.height,
              o = t.borderWidth,
              n = void 0 === o ? 0 : o,
              a = t.borderStyle,
              h = void 0 === a ? 'solid' : a,
              l = 0,
              d = 0,
              f = 0,
              u = 0,
              x = Math.min(s, i);
            if (r)
              if ('string' == typeof r) {
                var p = r.split(/\s+/);
                4 === p.length
                  ? ((l = Math.min(c.toPx(p[0], x), s / 2, i / 2)),
                    (d = Math.min(c.toPx(p[1], x), s / 2, i / 2)),
                    (f = Math.min(c.toPx(p[2], x), s / 2, i / 2)),
                    (u = Math.min(c.toPx(p[3], x), s / 2, i / 2)))
                  : (l = d = f = u = Math.min(c.toPx(p[0], x), s / 2, i / 2));
              } else l = d = f = u = Math.min(c.toPx(r), s / 2, i / 2);
            var g = n ? c.toPx(n, x) : 0;
            (this.ctx.lineWidth = g),
              'dashed' === h
                ? this.ctx.setLineDash([(4 * g) / 3, (4 * g) / 3])
                : 'dotted' === h && this.ctx.setLineDash([g, g]);
            var v = 'solid' !== h;
            this.ctx.beginPath(),
              v && 0 === l && this.ctx.moveTo(-s / 2 - g, -i / 2 - g / 2),
              0 !== l && this.ctx.arc(-s / 2 + l, -i / 2 + l, l + g / 2, 1 * Math.PI, 1.5 * Math.PI),
              this.ctx.lineTo(0 === d ? (v ? s / 2 : s / 2 + g / 2) : s / 2 - d, -i / 2 - g / 2),
              v && 0 === d && this.ctx.moveTo(s / 2 + g / 2, -i / 2 - g),
              0 !== d && this.ctx.arc(s / 2 - d, -i / 2 + d, d + g / 2, 1.5 * Math.PI, 2 * Math.PI),
              this.ctx.lineTo(s / 2 + g / 2, 0 === f ? (v ? i / 2 : i / 2 + g / 2) : i / 2 - f),
              v && 0 === f && this.ctx.moveTo(s / 2 + g, i / 2 + g / 2),
              0 !== f && this.ctx.arc(s / 2 - f, i / 2 - f, f + g / 2, 0, 0.5 * Math.PI),
              this.ctx.lineTo(0 === u ? (v ? -s / 2 : -s / 2 - g / 2) : -s / 2 + u, i / 2 + g / 2),
              v && 0 === u && this.ctx.moveTo(-s / 2 - g / 2, i / 2 + g),
              0 !== u && this.ctx.arc(-s / 2 + u, i / 2 - u, u + g / 2, 0.5 * Math.PI, 1 * Math.PI),
              this.ctx.lineTo(-s / 2 - g / 2, 0 === l ? (v ? -i / 2 : -i / 2 - g / 2) : -i / 2 + l),
              v && 0 === l && this.ctx.moveTo(-s / 2 - g, -i / 2 - g / 2),
              v || this.ctx.closePath();
          }),
          (t.prototype._doClip = function (t, e, r, s) {
            t &&
              e &&
              r &&
              ((this.ctx.globalAlpha = 0),
              (this.ctx.fillStyle = 'white'),
              this._border({ borderRadius: t, width: e, height: r, borderStyle: s }),
              this.ctx.fill(),
              this.ctx.clip(),
              (this.ctx.globalAlpha = 1));
          }),
          (t.prototype._doBorder = function (t, e, r) {
            if (t.css) {
              var s = t.css,
                i = s.borderRadius,
                o = s.borderWidth,
                n = s.borderColor,
                a = s.borderStyle;
              o &&
                (this.ctx.save(),
                this._preProcess(t, !0),
                (this.ctx.strokeStyle = n || 'black'),
                this._border({ borderRadius: i, width: e, height: r, borderWidth: o, borderStyle: a }),
                this.ctx.stroke(),
                this.ctx.restore());
            }
          }),
          (t.prototype._preProcess = function (t, r) {
            var s,
              i,
              o,
              n,
              a = 0,
              h = this._doPaddings(t);
            switch (t.type) {
              case 'text':
                for (var l = String(t.text).split('\n'), d = 0; d < l.length; ++d) '' === l[d] && (l[d] = ' ');
                var f = t.css.fontWeight || '400',
                  u =
                    t.css.fontStyle || 'italic' === t.css.textStyle || 'oblique' === t.css.textStyle
                      ? t.css.textStyle
                      : 'normal';
                t.css.fontSize || (t.css.fontSize = '20rpx');
                var x = c.toPx(t.css.fontSize);
                this.ctx.font = u + ' ' + f + ' ' + x + 'px "' + (t.css.fontFamily || 'sans-serif') + '"';
                var p = 0,
                  g = [];
                for (d = 0; d < l.length; ++d) {
                  var v = this.ctx.measureText(l[d]).width,
                    b = x + h[1] + h[3],
                    y = t.css.width ? c.toPx(t.css.width, this.style.width) - h[1] - h[3] : v;
                  y < b && (y = b);
                  var w = Math.ceil(v / y);
                  (a = y > a ? y : a), (p += w), (g[d] = w);
                }
                p = 'number' == typeof t.css.maxLines && t.css.maxLines < p ? t.css.maxLines : p;
                var P = t.css.lineHeight ? c.toPx(t.css.lineHeight) : c.toPx(t.css.fontSize);
                (s = P * p), (i = { lines: p, lineHeight: P, textArray: l, linesArray: g });
                break;
              case 'image':
                var m = c.injection.getRatio();
                t.css && (t.css.width || (t.css.width = 'auto'), t.css.height || (t.css.height = 'auto')),
                  !t.css || ('auto' === t.css.width && 'auto' === t.css.height)
                    ? ((a = Math.round(t.sWidth / m)), (s = Math.round(t.sHeight / m)))
                    : 'auto' === t.css.width
                    ? ((s = c.toPx(t.css.height, this.style.height)), (a = (t.sWidth / t.sHeight) * s))
                    : 'auto' === t.css.height
                    ? ((a = c.toPx(t.css.width, this.style.width)), (s = (t.sHeight / t.sWidth) * a))
                    : ((a = c.toPx(t.css.width, this.style.width)), (s = c.toPx(t.css.height, this.style.height)));
                break;
              default:
                if (!t.css.width || !t.css.height) return void console.error('You should set width and height');
                (a = c.toPx(t.css.width, this.style.width)), (s = c.toPx(t.css.height, this.style.height));
            }
            if (t.css && t.css.right)
              if ('string' == typeof t.css.right) o = this.style.width - c.toPx(t.css.right, this.style.width);
              else {
                var _ = t.css.right;
                o =
                  this.style.width -
                  c.toPx(_[0], this.style.width) -
                  (e.penCache.viewRect[_[1]] ? e.penCache.viewRect[_[1]].width * (_[2] || 1) : 0);
              }
            else if (t.css && t.css.left)
              if ('string' == typeof t.css.left) o = c.toPx(t.css.left, this.style.width);
              else {
                var S = t.css.left;
                o =
                  c.toPx(S[0], this.style.width) +
                  (e.penCache.viewRect[S[1]] ? e.penCache.viewRect[S[1]].width * (S[2] || 1) : 0);
              }
            else o = 0;
            if (t.css && t.css.bottom) n = this.style.height - s - c.toPx(t.css.bottom, this.style.height);
            else if (t.css && t.css.top)
              if ('string' == typeof t.css.top) n = c.toPx(t.css.top, this.style.height);
              else {
                var M = t.css.top;
                n =
                  c.toPx(M[0], this.style.height) +
                  (e.penCache.viewRect[M[1]] ? e.penCache.viewRect[M[1]].height * (M[2] || 1) : 0);
              }
            else n = 0;
            var C = t.css && t.css.rotate ? this._getAngle(t.css.rotate) : 0,
              k = t.css && t.css.align ? t.css.align : t.css && t.css.right ? 'right' : 'left',
              R = t.css && t.css.verticalAlign ? t.css.verticalAlign : 'top',
              I = 0;
            switch (k) {
              case 'center':
                I = o;
                break;
              case 'right':
                I = o - a / 2;
                break;
              default:
                I = o + a / 2;
            }
            var T = 0;
            switch (R) {
              case 'center':
                T = n;
                break;
              case 'bottom':
                T = n - s / 2;
                break;
              default:
                T = n + s / 2;
            }
            this.ctx.translate(I, T);
            var A = o;
            'center' === k ? (A = o - a / 2) : 'right' === k && (A = o - a);
            var j = n;
            return (
              'center' === R ? (j = n - s / 2) : 'bottom' === R && (j = n - s),
              t.rect
                ? ((t.rect.left = A),
                  (t.rect.top = j),
                  (t.rect.right = A + a),
                  (t.rect.bottom = j + s),
                  (t.rect.x = t.css && t.css.right ? o - a : o),
                  (t.rect.y = n))
                : (t.rect = {
                    left: A,
                    top: j,
                    right: A + a,
                    bottom: j + s,
                    x: t.css && t.css.right ? o - a : o,
                    y: n,
                  }),
              (t.rect.left = t.rect.left - h[3]),
              (t.rect.top = t.rect.top - h[0]),
              (t.rect.right = t.rect.right + h[1]),
              (t.rect.bottom = t.rect.bottom + h[2]),
              'text' === t.type && (t.rect.minWidth = c.toPx(t.css.fontSize) + h[1] + h[3]),
              this.ctx.rotate(C),
              !r &&
                t.css &&
                t.css.borderRadius &&
                'rect' !== t.type &&
                this._doClip(t.css.borderRadius, a, s, t.css.borderStyle),
              this._doShadow(t),
              t.id &&
                (e.penCache.viewRect[t.id] = {
                  width: a,
                  height: s,
                  left: t.rect.left,
                  top: t.rect.top,
                  right: t.rect.right,
                  bottom: t.rect.bottom,
                }),
              { width: a, height: s, x: o, y: n, extra: i }
            );
          }),
          (t.prototype._doPaddings = function (t) {
            var e = (t.css ? t.css : {}).padding,
              r = void 0 === e ? '' : e,
              s = [0, 0, 0, 0];
            if (r)
              if ('string' == typeof r) {
                var i,
                  o,
                  n = r.split(/\s+/);
                1 === n.length && (s = [(i = c.toPx(n[0])), i, i, i]),
                  2 === n.length && (s = [(i = c.toPx(n[0])), (o = c.toPx(n[1])), i, o]),
                  3 === n.length && (s = [(i = c.toPx(n[0])), (o = c.toPx(n[1])), c.toPx(n[2]), o]),
                  4 === n.length && (s = [(i = c.toPx(n[0])), (o = c.toPx(n[1])), c.toPx(n[2]), c.toPx(n[3])]);
              } else s = [r, r, r, r];
            return s;
          }),
          (t.prototype._doBackground = function (t) {
            this.ctx.save();
            var e = this._preProcess(t, !0),
              r = e.width,
              s = e.height,
              i = t.css.background,
              o = this._doPaddings(t),
              n = r + o[1] + o[3],
              c = s + o[0] + o[2];
            this._doClip(t.css.borderRadius, n, c, t.css.borderStyle),
              a.isGradient(String(i)) ? a.doGradient(String(i), n, c, this.ctx) : (this.ctx.fillStyle = String(i)),
              this.ctx.fillRect(-n / 2, -c / 2, n, c),
              this.ctx.restore();
          }),
          (t.prototype._drawQRCode = function (t) {
            this.ctx.save();
            var e = this._preProcess(t),
              r = e.width,
              s = e.height;
            n.api.draw(
              t.content,
              this.ctx,
              -r / 2,
              -s / 2,
              r,
              s,
              t.css.background ? String(t.css.background) : '',
              t.css.color,
            ),
              this.ctx.restore(),
              this._doBorder(t, r, s);
          }),
          (t.prototype._drawAbsImage = function (t) {
            return i(this, void 0, void 0, function () {
              var e, r, s, i, n, a, h, l, d, f, u, x, p;
              return o(this, function (o) {
                switch (o.label) {
                  case 0:
                    return t.url ? (this.ctx.save(), [4, c.injection.loadImage(t.url)]) : [2];
                  case 1:
                    return (
                      (e = o.sent()),
                      (r = e.img),
                      (s = e.width),
                      (i = e.height),
                      (t.sHeight = i),
                      (t.sWidth = s),
                      r
                        ? ((n = this._preProcess(t)),
                          (a = n.width),
                          (h = n.height),
                          (l = t.sWidth),
                          (d = t.sHeight),
                          (f = 0),
                          (u = 0),
                          (x = a / h),
                          (p = t.sWidth / t.sHeight),
                          x >= p
                            ? ((d = l / x), (u = Math.round((t.sHeight - d) / 2)))
                            : ((l = d * x), (f = Math.round((t.sWidth - l) / 2))),
                          t.css && 'scaleToFill' === t.css.mode
                            ? this.ctx.drawImage(r, -a / 2, -h / 2, a, h)
                            : (this.ctx.drawImage(r, f, u, l, d, -a / 2, -h / 2, a, h),
                              (t.rect.startX = f / t.sWidth),
                              (t.rect.startY = u / t.sHeight),
                              (t.rect.endX = (f + l) / t.sWidth),
                              (t.rect.endY = (u + d) / t.sHeight)),
                          this.ctx.restore(),
                          this._doBorder(t, a, h),
                          [2])
                        : [2]
                    );
                }
              });
            });
          }),
          (t.prototype._fillAbsText = function (t) {
            var r, s;
            if (t.text) {
              t.css.background && this._doBackground(t), this.ctx.save();
              var i = this._preProcess(t, Boolean(t.css.background && t.css.borderRadius)),
                o = i.width,
                n = i.height,
                a = i.extra;
              if (((this.ctx.fillStyle = t.css.color || 'black'), t.id && e.penCache.textLines[t.id])) {
                this.ctx.textAlign = t.css.textAlign ? t.css.textAlign : 'left';
                for (var h = 0, l = e.penCache.textLines[t.id]; h < l.length; h++) {
                  var d = (_ = l[h]).measuredWith,
                    f = _.text,
                    u = _.x,
                    x = _.y,
                    p = _.textDecoration;
                  if (
                    ('stroke' === t.css.textStyle ? this.ctx.strokeText(f, u, x, d) : this.ctx.fillText(f, u, x, d), p)
                  ) {
                    var g = c.toPx(t.css.fontSize);
                    (this.ctx.lineWidth = g / 13),
                      this.ctx.beginPath(),
                      (r = this.ctx).moveTo.apply(r, p.moveTo),
                      (s = this.ctx).lineTo.apply(s, p.lineTo),
                      this.ctx.closePath(),
                      (this.ctx.strokeStyle = t.css.color),
                      this.ctx.stroke();
                  }
                }
              } else {
                var v = a,
                  b = v.lines,
                  y = v.lineHeight,
                  w = v.textArray,
                  P = v.linesArray;
                if (t.id) {
                  for (var m = 0, _ = 0; _ < w.length; ++_) {
                    var S = this.ctx.measureText(w[_]).width;
                    m = S > m ? S : m;
                  }
                  e.penCache.viewRect[t.id].width = o ? (m < o ? m : o) : m;
                }
                for (var M = 0, C = ((g = c.toPx(t.css.fontSize)), 0); C < w.length; ++C) {
                  var k = Math.ceil(w[C].length / P[C]),
                    R = 0,
                    I = 0;
                  for (_ = 0; _ < P[C] && !(M >= b); ++_) {
                    for (
                      I = k, f = w[C].substr(R, I), d = this.ctx.measureText(f).width;
                      R + I <= w[C].length && (o - d > g || d - o > g);

                    ) {
                      if (d < o) f = w[C].substr(R, ++I);
                      else {
                        if (f.length <= 1) break;
                        f = w[C].substr(R, --I);
                      }
                      d = this.ctx.measureText(f).width;
                    }
                    if (((R += f.length), M === b - 1 && (C < w.length - 1 || R < w[C].length))) {
                      for (; this.ctx.measureText(f + '...').width > o && !(f.length <= 1); )
                        f = f.substring(0, f.length - 1);
                      (f += '...'), (d = this.ctx.measureText(f).width);
                    }
                    (this.ctx.textAlign = t.css.textAlign ? t.css.textAlign : 'left'), (u = void 0);
                    var T = void 0;
                    switch (t.css.textAlign) {
                      case 'center':
                        T = (u = 0) - d / 2;
                        break;
                      case 'right':
                        T = (u = o / 2) - d;
                        break;
                      default:
                        T = u = -o / 2;
                    }
                    (x = -n / 2 + (0 === M ? g : g + M * y)),
                      M++,
                      'stroke' === t.css.textStyle ? this.ctx.strokeText(f, u, x, d) : this.ctx.fillText(f, u, x, d),
                      (p = void 0),
                      t.css.textDecoration &&
                        'string' == typeof t.css.textDecoration &&
                        ((this.ctx.lineWidth = g / 13),
                        this.ctx.beginPath(),
                        /\bunderline\b/.test(t.css.textDecoration) &&
                          (this.ctx.moveTo(T, x),
                          this.ctx.lineTo(T + d, x),
                          (p = { moveTo: [T, x], lineTo: [T + d, x] })),
                        /\boverline\b/.test(t.css.textDecoration) &&
                          (this.ctx.moveTo(T, x - g),
                          this.ctx.lineTo(T + d, x - g),
                          (p = { moveTo: [T, x - g], lineTo: [T + d, x - g] })),
                        /\bline-through\b/.test(t.css.textDecoration) &&
                          (this.ctx.moveTo(T, x - g / 3),
                          this.ctx.lineTo(T + d, x - g / 3),
                          (p = { moveTo: [T, x - g / 3], lineTo: [T + d, x - g / 3] })),
                        this.ctx.closePath(),
                        (this.ctx.strokeStyle = t.css.color),
                        this.ctx.stroke()),
                      t.id &&
                        (e.penCache.textLines[t.id]
                          ? e.penCache.textLines[t.id].push({ text: f, x: u, y: x, measuredWith: d, textDecoration: p })
                          : (e.penCache.textLines[t.id] = [
                              { text: f, x: u, y: x, measuredWith: d, textDecoration: p },
                            ]));
                  }
                }
              }
              this.ctx.restore(), this._doBorder(t, o, n);
            }
          }),
          (t.prototype._drawAbsRect = function (t) {
            this.ctx.save();
            var e = this._preProcess(t),
              r = e.width,
              s = e.height;
            a.isGradient(t.css.color) ? a.doGradient(t.css.color, r, s, this.ctx) : (this.ctx.fillStyle = t.css.color);
            var i = t.css,
              o = i.borderRadius,
              n = i.borderStyle,
              c = i.borderWidth;
            this._border({ borderRadius: o, width: r, height: s, borderWidth: c, borderStyle: n }),
              this.ctx.fill(),
              this.ctx.restore(),
              this._doBorder(t, r, s);
          }),
          (t.prototype._doShadow = function (t) {
            if (t.css && (t.css.shadow || t.css.boxShadow)) {
              var e = (t.css.boxShadow || t.css.shadow).replace(/,\s+/g, ',').split(/\s+/);
              e.length > 4
                ? console.error("shadow don't spread option")
                : ((this.ctx.shadowOffsetX = parseInt(e[0], 10)),
                  (this.ctx.shadowOffsetY = parseInt(e[1], 10)),
                  (this.ctx.shadowBlur = parseInt(e[2], 10)),
                  (this.ctx.shadowColor = e[3]));
            }
          }),
          (t.prototype._getAngle = function (t) {
            return (Number(t) * Math.PI) / 180;
          }),
          t
        );
      })();
      e.Pen = h;
    },
    536: (t, e) => {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.api = void 0);
      var r,
        s,
        i,
        o,
        n,
        a,
        c = [
          0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28,
          24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28,
        ],
        h = [
          3220, 1468, 2713, 1235, 3062, 1890, 2119, 1549, 2344, 2936, 1117, 2583, 1330, 2470, 1667, 2249, 2028, 3780,
          481, 4011, 142, 3098, 831, 3445, 592, 2517, 1776, 2234, 1951, 2827, 1070, 2660, 1345, 3177,
        ],
        l = [
          30660, 29427, 32170, 30877, 26159, 25368, 27713, 26998, 21522, 20773, 24188, 23371, 17913, 16590, 20375,
          19104, 13663, 12392, 16177, 14854, 9396, 8579, 11994, 11245, 5769, 5054, 7399, 6608, 1890, 597, 3340, 2107,
        ],
        d = [
          1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28,
          1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16,
          1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15,
          28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2,
          14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6,
          2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26,
          7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5,
          16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28,
          15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4,
          43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107,
          28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30,
          2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16,
          14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22,
          24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45,
          28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116,
          30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15,
          30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24,
          30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23,
          46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14,
          121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46,
          15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22,
          24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30,
        ],
        f = [
          255, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129, 28, 193,
          105, 248, 200, 8, 76, 113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130, 69, 29, 181,
          194, 125, 106, 39, 249, 185, 201, 154, 9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102, 221, 48, 253, 226,
          152, 37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19, 92, 131, 56, 70, 64, 30,
          66, 182, 163, 195, 72, 126, 110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94, 155, 159, 10, 21, 121, 43, 78,
          212, 229, 172, 115, 243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13, 103, 74, 222, 237, 49, 197, 254, 24,
          227, 165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32, 137, 46, 55, 63, 209, 91, 149, 188, 207, 205,
          144, 135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171, 20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162,
          31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73, 236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170,
          251, 96, 134, 177, 187, 204, 62, 90, 203, 89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235, 122, 117, 44, 215,
          79, 174, 213, 233, 230, 231, 173, 232, 116, 214, 244, 234, 168, 80, 88, 175,
        ],
        u = [
          1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201, 143, 3,
          6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159, 35, 70, 140, 5,
          10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202, 137,
          15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223, 163, 91, 182, 113, 226, 217, 175,
          67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124, 248, 237, 199, 147, 59, 118,
          236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77,
          154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252,
          229, 215, 179, 123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65,
          130, 25, 50, 100, 200, 141, 7, 14, 28, 56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239,
          195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22,
          44, 88, 176, 125, 250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 0,
        ],
        x = [],
        p = [],
        g = [],
        v = [],
        b = [],
        y = 2;
      function w(t, e) {
        var r;
        t > e && ((r = t), (t = e), (e = r)), (r = e), (r *= e), (r += e), (r >>= 1), (v[(r += t)] = 1);
      }
      function P(t, e) {
        var r;
        for (g[t + s * e] = 1, r = -2; r < 2; r++)
          (g[t + r + s * (e - 2)] = 1),
            (g[t - 2 + s * (e + r + 1)] = 1),
            (g[t + 2 + s * (e + r)] = 1),
            (g[t + r + 1 + s * (e + 2)] = 1);
        for (r = 0; r < 2; r++) w(t - 1, e + r), w(t + 1, e - r), w(t - r, e - 1), w(t + r, e + 1);
      }
      function m(t) {
        for (; t >= 255; ) t = ((t -= 255) >> 8) + (255 & t);
        return t;
      }
      var _ = [];
      function S(t, e, r, s) {
        var i, o, n;
        for (i = 0; i < s; i++) x[r + i] = 0;
        for (i = 0; i < e; i++) {
          if (255 != (n = f[x[t + i] ^ x[r]])) for (o = 1; o < s; o++) x[r + o - 1] = x[r + o] ^ u[m(n + _[s - o])];
          else for (o = r; o < r + s; o++) x[o] = x[o + 1];
          x[r + s - 1] = 255 == n ? 0 : u[m(n + _[0])];
        }
      }
      function M(t, e) {
        var r;
        return t > e && ((r = t), (t = e), (e = r)), (r = e), (r += e * e), (r >>= 1), v[(r += t)];
      }
      function C(t) {
        var e, r, i, o;
        switch (t) {
          case 0:
            for (r = 0; r < s; r++) for (e = 0; e < s; e++) (e + r) & 1 || M(e, r) || (g[e + r * s] ^= 1);
            break;
          case 1:
            for (r = 0; r < s; r++) for (e = 0; e < s; e++) 1 & r || M(e, r) || (g[e + r * s] ^= 1);
            break;
          case 2:
            for (r = 0; r < s; r++)
              for (i = 0, e = 0; e < s; e++, i++) 3 == i && (i = 0), i || M(e, r) || (g[e + r * s] ^= 1);
            break;
          case 3:
            for (o = 0, r = 0; r < s; r++, o++)
              for (3 == o && (o = 0), i = o, e = 0; e < s; e++, i++)
                3 == i && (i = 0), i || M(e, r) || (g[e + r * s] ^= 1);
            break;
          case 4:
            for (r = 0; r < s; r++)
              for (i = 0, o = (r >> 1) & 1, e = 0; e < s; e++, i++)
                3 == i && ((i = 0), (o = !o)), o || M(e, r) || (g[e + r * s] ^= 1);
            break;
          case 5:
            for (o = 0, r = 0; r < s; r++, o++)
              for (3 == o && (o = 0), i = 0, e = 0; e < s; e++, i++)
                3 == i && (i = 0), (e & r & 1) + !(!i | !o) || M(e, r) || (g[e + r * s] ^= 1);
            break;
          case 6:
            for (o = 0, r = 0; r < s; r++, o++)
              for (3 == o && (o = 0), i = 0, e = 0; e < s; e++, i++)
                3 == i && (i = 0), ((e & r & 1) + (i && i == o)) & 1 || M(e, r) || (g[e + r * s] ^= 1);
            break;
          case 7:
            for (o = 0, r = 0; r < s; r++, o++)
              for (3 == o && (o = 0), i = 0, e = 0; e < s; e++, i++)
                3 == i && (i = 0), ((i && i == o) + ((e + r) & 1)) & 1 || M(e, r) || (g[e + r * s] ^= 1);
        }
      }
      function k(t) {
        var e,
          r = 0;
        for (e = 0; e <= t; e++) b[e] >= 5 && (r += 3 + b[e] - 5);
        for (e = 3; e < t - 1; e += 2)
          b[e - 2] == b[e + 2] &&
            b[e + 2] == b[e - 1] &&
            b[e - 1] == b[e + 1] &&
            3 * b[e - 1] == b[e] &&
            (0 == b[e - 3] || e + 3 > t || 3 * b[e - 3] >= 4 * b[e] || 3 * b[e + 3] >= 4 * b[e]) &&
            (r += 40);
        return r;
      }
      function R() {
        var t,
          e,
          r,
          i,
          o,
          n = 0,
          a = 0;
        for (e = 0; e < s - 1; e++)
          for (t = 0; t < s - 1; t++)
            ((g[t + s * e] && g[t + 1 + s * e] && g[t + s * (e + 1)] && g[t + 1 + s * (e + 1)]) ||
              !(g[t + s * e] || g[t + 1 + s * e] || g[t + s * (e + 1)] || g[t + 1 + s * (e + 1)])) &&
              (n += 3);
        for (e = 0; e < s; e++) {
          for (b[0] = 0, r = i = t = 0; t < s; t++)
            (o = g[t + s * e]) == i ? b[r]++ : (b[++r] = 1), (a += (i = o) ? 1 : -1);
          n += k(r);
        }
        a < 0 && (a = -a);
        var c = a,
          h = 0;
        for (c += c << 2, c <<= 1; c > s * s; ) (c -= s * s), h++;
        for (n += 10 * h, t = 0; t < s; t++) {
          for (b[0] = 0, r = i = e = 0; e < s; e++) (o = g[t + s * e]) == i ? b[r]++ : (b[++r] = 1), (i = o);
          n += k(r);
        }
        return n;
      }
      var I,
        T = null;
      e.api = {
        get ecclevel() {
          return y;
        },
        set ecclevel(t) {
          y = t;
        },
        get size() {
          return I;
        },
        set size(t) {
          I = t;
        },
        get canvas() {
          return T;
        },
        set canvas(t) {
          T = t;
        },
        getFrame: function (t) {
          return (function (t) {
            var e, b, k, I, T, A, j, O;
            (I = t.length), (r = 0);
            do {
              if (
                (r++,
                (k = 4 * (y - 1) + 16 * (r - 1)),
                (i = d[k++]),
                (o = d[k++]),
                (n = d[k++]),
                (a = d[k]),
                I <= (k = n * (i + o) + o - 3 + (r <= 9)))
              )
                break;
            } while (r < 40);
            for (s = 17 + 4 * r, T = n + (n + a) * (i + o) + o, I = 0; I < T; I++) p[I] = 0;
            for (x = t.slice(0), I = 0; I < s * s; I++) g[I] = 0;
            for (I = 0; I < (s * (s + 1) + 1) / 2; I++) v[I] = 0;
            for (I = 0; I < 3; I++) {
              for (
                k = 0, b = 0, 1 == I && (k = s - 7), 2 == I && (b = s - 7), g[b + 3 + s * (k + 3)] = 1, e = 0;
                e < 6;
                e++
              )
                (g[b + e + s * k] = 1),
                  (g[b + s * (k + e + 1)] = 1),
                  (g[b + 6 + s * (k + e)] = 1),
                  (g[b + e + 1 + s * (k + 6)] = 1);
              for (e = 1; e < 5; e++) w(b + e, k + 1), w(b + 1, k + e + 1), w(b + 5, k + e), w(b + e + 1, k + 5);
              for (e = 2; e < 4; e++)
                (g[b + e + s * (k + 2)] = 1),
                  (g[b + 2 + s * (k + e + 1)] = 1),
                  (g[b + 4 + s * (k + e)] = 1),
                  (g[b + e + 1 + s * (k + 4)] = 1);
            }
            if (r > 1)
              for (I = c[r], b = s - 7; ; ) {
                for (e = s - 7; e > I - 3 && (P(e, b), !(e < I)); ) e -= I;
                if (b <= I + 9) break;
                P(6, (b -= I)), P(b, 6);
              }
            for (g[8 + s * (s - 8)] = 1, b = 0; b < 7; b++) w(7, b), w(s - 8, b), w(7, b + s - 7);
            for (e = 0; e < 8; e++) w(e, 7), w(e + s - 8, 7), w(e, s - 8);
            for (e = 0; e < 9; e++) w(e, 8);
            for (e = 0; e < 8; e++) w(e + s - 8, 8), w(8, e);
            for (b = 0; b < 7; b++) w(8, b + s - 7);
            for (e = 0; e < s - 14; e++)
              1 & e ? (w(8 + e, 6), w(6, 8 + e)) : ((g[8 + e + 6 * s] = 1), (g[6 + s * (8 + e)] = 1));
            if (r > 6)
              for (I = h[r - 7], k = 17, e = 0; e < 6; e++)
                for (b = 0; b < 3; b++, k--)
                  1 & (k > 11 ? r >> (k - 12) : I >> k)
                    ? ((g[5 - e + s * (2 - b + s - 11)] = 1), (g[2 - b + s - 11 + s * (5 - e)] = 1))
                    : (w(5 - e, 2 - b + s - 11), w(2 - b + s - 11, 5 - e));
            for (b = 0; b < s; b++) for (e = 0; e <= b; e++) g[e + s * b] && w(e, b);
            for (T = x.length, A = 0; A < T; A++) p[A] = x.charCodeAt(A);
            if (((x = p.slice(0)), T >= (e = n * (i + o) + o) - 2 && ((T = e - 2), r > 9 && T--), (A = T), r > 9)) {
              for (x[A + 2] = 0, x[A + 3] = 0; A--; ) (I = x[A]), (x[A + 3] |= 255 & (I << 4)), (x[A + 2] = I >> 4);
              (x[2] |= 255 & (T << 4)), (x[1] = T >> 4), (x[0] = 64 | (T >> 12));
            } else {
              for (x[A + 1] = 0, x[A + 2] = 0; A--; ) (I = x[A]), (x[A + 2] |= 255 & (I << 4)), (x[A + 1] = I >> 4);
              (x[1] |= 255 & (T << 4)), (x[0] = 64 | (T >> 4));
            }
            for (A = T + 3 - (r < 10); A < e; ) (x[A++] = 236), (x[A++] = 17);
            for (_[0] = 1, A = 0; A < a; A++) {
              for (_[A + 1] = 1, j = A; j > 0; j--) _[j] = _[j] ? _[j - 1] ^ u[m(f[_[j]] + A)] : _[j - 1];
              _[0] = u[m(f[_[0]] + A)];
            }
            for (A = 0; A <= a; A++) _[A] = f[_[A]];
            for (k = e, b = 0, A = 0; A < i; A++) S(b, n, k, a), (b += n), (k += a);
            for (A = 0; A < o; A++) S(b, n + 1, k, a), (b += n + 1), (k += a);
            for (b = 0, A = 0; A < n; A++) {
              for (j = 0; j < i; j++) p[b++] = x[A + j * n];
              for (j = 0; j < o; j++) p[b++] = x[i * n + A + j * (n + 1)];
            }
            for (j = 0; j < o; j++) p[b++] = x[i * n + A + j * (n + 1)];
            for (A = 0; A < a; A++) for (j = 0; j < i + o; j++) p[b++] = x[e + A + j * a];
            for (x = p, e = b = s - 1, k = T = 1, O = (n + a) * (i + o) + o, A = 0; A < O; A++)
              for (I = x[A], j = 0; j < 8; j++, I <<= 1) {
                128 & I && (g[e + s * b] = 1);
                do {
                  T
                    ? e--
                    : (e++,
                      k
                        ? 0 != b
                          ? b--
                          : ((k = !k), 6 == (e -= 2) && (e--, (b = 9)))
                        : b != s - 1
                        ? b++
                        : ((k = !k), 6 == (e -= 2) && (e--, (b -= 8)))),
                    (T = !T);
                } while (M(e, b));
              }
            for (
              x = g.slice(0), I = 0, b = 3e4, k = 0;
              k < 8 && (C(k), (e = R()) < b && ((b = e), (I = k)), 7 != I);
              k++
            )
              g = x.slice(0);
            for (I != k && C(I), b = l[I + ((y - 1) << 3)], k = 0; k < 8; k++, b >>= 1)
              1 & b && ((g[s - 1 - k + 8 * s] = 1), k < 6 ? (g[8 + s * k] = 1) : (g[8 + s * (k + 1)] = 1));
            for (k = 0; k < 7; k++, b >>= 1)
              1 & b && ((g[8 + s * (s - 7 + k)] = 1), k ? (g[6 - k + 8 * s] = 1) : (g[7 + 8 * s] = 1));
            return g;
          })(t);
        },
        utf16to8: function (t) {
          var e, r, s, i;
          for (e = '', s = t.length, r = 0; r < s; r++)
            (i = t.charCodeAt(r)) >= 1 && i <= 127
              ? (e += t.charAt(r))
              : i > 2047
              ? ((e += String.fromCharCode(224 | ((i >> 12) & 15))),
                (e += String.fromCharCode(128 | ((i >> 6) & 63))),
                (e += String.fromCharCode(128 | ((i >> 0) & 63))))
              : ((e += String.fromCharCode(192 | ((i >> 6) & 31))), (e += String.fromCharCode(128 | ((i >> 0) & 63))));
          return e;
        },
        draw: function (t, e, r, i, o, n, a, c, h, l) {
          if (((y = l || y), e)) {
            var d = Math.min(o, n);
            t = this.utf16to8(t);
            var f = this.getFrame(t),
              u = d / s;
            a && ((e.fillStyle = a), e.fillRect(r, i, o, o)), (e.fillStyle = c || 'black');
            for (var x = 0; x < s; x++)
              for (var p = 0; p < s; p++) f[p * s + x] && e.fillRect(r + u * x, i + u * p, u, u);
          } else console.warn('No canvas provided to draw QR code in!');
        },
      };
    },
    593: function (t, e, r) {
      var s =
          (this && this.__assign) ||
          function () {
            return (s =
              Object.assign ||
              function (t) {
                for (var e, r = 1, s = arguments.length; r < s; r++)
                  for (var i in (e = arguments[r])) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t;
              }).apply(this, arguments);
          },
        i =
          (this && this.__importDefault) ||
          function (t) {
            return t && t.__esModule ? t : { default: t };
          };
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.initInjection = e.injection = e.setStringPrototype = e.toPx = void 0);
      var o = i(r(563)),
        n = r(779),
        a = 0.5,
        c = 1,
        h = function (t, e) {
          void 0 === e && (e = 100);
          var r = /-?[0-9]+(\.[0-9]+)?(rpx|px|%)/.exec(t);
          if (!t || !r) return console.error('The size: ' + t + ' is illegal'), '0';
          var s = r[2],
            i = parseFloat(t),
            o = 0;
          return (
            'rpx' === s
              ? (o = Math.round(i * (a || 0.5) * (c || 1)))
              : 'px' === s
              ? (o = Math.round(i * (c || 1)))
              : '%' === s && (o = Math.round((i * e) / 100)),
            String(o)
          );
        };
      (e.toPx = function (t, e) {
        if ('number' == typeof t) return t;
        if ('0' === t) return 0;
        var r = /^calc\((.+)\)$/.exec(t);
        if (r && r[1]) {
          var s = r[1]
            .replace(/([^\s\(\+\-\*\/]+)\.(left|right|bottom|top|width|height)/g, function (t) {
              var e = t.split('.'),
                r = e[0],
                s = e[1];
              return n.penCache.viewRect[r] ? n.penCache.viewRect[r][s] : 0;
            })
            .replace(/-?[0-9]+(\.[0-9]+)?(rpx|px|%)/g, function (t) {
              return h(t, e);
            });
          return o.default(s);
        }
        return Number(h(t, e));
      }),
        (e.setStringPrototype = function (t, e) {
          void 0 === t && (t = 0.5), void 0 === e && (e = 1), (a = t), (c = e);
        }),
        (e.injection = {
          loadImage: function (t) {
            return Promise.resolve({ img: t, width: 0, height: 0 });
          },
          getRatio: function () {
            return 1;
          },
          customActions: {},
        }),
        (e.initInjection = function (t) {
          e.injection = s(s({}, e.injection), t);
        });
    },
  },
  e = {};
function r(s) {
  var i = e[s];
  if (void 0 !== i) return i.exports;
  var o = (e[s] = { exports: {} });
  return t[s].call(o.exports, o, o.exports, r), o.exports;
}
var s = {};
(() => {
  var t = s;
  Object.defineProperty(t, 'X$', { value: !0 }), (t.Gm = t.BM = t.y1 = t.I8 = t.aR = t.C5 = void 0);
  var e = r(593);
  Object.defineProperty(t, 'C5', {
    enumerable: !0,
    get: function () {
      return e.setStringPrototype;
    },
  }),
    Object.defineProperty(t, 'aR', {
      enumerable: !0,
      get: function () {
        return e.toPx;
      },
    }),
    Object.defineProperty(t, 'I8', {
      enumerable: !0,
      get: function () {
        return e.initInjection;
      },
    });
  var i = r(779);
  Object.defineProperty(t, 'y1', {
    enumerable: !0,
    get: function () {
      return i.penCache;
    },
  }),
    Object.defineProperty(t, 'BM', {
      enumerable: !0,
      get: function () {
        return i.clearPenCache;
      },
    }),
    Object.defineProperty(t, 'Gm', {
      enumerable: !0,
      get: function () {
        return i.Pen;
      },
    });
})();
var i = s.Gm,
  o = s.X$,
  n = s.BM,
  a = s.I8,
  c = s.y1,
  h = s.C5,
  l = s.aR;
export {
  i as Pen,
  o as __esModule,
  n as clearPenCache,
  a as initInjection,
  c as penCache,
  h as setStringPrototype,
  l as toPx,
};
