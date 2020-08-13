! function(t) {
    function e(r) {
        if (i[r]) return i[r].exports;
        var n = i[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(n.exports, n, n.exports, e), n.l = !0, n.exports
    }
    var i = {};
    e.m = t, e.c = i, e.i = function(t) {
        return t
    }, e.d = function(t, i, r) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: r
        })
    }, e.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(i, "a", i), i
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 275)
}([function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    e.VERSION = "4.8.6", e.PI_2 = 2 * Math.PI, e.RAD_TO_DEG = 180 / Math.PI, e.DEG_TO_RAD = Math.PI / 180, e.RENDERER_TYPE = {
        UNKNOWN: 0,
        WEBGL: 1,
        CANVAS: 2
    }, e.BLEND_MODES = {
        NORMAL: 0,
        ADD: 1,
        MULTIPLY: 2,
        SCREEN: 3,
        OVERLAY: 4,
        DARKEN: 5,
        LIGHTEN: 6,
        COLOR_DODGE: 7,
        COLOR_BURN: 8,
        HARD_LIGHT: 9,
        SOFT_LIGHT: 10,
        DIFFERENCE: 11,
        EXCLUSION: 12,
        HUE: 13,
        SATURATION: 14,
        COLOR: 15,
        LUMINOSITY: 16,
        NORMAL_NPM: 17,
        ADD_NPM: 18,
        SCREEN_NPM: 19
    }, e.DRAW_MODES = {
        POINTS: 0,
        LINES: 1,
        LINE_LOOP: 2,
        LINE_STRIP: 3,
        TRIANGLES: 4,
        TRIANGLE_STRIP: 5,
        TRIANGLE_FAN: 6
    }, e.SCALE_MODES = {
        LINEAR: 0,
        NEAREST: 1
    }, e.WRAP_MODES = {
        CLAMP: 0,
        REPEAT: 1,
        MIRRORED_REPEAT: 2
    }, e.GC_MODES = {
        AUTO: 0,
        MANUAL: 1
    }, e.URL_FILE_EXTENSION = /\.(\w{3,4})(?:$|\?|#)/i, e.DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i, e.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i, e.SHAPES = {
        POLY: 0,
        RECT: 1,
        CIRC: 2,
        ELIP: 3,
        RREC: 4
    }, e.PRECISION = {
        LOW: "lowp",
        MEDIUM: "mediump",
        HIGH: "highp"
    }, e.TRANSFORM_MODE = {
        STATIC: 0,
        DYNAMIC: 1
    }, e.TEXT_GRADIENT = {
        LINEAR_VERTICAL: 0,
        LINEAR_HORIZONTAL: 1
    }, e.UPDATE_PRIORITY = {
        INTERACTION: 50,
        HIGH: 25,
        NORMAL: 0,
        LOW: -25,
        UTILITY: -50
    }
}, function(t, e, i) {
    "use strict";

    function r(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    }

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0, e.autoDetectRenderer = e.Application = e.Filter = e.SpriteMaskFilter = e.Quad = e.RenderTarget = e.ObjectRenderer = e.WebGLManager = e.Shader = e.CanvasRenderTarget = e.TextureUvs = e.VideoBaseTexture = e.BaseRenderTexture = e.RenderTexture = e.BaseTexture = e.TextureMatrix = e.Texture = e.Spritesheet = e.CanvasGraphicsRenderer = e.GraphicsRenderer = e.GraphicsData = e.Graphics = e.TextMetrics = e.TextStyle = e.Text = e.SpriteRenderer = e.CanvasTinter = e.CanvasSpriteRenderer = e.Sprite = e.TransformBase = e.TransformStatic = e.Transform = e.Container = e.DisplayObject = e.Bounds = e.glCore = e.WebGLRenderer = e.CanvasRenderer = e.ticker = e.utils = e.settings = void 0;
    var o = i(0);
    Object.keys(o).forEach(function(t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return o[t]
            }
        })
    });
    var s = i(4);
    Object.keys(s).forEach(function(t) {
        "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return s[t]
            }
        })
    });
    var a = i(6);
    Object.defineProperty(e, "glCore", {
        enumerable: !0,
        get: function() {
            return n(a).default
        }
    });
    var h = i(34);
    Object.defineProperty(e, "Bounds", {
        enumerable: !0,
        get: function() {
            return n(h).default
        }
    });
    var u = i(66);
    Object.defineProperty(e, "DisplayObject", {
        enumerable: !0,
        get: function() {
            return n(u).default
        }
    });
    var l = i(17);
    Object.defineProperty(e, "Container", {
        enumerable: !0,
        get: function() {
            return n(l).default
        }
    });
    var c = i(67);
    Object.defineProperty(e, "Transform", {
        enumerable: !0,
        get: function() {
            return n(c).default
        }
    });
    var f = i(68);
    Object.defineProperty(e, "TransformStatic", {
        enumerable: !0,
        get: function() {
            return n(f).default
        }
    });
    var d = i(35);
    Object.defineProperty(e, "TransformBase", {
        enumerable: !0,
        get: function() {
            return n(d).default
        }
    });
    var p = i(39);
    Object.defineProperty(e, "Sprite", {
        enumerable: !0,
        get: function() {
            return n(p).default
        }
    });
    var _ = i(149);
    Object.defineProperty(e, "CanvasSpriteRenderer", {
        enumerable: !0,
        get: function() {
            return n(_).default
        }
    });
    var v = i(28);
    Object.defineProperty(e, "CanvasTinter", {
        enumerable: !0,
        get: function() {
            return n(v).default
        }
    });
    var m = i(151);
    Object.defineProperty(e, "SpriteRenderer", {
        enumerable: !0,
        get: function() {
            return n(m).default
        }
    });
    var g = i(153);
    Object.defineProperty(e, "Text", {
        enumerable: !0,
        get: function() {
            return n(g).default
        }
    });
    var y = i(79);
    Object.defineProperty(e, "TextStyle", {
        enumerable: !0,
        get: function() {
            return n(y).default
        }
    });
    var x = i(78);
    Object.defineProperty(e, "TextMetrics", {
        enumerable: !0,
        get: function() {
            return n(x).default
        }
    });
    var b = i(121);
    Object.defineProperty(e, "Graphics", {
        enumerable: !0,
        get: function() {
            return n(b).default
        }
    });
    var T = i(69);
    Object.defineProperty(e, "GraphicsData", {
        enumerable: !0,
        get: function() {
            return n(T).default
        }
    });
    var w = i(124);
    Object.defineProperty(e, "GraphicsRenderer", {
        enumerable: !0,
        get: function() {
            return n(w).default
        }
    });
    var E = i(122);
    Object.defineProperty(e, "CanvasGraphicsRenderer", {
        enumerable: !0,
        get: function() {
            return n(E).default
        }
    });
    var S = i(154);
    Object.defineProperty(e, "Spritesheet", {
        enumerable: !0,
        get: function() {
            return n(S).default
        }
    });
    var P = i(9);
    Object.defineProperty(e, "Texture", {
        enumerable: !0,
        get: function() {
            return n(P).default
        }
    });
    var O = i(81);
    Object.defineProperty(e, "TextureMatrix", {
        enumerable: !0,
        get: function() {
            return n(O).default
        }
    });
    var M = i(13);
    Object.defineProperty(e, "BaseTexture", {
        enumerable: !0,
        get: function() {
            return n(M).default
        }
    });
    var C = i(40);
    Object.defineProperty(e, "RenderTexture", {
        enumerable: !0,
        get: function() {
            return n(C).default
        }
    });
    var R = i(80);
    Object.defineProperty(e, "BaseRenderTexture", {
        enumerable: !0,
        get: function() {
            return n(R).default
        }
    });
    var A = i(83);
    Object.defineProperty(e, "VideoBaseTexture", {
        enumerable: !0,
        get: function() {
            return n(A).default
        }
    });
    var I = i(82);
    Object.defineProperty(e, "TextureUvs", {
        enumerable: !0,
        get: function() {
            return n(I).default
        }
    });
    var D = i(73);
    Object.defineProperty(e, "CanvasRenderTarget", {
        enumerable: !0,
        get: function() {
            return n(D).default
        }
    });
    var L = i(16);
    Object.defineProperty(e, "Shader", {
        enumerable: !0,
        get: function() {
            return n(L).default
        }
    });
    var k = i(19);
    Object.defineProperty(e, "WebGLManager", {
        enumerable: !0,
        get: function() {
            return n(k).default
        }
    });
    var N = i(26);
    Object.defineProperty(e, "ObjectRenderer", {
        enumerable: !0,
        get: function() {
            return n(N).default
        }
    });
    var F = i(27);
    Object.defineProperty(e, "RenderTarget", {
        enumerable: !0,
        get: function() {
            return n(F).default
        }
    });
    var B = i(77);
    Object.defineProperty(e, "Quad", {
        enumerable: !0,
        get: function() {
            return n(B).default
        }
    });
    var j = i(76);
    Object.defineProperty(e, "SpriteMaskFilter", {
        enumerable: !0,
        get: function() {
            return n(j).default
        }
    });
    var U = i(75);
    Object.defineProperty(e, "Filter", {
        enumerable: !0,
        get: function() {
            return n(U).default
        }
    });
    var X = i(64);
    Object.defineProperty(e, "Application", {
        enumerable: !0,
        get: function() {
            return n(X).default
        }
    });
    var G = i(65);
    Object.defineProperty(e, "autoDetectRenderer", {
        enumerable: !0,
        get: function() {
            return G.autoDetectRenderer
        }
    });
    var W = i(2),
        V = r(W),
        H = i(41),
        z = r(H),
        Y = i(3),
        q = n(Y),
        Z = i(18),
        K = n(Z),
        J = i(25),
        Q = n(J);
    e.settings = q.default, e.utils = V, e.ticker = z, e.CanvasRenderer = K.default, e.WebGLRenderer = Q.default
}, function(t, e, i) {
    "use strict";

    function r(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    }

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function o() {
        return ++U
    }

    function s(t, e) {
        return e = e || [], e[0] = (t >> 16 & 255) / 255, e[1] = (t >> 8 & 255) / 255, e[2] = (255 & t) / 255, e
    }

    function a(t) {
        return t = t.toString(16), "#" + (t = "000000".substr(0, 6 - t.length) + t)
    }

    function h(t) {
        return (255 * t[0] << 16) + (255 * t[1] << 8) + (255 * t[2] | 0)
    }

    function u(t, e) {
        var i = S.default.RETINA_PREFIX.exec(t);
        return i ? parseFloat(i[1]) : void 0 !== e ? e : 1
    }

    function l(t) {
        var e = w.DATA_URI.exec(t);
        if (e) return {
            mediaType: e[1] ? e[1].toLowerCase() : void 0,
            subType: e[2] ? e[2].toLowerCase() : void 0,
            charset: e[3] ? e[3].toLowerCase() : void 0,
            encoding: e[4] ? e[4].toLowerCase() : void 0,
            data: e[5]
        }
    }

    function c(t) {
        var e = w.URL_FILE_EXTENSION.exec(t);
        if (e) return e[1].toLowerCase()
    }

    function f(t) {
        var e = w.SVG_SIZE.exec(t),
            i = {};
        return e && (i[e[1]] = Math.round(parseFloat(e[3])), i[e[5]] = Math.round(parseFloat(e[7]))), i
    }

    function d() {
        X = !0
    }

    function p(t) {
        if (!X) {
            if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                var e = ["\n %c %c %c PixiJS " + w.VERSION + " - ✰ " + t + " ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n", "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
                window.console.log.apply(console, e)
            } else window.console && window.console.log("PixiJS " + w.VERSION + " - " + t + " - http://www.pixijs.com/");
            X = !0
        }
    }

    function _() {
        var t = {
            stencil: !0,
            failIfMajorPerformanceCaveat: !0
        };
        try {
            if (!window.WebGLRenderingContext) return !1;
            var e = document.createElement("canvas"),
                i = e.getContext("webgl", t) || e.getContext("experimental-webgl", t),
                r = !(!i || !i.getContextAttributes().stencil);
            if (i) {
                var n = i.getExtension("WEBGL_lose_context");
                n && n.loseContext()
            }
            return i = null, r
        } catch (t) {
            return !1
        }
    }

    function v(t) {
        return 0 === t ? 0 : t < 0 ? -1 : 1
    }

    function m() {
        var t = void 0;
        for (t in G) G[t].destroy();
        for (t in W) W[t].destroy()
    }

    function g() {
        var t = void 0;
        for (t in G) delete G[t];
        for (t in W) delete W[t]
    }

    function y(t, e) {
        return V[e ? 1 : 0][t]
    }

    function x(t, e) {
        if (1 === e) return (255 * e << 24) + t;
        if (0 === e) return 0;
        var i = t >> 16 & 255,
            r = t >> 8 & 255,
            n = 255 & t;
        return i = i * e + .5 | 0, r = r * e + .5 | 0, n = n * e + .5 | 0, (255 * e << 24) + (i << 16) + (r << 8) + n
    }

    function b(t, e, i, r) {
        return i = i || new Float32Array(4), r || void 0 === r ? (i[0] = t[0] * e, i[1] = t[1] * e, i[2] = t[2] * e) : (i[0] = t[0], i[1] = t[1], i[2] = t[2]), i[3] = e, i
    }

    function T(t, e, i, r) {
        return i = i || new Float32Array(4), i[0] = (t >> 16 & 255) / 255, i[1] = (t >> 8 & 255) / 255, i[2] = (255 & t) / 255, (r || void 0 === r) && (i[0] *= e, i[1] *= e, i[2] *= e), i[3] = e, i
    }
    e.__esModule = !0, e.premultiplyBlendMode = e.BaseTextureCache = e.TextureCache = e.earcut = e.mixins = e.pluginTarget = e.EventEmitter = e.removeItems = e.isMobile = void 0, e.uid = o, e.hex2rgb = s, e.hex2string = a, e.rgb2hex = h, e.getResolutionOfUrl = u, e.decomposeDataUri = l, e.getUrlFileExtension = c, e.getSvgSize = f, e.skipHello = d, e.sayHello = p, e.isWebGLSupported = _, e.sign = v, e.destroyTextureCache = m, e.clearTextureCache = g, e.correctBlendMode = y, e.premultiplyTint = x, e.premultiplyRgba = b, e.premultiplyTintToRgba = T;
    var w = i(0),
        E = i(3),
        S = n(E),
        P = i(12),
        O = n(P),
        M = i(161),
        C = n(M),
        R = i(160),
        A = r(R),
        I = i(32),
        D = r(I),
        L = i(208),
        k = n(L),
        N = i(158),
        F = n(N),
        B = i(31),
        j = n(B),
        U = 0,
        X = !1;
    e.isMobile = D, e.removeItems = k.default, e.EventEmitter = O.default, e.pluginTarget = C.default, e.mixins = A, e.earcut = j.default;
    var G = e.TextureCache = Object.create(null),
        W = e.BaseTextureCache = Object.create(null),
        V = e.premultiplyBlendMode = (0, F.default)()
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var n = i(159),
        o = r(n),
        s = i(157),
        a = r(s);
    e.default = {
        TARGET_FPMS: .06,
        MIPMAP_TEXTURES: !0,
        RESOLUTION: 1,
        FILTER_RESOLUTION: 1,
        SPRITE_MAX_TEXTURES: (0, o.default)(32),
        SPRITE_BATCH_SIZE: 4096,
        RETINA_PREFIX: /@([0-9\.]+)x/,
        RENDER_OPTIONS: {
            view: null,
            antialias: !1,
            forceFXAA: !1,
            autoResize: !1,
            transparent: !1,
            backgroundColor: 0,
            clearBeforeRender: !0,
            preserveDrawingBuffer: !1,
            roundPixels: !1,
            width: 800,
            height: 600,
            legacy: !1
        },
        TRANSFORM_MODE: 0,
        GC_MODE: 0,
        GC_MAX_IDLE: 3600,
        GC_MAX_CHECK_COUNT: 600,
        WRAP_MODE: 0,
        SCALE_MODE: 0,
        PRECISION_VERTEX: "highp",
        PRECISION_FRAGMENT: "mediump",
        CAN_UPLOAD_SAME_BUFFER: (0, a.default)(),
        MESH_CANVAS_PADDING: 0
    }
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var n = i(37);
    Object.defineProperty(e, "Point", {
        enumerable: !0,
        get: function() {
            return r(n).default
        }
    });
    var o = i(71);
    Object.defineProperty(e, "ObservablePoint", {
        enumerable: !0,
        get: function() {
            return r(o).default
        }
    });
    var s = i(36);
    Object.defineProperty(e, "Matrix", {
        enumerable: !0,
        get: function() {
            return r(s).default
        }
    });
    var a = i(70);
    Object.defineProperty(e, "GroupD8", {
        enumerable: !0,
        get: function() {
            return r(a).default
        }
    });
    var h = i(131);
    Object.defineProperty(e, "Circle", {
        enumerable: !0,
        get: function() {
            return r(h).default
        }
    });
    var u = i(132);
    Object.defineProperty(e, "Ellipse", {
        enumerable: !0,
        get: function() {
            return r(u).default
        }
    });
    var l = i(133);
    Object.defineProperty(e, "Polygon", {
        enumerable: !0,
        get: function() {
            return r(l).default
        }
    });
    var c = i(38);
    Object.defineProperty(e, "Rectangle", {
        enumerable: !0,
        get: function() {
            return r(c).default
        }
    });
    var f = i(134);
    Object.defineProperty(e, "RoundedRectangle", {
        enumerable: !0,
        get: function() {
            return r(f).default
        }
    })
}, , function(t, e, i) {
    var r = {
        createContext: i(117),
        setVertexAttribArrays: i(55),
        GLBuffer: i(113),
        GLFramebuffer: i(114),
        GLShader: i(115),
        GLTexture: i(54),
        VertexArrayObject: i(116),
        shader: i(118)
    };
    void 0 !== t && t.exports && (t.exports = r), "undefined" != typeof window && (window.PIXI = window.PIXI || {}, window.PIXI.glCore = r)
}, function(t, e, i) {
    (function(t) {
        function i(t, e) {
            for (var i = 0, r = t.length - 1; r >= 0; r--) {
                var n = t[r];
                "." === n ? t.splice(r, 1) : ".." === n ? (t.splice(r, 1), i++) : i && (t.splice(r, 1), i--)
            }
            if (e)
                for (; i--; i) t.unshift("..");
            return t
        }

        function r(t, e) {
            if (t.filter) return t.filter(e);
            for (var i = [], r = 0; r < t.length; r++) e(t[r], r, t) && i.push(t[r]);
            return i
        }
        var n = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
            o = function(t) {
                return n.exec(t).slice(1)
            };
        e.resolve = function() {
            for (var e = "", n = !1, o = arguments.length - 1; o >= -1 && !n; o--) {
                var s = o >= 0 ? arguments[o] : t.cwd();
                if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
                s && (e = s + "/" + e, n = "/" === s.charAt(0))
            }
            return e = i(r(e.split("/"), function(t) {
                return !!t
            }), !n).join("/"), (n ? "/" : "") + e || "."
        }, e.normalize = function(t) {
            var n = e.isAbsolute(t),
                o = "/" === s(t, -1);
            return t = i(r(t.split("/"), function(t) {
                return !!t
            }), !n).join("/"), t || n || (t = "."), t && o && (t += "/"), (n ? "/" : "") + t
        }, e.isAbsolute = function(t) {
            return "/" === t.charAt(0)
        }, e.join = function() {
            var t = Array.prototype.slice.call(arguments, 0);
            return e.normalize(r(t, function(t, e) {
                if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                return t
            }).join("/"))
        }, e.relative = function(t, i) {
            function r(t) {
                for (var e = 0; e < t.length && "" === t[e]; e++);
                for (var i = t.length - 1; i >= 0 && "" === t[i]; i--);
                return e > i ? [] : t.slice(e, i - e + 1)
            }
            t = e.resolve(t).substr(1), i = e.resolve(i).substr(1);
            for (var n = r(t.split("/")), o = r(i.split("/")), s = Math.min(n.length, o.length), a = s, h = 0; h < s; h++)
                if (n[h] !== o[h]) {
                    a = h;
                    break
                }
            for (var u = [], h = a; h < n.length; h++) u.push("..");
            return u = u.concat(o.slice(a)), u.join("/")
        }, e.sep = "/", e.delimiter = ":", e.dirname = function(t) {
            var e = o(t),
                i = e[0],
                r = e[1];
            return i || r ? (r && (r = r.substr(0, r.length - 1)), i + r) : "."
        }, e.basename = function(t, e) {
            var i = o(t)[2];
            return e && i.substr(-1 * e.length) === e && (i = i.substr(0, i.length - e.length)), i
        }, e.extname = function(t) {
            return o(t)[3]
        };
        var s = "b" === "ab".substr(-1) ? function(t, e, i) {
            return t.substr(e, i)
        } : function(t, e, i) {
            return e < 0 && (e = t.length + e), t.substr(e, i)
        }
    }).call(e, i(46))
}, function(t, e) {
    var i;
    i = function() {
        return this
    }();
    try {
        i = i || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (i = window)
    }
    t.exports = i
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function a(t) {
        t.destroy = function() {}, t.on = function() {}, t.once = function() {}, t.emit = function() {}
    }
    e.__esModule = !0;
    var h = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        u = i(13),
        l = r(u),
        c = i(83),
        f = r(c),
        d = i(82),
        p = r(d),
        _ = i(12),
        v = r(_),
        m = i(4),
        g = i(2),
        y = i(3),
        x = r(y),
        b = function(t) {
            function e(i, r, s, a, h, u) {
                n(this, e);
                var l = o(this, t.call(this));
                if (l.noFrame = !1, r || (l.noFrame = !0, r = new m.Rectangle(0, 0, 1, 1)), i instanceof e && (i = i.baseTexture), l.baseTexture = i, l._frame = r, l.trim = a, l.valid = !1, l.requiresUpdate = !1, l._uvs = null, l.orig = s || r, l._rotate = Number(h || 0), !0 === h) l._rotate = 2;
                else if (l._rotate % 2 != 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
                return i.hasLoaded ? (l.noFrame && (r = new m.Rectangle(0, 0, i.width, i.height), i.on("update", l.onBaseTextureUpdated, l)), l.frame = r) : i.once("loaded", l.onBaseTextureLoaded, l), l.defaultAnchor = u ? new m.Point(u.x, u.y) : new m.Point(0, 0), l._updateID = 0, l.transform = null, l.textureCacheIds = [], l
            }
            return s(e, t), e.prototype.update = function() {
                this.baseTexture.update()
            }, e.prototype.onBaseTextureLoaded = function(t) {
                this._updateID++, this.noFrame ? this.frame = new m.Rectangle(0, 0, t.width, t.height) : this.frame = this._frame, this.baseTexture.on("update", this.onBaseTextureUpdated, this), this.emit("update", this)
            }, e.prototype.onBaseTextureUpdated = function(t) {
                this._updateID++, this._frame.width = t.width, this._frame.height = t.height, this.emit("update", this)
            }, e.prototype.destroy = function(t) {
                this.baseTexture && (t && (g.TextureCache[this.baseTexture.imageUrl] && e.removeFromCache(this.baseTexture.imageUrl), this.baseTexture.destroy()), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture.off("loaded", this.onBaseTextureLoaded, this), this.baseTexture = null), this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, e.removeFromCache(this), this.textureCacheIds = null
            }, e.prototype.clone = function() {
                return new e(this.baseTexture, this.frame, this.orig, this.trim, this.rotate, this.defaultAnchor)
            }, e.prototype._updateUvs = function() {
                this._uvs || (this._uvs = new p.default), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++
            }, e.fromImage = function(t, i, r, n) {
                var o = g.TextureCache[t];
                return o || (o = new e(l.default.fromImage(t, i, r, n)), e.addToCache(o, t)), o
            }, e.fromFrame = function(t) {
                var e = g.TextureCache[t];
                if (!e) throw new Error('The frameId "' + t + '" does not exist in the texture cache');
                return e
            }, e.fromCanvas = function(t, i) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "canvas";
                return new e(l.default.fromCanvas(t, i, r))
            }, e.fromVideo = function(t, i, r, n) {
                return "string" == typeof t ? e.fromVideoUrl(t, i, r, n) : new e(f.default.fromVideo(t, i, n))
            }, e.fromVideoUrl = function(t, i, r, n) {
                return new e(f.default.fromUrl(t, i, r, n))
            }, e.from = function(t) {
                if ("string" == typeof t) {
                    var i = g.TextureCache[t];
                    if (!i) {
                        return null !== t.match(/\.(mp4|webm|ogg|h264|avi|mov)$/) ? e.fromVideoUrl(t) : e.fromImage(t)
                    }
                    return i
                }
                return t instanceof HTMLImageElement ? new e(l.default.from(t)) : t instanceof HTMLCanvasElement ? e.fromCanvas(t, x.default.SCALE_MODE, "HTMLCanvasElement") : t instanceof HTMLVideoElement ? e.fromVideo(t) : t instanceof l.default ? new e(t) : t
            }, e.fromLoader = function(t, i, r) {
                var n = new l.default(t, void 0, (0, g.getResolutionOfUrl)(i)),
                    o = new e(n);
                return n.imageUrl = i, r || (r = i), l.default.addToCache(o.baseTexture, r), e.addToCache(o, r), r !== i && (l.default.addToCache(o.baseTexture, i), e.addToCache(o, i)), o
            }, e.addToCache = function(t, e) {
                e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), g.TextureCache[e] && console.warn("Texture added to the cache with an id [" + e + "] that already had an entry"), g.TextureCache[e] = t)
            }, e.removeFromCache = function(t) {
                if ("string" == typeof t) {
                    var e = g.TextureCache[t];
                    if (e) {
                        var i = e.textureCacheIds.indexOf(t);
                        return i > -1 && e.textureCacheIds.splice(i, 1), delete g.TextureCache[t], e
                    }
                } else if (t && t.textureCacheIds) {
                    for (var r = 0; r < t.textureCacheIds.length; ++r) g.TextureCache[t.textureCacheIds[r]] === t && delete g.TextureCache[t.textureCacheIds[r]];
                    return t.textureCacheIds.length = 0, t
                }
                return null
            }, h(e, [{
                key: "frame",
                get: function() {
                    return this._frame
                },
                set: function(t) {
                    this._frame = t, this.noFrame = !1;
                    var e = t.x,
                        i = t.y,
                        r = t.width,
                        n = t.height,
                        o = e + r > this.baseTexture.width,
                        s = i + n > this.baseTexture.height;
                    if (o || s) {
                        var a = o && s ? "and" : "or",
                            h = "X: " + e + " + " + r + " = " + (e + r) + " > " + this.baseTexture.width,
                            u = "Y: " + i + " + " + n + " = " + (i + n) + " > " + this.baseTexture.height;
                        throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + h + " " + a + " " + u)
                    }
                    this.valid = r && n && this.baseTexture.hasLoaded, this.trim || this.rotate || (this.orig = t), this.valid && this._updateUvs()
                }
            }, {
                key: "rotate",
                get: function() {
                    return this._rotate
                },
                set: function(t) {
                    this._rotate = t, this.valid && this._updateUvs()
                }
            }, {
                key: "width",
                get: function() {
                    return this.orig.width
                }
            }, {
                key: "height",
                get: function() {
                    return this.orig.height
                }
            }]), e
        }(v.default);
    e.default = b, b.EMPTY = new b(new l.default), a(b.EMPTY), a(b.EMPTY.baseTexture), b.WHITE = function() {
        var t = document.createElement("canvas");
        t.width = 10, t.height = 10;
        var e = t.getContext("2d");
        return e.fillStyle = "white", e.fillRect(0, 0, 10, 10), new b(new l.default(t))
    }(), a(b.WHITE), a(b.WHITE.baseTexture)
}, , , function(t, e, i) {
    "use strict";

    function r() {}

    function n(t, e, i) {
        this.fn = t, this.context = e, this.once = i || !1
    }

    function o() {
        this._events = new r, this._eventsCount = 0
    }
    var s = Object.prototype.hasOwnProperty,
        a = "~";
    Object.create && (r.prototype = Object.create(null), (new r).__proto__ || (a = !1)), o.prototype.eventNames = function() {
        var t, e, i = [];
        if (0 === this._eventsCount) return i;
        for (e in t = this._events) s.call(t, e) && i.push(a ? e.slice(1) : e);
        return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(t)) : i
    }, o.prototype.listeners = function(t, e) {
        var i = a ? a + t : t,
            r = this._events[i];
        if (e) return !!r;
        if (!r) return [];
        if (r.fn) return [r.fn];
        for (var n = 0, o = r.length, s = new Array(o); n < o; n++) s[n] = r[n].fn;
        return s
    }, o.prototype.emit = function(t, e, i, r, n, o) {
        var s = a ? a + t : t;
        if (!this._events[s]) return !1;
        var h, u, l = this._events[s],
            c = arguments.length;
        if (l.fn) {
            switch (l.once && this.removeListener(t, l.fn, void 0, !0), c) {
                case 1:
                    return l.fn.call(l.context), !0;
                case 2:
                    return l.fn.call(l.context, e), !0;
                case 3:
                    return l.fn.call(l.context, e, i), !0;
                case 4:
                    return l.fn.call(l.context, e, i, r), !0;
                case 5:
                    return l.fn.call(l.context, e, i, r, n), !0;
                case 6:
                    return l.fn.call(l.context, e, i, r, n, o), !0
            }
            for (u = 1, h = new Array(c - 1); u < c; u++) h[u - 1] = arguments[u];
            l.fn.apply(l.context, h)
        } else {
            var f, d = l.length;
            for (u = 0; u < d; u++) switch (l[u].once && this.removeListener(t, l[u].fn, void 0, !0), c) {
                case 1:
                    l[u].fn.call(l[u].context);
                    break;
                case 2:
                    l[u].fn.call(l[u].context, e);
                    break;
                case 3:
                    l[u].fn.call(l[u].context, e, i);
                    break;
                case 4:
                    l[u].fn.call(l[u].context, e, i, r);
                    break;
                default:
                    if (!h)
                        for (f = 1, h = new Array(c - 1); f < c; f++) h[f - 1] = arguments[f];
                    l[u].fn.apply(l[u].context, h)
            }
        }
        return !0
    }, o.prototype.on = function(t, e, i) {
        var r = new n(e, i || this),
            o = a ? a + t : t;
        return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : (this._events[o] = r, this._eventsCount++), this
    }, o.prototype.once = function(t, e, i) {
        var r = new n(e, i || this, !0),
            o = a ? a + t : t;
        return this._events[o] ? this._events[o].fn ? this._events[o] = [this._events[o], r] : this._events[o].push(r) : (this._events[o] = r, this._eventsCount++), this
    }, o.prototype.removeListener = function(t, e, i, n) {
        var o = a ? a + t : t;
        if (!this._events[o]) return this;
        if (!e) return 0 == --this._eventsCount ? this._events = new r : delete this._events[o], this;
        var s = this._events[o];
        if (s.fn) s.fn !== e || n && !s.once || i && s.context !== i || (0 == --this._eventsCount ? this._events = new r : delete this._events[o]);
        else {
            for (var h = 0, u = [], l = s.length; h < l; h++)(s[h].fn !== e || n && !s[h].once || i && s[h].context !== i) && u.push(s[h]);
            u.length ? this._events[o] = 1 === u.length ? u[0] : u : 0 == --this._eventsCount ? this._events = new r : delete this._events[o]
        }
        return this
    }, o.prototype.removeAllListeners = function(t) {
        var e;
        return t ? (e = a ? a + t : t, this._events[e] && (0 == --this._eventsCount ? this._events = new r : delete this._events[e])) : (this._events = new r, this._eventsCount = 0), this
    }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prototype.setMaxListeners = function() {
        return this
    }, o.prefixed = a, o.EventEmitter = o, t.exports = o
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = i(2),
        h = i(3),
        u = r(h),
        l = i(12),
        c = r(l),
        f = i(84),
        d = r(f),
        p = i(30),
        _ = r(p),
        v = function(t) {
            function e(i, r, s) {
                n(this, e);
                var h = o(this, t.call(this));
                return h.uid = (0, a.uid)(), h.touched = 0, h.resolution = s || u.default.RESOLUTION, h.width = 100, h.height = 100, h.realWidth = 100, h.realHeight = 100, h.scaleMode = void 0 !== r ? r : u.default.SCALE_MODE, h.hasLoaded = !1, h.isLoading = !1, h.source = null, h.origSource = null, h.imageType = null, h.sourceScale = 1, h.premultipliedAlpha = !0, h.imageUrl = null, h.isPowerOfTwo = !1, h.mipmap = u.default.MIPMAP_TEXTURES, h.wrapMode = u.default.WRAP_MODE, h._glTextures = {}, h._enabled = 0, h._virtalBoundId = -1, h._destroyed = !1, h.textureCacheIds = [], i && h.loadSource(i), h
            }
            return s(e, t), e.prototype.update = function() {
                "svg" !== this.imageType && (this.realWidth = this.source.naturalWidth || this.source.videoWidth || this.source.width, this.realHeight = this.source.naturalHeight || this.source.videoHeight || this.source.height, this._updateDimensions()), this.emit("update", this)
            }, e.prototype._updateDimensions = function() {
                this.width = this.realWidth / this.resolution, this.height = this.realHeight / this.resolution, this.isPowerOfTwo = _.default.isPow2(this.realWidth) && _.default.isPow2(this.realHeight)
            }, e.prototype.loadSource = function(t) {
                var e = this.isLoading;
                this.hasLoaded = !1, this.isLoading = !1, e && this.source && (this.source.onload = null, this.source.onerror = null);
                var i = !this.source;
                if (this.source = t, (t.src && t.complete || t.getContext) && t.width && t.height) this._updateImageType(), "svg" === this.imageType ? this._loadSvgSource() : this._sourceLoaded(), i && this.emit("loaded", this);
                else if (!t.getContext) {
                    this.isLoading = !0;
                    var r = this;
                    if (t.onload = function() {
                            if (r._updateImageType(), t.onload = null, t.onerror = null, r.isLoading) {
                                if (r.isLoading = !1, r._sourceLoaded(), "svg" === r.imageType) return void r._loadSvgSource();
                                r.emit("loaded", r)
                            }
                        }, t.onerror = function() {
                            t.onload = null, t.onerror = null, r.isLoading && (r.isLoading = !1, r.emit("error", r))
                        }, t.complete && t.src) {
                        if (t.onload = null, t.onerror = null, "svg" === r.imageType) return void r._loadSvgSource();
                        this.isLoading = !1, t.width && t.height ? (this._sourceLoaded(), e && this.emit("loaded", this)) : e && this.emit("error", this)
                    }
                }
            }, e.prototype._updateImageType = function() {
                if (this.imageUrl) {
                    var t = (0, a.decomposeDataUri)(this.imageUrl),
                        e = void 0;
                    if (t && "image" === t.mediaType) {
                        var i = t.subType.split("+")[0];
                        if (!(e = (0, a.getUrlFileExtension)("." + i))) throw new Error("Invalid image type in data URI.")
                    } else(e = (0, a.getUrlFileExtension)(this.imageUrl)) || (e = "png");
                    this.imageType = e
                }
            }, e.prototype._loadSvgSource = function() {
                if ("svg" === this.imageType) {
                    var t = (0, a.decomposeDataUri)(this.imageUrl);
                    t ? this._loadSvgSourceUsingDataUri(t) : this._loadSvgSourceUsingXhr()
                }
            }, e.prototype._loadSvgSourceUsingDataUri = function(t) {
                var e = void 0;
                if ("base64" === t.encoding) {
                    if (!atob) throw new Error("Your browser doesn't support base64 conversions.");
                    e = atob(t.data)
                } else e = t.data;
                this._loadSvgSourceUsingString(e)
            }, e.prototype._loadSvgSourceUsingXhr = function() {
                var t = this,
                    e = new XMLHttpRequest;
                e.onload = function() {
                    if (e.readyState !== e.DONE || 200 !== e.status) throw new Error("Failed to load SVG using XHR.");
                    t._loadSvgSourceUsingString(e.response)
                }, e.onerror = function() {
                    return t.emit("error", t)
                }, e.open("GET", this.imageUrl, !0), e.send()
            }, e.prototype._loadSvgSourceUsingString = function(t) {
                var i = (0, a.getSvgSize)(t),
                    r = i.width,
                    n = i.height;
                if (!r || !n) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
                this.realWidth = Math.round(r * this.sourceScale), this.realHeight = Math.round(n * this.sourceScale), this._updateDimensions();
                var o = document.createElement("canvas");
                o.width = this.realWidth, o.height = this.realHeight, o._pixiId = "canvas_" + (0, a.uid)(), o.getContext("2d").drawImage(this.source, 0, 0, r, n, 0, 0, this.realWidth, this.realHeight), this.origSource = this.source, this.source = o, e.addToCache(this, o._pixiId), this.isLoading = !1, this._sourceLoaded(), this.emit("loaded", this)
            }, e.prototype._sourceLoaded = function() {
                this.hasLoaded = !0, this.update()
            }, e.prototype.destroy = function() {
                this.imageUrl && (delete a.TextureCache[this.imageUrl], this.imageUrl = null, navigator.isCocoonJS || (this.source.src = "")), this.source = null, this.dispose(), e.removeFromCache(this), this.textureCacheIds = null, this._destroyed = !0
            }, e.prototype.dispose = function() {
                this.emit("dispose", this)
            }, e.prototype.updateSourceImage = function(t) {
                this.source.src = t, this.loadSource(this.source)
            }, e.fromImage = function(t, i, r, n) {
                var o = a.BaseTextureCache[t];
                if (!o) {
                    var s = new Image;
                    void 0 === i && 0 !== t.indexOf("data:") ? s.crossOrigin = (0, d.default)(t) : i && (s.crossOrigin = "string" == typeof i ? i : "anonymous"), o = new e(s, r), o.imageUrl = t, n && (o.sourceScale = n), o.resolution = (0, a.getResolutionOfUrl)(t), s.src = t, e.addToCache(o, t)
                }
                return o
            }, e.fromCanvas = function(t, i) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "canvas";
                t._pixiId || (t._pixiId = r + "_" + (0, a.uid)());
                var n = a.BaseTextureCache[t._pixiId];
                return n || (n = new e(t, i), e.addToCache(n, t._pixiId)), n
            }, e.from = function(t, i, r) {
                if ("string" == typeof t) return e.fromImage(t, void 0, i, r);
                if (t instanceof HTMLImageElement) {
                    var n = t.src,
                        o = a.BaseTextureCache[n];
                    return o || (o = new e(t, i), o.imageUrl = n, r && (o.sourceScale = r), o.resolution = (0, a.getResolutionOfUrl)(n), e.addToCache(o, n)), o
                }
                return t instanceof HTMLCanvasElement ? e.fromCanvas(t, i) : t
            }, e.addToCache = function(t, e) {
                e && (-1 === t.textureCacheIds.indexOf(e) && t.textureCacheIds.push(e), a.BaseTextureCache[e] && console.warn("BaseTexture added to the cache with an id [" + e + "] that already had an entry"), a.BaseTextureCache[e] = t)
            }, e.removeFromCache = function(t) {
                if ("string" == typeof t) {
                    var e = a.BaseTextureCache[t];
                    if (e) {
                        var i = e.textureCacheIds.indexOf(t);
                        return i > -1 && e.textureCacheIds.splice(i, 1), delete a.BaseTextureCache[t], e
                    }
                } else if (t && t.textureCacheIds) {
                    for (var r = 0; r < t.textureCacheIds.length; ++r) delete a.BaseTextureCache[t.textureCacheIds[r]];
                    return t.textureCacheIds.length = 0, t
                }
                return null
            }, e
        }(c.default);
    e.default = v
}, , , function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function s(t, e) {
        if (t instanceof Array) {
            if ("precision" !== t[0].substring(0, 9)) {
                var i = t.slice(0);
                return i.unshift("precision " + e + " float;"), i
            }
        } else if ("precision" !== t.trim().substring(0, 9)) return "precision " + e + " float;\n" + t;
        return t
    }
    e.__esModule = !0;
    var a = i(6),
        h = i(3),
        u = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(h),
        l = function(t) {
            function e(i, o, a, h, l) {
                return r(this, e), n(this, t.call(this, i, s(o, l || u.default.PRECISION_VERTEX), s(a, l || u.default.PRECISION_FRAGMENT), void 0, h))
            }
            return o(e, t), e
        }(a.GLShader);
    e.default = l
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        a = i(2),
        h = i(66),
        u = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(h),
        l = function(t) {
            function e() {
                r(this, e);
                var i = n(this, t.call(this));
                return i.children = [], i
            }
            return o(e, t), e.prototype.onChildrenChange = function() {}, e.prototype.addChild = function(t) {
                var e = arguments.length;
                if (e > 1)
                    for (var i = 0; i < e; i++) this.addChild(arguments[i]);
                else t.parent && t.parent.removeChild(t), t.parent = this, t.transform._parentID = -1, this.children.push(t), this._boundsID++, this.onChildrenChange(this.children.length - 1), t.emit("added", this);
                return t
            }, e.prototype.addChildAt = function(t, e) {
                if (e < 0 || e > this.children.length) throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length);
                return t.parent && t.parent.removeChild(t), t.parent = this, t.transform._parentID = -1, this.children.splice(e, 0, t), this._boundsID++, this.onChildrenChange(e), t.emit("added", this), t
            }, e.prototype.swapChildren = function(t, e) {
                if (t !== e) {
                    var i = this.getChildIndex(t),
                        r = this.getChildIndex(e);
                    this.children[i] = e, this.children[r] = t, this.onChildrenChange(i < r ? i : r)
                }
            }, e.prototype.getChildIndex = function(t) {
                var e = this.children.indexOf(t);
                if (-1 === e) throw new Error("The supplied DisplayObject must be a child of the caller");
                return e
            }, e.prototype.setChildIndex = function(t, e) {
                if (e < 0 || e >= this.children.length) throw new Error("The index " + e + " supplied is out of bounds " + this.children.length);
                var i = this.getChildIndex(t);
                (0, a.removeItems)(this.children, i, 1), this.children.splice(e, 0, t), this.onChildrenChange(e)
            }, e.prototype.getChildAt = function(t) {
                if (t < 0 || t >= this.children.length) throw new Error("getChildAt: Index (" + t + ") does not exist.");
                return this.children[t]
            }, e.prototype.removeChild = function(t) {
                var e = arguments.length;
                if (e > 1)
                    for (var i = 0; i < e; i++) this.removeChild(arguments[i]);
                else {
                    var r = this.children.indexOf(t);
                    if (-1 === r) return null;
                    t.parent = null, t.transform._parentID = -1, (0, a.removeItems)(this.children, r, 1), this._boundsID++, this.onChildrenChange(r), t.emit("removed", this)
                }
                return t
            }, e.prototype.removeChildAt = function(t) {
                var e = this.getChildAt(t);
                return e.parent = null, e.transform._parentID = -1, (0, a.removeItems)(this.children, t, 1), this._boundsID++, this.onChildrenChange(t), e.emit("removed", this), e
            }, e.prototype.removeChildren = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments[1],
                    i = t,
                    r = "number" == typeof e ? e : this.children.length,
                    n = r - i,
                    o = void 0;
                if (n > 0 && n <= r) {
                    o = this.children.splice(i, n);
                    for (var s = 0; s < o.length; ++s) o[s].parent = null, o[s].transform && (o[s].transform._parentID = -1);
                    this._boundsID++, this.onChildrenChange(t);
                    for (var a = 0; a < o.length; ++a) o[a].emit("removed", this);
                    return o
                }
                if (0 === n && 0 === this.children.length) return [];
                throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
            }, e.prototype.updateTransform = function() {
                this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
                for (var t = 0, e = this.children.length; t < e; ++t) {
                    var i = this.children[t];
                    i.visible && i.updateTransform()
                }
            }, e.prototype.calculateBounds = function() {
                this._bounds.clear(), this._calculateBounds();
                for (var t = 0; t < this.children.length; t++) {
                    var e = this.children[t];
                    e.visible && e.renderable && (e.calculateBounds(), e._mask ? (e._mask.calculateBounds(), this._bounds.addBoundsMask(e._bounds, e._mask._bounds)) : e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds))
                }
                this._lastBoundsID = this._boundsID
            }, e.prototype._calculateBounds = function() {}, e.prototype.renderWebGL = function(t) {
                if (this.visible && !(this.worldAlpha <= 0) && this.renderable)
                    if (this._mask || this._filters) this.renderAdvancedWebGL(t);
                    else {
                        this._renderWebGL(t);
                        for (var e = 0, i = this.children.length; e < i; ++e) this.children[e].renderWebGL(t)
                    }
            }, e.prototype.renderAdvancedWebGL = function(t) {
                t.flush();
                var e = this._filters,
                    i = this._mask;
                if (e) {
                    this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
                    for (var r = 0; r < e.length; r++) e[r].enabled && this._enabledFilters.push(e[r]);
                    this._enabledFilters.length && t.filterManager.pushFilter(this, this._enabledFilters)
                }
                i && t.maskManager.pushMask(this, this._mask), this._renderWebGL(t);
                for (var n = 0, o = this.children.length; n < o; n++) this.children[n].renderWebGL(t);
                t.flush(), i && t.maskManager.popMask(this, this._mask), e && this._enabledFilters && this._enabledFilters.length && t.filterManager.popFilter()
            }, e.prototype._renderWebGL = function(t) {}, e.prototype._renderCanvas = function(t) {}, e.prototype.renderCanvas = function(t) {
                if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
                    this._mask && t.maskManager.pushMask(this._mask), this._renderCanvas(t);
                    for (var e = 0, i = this.children.length; e < i; ++e) this.children[e].renderCanvas(t);
                    this._mask && t.maskManager.popMask(t)
                }
            }, e.prototype.destroy = function(e) {
                t.prototype.destroy.call(this);
                var i = "boolean" == typeof e ? e : e && e.children,
                    r = this.removeChildren(0, this.children.length);
                if (i)
                    for (var n = 0; n < r.length; ++n) r[n].destroy(e)
            }, s(e, [{
                key: "width",
                get: function() {
                    return this.scale.x * this.getLocalBounds().width
                },
                set: function(t) {
                    var e = this.getLocalBounds().width;
                    this.scale.x = 0 !== e ? t / e : 1, this._width = t
                }
            }, {
                key: "height",
                get: function() {
                    return this.scale.y * this.getLocalBounds().height
                },
                set: function(t) {
                    var e = this.getLocalBounds().height;
                    this.scale.y = 0 !== e ? t / e : 1, this._height = t
                }
            }]), e
        }(u.default);
    e.default = l, l.prototype.containerUpdateTransform = l.prototype.updateTransform
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = i(72),
        h = r(a),
        u = i(135),
        l = r(u),
        c = i(73),
        f = r(c),
        d = i(136),
        p = r(d),
        _ = i(2),
        v = i(0),
        m = i(3),
        g = r(m),
        y = function(t) {
            function e(i, r, s) {
                n(this, e);
                var a = o(this, t.call(this, "Canvas", i, r, s));
                return a.type = v.RENDERER_TYPE.CANVAS, a.rootContext = a.view.getContext("2d", {
                    alpha: a.transparent
                }), a.context = a.rootContext, a.refresh = !0, a.maskManager = new l.default(a), a.smoothProperty = "imageSmoothingEnabled", a.rootContext.imageSmoothingEnabled || (a.rootContext.webkitImageSmoothingEnabled ? a.smoothProperty = "webkitImageSmoothingEnabled" : a.rootContext.mozImageSmoothingEnabled ? a.smoothProperty = "mozImageSmoothingEnabled" : a.rootContext.oImageSmoothingEnabled ? a.smoothProperty = "oImageSmoothingEnabled" : a.rootContext.msImageSmoothingEnabled && (a.smoothProperty = "msImageSmoothingEnabled")), a.initPlugins(), a.blendModes = (0, p.default)(), a._activeBlendMode = null, a.renderingToScreen = !1, a.resize(a.options.width, a.options.height), a
            }
            return s(e, t), e.prototype.render = function(t, e, i, r, n) {
                if (this.view) {
                    this.renderingToScreen = !e, this.emit("prerender");
                    var o = this.resolution;
                    e ? (e = e.baseTexture || e, e._canvasRenderTarget || (e._canvasRenderTarget = new f.default(e.width, e.height, e.resolution), e.source = e._canvasRenderTarget.canvas, e.valid = !0), this.context = e._canvasRenderTarget.context, this.resolution = e._canvasRenderTarget.resolution) : this.context = this.rootContext;
                    var s = this.context;
                    if (e || (this._lastObjectRendered = t), !n) {
                        var a = t.parent,
                            h = this._tempDisplayObjectParent.transform.worldTransform;
                        r ? (r.copy(h), this._tempDisplayObjectParent.transform._worldID = -1) : h.identity(), t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = a
                    }
                    s.save(), s.setTransform(1, 0, 0, 1, 0, 0), s.globalAlpha = 1, this._activeBlendMode = v.BLEND_MODES.NORMAL, s.globalCompositeOperation = this.blendModes[v.BLEND_MODES.NORMAL], navigator.isCocoonJS && this.view.screencanvas && (s.fillStyle = "black", s.clear()), (void 0 !== i ? i : this.clearBeforeRender) && this.renderingToScreen && (this.transparent ? s.clearRect(0, 0, this.width, this.height) : (s.fillStyle = this._backgroundColorString, s.fillRect(0, 0, this.width, this.height)));
                    var u = this.context;
                    this.context = s, t.renderCanvas(this), this.context = u, s.restore(), this.resolution = o, this.emit("postrender")
                }
            }, e.prototype.clear = function(t) {
                var e = this.context;
                t = t || this._backgroundColorString, !this.transparent && t ? (e.fillStyle = t, e.fillRect(0, 0, this.width, this.height)) : e.clearRect(0, 0, this.width, this.height)
            }, e.prototype.setBlendMode = function(t) {
                this._activeBlendMode !== t && (this._activeBlendMode = t, this.context.globalCompositeOperation = this.blendModes[t])
            }, e.prototype.destroy = function(e) {
                this.destroyPlugins(), t.prototype.destroy.call(this, e), this.context = null, this.refresh = !0, this.maskManager.destroy(), this.maskManager = null, this.smoothProperty = null
            }, e.prototype.resize = function(e, i) {
                t.prototype.resize.call(this, e, i), this.smoothProperty && (this.rootContext[this.smoothProperty] = g.default.SCALE_MODE === v.SCALE_MODES.LINEAR)
            }, e.prototype.invalidateBlendMode = function() {
                this._activeBlendMode = this.blendModes.indexOf(this.context.globalCompositeOperation)
            }, e
        }(h.default);
    e.default = y, _.pluginTarget.mixin(y)
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = function() {
        function t(e) {
            r(this, t), this.renderer = e, this.renderer.on("context", this.onContextChange, this)
        }
        return t.prototype.onContextChange = function() {}, t.prototype.destroy = function() {
            this.renderer.off("context", this.onContextChange, this), this.renderer = null
        }, t
    }();
    e.default = n
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        a = i(1),
        h = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(a),
        u = i(9),
        l = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(u),
        c = new h.Point,
        f = new h.Polygon,
        d = function(t) {
            function e(i, o, s, a, u) {
                r(this, e);
                var c = n(this, t.call(this));
                return c._texture = i || l.default.EMPTY, c.uvs = s || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), c.vertices = o || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]), c.indices = a || new Uint16Array([0, 1, 3, 2]), c.dirty = 0, c.indexDirty = 0, c.vertexDirty = 0, c.autoUpdate = !0, c.blendMode = h.BLEND_MODES.NORMAL, c.canvasPadding = h.settings.MESH_CANVAS_PADDING, c.drawMode = u || e.DRAW_MODES.TRIANGLE_MESH, c.shader = null, c.tintRgb = new Float32Array([1, 1, 1]), c._glDatas = {}, c._uvTransform = new h.TextureMatrix(c._texture), c.uploadUvTransform = !1, c.pluginName = "mesh", c
            }
            return o(e, t), e.prototype._renderWebGL = function(t) {
                this.refresh(), t.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this)
            }, e.prototype._renderCanvas = function(t) {
                this.refresh(), t.plugins[this.pluginName].render(this)
            }, e.prototype._onTextureUpdate = function() {
                this._uvTransform.texture = this._texture, this.refresh()
            }, e.prototype.multiplyUvs = function() {
                this.uploadUvTransform || this._uvTransform.multiplyUvs(this.uvs)
            }, e.prototype.refresh = function(t) {
                this.autoUpdate && this.vertexDirty++, this._uvTransform.update(t) && this._refresh()
            }, e.prototype._refresh = function() {}, e.prototype._calculateBounds = function() {
                this._bounds.addVertices(this.transform, this.vertices, 0, this.vertices.length)
            }, e.prototype.containsPoint = function(t) {
                if (!this.getBounds().contains(t.x, t.y)) return !1;
                this.worldTransform.applyInverse(t, c);
                for (var i = this.vertices, r = f.points, n = this.indices, o = this.indices.length, s = this.drawMode === e.DRAW_MODES.TRIANGLES ? 3 : 1, a = 0; a + 2 < o; a += s) {
                    var h = 2 * n[a],
                        u = 2 * n[a + 1],
                        l = 2 * n[a + 2];
                    if (r[0] = i[h], r[1] = i[h + 1], r[2] = i[u], r[3] = i[u + 1], r[4] = i[l], r[5] = i[l + 1], f.contains(c.x, c.y)) return !0
                }
                return !1
            }, e.prototype.destroy = function(e) {
                for (var i in this._glDatas) {
                    var r = this._glDatas[i];
                    r.destroy ? r.destroy() : (r.vertexBuffer && (r.vertexBuffer.destroy(), r.vertexBuffer = null), r.indexBuffer && (r.indexBuffer.destroy(), r.indexBuffer = null), r.uvBuffer && (r.uvBuffer.destroy(), r.uvBuffer = null), r.vao && (r.vao.destroy(), r.vao = null))
                }
                this._glDatas = null, t.prototype.destroy.call(this, e)
            }, s(e, [{
                key: "texture",
                get: function() {
                    return this._texture
                },
                set: function(t) {
                    this._texture !== t && (this._texture = t, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
                }
            }, {
                key: "tint",
                get: function() {
                    return h.utils.rgb2hex(this.tintRgb)
                },
                set: function(t) {
                    this.tintRgb = h.utils.hex2rgb(t, this.tintRgb)
                }
            }]), e
        }(h.Container);
    e.default = d, d.DRAW_MODES = {
        TRIANGLE_MESH: 0,
        TRIANGLES: 1
    }
}, function(t, e, i) {
    "use strict";
    var r = i(209).Loader,
        n = i(44).Resource,
        o = i(100),
        s = i(101);
    r.Resource = n, r.async = o, r.encodeBinary = s, r.base64 = s, t.exports = r, t.exports.Loader = r, t.exports.default = r
}, , , function(t, e, i) {
    "use strict";

    function r(t, e) {
        var i = t.points;
        if (0 !== i.length) {
            var r = new o.Point(i[0], i[1]),
                n = new o.Point(i[i.length - 2], i[i.length - 1]);
            if (r.x === n.x && r.y === n.y) {
                i = i.slice(), i.pop(), i.pop(), n = new o.Point(i[i.length - 2], i[i.length - 1]);
                var a = n.x + .5 * (r.x - n.x),
                    h = n.y + .5 * (r.y - n.y);
                i.unshift(a, h), i.push(a, h)
            }
            var u = e.points,
                l = e.indices,
                c = i.length / 2,
                f = i.length,
                d = u.length / 6,
                p = t.lineWidth / 2,
                _ = (0, s.hex2rgb)(t.lineColor),
                v = t.lineAlpha,
                m = _[0] * v,
                g = _[1] * v,
                y = _[2] * v,
                x = i[0],
                b = i[1],
                T = i[2],
                w = i[3],
                E = 0,
                S = 0,
                P = -(b - w),
                O = x - T,
                M = 0,
                C = 0,
                R = 0,
                A = 0,
                I = Math.sqrt(P * P + O * O);
            P /= I, O /= I, P *= p, O *= p;
            var D = t.lineAlignment,
                L = 2 * (1 - D),
                k = 2 * D;
            u.push(x - P * L, b - O * L, m, g, y, v), u.push(x + P * k, b + O * k, m, g, y, v);
            for (var N = 1; N < c - 1; ++N) {
                x = i[2 * (N - 1)], b = i[2 * (N - 1) + 1], T = i[2 * N], w = i[2 * N + 1], E = i[2 * (N + 1)], S = i[2 * (N + 1) + 1], P = -(b - w), O = x - T, I = Math.sqrt(P * P + O * O), P /= I, O /= I, P *= p, O *= p, M = -(w - S), C = T - E, I = Math.sqrt(M * M + C * C), M /= I, C /= I, M *= p, C *= p;
                var F = -O + b - (-O + w),
                    B = -P + T - (-P + x),
                    j = (-P + x) * (-O + w) - (-P + T) * (-O + b),
                    U = -C + S - (-C + w),
                    X = -M + T - (-M + E),
                    G = (-M + E) * (-C + w) - (-M + T) * (-C + S),
                    W = F * X - U * B;
                if (Math.abs(W) < .1) W += 10.1, u.push(T - P * L, w - O * L, m, g, y, v), u.push(T + P * k, w + O * k, m, g, y, v);
                else {
                    var V = (B * G - X * j) / W,
                        H = (U * j - F * G) / W;
                    (V - T) * (V - T) + (H - w) * (H - w) > 196 * p * p ? (R = P - M, A = O - C, I = Math.sqrt(R * R + A * A), R /= I, A /= I, R *= p, A *= p, u.push(T - R * L, w - A * L), u.push(m, g, y, v), u.push(T + R * k, w + A * k), u.push(m, g, y, v), u.push(T - R * k * L, w - A * L), u.push(m, g, y, v), f++) : (u.push(T + (V - T) * L, w + (H - w) * L), u.push(m, g, y, v), u.push(T - (V - T) * k, w - (H - w) * k), u.push(m, g, y, v))
                }
            }
            x = i[2 * (c - 2)], b = i[2 * (c - 2) + 1], T = i[2 * (c - 1)], w = i[2 * (c - 1) + 1], P = -(b - w), O = x - T, I = Math.sqrt(P * P + O * O), P /= I, O /= I, P *= p, O *= p, u.push(T - P * L, w - O * L), u.push(m, g, y, v), u.push(T + P * k, w + O * k), u.push(m, g, y, v), l.push(d);
            for (var z = 0; z < f; ++z) l.push(d++);
            l.push(d - 1)
        }
    }

    function n(t, e) {
        var i = 0,
            r = t.points;
        if (0 !== r.length) {
            var n = e.points,
                o = r.length / 2,
                a = (0, s.hex2rgb)(t.lineColor),
                h = t.lineAlpha,
                u = a[0] * h,
                l = a[1] * h,
                c = a[2] * h;
            for (i = 1; i < o; i++) {
                var f = r[2 * (i - 1)],
                    d = r[2 * (i - 1) + 1],
                    p = r[2 * i],
                    _ = r[2 * i + 1];
                n.push(f, d), n.push(u, l, c, h), n.push(p, _), n.push(u, l, c, h)
            }
        }
    }
    e.__esModule = !0, e.default = function(t, e, i) {
        t.nativeLines ? n(t, i) : r(t, e)
    };
    var o = i(4),
        s = i(2)
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = i(72),
        h = r(a),
        u = i(143),
        l = r(u),
        c = i(144),
        f = r(c),
        d = i(142),
        p = r(d),
        _ = i(27),
        v = r(_),
        m = i(26),
        g = r(m),
        y = i(138),
        x = r(y),
        b = i(13),
        T = r(b),
        w = i(137),
        E = r(w),
        S = i(139),
        P = r(S),
        O = i(147),
        M = r(O),
        C = i(148),
        R = r(C),
        A = i(2),
        I = i(6),
        D = r(I),
        L = i(0),
        k = 0,
        N = function(t) {
            function e(i, r, s) {
                n(this, e);
                var a = o(this, t.call(this, "WebGL", i, r, s));
                return a.legacy = a.options.legacy, a.legacy && (D.default.VertexArrayObject.FORCE_NATIVE = !0), a.type = L.RENDERER_TYPE.WEBGL, a.handleContextLost = a.handleContextLost.bind(a), a.handleContextRestored = a.handleContextRestored.bind(a), a.view.addEventListener("webglcontextlost", a.handleContextLost, !1), a.view.addEventListener("webglcontextrestored", a.handleContextRestored, !1), a._contextOptions = {
                    alpha: a.transparent,
                    antialias: a.options.antialias,
                    premultipliedAlpha: a.transparent && "notMultiplied" !== a.transparent,
                    stencil: !0,
                    preserveDrawingBuffer: a.options.preserveDrawingBuffer,
                    powerPreference: a.options.powerPreference
                }, a._backgroundColorRgba[3] = a.transparent ? 0 : 1, a.maskManager = new l.default(a), a.stencilManager = new f.default(a), a.emptyRenderer = new g.default(a), a.currentRenderer = a.emptyRenderer, a.textureManager = null, a.filterManager = null, a.initPlugins(), a.options.context && (0, R.default)(a.options.context), a.gl = a.options.context || D.default.createContext(a.view, a._contextOptions), a.CONTEXT_UID = k++, a.state = new P.default(a.gl), a.renderingToScreen = !0, a.boundTextures = null, a._activeShader = null, a._activeVao = null, a._activeRenderTarget = null, a._initContext(), a.drawModes = (0, M.default)(a.gl), a._nextTextureLocation = 0, a.setBlendMode(0), a
            }
            return s(e, t), e.prototype._initContext = function() {
                var t = this.gl;
                t.isContextLost() && t.getExtension("WEBGL_lose_context") && t.getExtension("WEBGL_lose_context").restoreContext();
                var e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
                this._activeShader = null, this._activeVao = null, this.boundTextures = new Array(e), this.emptyTextures = new Array(e), this._unknownBoundTextures = !1, this.textureManager = new x.default(this), this.filterManager = new p.default(this), this.textureGC = new E.default(this), this.state.resetToDefault(), this.rootRenderTarget = new v.default(t, this.width, this.height, null, this.resolution, !0), this.rootRenderTarget.clearColor = this._backgroundColorRgba, this.bindRenderTarget(this.rootRenderTarget);
                var i = new D.default.GLTexture.fromData(t, null, 1, 1),
                    r = {
                        _glTextures: {}
                    };
                r._glTextures[this.CONTEXT_UID] = {};
                for (var n = 0; n < e; n++) {
                    var o = new T.default;
                    o._glTextures[this.CONTEXT_UID] = i, this.boundTextures[n] = r, this.emptyTextures[n] = o, this.bindTexture(null, n)
                }
                this.emit("context", t), this.resize(this.screen.width, this.screen.height)
            }, e.prototype.render = function(t, e, i, r, n) {
                if (this.renderingToScreen = !e, this.emit("prerender"), this.gl && !this.gl.isContextLost()) {
                    if (this._nextTextureLocation = 0, e || (this._lastObjectRendered = t), !n) {
                        var o = t.parent;
                        t.parent = this._tempDisplayObjectParent, t.updateTransform(), t.parent = o
                    }
                    this.bindRenderTexture(e, r), this.currentRenderer.start(), (void 0 !== i ? i : this.clearBeforeRender) && this._activeRenderTarget.clear(), t.renderWebGL(this), this.currentRenderer.flush(), this.textureGC.update(), this.emit("postrender")
                }
            }, e.prototype.setObjectRenderer = function(t) {
                this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start())
            }, e.prototype.flush = function() {
                this.setObjectRenderer(this.emptyRenderer)
            }, e.prototype.resize = function(t, e) {
                h.default.prototype.resize.call(this, t, e), this.rootRenderTarget.resize(t, e), this._activeRenderTarget === this.rootRenderTarget && (this.rootRenderTarget.activate(), this._activeShader && (this._activeShader.uniforms.projectionMatrix = this.rootRenderTarget.projectionMatrix.toArray(!0)))
            }, e.prototype.setBlendMode = function(t) {
                this.state.setBlendMode(t)
            }, e.prototype.clear = function(t) {
                this._activeRenderTarget.clear(t)
            }, e.prototype.setTransform = function(t) {
                this._activeRenderTarget.transform = t
            }, e.prototype.clearRenderTexture = function(t, e) {
                var i = t.baseTexture,
                    r = i._glRenderTargets[this.CONTEXT_UID];
                return r && r.clear(e), this
            }, e.prototype.bindRenderTexture = function(t, e) {
                var i = void 0;
                if (t) {
                    var r = t.baseTexture;
                    r._glRenderTargets[this.CONTEXT_UID] || this.textureManager.updateTexture(r, 0), this.unbindTexture(r), i = r._glRenderTargets[this.CONTEXT_UID], i.setFrame(t.frame)
                } else i = this.rootRenderTarget;
                return i.transform = e, this.bindRenderTarget(i), this
            }, e.prototype.bindRenderTarget = function(t) {
                return t !== this._activeRenderTarget && (this._activeRenderTarget = t, t.activate(), this._activeShader && (this._activeShader.uniforms.projectionMatrix = t.projectionMatrix.toArray(!0)), this.stencilManager.setMaskStack(t.stencilMaskStack)), this
            }, e.prototype.bindShader = function(t, e) {
                return this._activeShader !== t && (this._activeShader = t, t.bind(), !1 !== e && (t.uniforms.projectionMatrix = this._activeRenderTarget.projectionMatrix.toArray(!0))), this
            }, e.prototype.bindTexture = function(t, e, i) {
                if (t = t || this.emptyTextures[e], t = t.baseTexture || t, t.touched = this.textureGC.count, i) e = e || 0;
                else {
                    for (var r = 0; r < this.boundTextures.length; r++)
                        if (this.boundTextures[r] === t) return r;
                    void 0 === e && (this._nextTextureLocation++, this._nextTextureLocation %= this.boundTextures.length, e = this.boundTextures.length - this._nextTextureLocation - 1)
                }
                var n = this.gl,
                    o = t._glTextures[this.CONTEXT_UID];
                return o ? (this.boundTextures[e] = t, n.activeTexture(n.TEXTURE0 + e), n.bindTexture(n.TEXTURE_2D, o.texture)) : this.textureManager.updateTexture(t, e), e
            }, e.prototype.unbindTexture = function(t) {
                var e = this.gl;
                if (t = t.baseTexture || t, this._unknownBoundTextures) {
                    this._unknownBoundTextures = !1;
                    for (var i = 0; i < this.boundTextures.length; i++) this.boundTextures[i] === this.emptyTextures[i] && (e.activeTexture(e.TEXTURE0 + i), e.bindTexture(e.TEXTURE_2D, this.emptyTextures[i]._glTextures[this.CONTEXT_UID].texture))
                }
                for (var r = 0; r < this.boundTextures.length; r++) this.boundTextures[r] === t && (this.boundTextures[r] = this.emptyTextures[r], e.activeTexture(e.TEXTURE0 + r), e.bindTexture(e.TEXTURE_2D, this.emptyTextures[r]._glTextures[this.CONTEXT_UID].texture));
                return this
            }, e.prototype.createVao = function() {
                return new D.default.VertexArrayObject(this.gl, this.state.attribState)
            }, e.prototype.bindVao = function(t) {
                return this._activeVao === t ? this : (t ? t.bind() : this._activeVao && this._activeVao.unbind(), this._activeVao = t, this)
            }, e.prototype.reset = function() {
                this.setObjectRenderer(this.emptyRenderer), this.bindVao(null), this._activeShader = null, this._activeRenderTarget = this.rootRenderTarget, this._unknownBoundTextures = !0;
                for (var t = 0; t < this.boundTextures.length; t++) this.boundTextures[t] = this.emptyTextures[t];
                return this.rootRenderTarget.activate(), this.state.resetToDefault(), this
            }, e.prototype.handleContextLost = function(t) {
                t.preventDefault()
            }, e.prototype.handleContextRestored = function() {
                this.textureManager.removeAll(), this.filterManager.destroy(!0), this._initContext()
            }, e.prototype.destroy = function(e) {
                this.destroyPlugins(), this.view.removeEventListener("webglcontextlost", this.handleContextLost), this.view.removeEventListener("webglcontextrestored", this.handleContextRestored), this.textureManager.destroy(), t.prototype.destroy.call(this, e), this.uid = 0, this.maskManager.destroy(), this.stencilManager.destroy(), this.filterManager.destroy(), this.maskManager = null, this.filterManager = null, this.textureManager = null, this.currentRenderer = null, this.handleContextLost = null, this.handleContextRestored = null, this._contextOptions = null, this.gl.useProgram(null), this.gl.getExtension("WEBGL_lose_context") && this.gl.getExtension("WEBGL_lose_context").loseContext(), this.gl = null
            }, e
        }(h.default);
    e.default = N, A.pluginTarget.mixin(N)
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var s = i(19),
        a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(s),
        h = function(t) {
            function e() {
                return r(this, e), n(this, t.apply(this, arguments))
            }
            return o(e, t), e.prototype.start = function() {}, e.prototype.stop = function() {
                this.flush()
            }, e.prototype.flush = function() {}, e.prototype.render = function(t) {}, e
        }(a.default);
    e.default = h
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = i(4),
        o = i(0),
        s = i(3),
        a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(s),
        h = i(6),
        u = function() {
            function t(e, i, s, u, l, c) {
                r(this, t), this.gl = e, this.frameBuffer = null, this.texture = null, this.clearColor = [0, 0, 0, 0], this.size = new n.Rectangle(0, 0, 1, 1), this.resolution = l || a.default.RESOLUTION, this.projectionMatrix = new n.Matrix, this.transform = null, this.frame = null, this.defaultFrame = new n.Rectangle, this.destinationFrame = null, this.sourceFrame = null, this.stencilBuffer = null, this.stencilMaskStack = [], this.filterData = null, this.filterPoolKey = "", this.scaleMode = void 0 !== u ? u : a.default.SCALE_MODE, this.root = c || !1, this.root ? (this.frameBuffer = new h.GLFramebuffer(e, 100, 100), this.frameBuffer.framebuffer = null) : (this.frameBuffer = h.GLFramebuffer.createRGBA(e, 100, 100), this.scaleMode === o.SCALE_MODES.NEAREST ? this.frameBuffer.texture.enableNearestScaling() : this.frameBuffer.texture.enableLinearScaling(), this.texture = this.frameBuffer.texture), this.setFrame(), this.resize(i, s)
            }
            return t.prototype.clear = function(t) {
                var e = t || this.clearColor;
                this.frameBuffer.clear(e[0], e[1], e[2], e[3])
            }, t.prototype.attachStencilBuffer = function() {
                this.root || this.frameBuffer.enableStencil()
            }, t.prototype.setFrame = function(t, e) {
                this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || this.destinationFrame
            }, t.prototype.activate = function() {
                var t = this.gl;
                this.frameBuffer.bind(), this.calculateProjection(this.destinationFrame, this.sourceFrame), this.transform && this.projectionMatrix.append(this.transform), this.destinationFrame !== this.sourceFrame ? (t.enable(t.SCISSOR_TEST), t.scissor(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)) : t.disable(t.SCISSOR_TEST), t.viewport(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)
            }, t.prototype.calculateProjection = function(t, e) {
                var i = this.projectionMatrix;
                e = e || t, i.identity(), this.root ? (i.a = 1 / t.width * 2, i.d = -1 / t.height * 2, i.tx = -1 - e.x * i.a, i.ty = 1 - e.y * i.d) : (i.a = 1 / t.width * 2, i.d = 1 / t.height * 2, i.tx = -1 - e.x * i.a, i.ty = -1 - e.y * i.d)
            }, t.prototype.resize = function(t, e) {
                if (t |= 0, e |= 0, this.size.width !== t || this.size.height !== e) {
                    this.size.width = t, this.size.height = e, this.defaultFrame.width = t, this.defaultFrame.height = e, this.frameBuffer.resize(t * this.resolution, e * this.resolution);
                    var i = this.frame || this.size;
                    this.calculateProjection(i)
                }
            }, t.prototype.destroy = function() {
                this.frameBuffer.stencil && this.gl.deleteRenderbuffer(this.frameBuffer.stencil), this.frameBuffer.destroy(), this.frameBuffer = null, this.texture = null
            }, t
        }();
    e.default = u
}, function(t, e, i) {
    "use strict";
    e.__esModule = !0;
    var r = i(2),
        n = i(74),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n),
        s = {
            getTintedTexture: function(t, e) {
                var i = t._texture;
                e = s.roundColor(e);
                var r = "#" + ("00000" + (0 | e).toString(16)).substr(-6);
                i.tintCache = i.tintCache || {};
                var n = i.tintCache[r],
                    o = void 0;
                if (n) {
                    if (n.tintId === i._updateID) return i.tintCache[r];
                    o = i.tintCache[r]
                } else o = s.canvas || document.createElement("canvas");
                if (s.tintMethod(i, e, o), o.tintId = i._updateID, s.convertTintToImage) {
                    var a = new Image;
                    a.src = o.toDataURL(), i.tintCache[r] = a
                } else i.tintCache[r] = o, s.canvas = null;
                return o
            },
            tintWithMultiply: function(t, e, i) {
                var r = i.getContext("2d"),
                    n = t._frame.clone(),
                    o = t.baseTexture.resolution;
                n.x *= o, n.y *= o, n.width *= o, n.height *= o, i.width = Math.ceil(n.width), i.height = Math.ceil(n.height), r.save(), r.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), r.fillRect(0, 0, n.width, n.height), r.globalCompositeOperation = "multiply", r.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), r.globalCompositeOperation = "destination-atop", r.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), r.restore()
            },
            tintWithOverlay: function(t, e, i) {
                var r = i.getContext("2d"),
                    n = t._frame.clone(),
                    o = t.baseTexture.resolution;
                n.x *= o, n.y *= o, n.width *= o, n.height *= o, i.width = Math.ceil(n.width), i.height = Math.ceil(n.height), r.save(), r.globalCompositeOperation = "copy", r.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), r.fillRect(0, 0, n.width, n.height), r.globalCompositeOperation = "destination-atop", r.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height), r.restore()
            },
            tintWithPerPixel: function(t, e, i) {
                var n = i.getContext("2d"),
                    o = t._frame.clone(),
                    s = t.baseTexture.resolution;
                o.x *= s, o.y *= s, o.width *= s, o.height *= s, i.width = Math.ceil(o.width), i.height = Math.ceil(o.height), n.save(), n.globalCompositeOperation = "copy", n.drawImage(t.baseTexture.source, o.x, o.y, o.width, o.height, 0, 0, o.width, o.height), n.restore();
                for (var a = (0, r.hex2rgb)(e), h = a[0], u = a[1], l = a[2], c = n.getImageData(0, 0, o.width, o.height), f = c.data, d = 0; d < f.length; d += 4) f[d + 0] *= h, f[d + 1] *= u, f[d + 2] *= l;
                n.putImageData(c, 0, 0)
            },
            roundColor: function(t) {
                var e = s.cacheStepsPerColorChannel,
                    i = (0, r.hex2rgb)(t);
                return i[0] = Math.min(255, i[0] / e * e), i[1] = Math.min(255, i[1] / e * e), i[2] = Math.min(255, i[2] / e * e), (0, r.rgb2hex)(i)
            },
            cacheStepsPerColorChannel: 8,
            convertTintToImage: !1,
            canUseMultiply: (0, o.default)(),
            tintMethod: 0
        };
    s.tintMethod = s.canUseMultiply ? s.tintWithMultiply : s.tintWithPerPixel, e.default = s
}, , function(t, e, i) {
    "use strict";
    "use restrict";

    function r(t) {
        var e = 32;
        return t &= -t, t && e--, 65535 & t && (e -= 16), 16711935 & t && (e -= 8), 252645135 & t && (e -= 4), 858993459 & t && (e -= 2), 1431655765 & t && (e -= 1), e
    }
    e.INT_BITS = 32, e.INT_MAX = 2147483647, e.INT_MIN = -1 << 31, e.sign = function(t) {
        return (t > 0) - (t < 0)
    }, e.abs = function(t) {
        var e = t >> 31;
        return (t ^ e) - e
    }, e.min = function(t, e) {
        return e ^ (t ^ e) & -(t < e)
    }, e.max = function(t, e) {
        return t ^ (t ^ e) & -(t < e)
    }, e.isPow2 = function(t) {
        return !(t & t - 1 || !t)
    }, e.log2 = function(t) {
        var e, i;
        return e = (t > 65535) << 4, t >>>= e, i = (t > 255) << 3, t >>>= i, e |= i, i = (t > 15) << 2, t >>>= i, e |= i, i = (t > 3) << 1, t >>>= i, (e |= i) | t >> 1
    }, e.log10 = function(t) {
        return t >= 1e9 ? 9 : t >= 1e8 ? 8 : t >= 1e7 ? 7 : t >= 1e6 ? 6 : t >= 1e5 ? 5 : t >= 1e4 ? 4 : t >= 1e3 ? 3 : t >= 100 ? 2 : t >= 10 ? 1 : 0
    }, e.popCount = function(t) {
        return t -= t >>> 1 & 1431655765, 16843009 * ((t = (858993459 & t) + (t >>> 2 & 858993459)) + (t >>> 4) & 252645135) >>> 24
    }, e.countTrailingZeros = r, e.nextPow2 = function(t) {
        return t += 0 === t, --t, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, (t |= t >>> 16) + 1
    }, e.prevPow2 = function(t) {
        return t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, (t |= t >>> 16) - (t >>> 1)
    }, e.parity = function(t) {
        return t ^= t >>> 16, t ^= t >>> 8, t ^= t >>> 4, 27030 >>> (t &= 15) & 1
    };
    var n = new Array(256);
    ! function(t) {
        for (var e = 0; e < 256; ++e) {
            var i = e,
                r = e,
                n = 7;
            for (i >>>= 1; i; i >>>= 1) r <<= 1, r |= 1 & i, --n;
            t[e] = r << n & 255
        }
    }(n), e.reverse = function(t) {
        return n[255 & t] << 24 | n[t >>> 8 & 255] << 16 | n[t >>> 16 & 255] << 8 | n[t >>> 24 & 255]
    }, e.interleave2 = function(t, e) {
        return t &= 65535, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e &= 65535, e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1
    }, e.deinterleave2 = function(t, e) {
        return t = t >>> e & 1431655765, t = 858993459 & (t | t >>> 1), t = 252645135 & (t | t >>> 2), t = 16711935 & (t | t >>> 4), (t = 65535 & (t | t >>> 16)) << 16 >> 16
    }, e.interleave3 = function(t, e, i) {
        return t &= 1023, t = 4278190335 & (t | t << 16), t = 251719695 & (t | t << 8), t = 3272356035 & (t | t << 4), t = 1227133513 & (t | t << 2), e &= 1023, e = 4278190335 & (e | e << 16), e = 251719695 & (e | e << 8), e = 3272356035 & (e | e << 4), e = 1227133513 & (e | e << 2), t |= e << 1, i &= 1023, i = 4278190335 & (i | i << 16), i = 251719695 & (i | i << 8), i = 3272356035 & (i | i << 4), i = 1227133513 & (i | i << 2), t | i << 2
    }, e.deinterleave3 = function(t, e) {
        return t = t >>> e & 1227133513, t = 3272356035 & (t | t >>> 2), t = 251719695 & (t | t >>> 4), t = 4278190335 & (t | t >>> 8), (t = 1023 & (t | t >>> 16)) << 22 >> 22
    }, e.nextCombination = function(t) {
        var e = t | t - 1;
        return e + 1 | (~e & -~e) - 1 >>> r(t) + 1
    }
}, function(t, e, i) {
    "use strict";

    function r(t, e, i) {
        i = i || 2;
        var r = e && e.length,
            o = r ? e[0] * i : t.length,
            a = n(t, 0, o, i, !0),
            h = [];
        if (!a || a.next === a.prev) return h;
        var u, l, f, d, p, _, v;
        if (r && (a = c(t, e, a, i)), t.length > 80 * i) {
            u = f = t[0], l = d = t[1];
            for (var m = i; m < o; m += i) p = t[m], _ = t[m + 1], p < u && (u = p), _ < l && (l = _), p > f && (f = p), _ > d && (d = _);
            v = Math.max(f - u, d - l), v = 0 !== v ? 1 / v : 0
        }
        return s(a, h, i, u, l, v), h
    }

    function n(t, e, i, r, n) {
        var o, s;
        if (n === A(t, e, i, r) > 0)
            for (o = e; o < i; o += r) s = M(o, t[o], t[o + 1], s);
        else
            for (o = i - r; o >= e; o -= r) s = M(o, t[o], t[o + 1], s);
        return s && T(s, s.next) && (C(s), s = s.next), s
    }

    function o(t, e) {
        if (!t) return t;
        e || (e = t);
        var i, r = t;
        do {
            if (i = !1, r.steiner || !T(r, r.next) && 0 !== b(r.prev, r, r.next)) r = r.next;
            else {
                if (C(r), (r = e = r.prev) === r.next) break;
                i = !0
            }
        } while (i || r !== e);
        return e
    }

    function s(t, e, i, r, n, c, f) {
        if (t) {
            !f && c && _(t, r, n, c);
            for (var d, p, v = t; t.prev !== t.next;)
                if (d = t.prev, p = t.next, c ? h(t, r, n, c) : a(t)) e.push(d.i / i), e.push(t.i / i), e.push(p.i / i), C(t), t = p.next, v = p.next;
                else if ((t = p) === v) {
                f ? 1 === f ? (t = u(t, e, i), s(t, e, i, r, n, c, 2)) : 2 === f && l(t, e, i, r, n, c) : s(o(t), e, i, r, n, c, 1);
                break
            }
        }
    }

    function a(t) {
        var e = t.prev,
            i = t,
            r = t.next;
        if (b(e, i, r) >= 0) return !1;
        for (var n = t.next.next; n !== t.prev;) {
            if (y(e.x, e.y, i.x, i.y, r.x, r.y, n.x, n.y) && b(n.prev, n, n.next) >= 0) return !1;
            n = n.next
        }
        return !0
    }

    function h(t, e, i, r) {
        var n = t.prev,
            o = t,
            s = t.next;
        if (b(n, o, s) >= 0) return !1;
        for (var a = n.x < o.x ? n.x < s.x ? n.x : s.x : o.x < s.x ? o.x : s.x, h = n.y < o.y ? n.y < s.y ? n.y : s.y : o.y < s.y ? o.y : s.y, u = n.x > o.x ? n.x > s.x ? n.x : s.x : o.x > s.x ? o.x : s.x, l = n.y > o.y ? n.y > s.y ? n.y : s.y : o.y > s.y ? o.y : s.y, c = m(a, h, e, i, r), f = m(u, l, e, i, r), d = t.prevZ, p = t.nextZ; d && d.z >= c && p && p.z <= f;) {
            if (d !== t.prev && d !== t.next && y(n.x, n.y, o.x, o.y, s.x, s.y, d.x, d.y) && b(d.prev, d, d.next) >= 0) return !1;
            if (d = d.prevZ, p !== t.prev && p !== t.next && y(n.x, n.y, o.x, o.y, s.x, s.y, p.x, p.y) && b(p.prev, p, p.next) >= 0) return !1;
            p = p.nextZ
        }
        for (; d && d.z >= c;) {
            if (d !== t.prev && d !== t.next && y(n.x, n.y, o.x, o.y, s.x, s.y, d.x, d.y) && b(d.prev, d, d.next) >= 0) return !1;
            d = d.prevZ
        }
        for (; p && p.z <= f;) {
            if (p !== t.prev && p !== t.next && y(n.x, n.y, o.x, o.y, s.x, s.y, p.x, p.y) && b(p.prev, p, p.next) >= 0) return !1;
            p = p.nextZ
        }
        return !0
    }

    function u(t, e, i) {
        var r = t;
        do {
            var n = r.prev,
                o = r.next.next;
            !T(n, o) && w(n, r, r.next, o) && S(n, o) && S(o, n) && (e.push(n.i / i), e.push(r.i / i), e.push(o.i / i), C(r), C(r.next), r = t = o), r = r.next
        } while (r !== t);
        return r
    }

    function l(t, e, i, r, n, a) {
        var h = t;
        do {
            for (var u = h.next.next; u !== h.prev;) {
                if (h.i !== u.i && x(h, u)) {
                    var l = O(h, u);
                    return h = o(h, h.next), l = o(l, l.next), s(h, e, i, r, n, a), void s(l, e, i, r, n, a)
                }
                u = u.next
            }
            h = h.next
        } while (h !== t)
    }

    function c(t, e, i, r) {
        var s, a, h, u, l, c = [];
        for (s = 0, a = e.length; s < a; s++) h = e[s] * r, u = s < a - 1 ? e[s + 1] * r : t.length, l = n(t, h, u, r, !1), l === l.next && (l.steiner = !0), c.push(g(l));
        for (c.sort(f), s = 0; s < c.length; s++) d(c[s], i), i = o(i, i.next);
        return i
    }

    function f(t, e) {
        return t.x - e.x
    }

    function d(t, e) {
        if (e = p(t, e)) {
            var i = O(e, t);
            o(i, i.next)
        }
    }

    function p(t, e) {
        var i, r = e,
            n = t.x,
            o = t.y,
            s = -1 / 0;
        do {
            if (o <= r.y && o >= r.next.y && r.next.y !== r.y) {
                var a = r.x + (o - r.y) * (r.next.x - r.x) / (r.next.y - r.y);
                if (a <= n && a > s) {
                    if (s = a, a === n) {
                        if (o === r.y) return r;
                        if (o === r.next.y) return r.next
                    }
                    i = r.x < r.next.x ? r : r.next
                }
            }
            r = r.next
        } while (r !== e);
        if (!i) return null;
        if (n === s) return i.prev;
        var h, u = i,
            l = i.x,
            c = i.y,
            f = 1 / 0;
        for (r = i.next; r !== u;) n >= r.x && r.x >= l && n !== r.x && y(o < c ? n : s, o, l, c, o < c ? s : n, o, r.x, r.y) && ((h = Math.abs(o - r.y) / (n - r.x)) < f || h === f && r.x > i.x) && S(r, t) && (i = r, f = h), r = r.next;
        return i
    }

    function _(t, e, i, r) {
        var n = t;
        do {
            null === n.z && (n.z = m(n.x, n.y, e, i, r)), n.prevZ = n.prev, n.nextZ = n.next, n = n.next
        } while (n !== t);
        n.prevZ.nextZ = null, n.prevZ = null, v(n)
    }

    function v(t) {
        var e, i, r, n, o, s, a, h, u = 1;
        do {
            for (i = t, t = null, o = null, s = 0; i;) {
                for (s++, r = i, a = 0, e = 0; e < u && (a++, r = r.nextZ); e++);
                for (h = u; a > 0 || h > 0 && r;) 0 !== a && (0 === h || !r || i.z <= r.z) ? (n = i, i = i.nextZ, a--) : (n = r, r = r.nextZ, h--), o ? o.nextZ = n : t = n, n.prevZ = o, o = n;
                i = r
            }
            o.nextZ = null, u *= 2
        } while (s > 1);
        return t
    }

    function m(t, e, i, r, n) {
        return t = 32767 * (t - i) * n, e = 32767 * (e - r) * n, t = 16711935 & (t | t << 8), t = 252645135 & (t | t << 4), t = 858993459 & (t | t << 2), t = 1431655765 & (t | t << 1), e = 16711935 & (e | e << 8), e = 252645135 & (e | e << 4), e = 858993459 & (e | e << 2), e = 1431655765 & (e | e << 1), t | e << 1
    }

    function g(t) {
        var e = t,
            i = t;
        do {
            (e.x < i.x || e.x === i.x && e.y < i.y) && (i = e), e = e.next
        } while (e !== t);
        return i
    }

    function y(t, e, i, r, n, o, s, a) {
        return (n - s) * (e - a) - (t - s) * (o - a) >= 0 && (t - s) * (r - a) - (i - s) * (e - a) >= 0 && (i - s) * (o - a) - (n - s) * (r - a) >= 0
    }

    function x(t, e) {
        return t.next.i !== e.i && t.prev.i !== e.i && !E(t, e) && S(t, e) && S(e, t) && P(t, e)
    }

    function b(t, e, i) {
        return (e.y - t.y) * (i.x - e.x) - (e.x - t.x) * (i.y - e.y)
    }

    function T(t, e) {
        return t.x === e.x && t.y === e.y
    }

    function w(t, e, i, r) {
        return !!(T(t, e) && T(i, r) || T(t, r) && T(i, e)) || b(t, e, i) > 0 != b(t, e, r) > 0 && b(i, r, t) > 0 != b(i, r, e) > 0
    }

    function E(t, e) {
        var i = t;
        do {
            if (i.i !== t.i && i.next.i !== t.i && i.i !== e.i && i.next.i !== e.i && w(i, i.next, t, e)) return !0;
            i = i.next
        } while (i !== t);
        return !1
    }

    function S(t, e) {
        return b(t.prev, t, t.next) < 0 ? b(t, e, t.next) >= 0 && b(t, t.prev, e) >= 0 : b(t, e, t.prev) < 0 || b(t, t.next, e) < 0
    }

    function P(t, e) {
        var i = t,
            r = !1,
            n = (t.x + e.x) / 2,
            o = (t.y + e.y) / 2;
        do {
            i.y > o != i.next.y > o && i.next.y !== i.y && n < (i.next.x - i.x) * (o - i.y) / (i.next.y - i.y) + i.x && (r = !r), i = i.next
        } while (i !== t);
        return r
    }

    function O(t, e) {
        var i = new R(t.i, t.x, t.y),
            r = new R(e.i, e.x, e.y),
            n = t.next,
            o = e.prev;
        return t.next = e, e.prev = t, i.next = n, n.prev = i, r.next = i, i.prev = r, o.next = r, r.prev = o, r
    }

    function M(t, e, i, r) {
        var n = new R(t, e, i);
        return r ? (n.next = r.next, n.prev = r, r.next.prev = n, r.next = n) : (n.prev = n, n.next = n), n
    }

    function C(t) {
        t.next.prev = t.prev, t.prev.next = t.next, t.prevZ && (t.prevZ.nextZ = t.nextZ), t.nextZ && (t.nextZ.prevZ = t.prevZ)
    }

    function R(t, e, i) {
        this.i = t, this.x = e, this.y = i, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
    }

    function A(t, e, i, r) {
        for (var n = 0, o = e, s = i - r; o < i; o += r) n += (t[s] - t[o]) * (t[o + 1] + t[s + 1]), s = o;
        return n
    }
    t.exports = r, t.exports.default = r, r.deviation = function(t, e, i, r) {
        var n = e && e.length,
            o = n ? e[0] * i : t.length,
            s = Math.abs(A(t, 0, o, i));
        if (n)
            for (var a = 0, h = e.length; a < h; a++) {
                var u = e[a] * i,
                    l = a < h - 1 ? e[a + 1] * i : t.length;
                s -= Math.abs(A(t, u, l, i))
            }
        var c = 0;
        for (a = 0; a < r.length; a += 3) {
            var f = r[a] * i,
                d = r[a + 1] * i,
                p = r[a + 2] * i;
            c += Math.abs((t[f] - t[p]) * (t[d + 1] - t[f + 1]) - (t[f] - t[d]) * (t[p + 1] - t[f + 1]))
        }
        return 0 === s && 0 === c ? 0 : Math.abs((c - s) / s)
    }, r.flatten = function(t) {
        for (var e = t[0][0].length, i = {
                vertices: [],
                holes: [],
                dimensions: e
            }, r = 0, n = 0; n < t.length; n++) {
            for (var o = 0; o < t[n].length; o++)
                for (var s = 0; s < e; s++) i.vertices.push(t[n][o][s]);
            n > 0 && (r += t[n - 1].length, i.holes.push(r))
        }
        return i
    }
}, function(t, e, i) {
    var r, n, o;
    ! function(i) {
        function s(t, e) {
            return t.test(e)
        }

        function a(t) {
            var e = t || ("undefined" != typeof navigator ? navigator.userAgent : ""),
                i = e.split("[FBAN");
            void 0 !== i[1] && (e = i[0]), void 0 !== (i = e.split("Twitter"))[1] && (e = i[0]);
            var r = {
                apple: {
                    phone: s(h, e) && !s(_, e),
                    ipod: s(u, e),
                    tablet: !s(h, e) && s(l, e) && !s(_, e),
                    device: (s(h, e) || s(u, e) || s(l, e)) && !s(_, e)
                },
                amazon: {
                    phone: s(d, e),
                    tablet: !s(d, e) && s(p, e),
                    device: s(d, e) || s(p, e)
                },
                android: {
                    phone: !s(_, e) && s(d, e) || !s(_, e) && s(c, e),
                    tablet: !s(_, e) && !s(d, e) && !s(c, e) && (s(p, e) || s(f, e)),
                    device: !s(_, e) && (s(d, e) || s(p, e) || s(c, e) || s(f, e))
                },
                windows: {
                    phone: s(_, e),
                    tablet: s(v, e),
                    device: s(_, e) || s(v, e)
                },
                other: {
                    blackberry: s(m, e),
                    blackberry10: s(g, e),
                    opera: s(y, e),
                    firefox: s(b, e),
                    chrome: s(x, e),
                    device: s(m, e) || s(g, e) || s(y, e) || s(b, e) || s(x, e)
                }
            };
            return r.any = r.apple.device || r.android.device || r.windows.device || r.other.device, r.phone = r.apple.phone || r.android.phone || r.windows.phone, r.tablet = r.apple.tablet || r.android.tablet || r.windows.tablet, r
        }
        var h = /iPhone/i,
            u = /iPod/i,
            l = /iPad/i,
            c = /\bAndroid(?:.+)Mobile\b/i,
            f = /Android/i,
            d = /\bAndroid(?:.+)SD4930UR\b/i,
            p = /\bAndroid(?:.+)(?:KF[A-Z]{2,4})\b/i,
            _ = /Windows Phone/i,
            v = /\bWindows(?:.+)ARM\b/i,
            m = /BlackBerry/i,
            g = /BB10/i,
            y = /Opera Mini/i,
            x = /\b(CriOS|Chrome)(?:.+)Mobile/i,
            b = /\Mobile(?:.+)Firefox\b/i;
        void 0 !== t && t.exports && "undefined" == typeof window ? t.exports = a : void 0 !== t && t.exports && "undefined" != typeof window ? t.exports = a() : (n = [], r = i.isMobile = a(), void 0 !== (o = "function" == typeof r ? r.apply(e, n) : r) && (t.exports = o))
    }(this)
}, function(t, e) {
    var i = function(t, e) {
            if (!r) {
                var i = Object.keys(n);
                r = {};
                for (var o = 0; o < i.length; ++o) {
                    var s = i[o];
                    r[t[s]] = n[s]
                }
            }
            return r[e]
        },
        r = null,
        n = {
            FLOAT: "float",
            FLOAT_VEC2: "vec2",
            FLOAT_VEC3: "vec3",
            FLOAT_VEC4: "vec4",
            INT: "int",
            INT_VEC2: "ivec2",
            INT_VEC3: "ivec3",
            INT_VEC4: "ivec4",
            BOOL: "bool",
            BOOL_VEC2: "bvec2",
            BOOL_VEC3: "bvec3",
            BOOL_VEC4: "bvec4",
            FLOAT_MAT2: "mat2",
            FLOAT_MAT3: "mat3",
            FLOAT_MAT4: "mat4",
            SAMPLER_2D: "sampler2D"
        };
    t.exports = i
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = i(4),
        o = function() {
            function t() {
                r(this, t), this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null
            }
            return t.prototype.isEmpty = function() {
                return this.minX > this.maxX || this.minY > this.maxY
            }, t.prototype.clear = function() {
                this.updateID++, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0
            }, t.prototype.getRectangle = function(t) {
                return this.minX > this.maxX || this.minY > this.maxY ? n.Rectangle.EMPTY : (t = t || new n.Rectangle(0, 0, 1, 1), t.x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t)
            }, t.prototype.addPoint = function(t) {
                this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y)
            }, t.prototype.addQuad = function(t) {
                var e = this.minX,
                    i = this.minY,
                    r = this.maxX,
                    n = this.maxY,
                    o = t[0],
                    s = t[1];
                e = o < e ? o : e, i = s < i ? s : i, r = o > r ? o : r, n = s > n ? s : n, o = t[2], s = t[3], e = o < e ? o : e, i = s < i ? s : i, r = o > r ? o : r, n = s > n ? s : n, o = t[4], s = t[5], e = o < e ? o : e, i = s < i ? s : i, r = o > r ? o : r, n = s > n ? s : n, o = t[6], s = t[7], e = o < e ? o : e, i = s < i ? s : i, r = o > r ? o : r, n = s > n ? s : n, this.minX = e, this.minY = i, this.maxX = r, this.maxY = n
            }, t.prototype.addFrame = function(t, e, i, r, n) {
                var o = t.worldTransform,
                    s = o.a,
                    a = o.b,
                    h = o.c,
                    u = o.d,
                    l = o.tx,
                    c = o.ty,
                    f = this.minX,
                    d = this.minY,
                    p = this.maxX,
                    _ = this.maxY,
                    v = s * e + h * i + l,
                    m = a * e + u * i + c;
                f = v < f ? v : f, d = m < d ? m : d, p = v > p ? v : p, _ = m > _ ? m : _, v = s * r + h * i + l, m = a * r + u * i + c, f = v < f ? v : f, d = m < d ? m : d, p = v > p ? v : p, _ = m > _ ? m : _, v = s * e + h * n + l, m = a * e + u * n + c, f = v < f ? v : f, d = m < d ? m : d, p = v > p ? v : p, _ = m > _ ? m : _, v = s * r + h * n + l, m = a * r + u * n + c, f = v < f ? v : f, d = m < d ? m : d, p = v > p ? v : p, _ = m > _ ? m : _, this.minX = f, this.minY = d, this.maxX = p, this.maxY = _
            }, t.prototype.addVertices = function(t, e, i, r) {
                for (var n = t.worldTransform, o = n.a, s = n.b, a = n.c, h = n.d, u = n.tx, l = n.ty, c = this.minX, f = this.minY, d = this.maxX, p = this.maxY, _ = i; _ < r; _ += 2) {
                    var v = e[_],
                        m = e[_ + 1],
                        g = o * v + a * m + u,
                        y = h * m + s * v + l;
                    c = g < c ? g : c, f = y < f ? y : f, d = g > d ? g : d, p = y > p ? y : p
                }
                this.minX = c, this.minY = f, this.maxX = d, this.maxY = p
            }, t.prototype.addBounds = function(t) {
                var e = this.minX,
                    i = this.minY,
                    r = this.maxX,
                    n = this.maxY;
                this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < i ? t.minY : i, this.maxX = t.maxX > r ? t.maxX : r, this.maxY = t.maxY > n ? t.maxY : n
            }, t.prototype.addBoundsMask = function(t, e) {
                var i = t.minX > e.minX ? t.minX : e.minX,
                    r = t.minY > e.minY ? t.minY : e.minY,
                    n = t.maxX < e.maxX ? t.maxX : e.maxX,
                    o = t.maxY < e.maxY ? t.maxY : e.maxY;
                if (i <= n && r <= o) {
                    var s = this.minX,
                        a = this.minY,
                        h = this.maxX,
                        u = this.maxY;
                    this.minX = i < s ? i : s, this.minY = r < a ? r : a, this.maxX = n > h ? n : h, this.maxY = o > u ? o : u
                }
            }, t.prototype.addBoundsArea = function(t, e) {
                var i = t.minX > e.x ? t.minX : e.x,
                    r = t.minY > e.y ? t.minY : e.y,
                    n = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
                    o = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
                if (i <= n && r <= o) {
                    var s = this.minX,
                        a = this.minY,
                        h = this.maxX,
                        u = this.maxY;
                    this.minX = i < s ? i : s, this.minY = r < a ? r : a, this.maxX = n > h ? n : h, this.maxY = o > u ? o : u
                }
            }, t
        }();
    e.default = o
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = i(4),
        o = function() {
            function t() {
                r(this, t), this.worldTransform = new n.Matrix, this.localTransform = new n.Matrix, this._worldID = 0, this._parentID = 0
            }
            return t.prototype.updateLocalTransform = function() {}, t.prototype.updateTransform = function(t) {
                var e = t.worldTransform,
                    i = this.worldTransform,
                    r = this.localTransform;
                i.a = r.a * e.a + r.b * e.c, i.b = r.a * e.b + r.b * e.d, i.c = r.c * e.a + r.d * e.c, i.d = r.c * e.b + r.d * e.d, i.tx = r.tx * e.a + r.ty * e.c + e.tx, i.ty = r.tx * e.b + r.ty * e.d + e.ty, this._worldID++
            }, t
        }();
    e.default = o, o.prototype.updateWorldTransform = o.prototype.updateTransform, o.IDENTITY = new o
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        o = i(37),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(o),
        a = i(0),
        h = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                r(this, t), this.a = e, this.b = i, this.c = n, this.d = o, this.tx = s, this.ty = a, this.array = null
            }
            return t.prototype.fromArray = function(t) {
                this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
            }, t.prototype.set = function(t, e, i, r, n, o) {
                return this.a = t, this.b = e, this.c = i, this.d = r, this.tx = n, this.ty = o, this
            }, t.prototype.toArray = function(t, e) {
                this.array || (this.array = new Float32Array(9));
                var i = e || this.array;
                return t ? (i[0] = this.a, i[1] = this.b, i[2] = 0, i[3] = this.c, i[4] = this.d, i[5] = 0, i[6] = this.tx, i[7] = this.ty, i[8] = 1) : (i[0] = this.a, i[1] = this.c, i[2] = this.tx, i[3] = this.b, i[4] = this.d, i[5] = this.ty, i[6] = 0, i[7] = 0, i[8] = 1), i
            }, t.prototype.apply = function(t, e) {
                e = e || new s.default;
                var i = t.x,
                    r = t.y;
                return e.x = this.a * i + this.c * r + this.tx, e.y = this.b * i + this.d * r + this.ty, e
            }, t.prototype.applyInverse = function(t, e) {
                e = e || new s.default;
                var i = 1 / (this.a * this.d + this.c * -this.b),
                    r = t.x,
                    n = t.y;
                return e.x = this.d * i * r + -this.c * i * n + (this.ty * this.c - this.tx * this.d) * i, e.y = this.a * i * n + -this.b * i * r + (-this.ty * this.a + this.tx * this.b) * i, e
            }, t.prototype.translate = function(t, e) {
                return this.tx += t, this.ty += e, this
            }, t.prototype.scale = function(t, e) {
                return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
            }, t.prototype.rotate = function(t) {
                var e = Math.cos(t),
                    i = Math.sin(t),
                    r = this.a,
                    n = this.c,
                    o = this.tx;
                return this.a = r * e - this.b * i, this.b = r * i + this.b * e, this.c = n * e - this.d * i, this.d = n * i + this.d * e, this.tx = o * e - this.ty * i, this.ty = o * i + this.ty * e, this
            }, t.prototype.append = function(t) {
                var e = this.a,
                    i = this.b,
                    r = this.c,
                    n = this.d;
                return this.a = t.a * e + t.b * r, this.b = t.a * i + t.b * n, this.c = t.c * e + t.d * r, this.d = t.c * i + t.d * n, this.tx = t.tx * e + t.ty * r + this.tx, this.ty = t.tx * i + t.ty * n + this.ty, this
            }, t.prototype.setTransform = function(t, e, i, r, n, o, s, a, h) {
                return this.a = Math.cos(s + h) * n, this.b = Math.sin(s + h) * n, this.c = -Math.sin(s - a) * o, this.d = Math.cos(s - a) * o, this.tx = t - (i * this.a + r * this.c), this.ty = e - (i * this.b + r * this.d), this
            }, t.prototype.prepend = function(t) {
                var e = this.tx;
                if (1 !== t.a || 0 !== t.b || 0 !== t.c || 1 !== t.d) {
                    var i = this.a,
                        r = this.c;
                    this.a = i * t.a + this.b * t.c, this.b = i * t.b + this.b * t.d, this.c = r * t.a + this.d * t.c, this.d = r * t.b + this.d * t.d
                }
                return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
            }, t.prototype.decompose = function(t) {
                var e = this.a,
                    i = this.b,
                    r = this.c,
                    n = this.d,
                    o = -Math.atan2(-r, n),
                    s = Math.atan2(i, e),
                    h = Math.abs(o + s);
                return h < 1e-5 || Math.abs(a.PI_2 - h) < 1e-5 ? (t.rotation = s, e < 0 && n >= 0 && (t.rotation += t.rotation <= 0 ? Math.PI : -Math.PI), t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = o, t.skew.y = s), t.scale.x = Math.sqrt(e * e + i * i), t.scale.y = Math.sqrt(r * r + n * n), t.position.x = this.tx, t.position.y = this.ty, t
            }, t.prototype.invert = function() {
                var t = this.a,
                    e = this.b,
                    i = this.c,
                    r = this.d,
                    n = this.tx,
                    o = t * r - e * i;
                return this.a = r / o, this.b = -e / o, this.c = -i / o, this.d = t / o, this.tx = (i * this.ty - r * n) / o, this.ty = -(t * this.ty - e * n) / o, this
            }, t.prototype.identity = function() {
                return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
            }, t.prototype.clone = function() {
                var e = new t;
                return e.a = this.a, e.b = this.b, e.c = this.c, e.d = this.d, e.tx = this.tx, e.ty = this.ty, e
            }, t.prototype.copy = function(t) {
                return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
            }, n(t, null, [{
                key: "IDENTITY",
                get: function() {
                    return new t
                }
            }, {
                key: "TEMP_MATRIX",
                get: function() {
                    return new t
                }
            }]), t
        }();
    e.default = h
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = function() {
        function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            r(this, t), this.x = e, this.y = i
        }
        return t.prototype.clone = function() {
            return new t(this.x, this.y)
        }, t.prototype.copy = function(t) {
            this.set(t.x, t.y)
        }, t.prototype.equals = function(t) {
            return t.x === this.x && t.y === this.y
        }, t.prototype.set = function(t, e) {
            this.x = t || 0, this.y = e || (0 !== e ? this.x : 0)
        }, t
    }();
    e.default = n
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        o = i(0),
        s = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                r(this, t), this.x = Number(e), this.y = Number(i), this.width = Number(n), this.height = Number(s), this.type = o.SHAPES.RECT
            }
            return t.prototype.clone = function() {
                return new t(this.x, this.y, this.width, this.height)
            }, t.prototype.copy = function(t) {
                return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
            }, t.prototype.contains = function(t, e) {
                return !(this.width <= 0 || this.height <= 0) && (t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height)
            }, t.prototype.pad = function(t, e) {
                t = t || 0, e = e || (0 !== e ? t : 0), this.x -= t, this.y -= e, this.width += 2 * t, this.height += 2 * e
            }, t.prototype.fit = function(t) {
                var e = Math.max(this.x, t.x),
                    i = Math.min(this.x + this.width, t.x + t.width),
                    r = Math.max(this.y, t.y),
                    n = Math.min(this.y + this.height, t.y + t.height);
                this.x = e, this.width = Math.max(i - e, 0), this.y = r, this.height = Math.max(n - r, 0)
            }, t.prototype.enlarge = function(t) {
                var e = Math.min(this.x, t.x),
                    i = Math.max(this.x + this.width, t.x + t.width),
                    r = Math.min(this.y, t.y),
                    n = Math.max(this.y + this.height, t.y + t.height);
                this.x = e, this.width = i - e, this.y = r, this.height = n - r
            }, t.prototype.ceil = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .001,
                    i = Math.ceil((this.x + this.width - e) * t) / t,
                    r = Math.ceil((this.y + this.height - e) * t) / t;
                this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = i - this.x, this.height = r - this.y
            }, n(t, [{
                key: "left",
                get: function() {
                    return this.x
                }
            }, {
                key: "right",
                get: function() {
                    return this.x + this.width
                }
            }, {
                key: "top",
                get: function() {
                    return this.y
                }
            }, {
                key: "bottom",
                get: function() {
                    return this.y + this.height
                }
            }], [{
                key: "EMPTY",
                get: function() {
                    return new t(0, 0, 0, 0)
                }
            }]), t
        }();
    e.default = s
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        h = i(4),
        u = i(2),
        l = i(0),
        c = i(9),
        f = r(c),
        d = i(17),
        p = r(d),
        _ = new h.Point,
        v = function(t) {
            function e(i) {
                n(this, e);
                var r = o(this, t.call(this));
                return r._anchor = new h.ObservablePoint(r._onAnchorUpdate, r, i ? i.defaultAnchor.x : 0, i ? i.defaultAnchor.y : 0), r._texture = null, r._width = 0, r._height = 0, r._tint = null, r._tintRGB = null, r.tint = 16777215, r.blendMode = l.BLEND_MODES.NORMAL, r.shader = null, r.cachedTint = 16777215, r.texture = i || f.default.EMPTY, r.vertexData = new Float32Array(8), r.vertexTrimmedData = null, r._transformID = -1, r._textureID = -1, r._transformTrimmedID = -1, r._textureTrimmedID = -1, r.pluginName = "sprite", r
            }
            return s(e, t), e.prototype._onTextureUpdate = function() {
                this._textureID = -1, this._textureTrimmedID = -1, this.cachedTint = 16777215, this._width && (this.scale.x = (0, u.sign)(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = (0, u.sign)(this.scale.y) * this._height / this._texture.orig.height)
            }, e.prototype._onAnchorUpdate = function() {
                this._transformID = -1, this._transformTrimmedID = -1
            }, e.prototype.calculateVertices = function() {
                if (this._transformID !== this.transform._worldID || this._textureID !== this._texture._updateID) {
                    this._transformID = this.transform._worldID, this._textureID = this._texture._updateID;
                    var t = this._texture,
                        e = this.transform.worldTransform,
                        i = e.a,
                        r = e.b,
                        n = e.c,
                        o = e.d,
                        s = e.tx,
                        a = e.ty,
                        h = this.vertexData,
                        u = t.trim,
                        l = t.orig,
                        c = this._anchor,
                        f = 0,
                        d = 0,
                        p = 0,
                        _ = 0;
                    u ? (d = u.x - c._x * l.width, f = d + u.width, _ = u.y - c._y * l.height, p = _ + u.height) : (d = -c._x * l.width, f = d + l.width, _ = -c._y * l.height, p = _ + l.height), h[0] = i * d + n * _ + s, h[1] = o * _ + r * d + a, h[2] = i * f + n * _ + s, h[3] = o * _ + r * f + a, h[4] = i * f + n * p + s, h[5] = o * p + r * f + a, h[6] = i * d + n * p + s, h[7] = o * p + r * d + a
                }
            }, e.prototype.calculateTrimmedVertices = function() {
                if (this.vertexTrimmedData) {
                    if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return
                } else this.vertexTrimmedData = new Float32Array(8);
                this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
                var t = this._texture,
                    e = this.vertexTrimmedData,
                    i = t.orig,
                    r = this._anchor,
                    n = this.transform.worldTransform,
                    o = n.a,
                    s = n.b,
                    a = n.c,
                    h = n.d,
                    u = n.tx,
                    l = n.ty,
                    c = -r._x * i.width,
                    f = c + i.width,
                    d = -r._y * i.height,
                    p = d + i.height;
                e[0] = o * c + a * d + u, e[1] = h * d + s * c + l, e[2] = o * f + a * d + u, e[3] = h * d + s * f + l, e[4] = o * f + a * p + u, e[5] = h * p + s * f + l, e[6] = o * c + a * p + u, e[7] = h * p + s * c + l
            }, e.prototype._renderWebGL = function(t) {
                this.calculateVertices(), t.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this)
            }, e.prototype._renderCanvas = function(t) {
                t.plugins[this.pluginName].render(this)
            }, e.prototype._calculateBounds = function() {
                var t = this._texture.trim,
                    e = this._texture.orig;
                !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData))
            }, e.prototype.getLocalBounds = function(e) {
                return 0 === this.children.length ? (this._bounds.minX = this._texture.orig.width * -this._anchor._x, this._bounds.minY = this._texture.orig.height * -this._anchor._y, this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new h.Rectangle), e = this._localBoundsRect), this._bounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e)
            }, e.prototype.containsPoint = function(t) {
                this.worldTransform.applyInverse(t, _);
                var e = this._texture.orig.width,
                    i = this._texture.orig.height,
                    r = -e * this.anchor.x,
                    n = 0;
                return _.x >= r && _.x < r + e && (n = -i * this.anchor.y, _.y >= n && _.y < n + i)
            }, e.prototype.destroy = function(e) {
                if (t.prototype.destroy.call(this, e), this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, "boolean" == typeof e ? e : e && e.texture) {
                    var i = "boolean" == typeof e ? e : e && e.baseTexture;
                    this._texture.destroy(!!i)
                }
                this._texture = null, this.shader = null
            }, e.from = function(t) {
                return new e(f.default.from(t))
            }, e.fromFrame = function(t) {
                var i = u.TextureCache[t];
                if (!i) throw new Error('The frameId "' + t + '" does not exist in the texture cache');
                return new e(i)
            }, e.fromImage = function(t, i, r) {
                return new e(f.default.fromImage(t, i, r))
            }, a(e, [{
                key: "width",
                get: function() {
                    return Math.abs(this.scale.x) * this._texture.orig.width
                },
                set: function(t) {
                    var e = (0, u.sign)(this.scale.x) || 1;
                    this.scale.x = e * t / this._texture.orig.width, this._width = t
                }
            }, {
                key: "height",
                get: function() {
                    return Math.abs(this.scale.y) * this._texture.orig.height
                },
                set: function(t) {
                    var e = (0, u.sign)(this.scale.y) || 1;
                    this.scale.y = e * t / this._texture.orig.height, this._height = t
                }
            }, {
                key: "anchor",
                get: function() {
                    return this._anchor
                },
                set: function(t) {
                    this._anchor.copy(t)
                }
            }, {
                key: "tint",
                get: function() {
                    return this._tint
                },
                set: function(t) {
                    this._tint = t, this._tintRGB = (t >> 16) + (65280 & t) + ((255 & t) << 16)
                }
            }, {
                key: "texture",
                get: function() {
                    return this._texture
                },
                set: function(t) {
                    this._texture !== t && (this._texture = t || f.default.EMPTY, this.cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, t && (t.baseTexture.hasLoaded ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
                }
            }]), e
        }(p.default);
    e.default = v
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = i(80),
        h = r(a),
        u = i(9),
        l = r(u),
        c = function(t) {
            function e(i, r) {
                n(this, e);
                var s = null;
                if (!(i instanceof h.default)) {
                    var a = arguments[1],
                        u = arguments[2],
                        l = arguments[3],
                        c = arguments[4];
                    console.warn("Please use RenderTexture.create(" + a + ", " + u + ") instead of the ctor directly."), s = arguments[0], r = null, i = new h.default(a, u, l, c)
                }
                var f = o(this, t.call(this, i, r));
                return f.legacyRenderer = s, f.valid = !0, f._updateUvs(), f
            }
            return s(e, t), e.prototype.resize = function(t, e, i) {
                t = Math.ceil(t), e = Math.ceil(e), this.valid = t > 0 && e > 0, this._frame.width = this.orig.width = t, this._frame.height = this.orig.height = e, i || this.baseTexture.resize(t, e), this._updateUvs()
            }, e.create = function(t, i, r, n) {
                return new e(new h.default(t, i, r, n))
            }, e
        }(l.default);
    e.default = c
}, function(t, e, i) {
    "use strict";
    e.__esModule = !0, e.Ticker = e.shared = void 0;
    var r = i(155),
        n = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r),
        o = new n.default;
    o.autoStart = !0, o.destroy = function() {}, e.shared = o, e.Ticker = n.default
}, function(t, e, i) {
    "use strict";

    function r(t) {
        for (var e = 6 * t, i = new Uint16Array(e), r = 0, n = 0; r < e; r += 6, n += 4) i[r + 0] = n + 0, i[r + 1] = n + 1, i[r + 2] = n + 2, i[r + 3] = n + 0, i[r + 4] = n + 2, i[r + 5] = n + 3;
        return i
    }
    e.__esModule = !0, e.default = r
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        var i = !1;
        if (t && t._textures && t._textures.length)
            for (var r = 0; r < t._textures.length; r++)
                if (t._textures[r] instanceof f.Texture) {
                    var n = t._textures[r].baseTexture; - 1 === e.indexOf(n) && (e.push(n), i = !0)
                }
        return i
    }

    function o(t, e) {
        return t instanceof f.BaseTexture && (-1 === e.indexOf(t) && e.push(t), !0)
    }

    function s(t, e) {
        if (t._texture && t._texture instanceof f.Texture) {
            var i = t._texture.baseTexture;
            return -1 === e.indexOf(i) && e.push(i), !0
        }
        return !1
    }

    function a(t, e) {
        return e instanceof f.Text && (e.updateText(!0), !0)
    }

    function h(t, e) {
        if (e instanceof f.TextStyle) {
            var i = e.toFontString();
            return f.TextMetrics.measureFont(i), !0
        }
        return !1
    }

    function u(t, e) {
        if (t instanceof f.Text) {
            -1 === e.indexOf(t.style) && e.push(t.style), -1 === e.indexOf(t) && e.push(t);
            var i = t._texture.baseTexture;
            return -1 === e.indexOf(i) && e.push(i), !0
        }
        return !1
    }

    function l(t, e) {
        return t instanceof f.TextStyle && (-1 === e.indexOf(t) && e.push(t), !0)
    }
    e.__esModule = !0;
    var c = i(1),
        f = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(c),
        d = i(99),
        p = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(d),
        _ = f.ticker.shared;
    f.settings.UPLOADS_PER_FRAME = 4;
    var v = function() {
        function t(e) {
            var i = this;
            r(this, t), this.limiter = new p.default(f.settings.UPLOADS_PER_FRAME), this.renderer = e, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.delayedTick = function() {
                i.queue && i.prepareItems()
            }, this.registerFindHook(u), this.registerFindHook(l), this.registerFindHook(n), this.registerFindHook(o), this.registerFindHook(s), this.registerUploadHook(a), this.registerUploadHook(h)
        }
        return t.prototype.upload = function(t, e) {
            "function" == typeof t && (e = t, t = null), t && this.add(t), this.queue.length ? (e && this.completes.push(e), this.ticking || (this.ticking = !0, _.addOnce(this.tick, this, f.UPDATE_PRIORITY.UTILITY))) : e && e()
        }, t.prototype.tick = function() {
            setTimeout(this.delayedTick, 0)
        }, t.prototype.prepareItems = function() {
            for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload();) {
                var t = this.queue[0],
                    e = !1;
                if (t && !t._destroyed)
                    for (var i = 0, r = this.uploadHooks.length; i < r; i++)
                        if (this.uploadHooks[i](this.uploadHookHelper, t)) {
                            this.queue.shift(), e = !0;
                            break
                        }
                e || this.queue.shift()
            }
            if (this.queue.length) _.addOnce(this.tick, this, f.UPDATE_PRIORITY.UTILITY);
            else {
                this.ticking = !1;
                var n = this.completes.slice(0);
                this.completes.length = 0;
                for (var o = 0, s = n.length; o < s; o++) n[o]()
            }
        }, t.prototype.registerFindHook = function(t) {
            return t && this.addHooks.push(t), this
        }, t.prototype.registerUploadHook = function(t) {
            return t && this.uploadHooks.push(t), this
        }, t.prototype.add = function(t) {
            for (var e = 0, i = this.addHooks.length; e < i && !this.addHooks[e](t, this.queue); e++);
            if (t instanceof f.Container)
                for (var r = t.children.length - 1; r >= 0; r--) this.add(t.children[r]);
            return this
        }, t.prototype.destroy = function() {
            this.ticking && _.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null
        }, t
    }();
    e.default = v
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o() {}

    function s(t, e, i) {
        e && 0 === e.indexOf(".") && (e = e.substring(1)), e && (t[e] = i)
    }

    function a(t) {
        return t.toString().replace("object ", "")
    }
    e.__esModule = !0, e.Resource = void 0;
    var h = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        u = i(53),
        l = r(u),
        c = i(52),
        f = r(c),
        d = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest),
        p = null,
        _ = e.Resource = function() {
            function t(e, i, r) {
                if (n(this, t), "string" != typeof e || "string" != typeof i) throw new Error("Both name and url are required for constructing a resource.");
                r = r || {}, this._flags = 0, this._setFlag(t.STATUS_FLAGS.DATA_URL, 0 === i.indexOf("data:")), this.name = e, this.url = i, this.extension = this._getExtension(), this.data = null, this.crossOrigin = !0 === r.crossOrigin ? "anonymous" : r.crossOrigin, this.timeout = r.timeout || 0, this.loadType = r.loadType || this._determineLoadType(), this.xhrType = r.xhrType, this.metadata = r.metadata || {}, this.error = null, this.xhr = null, this.children = [], this.type = t.TYPE.UNKNOWN, this.progressChunk = 0, this._dequeue = o, this._onLoadBinding = null, this._elementTimer = 0, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundOnTimeout = this._onTimeout.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnTimeout = this._xhrOnTimeout.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this.onStart = new f.default, this.onProgress = new f.default, this.onComplete = new f.default, this.onAfterMiddleware = new f.default
            }
            return t.setExtensionLoadType = function(e, i) {
                s(t._loadTypeMap, e, i)
            }, t.setExtensionXhrType = function(e, i) {
                s(t._xhrTypeMap, e, i)
            }, t.prototype.complete = function() {
                this._clearEvents(), this._finish()
            }, t.prototype.abort = function(e) {
                if (!this.error) {
                    if (this.error = new Error(e), this._clearEvents(), this.xhr) this.xhr.abort();
                    else if (this.xdr) this.xdr.abort();
                    else if (this.data)
                        if (this.data.src) this.data.src = t.EMPTY_GIF;
                        else
                            for (; this.data.firstChild;) this.data.removeChild(this.data.firstChild);
                    this._finish()
                }
            }, t.prototype.load = function(e) {
                var i = this;
                if (!this.isLoading) {
                    if (this.isComplete) return void(e && setTimeout(function() {
                        return e(i)
                    }, 1));
                    switch (e && this.onComplete.once(e), this._setFlag(t.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), !1 !== this.crossOrigin && "string" == typeof this.crossOrigin || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                        case t.LOAD_TYPE.IMAGE:
                            this.type = t.TYPE.IMAGE, this._loadElement("image");
                            break;
                        case t.LOAD_TYPE.AUDIO:
                            this.type = t.TYPE.AUDIO, this._loadSourceElement("audio");
                            break;
                        case t.LOAD_TYPE.VIDEO:
                            this.type = t.TYPE.VIDEO, this._loadSourceElement("video");
                            break;
                        case t.LOAD_TYPE.XHR:
                        default:
                            d && this.crossOrigin ? this._loadXdr() : this._loadXhr()
                    }
                }
            }, t.prototype._hasFlag = function(t) {
                return 0 != (this._flags & t)
            }, t.prototype._setFlag = function(t, e) {
                this._flags = e ? this._flags | t : this._flags & ~t
            }, t.prototype._clearEvents = function() {
                clearTimeout(this._elementTimer), this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("timeout", this._boundXhrOnTimeout, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null))
            }, t.prototype._finish = function() {
                if (this.isComplete) throw new Error("Complete called again for an already completed resource.");
                this._setFlag(t.STATUS_FLAGS.COMPLETE, !0), this._setFlag(t.STATUS_FLAGS.LOADING, !1), this.onComplete.dispatch(this)
            }, t.prototype._loadElement = function(t) {
                this.metadata.loadElement ? this.data = this.metadata.loadElement : "image" === t && void 0 !== window.Image ? this.data = new Image : this.data = document.createElement(t), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), this.metadata.skipSource || (this.data.src = this.url), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
            }, t.prototype._loadSourceElement = function(t) {
                if (this.metadata.loadElement ? this.data = this.metadata.loadElement : "audio" === t && void 0 !== window.Audio ? this.data = new Audio : this.data = document.createElement(t), null === this.data) return void this.abort("Unsupported element: " + t);
                if (this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), !this.metadata.skipSource)
                    if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
                    else if (Array.isArray(this.url))
                    for (var e = this.metadata.mimeType, i = 0; i < this.url.length; ++i) this.data.appendChild(this._createSource(t, this.url[i], Array.isArray(e) ? e[i] : e));
                else {
                    var r = this.metadata.mimeType;
                    this.data.appendChild(this._createSource(t, this.url, Array.isArray(r) ? r[0] : r))
                }
                this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load(), this.timeout && (this._elementTimer = setTimeout(this._boundOnTimeout, this.timeout))
            }, t.prototype._loadXhr = function() {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var e = this.xhr = new XMLHttpRequest;
                e.open("GET", this.url, !0), e.timeout = this.timeout, this.xhrType === t.XHR_RESPONSE_TYPE.JSON || this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT ? e.responseType = t.XHR_RESPONSE_TYPE.TEXT : e.responseType = this.xhrType, e.addEventListener("error", this._boundXhrOnError, !1), e.addEventListener("timeout", this._boundXhrOnTimeout, !1), e.addEventListener("abort", this._boundXhrOnAbort, !1), e.addEventListener("progress", this._boundOnProgress, !1), e.addEventListener("load", this._boundXhrOnLoad, !1), e.send()
            }, t.prototype._loadXdr = function() {
                "string" != typeof this.xhrType && (this.xhrType = this._determineXhrType());
                var t = this.xhr = new XDomainRequest;
                t.timeout = this.timeout || 5e3, t.onerror = this._boundXhrOnError, t.ontimeout = this._boundXhrOnTimeout, t.onprogress = this._boundOnProgress, t.onload = this._boundXhrOnLoad, t.open("GET", this.url, !0), setTimeout(function() {
                    return t.send()
                }, 1)
            }, t.prototype._createSource = function(t, e, i) {
                i || (i = t + "/" + this._getExtension(e));
                var r = document.createElement("source");
                return r.src = e, r.type = i, r
            }, t.prototype._onError = function(t) {
                this.abort("Failed to load element using: " + t.target.nodeName)
            }, t.prototype._onProgress = function(t) {
                t && t.lengthComputable && this.onProgress.dispatch(this, t.loaded / t.total)
            }, t.prototype._onTimeout = function() {
                this.abort("Load timed out.")
            }, t.prototype._xhrOnError = function() {
                var t = this.xhr;
                this.abort(a(t) + " Request failed. Status: " + t.status + ', text: "' + t.statusText + '"')
            }, t.prototype._xhrOnTimeout = function() {
                var t = this.xhr;
                this.abort(a(t) + " Request timed out.")
            }, t.prototype._xhrOnAbort = function() {
                var t = this.xhr;
                this.abort(a(t) + " Request was aborted by the user.")
            }, t.prototype._xhrOnLoad = function() {
                var e = this.xhr,
                    i = "",
                    r = void 0 === e.status ? 200 : e.status;
                if ("" !== e.responseType && "text" !== e.responseType && void 0 !== e.responseType || (i = e.responseText), 0 === r && (i.length > 0 || e.responseType === t.XHR_RESPONSE_TYPE.BUFFER) ? r = 200 : 1223 === r && (r = 204), 2 != (r / 100 | 0)) return void this.abort("[" + e.status + "] " + e.statusText + ": " + e.responseURL);
                if (this.xhrType === t.XHR_RESPONSE_TYPE.TEXT) this.data = i, this.type = t.TYPE.TEXT;
                else if (this.xhrType === t.XHR_RESPONSE_TYPE.JSON) try {
                    this.data = JSON.parse(i), this.type = t.TYPE.JSON
                } catch (t) {
                    return void this.abort("Error trying to parse loaded json: " + t)
                } else if (this.xhrType === t.XHR_RESPONSE_TYPE.DOCUMENT) try {
                    if (window.DOMParser) {
                        var n = new DOMParser;
                        this.data = n.parseFromString(i, "text/xml")
                    } else {
                        var o = document.createElement("div");
                        o.innerHTML = i, this.data = o
                    }
                    this.type = t.TYPE.XML
                } catch (t) {
                    return void this.abort("Error trying to parse loaded xml: " + t)
                } else this.data = e.response || i;
                this.complete()
            }, t.prototype._determineCrossOrigin = function(t, e) {
                if (0 === t.indexOf("data:")) return "";
                if (window.origin !== window.location.origin) return "anonymous";
                e = e || window.location, p || (p = document.createElement("a")), p.href = t, t = (0, l.default)(p.href, {
                    strictMode: !0
                });
                var i = !t.port && "" === e.port || t.port === e.port,
                    r = t.protocol ? t.protocol + ":" : "";
                return t.host === e.hostname && i && r === e.protocol ? "" : "anonymous"
            }, t.prototype._determineXhrType = function() {
                return t._xhrTypeMap[this.extension] || t.XHR_RESPONSE_TYPE.TEXT
            }, t.prototype._determineLoadType = function() {
                return t._loadTypeMap[this.extension] || t.LOAD_TYPE.XHR
            }, t.prototype._getExtension = function() {
                var t = this.url,
                    e = "";
                if (this.isDataUrl) {
                    var i = t.indexOf("/");
                    e = t.substring(i + 1, t.indexOf(";", i))
                } else {
                    var r = t.indexOf("?"),
                        n = t.indexOf("#"),
                        o = Math.min(r > -1 ? r : t.length, n > -1 ? n : t.length);
                    t = t.substring(0, o), e = t.substring(t.lastIndexOf(".") + 1)
                }
                return e.toLowerCase()
            }, t.prototype._getMimeFromXhrType = function(e) {
                switch (e) {
                    case t.XHR_RESPONSE_TYPE.BUFFER:
                        return "application/octet-binary";
                    case t.XHR_RESPONSE_TYPE.BLOB:
                        return "application/blob";
                    case t.XHR_RESPONSE_TYPE.DOCUMENT:
                        return "application/xml";
                    case t.XHR_RESPONSE_TYPE.JSON:
                        return "application/json";
                    case t.XHR_RESPONSE_TYPE.DEFAULT:
                    case t.XHR_RESPONSE_TYPE.TEXT:
                    default:
                        return "text/plain"
                }
            }, h(t, [{
                key: "isDataUrl",
                get: function() {
                    return this._hasFlag(t.STATUS_FLAGS.DATA_URL)
                }
            }, {
                key: "isComplete",
                get: function() {
                    return this._hasFlag(t.STATUS_FLAGS.COMPLETE)
                }
            }, {
                key: "isLoading",
                get: function() {
                    return this._hasFlag(t.STATUS_FLAGS.LOADING)
                }
            }]), t
        }();
    _.STATUS_FLAGS = {
        NONE: 0,
        DATA_URL: 1,
        COMPLETE: 2,
        LOADING: 4
    }, _.TYPE = {
        UNKNOWN: 0,
        JSON: 1,
        XML: 2,
        IMAGE: 3,
        AUDIO: 4,
        VIDEO: 5,
        TEXT: 6
    }, _.LOAD_TYPE = {
        XHR: 1,
        IMAGE: 2,
        AUDIO: 3,
        VIDEO: 4
    }, _.XHR_RESPONSE_TYPE = {
        DEFAULT: "text",
        BUFFER: "arraybuffer",
        BLOB: "blob",
        DOCUMENT: "document",
        JSON: "json",
        TEXT: "text"
    }, _._loadTypeMap = {
        gif: _.LOAD_TYPE.IMAGE,
        png: _.LOAD_TYPE.IMAGE,
        bmp: _.LOAD_TYPE.IMAGE,
        jpg: _.LOAD_TYPE.IMAGE,
        jpeg: _.LOAD_TYPE.IMAGE,
        tif: _.LOAD_TYPE.IMAGE,
        tiff: _.LOAD_TYPE.IMAGE,
        webp: _.LOAD_TYPE.IMAGE,
        tga: _.LOAD_TYPE.IMAGE,
        svg: _.LOAD_TYPE.IMAGE,
        "svg+xml": _.LOAD_TYPE.IMAGE,
        mp3: _.LOAD_TYPE.AUDIO,
        ogg: _.LOAD_TYPE.AUDIO,
        wav: _.LOAD_TYPE.AUDIO,
        mp4: _.LOAD_TYPE.VIDEO,
        webm: _.LOAD_TYPE.VIDEO
    }, _._xhrTypeMap = {
        xhtml: _.XHR_RESPONSE_TYPE.DOCUMENT,
        html: _.XHR_RESPONSE_TYPE.DOCUMENT,
        htm: _.XHR_RESPONSE_TYPE.DOCUMENT,
        xml: _.XHR_RESPONSE_TYPE.DOCUMENT,
        tmx: _.XHR_RESPONSE_TYPE.DOCUMENT,
        svg: _.XHR_RESPONSE_TYPE.DOCUMENT,
        tsx: _.XHR_RESPONSE_TYPE.DOCUMENT,
        gif: _.XHR_RESPONSE_TYPE.BLOB,
        png: _.XHR_RESPONSE_TYPE.BLOB,
        bmp: _.XHR_RESPONSE_TYPE.BLOB,
        jpg: _.XHR_RESPONSE_TYPE.BLOB,
        jpeg: _.XHR_RESPONSE_TYPE.BLOB,
        tif: _.XHR_RESPONSE_TYPE.BLOB,
        tiff: _.XHR_RESPONSE_TYPE.BLOB,
        webp: _.XHR_RESPONSE_TYPE.BLOB,
        tga: _.XHR_RESPONSE_TYPE.BLOB,
        json: _.XHR_RESPONSE_TYPE.JSON,
        text: _.XHR_RESPONSE_TYPE.TEXT,
        txt: _.XHR_RESPONSE_TYPE.TEXT,
        ttf: _.XHR_RESPONSE_TYPE.BUFFER,
        otf: _.XHR_RESPONSE_TYPE.BUFFER
    }, _.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==", t.exports.default = _
}, , function(t, e) {
    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function n(t) {
        if (l === setTimeout) return setTimeout(t, 0);
        if ((l === i || !l) && setTimeout) return l = setTimeout, setTimeout(t, 0);
        try {
            return l(t, 0)
        } catch (e) {
            try {
                return l.call(null, t, 0)
            } catch (e) {
                return l.call(this, t, 0)
            }
        }
    }

    function o(t) {
        if (c === clearTimeout) return clearTimeout(t);
        if ((c === r || !c) && clearTimeout) return c = clearTimeout, clearTimeout(t);
        try {
            return c(t)
        } catch (e) {
            try {
                return c.call(null, t)
            } catch (e) {
                return c.call(this, t)
            }
        }
    }

    function s() {
        _ && d && (_ = !1, d.length ? p = d.concat(p) : v = -1, p.length && a())
    }

    function a() {
        if (!_) {
            var t = n(s);
            _ = !0;
            for (var e = p.length; e;) {
                for (d = p, p = []; ++v < e;) d && d[v].run();
                v = -1, e = p.length
            }
            d = null, _ = !1, o(t)
        }
    }

    function h(t, e) {
        this.fun = t, this.array = e
    }

    function u() {}
    var l, c, f = t.exports = {};
    ! function() {
        try {
            l = "function" == typeof setTimeout ? setTimeout : i
        } catch (t) {
            l = i
        }
        try {
            c = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (t) {
            c = r
        }
    }();
    var d, p = [],
        _ = !1,
        v = -1;
    f.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        p.push(new h(t, e)), 1 !== p.length || _ || n(a)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = u, f.addListener = u, f.once = u, f.off = u, f.removeListener = u, f.removeAllListeners = u, f.emit = u, f.prependListener = u, f.prependOnceListener = u, f.listeners = function(t) {
        return []
    }, f.binding = function(t) {
        throw new Error("process.binding is not supported")
    }, f.cwd = function() {
        return "/"
    }, f.chdir = function(t) {
        throw new Error("process.chdir is not supported")
    }, f.umask = function() {
        return 0
    }
}, , function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, , , , function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        return t._head ? (t._tail._next = e, e._prev = t._tail, t._tail = e) : (t._head = e, t._tail = e), e._owner = t, e
    }
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        s = function() {
            function t(e, i, n) {
                void 0 === i && (i = !1), r(this, t), this._fn = e, this._once = i, this._thisArg = n, this._next = this._prev = this._owner = null
            }
            return o(t, [{
                key: "detach",
                value: function() {
                    return null !== this._owner && (this._owner.detach(this), !0)
                }
            }]), t
        }(),
        a = function() {
            function t() {
                r(this, t), this._head = this._tail = void 0
            }
            return o(t, [{
                key: "handlers",
                value: function() {
                    var t = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0],
                        e = this._head;
                    if (t) return !!e;
                    for (var i = []; e;) i.push(e), e = e._next;
                    return i
                }
            }, {
                key: "has",
                value: function(t) {
                    if (!(t instanceof s)) throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
                    return t._owner === this
                }
            }, {
                key: "dispatch",
                value: function() {
                    var t = this._head;
                    if (!t) return !1;
                    for (; t;) t._once && this.detach(t), t._fn.apply(t._thisArg, arguments), t = t._next;
                    return !0
                }
            }, {
                key: "add",
                value: function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                    if ("function" != typeof t) throw new Error("MiniSignal#add(): First arg must be a Function.");
                    return n(this, new s(t, !1, e))
                }
            }, {
                key: "once",
                value: function(t) {
                    var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1];
                    if ("function" != typeof t) throw new Error("MiniSignal#once(): First arg must be a Function.");
                    return n(this, new s(t, !0, e))
                }
            }, {
                key: "detach",
                value: function(t) {
                    if (!(t instanceof s)) throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
                    return t._owner !== this ? this : (t._prev && (t._prev._next = t._next), t._next && (t._next._prev = t._prev), t === this._head ? (this._head = t._next, null === t._next && (this._tail = null)) : t === this._tail && (this._tail = t._prev, this._tail._next = null), t._owner = null, this)
                }
            }, {
                key: "detachAll",
                value: function() {
                    var t = this._head;
                    if (!t) return this;
                    for (this._head = this._tail = null; t;) t._owner = null, t = t._next;
                    return this
                }
            }]), t
        }();
    a.MiniSignalBinding = s, e.default = a, t.exports = e.default
}, function(t, e, i) {
    "use strict";
    t.exports = function(t, e) {
        e = e || {};
        for (var i = {
                key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                q: {
                    name: "queryKey",
                    parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                },
                parser: {
                    strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                    loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                }
            }, r = i.parser[e.strictMode ? "strict" : "loose"].exec(t), n = {}, o = 14; o--;) n[i.key[o]] = r[o] || "";
        return n[i.q.name] = {}, n[i.key[12]].replace(i.q.parser, function(t, e, r) {
            e && (n[i.q.name][e] = r)
        }), n
    }
}, function(t, e) {
    var i = function(t, e, i, r, n) {
        this.gl = t, this.texture = t.createTexture(), this.mipmap = !1, this.premultiplyAlpha = !1, this.width = e || -1, this.height = i || -1, this.format = r || t.RGBA, this.type = n || t.UNSIGNED_BYTE
    };
    i.prototype.upload = function(t) {
        this.bind();
        var e = this.gl;
        e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
        var i = t.videoWidth || t.width,
            r = t.videoHeight || t.height;
        r !== this.height || i !== this.width ? e.texImage2D(e.TEXTURE_2D, 0, this.format, this.format, this.type, t) : e.texSubImage2D(e.TEXTURE_2D, 0, 0, 0, this.format, this.type, t), this.width = i, this.height = r
    };
    var r = !1;
    i.prototype.uploadData = function(t, e, i) {
        this.bind();
        var n = this.gl;
        if (t instanceof Float32Array) {
            if (!r) {
                if (!n.getExtension("OES_texture_float")) throw new Error("floating point textures not available");
                r = !0
            }
            this.type = n.FLOAT
        } else this.type = this.type || n.UNSIGNED_BYTE;
        n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), e !== this.width || i !== this.height ? n.texImage2D(n.TEXTURE_2D, 0, this.format, e, i, 0, this.format, this.type, t || null) : n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, e, i, this.format, this.type, t || null), this.width = e, this.height = i
    }, i.prototype.bind = function(t) {
        var e = this.gl;
        void 0 !== t && e.activeTexture(e.TEXTURE0 + t), e.bindTexture(e.TEXTURE_2D, this.texture)
    }, i.prototype.unbind = function() {
        var t = this.gl;
        t.bindTexture(t.TEXTURE_2D, null)
    }, i.prototype.minFilter = function(t) {
        var e = this.gl;
        this.bind(), this.mipmap ? e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t ? e.LINEAR_MIPMAP_LINEAR : e.NEAREST_MIPMAP_NEAREST) : e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t ? e.LINEAR : e.NEAREST)
    }, i.prototype.magFilter = function(t) {
        var e = this.gl;
        this.bind(), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t ? e.LINEAR : e.NEAREST)
    }, i.prototype.enableMipmap = function() {
        var t = this.gl;
        this.bind(), this.mipmap = !0, t.generateMipmap(t.TEXTURE_2D)
    }, i.prototype.enableLinearScaling = function() {
        this.minFilter(!0), this.magFilter(!0)
    }, i.prototype.enableNearestScaling = function() {
        this.minFilter(!1), this.magFilter(!1)
    }, i.prototype.enableWrapClamp = function() {
        var t = this.gl;
        this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE)
    }, i.prototype.enableWrapRepeat = function() {
        var t = this.gl;
        this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.REPEAT)
    }, i.prototype.enableWrapMirrorRepeat = function() {
        var t = this.gl;
        this.bind(), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.MIRRORED_REPEAT), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.MIRRORED_REPEAT)
    }, i.prototype.destroy = function() {
        this.gl.deleteTexture(this.texture)
    }, i.fromSource = function(t, e, r) {
        var n = new i(t);
        return n.premultiplyAlpha = r || !1, n.upload(e), n
    }, i.fromData = function(t, e, r, n) {
        var o = new i(t);
        return o.uploadData(e, r, n), o
    }, t.exports = i
}, function(t, e) {
    var i = function(t, e, i) {
        var r;
        if (i) {
            var n = i.tempAttribState,
                o = i.attribState;
            for (r = 0; r < n.length; r++) n[r] = !1;
            for (r = 0; r < e.length; r++) n[e[r].attribute.location] = !0;
            for (r = 0; r < o.length; r++) o[r] !== n[r] && (o[r] = n[r], i.attribState[r] ? t.enableVertexAttribArray(r) : t.disableVertexAttribArray(r))
        } else
            for (r = 0; r < e.length; r++) {
                var s = e[r];
                t.enableVertexAttribArray(s.attribute.location)
            }
    };
    t.exports = i
}, function(t, e) {
    var i = function(t, e, i, n) {
            var o = r(t, t.VERTEX_SHADER, e),
                s = r(t, t.FRAGMENT_SHADER, i),
                a = t.createProgram();
            if (t.attachShader(a, o), t.attachShader(a, s), n)
                for (var h in n) t.bindAttribLocation(a, n[h], h);
            return t.linkProgram(a), t.getProgramParameter(a, t.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", t.getProgramParameter(a, t.VALIDATE_STATUS)), console.error("gl.getError()", t.getError()), "" !== t.getProgramInfoLog(a) && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", t.getProgramInfoLog(a)), t.deleteProgram(a), a = null), t.deleteShader(o), t.deleteShader(s), a
        },
        r = function(t, e, i) {
            var r = t.createShader(e);
            return t.shaderSource(r, i), t.compileShader(r), t.getShaderParameter(r, t.COMPILE_STATUS) ? r : (console.log(t.getShaderInfoLog(r)), null)
        };
    t.exports = i
}, function(t, e) {
    var i = function(t, e) {
            switch (t) {
                case "float":
                    return 0;
                case "vec2":
                    return new Float32Array(2 * e);
                case "vec3":
                    return new Float32Array(3 * e);
                case "vec4":
                    return new Float32Array(4 * e);
                case "int":
                case "sampler2D":
                    return 0;
                case "ivec2":
                    return new Int32Array(2 * e);
                case "ivec3":
                    return new Int32Array(3 * e);
                case "ivec4":
                    return new Int32Array(4 * e);
                case "bool":
                    return !1;
                case "bvec2":
                    return r(2 * e);
                case "bvec3":
                    return r(3 * e);
                case "bvec4":
                    return r(4 * e);
                case "mat2":
                    return new Float32Array([1, 0, 0, 1]);
                case "mat3":
                    return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
                case "mat4":
                    return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
            }
        },
        r = function(t) {
            for (var e = new Array(t), i = 0; i < e.length; i++) e[i] = !1;
            return e
        };
    t.exports = i
}, function(t, e, i) {
    var r = i(33),
        n = i(61),
        o = function(t, e) {
            for (var i = {}, o = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES), a = 0; a < o; a++) {
                var h = t.getActiveAttrib(e, a),
                    u = r(t, h.type);
                i[h.name] = {
                    type: u,
                    size: n(u),
                    location: t.getAttribLocation(e, h.name),
                    pointer: s
                }
            }
            return i
        },
        s = function(t, e, i, r) {
            gl.vertexAttribPointer(this.location, this.size, t || gl.FLOAT, e || !1, i || 0, r || 0)
        };
    t.exports = o
}, function(t, e, i) {
    var r = i(33),
        n = i(57),
        o = function(t, e) {
            for (var i = {}, o = t.getProgramParameter(e, t.ACTIVE_UNIFORMS), s = 0; s < o; s++) {
                var a = t.getActiveUniform(e, s),
                    h = a.name.replace(/\[.*?\]/, ""),
                    u = r(t, a.type);
                i[h] = {
                    type: u,
                    size: a.size,
                    location: t.getUniformLocation(e, h),
                    value: n(u, a.size)
                }
            }
            return i
        };
    t.exports = o
}, function(t, e) {
    function i(t, e) {
        return function(i) {
            this.data[t].value = i;
            var r = this.data[t].location;
            1 === e.size ? s[e.type](this.gl, r, i) : a[e.type](this.gl, r, i)
        }
    }

    function r(t, e) {
        for (var i = e, r = 0; r < t.length - 1; r++) {
            var n = i[t[r]] || {
                data: {}
            };
            i[t[r]] = n, i = n
        }
        return i
    }
    var n = function(t, e) {
            var n = {
                data: {}
            };
            n.gl = t;
            for (var s = Object.keys(e), a = 0; a < s.length; a++) {
                var h = s[a],
                    u = h.split("."),
                    l = u[u.length - 1],
                    c = r(u, n),
                    f = e[h];
                c.data[l] = f, c.gl = t, Object.defineProperty(c, l, {
                    get: o(l),
                    set: i(l, f)
                })
            }
            return n
        },
        o = function(t) {
            return function() {
                return this.data[t].value
            }
        },
        s = {
            float: function(t, e, i) {
                t.uniform1f(e, i)
            },
            vec2: function(t, e, i) {
                t.uniform2f(e, i[0], i[1])
            },
            vec3: function(t, e, i) {
                t.uniform3f(e, i[0], i[1], i[2])
            },
            vec4: function(t, e, i) {
                t.uniform4f(e, i[0], i[1], i[2], i[3])
            },
            int: function(t, e, i) {
                t.uniform1i(e, i)
            },
            ivec2: function(t, e, i) {
                t.uniform2i(e, i[0], i[1])
            },
            ivec3: function(t, e, i) {
                t.uniform3i(e, i[0], i[1], i[2])
            },
            ivec4: function(t, e, i) {
                t.uniform4i(e, i[0], i[1], i[2], i[3])
            },
            bool: function(t, e, i) {
                t.uniform1i(e, i)
            },
            bvec2: function(t, e, i) {
                t.uniform2i(e, i[0], i[1])
            },
            bvec3: function(t, e, i) {
                t.uniform3i(e, i[0], i[1], i[2])
            },
            bvec4: function(t, e, i) {
                t.uniform4i(e, i[0], i[1], i[2], i[3])
            },
            mat2: function(t, e, i) {
                t.uniformMatrix2fv(e, !1, i)
            },
            mat3: function(t, e, i) {
                t.uniformMatrix3fv(e, !1, i)
            },
            mat4: function(t, e, i) {
                t.uniformMatrix4fv(e, !1, i)
            },
            sampler2D: function(t, e, i) {
                t.uniform1i(e, i)
            }
        },
        a = {
            float: function(t, e, i) {
                t.uniform1fv(e, i)
            },
            vec2: function(t, e, i) {
                t.uniform2fv(e, i)
            },
            vec3: function(t, e, i) {
                t.uniform3fv(e, i)
            },
            vec4: function(t, e, i) {
                t.uniform4fv(e, i)
            },
            int: function(t, e, i) {
                t.uniform1iv(e, i)
            },
            ivec2: function(t, e, i) {
                t.uniform2iv(e, i)
            },
            ivec3: function(t, e, i) {
                t.uniform3iv(e, i)
            },
            ivec4: function(t, e, i) {
                t.uniform4iv(e, i)
            },
            bool: function(t, e, i) {
                t.uniform1iv(e, i)
            },
            bvec2: function(t, e, i) {
                t.uniform2iv(e, i)
            },
            bvec3: function(t, e, i) {
                t.uniform3iv(e, i)
            },
            bvec4: function(t, e, i) {
                t.uniform4iv(e, i)
            },
            sampler2D: function(t, e, i) {
                t.uniform1iv(e, i)
            }
        };
    t.exports = n
}, function(t, e) {
    var i = function(t) {
            return r[t]
        },
        r = {
            float: 1,
            vec2: 2,
            vec3: 3,
            vec4: 4,
            int: 1,
            ivec2: 2,
            ivec3: 3,
            ivec4: 4,
            bool: 1,
            bvec2: 2,
            bvec3: 3,
            bvec4: 4,
            mat2: 4,
            mat3: 9,
            mat4: 16,
            sampler2D: 1
        };
    t.exports = i
}, function(t, e) {
    var i = function(t, e) {
        return "precision" !== t.substring(0, 9) ? "precision " + e + " float;\n" + t : t
    };
    t.exports = i
}, function(t, e, i) {
    "use strict";
    e.__esModule = !0, e.default = {
        accessible: !1,
        accessibleTitle: null,
        accessibleHint: null,
        tabIndex: 0,
        _accessibleActive: !1,
        _accessibleDiv: !1
    }
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        s = i(65),
        a = i(17),
        h = r(a),
        u = i(41),
        l = i(3),
        c = r(l),
        f = i(0),
        d = function() {
            function t(e, i, r, o, a) {
                n(this, t), "number" == typeof e && (e = Object.assign({
                    width: e,
                    height: i || c.default.RENDER_OPTIONS.height,
                    forceCanvas: !!o,
                    sharedTicker: !!a
                }, r)), this._options = e = Object.assign({
                    autoStart: !0,
                    sharedTicker: !1,
                    forceCanvas: !1,
                    sharedLoader: !1
                }, e), this.renderer = (0, s.autoDetectRenderer)(e), this.stage = new h.default, this._ticker = null, this.ticker = e.sharedTicker ? u.shared : new u.Ticker, e.autoStart && this.start()
            }
            return t.prototype.render = function() {
                this.renderer.render(this.stage)
            }, t.prototype.stop = function() {
                this._ticker.stop()
            }, t.prototype.start = function() {
                this._ticker.start()
            }, t.prototype.destroy = function(t, e) {
                if (this._ticker) {
                    var i = this._ticker;
                    this.ticker = null, i.destroy()
                }
                this.stage.destroy(e), this.stage = null, this.renderer.destroy(t), this.renderer = null, this._options = null
            }, o(t, [{
                key: "ticker",
                set: function(t) {
                    this._ticker && this._ticker.remove(this.render, this), this._ticker = t, t && t.add(this.render, this, f.UPDATE_PRIORITY.LOW)
                },
                get: function() {
                    return this._ticker
                }
            }, {
                key: "view",
                get: function() {
                    return this.renderer.view
                }
            }, {
                key: "screen",
                get: function() {
                    return this.renderer.screen
                }
            }]), t
        }();
    e.default = d
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e, i, r) {
        var n = t && t.forceCanvas;
        return void 0 !== r && (n = r), !n && s.isWebGLSupported() ? new l.default(t, e, i) : new h.default(t, e, i)
    }
    e.__esModule = !0, e.autoDetectRenderer = n;
    var o = i(2),
        s = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(o),
        a = i(18),
        h = r(a),
        u = i(25),
        l = r(u)
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        h = i(12),
        u = r(h),
        l = i(0),
        c = i(3),
        f = r(c),
        d = i(68),
        p = r(d),
        _ = i(67),
        v = r(_),
        m = i(34),
        g = r(m),
        y = i(4),
        x = function(t) {
            function e() {
                n(this, e);
                var i = o(this, t.call(this)),
                    r = f.default.TRANSFORM_MODE === l.TRANSFORM_MODE.STATIC ? p.default : v.default;
                return i.tempDisplayObjectParent = null, i.transform = new r, i.alpha = 1, i.visible = !0, i.renderable = !0, i.parent = null, i.worldAlpha = 1, i.filterArea = null, i._filters = null, i._enabledFilters = null, i._bounds = new g.default, i._boundsID = 0, i._lastBoundsID = -1, i._boundsRect = null, i._localBoundsRect = null, i._mask = null, i._destroyed = !1, i
            }
            return s(e, t), e.prototype.updateTransform = function() {
                this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha, this._bounds.updateID++
            }, e.prototype._recursivePostUpdateTransform = function() {
                this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
            }, e.prototype.getBounds = function(t, e) {
                return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._boundsID !== this._lastBoundsID && this.calculateBounds(), e || (this._boundsRect || (this._boundsRect = new y.Rectangle), e = this._boundsRect), this._bounds.getRectangle(e)
            }, e.prototype.getLocalBounds = function(t) {
                var e = this.transform,
                    i = this.parent;
                this.parent = null, this.transform = this._tempDisplayObjectParent.transform, t || (this._localBoundsRect || (this._localBoundsRect = new y.Rectangle), t = this._localBoundsRect);
                var r = this.getBounds(!1, t);
                return this.parent = i, this.transform = e, r
            }, e.prototype.toGlobal = function(t, e) {
                return arguments.length > 2 && void 0 !== arguments[2] && arguments[2] || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e)
            }, e.prototype.toLocal = function(t, e, i, r) {
                return e && (t = e.toGlobal(t, i, r)), r || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, i)
            }, e.prototype.renderWebGL = function(t) {}, e.prototype.renderCanvas = function(t) {}, e.prototype.setParent = function(t) {
                if (!t || !t.addChild) throw new Error("setParent: Argument must be a Container");
                return t.addChild(this), t
            }, e.prototype.setTransform = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                    n = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                    o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0,
                    s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                    a = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
                    h = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0;
                return this.position.x = t, this.position.y = e, this.scale.x = i || 1, this.scale.y = r || 1, this.rotation = n, this.skew.x = o, this.skew.y = s, this.pivot.x = a, this.pivot.y = h, this
            }, e.prototype.destroy = function() {
                this.removeAllListeners(), this.parent && this.parent.removeChild(this), this.transform = null, this.parent = null, this._bounds = null, this._currentBounds = null, this._mask = null, this.filterArea = null, this.interactive = !1, this.interactiveChildren = !1, this._destroyed = !0
            }, a(e, [{
                key: "_tempDisplayObjectParent",
                get: function() {
                    return null === this.tempDisplayObjectParent && (this.tempDisplayObjectParent = new e), this.tempDisplayObjectParent
                }
            }, {
                key: "x",
                get: function() {
                    return this.position.x
                },
                set: function(t) {
                    this.transform.position.x = t
                }
            }, {
                key: "y",
                get: function() {
                    return this.position.y
                },
                set: function(t) {
                    this.transform.position.y = t
                }
            }, {
                key: "worldTransform",
                get: function() {
                    return this.transform.worldTransform
                }
            }, {
                key: "localTransform",
                get: function() {
                    return this.transform.localTransform
                }
            }, {
                key: "position",
                get: function() {
                    return this.transform.position
                },
                set: function(t) {
                    this.transform.position.copy(t)
                }
            }, {
                key: "scale",
                get: function() {
                    return this.transform.scale
                },
                set: function(t) {
                    this.transform.scale.copy(t)
                }
            }, {
                key: "pivot",
                get: function() {
                    return this.transform.pivot
                },
                set: function(t) {
                    this.transform.pivot.copy(t)
                }
            }, {
                key: "skew",
                get: function() {
                    return this.transform.skew
                },
                set: function(t) {
                    this.transform.skew.copy(t)
                }
            }, {
                key: "rotation",
                get: function() {
                    return this.transform.rotation
                },
                set: function(t) {
                    this.transform.rotation = t
                }
            }, {
                key: "worldVisible",
                get: function() {
                    var t = this;
                    do {
                        if (!t.visible) return !1;
                        t = t.parent
                    } while (t);
                    return !0
                }
            }, {
                key: "mask",
                get: function() {
                    return this._mask
                },
                set: function(t) {
                    this._mask && (this._mask.renderable = !0, this._mask.isMask = !1), this._mask = t, this._mask && (this._mask.renderable = !1, this._mask.isMask = !0)
                }
            }, {
                key: "filters",
                get: function() {
                    return this._filters && this._filters.slice()
                },
                set: function(t) {
                    this._filters = t && t.slice()
                }
            }]), e
        }(u.default);
    e.default = x, x.prototype.displayObjectUpdateTransform = x.prototype.updateTransform
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        a = i(4),
        h = i(35),
        u = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(h),
        l = function(t) {
            function e() {
                r(this, e);
                var i = n(this, t.call(this));
                return i.position = new a.Point(0, 0), i.scale = new a.Point(1, 1), i.skew = new a.ObservablePoint(i.updateSkew, i, 0, 0), i.pivot = new a.Point(0, 0), i._rotation = 0, i._cx = 1, i._sx = 0, i._cy = 0, i._sy = 1, i
            }
            return o(e, t), e.prototype.updateSkew = function() {
                this._cx = Math.cos(this._rotation + this.skew._y), this._sx = Math.sin(this._rotation + this.skew._y), this._cy = -Math.sin(this._rotation - this.skew._x), this._sy = Math.cos(this._rotation - this.skew._x)
            }, e.prototype.updateLocalTransform = function() {
                var t = this.localTransform;
                t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d)
            }, e.prototype.updateTransform = function(t) {
                var e = this.localTransform;
                e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d);
                var i = t.worldTransform,
                    r = this.worldTransform;
                r.a = e.a * i.a + e.b * i.c, r.b = e.a * i.b + e.b * i.d, r.c = e.c * i.a + e.d * i.c, r.d = e.c * i.b + e.d * i.d, r.tx = e.tx * i.a + e.ty * i.c + i.tx, r.ty = e.tx * i.b + e.ty * i.d + i.ty, this._worldID++
            }, e.prototype.setFromMatrix = function(t) {
                t.decompose(this)
            }, s(e, [{
                key: "rotation",
                get: function() {
                    return this._rotation
                },
                set: function(t) {
                    this._rotation = t, this.updateSkew()
                }
            }]), e
        }(u.default);
    e.default = l
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        a = i(4),
        h = i(35),
        u = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(h),
        l = function(t) {
            function e() {
                r(this, e);
                var i = n(this, t.call(this));
                return i.position = new a.ObservablePoint(i.onChange, i, 0, 0), i.scale = new a.ObservablePoint(i.onChange, i, 1, 1), i.pivot = new a.ObservablePoint(i.onChange, i, 0, 0), i.skew = new a.ObservablePoint(i.updateSkew, i, 0, 0), i._rotation = 0, i._cx = 1, i._sx = 0, i._cy = 0, i._sy = 1, i._localID = 0, i._currentLocalID = 0, i
            }
            return o(e, t), e.prototype.onChange = function() {
                this._localID++
            }, e.prototype.updateSkew = function() {
                this._cx = Math.cos(this._rotation + this.skew._y), this._sx = Math.sin(this._rotation + this.skew._y), this._cy = -Math.sin(this._rotation - this.skew._x), this._sy = Math.cos(this._rotation - this.skew._x), this._localID++
            }, e.prototype.updateLocalTransform = function() {
                var t = this.localTransform;
                this._localID !== this._currentLocalID && (t.a = this._cx * this.scale._x, t.b = this._sx * this.scale._x, t.c = this._cy * this.scale._y, t.d = this._sy * this.scale._y, t.tx = this.position._x - (this.pivot._x * t.a + this.pivot._y * t.c), t.ty = this.position._y - (this.pivot._x * t.b + this.pivot._y * t.d), this._currentLocalID = this._localID, this._parentID = -1)
            }, e.prototype.updateTransform = function(t) {
                var e = this.localTransform;
                if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale._x, e.b = this._sx * this.scale._x, e.c = this._cy * this.scale._y, e.d = this._sy * this.scale._y, e.tx = this.position._x - (this.pivot._x * e.a + this.pivot._y * e.c), e.ty = this.position._y - (this.pivot._x * e.b + this.pivot._y * e.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== t._worldID) {
                    var i = t.worldTransform,
                        r = this.worldTransform;
                    r.a = e.a * i.a + e.b * i.c, r.b = e.a * i.b + e.b * i.d, r.c = e.c * i.a + e.d * i.c, r.d = e.c * i.b + e.d * i.d, r.tx = e.tx * i.a + e.ty * i.c + i.tx, r.ty = e.tx * i.b + e.ty * i.d + i.ty, this._parentID = t._worldID, this._worldID++
                }
            }, e.prototype.setFromMatrix = function(t) {
                t.decompose(this), this._localID++
            }, s(e, [{
                key: "rotation",
                get: function() {
                    return this._rotation
                },
                set: function(t) {
                    this._rotation !== t && (this._rotation = t, this.updateSkew())
                }
            }]), e
        }(u.default);
    e.default = l
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = function() {
        function t(e, i, n, o, s, a, h, u, l) {
            r(this, t), this.lineWidth = e, this.lineAlignment = l, this.nativeLines = h, this.lineColor = i, this.lineAlpha = n, this._lineTint = i, this.fillColor = o, this.fillAlpha = s, this._fillTint = o, this.fill = a, this.holes = [], this.shape = u, this.type = u.type
        }
        return t.prototype.clone = function() {
            return new t(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.nativeLines, this.shape, this.lineAlignment)
        }, t.prototype.addHole = function(t) {
            this.holes.push(t)
        }, t.prototype.destroy = function() {
            this.shape = null, this.holes = null
        }, t
    }();
    e.default = n
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t < 0 ? -1 : t > 0 ? 1 : 0
    }
    e.__esModule = !0;
    var n = i(36),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n),
        s = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
        a = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
        h = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
        u = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
        l = [],
        c = [];
    ! function() {
        for (var t = 0; t < 16; t++) {
            var e = [];
            c.push(e);
            for (var i = 0; i < 16; i++)
                for (var n = r(s[t] * s[i] + h[t] * a[i]), f = r(a[t] * s[i] + u[t] * a[i]), d = r(s[t] * h[i] + h[t] * u[i]), p = r(a[t] * h[i] + u[t] * u[i]), _ = 0; _ < 16; _++)
                    if (s[_] === n && a[_] === f && h[_] === d && u[_] === p) {
                        e.push(_);
                        break
                    }
        }
        for (var v = 0; v < 16; v++) {
            var m = new o.default;
            m.set(s[v], a[v], h[v], u[v], 0, 0), l.push(m)
        }
    }();
    var f = {
        E: 0,
        SE: 1,
        S: 2,
        SW: 3,
        W: 4,
        NW: 5,
        N: 6,
        NE: 7,
        MIRROR_VERTICAL: 8,
        MIRROR_HORIZONTAL: 12,
        uX: function(t) {
            return s[t]
        },
        uY: function(t) {
            return a[t]
        },
        vX: function(t) {
            return h[t]
        },
        vY: function(t) {
            return u[t]
        },
        inv: function(t) {
            return 8 & t ? 15 & t : 7 & -t
        },
        add: function(t, e) {
            return c[t][e]
        },
        sub: function(t, e) {
            return c[t][f.inv(e)]
        },
        rotate180: function(t) {
            return 4 ^ t
        },
        isVertical: function(t) {
            return 2 == (3 & t)
        },
        byDirection: function(t, e) {
            return 2 * Math.abs(t) <= Math.abs(e) ? e >= 0 ? f.S : f.N : 2 * Math.abs(e) <= Math.abs(t) ? t > 0 ? f.E : f.W : e > 0 ? t > 0 ? f.SE : f.SW : t > 0 ? f.NE : f.NW
        },
        matrixAppendRotationInv: function(t, e) {
            var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                n = l[f.inv(e)];
            n.tx = i, n.ty = r, t.append(n)
        }
    };
    e.default = f
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        o = function() {
            function t(e, i) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                r(this, t), this._x = n, this._y = o, this.cb = e, this.scope = i
            }
            return t.prototype.clone = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                return new t(e || this.cb, i || this.scope, this._x, this._y)
            }, t.prototype.set = function(t, e) {
                var i = t || 0,
                    r = e || (0 !== e ? i : 0);
                this._x === i && this._y === r || (this._x = i, this._y = r, this.cb.call(this.scope))
            }, t.prototype.copy = function(t) {
                this._x === t.x && this._y === t.y || (this._x = t.x, this._y = t.y, this.cb.call(this.scope))
            }, t.prototype.equals = function(t) {
                return t.x === this._x && t.y === this._y
            }, n(t, [{
                key: "x",
                get: function() {
                    return this._x
                },
                set: function(t) {
                    this._x !== t && (this._x = t, this.cb.call(this.scope))
                }
            }, {
                key: "y",
                get: function() {
                    return this._y
                },
                set: function(t) {
                    this._y !== t && (this._y = t, this.cb.call(this.scope))
                }
            }]), t
        }();
    e.default = o
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        h = i(2),
        u = i(4),
        l = i(0),
        c = i(3),
        f = r(c),
        d = i(17),
        p = r(d),
        _ = i(40),
        v = r(_),
        m = i(12),
        g = r(m),
        y = new u.Matrix,
        x = function(t) {
            function e(i, r, s, a) {
                n(this, e);
                var c = o(this, t.call(this));
                return (0, h.sayHello)(i), "number" == typeof r && (r = Object.assign({
                    width: r,
                    height: s || f.default.RENDER_OPTIONS.height
                }, a)), r = Object.assign({}, f.default.RENDER_OPTIONS, r), c.options = r, c.type = l.RENDERER_TYPE.UNKNOWN, c.screen = new u.Rectangle(0, 0, r.width, r.height), c.view = r.view || document.createElement("canvas"), c.resolution = r.resolution || f.default.RESOLUTION, c.transparent = r.transparent, c.autoResize = r.autoResize || !1, c.blendModes = null, c.preserveDrawingBuffer = r.preserveDrawingBuffer, c.clearBeforeRender = r.clearBeforeRender, c.roundPixels = r.roundPixels, c._backgroundColor = 0, c._backgroundColorRgba = [0, 0, 0, 0], c._backgroundColorString = "#000000", c.backgroundColor = r.backgroundColor || c._backgroundColor, c._tempDisplayObjectParent = new p.default, c._lastObjectRendered = c._tempDisplayObjectParent, c
            }
            return s(e, t), e.prototype.resize = function(t, e) {
                this.screen.width = t, this.screen.height = e, this.view.width = t * this.resolution, this.view.height = e * this.resolution, this.autoResize && (this.view.style.width = t + "px", this.view.style.height = e + "px")
            }, e.prototype.generateTexture = function(t, e, i, r) {
                r = r || t.getLocalBounds();
                var n = v.default.create(0 | r.width, 0 | r.height, e, i);
                return y.tx = -r.x, y.ty = -r.y, this.render(t, n, !1, y, !!t.parent), n
            }, e.prototype.destroy = function(t) {
                t && this.view.parentNode && this.view.parentNode.removeChild(this.view), this.type = l.RENDERER_TYPE.UNKNOWN, this.view = null, this.screen = null, this.resolution = 0, this.transparent = !1, this.autoResize = !1, this.blendModes = null, this.options = null, this.preserveDrawingBuffer = !1, this.clearBeforeRender = !1, this.roundPixels = !1, this._backgroundColor = 0, this._backgroundColorRgba = null, this._backgroundColorString = null, this._tempDisplayObjectParent = null, this._lastObjectRendered = null
            }, a(e, [{
                key: "width",
                get: function() {
                    return this.view.width
                }
            }, {
                key: "height",
                get: function() {
                    return this.view.height
                }
            }, {
                key: "backgroundColor",
                get: function() {
                    return this._backgroundColor
                },
                set: function(t) {
                    this._backgroundColor = t, this._backgroundColorString = (0, h.hex2string)(t), (0, h.hex2rgb)(t, this._backgroundColorRgba)
                }
            }]), e
        }(g.default);
    e.default = x
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        o = i(3),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(o),
        a = function() {
            function t(e, i, n) {
                r(this, t), this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = n || s.default.RESOLUTION, this.resize(e, i)
            }
            return t.prototype.clear = function() {
                this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
            }, t.prototype.resize = function(t, e) {
                this.canvas.width = t * this.resolution, this.canvas.height = e * this.resolution
            }, t.prototype.destroy = function() {
                this.context = null, this.canvas = null
            }, n(t, [{
                key: "width",
                get: function() {
                    return this.canvas.width
                },
                set: function(t) {
                    this.canvas.width = t
                }
            }, {
                key: "height",
                get: function() {
                    return this.canvas.height
                },
                set: function(t) {
                    this.canvas.height = t
                }
            }]), t
        }();
    e.default = a
}, function(t, e, i) {
    "use strict";

    function r(t) {
        var e = document.createElement("canvas");
        e.width = 6, e.height = 1;
        var i = e.getContext("2d");
        return i.fillStyle = t, i.fillRect(0, 0, 6, 1), e
    }

    function n() {
        if ("undefined" == typeof document) return !1;
        var t = r("#ff00ff"),
            e = r("#ffff00"),
            i = document.createElement("canvas");
        i.width = 6, i.height = 1;
        var n = i.getContext("2d");
        n.globalCompositeOperation = "multiply", n.drawImage(t, 0, 0), n.drawImage(e, 2, 0);
        var o = n.getImageData(2, 0, 1, 1);
        if (!o) return !1;
        var s = o.data;
        return 255 === s[0] && 0 === s[1] && 0 === s[2]
    }
    e.__esModule = !0, e.default = n
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        s = i(140),
        a = r(s),
        h = i(2),
        u = i(0),
        l = i(3),
        c = r(l),
        f = {},
        d = function() {
            function t(e, i, r) {
                n(this, t), this.vertexSrc = e || t.defaultVertexSrc, this.fragmentSrc = i || t.defaultFragmentSrc, this._blendMode = u.BLEND_MODES.NORMAL, this.uniformData = r || (0, a.default)(this.vertexSrc, this.fragmentSrc, "projectionMatrix|uSampler"), this.uniforms = {};
                for (var o in this.uniformData) this.uniforms[o] = this.uniformData[o].value, this.uniformData[o].type && (this.uniformData[o].type = this.uniformData[o].type.toLowerCase());
                this.glShaders = {}, f[this.vertexSrc + this.fragmentSrc] || (f[this.vertexSrc + this.fragmentSrc] = (0, h.uid)()), this.glShaderKey = f[this.vertexSrc + this.fragmentSrc], this.padding = 4, this.resolution = c.default.FILTER_RESOLUTION, this.enabled = !0, this.autoFit = !0
            }
            return t.prototype.apply = function(t, e, i, r, n) {
                t.applyFilter(this, e, i, r)
            }, o(t, [{
                key: "blendMode",
                get: function() {
                    return this._blendMode
                },
                set: function(t) {
                    this._blendMode = t
                }
            }], [{
                key: "defaultVertexSrc",
                get: function() {
                    return ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 projectionMatrix;", "uniform mat3 filterMatrix;", "varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;", "   vTextureCoord = aTextureCoord ;", "}"].join("\n")
                }
            }, {
                key: "defaultFragmentSrc",
                get: function() {
                    return ["varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "uniform sampler2D uSampler;", "uniform sampler2D filterSampler;", "void main(void){", "   vec4 masky = texture2D(filterSampler, vFilterCoord);", "   vec4 sample = texture2D(uSampler, vTextureCoord);", "   vec4 color;", "   if(mod(vFilterCoord.x, 1.0) > 0.5)", "   {", "     color = vec4(1.0, 0.0, 0.0, 1.0);", "   }", "   else", "   {", "     color = vec4(0.0, 1.0, 0.0, 1.0);", "   }", "   gl_FragColor = mix(sample, masky, 0.5);", "   gl_FragColor *= sample.a;", "}"].join("\n")
                }
            }]), t
        }();
    e.default = d
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = i(75),
        h = r(a),
        u = i(4),
        l = (i(7), i(81)),
        c = r(l),
        f = function(t) {
            function e(i) {
                n(this, e);
                var r = new u.Matrix,
                    s = o(this, t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n", "varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n\n    original *= (masky.r * masky.a * alpha * clip);\n\n    gl_FragColor = original;\n}\n"));
                return i.renderable = !1, s.maskSprite = i, s.maskMatrix = r, s
            }
            return s(e, t), e.prototype.apply = function(t, e, i, r) {
                var n = this.maskSprite,
                    o = this.maskSprite.texture;
                o.valid && (o.transform || (o.transform = new c.default(o, 0)), o.transform.update(), this.uniforms.mask = o, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, n).prepend(o.transform.mapCoord), this.uniforms.alpha = n.worldAlpha, this.uniforms.maskClamp = o.transform.uClampFrame, t.applyFilter(this, e, i, r))
            }, e
        }(h.default);
    e.default = f
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var o = i(6),
        s = r(o),
        a = i(42),
        h = r(a),
        u = function() {
            function t(e, i) {
                n(this, t), this.gl = e, this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.interleaved = new Float32Array(16);
                for (var r = 0; r < 4; r++) this.interleaved[4 * r] = this.vertices[2 * r], this.interleaved[4 * r + 1] = this.vertices[2 * r + 1], this.interleaved[4 * r + 2] = this.uvs[2 * r], this.interleaved[4 * r + 3] = this.uvs[2 * r + 1];
                this.indices = (0, h.default)(1), this.vertexBuffer = s.default.GLBuffer.createVertexBuffer(e, this.interleaved, e.STATIC_DRAW), this.indexBuffer = s.default.GLBuffer.createIndexBuffer(e, this.indices, e.STATIC_DRAW), this.vao = new s.default.VertexArrayObject(e, i)
            }
            return t.prototype.initVao = function(t) {
                this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer, t.attributes.aVertexPosition, this.gl.FLOAT, !1, 16, 0).addAttribute(this.vertexBuffer, t.attributes.aTextureCoord, this.gl.FLOAT, !1, 16, 8)
            }, t.prototype.map = function(t, e) {
                var i = 0,
                    r = 0;
                return this.uvs[0] = i, this.uvs[1] = r, this.uvs[2] = i + e.width / t.width, this.uvs[3] = r, this.uvs[4] = i + e.width / t.width, this.uvs[5] = r + e.height / t.height, this.uvs[6] = i, this.uvs[7] = r + e.height / t.height, i = e.x, r = e.y, this.vertices[0] = i, this.vertices[1] = r, this.vertices[2] = i + e.width, this.vertices[3] = r, this.vertices[4] = i + e.width, this.vertices[5] = r + e.height, this.vertices[6] = i, this.vertices[7] = r + e.height, this
            }, t.prototype.upload = function() {
                for (var t = 0; t < 4; t++) this.interleaved[4 * t] = this.vertices[2 * t], this.interleaved[4 * t + 1] = this.vertices[2 * t + 1], this.interleaved[4 * t + 2] = this.uvs[2 * t], this.interleaved[4 * t + 3] = this.uvs[2 * t + 1];
                return this.vertexBuffer.upload(this.interleaved), this
            }, t.prototype.destroy = function() {
                var t = this.gl;
                t.deleteBuffer(this.vertexBuffer), t.deleteBuffer(this.indexBuffer)
            }, t
        }();
    e.default = u
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = function() {
        function t(e, i, n, o, s, a, h, u, l) {
            r(this, t), this.text = e, this.style = i, this.width = n, this.height = o, this.lines = s, this.lineWidths = a, this.lineHeight = h, this.maxLineWidth = u, this.fontProperties = l
        }
        return t.measureText = function(e, i, r) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t._canvas;
            r = void 0 === r || null === r ? i.wordWrap : r;
            var o = i.toFontString(),
                s = t.measureFont(o),
                a = n.getContext("2d");
            a.font = o;
            for (var h = r ? t.wordWrap(e, i, n) : e, u = h.split(/(?:\r\n|\r|\n)/), l = new Array(u.length), c = 0, f = 0; f < u.length; f++) {
                var d = a.measureText(u[f]).width + (u[f].length - 1) * i.letterSpacing;
                l[f] = d, c = Math.max(c, d)
            }
            var p = c + i.strokeThickness;
            i.dropShadow && (p += i.dropShadowDistance);
            var _ = i.lineHeight || s.fontSize + i.strokeThickness,
                v = Math.max(_, s.fontSize + i.strokeThickness) + (u.length - 1) * (_ + i.leading);
            return i.dropShadow && (v += i.dropShadowDistance), new t(e, i, p, v, u, l, _ + i.leading, c, s)
        }, t.wordWrap = function(e, i) {
            for (var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t._canvas, n = r.getContext("2d"), o = 0, s = "", a = "", h = {}, u = i.letterSpacing, l = i.whiteSpace, c = t.collapseSpaces(l), f = t.collapseNewlines(l), d = !c, p = i.wordWrapWidth + u, _ = t.tokenize(e), v = 0; v < _.length; v++) {
                var m = _[v];
                if (t.isNewline(m)) {
                    if (!f) {
                        a += t.addLine(s), d = !c, s = "", o = 0;
                        continue
                    }
                    m = " "
                }
                if (c) {
                    var g = t.isBreakingSpace(m),
                        y = t.isBreakingSpace(s[s.length - 1]);
                    if (g && y) continue
                }
                var x = t.getFromCache(m, u, h, n);
                if (x > p)
                    if ("" !== s && (a += t.addLine(s), s = "", o = 0), t.canBreakWords(m, i.breakWords))
                        for (var b = m.split(""), T = 0; T < b.length; T++) {
                            for (var w = b[T], E = 1; b[T + E];) {
                                var S = b[T + E],
                                    P = w[w.length - 1];
                                if (t.canBreakChars(P, S, m, T, i.breakWords)) break;
                                w += S, E++
                            }
                            T += w.length - 1;
                            var O = t.getFromCache(w, u, h, n);
                            O + o > p && (a += t.addLine(s), d = !1, s = "", o = 0), s += w, o += O
                        } else {
                            s.length > 0 && (a += t.addLine(s), s = "", o = 0);
                            var M = v === _.length - 1;
                            a += t.addLine(m, !M), d = !1, s = "", o = 0
                        } else x + o > p && (d = !1, a += t.addLine(s), s = "", o = 0), (s.length > 0 || !t.isBreakingSpace(m) || d) && (s += m, o += x)
            }
            return a += t.addLine(s, !1)
        }, t.addLine = function(e) {
            var i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return e = t.trimRight(e), e = i ? e + "\n" : e
        }, t.getFromCache = function(t, e, i, r) {
            var n = i[t];
            if (void 0 === n) {
                var o = t.length * e;
                n = r.measureText(t).width + o, i[t] = n
            }
            return n
        }, t.collapseSpaces = function(t) {
            return "normal" === t || "pre-line" === t
        }, t.collapseNewlines = function(t) {
            return "normal" === t
        }, t.trimRight = function(e) {
            if ("string" != typeof e) return "";
            for (var i = e.length - 1; i >= 0; i--) {
                var r = e[i];
                if (!t.isBreakingSpace(r)) break;
                e = e.slice(0, -1)
            }
            return e
        }, t.isNewline = function(e) {
            return "string" == typeof e && t._newlines.indexOf(e.charCodeAt(0)) >= 0
        }, t.isBreakingSpace = function(e) {
            return "string" == typeof e && t._breakingSpaces.indexOf(e.charCodeAt(0)) >= 0
        }, t.tokenize = function(e) {
            var i = [],
                r = "";
            if ("string" != typeof e) return i;
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                t.isBreakingSpace(o) || t.isNewline(o) ? ("" !== r && (i.push(r), r = ""), i.push(o)) : r += o
            }
            return "" !== r && i.push(r), i
        }, t.canBreakWords = function(t, e) {
            return e
        }, t.canBreakChars = function(t, e, i, r, n) {
            return !0
        }, t.measureFont = function(e) {
            if (t._fonts[e]) return t._fonts[e];
            var i = {},
                r = t._canvas,
                n = t._context;
            n.font = e;
            var o = t.METRICS_STRING + t.BASELINE_SYMBOL,
                s = Math.ceil(n.measureText(o).width),
                a = Math.ceil(n.measureText(t.BASELINE_SYMBOL).width),
                h = 2 * a;
            a = a * t.BASELINE_MULTIPLIER | 0, r.width = s, r.height = h, n.fillStyle = "#f00", n.fillRect(0, 0, s, h), n.font = e, n.textBaseline = "alphabetic", n.fillStyle = "#000", n.fillText(o, 0, a);
            var u = n.getImageData(0, 0, s, h).data,
                l = u.length,
                c = 4 * s,
                f = 0,
                d = 0,
                p = !1;
            for (f = 0; f < a; ++f) {
                for (var _ = 0; _ < c; _ += 4)
                    if (255 !== u[d + _]) {
                        p = !0;
                        break
                    }
                if (p) break;
                d += c
            }
            for (i.ascent = a - f, d = l - c, p = !1, f = h; f > a; --f) {
                for (var v = 0; v < c; v += 4)
                    if (255 !== u[d + v]) {
                        p = !0;
                        break
                    }
                if (p) break;
                d -= c
            }
            return i.descent = f - a, i.fontSize = i.ascent + i.descent, t._fonts[e] = i, i
        }, t.clearMetrics = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            e ? delete t._fonts[e] : t._fonts = {}
        }, t
    }();
    e.default = n;
    var o = document.createElement("canvas");
    o.width = o.height = 10, n._canvas = o, n._context = o.getContext("2d"), n._fonts = {}, n.METRICS_STRING = "|Éq", n.BASELINE_SYMBOL = "M", n.BASELINE_MULTIPLIER = 1.4, n._newlines = [10, 13], n._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288]
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t) {
        return "number" == typeof t ? (0, l.hex2string)(t) : ("string" == typeof t && 0 === t.indexOf("0x") && (t = t.replace("0x", "#")), t)
    }

    function o(t) {
        if (Array.isArray(t)) {
            for (var e = 0; e < t.length; ++e) t[e] = n(t[e]);
            return t
        }
        return n(t)
    }

    function s(t, e) {
        if (!Array.isArray(t) || !Array.isArray(e)) return !1;
        if (t.length !== e.length) return !1;
        for (var i = 0; i < t.length; ++i)
            if (t[i] !== e[i]) return !1;
        return !0
    }

    function a(t, e, i) {
        for (var r in i) Array.isArray(e[r]) ? t[r] = e[r].slice() : t[r] = e[r]
    }
    e.__esModule = !0;
    var h = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        u = i(0),
        l = i(2),
        c = {
            align: "left",
            breakWords: !1,
            dropShadow: !1,
            dropShadowAlpha: 1,
            dropShadowAngle: Math.PI / 6,
            dropShadowBlur: 0,
            dropShadowColor: "black",
            dropShadowDistance: 5,
            fill: "black",
            fillGradientType: u.TEXT_GRADIENT.LINEAR_VERTICAL,
            fillGradientStops: [],
            fontFamily: "Arial",
            fontSize: 26,
            fontStyle: "normal",
            fontVariant: "normal",
            fontWeight: "normal",
            letterSpacing: 0,
            lineHeight: 0,
            lineJoin: "miter",
            miterLimit: 10,
            padding: 0,
            stroke: "black",
            strokeThickness: 0,
            textBaseline: "alphabetic",
            trim: !1,
            whiteSpace: "pre",
            wordWrap: !1,
            wordWrapWidth: 100,
            leading: 0
        },
        f = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"],
        d = function() {
            function t(e) {
                r(this, t), this.styleID = 0, this.reset(), a(this, e, e)
            }
            return t.prototype.clone = function() {
                var e = {};
                return a(e, this, c), new t(e)
            }, t.prototype.reset = function() {
                a(this, c, c)
            }, t.prototype.toFontString = function() {
                var t = "number" == typeof this.fontSize ? this.fontSize + "px" : this.fontSize,
                    e = this.fontFamily;
                Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));
                for (var i = e.length - 1; i >= 0; i--) {
                    var r = e[i].trim();
                    !/([\"\'])[^\'\"]+\1/.test(r) && f.indexOf(r) < 0 && (r = '"' + r + '"'), e[i] = r
                }
                return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + t + " " + e.join(",")
            }, h(t, [{
                key: "align",
                get: function() {
                    return this._align
                },
                set: function(t) {
                    this._align !== t && (this._align = t, this.styleID++)
                }
            }, {
                key: "breakWords",
                get: function() {
                    return this._breakWords
                },
                set: function(t) {
                    this._breakWords !== t && (this._breakWords = t, this.styleID++)
                }
            }, {
                key: "dropShadow",
                get: function() {
                    return this._dropShadow
                },
                set: function(t) {
                    this._dropShadow !== t && (this._dropShadow = t, this.styleID++)
                }
            }, {
                key: "dropShadowAlpha",
                get: function() {
                    return this._dropShadowAlpha
                },
                set: function(t) {
                    this._dropShadowAlpha !== t && (this._dropShadowAlpha = t, this.styleID++)
                }
            }, {
                key: "dropShadowAngle",
                get: function() {
                    return this._dropShadowAngle
                },
                set: function(t) {
                    this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++)
                }
            }, {
                key: "dropShadowBlur",
                get: function() {
                    return this._dropShadowBlur
                },
                set: function(t) {
                    this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++)
                }
            }, {
                key: "dropShadowColor",
                get: function() {
                    return this._dropShadowColor
                },
                set: function(t) {
                    var e = o(t);
                    this._dropShadowColor !== e && (this._dropShadowColor = e, this.styleID++)
                }
            }, {
                key: "dropShadowDistance",
                get: function() {
                    return this._dropShadowDistance
                },
                set: function(t) {
                    this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++)
                }
            }, {
                key: "fill",
                get: function() {
                    return this._fill
                },
                set: function(t) {
                    var e = o(t);
                    this._fill !== e && (this._fill = e, this.styleID++)
                }
            }, {
                key: "fillGradientType",
                get: function() {
                    return this._fillGradientType
                },
                set: function(t) {
                    this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++)
                }
            }, {
                key: "fillGradientStops",
                get: function() {
                    return this._fillGradientStops
                },
                set: function(t) {
                    s(this._fillGradientStops, t) || (this._fillGradientStops = t, this.styleID++)
                }
            }, {
                key: "fontFamily",
                get: function() {
                    return this._fontFamily
                },
                set: function(t) {
                    this.fontFamily !== t && (this._fontFamily = t, this.styleID++)
                }
            }, {
                key: "fontSize",
                get: function() {
                    return this._fontSize
                },
                set: function(t) {
                    this._fontSize !== t && (this._fontSize = t, this.styleID++)
                }
            }, {
                key: "fontStyle",
                get: function() {
                    return this._fontStyle
                },
                set: function(t) {
                    this._fontStyle !== t && (this._fontStyle = t, this.styleID++)
                }
            }, {
                key: "fontVariant",
                get: function() {
                    return this._fontVariant
                },
                set: function(t) {
                    this._fontVariant !== t && (this._fontVariant = t, this.styleID++)
                }
            }, {
                key: "fontWeight",
                get: function() {
                    return this._fontWeight
                },
                set: function(t) {
                    this._fontWeight !== t && (this._fontWeight = t, this.styleID++)
                }
            }, {
                key: "letterSpacing",
                get: function() {
                    return this._letterSpacing
                },
                set: function(t) {
                    this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++)
                }
            }, {
                key: "lineHeight",
                get: function() {
                    return this._lineHeight
                },
                set: function(t) {
                    this._lineHeight !== t && (this._lineHeight = t, this.styleID++)
                }
            }, {
                key: "leading",
                get: function() {
                    return this._leading
                },
                set: function(t) {
                    this._leading !== t && (this._leading = t, this.styleID++)
                }
            }, {
                key: "lineJoin",
                get: function() {
                    return this._lineJoin
                },
                set: function(t) {
                    this._lineJoin !== t && (this._lineJoin = t, this.styleID++)
                }
            }, {
                key: "miterLimit",
                get: function() {
                    return this._miterLimit
                },
                set: function(t) {
                    this._miterLimit !== t && (this._miterLimit = t, this.styleID++)
                }
            }, {
                key: "padding",
                get: function() {
                    return this._padding
                },
                set: function(t) {
                    this._padding !== t && (this._padding = t, this.styleID++)
                }
            }, {
                key: "stroke",
                get: function() {
                    return this._stroke
                },
                set: function(t) {
                    var e = o(t);
                    this._stroke !== e && (this._stroke = e, this.styleID++)
                }
            }, {
                key: "strokeThickness",
                get: function() {
                    return this._strokeThickness
                },
                set: function(t) {
                    this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++)
                }
            }, {
                key: "textBaseline",
                get: function() {
                    return this._textBaseline
                },
                set: function(t) {
                    this._textBaseline !== t && (this._textBaseline = t, this.styleID++)
                }
            }, {
                key: "trim",
                get: function() {
                    return this._trim
                },
                set: function(t) {
                    this._trim !== t && (this._trim = t, this.styleID++)
                }
            }, {
                key: "whiteSpace",
                get: function() {
                    return this._whiteSpace
                },
                set: function(t) {
                    this._whiteSpace !== t && (this._whiteSpace = t, this.styleID++)
                }
            }, {
                key: "wordWrap",
                get: function() {
                    return this._wordWrap
                },
                set: function(t) {
                    this._wordWrap !== t && (this._wordWrap = t, this.styleID++)
                }
            }, {
                key: "wordWrapWidth",
                get: function() {
                    return this._wordWrapWidth
                },
                set: function(t) {
                    this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++)
                }
            }]), t
        }();
    e.default = d
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = i(13),
        h = r(a),
        u = i(3),
        l = r(u),
        c = function(t) {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100,
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
                    s = arguments[2],
                    a = arguments[3];
                n(this, e);
                var h = o(this, t.call(this, null, s));
                return h.resolution = a || l.default.RESOLUTION, h.width = Math.ceil(i), h.height = Math.ceil(r), h.realWidth = h.width * h.resolution, h.realHeight = h.height * h.resolution, h.scaleMode = void 0 !== s ? s : l.default.SCALE_MODE, h.hasLoaded = !0, h._glRenderTargets = {}, h._canvasRenderTarget = null, h.valid = !1, h
            }
            return s(e, t), e.prototype.resize = function(t, e) {
                t = Math.ceil(t), e = Math.ceil(e), t === this.width && e === this.height || (this.valid = t > 0 && e > 0, this.width = t, this.height = e, this.realWidth = this.width * this.resolution, this.realHeight = this.height * this.resolution, this.valid && this.emit("update", this))
            }, e.prototype.destroy = function() {
                t.prototype.destroy.call(this, !0), this.renderer = null
            }, e
        }(h.default);
    e.default = c
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        o = i(36),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(o),
        a = new s.default,
        h = function() {
            function t(e, i) {
                r(this, t), this._texture = e, this.mapCoord = new s.default, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._lastTextureID = -1, this.clampOffset = 0, this.clampMargin = void 0 === i ? .5 : i
            }
            return t.prototype.multiplyUvs = function(t, e) {
                void 0 === e && (e = t);
                for (var i = this.mapCoord, r = 0; r < t.length; r += 2) {
                    var n = t[r],
                        o = t[r + 1];
                    e[r] = n * i.a + o * i.c + i.tx, e[r + 1] = n * i.b + o * i.d + i.ty
                }
                return e
            }, t.prototype.update = function(t) {
                var e = this._texture;
                if (!e || !e.valid) return !1;
                if (!t && this._lastTextureID === e._updateID) return !1;
                this._lastTextureID = e._updateID;
                var i = e._uvs;
                this.mapCoord.set(i.x1 - i.x0, i.y1 - i.y0, i.x3 - i.x0, i.y3 - i.y0, i.x0, i.y0);
                var r = e.orig,
                    n = e.trim;
                n && (a.set(r.width / n.width, 0, 0, r.height / n.height, -n.x / n.width, -n.y / n.height), this.mapCoord.append(a));
                var o = e.baseTexture,
                    s = this.uClampFrame,
                    h = this.clampMargin / o.resolution,
                    u = this.clampOffset;
                return s[0] = (e._frame.x + h + u) / o.width, s[1] = (e._frame.y + h + u) / o.height, s[2] = (e._frame.x + e._frame.width - h + u) / o.width, s[3] = (e._frame.y + e._frame.height - h + u) / o.height, this.uClampOffset[0] = u / o.realWidth, this.uClampOffset[1] = u / o.realHeight, !0
            }, n(t, [{
                key: "texture",
                get: function() {
                    return this._texture
                },
                set: function(t) {
                    this._texture = t, this._lastTextureID = -1
                }
            }]), t
        }();
    e.default = h
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = i(70),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n),
        s = function() {
            function t() {
                r(this, t), this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsUint32 = new Uint32Array(4)
            }
            return t.prototype.set = function(t, e, i) {
                var r = e.width,
                    n = e.height;
                if (i) {
                    var s = t.width / 2 / r,
                        a = t.height / 2 / n,
                        h = t.x / r + s,
                        u = t.y / n + a;
                    i = o.default.add(i, o.default.NW), this.x0 = h + s * o.default.uX(i), this.y0 = u + a * o.default.uY(i), i = o.default.add(i, 2), this.x1 = h + s * o.default.uX(i), this.y1 = u + a * o.default.uY(i), i = o.default.add(i, 2), this.x2 = h + s * o.default.uX(i), this.y2 = u + a * o.default.uY(i), i = o.default.add(i, 2), this.x3 = h + s * o.default.uX(i), this.y3 = u + a * o.default.uY(i)
                } else this.x0 = t.x / r, this.y0 = t.y / n, this.x1 = (t.x + t.width) / r, this.y1 = t.y / n, this.x2 = (t.x + t.width) / r, this.y2 = (t.y + t.height) / n, this.x3 = t.x / r, this.y3 = (t.y + t.height) / n;
                this.uvsUint32[0] = (65535 & Math.round(65535 * this.y0)) << 16 | 65535 & Math.round(65535 * this.x0), this.uvsUint32[1] = (65535 & Math.round(65535 * this.y1)) << 16 | 65535 & Math.round(65535 * this.x1), this.uvsUint32[2] = (65535 & Math.round(65535 * this.y2)) << 16 | 65535 & Math.round(65535 * this.x2), this.uvsUint32[3] = (65535 & Math.round(65535 * this.y3)) << 16 | 65535 & Math.round(65535 * this.x3)
            }, t
        }();
    e.default = s
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function a(t, e) {
        if (!e) {
            var i = t.split("?").shift().toLowerCase();
            e = "video/" + i.substr(i.lastIndexOf(".") + 1)
        }
        var r = document.createElement("source");
        return r.src = t, r.type = e, r
    }
    e.__esModule = !0;
    var h = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        u = i(13),
        l = r(u),
        c = i(2),
        f = i(41),
        d = i(0),
        p = i(84),
        _ = r(p),
        v = function(t) {
            function e(i, r) {
                var s = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (n(this, e), !i) throw new Error("No video source element specified.");
                (i.readyState === i.HAVE_ENOUGH_DATA || i.readyState === i.HAVE_FUTURE_DATA) && i.width && i.height && (i.complete = !0);
                var a = o(this, t.call(this, i, r));
                return a.width = i.videoWidth, a.height = i.videoHeight, a._autoUpdate = !0, a._isAutoUpdating = !1, a.autoPlay = s, a.update = a.update.bind(a), a._onCanPlay = a._onCanPlay.bind(a), i.addEventListener("play", a._onPlayStart.bind(a)), i.addEventListener("pause", a._onPlayStop.bind(a)), a.hasLoaded = !1, a.__loaded = !1, a._isSourceReady() ? a._onCanPlay() : (i.addEventListener("canplay", a._onCanPlay), i.addEventListener("canplaythrough", a._onCanPlay)), a
            }
            return s(e, t), e.prototype._isSourcePlaying = function() {
                var t = this.source;
                return t.currentTime > 0 && !1 === t.paused && !1 === t.ended && t.readyState > 2
            }, e.prototype._isSourceReady = function() {
                return 3 === this.source.readyState || 4 === this.source.readyState
            }, e.prototype._onPlayStart = function() {
                this.hasLoaded || this._onCanPlay(), !this._isAutoUpdating && this.autoUpdate && (f.shared.add(this.update, this, d.UPDATE_PRIORITY.HIGH), this._isAutoUpdating = !0)
            }, e.prototype._onPlayStop = function() {
                this._isAutoUpdating && (f.shared.remove(this.update, this), this._isAutoUpdating = !1)
            }, e.prototype._onCanPlay = function() {
                this.hasLoaded = !0, this.source && (this.source.removeEventListener("canplay", this._onCanPlay), this.source.removeEventListener("canplaythrough", this._onCanPlay), this.width = this.source.videoWidth, this.height = this.source.videoHeight, this.__loaded || (this.__loaded = !0, this.emit("loaded", this)), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && this.source.play())
            }, e.prototype.destroy = function() {
                this._isAutoUpdating && f.shared.remove(this.update, this), this.source && this.source._pixiId && (l.default.removeFromCache(this.source._pixiId), delete this.source._pixiId, this.source.pause(), this.source.src = "", this.source.load()), t.prototype.destroy.call(this)
            }, e.fromVideo = function(t, i, r) {
                t._pixiId || (t._pixiId = "video_" + (0, c.uid)());
                var n = c.BaseTextureCache[t._pixiId];
                return n || (n = new e(t, i, r), l.default.addToCache(n, t._pixiId)), n
            }, e.fromUrl = function(t, i, r, n) {
                var o = document.createElement("video");
                o.setAttribute("webkit-playsinline", ""), o.setAttribute("playsinline", "");
                var s = Array.isArray(t) ? t[0].src || t[0] : t.src || t;
                if (void 0 === r && 0 !== s.indexOf("data:") ? o.crossOrigin = (0, _.default)(s) : r && (o.crossOrigin = "string" == typeof r ? r : "anonymous"), Array.isArray(t))
                    for (var h = 0; h < t.length; ++h) o.appendChild(a(t[h].src || t[h], t[h].mime));
                else o.appendChild(a(s, t.mime));
                return o.load(), e.fromVideo(o, i, n)
            }, h(e, [{
                key: "autoUpdate",
                get: function() {
                    return this._autoUpdate
                },
                set: function(t) {
                    t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isAutoUpdating ? (f.shared.remove(this.update, this), this._isAutoUpdating = !1) : this._autoUpdate && !this._isAutoUpdating && (f.shared.add(this.update, this, d.UPDATE_PRIORITY.HIGH), this._isAutoUpdating = !0))
                }
            }]), e
        }(l.default);
    e.default = v, v.fromUrls = v.fromUrl
}, function(t, e, i) {
    "use strict";

    function r(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location;
        if (0 === t.indexOf("data:")) return "";
        e = e || window.location, s || (s = document.createElement("a")), s.href = t, t = o.default.parse(s.href);
        var i = !t.port && "" === e.port || t.port === e.port;
        return t.hostname === e.hostname && i && t.protocol === e.protocol ? "" : "anonymous"
    }
    e.__esModule = !0, e.default = r;
    var n = i(102),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n),
        s = void 0
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0, e.BitmapText = e.TilingSpriteRenderer = e.TilingSprite = e.AnimatedSprite = void 0;
    var n = i(167);
    Object.defineProperty(e, "AnimatedSprite", {
        enumerable: !0,
        get: function() {
            return r(n).default
        }
    });
    var o = i(169);
    Object.defineProperty(e, "TilingSprite", {
        enumerable: !0,
        get: function() {
            return r(o).default
        }
    });
    var s = i(173);
    Object.defineProperty(e, "TilingSpriteRenderer", {
        enumerable: !0,
        get: function() {
            return r(s).default
        }
    });
    var a = i(168);
    Object.defineProperty(e, "BitmapText", {
        enumerable: !0,
        get: function() {
            return r(a).default
        }
    }), i(170), i(171), i(172)
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        h = i(1),
        u = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(h),
        l = i(89),
        c = r(l),
        f = i(88),
        d = r(f),
        p = i(90),
        _ = r(p),
        v = function(t) {
            function e(i, r, s, a) {
                n(this, e), a = a || 5;
                var h = (0, c.default)(a, !0),
                    l = (0, d.default)(a),
                    f = o(this, t.call(this, h, l));
                return f.resolution = s || u.settings.RESOLUTION, f._quality = 0, f.quality = r || 4, f.strength = i || 8, f.firstRun = !0, f
            }
            return s(e, t), e.prototype.apply = function(t, e, i, r) {
                if (this.firstRun) {
                    var n = t.renderer.gl,
                        o = (0, _.default)(n);
                    this.vertexSrc = (0, c.default)(o, !0), this.fragmentSrc = (0, d.default)(o), this.firstRun = !1
                }
                if (this.uniforms.strength = 1 / i.size.width * (i.size.width / e.size.width), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t.applyFilter(this, e, i, r);
                else {
                    for (var s = t.getRenderTarget(!0), a = e, h = s, u = 0; u < this.passes - 1; u++) {
                        t.applyFilter(this, a, h, !0);
                        var l = h;
                        h = a, a = l
                    }
                    t.applyFilter(this, a, i, r), t.returnRenderTarget(s)
                }
            }, a(e, [{
                key: "blur",
                get: function() {
                    return this.strength
                },
                set: function(t) {
                    this.padding = 2 * Math.abs(t), this.strength = t
                }
            }, {
                key: "quality",
                get: function() {
                    return this._quality
                },
                set: function(t) {
                    this._quality = t, this.passes = t
                }
            }]), e
        }(u.Filter);
    e.default = v
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        h = i(1),
        u = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(h),
        l = i(89),
        c = r(l),
        f = i(88),
        d = r(f),
        p = i(90),
        _ = r(p),
        v = function(t) {
            function e(i, r, s, a) {
                n(this, e), a = a || 5;
                var h = (0, c.default)(a, !1),
                    l = (0, d.default)(a),
                    f = o(this, t.call(this, h, l));
                return f.resolution = s || u.settings.RESOLUTION, f._quality = 0, f.quality = r || 4, f.strength = i || 8, f.firstRun = !0, f
            }
            return s(e, t), e.prototype.apply = function(t, e, i, r) {
                if (this.firstRun) {
                    var n = t.renderer.gl,
                        o = (0, _.default)(n);
                    this.vertexSrc = (0, c.default)(o, !1), this.fragmentSrc = (0, d.default)(o), this.firstRun = !1
                }
                if (this.uniforms.strength = 1 / i.size.height * (i.size.height / e.size.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, 1 === this.passes) t.applyFilter(this, e, i, r);
                else {
                    for (var s = t.getRenderTarget(!0), a = e, h = s, u = 0; u < this.passes - 1; u++) {
                        t.applyFilter(this, a, h, !0);
                        var l = h;
                        h = a, a = l
                    }
                    t.applyFilter(this, a, i, r), t.returnRenderTarget(s)
                }
            }, a(e, [{
                key: "blur",
                get: function() {
                    return this.strength
                },
                set: function(t) {
                    this.padding = 2 * Math.abs(t), this.strength = t
                }
            }, {
                key: "quality",
                get: function() {
                    return this._quality
                },
                set: function(t) {
                    this._quality = t, this.passes = t
                }
            }]), e
        }(u.Filter);
    e.default = v
}, function(t, e, i) {
    "use strict";

    function r(t) {
        for (var e = n[t], i = e.length, r = o, s = "", a = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;", h = void 0, u = 0; u < t; u++) {
            var l = a.replace("%index%", u);
            h = u, u >= i && (h = t - u - 1), l = l.replace("%value%", e[h]), s += l, s += "\n"
        }
        return r = r.replace("%blur%", s), r = r.replace("%size%", t)
    }
    e.__esModule = !0, e.default = r;
    var n = {
            5: [.153388, .221461, .250301],
            7: [.071303, .131514, .189879, .214607],
            9: [.028532, .067234, .124009, .179044, .20236],
            11: [.0093, .028002, .065984, .121703, .175713, .198596],
            13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
            15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
        },
        o = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join("\n")
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        var i = Math.ceil(t / 2),
            r = n,
            o = "",
            s = void 0;
        s = e ? "vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);";
        for (var a = 0; a < t; a++) {
            var h = s.replace("%index%", a);
            h = h.replace("%sampleIndex%", a - (i - 1) + ".0"), o += h, o += "\n"
        }
        return r = r.replace("%blur%", o), r = r.replace("%size%", t)
    }
    e.__esModule = !0, e.default = r;
    var n = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform float strength;", "uniform mat3 projectionMatrix;", "varying vec2 vBlurTexCoords[%size%];", "void main(void)", "{", "gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);", "%blur%", "}"].join("\n")
}, function(t, e, i) {
    "use strict";

    function r(t) {
        for (var e = t.getParameter(t.MAX_VARYING_VECTORS), i = 15; i > e;) i -= 2;
        return i
    }
    e.__esModule = !0, e.default = r
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        o = i(1),
        s = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(o),
        a = function() {
            function t() {
                r(this, t), this.global = new s.Point, this.target = null, this.originalEvent = null, this.identifier = null, this.isPrimary = !1, this.button = 0, this.buttons = 0, this.width = 0, this.height = 0, this.tiltX = 0, this.tiltY = 0, this.pointerType = null, this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0
            }
            return t.prototype.getLocalPosition = function(t, e, i) {
                return t.worldTransform.applyInverse(i || this.global, e)
            }, t.prototype.copyEvent = function(t) {
                t.isPrimary && (this.isPrimary = !0), this.button = t.button, this.buttons = Number.isInteger(t.buttons) ? t.buttons : t.which, this.width = t.width, this.height = t.height, this.tiltX = t.tiltX, this.tiltY = t.tiltY, this.pointerType = t.pointerType, this.pressure = t.pressure, this.rotationAngle = t.rotationAngle, this.twist = t.twist || 0, this.tangentialPressure = t.tangentialPressure || 0
            }, t.prototype.reset = function() {
                this.isPrimary = !1
            }, n(t, [{
                key: "pointerId",
                get: function() {
                    return this.identifier
                }
            }]), t
        }();
    e.default = a
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = function() {
        function t() {
            r(this, t), this.stopped = !1, this.target = null, this.currentTarget = null, this.type = null, this.data = null
        }
        return t.prototype.stopPropagation = function() {
            this.stopped = !0
        }, t.prototype.reset = function() {
            this.stopped = !1, this.currentTarget = null, this.target = null
        }, t
    }();
    e.default = n
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        o = function() {
            function t(e) {
                r(this, t), this._pointerId = e, this._flags = t.FLAGS.NONE
            }
            return t.prototype._doSet = function(t, e) {
                this._flags = e ? this._flags | t : this._flags & ~t
            }, n(t, [{
                key: "pointerId",
                get: function() {
                    return this._pointerId
                }
            }, {
                key: "flags",
                get: function() {
                    return this._flags
                },
                set: function(t) {
                    this._flags = t
                }
            }, {
                key: "none",
                get: function() {
                    return this._flags === this.constructor.FLAGS.NONE
                }
            }, {
                key: "over",
                get: function() {
                    return 0 != (this._flags & this.constructor.FLAGS.OVER)
                },
                set: function(t) {
                    this._doSet(this.constructor.FLAGS.OVER, t)
                }
            }, {
                key: "rightDown",
                get: function() {
                    return 0 != (this._flags & this.constructor.FLAGS.RIGHT_DOWN)
                },
                set: function(t) {
                    this._doSet(this.constructor.FLAGS.RIGHT_DOWN, t)
                }
            }, {
                key: "leftDown",
                get: function() {
                    return 0 != (this._flags & this.constructor.FLAGS.LEFT_DOWN)
                },
                set: function(t) {
                    this._doSet(this.constructor.FLAGS.LEFT_DOWN, t)
                }
            }]), t
        }();
    e.default = o, o.FLAGS = Object.freeze({
        NONE: 0,
        OVER: 1,
        LEFT_DOWN: 2,
        RIGHT_DOWN: 4
    })
}, function(t, e, i) {
    "use strict";
    e.__esModule = !0, e.default = {
        interactive: !1,
        interactiveChildren: !0,
        hitArea: null,
        get buttonMode() {
            return "pointer" === this.cursor
        },
        set buttonMode(t) {
            t ? this.cursor = "pointer" : "pointer" === this.cursor && (this.cursor = null)
        },
        cursor: null,
        get trackedPointers() {
            return void 0 === this._trackedPointers && (this._trackedPointers = {}), this._trackedPointers
        },
        _trackedPointers: void 0
    }
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        t.bitmapFont = a.BitmapText.registerFont(t.data, e)
    }
    e.__esModule = !0, e.parse = r, e.default = function() {
        return function(t, e) {
            if (!t.data || t.type !== s.Resource.TYPE.XML) return void e();
            if (0 === t.data.getElementsByTagName("page").length || 0 === t.data.getElementsByTagName("info").length || null === t.data.getElementsByTagName("info")[0].getAttribute("face")) return void e();
            var i = t.isDataUrl ? "" : o.dirname(t.url);
            t.isDataUrl && ("." === i && (i = ""), this.baseUrl && i && "/" === this.baseUrl.charAt(this.baseUrl.length - 1) && (i += "/")), (i = i.replace(this.baseUrl, "")) && "/" !== i.charAt(i.length - 1) && (i += "/");
            for (var n = t.data.getElementsByTagName("page"), a = {}, h = function(i) {
                    a[i.metadata.pageFile] = i.texture, Object.keys(a).length === n.length && (r(t, a), e())
                }, u = 0; u < n.length; ++u) {
                var l = n[u].getAttribute("file"),
                    c = i + l,
                    f = !1;
                for (var d in this.resources) {
                    var p = this.resources[d];
                    if (p.url === c) {
                        p.metadata.pageFile = l, p.texture ? h(p) : p.onAfterMiddleware.add(h), f = !0;
                        break
                    }
                }
                if (!f) {
                    var _ = {
                        crossOrigin: t.crossOrigin,
                        loadType: s.Resource.LOAD_TYPE.IMAGE,
                        metadata: Object.assign({
                            pageFile: l
                        }, t.metadata.imageMetadata),
                        parentResource: t
                    };
                    this.add(c, _, h)
                }
            }
        }
    };
    var n = i(7),
        o = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(n),
        s = i(21),
        a = i(85)
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        return t.isDataUrl ? t.data.meta.image : s.default.resolve(t.url.replace(e, ""), t.data.meta.image)
    }
    e.__esModule = !0, e.default = function() {
        return function(t, e) {
            var i = t.name + "_image";
            if (!t.data || t.type !== n.Resource.TYPE.JSON || !t.data.frames || this.resources[i]) return void e();
            var o = {
                    crossOrigin: t.crossOrigin,
                    metadata: t.metadata.imageMetadata,
                    parentResource: t
                },
                s = r(t, this.baseUrl);
            this.add(i, s, o, function(i) {
                if (i.error) return void e(i.error);
                var r = new a.Spritesheet(i.texture.baseTexture, t.data, t.url);
                r.parse(function() {
                    t.spritesheet = r, t.textures = r.textures, e()
                })
            })
        }
    }, e.getResourcePath = r;
    var n = i(21),
        o = i(102),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(o),
        a = i(1)
}, function(t, e, i) {
    "use strict";
    e.__esModule = !0, e.default = function() {
        return function(t, e) {
            t.data && t.type === r.Resource.TYPE.IMAGE && (t.texture = o.default.fromLoader(t.data, t.url, t.name)), e()
        }
    };
    var r = i(21),
        n = i(9),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n)
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var s = i(20),
        a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(s),
        h = function(t) {
            function e(i, o, s) {
                r(this, e);
                var h = n(this, t.call(this, i));
                return h._ready = !0, h.verticesX = o || 10, h.verticesY = s || 10, h.drawMode = a.default.DRAW_MODES.TRIANGLES, h.refresh(), h
            }
            return o(e, t), e.prototype._refresh = function() {
                for (var t = this._texture, e = this.verticesX * this.verticesY, i = [], r = [], n = [], o = [], s = this.verticesX - 1, a = this.verticesY - 1, h = t.width / s, u = t.height / a, l = 0; l < e; l++) {
                    var c = l % this.verticesX,
                        f = l / this.verticesX | 0;
                    i.push(c * h, f * u), n.push(c / s, f / a)
                }
                for (var d = s * a, p = 0; p < d; p++) {
                    var _ = p % s,
                        v = p / s | 0,
                        m = v * this.verticesX + _,
                        g = v * this.verticesX + _ + 1,
                        y = (v + 1) * this.verticesX + _,
                        x = (v + 1) * this.verticesX + _ + 1;
                    o.push(m, g, y), o.push(g, x, y)
                }
                this.vertices = new Float32Array(i), this.uvs = new Float32Array(n), this.colors = new Float32Array(r), this.indices = new Uint16Array(o), this.dirty++, this.indexDirty++, this.multiplyUvs()
            }, e.prototype._onTextureUpdate = function() {
                a.default.prototype._onTextureUpdate.call(this), this._ready && this.refresh()
            }, e
        }(a.default);
    e.default = h
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = function() {
        function t(e) {
            r(this, t), this.maxItemsPerFrame = e, this.itemsLeft = 0
        }
        return t.prototype.beginFrame = function() {
            this.itemsLeft = this.maxItemsPerFrame
        }, t.prototype.allowedToUpload = function() {
            return this.itemsLeft-- > 0
        }, t
    }();
    e.default = n
}, function(t, e, i) {
    "use strict";

    function r() {}

    function n(t, e, i, r) {
        var n = 0,
            o = t.length;
        ! function s(a) {
            if (a || n === o) return void(i && i(a));
            r ? setTimeout(function() {
                e(t[n++], s)
            }, 1) : e(t[n++], s)
        }()
    }

    function o(t) {
        return function() {
            if (null === t) throw new Error("Callback was already called.");
            var e = t;
            t = null, e.apply(this, arguments)
        }
    }

    function s(t, e) {
        function i(t, e, i) {
            if (null != i && "function" != typeof i) throw new Error("task callback must be a function");
            if (a.started = !0, null == t && a.idle()) return void setTimeout(function() {
                return a.drain()
            }, 1);
            var n = {
                data: t,
                callback: "function" == typeof i ? i : r
            };
            e ? a._tasks.unshift(n) : a._tasks.push(n), setTimeout(function() {
                return a.process()
            }, 1)
        }

        function n(t) {
            return function() {
                s -= 1, t.callback.apply(t, arguments), null != arguments[0] && a.error(arguments[0], t.data), s <= a.concurrency - a.buffer && a.unsaturated(), a.idle() && a.drain(), a.process()
            }
        }
        if (null == e) e = 1;
        else if (0 === e) throw new Error("Concurrency must not be zero");
        var s = 0,
            a = {
                _tasks: [],
                concurrency: e,
                saturated: r,
                unsaturated: r,
                buffer: e / 4,
                empty: r,
                drain: r,
                error: r,
                started: !1,
                paused: !1,
                push: function(t, e) {
                    i(t, !1, e)
                },
                kill: function() {
                    s = 0, a.drain = r, a.started = !1, a._tasks = []
                },
                unshift: function(t, e) {
                    i(t, !0, e)
                },
                process: function() {
                    for (; !a.paused && s < a.concurrency && a._tasks.length;) {
                        var e = a._tasks.shift();
                        0 === a._tasks.length && a.empty(), s += 1, s === a.concurrency && a.saturated(), t(e.data, o(n(e)))
                    }
                },
                length: function() {
                    return a._tasks.length
                },
                running: function() {
                    return s
                },
                idle: function() {
                    return a._tasks.length + s === 0
                },
                pause: function() {
                    !0 !== a.paused && (a.paused = !0)
                },
                resume: function() {
                    if (!1 !== a.paused) {
                        a.paused = !1;
                        for (var t = 1; t <= a.concurrency; t++) a.process()
                    }
                }
            };
        return a
    }
    e.__esModule = !0, e.eachSeries = n, e.queue = s
}, function(t, e, i) {
    "use strict";

    function r(t) {
        for (var e = "", i = 0; i < t.length;) {
            for (var r = [0, 0, 0], o = [0, 0, 0, 0], s = 0; s < r.length; ++s) i < t.length ? r[s] = 255 & t.charCodeAt(i++) : r[s] = 0;
            o[0] = r[0] >> 2, o[1] = (3 & r[0]) << 4 | r[1] >> 4, o[2] = (15 & r[1]) << 2 | r[2] >> 6, o[3] = 63 & r[2];
            switch (i - (t.length - 1)) {
                case 2:
                    o[3] = 64, o[2] = 64;
                    break;
                case 1:
                    o[3] = 64
            }
            for (var a = 0; a < o.length; ++a) e += n.charAt(o[a])
        }
        return e
    }
    e.__esModule = !0, e.encodeBinary = r;
    var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    t.exports.default = r
}, function(t, e, i) {
    "use strict";

    function r() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }

    function n(t, e, i) {
        if (t && u.isObject(t) && t instanceof r) return t;
        var n = new r;
        return n.parse(t, e, i), n
    }

    function o(t) {
        return u.isString(t) && (t = n(t)), t instanceof r ? t.format() : r.prototype.format.call(t)
    }

    function s(t, e) {
        return n(t, !1, !0).resolve(e)
    }

    function a(t, e) {
        return t ? n(t, !1, !0).resolveObject(e) : e
    }
    var h = i(204),
        u = i(211);
    e.parse = n, e.resolve = s, e.resolveObject = a, e.format = o, e.Url = r;
    var l = /^([a-z0-9.+-]+:)/i,
        c = /:[0-9]*$/,
        f = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        d = ["<", ">", '"', "`", " ", "\r", "\n", "\t"],
        p = ["{", "}", "|", "\\", "^", "`"].concat(d),
        _ = ["'"].concat(p),
        v = ["%", "/", "?", ";", "#"].concat(_),
        m = ["/", "?", "#"],
        g = /^[+a-z0-9A-Z_-]{0,63}$/,
        y = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        x = {
            javascript: !0,
            "javascript:": !0
        },
        b = {
            javascript: !0,
            "javascript:": !0
        },
        T = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        },
        w = i(207);
    r.prototype.parse = function(t, e, i) {
        if (!u.isString(t)) throw new TypeError("Parameter 'url' must be a string, not " + typeof t);
        var r = t.indexOf("?"),
            n = -1 !== r && r < t.indexOf("#") ? "?" : "#",
            o = t.split(n),
            s = /\\/g;
        o[0] = o[0].replace(s, "/"), t = o.join(n);
        var a = t;
        if (a = a.trim(), !i && 1 === t.split("#").length) {
            var c = f.exec(a);
            if (c) return this.path = a, this.href = a, this.pathname = c[1], c[2] ? (this.search = c[2], this.query = e ? w.parse(this.search.substr(1)) : this.search.substr(1)) : e && (this.search = "", this.query = {}), this
        }
        var d = l.exec(a);
        if (d) {
            d = d[0];
            var p = d.toLowerCase();
            this.protocol = p, a = a.substr(d.length)
        }
        if (i || d || a.match(/^\/\/[^@\/]+@[^@\/]+/)) {
            var E = "//" === a.substr(0, 2);
            !E || d && b[d] || (a = a.substr(2), this.slashes = !0)
        }
        if (!b[d] && (E || d && !T[d])) {
            for (var S = -1, P = 0; P < m.length; P++) {
                var O = a.indexOf(m[P]); - 1 !== O && (-1 === S || O < S) && (S = O)
            }
            var M, C;
            C = -1 === S ? a.lastIndexOf("@") : a.lastIndexOf("@", S), -1 !== C && (M = a.slice(0, C), a = a.slice(C + 1), this.auth = decodeURIComponent(M)), S = -1;
            for (var P = 0; P < v.length; P++) {
                var O = a.indexOf(v[P]); - 1 !== O && (-1 === S || O < S) && (S = O)
            } - 1 === S && (S = a.length), this.host = a.slice(0, S), a = a.slice(S), this.parseHost(), this.hostname = this.hostname || "";
            var R = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
            if (!R)
                for (var A = this.hostname.split(/\./), P = 0, I = A.length; P < I; P++) {
                    var D = A[P];
                    if (D && !D.match(g)) {
                        for (var L = "", k = 0, N = D.length; k < N; k++) D.charCodeAt(k) > 127 ? L += "x" : L += D[k];
                        if (!L.match(g)) {
                            var F = A.slice(0, P),
                                B = A.slice(P + 1),
                                j = D.match(y);
                            j && (F.push(j[1]), B.unshift(j[2])), B.length && (a = "/" + B.join(".") + a), this.hostname = F.join(".");
                            break
                        }
                    }
                }
            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), R || (this.hostname = h.toASCII(this.hostname));
            var U = this.port ? ":" + this.port : "",
                X = this.hostname || "";
            this.host = X + U, this.href += this.host, R && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== a[0] && (a = "/" + a))
        }
        if (!x[p])
            for (var P = 0, I = _.length; P < I; P++) {
                var G = _[P];
                if (-1 !== a.indexOf(G)) {
                    var W = encodeURIComponent(G);
                    W === G && (W = escape(G)), a = a.split(G).join(W)
                }
            }
        var V = a.indexOf("#"); - 1 !== V && (this.hash = a.substr(V), a = a.slice(0, V));
        var H = a.indexOf("?");
        if (-1 !== H ? (this.search = a.substr(H), this.query = a.substr(H + 1), e && (this.query = w.parse(this.query)), a = a.slice(0, H)) : e && (this.search = "", this.query = {}), a && (this.pathname = a), T[p] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
            var U = this.pathname || "",
                z = this.search || "";
            this.path = U + z
        }
        return this.href = this.format(), this
    }, r.prototype.format = function() {
        var t = this.auth || "";
        t && (t = encodeURIComponent(t), t = t.replace(/%3A/i, ":"), t += "@");
        var e = this.protocol || "",
            i = this.pathname || "",
            r = this.hash || "",
            n = !1,
            o = "";
        this.host ? n = t + this.host : this.hostname && (n = t + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (n += ":" + this.port)), this.query && u.isObject(this.query) && Object.keys(this.query).length && (o = w.stringify(this.query));
        var s = this.search || o && "?" + o || "";
        return e && ":" !== e.substr(-1) && (e += ":"), this.slashes || (!e || T[e]) && !1 !== n ? (n = "//" + (n || ""), i && "/" !== i.charAt(0) && (i = "/" + i)) : n || (n = ""), r && "#" !== r.charAt(0) && (r = "#" + r), s && "?" !== s.charAt(0) && (s = "?" + s), i = i.replace(/[?#]/g, function(t) {
            return encodeURIComponent(t)
        }), s = s.replace("#", "%23"), e + n + i + s + r
    }, r.prototype.resolve = function(t) {
        return this.resolveObject(n(t, !1, !0)).format()
    }, r.prototype.resolveObject = function(t) {
        if (u.isString(t)) {
            var e = new r;
            e.parse(t, !1, !0), t = e
        }
        for (var i = new r, n = Object.keys(this), o = 0; o < n.length; o++) {
            var s = n[o];
            i[s] = this[s]
        }
        if (i.hash = t.hash, "" === t.href) return i.href = i.format(), i;
        if (t.slashes && !t.protocol) {
            for (var a = Object.keys(t), h = 0; h < a.length; h++) {
                var l = a[h];
                "protocol" !== l && (i[l] = t[l])
            }
            return T[i.protocol] && i.hostname && !i.pathname && (i.path = i.pathname = "/"), i.href = i.format(), i
        }
        if (t.protocol && t.protocol !== i.protocol) {
            if (!T[t.protocol]) {
                for (var c = Object.keys(t), f = 0; f < c.length; f++) {
                    var d = c[f];
                    i[d] = t[d]
                }
                return i.href = i.format(), i
            }
            if (i.protocol = t.protocol, t.host || b[t.protocol]) i.pathname = t.pathname;
            else {
                for (var p = (t.pathname || "").split("/"); p.length && !(t.host = p.shift()););
                t.host || (t.host = ""), t.hostname || (t.hostname = ""), "" !== p[0] && p.unshift(""), p.length < 2 && p.unshift(""), i.pathname = p.join("/")
            }
            if (i.search = t.search, i.query = t.query, i.host = t.host || "", i.auth = t.auth, i.hostname = t.hostname || t.host, i.port = t.port, i.pathname || i.search) {
                var _ = i.pathname || "",
                    v = i.search || "";
                i.path = _ + v
            }
            return i.slashes = i.slashes || t.slashes, i.href = i.format(), i
        }
        var m = i.pathname && "/" === i.pathname.charAt(0),
            g = t.host || t.pathname && "/" === t.pathname.charAt(0),
            y = g || m || i.host && t.pathname,
            x = y,
            w = i.pathname && i.pathname.split("/") || [],
            p = t.pathname && t.pathname.split("/") || [],
            E = i.protocol && !T[i.protocol];
        if (E && (i.hostname = "", i.port = null, i.host && ("" === w[0] ? w[0] = i.host : w.unshift(i.host)), i.host = "", t.protocol && (t.hostname = null, t.port = null, t.host && ("" === p[0] ? p[0] = t.host : p.unshift(t.host)), t.host = null), y = y && ("" === p[0] || "" === w[0])), g) i.host = t.host || "" === t.host ? t.host : i.host, i.hostname = t.hostname || "" === t.hostname ? t.hostname : i.hostname, i.search = t.search, i.query = t.query, w = p;
        else if (p.length) w || (w = []), w.pop(), w = w.concat(p), i.search = t.search, i.query = t.query;
        else if (!u.isNullOrUndefined(t.search)) {
            if (E) {
                i.hostname = i.host = w.shift();
                var S = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@");
                S && (i.auth = S.shift(), i.host = i.hostname = S.shift())
            }
            return i.search = t.search, i.query = t.query, u.isNull(i.pathname) && u.isNull(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.href = i.format(), i
        }
        if (!w.length) return i.pathname = null, i.search ? i.path = "/" + i.search : i.path = null, i.href = i.format(), i;
        for (var P = w.slice(-1)[0], O = (i.host || t.host || w.length > 1) && ("." === P || ".." === P) || "" === P, M = 0, C = w.length; C >= 0; C--) P = w[C], "." === P ? w.splice(C, 1) : ".." === P ? (w.splice(C, 1), M++) : M && (w.splice(C, 1), M--);
        if (!y && !x)
            for (; M--; M) w.unshift("..");
        !y || "" === w[0] || w[0] && "/" === w[0].charAt(0) || w.unshift(""), O && "/" !== w.join("/").substr(-1) && w.push("");
        var R = "" === w[0] || w[0] && "/" === w[0].charAt(0);
        if (E) {
            i.hostname = i.host = R ? "" : w.length ? w.shift() : "";
            var S = !!(i.host && i.host.indexOf("@") > 0) && i.host.split("@");
            S && (i.auth = S.shift(), i.host = i.hostname = S.shift())
        }
        return y = y || i.host && w.length, y && !R && w.unshift(""), w.length ? i.pathname = w.join("/") : (i.pathname = null, i.path = null), u.isNull(i.pathname) && u.isNull(i.search) || (i.path = (i.pathname ? i.pathname : "") + (i.search ? i.search : "")), i.auth = t.auth || i.auth, i.slashes = i.slashes || t.slashes, i.href = i.format(), i
    }, r.prototype.parseHost = function() {
        var t = this.host,
            e = c.exec(t);
        e && (e = e[0], ":" !== e && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t)
    }
}, , , , , function(t, e, i) {
    "use strict";
    (function(t) {
        function r(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }
        e.__esModule = !0, e.loader = e.prepare = e.particles = e.mesh = e.loaders = e.interaction = e.filters = e.extras = e.extract = e.accessibility = void 0;
        var n = i(198);
        Object.keys(n).forEach(function(t) {
            "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                enumerable: !0,
                get: function() {
                    return n[t]
                }
            })
        });
        var o = i(1);
        Object.keys(o).forEach(function(t) {
            "default" !== t && "__esModule" !== t && Object.defineProperty(e, t, {
                enumerable: !0,
                get: function() {
                    return o[t]
                }
            })
        });
        var s = i(163),
            a = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(s),
            h = i(120),
            u = r(h),
            l = i(165),
            c = r(l),
            f = i(85),
            d = r(f),
            p = i(179),
            _ = r(p),
            v = i(182),
            m = r(v),
            g = i(183),
            y = r(g),
            x = i(188),
            b = r(x),
            T = i(191),
            w = r(T),
            E = i(201),
            S = r(E);
        o.utils.mixins.performMixins();
        var P = y.shared || null;
        e.accessibility = u, e.extract = c, e.extras = d, e.filters = _, e.interaction = m, e.loaders = y, e.mesh = b, e.particles = w, e.prepare = S, e.loader = P, "function" == typeof a.default && (0, a.default)(e), t.PIXI = e
    }).call(e, i(8))
}, , , , , function(t, e, i) {
    "use strict";

    function r(t) {
        if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
    }
    var n = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        s = Object.prototype.propertyIsEnumerable;
    t.exports = function() {
        try {
            if (!Object.assign) return !1;
            var t = new String("abc");
            if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
            for (var e = {}, i = 0; i < 10; i++) e["_" + String.fromCharCode(i)] = i;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                    return e[t]
                }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                r[t] = t
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (t) {
            return !1
        }
    }() ? Object.assign : function(t, e) {
        for (var i, a, h = r(t), u = 1; u < arguments.length; u++) {
            i = Object(arguments[u]);
            for (var l in i) o.call(i, l) && (h[l] = i[l]);
            if (n) {
                a = n(i);
                for (var c = 0; c < a.length; c++) s.call(i, a[c]) && (h[a[c]] = i[a[c]])
            }
        }
        return h
    }
}, function(t, e) {
    var i = new ArrayBuffer(0),
        r = function(t, e, r, n) {
            this.gl = t, this.buffer = t.createBuffer(), this.type = e || t.ARRAY_BUFFER, this.drawType = n || t.STATIC_DRAW, this.data = i, r && this.upload(r), this._updateID = 0
        };
    r.prototype.upload = function(t, e, i) {
        i || this.bind();
        var r = this.gl;
        t = t || this.data, e = e || 0, this.data.byteLength >= t.byteLength ? r.bufferSubData(this.type, e, t) : r.bufferData(this.type, t, this.drawType), this.data = t
    }, r.prototype.bind = function() {
        this.gl.bindBuffer(this.type, this.buffer)
    }, r.createVertexBuffer = function(t, e, i) {
        return new r(t, t.ARRAY_BUFFER, e, i)
    }, r.createIndexBuffer = function(t, e, i) {
        return new r(t, t.ELEMENT_ARRAY_BUFFER, e, i)
    }, r.create = function(t, e, i, n) {
        return new r(t, e, i, n)
    }, r.prototype.destroy = function() {
        this.gl.deleteBuffer(this.buffer)
    }, t.exports = r
}, function(t, e, i) {
    var r = i(54),
        n = function(t, e, i) {
            this.gl = t, this.framebuffer = t.createFramebuffer(), this.stencil = null, this.texture = null, this.width = e || 100, this.height = i || 100
        };
    n.prototype.enableTexture = function(t) {
        var e = this.gl;
        this.texture = t || new r(e), this.texture.bind(), this.bind(), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.texture.texture, 0)
    }, n.prototype.enableStencil = function() {
        if (!this.stencil) {
            var t = this.gl;
            this.stencil = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, this.stencil), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, this.stencil), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, this.width, this.height)
        }
    }, n.prototype.clear = function(t, e, i, r) {
        this.bind();
        var n = this.gl;
        n.clearColor(t, e, i, r), n.clear(n.COLOR_BUFFER_BIT | n.DEPTH_BUFFER_BIT)
    }, n.prototype.bind = function() {
        var t = this.gl;
        t.bindFramebuffer(t.FRAMEBUFFER, this.framebuffer)
    }, n.prototype.unbind = function() {
        var t = this.gl;
        t.bindFramebuffer(t.FRAMEBUFFER, null)
    }, n.prototype.resize = function(t, e) {
        var i = this.gl;
        this.width = t, this.height = e, this.texture && this.texture.uploadData(null, t, e), this.stencil && (i.bindRenderbuffer(i.RENDERBUFFER, this.stencil), i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, t, e))
    }, n.prototype.destroy = function() {
        var t = this.gl;
        this.texture && this.texture.destroy(), t.deleteFramebuffer(this.framebuffer), this.gl = null, this.stencil = null, this.texture = null
    }, n.createRGBA = function(t, e, i, o) {
        var s = r.fromData(t, null, e, i);
        s.enableNearestScaling(), s.enableWrapClamp();
        var a = new n(t, e, i);
        return a.enableTexture(s), a.unbind(), a
    }, n.createFloat32 = function(t, e, i, o) {
        var s = new r.fromData(t, o, e, i);
        s.enableNearestScaling(), s.enableWrapClamp();
        var a = new n(t, e, i);
        return a.enableTexture(s), a.unbind(), a
    }, t.exports = n
}, function(t, e, i) {
    var r = i(56),
        n = i(58),
        o = i(59),
        s = i(62),
        a = i(60),
        h = function(t, e, i, h, u) {
            this.gl = t, h && (e = s(e, h), i = s(i, h)), this.program = r(t, e, i, u), this.attributes = n(t, this.program), this.uniformData = o(t, this.program), this.uniforms = a(t, this.uniformData)
        };
    h.prototype.bind = function() {
        return this.gl.useProgram(this.program), this
    }, h.prototype.destroy = function() {
        this.attributes = null, this.uniformData = null, this.uniforms = null, this.gl.deleteProgram(this.program)
    }, t.exports = h
}, function(t, e, i) {
    function r(t, e) {
        if (this.nativeVaoExtension = null, r.FORCE_NATIVE || (this.nativeVaoExtension = t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object")), this.nativeState = e, this.nativeVaoExtension) {
            this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();
            var i = t.getParameter(t.MAX_VERTEX_ATTRIBS);
            this.nativeState = {
                tempAttribState: new Array(i),
                attribState: new Array(i)
            }
        }
        this.gl = t, this.attributes = [], this.indexBuffer = null, this.dirty = !1
    }
    var n = i(55);
    r.prototype.constructor = r, t.exports = r, r.FORCE_NATIVE = !1, r.prototype.bind = function() {
        if (this.nativeVao) {
            if (this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.dirty) return this.dirty = !1, this.activate(), this;
            this.indexBuffer && this.indexBuffer.bind()
        } else this.activate();
        return this
    }, r.prototype.unbind = function() {
        return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(null), this
    }, r.prototype.activate = function() {
        for (var t = this.gl, e = null, i = 0; i < this.attributes.length; i++) {
            var r = this.attributes[i];
            e !== r.buffer && (r.buffer.bind(), e = r.buffer), t.vertexAttribPointer(r.attribute.location, r.attribute.size, r.type || t.FLOAT, r.normalized || !1, r.stride || 0, r.start || 0)
        }
        return n(t, this.attributes, this.nativeState), this.indexBuffer && this.indexBuffer.bind(), this
    }, r.prototype.addAttribute = function(t, e, i, r, n, o) {
        return this.attributes.push({
            buffer: t,
            attribute: e,
            location: e.location,
            type: i || this.gl.FLOAT,
            normalized: r || !1,
            stride: n || 0,
            start: o || 0
        }), this.dirty = !0, this
    }, r.prototype.addIndex = function(t) {
        return this.indexBuffer = t, this.dirty = !0, this
    }, r.prototype.clear = function() {
        return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.attributes.length = 0, this.indexBuffer = null, this
    }, r.prototype.draw = function(t, e, i) {
        var r = this.gl;
        return this.indexBuffer ? r.drawElements(t, e || this.indexBuffer.data.length, r.UNSIGNED_SHORT, 2 * (i || 0)) : r.drawArrays(t, i, e || this.getSize()), this
    }, r.prototype.destroy = function() {
        this.gl = null, this.indexBuffer = null, this.attributes = null, this.nativeState = null, this.nativeVao && this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao), this.nativeVaoExtension = null, this.nativeVao = null
    }, r.prototype.getSize = function() {
        var t = this.attributes[0];
        return t.buffer.data.length / (t.stride / 4 || t.attribute.size)
    }
}, function(t, e) {
    var i = function(t, e) {
        var i = t.getContext("webgl", e) || t.getContext("experimental-webgl", e);
        if (!i) throw new Error("This browser does not support webGL. Try using the canvas renderer");
        return i
    };
    t.exports = i
}, function(t, e, i) {
    t.exports = {
        compileProgram: i(56),
        defaultValue: i(57),
        extractAttributes: i(58),
        extractUniforms: i(59),
        generateUniformAccessObject: i(60),
        setPrecision: i(62),
        mapSize: i(61),
        mapType: i(33)
    }
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var o = i(1),
        s = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(o),
        a = i(32),
        h = r(a),
        u = i(63),
        l = r(u);
    s.utils.mixins.delayMixin(s.DisplayObject.prototype, l.default);
    var c = 100,
        f = 0,
        d = 0,
        p = 2,
        _ = function() {
            function t(e) {
                n(this, t), !h.default.tablet && !h.default.phone || navigator.isCocoonJS || this.createTouchHook();
                var i = document.createElement("div");
                i.style.width = c + "px", i.style.height = c + "px", i.style.position = "absolute", i.style.top = f + "px", i.style.left = d + "px", i.style.zIndex = p, this.div = i, this.pool = [], this.renderId = 0, this.debug = !1, this.renderer = e, this.children = [], this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this.isActive = !1, this.isMobileAccessabillity = !1, window.addEventListener("keydown", this._onKeyDown, !1)
            }
            return t.prototype.createTouchHook = function() {
                var t = this,
                    e = document.createElement("button");
                e.style.width = "1px", e.style.height = "1px", e.style.position = "absolute", e.style.top = "-1000px", e.style.left = "-1000px", e.style.zIndex = 2, e.style.backgroundColor = "#FF0000", e.title = "HOOK DIV", e.addEventListener("focus", function() {
                    t.isMobileAccessabillity = !0, t.activate(), document.body.removeChild(e)
                }), document.body.appendChild(e)
            }, t.prototype.activate = function() {
                this.isActive || (this.isActive = !0, window.document.addEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), this.renderer.view.parentNode && this.renderer.view.parentNode.appendChild(this.div))
            }, t.prototype.deactivate = function() {
                this.isActive && !this.isMobileAccessabillity && (this.isActive = !1, window.document.removeEventListener("mousemove", this._onMouseMove, !0), window.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), this.div.parentNode && this.div.parentNode.removeChild(this.div))
            }, t.prototype.updateAccessibleObjects = function(t) {
                if (t.visible) {
                    t.accessible && t.interactive && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId);
                    for (var e = t.children, i = 0; i < e.length; i++) this.updateAccessibleObjects(e[i])
                }
            }, t.prototype.update = function() {
                if (this.renderer.renderingToScreen) {
                    this.updateAccessibleObjects(this.renderer._lastObjectRendered);
                    var t = this.renderer.view.getBoundingClientRect(),
                        e = t.width / this.renderer.width,
                        i = t.height / this.renderer.height,
                        r = this.div;
                    r.style.left = t.left + "px", r.style.top = t.top + "px", r.style.width = this.renderer.width + "px", r.style.height = this.renderer.height + "px";
                    for (var n = 0; n < this.children.length; n++) {
                        var o = this.children[n];
                        if (o.renderId !== this.renderId) o._accessibleActive = !1, s.utils.removeItems(this.children, n, 1), this.div.removeChild(o._accessibleDiv), this.pool.push(o._accessibleDiv), o._accessibleDiv = null, n--, 0 === this.children.length && this.deactivate();
                        else {
                            r = o._accessibleDiv;
                            var a = o.hitArea,
                                h = o.worldTransform;
                            o.hitArea ? (r.style.left = (h.tx + a.x * h.a) * e + "px", r.style.top = (h.ty + a.y * h.d) * i + "px", r.style.width = a.width * h.a * e + "px", r.style.height = a.height * h.d * i + "px") : (a = o.getBounds(), this.capHitArea(a), r.style.left = a.x * e + "px", r.style.top = a.y * i + "px", r.style.width = a.width * e + "px", r.style.height = a.height * i + "px", r.title !== o.accessibleTitle && null !== o.accessibleTitle && (r.title = o.accessibleTitle), r.getAttribute("aria-label") !== o.accessibleHint && null !== o.accessibleHint && r.setAttribute("aria-label", o.accessibleHint))
                        }
                    }
                    this.renderId++
                }
            }, t.prototype.capHitArea = function(t) {
                t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0), t.x + t.width > this.renderer.width && (t.width = this.renderer.width - t.x), t.y + t.height > this.renderer.height && (t.height = this.renderer.height - t.y)
            }, t.prototype.addChild = function(t) {
                var e = this.pool.pop();
                e || (e = document.createElement("button"), e.style.width = c + "px", e.style.height = c + "px", e.style.backgroundColor = this.debug ? "rgba(255,0,0,0.5)" : "transparent", e.style.position = "absolute", e.style.zIndex = p, e.style.borderStyle = "none", navigator.userAgent.toLowerCase().indexOf("chrome") > -1 ? e.setAttribute("aria-live", "off") : e.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? e.setAttribute("aria-relevant", "additions") : e.setAttribute("aria-relevant", "text"), e.addEventListener("click", this._onClick.bind(this)), e.addEventListener("focus", this._onFocus.bind(this)), e.addEventListener("focusout", this._onFocusOut.bind(this))), t.accessibleTitle && null !== t.accessibleTitle ? e.title = t.accessibleTitle : t.accessibleHint && null !== t.accessibleHint || (e.title = "displayObject " + t.tabIndex), t.accessibleHint && null !== t.accessibleHint && e.setAttribute("aria-label", t.accessibleHint), t._accessibleActive = !0, t._accessibleDiv = e, e.displayObject = t, this.children.push(t), this.div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex
            }, t.prototype._onClick = function(t) {
                var e = this.renderer.plugins.interaction;
                e.dispatchEvent(t.target.displayObject, "click", e.eventData)
            }, t.prototype._onFocus = function(t) {
                t.target.getAttribute("aria-live", "off") || t.target.setAttribute("aria-live", "assertive");
                var e = this.renderer.plugins.interaction;
                e.dispatchEvent(t.target.displayObject, "mouseover", e.eventData)
            }, t.prototype._onFocusOut = function(t) {
                t.target.getAttribute("aria-live", "off") || t.target.setAttribute("aria-live", "polite");
                var e = this.renderer.plugins.interaction;
                e.dispatchEvent(t.target.displayObject, "mouseout", e.eventData)
            }, t.prototype._onKeyDown = function(t) {
                9 === t.keyCode && this.activate()
            }, t.prototype._onMouseMove = function(t) {
                0 === t.movementX && 0 === t.movementY || this.deactivate()
            }, t.prototype.destroy = function() {
                this.div = null;
                for (var t = 0; t < this.children.length; t++) this.children[t].div = null;
                window.document.removeEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null
            }, t
        }();
    e.default = _, s.WebGLRenderer.registerPlugin("accessibility", _), s.CanvasRenderer.registerPlugin("accessibility", _)
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var n = i(63);
    Object.defineProperty(e, "accessibleTarget", {
        enumerable: !0,
        get: function() {
            return r(n).default
        }
    });
    var o = i(119);
    Object.defineProperty(e, "AccessibilityManager", {
        enumerable: !0,
        get: function() {
            return r(o).default
        }
    })
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = i(17),
        h = r(a),
        u = i(40),
        l = r(u),
        c = i(9),
        f = r(c),
        d = i(69),
        p = r(d),
        _ = i(39),
        v = r(_),
        m = i(4),
        g = i(2),
        y = i(0),
        x = i(34),
        b = r(x),
        T = i(123),
        w = r(T),
        E = i(18),
        S = r(E),
        P = void 0,
        O = new m.Matrix,
        M = new m.Point,
        C = new Float32Array(4),
        R = new Float32Array(4),
        A = function(t) {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                n(this, e);
                var r = o(this, t.call(this));
                return r.fillAlpha = 1, r.lineWidth = 0, r.nativeLines = i, r.lineColor = 0, r.lineAlignment = .5, r.graphicsData = [], r.tint = 16777215, r._prevTint = 16777215, r.blendMode = y.BLEND_MODES.NORMAL, r.currentPath = null, r._webGL = {}, r.isMask = !1, r.boundsPadding = 0, r._localBounds = new b.default, r.dirty = 0, r.fastRectDirty = -1, r.clearDirty = 0, r.boundsDirty = -1, r.cachedSpriteDirty = !1, r._spriteRect = null, r._fastRect = !1, r._prevRectTint = null, r._prevRectFillColor = null, r
            }
            return s(e, t), e.prototype.clone = function() {
                var t = new e;
                t.renderable = this.renderable, t.fillAlpha = this.fillAlpha, t.lineWidth = this.lineWidth, t.lineColor = this.lineColor, t.lineAlignment = this.lineAlignment, t.tint = this.tint, t.blendMode = this.blendMode, t.isMask = this.isMask, t.boundsPadding = this.boundsPadding, t.dirty = 0, t.cachedSpriteDirty = this.cachedSpriteDirty;
                for (var i = 0; i < this.graphicsData.length; ++i) t.graphicsData.push(this.graphicsData[i].clone());
                return t.currentPath = t.graphicsData[t.graphicsData.length - 1], t.updateLocalBounds(), t
            }, e.prototype._quadraticCurveLength = function(t, e, i, r, n, o) {
                var s = t - 2 * i + n,
                    a = e - 2 * r + o,
                    h = 2 * i - 2 * t,
                    u = 2 * r - 2 * e,
                    l = 4 * (s * s + a * a),
                    c = 4 * (s * h + a * u),
                    f = h * h + u * u,
                    d = 2 * Math.sqrt(l + c + f),
                    p = Math.sqrt(l),
                    _ = 2 * l * p,
                    v = 2 * Math.sqrt(f),
                    m = c / p;
                return (_ * d + p * c * (d - v) + (4 * f * l - c * c) * Math.log((2 * p + m + d) / (m + v))) / (4 * _)
            }, e.prototype._bezierCurveLength = function(t, e, i, r, n, o, s, a) {
                for (var h = 0, u = 0, l = 0, c = 0, f = 0, d = 0, p = 0, _ = 0, v = 0, m = 0, g = 0, y = t, x = e, b = 1; b <= 10; ++b) u = b / 10, l = u * u, c = l * u, f = 1 - u, d = f * f, p = d * f, _ = p * t + 3 * d * u * i + 3 * f * l * n + c * s, v = p * e + 3 * d * u * r + 3 * f * l * o + c * a, m = y - _, g = x - v, y = _, x = v, h += Math.sqrt(m * m + g * g);
                return h
            }, e.prototype._segmentsCount = function(t) {
                var i = Math.ceil(t / e.CURVES.maxLength);
                return i < e.CURVES.minSegments ? i = e.CURVES.minSegments : i > e.CURVES.maxSegments && (i = e.CURVES.maxSegments), i
            }, e.prototype.lineStyle = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
                if (this.lineWidth = t, this.lineColor = e, this.lineAlpha = i, this.lineAlignment = r, this.currentPath)
                    if (this.currentPath.shape.points.length) {
                        var n = new m.Polygon(this.currentPath.shape.points.slice(-2));
                        n.closed = !1, this.drawShape(n)
                    } else this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha, this.currentPath.lineAlignment = this.lineAlignment;
                return this
            }, e.prototype.moveTo = function(t, e) {
                var i = new m.Polygon([t, e]);
                return i.closed = !1, this.drawShape(i), this
            }, e.prototype.lineTo = function(t, e) {
                var i = this.currentPath.shape.points,
                    r = i[i.length - 2],
                    n = i[i.length - 1];
                return r === t && n === e || (i.push(t, e), this.dirty++), this
            }, e.prototype.quadraticCurveTo = function(t, i, r, n) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                var o = this.currentPath.shape.points,
                    s = 0,
                    a = 0;
                0 === o.length && this.moveTo(0, 0);
                for (var h = o[o.length - 2], u = o[o.length - 1], l = e.CURVES.adaptive ? this._segmentsCount(this._quadraticCurveLength(h, u, t, i, r, n)) : 20, c = 1; c <= l; ++c) {
                    var f = c / l;
                    s = h + (t - h) * f, a = u + (i - u) * f, o.push(s + (t + (r - t) * f - s) * f, a + (i + (n - i) * f - a) * f)
                }
                return this.dirty++, this
            }, e.prototype.bezierCurveTo = function(t, i, r, n, o, s) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                var a = this.currentPath.shape.points,
                    h = a[a.length - 2],
                    u = a[a.length - 1];
                a.length -= 2;
                var l = e.CURVES.adaptive ? this._segmentsCount(this._bezierCurveLength(h, u, t, i, r, n, o, s)) : 20;
                return (0, w.default)(h, u, t, i, r, n, o, s, l, a), this.dirty++, this
            }, e.prototype.arcTo = function(t, e, i, r, n) {
                this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(t, e) : this.moveTo(t, e);
                var o = this.currentPath.shape.points,
                    s = o[o.length - 2],
                    a = o[o.length - 1],
                    h = a - e,
                    u = s - t,
                    l = r - e,
                    c = i - t,
                    f = Math.abs(h * c - u * l);
                if (f < 1e-8 || 0 === n) o[o.length - 2] === t && o[o.length - 1] === e || o.push(t, e);
                else {
                    var d = h * h + u * u,
                        p = l * l + c * c,
                        _ = h * l + u * c,
                        v = n * Math.sqrt(d) / f,
                        m = n * Math.sqrt(p) / f,
                        g = v * _ / d,
                        y = m * _ / p,
                        x = v * c + m * u,
                        b = v * l + m * h,
                        T = u * (m + g),
                        w = h * (m + g),
                        E = c * (v + y),
                        S = l * (v + y),
                        P = Math.atan2(w - b, T - x),
                        O = Math.atan2(S - b, E - x);
                    this.arc(x + t, b + e, n, P, O, u * l > c * h)
                }
                return this.dirty++, this
            }, e.prototype.arc = function(t, i, r, n, o) {
                var s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                if (n === o) return this;
                !s && o <= n ? o += y.PI_2 : s && n <= o && (n += y.PI_2);
                var a = o - n,
                    h = e.CURVES.adaptive ? this._segmentsCount(Math.abs(a) * r) : 40 * Math.ceil(Math.abs(a) / y.PI_2);
                if (0 === a) return this;
                var u = t + Math.cos(n) * r,
                    l = i + Math.sin(n) * r,
                    c = this.currentPath ? this.currentPath.shape.points : null;
                if (c) {
                    var f = Math.abs(c[c.length - 2] - u),
                        d = Math.abs(c[c.length - 1] - l);
                    f < .001 && d < .001 || c.push(u, l)
                } else this.moveTo(u, l), c = this.currentPath.shape.points;
                for (var p = a / (2 * h), _ = 2 * p, v = Math.cos(p), m = Math.sin(p), g = h - 1, x = g % 1 / g, b = 0; b <= g; ++b) {
                    var T = b + x * b,
                        w = p + n + _ * T,
                        E = Math.cos(w),
                        S = -Math.sin(w);
                    c.push((v * E + m * S) * r + t, (v * -S + m * E) * r + i)
                }
                return this.dirty++, this
            }, e.prototype.beginFill = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return this.filling = !0, this.fillColor = t, this.fillAlpha = e, this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), this
            }, e.prototype.endFill = function() {
                return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
            }, e.prototype.drawRect = function(t, e, i, r) {
                return this.drawShape(new m.Rectangle(t, e, i, r)), this
            }, e.prototype.drawRoundedRect = function(t, e, i, r, n) {
                return this.drawShape(new m.RoundedRectangle(t, e, i, r, n)), this
            }, e.prototype.drawCircle = function(t, e, i) {
                return this.drawShape(new m.Circle(t, e, i)), this
            }, e.prototype.drawEllipse = function(t, e, i, r) {
                return this.drawShape(new m.Ellipse(t, e, i, r)), this
            }, e.prototype.drawPolygon = function(t) {
                var e = t,
                    i = !0;
                if (e instanceof m.Polygon && (i = e.closed, e = e.points), !Array.isArray(e)) {
                    e = new Array(arguments.length);
                    for (var r = 0; r < e.length; ++r) e[r] = arguments[r]
                }
                var n = new m.Polygon(e);
                return n.closed = i, this.drawShape(n), this
            }, e.prototype.drawStar = function(t, e, i, r, n) {
                var o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
                n = n || r / 2;
                for (var s = -1 * Math.PI / 2 + o, a = 2 * i, h = y.PI_2 / a, u = [], l = 0; l < a; l++) {
                    var c = l % 2 ? n : r,
                        f = l * h + s;
                    u.push(t + c * Math.cos(f), e + c * Math.sin(f))
                }
                return this.drawPolygon(u)
            }, e.prototype.clear = function() {
                return (this.lineWidth || this.filling || this.graphicsData.length > 0) && (this.lineWidth = 0, this.lineAlignment = .5, this.filling = !1, this.boundsDirty = -1, this.canvasTintDirty = -1, this.dirty++, this.clearDirty++, this.graphicsData.length = 0), this.currentPath = null, this._spriteRect = null, this
            }, e.prototype.isFastRect = function() {
                return 1 === this.graphicsData.length && this.graphicsData[0].shape.type === y.SHAPES.RECT && !this.graphicsData[0].lineWidth
            }, e.prototype._renderWebGL = function(t) {
                this.dirty !== this.fastRectDirty && (this.fastRectDirty = this.dirty, this._fastRect = this.isFastRect()), this._fastRect ? this._renderSpriteRect(t) : (t.setObjectRenderer(t.plugins.graphics), t.plugins.graphics.render(this))
            }, e.prototype._renderSpriteRect = function(t) {
                var e = this.graphicsData[0].shape;
                this._spriteRect || (this._spriteRect = new v.default(new f.default(f.default.WHITE)));
                var i = this._spriteRect,
                    r = this.graphicsData[0].fillColor;
                if (16777215 === this.tint) i.tint = r;
                else if (this.tint !== this._prevRectTint || r !== this._prevRectFillColor) {
                    var n = C,
                        o = R;
                    (0, g.hex2rgb)(r, n), (0, g.hex2rgb)(this.tint, o), n[0] *= o[0], n[1] *= o[1], n[2] *= o[2], i.tint = (0, g.rgb2hex)(n), this._prevRectTint = this.tint, this._prevRectFillColor = r
                }
                i.alpha = this.graphicsData[0].fillAlpha, i.worldAlpha = this.worldAlpha * i.alpha, i.blendMode = this.blendMode, i._texture._frame.width = e.width, i._texture._frame.height = e.height, i.transform.worldTransform = this.transform.worldTransform, i.anchor.set(-e.x / e.width, -e.y / e.height), i._onAnchorUpdate(), i._renderWebGL(t)
            }, e.prototype._renderCanvas = function(t) {
                !0 !== this.isMask && t.plugins.graphics.render(this)
            }, e.prototype._calculateBounds = function() {
                this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.updateLocalBounds(), this.cachedSpriteDirty = !0);
                var t = this._localBounds;
                this._bounds.addFrame(this.transform, t.minX, t.minY, t.maxX, t.maxY)
            }, e.prototype.containsPoint = function(t) {
                this.worldTransform.applyInverse(t, M);
                for (var e = this.graphicsData, i = 0; i < e.length; ++i) {
                    var r = e[i];
                    if (r.fill && (r.shape && r.shape.contains(M.x, M.y))) {
                        if (r.holes)
                            for (var n = 0; n < r.holes.length; n++) {
                                var o = r.holes[n];
                                if (o.contains(M.x, M.y)) return !1
                            }
                        return !0
                    }
                }
                return !1
            }, e.prototype.updateLocalBounds = function() {
                var t = 1 / 0,
                    e = -1 / 0,
                    i = 1 / 0,
                    r = -1 / 0;
                if (this.graphicsData.length)
                    for (var n = 0, o = 0, s = 0, a = 0, h = 0, u = 0; u < this.graphicsData.length; u++) {
                        var l = this.graphicsData[u],
                            c = l.type,
                            f = l.lineWidth,
                            d = l.lineAlignment,
                            p = f * d;
                        if (n = l.shape, c === y.SHAPES.RECT || c === y.SHAPES.RREC) o = n.x - p, s = n.y - p, a = n.width + 2 * p, h = n.height + 2 * p, t = o < t ? o : t, e = o + a > e ? o + a : e, i = s < i ? s : i, r = s + h > r ? s + h : r;
                        else if (c === y.SHAPES.CIRC) o = n.x, s = n.y, a = n.radius + p, h = n.radius + p, t = o - a < t ? o - a : t, e = o + a > e ? o + a : e, i = s - h < i ? s - h : i, r = s + h > r ? s + h : r;
                        else if (c === y.SHAPES.ELIP) o = n.x, s = n.y, a = n.width + p, h = n.height + p, t = o - a < t ? o - a : t, e = o + a > e ? o + a : e, i = s - h < i ? s - h : i, r = s + h > r ? s + h : r;
                        else
                            for (var _ = n.points, v = 0, m = 0, g = 0, x = 0, b = 0, T = 0, w = 0, E = 0, S = 0; S + 2 < _.length; S += 2) o = _[S], s = _[S + 1], v = _[S + 2], m = _[S + 3], g = Math.abs(v - o), x = Math.abs(m - s), h = 2 * p, (a = Math.sqrt(g * g + x * x)) < 1e-9 || (b = (h / a * x + g) / 2, T = (h / a * g + x) / 2, w = (v + o) / 2, E = (m + s) / 2, t = w - b < t ? w - b : t, e = w + b > e ? w + b : e, i = E - T < i ? E - T : i, r = E + T > r ? E + T : r)
                    } else t = 0, e = 0, i = 0, r = 0;
                var P = this.boundsPadding;
                this._localBounds.minX = t - P, this._localBounds.maxX = e + P, this._localBounds.minY = i - P, this._localBounds.maxY = r + P
            }, e.prototype.drawShape = function(t) {
                this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(), this.currentPath = null;
                var e = new p.default(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, this.nativeLines, t, this.lineAlignment);
                return this.graphicsData.push(e), e.type === y.SHAPES.POLY && (e.shape.closed = e.shape.closed, this.currentPath = e), this.dirty++, e
            }, e.prototype.generateCanvasTexture = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    i = this.getLocalBounds(),
                    r = l.default.create(i.width, i.height, t, e);
                P || (P = new S.default), this.transform.updateLocalTransform(), this.transform.localTransform.copy(O), O.invert(), O.tx -= i.x, O.ty -= i.y, P.render(this, r, !0, O);
                var n = f.default.fromCanvas(r.baseTexture._canvasRenderTarget.canvas, t, "graphics");
                return n.baseTexture.resolution = e, n.baseTexture.update(), n
            }, e.prototype.closePath = function() {
                var t = this.currentPath;
                return t && t.shape && t.shape.close(), this
            }, e.prototype.addHole = function() {
                var t = this.graphicsData.pop();
                return this.currentPath = this.graphicsData[this.graphicsData.length - 1], this.currentPath.addHole(t.shape), this.currentPath = null, this
            }, e.prototype.destroy = function(e) {
                t.prototype.destroy.call(this, e);
                for (var i = 0; i < this.graphicsData.length; ++i) this.graphicsData[i].destroy();
                for (var r in this._webGL)
                    for (var n = 0; n < this._webGL[r].data.length; ++n) this._webGL[r].data[n].destroy();
                this._spriteRect && this._spriteRect.destroy(), this.graphicsData = null, this.currentPath = null, this._webGL = null, this._localBounds = null
            }, e
        }(h.default);
    e.default = A, A._SPRITE_TEXTURE = null, A.CURVES = {
        adaptive: !1,
        maxLength: 10,
        minSegments: 8,
        maxSegments: 2048
    }
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = i(18),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n),
        s = i(0),
        a = function() {
            function t(e) {
                r(this, t), this.renderer = e
            }
            return t.prototype.render = function(t) {
                var e = this.renderer,
                    i = e.context,
                    r = t.worldAlpha,
                    n = t.transform.worldTransform,
                    o = e.resolution;
                i.setTransform(n.a * o, n.b * o, n.c * o, n.d * o, n.tx * o, n.ty * o), t.canvasTintDirty === t.dirty && t._prevTint === t.tint || this.updateGraphicsTint(t), e.setBlendMode(t.blendMode);
                for (var a = 0; a < t.graphicsData.length; a++) {
                    var h = t.graphicsData[a],
                        u = h.shape,
                        l = h._fillTint,
                        c = h._lineTint;
                    if (i.lineWidth = h.lineWidth, h.type === s.SHAPES.POLY) {
                        i.beginPath();
                        var f = u.points,
                            d = h.holes,
                            p = void 0,
                            _ = void 0;
                        i.moveTo(f[0], f[1]);
                        for (var v = 2; v < f.length; v += 2) i.lineTo(f[v], f[v + 1]);
                        if (u.closed && i.closePath(), d.length > 0) {
                            p = 0;
                            for (var m = 0; m < f.length; m += 2) p += f[m] * f[m + 3] - f[m + 1] * f[m + 2];
                            for (var g = 0; g < d.length; g++) {
                                f = d[g].points, _ = 0;
                                for (var y = 0; y < f.length; y += 2) _ += f[y] * f[y + 3] - f[y + 1] * f[y + 2];
                                if (i.moveTo(f[0], f[1]), _ * p < 0)
                                    for (var x = 2; x < f.length; x += 2) i.lineTo(f[x], f[x + 1]);
                                else
                                    for (var b = f.length - 2; b >= 2; b -= 2) i.lineTo(f[b], f[b + 1]);
                                d[g].closed && i.closePath()
                            }
                        }
                        h.fill && (i.globalAlpha = h.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), i.fill()), h.lineWidth && (i.globalAlpha = h.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.stroke())
                    } else if (h.type === s.SHAPES.RECT)(h.fillColor || 0 === h.fillColor) && (i.globalAlpha = h.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), i.fillRect(u.x, u.y, u.width, u.height)), h.lineWidth && (i.globalAlpha = h.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.strokeRect(u.x, u.y, u.width, u.height));
                    else if (h.type === s.SHAPES.CIRC) i.beginPath(), i.arc(u.x, u.y, u.radius, 0, 2 * Math.PI), i.closePath(), h.fill && (i.globalAlpha = h.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), i.fill()), h.lineWidth && (i.globalAlpha = h.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.stroke());
                    else if (h.type === s.SHAPES.ELIP) {
                        var T = 2 * u.width,
                            w = 2 * u.height,
                            E = u.x - T / 2,
                            S = u.y - w / 2;
                        i.beginPath();
                        var P = T / 2 * .5522848,
                            O = w / 2 * .5522848,
                            M = E + T,
                            C = S + w,
                            R = E + T / 2,
                            A = S + w / 2;
                        i.moveTo(E, A), i.bezierCurveTo(E, A - O, R - P, S, R, S), i.bezierCurveTo(R + P, S, M, A - O, M, A), i.bezierCurveTo(M, A + O, R + P, C, R, C), i.bezierCurveTo(R - P, C, E, A + O, E, A), i.closePath(), h.fill && (i.globalAlpha = h.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), i.fill()), h.lineWidth && (i.globalAlpha = h.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.stroke())
                    } else if (h.type === s.SHAPES.RREC) {
                        var I = u.x,
                            D = u.y,
                            L = u.width,
                            k = u.height,
                            N = u.radius,
                            F = Math.min(L, k) / 2 | 0;
                        N = N > F ? F : N, i.beginPath(), i.moveTo(I, D + N), i.lineTo(I, D + k - N), i.quadraticCurveTo(I, D + k, I + N, D + k), i.lineTo(I + L - N, D + k), i.quadraticCurveTo(I + L, D + k, I + L, D + k - N), i.lineTo(I + L, D + N), i.quadraticCurveTo(I + L, D, I + L - N, D), i.lineTo(I + N, D), i.quadraticCurveTo(I, D, I, D + N), i.closePath(), (h.fillColor || 0 === h.fillColor) && (i.globalAlpha = h.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), i.fill()), h.lineWidth && (i.globalAlpha = h.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | c).toString(16)).substr(-6), i.stroke())
                    }
                }
            }, t.prototype.updateGraphicsTint = function(t) {
                t._prevTint = t.tint, t.canvasTintDirty = t.dirty;
                for (var e = (t.tint >> 16 & 255) / 255, i = (t.tint >> 8 & 255) / 255, r = (255 & t.tint) / 255, n = 0; n < t.graphicsData.length; ++n) {
                    var o = t.graphicsData[n],
                        s = 0 | o.fillColor,
                        a = 0 | o.lineColor;
                    o._fillTint = ((s >> 16 & 255) / 255 * e * 255 << 16) + ((s >> 8 & 255) / 255 * i * 255 << 8) + (255 & s) / 255 * r * 255, o._lineTint = ((a >> 16 & 255) / 255 * e * 255 << 16) + ((a >> 8 & 255) / 255 * i * 255 << 8) + (255 & a) / 255 * r * 255
                }
            }, t.prototype.renderPolygon = function(t, e, i) {
                i.moveTo(t[0], t[1]);
                for (var r = 1; r < t.length / 2; ++r) i.lineTo(t[2 * r], t[2 * r + 1]);
                e && i.closePath()
            }, t.prototype.destroy = function() {
                this.renderer = null
            }, t
        }();
    e.default = a, o.default.registerPlugin("graphics", a)
}, function(t, e, i) {
    "use strict";

    function r(t, e, i, r, n, o, s, a, h) {
        var u = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : [],
            l = 0,
            c = 0,
            f = 0,
            d = 0,
            p = 0;
        u.push(t, e);
        for (var _ = 1, v = 0; _ <= h; ++_) v = _ / h, l = 1 - v, c = l * l, f = c * l, d = v * v, p = d * v, u.push(f * t + 3 * c * v * i + 3 * l * d * n + p * s, f * e + 3 * c * v * r + 3 * l * d * o + p * a);
        return u
    }
    e.__esModule = !0, e.default = r
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = i(2),
        h = i(0),
        u = i(26),
        l = r(u),
        c = i(25),
        f = r(c),
        d = i(125),
        p = r(d),
        _ = i(126),
        v = r(_),
        m = i(128),
        g = r(m),
        y = i(129),
        x = r(y),
        b = i(130),
        T = r(b),
        w = i(127),
        E = r(w),
        S = function(t) {
            function e(i) {
                n(this, e);
                var r = o(this, t.call(this, i));
                return r.graphicsDataPool = [], r.primitiveShader = null, r.gl = i.gl, r.CONTEXT_UID = 0, r
            }
            return s(e, t), e.prototype.onContextChange = function() {
                this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.primitiveShader = new v.default(this.gl)
            }, e.prototype.destroy = function() {
                l.default.prototype.destroy.call(this);
                for (var t = 0; t < this.graphicsDataPool.length; ++t) this.graphicsDataPool[t].destroy();
                this.graphicsDataPool = null
            }, e.prototype.render = function(t) {
                var e = this.renderer,
                    i = e.gl,
                    r = void 0,
                    n = t._webGL[this.CONTEXT_UID];
                n && t.dirty === n.dirty || (this.updateGraphics(t), n = t._webGL[this.CONTEXT_UID]);
                var o = this.primitiveShader;
                e.bindShader(o), e.state.setBlendMode(t.blendMode);
                for (var s = 0, h = n.data.length; s < h; s++) {
                    r = n.data[s];
                    var u = r.shader;
                    e.bindShader(u), u.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), u.uniforms.tint = (0, a.hex2rgb)(t.tint), u.uniforms.alpha = t.worldAlpha, e.bindVao(r.vao), r.nativeLines ? i.drawArrays(i.LINES, 0, r.points.length / 6) : r.vao.draw(i.TRIANGLE_STRIP, r.indices.length)
                }
            }, e.prototype.updateGraphics = function(t) {
                var e = this.renderer.gl,
                    i = t._webGL[this.CONTEXT_UID];
                if (i || (i = t._webGL[this.CONTEXT_UID] = {
                        lastIndex: 0,
                        data: [],
                        gl: e,
                        clearDirty: -1,
                        dirty: -1
                    }), i.dirty = t.dirty, t.clearDirty !== i.clearDirty) {
                    i.clearDirty = t.clearDirty;
                    for (var r = 0; r < i.data.length; r++) this.graphicsDataPool.push(i.data[r]);
                    i.data.length = 0, i.lastIndex = 0
                }
                for (var n = void 0, o = void 0, s = i.lastIndex; s < t.graphicsData.length; s++) {
                    var a = t.graphicsData[s];
                    n = this.getWebGLData(i, 0), a.nativeLines && a.lineWidth && (o = this.getWebGLData(i, 0, !0), i.lastIndex++), a.type === h.SHAPES.POLY && (0, g.default)(a, n, o), a.type === h.SHAPES.RECT ? (0, x.default)(a, n, o) : a.type === h.SHAPES.CIRC || a.type === h.SHAPES.ELIP ? (0, E.default)(a, n, o) : a.type === h.SHAPES.RREC && (0, T.default)(a, n, o), i.lastIndex++
                }
                this.renderer.bindVao(null);
                for (var u = 0; u < i.data.length; u++) n = i.data[u], n.dirty && n.upload()
            }, e.prototype.getWebGLData = function(t, e, i) {
                var r = t.data[t.data.length - 1];
                return (!r || r.nativeLines !== i || r.points.length > 32e4) && (r = this.graphicsDataPool.pop() || new p.default(this.renderer.gl, this.primitiveShader, this.renderer.state.attribsState), r.nativeLines = i, r.reset(e), t.data.push(r)), r.dirty = !0, r
            }, e
        }(l.default);
    e.default = S, f.default.registerPlugin("graphics", S)
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = i(6),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n),
        s = function() {
            function t(e, i, n) {
                r(this, t), this.gl = e, this.color = [0, 0, 0], this.points = [], this.indices = [], this.buffer = o.default.GLBuffer.createVertexBuffer(e), this.indexBuffer = o.default.GLBuffer.createIndexBuffer(e), this.dirty = !0, this.nativeLines = !1, this.glPoints = null, this.glIndices = null, this.shader = i, this.vao = new o.default.VertexArrayObject(e, n).addIndex(this.indexBuffer).addAttribute(this.buffer, i.attributes.aVertexPosition, e.FLOAT, !1, 24, 0).addAttribute(this.buffer, i.attributes.aColor, e.FLOAT, !1, 24, 8)
            }
            return t.prototype.reset = function() {
                this.points.length = 0, this.indices.length = 0
            }, t.prototype.upload = function() {
                this.glPoints = new Float32Array(this.points), this.buffer.upload(this.glPoints), this.glIndices = new Uint16Array(this.indices), this.indexBuffer.upload(this.glIndices), this.dirty = !1
            }, t.prototype.destroy = function() {
                this.color = null, this.points = null, this.indices = null, this.vao.destroy(), this.buffer.destroy(), this.indexBuffer.destroy(), this.gl = null, this.buffer = null, this.indexBuffer = null, this.glPoints = null, this.glIndices = null
            }, t
        }();
    e.default = s
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var s = i(16),
        a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(s),
        h = function(t) {
            function e(i) {
                return r(this, e), n(this, t.call(this, i, ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform float alpha;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"].join("\n"), ["varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join("\n")))
            }
            return o(e, t), e
        }(a.default);
    e.default = h
}, function(t, e, i) {
    "use strict";

    function r(t, e, i) {
        var r = t.shape,
            n = r.x,
            h = r.y,
            u = void 0,
            l = void 0;
        if (t.type === s.SHAPES.CIRC ? (u = r.radius, l = r.radius) : (u = r.width, l = r.height), 0 !== u && 0 !== l) {
            var c = Math.floor(30 * Math.sqrt(r.radius)) || Math.floor(15 * Math.sqrt(r.width + r.height)),
                f = 2 * Math.PI / c;
            if (t.fill) {
                var d = (0, a.hex2rgb)(t.fillColor),
                    p = t.fillAlpha,
                    _ = d[0] * p,
                    v = d[1] * p,
                    m = d[2] * p,
                    g = e.points,
                    y = e.indices,
                    x = g.length / 6;
                y.push(x);
                for (var b = 0; b < c + 1; b++) g.push(n, h, _, v, m, p), g.push(n + Math.sin(f * b) * u, h + Math.cos(f * b) * l, _, v, m, p), y.push(x++, x++);
                y.push(x - 1)
            }
            if (t.lineWidth) {
                var T = t.points;
                t.points = [];
                for (var w = 0; w < c; w++) t.points.push(n + Math.sin(f * -w) * u, h + Math.cos(f * -w) * l);
                t.points.push(t.points[0], t.points[1]), (0, o.default)(t, e, i), t.points = T
            }
        }
    }
    e.__esModule = !0, e.default = r;
    var n = i(24),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n),
        s = i(0),
        a = i(2)
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e, i) {
        t.points = t.shape.points.slice();
        var r = t.points;
        if (t.fill && r.length >= 6) {
            for (var n = [], o = t.holes, h = 0; h < o.length; h++) {
                var l = o[h];
                n.push(r.length / 2), r = r.concat(l.points)
            }
            var c = e.points,
                f = e.indices,
                d = r.length / 2,
                p = (0, a.hex2rgb)(t.fillColor),
                _ = t.fillAlpha,
                v = p[0] * _,
                m = p[1] * _,
                g = p[2] * _,
                y = (0, u.default)(r, n, 2);
            if (!y) return;
            for (var x = c.length / 6, b = 0; b < y.length; b += 3) f.push(y[b] + x), f.push(y[b] + x), f.push(y[b + 1] + x), f.push(y[b + 2] + x), f.push(y[b + 2] + x);
            for (var T = 0; T < d; T++) c.push(r[2 * T], r[2 * T + 1], v, m, g, _)
        }
        t.lineWidth > 0 && (0, s.default)(t, e, i)
    }
    e.__esModule = !0, e.default = n;
    var o = i(24),
        s = r(o),
        a = i(2),
        h = i(31),
        u = r(h)
}, function(t, e, i) {
    "use strict";

    function r(t, e, i) {
        var r = t.shape,
            n = r.x,
            a = r.y,
            h = r.width,
            u = r.height;
        if (t.fill) {
            var l = (0, s.hex2rgb)(t.fillColor),
                c = t.fillAlpha,
                f = l[0] * c,
                d = l[1] * c,
                p = l[2] * c,
                _ = e.points,
                v = e.indices,
                m = _.length / 6;
            _.push(n, a), _.push(f, d, p, c), _.push(n + h, a), _.push(f, d, p, c), _.push(n, a + u), _.push(f, d, p, c), _.push(n + h, a + u), _.push(f, d, p, c), v.push(m, m, m + 1, m + 2, m + 3, m + 3)
        }
        if (t.lineWidth) {
            var g = t.points;
            t.points = [n, a, n + h, a, n + h, a + u, n, a + u, n, a], (0, o.default)(t, e, i), t.points = g
        }
    }
    e.__esModule = !0, e.default = r;
    var n = i(24),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n),
        s = i(2)
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e, i) {
        var r = t.shape,
            n = r.x,
            o = r.y,
            a = r.width,
            u = r.height,
            f = r.radius,
            d = [];
        if (d.push(n + f, o), s(n + a - f, o, n + a, o, n + a, o + f, d), s(n + a, o + u - f, n + a, o + u, n + a - f, o + u, d), s(n + f, o + u, n, o + u, n, o + u - f, d), s(n, o + f, n, o, n + f + 1e-10, o, d), t.fill) {
            for (var p = (0, c.hex2rgb)(t.fillColor), _ = t.fillAlpha, v = p[0] * _, m = p[1] * _, g = p[2] * _, y = e.points, x = e.indices, b = y.length / 6, T = (0, h.default)(d, null, 2), w = 0, E = T.length; w < E; w += 3) x.push(T[w] + b), x.push(T[w] + b), x.push(T[w + 1] + b), x.push(T[w + 2] + b), x.push(T[w + 2] + b);
            for (var S = 0, P = d.length; S < P; S++) y.push(d[S], d[++S], v, m, g, _)
        }
        if (t.lineWidth) {
            var O = t.points;
            t.points = d, (0, l.default)(t, e, i), t.points = O
        }
    }

    function o(t, e, i) {
        return t + (e - t) * i
    }

    function s(t, e, i, r, n, s) {
        for (var a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : [], h = a, u = 0, l = 0, c = 0, f = 0, d = 0, p = 0, _ = 0, v = 0; _ <= 20; ++_) v = _ / 20, u = o(t, i, v), l = o(e, r, v), c = o(i, n, v), f = o(r, s, v), d = o(u, c, v), p = o(l, f, v), h.push(d, p);
        return h
    }
    e.__esModule = !0, e.default = n;
    var a = i(31),
        h = r(a),
        u = i(24),
        l = r(u),
        c = i(2)
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = i(38),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n),
        s = i(0),
        a = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                r(this, t), this.x = e, this.y = i, this.radius = n, this.type = s.SHAPES.CIRC
            }
            return t.prototype.clone = function() {
                return new t(this.x, this.y, this.radius)
            }, t.prototype.contains = function(t, e) {
                if (this.radius <= 0) return !1;
                var i = this.radius * this.radius,
                    r = this.x - t,
                    n = this.y - e;
                return r *= r, n *= n, r + n <= i
            }, t.prototype.getBounds = function() {
                return new o.default(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
            }, t
        }();
    e.default = a
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = i(38),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n),
        s = i(0),
        a = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                r(this, t), this.x = e, this.y = i, this.width = n, this.height = o, this.type = s.SHAPES.ELIP
            }
            return t.prototype.clone = function() {
                return new t(this.x, this.y, this.width, this.height)
            }, t.prototype.contains = function(t, e) {
                if (this.width <= 0 || this.height <= 0) return !1;
                var i = (t - this.x) / this.width,
                    r = (e - this.y) / this.height;
                return i *= i, r *= r, i + r <= 1
            }, t.prototype.getBounds = function() {
                return new o.default(this.x - this.width, this.y - this.height, this.width, this.height)
            }, t
        }();
    e.default = a
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = i(37),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n),
        s = i(0),
        a = function() {
            function t() {
                for (var e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                if (r(this, t), Array.isArray(i[0]) && (i = i[0]), i[0] instanceof o.default) {
                    for (var a = [], h = 0, u = i.length; h < u; h++) a.push(i[h].x, i[h].y);
                    i = a
                }
                this.closed = !0, this.points = i, this.type = s.SHAPES.POLY
            }
            return t.prototype.clone = function() {
                return new t(this.points.slice())
            }, t.prototype.close = function() {
                var t = this.points;
                t[0] === t[t.length - 2] && t[1] === t[t.length - 1] || t.push(t[0], t[1])
            }, t.prototype.contains = function(t, e) {
                for (var i = !1, r = this.points.length / 2, n = 0, o = r - 1; n < r; o = n++) {
                    var s = this.points[2 * n],
                        a = this.points[2 * n + 1],
                        h = this.points[2 * o],
                        u = this.points[2 * o + 1];
                    a > e != u > e && t < (e - a) / (u - a) * (h - s) + s && (i = !i)
                }
                return i
            }, t
        }();
    e.default = a
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = i(0),
        o = function() {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                    a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 20;
                r(this, t), this.x = e, this.y = i, this.width = o, this.height = s, this.radius = a, this.type = n.SHAPES.RREC
            }
            return t.prototype.clone = function() {
                return new t(this.x, this.y, this.width, this.height, this.radius)
            }, t.prototype.contains = function(t, e) {
                if (this.width <= 0 || this.height <= 0) return !1;
                if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
                    if (e >= this.y + this.radius && e <= this.y + this.height - this.radius || t >= this.x + this.radius && t <= this.x + this.width - this.radius) return !0;
                    var i = t - (this.x + this.radius),
                        r = e - (this.y + this.radius),
                        n = this.radius * this.radius;
                    if (i * i + r * r <= n) return !0;
                    if ((i = t - (this.x + this.width - this.radius)) * i + r * r <= n) return !0;
                    if (r = e - (this.y + this.height - this.radius), i * i + r * r <= n) return !0;
                    if ((i = t - (this.x + this.radius)) * i + r * r <= n) return !0
                }
                return !1
            }, t
        }();
    e.default = o
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = i(0),
        o = function() {
            function t(e) {
                r(this, t), this.renderer = e
            }
            return t.prototype.pushMask = function(t) {
                var e = this.renderer;
                e.context.save();
                var i = t.alpha,
                    r = t.transform.worldTransform,
                    n = e.resolution;
                e.context.setTransform(r.a * n, r.b * n, r.c * n, r.d * n, r.tx * n, r.ty * n), t._texture || (this.renderGraphicsShape(t), e.context.clip()), t.worldAlpha = i
            }, t.prototype.renderGraphicsShape = function(t) {
                var e = this.renderer.context,
                    i = t.graphicsData.length;
                if (0 !== i) {
                    e.beginPath();
                    for (var r = 0; r < i; r++) {
                        var o = t.graphicsData[r],
                            s = o.shape;
                        if (o.type === n.SHAPES.POLY) {
                            var a = s.points,
                                h = o.holes,
                                u = void 0,
                                l = void 0;
                            e.moveTo(a[0], a[1]);
                            for (var c = 2; c < a.length; c += 2) e.lineTo(a[c], a[c + 1]);
                            if (a[0] === a[a.length - 2] && a[1] === a[a.length - 1] && e.closePath(), h.length > 0) {
                                u = 0;
                                for (var f = 0; f < a.length; f += 2) u += a[f] * a[f + 3] - a[f + 1] * a[f + 2];
                                for (var d = 0; d < h.length; d++) {
                                    a = h[d].points, l = 0;
                                    for (var p = 0; p < a.length; p += 2) l += a[p] * a[p + 3] - a[p + 1] * a[p + 2];
                                    if (e.moveTo(a[0], a[1]), l * u < 0)
                                        for (var _ = 2; _ < a.length; _ += 2) e.lineTo(a[_], a[_ + 1]);
                                    else
                                        for (var v = a.length - 2; v >= 2; v -= 2) e.lineTo(a[v], a[v + 1])
                                }
                            }
                        } else if (o.type === n.SHAPES.RECT) e.rect(s.x, s.y, s.width, s.height), e.closePath();
                        else if (o.type === n.SHAPES.CIRC) e.arc(s.x, s.y, s.radius, 0, 2 * Math.PI), e.closePath();
                        else if (o.type === n.SHAPES.ELIP) {
                            var m = 2 * s.width,
                                g = 2 * s.height,
                                y = s.x - m / 2,
                                x = s.y - g / 2,
                                b = m / 2 * .5522848,
                                T = g / 2 * .5522848,
                                w = y + m,
                                E = x + g,
                                S = y + m / 2,
                                P = x + g / 2;
                            e.moveTo(y, P), e.bezierCurveTo(y, P - T, S - b, x, S, x), e.bezierCurveTo(S + b, x, w, P - T, w, P), e.bezierCurveTo(w, P + T, S + b, E, S, E), e.bezierCurveTo(S - b, E, y, P + T, y, P), e.closePath()
                        } else if (o.type === n.SHAPES.RREC) {
                            var O = s.x,
                                M = s.y,
                                C = s.width,
                                R = s.height,
                                A = s.radius,
                                I = Math.min(C, R) / 2 | 0;
                            A = A > I ? I : A, e.moveTo(O, M + A), e.lineTo(O, M + R - A), e.quadraticCurveTo(O, M + R, O + A, M + R), e.lineTo(O + C - A, M + R), e.quadraticCurveTo(O + C, M + R, O + C, M + R - A), e.lineTo(O + C, M + A), e.quadraticCurveTo(O + C, M, O + C - A, M), e.lineTo(O + A, M), e.quadraticCurveTo(O, M, O, M + A), e.closePath()
                        }
                    }
                }
            }, t.prototype.popMask = function(t) {
                t.context.restore(), t.invalidateBlendMode()
            }, t.prototype.destroy = function() {}, t
        }();
    e.default = o
}, function(t, e, i) {
    "use strict";

    function r() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return (0, s.default)() ? (t[n.BLEND_MODES.NORMAL] = "source-over", t[n.BLEND_MODES.ADD] = "lighter", t[n.BLEND_MODES.MULTIPLY] = "multiply", t[n.BLEND_MODES.SCREEN] = "screen", t[n.BLEND_MODES.OVERLAY] = "overlay", t[n.BLEND_MODES.DARKEN] = "darken", t[n.BLEND_MODES.LIGHTEN] = "lighten", t[n.BLEND_MODES.COLOR_DODGE] = "color-dodge", t[n.BLEND_MODES.COLOR_BURN] = "color-burn", t[n.BLEND_MODES.HARD_LIGHT] = "hard-light", t[n.BLEND_MODES.SOFT_LIGHT] = "soft-light", t[n.BLEND_MODES.DIFFERENCE] = "difference", t[n.BLEND_MODES.EXCLUSION] = "exclusion", t[n.BLEND_MODES.HUE] = "hue", t[n.BLEND_MODES.SATURATION] = "saturate", t[n.BLEND_MODES.COLOR] = "color", t[n.BLEND_MODES.LUMINOSITY] = "luminosity") : (t[n.BLEND_MODES.NORMAL] = "source-over", t[n.BLEND_MODES.ADD] = "lighter", t[n.BLEND_MODES.MULTIPLY] = "source-over", t[n.BLEND_MODES.SCREEN] = "source-over", t[n.BLEND_MODES.OVERLAY] = "source-over", t[n.BLEND_MODES.DARKEN] = "source-over", t[n.BLEND_MODES.LIGHTEN] = "source-over", t[n.BLEND_MODES.COLOR_DODGE] = "source-over", t[n.BLEND_MODES.COLOR_BURN] = "source-over", t[n.BLEND_MODES.HARD_LIGHT] = "source-over", t[n.BLEND_MODES.SOFT_LIGHT] = "source-over", t[n.BLEND_MODES.DIFFERENCE] = "source-over", t[n.BLEND_MODES.EXCLUSION] = "source-over", t[n.BLEND_MODES.HUE] = "source-over", t[n.BLEND_MODES.SATURATION] = "source-over", t[n.BLEND_MODES.COLOR] = "source-over", t[n.BLEND_MODES.LUMINOSITY] = "source-over"), t[n.BLEND_MODES.NORMAL_NPM] = t[n.BLEND_MODES.NORMAL], t[n.BLEND_MODES.ADD_NPM] = t[n.BLEND_MODES.ADD], t[n.BLEND_MODES.SCREEN_NPM] = t[n.BLEND_MODES.SCREEN], t
    }
    e.__esModule = !0, e.default = r;
    var n = i(0),
        o = i(74),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(o)
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = i(0),
        o = i(3),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(o),
        a = function() {
            function t(e) {
                r(this, t), this.renderer = e, this.count = 0, this.checkCount = 0, this.maxIdle = s.default.GC_MAX_IDLE, this.checkCountMax = s.default.GC_MAX_CHECK_COUNT, this.mode = s.default.GC_MODE
            }
            return t.prototype.update = function() {
                this.count++, this.mode !== n.GC_MODES.MANUAL && ++this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())
            }, t.prototype.run = function() {
                for (var t = this.renderer.textureManager, e = t._managedTextures, i = !1, r = 0; r < e.length; r++) {
                    var n = e[r];
                    !n._glRenderTargets && this.count - n.touched > this.maxIdle && (t.destroyTexture(n, !0), e[r] = null, i = !0)
                }
                if (i) {
                    for (var o = 0, s = 0; s < e.length; s++) null !== e[s] && (e[o++] = e[s]);
                    e.length = o
                }
            }, t.prototype.unload = function(t) {
                var e = this.renderer.textureManager;
                t._texture && t._texture._glRenderTargets && e.destroyTexture(t._texture, !0);
                for (var i = t.children.length - 1; i >= 0; i--) this.unload(t.children[i])
            }, t
        }();
    e.default = a
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = i(6),
        o = i(0),
        s = i(27),
        a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(s),
        h = i(2),
        u = function() {
            function t(e) {
                r(this, t), this.renderer = e, this.gl = e.gl, this._managedTextures = []
            }
            return t.prototype.bindTexture = function() {}, t.prototype.getTexture = function() {}, t.prototype.updateTexture = function(t, e) {
                var i = this.gl,
                    r = !!t._glRenderTargets;
                if (!t.hasLoaded) return null;
                var s = this.renderer.boundTextures;
                if (void 0 === e) {
                    e = 0;
                    for (var h = 0; h < s.length; ++h)
                        if (s[h] === t) {
                            e = h;
                            break
                        }
                }
                s[e] = t, i.activeTexture(i.TEXTURE0 + e);
                var u = t._glTextures[this.renderer.CONTEXT_UID];
                if (u) r ? t._glRenderTargets[this.renderer.CONTEXT_UID].resize(t.width, t.height) : u.upload(t.source);
                else {
                    if (r) {
                        var l = new a.default(this.gl, t.width, t.height, t.scaleMode, t.resolution);
                        l.resize(t.width, t.height), t._glRenderTargets[this.renderer.CONTEXT_UID] = l, u = l.texture, this.renderer._activeRenderTarget.root || this.renderer._activeRenderTarget.frameBuffer.bind()
                    } else u = new n.GLTexture(this.gl, null, null, null, null), u.bind(e), u.premultiplyAlpha = !0, u.upload(t.source);
                    t._glTextures[this.renderer.CONTEXT_UID] = u, t.on("update", this.updateTexture, this), t.on("dispose", this.destroyTexture, this), this._managedTextures.push(t), t.isPowerOfTwo ? (t.mipmap && u.enableMipmap(), t.wrapMode === o.WRAP_MODES.CLAMP ? u.enableWrapClamp() : t.wrapMode === o.WRAP_MODES.REPEAT ? u.enableWrapRepeat() : u.enableWrapMirrorRepeat()) : u.enableWrapClamp(), t.scaleMode === o.SCALE_MODES.NEAREST ? u.enableNearestScaling() : u.enableLinearScaling()
                }
                return u
            }, t.prototype.destroyTexture = function(t, e) {
                if (t = t.baseTexture || t, t.hasLoaded) {
                    var i = this.renderer,
                        r = i.CONTEXT_UID,
                        n = t._glTextures,
                        o = t._glRenderTargets;
                    if (n[r] && (i.unbindTexture(t), n[r].destroy(), t.off("update", this.updateTexture, this), t.off("dispose", this.destroyTexture, this), delete n[r], !e)) {
                        var s = this._managedTextures.indexOf(t); - 1 !== s && (0, h.removeItems)(this._managedTextures, s, 1)
                    }
                    o && o[r] && (i._activeRenderTarget === o[r] && i.bindRenderTarget(i.rootRenderTarget), o[r].destroy(), delete o[r])
                }
            }, t.prototype.removeAll = function() {
                for (var t = 0; t < this._managedTextures.length; ++t) {
                    var e = this._managedTextures[t];
                    e._glTextures[this.renderer.CONTEXT_UID] && delete e._glTextures[this.renderer.CONTEXT_UID]
                }
            }, t.prototype.destroy = function() {
                for (var t = 0; t < this._managedTextures.length; ++t) {
                    var e = this._managedTextures[t];
                    this.destroyTexture(e, !0), e.off("update", this.updateTexture, this), e.off("dispose", this.destroyTexture, this)
                }
                this._managedTextures = null
            }, t
        }();
    e.default = u
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = i(146),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n),
        s = function() {
            function t(e) {
                r(this, t), this.activeState = new Uint8Array(16), this.defaultState = new Uint8Array(16), this.defaultState[0] = 1, this.stackIndex = 0, this.stack = [], this.gl = e, this.maxAttribs = e.getParameter(e.MAX_VERTEX_ATTRIBS), this.attribState = {
                    tempAttribState: new Array(this.maxAttribs),
                    attribState: new Array(this.maxAttribs)
                }, this.blendModes = (0, o.default)(e), this.nativeVaoExtension = e.getExtension("OES_vertex_array_object") || e.getExtension("MOZ_OES_vertex_array_object") || e.getExtension("WEBKIT_OES_vertex_array_object")
            }
            return t.prototype.push = function() {
                var t = this.stack[this.stackIndex];
                t || (t = this.stack[this.stackIndex] = new Uint8Array(16)), ++this.stackIndex;
                for (var e = 0; e < this.activeState.length; e++) t[e] = this.activeState[e]
            }, t.prototype.pop = function() {
                var t = this.stack[--this.stackIndex];
                this.setState(t)
            }, t.prototype.setState = function(t) {
                this.setBlend(t[0]), this.setDepthTest(t[1]), this.setFrontFace(t[2]), this.setCullFace(t[3]), this.setBlendMode(t[4])
            }, t.prototype.setBlend = function(t) {
                t = t ? 1 : 0, this.activeState[0] !== t && (this.activeState[0] = t, this.gl[t ? "enable" : "disable"](this.gl.BLEND))
            }, t.prototype.setBlendMode = function(t) {
                if (t !== this.activeState[4]) {
                    this.activeState[4] = t;
                    var e = this.blendModes[t];
                    2 === e.length ? this.gl.blendFunc(e[0], e[1]) : this.gl.blendFuncSeparate(e[0], e[1], e[2], e[3])
                }
            }, t.prototype.setDepthTest = function(t) {
                t = t ? 1 : 0, this.activeState[1] !== t && (this.activeState[1] = t, this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST))
            }, t.prototype.setCullFace = function(t) {
                t = t ? 1 : 0, this.activeState[3] !== t && (this.activeState[3] = t, this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE))
            }, t.prototype.setFrontFace = function(t) {
                t = t ? 1 : 0, this.activeState[2] !== t && (this.activeState[2] = t, this.gl.frontFace(this.gl[t ? "CW" : "CCW"]))
            }, t.prototype.resetAttributes = function() {
                for (var t = 0; t < this.attribState.tempAttribState.length; t++) this.attribState.tempAttribState[t] = 0;
                for (var e = 0; e < this.attribState.attribState.length; e++) this.attribState.attribState[e] = 0;
                for (var i = 1; i < this.maxAttribs; i++) this.gl.disableVertexAttribArray(i)
            }, t.prototype.resetToDefault = function() {
                this.nativeVaoExtension && this.nativeVaoExtension.bindVertexArrayOES(null), this.resetAttributes();
                for (var t = 0; t < this.activeState.length; ++t) this.activeState[t] = 32;
                this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.setState(this.defaultState)
            }, t
        }();
    e.default = s
}, function(t, e, i) {
    "use strict";

    function r(t, e, i) {
        var r = n(t),
            o = n(e);
        return Object.assign(r, o)
    }

    function n(t) {
        for (var e = new RegExp("^(projectionMatrix|uSampler|filterArea|filterClamp)$"), i = {}, r = void 0, n = t.replace(/\s+/g, " ").split(/\s*;\s*/), o = 0; o < n.length; o++) {
            var s = n[o].trim();
            if (s.indexOf("uniform") > -1) {
                var h = s.split(" "),
                    u = h[1],
                    l = h[2],
                    c = 1;
                l.indexOf("[") > -1 && (r = l.split(/\[|]/), l = r[0], c *= Number(r[1])), l.match(e) || (i[l] = {
                    value: a(u, c),
                    name: l,
                    type: u
                })
            }
        }
        return i
    }
    e.__esModule = !0, e.default = r;
    var o = i(6),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(o),
        a = s.default.shader.defaultValue
}, function(t, e, i) {
    "use strict";

    function r(t, e, i) {
        var r = t.identity();
        return r.translate(e.x / i.width, e.y / i.height), r.scale(i.width, i.height), r
    }

    function n(t, e, i) {
        var r = t.identity();
        r.translate(e.x / i.width, e.y / i.height);
        var n = i.width / e.width,
            o = i.height / e.height;
        return r.scale(n, o), r
    }

    function o(t, e, i, r) {
        var n = r._texture.orig,
            o = t.set(i.width, 0, 0, i.height, e.x, e.y),
            a = r.worldTransform.copy(s.Matrix.TEMP_MATRIX);
        return a.invert(), o.prepend(a), o.scale(1 / n.width, 1 / n.height), o.translate(r.anchor.x, r.anchor.y), o
    }
    e.__esModule = !0, e.calculateScreenSpaceMatrix = r, e.calculateNormalizedScreenSpaceMatrix = n, e.calculateSpriteMatrix = o;
    var s = i(4)
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function s(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var a = i(19),
        h = r(a),
        u = i(27),
        l = r(u),
        c = i(77),
        f = r(c),
        d = i(4),
        p = i(16),
        _ = r(p),
        v = i(141),
        m = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(v),
        g = i(30),
        y = r(g),
        x = function() {
            function t() {
                s(this, t), this.renderTarget = null, this.target = null, this.resolution = 1, this.sourceFrame = new d.Rectangle, this.destinationFrame = new d.Rectangle, this.filters = []
            }
            return t.prototype.clear = function() {
                this.filters = null, this.target = null, this.renderTarget = null
            }, t
        }(),
        b = function(t) {
            function e(i) {
                s(this, e);
                var r = n(this, t.call(this, i));
                return r.gl = r.renderer.gl, r.quad = new f.default(r.gl, i.state.attribState), r.shaderCache = {}, r.pool = {}, r.filterData = null, r.managedFilters = [], r.renderer.on("prerender", r.onPrerender, r), r._screenWidth = i.view.width, r._screenHeight = i.view.height, r
            }
            return o(e, t), e.prototype.pushFilter = function(t, e) {
                var i = this.renderer,
                    r = this.filterData;
                if (!r) {
                    r = this.renderer._activeRenderTarget.filterStack;
                    var n = new x;
                    n.sourceFrame = n.destinationFrame = this.renderer._activeRenderTarget.size, n.renderTarget = i._activeRenderTarget, this.renderer._activeRenderTarget.filterData = r = {
                        index: 0,
                        stack: [n]
                    }, this.filterData = r
                }
                var o = r.stack[++r.index],
                    s = r.stack[0].destinationFrame;
                o || (o = r.stack[r.index] = new x);
                var a = t.filterArea && 0 === t.filterArea.x && 0 === t.filterArea.y && t.filterArea.width === i.screen.width && t.filterArea.height === i.screen.height,
                    h = e[0].resolution,
                    u = 0 | e[0].padding,
                    l = a ? i.screen : t.filterArea || t.getBounds(!0),
                    c = o.sourceFrame,
                    f = o.destinationFrame;
                c.x = (l.x * h | 0) / h, c.y = (l.y * h | 0) / h, c.width = (l.width * h | 0) / h, c.height = (l.height * h | 0) / h, a || (r.stack[0].renderTarget.transform || e[0].autoFit && c.fit(s), c.pad(u)), f.width = c.width, f.height = c.height;
                var d = this.getPotRenderTarget(i.gl, c.width, c.height, h);
                o.target = t, o.filters = e, o.resolution = h, o.renderTarget = d, d.setFrame(f, c), i.bindRenderTarget(d), d.clear()
            }, e.prototype.popFilter = function() {
                var t = this.filterData,
                    e = t.stack[t.index - 1],
                    i = t.stack[t.index];
                this.quad.map(i.renderTarget.size, i.sourceFrame).upload();
                var r = i.filters;
                if (1 === r.length) r[0].apply(this, i.renderTarget, e.renderTarget, !1, i), this.freePotRenderTarget(i.renderTarget);
                else {
                    var n = i.renderTarget,
                        o = this.getPotRenderTarget(this.renderer.gl, i.sourceFrame.width, i.sourceFrame.height, i.resolution);
                    o.setFrame(i.destinationFrame, i.sourceFrame), o.clear();
                    var s = 0;
                    for (s = 0; s < r.length - 1; ++s) {
                        r[s].apply(this, n, o, !0, i);
                        var a = n;
                        n = o, o = a
                    }
                    r[s].apply(this, n, e.renderTarget, !1, i), this.freePotRenderTarget(n), this.freePotRenderTarget(o)
                }
                i.clear(), 0 === --t.index && (this.filterData = null)
            }, e.prototype.applyFilter = function(t, e, i, r) {
                var n = this.renderer,
                    o = n.gl,
                    s = t.glShaders[n.CONTEXT_UID];
                s || (t.glShaderKey ? (s = this.shaderCache[t.glShaderKey]) || (s = new _.default(this.gl, t.vertexSrc, t.fragmentSrc), t.glShaders[n.CONTEXT_UID] = this.shaderCache[t.glShaderKey] = s, this.managedFilters.push(t)) : (s = t.glShaders[n.CONTEXT_UID] = new _.default(this.gl, t.vertexSrc, t.fragmentSrc), this.managedFilters.push(t)), n.bindVao(null), this.quad.initVao(s)), n.bindVao(this.quad.vao), n.bindRenderTarget(i), r && (o.disable(o.SCISSOR_TEST), n.clear(), o.enable(o.SCISSOR_TEST)), i === n.maskManager.scissorRenderTarget && n.maskManager.pushScissorMask(null, n.maskManager.scissorData), n.bindShader(s);
                var a = this.renderer.emptyTextures[0];
                this.renderer.boundTextures[0] = a, this.syncUniforms(s, t), n.state.setBlendMode(t.blendMode), o.activeTexture(o.TEXTURE0), o.bindTexture(o.TEXTURE_2D, e.texture.texture), this.quad.vao.draw(this.renderer.gl.TRIANGLES, 6, 0), o.bindTexture(o.TEXTURE_2D, a._glTextures[this.renderer.CONTEXT_UID].texture)
            }, e.prototype.syncUniforms = function(t, e) {
                var i = e.uniformData,
                    r = e.uniforms,
                    n = 1,
                    o = void 0;
                if (t.uniforms.filterArea) {
                    o = this.filterData.stack[this.filterData.index];
                    var s = t.uniforms.filterArea;
                    s[0] = o.renderTarget.size.width, s[1] = o.renderTarget.size.height, s[2] = o.sourceFrame.x, s[3] = o.sourceFrame.y, t.uniforms.filterArea = s
                }
                if (t.uniforms.filterClamp) {
                    o = o || this.filterData.stack[this.filterData.index];
                    var a = t.uniforms.filterClamp;
                    a[0] = 0, a[1] = 0, a[2] = (o.sourceFrame.width - 1) / o.renderTarget.size.width, a[3] = (o.sourceFrame.height - 1) / o.renderTarget.size.height, t.uniforms.filterClamp = a
                }
                for (var h in i)
                    if (t.uniforms.data[h]) {
                        var u = i[h].type;
                        if ("sampler2d" === u && 0 !== r[h]) {
                            if (r[h].baseTexture) t.uniforms[h] = this.renderer.bindTexture(r[h].baseTexture, n);
                            else {
                                t.uniforms[h] = n;
                                var l = this.renderer.gl;
                                this.renderer.boundTextures[n] = this.renderer.emptyTextures[n], l.activeTexture(l.TEXTURE0 + n), r[h].texture.bind()
                            }
                            n++
                        } else if ("mat3" === u) void 0 !== r[h].a ? t.uniforms[h] = r[h].toArray(!0) : t.uniforms[h] = r[h];
                        else if ("vec2" === u)
                            if (void 0 !== r[h].x) {
                                var c = t.uniforms[h] || new Float32Array(2);
                                c[0] = r[h].x, c[1] = r[h].y, t.uniforms[h] = c
                            } else t.uniforms[h] = r[h];
                        else "float" === u ? t.uniforms.data[h].value !== i[h] && (t.uniforms[h] = r[h]) : t.uniforms[h] = r[h]
                    }
            }, e.prototype.getRenderTarget = function(t, e) {
                var i = this.filterData.stack[this.filterData.index],
                    r = this.getPotRenderTarget(this.renderer.gl, i.sourceFrame.width, i.sourceFrame.height, e || i.resolution);
                return r.setFrame(i.destinationFrame, i.sourceFrame), r
            }, e.prototype.returnRenderTarget = function(t) {
                this.freePotRenderTarget(t)
            }, e.prototype.calculateScreenSpaceMatrix = function(t) {
                var e = this.filterData.stack[this.filterData.index];
                return m.calculateScreenSpaceMatrix(t, e.sourceFrame, e.renderTarget.size)
            }, e.prototype.calculateNormalizedScreenSpaceMatrix = function(t) {
                var e = this.filterData.stack[this.filterData.index];
                return m.calculateNormalizedScreenSpaceMatrix(t, e.sourceFrame, e.renderTarget.size, e.destinationFrame)
            }, e.prototype.calculateSpriteMatrix = function(t, e) {
                var i = this.filterData.stack[this.filterData.index];
                return m.calculateSpriteMatrix(t, i.sourceFrame, i.renderTarget.size, e)
            }, e.prototype.destroy = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    e = this.renderer,
                    i = this.managedFilters;
                e.off("prerender", this.onPrerender, this);
                for (var r = 0; r < i.length; r++) t || i[r].glShaders[e.CONTEXT_UID].destroy(), delete i[r].glShaders[e.CONTEXT_UID];
                this.shaderCache = {}, t ? this.pool = {} : this.emptyPool()
            }, e.prototype.getPotRenderTarget = function(t, e, i, r) {
                var n = "screen";
                e *= r, i *= r, e === this._screenWidth && i === this._screenHeight || (e = y.default.nextPow2(e), i = y.default.nextPow2(i), n = (65535 & e) << 16 | 65535 & i), this.pool[n] || (this.pool[n] = []);
                var o = this.pool[n].pop();
                if (!o) {
                    var s = this.renderer.boundTextures[0];
                    t.activeTexture(t.TEXTURE0), o = new l.default(t, e, i, null, 1), t.bindTexture(t.TEXTURE_2D, s._glTextures[this.renderer.CONTEXT_UID].texture)
                }
                return o.resolution = r, o.defaultFrame.width = o.size.width = e / r, o.defaultFrame.height = o.size.height = i / r, o.filterPoolKey = n, o
            }, e.prototype.emptyPool = function() {
                for (var t in this.pool) {
                    var e = this.pool[t];
                    if (e)
                        for (var i = 0; i < e.length; i++) e[i].destroy(!0)
                }
                this.pool = {}
            }, e.prototype.freePotRenderTarget = function(t) {
                this.pool[t.filterPoolKey].push(t)
            }, e.prototype.onPrerender = function() {
                if (this._screenWidth !== this.renderer.view.width || this._screenHeight !== this.renderer.view.height) {
                    this._screenWidth = this.renderer.view.width, this._screenHeight = this.renderer.view.height;
                    var t = this.pool.screen;
                    if (t)
                        for (var e = 0; e < t.length; e++) t[e].destroy(!0);
                    this.pool.screen = []
                }
            }, e
        }(h.default);
    e.default = b
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = i(19),
        h = r(a),
        u = i(76),
        l = r(u),
        c = function(t) {
            function e(i) {
                n(this, e);
                var r = o(this, t.call(this, i));
                return r.scissor = !1, r.scissorData = null, r.scissorRenderTarget = null, r.enableScissor = !0, r.alphaMaskPool = [], r.alphaMaskIndex = 0, r
            }
            return s(e, t), e.prototype.pushMask = function(t, e) {
                if (e.texture) this.pushSpriteMask(t, e);
                else if (this.enableScissor && !this.scissor && this.renderer._activeRenderTarget.root && !this.renderer.stencilManager.stencilMaskStack.length && e.isFastRect()) {
                    var i = e.worldTransform,
                        r = Math.atan2(i.b, i.a);
                    r = Math.round(r * (180 / Math.PI)), r % 90 ? this.pushStencilMask(e) : this.pushScissorMask(t, e)
                } else this.pushStencilMask(e)
            }, e.prototype.popMask = function(t, e) {
                e.texture ? this.popSpriteMask(t, e) : this.enableScissor && !this.renderer.stencilManager.stencilMaskStack.length ? this.popScissorMask(t, e) : this.popStencilMask(t, e)
            }, e.prototype.pushSpriteMask = function(t, e) {
                var i = this.alphaMaskPool[this.alphaMaskIndex];
                i || (i = this.alphaMaskPool[this.alphaMaskIndex] = [new l.default(e)]), i[0].resolution = this.renderer.resolution, i[0].maskSprite = e;
                var r = t.filterArea;
                t.filterArea = e.getBounds(!0), this.renderer.filterManager.pushFilter(t, i), t.filterArea = r, this.alphaMaskIndex++
            }, e.prototype.popSpriteMask = function() {
                this.renderer.filterManager.popFilter(), this.alphaMaskIndex--
            }, e.prototype.pushStencilMask = function(t) {
                this.renderer.currentRenderer.stop(), this.renderer.stencilManager.pushStencil(t)
            }, e.prototype.popStencilMask = function() {
                this.renderer.currentRenderer.stop(), this.renderer.stencilManager.popStencil()
            }, e.prototype.pushScissorMask = function(t, e) {
                e.renderable = !0;
                var i = this.renderer._activeRenderTarget,
                    r = e.getBounds();
                r.fit(i.size), e.renderable = !1, this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
                var n = this.renderer.resolution;
                this.renderer.gl.scissor(r.x * n, (i.root ? i.size.height - r.y - r.height : r.y) * n, r.width * n, r.height * n), this.scissorRenderTarget = i, this.scissorData = e, this.scissor = !0
            }, e.prototype.popScissorMask = function() {
                this.scissorRenderTarget = null, this.scissorData = null, this.scissor = !1;
                var t = this.renderer.gl;
                t.disable(t.SCISSOR_TEST)
            }, e
        }(h.default);
    e.default = c
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var s = i(19),
        a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(s),
        h = function(t) {
            function e(i) {
                r(this, e);
                var o = n(this, t.call(this, i));
                return o.stencilMaskStack = null, o
            }
            return o(e, t), e.prototype.setMaskStack = function(t) {
                this.stencilMaskStack = t;
                var e = this.renderer.gl;
                0 === t.length ? e.disable(e.STENCIL_TEST) : e.enable(e.STENCIL_TEST)
            }, e.prototype.pushStencil = function(t) {
                this.renderer.setObjectRenderer(this.renderer.plugins.graphics), this.renderer._activeRenderTarget.attachStencilBuffer();
                var e = this.renderer.gl,
                    i = this.stencilMaskStack.length;
                0 === i && e.enable(e.STENCIL_TEST), this.stencilMaskStack.push(t), e.colorMask(!1, !1, !1, !1), e.stencilFunc(e.EQUAL, i, this._getBitwiseMask()), e.stencilOp(e.KEEP, e.KEEP, e.INCR), this.renderer.plugins.graphics.render(t), this._useCurrent()
            }, e.prototype.popStencil = function() {
                this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
                var t = this.renderer.gl,
                    e = this.stencilMaskStack.pop();
                0 === this.stencilMaskStack.length ? (t.disable(t.STENCIL_TEST), t.clear(t.STENCIL_BUFFER_BIT), t.clearStencil(0)) : (t.colorMask(!1, !1, !1, !1), t.stencilOp(t.KEEP, t.KEEP, t.DECR), this.renderer.plugins.graphics.render(e), this._useCurrent())
            }, e.prototype._useCurrent = function() {
                var t = this.renderer.gl;
                t.colorMask(!0, !0, !0, !0), t.stencilFunc(t.EQUAL, this.stencilMaskStack.length, this._getBitwiseMask()), t.stencilOp(t.KEEP, t.KEEP, t.KEEP)
            }, e.prototype._getBitwiseMask = function() {
                return (1 << this.stencilMaskStack.length) - 1
            }, e.prototype.destroy = function() {
                a.default.prototype.destroy.call(this), this.stencilMaskStack.stencilStack = null
            }, e
        }(a.default);
    e.default = h
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        var i = !e;
        if (0 === t) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
        if (i) {
            var r = document.createElement("canvas");
            r.width = 1, r.height = 1, e = s.default.createContext(r)
        }
        for (var o = e.createShader(e.FRAGMENT_SHADER);;) {
            var h = a.replace(/%forloop%/gi, n(t));
            if (e.shaderSource(o, h), e.compileShader(o), e.getShaderParameter(o, e.COMPILE_STATUS)) break;
            t = t / 2 | 0
        }
        return i && e.getExtension("WEBGL_lose_context") && e.getExtension("WEBGL_lose_context").loseContext(), t
    }

    function n(t) {
        for (var e = "", i = 0; i < t; ++i) i > 0 && (e += "\nelse "), i < t - 1 && (e += "if(test == " + i + ".0){}");
        return e
    }
    e.__esModule = !0, e.default = r;
    var o = i(6),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(o),
        a = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join("\n")
}, function(t, e, i) {
    "use strict";

    function r(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        return e[n.BLEND_MODES.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.ADD] = [t.ONE, t.DST_ALPHA], e[n.BLEND_MODES.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.SCREEN] = [t.ONE, t.ONE_MINUS_SRC_COLOR], e[n.BLEND_MODES.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.NORMAL_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA], e[n.BLEND_MODES.ADD_NPM] = [t.SRC_ALPHA, t.DST_ALPHA, t.ONE, t.DST_ALPHA], e[n.BLEND_MODES.SCREEN_NPM] = [t.SRC_ALPHA, t.ONE_MINUS_SRC_COLOR, t.ONE, t.ONE_MINUS_SRC_COLOR], e
    }
    e.__esModule = !0, e.default = r;
    var n = i(0)
}, function(t, e, i) {
    "use strict";

    function r(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return e[n.DRAW_MODES.POINTS] = t.POINTS, e[n.DRAW_MODES.LINES] = t.LINES, e[n.DRAW_MODES.LINE_LOOP] = t.LINE_LOOP, e[n.DRAW_MODES.LINE_STRIP] = t.LINE_STRIP, e[n.DRAW_MODES.TRIANGLES] = t.TRIANGLES, e[n.DRAW_MODES.TRIANGLE_STRIP] = t.TRIANGLE_STRIP, e[n.DRAW_MODES.TRIANGLE_FAN] = t.TRIANGLE_FAN, e
    }
    e.__esModule = !0, e.default = r;
    var n = i(0)
}, function(t, e, i) {
    "use strict";

    function r(t) {
        t.getContextAttributes().stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly")
    }
    e.__esModule = !0, e.default = r
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var o = i(18),
        s = r(o),
        a = i(0),
        h = i(4),
        u = i(28),
        l = r(u),
        c = new h.Matrix,
        f = function() {
            function t(e) {
                n(this, t), this.renderer = e
            }
            return t.prototype.render = function(t) {
                var e = t._texture,
                    i = this.renderer,
                    r = e._frame.width,
                    n = e._frame.height,
                    o = t.transform.worldTransform,
                    s = 0,
                    u = 0;
                if (!(e.orig.width <= 0 || e.orig.height <= 0) && e.baseTexture.source && (i.setBlendMode(t.blendMode), e.valid)) {
                    i.context.globalAlpha = t.worldAlpha;
                    var f = e.baseTexture.scaleMode === a.SCALE_MODES.LINEAR;
                    i.smoothProperty && i.context[i.smoothProperty] !== f && (i.context[i.smoothProperty] = f), e.trim ? (s = e.trim.width / 2 + e.trim.x - t.anchor.x * e.orig.width, u = e.trim.height / 2 + e.trim.y - t.anchor.y * e.orig.height) : (s = (.5 - t.anchor.x) * e.orig.width, u = (.5 - t.anchor.y) * e.orig.height), e.rotate && (o.copy(c), o = c, h.GroupD8.matrixAppendRotationInv(o, e.rotate, s, u), s = 0, u = 0), s -= r / 2, u -= n / 2, i.roundPixels ? (i.context.setTransform(o.a, o.b, o.c, o.d, o.tx * i.resolution | 0, o.ty * i.resolution | 0), s |= 0, u |= 0) : i.context.setTransform(o.a, o.b, o.c, o.d, o.tx * i.resolution, o.ty * i.resolution);
                    var d = e.baseTexture.resolution;
                    16777215 !== t.tint ? (t.cachedTint === t.tint && t.tintedTexture.tintId === t._texture._updateID || (t.cachedTint = t.tint, t.tintedTexture = l.default.getTintedTexture(t, t.tint)), i.context.drawImage(t.tintedTexture, 0, 0, r * d, n * d, s * i.resolution, u * i.resolution, r * i.resolution, n * i.resolution)) : i.context.drawImage(e.baseTexture.source, e._frame.x * d, e._frame.y * d, r * d, n * d, s * i.resolution, u * i.resolution, r * i.resolution, n * i.resolution)
                }
            }, t.prototype.destroy = function() {
                this.renderer = null
            }, t
        }();
    e.default = f, s.default.registerPlugin("sprite", f)
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = function() {
        function t(e) {
            r(this, t), this.vertices = new ArrayBuffer(e), this.float32View = new Float32Array(this.vertices), this.uint32View = new Uint32Array(this.vertices)
        }
        return t.prototype.destroy = function() {
            this.vertices = null, this.positions = null, this.uvs = null, this.colors = null
        }, t
    }();
    e.default = n
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = i(26),
        h = r(a),
        u = i(25),
        l = r(u),
        c = i(42),
        f = r(c),
        d = i(152),
        p = r(d),
        _ = i(145),
        v = r(_),
        m = i(150),
        g = r(m),
        y = i(3),
        x = r(y),
        b = i(2),
        T = i(6),
        w = r(T),
        E = i(30),
        S = r(E),
        P = 0,
        O = 0,
        M = function(t) {
            function e(i) {
                n(this, e);
                var r = o(this, t.call(this, i));
                r.vertSize = 5, r.vertByteSize = 4 * r.vertSize, r.size = x.default.SPRITE_BATCH_SIZE, r.buffers = [];
                for (var s = 1; s <= S.default.nextPow2(r.size); s *= 2) r.buffers.push(new g.default(4 * s * r.vertByteSize));
                r.indices = (0, f.default)(r.size), r.shader = null, r.currentIndex = 0, r.groups = [];
                for (var a = 0; a < r.size; a++) r.groups[a] = {
                    textures: [],
                    textureCount: 0,
                    ids: [],
                    size: 0,
                    start: 0,
                    blend: 0
                };
                return r.sprites = [], r.vertexBuffers = [], r.vaos = [], r.vaoMax = 2, r.vertexCount = 0, r.renderer.on("prerender", r.onPrerender, r), r
            }
            return s(e, t), e.prototype.onContextChange = function() {
                var t = this.renderer.gl;
                this.renderer.legacy ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), x.default.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = (0, v.default)(this.MAX_TEXTURES, t)), this.shader = (0, p.default)(t, this.MAX_TEXTURES), this.indexBuffer = w.default.GLBuffer.createIndexBuffer(t, this.indices, t.STATIC_DRAW), this.renderer.bindVao(null);
                for (var e = this.shader.attributes, i = 0; i < this.vaoMax; i++) {
                    var r = this.vertexBuffers[i] = w.default.GLBuffer.createVertexBuffer(t, null, t.STREAM_DRAW),
                        n = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(r, e.aVertexPosition, t.FLOAT, !1, this.vertByteSize, 0).addAttribute(r, e.aTextureCoord, t.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(r, e.aColor, t.UNSIGNED_BYTE, !0, this.vertByteSize, 12);
                    e.aTextureId && n.addAttribute(r, e.aTextureId, t.FLOAT, !1, this.vertByteSize, 16), this.vaos[i] = n
                }
                this.vao = this.vaos[0], this.currentBlendMode = 99999, this.boundTextures = new Array(this.MAX_TEXTURES)
            }, e.prototype.onPrerender = function() {
                this.vertexCount = 0
            }, e.prototype.render = function(t) {
                this.currentIndex >= this.size && this.flush(), t._texture._uvs && (this.sprites[this.currentIndex++] = t)
            }, e.prototype.flush = function() {
                if (0 !== this.currentIndex) {
                    var t = this.renderer.gl,
                        e = this.MAX_TEXTURES,
                        i = S.default.nextPow2(this.currentIndex),
                        r = S.default.log2(i),
                        n = this.buffers[r],
                        o = this.sprites,
                        s = this.groups,
                        a = n.float32View,
                        h = n.uint32View,
                        u = this.boundTextures,
                        l = this.renderer.boundTextures,
                        c = this.renderer.textureGC.count,
                        f = 0,
                        d = void 0,
                        p = void 0,
                        _ = 1,
                        v = 0,
                        m = s[0],
                        g = void 0,
                        y = void 0,
                        T = b.premultiplyBlendMode[o[0]._texture.baseTexture.premultipliedAlpha ? 1 : 0][o[0].blendMode];
                    m.textureCount = 0, m.start = 0, m.blend = T, P++;
                    var E = void 0;
                    for (E = 0; E < e; ++E) {
                        var M = l[E];
                        M._enabled !== P ? (u[E] = M, M._virtalBoundId = E, M._enabled = P) : u[E] = this.renderer.emptyTextures[E]
                    }
                    for (P++, E = 0; E < this.currentIndex; ++E) {
                        var C = o[E];
                        o[E] = null, d = C._texture.baseTexture;
                        var R = b.premultiplyBlendMode[Number(d.premultipliedAlpha)][C.blendMode];
                        if (T !== R && (T = R, p = null, v = e, P++), p !== d && (p = d, d._enabled !== P)) {
                            if (v === e && (P++, m.size = E - m.start, v = 0, m = s[_++], m.blend = T, m.textureCount = 0, m.start = E), d.touched = c, -1 === d._virtalBoundId)
                                for (var A = 0; A < e; ++A) {
                                    var I = (A + O) % e,
                                        D = u[I];
                                    if (D._enabled !== P) {
                                        O++, D._virtalBoundId = -1, d._virtalBoundId = I, u[I] = d;
                                        break
                                    }
                                }
                            d._enabled = P, m.textureCount++, m.ids[v] = d._virtalBoundId, m.textures[v++] = d
                        }
                        if (g = C.vertexData, y = C._texture._uvs.uvsUint32, this.renderer.roundPixels) {
                            var L = this.renderer.resolution;
                            a[f] = (g[0] * L | 0) / L, a[f + 1] = (g[1] * L | 0) / L, a[f + 5] = (g[2] * L | 0) / L, a[f + 6] = (g[3] * L | 0) / L, a[f + 10] = (g[4] * L | 0) / L, a[f + 11] = (g[5] * L | 0) / L, a[f + 15] = (g[6] * L | 0) / L, a[f + 16] = (g[7] * L | 0) / L
                        } else a[f] = g[0], a[f + 1] = g[1], a[f + 5] = g[2], a[f + 6] = g[3], a[f + 10] = g[4], a[f + 11] = g[5], a[f + 15] = g[6], a[f + 16] = g[7];
                        h[f + 2] = y[0], h[f + 7] = y[1], h[f + 12] = y[2], h[f + 17] = y[3];
                        var k = Math.min(C.worldAlpha, 1),
                            N = k < 1 && d.premultipliedAlpha ? (0, b.premultiplyTint)(C._tintRGB, k) : C._tintRGB + (255 * k << 24);
                        h[f + 3] = h[f + 8] = h[f + 13] = h[f + 18] = N, a[f + 4] = a[f + 9] = a[f + 14] = a[f + 19] = d._virtalBoundId, f += 20
                    }
                    if (m.size = E - m.start, x.default.CAN_UPLOAD_SAME_BUFFER) this.vertexBuffers[this.vertexCount].upload(n.vertices, 0, !0);
                    else {
                        if (this.vaoMax <= this.vertexCount) {
                            this.vaoMax++;
                            var F = this.shader.attributes,
                                B = this.vertexBuffers[this.vertexCount] = w.default.GLBuffer.createVertexBuffer(t, null, t.STREAM_DRAW),
                                j = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(B, F.aVertexPosition, t.FLOAT, !1, this.vertByteSize, 0).addAttribute(B, F.aTextureCoord, t.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(B, F.aColor, t.UNSIGNED_BYTE, !0, this.vertByteSize, 12);
                            F.aTextureId && j.addAttribute(B, F.aTextureId, t.FLOAT, !1, this.vertByteSize, 16), this.vaos[this.vertexCount] = j
                        }
                        this.renderer.bindVao(this.vaos[this.vertexCount]), this.vertexBuffers[this.vertexCount].upload(n.vertices, 0, !1), this.vertexCount++
                    }
                    for (E = 0; E < e; ++E) l[E]._virtalBoundId = -1;
                    for (E = 0; E < _; ++E) {
                        for (var U = s[E], X = U.textureCount, G = 0; G < X; G++) p = U.textures[G], l[U.ids[G]] !== p && this.renderer.bindTexture(p, U.ids[G], !0), p._virtalBoundId = -1;
                        this.renderer.state.setBlendMode(U.blend), t.drawElements(t.TRIANGLES, 6 * U.size, t.UNSIGNED_SHORT, 6 * U.start * 2)
                    }
                    this.currentIndex = 0
                }
            }, e.prototype.start = function() {
                this.renderer.bindShader(this.shader), x.default.CAN_UPLOAD_SAME_BUFFER && (this.renderer.bindVao(this.vaos[this.vertexCount]), this.vertexBuffers[this.vertexCount].bind())
            }, e.prototype.stop = function() {
                this.flush()
            }, e.prototype.destroy = function() {
                for (var e = 0; e < this.vaoMax; e++) this.vertexBuffers[e] && this.vertexBuffers[e].destroy(), this.vaos[e] && this.vaos[e].destroy();
                this.indexBuffer && this.indexBuffer.destroy(), this.renderer.off("prerender", this.onPrerender, this), t.prototype.destroy.call(this), this.shader && (this.shader.destroy(), this.shader = null), this.vertexBuffers = null, this.vaos = null, this.indexBuffer = null, this.indices = null, this.sprites = null;
                for (var i = 0; i < this.buffers.length; ++i) this.buffers[i].destroy()
            }, e
        }(h.default);
    e.default = M, l.default.registerPlugin("sprite", M)
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        var i = a;
        i = i.replace(/%count%/gi, e), i = i.replace(/%forloop%/gi, n(e));
        for (var r = new s.default(t, "precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor;\n}\n", i), o = [], h = 0; h < e; h++) o[h] = h;
        return r.bind(), r.uniforms.uSamplers = o, r
    }

    function n(t) {
        var e = "";
        e += "\n", e += "\n";
        for (var i = 0; i < t; i++) i > 0 && (e += "\nelse "), i < t - 1 && (e += "if(textureId == " + i + ".0)"), e += "\n{", e += "\n\tcolor = texture2D(uSamplers[" + i + "], vTextureCoord);", e += "\n}";
        return e += "\n", e += "\n"
    }
    e.__esModule = !0, e.default = r;
    var o = i(16),
        s = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(o),
        a = (i(7), ["varying vec2 vTextureCoord;", "varying vec4 vColor;", "varying float vTextureId;", "uniform sampler2D uSamplers[%count%];", "void main(void){", "vec4 color;", "float textureId = floor(vTextureId+0.5);", "%forloop%", "gl_FragColor = color * vColor;", "}"].join("\n"))
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        h = i(39),
        u = r(h),
        l = i(9),
        c = r(l),
        f = i(4),
        d = i(2),
        p = i(0),
        _ = i(3),
        v = r(_),
        m = i(79),
        g = r(m),
        y = i(78),
        x = r(y),
        b = i(162),
        T = r(b),
        w = {
            texture: !0,
            children: !1,
            baseTexture: !0
        },
        E = function(t) {
            function e(i, r, s) {
                n(this, e), s = s || document.createElement("canvas"), s.width = 3, s.height = 3;
                var a = c.default.fromCanvas(s, v.default.SCALE_MODE, "text");
                a.orig = new f.Rectangle, a.trim = new f.Rectangle;
                var h = o(this, t.call(this, a));
                return c.default.addToCache(h._texture, h._texture.baseTexture.textureCacheIds[0]), h.canvas = s, h.context = h.canvas.getContext("2d"), h.resolution = v.default.RESOLUTION, h._text = null, h._style = null, h._styleListener = null, h._font = "", h.text = i, h.style = r, h.localStyleID = -1, h
            }
            return s(e, t), e.prototype.updateText = function(t) {
                var e = this._style;
                if (this.localStyleID !== e.styleID && (this.dirty = !0, this.localStyleID = e.styleID), this.dirty || !t) {
                    this._font = this._style.toFontString();
                    var i = this.context,
                        r = x.default.measureText(this._text, this._style, this._style.wordWrap, this.canvas),
                        n = r.width,
                        o = r.height,
                        s = r.lines,
                        a = r.lineHeight,
                        h = r.lineWidths,
                        u = r.maxLineWidth,
                        l = r.fontProperties;
                    this.canvas.width = Math.ceil((Math.max(1, n) + 2 * e.padding) * this.resolution), this.canvas.height = Math.ceil((Math.max(1, o) + 2 * e.padding) * this.resolution), i.scale(this.resolution, this.resolution), i.clearRect(0, 0, this.canvas.width, this.canvas.height), i.font = this._font, i.strokeStyle = e.stroke, i.lineWidth = e.strokeThickness, i.textBaseline = e.textBaseline, i.lineJoin = e.lineJoin, i.miterLimit = e.miterLimit;
                    var c = void 0,
                        f = void 0;
                    if (e.dropShadow) {
                        i.fillStyle = e.dropShadowColor, i.globalAlpha = e.dropShadowAlpha, i.shadowBlur = e.dropShadowBlur, e.dropShadowBlur > 0 && (i.shadowColor = e.dropShadowColor);
                        for (var d = Math.cos(e.dropShadowAngle) * e.dropShadowDistance, p = Math.sin(e.dropShadowAngle) * e.dropShadowDistance, _ = 0; _ < s.length; _++) c = e.strokeThickness / 2, f = e.strokeThickness / 2 + _ * a + l.ascent, "right" === e.align ? c += u - h[_] : "center" === e.align && (c += (u - h[_]) / 2), e.fill && (this.drawLetterSpacing(s[_], c + d + e.padding, f + p + e.padding), e.stroke && e.strokeThickness && (i.strokeStyle = e.dropShadowColor, this.drawLetterSpacing(s[_], c + d + e.padding, f + p + e.padding, !0), i.strokeStyle = e.stroke))
                    }
                    i.shadowBlur = 0, i.globalAlpha = 1, i.fillStyle = this._generateFillStyle(e, s);
                    for (var v = 0; v < s.length; v++) c = e.strokeThickness / 2, f = e.strokeThickness / 2 + v * a + l.ascent, "right" === e.align ? c += u - h[v] : "center" === e.align && (c += (u - h[v]) / 2), e.stroke && e.strokeThickness && this.drawLetterSpacing(s[v], c + e.padding, f + e.padding, !0), e.fill && this.drawLetterSpacing(s[v], c + e.padding, f + e.padding);
                    this.updateTexture()
                }
            }, e.prototype.drawLetterSpacing = function(t, e, i) {
                var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    n = this._style,
                    o = n.letterSpacing;
                if (0 === o) return void(r ? this.context.strokeText(t, e, i) : this.context.fillText(t, e, i));
                for (var s = String.prototype.split.call(t, ""), a = e, h = 0, u = ""; h < t.length;) u = s[h++], r ? this.context.strokeText(u, a, i) : this.context.fillText(u, a, i), a += this.context.measureText(u).width + o
            }, e.prototype.updateTexture = function() {
                var t = this.canvas;
                if (this._style.trim) {
                    var e = (0, T.default)(t);
                    e.data && (t.width = e.width, t.height = e.height, this.context.putImageData(e.data, 0, 0))
                }
                var i = this._texture,
                    r = this._style,
                    n = r.trim ? 0 : r.padding,
                    o = i.baseTexture;
                o.hasLoaded = !0, o.resolution = this.resolution, o.realWidth = t.width, o.realHeight = t.height, o.width = t.width / this.resolution, o.height = t.height / this.resolution, i.trim.width = i._frame.width = t.width / this.resolution, i.trim.height = i._frame.height = t.height / this.resolution, i.trim.x = -n, i.trim.y = -n, i.orig.width = i._frame.width - 2 * n, i.orig.height = i._frame.height - 2 * n, this._onTextureUpdate(), o.emit("update", o), this.dirty = !1
            }, e.prototype.renderWebGL = function(e) {
                this.resolution !== e.resolution && (this.resolution = e.resolution, this.dirty = !0), this.updateText(!0), t.prototype.renderWebGL.call(this, e)
            }, e.prototype._renderCanvas = function(e) {
                this.resolution !== e.resolution && (this.resolution = e.resolution, this.dirty = !0), this.updateText(!0), t.prototype._renderCanvas.call(this, e)
            }, e.prototype.getLocalBounds = function(e) {
                return this.updateText(!0), t.prototype.getLocalBounds.call(this, e)
            }, e.prototype._calculateBounds = function() {
                this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData)
            }, e.prototype._onStyleChange = function() {
                this.dirty = !0
            }, e.prototype._generateFillStyle = function(t, e) {
                if (!Array.isArray(t.fill)) return t.fill;
                if (navigator.isCocoonJS) return t.fill[0];
                var i = void 0,
                    r = void 0,
                    n = void 0,
                    o = void 0,
                    s = this.canvas.width / this.resolution,
                    a = this.canvas.height / this.resolution,
                    h = t.fill.slice(),
                    u = t.fillGradientStops.slice();
                if (!u.length)
                    for (var l = h.length + 1, c = 1; c < l; ++c) u.push(c / l);
                if (h.unshift(t.fill[0]), u.unshift(0), h.push(t.fill[t.fill.length - 1]), u.push(1), t.fillGradientType === p.TEXT_GRADIENT.LINEAR_VERTICAL) {
                    i = this.context.createLinearGradient(s / 2, 0, s / 2, a), r = (h.length + 1) * e.length, n = 0;
                    for (var f = 0; f < e.length; f++) {
                        n += 1;
                        for (var d = 0; d < h.length; d++) o = "number" == typeof u[d] ? u[d] / e.length + f / e.length : n / r, i.addColorStop(o, h[d]), n++
                    }
                } else {
                    i = this.context.createLinearGradient(0, a / 2, s, a / 2), r = h.length + 1, n = 1;
                    for (var _ = 0; _ < h.length; _++) o = "number" == typeof u[_] ? u[_] : n / r, i.addColorStop(o, h[_]), n++
                }
                return i
            }, e.prototype.destroy = function(e) {
                "boolean" == typeof e && (e = {
                    children: e
                }), e = Object.assign({}, w, e), t.prototype.destroy.call(this, e), this.context = null, this.canvas = null, this._style = null
            }, a(e, [{
                key: "width",
                get: function() {
                    return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width
                },
                set: function(t) {
                    this.updateText(!0);
                    var e = (0, d.sign)(this.scale.x) || 1;
                    this.scale.x = e * t / this._texture.orig.width, this._width = t
                }
            }, {
                key: "height",
                get: function() {
                    return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height
                },
                set: function(t) {
                    this.updateText(!0);
                    var e = (0, d.sign)(this.scale.y) || 1;
                    this.scale.y = e * t / this._texture.orig.height, this._height = t
                }
            }, {
                key: "style",
                get: function() {
                    return this._style
                },
                set: function(t) {
                    t = t || {}, t instanceof g.default ? this._style = t : this._style = new g.default(t), this.localStyleID = -1, this.dirty = !0
                }
            }, {
                key: "text",
                get: function() {
                    return this._text
                },
                set: function(t) {
                    t = String("" === t || null === t || void 0 === t ? " " : t), this._text !== t && (this._text = t, this.dirty = !0)
                }
            }]), e
        }(u.default);
    e.default = E
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        o = i(1),
        s = i(2),
        a = function() {
            function t(e, i) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                r(this, t), this.baseTexture = e, this.textures = {}, this.animations = {}, this.data = i, this.resolution = this._updateResolution(n || this.baseTexture.imageUrl), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null
            }
            return n(t, null, [{
                key: "BATCH_SIZE",
                get: function() {
                    return 1e3
                }
            }]), t.prototype._updateResolution = function(t) {
                var e = this.data.meta.scale,
                    i = (0, s.getResolutionOfUrl)(t, null);
                return null === i && (i = void 0 !== e ? parseFloat(e) : 1), 1 !== i && (this.baseTexture.resolution = i, this.baseTexture.update()), i
            }, t.prototype.parse = function(e) {
                this._batchIndex = 0, this._callback = e, this._frameKeys.length <= t.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch()
            }, t.prototype._processFrames = function(e) {
                for (var i = e, r = t.BATCH_SIZE, n = this.baseTexture.sourceScale; i - e < r && i < this._frameKeys.length;) {
                    var s = this._frameKeys[i],
                        a = this._frames[s],
                        h = a.frame;
                    if (h) {
                        var u = null,
                            l = null,
                            c = !1 !== a.trimmed && a.sourceSize ? a.sourceSize : a.frame,
                            f = new o.Rectangle(0, 0, Math.floor(c.w * n) / this.resolution, Math.floor(c.h * n) / this.resolution);
                        u = a.rotated ? new o.Rectangle(Math.floor(h.x * n) / this.resolution, Math.floor(h.y * n) / this.resolution, Math.floor(h.h * n) / this.resolution, Math.floor(h.w * n) / this.resolution) : new o.Rectangle(Math.floor(h.x * n) / this.resolution, Math.floor(h.y * n) / this.resolution, Math.floor(h.w * n) / this.resolution, Math.floor(h.h * n) / this.resolution), !1 !== a.trimmed && a.spriteSourceSize && (l = new o.Rectangle(Math.floor(a.spriteSourceSize.x * n) / this.resolution, Math.floor(a.spriteSourceSize.y * n) / this.resolution, Math.floor(h.w * n) / this.resolution, Math.floor(h.h * n) / this.resolution)), this.textures[s] = new o.Texture(this.baseTexture, u, f, l, a.rotated ? 2 : 0, a.anchor), o.Texture.addToCache(this.textures[s], s)
                    }
                    i++
                }
            }, t.prototype._processAnimations = function() {
                var t = this.data.animations || {};
                for (var e in t) {
                    this.animations[e] = [];
                    for (var i = t[e], r = Array.isArray(i), n = 0, i = r ? i : i[Symbol.iterator]();;) {
                        var o;
                        if (r) {
                            if (n >= i.length) break;
                            o = i[n++]
                        } else {
                            if (n = i.next(), n.done) break;
                            o = n.value
                        }
                        var s = o;
                        this.animations[e].push(this.textures[s])
                    }
                }
            }, t.prototype._parseComplete = function() {
                var t = this._callback;
                this._callback = null, this._batchIndex = 0, t.call(this, this.textures)
            }, t.prototype._nextBatch = function() {
                var e = this;
                this._processFrames(this._batchIndex * t.BATCH_SIZE), this._batchIndex++, setTimeout(function() {
                    e._batchIndex * t.BATCH_SIZE < e._frameKeys.length ? e._nextBatch() : (e._processAnimations(), e._parseComplete())
                }, 0)
            }, t.prototype.destroy = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                for (var e in this.textures) this.textures[e].destroy();
                this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t && this.baseTexture.destroy(), this.baseTexture = null
            }, t
        }();
    e.default = a
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var o = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        s = i(3),
        a = r(s),
        h = i(0),
        u = i(156),
        l = r(u),
        c = function() {
            function t() {
                var e = this;
                n(this, t), this._head = new l.default(null, null, 1 / 0), this._requestId = null, this._maxElapsedMS = 100, this.autoStart = !1, this.deltaTime = 1, this.elapsedMS = 1 / a.default.TARGET_FPMS, this.lastTime = -1, this.speed = 1, this.started = !1, this._tick = function(t) {
                    e._requestId = null, e.started && (e.update(t), e.started && null === e._requestId && e._head.next && (e._requestId = requestAnimationFrame(e._tick)))
                }
            }
            return t.prototype._requestIfNeeded = function() {
                null === this._requestId && this._head.next && (this.lastTime = performance.now(), this._requestId = requestAnimationFrame(this._tick))
            }, t.prototype._cancelIfNeeded = function() {
                null !== this._requestId && (cancelAnimationFrame(this._requestId), this._requestId = null)
            }, t.prototype._startIfPossible = function() {
                this.started ? this._requestIfNeeded() : this.autoStart && this.start()
            }, t.prototype.add = function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.UPDATE_PRIORITY.NORMAL;
                return this._addListener(new l.default(t, e, i))
            }, t.prototype.addOnce = function(t, e) {
                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h.UPDATE_PRIORITY.NORMAL;
                return this._addListener(new l.default(t, e, i, !0))
            }, t.prototype._addListener = function(t) {
                var e = this._head.next,
                    i = this._head;
                if (e) {
                    for (; e;) {
                        if (t.priority > e.priority) {
                            t.connect(i);
                            break
                        }
                        i = e, e = e.next
                    }
                    t.previous || t.connect(i)
                } else t.connect(i);
                return this._startIfPossible(), this
            }, t.prototype.remove = function(t, e) {
                for (var i = this._head.next; i;) i = i.match(t, e) ? i.destroy() : i.next;
                return this._head.next || this._cancelIfNeeded(), this
            }, t.prototype.start = function() {
                this.started || (this.started = !0, this._requestIfNeeded())
            }, t.prototype.stop = function() {
                this.started && (this.started = !1, this._cancelIfNeeded())
            }, t.prototype.destroy = function() {
                this.stop();
                for (var t = this._head.next; t;) t = t.destroy(!0);
                this._head.destroy(), this._head = null
            }, t.prototype.update = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now(),
                    e = void 0;
                if (t > this.lastTime) {
                    e = this.elapsedMS = t - this.lastTime, e > this._maxElapsedMS && (e = this._maxElapsedMS), this.deltaTime = e * a.default.TARGET_FPMS * this.speed;
                    for (var i = this._head, r = i.next; r;) r = r.emit(this.deltaTime);
                    i.next || this._cancelIfNeeded()
                } else this.deltaTime = this.elapsedMS = 0;
                this.lastTime = t
            }, o(t, [{
                key: "FPS",
                get: function() {
                    return 1e3 / this.elapsedMS
                }
            }, {
                key: "minFPS",
                get: function() {
                    return 1e3 / this._maxElapsedMS
                },
                set: function(t) {
                    var e = Math.min(Math.max(0, t) / 1e3, a.default.TARGET_FPMS);
                    this._maxElapsedMS = 1 / e
                }
            }]), t
        }();
    e.default = c
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = function() {
        function t(e) {
            var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            r(this, t), this.fn = e, this.context = i, this.priority = n, this.once = o, this.next = null, this.previous = null, this._destroyed = !1
        }
        return t.prototype.match = function(t, e) {
            return e = e || null, this.fn === t && this.context === e
        }, t.prototype.emit = function(t) {
            this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
            var e = this.next;
            return this.once && this.destroy(!0), this._destroyed && (this.next = null), e
        }, t.prototype.connect = function(t) {
            this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this
        }, t.prototype.destroy = function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
            var e = this.next;
            return this.next = t ? null : e, this.previous = null, e
        }, t
    }();
    e.default = n
}, function(t, e, i) {
    "use strict";

    function r() {
        return !(!!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform))
    }
    e.__esModule = !0, e.default = r
}, function(t, e, i) {
    "use strict";

    function r() {
        for (var t = [], e = [], i = 0; i < 32; i++) t[i] = i, e[i] = i;
        t[n.BLEND_MODES.NORMAL_NPM] = n.BLEND_MODES.NORMAL, t[n.BLEND_MODES.ADD_NPM] = n.BLEND_MODES.ADD, t[n.BLEND_MODES.SCREEN_NPM] = n.BLEND_MODES.SCREEN, e[n.BLEND_MODES.NORMAL] = n.BLEND_MODES.NORMAL_NPM, e[n.BLEND_MODES.ADD] = n.BLEND_MODES.ADD_NPM, e[n.BLEND_MODES.SCREEN] = n.BLEND_MODES.SCREEN_NPM;
        var r = [];
        return r.push(e), r.push(t), r
    }
    e.__esModule = !0, e.default = r;
    var n = i(0)
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return o.default.tablet || o.default.phone ? 4 : t
    }
    e.__esModule = !0, e.default = r;
    var n = i(32),
        o = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(n)
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (t && e)
            for (var i = Object.keys(e), r = 0; r < i.length; ++r) {
                var n = i[r];
                Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
            }
    }

    function n(t, e) {
        s.push(t, e)
    }

    function o() {
        for (var t = 0; t < s.length; t += 2) r(s[t], s[t + 1]);
        s.length = 0
    }
    e.__esModule = !0, e.mixin = r, e.delayMixin = n, e.performMixins = o;
    var s = []
}, function(t, e, i) {
    "use strict";

    function r(t) {
        t.__plugins = {}, t.registerPlugin = function(e, i) {
            t.__plugins[e] = i
        }, t.prototype.initPlugins = function() {
            this.plugins = this.plugins || {};
            for (var e in t.__plugins) this.plugins[e] = new t.__plugins[e](this)
        }, t.prototype.destroyPlugins = function() {
            for (var t in this.plugins) this.plugins[t].destroy(), this.plugins[t] = null;
            this.plugins = null
        }
    }
    e.__esModule = !0, e.default = {
        mixin: function(t) {
            r(t)
        }
    }
}, function(t, e, i) {
    "use strict";

    function r(t) {
        var e = t.width,
            i = t.height,
            r = t.getContext("2d"),
            n = r.getImageData(0, 0, e, i),
            o = n.data,
            s = o.length,
            a = {
                top: null,
                left: null,
                right: null,
                bottom: null
            },
            h = null,
            u = void 0,
            l = void 0,
            c = void 0;
        for (u = 0; u < s; u += 4) 0 !== o[u + 3] && (l = u / 4 % e, c = ~~(u / 4 / e), null === a.top && (a.top = c), null === a.left ? a.left = l : l < a.left && (a.left = l), null === a.right ? a.right = l + 1 : a.right < l && (a.right = l + 1), null === a.bottom ? a.bottom = c : a.bottom < c && (a.bottom = c));
        return null !== a.top && (e = a.right - a.left, i = a.bottom - a.top + 1, h = r.getImageData(a.left, a.top, e, i)), {
            height: i,
            width: e,
            data: h
        }
    }
    e.__esModule = !0, e.default = r
}, function(t, e, i) {
    "use strict";

    function r(t) {
        if (!o[t]) {
            var e = (new Error).stack;
            void 0 === e ? console.warn("Deprecation Warning: ", t) : (e = e.split("\n").splice(3).join("\n"), console.groupCollapsed ? (console.groupCollapsed("%cDeprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", t), console.warn(e), console.groupEnd()) : (console.warn("Deprecation Warning: ", t), console.warn(e))), o[t] = !0
        }
    }

    function n(t) {
        var e = t.mesh,
            i = t.particles,
            n = t.extras,
            o = t.filters,
            s = t.prepare,
            a = t.loaders,
            h = t.interaction;
        Object.defineProperties(t, {
            SpriteBatch: {
                get: function() {
                    throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.")
                }
            },
            AssetLoader: {
                get: function() {
                    throw new ReferenceError("The loader system was overhauled in PixiJS v3, please see the new PIXI.loaders.Loader class.")
                }
            },
            Stage: {
                get: function() {
                    return r("You do not need to use a PIXI Stage any more, you can simply render any container."), t.Container
                }
            },
            DisplayObjectContainer: {
                get: function() {
                    return r("DisplayObjectContainer has been shortened to Container, please use Container from now on."), t.Container
                }
            },
            Strip: {
                get: function() {
                    return r("The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on."), e.Mesh
                }
            },
            Rope: {
                get: function() {
                    return r("The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on."), e.Rope
                }
            },
            ParticleContainer: {
                get: function() {
                    return r("The ParticleContainer class has been moved to particles.ParticleContainer, please use particles.ParticleContainer from now on."), i.ParticleContainer
                }
            },
            MovieClip: {
                get: function() {
                    return r("The MovieClip class has been moved to extras.AnimatedSprite, please use extras.AnimatedSprite."), n.AnimatedSprite
                }
            },
            TilingSprite: {
                get: function() {
                    return r("The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on."), n.TilingSprite
                }
            },
            BitmapText: {
                get: function() {
                    return r("The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on."), n.BitmapText
                }
            },
            blendModes: {
                get: function() {
                    return r("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on."), t.BLEND_MODES
                }
            },
            scaleModes: {
                get: function() {
                    return r("The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on."), t.SCALE_MODES
                }
            },
            BaseTextureCache: {
                get: function() {
                    return r("The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on."), t.utils.BaseTextureCache
                }
            },
            TextureCache: {
                get: function() {
                    return r("The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on."), t.utils.TextureCache
                }
            },
            math: {
                get: function() {
                    return r("The math namespace is deprecated, please access members already accessible on PIXI."), t
                }
            },
            AbstractFilter: {
                get: function() {
                    return r("AstractFilter has been renamed to Filter, please use PIXI.Filter"), t.Filter
                }
            },
            TransformManual: {
                get: function() {
                    return r("TransformManual has been renamed to TransformBase, please update your pixi-spine"), t.TransformBase
                }
            },
            TARGET_FPMS: {
                get: function() {
                    return r("PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS"), t.settings.TARGET_FPMS
                },
                set: function(e) {
                    r("PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS"), t.settings.TARGET_FPMS = e
                }
            },
            FILTER_RESOLUTION: {
                get: function() {
                    return r("PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION"), t.settings.FILTER_RESOLUTION
                },
                set: function(e) {
                    r("PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION"), t.settings.FILTER_RESOLUTION = e
                }
            },
            RESOLUTION: {
                get: function() {
                    return r("PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION"), t.settings.RESOLUTION
                },
                set: function(e) {
                    r("PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION"), t.settings.RESOLUTION = e
                }
            },
            MIPMAP_TEXTURES: {
                get: function() {
                    return r("PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES"), t.settings.MIPMAP_TEXTURES
                },
                set: function(e) {
                    r("PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES"), t.settings.MIPMAP_TEXTURES = e
                }
            },
            SPRITE_BATCH_SIZE: {
                get: function() {
                    return r("PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE"), t.settings.SPRITE_BATCH_SIZE
                },
                set: function(e) {
                    r("PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE"), t.settings.SPRITE_BATCH_SIZE = e
                }
            },
            SPRITE_MAX_TEXTURES: {
                get: function() {
                    return r("PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES"), t.settings.SPRITE_MAX_TEXTURES
                },
                set: function(e) {
                    r("PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES"), t.settings.SPRITE_MAX_TEXTURES = e
                }
            },
            RETINA_PREFIX: {
                get: function() {
                    return r("PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX"), t.settings.RETINA_PREFIX
                },
                set: function(e) {
                    r("PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX"), t.settings.RETINA_PREFIX = e
                }
            },
            DEFAULT_RENDER_OPTIONS: {
                get: function() {
                    return r("PIXI.DEFAULT_RENDER_OPTIONS has been deprecated, please use PIXI.settings.DEFAULT_RENDER_OPTIONS"), t.settings.RENDER_OPTIONS
                }
            }
        });
        for (var u = [{
                parent: "TRANSFORM_MODE",
                target: "TRANSFORM_MODE"
            }, {
                parent: "GC_MODES",
                target: "GC_MODE"
            }, {
                parent: "WRAP_MODES",
                target: "WRAP_MODE"
            }, {
                parent: "SCALE_MODES",
                target: "SCALE_MODE"
            }, {
                parent: "PRECISION",
                target: "PRECISION_FRAGMENT"
            }], l = 0; l < u.length; l++) ! function(e) {
            var i = u[e];
            Object.defineProperty(t[i.parent], "DEFAULT", {
                get: function() {
                    return r("PIXI." + i.parent + ".DEFAULT has been deprecated, please use PIXI.settings." + i.target), t.settings[i.target]
                },
                set: function(e) {
                    r("PIXI." + i.parent + ".DEFAULT has been deprecated, please use PIXI.settings." + i.target), t.settings[i.target] = e
                }
            })
        }(l);
        Object.defineProperties(t.settings, {
            PRECISION: {
                get: function() {
                    return r("PIXI.settings.PRECISION has been deprecated, please use PIXI.settings.PRECISION_FRAGMENT"), t.settings.PRECISION_FRAGMENT
                },
                set: function(e) {
                    r("PIXI.settings.PRECISION has been deprecated, please use PIXI.settings.PRECISION_FRAGMENT"), t.settings.PRECISION_FRAGMENT = e
                }
            }
        }), n.AnimatedSprite && Object.defineProperties(n, {
            MovieClip: {
                get: function() {
                    return r("The MovieClip class has been renamed to AnimatedSprite, please use AnimatedSprite from now on."), n.AnimatedSprite
                }
            }
        }), n && Object.defineProperties(n, {
            TextureTransform: {
                get: function() {
                    return r("The TextureTransform class has been renamed to TextureMatrix, please use PIXI.TextureMatrix from now on."), t.TextureMatrix
                }
            }
        }), t.DisplayObject.prototype.generateTexture = function(t, e, i) {
            return r("generateTexture has moved to the renderer, please use renderer.generateTexture(displayObject)"), t.generateTexture(this, e, i)
        }, t.Graphics.prototype.generateTexture = function(t, e) {
            return r("graphics generate texture has moved to the renderer. Or to render a graphics to a texture using canvas please use generateCanvasTexture"), this.generateCanvasTexture(t, e)
        }, t.GroupD8.isSwapWidthHeight = function(e) {
            return r("GroupD8.isSwapWidthHeight was renamed to GroupD8.isVertical"), t.GroupD8.isVertical(e)
        }, t.RenderTexture.prototype.render = function(t, e, i, n) {
            this.legacyRenderer.render(t, this, i, e, !n), r("RenderTexture.render is now deprecated, please use renderer.render(displayObject, renderTexture)")
        }, t.RenderTexture.prototype.getImage = function(t) {
            return r("RenderTexture.getImage is now deprecated, please use renderer.extract.image(target)"), this.legacyRenderer.extract.image(t)
        }, t.RenderTexture.prototype.getBase64 = function(t) {
            return r("RenderTexture.getBase64 is now deprecated, please use renderer.extract.base64(target)"), this.legacyRenderer.extract.base64(t)
        }, t.RenderTexture.prototype.getCanvas = function(t) {
            return r("RenderTexture.getCanvas is now deprecated, please use renderer.extract.canvas(target)"), this.legacyRenderer.extract.canvas(t)
        }, t.RenderTexture.prototype.getPixels = function(t) {
            return r("RenderTexture.getPixels is now deprecated, please use renderer.extract.pixels(target)"), this.legacyRenderer.pixels(t)
        }, t.Sprite.prototype.setTexture = function(t) {
            this.texture = t, r("setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;")
        }, n.BitmapText && (n.BitmapText.prototype.setText = function(t) {
            this.text = t, r("setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';")
        }), t.Text.prototype.setText = function(t) {
            this.text = t, r("setText is now deprecated, please use the text property, e.g : myText.text = 'my text';")
        }, t.Text.calculateFontProperties = function(e) {
            return r("Text.calculateFontProperties is now deprecated, please use the TextMetrics.measureFont"), t.TextMetrics.measureFont(e)
        }, Object.defineProperties(t.Text, {
            fontPropertiesCache: {
                get: function() {
                    return r("Text.fontPropertiesCache is deprecated"), t.TextMetrics._fonts
                }
            },
            fontPropertiesCanvas: {
                get: function() {
                    return r("Text.fontPropertiesCanvas is deprecated"), t.TextMetrics._canvas
                }
            },
            fontPropertiesContext: {
                get: function() {
                    return r("Text.fontPropertiesContext is deprecated"), t.TextMetrics._context
                }
            }
        }), t.Text.prototype.setStyle = function(t) {
            this.style = t, r("setStyle is now deprecated, please use the style property, e.g : myText.style = style;")
        }, t.Text.prototype.determineFontProperties = function(e) {
            return r("determineFontProperties is now deprecated, please use TextMetrics.measureFont method"), t.TextMetrics.measureFont(e)
        }, t.Text.getFontStyle = function(e) {
            return r("getFontStyle is now deprecated, please use TextStyle.toFontString() instead"), e = e || {}, e instanceof t.TextStyle || (e = new t.TextStyle(e)), e.toFontString()
        }, Object.defineProperties(t.TextStyle.prototype, {
            font: {
                get: function() {
                    r("text style property 'font' is now deprecated, please use the 'fontFamily', 'fontSize', 'fontStyle', 'fontVariant' and 'fontWeight' properties from now on");
                    var t = "number" == typeof this._fontSize ? this._fontSize + "px" : this._fontSize;
                    return this._fontStyle + " " + this._fontVariant + " " + this._fontWeight + " " + t + " " + this._fontFamily
                },
                set: function(t) {
                    r("text style property 'font' is now deprecated, please use the 'fontFamily','fontSize',fontStyle','fontVariant' and 'fontWeight' properties from now on"), t.indexOf("italic") > 1 ? this._fontStyle = "italic" : t.indexOf("oblique") > -1 ? this._fontStyle = "oblique" : this._fontStyle = "normal", t.indexOf("small-caps") > -1 ? this._fontVariant = "small-caps" : this._fontVariant = "normal";
                    var e = t.split(" "),
                        i = -1;
                    this._fontSize = 26;
                    for (var n = 0; n < e.length; ++n)
                        if (e[n].match(/(px|pt|em|%)/)) {
                            i = n, this._fontSize = e[n];
                            break
                        }
                    this._fontWeight = "normal";
                    for (var o = 0; o < i; ++o)
                        if (e[o].match(/(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)/)) {
                            this._fontWeight = e[o];
                            break
                        }
                    if (i > -1 && i < e.length - 1) {
                        this._fontFamily = "";
                        for (var s = i + 1; s < e.length; ++s) this._fontFamily += e[s] + " ";
                        this._fontFamily = this._fontFamily.slice(0, -1)
                    } else this._fontFamily = "Arial";
                    this.styleID++
                }
            }
        }), t.Texture.prototype.setFrame = function(t) {
            this.frame = t, r("setFrame is now deprecated, please use the frame property, e.g: myTexture.frame = frame;")
        }, t.Texture.addTextureToCache = function(e, i) {
            t.Texture.addToCache(e, i), r("Texture.addTextureToCache is deprecated, please use Texture.addToCache from now on.")
        }, t.Texture.removeTextureFromCache = function(e) {
            return r("Texture.removeTextureFromCache is deprecated, please use Texture.removeFromCache from now on. Be aware that Texture.removeFromCache does not automatically its BaseTexture from the BaseTextureCache. For that, use BaseTexture.removeFromCache"), t.BaseTexture.removeFromCache(e), t.Texture.removeFromCache(e)
        }, Object.defineProperties(o, {
            AbstractFilter: {
                get: function() {
                    return r("AstractFilter has been renamed to Filter, please use PIXI.Filter"), t.AbstractFilter
                }
            },
            SpriteMaskFilter: {
                get: function() {
                    return r("filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on."), t.SpriteMaskFilter
                }
            },
            VoidFilter: {
                get: function() {
                    return r("VoidFilter has been renamed to AlphaFilter, please use PIXI.filters.AlphaFilter"), o.AlphaFilter
                }
            }
        }), t.utils.uuid = function() {
            return r("utils.uuid() is deprecated, please use utils.uid() from now on."), t.utils.uid()
        }, t.utils.canUseNewCanvasBlendModes = function() {
            return r("utils.canUseNewCanvasBlendModes() is deprecated, please use CanvasTinter.canUseMultiply from now on"), t.CanvasTinter.canUseMultiply
        };
        var c = !0;
        if (Object.defineProperty(t.utils, "_saidHello", {
                set: function(t) {
                    t && (r("PIXI.utils._saidHello is deprecated, please use PIXI.utils.skipHello()"), this.skipHello()), c = t
                },
                get: function() {
                    return c
                }
            }), s.BasePrepare && (s.BasePrepare.prototype.register = function(t, e) {
                return r("renderer.plugins.prepare.register is now deprecated, please use renderer.plugins.prepare.registerFindHook & renderer.plugins.prepare.registerUploadHook"), t && this.registerFindHook(t), e && this.registerUploadHook(e), this
            }), s.canvas && Object.defineProperty(s.canvas, "UPLOADS_PER_FRAME", {
                set: function() {
                    r("PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer")
                },
                get: function() {
                    return r("PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter"), NaN
                }
            }), s.webgl && Object.defineProperty(s.webgl, "UPLOADS_PER_FRAME", {
                set: function() {
                    r("PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer")
                },
                get: function() {
                    return r("PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter"), NaN
                }
            }), a.Loader) {
            var f = a.Resource,
                d = a.Loader;
            Object.defineProperties(f.prototype, {
                isJson: {
                    get: function() {
                        return r("The isJson property is deprecated, please use `resource.type === Resource.TYPE.JSON`."), this.type === f.TYPE.JSON
                    }
                },
                isXml: {
                    get: function() {
                        return r("The isXml property is deprecated, please use `resource.type === Resource.TYPE.XML`."), this.type === f.TYPE.XML
                    }
                },
                isImage: {
                    get: function() {
                        return r("The isImage property is deprecated, please use `resource.type === Resource.TYPE.IMAGE`."), this.type === f.TYPE.IMAGE
                    }
                },
                isAudio: {
                    get: function() {
                        return r("The isAudio property is deprecated, please use `resource.type === Resource.TYPE.AUDIO`."), this.type === f.TYPE.AUDIO
                    }
                },
                isVideo: {
                    get: function() {
                        return r("The isVideo property is deprecated, please use `resource.type === Resource.TYPE.VIDEO`."), this.type === f.TYPE.VIDEO
                    }
                }
            }), Object.defineProperties(d.prototype, {
                before: {
                    get: function() {
                        return r("The before() method is deprecated, please use pre()."), this.pre
                    }
                },
                after: {
                    get: function() {
                        return r("The after() method is deprecated, please use use()."), this.use
                    }
                }
            })
        }
        h.interactiveTarget && Object.defineProperty(h.interactiveTarget, "defaultCursor", {
            set: function(t) {
                r("Property defaultCursor has been replaced with 'cursor'. "), this.cursor = t
            },
            get: function() {
                return r("Property defaultCursor has been replaced with 'cursor'. "), this.cursor
            }
        }), h.InteractionManager && (Object.defineProperty(h.InteractionManager, "defaultCursorStyle", {
            set: function(t) {
                r("Property defaultCursorStyle has been replaced with 'cursorStyles.default'. "), this.cursorStyles.default = t
            },
            get: function() {
                return r("Property defaultCursorStyle has been replaced with 'cursorStyles.default'. "), this.cursorStyles.default
            }
        }), Object.defineProperty(h.InteractionManager, "currentCursorStyle", {
            set: function(t) {
                r("Property currentCursorStyle has been removed.See the currentCursorMode property, which works differently."), this.currentCursorMode = t
            },
            get: function() {
                return r("Property currentCursorStyle has been removed.See the currentCursorMode property, which works differently."), this.currentCursorMode
            }
        }))
    }
    e.__esModule = !0, e.default = n;
    var o = {}
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = i(1),
        o = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(n),
        s = new o.Rectangle,
        a = function() {
            function t(e) {
                r(this, t), this.renderer = e, e.extract = this
            }
            return t.prototype.image = function(t) {
                var e = new Image;
                return e.src = this.base64(t), e
            }, t.prototype.base64 = function(t) {
                return this.canvas(t).toDataURL()
            }, t.prototype.canvas = function(t) {
                var e = this.renderer,
                    i = void 0,
                    r = void 0,
                    n = void 0,
                    a = void 0;
                t && (a = t instanceof o.RenderTexture ? t : e.generateTexture(t)), a ? (i = a.baseTexture._canvasRenderTarget.context, r = a.baseTexture._canvasRenderTarget.resolution, n = a.frame) : (i = e.rootContext, r = e.resolution, n = s, n.width = this.renderer.width, n.height = this.renderer.height);
                var h = n.width * r,
                    u = n.height * r,
                    l = new o.CanvasRenderTarget(h, u, 1),
                    c = i.getImageData(n.x * r, n.y * r, h, u);
                return l.context.putImageData(c, 0, 0), l.canvas
            }, t.prototype.pixels = function(t) {
                var e = this.renderer,
                    i = void 0,
                    r = void 0,
                    n = void 0,
                    a = void 0;
                return t && (a = t instanceof o.RenderTexture ? t : e.generateTexture(t)), a ? (i = a.baseTexture._canvasRenderTarget.context, r = a.baseTexture._canvasRenderTarget.resolution, n = a.frame) : (i = e.rootContext, n = s, n.width = e.width, n.height = e.height), i.getImageData(0, 0, n.width * r, n.height * r).data
            }, t.prototype.destroy = function() {
                this.renderer.extract = null, this.renderer = null
            }, t
        }();
    e.default = a, o.CanvasRenderer.registerPlugin("extract", a)
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var n = i(166);
    Object.defineProperty(e, "webgl", {
        enumerable: !0,
        get: function() {
            return r(n).default
        }
    });
    var o = i(164);
    Object.defineProperty(e, "canvas", {
        enumerable: !0,
        get: function() {
            return r(o).default
        }
    })
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = i(1),
        o = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(n),
        s = new o.Rectangle,
        a = function() {
            function t(e) {
                r(this, t), this.renderer = e, e.extract = this
            }
            return t.prototype.image = function(t) {
                var e = new Image;
                return e.src = this.base64(t), e
            }, t.prototype.base64 = function(t) {
                return this.canvas(t).toDataURL()
            }, t.prototype.canvas = function(t) {
                var e = this.renderer,
                    i = void 0,
                    r = void 0,
                    n = void 0,
                    a = !1,
                    h = void 0,
                    u = !1;
                t && (t instanceof o.RenderTexture ? h = t : (h = this.renderer.generateTexture(t), u = !0)), h ? (i = h.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID], r = i.resolution, n = h.frame, a = !1) : (i = this.renderer.rootRenderTarget, r = i.resolution, a = !0, n = s, n.width = i.size.width, n.height = i.size.height);
                var l = n.width * r,
                    c = n.height * r,
                    f = new o.CanvasRenderTarget(l, c, 1);
                if (i) {
                    e.bindRenderTarget(i);
                    var d = new Uint8Array(4 * l * c),
                        p = e.gl;
                    p.readPixels(n.x * r, n.y * r, l, c, p.RGBA, p.UNSIGNED_BYTE, d);
                    var _ = f.context.getImageData(0, 0, l, c);
                    _.data.set(d), f.context.putImageData(_, 0, 0), a && (f.context.scale(1, -1), f.context.drawImage(f.canvas, 0, -c))
                }
                return u && h.destroy(!0), f.canvas
            }, t.prototype.pixels = function(t) {
                var e = this.renderer,
                    i = void 0,
                    r = void 0,
                    n = void 0,
                    a = void 0,
                    h = !1;
                t && (t instanceof o.RenderTexture ? a = t : (a = this.renderer.generateTexture(t), h = !0)), a ? (i = a.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID], r = i.resolution, n = a.frame) : (i = this.renderer.rootRenderTarget, r = i.resolution, n = s, n.width = i.size.width, n.height = i.size.height);
                var u = n.width * r,
                    l = n.height * r,
                    c = new Uint8Array(4 * u * l);
                if (i) {
                    e.bindRenderTarget(i);
                    var f = e.gl;
                    f.readPixels(n.x * r, n.y * r, u, l, f.RGBA, f.UNSIGNED_BYTE, c)
                }
                return h && a.destroy(!0), c
            }, t.prototype.destroy = function() {
                this.renderer.extract = null, this.renderer = null
            }, t
        }();
    e.default = a, o.WebGLRenderer.registerPlugin("extract", a)
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        a = i(1),
        h = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(a),
        u = function(t) {
            function e(i, o) {
                r(this, e);
                var s = n(this, t.call(this, i[0] instanceof h.Texture ? i[0] : i[0].texture));
                return s._textures = null, s._durations = null, s.textures = i, s._autoUpdate = !1 !== o, s.animationSpeed = 1, s.loop = !0, s.updateAnchor = !1, s.onComplete = null, s.onFrameChange = null, s.onLoop = null, s._currentTime = 0, s.playing = !1, s
            }
            return o(e, t), e.prototype.stop = function() {
                this.playing && (this.playing = !1, this._autoUpdate && h.ticker.shared.remove(this.update, this))
            }, e.prototype.play = function() {
                this.playing || (this.playing = !0, this._autoUpdate && h.ticker.shared.add(this.update, this, h.UPDATE_PRIORITY.HIGH))
            }, e.prototype.gotoAndStop = function(t) {
                this.stop();
                var e = this.currentFrame;
                this._currentTime = t, e !== this.currentFrame && this.updateTexture()
            }, e.prototype.gotoAndPlay = function(t) {
                var e = this.currentFrame;
                this._currentTime = t, e !== this.currentFrame && this.updateTexture(), this.play()
            }, e.prototype.update = function(t) {
                var e = this.animationSpeed * t,
                    i = this.currentFrame;
                if (null !== this._durations) {
                    var r = this._currentTime % 1 * this._durations[this.currentFrame];
                    for (r += e / 60 * 1e3; r < 0;) this._currentTime--, r += this._durations[this.currentFrame];
                    var n = Math.sign(this.animationSpeed * t);
                    for (this._currentTime = Math.floor(this._currentTime); r >= this._durations[this.currentFrame];) r -= this._durations[this.currentFrame] * n, this._currentTime += n;
                    this._currentTime += r / this._durations[this.currentFrame]
                } else this._currentTime += e;
                this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : i !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < i ? this.onLoop() : this.animationSpeed < 0 && this.currentFrame > i && this.onLoop()), this.updateTexture())
            }, e.prototype.updateTexture = function() {
                this._texture = this._textures[this.currentFrame], this._textureID = -1, this.cachedTint = 16777215, this.updateAnchor && this._anchor.copy(this._texture.defaultAnchor), this.onFrameChange && this.onFrameChange(this.currentFrame)
            }, e.prototype.destroy = function(e) {
                this.stop(), t.prototype.destroy.call(this, e)
            }, e.fromFrames = function(t) {
                for (var i = [], r = 0; r < t.length; ++r) i.push(h.Texture.fromFrame(t[r]));
                return new e(i)
            }, e.fromImages = function(t) {
                for (var i = [], r = 0; r < t.length; ++r) i.push(h.Texture.fromImage(t[r]));
                return new e(i)
            }, s(e, [{
                key: "totalFrames",
                get: function() {
                    return this._textures.length
                }
            }, {
                key: "textures",
                get: function() {
                    return this._textures
                },
                set: function(t) {
                    if (t[0] instanceof h.Texture) this._textures = t, this._durations = null;
                    else {
                        this._textures = [], this._durations = [];
                        for (var e = 0; e < t.length; e++) this._textures.push(t[e].texture), this._durations.push(t[e].time)
                    }
                    this.gotoAndStop(0), this.updateTexture()
                }
            }, {
                key: "currentFrame",
                get: function() {
                    var t = Math.floor(this._currentTime) % this._textures.length;
                    return t < 0 && (t += this._textures.length), t
                }
            }]), e
        }(h.Sprite);
    e.default = u
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        h = i(1),
        u = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(h),
        l = i(71),
        c = r(l),
        f = i(2),
        d = i(3),
        p = r(d),
        _ = function(t) {
            function e(i) {
                var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                n(this, e);
                var s = o(this, t.call(this));
                return s._textWidth = 0, s._textHeight = 0, s._glyphs = [], s._font = {
                    tint: void 0 !== r.tint ? r.tint : 16777215,
                    align: r.align || "left",
                    name: null,
                    size: 0
                }, s.font = r.font, s._text = i, s._maxWidth = 0, s._maxLineHeight = 0, s._letterSpacing = 0, s._anchor = new c.default(function() {
                    s.dirty = !0
                }, s, 0, 0), s.dirty = !1, s.updateText(), s
            }
            return s(e, t), e.prototype.updateText = function() {
                for (var t = e.fonts[this._font.name], i = this._font.size / t.size, r = new u.Point, n = [], o = [], s = this.text.replace(/(?:\r\n|\r)/g, "\n"), a = s.length, h = this._maxWidth * t.size / this._font.size, l = null, c = 0, f = 0, d = 0, p = -1, _ = 0, v = 0, m = 0, g = 0; g < a; g++) {
                    var y = s.charCodeAt(g),
                        x = s.charAt(g);
                    if (/(?:\s)/.test(x) && (p = g, _ = c), "\r" !== x && "\n" !== x) {
                        var b = t.chars[y];
                        b && (l && b.kerning[l] && (r.x += b.kerning[l]), n.push({
                            texture: b.texture,
                            line: d,
                            charCode: y,
                            position: new u.Point(r.x + b.xOffset + this._letterSpacing / 2, r.y + b.yOffset)
                        }), r.x += b.xAdvance + this._letterSpacing, c = r.x, m = Math.max(m, b.yOffset + b.texture.height), l = y, -1 !== p && h > 0 && r.x > h && (++v, u.utils.removeItems(n, 1 + p - v, 1 + g - p), g = p, p = -1, o.push(_), f = Math.max(f, _), d++, r.x = 0, r.y += t.lineHeight, l = null))
                    } else o.push(c), f = Math.max(f, c), ++d, ++v, r.x = 0, r.y += t.lineHeight, l = null
                }
                var T = s.charAt(s.length - 1);
                "\r" !== T && "\n" !== T && (/(?:\s)/.test(T) && (c = _), o.push(c), f = Math.max(f, c));
                for (var w = [], E = 0; E <= d; E++) {
                    var S = 0;
                    "right" === this._font.align ? S = f - o[E] : "center" === this._font.align && (S = (f - o[E]) / 2), w.push(S)
                }
                for (var P = n.length, O = this.tint, M = 0; M < P; M++) {
                    var C = this._glyphs[M];
                    C ? C.texture = n[M].texture : (C = new u.Sprite(n[M].texture), this._glyphs.push(C)), C.position.x = (n[M].position.x + w[n[M].line]) * i, C.position.y = n[M].position.y * i, C.scale.x = C.scale.y = i, C.tint = O, C.parent || this.addChild(C)
                }
                for (var R = P; R < this._glyphs.length; ++R) this.removeChild(this._glyphs[R]);
                if (this._textWidth = f * i, this._textHeight = (r.y + t.lineHeight) * i, 0 !== this.anchor.x || 0 !== this.anchor.y)
                    for (var A = 0; A < P; A++) this._glyphs[A].x -= this._textWidth * this.anchor.x, this._glyphs[A].y -= this._textHeight * this.anchor.y;
                this._maxLineHeight = m * i
            }, e.prototype.updateTransform = function() {
                this.validate(), this.containerUpdateTransform()
            }, e.prototype.getLocalBounds = function() {
                return this.validate(), t.prototype.getLocalBounds.call(this)
            }, e.prototype.validate = function() {
                this.dirty && (this.updateText(), this.dirty = !1)
            }, e.registerFont = function(t, i) {
                var r = {},
                    n = t.getElementsByTagName("info")[0],
                    o = t.getElementsByTagName("common")[0],
                    s = t.getElementsByTagName("page"),
                    a = (0, f.getResolutionOfUrl)(s[0].getAttribute("file"), p.default.RESOLUTION),
                    h = {};
                r.font = n.getAttribute("face"), r.size = parseInt(n.getAttribute("size"), 10), r.lineHeight = parseInt(o.getAttribute("lineHeight"), 10) / a, r.chars = {}, i instanceof u.Texture && (i = [i]);
                for (var l = 0; l < s.length; l++) {
                    var c = s[l].getAttribute("id"),
                        d = s[l].getAttribute("file");
                    h[c] = i instanceof Array ? i[l] : i[d]
                }
                for (var _ = t.getElementsByTagName("char"), v = 0; v < _.length; v++) {
                    var m = _[v],
                        g = parseInt(m.getAttribute("id"), 10),
                        y = m.getAttribute("page") || 0,
                        x = new u.Rectangle(parseInt(m.getAttribute("x"), 10) / a + h[y].frame.x / a, parseInt(m.getAttribute("y"), 10) / a + h[y].frame.y / a, parseInt(m.getAttribute("width"), 10) / a, parseInt(m.getAttribute("height"), 10) / a);
                    r.chars[g] = {
                        xOffset: parseInt(m.getAttribute("xoffset"), 10) / a,
                        yOffset: parseInt(m.getAttribute("yoffset"), 10) / a,
                        xAdvance: parseInt(m.getAttribute("xadvance"), 10) / a,
                        kerning: {},
                        texture: new u.Texture(h[y].baseTexture, x),
                        page: y
                    }
                }
                for (var b = t.getElementsByTagName("kerning"), T = 0; T < b.length; T++) {
                    var w = b[T],
                        E = parseInt(w.getAttribute("first"), 10) / a,
                        S = parseInt(w.getAttribute("second"), 10) / a,
                        P = parseInt(w.getAttribute("amount"), 10) / a;
                    r.chars[S] && (r.chars[S].kerning[E] = P)
                }
                return e.fonts[r.font] = r, r
            }, a(e, [{
                key: "tint",
                get: function() {
                    return this._font.tint
                },
                set: function(t) {
                    this._font.tint = "number" == typeof t && t >= 0 ? t : 16777215, this.dirty = !0
                }
            }, {
                key: "align",
                get: function() {
                    return this._font.align
                },
                set: function(t) {
                    this._font.align = t || "left", this.dirty = !0
                }
            }, {
                key: "anchor",
                get: function() {
                    return this._anchor
                },
                set: function(t) {
                    "number" == typeof t ? this._anchor.set(t) : this._anchor.copy(t)
                }
            }, {
                key: "font",
                get: function() {
                    return this._font
                },
                set: function(t) {
                    t && ("string" == typeof t ? (t = t.split(" "), this._font.name = 1 === t.length ? t[0] : t.slice(1).join(" "), this._font.size = t.length >= 2 ? parseInt(t[0], 10) : e.fonts[this._font.name].size) : (this._font.name = t.name, this._font.size = "number" == typeof t.size ? t.size : parseInt(t.size, 10)), this.dirty = !0)
                }
            }, {
                key: "text",
                get: function() {
                    return this._text
                },
                set: function(t) {
                    t = t.toString() || " ", this._text !== t && (this._text = t, this.dirty = !0)
                }
            }, {
                key: "maxWidth",
                get: function() {
                    return this._maxWidth
                },
                set: function(t) {
                    this._maxWidth !== t && (this._maxWidth = t, this.dirty = !0)
                }
            }, {
                key: "maxLineHeight",
                get: function() {
                    return this.validate(), this._maxLineHeight
                }
            }, {
                key: "textWidth",
                get: function() {
                    return this.validate(), this._textWidth
                }
            }, {
                key: "letterSpacing",
                get: function() {
                    return this._letterSpacing
                },
                set: function(t) {
                    this._letterSpacing !== t && (this._letterSpacing = t, this.dirty = !0)
                }
            }, {
                key: "textHeight",
                get: function() {
                    return this.validate(), this._textHeight
                }
            }]), e
        }(u.Container);
    e.default = _, _.fonts = {}
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        a = i(1),
        h = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(a),
        u = i(28),
        l = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(u),
        c = new h.Point,
        f = function(t) {
            function e(i) {
                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100,
                    s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                r(this, e);
                var a = n(this, t.call(this, i));
                return a.tileTransform = new h.TransformStatic, a._width = o, a._height = s, a._canvasPattern = null, a.uvTransform = i.transform || new h.TextureMatrix(i), a.pluginName = "tilingSprite", a.uvRespectAnchor = !1, a
            }
            return o(e, t), e.prototype._onTextureUpdate = function() {
                this.uvTransform && (this.uvTransform.texture = this._texture), this.cachedTint = 16777215
            }, e.prototype._renderWebGL = function(t) {
                var e = this._texture;
                e && e.valid && (this.tileTransform.updateLocalTransform(), this.uvTransform.update(), t.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this))
            }, e.prototype._renderCanvas = function(t) {
                var e = this._texture;
                if (e.baseTexture.hasLoaded) {
                    var i = t.context,
                        r = this.worldTransform,
                        n = t.resolution,
                        o = 2 === e.rotate,
                        s = e.baseTexture,
                        a = s.resolution,
                        u = this.tilePosition.x / this.tileScale.x % e.orig.width * a,
                        c = this.tilePosition.y / this.tileScale.y % e.orig.height * a;
                    if (this._textureID !== this._texture._updateID || this.cachedTint !== this.tint) {
                        this._textureID = this._texture._updateID;
                        var f = new h.CanvasRenderTarget(e.orig.width, e.orig.height, a);
                        if (16777215 !== this.tint) this.tintedTexture = l.default.getTintedTexture(this, this.tint), f.context.drawImage(this.tintedTexture, 0, 0);
                        else {
                            var d = e._frame.x * a,
                                p = e._frame.y * a,
                                _ = e._frame.width * a,
                                v = e._frame.height * a,
                                m = (e.trim ? e.trim.width : e.orig.width) * a,
                                g = (e.trim ? e.trim.height : e.orig.height) * a,
                                y = (e.trim ? e.trim.x : 0) * a,
                                x = (e.trim ? e.trim.y : 0) * a;
                            o ? (f.context.rotate(-Math.PI / 2), f.context.translate(-g, 0), f.context.drawImage(s.source, d, p, _, v, -x, y, g, m)) : f.context.drawImage(s.source, d, p, _, v, y, x, m, g)
                        }
                        this.cachedTint = this.tint, this._canvasPattern = f.context.createPattern(f.canvas, "repeat")
                    }
                    i.globalAlpha = this.worldAlpha, i.setTransform(r.a * n, r.b * n, r.c * n, r.d * n, r.tx * n, r.ty * n), t.setBlendMode(this.blendMode), i.fillStyle = this._canvasPattern, i.scale(this.tileScale.x / a, this.tileScale.y / a);
                    var b = this.anchor.x * -this._width * a,
                        T = this.anchor.y * -this._height * a;
                    this.uvRespectAnchor ? (i.translate(u, c), i.fillRect(-u + b, -c + T, this._width / this.tileScale.x * a, this._height / this.tileScale.y * a)) : (i.translate(u + b, c + T), i.fillRect(-u, -c, this._width / this.tileScale.x * a, this._height / this.tileScale.y * a))
                }
            }, e.prototype._calculateBounds = function() {
                var t = this._width * -this._anchor._x,
                    e = this._height * -this._anchor._y,
                    i = this._width * (1 - this._anchor._x),
                    r = this._height * (1 - this._anchor._y);
                this._bounds.addFrame(this.transform, t, e, i, r)
            }, e.prototype.getLocalBounds = function(e) {
                return 0 === this.children.length ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._y), e || (this._localBoundsRect || (this._localBoundsRect = new h.Rectangle), e = this._localBoundsRect), this._bounds.getRectangle(e)) : t.prototype.getLocalBounds.call(this, e)
            }, e.prototype.containsPoint = function(t) {
                this.worldTransform.applyInverse(t, c);
                var e = this._width,
                    i = this._height,
                    r = -e * this.anchor._x;
                if (c.x >= r && c.x < r + e) {
                    var n = -i * this.anchor._y;
                    if (c.y >= n && c.y < n + i) return !0
                }
                return !1
            }, e.prototype.destroy = function(e) {
                t.prototype.destroy.call(this, e), this.tileTransform = null, this.uvTransform = null
            }, e.from = function(t, i, r) {
                return new e(h.Texture.from(t), i, r)
            }, e.fromFrame = function(t, i, r) {
                var n = h.utils.TextureCache[t];
                if (!n) throw new Error('The frameId "' + t + '" does not exist in the texture cache ' + this);
                return new e(n, i, r)
            }, e.fromImage = function(t, i, r, n, o) {
                return new e(h.Texture.fromImage(t, n, o), i, r)
            }, s(e, [{
                key: "clampMargin",
                get: function() {
                    return this.uvTransform.clampMargin
                },
                set: function(t) {
                    this.uvTransform.clampMargin = t, this.uvTransform.update(!0)
                }
            }, {
                key: "tileScale",
                get: function() {
                    return this.tileTransform.scale
                },
                set: function(t) {
                    this.tileTransform.scale.copy(t)
                }
            }, {
                key: "tilePosition",
                get: function() {
                    return this.tileTransform.position
                },
                set: function(t) {
                    this.tileTransform.position.copy(t)
                }
            }, {
                key: "width",
                get: function() {
                    return this._width
                },
                set: function(t) {
                    this._width = t
                }
            }, {
                key: "height",
                get: function() {
                    return this._height
                },
                set: function(t) {
                    this._height = t
                }
            }]), e
        }(h.Sprite);
    e.default = f
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    var o = i(1),
        s = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(o),
        a = i(9),
        h = r(a),
        u = i(13),
        l = r(u),
        c = i(2),
        f = s.DisplayObject,
        d = new s.Matrix;
    f.prototype._cacheAsBitmap = !1, f.prototype._cacheData = !1;
    var p = function t() {
        n(this, t), this.textureCacheId = null, this.originalRenderWebGL = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalHitTest = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.sprite = null
    };
    Object.defineProperties(f.prototype, {
        cacheAsBitmap: {
            get: function() {
                return this._cacheAsBitmap
            },
            set: function(t) {
                if (this._cacheAsBitmap !== t) {
                    this._cacheAsBitmap = t;
                    var e = void 0;
                    t ? (this._cacheData || (this._cacheData = new p), e = this._cacheData, e.originalRenderWebGL = this.renderWebGL, e.originalRenderCanvas = this.renderCanvas, e.originalUpdateTransform = this.updateTransform, e.originalCalculateBounds = this.calculateBounds, e.originalGetLocalBounds = this.getLocalBounds, e.originalDestroy = this.destroy, e.originalContainsPoint = this.containsPoint, e.originalMask = this._mask, e.originalFilterArea = this.filterArea, this.renderWebGL = this._renderCachedWebGL, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (e = this._cacheData, e.sprite && this._destroyCachedDisplayObject(), this.renderWebGL = e.originalRenderWebGL, this.renderCanvas = e.originalRenderCanvas, this.calculateBounds = e.originalCalculateBounds, this.getLocalBounds = e.originalGetLocalBounds, this.destroy = e.originalDestroy, this.updateTransform = e.originalUpdateTransform, this.containsPoint = e.originalContainsPoint, this._mask = e.originalMask, this.filterArea = e.originalFilterArea)
                }
            }
        }
    }), f.prototype._renderCachedWebGL = function(t) {
        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(t), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderWebGL(t))
    }, f.prototype._initCachedDisplayObject = function(t) {
        if (!this._cacheData || !this._cacheData.sprite) {
            var e = this.alpha;
            this.alpha = 1, t.currentRenderer.flush();
            var i = this.getLocalBounds().clone();
            if (this._filters && this._filters.length) {
                var r = this._filters[0].padding;
                i.pad(r)
            }
            i.ceil(s.settings.RESOLUTION);
            var n = t._activeRenderTarget,
                o = t.filterManager.filterStack,
                a = s.RenderTexture.create(i.width, i.height),
                u = "cacheAsBitmap_" + (0, c.uid)();
            this._cacheData.textureCacheId = u, l.default.addToCache(a.baseTexture, u), h.default.addToCache(a, u);
            var f = d;
            f.tx = -i.x, f.ty = -i.y, this.transform.worldTransform.identity(), this.renderWebGL = this._cacheData.originalRenderWebGL, t.render(this, a, !0, f, !0), t.bindRenderTarget(n), t.filterManager.filterStack = o, this.renderWebGL = this._renderCachedWebGL, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null;
            var p = new s.Sprite(a);
            p.transform.worldTransform = this.transform.worldTransform, p.anchor.x = -i.x / i.width, p.anchor.y = -i.y / i.height, p.alpha = e, p._bounds = this._bounds, this._cacheData.sprite = p, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = p.containsPoint.bind(p)
        }
    }, f.prototype._renderCachedCanvas = function(t) {
        !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(t), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderCanvas(t))
    }, f.prototype._initCachedDisplayObjectCanvas = function(t) {
        if (!this._cacheData || !this._cacheData.sprite) {
            var e = this.getLocalBounds(),
                i = this.alpha;
            this.alpha = 1;
            var r = t.context;
            e.ceil(s.settings.RESOLUTION);
            var n = s.RenderTexture.create(e.width, e.height),
                o = "cacheAsBitmap_" + (0, c.uid)();
            this._cacheData.textureCacheId = o, l.default.addToCache(n.baseTexture, o), h.default.addToCache(n, o);
            var a = d;
            this.transform.localTransform.copy(a), a.invert(), a.tx -= e.x, a.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, t.render(this, n, !0, a, !1), t.context = r, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null;
            var u = new s.Sprite(n);
            u.transform.worldTransform = this.transform.worldTransform, u.anchor.x = -e.x / e.width, u.anchor.y = -e.y / e.height, u.alpha = i, u._bounds = this._bounds, this._cacheData.sprite = u, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = t._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = u.containsPoint.bind(u)
        }
    }, f.prototype._calculateCachedBounds = function() {
        this._bounds.clear(), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite._calculateBounds(), this._lastBoundsID = this._boundsID
    }, f.prototype._getCachedLocalBounds = function() {
        return this._cacheData.sprite.getLocalBounds()
    }, f.prototype._destroyCachedDisplayObject = function() {
        this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, l.default.removeFromCache(this._cacheData.textureCacheId), h.default.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null
    }, f.prototype._cacheAsBitmapDestroy = function(t) {
        this.cacheAsBitmap = !1, this.destroy(t)
    }
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(r);
    n.DisplayObject.prototype.name = null, n.Container.prototype.getChildByName = function(t) {
        for (var e = 0; e < this.children.length; e++)
            if (this.children[e].name === t) return this.children[e];
        return null
    }
}, function(t, e, i) {
    "use strict";
    var r = i(1),
        n = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(r);
    n.DisplayObject.prototype.getGlobalPosition = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new n.Point,
            e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return this.parent ? this.parent.toGlobal(this.position, t, e) : (t.x = this.position.x, t.y = this.position.y), t
    }
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var s = i(1),
        a = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(s),
        h = i(0),
        u = (i(7), new a.Matrix),
        l = function(t) {
            function e(i) {
                r(this, e);
                var o = n(this, t.call(this, i));
                return o.shader = null, o.simpleShader = null, o.quad = null, o
            }
            return o(e, t), e.prototype.onContextChange = function() {
                var t = this.renderer.gl;
                this.shader = new a.Shader(t, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = mod(vTextureCoord - uClampOffset, vec2(1.0, 1.0)) + uClampOffset;\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 sample = texture2D(uSampler, coord);\n    gl_FragColor = sample * uColor;\n}\n"), this.simpleShader = new a.Shader(t, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n"), this.renderer.bindVao(null), this.quad = new a.Quad(t, this.renderer.state.attribState), this.quad.initVao(this.shader)
            }, e.prototype.render = function(t) {
                var e = this.renderer,
                    i = this.quad;
                e.bindVao(i.vao);
                var r = i.vertices;
                r[0] = r[6] = t._width * -t.anchor.x, r[1] = r[3] = t._height * -t.anchor.y, r[2] = r[4] = t._width * (1 - t.anchor.x), r[5] = r[7] = t._height * (1 - t.anchor.y), t.uvRespectAnchor && (r = i.uvs, r[0] = r[6] = -t.anchor.x, r[1] = r[3] = -t.anchor.y, r[2] = r[4] = 1 - t.anchor.x, r[5] = r[7] = 1 - t.anchor.y), i.upload();
                var n = t._texture,
                    o = n.baseTexture,
                    s = t.tileTransform.localTransform,
                    l = t.uvTransform,
                    c = o.isPowerOfTwo && n.frame.width === o.width && n.frame.height === o.height;
                c && (o._glTextures[e.CONTEXT_UID] ? c = o.wrapMode !== h.WRAP_MODES.CLAMP : o.wrapMode === h.WRAP_MODES.CLAMP && (o.wrapMode = h.WRAP_MODES.REPEAT));
                var f = c ? this.simpleShader : this.shader;
                e.bindShader(f);
                var d = n.width,
                    p = n.height,
                    _ = t._width,
                    v = t._height;
                u.set(s.a * d / _, s.b * d / v, s.c * p / _, s.d * p / v, s.tx / _, s.ty / v), u.invert(), c ? u.prepend(l.mapCoord) : (f.uniforms.uMapCoord = l.mapCoord.toArray(!0), f.uniforms.uClampFrame = l.uClampFrame, f.uniforms.uClampOffset = l.uClampOffset), f.uniforms.uTransform = u.toArray(!0), f.uniforms.uColor = a.utils.premultiplyTintToRgba(t.tint, t.worldAlpha, f.uniforms.uColor, o.premultipliedAlpha), f.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), f.uniforms.uSampler = e.bindTexture(n), e.setBlendMode(a.utils.correctBlendMode(t.blendMode, o.premultipliedAlpha)), i.vao.draw(this.renderer.gl.TRIANGLES, 6, 0)
            }, e
        }(a.ObjectRenderer);
    e.default = l, a.WebGLRenderer.registerPlugin("tilingSprite", l)
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        a = i(1),
        h = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(a),
        u = (i(7), function(t) {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                r(this, e);
                var o = n(this, t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n"));
                return o.alpha = i, o.glShaderKey = "alpha", o
            }
            return o(e, t), s(e, [{
                key: "alpha",
                get: function() {
                    return this.uniforms.uAlpha
                },
                set: function(t) {
                    this.uniforms.uAlpha = t
                }
            }]), e
        }(h.Filter));
    e.default = u
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        h = i(1),
        u = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(h),
        l = i(86),
        c = r(l),
        f = i(87),
        d = r(f),
        p = function(t) {
            function e(i, r, s, a) {
                n(this, e);
                var h = o(this, t.call(this));
                return h.blurXFilter = new c.default(i, r, s, a), h.blurYFilter = new d.default(i, r, s, a), h.padding = 0, h.resolution = s || u.settings.RESOLUTION, h.quality = r || 4, h.blur = i || 8, h
            }
            return s(e, t), e.prototype.apply = function(t, e, i) {
                var r = t.getRenderTarget(!0);
                this.blurXFilter.apply(t, e, r, !0), this.blurYFilter.apply(t, r, i, !1), t.returnRenderTarget(r)
            }, a(e, [{
                key: "blur",
                get: function() {
                    return this.blurXFilter.blur
                },
                set: function(t) {
                    this.blurXFilter.blur = this.blurYFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
                }
            }, {
                key: "quality",
                get: function() {
                    return this.blurXFilter.quality
                },
                set: function(t) {
                    this.blurXFilter.quality = this.blurYFilter.quality = t
                }
            }, {
                key: "blurX",
                get: function() {
                    return this.blurXFilter.blur
                },
                set: function(t) {
                    this.blurXFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
                }
            }, {
                key: "blurY",
                get: function() {
                    return this.blurYFilter.blur
                },
                set: function(t) {
                    this.blurYFilter.blur = t, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
                }
            }, {
                key: "blendMode",
                get: function() {
                    return this.blurYFilter._blendMode
                },
                set: function(t) {
                    this.blurYFilter._blendMode = t
                }
            }]), e
        }(u.Filter);
    e.default = p
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        a = i(1),
        h = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(a),
        u = (i(7), function(t) {
            function e() {
                r(this, e);
                var i = n(this, t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n"));
                return i.uniforms.m = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], i.alpha = 1, i
            }
            return o(e, t), e.prototype._loadMatrix = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    i = t;
                e && (this._multiply(i, this.uniforms.m, t), i = this._colorMatrix(i)), this.uniforms.m = i
            }, e.prototype._multiply = function(t, e, i) {
                return t[0] = e[0] * i[0] + e[1] * i[5] + e[2] * i[10] + e[3] * i[15], t[1] = e[0] * i[1] + e[1] * i[6] + e[2] * i[11] + e[3] * i[16], t[2] = e[0] * i[2] + e[1] * i[7] + e[2] * i[12] + e[3] * i[17], t[3] = e[0] * i[3] + e[1] * i[8] + e[2] * i[13] + e[3] * i[18], t[4] = e[0] * i[4] + e[1] * i[9] + e[2] * i[14] + e[3] * i[19] + e[4], t[5] = e[5] * i[0] + e[6] * i[5] + e[7] * i[10] + e[8] * i[15], t[6] = e[5] * i[1] + e[6] * i[6] + e[7] * i[11] + e[8] * i[16], t[7] = e[5] * i[2] + e[6] * i[7] + e[7] * i[12] + e[8] * i[17], t[8] = e[5] * i[3] + e[6] * i[8] + e[7] * i[13] + e[8] * i[18], t[9] = e[5] * i[4] + e[6] * i[9] + e[7] * i[14] + e[8] * i[19] + e[9], t[10] = e[10] * i[0] + e[11] * i[5] + e[12] * i[10] + e[13] * i[15], t[11] = e[10] * i[1] + e[11] * i[6] + e[12] * i[11] + e[13] * i[16], t[12] = e[10] * i[2] + e[11] * i[7] + e[12] * i[12] + e[13] * i[17], t[13] = e[10] * i[3] + e[11] * i[8] + e[12] * i[13] + e[13] * i[18], t[14] = e[10] * i[4] + e[11] * i[9] + e[12] * i[14] + e[13] * i[19] + e[14], t[15] = e[15] * i[0] + e[16] * i[5] + e[17] * i[10] + e[18] * i[15], t[16] = e[15] * i[1] + e[16] * i[6] + e[17] * i[11] + e[18] * i[16], t[17] = e[15] * i[2] + e[16] * i[7] + e[17] * i[12] + e[18] * i[17], t[18] = e[15] * i[3] + e[16] * i[8] + e[17] * i[13] + e[18] * i[18], t[19] = e[15] * i[4] + e[16] * i[9] + e[17] * i[14] + e[18] * i[19] + e[19], t
            }, e.prototype._colorMatrix = function(t) {
                var e = new Float32Array(t);
                return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e
            }, e.prototype.brightness = function(t, e) {
                var i = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, e.prototype.greyscale = function(t, e) {
                var i = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, e.prototype.blackAndWhite = function(t) {
                var e = [.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, e.prototype.hue = function(t, e) {
                t = (t || 0) / 180 * Math.PI;
                var i = Math.cos(t),
                    r = Math.sin(t),
                    n = Math.sqrt,
                    o = 1 / 3,
                    s = n(o),
                    a = i + (1 - i) * o,
                    h = o * (1 - i) - s * r,
                    u = o * (1 - i) + s * r,
                    l = o * (1 - i) + s * r,
                    c = i + o * (1 - i),
                    f = o * (1 - i) - s * r,
                    d = o * (1 - i) - s * r,
                    p = o * (1 - i) + s * r,
                    _ = i + o * (1 - i),
                    v = [a, h, u, 0, 0, l, c, f, 0, 0, d, p, _, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(v, e)
            }, e.prototype.contrast = function(t, e) {
                var i = (t || 0) + 1,
                    r = -.5 * (i - 1),
                    n = [i, 0, 0, 0, r, 0, i, 0, 0, r, 0, 0, i, 0, r, 0, 0, 0, 1, 0];
                this._loadMatrix(n, e)
            }, e.prototype.saturate = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments[1],
                    i = 2 * t / 3 + 1,
                    r = -.5 * (i - 1),
                    n = [i, r, r, 0, 0, r, i, r, 0, 0, r, r, i, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(n, e)
            }, e.prototype.desaturate = function() {
                this.saturate(-1)
            }, e.prototype.negative = function(t) {
                var e = [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, e.prototype.sepia = function(t) {
                var e = [.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, e.prototype.technicolor = function(t) {
                var e = [1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, e.prototype.polaroid = function(t) {
                var e = [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, e.prototype.toBGR = function(t) {
                var e = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, e.prototype.kodachrome = function(t) {
                var e = [1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, e.prototype.browni = function(t) {
                var e = [.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, e.prototype.vintage = function(t) {
                var e = [.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, e.prototype.colorTone = function(t, e, i, r, n) {
                t = t || .2, e = e || .15, i = i || 16770432, r = r || 3375104;
                var o = (i >> 16 & 255) / 255,
                    s = (i >> 8 & 255) / 255,
                    a = (255 & i) / 255,
                    h = (r >> 16 & 255) / 255,
                    u = (r >> 8 & 255) / 255,
                    l = (255 & r) / 255,
                    c = [.3, .59, .11, 0, 0, o, s, a, t, 0, h, u, l, e, 0, o - h, s - u, a - l, 0, 0];
                this._loadMatrix(c, n)
            }, e.prototype.night = function(t, e) {
                t = t || .1;
                var i = [-2 * t, -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, e.prototype.predator = function(t, e) {
                var i = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
                this._loadMatrix(i, e)
            }, e.prototype.lsd = function(t) {
                var e = [2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(e, t)
            }, e.prototype.reset = function() {
                var t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
                this._loadMatrix(t, !1)
            }, s(e, [{
                key: "matrix",
                get: function() {
                    return this.uniforms.m
                },
                set: function(t) {
                    this.uniforms.m = t
                }
            }, {
                key: "alpha",
                get: function() {
                    return this.uniforms.uAlpha
                },
                set: function(t) {
                    this.uniforms.uAlpha = t
                }
            }]), e
        }(h.Filter));
    e.default = u, u.prototype.grayscale = u.prototype.greyscale
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        a = i(1),
        h = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(a),
        u = (i(7), function(t) {
            function e(i, o) {
                r(this, e);
                var s = new h.Matrix;
                i.renderable = !1;
                var a = n(this, t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vTextureCoord = aTextureCoord;\n}", "varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy *= scale / filterArea.xy;\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy, filterClamp.zw));\n}\n"));
                return a.maskSprite = i, a.maskMatrix = s, a.uniforms.mapSampler = i._texture, a.uniforms.filterMatrix = s, a.uniforms.scale = {
                    x: 1,
                    y: 1
                }, null !== o && void 0 !== o || (o = 20), a.scale = new h.Point(o, o), a
            }
            return o(e, t), e.prototype.apply = function(t, e, i) {
                this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y, t.applyFilter(this, e, i)
            }, s(e, [{
                key: "map",
                get: function() {
                    return this.uniforms.mapSampler
                },
                set: function(t) {
                    this.uniforms.mapSampler = t
                }
            }]), e
        }(h.Filter));
    e.default = u
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var s = i(1),
        a = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(s),
        h = (i(7), function(t) {
            function e() {
                return r(this, e), n(this, t.call(this, "\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec4 filterArea;\n\nvarying vec2 vTextureCoord;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n   vTextureCoord = aTextureCoord;\n\n   vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n   texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}", 'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n \n --\n \n From:\n https://github.com/mitsuhiko/webgl-meincraft\n \n Copyright (c) 2011 by Armin Ronacher.\n \n Some rights reserved.\n \n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n \n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n \n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n \n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n \n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n    \n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n      vec4 color;\n\n    color = fxaa(uSampler, fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n'))
            }
            return o(e, t), e
        }(a.Filter));
    e.default = h
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var n = i(178);
    Object.defineProperty(e, "FXAAFilter", {
        enumerable: !0,
        get: function() {
            return r(n).default
        }
    });
    var o = i(180);
    Object.defineProperty(e, "NoiseFilter", {
        enumerable: !0,
        get: function() {
            return r(o).default
        }
    });
    var s = i(177);
    Object.defineProperty(e, "DisplacementFilter", {
        enumerable: !0,
        get: function() {
            return r(s).default
        }
    });
    var a = i(175);
    Object.defineProperty(e, "BlurFilter", {
        enumerable: !0,
        get: function() {
            return r(a).default
        }
    });
    var h = i(86);
    Object.defineProperty(e, "BlurXFilter", {
        enumerable: !0,
        get: function() {
            return r(h).default
        }
    });
    var u = i(87);
    Object.defineProperty(e, "BlurYFilter", {
        enumerable: !0,
        get: function() {
            return r(u).default
        }
    });
    var l = i(176);
    Object.defineProperty(e, "ColorMatrixFilter", {
        enumerable: !0,
        get: function() {
            return r(l).default
        }
    });
    var c = i(174);
    Object.defineProperty(e, "AlphaFilter", {
        enumerable: !0,
        get: function() {
            return r(c).default
        }
    })
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        a = i(1),
        h = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(a),
        u = (i(7), function(t) {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : .5,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random();
                r(this, e);
                var s = n(this, t.call(this, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}", "precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n"));
                return s.noise = i, s.seed = o, s
            }
            return o(e, t), s(e, [{
                key: "noise",
                get: function() {
                    return this.uniforms.uNoise
                },
                set: function(t) {
                    this.uniforms.uNoise = t
                }
            }, {
                key: "seed",
                get: function() {
                    return this.uniforms.uSeed
                },
                set: function(t) {
                    this.uniforms.uSeed = t
                }
            }]), e
        }(h.Filter));
    e.default = u
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        h = i(1),
        u = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(h),
        l = i(91),
        c = r(l),
        f = i(92),
        d = r(f),
        p = i(93),
        _ = r(p),
        v = i(12),
        m = r(v),
        g = i(94),
        y = r(g);
    u.utils.mixins.delayMixin(u.DisplayObject.prototype, y.default);
    var x = 1,
        b = {
            target: null,
            data: {
                global: null
            }
        },
        T = function(t) {
            function e(i, r) {
                n(this, e);
                var s = o(this, t.call(this));
                return r = r || {}, s.renderer = i, s.autoPreventDefault = void 0 === r.autoPreventDefault || r.autoPreventDefault, s.interactionFrequency = r.interactionFrequency || 10, s.mouse = new c.default, s.mouse.identifier = x, s.mouse.global.set(-999999), s.activeInteractionData = {}, s.activeInteractionData[x] = s.mouse, s.interactionDataPool = [], s.eventData = new d.default, s.interactionDOMElement = null, s.moveWhenInside = !1, s.eventsAdded = !1, s.mouseOverRenderer = !1, s.supportsTouchEvents = "ontouchstart" in window, s.supportsPointerEvents = !!window.PointerEvent, s.onPointerUp = s.onPointerUp.bind(s), s.processPointerUp = s.processPointerUp.bind(s), s.onPointerCancel = s.onPointerCancel.bind(s), s.processPointerCancel = s.processPointerCancel.bind(s), s.onPointerDown = s.onPointerDown.bind(s), s.processPointerDown = s.processPointerDown.bind(s), s.onPointerMove = s.onPointerMove.bind(s), s.processPointerMove = s.processPointerMove.bind(s), s.onPointerOut = s.onPointerOut.bind(s), s.processPointerOverOut = s.processPointerOverOut.bind(s), s.onPointerOver = s.onPointerOver.bind(s), s.cursorStyles = {
                    default: "inherit",
                    pointer: "pointer"
                }, s.currentCursorMode = null, s.cursor = null, s._tempPoint = new u.Point, s.resolution = 1, s.setTargetElement(s.renderer.view, s.renderer.resolution), s
            }
            return s(e, t), e.prototype.hitTest = function(t, e) {
                return b.target = null, b.data.global = t, e || (e = this.renderer._lastObjectRendered), this.processInteractive(b, e, null, !0), b.target
            }, e.prototype.setTargetElement = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                this.removeEvents(), this.interactionDOMElement = t, this.resolution = e, this.addEvents()
            }, e.prototype.addEvents = function() {
                this.interactionDOMElement && (u.ticker.shared.add(this.update, this, u.UPDATE_PRIORITY.INTERACTION), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "none", this.interactionDOMElement.style["-ms-touch-action"] = "none") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = "none"), this.supportsPointerEvents ? (window.document.addEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, !0), window.addEventListener("pointercancel", this.onPointerCancel, !0), window.addEventListener("pointerup", this.onPointerUp, !0)) : (window.document.addEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, !0), window.addEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, !0), this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, !0)), this.eventsAdded = !0)
            }, e.prototype.removeEvents = function() {
                this.interactionDOMElement && (u.ticker.shared.remove(this.update, this), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = ""), this.supportsPointerEvents ? (window.document.removeEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, !0), window.removeEventListener("pointercancel", this.onPointerCancel, !0), window.removeEventListener("pointerup", this.onPointerUp, !0)) : (window.document.removeEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, !0), window.removeEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, !0), this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, !0)), this.interactionDOMElement = null, this.eventsAdded = !1)
            }, e.prototype.update = function(t) {
                if (this._deltaTime += t, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.interactionDOMElement)) {
                    if (this.didMove) return void(this.didMove = !1);
                    this.cursor = null;
                    for (var e in this.activeInteractionData)
                        if (this.activeInteractionData.hasOwnProperty(e)) {
                            var i = this.activeInteractionData[e];
                            if (i.originalEvent && "touch" !== i.pointerType) {
                                var r = this.configureInteractionEventForDOMEvent(this.eventData, i.originalEvent, i);
                                this.processInteractive(r, this.renderer._lastObjectRendered, this.processPointerOverOut, !0)
                            }
                        }
                    this.setCursorMode(this.cursor)
                }
            }, e.prototype.setCursorMode = function(t) {
                if (t = t || "default", this.currentCursorMode !== t) {
                    this.currentCursorMode = t;
                    var e = this.cursorStyles[t];
                    if (e) switch (void 0 === e ? "undefined" : a(e)) {
                        case "string":
                            this.interactionDOMElement.style.cursor = e;
                            break;
                        case "function":
                            e(t);
                            break;
                        case "object":
                            Object.assign(this.interactionDOMElement.style, e)
                    } else "string" != typeof t || Object.prototype.hasOwnProperty.call(this.cursorStyles, t) || (this.interactionDOMElement.style.cursor = t)
                }
            }, e.prototype.dispatchEvent = function(t, e, i) {
                i.stopped || (i.currentTarget = t, i.type = e, t.emit(e, i), t[e] && t[e](i))
            }, e.prototype.mapPositionToPoint = function(t, e, i) {
                var r = void 0;
                r = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
                var n = navigator.isCocoonJS ? this.resolution : 1 / this.resolution;
                t.x = (e - r.left) * (this.interactionDOMElement.width / r.width) * n, t.y = (i - r.top) * (this.interactionDOMElement.height / r.height) * n
            }, e.prototype.processInteractive = function(t, e, i, r, n) {
                if (!e || !e.visible) return !1;
                var o = t.data.global;
                n = e.interactive || n;
                var s = !1,
                    a = n,
                    h = !0;
                if (e.hitArea ? (r && (e.worldTransform.applyInverse(o, this._tempPoint), e.hitArea.contains(this._tempPoint.x, this._tempPoint.y) ? s = !0 : (r = !1, h = !1)), a = !1) : e._mask && r && (e._mask.containsPoint(o) || (r = !1, h = !1)), h && e.interactiveChildren && e.children)
                    for (var u = e.children, l = u.length - 1; l >= 0; l--) {
                        var c = u[l],
                            f = this.processInteractive(t, c, i, r, a);
                        if (f) {
                            if (!c.parent) continue;
                            a = !1, f && (t.target && (r = !1), s = !0)
                        }
                    }
                return n && (r && !t.target && !e.hitArea && e.containsPoint && e.containsPoint(o) && (s = !0), e.interactive && (s && !t.target && (t.target = e), i && i(t, e, !!s))), s
            }, e.prototype.onPointerDown = function(t) {
                if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                    var e = this.normalizeToPointerData(t);
                    this.autoPreventDefault && e[0].isNormalized && t.preventDefault();
                    for (var i = e.length, r = 0; r < i; r++) {
                        var n = e[r],
                            o = this.getInteractionDataForPointerId(n),
                            s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
                        if (s.data.originalEvent = t, this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerDown, !0), this.emit("pointerdown", s), "touch" === n.pointerType) this.emit("touchstart", s);
                        else if ("mouse" === n.pointerType || "pen" === n.pointerType) {
                            var a = 2 === n.button;
                            this.emit(a ? "rightdown" : "mousedown", this.eventData)
                        }
                    }
                }
            }, e.prototype.processPointerDown = function(t, e, i) {
                var r = t.data,
                    n = t.data.identifier;
                if (i)
                    if (e.trackedPointers[n] || (e.trackedPointers[n] = new _.default(n)), this.dispatchEvent(e, "pointerdown", t), "touch" === r.pointerType) this.dispatchEvent(e, "touchstart", t);
                    else if ("mouse" === r.pointerType || "pen" === r.pointerType) {
                    var o = 2 === r.button;
                    o ? e.trackedPointers[n].rightDown = !0 : e.trackedPointers[n].leftDown = !0, this.dispatchEvent(e, o ? "rightdown" : "mousedown", t)
                }
            }, e.prototype.onPointerComplete = function(t, e, i) {
                for (var r = this.normalizeToPointerData(t), n = r.length, o = t.target !== this.interactionDOMElement ? "outside" : "", s = 0; s < n; s++) {
                    var a = r[s],
                        h = this.getInteractionDataForPointerId(a),
                        u = this.configureInteractionEventForDOMEvent(this.eventData, a, h);
                    if (u.data.originalEvent = t, this.processInteractive(u, this.renderer._lastObjectRendered, i, e || !o), this.emit(e ? "pointercancel" : "pointerup" + o, u), "mouse" === a.pointerType || "pen" === a.pointerType) {
                        var l = 2 === a.button;
                        this.emit(l ? "rightup" + o : "mouseup" + o, u)
                    } else "touch" === a.pointerType && (this.emit(e ? "touchcancel" : "touchend" + o, u), this.releaseInteractionDataForPointerId(a.pointerId, h))
                }
            }, e.prototype.onPointerCancel = function(t) {
                this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !0, this.processPointerCancel)
            }, e.prototype.processPointerCancel = function(t, e) {
                var i = t.data,
                    r = t.data.identifier;
                void 0 !== e.trackedPointers[r] && (delete e.trackedPointers[r], this.dispatchEvent(e, "pointercancel", t), "touch" === i.pointerType && this.dispatchEvent(e, "touchcancel", t))
            }, e.prototype.onPointerUp = function(t) {
                this.supportsTouchEvents && "touch" === t.pointerType || this.onPointerComplete(t, !1, this.processPointerUp)
            }, e.prototype.processPointerUp = function(t, e, i) {
                var r = t.data,
                    n = t.data.identifier,
                    o = e.trackedPointers[n],
                    s = "touch" === r.pointerType,
                    a = "mouse" === r.pointerType || "pen" === r.pointerType,
                    h = !1;
                if (a) {
                    var u = 2 === r.button,
                        l = _.default.FLAGS,
                        c = u ? l.RIGHT_DOWN : l.LEFT_DOWN,
                        f = void 0 !== o && o.flags & c;
                    i ? (this.dispatchEvent(e, u ? "rightup" : "mouseup", t), f && (this.dispatchEvent(e, u ? "rightclick" : "click", t), h = !0)) : f && this.dispatchEvent(e, u ? "rightupoutside" : "mouseupoutside", t), o && (u ? o.rightDown = !1 : o.leftDown = !1)
                }
                i ? (this.dispatchEvent(e, "pointerup", t), s && this.dispatchEvent(e, "touchend", t), o && (a && !h || this.dispatchEvent(e, "pointertap", t), s && (this.dispatchEvent(e, "tap", t), o.over = !1))) : o && (this.dispatchEvent(e, "pointerupoutside", t), s && this.dispatchEvent(e, "touchendoutside", t)), o && o.none && delete e.trackedPointers[n]
            }, e.prototype.onPointerMove = function(t) {
                if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                    var e = this.normalizeToPointerData(t);
                    "mouse" !== e[0].pointerType && "pen" !== e[0].pointerType || (this.didMove = !0, this.cursor = null);
                    for (var i = e.length, r = 0; r < i; r++) {
                        var n = e[r],
                            o = this.getInteractionDataForPointerId(n),
                            s = this.configureInteractionEventForDOMEvent(this.eventData, n, o);
                        s.data.originalEvent = t;
                        var a = "touch" !== n.pointerType || this.moveWhenInside;
                        this.processInteractive(s, this.renderer._lastObjectRendered, this.processPointerMove, a), this.emit("pointermove", s), "touch" === n.pointerType && this.emit("touchmove", s), "mouse" !== n.pointerType && "pen" !== n.pointerType || this.emit("mousemove", s)
                    }
                    "mouse" === e[0].pointerType && this.setCursorMode(this.cursor)
                }
            }, e.prototype.processPointerMove = function(t, e, i) {
                var r = t.data,
                    n = "touch" === r.pointerType,
                    o = "mouse" === r.pointerType || "pen" === r.pointerType;
                o && this.processPointerOverOut(t, e, i), this.moveWhenInside && !i || (this.dispatchEvent(e, "pointermove", t), n && this.dispatchEvent(e, "touchmove", t), o && this.dispatchEvent(e, "mousemove", t))
            }, e.prototype.onPointerOut = function(t) {
                if (!this.supportsTouchEvents || "touch" !== t.pointerType) {
                    var e = this.normalizeToPointerData(t),
                        i = e[0];
                    "mouse" === i.pointerType && (this.mouseOverRenderer = !1, this.setCursorMode(null));
                    var r = this.getInteractionDataForPointerId(i),
                        n = this.configureInteractionEventForDOMEvent(this.eventData, i, r);
                    n.data.originalEvent = i, this.processInteractive(n, this.renderer._lastObjectRendered, this.processPointerOverOut, !1), this.emit("pointerout", n), "mouse" === i.pointerType || "pen" === i.pointerType ? this.emit("mouseout", n) : this.releaseInteractionDataForPointerId(r.identifier)
                }
            }, e.prototype.processPointerOverOut = function(t, e, i) {
                var r = t.data,
                    n = t.data.identifier,
                    o = "mouse" === r.pointerType || "pen" === r.pointerType,
                    s = e.trackedPointers[n];
                i && !s && (s = e.trackedPointers[n] = new _.default(n)), void 0 !== s && (i && this.mouseOverRenderer ? (s.over || (s.over = !0, this.dispatchEvent(e, "pointerover", t), o && this.dispatchEvent(e, "mouseover", t)), o && null === this.cursor && (this.cursor = e.cursor)) : s.over && (s.over = !1, this.dispatchEvent(e, "pointerout", this.eventData), o && this.dispatchEvent(e, "mouseout", t), s.none && delete e.trackedPointers[n]))
            }, e.prototype.onPointerOver = function(t) {
                var e = this.normalizeToPointerData(t),
                    i = e[0],
                    r = this.getInteractionDataForPointerId(i),
                    n = this.configureInteractionEventForDOMEvent(this.eventData, i, r);
                n.data.originalEvent = i, "mouse" === i.pointerType && (this.mouseOverRenderer = !0), this.emit("pointerover", n), "mouse" !== i.pointerType && "pen" !== i.pointerType || this.emit("mouseover", n)
            }, e.prototype.getInteractionDataForPointerId = function(t) {
                var e = t.pointerId,
                    i = void 0;
                return e === x || "mouse" === t.pointerType ? i = this.mouse : this.activeInteractionData[e] ? i = this.activeInteractionData[e] : (i = this.interactionDataPool.pop() || new c.default, i.identifier = e, this.activeInteractionData[e] = i), i.copyEvent(t), i
            }, e.prototype.releaseInteractionDataForPointerId = function(t) {
                var e = this.activeInteractionData[t];
                e && (delete this.activeInteractionData[t], e.reset(), this.interactionDataPool.push(e))
            }, e.prototype.configureInteractionEventForDOMEvent = function(t, e, i) {
                return t.data = i, this.mapPositionToPoint(i.global, e.clientX, e.clientY), navigator.isCocoonJS && "touch" === e.pointerType && (i.global.x = i.global.x / this.resolution, i.global.y = i.global.y / this.resolution), "touch" === e.pointerType && (e.globalX = i.global.x, e.globalY = i.global.y), i.originalEvent = e, t.reset(), t
            }, e.prototype.normalizeToPointerData = function(t) {
                var e = [];
                if (this.supportsTouchEvents && t instanceof TouchEvent)
                    for (var i = 0, r = t.changedTouches.length; i < r; i++) {
                        var n = t.changedTouches[i];
                        void 0 === n.button && (n.button = t.touches.length ? 1 : 0), void 0 === n.buttons && (n.buttons = t.touches.length ? 1 : 0), void 0 === n.isPrimary && (n.isPrimary = 1 === t.touches.length && "touchstart" === t.type), void 0 === n.width && (n.width = n.radiusX || 1), void 0 === n.height && (n.height = n.radiusY || 1), void 0 === n.tiltX && (n.tiltX = 0), void 0 === n.tiltY && (n.tiltY = 0), void 0 === n.pointerType && (n.pointerType = "touch"), void 0 === n.pointerId && (n.pointerId = n.identifier || 0), void 0 === n.pressure && (n.pressure = n.force || .5), void 0 === n.twist && (n.twist = 0), void 0 === n.tangentialPressure && (n.tangentialPressure = 0), void 0 === n.layerX && (n.layerX = n.offsetX = n.clientX), void 0 === n.layerY && (n.layerY = n.offsetY = n.clientY), n.isNormalized = !0, e.push(n)
                    } else !(t instanceof MouseEvent) || this.supportsPointerEvents && t instanceof window.PointerEvent ? e.push(t) : (void 0 === t.isPrimary && (t.isPrimary = !0), void 0 === t.width && (t.width = 1), void 0 === t.height && (t.height = 1), void 0 === t.tiltX && (t.tiltX = 0), void 0 === t.tiltY && (t.tiltY = 0), void 0 === t.pointerType && (t.pointerType = "mouse"), void 0 === t.pointerId && (t.pointerId = x), void 0 === t.pressure && (t.pressure = .5), void 0 === t.twist && (t.twist = 0), void 0 === t.tangentialPressure && (t.tangentialPressure = 0), t.isNormalized = !0, e.push(t));
                return e
            }, e.prototype.destroy = function() {
                this.removeEvents(), this.removeAllListeners(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactionDOMElement = null, this.onPointerDown = null, this.processPointerDown = null, this.onPointerUp = null, this.processPointerUp = null, this.onPointerCancel = null, this.processPointerCancel = null, this.onPointerMove = null, this.processPointerMove = null, this.onPointerOut = null, this.processPointerOverOut = null, this.onPointerOver = null, this._tempPoint = null
            }, e
        }(m.default);
    e.default = T, u.WebGLRenderer.registerPlugin("interaction", T), u.CanvasRenderer.registerPlugin("interaction", T)
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var n = i(91);
    Object.defineProperty(e, "InteractionData", {
        enumerable: !0,
        get: function() {
            return r(n).default
        }
    });
    var o = i(181);
    Object.defineProperty(e, "InteractionManager", {
        enumerable: !0,
        get: function() {
            return r(o).default
        }
    });
    var s = i(94);
    Object.defineProperty(e, "interactiveTarget", {
        enumerable: !0,
        get: function() {
            return r(s).default
        }
    });
    var a = i(93);
    Object.defineProperty(e, "InteractionTrackingData", {
        enumerable: !0,
        get: function() {
            return r(a).default
        }
    });
    var h = i(92);
    Object.defineProperty(e, "InteractionEvent", {
        enumerable: !0,
        get: function() {
            return r(h).default
        }
    })
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0, e.shared = e.Resource = e.textureParser = e.getResourcePath = e.spritesheetParser = e.parseBitmapFontData = e.bitmapFontParser = e.Loader = void 0;
    var n = i(95);
    Object.defineProperty(e, "bitmapFontParser", {
        enumerable: !0,
        get: function() {
            return r(n).default
        }
    }), Object.defineProperty(e, "parseBitmapFontData", {
        enumerable: !0,
        get: function() {
            return n.parse
        }
    });
    var o = i(96);
    Object.defineProperty(e, "spritesheetParser", {
        enumerable: !0,
        get: function() {
            return r(o).default
        }
    }), Object.defineProperty(e, "getResourcePath", {
        enumerable: !0,
        get: function() {
            return o.getResourcePath
        }
    });
    var s = i(97);
    Object.defineProperty(e, "textureParser", {
        enumerable: !0,
        get: function() {
            return r(s).default
        }
    });
    var a = i(21);
    Object.defineProperty(e, "Resource", {
        enumerable: !0,
        get: function() {
            return a.Resource
        }
    });
    var h = i(64),
        u = r(h),
        l = i(184),
        c = r(l);
    e.Loader = c.default;
    var f = new c.default;
    f.destroy = function() {}, e.shared = f;
    var d = u.default.prototype;
    d._loader = null, Object.defineProperty(d, "loader", {
        get: function() {
            if (!this._loader) {
                var t = this._options.sharedLoader;
                this._loader = t ? f : new c.default
            }
            return this._loader
        }
    }), d._parentDestroy = d.destroy, d.destroy = function(t, e) {
        this._loader && (this._loader.destroy(), this._loader = null), this._parentDestroy(t, e)
    }
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = i(21),
        h = r(a),
        u = i(210),
        l = i(12),
        c = r(l),
        f = i(97),
        d = r(f),
        p = i(96),
        _ = r(p),
        v = i(95),
        m = r(v),
        g = function(t) {
            function e(i, r) {
                n(this, e);
                var s = o(this, t.call(this, i, r));
                c.default.call(s);
                for (var a = 0; a < e._pixiMiddleware.length; ++a) s.use(e._pixiMiddleware[a]());
                return s.onStart.add(function(t) {
                    return s.emit("start", t)
                }), s.onProgress.add(function(t, e) {
                    return s.emit("progress", t, e)
                }), s.onError.add(function(t, e, i) {
                    return s.emit("error", t, e, i)
                }), s.onLoad.add(function(t, e) {
                    return s.emit("load", t, e)
                }), s.onComplete.add(function(t, e) {
                    return s.emit("complete", t, e)
                }), s
            }
            return s(e, t), e.addPixiMiddleware = function(t) {
                e._pixiMiddleware.push(t)
            }, e.prototype.destroy = function() {
                this.removeAllListeners(), this.reset()
            }, e
        }(h.default);
    e.default = g;
    for (var y in c.default.prototype) g.prototype[y] = c.default.prototype[y];
    g._pixiMiddleware = [u.blobMiddlewareFactory, d.default, _.default, m.default];
    var x = h.default.Resource;
    x.setExtensionXhrType("fnt", x.XHR_RESPONSE_TYPE.DOCUMENT)
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        h = i(98),
        u = r(h),
        l = i(28),
        c = r(l),
        f = 10,
        d = function(t) {
            function e(i, r, s, a, h) {
                n(this, e);
                var u = o(this, t.call(this, i, 4, 4));
                return u._origWidth = i.orig.width, u._origHeight = i.orig.height, u._width = u._origWidth, u._height = u._origHeight, u._leftWidth = void 0 !== r ? r : f, u._rightWidth = void 0 !== a ? a : f, u._topHeight = void 0 !== s ? s : f, u._bottomHeight = void 0 !== h ? h : f, u._cachedTint = 16777215, u._tintedTexture = null, u._canvasUvs = null, u.refresh(!0), u
            }
            return s(e, t), e.prototype.updateHorizontalVertices = function() {
                var t = this.vertices,
                    e = this._topHeight + this._bottomHeight,
                    i = this._height > e ? 1 : this._height / e;
                t[9] = t[11] = t[13] = t[15] = this._topHeight * i, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * i, t[25] = t[27] = t[29] = t[31] = this._height
            }, e.prototype.updateVerticalVertices = function() {
                var t = this.vertices,
                    e = this._leftWidth + this._rightWidth,
                    i = this._width > e ? 1 : this._width / e;
                t[2] = t[10] = t[18] = t[26] = this._leftWidth * i, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * i, t[6] = t[14] = t[22] = t[30] = this._width
            }, e.prototype._renderCanvas = function(t) {
                var e = t.context,
                    i = this.worldTransform,
                    r = t.resolution,
                    n = 16777215 !== this.tint,
                    o = this._texture;
                n && this._cachedTint !== this.tint && (this._cachedTint = this.tint, this._tintedTexture = c.default.getTintedTexture(this, this.tint));
                var s = n ? this._tintedTexture : o.baseTexture.source;
                this._canvasUvs || (this._canvasUvs = [0, 0, 0, 0, 0, 0, 0, 0]);
                var a = this.vertices,
                    h = this._canvasUvs,
                    u = n ? 0 : o.frame.x,
                    l = n ? 0 : o.frame.y,
                    f = u + o.frame.width,
                    d = l + o.frame.height;
                h[0] = u, h[1] = u + this._leftWidth, h[2] = f - this._rightWidth, h[3] = f, h[4] = l, h[5] = l + this._topHeight, h[6] = d - this._bottomHeight, h[7] = d;
                for (var p = 0; p < 8; p++) h[p] *= o.baseTexture.resolution;
                e.globalAlpha = this.worldAlpha, t.setBlendMode(this.blendMode), t.roundPixels ? e.setTransform(i.a * r, i.b * r, i.c * r, i.d * r, i.tx * r | 0, i.ty * r | 0) : e.setTransform(i.a * r, i.b * r, i.c * r, i.d * r, i.tx * r, i.ty * r);
                for (var _ = 0; _ < 3; _++)
                    for (var v = 0; v < 3; v++) {
                        var m = 2 * v + 8 * _,
                            g = Math.max(1, h[v + 1] - h[v]),
                            y = Math.max(1, h[_ + 5] - h[_ + 4]),
                            x = Math.max(1, a[m + 10] - a[m]),
                            b = Math.max(1, a[m + 11] - a[m + 1]);
                        e.drawImage(s, h[v], h[_ + 4], g, y, a[m], a[m + 1], x, b)
                    }
            }, e.prototype._refresh = function() {
                t.prototype._refresh.call(this);
                var e = this.uvs,
                    i = this._texture;
                this._origWidth = i.orig.width, this._origHeight = i.orig.height;
                var r = 1 / this._origWidth,
                    n = 1 / this._origHeight;
                e[0] = e[8] = e[16] = e[24] = 0, e[1] = e[3] = e[5] = e[7] = 0, e[6] = e[14] = e[22] = e[30] = 1, e[25] = e[27] = e[29] = e[31] = 1, e[2] = e[10] = e[18] = e[26] = r * this._leftWidth, e[4] = e[12] = e[20] = e[28] = 1 - r * this._rightWidth, e[9] = e[11] = e[13] = e[15] = n * this._topHeight, e[17] = e[19] = e[21] = e[23] = 1 - n * this._bottomHeight, this.updateHorizontalVertices(), this.updateVerticalVertices(), this.dirty++, this.multiplyUvs()
            }, a(e, [{
                key: "width",
                get: function() {
                    return this._width
                },
                set: function(t) {
                    this._width = t, this._refresh()
                }
            }, {
                key: "height",
                get: function() {
                    return this._height
                },
                set: function(t) {
                    this._height = t, this._refresh()
                }
            }, {
                key: "leftWidth",
                get: function() {
                    return this._leftWidth
                },
                set: function(t) {
                    this._leftWidth = t, this._refresh()
                }
            }, {
                key: "rightWidth",
                get: function() {
                    return this._rightWidth
                },
                set: function(t) {
                    this._rightWidth = t, this._refresh()
                }
            }, {
                key: "topHeight",
                get: function() {
                    return this._topHeight
                },
                set: function(t) {
                    this._topHeight = t, this._refresh()
                }
            }, {
                key: "bottomHeight",
                get: function() {
                    return this._bottomHeight
                },
                set: function(t) {
                    this._bottomHeight = t, this._refresh()
                }
            }]), e
        }(u.default);
    e.default = d
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var s = i(20),
        a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(s),
        h = function(t) {
            function e(i, o) {
                r(this, e);
                var s = n(this, t.call(this, i));
                return s.points = o, s.vertices = new Float32Array(4 * o.length), s.uvs = new Float32Array(4 * o.length), s.colors = new Float32Array(2 * o.length), s.indices = new Uint16Array(2 * o.length), s.autoUpdate = !0, s.refresh(), s
            }
            return o(e, t), e.prototype._refresh = function() {
                var t = this.points;
                if (!(t.length < 1) && this._texture._uvs) {
                    this.vertices.length / 4 !== t.length && (this.vertices = new Float32Array(4 * t.length), this.uvs = new Float32Array(4 * t.length), this.colors = new Float32Array(2 * t.length), this.indices = new Uint16Array(2 * t.length));
                    var e = this.uvs,
                        i = this.indices,
                        r = this.colors;
                    e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, r[0] = 1, r[1] = 1, i[0] = 0, i[1] = 1;
                    for (var n = t.length, o = 1; o < n; o++) {
                        var s = 4 * o,
                            a = o / (n - 1);
                        e[s] = a, e[s + 1] = 0, e[s + 2] = a, e[s + 3] = 1, s = 2 * o, r[s] = 1, r[s + 1] = 1, s = 2 * o, i[s] = s, i[s + 1] = s + 1
                    }
                    this.dirty++, this.indexDirty++, this.multiplyUvs(), this.refreshVertices()
                }
            }, e.prototype.refreshVertices = function() {
                var t = this.points;
                if (!(t.length < 1))
                    for (var e = t[0], i = void 0, r = 0, n = 0, o = this.vertices, s = t.length, a = 0; a < s; a++) {
                        var h = t[a],
                            u = 4 * a;
                        i = a < t.length - 1 ? t[a + 1] : h, n = -(i.x - e.x), r = i.y - e.y;
                        var l = 10 * (1 - a / (s - 1));
                        l > 1 && (l = 1);
                        var c = Math.sqrt(r * r + n * n),
                            f = this._texture.height / 2;
                        r /= c, n /= c, r *= f, n *= f, o[u] = h.x + r, o[u + 1] = h.y + n, o[u + 2] = h.x - r, o[u + 3] = h.y - n, e = h
                    }
            }, e.prototype.updateTransform = function() {
                this.autoUpdate && this.refreshVertices(), this.containerUpdateTransform()
            }, e
        }(a.default);
    e.default = h
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = i(1),
        o = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(n),
        s = i(20),
        a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(s),
        h = function() {
            function t(e) {
                r(this, t), this.renderer = e
            }
            return t.prototype.render = function(t) {
                var e = this.renderer,
                    i = e.context,
                    r = t.worldTransform,
                    n = e.resolution;
                e.roundPixels ? i.setTransform(r.a * n, r.b * n, r.c * n, r.d * n, r.tx * n | 0, r.ty * n | 0) : i.setTransform(r.a * n, r.b * n, r.c * n, r.d * n, r.tx * n, r.ty * n), e.context.globalAlpha = t.worldAlpha, e.setBlendMode(t.blendMode), t.drawMode === a.default.DRAW_MODES.TRIANGLE_MESH ? this._renderTriangleMesh(t) : this._renderTriangles(t)
            }, t.prototype._renderTriangleMesh = function(t) {
                for (var e = t.vertices.length / 2, i = 0; i < e - 2; i++) {
                    var r = 2 * i;
                    this._renderDrawTriangle(t, r, r + 2, r + 4)
                }
            }, t.prototype._renderTriangles = function(t) {
                for (var e = t.indices, i = e.length, r = 0; r < i; r += 3) {
                    var n = 2 * e[r],
                        o = 2 * e[r + 1],
                        s = 2 * e[r + 2];
                    this._renderDrawTriangle(t, n, o, s)
                }
            }, t.prototype._renderDrawTriangle = function(t, e, i, r) {
                var n = this.renderer.context,
                    o = t.uvs,
                    s = t.vertices,
                    a = t._texture;
                if (a.valid) {
                    var h = a.baseTexture,
                        u = h.source,
                        l = h.width,
                        c = h.height,
                        f = void 0,
                        d = void 0,
                        p = void 0,
                        _ = void 0,
                        v = void 0,
                        m = void 0;
                    if (t.uploadUvTransform) {
                        var g = t._uvTransform.mapCoord;
                        f = (o[e] * g.a + o[e + 1] * g.c + g.tx) * h.width, d = (o[i] * g.a + o[i + 1] * g.c + g.tx) * h.width, p = (o[r] * g.a + o[r + 1] * g.c + g.tx) * h.width, _ = (o[e] * g.b + o[e + 1] * g.d + g.ty) * h.height, v = (o[i] * g.b + o[i + 1] * g.d + g.ty) * h.height, m = (o[r] * g.b + o[r + 1] * g.d + g.ty) * h.height
                    } else f = o[e] * h.width, d = o[i] * h.width, p = o[r] * h.width, _ = o[e + 1] * h.height, v = o[i + 1] * h.height, m = o[r + 1] * h.height;
                    var y = s[e],
                        x = s[i],
                        b = s[r],
                        T = s[e + 1],
                        w = s[i + 1],
                        E = s[r + 1],
                        S = t.canvasPadding / this.renderer.resolution;
                    if (S > 0) {
                        var P = S / Math.abs(t.worldTransform.a),
                            O = S / Math.abs(t.worldTransform.d),
                            M = (y + x + b) / 3,
                            C = (T + w + E) / 3,
                            R = y - M,
                            A = T - C,
                            I = Math.sqrt(R * R + A * A);
                        y = M + R / I * (I + P), T = C + A / I * (I + O), R = x - M, A = w - C, I = Math.sqrt(R * R + A * A), x = M + R / I * (I + P), w = C + A / I * (I + O), R = b - M, A = E - C, I = Math.sqrt(R * R + A * A), b = M + R / I * (I + P), E = C + A / I * (I + O)
                    }
                    n.save(), n.beginPath(), n.moveTo(y, T), n.lineTo(x, w), n.lineTo(b, E), n.closePath(), n.clip();
                    var D = f * v + _ * p + d * m - v * p - _ * d - f * m,
                        L = y * v + _ * b + x * m - v * b - _ * x - y * m,
                        k = f * x + y * p + d * b - x * p - y * d - f * b,
                        N = f * v * b + _ * x * p + y * d * m - y * v * p - _ * d * b - f * x * m,
                        F = T * v + _ * E + w * m - v * E - _ * w - T * m,
                        B = f * w + T * p + d * E - w * p - T * d - f * E,
                        j = f * v * E + _ * w * p + T * d * m - T * v * p - _ * d * E - f * w * m;
                    n.transform(L / D, F / D, k / D, B / D, N / D, j / D), n.drawImage(u, 0, 0, l * h.resolution, c * h.resolution, 0, 0, l, c), n.restore(), this.renderer.invalidateBlendMode()
                }
            }, t.prototype.renderMeshFlat = function(t) {
                var e = this.renderer.context,
                    i = t.vertices,
                    r = i.length / 2;
                e.beginPath();
                for (var n = 1; n < r - 2; ++n) {
                    var o = 2 * n,
                        s = i[o],
                        a = i[o + 1],
                        h = i[o + 2],
                        u = i[o + 3],
                        l = i[o + 4],
                        c = i[o + 5];
                    e.moveTo(s, a), e.lineTo(h, u), e.lineTo(l, c)
                }
                e.fillStyle = "#FF0000", e.fill(), e.closePath()
            }, t.prototype.destroy = function() {
                this.renderer = null
            }, t
        }();
    e.default = h, o.CanvasRenderer.registerPlugin("mesh", h)
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var n = i(20);
    Object.defineProperty(e, "Mesh", {
        enumerable: !0,
        get: function() {
            return r(n).default
        }
    });
    var o = i(189);
    Object.defineProperty(e, "MeshRenderer", {
        enumerable: !0,
        get: function() {
            return r(o).default
        }
    });
    var s = i(187);
    Object.defineProperty(e, "CanvasMeshRenderer", {
        enumerable: !0,
        get: function() {
            return r(s).default
        }
    });
    var a = i(98);
    Object.defineProperty(e, "Plane", {
        enumerable: !0,
        get: function() {
            return r(a).default
        }
    });
    var h = i(185);
    Object.defineProperty(e, "NineSlicePlane", {
        enumerable: !0,
        get: function() {
            return r(h).default
        }
    });
    var u = i(186);
    Object.defineProperty(e, "Rope", {
        enumerable: !0,
        get: function() {
            return r(u).default
        }
    })
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = i(1),
        h = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(a),
        u = i(6),
        l = r(u),
        c = i(20),
        f = r(c),
        d = (i(7), h.Matrix.IDENTITY),
        p = function(t) {
            function e(i) {
                n(this, e);
                var r = o(this, t.call(this, i));
                return r.shader = null, r
            }
            return s(e, t), e.prototype.onContextChange = function() {
                var t = this.renderer.gl;
                this.shader = new h.Shader(t, "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n", "varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n")
            }, e.prototype.render = function(t) {
                var e = this.renderer,
                    i = e.gl,
                    r = t._texture;
                if (r.valid) {
                    var n = t._glDatas[e.CONTEXT_UID];
                    n || (e.bindVao(null), n = {
                        shader: this.shader,
                        vertexBuffer: l.default.GLBuffer.createVertexBuffer(i, t.vertices, i.STREAM_DRAW),
                        uvBuffer: l.default.GLBuffer.createVertexBuffer(i, t.uvs, i.STREAM_DRAW),
                        indexBuffer: l.default.GLBuffer.createIndexBuffer(i, t.indices, i.STATIC_DRAW),
                        vao: null,
                        dirty: t.dirty,
                        indexDirty: t.indexDirty,
                        vertexDirty: t.vertexDirty
                    }, n.vao = new l.default.VertexArrayObject(i).addIndex(n.indexBuffer).addAttribute(n.vertexBuffer, n.shader.attributes.aVertexPosition, i.FLOAT, !1, 8, 0).addAttribute(n.uvBuffer, n.shader.attributes.aTextureCoord, i.FLOAT, !1, 8, 0), t._glDatas[e.CONTEXT_UID] = n), e.bindVao(n.vao), t.dirty !== n.dirty && (n.dirty = t.dirty, n.uvBuffer.upload(t.uvs)), t.indexDirty !== n.indexDirty && (n.indexDirty = t.indexDirty, n.indexBuffer.upload(t.indices)), t.vertexDirty !== n.vertexDirty && (n.vertexDirty = t.vertexDirty, n.vertexBuffer.upload(t.vertices)), e.bindShader(n.shader), n.shader.uniforms.uSampler = e.bindTexture(r), e.state.setBlendMode(h.utils.correctBlendMode(t.blendMode, r.baseTexture.premultipliedAlpha)), n.shader.uniforms.uTransform && (t.uploadUvTransform ? n.shader.uniforms.uTransform = t._uvTransform.mapCoord.toArray(!0) : n.shader.uniforms.uTransform = d.toArray(!0)), n.shader.uniforms.translationMatrix = t.worldTransform.toArray(!0), n.shader.uniforms.uColor = h.utils.premultiplyRgba(t.tintRgb, t.worldAlpha, n.shader.uniforms.uColor, r.baseTexture.premultipliedAlpha);
                    var o = t.drawMode === f.default.DRAW_MODES.TRIANGLE_MESH ? i.TRIANGLE_STRIP : i.TRIANGLES;
                    n.vao.draw(o, t.indices.length, 0)
                }
            }, e
        }(h.ObjectRenderer);
    e.default = p, h.WebGLRenderer.registerPlugin("mesh", p)
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        a = i(1),
        h = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(a),
        u = i(2),
        l = function(t) {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1500,
                    o = arguments[1],
                    s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16384,
                    a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                r(this, e);
                var u = n(this, t.call(this));
                return s > 16384 && (s = 16384), s > i && (s = i), u._properties = [!1, !0, !1, !1, !1], u._maxSize = i, u._batchSize = s, u._glBuffers = {}, u._bufferUpdateIDs = [], u._updateID = 0, u.interactiveChildren = !1, u.blendMode = h.BLEND_MODES.NORMAL, u.autoResize = a, u.roundPixels = !0, u.baseTexture = null, u.setProperties(o), u._tint = 0, u.tintRgb = new Float32Array(4), u.tint = 16777215, u
            }
            return o(e, t), e.prototype.setProperties = function(t) {
                t && (this._properties[0] = "vertices" in t || "scale" in t ? !!t.vertices || !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "tint" in t || "alpha" in t ? !!t.tint || !!t.alpha : this._properties[4])
            }, e.prototype.updateTransform = function() {
                this.displayObjectUpdateTransform()
            }, e.prototype.renderWebGL = function(t) {
                var e = this;
                this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.hasLoaded || this.baseTexture.once("update", function() {
                    return e.onChildrenChange(0)
                })), t.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this))
            }, e.prototype.onChildrenChange = function(t) {
                for (var e = Math.floor(t / this._batchSize); this._bufferUpdateIDs.length < e;) this._bufferUpdateIDs.push(0);
                this._bufferUpdateIDs[e] = ++this._updateID
            }, e.prototype.renderCanvas = function(t) {
                if (this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable) {
                    var e = t.context,
                        i = this.worldTransform,
                        r = !0,
                        n = 0,
                        o = 0,
                        s = 0,
                        a = 0;
                    t.setBlendMode(this.blendMode), e.globalAlpha = this.worldAlpha, this.displayObjectUpdateTransform();
                    for (var h = 0; h < this.children.length; ++h) {
                        var u = this.children[h];
                        if (u.visible) {
                            var l = u._texture.frame;
                            if (e.globalAlpha = this.worldAlpha * u.alpha, u.rotation % (2 * Math.PI) == 0) r && (e.setTransform(i.a, i.b, i.c, i.d, i.tx * t.resolution, i.ty * t.resolution), r = !1), n = u.anchor.x * (-l.width * u.scale.x) + u.position.x + .5, o = u.anchor.y * (-l.height * u.scale.y) + u.position.y + .5, s = l.width * u.scale.x, a = l.height * u.scale.y;
                            else {
                                r || (r = !0), u.displayObjectUpdateTransform();
                                var c = u.worldTransform;
                                t.roundPixels ? e.setTransform(c.a, c.b, c.c, c.d, c.tx * t.resolution | 0, c.ty * t.resolution | 0) : e.setTransform(c.a, c.b, c.c, c.d, c.tx * t.resolution, c.ty * t.resolution), n = u.anchor.x * -l.width + .5, o = u.anchor.y * -l.height + .5, s = l.width, a = l.height
                            }
                            var f = u._texture.baseTexture.resolution;
                            e.drawImage(u._texture.baseTexture.source, l.x * f, l.y * f, l.width * f, l.height * f, n * t.resolution, o * t.resolution, s * t.resolution, a * t.resolution)
                        }
                    }
                }
            }, e.prototype.destroy = function(e) {
                if (t.prototype.destroy.call(this, e), this._buffers)
                    for (var i = 0; i < this._buffers.length; ++i) this._buffers[i].destroy();
                this._properties = null, this._buffers = null, this._bufferUpdateIDs = null
            }, s(e, [{
                key: "tint",
                get: function() {
                    return this._tint
                },
                set: function(t) {
                    this._tint = t, (0, u.hex2rgb)(t, this.tintRgb)
                }
            }]), e
        }(h.Container);
    e.default = l
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var n = i(190);
    Object.defineProperty(e, "ParticleContainer", {
        enumerable: !0,
        get: function() {
            return r(n).default
        }
    });
    var o = i(193);
    Object.defineProperty(e, "ParticleRenderer", {
        enumerable: !0,
        get: function() {
            return r(o).default
        }
    })
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var o = i(6),
        s = r(o),
        a = i(42),
        h = r(a),
        u = function() {
            function t(e, i, r, o) {
                n(this, t), this.gl = e, this.size = o, this.dynamicProperties = [], this.staticProperties = [];
                for (var s = 0; s < i.length; ++s) {
                    var a = i[s];
                    a = {
                        attribute: a.attribute,
                        size: a.size,
                        uploadFunction: a.uploadFunction,
                        unsignedByte: a.unsignedByte,
                        offset: a.offset
                    }, r[s] ? this.dynamicProperties.push(a) : this.staticProperties.push(a)
                }
                this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers()
            }
            return t.prototype.initBuffers = function() {
                var t = this.gl,
                    e = 0;
                this.indices = (0, h.default)(this.size), this.indexBuffer = s.default.GLBuffer.createIndexBuffer(t, this.indices, t.STATIC_DRAW), this.dynamicStride = 0;
                for (var i = 0; i < this.dynamicProperties.length; ++i) {
                    var r = this.dynamicProperties[i];
                    r.offset = e, e += r.size, this.dynamicStride += r.size
                }
                var n = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
                this.dynamicData = new Float32Array(n), this.dynamicDataUint32 = new Uint32Array(n), this.dynamicBuffer = s.default.GLBuffer.createVertexBuffer(t, n, t.STREAM_DRAW);
                var o = 0;
                this.staticStride = 0;
                for (var a = 0; a < this.staticProperties.length; ++a) {
                    var u = this.staticProperties[a];
                    u.offset = o, o += u.size, this.staticStride += u.size
                }
                var l = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
                this.staticData = new Float32Array(l), this.staticDataUint32 = new Uint32Array(l), this.staticBuffer = s.default.GLBuffer.createVertexBuffer(t, l, t.STATIC_DRAW), this.vao = new s.default.VertexArrayObject(t).addIndex(this.indexBuffer);
                for (var c = 0; c < this.dynamicProperties.length; ++c) {
                    var f = this.dynamicProperties[c];
                    f.unsignedByte ? this.vao.addAttribute(this.dynamicBuffer, f.attribute, t.UNSIGNED_BYTE, !0, 4 * this.dynamicStride, 4 * f.offset) : this.vao.addAttribute(this.dynamicBuffer, f.attribute, t.FLOAT, !1, 4 * this.dynamicStride, 4 * f.offset)
                }
                for (var d = 0; d < this.staticProperties.length; ++d) {
                    var p = this.staticProperties[d];
                    p.unsignedByte ? this.vao.addAttribute(this.staticBuffer, p.attribute, t.UNSIGNED_BYTE, !0, 4 * this.staticStride, 4 * p.offset) : this.vao.addAttribute(this.staticBuffer, p.attribute, t.FLOAT, !1, 4 * this.staticStride, 4 * p.offset)
                }
            }, t.prototype.uploadDynamic = function(t, e, i) {
                for (var r = 0; r < this.dynamicProperties.length; r++) {
                    var n = this.dynamicProperties[r];
                    n.uploadFunction(t, e, i, n.unsignedByte ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, n.offset)
                }
                this.dynamicBuffer.upload()
            }, t.prototype.uploadStatic = function(t, e, i) {
                for (var r = 0; r < this.staticProperties.length; r++) {
                    var n = this.staticProperties[r];
                    n.uploadFunction(t, e, i, n.unsignedByte ? this.staticDataUint32 : this.staticData, this.staticStride, n.offset)
                }
                this.staticBuffer.upload()
            }, t.prototype.destroy = function() {
                this.dynamicProperties = null, this.dynamicBuffer.destroy(), this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer.destroy(), this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null
            }, t
        }();
    e.default = u
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function o(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function s(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var a = i(1),
        h = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(a),
        u = i(194),
        l = r(u),
        c = i(192),
        f = r(c),
        d = i(2),
        p = function(t) {
            function e(i) {
                n(this, e);
                var r = o(this, t.call(this, i));
                return r.shader = null, r.indexBuffer = null, r.properties = null, r.tempMatrix = new h.Matrix, r.CONTEXT_UID = 0, r
            }
            return s(e, t), e.prototype.onContextChange = function() {
                var t = this.renderer.gl;
                this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.shader = new l.default(t), this.properties = [{
                    attribute: this.shader.attributes.aVertexPosition,
                    size: 2,
                    uploadFunction: this.uploadVertices,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aPositionCoord,
                    size: 2,
                    uploadFunction: this.uploadPosition,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aRotation,
                    size: 1,
                    uploadFunction: this.uploadRotation,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aTextureCoord,
                    size: 2,
                    uploadFunction: this.uploadUvs,
                    offset: 0
                }, {
                    attribute: this.shader.attributes.aColor,
                    size: 1,
                    unsignedByte: !0,
                    uploadFunction: this.uploadTint,
                    offset: 0
                }]
            }, e.prototype.start = function() {
                this.renderer.bindShader(this.shader)
            }, e.prototype.render = function(t) {
                var e = t.children,
                    i = t._maxSize,
                    r = t._batchSize,
                    n = this.renderer,
                    o = e.length;
                if (0 !== o) {
                    o > i && (o = i);
                    var s = t._glBuffers[n.CONTEXT_UID];
                    s || (s = t._glBuffers[n.CONTEXT_UID] = this.generateBuffers(t));
                    var a = e[0]._texture.baseTexture;
                    this.renderer.setBlendMode(h.utils.correctBlendMode(t.blendMode, a.premultipliedAlpha));
                    var u = n.gl,
                        l = t.worldTransform.copy(this.tempMatrix);
                    l.prepend(n._activeRenderTarget.projectionMatrix), this.shader.uniforms.projectionMatrix = l.toArray(!0), this.shader.uniforms.uColor = h.utils.premultiplyRgba(t.tintRgb, t.worldAlpha, this.shader.uniforms.uColor, a.premultipliedAlpha), this.shader.uniforms.uSampler = n.bindTexture(a);
                    for (var c = !1, f = 0, d = 0; f < o; f += r, d += 1) {
                        var p = o - f;
                        if (p > r && (p = r), d >= s.length) {
                            if (!t.autoResize) break;
                            s.push(this._generateOneMoreBuffer(t))
                        }
                        var _ = s[d];
                        _.uploadDynamic(e, f, p);
                        var v = t._bufferUpdateIDs[d] || 0;
                        c = c || _._updateID < v, c && (_._updateID = t._updateID, _.uploadStatic(e, f, p)), n.bindVao(_.vao), _.vao.draw(u.TRIANGLES, 6 * p)
                    }
                }
            }, e.prototype.generateBuffers = function(t) {
                for (var e = this.renderer.gl, i = [], r = t._maxSize, n = t._batchSize, o = t._properties, s = 0; s < r; s += n) i.push(new f.default(e, this.properties, o, n));
                return i
            }, e.prototype._generateOneMoreBuffer = function(t) {
                var e = this.renderer.gl,
                    i = t._batchSize,
                    r = t._properties;
                return new f.default(e, this.properties, r, i)
            }, e.prototype.uploadVertices = function(t, e, i, r, n, o) {
                for (var s = 0, a = 0, h = 0, u = 0, l = 0; l < i; ++l) {
                    var c = t[e + l],
                        f = c._texture,
                        d = c.scale.x,
                        p = c.scale.y,
                        _ = f.trim,
                        v = f.orig;
                    _ ? (a = _.x - c.anchor.x * v.width, s = a + _.width, u = _.y - c.anchor.y * v.height, h = u + _.height) : (s = v.width * (1 - c.anchor.x), a = v.width * -c.anchor.x, h = v.height * (1 - c.anchor.y), u = v.height * -c.anchor.y), r[o] = a * d, r[o + 1] = u * p, r[o + n] = s * d, r[o + n + 1] = u * p, r[o + 2 * n] = s * d, r[o + 2 * n + 1] = h * p, r[o + 3 * n] = a * d, r[o + 3 * n + 1] = h * p, o += 4 * n
                }
            }, e.prototype.uploadPosition = function(t, e, i, r, n, o) {
                for (var s = 0; s < i; s++) {
                    var a = t[e + s].position;
                    r[o] = a.x, r[o + 1] = a.y, r[o + n] = a.x, r[o + n + 1] = a.y, r[o + 2 * n] = a.x, r[o + 2 * n + 1] = a.y, r[o + 3 * n] = a.x, r[o + 3 * n + 1] = a.y, o += 4 * n
                }
            }, e.prototype.uploadRotation = function(t, e, i, r, n, o) {
                for (var s = 0; s < i; s++) {
                    var a = t[e + s].rotation;
                    r[o] = a, r[o + n] = a, r[o + 2 * n] = a, r[o + 3 * n] = a, o += 4 * n
                }
            }, e.prototype.uploadUvs = function(t, e, i, r, n, o) {
                for (var s = 0; s < i; ++s) {
                    var a = t[e + s]._texture._uvs;
                    a ? (r[o] = a.x0, r[o + 1] = a.y0, r[o + n] = a.x1, r[o + n + 1] = a.y1, r[o + 2 * n] = a.x2, r[o + 2 * n + 1] = a.y2, r[o + 3 * n] = a.x3, r[o + 3 * n + 1] = a.y3, o += 4 * n) : (r[o] = 0, r[o + 1] = 0, r[o + n] = 0, r[o + n + 1] = 0, r[o + 2 * n] = 0, r[o + 2 * n + 1] = 0, r[o + 3 * n] = 0, r[o + 3 * n + 1] = 0, o += 4 * n)
                }
            }, e.prototype.uploadTint = function(t, e, i, r, n, o) {
                for (var s = 0; s < i; ++s) {
                    var a = t[e + s],
                        h = a._texture.baseTexture.premultipliedAlpha,
                        u = a.alpha,
                        l = u < 1 && h ? (0, d.premultiplyTint)(a._tintRGB, u) : a._tintRGB + (255 * u << 24);
                    r[o] = l, r[o + n] = l, r[o + 2 * n] = l, r[o + 3 * n] = l, o += 4 * n
                }
            }, e.prototype.destroy = function() {
                this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer), t.prototype.destroy.call(this), this.shader.destroy(), this.indices = null, this.tempMatrix = null
            }, e
        }(h.ObjectRenderer);
    e.default = p, h.WebGLRenderer.registerPlugin("particle", p)
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }
    e.__esModule = !0;
    var s = i(16),
        a = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(s),
        h = function(t) {
            function e(i) {
                return r(this, e), n(this, t.call(this, i, ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "attribute vec2 aPositionCoord;", "attribute float aRotation;", "uniform mat3 projectionMatrix;", "uniform vec4 uColor;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "void main(void){", "   float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);", "   float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);", "   vec2 v = vec2(x, y);", "   v = v + aPositionCoord;", "   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor * uColor;", "}"].join("\n"), ["varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void){", "  vec4 color = texture2D(uSampler, vTextureCoord) * vColor;", "  gl_FragColor = color;", "}"].join("\n")))
            }
            return o(e, t), e
        }(a.default);
    e.default = h
}, function(t, e, i) {
    "use strict";
    Math.sign || (Math.sign = function(t) {
        return t = Number(t), 0 === t || isNaN(t) ? t : t > 0 ? 1 : -1
    })
}, function(t, e, i) {
    "use strict";
    Number.isInteger || (Number.isInteger = function(t) {
        return "number" == typeof t && isFinite(t) && Math.floor(t) === t
    })
}, function(t, e, i) {
    "use strict";
    var r = i(112),
        n = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(r);
    Object.assign || (Object.assign = n.default)
}, function(t, e, i) {
    "use strict";
    i(197), i(199), i(195), i(196), window.ArrayBuffer || (window.ArrayBuffer = Array), window.Float32Array || (window.Float32Array = Array), window.Uint32Array || (window.Uint32Array = Array), window.Uint16Array || (window.Uint16Array = Array)
}, function(t, e, i) {
    "use strict";
    (function(t) {
        if (Date.now && Date.prototype.getTime || (Date.now = function() {
                return (new Date).getTime()
            }), !t.performance || !t.performance.now) {
            var e = Date.now();
            t.performance || (t.performance = {}), t.performance.now = function() {
                return Date.now() - e
            }
        }
        for (var i = Date.now(), r = ["ms", "moz", "webkit", "o"], n = 0; n < r.length && !t.requestAnimationFrame; ++n) {
            var o = r[n];
            t.requestAnimationFrame = t[o + "RequestAnimationFrame"], t.cancelAnimationFrame = t[o + "CancelAnimationFrame"] || t[o + "CancelRequestAnimationFrame"]
        }
        t.requestAnimationFrame || (t.requestAnimationFrame = function(t) {
            if ("function" != typeof t) throw new TypeError(t + "is not a function");
            var e = Date.now(),
                r = 16 + i - e;
            return r < 0 && (r = 0), i = e, setTimeout(function() {
                i = Date.now(), t(performance.now())
            }, r)
        }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function(t) {
            return clearTimeout(t)
        })
    }).call(e, i(8))
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function s(t, e) {
        if (e instanceof h.BaseTexture) {
            var i = e.source,
                r = 0 === i.width ? t.canvas.width : Math.min(t.canvas.width, i.width),
                n = 0 === i.height ? t.canvas.height : Math.min(t.canvas.height, i.height);
            return t.ctx.drawImage(i, 0, 0, r, n, 0, 0, t.canvas.width, t.canvas.height), !0
        }
        return !1
    }
    e.__esModule = !0;
    var a = i(1),
        h = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(a),
        u = i(43),
        l = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(u),
        c = 16,
        f = function(t) {
            function e(i) {
                r(this, e);
                var o = n(this, t.call(this, i));
                return o.uploadHookHelper = o, o.canvas = document.createElement("canvas"), o.canvas.width = c, o.canvas.height = c, o.ctx = o.canvas.getContext("2d"), o.registerUploadHook(s), o
            }
            return o(e, t), e.prototype.destroy = function() {
                t.prototype.destroy.call(this), this.ctx = null, this.canvas = null
            }, e
        }(l.default);
    e.default = f, h.CanvasRenderer.registerPlugin("prepare", f)
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    e.__esModule = !0;
    var n = i(203);
    Object.defineProperty(e, "webgl", {
        enumerable: !0,
        get: function() {
            return r(n).default
        }
    });
    var o = i(200);
    Object.defineProperty(e, "canvas", {
        enumerable: !0,
        get: function() {
            return r(o).default
        }
    });
    var s = i(43);
    Object.defineProperty(e, "BasePrepare", {
        enumerable: !0,
        get: function() {
            return r(s).default
        }
    });
    var a = i(99);
    Object.defineProperty(e, "CountLimiter", {
        enumerable: !0,
        get: function() {
            return r(a).default
        }
    });
    var h = i(202);
    Object.defineProperty(e, "TimeLimiter", {
        enumerable: !0,
        get: function() {
            return r(h).default
        }
    })
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0;
    var n = function() {
        function t(e) {
            r(this, t), this.maxMilliseconds = e, this.frameStart = 0
        }
        return t.prototype.beginFrame = function() {
            this.frameStart = Date.now()
        }, t.prototype.allowedToUpload = function() {
            return Date.now() - this.frameStart < this.maxMilliseconds
        }, t
    }();
    e.default = n
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !e || "object" != typeof e && "function" != typeof e ? t : e
    }

    function o(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function s(t, e) {
        return e instanceof l.BaseTexture && (e._glTextures[t.CONTEXT_UID] || t.textureManager.updateTexture(e), !0)
    }

    function a(t, e) {
        return e instanceof l.Graphics && ((e.dirty || e.clearDirty || !e._webGL[t.plugins.graphics.CONTEXT_UID]) && t.plugins.graphics.updateGraphics(e), !0)
    }

    function h(t, e) {
        return t instanceof l.Graphics && (e.push(t), !0)
    }
    e.__esModule = !0;
    var u = i(1),
        l = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(u),
        c = i(43),
        f = function(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }(c),
        d = function(t) {
            function e(i) {
                r(this, e);
                var o = n(this, t.call(this, i));
                return o.uploadHookHelper = o.renderer, o.registerFindHook(h), o.registerUploadHook(s), o.registerUploadHook(a), o
            }
            return o(e, t), e
        }(f.default);
    e.default = d, l.WebGLRenderer.registerPlugin("prepare", d)
}, function(t, e, i) {
    (function(t, r) {
        var n;
        ! function(o) {
            function s(t) {
                throw new RangeError(I[t])
            }

            function a(t, e) {
                for (var i = t.length, r = []; i--;) r[i] = e(t[i]);
                return r
            }

            function h(t, e) {
                var i = t.split("@"),
                    r = "";
                return i.length > 1 && (r = i[0] + "@", t = i[1]), t = t.replace(A, "."), r + a(t.split("."), e).join(".")
            }

            function u(t) {
                for (var e, i, r = [], n = 0, o = t.length; n < o;) e = t.charCodeAt(n++), e >= 55296 && e <= 56319 && n < o ? (i = t.charCodeAt(n++), 56320 == (64512 & i) ? r.push(((1023 & e) << 10) + (1023 & i) + 65536) : (r.push(e), n--)) : r.push(e);
                return r
            }

            function l(t) {
                return a(t, function(t) {
                    var e = "";
                    return t > 65535 && (t -= 65536, e += k(t >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), e += k(t)
                }).join("")
            }

            function c(t) {
                return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : b
            }

            function f(t, e) {
                return t + 22 + 75 * (t < 26) - ((0 != e) << 5)
            }

            function d(t, e, i) {
                var r = 0;
                for (t = i ? L(t / S) : t >> 1, t += L(t / e); t > D * w >> 1; r += b) t = L(t / D);
                return L(r + (D + 1) * t / (t + E))
            }

            function p(t) {
                var e, i, r, n, o, a, h, u, f, p, _ = [],
                    v = t.length,
                    m = 0,
                    g = O,
                    y = P;
                for (i = t.lastIndexOf(M), i < 0 && (i = 0), r = 0; r < i; ++r) t.charCodeAt(r) >= 128 && s("not-basic"), _.push(t.charCodeAt(r));
                for (n = i > 0 ? i + 1 : 0; n < v;) {
                    for (o = m, a = 1, h = b; n >= v && s("invalid-input"), u = c(t.charCodeAt(n++)), (u >= b || u > L((x - m) / a)) && s("overflow"), m += u * a, f = h <= y ? T : h >= y + w ? w : h - y, !(u < f); h += b) p = b - f, a > L(x / p) && s("overflow"), a *= p;
                    e = _.length + 1, y = d(m - o, e, 0 == o), L(m / e) > x - g && s("overflow"), g += L(m / e), m %= e, _.splice(m++, 0, g)
                }
                return l(_)
            }

            function _(t) {
                var e, i, r, n, o, a, h, l, c, p, _, v, m, g, y, E = [];
                for (t = u(t), v = t.length, e = O, i = 0, o = P, a = 0; a < v; ++a)(_ = t[a]) < 128 && E.push(k(_));
                for (r = n = E.length, n && E.push(M); r < v;) {
                    for (h = x, a = 0; a < v; ++a)(_ = t[a]) >= e && _ < h && (h = _);
                    for (m = r + 1, h - e > L((x - i) / m) && s("overflow"), i += (h - e) * m, e = h, a = 0; a < v; ++a)
                        if (_ = t[a], _ < e && ++i > x && s("overflow"), _ == e) {
                            for (l = i, c = b; p = c <= o ? T : c >= o + w ? w : c - o, !(l < p); c += b) y = l - p, g = b - p, E.push(k(f(p + y % g, 0))), l = L(y / g);
                            E.push(k(f(l, 0))), o = d(i, m, r == n), i = 0, ++r
                        }++i, ++e
                }
                return E.join("")
            }

            function v(t) {
                return h(t, function(t) {
                    return C.test(t) ? p(t.slice(4).toLowerCase()) : t
                })
            }

            function m(t) {
                return h(t, function(t) {
                    return R.test(t) ? "xn--" + _(t) : t
                })
            }
            var g = ("object" == typeof e && e && e.nodeType, "object" == typeof t && t && t.nodeType, "object" == typeof r && r);
            var y, x = 2147483647,
                b = 36,
                T = 1,
                w = 26,
                E = 38,
                S = 700,
                P = 72,
                O = 128,
                M = "-",
                C = /^xn--/,
                R = /[^\x20-\x7E]/,
                A = /[\x2E\u3002\uFF0E\uFF61]/g,
                I = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                },
                D = b - T,
                L = Math.floor,
                k = String.fromCharCode;
            y = {
                version: "1.4.1",
                ucs2: {
                    decode: u,
                    encode: l
                },
                decode: p,
                encode: _,
                toASCII: m,
                toUnicode: v
            }, void 0 !== (n = function() {
                return y
            }.call(e, i, e, t)) && (t.exports = n)
        }()
    }).call(e, i(48)(t), i(8))
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }
    t.exports = function(t, e, i, o) {
        e = e || "&", i = i || "=";
        var s = {};
        if ("string" != typeof t || 0 === t.length) return s;
        var a = /\+/g;
        t = t.split(e);
        var h = 1e3;
        o && "number" == typeof o.maxKeys && (h = o.maxKeys);
        var u = t.length;
        h > 0 && u > h && (u = h);
        for (var l = 0; l < u; ++l) {
            var c, f, d, p, _ = t[l].replace(a, "%20"),
                v = _.indexOf(i);
            v >= 0 ? (c = _.substr(0, v), f = _.substr(v + 1)) : (c = _, f = ""), d = decodeURIComponent(c), p = decodeURIComponent(f), r(s, d) ? n(s[d]) ? s[d].push(p) : s[d] = [s[d], p] : s[d] = p
        }
        return s
    };
    var n = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
}, function(t, e, i) {
    "use strict";

    function r(t, e) {
        if (t.map) return t.map(e);
        for (var i = [], r = 0; r < t.length; r++) i.push(e(t[r], r));
        return i
    }
    var n = function(t) {
        switch (typeof t) {
            case "string":
                return t;
            case "boolean":
                return t ? "true" : "false";
            case "number":
                return isFinite(t) ? t : "";
            default:
                return ""
        }
    };
    t.exports = function(t, e, i, a) {
        return e = e || "&", i = i || "=", null === t && (t = void 0), "object" == typeof t ? r(s(t), function(s) {
            var a = encodeURIComponent(n(s)) + i;
            return o(t[s]) ? r(t[s], function(t) {
                return a + encodeURIComponent(n(t))
            }).join(e) : a + encodeURIComponent(n(t[s]))
        }).join(e) : a ? encodeURIComponent(n(a)) + i + encodeURIComponent(n(t)) : ""
    };
    var o = Array.isArray || function(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        },
        s = Object.keys || function(t) {
            var e = [];
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.push(i);
            return e
        }
}, function(t, e, i) {
    "use strict";
    e.decode = e.parse = i(205), e.encode = e.stringify = i(206)
}, function(t, e, i) {
    "use strict";
    t.exports = function(t, e, i) {
        var r, n = t.length;
        if (!(e >= n || 0 === i)) {
            i = e + i > n ? n - e : i;
            var o = n - i;
            for (r = e; r < o; ++r) t[r] = t[r + i];
            t.length = o
        }
    }
}, function(t, e, i) {
    "use strict";

    function r(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    function n(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }
    e.__esModule = !0, e.Loader = void 0;
    var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        },
        s = function() {
            function t(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var r = e[i];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }
            return function(e, i, r) {
                return i && t(e.prototype, i), r && t(e, r), e
            }
        }(),
        a = i(52),
        h = r(a),
        u = i(53),
        l = r(u),
        c = i(100),
        f = function(t) {
            if (t && t.__esModule) return t;
            var e = {};
            if (null != t)
                for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e.default = t, e
        }(c),
        d = i(44),
        p = /(#[\w-]+)?$/,
        _ = e.Loader = function() {
            function t() {
                var e = this,
                    i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
                n(this, t), this.baseUrl = i, this.progress = 0, this.loading = !1, this.defaultQueryString = "", this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function(t, i) {
                    return e._loadResource(t, i)
                }, this._queue = f.queue(this._boundLoadResource, r), this._queue.pause(), this.resources = {}, this.onProgress = new h.default, this.onError = new h.default, this.onLoad = new h.default, this.onStart = new h.default, this.onComplete = new h.default;
                for (var o = 0; o < t._defaultBeforeMiddleware.length; ++o) this.pre(t._defaultBeforeMiddleware[o]);
                for (var s = 0; s < t._defaultAfterMiddleware.length; ++s) this.use(t._defaultAfterMiddleware[s])
            }
            return t.prototype.add = function(t, e, i, r) {
                if (Array.isArray(t)) {
                    for (var n = 0; n < t.length; ++n) this.add(t[n]);
                    return this
                }
                if ("object" === (void 0 === t ? "undefined" : o(t)) && (r = e || t.callback || t.onComplete, i = t, e = t.url, t = t.name || t.key || t.url), "string" != typeof e && (r = i, i = e, e = t), "string" != typeof e) throw new Error("No url passed to add resource to loader.");
                if ("function" == typeof i && (r = i, i = null), this.loading && (!i || !i.parentResource)) throw new Error("Cannot add resources while the loader is running.");
                if (this.resources[t]) throw new Error('Resource named "' + t + '" already exists.');
                if (e = this._prepareUrl(e), this.resources[t] = new d.Resource(t, e, i), "function" == typeof r && this.resources[t].onAfterMiddleware.once(r), this.loading) {
                    for (var s = i.parentResource, a = [], h = 0; h < s.children.length; ++h) s.children[h].isComplete || a.push(s.children[h]);
                    var u = s.progressChunk * (a.length + 1),
                        l = u / (a.length + 2);
                    s.children.push(this.resources[t]), s.progressChunk = l;
                    for (var c = 0; c < a.length; ++c) a[c].progressChunk = l;
                    this.resources[t].progressChunk = l
                }
                return this._queue.push(this.resources[t]), this
            }, t.prototype.pre = function(t) {
                return this._beforeMiddleware.push(t), this
            }, t.prototype.use = function(t) {
                return this._afterMiddleware.push(t), this
            }, t.prototype.reset = function() {
                this.progress = 0, this.loading = !1, this._queue.kill(), this._queue.pause();
                for (var t in this.resources) {
                    var e = this.resources[t];
                    e._onLoadBinding && e._onLoadBinding.detach(), e.isLoading && e.abort()
                }
                return this.resources = {}, this
            }, t.prototype.load = function(t) {
                if ("function" == typeof t && this.onComplete.once(t), this.loading) return this;
                if (this._queue.idle()) this._onStart(), this._onComplete();
                else {
                    for (var e = this._queue._tasks.length, i = 100 / e, r = 0; r < this._queue._tasks.length; ++r) this._queue._tasks[r].data.progressChunk = i;
                    this._onStart(), this._queue.resume()
                }
                return this
            }, t.prototype._prepareUrl = function(t) {
                var e = (0, l.default)(t, {
                        strictMode: !0
                    }),
                    i = void 0;
                if (i = e.protocol || !e.path || 0 === t.indexOf("//") ? t : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && "/" !== t.charAt(0) ? this.baseUrl + "/" + t : this.baseUrl + t, this.defaultQueryString) {
                    var r = p.exec(i)[0];
                    i = i.substr(0, i.length - r.length), -1 !== i.indexOf("?") ? i += "&" + this.defaultQueryString : i += "?" + this.defaultQueryString, i += r
                }
                return i
            }, t.prototype._loadResource = function(t, e) {
                var i = this;
                t._dequeue = e, f.eachSeries(this._beforeMiddleware, function(e, r) {
                    e.call(i, t, function() {
                        r(t.isComplete ? {} : null)
                    })
                }, function() {
                    t.isComplete ? i._onLoad(t) : (t._onLoadBinding = t.onComplete.once(i._onLoad, i), t.load())
                }, !0)
            }, t.prototype._onStart = function() {
                this.progress = 0, this.loading = !0, this.onStart.dispatch(this)
            }, t.prototype._onComplete = function() {
                this.progress = 100, this.loading = !1, this.onComplete.dispatch(this, this.resources)
            }, t.prototype._onLoad = function(t) {
                var e = this;
                t._onLoadBinding = null, this._resourcesParsing.push(t), t._dequeue(), f.eachSeries(this._afterMiddleware, function(i, r) {
                    i.call(e, t, r)
                }, function() {
                    t.onAfterMiddleware.dispatch(t), e.progress = Math.min(100, e.progress + t.progressChunk), e.onProgress.dispatch(e, t), t.error ? e.onError.dispatch(t.error, e, t) : e.onLoad.dispatch(e, t), e._resourcesParsing.splice(e._resourcesParsing.indexOf(t), 1), e._queue.idle() && 0 === e._resourcesParsing.length && e._onComplete()
                }, !0)
            }, s(t, [{
                key: "concurrency",
                get: function() {
                    return this._queue.concurrency
                },
                set: function(t) {
                    this._queue.concurrency = t
                }
            }]), t
        }();
    _._defaultBeforeMiddleware = [], _._defaultAfterMiddleware = [], _.pre = function(t) {
        return _._defaultBeforeMiddleware.push(t), _
    }, _.use = function(t) {
        return _._defaultAfterMiddleware.push(t), _
    }
}, function(t, e, i) {
    "use strict";

    function r() {
        return function(t, e) {
            if (!t.data) return void e();
            if (t.xhr && t.xhrType === n.Resource.XHR_RESPONSE_TYPE.BLOB)
                if (window.Blob && "string" != typeof t.data) {
                    if (0 === t.data.type.indexOf("image")) {
                        var i = s.createObjectURL(t.data);
                        return t.blob = t.data, t.data = new Image, t.data.src = i, t.type = n.Resource.TYPE.IMAGE, void(t.data.onload = function() {
                            s.revokeObjectURL(i), t.data.onload = null, e()
                        })
                    }
                } else {
                    var r = t.xhr.getResponseHeader("content-type");
                    if (r && 0 === r.indexOf("image")) return t.data = new Image, t.data.src = "data:" + r + ";base64," + (0, o.encodeBinary)(t.xhr.responseText), t.type = n.Resource.TYPE.IMAGE, void(t.data.onload = function() {
                        t.data.onload = null, e()
                    })
                }
            e()
        }
    }
    e.__esModule = !0, e.blobMiddlewareFactory = r;
    var n = i(44),
        o = i(101),
        s = window.URL || window.webkitURL
}, function(t, e, i) {
    "use strict";
    t.exports = {
        isString: function(t) {
            return "string" == typeof t
        },
        isObject: function(t) {
            return "object" == typeof t && null !== t
        },
        isNull: function(t) {
            return null === t
        },
        isNullOrUndefined: function(t) {
            return null == t
        }
    }
}, , , , , , , , , , function(t, e, i) {
    function r(t, e) {
        this._id = t, this._clearFn = e
    }
    var n = Function.prototype.apply;
    e.setTimeout = function() {
        return new r(n.call(setTimeout, window, arguments), clearTimeout)
    }, e.setInterval = function() {
        return new r(n.call(setInterval, window, arguments), clearInterval)
    }, e.clearTimeout = e.clearInterval = function(t) {
        t && t.close()
    }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
        this._clearFn.call(window, this._id)
    }, e.enroll = function(t, e) {
        clearTimeout(t._idleTimeoutId), t._idleTimeout = e
    }, e.unenroll = function(t) {
        clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
    }, e._unrefActive = e.active = function(t) {
        clearTimeout(t._idleTimeoutId);
        var e = t._idleTimeout;
        e >= 0 && (t._idleTimeoutId = setTimeout(function() {
            t._onTimeout && t._onTimeout()
        }, e))
    }, i(352), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate
}, , function(t, e, i) {
    "use strict";
    var r, n, o, s, s, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    ! function(i) {
        if ("object" === a(e) && void 0 !== t) t.exports = i();
        else {
            n = [], r = i, void 0 !== (o = "function" == typeof r ? r.apply(e, n) : r) && (t.exports = o)
        }
    }(function() {
        return function() {
            function t(e, i, r) {
                function n(a, h) {
                    if (!i[a]) {
                        if (!e[a]) {
                            var u = "function" == typeof s && s;
                            if (!h && u) return s(a, !0);
                            if (o) return o(a, !0);
                            var l = new Error("Cannot find module '" + a + "'");
                            throw l.code = "MODULE_NOT_FOUND", l
                        }
                        var c = i[a] = {
                            exports: {}
                        };
                        e[a][0].call(c.exports, function(t) {
                            var i = e[a][1][t];
                            return n(i || t)
                        }, c, c.exports, t, e, i, r)
                    }
                    return i[a].exports
                }
                for (var o = "function" == typeof s && s, a = 0; a < r.length; a++) n(r[a]);
                return n
            }
            return t
        }()({
            1: [function(t, e, i) {
                var r = this && this.__extends || function() {
                    var t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    };
                    return function(e, i) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, i), e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                    }
                }();
                Object.defineProperty(i, "__esModule", {
                    value: !0
                });
                var n = t("./Particle"),
                    o = PIXI.Texture,
                    s = function(t) {
                        function e(e) {
                            var i = t.call(this, e) || this;
                            return i.textures = null, i.duration = 0, i.framerate = 0, i.elapsed = 0, i.loop = !1, i
                        }
                        return r(e, t), e.prototype.init = function() {
                            this.Particle_init(), this.elapsed = 0, this.framerate < 0 && (this.duration = this.maxLife, this.framerate = this.textures.length / this.duration)
                        }, e.prototype.applyArt = function(t) {
                            this.textures = t.textures, this.framerate = t.framerate, this.duration = t.duration, this.loop = t.loop
                        }, e.prototype.update = function(t) {
                            var e = this.Particle_update(t);
                            if (e >= 0) {
                                this.elapsed += t, this.elapsed > this.duration && (this.loop ? this.elapsed = this.elapsed % this.duration : this.elapsed = this.duration - 1e-6);
                                var i = this.elapsed * this.framerate + 1e-7 | 0;
                                this.texture = this.textures[i] || PIXI.Texture.EMPTY
                            }
                            return e
                        }, e.prototype.destroy = function() {
                            this.Particle_destroy(), this.textures = null
                        }, e.parseArt = function(t) {
                            for (var e, i, r, n, s, a = [], h = 0; h < t.length; ++h) {
                                e = t[h], a[h] = i = {}, i.textures = s = [], r = e.textures;
                                for (var u = 0; u < r.length; ++u)
                                    if ("string" == typeof(n = r[u])) s.push(o.fromImage(n));
                                    else if (n instanceof o) s.push(n);
                                else {
                                    var l = n.count || 1;
                                    for (n = "string" == typeof n.texture ? o.fromImage(n.texture) : n.texture; l > 0; --l) s.push(n)
                                }
                                "matchLife" == e.framerate ? (i.framerate = -1, i.duration = 0, i.loop = !1) : (i.loop = !!e.loop, i.framerate = e.framerate > 0 ? e.framerate : 60, i.duration = s.length / i.framerate)
                            }
                            return a
                        }, e
                    }(n.default);
                i.default = s
            }, {
                "./Particle": 3
            }],
            2: [function(t, e, i) {
                Object.defineProperty(i, "__esModule", {
                    value: !0
                });
                var r = t("./ParticleUtils"),
                    n = t("./Particle"),
                    o = t("./PropertyNode"),
                    s = PIXI.ticker.shared,
                    a = new PIXI.Point,
                    h = function() {
                        function t(t, e, i) {
                            this._particleConstructor = n.default, this.particleImages = null, this.startAlpha = null, this.startSpeed = null, this.minimumSpeedMultiplier = 1, this.acceleration = null, this.maxSpeed = NaN, this.startScale = null, this.minimumScaleMultiplier = 1, this.startColor = null, this.minLifetime = 0, this.maxLifetime = 0, this.minStartRotation = 0, this.maxStartRotation = 0, this.noRotation = !1, this.minRotationSpeed = 0, this.maxRotationSpeed = 0, this.particleBlendMode = 0, this.customEase = null, this.extraData = null, this._frequency = 1, this.spawnChance = 1, this.maxParticles = 1e3, this.emitterLifetime = -1, this.spawnPos = null, this.spawnType = null, this._spawnFunc = null, this.spawnRect = null, this.spawnCircle = null, this.particlesPerWave = 1, this.particleSpacing = 0, this.angleStart = 0, this.rotation = 0, this.ownerPos = null, this._prevEmitterPos = null, this._prevPosIsValid = !1, this._posChanged = !1, this._parent = null, this.addAtBack = !1, this.particleCount = 0, this._emit = !1, this._spawnTimer = 0, this._emitterLife = -1, this._activeParticlesFirst = null, this._activeParticlesLast = null, this._poolFirst = null, this._origConfig = null, this._origArt = null, this._autoUpdate = !1, this._destroyWhenComplete = !1, this._completeCallback = null, this.parent = t, e && i && this.init(e, i), this.recycle = this.recycle, this.update = this.update, this.rotate = this.rotate, this.updateSpawnPos = this.updateSpawnPos, this.updateOwnerPos = this.updateOwnerPos
                        }
                        return Object.defineProperty(t.prototype, "frequency", {
                            get: function() {
                                return this._frequency
                            },
                            set: function(t) {
                                this._frequency = "number" == typeof t && t > 0 ? t : 1
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "particleConstructor", {
                            get: function() {
                                return this._particleConstructor
                            },
                            set: function(t) {
                                if (t != this._particleConstructor) {
                                    this._particleConstructor = t, this.cleanup();
                                    for (var e = this._poolFirst; e; e = e.next) e.destroy();
                                    this._poolFirst = null, this._origConfig && this._origArt && this.init(this._origArt, this._origConfig)
                                }
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "parent", {
                            get: function() {
                                return this._parent
                            },
                            set: function(t) {
                                this.cleanup(), this._parent = t
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.prototype.init = function(t, e) {
                            if (t && e) {
                                this.cleanup(), this._origConfig = e, this._origArt = t, t = Array.isArray(t) ? t.slice() : [t];
                                var i = this._particleConstructor;
                                this.particleImages = i.parseArt ? i.parseArt(t) : t, e.alpha ? this.startAlpha = o.default.createList(e.alpha) : this.startAlpha = new o.default(1, 0), e.speed ? (this.startSpeed = o.default.createList(e.speed), this.minimumSpeedMultiplier = e.speed.minimumSpeedMultiplier || 1) : (this.minimumSpeedMultiplier = 1, this.startSpeed = new o.default(0, 0));
                                var n = e.acceleration;
                                n && (n.x || n.y) ? (this.startSpeed.next = null, this.acceleration = new PIXI.Point(n.x, n.y), this.maxSpeed = e.maxSpeed || NaN) : this.acceleration = new PIXI.Point, e.scale ? (this.startScale = o.default.createList(e.scale), this.minimumScaleMultiplier = e.scale.minimumScaleMultiplier || 1) : (this.startScale = new o.default(1, 0), this.minimumScaleMultiplier = 1), e.color ? this.startColor = o.default.createList(e.color) : this.startColor = new o.default({
                                    r: 255,
                                    g: 255,
                                    b: 255
                                }, 0), e.startRotation ? (this.minStartRotation = e.startRotation.min, this.maxStartRotation = e.startRotation.max) : this.minStartRotation = this.maxStartRotation = 0, e.noRotation && (this.minStartRotation || this.maxStartRotation) ? this.noRotation = !!e.noRotation : this.noRotation = !1, e.rotationSpeed ? (this.minRotationSpeed = e.rotationSpeed.min, this.maxRotationSpeed = e.rotationSpeed.max) : this.minRotationSpeed = this.maxRotationSpeed = 0, this.minLifetime = e.lifetime.min, this.maxLifetime = e.lifetime.max, this.particleBlendMode = r.default.getBlendMode(e.blendMode), e.ease ? this.customEase = "function" == typeof e.ease ? e.ease : r.default.generateEase(e.ease) : this.customEase = null, i.parseData ? this.extraData = i.parseData(e.extraData) : this.extraData = e.extraData || null, this.spawnRect = this.spawnCircle = null, this.particlesPerWave = 1, e.particlesPerWave && e.particlesPerWave > 1 && (this.particlesPerWave = e.particlesPerWave), this.particleSpacing = 0, this.angleStart = 0;
                                var s;
                                switch (e.spawnType) {
                                    case "rect":
                                        this.spawnType = "rect", this._spawnFunc = this._spawnRect;
                                        var a = e.spawnRect;
                                        this.spawnRect = new PIXI.Rectangle(a.x, a.y, a.w, a.h);
                                        break;
                                    case "circle":
                                        this.spawnType = "circle", this._spawnFunc = this._spawnCircle, s = e.spawnCircle, this.spawnCircle = new PIXI.Circle(s.x, s.y, s.r);
                                        break;
                                    case "ring":
                                        this.spawnType = "ring", this._spawnFunc = this._spawnRing, s = e.spawnCircle, this.spawnCircle = new PIXI.Circle(s.x, s.y, s.r), this.spawnCircle.minRadius = s.minR;
                                        break;
                                    case "burst":
                                        this.spawnType = "burst", this._spawnFunc = this._spawnBurst, this.particleSpacing = e.particleSpacing, this.angleStart = e.angleStart ? e.angleStart : 0;
                                        break;
                                    case "point":
                                    default:
                                        this.spawnType = "point", this._spawnFunc = this._spawnPoint
                                }
                                this.frequency = e.frequency, this.spawnChance = "number" == typeof e.spawnChance && e.spawnChance > 0 ? e.spawnChance : 1, this.emitterLifetime = e.emitterLifetime || -1, this.maxParticles = e.maxParticles > 0 ? e.maxParticles : 1e3, this.addAtBack = !!e.addAtBack, this.rotation = 0, this.ownerPos = new PIXI.Point, this.spawnPos = new PIXI.Point(e.pos.x, e.pos.y), this._prevEmitterPos = this.spawnPos.clone(), this._prevPosIsValid = !1, this._spawnTimer = 0, this.emit = void 0 === e.emit || !!e.emit, this.autoUpdate = void 0 !== e.autoUpdate && !!e.autoUpdate
                            }
                        }, t.prototype.recycle = function(t) {
                            t.next && (t.next.prev = t.prev), t.prev && (t.prev.next = t.next), t == this._activeParticlesLast && (this._activeParticlesLast = t.prev), t == this._activeParticlesFirst && (this._activeParticlesFirst = t.next), t.prev = null, t.next = this._poolFirst, this._poolFirst = t, t.parent && t.parent.removeChild(t), --this.particleCount
                        }, t.prototype.rotate = function(t) {
                            if (this.rotation != t) {
                                var e = t - this.rotation;
                                this.rotation = t, r.default.rotatePoint(e, this.spawnPos), this._posChanged = !0
                            }
                        }, t.prototype.updateSpawnPos = function(t, e) {
                            this._posChanged = !0, this.spawnPos.x = t, this.spawnPos.y = e
                        }, t.prototype.updateOwnerPos = function(t, e) {
                            this._posChanged = !0, this.ownerPos.x = t, this.ownerPos.y = e
                        }, t.prototype.resetPositionTracking = function() {
                            this._prevPosIsValid = !1
                        }, Object.defineProperty(t.prototype, "emit", {
                            get: function() {
                                return this._emit
                            },
                            set: function(t) {
                                this._emit = !!t, this._emitterLife = this.emitterLifetime
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(t.prototype, "autoUpdate", {
                            get: function() {
                                return this._autoUpdate
                            },
                            set: function(t) {
                                this._autoUpdate && !t ? s.remove(this.update, this) : !this._autoUpdate && t && s.add(this.update, this), this._autoUpdate = !!t
                            },
                            enumerable: !0,
                            configurable: !0
                        }), t.prototype.playOnceAndDestroy = function(t) {
                            this.autoUpdate = !0, this.emit = !0, this._destroyWhenComplete = !0, this._completeCallback = t
                        }, t.prototype.playOnce = function(t) {
                            this.emit = !0, this._completeCallback = t
                        }, t.prototype.update = function(t) {
                            if (this._autoUpdate && (t = t / PIXI.settings.TARGET_FPMS / 1e3), this._parent) {
                                var e, i, r;
                                for (i = this._activeParticlesFirst; i; i = r) r = i.next, i.update(t);
                                var n, o;
                                this._prevPosIsValid && (n = this._prevEmitterPos.x, o = this._prevEmitterPos.y);
                                var s = this.ownerPos.x + this.spawnPos.x,
                                    a = this.ownerPos.y + this.spawnPos.y;
                                if (this._emit)
                                    for (this._spawnTimer -= t; this._spawnTimer <= 0;) {
                                        if (this._emitterLife > 0 && (this._emitterLife -= this._frequency, this._emitterLife <= 0)) {
                                            this._spawnTimer = 0, this._emitterLife = 0, this.emit = !1;
                                            break
                                        }
                                        if (this.particleCount >= this.maxParticles) this._spawnTimer += this._frequency;
                                        else {
                                            var h = void 0;
                                            if (h = this.minLifetime == this.maxLifetime ? this.minLifetime : Math.random() * (this.maxLifetime - this.minLifetime) + this.minLifetime, -this._spawnTimer < h) {
                                                var u = void 0,
                                                    l = void 0;
                                                if (this._prevPosIsValid && this._posChanged) {
                                                    var c = 1 + this._spawnTimer / t;
                                                    u = (s - n) * c + n, l = (a - o) * c + o
                                                } else u = s, l = a;
                                                e = 0;
                                                for (var f = Math.min(this.particlesPerWave, this.maxParticles - this.particleCount); e < f; ++e)
                                                    if (!(this.spawnChance < 1 && Math.random() >= this.spawnChance)) {
                                                        var d = void 0;
                                                        if (this._poolFirst ? (d = this._poolFirst, this._poolFirst = this._poolFirst.next, d.next = null) : d = new this.particleConstructor(this), this.particleImages.length > 1 ? d.applyArt(this.particleImages[Math.floor(Math.random() * this.particleImages.length)]) : d.applyArt(this.particleImages[0]), d.alphaList.reset(this.startAlpha), 1 != this.minimumSpeedMultiplier && (d.speedMultiplier = Math.random() * (1 - this.minimumSpeedMultiplier) + this.minimumSpeedMultiplier), d.speedList.reset(this.startSpeed), d.acceleration.x = this.acceleration.x, d.acceleration.y = this.acceleration.y, d.maxSpeed = this.maxSpeed, 1 != this.minimumScaleMultiplier && (d.scaleMultiplier = Math.random() * (1 - this.minimumScaleMultiplier) + this.minimumScaleMultiplier), d.scaleList.reset(this.startScale), d.colorList.reset(this.startColor), this.minRotationSpeed == this.maxRotationSpeed ? d.rotationSpeed = this.minRotationSpeed : d.rotationSpeed = Math.random() * (this.maxRotationSpeed - this.minRotationSpeed) + this.minRotationSpeed, d.noRotation = this.noRotation, d.maxLife = h, d.blendMode = this.particleBlendMode, d.ease = this.customEase, d.extraData = this.extraData, this._spawnFunc(d, u, l, e), d.init(), d.update(-this._spawnTimer), d.parent) {
                                                            var p = this._parent.children;
                                                            if (p[0] == d) p.shift();
                                                            else if (p[p.length - 1] == d) p.pop();
                                                            else {
                                                                var _ = p.indexOf(d);
                                                                p.splice(_, 1)
                                                            }
                                                            this.addAtBack ? p.unshift(d) : p.push(d)
                                                        } else this.addAtBack ? this._parent.addChildAt(d, 0) : this._parent.addChild(d);
                                                        this._activeParticlesLast ? (this._activeParticlesLast.next = d, d.prev = this._activeParticlesLast, this._activeParticlesLast = d) : this._activeParticlesLast = this._activeParticlesFirst = d, ++this.particleCount
                                                    }
                                            }
                                            this._spawnTimer += this._frequency
                                        }
                                    }
                                this._posChanged && (this._prevEmitterPos.x = s, this._prevEmitterPos.y = a, this._prevPosIsValid = !0, this._posChanged = !1), this._emit || this._activeParticlesFirst || (this._completeCallback && this._completeCallback(), this._destroyWhenComplete && this.destroy())
                            }
                        }, t.prototype._spawnPoint = function(t, e, i) {
                            this.minStartRotation == this.maxStartRotation ? t.rotation = this.minStartRotation + this.rotation : t.rotation = Math.random() * (this.maxStartRotation - this.minStartRotation) + this.minStartRotation + this.rotation, t.position.x = e, t.position.y = i
                        }, t.prototype._spawnRect = function(t, e, i) {
                            this.minStartRotation == this.maxStartRotation ? t.rotation = this.minStartRotation + this.rotation : t.rotation = Math.random() * (this.maxStartRotation - this.minStartRotation) + this.minStartRotation + this.rotation, a.x = Math.random() * this.spawnRect.width + this.spawnRect.x, a.y = Math.random() * this.spawnRect.height + this.spawnRect.y, 0 !== this.rotation && r.default.rotatePoint(this.rotation, a), t.position.x = e + a.x, t.position.y = i + a.y
                        }, t.prototype._spawnCircle = function(t, e, i) {
                            this.minStartRotation == this.maxStartRotation ? t.rotation = this.minStartRotation + this.rotation : t.rotation = Math.random() * (this.maxStartRotation - this.minStartRotation) + this.minStartRotation + this.rotation, a.x = Math.random() * this.spawnCircle.radius, a.y = 0, r.default.rotatePoint(360 * Math.random(), a), a.x += this.spawnCircle.x, a.y += this.spawnCircle.y, 0 !== this.rotation && r.default.rotatePoint(this.rotation, a), t.position.x = e + a.x, t.position.y = i + a.y
                        }, t.prototype._spawnRing = function(t, e, i) {
                            var n = this.spawnCircle;
                            this.minStartRotation == this.maxStartRotation ? t.rotation = this.minStartRotation + this.rotation : t.rotation = Math.random() * (this.maxStartRotation - this.minStartRotation) + this.minStartRotation + this.rotation, n.minRadius == n.radius ? a.x = Math.random() * (n.radius - n.minRadius) + n.minRadius : a.x = n.radius, a.y = 0;
                            var o = 360 * Math.random();
                            t.rotation += o, r.default.rotatePoint(o, a), a.x += this.spawnCircle.x, a.y += this.spawnCircle.y, 0 !== this.rotation && r.default.rotatePoint(this.rotation, a), t.position.x = e + a.x, t.position.y = i + a.y
                        }, t.prototype._spawnBurst = function(t, e, i, r) {
                            0 === this.particleSpacing ? t.rotation = 360 * Math.random() : t.rotation = this.angleStart + this.particleSpacing * r + this.rotation, t.position.x = e, t.position.y = i
                        }, t.prototype.cleanup = function() {
                            var t, e;
                            for (t = this._activeParticlesFirst; t; t = e) e = t.next, this.recycle(t), t.parent && t.parent.removeChild(t);
                            this._activeParticlesFirst = this._activeParticlesLast = null, this.particleCount = 0
                        }, t.prototype.destroy = function() {
                            this.autoUpdate = !1, this.cleanup();
                            for (var t, e = this._poolFirst; e; e = t) t = e.next, e.destroy();
                            this._poolFirst = this._parent = this.particleImages = this.spawnPos = this.ownerPos = this.startColor = this.startScale = this.startAlpha = this.startSpeed = this.customEase = this._completeCallback = null
                        }, t
                    }();
                i.default = h
            }, {
                "./Particle": 3,
                "./ParticleUtils": 4,
                "./PropertyNode": 7
            }],
            3: [function(t, e, i) {
                var r = this && this.__extends || function() {
                    var t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    };
                    return function(e, i) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, i), e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                    }
                }();
                Object.defineProperty(i, "__esModule", {
                    value: !0
                });
                var n = t("./ParticleUtils"),
                    o = t("./PropertyList"),
                    s = PIXI.Sprite,
                    a = function(t) {
                        function e(i) {
                            var r = t.call(this) || this;
                            return r.emitter = i, r.anchor.x = r.anchor.y = .5, r.velocity = new PIXI.Point, r.maxLife = 0, r.age = 0, r.ease = null, r.extraData = null, r.alphaList = new o.default, r.speedList = new o.default, r.speedMultiplier = 1, r.acceleration = new PIXI.Point, r.maxSpeed = NaN, r.scaleList = new o.default, r.scaleMultiplier = 1, r.colorList = new o.default(!0), r._doAlpha = !1, r._doScale = !1, r._doSpeed = !1, r._doAcceleration = !1, r._doColor = !1, r._doNormalMovement = !1, r._oneOverLife = 0, r.next = null, r.prev = null, r.init = r.init, r.Particle_init = e.prototype.init, r.update = r.update, r.Particle_update = e.prototype.update, r.Sprite_destroy = t.prototype.destroy, r.Particle_destroy = e.prototype.destroy, r.applyArt = r.applyArt, r.kill = r.kill, r
                        }
                        return r(e, t), e.prototype.init = function() {
                            this.age = 0, this.velocity.x = this.speedList.current.value * this.speedMultiplier, this.velocity.y = 0, n.default.rotatePoint(this.rotation, this.velocity), this.noRotation ? this.rotation = 0 : this.rotation *= n.default.DEG_TO_RADS, this.rotationSpeed *= n.default.DEG_TO_RADS, this.alpha = this.alphaList.current.value, this.scale.x = this.scale.y = this.scaleList.current.value, this._doAlpha = !!this.alphaList.current.next, this._doSpeed = !!this.speedList.current.next, this._doScale = !!this.scaleList.current.next, this._doColor = !!this.colorList.current.next, this._doAcceleration = 0 !== this.acceleration.x || 0 !== this.acceleration.y, this._doNormalMovement = this._doSpeed || 0 !== this.speedList.current.value || this._doAcceleration, this._oneOverLife = 1 / this.maxLife;
                            var t = this.colorList.current.value;
                            this.tint = n.default.combineRGBComponents(t.r, t.g, t.b), this.visible = !0
                        }, e.prototype.applyArt = function(t) {
                            this.texture = t || PIXI.Texture.EMPTY
                        }, e.prototype.update = function(t) {
                            if (this.age += t, this.age >= this.maxLife) return this.kill(), -1;
                            var e = this.age * this._oneOverLife;
                            if (this.ease && (e = 4 == this.ease.length ? this.ease(e, 0, 1, 1) : this.ease(e)), this._doAlpha && (this.alpha = this.alphaList.interpolate(e)), this._doScale) {
                                var i = this.scaleList.interpolate(e) * this.scaleMultiplier;
                                this.scale.x = this.scale.y = i
                            }
                            if (this._doNormalMovement) {
                                if (this._doSpeed) {
                                    var r = this.speedList.interpolate(e) * this.speedMultiplier;
                                    n.default.normalize(this.velocity), n.default.scaleBy(this.velocity, r)
                                } else if (this._doAcceleration && (this.velocity.x += this.acceleration.x * t, this.velocity.y += this.acceleration.y * t, this.maxSpeed)) {
                                    var o = n.default.length(this.velocity);
                                    o > this.maxSpeed && n.default.scaleBy(this.velocity, this.maxSpeed / o)
                                }
                                this.position.x += this.velocity.x * t, this.position.y += this.velocity.y * t
                            }
                            return this._doColor && (this.tint = this.colorList.interpolate(e)), 0 !== this.rotationSpeed ? this.rotation += this.rotationSpeed * t : this.acceleration && !this.noRotation && (this.rotation = Math.atan2(this.velocity.y, this.velocity.x)), e
                        }, e.prototype.kill = function() {
                            this.emitter.recycle(this)
                        }, e.prototype.destroy = function() {
                            this.parent && this.parent.removeChild(this), this.Sprite_destroy(), this.emitter = this.velocity = this.colorList = this.scaleList = this.alphaList = this.speedList = this.ease = this.next = this.prev = null
                        }, e.parseArt = function(t) {
                            var e;
                            for (e = t.length; e >= 0; --e) "string" == typeof t[e] && (t[e] = PIXI.Texture.fromImage(t[e]));
                            if (n.default.verbose)
                                for (e = t.length - 1; e > 0; --e)
                                    if (t[e].baseTexture != t[e - 1].baseTexture) {
                                        window.console && console.warn("PixiParticles: using particle textures from different images may hinder performance in WebGL");
                                        break
                                    }
                            return t
                        }, e.parseData = function(t) {
                            return t
                        }, e
                    }(s);
                i.default = a
            }, {
                "./ParticleUtils": 4,
                "./PropertyList": 6
            }],
            4: [function(t, e, i) {
                Object.defineProperty(i, "__esModule", {
                    value: !0
                });
                var r = PIXI.BLEND_MODES,
                    n = t("./PropertyNode"),
                    o = {
                        verbose: !1,
                        DEG_TO_RADS: Math.PI / 180,
                        rotatePoint: function(t, e) {
                            if (t) {
                                t *= o.DEG_TO_RADS;
                                var i = Math.sin(t),
                                    r = Math.cos(t),
                                    n = e.x * r - e.y * i,
                                    s = e.x * i + e.y * r;
                                e.x = n, e.y = s
                            }
                        },
                        combineRGBComponents: function(t, e, i) {
                            return t << 16 | e << 8 | i
                        },
                        normalize: function(t) {
                            var e = 1 / o.length(t);
                            t.x *= e, t.y *= e
                        },
                        scaleBy: function(t, e) {
                            t.x *= e, t.y *= e
                        },
                        length: function(t) {
                            return Math.sqrt(t.x * t.x + t.y * t.y)
                        },
                        hexToRGB: function(t, e) {
                            e || (e = {}), "#" == t.charAt(0) ? t = t.substr(1) : 0 === t.indexOf("0x") && (t = t.substr(2));
                            var i;
                            return 8 == t.length && (i = t.substr(0, 2), t = t.substr(2)), e.r = parseInt(t.substr(0, 2), 16), e.g = parseInt(t.substr(2, 2), 16), e.b = parseInt(t.substr(4, 2), 16), i && (e.a = parseInt(i, 16)), e
                        },
                        generateEase: function(t) {
                            var e = t.length,
                                i = 1 / e;
                            return function(r) {
                                var n, o, s = e * r | 0;
                                return n = (r - s * i) * e, o = t[s] || t[e - 1], o.s + n * (2 * (1 - n) * (o.cp - o.s) + n * (o.e - o.s))
                            }
                        },
                        getBlendMode: function(t) {
                            if (!t) return r.NORMAL;
                            for (t = t.toUpperCase(); t.indexOf(" ") >= 0;) t = t.replace(" ", "_");
                            return r[t] || r.NORMAL
                        },
                        createSteppedGradient: function(t, e) {
                            void 0 === e && (e = 10), ("number" != typeof e || e <= 0) && (e = 10);
                            var i = new n.default(t[0].value, t[0].time);
                            i.isStepped = !0;
                            for (var r = i, s = t[0], a = 1, h = t[a], u = 1; u < e; ++u) {
                                for (var l = u / e; l > h.time;) s = h, h = t[++a];
                                l = (l - s.time) / (h.time - s.time);
                                var c = o.hexToRGB(s.value),
                                    f = o.hexToRGB(h.value),
                                    d = {};
                                d.r = (f.r - c.r) * l + c.r, d.g = (f.g - c.g) * l + c.g, d.b = (f.b - c.b) * l + c.b, r.next = new n.default(d, u / e), r = r.next
                            }
                            return i
                        }
                    };
                i.default = o
            }, {
                "./PropertyNode": 7
            }],
            5: [function(t, e, i) {
                var r = this && this.__extends || function() {
                    var t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    };
                    return function(e, i) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, i), e.prototype = null === i ? Object.create(i) : (r.prototype = i.prototype, new r)
                    }
                }();
                Object.defineProperty(i, "__esModule", {
                    value: !0
                });
                var n = t("./ParticleUtils"),
                    o = t("./Particle"),
                    s = new PIXI.Point,
                    a = ["pow", "sqrt", "abs", "floor", "round", "ceil", "E", "PI", "sin", "cos", "tan", "asin", "acos", "atan", "atan2", "log"],
                    h = new RegExp(["[01234567890\\.\\*\\-\\+\\/\\(\\)x ,]"].concat(a).join("|"), "g"),
                    u = function(t) {
                        for (var e = t.match(h), i = e.length - 1; i >= 0; --i) a.indexOf(e[i]) >= 0 && (e[i] = "Math." + e[i]);
                        return t = e.join(""), new Function("x", "return " + t + ";")
                    },
                    l = function(t) {
                        function e(e) {
                            var i = t.call(this, e) || this;
                            return i.path = null, i.initialRotation = 0, i.initialPosition = new PIXI.Point, i.movement = 0, i
                        }
                        return r(e, t), e.prototype.init = function() {
                            this.initialRotation = this.rotation, this.Particle_init(), this.path = this.extraData.path, this._doNormalMovement = !this.path, this.movement = 0, this.initialPosition.x = this.position.x, this.initialPosition.y = this.position.y
                        }, e.prototype.update = function(t) {
                            var e = this.Particle_update(t);
                            if (e >= 0 && this.path) {
                                var i = this.speedList.interpolate(e) * this.speedMultiplier;
                                this.movement += i * t, s.x = this.movement, s.y = this.path(this.movement), n.default.rotatePoint(this.initialRotation, s), this.position.x = this.initialPosition.x + s.x, this.position.y = this.initialPosition.y + s.y
                            }
                            return e
                        }, e.prototype.destroy = function() {
                            this.Particle_destroy(), this.path = this.initialPosition = null
                        }, e.parseArt = function(t) {
                            return o.default.parseArt(t)
                        }, e.parseData = function(t) {
                            var e = {};
                            if (t && t.path) try {
                                e.path = u(t.path)
                            } catch (t) {
                                n.default.verbose && console.error("PathParticle: error in parsing path expression"), e.path = null
                            } else n.default.verbose && console.error("PathParticle requires a path string in extraData!"), e.path = null;
                            return e
                        }, e
                    }(o.default);
                i.default = l
            }, {
                "./Particle": 3,
                "./ParticleUtils": 4
            }],
            6: [function(t, e, i) {
                function r(t) {
                    return this.ease && (t = this.ease(t)), (this.next.value - this.current.value) * t + this.current.value
                }

                function n(t) {
                    this.ease && (t = this.ease(t));
                    var e = this.current.value,
                        i = this.next.value,
                        r = (i.r - e.r) * t + e.r,
                        n = (i.g - e.g) * t + e.g,
                        o = (i.b - e.b) * t + e.b;
                    return u.default.combineRGBComponents(r, n, o)
                }

                function o(t) {
                    for (this.ease && (t = this.ease(t)); t > this.next.time;) this.current = this.next, this.next = this.next.next;
                    return t = (t - this.current.time) / (this.next.time - this.current.time), (this.next.value - this.current.value) * t + this.current.value
                }

                function s(t) {
                    for (this.ease && (t = this.ease(t)); t > this.next.time;) this.current = this.next, this.next = this.next.next;
                    t = (t - this.current.time) / (this.next.time - this.current.time);
                    var e = this.current.value,
                        i = this.next.value,
                        r = (i.r - e.r) * t + e.r,
                        n = (i.g - e.g) * t + e.g,
                        o = (i.b - e.b) * t + e.b;
                    return u.default.combineRGBComponents(r, n, o)
                }

                function a(t) {
                    for (this.ease && (t = this.ease(t)); this.next && t > this.next.time;) this.current = this.next, this.next = this.next.next;
                    return this.current.value
                }

                function h(t) {
                    for (this.ease && (t = this.ease(t)); this.next && t > this.next.time;) this.current = this.next, this.next = this.next.next;
                    var e = this.current.value;
                    return u.default.combineRGBComponents(e.r, e.g, e.b)
                }
                Object.defineProperty(i, "__esModule", {
                    value: !0
                });
                var u = t("./ParticleUtils"),
                    l = function() {
                        function t(t) {
                            void 0 === t && (t = !1), this.current = null, this.next = null, this.isColor = !!t, this.interpolate = null, this.ease = null
                        }
                        return t.prototype.reset = function(t) {
                            this.current = t, this.next = t.next, this.next && this.next.time >= 1 ? this.interpolate = this.isColor ? n : r : t.isStepped ? this.interpolate = this.isColor ? h : a : this.interpolate = this.isColor ? s : o, this.ease = this.current.ease
                        }, t
                    }();
                i.default = l
            }, {
                "./ParticleUtils": 4
            }],
            7: [function(t, e, i) {
                Object.defineProperty(i, "__esModule", {
                    value: !0
                });
                var r = t("./ParticleUtils"),
                    n = function() {
                        function t(t, e, i) {
                            this.value = "string" == typeof t ? r.default.hexToRGB(t) : t, this.time = e, this.next = null, this.isStepped = !1, this.ease = i ? "function" == typeof i ? i : r.default.generateEase(i) : null
                        }
                        return t.createList = function(e) {
                            if (Array.isArray(e.list)) {
                                var i = e.list,
                                    r = void 0,
                                    n = void 0;
                                if (n = r = new t(i[0].value, i[0].time, e.ease), i.length > 2 || 2 === i.length && i[1].value !== i[0].value)
                                    for (var o = 1; o < i.length; ++o) r.next = new t(i[o].value, i[o].time), r = r.next;
                                return n.isStepped = !!e.isStepped, n
                            }
                            var s = new t(e.start, 0);
                            return e.end !== e.start && (s.next = new t(e.end, 1)), s
                        }, t
                    }();
                i.default = n
            }, {
                "./ParticleUtils": 4
            }],
            8: [function(t, e, i) {
                Object.defineProperty(i, "__esModule", {
                    value: !0
                });
                var r = t("./ParticleUtils.js");
                i.ParticleUtils = r.default;
                var n = t("./Particle.js");
                i.Particle = n.default;
                var o = t("./Emitter.js");
                i.Emitter = o.default;
                var s = t("./PathParticle.js");
                i.PathParticle = s.default;
                var a = t("./AnimatedParticle.js");
                i.AnimatedParticle = a.default
            }, {
                "./AnimatedParticle.js": 1,
                "./Emitter.js": 2,
                "./Particle.js": 3,
                "./ParticleUtils.js": 4,
                "./PathParticle.js": 5
            }],
            9: [function(t, e, i) {
                if (Object.defineProperty(i, "__esModule", {
                        value: !0
                    }), "undefined" == typeof PIXI) throw "pixi-particles requires pixi.js to be loaded first";
                PIXI.particles || (PIXI.particles = {});
                var r = t("./particles");
                window.PIXIParticles = {};
                for (var n in r) PIXI.particles[n] = r[n], window.PIXIParticles[n] = r[n]
            }, {
                "./particles": 8
            }]
        }, {}, [9])(9)
    })
}, function(t, e, i) {
    (function(r) {
        var n, o, s = void 0 !== t && t.exports && void 0 !== r ? r : this || window;
        (s._gsQueue || (s._gsQueue = [])).push(function() {
                "use strict";
                s._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                        var r = function(t) {
                                var e, i = [],
                                    r = t.length;
                                for (e = 0; e !== r; i.push(t[e++]));
                                return i
                            },
                            n = function(t, e, i) {
                                var r, n, o = t.cycle;
                                for (r in o) n = o[r], t[r] = "function" == typeof n ? n(i, e[i]) : n[i % n.length];
                                delete t.cycle
                            },
                            o = function(t, e, r) {
                                i.call(this, t, e, r), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = o.prototype.render
                            },
                            s = i._internals,
                            a = s.isSelector,
                            h = s.isArray,
                            u = o.prototype = i.to({}, .1, {}),
                            l = [];
                        o.version = "1.19.1", u.constructor = o, u.kill()._gc = !1, o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf, o.getTweensOf = i.getTweensOf, o.lagSmoothing = i.lagSmoothing, o.ticker = i.ticker, o.render = i.render, u.invalidate = function() {
                            return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                        }, u.updateTo = function(t, e) {
                            var r, n = this.ratio,
                                o = this.vars.immediateRender || t.immediateRender;
                            e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                            for (r in t) this.vars[r] = t[r];
                            if (this._initted || o)
                                if (e) this._initted = !1, o && this.render(0, !0, !0);
                                else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                                var s = this._totalTime;
                                this.render(0, !0, !1), this._initted = !1, this.render(s, !0, !1)
                            } else if (this._initted = !1, this._init(), this._time > 0 || o)
                                for (var a, h = 1 / (1 - n), u = this._firstPT; u;) a = u.s + u.c, u.c *= h, u.s = a - u.c, u = u._next;
                            return this
                        }, u.render = function(t, e, i) {
                            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                            var r, n, o, a, h, u, l, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
                                d = this._time,
                                p = this._totalTime,
                                _ = this._cycle,
                                v = this._duration,
                                m = this._rawPrevTime;
                            if (t >= f - 1e-7 && t >= 0 ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (m < 0 || t <= 0 && t >= -1e-7 || 1e-10 === m && "isPause" !== this.data) && m !== t && (i = !0, m > 1e-10 && (n = "onReverseComplete")), this._rawPrevTime = c = !e || t || m === t ? t : 1e-10)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== p || 0 === v && m > 0) && (n = "onReverseComplete", r = this._reversed), t < 0 && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (m >= 0 && (i = !0), this._rawPrevTime = c = !e || t || m === t ? t : 1e-10)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (a = v + this._repeatDelay, this._cycle = this._totalTime / a >> 0, 0 !== this._cycle && this._cycle === this._totalTime / a && p <= t && this._cycle--, this._time = this._totalTime - this._cycle * a, this._yoyo && 0 != (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : this._time < 0 && (this._time = 0)), this._easeType ? (h = this._time / v, u = this._easeType, l = this._easePower, (1 === u || 3 === u && h >= .5) && (h = 1 - h), 3 === u && (h *= 2), 1 === l ? h *= h : 2 === l ? h *= h * h : 3 === l ? h *= h * h * h : 4 === l && (h *= h * h * h * h), 1 === u ? this.ratio = 1 - h : 2 === u ? this.ratio = h : this._time / v < .5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / v)), d === this._time && !i && _ === this._cycle) return void(p !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = d, this._totalTime = p, this._rawPrevTime = m, this._cycle = _, s.lazyTweens.push(this), void(this._lazy = [t, e]);
                                this._time && !r ? this.ratio = this._ease.getRatio(this._time / v) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0), 0 === p && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== v || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                            this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== p || n) && this._callback("onUpdate")), this._cycle !== _ && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), n && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === v && 1e-10 === this._rawPrevTime && 1e-10 !== c && (this._rawPrevTime = 0)))
                        }, o.to = function(t, e, i) {
                            return new o(t, e, i)
                        }, o.from = function(t, e, i) {
                            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new o(t, e, i)
                        }, o.fromTo = function(t, e, i, r) {
                            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new o(t, e, r)
                        }, o.staggerTo = o.allTo = function(t, e, s, u, c, f, d) {
                            u = u || 0;
                            var p, _, v, m, g = 0,
                                y = [],
                                x = function() {
                                    s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), c.apply(d || s.callbackScope || this, f || l)
                                },
                                b = s.cycle,
                                T = s.startAt && s.startAt.cycle;
                            for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = r(t))), t = t || [], u < 0 && (t = r(t), t.reverse(), u *= -1), p = t.length - 1, v = 0; v <= p; v++) {
                                _ = {};
                                for (m in s) _[m] = s[m];
                                if (b && (n(_, t, v), null != _.duration && (e = _.duration, delete _.duration)), T) {
                                    T = _.startAt = {};
                                    for (m in s.startAt) T[m] = s.startAt[m];
                                    n(_.startAt, t, v)
                                }
                                _.delay = g + (_.delay || 0), v === p && c && (_.onComplete = x), y[v] = new o(t[v], e, _), g += u
                            }
                            return y
                        }, o.staggerFrom = o.allFrom = function(t, e, i, r, n, s, a) {
                            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, o.staggerTo(t, e, i, r, n, s, a)
                        }, o.staggerFromTo = o.allFromTo = function(t, e, i, r, n, s, a, h) {
                            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, o.staggerTo(t, e, r, n, s, a, h)
                        }, o.delayedCall = function(t, e, i, r, n) {
                            return new o(e, 0, {
                                delay: t,
                                onComplete: e,
                                onCompleteParams: i,
                                callbackScope: r,
                                onReverseComplete: e,
                                onReverseCompleteParams: i,
                                immediateRender: !1,
                                useFrames: n,
                                overwrite: 0
                            })
                        }, o.set = function(t, e) {
                            return new o(t, 0, e)
                        }, o.isTweening = function(t) {
                            return i.getTweensOf(t, !0).length > 0
                        };
                        var c = function(t, e) {
                                for (var r = [], n = 0, o = t._first; o;) o instanceof i ? r[n++] = o : (e && (r[n++] = o), r = r.concat(c(o, e)), n = r.length), o = o._next;
                                return r
                            },
                            f = o.getAllTweens = function(e) {
                                return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e))
                            };
                        o.killAll = function(t, i, r, n) {
                            null == i && (i = !0), null == r && (r = !0);
                            var o, s, a, h = f(0 != n),
                                u = h.length,
                                l = i && r && n;
                            for (a = 0; a < u; a++) s = h[a], (l || s instanceof e || (o = s.target === s.vars.onComplete) && r || i && !o) && (t ? s.totalTime(s._reversed ? 0 : s.totalDuration()) : s._enabled(!1, !1))
                        }, o.killChildTweensOf = function(t, e) {
                            if (null != t) {
                                var n, u, l, c, f, d = s.tweenLookup;
                                if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = r(t)), h(t))
                                    for (c = t.length; --c > -1;) o.killChildTweensOf(t[c], e);
                                else {
                                    n = [];
                                    for (l in d)
                                        for (u = d[l].target.parentNode; u;) u === t && (n = n.concat(d[l].tweens)), u = u.parentNode;
                                    for (f = n.length, c = 0; c < f; c++) e && n[c].totalTime(n[c].totalDuration()), n[c]._enabled(!1, !1)
                                }
                            }
                        };
                        var d = function(t, i, r, n) {
                            i = !1 !== i, r = !1 !== r, n = !1 !== n;
                            for (var o, s, a = f(n), h = i && r && n, u = a.length; --u > -1;) s = a[u], (h || s instanceof e || (o = s.target === s.vars.onComplete) && r || i && !o) && s.paused(t)
                        };
                        return o.pauseAll = function(t, e, i) {
                            d(!0, t, e, i)
                        }, o.resumeAll = function(t, e, i) {
                            d(!1, t, e, i)
                        }, o.globalTimeScale = function(e) {
                            var r = t._rootTimeline,
                                n = i.ticker.time;
                            return arguments.length ? (e = e || 1e-10, r._startTime = n - (n - r._startTime) * r._timeScale / e, r = t._rootFramesTimeline, n = i.ticker.frame, r._startTime = n - (n - r._startTime) * r._timeScale / e, r._timeScale = t._rootTimeline._timeScale = e, e) : r._timeScale
                        }, u.progress = function(t, e) {
                            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                        }, u.totalProgress = function(t, e) {
                            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                        }, u.time = function(t, e) {
                            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                        }, u.duration = function(e) {
                            return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                        }, u.totalDuration = function(t) {
                            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                        }, u.repeat = function(t) {
                            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                        }, u.repeatDelay = function(t) {
                            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                        }, u.yoyo = function(t) {
                            return arguments.length ? (this._yoyo = t, this) : this._yoyo
                        }, o
                    }, !0), s._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                        var r = function(t) {
                                e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                                var i, r, n = this.vars;
                                for (r in n) i = n[r], h(i) && -1 !== i.join("").indexOf("{self}") && (n[r] = this._swapSelfInParams(i));
                                h(n.tweens) && this.add(n.tweens, 0, n.align, n.stagger)
                            },
                            n = i._internals,
                            o = r._internals = {},
                            a = n.isSelector,
                            h = n.isArray,
                            u = n.lazyTweens,
                            l = n.lazyRender,
                            c = s._gsDefine.globals,
                            f = function(t) {
                                var e, i = {};
                                for (e in t) i[e] = t[e];
                                return i
                            },
                            d = function(t, e, i) {
                                var r, n, o = t.cycle;
                                for (r in o) n = o[r], t[r] = "function" == typeof n ? n(i, e[i]) : n[i % n.length];
                                delete t.cycle
                            },
                            p = o.pauseCallback = function() {},
                            _ = function(t) {
                                var e, i = [],
                                    r = t.length;
                                for (e = 0; e !== r; i.push(t[e++]));
                                return i
                            },
                            v = r.prototype = new e;
                        return r.version = "1.19.1", v.constructor = r, v.kill()._gc = v._forcingPlayhead = v._hasPause = !1, v.to = function(t, e, r, n) {
                            var o = r.repeat && c.TweenMax || i;
                            return e ? this.add(new o(t, e, r), n) : this.set(t, r, n)
                        }, v.from = function(t, e, r, n) {
                            return this.add((r.repeat && c.TweenMax || i).from(t, e, r), n)
                        }, v.fromTo = function(t, e, r, n, o) {
                            var s = n.repeat && c.TweenMax || i;
                            return e ? this.add(s.fromTo(t, e, r, n), o) : this.set(t, n, o)
                        }, v.staggerTo = function(t, e, n, o, s, h, u, l) {
                            var c, p, v = new r({
                                    onComplete: h,
                                    onCompleteParams: u,
                                    callbackScope: l,
                                    smoothChildTiming: this.smoothChildTiming
                                }),
                                m = n.cycle;
                            for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = _(t)), o = o || 0, o < 0 && (t = _(t), t.reverse(), o *= -1), p = 0; p < t.length; p++) c = f(n), c.startAt && (c.startAt = f(c.startAt), c.startAt.cycle && d(c.startAt, t, p)), m && (d(c, t, p), null != c.duration && (e = c.duration, delete c.duration)), v.to(t[p], e, c, p * o);
                            return this.add(v, s)
                        }, v.staggerFrom = function(t, e, i, r, n, o, s, a) {
                            return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, r, n, o, s, a)
                        }, v.staggerFromTo = function(t, e, i, r, n, o, s, a, h) {
                            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, r, n, o, s, a, h)
                        }, v.call = function(t, e, r, n) {
                            return this.add(i.delayedCall(0, t, e, r), n)
                        }, v.set = function(t, e, r) {
                            return r = this._parseTimeOrLabel(r, 0, !0), null == e.immediateRender && (e.immediateRender = r === this._time && !this._paused), this.add(new i(t, 0, e), r)
                        }, r.exportRoot = function(t, e) {
                            t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                            var n, o, s = new r(t),
                                a = s._timeline;
                            for (null == e && (e = !0), a._remove(s, !0), s._startTime = 0, s._rawPrevTime = s._time = s._totalTime = a._time, n = a._first; n;) o = n._next, e && n instanceof i && n.target === n.vars.onComplete || s.add(n, n._startTime - n._delay), n = o;
                            return a.add(s, 0), s
                        }, v.add = function(n, o, s, a) {
                            var u, l, c, f, d, p;
                            if ("number" != typeof o && (o = this._parseTimeOrLabel(o, 0, !0, n)), !(n instanceof t)) {
                                if (n instanceof Array || n && n.push && h(n)) {
                                    for (s = s || "normal", a = a || 0, u = o, l = n.length, c = 0; c < l; c++) h(f = n[c]) && (f = new r({
                                        tweens: f
                                    })), this.add(f, u), "string" != typeof f && "function" != typeof f && ("sequence" === s ? u = f._startTime + f.totalDuration() / f._timeScale : "start" === s && (f._startTime -= f.delay())), u += a;
                                    return this._uncache(!0)
                                }
                                if ("string" == typeof n) return this.addLabel(n, o);
                                if ("function" != typeof n) throw "Cannot add " + n + " into the timeline; it is not a tween, timeline, function, or string.";
                                n = i.delayedCall(0, n)
                            }
                            if (e.prototype.add.call(this, n, o), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                                for (d = this, p = d.rawTime() > n._startTime; d._timeline;) p && d._timeline.smoothChildTiming ? d.totalTime(d._totalTime, !0) : d._gc && d._enabled(!0, !1), d = d._timeline;
                            return this
                        }, v.remove = function(e) {
                            if (e instanceof t) {
                                this._remove(e, !1);
                                var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                                return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                            }
                            if (e instanceof Array || e && e.push && h(e)) {
                                for (var r = e.length; --r > -1;) this.remove(e[r]);
                                return this
                            }
                            return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                        }, v._remove = function(t, i) {
                            return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                        }, v.append = function(t, e) {
                            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                        }, v.insert = v.insertMultiple = function(t, e, i, r) {
                            return this.add(t, e || 0, i, r)
                        }, v.appendMultiple = function(t, e, i, r) {
                            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r)
                        }, v.addLabel = function(t, e) {
                            return this._labels[t] = this._parseTimeOrLabel(e), this
                        }, v.addPause = function(t, e, r, n) {
                            var o = i.delayedCall(0, p, r, n || this);
                            return o.vars.onComplete = o.vars.onReverseComplete = e, o.data = "isPause", this._hasPause = !0, this.add(o, t)
                        }, v.removeLabel = function(t) {
                            return delete this._labels[t], this
                        }, v.getLabelTime = function(t) {
                            return null != this._labels[t] ? this._labels[t] : -1
                        }, v._parseTimeOrLabel = function(e, i, r, n) {
                            var o;
                            if (n instanceof t && n.timeline === this) this.remove(n);
                            else if (n && (n instanceof Array || n.push && h(n)))
                                for (o = n.length; --o > -1;) n[o] instanceof t && n[o].timeline === this && this.remove(n[o]);
                            if ("string" == typeof i) return this._parseTimeOrLabel(i, r && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, r);
                            if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                            else {
                                if (-1 === (o = e.indexOf("="))) return null == this._labels[e] ? r ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                                i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, r) : this.duration()
                            }
                            return Number(e) + i
                        }, v.seek = function(t, e) {
                            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                        }, v.stop = function() {
                            return this.paused(!0)
                        }, v.gotoAndPlay = function(t, e) {
                            return this.play(t, e)
                        }, v.gotoAndStop = function(t, e) {
                            return this.pause(t, e)
                        }, v.render = function(t, e, i) {
                            this._gc && this._enabled(!0, !1);
                            var r, n, o, s, a, h, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
                                d = this._time,
                                p = this._startTime,
                                _ = this._timeScale,
                                v = this._paused;
                            if (t >= f - 1e-7 && t >= 0) this._totalTime = this._time = f, this._reversed || this._hasPausedChild() || (n = !0, s = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (a = !0, this._rawPrevTime > 1e-10 && (s = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = f + 1e-4;
                            else if (t < 1e-7)
                                if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (s = "onReverseComplete", n = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = n = !0, s = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (a = !0), this._rawPrevTime = t;
                                else {
                                    if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && n)
                                        for (r = this._first; r && 0 === r._startTime;) r._duration || (n = !1), r = r._next;
                                    t = 0, this._initted || (a = !0)
                                }
                            else {
                                if (this._hasPause && !this._forcingPlayhead && !e) {
                                    if (t >= d)
                                        for (r = this._first; r && r._startTime <= t && !h;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (h = r), r = r._next;
                                    else
                                        for (r = this._last; r && r._startTime >= t && !h;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (h = r), r = r._prev;
                                    h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                                }
                                this._totalTime = this._time = this._rawPrevTime = t
                            }
                            if (this._time !== d && this._first || i || a || h) {
                                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (c = this._time) >= d)
                                    for (r = this._first; r && (o = r._next, c === this._time && (!this._paused || v));)(r._active || r._startTime <= c && !r._paused && !r._gc) && (h === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = o;
                                else
                                    for (r = this._last; r && (o = r._prev, c === this._time && (!this._paused || v));) {
                                        if (r._active || r._startTime <= d && !r._paused && !r._gc) {
                                            if (h === r) {
                                                for (h = r._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev;
                                                h = null, this.pause()
                                            }
                                            r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                                        }
                                        r = o
                                    }
                                this._onUpdate && (e || (u.length && l(), this._callback("onUpdate"))), s && (this._gc || p !== this._startTime && _ === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (n && (u.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s)))
                            }
                        }, v._hasPausedChild = function() {
                            for (var t = this._first; t;) {
                                if (t._paused || t instanceof r && t._hasPausedChild()) return !0;
                                t = t._next
                            }
                            return !1
                        }, v.getChildren = function(t, e, r, n) {
                            n = n || -9999999999;
                            for (var o = [], s = this._first, a = 0; s;) s._startTime < n || (s instanceof i ? !1 !== e && (o[a++] = s) : (!1 !== r && (o[a++] = s), !1 !== t && (o = o.concat(s.getChildren(!0, e, r)), a = o.length))), s = s._next;
                            return o
                        }, v.getTweensOf = function(t, e) {
                            var r, n, o = this._gc,
                                s = [],
                                a = 0;
                            for (o && this._enabled(!0, !0), r = i.getTweensOf(t), n = r.length; --n > -1;)(r[n].timeline === this || e && this._contains(r[n])) && (s[a++] = r[n]);
                            return o && this._enabled(!1, !0), s
                        }, v.recent = function() {
                            return this._recent
                        }, v._contains = function(t) {
                            for (var e = t.timeline; e;) {
                                if (e === this) return !0;
                                e = e.timeline
                            }
                            return !1
                        }, v.shiftChildren = function(t, e, i) {
                            i = i || 0;
                            for (var r, n = this._first, o = this._labels; n;) n._startTime >= i && (n._startTime += t), n = n._next;
                            if (e)
                                for (r in o) o[r] >= i && (o[r] += t);
                            return this._uncache(!0)
                        }, v._kill = function(t, e) {
                            if (!t && !e) return this._enabled(!1, !1);
                            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), r = i.length, n = !1; --r > -1;) i[r]._kill(t, e) && (n = !0);
                            return n
                        }, v.clear = function(t) {
                            var e = this.getChildren(!1, !0, !0),
                                i = e.length;
                            for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                            return !1 !== t && (this._labels = {}), this._uncache(!0)
                        }, v.invalidate = function() {
                            for (var e = this._first; e;) e.invalidate(), e = e._next;
                            return t.prototype.invalidate.call(this)
                        }, v._enabled = function(t, i) {
                            if (t === this._gc)
                                for (var r = this._first; r;) r._enabled(t, !0), r = r._next;
                            return e.prototype._enabled.call(this, t, i)
                        }, v.totalTime = function(e, i, r) {
                            this._forcingPlayhead = !0;
                            var n = t.prototype.totalTime.apply(this, arguments);
                            return this._forcingPlayhead = !1, n
                        }, v.duration = function(t) {
                            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                        }, v.totalDuration = function(t) {
                            if (!arguments.length) {
                                if (this._dirty) {
                                    for (var e, i, r = 0, n = this._last, o = 999999999999; n;) e = n._prev, n._dirty && n.totalDuration(), n._startTime > o && this._sortChildren && !n._paused ? this.add(n, n._startTime - n._delay) : o = n._startTime, n._startTime < 0 && !n._paused && (r -= n._startTime, this._timeline.smoothChildTiming && (this._startTime += n._startTime / this._timeScale), this.shiftChildren(-n._startTime, !1, -9999999999), o = 0), i = n._startTime + n._totalDuration / n._timeScale, i > r && (r = i), n = e;
                                    this._duration = this._totalDuration = r, this._dirty = !1
                                }
                                return this._totalDuration
                            }
                            return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                        }, v.paused = function(e) {
                            if (!e)
                                for (var i = this._first, r = this._time; i;) i._startTime === r && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                            return t.prototype.paused.apply(this, arguments)
                        }, v.usesFrames = function() {
                            for (var e = this._timeline; e._timeline;) e = e._timeline;
                            return e === t._rootFramesTimeline
                        }, v.rawTime = function(t) {
                            return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                        }, r
                    }, !0), s._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                        var r = function(e) {
                                t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                            },
                            n = e._internals,
                            o = n.lazyTweens,
                            a = n.lazyRender,
                            h = s._gsDefine.globals,
                            u = new i(null, null, 1, 0),
                            l = r.prototype = new t;
                        return l.constructor = r, l.kill()._gc = !1, r.version = "1.19.1", l.invalidate = function() {
                            return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                        }, l.addCallback = function(t, i, r, n) {
                            return this.add(e.delayedCall(0, t, r, n), i)
                        }, l.removeCallback = function(t, e) {
                            if (t)
                                if (null == e) this._kill(null, t);
                                else
                                    for (var i = this.getTweensOf(t, !1), r = i.length, n = this._parseTimeOrLabel(e); --r > -1;) i[r]._startTime === n && i[r]._enabled(!1, !1);
                            return this
                        }, l.removePause = function(e) {
                            return this.removeCallback(t._internals.pauseCallback, e)
                        }, l.tweenTo = function(t, i) {
                            i = i || {};
                            var r, n, o, s = {
                                    ease: u,
                                    useFrames: this.usesFrames(),
                                    immediateRender: !1
                                },
                                a = i.repeat && h.TweenMax || e;
                            for (n in i) s[n] = i[n];
                            return s.time = this._parseTimeOrLabel(t), r = Math.abs(Number(s.time) - this._time) / this._timeScale || .001, o = new a(this, r, s), s.onStart = function() {
                                o.target.paused(!0), o.vars.time !== o.target.time() && r === o.duration() && o.duration(Math.abs(o.vars.time - o.target.time()) / o.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || o, i.onStartParams || [])
                            }, o
                        }, l.tweenFromTo = function(t, e, i) {
                            i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                                onComplete: this.seek,
                                onCompleteParams: [t],
                                callbackScope: this
                            }, i.immediateRender = !1 !== i.immediateRender;
                            var r = this.tweenTo(e, i);
                            return r.duration(Math.abs(r.vars.time - t) / this._timeScale || .001)
                        }, l.render = function(t, e, i) {
                            this._gc && this._enabled(!0, !1);
                            var r, n, s, h, u, l, c, f, d = this._dirty ? this.totalDuration() : this._totalDuration,
                                p = this._duration,
                                _ = this._time,
                                v = this._totalTime,
                                m = this._startTime,
                                g = this._timeScale,
                                y = this._rawPrevTime,
                                x = this._paused,
                                b = this._cycle;
                            if (t >= d - 1e-7 && t >= 0) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (n = !0, h = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || y < 0 || 1e-10 === y) && y !== t && this._first && (u = !0, y > 1e-10 && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = p, t = p + 1e-4);
                            else if (t < 1e-7)
                                if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== _ || 0 === p && 1e-10 !== y && (y > 0 || t < 0 && y >= 0) && !this._locked) && (h = "onReverseComplete", n = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = n = !0, h = "onReverseComplete") : y >= 0 && this._first && (u = !0), this._rawPrevTime = t;
                                else {
                                    if (this._rawPrevTime = p || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && n)
                                        for (r = this._first; r && 0 === r._startTime;) r._duration || (n = !1), r = r._next;
                                    t = 0, this._initted || (u = !0)
                                }
                            else if (0 === p && y < 0 && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (l = p + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && v <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = p - this._time), this._time > p ? (this._time = p, t = p + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e && t < p) {
                                if ((t = this._time) >= _ || this._repeat && b !== this._cycle)
                                    for (r = this._first; r && r._startTime <= t && !c;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (c = r), r = r._next;
                                else
                                    for (r = this._last; r && r._startTime >= t && !c;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (c = r), r = r._prev;
                                c && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                            }
                            if (this._cycle !== b && !this._locked) {
                                var T = this._yoyo && 0 != (1 & b),
                                    w = T === (this._yoyo && 0 != (1 & this._cycle)),
                                    E = this._totalTime,
                                    S = this._cycle,
                                    P = this._rawPrevTime,
                                    O = this._time;
                                if (this._totalTime = b * p, this._cycle < b ? T = !T : this._totalTime += p, this._time = _, this._rawPrevTime = 0 === p ? y - 1e-4 : y, this._cycle = b, this._locked = !0, _ = T ? 0 : p, this.render(_, e, 0 === p), e || this._gc || this.vars.onRepeat && (this._cycle = S, this._locked = !1, this._callback("onRepeat")), _ !== this._time) return;
                                if (w && (this._cycle = b, this._locked = !0, _ = T ? p + 1e-4 : -1e-4, this.render(_, !0, !1)), this._locked = !1, this._paused && !x) return;
                                this._time = O, this._totalTime = E, this._cycle = S, this._rawPrevTime = P
                            }
                            if (!(this._time !== _ && this._first || i || u || c)) return void(v !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== v && t > 0 && (this._active = !0), 0 === v && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (f = this._time) >= _)
                                for (r = this._first; r && (s = r._next, f === this._time && (!this._paused || x));)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (c === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s;
                            else
                                for (r = this._last; r && (s = r._prev, f === this._time && (!this._paused || x));) {
                                    if (r._active || r._startTime <= _ && !r._paused && !r._gc) {
                                        if (c === r) {
                                            for (c = r._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev;
                                            c = null, this.pause()
                                        }
                                        r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                                    }
                                    r = s
                                }
                            this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), h && (this._locked || this._gc || m !== this._startTime && g === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (n && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
                        }, l.getActive = function(t, e, i) {
                            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                            var r, n, o = [],
                                s = this.getChildren(t, e, i),
                                a = 0,
                                h = s.length;
                            for (r = 0; r < h; r++) n = s[r], n.isActive() && (o[a++] = n);
                            return o
                        }, l.getLabelAfter = function(t) {
                            t || 0 !== t && (t = this._time);
                            var e, i = this.getLabelsArray(),
                                r = i.length;
                            for (e = 0; e < r; e++)
                                if (i[e].time > t) return i[e].name;
                            return null
                        }, l.getLabelBefore = function(t) {
                            null == t && (t = this._time);
                            for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                                if (e[i].time < t) return e[i].name;
                            return null
                        }, l.getLabelsArray = function() {
                            var t, e = [],
                                i = 0;
                            for (t in this._labels) e[i++] = {
                                time: this._labels[t],
                                name: t
                            };
                            return e.sort(function(t, e) {
                                return t.time - e.time
                            }), e
                        }, l.invalidate = function() {
                            return this._locked = !1, t.prototype.invalidate.call(this)
                        }, l.progress = function(t, e) {
                            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                        }, l.totalProgress = function(t, e) {
                            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                        }, l.totalDuration = function(e) {
                            return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                        }, l.time = function(t, e) {
                            return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                        }, l.repeat = function(t) {
                            return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                        }, l.repeatDelay = function(t) {
                            return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                        }, l.yoyo = function(t) {
                            return arguments.length ? (this._yoyo = t, this) : this._yoyo
                        }, l.currentLabel = function(t) {
                            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                        }, r
                    }, !0),
                    function() {
                        var t = 180 / Math.PI,
                            e = [],
                            i = [],
                            r = [],
                            n = {},
                            o = s._gsDefine.globals,
                            a = function(t, e, i, r) {
                                i === r && (i = r - (r - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = r, this.da = r - t, this.ca = i - t, this.ba = e - t
                            },
                            h = function(t, e, i, r) {
                                var n = {
                                        a: t
                                    },
                                    o = {},
                                    s = {},
                                    a = {
                                        c: r
                                    },
                                    h = (t + e) / 2,
                                    u = (e + i) / 2,
                                    l = (i + r) / 2,
                                    c = (h + u) / 2,
                                    f = (u + l) / 2,
                                    d = (f - c) / 8;
                                return n.b = h + (t - h) / 4, o.b = c + d, n.c = o.a = (n.b + o.b) / 2, o.c = s.a = (c + f) / 2, s.b = f - d, a.b = l + (r - l) / 4, s.c = a.a = (s.b + a.b) / 2, [n, o, s, a]
                            },
                            u = function(t, n, o, s, a) {
                                var u, l, c, f, d, p, _, v, m, g, y, x, b, T = t.length - 1,
                                    w = 0,
                                    E = t[0].a;
                                for (u = 0; u < T; u++) d = t[w], l = d.a, c = d.d, f = t[w + 1].d, a ? (y = e[u], x = i[u], b = (x + y) * n * .25 / (s ? .5 : r[u] || .5), p = c - (c - l) * (s ? .5 * n : 0 !== y ? b / y : 0), _ = c + (f - c) * (s ? .5 * n : 0 !== x ? b / x : 0), v = c - (p + ((_ - p) * (3 * y / (y + x) + .5) / 4 || 0))) : (p = c - (c - l) * n * .5, _ = c + (f - c) * n * .5, v = c - (p + _) / 2), p += v, _ += v, d.c = m = p, d.b = 0 !== u ? E : E = d.a + .6 * (d.c - d.a), d.da = c - l, d.ca = m - l, d.ba = E - l, o ? (g = h(l, E, m, c), t.splice(w, 1, g[0], g[1], g[2], g[3]), w += 4) : w++, E = _;
                                d = t[w], d.b = E, d.c = E + .4 * (d.d - E), d.da = d.d - d.a, d.ca = d.c - d.a, d.ba = E - d.a, o && (g = h(d.a, E, d.c, d.d), t.splice(w, 1, g[0], g[1], g[2], g[3]))
                            },
                            l = function(t, r, n, o) {
                                var s, h, u, l, c, f, d = [];
                                if (o)
                                    for (t = [o].concat(t), h = t.length; --h > -1;) "string" == typeof(f = t[h][r]) && "=" === f.charAt(1) && (t[h][r] = o[r] + Number(f.charAt(0) + f.substr(2)));
                                if ((s = t.length - 2) < 0) return d[0] = new a(t[0][r], 0, 0, t[s < -1 ? 0 : 1][r]), d;
                                for (h = 0; h < s; h++) u = t[h][r], l = t[h + 1][r], d[h] = new a(u, 0, 0, l), n && (c = t[h + 2][r], e[h] = (e[h] || 0) + (l - u) * (l - u), i[h] = (i[h] || 0) + (c - l) * (c - l));
                                return d[h] = new a(t[h][r], 0, 0, t[h + 1][r]), d
                            },
                            c = function(t, o, s, a, h, c) {
                                var f, d, p, _, v, m, g, y, x = {},
                                    b = [],
                                    T = c || t[0];
                                h = "string" == typeof h ? "," + h + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == o && (o = 1);
                                for (d in t[0]) b.push(d);
                                if (t.length > 1) {
                                    for (y = t[t.length - 1], g = !0, f = b.length; --f > -1;)
                                        if (d = b[f], Math.abs(T[d] - y[d]) > .05) {
                                            g = !1;
                                            break
                                        }
                                    g && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3])
                                }
                                for (e.length = i.length = r.length = 0, f = b.length; --f > -1;) d = b[f], n[d] = -1 !== h.indexOf("," + d + ","), x[d] = l(t, d, n[d], c);
                                for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                                if (!a) {
                                    for (f = b.length; --f > -1;)
                                        if (n[d])
                                            for (p = x[b[f]], m = p.length - 1, _ = 0; _ < m; _++) v = p[_ + 1].da / i[_] + p[_].da / e[_] || 0, r[_] = (r[_] || 0) + v * v;
                                    for (f = r.length; --f > -1;) r[f] = Math.sqrt(r[f])
                                }
                                for (f = b.length, _ = s ? 4 : 1; --f > -1;) d = b[f], p = x[d], u(p, o, s, a, n[d]), g && (p.splice(0, _), p.splice(p.length - _, _));
                                return x
                            },
                            f = function(t, e, i) {
                                e = e || "soft";
                                var r, n, o, s, h, u, l, c, f, d, p, _ = {},
                                    v = "cubic" === e ? 3 : 2,
                                    m = "soft" === e,
                                    g = [];
                                if (m && i && (t = [i].concat(t)), null == t || t.length < v + 1) throw "invalid Bezier data";
                                for (f in t[0]) g.push(f);
                                for (u = g.length; --u > -1;) {
                                    for (f = g[u], _[f] = h = [], d = 0, c = t.length, l = 0; l < c; l++) r = null == i ? t[l][f] : "string" == typeof(p = t[l][f]) && "=" === p.charAt(1) ? i[f] + Number(p.charAt(0) + p.substr(2)) : Number(p), m && l > 1 && l < c - 1 && (h[d++] = (r + h[d - 2]) / 2), h[d++] = r;
                                    for (c = d - v + 1, d = 0, l = 0; l < c; l += v) r = h[l], n = h[l + 1], o = h[l + 2], s = 2 === v ? 0 : h[l + 3], h[d++] = p = 3 === v ? new a(r, n, o, s) : new a(r, (2 * n + r) / 3, (2 * n + o) / 3, o);
                                    h.length = d
                                }
                                return _
                            },
                            d = function(t, e, i) {
                                for (var r, n, o, s, a, h, u, l, c, f, d, p = 1 / i, _ = t.length; --_ > -1;)
                                    for (f = t[_], o = f.a, s = f.d - o, a = f.c - o, h = f.b - o, r = n = 0, l = 1; l <= i; l++) u = p * l, c = 1 - u, r = n - (n = (u * u * s + 3 * c * (u * a + c * h)) * u), d = _ * i + l - 1, e[d] = (e[d] || 0) + r * r
                            },
                            p = function(t, e) {
                                e = e >> 0 || 6;
                                var i, r, n, o, s = [],
                                    a = [],
                                    h = 0,
                                    u = 0,
                                    l = e - 1,
                                    c = [],
                                    f = [];
                                for (i in t) d(t[i], s, e);
                                for (n = s.length, r = 0; r < n; r++) h += Math.sqrt(s[r]), o = r % e, f[o] = h, o === l && (u += h, o = r / e >> 0, c[o] = f, a[o] = u, h = 0, f = []);
                                return {
                                    length: u,
                                    lengths: a,
                                    segments: c
                                }
                            },
                            _ = s._gsDefine.plugin({
                                propName: "bezier",
                                priority: -1,
                                version: "1.3.7",
                                API: 2,
                                global: !0,
                                init: function(t, e, i) {
                                    this._target = t, e instanceof Array && (e = {
                                        values: e
                                    }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                                    var r, n, o, s, a, h = e.values || [],
                                        u = {},
                                        l = h[0],
                                        d = e.autoRotate || i.vars.orientToBezier;
                                    this._autoRotate = d ? d instanceof Array ? d : [
                                        ["x", "y", "rotation", !0 === d ? 0 : Number(d) || 0]
                                    ] : null;
                                    for (r in l) this._props.push(r);
                                    for (o = this._props.length; --o > -1;) r = this._props[o], this._overwriteProps.push(r), n = this._func[r] = "function" == typeof t[r], u[r] = n ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(t[r]), a || u[r] !== h[0][r] && (a = u);
                                    if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : f(h, e.type, u), this._segCount = this._beziers[r].length, this._timeRes) {
                                        var _ = p(this._beziers, this._timeRes);
                                        this._length = _.length, this._lengths = _.lengths, this._segments = _.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                                    }
                                    if (d = this._autoRotate)
                                        for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), o = d.length; --o > -1;) {
                                            for (s = 0; s < 3; s++) r = d[o][s], this._func[r] = "function" == typeof t[r] && t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)];
                                            r = d[o][2], this._initialRotations[o] = (this._func[r] ? this._func[r].call(this._target) : this._target[r]) || 0, this._overwriteProps.push(r)
                                        }
                                    return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                                },
                                set: function(e) {
                                    var i, r, n, o, s, a, h, u, l, c, f = this._segCount,
                                        d = this._func,
                                        p = this._target,
                                        _ = e !== this._startRatio;
                                    if (this._timeRes) {
                                        if (l = this._lengths, c = this._curSeg, e *= this._length, n = this._li, e > this._l2 && n < f - 1) {
                                            for (u = f - 1; n < u && (this._l2 = l[++n]) <= e;);
                                            this._l1 = l[n - 1], this._li = n, this._curSeg = c = this._segments[n], this._s2 = c[this._s1 = this._si = 0]
                                        } else if (e < this._l1 && n > 0) {
                                            for (; n > 0 && (this._l1 = l[--n]) >= e;);
                                            0 === n && e < this._l1 ? this._l1 = 0 : n++, this._l2 = l[n], this._li = n, this._curSeg = c = this._segments[n], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                                        }
                                        if (i = n, e -= this._l1, n = this._si, e > this._s2 && n < c.length - 1) {
                                            for (u = c.length - 1; n < u && (this._s2 = c[++n]) <= e;);
                                            this._s1 = c[n - 1], this._si = n
                                        } else if (e < this._s1 && n > 0) {
                                            for (; n > 0 && (this._s1 = c[--n]) >= e;);
                                            0 === n && e < this._s1 ? this._s1 = 0 : n++, this._s2 = c[n], this._si = n
                                        }
                                        a = (n + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                                    } else i = e < 0 ? 0 : e >= 1 ? f - 1 : f * e >> 0, a = (e - i * (1 / f)) * f;
                                    for (r = 1 - a, n = this._props.length; --n > -1;) o = this._props[n], s = this._beziers[o][i], h = (a * a * s.da + 3 * r * (a * s.ca + r * s.ba)) * a + s.a, this._mod[o] && (h = this._mod[o](h, p)), d[o] ? p[o](h) : p[o] = h;
                                    if (this._autoRotate) {
                                        var v, m, g, y, x, b, T, w = this._autoRotate;
                                        for (n = w.length; --n > -1;) o = w[n][2], b = w[n][3] || 0, T = !0 === w[n][4] ? 1 : t, s = this._beziers[w[n][0]], v = this._beziers[w[n][1]], s && v && (s = s[i], v = v[i], m = s.a + (s.b - s.a) * a, y = s.b + (s.c - s.b) * a, m += (y - m) * a, y += (s.c + (s.d - s.c) * a - y) * a, g = v.a + (v.b - v.a) * a, x = v.b + (v.c - v.b) * a, g += (x - g) * a, x += (v.c + (v.d - v.c) * a - x) * a, h = _ ? Math.atan2(x - g, y - m) * T + b : this._initialRotations[n], this._mod[o] && (h = this._mod[o](h, p)), d[o] ? p[o](h) : p[o] = h)
                                    }
                                }
                            }),
                            v = _.prototype;
                        _.bezierThrough = c, _.cubicToQuadratic = h, _._autoCSS = !0, _.quadraticToCubic = function(t, e, i) {
                            return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                        }, _._cssRegister = function() {
                            var t = o.CSSPlugin;
                            if (t) {
                                var e = t._internals,
                                    i = e._parseToProxy,
                                    r = e._setPluginRatio,
                                    n = e.CSSPropTween;
                                e._registerComplexSpecialProp("bezier", {
                                    parser: function(t, e, o, s, a, h) {
                                        e instanceof Array && (e = {
                                            values: e
                                        }), h = new _;
                                        var u, l, c, f = e.values,
                                            d = f.length - 1,
                                            p = [],
                                            v = {};
                                        if (d < 0) return a;
                                        for (u = 0; u <= d; u++) c = i(t, f[u], s, a, h, d !== u), p[u] = c.end;
                                        for (l in e) v[l] = e[l];
                                        return v.values = p, a = new n(t, "bezier", 0, 0, c.pt, 2), a.data = c, a.plugin = h, a.setRatio = r, 0 === v.autoRotate && (v.autoRotate = !0), !v.autoRotate || v.autoRotate instanceof Array || (u = !0 === v.autoRotate ? 0 : Number(v.autoRotate), v.autoRotate = null != c.end.left ? [
                                            ["left", "top", "rotation", u, !1]
                                        ] : null != c.end.x && [
                                            ["x", "y", "rotation", u, !1]
                                        ]), v.autoRotate && (s._transform || s._enableTransforms(!1), c.autoRotate = s._target._gsTransform, c.proxy.rotation = c.autoRotate.rotation || 0, s._overwriteProps.push("rotation")), h._onInitTween(c.proxy, v, s._tween), a
                                    }
                                })
                            }
                        }, v._mod = function(t) {
                            for (var e, i = this._overwriteProps, r = i.length; --r > -1;)(e = t[i[r]]) && "function" == typeof e && (this._mod[i[r]] = e)
                        }, v._kill = function(t) {
                            var e, i, r = this._props;
                            for (e in this._beziers)
                                if (e in t)
                                    for (delete this._beziers[e], delete this._func[e], i = r.length; --i > -1;) r[i] === e && r.splice(i, 1);
                            if (r = this._autoRotate)
                                for (i = r.length; --i > -1;) t[r[i][2]] && r.splice(i, 1);
                            return this._super._kill.call(this, t)
                        }
                    }(), s._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                        var i, r, n, o, a = function() {
                                t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                            },
                            h = s._gsDefine.globals,
                            u = {},
                            l = a.prototype = new t("css");
                        l.constructor = a, a.version = "1.19.1", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, l = "px", a.suffixMap = {
                            top: l,
                            right: l,
                            bottom: l,
                            left: l,
                            width: l,
                            height: l,
                            fontSize: l,
                            padding: l,
                            margin: l,
                            perspective: l,
                            lineHeight: ""
                        };
                        var c, f, d, p, _, v, m, g, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                            x = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                            b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                            T = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                            w = /(?:\d|\-|\+|=|#|\.)*/g,
                            E = /opacity *= *([^)]*)/i,
                            S = /opacity:([^;]*)/i,
                            P = /alpha\(opacity *=.+?\)/i,
                            O = /^(rgb|hsl)/,
                            M = /([A-Z])/g,
                            C = /-([a-z])/gi,
                            R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                            A = function(t, e) {
                                return e.toUpperCase()
                            },
                            I = /(?:Left|Right|Width)/i,
                            D = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                            L = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                            k = /,(?=[^\)]*(?:\(|$))/gi,
                            N = /[\s,\(]/i,
                            F = Math.PI / 180,
                            B = 180 / Math.PI,
                            j = {},
                            U = {
                                style: {}
                            },
                            X = s.document || {
                                createElement: function() {
                                    return U
                                }
                            },
                            G = function(t, e) {
                                return X.createElementNS ? X.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : X.createElement(t)
                            },
                            W = G("div"),
                            V = G("img"),
                            H = a._internals = {
                                _specialProps: u
                            },
                            z = (s.navigator || {}).userAgent || "",
                            Y = function() {
                                var t = z.indexOf("Android"),
                                    e = G("a");
                                return d = -1 !== z.indexOf("Safari") && -1 === z.indexOf("Chrome") && (-1 === t || parseFloat(z.substr(t + 8, 2)) > 3), _ = d && parseFloat(z.substr(z.indexOf("Version/") + 8, 2)) < 6, p = -1 !== z.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(z) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(z)) && (v = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                            }(),
                            q = function(t) {
                                return E.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                            },
                            Z = function(t) {
                                s.console && console.log(t)
                            },
                            K = "",
                            J = "",
                            Q = function(t, e) {
                                e = e || W;
                                var i, r, n = e.style;
                                if (void 0 !== n[t]) return t;
                                for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === n[i[r] + t];);
                                return r >= 0 ? (J = 3 === r ? "ms" : i[r], K = "-" + J.toLowerCase() + "-", J + t) : null
                            },
                            $ = X.defaultView ? X.defaultView.getComputedStyle : function() {},
                            tt = a.getStyle = function(t, e, i, r, n) {
                                var o;
                                return Y || "opacity" !== e ? (!r && t.style[e] ? o = t.style[e] : (i = i || $(t)) ? o = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(M, "-$1").toLowerCase()) : t.currentStyle && (o = t.currentStyle[e]), null == n || o && "none" !== o && "auto" !== o && "auto auto" !== o ? o : n) : q(t)
                            },
                            et = H.convertToPixels = function(t, i, r, n, o) {
                                if ("px" === n || !n) return r;
                                if ("auto" === n || !r) return 0;
                                var s, h, u, l = I.test(i),
                                    c = t,
                                    f = W.style,
                                    d = r < 0,
                                    p = 1 === r;
                                if (d && (r = -r), p && (r *= 100), "%" === n && -1 !== i.indexOf("border")) s = r / 100 * (l ? t.clientWidth : t.clientHeight);
                                else {
                                    if (f.cssText = "border:0 solid red;position:" + tt(t, "position") + ";line-height:0;", "%" !== n && c.appendChild && "v" !== n.charAt(0) && "rem" !== n) f[l ? "borderLeftWidth" : "borderTopWidth"] = r + n;
                                    else {
                                        if (c = t.parentNode || X.body, h = c._gsCache, u = e.ticker.frame, h && l && h.time === u) return h.width * r / 100;
                                        f[l ? "width" : "height"] = r + n
                                    }
                                    c.appendChild(W), s = parseFloat(W[l ? "offsetWidth" : "offsetHeight"]), c.removeChild(W), l && "%" === n && !1 !== a.cacheWidths && (h = c._gsCache = c._gsCache || {}, h.time = u, h.width = s / r * 100), 0 !== s || o || (s = et(t, i, r, n, !0))
                                }
                                return p && (s /= 100), d ? -s : s
                            },
                            it = H.calculateOffset = function(t, e, i) {
                                if ("absolute" !== tt(t, "position", i)) return 0;
                                var r = "left" === e ? "Left" : "Top",
                                    n = tt(t, "margin" + r, i);
                                return t["offset" + r] - (et(t, e, parseFloat(n), n.replace(w, "")) || 0)
                            },
                            rt = function(t, e) {
                                var i, r, n, o = {};
                                if (e = e || $(t, null))
                                    if (i = e.length)
                                        for (; --i > -1;) n = e[i], -1 !== n.indexOf("-transform") && Rt !== n || (o[n.replace(C, A)] = e.getPropertyValue(n));
                                    else
                                        for (i in e) - 1 !== i.indexOf("Transform") && Ct !== i || (o[i] = e[i]);
                                else if (e = t.currentStyle || t.style)
                                    for (i in e) "string" == typeof i && void 0 === o[i] && (o[i.replace(C, A)] = e[i]);
                                return Y || (o.opacity = q(t)), r = Vt(t, e, !1), o.rotation = r.rotation, o.skewX = r.skewX, o.scaleX = r.scaleX, o.scaleY = r.scaleY, o.x = r.x, o.y = r.y, It && (o.z = r.z, o.rotationX = r.rotationX, o.rotationY = r.rotationY, o.scaleZ = r.scaleZ), o.filters && delete o.filters, o
                            },
                            nt = function(t, e, i, r, n) {
                                var o, s, a, h = {},
                                    u = t.style;
                                for (s in i) "cssText" !== s && "length" !== s && isNaN(s) && (e[s] !== (o = i[s]) || n && n[s]) && -1 === s.indexOf("Origin") && ("number" != typeof o && "string" != typeof o || (h[s] = "auto" !== o || "left" !== s && "top" !== s ? "" !== o && "auto" !== o && "none" !== o || "string" != typeof e[s] || "" === e[s].replace(T, "") ? o : 0 : it(t, s), void 0 !== u[s] && (a = new yt(u, s, u[s], a))));
                                if (r)
                                    for (s in r) "className" !== s && (h[s] = r[s]);
                                return {
                                    difs: h,
                                    firstMPT: a
                                }
                            },
                            ot = {
                                width: ["Left", "Right"],
                                height: ["Top", "Bottom"]
                            },
                            st = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                            at = function(t, e, i) {
                                if ("svg" === (t.nodeName + "").toLowerCase()) return (i || $(t))[e] || 0;
                                if (t.getCTM && Xt(t)) return t.getBBox()[e] || 0;
                                var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                                    n = ot[e],
                                    o = n.length;
                                for (i = i || $(t, null); --o > -1;) r -= parseFloat(tt(t, "padding" + n[o], i, !0)) || 0, r -= parseFloat(tt(t, "border" + n[o] + "Width", i, !0)) || 0;
                                return r
                            },
                            ht = function(t, e) {
                                if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                                null != t && "" !== t || (t = "0 0");
                                var i, r = t.split(" "),
                                    n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : r[0],
                                    o = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : r[1];
                                if (r.length > 3 && !e) {
                                    for (r = t.split(", ").join(",").split(","), t = [], i = 0; i < r.length; i++) t.push(ht(r[i]));
                                    return t.join(",")
                                }
                                return null == o ? o = "center" === n ? "50%" : "0" : "center" === o && (o = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + o + (r.length > 2 ? " " + r[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== o.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === o.charAt(1), e.ox = parseFloat(n.replace(T, "")), e.oy = parseFloat(o.replace(T, "")), e.v = t), e || t
                            },
                            ut = function(t, e) {
                                return "function" == typeof t && (t = t(g, m)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                            },
                            lt = function(t, e) {
                                return "function" == typeof t && (t = t(g, m)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                            },
                            ct = function(t, e, i, r) {
                                var n, o, s, a, h;
                                return "function" == typeof t && (t = t(g, m)), null == t ? a = e : "number" == typeof t ? a = t : (n = 360, o = t.split("_"), h = "=" === t.charAt(1), s = (h ? parseInt(t.charAt(0) + "1", 10) * parseFloat(o[0].substr(2)) : parseFloat(o[0])) * (-1 === t.indexOf("rad") ? 1 : B) - (h ? 0 : e), o.length && (r && (r[i] = e + s), -1 !== t.indexOf("short") && (s %= n) !== s % (n / 2) && (s = s < 0 ? s + n : s - n), -1 !== t.indexOf("_cw") && s < 0 ? s = (s + 9999999999 * n) % n - (s / n | 0) * n : -1 !== t.indexOf("ccw") && s > 0 && (s = (s - 9999999999 * n) % n - (s / n | 0) * n)), a = e + s), a < 1e-6 && a > -1e-6 && (a = 0), a
                            },
                            ft = {
                                aqua: [0, 255, 255],
                                lime: [0, 255, 0],
                                silver: [192, 192, 192],
                                black: [0, 0, 0],
                                maroon: [128, 0, 0],
                                teal: [0, 128, 128],
                                blue: [0, 0, 255],
                                navy: [0, 0, 128],
                                white: [255, 255, 255],
                                fuchsia: [255, 0, 255],
                                olive: [128, 128, 0],
                                yellow: [255, 255, 0],
                                orange: [255, 165, 0],
                                gray: [128, 128, 128],
                                purple: [128, 0, 128],
                                green: [0, 128, 0],
                                red: [255, 0, 0],
                                pink: [255, 192, 203],
                                cyan: [0, 255, 255],
                                transparent: [255, 255, 255, 0]
                            },
                            dt = function(t, e, i) {
                                return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                            },
                            pt = a.parseColor = function(t, e) {
                                var i, r, n, o, s, a, h, u, l, c, f;
                                if (t)
                                    if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                                    else {
                                        if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ft[t]) i = ft[t];
                                        else if ("#" === t.charAt(0)) 4 === t.length && (r = t.charAt(1), n = t.charAt(2), o = t.charAt(3), t = "#" + r + r + n + n + o + o), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                        else if ("hsl" === t.substr(0, 3))
                                            if (i = f = t.match(y), e) {
                                                if (-1 !== t.indexOf("=")) return t.match(x)
                                            } else s = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, h = Number(i[2]) / 100, n = h <= .5 ? h * (a + 1) : h + a - h * a, r = 2 * h - n, i.length > 3 && (i[3] = Number(t[3])), i[0] = dt(s + 1 / 3, r, n), i[1] = dt(s, r, n), i[2] = dt(s - 1 / 3, r, n);
                                        else i = t.match(y) || ft.transparent;
                                        i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                                    }
                                else i = ft.black;
                                return e && !f && (r = i[0] / 255, n = i[1] / 255, o = i[2] / 255, u = Math.max(r, n, o), l = Math.min(r, n, o), h = (u + l) / 2, u === l ? s = a = 0 : (c = u - l, a = h > .5 ? c / (2 - u - l) : c / (u + l), s = u === r ? (n - o) / c + (n < o ? 6 : 0) : u === n ? (o - r) / c + 2 : (r - n) / c + 4, s *= 60), i[0] = s + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * h + .5 | 0), i
                            },
                            _t = function(t, e) {
                                var i, r, n, o = t.match(vt) || [],
                                    s = 0,
                                    a = o.length ? "" : t;
                                for (i = 0; i < o.length; i++) r = o[i], n = t.substr(s, t.indexOf(r, s) - s), s += n.length + r.length, r = pt(r, e), 3 === r.length && r.push(1), a += n + (e ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
                                return a + t.substr(s)
                            },
                            vt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                        for (l in ft) vt += "|" + l + "\\b";
                        vt = new RegExp(vt + ")", "gi"), a.colorStringFilter = function(t) {
                            var e, i = t[0] + t[1];
                            vt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = _t(t[0], e), t[1] = _t(t[1], e)), vt.lastIndex = 0
                        }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter);
                        var mt = function(t, e, i, r) {
                                if (null == t) return function(t) {
                                    return t
                                };
                                var n, o = e ? (t.match(vt) || [""])[0] : "",
                                    s = t.split(o).join("").match(b) || [],
                                    a = t.substr(0, t.indexOf(s[0])),
                                    h = ")" === t.charAt(t.length - 1) ? ")" : "",
                                    u = -1 !== t.indexOf(" ") ? " " : ",",
                                    l = s.length,
                                    c = l > 0 ? s[0].replace(y, "") : "";
                                return l ? n = e ? function(t) {
                                    var e, f, d, p;
                                    if ("number" == typeof t) t += c;
                                    else if (r && k.test(t)) {
                                        for (p = t.replace(k, "|").split("|"), d = 0; d < p.length; d++) p[d] = n(p[d]);
                                        return p.join(",")
                                    }
                                    if (e = (t.match(vt) || [o])[0], f = t.split(e).join("").match(b) || [], d = f.length, l > d--)
                                        for (; ++d < l;) f[d] = i ? f[(d - 1) / 2 | 0] : s[d];
                                    return a + f.join(u) + u + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                                } : function(t) {
                                    var e, o, f;
                                    if ("number" == typeof t) t += c;
                                    else if (r && k.test(t)) {
                                        for (o = t.replace(k, "|").split("|"), f = 0; f < o.length; f++) o[f] = n(o[f]);
                                        return o.join(",")
                                    }
                                    if (e = t.match(b) || [], f = e.length, l > f--)
                                        for (; ++f < l;) e[f] = i ? e[(f - 1) / 2 | 0] : s[f];
                                    return a + e.join(u) + h
                                } : function(t) {
                                    return t
                                }
                            },
                            gt = function(t) {
                                return t = t.split(","),
                                    function(e, i, r, n, o, s, a) {
                                        var h, u = (i + "").split(" ");
                                        for (a = {}, h = 0; h < 4; h++) a[t[h]] = u[h] = u[h] || u[(h - 1) / 2 >> 0];
                                        return n.parse(e, a, o, s)
                                    }
                            },
                            yt = (H._setPluginRatio = function(t) {
                                this.plugin.setRatio(t);
                                for (var e, i, r, n, o, s = this.data, a = s.proxy, h = s.firstMPT; h;) e = a[h.v], h.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), h.t[h.p] = e, h = h._next;
                                if (s.autoRotate && (s.autoRotate.rotation = s.mod ? s.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                                    for (h = s.firstMPT, o = 1 === t ? "e" : "b"; h;) {
                                        if (i = h.t, i.type) {
                                            if (1 === i.type) {
                                                for (n = i.xs0 + i.s + i.xs1, r = 1; r < i.l; r++) n += i["xn" + r] + i["xs" + (r + 1)];
                                                i[o] = n
                                            }
                                        } else i[o] = i.s + i.xs0;
                                        h = h._next
                                    }
                            }, function(t, e, i, r, n) {
                                this.t = t, this.p = e, this.v = i, this.r = n, r && (r._prev = this, this._next = r)
                            }),
                            xt = (H._parseToProxy = function(t, e, i, r, n, o) {
                                var s, a, h, u, l, c = r,
                                    f = {},
                                    d = {},
                                    p = i._transform,
                                    _ = j;
                                for (i._transform = null, j = e, r = l = i.parse(t, e, r, n), j = _, o && (i._transform = p, c && (c._prev = null, c._prev && (c._prev._next = null))); r && r !== c;) {
                                    if (r.type <= 1 && (a = r.p, d[a] = r.s + r.c, f[a] = r.s, o || (u = new yt(r, "s", a, u, r.r), r.c = 0), 1 === r.type))
                                        for (s = r.l; --s > 0;) h = "xn" + s, a = r.p + "_" + h, d[a] = r.data[h], f[a] = r[h], o || (u = new yt(r, h, a, u, r.rxp[h]));
                                    r = r._next
                                }
                                return {
                                    proxy: f,
                                    end: d,
                                    firstMPT: u,
                                    pt: l
                                }
                            }, H.CSSPropTween = function(t, e, r, n, s, a, h, u, l, c, f) {
                                this.t = t, this.p = e, this.s = r, this.c = n, this.n = h || e, t instanceof xt || o.push(this.n), this.r = u, this.type = a || 0, l && (this.pr = l, i = !0), this.b = void 0 === c ? r : c, this.e = void 0 === f ? r + n : f, s && (this._next = s, s._prev = this)
                            }),
                            bt = function(t, e, i, r, n, o) {
                                var s = new xt(t, e, i, r - i, n, -1, o);
                                return s.b = i, s.e = s.xs0 = r, s
                            },
                            Tt = a.parseComplex = function(t, e, i, r, n, o, s, h, u, l) {
                                i = i || o || "", "function" == typeof r && (r = r(g, m)), s = new xt(t, e, 0, 0, s, l ? 2 : 1, null, !1, h, i, r), r += "", n && vt.test(r + i) && (r = [i, r], a.colorStringFilter(r), i = r[0], r = r[1]);
                                var f, d, p, _, v, b, T, w, E, S, P, O, M, C = i.split(", ").join(",").split(" "),
                                    R = r.split(", ").join(",").split(" "),
                                    A = C.length,
                                    I = !1 !== c;
                                for (-1 === r.indexOf(",") && -1 === i.indexOf(",") || (C = C.join(" ").replace(k, ", ").split(" "), R = R.join(" ").replace(k, ", ").split(" "), A = C.length), A !== R.length && (C = (o || "").split(" "), A = C.length), s.plugin = u, s.setRatio = l, vt.lastIndex = 0, f = 0; f < A; f++)
                                    if (_ = C[f], v = R[f], (w = parseFloat(_)) || 0 === w) s.appendXtra("", w, ut(v, w), v.replace(x, ""), I && -1 !== v.indexOf("px"), !0);
                                    else if (n && vt.test(_)) O = v.indexOf(")") + 1, O = ")" + (O ? v.substr(O) : ""), M = -1 !== v.indexOf("hsl") && Y, _ = pt(_, M), v = pt(v, M), E = _.length + v.length > 6, E && !Y && 0 === v[3] ? (s["xs" + s.l] += s.l ? " transparent" : "transparent", s.e = s.e.split(R[f]).join("transparent")) : (Y || (E = !1), M ? s.appendXtra(E ? "hsla(" : "hsl(", _[0], ut(v[0], _[0]), ",", !1, !0).appendXtra("", _[1], ut(v[1], _[1]), "%,", !1).appendXtra("", _[2], ut(v[2], _[2]), E ? "%," : "%" + O, !1) : s.appendXtra(E ? "rgba(" : "rgb(", _[0], v[0] - _[0], ",", !0, !0).appendXtra("", _[1], v[1] - _[1], ",", !0).appendXtra("", _[2], v[2] - _[2], E ? "," : O, !0), E && (_ = _.length < 4 ? 1 : _[3], s.appendXtra("", _, (v.length < 4 ? 1 : v[3]) - _, O, !1))), vt.lastIndex = 0;
                                else if (b = _.match(y)) {
                                    if (!(T = v.match(x)) || T.length !== b.length) return s;
                                    for (p = 0, d = 0; d < b.length; d++) P = b[d], S = _.indexOf(P, p), s.appendXtra(_.substr(p, S - p), Number(P), ut(T[d], P), "", I && "px" === _.substr(S + P.length, 2), 0 === d), p = S + P.length;
                                    s["xs" + s.l] += _.substr(p)
                                } else s["xs" + s.l] += s.l || s["xs" + s.l] ? " " + v : v;
                                if (-1 !== r.indexOf("=") && s.data) {
                                    for (O = s.xs0 + s.data.s, f = 1; f < s.l; f++) O += s["xs" + f] + s.data["xn" + f];
                                    s.e = O + s["xs" + f]
                                }
                                return s.l || (s.type = -1, s.xs0 = s.e), s.xfirst || s
                            },
                            wt = 9;
                        for (l = xt.prototype, l.l = l.pr = 0; --wt > 0;) l["xn" + wt] = 0, l["xs" + wt] = "";
                        l.xs0 = "", l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null, l.appendXtra = function(t, e, i, r, n, o) {
                            var s = this,
                                a = s.l;
                            return s["xs" + a] += o && (a || s["xs" + a]) ? " " + t : t || "", i || 0 === a || s.plugin ? (s.l++, s.type = s.setRatio ? 2 : 1, s["xs" + s.l] = r || "", a > 0 ? (s.data["xn" + a] = e + i, s.rxp["xn" + a] = n, s["xn" + a] = e, s.plugin || (s.xfirst = new xt(s, "xn" + a, e, i, s.xfirst || s, 0, s.n, n, s.pr), s.xfirst.xs0 = 0), s) : (s.data = {
                                s: e + i
                            }, s.rxp = {}, s.s = e, s.c = i, s.r = n, s)) : (s["xs" + a] += e + (r || ""), s)
                        };
                        var Et = function(t, e) {
                                e = e || {}, this.p = e.prefix ? Q(t) || t : t, u[t] = u[this.p] = this, this.format = e.formatter || mt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                            },
                            St = H._registerComplexSpecialProp = function(t, e, i) {
                                "object" != typeof e && (e = {
                                    parser: i
                                });
                                var r, n = t.split(","),
                                    o = e.defaultValue;
                                for (i = i || [o], r = 0; r < n.length; r++) e.prefix = 0 === r && e.prefix, e.defaultValue = i[r] || o, new Et(n[r], e)
                            },
                            Pt = H._registerPluginProp = function(t) {
                                if (!u[t]) {
                                    var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                                    St(t, {
                                        parser: function(t, i, r, n, o, s, a) {
                                            var l = h.com.greensock.plugins[e];
                                            return l ? (l._cssRegister(), u[r].parse(t, i, r, n, o, s, a)) : (Z("Error: " + e + " js file not loaded."), o)
                                        }
                                    })
                                }
                            };
                        l = Et.prototype, l.parseComplex = function(t, e, i, r, n, o) {
                            var s, a, h, u, l, c, f = this.keyword;
                            if (this.multi && (k.test(i) || k.test(e) ? (a = e.replace(k, "|").split("|"), h = i.replace(k, "|").split("|")) : f && (a = [e], h = [i])), h) {
                                for (u = h.length > a.length ? h.length : a.length, s = 0; s < u; s++) e = a[s] = a[s] || this.dflt, i = h[s] = h[s] || this.dflt, f && (l = e.indexOf(f), c = i.indexOf(f), l !== c && (-1 === c ? a[s] = a[s].split(f).join("") : -1 === l && (a[s] += " " + f)));
                                e = a.join(", "), i = h.join(", ")
                            }
                            return Tt(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, n, o)
                        }, l.parse = function(t, e, i, r, o, s, a) {
                            return this.parseComplex(t.style, this.format(tt(t, this.p, n, !1, this.dflt)), this.format(e), o, s)
                        }, a.registerSpecialProp = function(t, e, i) {
                            St(t, {
                                parser: function(t, r, n, o, s, a, h) {
                                    var u = new xt(t, n, 0, 0, s, 2, n, !1, i);
                                    return u.plugin = a, u.setRatio = e(t, r, o._tween, n), u
                                },
                                priority: i
                            })
                        }, a.useSVGTransformAttr = !0;
                        var Ot, Mt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                            Ct = Q("transform"),
                            Rt = K + "transform",
                            At = Q("transformOrigin"),
                            It = null !== Q("perspective"),
                            Dt = H.Transform = function() {
                                this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(!1 === a.defaultForce3D || !It) && (a.defaultForce3D || "auto")
                            },
                            Lt = s.SVGElement,
                            kt = function(t, e, i) {
                                var r, n = X.createElementNS("http://www.w3.org/2000/svg", t),
                                    o = /([a-z])([A-Z])/g;
                                for (r in i) n.setAttributeNS(null, r.replace(o, "$1-$2").toLowerCase(), i[r]);
                                return e.appendChild(n), n
                            },
                            Nt = X.documentElement || {},
                            Ft = function() {
                                var t, e, i, r = v || /Android/i.test(z) && !s.chrome;
                                return X.createElementNS && !r && (t = kt("svg", Nt), e = kt("rect", t, {
                                    width: 100,
                                    height: 50,
                                    x: 100
                                }), i = e.getBoundingClientRect().width, e.style[At] = "50% 50%", e.style[Ct] = "scaleX(0.5)", r = i === e.getBoundingClientRect().width && !(p && It), Nt.removeChild(t)), r
                            }(),
                            Bt = function(t, e, i, r, n, o) {
                                var s, h, u, l, c, f, d, p, _, v, m, g, y, x, b = t._gsTransform,
                                    T = Wt(t, !0);
                                b && (y = b.xOrigin, x = b.yOrigin), (!r || (s = r.split(" ")).length < 2) && (d = t.getBBox(), 0 === d.x && 0 === d.y && d.width + d.height === 0 && (d = {
                                    x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                                    y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                                    width: 0,
                                    height: 0
                                }), e = ht(e).split(" "), s = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * d.width : parseFloat(e[0])) + d.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * d.height : parseFloat(e[1])) + d.y]), i.xOrigin = l = parseFloat(s[0]), i.yOrigin = c = parseFloat(s[1]), r && T !== Gt && (f = T[0], d = T[1], p = T[2], _ = T[3], v = T[4], m = T[5], (g = f * _ - d * p) && (h = l * (_ / g) + c * (-p / g) + (p * m - _ * v) / g, u = l * (-d / g) + c * (f / g) - (f * m - d * v) / g, l = i.xOrigin = s[0] = h, c = i.yOrigin = s[1] = u)), b && (o && (i.xOffset = b.xOffset, i.yOffset = b.yOffset, b = i), n || !1 !== n && !1 !== a.defaultSmoothOrigin ? (h = l - y, u = c - x, b.xOffset += h * T[0] + u * T[2] - h, b.yOffset += h * T[1] + u * T[3] - u) : b.xOffset = b.yOffset = 0), o || t.setAttribute("data-svg-origin", s.join(" "))
                            },
                            jt = function(t) {
                                var e, i = G("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                                    r = this.parentNode,
                                    n = this.nextSibling,
                                    o = this.style.cssText;
                                if (Nt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                                    e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = jt
                                } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                                return n ? r.insertBefore(this, n) : r.appendChild(this), Nt.removeChild(i), this.style.cssText = o, e
                            },
                            Ut = function(t) {
                                try {
                                    return t.getBBox()
                                } catch (e) {
                                    return jt.call(t, !0)
                                }
                            },
                            Xt = function(t) {
                                return !(!(Lt && t.getCTM && Ut(t)) || t.parentNode && !t.ownerSVGElement)
                            },
                            Gt = [1, 0, 0, 1, 0, 0],
                            Wt = function(t, e) {
                                var i, r, n, o, s, a, h = t._gsTransform || new Dt,
                                    u = t.style;
                                if (Ct ? r = tt(t, Rt, null, !0) : t.currentStyle && (r = t.currentStyle.filter.match(D), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), h.x || 0, h.y || 0].join(",") : ""), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, i && Ct && ((a = "none" === $(t).display) || !t.parentNode) && (a && (o = u.display, u.display = "block"), t.parentNode || (s = 1, Nt.appendChild(t)), r = tt(t, Rt, null, !0), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, o ? u.display = o : a && qt(u, "display"), s && Nt.removeChild(t)), (h.svg || t.getCTM && Xt(t)) && (i && -1 !== (u[Ct] + "").indexOf("matrix") && (r = u[Ct], i = 0), n = t.getAttribute("transform"), i && n && (-1 !== n.indexOf("matrix") ? (r = n, i = 0) : -1 !== n.indexOf("translate") && (r = "matrix(1,0,0,1," + n.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Gt;
                                for (n = (r || "").match(y) || [], wt = n.length; --wt > -1;) o = Number(n[wt]), n[wt] = (s = o - (o |= 0)) ? (1e5 * s + (s < 0 ? -.5 : .5) | 0) / 1e5 + o : o;
                                return e && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n
                            },
                            Vt = H.getTransform = function(t, i, r, n) {
                                if (t._gsTransform && r && !n) return t._gsTransform;
                                var o, s, h, u, l, c, f = r ? t._gsTransform || new Dt : new Dt,
                                    d = f.scaleX < 0,
                                    p = It ? parseFloat(tt(t, At, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                                    _ = parseFloat(a.defaultTransformPerspective) || 0;
                                if (f.svg = !(!t.getCTM || !Xt(t)), f.svg && (Bt(t, tt(t, At, i, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), Ot = a.useSVGTransformAttr || Ft), (o = Wt(t)) !== Gt) {
                                    if (16 === o.length) {
                                        var v, m, g, y, x, b = o[0],
                                            T = o[1],
                                            w = o[2],
                                            E = o[3],
                                            S = o[4],
                                            P = o[5],
                                            O = o[6],
                                            M = o[7],
                                            C = o[8],
                                            R = o[9],
                                            A = o[10],
                                            I = o[12],
                                            D = o[13],
                                            L = o[14],
                                            k = o[11],
                                            N = Math.atan2(O, A);
                                        f.zOrigin && (L = -f.zOrigin, I = C * L - o[12], D = R * L - o[13], L = A * L + f.zOrigin - o[14]), f.rotationX = N * B, N && (y = Math.cos(-N), x = Math.sin(-N), v = S * y + C * x, m = P * y + R * x, g = O * y + A * x, C = S * -x + C * y, R = P * -x + R * y, A = O * -x + A * y, k = M * -x + k * y, S = v, P = m, O = g), N = Math.atan2(-w, A), f.rotationY = N * B, N && (y = Math.cos(-N), x = Math.sin(-N), v = b * y - C * x, m = T * y - R * x, g = w * y - A * x, R = T * x + R * y, A = w * x + A * y, k = E * x + k * y, b = v, T = m, w = g), N = Math.atan2(T, b), f.rotation = N * B, N && (y = Math.cos(-N), x = Math.sin(-N), b = b * y + S * x, m = T * y + P * x, P = T * -x + P * y, O = w * -x + O * y, T = m), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), f.scaleX = (1e5 * Math.sqrt(b * b + T * T) + .5 | 0) / 1e5, f.scaleY = (1e5 * Math.sqrt(P * P + R * R) + .5 | 0) / 1e5, f.scaleZ = (1e5 * Math.sqrt(O * O + A * A) + .5 | 0) / 1e5, f.rotationX || f.rotationY ? f.skewX = 0 : (f.skewX = S || P ? Math.atan2(S, P) * B + f.rotation : f.skewX || 0, Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (d ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180))), f.perspective = k ? 1 / (k < 0 ? -k : k) : 0, f.x = I, f.y = D, f.z = L, f.svg && (f.x -= f.xOrigin - (f.xOrigin * b - f.yOrigin * S), f.y -= f.yOrigin - (f.yOrigin * T - f.xOrigin * P))
                                    } else if (!It || n || !o.length || f.x !== o[4] || f.y !== o[5] || !f.rotationX && !f.rotationY) {
                                        var F = o.length >= 6,
                                            j = F ? o[0] : 1,
                                            U = o[1] || 0,
                                            X = o[2] || 0,
                                            G = F ? o[3] : 1;
                                        f.x = o[4] || 0, f.y = o[5] || 0, h = Math.sqrt(j * j + U * U), u = Math.sqrt(G * G + X * X), l = j || U ? Math.atan2(U, j) * B : f.rotation || 0, c = X || G ? Math.atan2(X, G) * B + l : f.skewX || 0, Math.abs(c) > 90 && Math.abs(c) < 270 && (d ? (h *= -1, c += l <= 0 ? 180 : -180, l += l <= 0 ? 180 : -180) : (u *= -1, c += c <= 0 ? 180 : -180)), f.scaleX = h, f.scaleY = u, f.rotation = l, f.skewX = c, It && (f.rotationX = f.rotationY = f.z = 0, f.perspective = _, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * j + f.yOrigin * X), f.y -= f.yOrigin - (f.xOrigin * U + f.yOrigin * G))
                                    }
                                    f.zOrigin = p;
                                    for (s in f) f[s] < 2e-5 && f[s] > -2e-5 && (f[s] = 0)
                                }
                                return r && (t._gsTransform = f, f.svg && (Ot && t.style[Ct] ? e.delayedCall(.001, function() {
                                    qt(t.style, Ct)
                                }) : !Ot && t.getAttribute("transform") && e.delayedCall(.001, function() {
                                    t.removeAttribute("transform")
                                }))), f
                            },
                            Ht = function(t) {
                                var e, i, r = this.data,
                                    n = -r.rotation * F,
                                    o = n + r.skewX * F,
                                    s = (Math.cos(n) * r.scaleX * 1e5 | 0) / 1e5,
                                    a = (Math.sin(n) * r.scaleX * 1e5 | 0) / 1e5,
                                    h = (Math.sin(o) * -r.scaleY * 1e5 | 0) / 1e5,
                                    u = (Math.cos(o) * r.scaleY * 1e5 | 0) / 1e5,
                                    l = this.t.style,
                                    c = this.t.currentStyle;
                                if (c) {
                                    i = a, a = -h, h = -i, e = c.filter, l.filter = "";
                                    var f, d, p = this.t.offsetWidth,
                                        _ = this.t.offsetHeight,
                                        m = "absolute" !== c.position,
                                        g = "progid:DXImageTransform.Microsoft.Matrix(M11=" + s + ", M12=" + a + ", M21=" + h + ", M22=" + u,
                                        y = r.x + p * r.xPercent / 100,
                                        x = r.y + _ * r.yPercent / 100;
                                    if (null != r.ox && (f = (r.oxp ? p * r.ox * .01 : r.ox) - p / 2, d = (r.oyp ? _ * r.oy * .01 : r.oy) - _ / 2, y += f - (f * s + d * a), x += d - (f * h + d * u)), m ? (f = p / 2, d = _ / 2, g += ", Dx=" + (f - (f * s + d * a) + y) + ", Dy=" + (d - (f * h + d * u) + x) + ")") : g += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? l.filter = e.replace(L, g) : l.filter = g + " " + e, 0 !== t && 1 !== t || 1 === s && 0 === a && 0 === h && 1 === u && (m && -1 === g.indexOf("Dx=0, Dy=0") || E.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && l.removeAttribute("filter")), !m) {
                                        var b, T, S, P = v < 8 ? 1 : -1;
                                        for (f = r.ieOffsetX || 0, d = r.ieOffsetY || 0, r.ieOffsetX = Math.round((p - ((s < 0 ? -s : s) * p + (a < 0 ? -a : a) * _)) / 2 + y), r.ieOffsetY = Math.round((_ - ((u < 0 ? -u : u) * _ + (h < 0 ? -h : h) * p)) / 2 + x), wt = 0; wt < 4; wt++) T = st[wt], b = c[T], i = -1 !== b.indexOf("px") ? parseFloat(b) : et(this.t, T, parseFloat(b), b.replace(w, "")) || 0, S = i !== r[T] ? wt < 2 ? -r.ieOffsetX : -r.ieOffsetY : wt < 2 ? f - r.ieOffsetX : d - r.ieOffsetY, l[T] = (r[T] = Math.round(i - S * (0 === wt || 2 === wt ? 1 : P))) + "px"
                                    }
                                }
                            },
                            zt = H.set3DTransformRatio = H.setTransformRatio = function(t) {
                                var e, i, r, n, o, s, a, h, u, l, c, f, d, _, v, m, g, y, x, b, T, w, E, S = this.data,
                                    P = this.t.style,
                                    O = S.rotation,
                                    M = S.rotationX,
                                    C = S.rotationY,
                                    R = S.scaleX,
                                    A = S.scaleY,
                                    I = S.scaleZ,
                                    D = S.x,
                                    L = S.y,
                                    k = S.z,
                                    N = S.svg,
                                    B = S.perspective,
                                    j = S.force3D,
                                    U = S.skewY,
                                    X = S.skewX;
                                if (U && (X += U, O += U), ((1 === t || 0 === t) && "auto" === j && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !j) && !k && !B && !C && !M && 1 === I || Ot && N || !It) return void(O || X || N ? (O *= F, w = X * F, E = 1e5, i = Math.cos(O) * R, o = Math.sin(O) * R, r = Math.sin(O - w) * -A, s = Math.cos(O - w) * A, w && "simple" === S.skewType && (e = Math.tan(w - U * F), e = Math.sqrt(1 + e * e), r *= e, s *= e, U && (e = Math.tan(U * F), e = Math.sqrt(1 + e * e), i *= e, o *= e)), N && (D += S.xOrigin - (S.xOrigin * i + S.yOrigin * r) + S.xOffset, L += S.yOrigin - (S.xOrigin * o + S.yOrigin * s) + S.yOffset, Ot && (S.xPercent || S.yPercent) && (v = this.t.getBBox(), D += .01 * S.xPercent * v.width, L += .01 * S.yPercent * v.height), v = 1e-6, D < v && D > -v && (D = 0), L < v && L > -v && (L = 0)), x = (i * E | 0) / E + "," + (o * E | 0) / E + "," + (r * E | 0) / E + "," + (s * E | 0) / E + "," + D + "," + L + ")", N && Ot ? this.t.setAttribute("transform", "matrix(" + x) : P[Ct] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + x) : P[Ct] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + R + ",0,0," + A + "," + D + "," + L + ")");
                                if (p && (v = 1e-4, R < v && R > -v && (R = I = 2e-5), A < v && A > -v && (A = I = 2e-5), !B || S.z || S.rotationX || S.rotationY || (B = 0)), O || X) O *= F, m = i = Math.cos(O), g = o = Math.sin(O), X && (O -= X * F, m = Math.cos(O), g = Math.sin(O), "simple" === S.skewType && (e = Math.tan((X - U) * F), e = Math.sqrt(1 + e * e), m *= e, g *= e, S.skewY && (e = Math.tan(U * F), e = Math.sqrt(1 + e * e), i *= e, o *= e))), r = -g, s = m;
                                else {
                                    if (!(C || M || 1 !== I || B || N)) return void(P[Ct] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + L + "px," + k + "px)" + (1 !== R || 1 !== A ? " scale(" + R + "," + A + ")" : ""));
                                    i = s = 1, r = o = 0
                                }
                                l = 1, n = a = h = u = c = f = 0, d = B ? -1 / B : 0, _ = S.zOrigin, v = 1e-6, b = ",", T = "0", O = C * F, O && (m = Math.cos(O), g = Math.sin(O), h = -g, c = d * -g, n = i * g, a = o * g, l = m, d *= m, i *= m, o *= m), O = M * F, O && (m = Math.cos(O), g = Math.sin(O), e = r * m + n * g, y = s * m + a * g, u = l * g, f = d * g, n = r * -g + n * m, a = s * -g + a * m, l *= m, d *= m, r = e, s = y), 1 !== I && (n *= I, a *= I, l *= I, d *= I), 1 !== A && (r *= A, s *= A, u *= A, f *= A), 1 !== R && (i *= R, o *= R, h *= R, c *= R), (_ || N) && (_ && (D += n * -_, L += a * -_, k += l * -_ + _), N && (D += S.xOrigin - (S.xOrigin * i + S.yOrigin * r) + S.xOffset, L += S.yOrigin - (S.xOrigin * o + S.yOrigin * s) + S.yOffset), D < v && D > -v && (D = T), L < v && L > -v && (L = T), k < v && k > -v && (k = 0)), x = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", x += (i < v && i > -v ? T : i) + b + (o < v && o > -v ? T : o) + b + (h < v && h > -v ? T : h), x += b + (c < v && c > -v ? T : c) + b + (r < v && r > -v ? T : r) + b + (s < v && s > -v ? T : s), M || C || 1 !== I ? (x += b + (u < v && u > -v ? T : u) + b + (f < v && f > -v ? T : f) + b + (n < v && n > -v ? T : n), x += b + (a < v && a > -v ? T : a) + b + (l < v && l > -v ? T : l) + b + (d < v && d > -v ? T : d) + b) : x += ",0,0,0,0,1,0,", x += D + b + L + b + k + b + (B ? 1 + -k / B : 1) + ")", P[Ct] = x
                            };
                        l = Dt.prototype, l.x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = l.xOffset = l.yOffset = 0, l.scaleX = l.scaleY = l.scaleZ = 1, St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                            parser: function(t, e, i, r, o, s, h) {
                                if (r._lastParsedTransform === h) return o;
                                r._lastParsedTransform = h;
                                var u, l = h.scale && "function" == typeof h.scale ? h.scale : 0;
                                "function" == typeof h[i] && (u = h[i], h[i] = e), l && (h.scale = l(g, t));
                                var c, f, d, p, _, v, y, x, b, T = t._gsTransform,
                                    w = t.style,
                                    E = Mt.length,
                                    S = h,
                                    P = {},
                                    O = Vt(t, n, !0, S.parseTransform),
                                    M = S.transform && ("function" == typeof S.transform ? S.transform(g, m) : S.transform);
                                if (r._transform = O, M && "string" == typeof M && Ct) f = W.style, f[Ct] = M, f.display = "block", f.position = "absolute", X.body.appendChild(W), c = Vt(W, null, !1), O.svg && (v = O.xOrigin, y = O.yOrigin, c.x -= O.xOffset, c.y -= O.yOffset, (S.transformOrigin || S.svgOrigin) && (M = {}, Bt(t, ht(S.transformOrigin), M, S.svgOrigin, S.smoothOrigin, !0), v = M.xOrigin, y = M.yOrigin, c.x -= M.xOffset - O.xOffset, c.y -= M.yOffset - O.yOffset), (v || y) && (x = Wt(W, !0), c.x -= v - (v * x[0] + y * x[2]), c.y -= y - (v * x[1] + y * x[3]))), X.body.removeChild(W), c.perspective || (c.perspective = O.perspective), null != S.xPercent && (c.xPercent = lt(S.xPercent, O.xPercent)), null != S.yPercent && (c.yPercent = lt(S.yPercent, O.yPercent));
                                else if ("object" == typeof S) {
                                    if (c = {
                                            scaleX: lt(null != S.scaleX ? S.scaleX : S.scale, O.scaleX),
                                            scaleY: lt(null != S.scaleY ? S.scaleY : S.scale, O.scaleY),
                                            scaleZ: lt(S.scaleZ, O.scaleZ),
                                            x: lt(S.x, O.x),
                                            y: lt(S.y, O.y),
                                            z: lt(S.z, O.z),
                                            xPercent: lt(S.xPercent, O.xPercent),
                                            yPercent: lt(S.yPercent, O.yPercent),
                                            perspective: lt(S.transformPerspective, O.perspective)
                                        }, null != (_ = S.directionalRotation))
                                        if ("object" == typeof _)
                                            for (f in _) S[f] = _[f];
                                        else S.rotation = _;
                                    "string" == typeof S.x && -1 !== S.x.indexOf("%") && (c.x = 0, c.xPercent = lt(S.x, O.xPercent)), "string" == typeof S.y && -1 !== S.y.indexOf("%") && (c.y = 0, c.yPercent = lt(S.y, O.yPercent)), c.rotation = ct("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : "rotationZ" in S ? S.rotationZ : O.rotation, O.rotation, "rotation", P), It && (c.rotationX = ct("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : O.rotationX || 0, O.rotationX, "rotationX", P), c.rotationY = ct("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : O.rotationY || 0, O.rotationY, "rotationY", P)), c.skewX = ct(S.skewX, O.skewX), c.skewY = ct(S.skewY, O.skewY)
                                }
                                for (It && null != S.force3D && (O.force3D = S.force3D, p = !0), O.skewType = S.skewType || O.skewType || a.defaultSkewType, d = O.force3D || O.z || O.rotationX || O.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, d || null == S.scale || (c.scaleZ = 1); --E > -1;) b = Mt[E], ((M = c[b] - O[b]) > 1e-6 || M < -1e-6 || null != S[b] || null != j[b]) && (p = !0, o = new xt(O, b, O[b], M, o), b in P && (o.e = P[b]), o.xs0 = 0, o.plugin = s, r._overwriteProps.push(o.n));
                                return M = S.transformOrigin, O.svg && (M || S.svgOrigin) && (v = O.xOffset, y = O.yOffset, Bt(t, ht(M), c, S.svgOrigin, S.smoothOrigin), o = bt(O, "xOrigin", (T ? O : c).xOrigin, c.xOrigin, o, "transformOrigin"), o = bt(O, "yOrigin", (T ? O : c).yOrigin, c.yOrigin, o, "transformOrigin"), v === O.xOffset && y === O.yOffset || (o = bt(O, "xOffset", T ? v : O.xOffset, O.xOffset, o, "transformOrigin"), o = bt(O, "yOffset", T ? y : O.yOffset, O.yOffset, o, "transformOrigin")), M = "0px 0px"), (M || It && d && O.zOrigin) && (Ct ? (p = !0, b = At, M = (M || tt(t, b, n, !1, "50% 50%")) + "", o = new xt(w, b, 0, 0, o, -1, "transformOrigin"), o.b = w[b], o.plugin = s, It ? (f = O.zOrigin, M = M.split(" "), O.zOrigin = (M.length > 2 && (0 === f || "0px" !== M[2]) ? parseFloat(M[2]) : f) || 0, o.xs0 = o.e = M[0] + " " + (M[1] || "50%") + " 0px", o = new xt(O, "zOrigin", 0, 0, o, -1, o.n), o.b = f, o.xs0 = o.e = O.zOrigin) : o.xs0 = o.e = M) : ht(M + "", O)), p && (r._transformType = O.svg && Ot || !d && 3 !== this._transformType ? 2 : 3), u && (h[i] = u), l && (h.scale = l), o
                            },
                            prefix: !0
                        }), St("boxShadow", {
                            defaultValue: "0px 0px 0px 0px #999",
                            prefix: !0,
                            color: !0,
                            multi: !0,
                            keyword: "inset"
                        }), St("borderRadius", {
                            defaultValue: "0px",
                            parser: function(t, e, i, o, s, a) {
                                e = this.format(e);
                                var h, u, l, c, f, d, p, _, v, m, g, y, x, b, T, w, E = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                                    S = t.style;
                                for (v = parseFloat(t.offsetWidth), m = parseFloat(t.offsetHeight), h = e.split(" "), u = 0; u < E.length; u++) this.p.indexOf("border") && (E[u] = Q(E[u])), f = c = tt(t, E[u], n, !1, "0px"), -1 !== f.indexOf(" ") && (c = f.split(" "), f = c[0], c = c[1]), d = l = h[u], p = parseFloat(f), y = f.substr((p + "").length), x = "=" === d.charAt(1), x ? (_ = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), _ *= parseFloat(d), g = d.substr((_ + "").length - (_ < 0 ? 1 : 0)) || "") : (_ = parseFloat(d), g = d.substr((_ + "").length)), "" === g && (g = r[i] || y), g !== y && (b = et(t, "borderLeft", p, y), T = et(t, "borderTop", p, y), "%" === g ? (f = b / v * 100 + "%", c = T / m * 100 + "%") : "em" === g ? (w = et(t, "borderLeft", 1, "em"), f = b / w + "em", c = T / w + "em") : (f = b + "px", c = T + "px"), x && (d = parseFloat(f) + _ + g, l = parseFloat(c) + _ + g)), s = Tt(S, E[u], f + " " + c, d + " " + l, !1, "0px", s);
                                return s
                            },
                            prefix: !0,
                            formatter: mt("0px 0px 0px 0px", !1, !0)
                        }), St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                            defaultValue: "0px",
                            parser: function(t, e, i, r, o, s) {
                                return Tt(t.style, i, this.format(tt(t, i, n, !1, "0px 0px")), this.format(e), !1, "0px", o)
                            },
                            prefix: !0,
                            formatter: mt("0px 0px", !1, !0)
                        }), St("backgroundPosition", {
                            defaultValue: "0 0",
                            parser: function(t, e, i, r, o, s) {
                                var a, h, u, l, c, f, d = "background-position",
                                    p = n || $(t, null),
                                    _ = this.format((p ? v ? p.getPropertyValue(d + "-x") + " " + p.getPropertyValue(d + "-y") : p.getPropertyValue(d) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                                    m = this.format(e);
                                if (-1 !== _.indexOf("%") != (-1 !== m.indexOf("%")) && m.split(",").length < 2 && (f = tt(t, "backgroundImage").replace(R, "")) && "none" !== f) {
                                    for (a = _.split(" "), h = m.split(" "), V.setAttribute("src", f), u = 2; --u > -1;) _ = a[u], (l = -1 !== _.indexOf("%")) !== (-1 !== h[u].indexOf("%")) && (c = 0 === u ? t.offsetWidth - V.width : t.offsetHeight - V.height, a[u] = l ? parseFloat(_) / 100 * c + "px" : parseFloat(_) / c * 100 + "%");
                                    _ = a.join(" ")
                                }
                                return this.parseComplex(t.style, _, m, o, s)
                            },
                            formatter: ht
                        }), St("backgroundSize", {
                            defaultValue: "0 0",
                            formatter: function(t) {
                                return t += "", ht(-1 === t.indexOf(" ") ? t + " " + t : t)
                            }
                        }), St("perspective", {
                            defaultValue: "0px",
                            prefix: !0
                        }), St("perspectiveOrigin", {
                            defaultValue: "50% 50%",
                            prefix: !0
                        }), St("transformStyle", {
                            prefix: !0
                        }), St("backfaceVisibility", {
                            prefix: !0
                        }), St("userSelect", {
                            prefix: !0
                        }), St("margin", {
                            parser: gt("marginTop,marginRight,marginBottom,marginLeft")
                        }), St("padding", {
                            parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                        }), St("clip", {
                            defaultValue: "rect(0px,0px,0px,0px)",
                            parser: function(t, e, i, r, o, s) {
                                var a, h, u;
                                return v < 9 ? (h = t.currentStyle, u = v < 8 ? " " : ",", a = "rect(" + h.clipTop + u + h.clipRight + u + h.clipBottom + u + h.clipLeft + ")", e = this.format(e).split(",").join(u)) : (a = this.format(tt(t, this.p, n, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, o, s)
                            }
                        }), St("textShadow", {
                            defaultValue: "0px 0px 0px #999",
                            color: !0,
                            multi: !0
                        }), St("autoRound,strictUnits", {
                            parser: function(t, e, i, r, n) {
                                return n
                            }
                        }), St("border", {
                            defaultValue: "0px solid #000",
                            parser: function(t, e, i, r, o, s) {
                                var a = tt(t, "borderTopWidth", n, !1, "0px"),
                                    h = this.format(e).split(" "),
                                    u = h[0].replace(w, "");
                                return "px" !== u && (a = parseFloat(a) / et(t, "borderTopWidth", 1, u) + u), this.parseComplex(t.style, this.format(a + " " + tt(t, "borderTopStyle", n, !1, "solid") + " " + tt(t, "borderTopColor", n, !1, "#000")), h.join(" "), o, s)
                            },
                            color: !0,
                            formatter: function(t) {
                                var e = t.split(" ");
                                return e[0] + " " + (e[1] || "solid") + " " + (t.match(vt) || ["#000"])[0]
                            }
                        }), St("borderWidth", {
                            parser: gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                        }), St("float,cssFloat,styleFloat", {
                            parser: function(t, e, i, r, n, o) {
                                var s = t.style,
                                    a = "cssFloat" in s ? "cssFloat" : "styleFloat";
                                return new xt(s, a, 0, 0, n, -1, i, !1, 0, s[a], e)
                            }
                        });
                        var Yt = function(t) {
                            var e, i = this.t,
                                r = i.filter || tt(this.data, "filter") || "",
                                n = this.s + this.c * t | 0;
                            100 === n && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), e = !tt(this.data, "filter")) : (i.filter = r.replace(P, ""), e = !0)), e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + n + ")"), -1 === r.indexOf("pacity") ? 0 === n && this.xn1 || (i.filter = r + " alpha(opacity=" + n + ")") : i.filter = r.replace(E, "opacity=" + n))
                        };
                        St("opacity,alpha,autoAlpha", {
                            defaultValue: "1",
                            parser: function(t, e, i, r, o, s) {
                                var a = parseFloat(tt(t, "opacity", n, !1, "1")),
                                    h = t.style,
                                    u = "autoAlpha" === i;
                                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), u && 1 === a && "hidden" === tt(t, "visibility", n) && 0 !== e && (a = 0), Y ? o = new xt(h, "opacity", a, e - a, o) : (o = new xt(h, "opacity", 100 * a, 100 * (e - a), o), o.xn1 = u ? 1 : 0, h.zoom = 1, o.type = 2, o.b = "alpha(opacity=" + o.s + ")", o.e = "alpha(opacity=" + (o.s + o.c) + ")", o.data = t, o.plugin = s, o.setRatio = Yt), u && (o = new xt(h, "visibility", 0, 0, o, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), o.xs0 = "inherit", r._overwriteProps.push(o.n), r._overwriteProps.push(i)), o
                            }
                        });
                        var qt = function(t, e) {
                                e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(M, "-$1").toLowerCase())) : t.removeAttribute(e))
                            },
                            Zt = function(t) {
                                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                                    this.t.setAttribute("class", 0 === t ? this.b : this.e);
                                    for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : qt(i, e.p), e = e._next;
                                    1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                            };
                        St("className", {
                            parser: function(t, e, r, o, s, a, h) {
                                var u, l, c, f, d, p = t.getAttribute("class") || "",
                                    _ = t.style.cssText;
                                if (s = o._classNamePT = new xt(t, r, 0, 0, s, 2), s.setRatio = Zt, s.pr = -11, i = !0, s.b = p, l = rt(t, n), c = t._gsClassPT) {
                                    for (f = {}, d = c.data; d;) f[d.p] = 1, d = d._next;
                                    c.setRatio(1)
                                }
                                return t._gsClassPT = s, s.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", s.e), u = nt(t, l, rt(t), h, f), t.setAttribute("class", p), s.data = u.firstMPT, t.style.cssText = _, s = s.xfirst = o.parse(t, u.difs, s, a)
                            }
                        });
                        var Kt = function(t) {
                            if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                                var e, i, r, n, o, s = this.t.style,
                                    a = u.transform.parse;
                                if ("all" === this.e) s.cssText = "", n = !0;
                                else
                                    for (e = this.e.split(" ").join("").split(","), r = e.length; --r > -1;) i = e[r], u[i] && (u[i].parse === a ? n = !0 : i = "transformOrigin" === i ? At : u[i].p), qt(s, i);
                                n && (qt(s, Ct), (o = this.t._gsTransform) && (o.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                            }
                        };
                        for (St("clearProps", {
                                parser: function(t, e, r, n, o) {
                                    return o = new xt(t, r, 0, 0, o, 2), o.setRatio = Kt, o.e = e, o.pr = -10, o.data = n._tween, i = !0, o
                                }
                            }), l = "bezier,throwProps,physicsProps,physics2D".split(","), wt = l.length; wt--;) Pt(l[wt]);
                        l = a.prototype, l._firstPT = l._lastParsedTransform = l._transform = null, l._onInitTween = function(t, e, s, h) {
                            if (!t.nodeType) return !1;
                            this._target = m = t, this._tween = s, this._vars = e, g = h, c = e.autoRound, i = !1, r = e.suffixMap || a.suffixMap, n = $(t, ""), o = this._overwriteProps;
                            var l, p, v, y, x, b, T, w, E, P = t.style;
                            if (f && "" === P.zIndex && ("auto" !== (l = tt(t, "zIndex", n)) && "" !== l || this._addLazySet(P, "zIndex", 0)), "string" == typeof e && (y = P.cssText, l = rt(t, n), P.cssText = y + ";" + e, l = nt(t, l, rt(t)).difs, !Y && S.test(e) && (l.opacity = parseFloat(RegExp.$1)), e = l, P.cssText = y), e.className ? this._firstPT = p = u.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = p = this.parse(t, e, null), this._transformType) {
                                for (E = 3 === this._transformType, Ct ? d && (f = !0, "" === P.zIndex && ("auto" !== (T = tt(t, "zIndex", n)) && "" !== T || this._addLazySet(P, "zIndex", 0)), _ && this._addLazySet(P, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (E ? "visible" : "hidden"))) : P.zoom = 1, v = p; v && v._next;) v = v._next;
                                w = new xt(t, "transform", 0, 0, null, 2), this._linkCSSP(w, null, v), w.setRatio = Ct ? zt : Ht, w.data = this._transform || Vt(t, n, !0), w.tween = s, w.pr = -1, o.pop()
                            }
                            if (i) {
                                for (; p;) {
                                    for (b = p._next, v = y; v && v.pr > p.pr;) v = v._next;
                                    (p._prev = v ? v._prev : x) ? p._prev._next = p: y = p, (p._next = v) ? v._prev = p : x = p, p = b
                                }
                                this._firstPT = y
                            }
                            return !0
                        }, l.parse = function(t, e, i, o) {
                            var s, a, h, l, f, d, p, _, v, y, x = t.style;
                            for (s in e) d = e[s], "function" == typeof d && (d = d(g, m)), a = u[s], a ? i = a.parse(t, d, s, this, i, o, e) : (f = tt(t, s, n) + "", v = "string" == typeof d, "color" === s || "fill" === s || "stroke" === s || -1 !== s.indexOf("Color") || v && O.test(d) ? (v || (d = pt(d), d = (d.length > 3 ? "rgba(" : "rgb(") + d.join(",") + ")"), i = Tt(x, s, f, d, !0, "transparent", i, 0, o)) : v && N.test(d) ? i = Tt(x, s, f, d, !0, null, i, 0, o) : (h = parseFloat(f), p = h || 0 === h ? f.substr((h + "").length) : "", "" !== f && "auto" !== f || ("width" === s || "height" === s ? (h = at(t, s, n), p = "px") : "left" === s || "top" === s ? (h = it(t, s, n), p = "px") : (h = "opacity" !== s ? 0 : 1, p = "")), y = v && "=" === d.charAt(1), y ? (l = parseInt(d.charAt(0) + "1", 10), d = d.substr(2), l *= parseFloat(d), _ = d.replace(w, "")) : (l = parseFloat(d), _ = v ? d.replace(w, "") : ""), "" === _ && (_ = s in r ? r[s] : p), d = l || 0 === l ? (y ? l + h : l) + _ : e[s], p !== _ && "" !== _ && (l || 0 === l) && h && (h = et(t, s, h, p), "%" === _ ? (h /= et(t, s, 100, "%") / 100, !0 !== e.strictUnits && (f = h + "%")) : "em" === _ || "rem" === _ || "vw" === _ || "vh" === _ ? h /= et(t, s, 1, _) : "px" !== _ && (l = et(t, s, l, _), _ = "px"), y && (l || 0 === l) && (d = l + h + _)), y && (l += h), !h && 0 !== h || !l && 0 !== l ? void 0 !== x[s] && (d || d + "" != "NaN" && null != d) ? (i = new xt(x, s, l || h || 0, 0, i, -1, s, !1, 0, f, d), i.xs0 = "none" !== d || "display" !== s && -1 === s.indexOf("Style") ? d : f) : Z("invalid " + s + " tween value: " + e[s]) : (i = new xt(x, s, h, l - h, i, 0, s, !1 !== c && ("px" === _ || "zIndex" === s), 0, f, d), i.xs0 = _))), o && i && !i.plugin && (i.plugin = o);
                            return i
                        }, l.setRatio = function(t) {
                            var e, i, r, n = this._firstPT;
                            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                                    for (; n;) {
                                        if (e = n.c * t + n.s, n.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), n.type)
                                            if (1 === n.type)
                                                if (2 === (r = n.l)) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2;
                                                else if (3 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3;
                                        else if (4 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4;
                                        else if (5 === r) n.t[n.p] = n.xs0 + e + n.xs1 + n.xn1 + n.xs2 + n.xn2 + n.xs3 + n.xn3 + n.xs4 + n.xn4 + n.xs5;
                                        else {
                                            for (i = n.xs0 + e + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                            n.t[n.p] = i
                                        } else -1 === n.type ? n.t[n.p] = n.xs0 : n.setRatio && n.setRatio(t);
                                        else n.t[n.p] = e + n.xs0;
                                        n = n._next
                                    } else
                                        for (; n;) 2 !== n.type ? n.t[n.p] = n.b : n.setRatio(t), n = n._next;
                                else
                                    for (; n;) {
                                        if (2 !== n.type)
                                            if (n.r && -1 !== n.type)
                                                if (e = Math.round(n.s + n.c), n.type) {
                                                    if (1 === n.type) {
                                                        for (r = n.l, i = n.xs0 + e + n.xs1, r = 1; r < n.l; r++) i += n["xn" + r] + n["xs" + (r + 1)];
                                                        n.t[n.p] = i
                                                    }
                                                } else n.t[n.p] = e + n.xs0;
                                        else n.t[n.p] = n.e;
                                        else n.setRatio(t);
                                        n = n._next
                                    }
                        }, l._enableTransforms = function(t) {
                            this._transform = this._transform || Vt(this._target, n, !0), this._transformType = this._transform.svg && Ot || !t && 3 !== this._transformType ? 2 : 3
                        };
                        var Jt = function(t) {
                            this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                        };
                        l._addLazySet = function(t, e, i) {
                            var r = this._firstPT = new xt(t, e, 0, 0, this._firstPT, 2);
                            r.e = i, r.setRatio = Jt, r.data = this
                        }, l._linkCSSP = function(t, e, i, r) {
                            return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                        }, l._mod = function(t) {
                            for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
                        }, l._kill = function(e) {
                            var i, r, n, o = e;
                            if (e.autoAlpha || e.alpha) {
                                o = {};
                                for (r in e) o[r] = e[r];
                                o.opacity = 1, o.autoAlpha && (o.visibility = 1)
                            }
                            for (e.className && (i = this._classNamePT) && (n = i.xfirst, n && n._prev ? this._linkCSSP(n._prev, i._next, n._prev._prev) : n === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, n._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== r && i.plugin._kill && (i.plugin._kill(e), r = i.plugin), i = i._next;
                            return t.prototype._kill.call(this, o)
                        };
                        var Qt = function(t, e, i) {
                            var r, n, o, s;
                            if (t.slice)
                                for (n = t.length; --n > -1;) Qt(t[n], e, i);
                            else
                                for (r = t.childNodes, n = r.length; --n > -1;) o = r[n], s = o.type, o.style && (e.push(rt(o)), i && i.push(o)), 1 !== s && 9 !== s && 11 !== s || !o.childNodes.length || Qt(o, e, i)
                        };
                        return a.cascadeTo = function(t, i, r) {
                            var n, o, s, a, h = e.to(t, i, r),
                                u = [h],
                                l = [],
                                c = [],
                                f = [],
                                d = e._internals.reservedProps;
                            for (t = h._targets || h.target, Qt(t, l, f), h.render(i, !0, !0), Qt(t, c), h.render(0, !0, !0), h._enabled(!0), n = f.length; --n > -1;)
                                if (o = nt(f[n], l[n], c[n]), o.firstMPT) {
                                    o = o.difs;
                                    for (s in r) d[s] && (o[s] = r[s]);
                                    a = {};
                                    for (s in o) a[s] = l[n][s];
                                    u.push(e.fromTo(f[n], i, a, o))
                                }
                            return u
                        }, t.activate([a]), a
                    }, !0),
                    function() {
                        var t = s._gsDefine.plugin({
                                propName: "roundProps",
                                version: "1.6.0",
                                priority: -1,
                                API: 2,
                                init: function(t, e, i) {
                                    return this._tween = i, !0
                                }
                            }),
                            e = function(t) {
                                for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
                            },
                            i = t.prototype;
                        i._onInitAllProps = function() {
                            for (var t, i, r, n = this._tween, o = n.vars.roundProps.join ? n.vars.roundProps : n.vars.roundProps.split(","), s = o.length, a = {}, h = n._propLookup.roundProps; --s > -1;) a[o[s]] = Math.round;
                            for (s = o.length; --s > -1;)
                                for (t = o[s], i = n._firstPT; i;) r = i._next, i.pg ? i.t._mod(a) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), r && (r._prev = i._prev), i._prev ? i._prev._next = r : n._firstPT === i && (n._firstPT = r), i._next = i._prev = null, n._propLookup[t] = h)), i = r;
                            return !1
                        }, i._add = function(t, e, i, r) {
                            this._addTween(t, e, i, i + r, e, Math.round), this._overwriteProps.push(e)
                        }
                    }(),
                    function() {
                        s._gsDefine.plugin({
                            propName: "attr",
                            API: 2,
                            version: "0.6.0",
                            init: function(t, e, i, r) {
                                var n, o;
                                if ("function" != typeof t.setAttribute) return !1;
                                for (n in e) o = e[n], "function" == typeof o && (o = o(r, t)), this._addTween(t, "setAttribute", t.getAttribute(n) + "", o + "", n, !1, n), this._overwriteProps.push(n);
                                return !0
                            }
                        })
                    }(), s._gsDefine.plugin({
                        propName: "directionalRotation",
                        version: "0.3.0",
                        API: 2,
                        init: function(t, e, i, r) {
                            "object" != typeof e && (e = {
                                rotation: e
                            }), this.finals = {};
                            var n, o, s, a, h, u, l = !0 === e.useRadians ? 2 * Math.PI : 360;
                            for (n in e) "useRadians" !== n && (a = e[n], "function" == typeof a && (a = a(r, t)), u = (a + "").split("_"), o = u[0], s = parseFloat("function" != typeof t[n] ? t[n] : t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), a = this.finals[n] = "string" == typeof o && "=" === o.charAt(1) ? s + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2)) : Number(o) || 0, h = a - s, u.length && (o = u.join("_"), -1 !== o.indexOf("short") && (h %= l) !== h % (l / 2) && (h = h < 0 ? h + l : h - l), -1 !== o.indexOf("_cw") && h < 0 ? h = (h + 9999999999 * l) % l - (h / l | 0) * l : -1 !== o.indexOf("ccw") && h > 0 && (h = (h - 9999999999 * l) % l - (h / l | 0) * l)), (h > 1e-6 || h < -1e-6) && (this._addTween(t, n, s, s + h, n), this._overwriteProps.push(n)));
                            return !0
                        },
                        set: function(t) {
                            var e;
                            if (1 !== t) this._super.setRatio.call(this, t);
                            else
                                for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                        }
                    })._autoCSS = !0, s._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                        var e, i, r, n = s.GreenSockGlobals || s,
                            o = n.com.greensock,
                            a = 2 * Math.PI,
                            h = Math.PI / 2,
                            u = o._class,
                            l = function(e, i) {
                                var r = u("easing." + e, function() {}, !0),
                                    n = r.prototype = new t;
                                return n.constructor = r, n.getRatio = i, r
                            },
                            c = t.register || function() {},
                            f = function(t, e, i, r, n) {
                                var o = u("easing." + t, {
                                    easeOut: new e,
                                    easeIn: new i,
                                    easeInOut: new r
                                }, !0);
                                return c(o, t), o
                            },
                            d = function(t, e, i) {
                                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                            },
                            p = function(e, i) {
                                var r = u("easing." + e, function(t) {
                                        this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                                    }, !0),
                                    n = r.prototype = new t;
                                return n.constructor = r, n.getRatio = i, n.config = function(t) {
                                    return new r(t)
                                }, r
                            },
                            _ = f("Back", p("BackOut", function(t) {
                                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                            }), p("BackIn", function(t) {
                                return t * t * ((this._p1 + 1) * t - this._p1)
                            }), p("BackInOut", function(t) {
                                return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                            })),
                            v = u("easing.SlowMo", function(t, e, i) {
                                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                            }, !0),
                            m = v.prototype = new t;
                        return m.constructor = v, m.getRatio = function(t) {
                            var e = t + (.5 - t) * this._p;
                            return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                        }, v.ease = new v(.7, .7), m.config = v.config = function(t, e, i) {
                            return new v(t, e, i)
                        }, e = u("easing.SteppedEase", function(t) {
                            t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                        }, !0), m = e.prototype = new t, m.constructor = e, m.getRatio = function(t) {
                            return t < 0 ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                        }, m.config = e.config = function(t) {
                            return new e(t)
                        }, i = u("easing.RoughEase", function(e) {
                            e = e || {};
                            for (var i, r, n, o, s, a, h = e.taper || "none", u = [], l = 0, c = 0 | (e.points || 20), f = c, p = !1 !== e.randomize, _ = !0 === e.clamp, v = e.template instanceof t ? e.template : null, m = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = p ? Math.random() : 1 / c * f, r = v ? v.getRatio(i) : i, "none" === h ? n = m : "out" === h ? (o = 1 - i, n = o * o * m) : "in" === h ? n = i * i * m : i < .5 ? (o = 2 * i, n = o * o * .5 * m) : (o = 2 * (1 - i), n = o * o * .5 * m), p ? r += Math.random() * n - .5 * n : f % 2 ? r += .5 * n : r -= .5 * n, _ && (r > 1 ? r = 1 : r < 0 && (r = 0)), u[l++] = {
                                x: i,
                                y: r
                            };
                            for (u.sort(function(t, e) {
                                    return t.x - e.x
                                }), a = new d(1, 1, null), f = c; --f > -1;) s = u[f], a = new d(s.x, s.y, a);
                            this._prev = new d(0, 0, 0 !== a.t ? a : a.next)
                        }, !0), m = i.prototype = new t, m.constructor = i, m.getRatio = function(t) {
                            var e = this._prev;
                            if (t > e.t) {
                                for (; e.next && t >= e.t;) e = e.next;
                                e = e.prev
                            } else
                                for (; e.prev && t <= e.t;) e = e.prev;
                            return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                        }, m.config = function(t) {
                            return new i(t)
                        }, i.ease = new i, f("Bounce", l("BounceOut", function(t) {
                            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                        }), l("BounceIn", function(t) {
                            return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                        }), l("BounceInOut", function(t) {
                            var e = t < .5;
                            return t = e ? 1 - 2 * t : 2 * t - 1, t < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                        })), f("Circ", l("CircOut", function(t) {
                            return Math.sqrt(1 - (t -= 1) * t)
                        }), l("CircIn", function(t) {
                            return -(Math.sqrt(1 - t * t) - 1)
                        }), l("CircInOut", function(t) {
                            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                        })), r = function(e, i, r) {
                            var n = u("easing." + e, function(t, e) {
                                    this._p1 = t >= 1 ? t : 1, this._p2 = (e || r) / (t < 1 ? t : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
                                }, !0),
                                o = n.prototype = new t;
                            return o.constructor = n, o.getRatio = i, o.config = function(t, e) {
                                return new n(t, e)
                            }, n
                        }, f("Elastic", r("ElasticOut", function(t) {
                            return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                        }, .3), r("ElasticIn", function(t) {
                            return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
                        }, .3), r("ElasticInOut", function(t) {
                            return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                        }, .45)), f("Expo", l("ExpoOut", function(t) {
                            return 1 - Math.pow(2, -10 * t)
                        }), l("ExpoIn", function(t) {
                            return Math.pow(2, 10 * (t - 1)) - .001
                        }), l("ExpoInOut", function(t) {
                            return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                        })), f("Sine", l("SineOut", function(t) {
                            return Math.sin(t * h)
                        }), l("SineIn", function(t) {
                            return 1 - Math.cos(t * h)
                        }), l("SineInOut", function(t) {
                            return -.5 * (Math.cos(Math.PI * t) - 1)
                        })), u("easing.EaseLookup", {
                            find: function(e) {
                                return t.map[e]
                            }
                        }, !0), c(n.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), _
                    }, !0)
            }), s._gsDefine && s._gsQueue.pop()(),
            function(r, s) {
                "use strict";
                var a = {},
                    h = r.document,
                    u = r.GreenSockGlobals = r.GreenSockGlobals || r;
                if (!u.TweenLite) {
                    var l, c, f, d, p, _ = function(t) {
                            var e, i = t.split("."),
                                r = u;
                            for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
                            return r
                        },
                        v = _("com.greensock"),
                        m = function(t) {
                            var e, i = [],
                                r = t.length;
                            for (e = 0; e !== r; i.push(t[e++]));
                            return i
                        },
                        g = function() {},
                        y = function() {
                            var t = Object.prototype.toString,
                                e = t.call([]);
                            return function(i) {
                                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                            }
                        }(),
                        x = {},
                        b = function(r, s, h, l) {
                            this.sc = x[r] ? x[r].sc : [], x[r] = this, this.gsClass = null, this.func = h;
                            var c = [];
                            this.check = function(f) {
                                for (var d, p, v, m, g, y = s.length, T = y; --y > -1;)(d = x[s[y]] || new b(s[y], [])).gsClass ? (c[y] = d.gsClass, T--) : f && d.sc.push(this);
                                if (0 === T && h) {
                                    if (p = ("com.greensock." + r).split("."), v = p.pop(), m = _(p.join("."))[v] = this.gsClass = h.apply(h, c), l)
                                        if (u[v] = a[v] = m, !(g = void 0 !== t && t.exports) && i(354)) n = [], void 0 !== (o = function() {
                                            return m
                                        }.apply(e, n)) && (t.exports = o);
                                        else if (g)
                                        if ("TweenMax" === r) {
                                            t.exports = a.TweenMax = m;
                                            for (y in a) m[y] = a[y]
                                        } else a.TweenMax && (a.TweenMax[v] = m);
                                    for (y = 0; y < this.sc.length; y++) this.sc[y].check()
                                }
                            }, this.check(!0)
                        },
                        T = r._gsDefine = function(t, e, i, r) {
                            return new b(t, e, i, r)
                        },
                        w = v._class = function(t, e, i) {
                            return e = e || function() {}, T(t, [], function() {
                                return e
                            }, i), e
                        };
                    T.globals = u;
                    var E = [0, 0, 1, 1],
                        S = w("easing.Ease", function(t, e, i, r) {
                            this._func = t, this._type = i || 0, this._power = r || 0, this._params = e ? E.concat(e) : E
                        }, !0),
                        P = S.map = {},
                        O = S.register = function(t, e, i, r) {
                            for (var n, o, s, a, h = e.split(","), u = h.length, l = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                                for (o = h[u], n = r ? w("easing." + o, null, !0) : v.easing[o] || {}, s = l.length; --s > -1;) a = l[s], P[o + "." + a] = P[a + o] = n[a] = t.getRatio ? t : t[a] || new t
                        };
                    for (f = S.prototype, f._calcEnd = !1, f.getRatio = function(t) {
                            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                            var e = this._type,
                                i = this._power,
                                r = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                            return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r), 1 === e ? 1 - r : 2 === e ? r : t < .5 ? r / 2 : 1 - r / 2
                        }, l = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], c = l.length; --c > -1;) f = l[c] + ",Power" + c, O(new S(null, null, 1, c), f, "easeOut", !0), O(new S(null, null, 2, c), f, "easeIn" + (0 === c ? ",easeNone" : "")), O(new S(null, null, 3, c), f, "easeInOut");
                    P.linear = v.easing.Linear.easeIn, P.swing = v.easing.Quad.easeInOut;
                    var M = w("events.EventDispatcher", function(t) {
                        this._listeners = {}, this._eventTarget = t || this
                    });
                    f = M.prototype, f.addEventListener = function(t, e, i, r, n) {
                        n = n || 0;
                        var o, s, a = this._listeners[t],
                            h = 0;
                        for (this !== d || p || d.wake(), null == a && (this._listeners[t] = a = []), s = a.length; --s > -1;) o = a[s], o.c === e && o.s === i ? a.splice(s, 1) : 0 === h && o.pr < n && (h = s + 1);
                        a.splice(h, 0, {
                            c: e,
                            s: i,
                            up: r,
                            pr: n
                        })
                    }, f.removeEventListener = function(t, e) {
                        var i, r = this._listeners[t];
                        if (r)
                            for (i = r.length; --i > -1;)
                                if (r[i].c === e) return void r.splice(i, 1)
                    }, f.dispatchEvent = function(t) {
                        var e, i, r, n = this._listeners[t];
                        if (n)
                            for (e = n.length, e > 1 && (n = n.slice(0)), i = this._eventTarget; --e > -1;)(r = n[e]) && (r.up ? r.c.call(r.s || i, {
                                type: t,
                                target: i
                            }) : r.c.call(r.s || i))
                    };
                    var C = r.requestAnimationFrame,
                        R = r.cancelAnimationFrame,
                        A = Date.now || function() {
                            return (new Date).getTime()
                        },
                        I = A();
                    for (l = ["ms", "moz", "webkit", "o"], c = l.length; --c > -1 && !C;) C = r[l[c] + "RequestAnimationFrame"], R = r[l[c] + "CancelAnimationFrame"] || r[l[c] + "CancelRequestAnimationFrame"];
                    w("Ticker", function(t, e) {
                        var i, r, n, o, s, a = this,
                            u = A(),
                            l = !(!1 === e || !C) && "auto",
                            c = 500,
                            f = 33,
                            _ = function(t) {
                                var e, h, l = A() - I;
                                l > c && (u += l - f), I += l, a.time = (I - u) / 1e3, e = a.time - s, (!i || e > 0 || !0 === t) && (a.frame++, s += e + (e >= o ? .004 : o - e), h = !0), !0 !== t && (n = r(_)), h && a.dispatchEvent("tick")
                            };
                        M.call(a), a.time = a.frame = 0, a.tick = function() {
                            _(!0)
                        }, a.lagSmoothing = function(t, e) {
                            c = t || 1e10, f = Math.min(e, c, 0)
                        }, a.sleep = function() {
                            null != n && (l && R ? R(n) : clearTimeout(n), r = g, n = null, a === d && (p = !1))
                        }, a.wake = function(t) {
                            null !== n ? a.sleep() : t ? u += -I + (I = A()) : a.frame > 10 && (I = A() - c + 5), r = 0 === i ? g : l && C ? C : function(t) {
                                return setTimeout(t, 1e3 * (s - a.time) + 1 | 0)
                            }, a === d && (p = !0), _(2)
                        }, a.fps = function(t) {
                            if (!arguments.length) return i;
                            i = t, o = 1 / (i || 60), s = this.time + o, a.wake()
                        }, a.useRAF = function(t) {
                            if (!arguments.length) return l;
                            a.sleep(), l = t, a.fps(i)
                        }, a.fps(t), setTimeout(function() {
                            "auto" === l && a.frame < 5 && "hidden" !== h.visibilityState && a.useRAF(!1)
                        }, 1500)
                    }), f = v.Ticker.prototype = new v.events.EventDispatcher, f.constructor = v.Ticker;
                    var D = w("core.Animation", function(t, e) {
                        if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, Q) {
                            p || d.wake();
                            var i = this.vars.useFrames ? J : Q;
                            i.add(this, i._time), this.vars.paused && this.paused(!0)
                        }
                    });
                    d = D.ticker = new v.Ticker, f = D.prototype, f._dirty = f._gc = f._initted = f._paused = !1, f._totalTime = f._time = 0, f._rawPrevTime = -1, f._next = f._last = f._onUpdate = f._timeline = f.timeline = null, f._paused = !1;
                    var L = function() {
                        p && A() - I > 2e3 && d.wake(), setTimeout(L, 2e3)
                    };
                    L(), f.play = function(t, e) {
                        return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
                    }, f.pause = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!0)
                    }, f.resume = function(t, e) {
                        return null != t && this.seek(t, e), this.paused(!1)
                    }, f.seek = function(t, e) {
                        return this.totalTime(Number(t), !1 !== e)
                    }, f.restart = function(t, e) {
                        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
                    }, f.reverse = function(t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
                    }, f.render = function(t, e, i) {}, f.invalidate = function() {
                        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
                    }, f.isActive = function() {
                        var t, e = this._timeline,
                            i = this._startTime;
                        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale
                    }, f._enabled = function(t, e) {
                        return p || d.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
                    }, f._kill = function(t, e) {
                        return this._enabled(!1, !1)
                    }, f.kill = function(t, e) {
                        return this._kill(t, e), this
                    }, f._uncache = function(t) {
                        for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                        return this
                    }, f._swapSelfInParams = function(t) {
                        for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                        return i
                    }, f._callback = function(t) {
                        var e = this.vars,
                            i = e[t],
                            r = e[t + "Params"],
                            n = e[t + "Scope"] || e.callbackScope || this;
                        switch (r ? r.length : 0) {
                            case 0:
                                i.call(n);
                                break;
                            case 1:
                                i.call(n, r[0]);
                                break;
                            case 2:
                                i.call(n, r[0], r[1]);
                                break;
                            default:
                                i.apply(n, r)
                        }
                    }, f.eventCallback = function(t, e, i, r) {
                        if ("on" === (t || "").substr(0, 2)) {
                            var n = this.vars;
                            if (1 === arguments.length) return n[t];
                            null == e ? delete n[t] : (n[t] = e, n[t + "Params"] = y(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, n[t + "Scope"] = r), "onUpdate" === t && (this._onUpdate = e)
                        }
                        return this
                    }, f.delay = function(t) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
                    }, f.duration = function(t) {
                        return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
                    }, f.totalDuration = function(t) {
                        return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
                    }, f.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                    }, f.totalTime = function(t, e, i) {
                        if (p || d.wake(), !arguments.length) return this._totalTime;
                        if (this._timeline) {
                            if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var r = this._totalDuration,
                                    n = this._timeline;
                                if (t > r && !i && (t = r), this._startTime = (this._paused ? this._pauseTime : n._time) - (this._reversed ? r - t : t) / this._timeScale, n._dirty || this._uncache(!1), n._timeline)
                                    for (; n._timeline;) n._timeline._time !== (n._startTime + n._totalTime) / n._timeScale && n.totalTime(n._totalTime, !0), n = n._timeline
                            }
                            this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (j.length && tt(), this.render(t, e, !1), j.length && tt())
                        }
                        return this
                    }, f.progress = f.totalProgress = function(t, e) {
                        var i = this.duration();
                        return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
                    }, f.startTime = function(t) {
                        return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
                    }, f.endTime = function(t) {
                        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                    }, f.timeScale = function(t) {
                        if (!arguments.length) return this._timeScale;
                        if (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming) {
                            var e = this._pauseTime,
                                i = e || 0 === e ? e : this._timeline.totalTime();
                            this._startTime = i - (i - this._startTime) * this._timeScale / t
                        }
                        return this._timeScale = t, this._uncache(!1)
                    }, f.reversed = function(t) {
                        return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
                    }, f.paused = function(t) {
                        if (!arguments.length) return this._paused;
                        var e, i, r = this._timeline;
                        return t != this._paused && r && (p || t || d.wake(), e = r.rawTime(), i = e - this._pauseTime, !t && r.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
                    };
                    var k = w("core.SimpleTimeline", function(t) {
                        D.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    f = k.prototype = new D, f.constructor = k, f.kill()._gc = !1, f._first = f._last = f._recent = null, f._sortChildren = !1, f.add = f.insert = function(t, e, i, r) {
                        var n, o;
                        if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), n = this._last, this._sortChildren)
                            for (o = t._startTime; n && n._startTime > o;) n = n._prev;
                        return n ? (t._next = n._next, n._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = n, this._recent = t, this._timeline && this._uncache(!0), this
                    }, f._remove = function(t, e) {
                        return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
                    }, f.render = function(t, e, i) {
                        var r, n = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = t; n;) r = n._next, (n._active || t >= n._startTime && !n._paused) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = r
                    }, f.rawTime = function() {
                        return p || d.wake(), this._totalTime
                    };
                    var N = w("TweenLite", function(t, e, i) {
                            if (D.call(this, e, i), this.render = N.prototype.render, null == t) throw "Cannot tween a null target.";
                            this.target = t = "string" != typeof t ? t : N.selector(t) || t;
                            var n, o, s, a = t.jquery || t.length && t !== r && t[0] && (t[0] === r || t[0].nodeType && t[0].style && !t.nodeType),
                                h = this.vars.overwrite;
                            if (this._overwrite = h = null == h ? K[N.defaultOverwrite] : "number" == typeof h ? h >> 0 : K[h], (a || t instanceof Array || t.push && y(t)) && "number" != typeof t[0])
                                for (this._targets = s = m(t), this._propLookup = [], this._siblings = [], n = 0; n < s.length; n++) o = s[n], o ? "string" != typeof o ? o.length && o !== r && o[0] && (o[0] === r || o[0].nodeType && o[0].style && !o.nodeType) ? (s.splice(n--, 1), this._targets = s = s.concat(m(o))) : (this._siblings[n] = et(o, this, !1), 1 === h && this._siblings[n].length > 1 && rt(o, this, null, 1, this._siblings[n])) : "string" == typeof(o = s[n--] = N.selector(o)) && s.splice(n + 1, 1) : s.splice(n--, 1);
                            else this._propLookup = {}, this._siblings = et(t, this, !1), 1 === h && this._siblings.length > 1 && rt(t, this, null, 1, this._siblings);
                            (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay)))
                        }, !0),
                        F = function(t) {
                            return t && t.length && t !== r && t[0] && (t[0] === r || t[0].nodeType && t[0].style && !t.nodeType)
                        },
                        B = function(t, e) {
                            var i, r = {};
                            for (i in t) Z[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!z[i] || z[i] && z[i]._autoCSS) || (r[i] = t[i], delete t[i]);
                            t.css = r
                        };
                    f = N.prototype = new D, f.constructor = N, f.kill()._gc = !1, f.ratio = 0, f._firstPT = f._targets = f._overwrittenProps = f._startAt = null, f._notifyPluginsOfEnabled = f._lazy = !1, N.version = "1.19.1", N.defaultEase = f._ease = new S(null, null, 1, 1), N.defaultOverwrite = "auto", N.ticker = d, N.autoSleep = 120, N.lagSmoothing = function(t, e) {
                        d.lagSmoothing(t, e)
                    }, N.selector = r.$ || r.jQuery || function(t) {
                        var e = r.$ || r.jQuery;
                        return e ? (N.selector = e, e(t)) : void 0 === h ? t : h.querySelectorAll ? h.querySelectorAll(t) : h.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
                    };
                    var j = [],
                        U = {},
                        X = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                        G = function(t) {
                            for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                        },
                        W = function(t, e, i, r) {
                            var n, o, s, a, h, u, l, c = [],
                                f = 0,
                                d = "",
                                p = 0;
                            for (c.start = t, c.end = e, t = c[0] = t + "", e = c[1] = e + "", i && (i(c), t = c[0], e = c[1]), c.length = 0, n = t.match(X) || [], o = e.match(X) || [], r && (r._next = null, r.blob = 1, c._firstPT = c._applyPT = r), h = o.length, a = 0; a < h; a++) l = o[a], u = e.substr(f, e.indexOf(l, f) - f), d += u || !a ? u : ",", f += u.length, p ? p = (p + 1) % 5 : "rgba(" === u.substr(-5) && (p = 1), l === n[a] || n.length <= a ? d += l : (d && (c.push(d), d = ""), s = parseFloat(n[a]), c.push(s), c._firstPT = {
                                _next: c._firstPT,
                                t: c,
                                p: c.length - 1,
                                s: s,
                                c: ("=" === l.charAt(1) ? parseInt(l.charAt(0) + "1", 10) * parseFloat(l.substr(2)) : parseFloat(l) - s) || 0,
                                f: 0,
                                m: p && p < 4 ? Math.round : 0
                            }), f += l.length;
                            return d += e.substr(f), d && c.push(d), c.setRatio = G, c
                        },
                        V = function(t, e, i, r, n, o, s, a, h) {
                            "function" == typeof r && (r = r(h || 0, t));
                            var u, l = typeof t[e],
                                c = "function" !== l ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                                f = "get" !== i ? i : c ? s ? t[c](s) : t[c]() : t[e],
                                d = "string" == typeof r && "=" === r.charAt(1),
                                p = {
                                    t: t,
                                    p: e,
                                    s: f,
                                    f: "function" === l,
                                    pg: 0,
                                    n: n || e,
                                    m: o ? "function" == typeof o ? o : Math.round : 0,
                                    pr: 0,
                                    c: d ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - f || 0
                                };
                            if (("number" != typeof f || "number" != typeof r && !d) && (s || isNaN(f) || !d && isNaN(r) || "boolean" == typeof f || "boolean" == typeof r ? (p.fp = s, u = W(f, d ? p.s + p.c : r, a || N.defaultStringFilter, p), p = {
                                    t: u,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 2,
                                    pg: 0,
                                    n: n || e,
                                    pr: 0,
                                    m: 0
                                }) : (p.s = parseFloat(f), d || (p.c = parseFloat(r) - p.s || 0))), p.c) return (p._next = this._firstPT) && (p._next._prev = p), this._firstPT = p, p
                        },
                        H = N._internals = {
                            isArray: y,
                            isSelector: F,
                            lazyTweens: j,
                            blobDif: W
                        },
                        z = N._plugins = {},
                        Y = H.tweenLookup = {},
                        q = 0,
                        Z = H.reservedProps = {
                            ease: 1,
                            delay: 1,
                            overwrite: 1,
                            onComplete: 1,
                            onCompleteParams: 1,
                            onCompleteScope: 1,
                            useFrames: 1,
                            runBackwards: 1,
                            startAt: 1,
                            onUpdate: 1,
                            onUpdateParams: 1,
                            onUpdateScope: 1,
                            onStart: 1,
                            onStartParams: 1,
                            onStartScope: 1,
                            onReverseComplete: 1,
                            onReverseCompleteParams: 1,
                            onReverseCompleteScope: 1,
                            onRepeat: 1,
                            onRepeatParams: 1,
                            onRepeatScope: 1,
                            easeParams: 1,
                            yoyo: 1,
                            immediateRender: 1,
                            repeat: 1,
                            repeatDelay: 1,
                            data: 1,
                            paused: 1,
                            reversed: 1,
                            autoCSS: 1,
                            lazy: 1,
                            onOverwrite: 1,
                            callbackScope: 1,
                            stringFilter: 1,
                            id: 1
                        },
                        K = {
                            none: 0,
                            all: 1,
                            auto: 2,
                            concurrent: 3,
                            allOnStart: 4,
                            preexisting: 5,
                            true: 1,
                            false: 0
                        },
                        J = D._rootFramesTimeline = new k,
                        Q = D._rootTimeline = new k,
                        $ = 30,
                        tt = H.lazyRender = function() {
                            var t, e = j.length;
                            for (U = {}; --e > -1;)(t = j[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                            j.length = 0
                        };
                    Q._startTime = d.time, J._startTime = d.frame, Q._active = J._active = !0, setTimeout(tt, 1), D._updateRoot = N.render = function() {
                        var t, e, i;
                        if (j.length && tt(), Q.render((d.time - Q._startTime) * Q._timeScale, !1, !1), J.render((d.frame - J._startTime) * J._timeScale, !1, !1), j.length && tt(), d.frame >= $) {
                            $ = d.frame + (parseInt(N.autoSleep, 10) || 120);
                            for (i in Y) {
                                for (e = Y[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                                0 === e.length && delete Y[i]
                            }
                            if ((!(i = Q._first) || i._paused) && N.autoSleep && !J._first && 1 === d._listeners.tick.length) {
                                for (; i && i._paused;) i = i._next;
                                i || d.sleep()
                            }
                        }
                    }, d.addEventListener("tick", D._updateRoot);
                    var et = function(t, e, i) {
                            var r, n, o = t._gsTweenID;
                            if (Y[o || (t._gsTweenID = o = "t" + q++)] || (Y[o] = {
                                    target: t,
                                    tweens: []
                                }), e && (r = Y[o].tweens, r[n = r.length] = e, i))
                                for (; --n > -1;) r[n] === e && r.splice(n, 1);
                            return Y[o].tweens
                        },
                        it = function(t, e, i, r) {
                            var n, o, s = t.vars.onOverwrite;
                            return s && (n = s(t, e, i, r)), s = N.onOverwrite, s && (o = s(t, e, i, r)), !1 !== n && !1 !== o
                        },
                        rt = function(t, e, i, r, n) {
                            var o, s, a, h;
                            if (1 === r || r >= 4) {
                                for (h = n.length, o = 0; o < h; o++)
                                    if ((a = n[o]) !== e) a._gc || a._kill(null, t, e) && (s = !0);
                                    else if (5 === r) break;
                                return s
                            }
                            var u, l = e._startTime + 1e-10,
                                c = [],
                                f = 0,
                                d = 0 === e._duration;
                            for (o = n.length; --o > -1;)(a = n[o]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (u = u || nt(e, 0, d), 0 === nt(a, u, d) && (c[f++] = a)) : a._startTime <= l && a._startTime + a.totalDuration() / a._timeScale > l && ((d || !a._initted) && l - a._startTime <= 2e-10 || (c[f++] = a)));
                            for (o = f; --o > -1;)
                                if (a = c[o], 2 === r && a._kill(i, t, e) && (s = !0), 2 !== r || !a._firstPT && a._initted) {
                                    if (2 !== r && !it(a, e)) continue;
                                    a._enabled(!1, !1) && (s = !0)
                                }
                            return s
                        },
                        nt = function(t, e, i) {
                            for (var r = t._timeline, n = r._timeScale, o = t._startTime; r._timeline;) {
                                if (o += r._startTime, n *= r._timeScale, r._paused) return -100;
                                r = r._timeline
                            }
                            return o /= n, o > e ? o - e : i && o === e || !t._initted && o - e < 2e-10 ? 1e-10 : (o += t.totalDuration() / t._timeScale / n) > e + 1e-10 ? 0 : o - e - 1e-10
                        };
                    f._init = function() {
                        var t, e, i, r, n, o, s = this.vars,
                            a = this._overwrittenProps,
                            h = this._duration,
                            u = !!s.immediateRender,
                            l = s.ease;
                        if (s.startAt) {
                            this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), n = {};
                            for (r in s.startAt) n[r] = s.startAt[r];
                            if (n.overwrite = !1, n.immediateRender = !0, n.lazy = u && !1 !== s.lazy, n.startAt = n.delay = null, this._startAt = N.to(this.target, 0, n), u)
                                if (this._time > 0) this._startAt = null;
                                else if (0 !== h) return
                        } else if (s.runBackwards && 0 !== h)
                            if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                            else {
                                0 !== this._time && (u = !1), i = {};
                                for (r in s) Z[r] && "autoCSS" !== r || (i[r] = s[r]);
                                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = u && !1 !== s.lazy, i.immediateRender = u, this._startAt = N.to(this.target, 0, i), u) {
                                    if (0 === this._time) return
                                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                            }
                        if (this._ease = l = l ? l instanceof S ? l : "function" == typeof l ? new S(l, s.easeParams) : P[l] || N.defaultEase : N.defaultEase, s.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                            for (o = this._targets.length, t = 0; t < o; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                        else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                        if (e && N._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                            for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                        this._onUpdate = s.onUpdate, this._initted = !0
                    }, f._initProps = function(t, e, i, n, o) {
                        var s, a, h, u, l, c;
                        if (null == t) return !1;
                        U[t._gsTweenID] && tt(), this.vars.css || t.style && t !== r && t.nodeType && z.css && !1 !== this.vars.autoCSS && B(this.vars, t);
                        for (s in this.vars)
                            if (c = this.vars[s], Z[s]) c && (c instanceof Array || c.push && y(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[s] = c = this._swapSelfInParams(c, this));
                            else if (z[s] && (u = new z[s])._onInitTween(t, this.vars[s], this, o)) {
                            for (this._firstPT = l = {
                                    _next: this._firstPT,
                                    t: u,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 1,
                                    n: s,
                                    pg: 1,
                                    pr: u._priority,
                                    m: 0
                                }, a = u._overwriteProps.length; --a > -1;) e[u._overwriteProps[a]] = this._firstPT;
                            (u._priority || u._onInitAllProps) && (h = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0), l._next && (l._next._prev = l)
                        } else e[s] = V.call(this, t, s, "get", c, s, 0, null, this.vars.stringFilter, o);
                        return n && this._kill(n, t) ? this._initProps(t, e, i, n, o) : this._overwrite > 1 && this._firstPT && i.length > 1 && rt(t, this, e, this._overwrite, i) ? (this._kill(e, t), this._initProps(t, e, i, n, o)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (U[t._gsTweenID] = !0), h)
                    }, f.render = function(t, e, i) {
                        var r, n, o, s, a = this._time,
                            h = this._duration,
                            u = this._rawPrevTime;
                        if (t >= h - 1e-7 && t >= 0) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, n = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (u < 0 || t <= 0 && t >= -1e-7 || 1e-10 === u && "isPause" !== this.data) && u !== t && (i = !0, u > 1e-10 && (n = "onReverseComplete")), this._rawPrevTime = s = !e || t || u === t ? t : 1e-10);
                        else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === h && u > 0) && (n = "onReverseComplete", r = this._reversed), t < 0 && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (u >= 0 && (1e-10 !== u || "isPause" !== this.data) && (i = !0), this._rawPrevTime = s = !e || t || u === t ? t : 1e-10)), this._initted || (i = !0);
                        else if (this._totalTime = this._time = t, this._easeType) {
                            var l = t / h,
                                c = this._easeType,
                                f = this._easePower;
                            (1 === c || 3 === c && l >= .5) && (l = 1 - l), 3 === c && (l *= 2), 1 === f ? l *= l : 2 === f ? l *= l * l : 3 === f ? l *= l * l * l : 4 === f && (l *= l * l * l * l), this.ratio = 1 === c ? 1 - l : 2 === c ? l : t / h < .5 ? l / 2 : 1 - l / 2
                        } else this.ratio = this._ease.getRatio(t / h);
                        if (this._time !== a || i) {
                            if (!this._initted) {
                                if (this._init(), !this._initted || this._gc) return;
                                if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = u, j.push(this), void(this._lazy = [t, e]);
                                this._time && !r ? this.ratio = this._ease.getRatio(this._time / h) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : n || (n = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== h || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                            this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || (this._time !== a || r || i) && this._callback("onUpdate")), n && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === h && 1e-10 === this._rawPrevTime && 1e-10 !== s && (this._rawPrevTime = 0)))
                        }
                    }, f._kill = function(t, e, i) {
                        if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                        e = "string" != typeof e ? e || this._targets || this.target : N.selector(e) || e;
                        var r, n, o, s, a, h, u, l, c, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                        if ((y(e) || F(e)) && "number" != typeof e[0])
                            for (r = e.length; --r > -1;) this._kill(t, e[r], i) && (h = !0);
                        else {
                            if (this._targets) {
                                for (r = this._targets.length; --r > -1;)
                                    if (e === this._targets[r]) {
                                        a = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], n = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all";
                                        break
                                    }
                            } else {
                                if (e !== this.target) return !1;
                                a = this._propLookup, n = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                            }
                            if (a) {
                                if (u = t || a, l = t !== n && "all" !== n && t !== a && ("object" != typeof t || !t._tempKill), i && (N.onOverwrite || this.vars.onOverwrite)) {
                                    for (o in u) a[o] && (c || (c = []), c.push(o));
                                    if ((c || !t) && !it(this, i, e, c)) return !1
                                }
                                for (o in u)(s = a[o]) && (f && (s.f ? s.t[s.p](s.s) : s.t[s.p] = s.s, h = !0), s.pg && s.t._kill(u) && (h = !0), s.pg && 0 !== s.t._overwriteProps.length || (s._prev ? s._prev._next = s._next : s === this._firstPT && (this._firstPT = s._next), s._next && (s._next._prev = s._prev), s._next = s._prev = null), delete a[o]), l && (n[o] = 1);
                                !this._firstPT && this._initted && this._enabled(!1, !1)
                            }
                        }
                        return h
                    }, f.invalidate = function() {
                        return this._notifyPluginsOfEnabled && N._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], D.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this
                    }, f._enabled = function(t, e) {
                        if (p || d.wake(), t && this._gc) {
                            var i, r = this._targets;
                            if (r)
                                for (i = r.length; --i > -1;) this._siblings[i] = et(r[i], this, !0);
                            else this._siblings = et(this.target, this, !0)
                        }
                        return D.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && N._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                    }, N.to = function(t, e, i) {
                        return new N(t, e, i)
                    }, N.from = function(t, e, i) {
                        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new N(t, e, i)
                    }, N.fromTo = function(t, e, i, r) {
                        return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new N(t, e, r)
                    }, N.delayedCall = function(t, e, i, r, n) {
                        return new N(e, 0, {
                            delay: t,
                            onComplete: e,
                            onCompleteParams: i,
                            callbackScope: r,
                            onReverseComplete: e,
                            onReverseCompleteParams: i,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: n,
                            overwrite: 0
                        })
                    }, N.set = function(t, e) {
                        return new N(t, 0, e)
                    }, N.getTweensOf = function(t, e) {
                        if (null == t) return [];
                        t = "string" != typeof t ? t : N.selector(t) || t;
                        var i, r, n, o;
                        if ((y(t) || F(t)) && "number" != typeof t[0]) {
                            for (i = t.length, r = []; --i > -1;) r = r.concat(N.getTweensOf(t[i], e));
                            for (i = r.length; --i > -1;)
                                for (o = r[i], n = i; --n > -1;) o === r[n] && r.splice(i, 1)
                        } else
                            for (r = et(t).concat(), i = r.length; --i > -1;)(r[i]._gc || e && !r[i].isActive()) && r.splice(i, 1);
                        return r
                    }, N.killTweensOf = N.killDelayedCallsTo = function(t, e, i) {
                        "object" == typeof e && (i = e, e = !1);
                        for (var r = N.getTweensOf(t, e), n = r.length; --n > -1;) r[n]._kill(i, t)
                    };
                    var ot = w("plugins.TweenPlugin", function(t, e) {
                        this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = ot.prototype
                    }, !0);
                    if (f = ot.prototype, ot.version = "1.19.0", ot.API = 2, f._firstPT = null, f._addTween = V, f.setRatio = G, f._kill = function(t) {
                            var e, i = this._overwriteProps,
                                r = this._firstPT;
                            if (null != t[this._propName]) this._overwriteProps = [];
                            else
                                for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                            for (; r;) null != t[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
                            return !1
                        }, f._mod = f._roundProps = function(t) {
                            for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                        }, N._onPluginEvent = function(t, e) {
                            var i, r, n, o, s, a = e._firstPT;
                            if ("_onInitAllProps" === t) {
                                for (; a;) {
                                    for (s = a._next, r = n; r && r.pr > a.pr;) r = r._next;
                                    (a._prev = r ? r._prev : o) ? a._prev._next = a: n = a, (a._next = r) ? r._prev = a : o = a, a = s
                                }
                                a = e._firstPT = n
                            }
                            for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                            return i
                        }, ot.activate = function(t) {
                            for (var e = t.length; --e > -1;) t[e].API === ot.API && (z[(new t[e])._propName] = t[e]);
                            return !0
                        }, T.plugin = function(t) {
                            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                            var e, i = t.propName,
                                r = t.priority || 0,
                                n = t.overwriteProps,
                                o = {
                                    init: "_onInitTween",
                                    set: "setRatio",
                                    kill: "_kill",
                                    round: "_mod",
                                    mod: "_mod",
                                    initAll: "_onInitAllProps"
                                },
                                s = w("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                                    ot.call(this, i, r), this._overwriteProps = n || []
                                }, !0 === t.global),
                                a = s.prototype = new ot(i);
                            a.constructor = s, s.API = t.API;
                            for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
                            return s.version = t.version, ot.activate([s]), s
                        }, l = r._gsQueue) {
                        for (c = 0; c < l.length; c++) l[c]();
                        for (f in x) x[f].func || r.console.log("GSAP encountered missing dependency: " + f)
                    }
                    p = !1
                }
            }(void 0 !== t && t.exports && void 0 !== r ? r : this || window)
    }).call(e, i(8))
}, function(t, e, i) {
    (function(e) {
        ! function(i) {
            function r() {}

            function n(t, e) {
                return function() {
                    t.apply(e, arguments)
                }
            }

            function o(t) {
                if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof t) throw new TypeError("not a function");
                this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], c(t, this)
            }

            function s(t, e) {
                for (; 3 === t._state;) t = t._value;
                if (0 === t._state) return void t._deferreds.push(e);
                t._handled = !0, o._immediateFn(function() {
                    var i = 1 === t._state ? e.onFulfilled : e.onRejected;
                    if (null === i) return void(1 === t._state ? a : h)(e.promise, t._value);
                    var r;
                    try {
                        r = i(t._value)
                    } catch (t) {
                        return void h(e.promise, t)
                    }
                    a(e.promise, r)
                })
            }

            function a(t, e) {
                try {
                    if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var i = e.then;
                        if (e instanceof o) return t._state = 3, t._value = e, void u(t);
                        if ("function" == typeof i) return void c(n(i, e), t)
                    }
                    t._state = 1, t._value = e, u(t)
                } catch (e) {
                    h(t, e)
                }
            }

            function h(t, e) {
                t._state = 2, t._value = e, u(t)
            }

            function u(t) {
                2 === t._state && 0 === t._deferreds.length && o._immediateFn(function() {
                    t._handled || o._unhandledRejectionFn(t._value)
                });
                for (var e = 0, i = t._deferreds.length; e < i; e++) s(t, t._deferreds[e]);
                t._deferreds = null
            }

            function l(t, e, i) {
                this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = i
            }

            function c(t, e) {
                var i = !1;
                try {
                    t(function(t) {
                        i || (i = !0, a(e, t))
                    }, function(t) {
                        i || (i = !0, h(e, t))
                    })
                } catch (t) {
                    if (i) return;
                    i = !0, h(e, t)
                }
            }
            var f = setTimeout;
            o.prototype.catch = function(t) {
                return this.then(null, t)
            }, o.prototype.then = function(t, e) {
                var i = new this.constructor(r);
                return s(this, new l(t, e, i)), i
            }, o.all = function(t) {
                return new o(function(e, i) {
                    function r(t, s) {
                        try {
                            if (s && ("object" == typeof s || "function" == typeof s)) {
                                var a = s.then;
                                if ("function" == typeof a) return void a.call(s, function(e) {
                                    r(t, e)
                                }, i)
                            }
                            n[t] = s, 0 == --o && e(n)
                        } catch (t) {
                            i(t)
                        }
                    }
                    if (!t || void 0 === t.length) throw new TypeError("Promise.all accepts an array");
                    var n = Array.prototype.slice.call(t);
                    if (0 === n.length) return e([]);
                    for (var o = n.length, s = 0; s < n.length; s++) r(s, n[s])
                })
            }, o.resolve = function(t) {
                return t && "object" == typeof t && t.constructor === o ? t : new o(function(e) {
                    e(t)
                })
            }, o.reject = function(t) {
                return new o(function(e, i) {
                    i(t)
                })
            }, o.race = function(t) {
                return new o(function(e, i) {
                    for (var r = 0, n = t.length; r < n; r++) t[r].then(e, i)
                })
            }, o._immediateFn = "function" == typeof e && function(t) {
                e(t)
            } || function(t) {
                f(t, 0)
            }, o._unhandledRejectionFn = function(t) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
            }, o._setImmediateFn = function(t) {
                o._immediateFn = t
            }, o._setUnhandledRejectionFn = function(t) {
                o._unhandledRejectionFn = t
            }, void 0 !== t && t.exports ? t.exports = o : i.Promise || (i.Promise = o)
        }(this)
    }).call(e, i(221).setImmediate)
}, function(t, e, i) {
    (function(t, i) {
        ! function() {
            function r(t, e) {
                var i = t.indexOf(e); - 1 != i && t.splice(i, 1)
            }
            var n = {},
                o = n.util = {},
                s = Array.prototype.concat,
                a = Array.prototype.slice;
            o.bind = function(t, e) {
                var i = a.call(arguments, 2);
                return function() {
                    t.apply(e, s.call(i, a.call(arguments)))
                }
            }, o.extend = function(t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
            };
            var h = n.SpringSystem = function(t) {
                this._springRegistry = {}, this._activeSprings = [], this.listeners = [], this._idleSpringIndices = [], this.looper = t || new f, this.looper.springSystem = this
            };
            o.extend(h.prototype, {
                _springRegistry: null,
                _isIdle: !0,
                _lastTimeMillis: -1,
                _activeSprings: null,
                listeners: null,
                _idleSpringIndices: null,
                setLooper: function(t) {
                    this.looper = t, t.springSystem = this
                },
                createSpring: function(t, e) {
                    var i;
                    return i = void 0 === t || void 0 === e ? c.DEFAULT_ORIGAMI_SPRING_CONFIG : c.fromOrigamiTensionAndFriction(t, e), this.createSpringWithConfig(i)
                },
                createSpringWithBouncinessAndSpeed: function(t, e) {
                    var i;
                    return i = void 0 === t || void 0 === e ? c.DEFAULT_ORIGAMI_SPRING_CONFIG : c.fromBouncinessAndSpeed(t, e), this.createSpringWithConfig(i)
                },
                createSpringWithConfig: function(t) {
                    var e = new u(this);
                    return this.registerSpring(e), e.setSpringConfig(t), e
                },
                getIsIdle: function() {
                    return this._isIdle
                },
                getSpringById: function(t) {
                    return this._springRegistry[t]
                },
                getAllSprings: function() {
                    var t = [];
                    for (var e in this._springRegistry) this._springRegistry.hasOwnProperty(e) && t.push(this._springRegistry[e]);
                    return t
                },
                registerSpring: function(t) {
                    this._springRegistry[t.getId()] = t
                },
                deregisterSpring: function(t) {
                    r(this._activeSprings, t), delete this._springRegistry[t.getId()]
                },
                advance: function(t, e) {
                    for (; this._idleSpringIndices.length > 0;) this._idleSpringIndices.pop();
                    for (var i = 0, r = this._activeSprings.length; i < r; i++) {
                        var n = this._activeSprings[i];
                        n.systemShouldAdvance() ? n.advance(t / 1e3, e / 1e3) : this._idleSpringIndices.push(this._activeSprings.indexOf(n))
                    }
                    for (; this._idleSpringIndices.length > 0;) {
                        var o = this._idleSpringIndices.pop();
                        o >= 0 && this._activeSprings.splice(o, 1)
                    }
                },
                loop: function(t) {
                    var e; - 1 === this._lastTimeMillis && (this._lastTimeMillis = t - 1);
                    var i = t - this._lastTimeMillis;
                    this._lastTimeMillis = t;
                    var r = 0,
                        n = this.listeners.length;
                    for (r = 0; r < n; r++) e = this.listeners[r], e.onBeforeIntegrate && e.onBeforeIntegrate(this);
                    for (this.advance(t, i), 0 === this._activeSprings.length && (this._isIdle = !0, this._lastTimeMillis = -1), r = 0; r < n; r++) e = this.listeners[r], e.onAfterIntegrate && e.onAfterIntegrate(this);
                    this._isIdle || this.looper.run()
                },
                activateSpring: function(t) {
                    var e = this._springRegistry[t]; - 1 == this._activeSprings.indexOf(e) && this._activeSprings.push(e), this.getIsIdle() && (this._isIdle = !1, this.looper.run())
                },
                addListener: function(t) {
                    this.listeners.push(t)
                },
                removeListener: function(t) {
                    r(this.listeners, t)
                },
                removeAllListeners: function() {
                    this.listeners = []
                }
            });
            var u = n.Spring = function t(e) {
                this._id = "s" + t._ID++, this._springSystem = e, this.listeners = [], this._currentState = new l, this._previousState = new l, this._tempState = new l
            };
            o.extend(u, {
                _ID: 0,
                MAX_DELTA_TIME_SEC: .064,
                SOLVER_TIMESTEP_SEC: .001
            }), o.extend(u.prototype, {
                _id: 0,
                _springConfig: null,
                _overshootClampingEnabled: !1,
                _currentState: null,
                _previousState: null,
                _tempState: null,
                _startValue: 0,
                _endValue: 0,
                _wasAtRest: !0,
                _restSpeedThreshold: .001,
                _displacementFromRestThreshold: .001,
                listeners: null,
                _timeAccumulator: 0,
                _springSystem: null,
                destroy: function() {
                    this.listeners = [], this._springSystem.deregisterSpring(this)
                },
                getId: function() {
                    return this._id
                },
                setSpringConfig: function(t) {
                    return this._springConfig = t, this
                },
                getSpringConfig: function() {
                    return this._springConfig
                },
                setCurrentValue: function(t, e) {
                    return this._startValue = t, this._currentState.position = t, e || this.setAtRest(), this.notifyPositionUpdated(!1, !1), this
                },
                getStartValue: function() {
                    return this._startValue
                },
                getCurrentValue: function() {
                    return this._currentState.position
                },
                getCurrentDisplacementDistance: function() {
                    return this.getDisplacementDistanceForState(this._currentState)
                },
                getDisplacementDistanceForState: function(t) {
                    return Math.abs(this._endValue - t.position)
                },
                setEndValue: function(t) {
                    if (this._endValue == t && this.isAtRest()) return this;
                    this._startValue = this.getCurrentValue(), this._endValue = t, this._springSystem.activateSpring(this.getId());
                    for (var e = 0, i = this.listeners.length; e < i; e++) {
                        var r = this.listeners[e],
                            n = r.onSpringEndStateChange;
                        n && n(this)
                    }
                    return this
                },
                getEndValue: function() {
                    return this._endValue
                },
                setVelocity: function(t) {
                    return t === this._currentState.velocity ? this : (this._currentState.velocity = t, this._springSystem.activateSpring(this.getId()), this)
                },
                getVelocity: function() {
                    return this._currentState.velocity
                },
                setRestSpeedThreshold: function(t) {
                    return this._restSpeedThreshold = t, this
                },
                getRestSpeedThreshold: function() {
                    return this._restSpeedThreshold
                },
                setRestDisplacementThreshold: function(t) {
                    this._displacementFromRestThreshold = t
                },
                getRestDisplacementThreshold: function() {
                    return this._displacementFromRestThreshold
                },
                setOvershootClampingEnabled: function(t) {
                    return this._overshootClampingEnabled = t, this
                },
                isOvershootClampingEnabled: function() {
                    return this._overshootClampingEnabled
                },
                isOvershooting: function() {
                    var t = this._startValue,
                        e = this._endValue;
                    return this._springConfig.tension > 0 && (t < e && this.getCurrentValue() > e || t > e && this.getCurrentValue() < e)
                },
                advance: function(t, e) {
                    var i = this.isAtRest();
                    if (!i || !this._wasAtRest) {
                        var r = e;
                        e > u.MAX_DELTA_TIME_SEC && (r = u.MAX_DELTA_TIME_SEC), this._timeAccumulator += r;
                        for (var n, o, s, a, h, l, c, f, d, p, _ = this._springConfig.tension, v = this._springConfig.friction, m = this._currentState.position, g = this._currentState.velocity, y = this._tempState.position, x = this._tempState.velocity; this._timeAccumulator >= u.SOLVER_TIMESTEP_SEC;) this._timeAccumulator -= u.SOLVER_TIMESTEP_SEC, this._timeAccumulator < u.SOLVER_TIMESTEP_SEC && (this._previousState.position = m, this._previousState.velocity = g), n = g, o = _ * (this._endValue - y) - v * g, y = m + n * u.SOLVER_TIMESTEP_SEC * .5, x = g + o * u.SOLVER_TIMESTEP_SEC * .5, s = x, a = _ * (this._endValue - y) - v * x, y = m + s * u.SOLVER_TIMESTEP_SEC * .5, x = g + a * u.SOLVER_TIMESTEP_SEC * .5, h = x, l = _ * (this._endValue - y) - v * x, y = m + h * u.SOLVER_TIMESTEP_SEC, x = g + l * u.SOLVER_TIMESTEP_SEC, c = x, f = _ * (this._endValue - y) - v * x, d = 1 / 6 * (n + 2 * (s + h) + c), p = 1 / 6 * (o + 2 * (a + l) + f), m += d * u.SOLVER_TIMESTEP_SEC, g += p * u.SOLVER_TIMESTEP_SEC;
                        this._tempState.position = y, this._tempState.velocity = x, this._currentState.position = m, this._currentState.velocity = g, this._timeAccumulator > 0 && this._interpolate(this._timeAccumulator / u.SOLVER_TIMESTEP_SEC), (this.isAtRest() || this._overshootClampingEnabled && this.isOvershooting()) && (this._springConfig.tension > 0 ? (this._startValue = this._endValue, this._currentState.position = this._endValue) : (this._endValue = this._currentState.position, this._startValue = this._endValue), this.setVelocity(0), i = !0);
                        var b = !1;
                        this._wasAtRest && (this._wasAtRest = !1, b = !0);
                        var T = !1;
                        i && (this._wasAtRest = !0, T = !0), this.notifyPositionUpdated(b, T)
                    }
                },
                notifyPositionUpdated: function(t, e) {
                    for (var i = 0, r = this.listeners.length; i < r; i++) {
                        var n = this.listeners[i];
                        t && n.onSpringActivate && n.onSpringActivate(this), n.onSpringUpdate && n.onSpringUpdate(this), e && n.onSpringAtRest && n.onSpringAtRest(this)
                    }
                },
                systemShouldAdvance: function() {
                    return !this.isAtRest() || !this.wasAtRest()
                },
                wasAtRest: function() {
                    return this._wasAtRest
                },
                isAtRest: function() {
                    return Math.abs(this._currentState.velocity) < this._restSpeedThreshold && (this.getDisplacementDistanceForState(this._currentState) <= this._displacementFromRestThreshold || 0 === this._springConfig.tension)
                },
                setAtRest: function() {
                    return this._endValue = this._currentState.position, this._tempState.position = this._currentState.position, this._currentState.velocity = 0, this
                },
                _interpolate: function(t) {
                    this._currentState.position = this._currentState.position * t + this._previousState.position * (1 - t), this._currentState.velocity = this._currentState.velocity * t + this._previousState.velocity * (1 - t)
                },
                getListeners: function() {
                    return this.listeners
                },
                addListener: function(t) {
                    return this.listeners.push(t), this
                },
                removeListener: function(t) {
                    return r(this.listeners, t), this
                },
                removeAllListeners: function() {
                    return this.listeners = [], this
                },
                currentValueIsApproximately: function(t) {
                    return Math.abs(this.getCurrentValue() - t) <= this.getRestDisplacementThreshold()
                }
            });
            var l = function() {};
            o.extend(l.prototype, {
                position: 0,
                velocity: 0
            });
            var c = n.SpringConfig = function(t, e) {
                    this.tension = t, this.friction = e
                },
                f = n.AnimationLooper = function() {
                    this.springSystem = null;
                    var t = this,
                        e = function() {
                            t.springSystem.loop(Date.now())
                        };
                    this.run = function() {
                        o.onFrame(e)
                    }
                };
            n.SimulationLooper = function(t) {
                this.springSystem = null;
                var e = 0,
                    i = !1;
                t = t || 16.667, this.run = function() {
                    if (!i) {
                        for (i = !0; !this.springSystem.getIsIdle();) this.springSystem.loop(e += t);
                        i = !1
                    }
                }
            }, n.SteppingSimulationLooper = function(t) {
                this.springSystem = null;
                var e = 0;
                this.run = function() {}, this.step = function(t) {
                    this.springSystem.loop(e += t)
                }
            };
            var d = n.OrigamiValueConverter = {
                    tensionFromOrigamiValue: function(t) {
                        return 3.62 * (t - 30) + 194
                    },
                    origamiValueFromTension: function(t) {
                        return (t - 194) / 3.62 + 30
                    },
                    frictionFromOrigamiValue: function(t) {
                        return 3 * (t - 8) + 25
                    },
                    origamiFromFriction: function(t) {
                        return (t - 25) / 3 + 8
                    }
                },
                p = n.BouncyConversion = function(t, e) {
                    this.bounciness = t, this.speed = e;
                    var i = this.normalize(t / 1.7, 0, 20);
                    i = this.projectNormal(i, 0, .8);
                    var r = this.normalize(e / 1.7, 0, 20);
                    this.bouncyTension = this.projectNormal(r, .5, 200), this.bouncyFriction = this.quadraticOutInterpolation(i, this.b3Nobounce(this.bouncyTension), .01)
                };
            o.extend(p.prototype, {
                normalize: function(t, e, i) {
                    return (t - e) / (i - e)
                },
                projectNormal: function(t, e, i) {
                    return e + t * (i - e)
                },
                linearInterpolation: function(t, e, i) {
                    return t * i + (1 - t) * e
                },
                quadraticOutInterpolation: function(t, e, i) {
                    return this.linearInterpolation(2 * t - t * t, e, i)
                },
                b3Friction1: function(t) {
                    return 7e-4 * Math.pow(t, 3) - .031 * Math.pow(t, 2) + .64 * t + 1.28
                },
                b3Friction2: function(t) {
                    return 44e-6 * Math.pow(t, 3) - .006 * Math.pow(t, 2) + .36 * t + 2
                },
                b3Friction3: function(t) {
                    return 4.5e-7 * Math.pow(t, 3) - 332e-6 * Math.pow(t, 2) + .1078 * t + 5.84
                },
                b3Nobounce: function(t) {
                    return t <= 18 ? this.b3Friction1(t) : t > 18 && t <= 44 ? this.b3Friction2(t) : this.b3Friction3(t)
                }
            }), o.extend(c, {
                fromOrigamiTensionAndFriction: function(t, e) {
                    return new c(d.tensionFromOrigamiValue(t), d.frictionFromOrigamiValue(e))
                },
                fromBouncinessAndSpeed: function(t, e) {
                    var i = new n.BouncyConversion(t, e);
                    return this.fromOrigamiTensionAndFriction(i.bouncyTension, i.bouncyFriction)
                },
                coastingConfigWithOrigamiFriction: function(t) {
                    return new c(0, d.frictionFromOrigamiValue(t))
                }
            }), c.DEFAULT_ORIGAMI_SPRING_CONFIG = c.fromOrigamiTensionAndFriction(40, 7), o.extend(c.prototype, {
                friction: 0,
                tension: 0
            });
            var _ = {};
            o.hexToRGB = function(t) {
                if (_[t]) return _[t];
                t = t.replace("#", ""), 3 === t.length && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]);
                var e = t.match(/.{2}/g),
                    i = {
                        r: parseInt(e[0], 16),
                        g: parseInt(e[1], 16),
                        b: parseInt(e[2], 16)
                    };
                return _[t] = i, i
            }, o.rgbToHex = function(t, e, i) {
                return t = t.toString(16), e = e.toString(16), i = i.toString(16), t = t.length < 2 ? "0" + t : t, e = e.length < 2 ? "0" + e : e, i = i.length < 2 ? "0" + i : i, "#" + t + e + i
            };
            var v = n.MathUtil = {
                mapValueInRange: function(t, e, i, r, n) {
                    return r + (t - e) / (i - e) * (n - r)
                },
                interpolateColor: function(t, e, i, r, n, s) {
                    r = void 0 === r ? 0 : r, n = void 0 === n ? 1 : n, e = o.hexToRGB(e), i = o.hexToRGB(i);
                    var a = Math.floor(o.mapValueInRange(t, r, n, e.r, i.r)),
                        h = Math.floor(o.mapValueInRange(t, r, n, e.g, i.g)),
                        u = Math.floor(o.mapValueInRange(t, r, n, e.b, i.b));
                    return s ? "rgb(" + a + "," + h + "," + u + ")" : o.rgbToHex(a, h, u)
                },
                degreesToRadians: function(t) {
                    return t * Math.PI / 180
                },
                radiansToDegrees: function(t) {
                    return 180 * t / Math.PI
                }
            };
            o.extend(o, v);
            var m;
            "undefined" != typeof window && (m = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || function(t) {
                window.setTimeout(t, 1e3 / 60)
            }), m || void 0 === t || "node" !== t.title || (m = i), o.onFrame = function(t) {
                return m(t)
            }, o.extend(e, n)
        }()
    }).call(e, i(46), i(221).setImmediate)
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {
    "use strict";

    function r(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e.default = t, e
    }

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
    var o = i(225),
        s = n(o);
    i(224);
    var a = i(107),
        h = (r(a), i(223)),
        u = (r(h), i(226)),
        l = n(u);
    String.prototype.startsWith = function(t, e) {
        return e = e || 0, this.substr(e, t.length) === t
    }, String.prototype.endsWith = function(t) {
        return -1 !== this.indexOf(t, this.length - t.length)
    }, "remove" in Element.prototype || (Element.prototype.remove = function() {
        this.parentNode && this.parentNode.removeChild(this)
    }), window.Promise || (window.Promise = s.default), window.rebound = l.default
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(t, e, i) {
    (function(t, e) {
        ! function(t, i) {
            "use strict";

            function r(t) {
                "function" != typeof t && (t = new Function("" + t));
                for (var e = new Array(arguments.length - 1), i = 0; i < e.length; i++) e[i] = arguments[i + 1];
                var r = {
                    callback: t,
                    args: e
                };
                return u[h] = r, a(h), h++
            }

            function n(t) {
                delete u[t]
            }

            function o(t) {
                var e = t.callback,
                    r = t.args;
                switch (r.length) {
                    case 0:
                        e();
                        break;
                    case 1:
                        e(r[0]);
                        break;
                    case 2:
                        e(r[0], r[1]);
                        break;
                    case 3:
                        e(r[0], r[1], r[2]);
                        break;
                    default:
                        e.apply(i, r)
                }
            }

            function s(t) {
                if (l) setTimeout(s, 0, t);
                else {
                    var e = u[t];
                    if (e) {
                        l = !0;
                        try {
                            o(e)
                        } finally {
                            n(t), l = !1
                        }
                    }
                }
            }
            if (!t.setImmediate) {
                var a, h = 1,
                    u = {},
                    l = !1,
                    c = t.document,
                    f = Object.getPrototypeOf && Object.getPrototypeOf(t);
                f = f && f.setTimeout ? f : t, "[object process]" === {}.toString.call(t.process) ? function() {
                    a = function(t) {
                        e.nextTick(function() {
                            s(t)
                        })
                    }
                }() : function() {
                    if (t.postMessage && !t.importScripts) {
                        var e = !0,
                            i = t.onmessage;
                        return t.onmessage = function() {
                            e = !1
                        }, t.postMessage("", "*"), t.onmessage = i, e
                    }
                }() ? function() {
                    var e = "setImmediate$" + Math.random() + "$",
                        i = function(i) {
                            i.source === t && "string" == typeof i.data && 0 === i.data.indexOf(e) && s(+i.data.slice(e.length))
                        };
                    t.addEventListener ? t.addEventListener("message", i, !1) : t.attachEvent("onmessage", i), a = function(i) {
                        t.postMessage(e + i, "*")
                    }
                }() : t.MessageChannel ? function() {
                    var t = new MessageChannel;
                    t.port1.onmessage = function(t) {
                        s(t.data)
                    }, a = function(e) {
                        t.port2.postMessage(e)
                    }
                }() : c && "onreadystatechange" in c.createElement("script") ? function() {
                    var t = c.documentElement;
                    a = function(e) {
                        var i = c.createElement("script");
                        i.onreadystatechange = function() {
                            s(e), i.onreadystatechange = null, t.removeChild(i), i = null
                        }, t.appendChild(i)
                    }
                }() : function() {
                    a = function(t) {
                        setTimeout(s, 0, t)
                    }
                }(), f.setImmediate = r, f.clearImmediate = n
            }
        }("undefined" == typeof self ? void 0 === t ? this : t : self)
    }).call(e, i(8), i(46))
}, , function(t, e) {
    (function(e) {
        t.exports = e
    }).call(e, {})
}]);