/*! button 2020-12-12 */ ! function() {
    return function e(t, n, r) {
        function o(s, a) {
            if (!n[s]) {
                if (!t[s]) {
                    var c = "function" == typeof require && require;
                    if (!a && c) return c(s, !0);
                    if (i) return i(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var l = n[s] = {
                    exports: {}
                };
                t[s][0].call(l.exports, function(e) {
                    return o(t[s][1][e] || e)
                }, l, l.exports, e, t, n, r)
            }
            return n[s].exports
        }
        for (var i = "function" == typeof require && require, s = 0; s < r.length; s++) o(r[s]);
        return o
    }
}()({
    1: [function(e, t, n) {
        "use strict";
        ! function() {
            if (-1 !== location.hostname.indexOf("glitch.me") || -1 !== location.hostname.indexOf("glitch.com")) {
                (0, e("es6-promise").polyfill)();
                var t = e("axios"),
                    n = location.hostname.split(".")[0],
                    r = document.createElement("link");
                r.rel = "stylesheet", r.href = "".concat("//button.glitch.me", "/css/button.css"), document.head.appendChild(r);
                var o = document.getElementsByTagName("script");
                [].forEach.call(o, function(e) {
                    if (e.getAttribute("src") && -1 !== e.getAttribute("src").indexOf("//button.glitch.me") && e.dataset.style) {
                        var t = document.createElement("link");
                        t.rel = "stylesheet", t.href = "".concat("//button.glitch.me", "/css/").concat(e.dataset.style, ".css"), document.head.appendChild(t)
                    }
                });
                var i = function(e, t) {
                        for (;
                            (e = e.parentElement) && !(e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t););
                        return e
                    },
                    s = function() {
                        var e = document.getElementsByClassName("glitchOpenWindowElement");
                        [].forEach.call(e, function(e) {
                            e.style.display = "none", c(e)
                        })
                    },
                    a = function(e) {
                        var t = i(e.target, ".glitchButton").getElementsByClassName("glitchOpenWindowElement")[0];
                        t.style.display = "none" === t.style.display ? "block" : "none", c(t)
                    },
                    c = function(e) {
                        var t = e.getElementsByClassName("projectInfo")[0],
                            n = e.getElementsByClassName("projectActions")[0],
                            r = e.getElementsByClassName("projectEmbed")[0];
                        t.style.display = "block", n.style.display = "block", r.style.display = "none"
                    };
                window.onkeyup = function(e) {
                    var t = i(document.activeElement, ".glitchButton");
                    9 !== e.keyCode || t || s()
                }, window.onclick = function(e) {
                    i(e.target, ".glitchButton") || s()
                }, t.get("https://api.glitch.com/projects/" + n).then(function(e) {
                    var t = e.data;
                    if (!t) return null;
                    var n = t.domain,
                        r = t.description,
                        o = t.users.map(function(e) {
                            return e.login ? '<li><a href="'.concat("//glitch.com/@").concat(e.login, "?utm_source=button&utm_medium=button&utm_campaign=glitchButton&utm_contnet=").concat(n, '"><img width="25px" src="').concat(e.avatarThumbnailUrl, '" alt="avatar of ').concat(e.login, '" /> <span class="name">').concat(e.login, "</span></a></li>") : null
                        }),
                        i = '<a class="buttonLinks remix" href="https://glitch.com/edit?utm_source=button&utm_medium=button&utm_campaign=glitchButton&utm_content='.concat(n, "/#!/remix/").concat(n, '">Remix on Glitch</a>'),
                        s = '<a class="buttonLinks viewCode" href="https://glitch.com/edit?utm_source=button&utm_medium=button&utm_campaign=glitchButton&utm_content='.concat(n, "/#!/").concat(n, '">View Source</a>'),
                        c = '<div class="embedGlitchCode"><label>Copy and paste this code anywhere you want to embed this app.<textarea><div class="glitch-embed-wrap" style="height: 486px; width: 100%;">\n  <iframe\n    allow="geolocation; microphone; camera; midi; encrypted-media"\n    src="https://glitch.com/embed/#!/embed/'.concat(n, '?previewSize=100&previewFirst=true&sidebarCollapsed=true"\n    alt="').concat(n, ' on Glitch"\n    style="height: 100%; width: 100%; border: 0;">\n  </iframe>\n</div></textarea>').concat(s, ' to customize the embed under the "Share" menu.</label></div>'),
                        u = '<div class="project">\n          <div class="projectInfo">\n            <div class="name"><a href="https://glitch.com/~'.concat(n, "?utm_source=button&utm_medium=button&utm_campaign=glitchButton&utm_content=").concat(n, '">').concat(n, '</a></div>\n            <p class="description">').concat(r, '</p>\n            <div class="users">\n              <ul>').concat(o.join(" "), '</ul>\n            </div>\n          </div>\n          <div class="projectActions">').concat(i, "<br /> ").concat(s, "<br /> ").concat('<button class="buttonLinks embed">Embed This App</button>', '</div>\n          <div class="projectEmbed">').concat(c, "</div>\n        </div>"),
                        l = document.getElementsByClassName("glitchButton");
                    [].forEach.call(l, function(e) {
                        var t = document.createElement("button");
                        t.className = "glitchButtonElement", t.innerHTML = '<img alt="This is a Glitch app!" width="50px" src="'.concat("https://cdn.glitch.com/3fd2e3a7-3145-4c1d-9480-32a2e6a6963a%2Flogo-day.svg?1490800908258", '" />');
                        var n = document.createElement("div");
                        n.className = "glitchOpenWindowElement", n.style.display = "none", n.innerHTML = "".concat(u, ' <span class="tooltip border"></span><span class="tooltip fill"></span>'), t.onclick = a, e.appendChild(t), e.appendChild(n), e.getElementsByClassName("embed")[0].onclick = function(t) {
                            var n, r, o, i;
                            r = (n = e).getElementsByClassName("projectInfo")[0], o = n.getElementsByClassName("projectActions")[0], i = n.getElementsByClassName("projectEmbed")[0], r.style.display = "none", o.style.display = "none", i.style.display = "block"
                        }
                    })
                }).catch(function(e) {
                    console.log(e)
                })
            }
        }()
    }, {
        axios: 2,
        "es6-promise": 27
    }],
    2: [function(e, t, n) {
        t.exports = e("./lib/axios")
    }, {
        "./lib/axios": 4
    }],
    3: [function(e, t, n) {
        (function(n) {
            "use strict";
            var r = e("./../utils"),
                o = e("./../core/settle"),
                i = e("./../helpers/buildURL"),
                s = e("./../helpers/parseHeaders"),
                a = e("./../helpers/isURLSameOrigin"),
                c = e("../core/createError"),
                u = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || e("./../helpers/btoa");
            t.exports = function(t) {
                return new Promise(function(l, f) {
                    var p = t.data,
                        h = t.headers;
                    r.isFormData(p) && delete h["Content-Type"];
                    var d = new XMLHttpRequest,
                        m = "onreadystatechange",
                        v = !1;
                    if ("test" === n.env.NODE_ENV || "undefined" == typeof window || !window.XDomainRequest || "withCredentials" in d || a(t.url) || (d = new window.XDomainRequest, m = "onload", v = !0, d.onprogress = function() {}, d.ontimeout = function() {}), t.auth) {
                        var y = t.auth.username || "",
                            g = t.auth.password || "";
                        h.Authorization = "Basic " + u(y + ":" + g)
                    }
                    if (d.open(t.method.toUpperCase(), i(t.url, t.params, t.paramsSerializer), !0), d.timeout = t.timeout, d[m] = function() {
                            if (d && (4 === d.readyState || v) && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
                                var e = "getAllResponseHeaders" in d ? s(d.getAllResponseHeaders()) : null,
                                    n = {
                                        data: t.responseType && "text" !== t.responseType ? d.response : d.responseText,
                                        status: 1223 === d.status ? 204 : d.status,
                                        statusText: 1223 === d.status ? "No Content" : d.statusText,
                                        headers: e,
                                        config: t,
                                        request: d
                                    };
                                o(l, f, n), d = null
                            }
                        }, d.onerror = function() {
                            f(c("Network Error", t, null, d)), d = null
                        }, d.ontimeout = function() {
                            f(c("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED", d)), d = null
                        }, r.isStandardBrowserEnv()) {
                        var w = e("./../helpers/cookies"),
                            b = (t.withCredentials || a(t.url)) && t.xsrfCookieName ? w.read(t.xsrfCookieName) : void 0;
                        b && (h[t.xsrfHeaderName] = b)
                    }
                    if ("setRequestHeader" in d && r.forEach(h, function(e, t) {
                            void 0 === p && "content-type" === t.toLowerCase() ? delete h[t] : d.setRequestHeader(t, e)
                        }), t.withCredentials && (d.withCredentials = !0), t.responseType) try {
                        d.responseType = t.responseType
                    } catch (e) {
                        if ("json" !== t.responseType) throw e
                    }
                    "function" == typeof t.onDownloadProgress && d.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && d.upload && d.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then(function(e) {
                        d && (d.abort(), f(e), d = null)
                    }), void 0 === p && (p = null), d.send(p)
                })
            }
        }).call(this, e("_process"))
    }, {
        "../core/createError": 10,
        "./../core/settle": 13,
        "./../helpers/btoa": 17,
        "./../helpers/buildURL": 18,
        "./../helpers/cookies": 20,
        "./../helpers/isURLSameOrigin": 22,
        "./../helpers/parseHeaders": 24,
        "./../utils": 26,
        _process: 29
    }],
    4: [function(e, t, n) {
        "use strict";
        var r = e("./utils"),
            o = e("./helpers/bind"),
            i = e("./core/Axios"),
            s = e("./defaults");

        function a(e) {
            var t = new i(e),
                n = o(i.prototype.request, t);
            return r.extend(n, i.prototype, t), r.extend(n, t), n
        }
        var c = a(s);
        c.Axios = i, c.create = function(e) {
            return a(r.merge(s, e))
        }, c.Cancel = e("./cancel/Cancel"), c.CancelToken = e("./cancel/CancelToken"), c.isCancel = e("./cancel/isCancel"), c.all = function(e) {
            return Promise.all(e)
        }, c.spread = e("./helpers/spread"), t.exports = c, t.exports.default = c
    }, {
        "./cancel/Cancel": 5,
        "./cancel/CancelToken": 6,
        "./cancel/isCancel": 7,
        "./core/Axios": 8,
        "./defaults": 15,
        "./helpers/bind": 16,
        "./helpers/spread": 25,
        "./utils": 26
    }],
    5: [function(e, t, n) {
        "use strict";

        function r(e) {
            this.message = e
        }
        r.prototype.toString = function() {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }, r.prototype.__CANCEL__ = !0, t.exports = r
    }, {}],
    6: [function(e, t, n) {
        "use strict";
        var r = e("./Cancel");

        function o(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise(function(e) {
                t = e
            });
            var n = this;
            e(function(e) {
                n.reason || (n.reason = new r(e), t(n.reason))
            })
        }
        o.prototype.throwIfRequested = function() {
            if (this.reason) throw this.reason
        }, o.source = function() {
            var e;
            return {
                token: new o(function(t) {
                    e = t
                }),
                cancel: e
            }
        }, t.exports = o
    }, {
        "./Cancel": 5
    }],
    7: [function(e, t, n) {
        "use strict";
        t.exports = function(e) {
            return !(!e || !e.__CANCEL__)
        }
    }, {}],
    8: [function(e, t, n) {
        "use strict";
        var r = e("./../defaults"),
            o = e("./../utils"),
            i = e("./InterceptorManager"),
            s = e("./dispatchRequest");

        function a(e) {
            this.defaults = e, this.interceptors = {
                request: new i,
                response: new i
            }
        }
        a.prototype.request = function(e) {
            "string" == typeof e && (e = o.merge({
                url: arguments[0]
            }, arguments[1])), (e = o.merge(r, {
                method: "get"
            }, this.defaults, e)).method = e.method.toLowerCase();
            var t = [s, void 0],
                n = Promise.resolve(e);
            for (this.interceptors.request.forEach(function(e) {
                    t.unshift(e.fulfilled, e.rejected)
                }), this.interceptors.response.forEach(function(e) {
                    t.push(e.fulfilled, e.rejected)
                }); t.length;) n = n.then(t.shift(), t.shift());
            return n
        }, o.forEach(["delete", "get", "head", "options"], function(e) {
            a.prototype[e] = function(t, n) {
                return this.request(o.merge(n || {}, {
                    method: e,
                    url: t
                }))
            }
        }), o.forEach(["post", "put", "patch"], function(e) {
            a.prototype[e] = function(t, n, r) {
                return this.request(o.merge(r || {}, {
                    method: e,
                    url: t,
                    data: n
                }))
            }
        }), t.exports = a
    }, {
        "./../defaults": 15,
        "./../utils": 26,
        "./InterceptorManager": 9,
        "./dispatchRequest": 11
    }],
    9: [function(e, t, n) {
        "use strict";
        var r = e("./../utils");

        function o() {
            this.handlers = []
        }
        o.prototype.use = function(e, t) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t
            }), this.handlers.length - 1
        }, o.prototype.eject = function(e) {
            this.handlers[e] && (this.handlers[e] = null)
        }, o.prototype.forEach = function(e) {
            r.forEach(this.handlers, function(t) {
                null !== t && e(t)
            })
        }, t.exports = o
    }, {
        "./../utils": 26
    }],
    10: [function(e, t, n) {
        "use strict";
        var r = e("./enhanceError");
        t.exports = function(e, t, n, o, i) {
            var s = new Error(e);
            return r(s, t, n, o, i)
        }
    }, {
        "./enhanceError": 12
    }],
    11: [function(e, t, n) {
        "use strict";
        var r = e("./../utils"),
            o = e("./transformData"),
            i = e("../cancel/isCancel"),
            s = e("../defaults"),
            a = e("./../helpers/isAbsoluteURL"),
            c = e("./../helpers/combineURLs");

        function u(e) {
            e.cancelToken && e.cancelToken.throwIfRequested()
        }
        t.exports = function(e) {
            return u(e), e.baseURL && !a(e.url) && (e.url = c(e.baseURL, e.url)), e.headers = e.headers || {}, e.data = o(e.data, e.headers, e.transformRequest), e.headers = r.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function(t) {
                delete e.headers[t]
            }), (e.adapter || s.adapter)(e).then(function(t) {
                return u(e), t.data = o(t.data, t.headers, e.transformResponse), t
            }, function(t) {
                return i(t) || (u(e), t && t.response && (t.response.data = o(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
            })
        }
    }, {
        "../cancel/isCancel": 7,
        "../defaults": 15,
        "./../helpers/combineURLs": 19,
        "./../helpers/isAbsoluteURL": 21,
        "./../utils": 26,
        "./transformData": 14
    }],
    12: [function(e, t, n) {
        "use strict";
        t.exports = function(e, t, n, r, o) {
            return e.config = t, n && (e.code = n), e.request = r, e.response = o, e
        }
    }, {}],
    13: [function(e, t, n) {
        "use strict";
        var r = e("./createError");
        t.exports = function(e, t, n) {
            var o = n.config.validateStatus;
            n.status && o && !o(n.status) ? t(r("Request failed with status code " + n.status, n.config, null, n.request, n)) : e(n)
        }
    }, {
        "./createError": 10
    }],
    14: [function(e, t, n) {
        "use strict";
        var r = e("./../utils");
        t.exports = function(e, t, n) {
            return r.forEach(n, function(n) {
                e = n(e, t)
            }), e
        }
    }, {
        "./../utils": 26
    }],
    15: [function(e, t, n) {
        (function(n) {
            "use strict";
            var r = e("./utils"),
                o = e("./helpers/normalizeHeaderName"),
                i = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };

            function s(e, t) {
                !r.isUndefined(e) && r.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var a, c = {
                adapter: ("undefined" != typeof XMLHttpRequest ? a = e("./adapters/xhr") : void 0 !== n && (a = e("./adapters/http")), a),
                transformRequest: [function(e, t) {
                    return o(t, "Content-Type"), r.isFormData(e) || r.isArrayBuffer(e) || r.isBuffer(e) || r.isStream(e) || r.isFile(e) || r.isBlob(e) ? e : r.isArrayBufferView(e) ? e.buffer : r.isURLSearchParams(e) ? (s(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : r.isObject(e) ? (s(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                }],
                transformResponse: [function(e) {
                    if ("string" == typeof e) try {
                        e = JSON.parse(e)
                    } catch (e) {}
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function(e) {
                    return e >= 200 && e < 300
                }
            };
            c.headers = {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }, r.forEach(["delete", "get", "head"], function(e) {
                c.headers[e] = {}
            }), r.forEach(["post", "put", "patch"], function(e) {
                c.headers[e] = r.merge(i)
            }), t.exports = c
        }).call(this, e("_process"))
    }, {
        "./adapters/http": 3,
        "./adapters/xhr": 3,
        "./helpers/normalizeHeaderName": 23,
        "./utils": 26,
        _process: 29
    }],
    16: [function(e, t, n) {
        "use strict";
        t.exports = function(e, t) {
            return function() {
                for (var n = new Array(arguments.length), r = 0; r < n.length; r++) n[r] = arguments[r];
                return e.apply(t, n)
            }
        }
    }, {}],
    17: [function(e, t, n) {
        "use strict";
        var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

        function o() {
            this.message = "String contains an invalid character"
        }
        o.prototype = new Error, o.prototype.code = 5, o.prototype.name = "InvalidCharacterError", t.exports = function(e) {
            for (var t, n, i = String(e), s = "", a = 0, c = r; i.charAt(0 | a) || (c = "=", a % 1); s += c.charAt(63 & t >> 8 - a % 1 * 8)) {
                if ((n = i.charCodeAt(a += .75)) > 255) throw new o;
                t = t << 8 | n
            }
            return s
        }
    }, {}],
    18: [function(e, t, n) {
        "use strict";
        var r = e("./../utils");

        function o(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        t.exports = function(e, t, n) {
            if (!t) return e;
            var i;
            if (n) i = n(t);
            else if (r.isURLSearchParams(t)) i = t.toString();
            else {
                var s = [];
                r.forEach(t, function(e, t) {
                    null !== e && void 0 !== e && (r.isArray(e) ? t += "[]" : e = [e], r.forEach(e, function(e) {
                        r.isDate(e) ? e = e.toISOString() : r.isObject(e) && (e = JSON.stringify(e)), s.push(o(t) + "=" + o(e))
                    }))
                }), i = s.join("&")
            }
            return i && (e += (-1 === e.indexOf("?") ? "?" : "&") + i), e
        }
    }, {
        "./../utils": 26
    }],
    19: [function(e, t, n) {
        "use strict";
        t.exports = function(e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
    }, {}],
    20: [function(e, t, n) {
        "use strict";
        var r = e("./../utils");
        t.exports = r.isStandardBrowserEnv() ? {
            write: function(e, t, n, o, i, s) {
                var a = [];
                a.push(e + "=" + encodeURIComponent(t)), r.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), r.isString(o) && a.push("path=" + o), r.isString(i) && a.push("domain=" + i), !0 === s && a.push("secure"), document.cookie = a.join("; ")
            },
            read: function(e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function(e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write: function() {},
            read: function() {
                return null
            },
            remove: function() {}
        }
    }, {
        "./../utils": 26
    }],
    21: [function(e, t, n) {
        "use strict";
        t.exports = function(e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
        }
    }, {}],
    22: [function(e, t, n) {
        "use strict";
        var r = e("./../utils");
        t.exports = r.isStandardBrowserEnv() ? function() {
            var e, t = /(msie|trident)/i.test(navigator.userAgent),
                n = document.createElement("a");

            function o(e) {
                var r = e;
                return t && (n.setAttribute("href", r), r = n.href), n.setAttribute("href", r), {
                    href: n.href,
                    protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                    host: n.host,
                    search: n.search ? n.search.replace(/^\?/, "") : "",
                    hash: n.hash ? n.hash.replace(/^#/, "") : "",
                    hostname: n.hostname,
                    port: n.port,
                    pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                }
            }
            return e = o(window.location.href),
                function(t) {
                    var n = r.isString(t) ? o(t) : t;
                    return n.protocol === e.protocol && n.host === e.host
                }
        }() : function() {
            return !0
        }
    }, {
        "./../utils": 26
    }],
    23: [function(e, t, n) {
        "use strict";
        var r = e("../utils");
        t.exports = function(e, t) {
            r.forEach(e, function(n, r) {
                r !== t && r.toUpperCase() === t.toUpperCase() && (e[t] = n, delete e[r])
            })
        }
    }, {
        "../utils": 26
    }],
    24: [function(e, t, n) {
        "use strict";
        var r = e("./../utils"),
            o = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        t.exports = function(e) {
            var t, n, i, s = {};
            return e ? (r.forEach(e.split("\n"), function(e) {
                if (i = e.indexOf(":"), t = r.trim(e.substr(0, i)).toLowerCase(), n = r.trim(e.substr(i + 1)), t) {
                    if (s[t] && o.indexOf(t) >= 0) return;
                    s[t] = "set-cookie" === t ? (s[t] ? s[t] : []).concat([n]) : s[t] ? s[t] + ", " + n : n
                }
            }), s) : s
        }
    }, {
        "./../utils": 26
    }],
    25: [function(e, t, n) {
        "use strict";
        t.exports = function(e) {
            return function(t) {
                return e.apply(null, t)
            }
        }
    }, {}],
    26: [function(e, t, n) {
        "use strict";
        var r = e("./helpers/bind"),
            o = e("is-buffer"),
            i = Object.prototype.toString;

        function s(e) {
            return "[object Array]" === i.call(e)
        }

        function a(e) {
            return null !== e && "object" == typeof e
        }

        function c(e) {
            return "[object Function]" === i.call(e)
        }

        function u(e, t) {
            if (null !== e && void 0 !== e)
                if ("object" != typeof e && (e = [e]), s(e))
                    for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
                else
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
        }
        t.exports = {
            isArray: s,
            isArrayBuffer: function(e) {
                return "[object ArrayBuffer]" === i.call(e)
            },
            isBuffer: o,
            isFormData: function(e) {
                return "undefined" != typeof FormData && e instanceof FormData
            },
            isArrayBufferView: function(e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
            },
            isString: function(e) {
                return "string" == typeof e
            },
            isNumber: function(e) {
                return "number" == typeof e
            },
            isObject: a,
            isUndefined: function(e) {
                return void 0 === e
            },
            isDate: function(e) {
                return "[object Date]" === i.call(e)
            },
            isFile: function(e) {
                return "[object File]" === i.call(e)
            },
            isBlob: function(e) {
                return "[object Blob]" === i.call(e)
            },
            isFunction: c,
            isStream: function(e) {
                return a(e) && c(e.pipe)
            },
            isURLSearchParams: function(e) {
                return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
            },
            isStandardBrowserEnv: function() {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
            },
            forEach: u,
            merge: function e() {
                var t = {};

                function n(n, r) {
                    "object" == typeof t[r] && "object" == typeof n ? t[r] = e(t[r], n) : t[r] = n
                }
                for (var r = 0, o = arguments.length; r < o; r++) u(arguments[r], n);
                return t
            },
            extend: function(e, t, n) {
                return u(t, function(t, o) {
                    e[o] = n && "function" == typeof t ? r(t, n) : t
                }), e
            },
            trim: function(e) {
                return e.replace(/^\s*/, "").replace(/\s*$/, "")
            }
        }
    }, {
        "./helpers/bind": 16,
        "is-buffer": 28
    }],
    27: [function(e, t, n) {
        (function(r, o) {
            ! function(e, r) {
                "object" == typeof n && void 0 !== t ? t.exports = r() : "function" == typeof define && define.amd ? define(r) : e.ES6Promise = r()
            }(this, function() {
                "use strict";

                function t(e) {
                    return "function" == typeof e
                }
                var n = Array.isArray ? Array.isArray : function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    i = 0,
                    s = void 0,
                    a = void 0,
                    c = function(e, t) {
                        m[i] = e, m[i + 1] = t, 2 === (i += 2) && (a ? a(v) : _())
                    };
                var u = "undefined" != typeof window ? window : void 0,
                    l = u || {},
                    f = l.MutationObserver || l.WebKitMutationObserver,
                    p = "undefined" == typeof self && void 0 !== r && "[object process]" === {}.toString.call(r),
                    h = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;

                function d() {
                    var e = setTimeout;
                    return function() {
                        return e(v, 1)
                    }
                }
                var m = new Array(1e3);

                function v() {
                    for (var e = 0; e < i; e += 2) {
                        (0, m[e])(m[e + 1]), m[e] = void 0, m[e + 1] = void 0
                    }
                    i = 0
                }
                var y, g, w, b, _ = void 0;

                function E(e, t) {
                    var n = this,
                        r = new this.constructor(A);
                    void 0 === r[C] && M(r);
                    var o = n._state;
                    if (o) {
                        var i = arguments[o - 1];
                        c(function() {
                            return P(o, r, i, n._result)
                        })
                    } else q(n, r, e, t);
                    return r
                }

                function x(e) {
                    if (e && "object" == typeof e && e.constructor === this) return e;
                    var t = new this(A);
                    return N(t, e), t
                }
                p ? _ = function() {
                    return r.nextTick(v)
                } : f ? (g = 0, w = new f(v), b = document.createTextNode(""), w.observe(b, {
                    characterData: !0
                }), _ = function() {
                    b.data = g = ++g % 2
                }) : h ? ((y = new MessageChannel).port1.onmessage = v, _ = function() {
                    return y.port2.postMessage(0)
                }) : _ = void 0 === u && "function" == typeof e ? function() {
                    try {
                        var e = Function("return this")().require("vertx");
                        return void 0 !== (s = e.runOnLoop || e.runOnContext) ? function() {
                            s(v)
                        } : d()
                    } catch (e) {
                        return d()
                    }
                }() : d();
                var C = Math.random().toString(36).substring(2);

                function A() {}
                var T = void 0,
                    S = 1,
                    j = 2,
                    B = {
                        error: null
                    };

                function R(e) {
                    try {
                        return e.then
                    } catch (e) {
                        return B.error = e, B
                    }
                }

                function L(e, n, r) {
                    n.constructor === e.constructor && r === E && n.constructor.resolve === x ? function(e, t) {
                        t._state === S ? k(e, t._result) : t._state === j ? U(e, t._result) : q(t, void 0, function(t) {
                            return N(e, t)
                        }, function(t) {
                            return U(e, t)
                        })
                    }(e, n) : r === B ? (U(e, B.error), B.error = null) : void 0 === r ? k(e, n) : t(r) ? function(e, t, n) {
                        c(function(e) {
                            var r = !1,
                                o = function(e, t, n, r) {
                                    try {
                                        e.call(t, n, r)
                                    } catch (e) {
                                        return e
                                    }
                                }(n, t, function(n) {
                                    r || (r = !0, t !== n ? N(e, n) : k(e, n))
                                }, function(t) {
                                    r || (r = !0, U(e, t))
                                }, e._label);
                            !r && o && (r = !0, U(e, o))
                        }, e)
                    }(e, n, r) : k(e, n)
                }

                function N(e, t) {
                    var n, r;
                    e === t ? U(e, new TypeError("You cannot resolve a promise with itself")) : (r = typeof(n = t), null === n || "object" !== r && "function" !== r ? k(e, t) : L(e, t, R(t)))
                }

                function O(e) {
                    e._onerror && e._onerror(e._result), D(e)
                }

                function k(e, t) {
                    e._state === T && (e._result = t, e._state = S, 0 !== e._subscribers.length && c(D, e))
                }

                function U(e, t) {
                    e._state === T && (e._state = j, e._result = t, c(O, e))
                }

                function q(e, t, n, r) {
                    var o = e._subscribers,
                        i = o.length;
                    e._onerror = null, o[i] = t, o[i + S] = n, o[i + j] = r, 0 === i && e._state && c(D, e)
                }

                function D(e) {
                    var t = e._subscribers,
                        n = e._state;
                    if (0 !== t.length) {
                        for (var r = void 0, o = void 0, i = e._result, s = 0; s < t.length; s += 3) r = t[s], o = t[s + n], r ? P(n, r, o, i) : o(i);
                        e._subscribers.length = 0
                    }
                }

                function P(e, n, r, o) {
                    var i = t(r),
                        s = void 0,
                        a = void 0,
                        c = void 0,
                        u = void 0;
                    if (i) {
                        if ((s = function(e, t) {
                                try {
                                    return e(t)
                                } catch (e) {
                                    return B.error = e, B
                                }
                            }(r, o)) === B ? (u = !0, a = s.error, s.error = null) : c = !0, n === s) return void U(n, new TypeError("A promises callback cannot return that same promise."))
                    } else s = o, c = !0;
                    n._state !== T || (i && c ? N(n, s) : u ? U(n, a) : e === S ? k(n, s) : e === j && U(n, s))
                }
                var F = 0;

                function M(e) {
                    e[C] = F++, e._state = void 0, e._result = void 0, e._subscribers = []
                }
                var H = function() {
                    function e(e, t) {
                        this._instanceConstructor = e, this.promise = new e(A), this.promise[C] || M(this.promise), n(t) ? (this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? k(this.promise, this._result) : (this.length = this.length || 0, this._enumerate(t), 0 === this._remaining && k(this.promise, this._result))) : U(this.promise, new Error("Array Methods must be provided an Array"))
                    }
                    return e.prototype._enumerate = function(e) {
                        for (var t = 0; this._state === T && t < e.length; t++) this._eachEntry(e[t], t)
                    }, e.prototype._eachEntry = function(e, t) {
                        var n = this._instanceConstructor,
                            r = n.resolve;
                        if (r === x) {
                            var o = R(e);
                            if (o === E && e._state !== T) this._settledAt(e._state, t, e._result);
                            else if ("function" != typeof o) this._remaining--, this._result[t] = e;
                            else if (n === I) {
                                var i = new n(A);
                                L(i, e, o), this._willSettleAt(i, t)
                            } else this._willSettleAt(new n(function(t) {
                                return t(e)
                            }), t)
                        } else this._willSettleAt(r(e), t)
                    }, e.prototype._settledAt = function(e, t, n) {
                        var r = this.promise;
                        r._state === T && (this._remaining--, e === j ? U(r, n) : this._result[t] = n), 0 === this._remaining && k(r, this._result)
                    }, e.prototype._willSettleAt = function(e, t) {
                        var n = this;
                        q(e, void 0, function(e) {
                            return n._settledAt(S, t, e)
                        }, function(e) {
                            return n._settledAt(j, t, e)
                        })
                    }, e
                }();
                var I = function() {
                    function e(t) {
                        this[C] = F++, this._result = this._state = void 0, this._subscribers = [], A !== t && ("function" != typeof t && function() {
                            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                        }(), this instanceof e ? function(e, t) {
                            try {
                                t(function(t) {
                                    N(e, t)
                                }, function(t) {
                                    U(e, t)
                                })
                            } catch (t) {
                                U(e, t)
                            }
                        }(this, t) : function() {
                            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                        }())
                    }
                    return e.prototype.catch = function(e) {
                        return this.then(null, e)
                    }, e.prototype.finally = function(e) {
                        var n = this.constructor;
                        return t(e) ? this.then(function(t) {
                            return n.resolve(e()).then(function() {
                                return t
                            })
                        }, function(t) {
                            return n.resolve(e()).then(function() {
                                throw t
                            })
                        }) : this.then(e, e)
                    }, e
                }();
                return I.prototype.then = E, I.all = function(e) {
                    return new H(this, e).promise
                }, I.race = function(e) {
                    var t = this;
                    return n(e) ? new t(function(n, r) {
                        for (var o = e.length, i = 0; i < o; i++) t.resolve(e[i]).then(n, r)
                    }) : new t(function(e, t) {
                        return t(new TypeError("You must pass an array to race."))
                    })
                }, I.resolve = x, I.reject = function(e) {
                    var t = new this(A);
                    return U(t, e), t
                }, I._setScheduler = function(e) {
                    a = e
                }, I._setAsap = function(e) {
                    c = e
                }, I._asap = c, I.polyfill = function() {
                    var e = void 0;
                    if (void 0 !== o) e = o;
                    else if ("undefined" != typeof self) e = self;
                    else try {
                        e = Function("return this")()
                    } catch (e) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var t = e.Promise;
                    if (t) {
                        var n = null;
                        try {
                            n = Object.prototype.toString.call(t.resolve())
                        } catch (e) {}
                        if ("[object Promise]" === n && !t.cast) return
                    }
                    e.Promise = I
                }, I.Promise = I, I
            })
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {
        _process: 29
    }],
    28: [function(e, t, n) {
        function r(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }
        t.exports = function(e) {
            return null != e && (r(e) || function(e) {
                return "function" == typeof e.readFloatLE && "function" == typeof e.slice && r(e.slice(0, 0))
            }(e) || !!e._isBuffer)
        }
    }, {}],
    29: [function(e, t, n) {
        var r, o, i = t.exports = {};

        function s() {
            throw new Error("setTimeout has not been defined")
        }

        function a() {
            throw new Error("clearTimeout has not been defined")
        }

        function c(e) {
            if (r === setTimeout) return setTimeout(e, 0);
            if ((r === s || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
            try {
                return r(e, 0)
            } catch (t) {
                try {
                    return r.call(null, e, 0)
                } catch (t) {
                    return r.call(this, e, 0)
                }
            }
        }! function() {
            try {
                r = "function" == typeof setTimeout ? setTimeout : s
            } catch (e) {
                r = s
            }
            try {
                o = "function" == typeof clearTimeout ? clearTimeout : a
            } catch (e) {
                o = a
            }
        }();
        var u, l = [],
            f = !1,
            p = -1;

        function h() {
            f && u && (f = !1, u.length ? l = u.concat(l) : p = -1, l.length && d())
        }

        function d() {
            if (!f) {
                var e = c(h);
                f = !0;
                for (var t = l.length; t;) {
                    for (u = l, l = []; ++p < t;) u && u[p].run();
                    p = -1, t = l.length
                }
                u = null, f = !1,
                    function(e) {
                        if (o === clearTimeout) return clearTimeout(e);
                        if ((o === a || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
                        try {
                            o(e)
                        } catch (t) {
                            try {
                                return o.call(null, e)
                            } catch (t) {
                                return o.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function m(e, t) {
            this.fun = e, this.array = t
        }

        function v() {}
        i.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            l.push(new m(e, t)), 1 !== l.length || f || c(d)
        }, m.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = v, i.addListener = v, i.once = v, i.off = v, i.removeListener = v, i.removeAllListeners = v, i.emit = v, i.prependListener = v, i.prependOnceListener = v, i.listeners = function(e) {
            return []
        }, i.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, i.cwd = function() {
            return "/"
        }, i.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, i.umask = function() {
            return 0
        }
    }, {}]
}, {}, [1]);