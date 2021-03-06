if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            n = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var r = function() {
            i || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(r, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.alert");
            r || i.data("bs.alert", r = new n(this)), "string" == typeof e && r[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        n = function(e) {
            t(e).on("click", i, this.close)
        };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
        function i() {
            o.detach().trigger("closed.bs.alert").remove()
        }
        var r = t(this),
            s = r.attr("data-target");
        s || (s = r.attr("href"), s = s && s.replace(/.*(?=#[^\s]*$)/, ""));
        var o = t(s);
        e && e.preventDefault(), o.length || (o = r.closest(".alert")), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
    };
    var r = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
        return t.fn.alert = r, this
    }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.button"),
                s = "object" == typeof e && e;
            r || n.data("bs.button", r = new i(this, s)), "toggle" == e ? r.toggle() : e && r.setState(e)
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
    };
    i.VERSION = "3.3.5", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled",
            n = this.$element,
            r = n.is("input") ? "val" : "html",
            s = n.data();
        e += "Text", null == s.resetText && n.data("resetText", n[r]()), setTimeout(t.proxy(function() {
            n[r](null == s[e] ? this.options[e] : s[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var n = t(i.target);
        n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.carousel"),
                s = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                o = "string" == typeof e ? e : s.slide;
            r || n.data("bs.carousel", r = new i(this, s)), "number" == typeof e ? r.to(e) : o ? r[o]() : s.interval && r.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e),
            n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (n && !this.options.wrap) return e;
        var r = "prev" == t ? -1 : 1,
            s = (i + r) % this.$items.length;
        return this.$items.eq(s)
    }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function(e, n) {
        var r = this.$element.find(".item.active"),
            s = n || this.getItemForDirection(e, r),
            o = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (s.hasClass("active")) return this.sliding = !1;
        var h = s[0],
            u = t.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: a
            });
        if (this.$element.trigger(u), !u.isDefaultPrevented()) {
            if (this.sliding = !0, o && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var p = t(this.$indicators.children()[this.getItemIndex(s)]);
                p && p.addClass("active")
            }
            var c = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (s.addClass(e), s[0].offsetWidth, r.addClass(a), s.addClass(a), r.one("bsTransitionEnd", function() {
                s.removeClass([e, a].join(" ")).addClass("active"), r.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(c)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (r.removeClass("active"), s.addClass("active"), this.sliding = !1, this.$element.trigger(c)), o && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = n, this
    };
    var r = function(i) {
        var n, r = t(this),
            s = t(r.attr("data-target") || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (s.hasClass("carousel")) {
            var o = t.extend({}, s.data(), r.data()),
                a = r.attr("data-slide-to");
            a && (o.interval = !1), e.call(s, o), a && s.data("bs.carousel").to(a), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(n)
    }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                r = i.data("bs.collapse"),
                s = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !r && s.toggle && /show|hide/.test(e) && (s.toggle = !1), r || i.data("bs.collapse", r = new n(this, s)), "string" == typeof e && r[e]()
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.3.5", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(r && r.length && (e = r.data("bs.collapse"), e && e.transitioning))) {
                var s = t.Event("show.bs.collapse");
                if (this.$element.trigger(s), !s.isDefaultPrevented()) {
                    r && r.length && (i.call(r, "hide"), e || r.data("bs.collapse", null));
                    var o = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[o](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", o].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[o](this.$element[0][l])
                }
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var r = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(r, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : r.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, n.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
            var r = t(n);
            this.addAriaAndCollapsedClass(e(r), r)
        }, this)).end()
    }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var r = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = r, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var r = t(this);
        r.attr("data-target") || n.preventDefault();
        var s = e(r),
            o = s.data("bs.collapse"),
            a = o ? "toggle" : r.data();
        i.call(s, a)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(r).remove(), t(s).each(function() {
            var n = t(this),
                r = e(n),
                s = {
                    relatedTarget: this
                };
            r.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(r[0], i.target) || (r.trigger(i = t.Event("hide.bs.dropdown", s)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), r.removeClass("open").trigger("hidden.bs.dropdown", s))))
        }))
    }

    function n(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new o(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var r = ".dropdown-backdrop",
        s = '[data-toggle="dropdown"]',
        o = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    o.VERSION = "3.3.5", o.prototype.toggle = function(n) {
        var r = t(this);
        if (!r.is(".disabled, :disabled")) {
            var s = e(r),
                o = s.hasClass("open");
            if (i(), !o) {
                "ontouchstart" in document.documentElement && !s.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var a = {
                    relatedTarget: this
                };
                if (s.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                r.trigger("focus").attr("aria-expanded", "true"), s.toggleClass("open").trigger("shown.bs.dropdown", a)
            }
            return !1
        }
    }, o.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var n = t(this);
            if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                var r = e(n),
                    o = r.hasClass("open");
                if (!o && 27 != i.which || o && 27 == i.which) return 27 == i.which && r.find(s).trigger("focus"), n.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = r.find(".dropdown-menu" + a);
                if (l.length) {
                    var h = l.index(i.target);
                    38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", s, o.prototype.toggle).on("keydown.bs.dropdown.data-api", s, o.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", o.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, n) {
        return this.each(function() {
            var r = t(this),
                s = r.data("bs.modal"),
                o = t.extend({}, i.DEFAULTS, r.data(), "object" == typeof e && e);
            s || r.data("bs.modal", s = new i(this, o)), "string" == typeof e ? s[e](n) : o.show && s.show(n)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var n = this,
            r = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(r), this.isShown || r.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var r = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), r && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
            var s = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            r ? n.$dialog.one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(s)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(s)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var n = this,
            r = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var s = t.support.transition && r;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + r).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), s && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            s ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var o = function() {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", o).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : o()
        } else e && e()
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var n = t(this),
            r = n.attr("href"),
            s = t(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, "")),
            o = s.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(r) && r
            }, s.data(), n.data());
        n.is("a") && i.preventDefault(), s.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || s.one("hidden.bs.modal", function() {
                n.is(":visible") && n.trigger("focus")
            })
        }), e.call(s, o, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.tooltip"),
                s = "object" == typeof e && e;
            (r || !/destroy|hide/.test(e)) && (r || n.data("bs.tooltip", r = new i(this, s)), "string" == typeof e && r[e]())
        })
    }
    var i = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, i.prototype.init = function(e, i, n) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var r = this.options.trigger.split(" "), s = r.length; s--;) {
            var o = r[s];
            if ("click" == o) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != o) {
                var a = "hover" == o ? "mouseenter" : "focusin",
                    l = "hover" == o ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var r = this,
                s = this.tip(),
                o = this.getUID(this.type);
            this.setContent(), s.attr("id", o), this.$element.attr("aria-describedby", o), this.options.animation && s.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                h = l.test(a);
            h && (a = a.replace(l, "") || "top"), s.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var u = this.getPosition(),
                p = s[0].offsetWidth,
                c = s[0].offsetHeight;
            if (h) {
                var f = a,
                    d = this.getPosition(this.$viewport);
                a = "bottom" == a && u.bottom + c > d.bottom ? "top" : "top" == a && u.top - c < d.top ? "bottom" : "right" == a && u.right + p > d.width ? "left" : "left" == a && u.left - p < d.left ? "right" : a, s.removeClass(f).addClass(a)
            }
            var m = this.getCalculatedOffset(a, u, p, c);
            this.applyPlacement(m, a);
            var g = function() {
                var t = r.hoverState;
                r.$element.trigger("shown.bs." + r.type), r.hoverState = null, "out" == t && r.leave(r)
            };
            t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", g).emulateTransitionEnd(i.TRANSITION_DURATION) : g()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var n = this.tip(),
            r = n[0].offsetWidth,
            s = n[0].offsetHeight,
            o = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(o) && (o = 0), isNaN(a) && (a = 0), e.top += o, e.left += a, t.offset.setOffset(n[0], t.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth,
            h = n[0].offsetHeight;
        "top" == i && h != s && (e.top = e.top + s - h);
        var u = this.getViewportAdjustedDelta(i, e, l, h);
        u.left ? e.left += u.left : e.top += u.top;
        var p = /top|bottom/.test(i),
            c = p ? 2 * u.left - r + l : 2 * u.top - s + h,
            f = p ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(c, n[0][f], p)
    }, i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function(e) {
        function n() {
            "in" != r.hoverState && s.detach(), r.$element.removeAttr("aria-describedby").trigger("hidden.bs." + r.type), e && e()
        }
        var r = this,
            s = t(this.$tip),
            o = t.Event("hide.bs." + this.type);
        return this.$element.trigger(o), o.isDefaultPrevented() ? void 0 : (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function() {
        return this.getTitle()
    }, i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0],
            n = "BODY" == i.tagName,
            r = i.getBoundingClientRect();
        null == r.width && (r = t.extend({}, r, {
            width: r.right - r.left,
            height: r.bottom - r.top
        }));
        var s = n ? {
                top: 0,
                left: 0
            } : e.offset(),
            o = {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            a = n ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, r, o, a, s)
    }, i.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var r = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return r;
        var s = this.options.viewport && this.options.viewport.padding || 0,
            o = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - s - o.scroll,
                l = e.top + s - o.scroll + n;
            a < o.top ? r.top = o.top - a : l > o.top + o.height && (r.top = o.top + o.height - l)
        } else {
            var h = e.left - s,
                u = e.left + s + i;
            h < o.left ? r.left = o.left - h : u > o.right && (r.left = o.left + o.width - u)
        }
        return r
    }, i.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function() {
        this.enabled = !0
    }, i.prototype.disable = function() {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.popover"),
                s = "object" == typeof e && e;
            (r || !/destroy|hide/.test(e)) && (r || n.data("bs.popover", r = new i(this, s)), "string" == typeof e && r[e]())
        })
    }
    var i = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.5", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var n = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = n, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(i, n) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.scrollspy"),
                s = "object" == typeof i && i;
            r || n.data("bs.scrollspy", r = new e(this, s)), "string" == typeof i && r[i]()
        })
    }
    e.VERSION = "3.3.5", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                r = e.data("target") || e.attr("href"),
                s = /^#./.test(r) && t(r);
            return s && s.length && s.is(":visible") && [
                [s[i]().top + n, r]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(),
            r = this.offsets,
            s = this.targets,
            o = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return o != (t = s[s.length - 1]) && this.activate(t);
        if (o && e < r[0]) return this.activeTarget = null, this.clear();
        for (t = r.length; t--;) o != s[t] && e >= r[t] && (void 0 === r[t + 1] || e < r[t + 1]) && this.activate(s[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")),
            n.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.tab");
            r || n.data("bs.tab", r = new i(this)), "string" == typeof e && r[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.5", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var r = i.find(".active:last a"),
                s = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                o = t.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            if (r.trigger(s), e.trigger(o), !o.isDefaultPrevented() && !s.isDefaultPrevented()) {
                var a = t(n);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
                    r.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: r[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, n, r) {
        function s() {
            o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), r && r()
        }
        var o = n.find("> .active"),
            a = r && t.support.transition && (o.length && o.hasClass("fade") || !!n.find("> .fade").length);
        o.length && a ? o.one("bsTransitionEnd", s).emulateTransitionEnd(i.TRANSITION_DURATION) : s(), o.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = n, this
    };
    var r = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', r).on("click.bs.tab.data-api", '[data-toggle="pill"]', r)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                r = n.data("bs.affix"),
                s = "object" == typeof e && e;
            r || n.data("bs.affix", r = new i(this, s)), "string" == typeof e && r[e]()
        })
    }
    var i = function(e, n) {
        this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.5", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, n) {
        var r = this.$target.scrollTop(),
            s = this.$element.offset(),
            o = this.$target.height();
        if (null != i && "top" == this.affixed) return i > r ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? r + this.unpin <= s.top ? !1 : "bottom" : t - n >= r + o ? !1 : "bottom";
        var a = null == this.affixed,
            l = a ? r : s.top,
            h = a ? o : e;
        return null != i && i >= r ? "top" : null != n && l + h >= t - n ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                n = this.options.offset,
                r = n.top,
                s = n.bottom,
                o = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof n && (s = r = n), "function" == typeof r && (r = n.top(this.$element)), "function" == typeof s && (s = n.bottom(this.$element));
            var a = this.getState(o, e, r, s);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: o - e - s
            })
        }
    };
    var n = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = n, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                n = i.data();
            n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
        })
    })
}(jQuery),
function(t, e) {
    "use strict";
    var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
    if (!i.TweenLite) {
        var n, r, s, o, a, l = function(t) {
                var e, n = t.split("."),
                    r = i;
                for (e = 0; n.length > e; e++) r[n[e]] = r = r[n[e]] || {};
                return r
            },
            h = l("com.greensock"),
            u = 1e-10,
            p = function(t) {
                var e, i = [],
                    n = t.length;
                for (e = 0; e !== n; i.push(t[e++]));
                return i
            },
            c = function() {},
            f = function() {
                var t = Object.prototype.toString,
                    e = t.call([]);
                return function(i) {
                    return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                }
            }(),
            d = {},
            m = function(n, r, s, o) {
                this.sc = d[n] ? d[n].sc : [], d[n] = this, this.gsClass = null, this.func = s;
                var a = [];
                this.check = function(h) {
                    for (var u, p, c, f, g = r.length, y = g; --g > -1;)(u = d[r[g]] || new m(r[g], [])).gsClass ? (a[g] = u.gsClass, y--) : h && u.sc.push(this);
                    if (0 === y && s)
                        for (p = ("com.greensock." + n).split("."), c = p.pop(), f = l(p.join("."))[c] = this.gsClass = s.apply(s, a), o && (i[c] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                return f
                            }) : n === e && "undefined" != typeof module && module.exports && (module.exports = f)), g = 0; this.sc.length > g; g++) this.sc[g].check()
                }, this.check(!0)
            },
            g = t._gsDefine = function(t, e, i, n) {
                return new m(t, e, i, n)
            },
            y = h._class = function(t, e, i) {
                return e = e || function() {}, g(t, [], function() {
                    return e
                }, i), e
            };
        g.globals = i;
        var v = [0, 0, 1, 1],
            _ = [],
            x = y("easing.Ease", function(t, e, i, n) {
                this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? v.concat(e) : v
            }, !0),
            b = x.map = {},
            w = x.register = function(t, e, i, n) {
                for (var r, s, o, a, l = e.split(","), u = l.length, p = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                    for (s = l[u], r = n ? y("easing." + s, null, !0) : h.easing[s] || {}, o = p.length; --o > -1;) a = p[o], b[s + "." + a] = b[a + s] = r[a] = t.getRatio ? t : t[a] || new t
            };
        for (s = x.prototype, s._calcEnd = !1, s.getRatio = function(t) {
                if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                var e = this._type,
                    i = this._power,
                    n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
            }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) s = n[r] + ",Power" + r, w(new x(null, null, 1, r), s, "easeOut", !0), w(new x(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), w(new x(null, null, 3, r), s, "easeInOut");
        b.linear = h.easing.Linear.easeIn, b.swing = h.easing.Quad.easeInOut;
        var T = y("events.EventDispatcher", function(t) {
            this._listeners = {}, this._eventTarget = t || this
        });
        s = T.prototype, s.addEventListener = function(t, e, i, n, r) {
            r = r || 0;
            var s, l, h = this._listeners[t],
                u = 0;
            for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) s = h[l], s.c === e && s.s === i ? h.splice(l, 1) : 0 === u && r > s.pr && (u = l + 1);
            h.splice(u, 0, {
                c: e,
                s: i,
                up: n,
                pr: r
            }), this !== o || a || o.wake()
        }, s.removeEventListener = function(t, e) {
            var i, n = this._listeners[t];
            if (n)
                for (i = n.length; --i > -1;)
                    if (n[i].c === e) return void n.splice(i, 1)
        }, s.dispatchEvent = function(t) {
            var e, i, n, r = this._listeners[t];
            if (r)
                for (e = r.length, i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
                    type: t,
                    target: i
                }) : n.c.call(n.s || i))
        };
        var S = t.requestAnimationFrame,
            P = t.cancelAnimationFrame,
            E = Date.now || function() {
                return (new Date).getTime()
            },
            C = E();
        for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !S;) S = t[n[r] + "RequestAnimationFrame"], P = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
        y("Ticker", function(t, e) {
            var i, n, r, s, l, h = this,
                p = E(),
                f = e !== !1 && S,
                d = 500,
                m = 33,
                g = "tick",
                y = function(t) {
                    var e, o, a = E() - C;
                    a > d && (p += a - m), C += a, h.time = (C - p) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= s ? .004 : s - e), o = !0), t !== !0 && (r = n(y)), o && h.dispatchEvent(g)
                };
            T.call(h), h.time = h.frame = 0, h.tick = function() {
                y(!0)
            }, h.lagSmoothing = function(t, e) {
                d = t || 1 / u, m = Math.min(e, d, 0)
            }, h.sleep = function() {
                null != r && (f && P ? P(r) : clearTimeout(r), n = c, r = null, h === o && (a = !1))
            }, h.wake = function() {
                null !== r ? h.sleep() : h.frame > 10 && (C = E() - d + 5), n = 0 === i ? c : f && S ? S : function(t) {
                    return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                }, h === o && (a = !0), y(2)
            }, h.fps = function(t) {
                return arguments.length ? (i = t, s = 1 / (i || 60), l = this.time + s, void h.wake()) : i
            }, h.useRAF = function(t) {
                return arguments.length ? (h.sleep(), f = t, void h.fps(i)) : f
            }, h.fps(t), setTimeout(function() {
                f && 5 > h.frame && h.useRAF(!1)
            }, 1500)
        }), s = h.Ticker.prototype = new h.events.EventDispatcher, s.constructor = h.Ticker;
        var O = y("core.Animation", function(t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, B) {
                a || o.wake();
                var i = this.vars.useFrames ? W : B;
                i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
        });
        o = O.ticker = new h.Ticker, s = O.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
        var k = function() {
            a && E() - C > 2e3 && o.wake(), setTimeout(k, 2e3)
        };
        k(), s.play = function(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, s.pause = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, s.resume = function(t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
        }, s.seek = function(t, e) {
            return this.totalTime(Number(t), e !== !1)
        }, s.restart = function(t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
        }, s.reverse = function(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, s.render = function() {}, s.invalidate = function() {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
        }, s.isActive = function() {
            var t, e = this._timeline,
                i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
        }, s._enabled = function(t, e) {
            return a || o.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, s._kill = function() {
            return this._enabled(!1, !1)
        }, s.kill = function(t, e) {
            return this._kill(t, e), this
        }, s._uncache = function(t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
        }, s._swapSelfInParams = function(t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
        }, s._callback = function(t) {
            var e = this.vars;
            e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || _)
        }, s.eventCallback = function(t, e, i, n) {
            if ("on" === (t || "").substr(0, 2)) {
                var r = this.vars;
                if (1 === arguments.length) return r[t];
                null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
        }, s.delay = function(t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, s.duration = function(t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, s.totalDuration = function(t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, s.time = function(t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, s.totalTime = function(t, e, i) {
            if (a || o.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
                if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var n = this._totalDuration,
                        r = this._timeline;
                    if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                        for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                }
                this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), D.length && U())
            }
            return this
        }, s.progress = s.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
        }, s.startTime = function(t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, s.endTime = function(t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, s.timeScale = function(t) {
            if (!arguments.length) return this._timeScale;
            if (t = t || u, this._timeline && this._timeline.smoothChildTiming) {
                var e = this._pauseTime,
                    i = e || 0 === e ? e : this._timeline.totalTime();
                this._startTime = i - (i - this._startTime) * this._timeScale / t
            }
            return this._timeScale = t, this._uncache(!1)
        }, s.reversed = function(t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, s.paused = function(t) {
            if (!arguments.length) return this._paused;
            var e, i, n = this._timeline;
            return t != this._paused && n && (a || t || o.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this
        };
        var A = y("core.SimpleTimeline", function(t) {
            O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        s = A.prototype = new O, s.constructor = A, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function(t, e) {
            var i, n;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                for (n = t._startTime; i && i._startTime > n;) i = i._prev;
            return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
        }, s._remove = function(t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, s.render = function(t, e, i) {
            var n, r = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
        }, s.rawTime = function() {
            return a || o.wake(), this._totalTime
        };
        var z = y("TweenLite", function(e, i, n) {
                if (O.call(this, i, n), this.render = z.prototype.render, null == e) throw "Cannot tween a null target.";
                this.target = e = "string" != typeof e ? e : z.selector(e) || e;
                var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                    l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? q[z.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l], (a || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                    for (this._targets = o = p(e), this._propLookup = [], this._siblings = [], r = 0; o.length > r; r++) s = o[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(p(s))) : (this._siblings[r] = Y(s, this, !1), 1 === l && this._siblings[r].length > 1 && H(s, this, null, 1, this._siblings[r])) : (s = o[r--] = z.selector(s), "string" == typeof s && o.splice(r + 1, 1)) : o.splice(r--, 1);
                else this._propLookup = {}, this._siblings = Y(e, this, !1), 1 === l && this._siblings.length > 1 && H(e, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -u, this.render(-this._delay))
            }, !0),
            R = function(e) {
                return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
            },
            I = function(t, e) {
                var i, n = {};
                for (i in t) $[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!N[i] || N[i] && N[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                t.css = n
            };
        s = z.prototype = new O, s.constructor = z, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, z.version = "1.17.0", z.defaultEase = s._ease = new x(null, null, 1, 1), z.defaultOverwrite = "auto", z.ticker = o, z.autoSleep = 120, z.lagSmoothing = function(t, e) {
            o.lagSmoothing(t, e)
        }, z.selector = t.$ || t.jQuery || function(e) {
            var i = t.$ || t.jQuery;
            return i ? (z.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
        };
        var D = [],
            L = {},
            M = z._internals = {
                isArray: f,
                isSelector: R,
                lazyTweens: D
            },
            N = z._plugins = {},
            F = M.tweenLookup = {},
            j = 0,
            $ = M.reservedProps = {
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
                callbackScope: 1
            },
            q = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                "true": 1,
                "false": 0
            },
            W = O._rootFramesTimeline = new A,
            B = O._rootTimeline = new A,
            X = 30,
            U = M.lazyRender = function() {
                var t, e = D.length;
                for (L = {}; --e > -1;) t = D[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                D.length = 0
            };
        B._startTime = o.time, W._startTime = o.frame, B._active = W._active = !0, setTimeout(U, 1), O._updateRoot = z.render = function() {
            var t, e, i;
            if (D.length && U(), B.render((o.time - B._startTime) * B._timeScale, !1, !1), W.render((o.frame - W._startTime) * W._timeScale, !1, !1), D.length && U(), o.frame >= X) {
                X = o.frame + (parseInt(z.autoSleep, 10) || 120);
                for (i in F) {
                    for (e = F[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete F[i]
                }
                if (i = B._first, (!i || i._paused) && z.autoSleep && !W._first && 1 === o._listeners.tick.length) {
                    for (; i && i._paused;) i = i._next;
                    i || o.sleep()
                }
            }
        }, o.addEventListener("tick", O._updateRoot);
        var Y = function(t, e, i) {
                var n, r, s = t._gsTweenID;
                if (F[s || (t._gsTweenID = s = "t" + j++)] || (F[s] = {
                        target: t,
                        tweens: []
                    }), e && (n = F[s].tweens, n[r = n.length] = e, i))
                    for (; --r > -1;) n[r] === e && n.splice(r, 1);
                return F[s].tweens
            },
            V = function(t, e, i, n) {
                var r, s, o = t.vars.onOverwrite;
                return o && (r = o(t, e, i, n)), o = z.onOverwrite, o && (s = o(t, e, i, n)), r !== !1 && s !== !1
            },
            H = function(t, e, i, n, r) {
                var s, o, a, l;
                if (1 === n || n >= 4) {
                    for (l = r.length, s = 0; l > s; s++)
                        if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                        else if (5 === n) break;
                    return o
                }
                var h, p = e._startTime + u,
                    c = [],
                    f = 0,
                    d = 0 === e._duration;
                for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || G(e, 0, d), 0 === G(a, h, d) && (c[f++] = a)) : p >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > p && ((d || !a._initted) && 2e-10 >= p - a._startTime || (c[f++] = a)));
                for (s = f; --s > -1;)
                    if (a = c[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                        if (2 !== n && !V(a, e)) continue;
                        a._enabled(!1, !1) && (o = !0)
                    }
                return o
            },
            G = function(t, e, i) {
                for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                    if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                    n = n._timeline
                }
                return s /= r, s > e ? s - e : i && s === e || !t._initted && 2 * u > s - e ? u : (s += t.totalDuration() / t._timeScale / r) > e + u ? 0 : s - e - u
            };
        s._init = function() {
            var t, e, i, n, r, s = this.vars,
                o = this._overwrittenProps,
                a = this._duration,
                l = !!s.immediateRender,
                h = s.ease;
            if (s.startAt) {
                this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                for (n in s.startAt) r[n] = s.startAt[n];
                if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = z.to(this.target, 0, r), l)
                    if (this._time > 0) this._startAt = null;
                    else if (0 !== a) return
            } else if (s.runBackwards && 0 !== a)
                if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                else {
                    0 !== this._time && (l = !1), i = {};
                    for (n in s) $[n] && "autoCSS" !== n || (i[n] = s[n]);
                    if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && s.lazy !== !1, i.immediateRender = l, this._startAt = z.to(this.target, 0, i), l) {
                        if (0 === this._time) return
                    } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                }
            if (this._ease = h = h ? h instanceof x ? h : "function" == typeof h ? new x(h, s.easeParams) : b[h] || z.defaultEase : z.defaultEase, s.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, o);
            if (e && z._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = s.onUpdate, this._initted = !0
        }, s._initProps = function(e, i, n, r) {
            var s, o, a, l, h, u;
            if (null == e) return !1;
            L[e._gsTweenID] && U(), this.vars.css || e.style && e !== t && e.nodeType && N.css && this.vars.autoCSS !== !1 && I(this.vars, e);
            for (s in this.vars) {
                if (u = this.vars[s], $[s]) u && (u instanceof Array || u.push && f(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[s] = u = this._swapSelfInParams(u, this));
                else if (N[s] && (l = new N[s])._onInitTween(e, this.vars[s], this)) {
                    for (this._firstPT = h = {
                            _next: this._firstPT,
                            t: l,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: !0,
                            n: s,
                            pg: !0,
                            pr: l._priority
                        }, o = l._overwriteProps.length; --o > -1;) i[l._overwriteProps[o]] = this._firstPT;
                    (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                } else this._firstPT = i[s] = h = {
                    _next: this._firstPT,
                    t: e,
                    p: s,
                    f: "function" == typeof e[s],
                    n: s,
                    pg: !1,
                    pr: 0
                }, h.s = h.f ? e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(e[s]), h.c = "string" == typeof u && "=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * Number(u.substr(2)) : Number(u) - h.s || 0;
                h && h._next && (h._next._prev = h)
            }
            return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && H(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), a)
        }, s.render = function(t, e, i) {
            var n, r, s, o, a = this._time,
                l = this._duration,
                h = this._rawPrevTime;
            if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === u && "isPause" !== this.data) && h !== t && (i = !0, h > u && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t : u);
            else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== u || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t : u)), this._initted || (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
                var p = t / l,
                    c = this._easeType,
                    f = this._easePower;
                (1 === c || 3 === c && p >= .5) && (p = 1 - p), 3 === c && (p *= 2), 1 === f ? p *= p : 2 === f ? p *= p * p : 3 === f ? p *= p * p * p : 4 === f && (p *= p * p * p * p), this.ratio = 1 === c ? 1 - p : 2 === c ? p : .5 > t / l ? p / 2 : 1 - p / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== a || i) {
                if (!this._initted) {
                    if (this._init(), !this._initted || this._gc) return;
                    if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, D.push(this), void(this._lazy = [t, e]);
                    this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === u && o !== u && (this._rawPrevTime = 0))
            }
        }, s._kill = function(t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : z.selector(e) || e;
            var n, r, s, o, a, l, h, u, p, c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((f(e) || R(e)) && "number" != typeof e[0])
                for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
            else {
                if (this._targets) {
                    for (n = this._targets.length; --n > -1;)
                        if (e === this._targets[n]) {
                            a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                            break
                        }
                } else {
                    if (e !== this.target) return !1;
                    a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (a) {
                    if (h = t || a, u = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (z.onOverwrite || this.vars.onOverwrite)) {
                        for (s in h) a[s] && (p || (p = []), p.push(s));
                        if ((p || !t) && !V(this, i, e, p)) return !1
                    }
                    for (s in h)(o = a[s]) && (c && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), u && (r[s] = 1);
                    !this._firstPT && this._initted && this._enabled(!1, !1)
                }
            }
            return l
        }, s.invalidate = function() {
            return this._notifyPluginsOfEnabled && z._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -u, this.render(-this._delay)), this
        }, s._enabled = function(t, e) {
            if (a || o.wake(), t && this._gc) {
                var i, n = this._targets;
                if (n)
                    for (i = n.length; --i > -1;) this._siblings[i] = Y(n[i], this, !0);
                else this._siblings = Y(this.target, this, !0)
            }
            return O.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? z._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
        }, z.to = function(t, e, i) {
            return new z(t, e, i)
        }, z.from = function(t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new z(t, e, i)
        }, z.fromTo = function(t, e, i, n) {
            return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new z(t, e, n)
        }, z.delayedCall = function(t, e, i, n, r) {
            return new z(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: n,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: r,
                overwrite: 0
            })
        }, z.set = function(t, e) {
            return new z(t, 0, e)
        }, z.getTweensOf = function(t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t : z.selector(t) || t;
            var i, n, r, s;
            if ((f(t) || R(t)) && "number" != typeof t[0]) {
                for (i = t.length, n = []; --i > -1;) n = n.concat(z.getTweensOf(t[i], e));
                for (i = n.length; --i > -1;)
                    for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
            } else
                for (n = Y(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
            return n
        }, z.killTweensOf = z.killDelayedCallsTo = function(t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var n = z.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
        };
        var Q = y("plugins.TweenPlugin", function(t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Q.prototype
        }, !0);
        if (s = Q.prototype, Q.version = "1.10.1", Q.API = 2, s._firstPT = null, s._addTween = function(t, e, i, n, r, s) {
                var o, a;
                return null != n && (o = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - Number(i) : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {
                    _next: this._firstPT,
                    t: t,
                    p: e,
                    s: i,
                    c: o,
                    f: "function" == typeof t[e],
                    n: r || e,
                    r: s
                }, a._next && (a._next._prev = a), a) : void 0
            }, s.setRatio = function(t) {
                for (var e, i = this._firstPT, n = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
            }, s._kill = function(t) {
                var e, i = this._overwriteProps,
                    n = this._firstPT;
                if (null != t[this._propName]) this._overwriteProps = [];
                else
                    for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                return !1
            }, s._roundProps = function(t, e) {
                for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
            }, z._onPluginEvent = function(t, e) {
                var i, n, r, s, o, a = e._firstPT;
                if ("_onInitAllProps" === t) {
                    for (; a;) {
                        for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                        (a._prev = n ? n._prev : s) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : s = a, a = o
                    }
                    a = e._firstPT = r
                }
                for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                return i
            }, Q.activate = function(t) {
                for (var e = t.length; --e > -1;) t[e].API === Q.API && (N[(new t[e])._propName] = t[e]);
                return !0
            }, g.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                var e, i = t.propName,
                    n = t.priority || 0,
                    r = t.overwriteProps,
                    s = {
                        init: "_onInitTween",
                        set: "setRatio",
                        kill: "_kill",
                        round: "_roundProps",
                        initAll: "_onInitAllProps"
                    },
                    o = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                        Q.call(this, i, n), this._overwriteProps = r || []
                    }, t.global === !0),
                    a = o.prototype = new Q(i);
                a.constructor = o, o.API = t.API;
                for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                return o.version = t.version, Q.activate([o]), o
            }, n = t._gsQueue) {
            for (r = 0; n.length > r; r++) n[r]();
            for (s in d) d[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
        }
        a = !1
    }
}("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite"),
function(t) {
    "use strict";
    var e, i, n, r = t.fn.animate,
        s = t.fn.stop,
        o = !0,
        a = function(t) {
            var e, i = {};
            for (e in t) i[e] = t[e];
            return i
        },
        l = {
            overwrite: 1,
            delay: 1,
            useFrames: 1,
            runBackwards: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            autoCSS: 1
        },
        h = ",scrollTop,scrollLeft,show,hide,toggle,",
        u = h,
        p = function(t, e) {
            for (var i in l) l[i] && void 0 !== t[i] && (e[i] = t[i])
        },
        c = function(t) {
            return function(e) {
                return t.getRatio(e)
            }
        },
        f = {},
        d = function() {
            var r, s, o, a = window.GreenSockGlobals || window;
            if (e = a.TweenMax || a.TweenLite, e && (r = (e.version + ".0.0").split("."), s = !(Number(r[0]) > 0 && Number(r[1]) > 7), a = a.com.greensock, i = a.plugins.CSSPlugin, f = a.easing.Ease.map || {}), !e || !i || s) return e = null, void(!n && window.console && (window.console.log("The jquery.gsap.js plugin requires the TweenMax (or at least TweenLite and CSSPlugin) JavaScript file(s)." + (s ? " Version " + r.join(".") + " is too old." : "")), n = !0));
            if (t.easing) {
                for (o in f) t.easing[o] = c(f[o]);
                d = !1
            }
        };
    t.fn.animate = function(n, s, l, h) {
        if (n = n || {}, d && (d(), !e || !i)) return r.call(this, n, s, l, h);
        if (!o || n.skipGSAP === !0 || "object" == typeof s && "function" == typeof s.step) return r.call(this, n, s, l, h);
        var c, m, g, y, v = t.speed(s, l, h),
            _ = {
                ease: f[v.easing] || (v.easing === !1 ? f.linear : f.swing)
            },
            x = this,
            b = "object" == typeof s ? s.specialEasing : null;
        for (m in n) {
            if (c = n[m], c instanceof Array && f[c[1]] && (b = b || {}, b[m] = c[1], c = c[0]), "show" === c || "hide" === c || "toggle" === c || -1 !== u.indexOf(m) && -1 !== u.indexOf("," + m + ",")) return r.call(this, n, s, l, h);
            _[-1 === m.indexOf("-") ? m : t.camelCase(m)] = c
        }
        if (b) {
            _ = a(_), y = [];
            for (m in b) c = y[y.length] = {}, p(_, c), c.ease = f[b[m]] || _.ease, -1 !== m.indexOf("-") && (m = t.camelCase(m)), c[m] = _[m], delete _[m];
            0 === y.length && (y = null)
        }
        return g = function(i) {
            var n, r = a(_);
            if (y)
                for (n = y.length; --n > -1;) e.to(this, t.fx.off ? 0 : v.duration / 1e3, y[n]);
            r.onComplete = function() {
                i ? i() : v.old && t(this).each(v.old)
            }, e.to(this, t.fx.off ? 0 : v.duration / 1e3, r)
        }, v.queue !== !1 ? (x.queue(v.queue, g), "function" == typeof v.old && x.queue(v.queue, function(t) {
            v.old.call(this), t()
        })) : g.call(x), x
    }, t.fn.stop = function(t, i) {
        if (s.call(this, t, i), e) {
            if (i)
                for (var n, r = e.getTweensOf(this), o = r.length; --o > -1;) n = r[o].totalTime() / r[o].totalDuration(), n > 0 && 1 > n && r[o].seek(r[o].totalDuration());
            e.killTweensOf(this)
        }
        return this
    }, t.gsap = {
        enabled: function(t) {
            o = t
        },
        version: "0.1.11",
        legacyProps: function(t) {
            u = h + t + ","
        }
    }
}(jQuery);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    },
                    s = 1e-10,
                    o = i._internals,
                    a = o.isSelector,
                    l = o.isArray,
                    h = r.prototype = i.to({}, .1, {}),
                    u = [];
                r.version = "1.17.0", h.constructor = r, h.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, h.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, h.updateTo = function(t, e) {
                    var n, r = this.ratio,
                        s = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted || s)
                        if (e) this._initted = !1, s && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var o = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                    } else if (this._time > 0 || s) {
                        this._initted = !1, this._init();
                        for (var a, l = 1 / (1 - r), h = this._firstPT; h;) a = h.s + h.c, h.c *= l, h.s = a - h.c, h = h._next
                    }
                    return this
                }, h.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var n, r, a, l, h, u, p, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._time,
                        m = this._totalTime,
                        g = this._cycle,
                        y = this._duration,
                        v = this._rawPrevTime;
                    if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > v || v === s) && v !== t && (i = !0, v > s && (r = "onReverseComplete")), this._rawPrevTime = c = !e || t || v === t ? t : s)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === y && v > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = c = !e || t || v === t ? t : s)), this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 !== (1 & this._cycle) && (this._time = y - this._time), this._time > y ? this._time = y : 0 > this._time && (this._time = 0)), this._easeType ? (h = this._time / y, u = this._easeType, p = this._easePower, (1 === u || 3 === u && h >= .5) && (h = 1 - h), 3 === u && (h *= 2), 1 === p ? h *= h : 2 === p ? h *= h * h : 3 === p ? h *= h * h * h : 4 === p && (h *= h * h * h * h), this.ratio = 1 === u ? 1 - h : 2 === u ? h : .5 > this._time / y ? h / 2 : 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / y)), d === this._time && !i && g === this._cycle) return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = d, this._totalTime = m, this._rawPrevTime = v, this._cycle = g, o.lazyTweens.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / y) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== d && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === y) && (e || this._callback("onStart"))), a = this._firstPT; a;) a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== m || n) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === y && this._rawPrevTime === s && c !== s && (this._rawPrevTime = 0))
                }, r.to = function(t, e, i) {
                    return new r(t, e, i)
                }, r.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new r(t, e, n)
                }, r.staggerTo = r.allTo = function(t, e, s, o, h, p, c) {
                    o = o || 0;
                    var f, d, m, g, y = s.delay || 0,
                        v = [],
                        _ = function() {
                            s.onComplete && s.onComplete.apply(s.onCompleteScope || this, arguments), h.apply(c || s.callbackScope || this, p || u)
                        };
                    for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], 0 > o && (t = n(t), t.reverse(), o *= -1), f = t.length - 1, m = 0; f >= m; m++) {
                        d = {};
                        for (g in s) d[g] = s[g];
                        d.delay = y, m === f && h && (d.onComplete = _), v[m] = new r(t[m], e, d), y += o
                    }
                    return v
                }, r.staggerFrom = r.allFrom = function(t, e, i, n, s, o, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, n, s, o, a)
                }, r.staggerFromTo = r.allFromTo = function(t, e, i, n, s, o, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, n, s, o, a, l)
                }, r.delayedCall = function(t, e, i, n, s) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: s,
                        overwrite: 0
                    })
                }, r.set = function(t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var p = function(t, e) {
                        for (var n = [], r = 0, s = t._first; s;) s instanceof i ? n[r++] = s : (e && (n[r++] = s), n = n.concat(p(s, e)), r = n.length), s = s._next;
                        return n
                    },
                    c = r.getAllTweens = function(e) {
                        return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e))
                    };
                r.killAll = function(t, i, n, r) {
                    null == i && (i = !0), null == n && (n = !0);
                    var s, o, a, l = c(0 != r),
                        h = l.length,
                        u = i && n && r;
                    for (a = 0; h > a; a++) o = l[a], (u || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var s, h, u, p, c, f = o.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), l(t))
                            for (p = t.length; --p > -1;) r.killChildTweensOf(t[p], e);
                        else {
                            s = [];
                            for (u in f)
                                for (h = f[u].target.parentNode; h;) h === t && (s = s.concat(f[u].tweens)), h = h.parentNode;
                            for (c = s.length, p = 0; c > p; p++) e && s[p].totalTime(s[p].totalDuration()), s[p]._enabled(!1, !1)
                        }
                    }
                };
                var f = function(t, i, n, r) {
                    i = i !== !1, n = n !== !1, r = r !== !1;
                    for (var s, o, a = c(r), l = i && n && r, h = a.length; --h > -1;) o = a[h], (l || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t)
                };
                return r.pauseAll = function(t, e, i) {
                    f(!0, t, e, i)
                }, r.resumeAll = function(t, e, i) {
                    f(!1, t, e, i)
                }, r.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || s, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, h.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, h.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, h.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, h.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, h.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, h.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, r
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, r = this.vars;
                        for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    s = i._internals,
                    o = n._internals = {},
                    a = s.isSelector,
                    l = s.isArray,
                    h = s.lazyTweens,
                    u = s.lazyRender,
                    p = [],
                    c = _gsScope._gsDefine.globals,
                    f = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    d = o.pauseCallback = function(t, e, i, n) {
                        var s, o = t._timeline,
                            a = o._totalTime,
                            l = t._startTime,
                            h = 0 > t._rawPrevTime || 0 === t._rawPrevTime && o._reversed,
                            u = h ? 0 : r,
                            c = h ? r : 0;
                        if (e || !this._forcingPlayhead) {
                            for (o.pause(l), s = t._prev; s && s._startTime === l;) s._rawPrevTime = c, s = s._prev;
                            for (s = t._next; s && s._startTime === l;) s._rawPrevTime = u, s = s._next;
                            e && e.apply(n || o.vars.callbackScope || o, i || p), (this._forcingPlayhead || !o._paused) && o.seek(a)
                        }
                    },
                    m = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    g = n.prototype = new e;
                return n.version = "1.17.0", g.constructor = n, g.kill()._gc = g._forcingPlayhead = !1, g.to = function(t, e, n, r) {
                    var s = n.repeat && c.TweenMax || i;
                    return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
                }, g.from = function(t, e, n, r) {
                    return this.add((n.repeat && c.TweenMax || i).from(t, e, n), r)
                }, g.fromTo = function(t, e, n, r, s) {
                    var o = r.repeat && c.TweenMax || i;
                    return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s)
                }, g.staggerTo = function(t, e, r, s, o, l, h, u) {
                    var p, c = new n({
                        onComplete: l,
                        onCompleteParams: h,
                        callbackScope: u,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = m(t)), s = s || 0, 0 > s && (t = m(t), t.reverse(), s *= -1), p = 0; t.length > p; p++) r.startAt && (r.startAt = f(r.startAt)), c.to(t[p], e, f(r), p * s);
                    return this.add(c, o)
                }, g.staggerFrom = function(t, e, i, n, r, s, o, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
                }, g.staggerFromTo = function(t, e, i, n, r, s, o, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
                }, g.call = function(t, e, n, r) {
                    return this.add(i.delayedCall(0, t, e, n), r)
                }, g.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, s, o = new n(t),
                        a = o._timeline;
                    for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r;) s = r._next, e && r instanceof i && r.target === r.vars.onComplete || o.add(r, r._startTime - r._delay), r = s;
                    return a.add(o, 0), o
                }, g.add = function(r, s, o, a) {
                    var h, u, p, c, f, d;
                    if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && l(r)) {
                            for (o = o || "normal", a = a || 0, h = s, u = r.length, p = 0; u > p; p++) l(c = r[p]) && (c = new n({
                                tweens: c
                            })), this.add(c, h), "string" != typeof c && "function" != typeof c && ("sequence" === o ? h = c._startTime + c.totalDuration() / c._timeScale : "start" === o && (c._startTime -= c.delay())), h += a;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, s);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (f = this, d = f.rawTime() > r._startTime; f._timeline;) d && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                    return this
                }, g.remove = function(e) {
                    if (e instanceof t) return this._remove(e, !1);
                    if (e instanceof Array || e && e.push && l(e)) {
                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, g._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var n = this._last;
                    return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, g.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, g.insert = g.insertMultiple = function(t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, g.appendMultiple = function(t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, g.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, g.addPause = function(t, e, n, r) {
                    var s = i.delayedCall(0, d, ["{self}", e, n, r], this);
                    return s.data = "isPause", this.add(s, t)
                }, g.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, g.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, g._parseTimeOrLabel = function(e, i, n, r) {
                    var s;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && l(r)))
                        for (s = r.length; --s > -1;) r[s] instanceof t && r[s].timeline === this && this.remove(r[s]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (s = e.indexOf("="), -1 === s) return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1)), e = s > 1 ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n) : this.duration()
                    }
                    return Number(e) + i
                }, g.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, g.stop = function() {
                    return this.paused(!0)
                }, g.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, g.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, g.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, o, a, l, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        c = this._time,
                        f = this._startTime,
                        d = this._timeScale,
                        m = this._paused;
                    if (t >= p) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0, this._rawPrevTime > r && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = p + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            t = 0, this._initted || (l = !0)
                        } else this._totalTime = this._time = this._rawPrevTime = t;
                    if (this._time !== c && this._first || i || l) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._time && (e || this._callback("onStart")), this._time >= c)
                            for (n = this._first; n && (o = n._next, !this._paused || m);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                        else
                            for (n = this._last; n && (o = n._prev, !this._paused || m);)(n._active || c >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = o;
                        this._onUpdate && (e || (h.length && u(), this._callback("onUpdate"))), a && (this._gc || (f === this._startTime || d !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (s && (h.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
                    }
                }, g._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, g.getChildren = function(t, e, n, r) {
                    r = r || -9999999999;
                    for (var s = [], o = this._first, a = 0; o;) r > o._startTime || (o instanceof i ? e !== !1 && (s[a++] = o) : (n !== !1 && (s[a++] = o), t !== !1 && (s = s.concat(o.getChildren(!0, e, n)), a = s.length))), o = o._next;
                    return s
                }, g.getTweensOf = function(t, e) {
                    var n, r, s = this._gc,
                        o = [],
                        a = 0;
                    for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r]);
                    return s && this._enabled(!1, !0), o
                }, g.recent = function() {
                    return this._recent
                }, g._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, g.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (n in s) s[n] >= i && (s[n] += t);
                    return this._uncache(!0)
                }, g._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                    return r
                }, g.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, g.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, g._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, g.totalTime = function() {
                    this._forcingPlayhead = !0;
                    var e = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, e
                }, g.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, g.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, 0 > r._startTime && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, g.paused = function(e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, g.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, g.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var n = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    s = e._internals,
                    o = s.lazyTweens,
                    a = s.lazyRender,
                    l = new i(null, null, 1, 0),
                    h = n.prototype = new t;
                return h.constructor = n, h.kill()._gc = !1, n.version = "1.17.0", h.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, h.addCallback = function(t, i, n, r) {
                    return this.add(e.delayedCall(0, t, n, r), i)
                }, h.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                    return this
                }, h.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, h.tweenTo = function(t, i) {
                    i = i || {};
                    var n, r, s, o = {
                        ease: l,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) o[r] = i[r];
                    return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, s = new e(this, n, o), o.onStart = function() {
                        s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && s._callback("onStart")
                    }, s
                }, h.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, h.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, s, l, h, u, p, c = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._duration,
                        d = this._time,
                        m = this._totalTime,
                        g = this._startTime,
                        y = this._timeScale,
                        v = this._rawPrevTime,
                        _ = this._paused,
                        x = this._cycle;
                    if (t >= c) this._locked || (this._totalTime = c, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, h = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 === t || 0 > v || v === r) && v !== t && this._first && (u = !0, v > r && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== d || 0 === f && v !== r && (v > 0 || 0 > t && v >= 0) && !this._locked) && (h = "onReverseComplete", s = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = s = !0, h = "onReverseComplete") : v >= 0 && this._first && (u = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : r, 0 === t && s)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
                            t = 0, this._initted || (u = !0)
                        } else 0 === f && 0 > v && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (p = f + this._repeatDelay, this._cycle = this._totalTime / p >> 0, 0 !== this._cycle && this._cycle === this._totalTime / p && this._cycle--, this._time = this._totalTime - this._cycle * p, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time));
                    if (this._cycle !== x && !this._locked) {
                        var b = this._yoyo && 0 !== (1 & x),
                            w = b === (this._yoyo && 0 !== (1 & this._cycle)),
                            T = this._totalTime,
                            S = this._cycle,
                            P = this._rawPrevTime,
                            E = this._time;
                        if (this._totalTime = x * f, x > this._cycle ? b = !b : this._totalTime += f, this._time = d, this._rawPrevTime = 0 === f ? v - 1e-4 : v, this._cycle = x, this._locked = !0, d = b ? 0 : f, this.render(d, e, 0 === f), e || this._gc || this.vars.onRepeat && this._callback("onRepeat"), w && (d = b ? f + 1e-4 : -1e-4, this.render(d, !0, !1)), this._locked = !1, this._paused && !_) return;
                        this._time = E, this._totalTime = T, this._cycle = S, this._rawPrevTime = P
                    }
                    if (!(this._time !== d && this._first || i || u)) return void(m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0), 0 === m && this.vars.onStart && 0 !== this._totalTime && (e || this._callback("onStart")), this._time >= d)
                        for (n = this._first; n && (l = n._next, !this._paused || _);)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                    else
                        for (n = this._last; n && (l = n._prev, !this._paused || _);)(n._active || d >= n._startTime && !n._paused && !n._gc) && (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = l;
                    this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), h && (this._locked || this._gc || (g === this._startTime || y !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (s && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h)))
                }, h.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, r, s = [],
                        o = this.getChildren(t, e, i),
                        a = 0,
                        l = o.length;
                    for (n = 0; l > n; n++) r = o[n], r.isActive() && (s[a++] = r);
                    return s
                }, h.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, h.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, h.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, h.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, h.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, h.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, h.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, h.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, h.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    n = [],
                    r = {},
                    s = _gsScope._gsDefine.globals,
                    o = function(t, e, i, n) {
                        this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    l = function(t, e, i, n) {
                        var r = {
                                a: t
                            },
                            s = {},
                            o = {},
                            a = {
                                c: n
                            },
                            l = (t + e) / 2,
                            h = (e + i) / 2,
                            u = (i + n) / 2,
                            p = (l + h) / 2,
                            c = (h + u) / 2,
                            f = (c - p) / 8;
                        return r.b = l + (t - l) / 4, s.b = p + f, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (p + c) / 2, o.b = c - f, a.b = u + (n - u) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
                    },
                    h = function(t, r, s, o, a) {
                        var h, u, p, c, f, d, m, g, y, v, _, x, b, w = t.length - 1,
                            T = 0,
                            S = t[0].a;
                        for (h = 0; w > h; h++) f = t[T], u = f.a, p = f.d, c = t[T + 1].d, a ? (_ = e[h], x = i[h], b = .25 * (x + _) * r / (o ? .5 : n[h] || .5), d = p - (p - u) * (o ? .5 * r : 0 !== _ ? b / _ : 0), m = p + (c - p) * (o ? .5 * r : 0 !== x ? b / x : 0), g = p - (d + ((m - d) * (3 * _ / (_ + x) + .5) / 4 || 0))) : (d = p - .5 * (p - u) * r, m = p + .5 * (c - p) * r, g = p - (d + m) / 2), d += g, m += g, f.c = y = d, f.b = 0 !== h ? S : S = f.a + .6 * (f.c - f.a), f.da = p - u, f.ca = y - u, f.ba = S - u, s ? (v = l(u, S, y, p), t.splice(T, 1, v[0], v[1], v[2], v[3]), T += 4) : T++, S = m;
                        f = t[T], f.b = S, f.c = S + .4 * (f.d - S), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = S - f.a, s && (v = l(f.a, S, f.c, f.d), t.splice(T, 1, v[0], v[1], v[2], v[3]))
                    },
                    u = function(t, n, r, s) {
                        var a, l, h, u, p, c, f = [];
                        if (s)
                            for (t = [s].concat(t), l = t.length; --l > -1;) "string" == typeof(c = t[l][n]) && "=" === c.charAt(1) && (t[l][n] = s[n] + Number(c.charAt(0) + c.substr(2)));
                        if (a = t.length - 2, 0 > a) return f[0] = new o(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n]), f;
                        for (l = 0; a > l; l++) h = t[l][n], u = t[l + 1][n], f[l] = new o(h, 0, 0, u), r && (p = t[l + 2][n], e[l] = (e[l] || 0) + (u - h) * (u - h), i[l] = (i[l] || 0) + (p - u) * (p - u));
                        return f[l] = new o(t[l][n], 0, 0, t[l + 1][n]), f
                    },
                    p = function(t, s, o, l, p, c) {
                        var f, d, m, g, y, v, _, x, b = {},
                            w = [],
                            T = c || t[0];
                        p = "string" == typeof p ? "," + p + "," : a, null == s && (s = 1);
                        for (d in t[0]) w.push(d);
                        if (t.length > 1) {
                            for (x = t[t.length - 1], _ = !0, f = w.length; --f > -1;)
                                if (d = w[f], Math.abs(T[d] - x[d]) > .05) {
                                    _ = !1;
                                    break
                                }
                            _ && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, f = w.length; --f > -1;) d = w[f], r[d] = -1 !== p.indexOf("," + d + ","), b[d] = u(t, d, r[d], c);
                        for (f = e.length; --f > -1;) e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]);
                        if (!l) {
                            for (f = w.length; --f > -1;)
                                if (r[d])
                                    for (m = b[w[f]], v = m.length - 1, g = 0; v > g; g++) y = m[g + 1].da / i[g] + m[g].da / e[g], n[g] = (n[g] || 0) + y * y;
                            for (f = n.length; --f > -1;) n[f] = Math.sqrt(n[f])
                        }
                        for (f = w.length, g = o ? 4 : 1; --f > -1;) d = w[f], m = b[d], h(m, s, o, l, r[d]), _ && (m.splice(0, g), m.splice(m.length - g, g));
                        return b
                    },
                    c = function(t, e, i) {
                        e = e || "soft";
                        var n, r, s, a, l, h, u, p, c, f, d, m = {},
                            g = "cubic" === e ? 3 : 2,
                            y = "soft" === e,
                            v = [];
                        if (y && i && (t = [i].concat(t)), null == t || g + 1 > t.length) throw "invalid Bezier data";
                        for (c in t[0]) v.push(c);
                        for (h = v.length; --h > -1;) {
                            for (c = v[h], m[c] = l = [], f = 0, p = t.length, u = 0; p > u; u++) n = null == i ? t[u][c] : "string" == typeof(d = t[u][c]) && "=" === d.charAt(1) ? i[c] + Number(d.charAt(0) + d.substr(2)) : Number(d), y && u > 1 && p - 1 > u && (l[f++] = (n + l[f - 2]) / 2), l[f++] = n;
                            for (p = f - g + 1, f = 0, u = 0; p > u; u += g) n = l[u], r = l[u + 1], s = l[u + 2], a = 2 === g ? 0 : l[u + 3], l[f++] = d = 3 === g ? new o(n, r, s, a) : new o(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                            l.length = f
                        }
                        return m
                    },
                    f = function(t, e, i) {
                        for (var n, r, s, o, a, l, h, u, p, c, f, d = 1 / i, m = t.length; --m > -1;)
                            for (c = t[m], s = c.a, o = c.d - s, a = c.c - s, l = c.b - s, n = r = 0, u = 1; i >= u; u++) h = d * u, p = 1 - h, n = r - (r = (h * h * o + 3 * p * (h * a + p * l)) * h), f = m * i + u - 1, e[f] = (e[f] || 0) + n * n
                    },
                    d = function(t, e) {
                        e = e >> 0 || 6;
                        var i, n, r, s, o = [],
                            a = [],
                            l = 0,
                            h = 0,
                            u = e - 1,
                            p = [],
                            c = [];
                        for (i in t) f(t[i], o, e);
                        for (r = o.length, n = 0; r > n; n++) l += Math.sqrt(o[n]), s = n % e, c[s] = l, s === u && (h += l, s = n / e >> 0, p[s] = c, a[s] = h, l = 0, c = []);
                        return {
                            length: h,
                            lengths: a,
                            segments: p
                        }
                    },
                    m = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.4",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, r, s, o, a, l = e.values || [],
                                h = {},
                                u = l[0],
                                f = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = f ? f instanceof Array ? f : [
                                ["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
                            ] : null;
                            for (n in u) this._props.push(n);
                            for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], h[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || h[n] !== l[0][n] && (a = h);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? p(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : c(l, e.type, h), this._segCount = this._beziers[n].length, this._timeRes) {
                                var m = d(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (f = this._autoRotate)
                                for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), s = f.length; --s > -1;) {
                                    for (o = 0; 3 > o; o++) n = f[s][o], this._func[n] = "function" == typeof t[n] ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)] : !1;

                                    n = f[s][2], this._initialRotations[s] = this._func[n] ? this._func[n].call(this._target) : this._target[n]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, n, r, s, o, a, l, h, u, p, c = this._segCount,
                                f = this._func,
                                d = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (u = this._lengths, p = this._curSeg, e *= this._length, r = this._li, e > this._l2 && c - 1 > r) {
                                    for (h = c - 1; h > r && e >= (this._l2 = u[++r]););
                                    this._l1 = u[r - 1], this._li = r, this._curSeg = p = this._segments[r], this._s2 = p[this._s1 = this._si = 0]
                                } else if (this._l1 > e && r > 0) {
                                    for (; r > 0 && (this._l1 = u[--r]) >= e;);
                                    0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = u[r], this._li = r, this._curSeg = p = this._segments[r], this._s1 = p[(this._si = p.length - 1) - 1] || 0, this._s2 = p[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && p.length - 1 > r) {
                                    for (h = p.length - 1; h > r && e >= (this._s2 = p[++r]););
                                    this._s1 = p[r - 1], this._si = r
                                } else if (this._s1 > e && r > 0) {
                                    for (; r > 0 && (this._s1 = p[--r]) >= e;);
                                    0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = p[r], this._si = r
                                }
                                a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? c - 1 : c * e >> 0, a = (e - i * (1 / c)) * c;
                            for (n = 1 - a, r = this._props.length; --r > -1;) s = this._props[r], o = this._beziers[s][i], l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._round[s] && (l = Math.round(l)), f[s] ? d[s](l) : d[s] = l;
                            if (this._autoRotate) {
                                var g, y, v, _, x, b, w, T = this._autoRotate;
                                for (r = T.length; --r > -1;) s = T[r][2], b = T[r][3] || 0, w = T[r][4] === !0 ? 1 : t, o = this._beziers[T[r][0]], g = this._beziers[T[r][1]], o && g && (o = o[i], g = g[i], y = o.a + (o.b - o.a) * a, _ = o.b + (o.c - o.b) * a, y += (_ - y) * a, _ += (o.c + (o.d - o.c) * a - _) * a, v = g.a + (g.b - g.a) * a, x = g.b + (g.c - g.b) * a, v += (x - v) * a, x += (g.c + (g.d - g.c) * a - x) * a, l = m ? Math.atan2(x - v, _ - y) * w + b : this._initialRotations[r], f[s] ? d[s](l) : d[s] = l)
                            }
                        }
                    }),
                    g = m.prototype;
                m.bezierThrough = p, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function(t, e, i) {
                    return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, m._cssRegister = function() {
                    var t = s.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, s, o, a, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new m;
                                var h, u, p, c = e.values,
                                    f = c.length - 1,
                                    d = [],
                                    g = {};
                                if (0 > f) return a;
                                for (h = 0; f >= h; h++) p = i(t, c[h], o, a, l, f !== h), d[h] = p.end;
                                for (u in e) g[u] = e[u];
                                return g.values = d, a = new r(t, "bezier", 0, 0, p.pt, 2), a.data = p, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (h = g.autoRotate === !0 ? 0 : Number(g.autoRotate), g.autoRotate = null != p.end.left ? [
                                    ["left", "top", "rotation", h, !1]
                                ] : null != p.end.x ? [
                                    ["x", "y", "rotation", h, !1]
                                ] : !1), g.autoRotate && (o._transform || o._enableTransforms(!1), p.autoRotate = o._target._gsTransform), l._onInitTween(p.proxy, g, o._tween), a
                            }
                        })
                    }
                }, g._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, n = i.length; --n > -1;)(t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e)
                }, g._kill = function(t) {
                    var e, i, n = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, n, r, s, o = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    h = o.prototype = new t("css");
                h.constructor = o, o.version = "1.17.0", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, h = "px", o.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h,
                    lineHeight: ""
                };
                var u, p, c, f, d, m, g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    _ = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    x = /(?:\d|\-|\+|=|#|\.)*/g,
                    b = /opacity *= *([^)]*)/i,
                    w = /opacity:([^;]*)/i,
                    T = /alpha\(opacity *=.+?\)/i,
                    S = /^(rgb|hsl)/,
                    P = /([A-Z])/g,
                    E = /-([a-z])/gi,
                    C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    O = function(t, e) {
                        return e.toUpperCase()
                    },
                    k = /(?:Left|Right|Width)/i,
                    A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    z = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    R = /,(?=[^\)]*(?:\(|$))/gi,
                    I = Math.PI / 180,
                    D = 180 / Math.PI,
                    L = {},
                    M = document,
                    N = function(t) {
                        return M.createElementNS ? M.createElementNS("http://www.w3.org/1999/xhtml", t) : M.createElement(t)
                    },
                    F = N("div"),
                    j = N("img"),
                    $ = o._internals = {
                        _specialProps: l
                    },
                    q = navigator.userAgent,
                    W = function() {
                        var t = q.indexOf("Android"),
                            e = N("a");
                        return c = -1 !== q.indexOf("Safari") && -1 === q.indexOf("Chrome") && (-1 === t || Number(q.substr(t + 8, 1)) > 3), d = c && 6 > Number(q.substr(q.indexOf("Version/") + 8, 1)), f = -1 !== q.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                    }(),
                    B = function(t) {
                        return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    X = function(t) {
                        window.console && console.log(t)
                    },
                    U = "",
                    Y = "",
                    V = function(t, e) {
                        e = e || F;
                        var i, n, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                        return n >= 0 ? (Y = 3 === n ? "ms" : i[n], U = "-" + Y.toLowerCase() + "-", Y + t) : null
                    },
                    H = M.defaultView ? M.defaultView.getComputedStyle : function() {},
                    G = o.getStyle = function(t, e, i, n, r) {
                        var s;
                        return W || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || H(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : B(t)
                    },
                    Q = $.convertToPixels = function(t, i, n, r, s) {
                        if ("px" === r || !r) return n;
                        if ("auto" === r || !n) return 0;
                        var a, l, h, u = k.test(i),
                            p = t,
                            c = F.style,
                            f = 0 > n;
                        if (f && (n = -n), "%" === r && -1 !== i.indexOf("border")) a = n / 100 * (u ? t.clientWidth : t.clientHeight);
                        else {
                            if (c.cssText = "border:0 solid red;position:" + G(t, "position") + ";line-height:0;", "%" !== r && p.appendChild) c[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                            else {
                                if (p = t.parentNode || M.body, l = p._gsCache, h = e.ticker.frame, l && u && l.time === h) return l.width * n / 100;
                                c[u ? "width" : "height"] = n + r
                            }
                            p.appendChild(F), a = parseFloat(F[u ? "offsetWidth" : "offsetHeight"]), p.removeChild(F), u && "%" === r && o.cacheWidths !== !1 && (l = p._gsCache = p._gsCache || {}, l.time = h, l.width = 100 * (a / n)), 0 !== a || s || (a = Q(t, i, n, r, !0))
                        }
                        return f ? -a : a
                    },
                    Z = $.calculateOffset = function(t, e, i) {
                        if ("absolute" !== G(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = G(t, "margin" + n, i);
                        return t["offset" + n] - (Q(t, e, parseFloat(r), r.replace(x, "")) || 0)
                    },
                    J = function(t, e) {
                        var i, n, r, s = {};
                        if (e = e || H(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || St === r) && (s[r.replace(E, O)] = e.getPropertyValue(r));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || Tt === i) && (s[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(E, O)] = e[i]);
                        return W || (s.opacity = B(t)), n = Mt(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, Et && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                    },
                    K = function(t, e, i, n, r) {
                        var s, o, a, l = {},
                            h = t.style;
                        for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(_, "") ? s : 0 : Z(t, o), void 0 !== h[o] && (a = new ft(h, o, h[o], a)));
                        if (n)
                            for (o in n) "className" !== o && (l[o] = n[o]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    tt = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    it = function(t, e, i) {
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = tt[e],
                            s = r.length;
                        for (i = i || H(t, null); --s > -1;) n -= parseFloat(G(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(G(t, "border" + r[s] + "Width", i, !0)) || 0;
                        return n
                    },
                    nt = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(_, "")), e.oy = parseFloat(r.replace(_, "")), e.v = t), e || t
                    },
                    rt = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    st = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                    },
                    ot = function(t, e, i, n) {
                        var r, s, o, a, l, h = 1e-6;
                        return null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : D) - (l ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= r, o !== o % (r / 2) && (o = 0 > o ? o + r : o - r)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * r) % r - (0 | o / r) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (0 | o / r) * r)), a = e + o), h > a && a > -h && (a = 0), a
                    },
                    at = {
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
                    lt = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    ht = o.parseColor = function(t) {
                        var e, i, n, r, s, o;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), at[t] ? at[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(g), r = Number(t[0]) % 360 / 360, s = Number(t[1]) / 100, o = Number(t[2]) / 100, i = .5 >= o ? o * (s + 1) : o + s - o * s, e = 2 * o - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = lt(r + 1 / 3, e, i), t[1] = lt(r, e, i), t[2] = lt(r - 1 / 3, e, i), t) : (t = t.match(g) || at.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : at.black
                    },
                    ut = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (h in at) ut += "|" + h + "\\b";
                ut = RegExp(ut + ")", "gi");
                var pt = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, s = e ? (t.match(ut) || [""])[0] : "",
                            o = t.split(s).join("").match(v) || [],
                            a = t.substr(0, t.indexOf(o[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            h = -1 !== t.indexOf(" ") ? " " : ",",
                            u = o.length,
                            p = u > 0 ? o[0].replace(g, "") : "";
                        return u ? r = e ? function(t) {
                            var e, c, f, d;
                            if ("number" == typeof t) t += p;
                            else if (n && R.test(t)) {
                                for (d = t.replace(R, "|").split("|"), f = 0; d.length > f; f++) d[f] = r(d[f]);
                                return d.join(",")
                            }
                            if (e = (t.match(ut) || [s])[0], c = t.split(e).join("").match(v) || [], f = c.length, u > f--)
                                for (; u > ++f;) c[f] = i ? c[0 | (f - 1) / 2] : o[f];
                            return a + c.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, s, c;
                            if ("number" == typeof t) t += p;
                            else if (n && R.test(t)) {
                                for (s = t.replace(R, "|").split("|"), c = 0; s.length > c; c++) s[c] = r(s[c]);
                                return s.join(",")
                            }
                            if (e = t.match(v) || [], c = e.length, u > c--)
                                for (; u > ++c;) e[c] = i ? e[0 | (c - 1) / 2] : o[c];
                            return a + e.join(h) + l
                        } : function(t) {
                            return t
                        }
                    },
                    ct = function(t) {
                        return t = t.split(","),
                            function(e, i, n, r, s, o, a) {
                                var l, h = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                return r.parse(e, a, s, o)
                            }
                    },
                    ft = ($._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, r, s = this.data, o = s.proxy, a = s.firstMPT, l = 1e-6; a;) e = o[a.v], a.r ? e = Math.round(e) : l > e && e > -l && (e = 0), a.t[a.p] = e, a = a._next;
                        if (s.autoRotate && (s.autoRotate.rotation = o.rotation), 1 === t)
                            for (a = s.firstMPT; a;) {
                                if (i = a.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                a = a._next
                            }
                    }, function(t, e, i, n, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                    }),
                    dt = ($._parseToProxy = function(t, e, i, n, r, s) {
                        var o, a, l, h, u, p = n,
                            c = {},
                            f = {},
                            d = i._transform,
                            m = L;
                        for (i._transform = null, L = e, n = u = i.parse(t, e, n, r), L = m, s && (i._transform = d, p && (p._prev = null, p._prev && (p._prev._next = null))); n && n !== p;) {
                            if (1 >= n.type && (a = n.p, f[a] = n.s + n.c, c[a] = n.s, s || (h = new ft(n, "s", a, h, n.r), n.c = 0), 1 === n.type))
                                for (o = n.l; --o > 0;) l = "xn" + o, a = n.p + "_" + l, f[a] = n.data[l], c[a] = n[l], s || (h = new ft(n, l, a, h, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: c,
                            end: f,
                            firstMPT: h,
                            pt: u
                        }
                    }, $.CSSPropTween = function(t, e, n, r, o, a, l, h, u, p, c) {
                        this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof dt || s.push(this.n), this.r = h, this.type = a || 0, u && (this.pr = u, i = !0), this.b = void 0 === p ? n : p, this.e = void 0 === c ? n + r : c, o && (this._next = o, o._prev = this)
                    }),
                    mt = function(t, e, i, n, r, s) {
                        var o = new dt(t, e, i, n - i, r, -1, s);
                        return o.b = i, o.e = o.xs0 = n, o
                    },
                    gt = o.parseComplex = function(t, e, i, n, r, s, o, a, l, h) {
                        i = i || s || "", o = new dt(t, e, 0, 0, o, h ? 2 : 1, null, !1, a, i, n), n += "";
                        var p, c, f, d, m, v, _, x, b, w, T, P, E = i.split(", ").join(",").split(" "),
                            C = n.split(", ").join(",").split(" "),
                            O = E.length,
                            k = u !== !1;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (E = E.join(" ").replace(R, ", ").split(" "), C = C.join(" ").replace(R, ", ").split(" "), O = E.length), O !== C.length && (E = (s || "").split(" "), O = E.length), o.plugin = l, o.setRatio = h, p = 0; O > p; p++)
                            if (d = E[p], m = C[p], x = parseFloat(d), x || 0 === x) o.appendXtra("", x, rt(m, x), m.replace(y, ""), k && -1 !== m.indexOf("px"), !0);
                            else if (r && ("#" === d.charAt(0) || at[d] || S.test(d))) P = "," === m.charAt(m.length - 1) ? ")," : ")", d = ht(d), m = ht(m), b = d.length + m.length > 6, b && !W && 0 === m[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(C[p]).join("transparent")) : (W || (b = !1), o.appendXtra(b ? "rgba(" : "rgb(", d[0], m[0] - d[0], ",", !0, !0).appendXtra("", d[1], m[1] - d[1], ",", !0).appendXtra("", d[2], m[2] - d[2], b ? "," : P, !0), b && (d = 4 > d.length ? 1 : d[3], o.appendXtra("", d, (4 > m.length ? 1 : m[3]) - d, P, !1)));
                        else if (v = d.match(g)) {
                            if (_ = m.match(y), !_ || _.length !== v.length) return o;
                            for (f = 0, c = 0; v.length > c; c++) T = v[c], w = d.indexOf(T, f), o.appendXtra(d.substr(f, w - f), Number(T), rt(_[c], T), "", k && "px" === d.substr(w + T.length, 2), 0 === c), f = w + T.length;
                            o["xs" + o.l] += d.substr(f)
                        } else o["xs" + o.l] += o.l ? " " + d : d;
                        if (-1 !== n.indexOf("=") && o.data) {
                            for (P = o.xs0 + o.data.s, p = 1; o.l > p; p++) P += o["xs" + p] + o.data["xn" + p];
                            o.e = P + o["xs" + p]
                        }
                        return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                    },
                    yt = 9;
                for (h = dt.prototype, h.l = h.pr = 0; --yt > 0;) h["xn" + yt] = 0, h["xs" + yt] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, n, r, s) {
                    var o = this,
                        a = o.l;
                    return o["xs" + a] += s && a ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new dt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                        s: e + i
                    }, o.rxp = {}, o.s = e, o.c = i, o.r = r, o)) : (o["xs" + a] += e + (n || ""), o)
                };
                var vt = function(t, e) {
                        e = e || {}, this.p = e.prefix ? V(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || pt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    _t = $._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, r, s = t.split(","),
                            o = e.defaultValue;
                        for (i = i || [o], n = 0; s.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, r = new vt(s[n], e)
                    },
                    xt = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            _t(t, {
                                parser: function(t, i, n, r, s, o, h) {
                                    var u = a.com.greensock.plugins[e];
                                    return u ? (u._cssRegister(), l[n].parse(t, i, n, r, s, o, h)) : (X("Error: " + e + " js file not loaded."), s)
                                }
                            })
                        }
                    };
                h = vt.prototype, h.parseComplex = function(t, e, i, n, r, s) {
                    var o, a, l, h, u, p, c = this.keyword;
                    if (this.multi && (R.test(i) || R.test(e) ? (a = e.replace(R, "|").split("|"), l = i.replace(R, "|").split("|")) : c && (a = [e], l = [i])), l) {
                        for (h = l.length > a.length ? l.length : a.length, o = 0; h > o; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, c && (u = e.indexOf(c), p = i.indexOf(c), u !== p && (-1 === p ? a[o] = a[o].split(c).join("") : -1 === u && (a[o] += " " + c)));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return gt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
                }, h.parse = function(t, e, i, n, s, o) {
                    return this.parseComplex(t.style, this.format(G(t, this.p, r, !1, this.dflt)), this.format(e), s, o)
                }, o.registerSpecialProp = function(t, e, i) {
                    _t(t, {
                        parser: function(t, n, r, s, o, a) {
                            var l = new dt(t, r, 0, 0, o, 2, r, !1, i);
                            return l.plugin = a, l.setRatio = e(t, n, s._tween, r), l
                        },
                        priority: i
                    })
                }, o.useSVGTransformAttr = c || f;
                var bt, wt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    Tt = V("transform"),
                    St = U + "transform",
                    Pt = V("transformOrigin"),
                    Et = null !== V("perspective"),
                    Ct = $.Transform = function() {
                        this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = o.defaultForce3D !== !1 && Et ? o.defaultForce3D || "auto" : !1
                    },
                    Ot = window.SVGElement,
                    kt = function(t, e, i) {
                        var n, r = M.createElementNS("http://www.w3.org/2000/svg", t),
                            s = /([a-z])([A-Z])/g;
                        for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(r), r
                    },
                    At = M.documentElement,
                    zt = function() {
                        var t, e, i, n = m || /Android/i.test(q) && !window.chrome;
                        return M.createElementNS && !n && (t = kt("svg", At), e = kt("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[Pt] = "50% 50%", e.style[Tt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(f && Et), At.removeChild(t)), n
                    }(),
                    Rt = function(t, e, i, n, r) {
                        var s, a, l, h, u, p, c, f, d, m, g, y, v, _, x = t._gsTransform,
                            b = Lt(t, !0);
                        x && (v = x.xOrigin, _ = x.yOrigin), (!n || 2 > (s = n.split(" ")).length) && (c = t.getBBox(), e = nt(e).split(" "), s = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = h = parseFloat(s[0]), i.yOrigin = u = parseFloat(s[1]), n && b !== Dt && (p = b[0], c = b[1], f = b[2], d = b[3], m = b[4], g = b[5], y = p * d - c * f, a = h * (d / y) + u * (-f / y) + (f * g - d * m) / y, l = h * (-c / y) + u * (p / y) - (p * g - c * m) / y, h = i.xOrigin = s[0] = a, u = i.yOrigin = s[1] = l), x && (r || r !== !1 && o.defaultSmoothOrigin !== !1 ? (a = h - v, l = u - _, x.xOffset += a * b[0] + l * b[2] - a, x.yOffset += a * b[1] + l * b[3] - l) : x.xOffset = x.yOffset = 0), t.setAttribute("data-svg-origin", s.join(" "))
                    },
                    It = function(t) {
                        return !!(Ot && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    },
                    Dt = [1, 0, 0, 1, 0, 0],
                    Lt = function(t, e) {
                        var i, n, r, s, o, a = t._gsTransform || new Ct,
                            l = 1e5;
                        if (Tt ? n = G(t, St, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(A), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), a.x || 0, a.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, (a.svg || t.getBBox && It(t)) && (i && -1 !== (t.style[Tt] + "").indexOf("matrix") && (n = t.style[Tt], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Dt;
                        for (r = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], yt = r.length; --yt > -1;) s = Number(r[yt]), r[yt] = (o = s - (s |= 0)) ? (0 | o * l + (0 > o ? -.5 : .5)) / l + s : s;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    Mt = $.getTransform = function(t, i, n, s) {
                        if (t._gsTransform && n && !s) return t._gsTransform;
                        var a, l, h, u, p, c, f = n ? t._gsTransform || new Ct : new Ct,
                            d = 0 > f.scaleX,
                            m = 2e-5,
                            g = 1e5,
                            y = Et ? parseFloat(G(t, Pt, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                            v = parseFloat(o.defaultTransformPerspective) || 0;
                        if (f.svg = !(!t.getBBox || !It(t)), f.svg && (Rt(t, G(t, Pt, r, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), bt = o.useSVGTransformAttr || zt), a = Lt(t), a !== Dt) {
                            if (16 === a.length) {
                                var _, x, b, w, T, S = a[0],
                                    P = a[1],
                                    E = a[2],
                                    C = a[3],
                                    O = a[4],
                                    k = a[5],
                                    A = a[6],
                                    z = a[7],
                                    R = a[8],
                                    I = a[9],
                                    L = a[10],
                                    M = a[12],
                                    N = a[13],
                                    F = a[14],
                                    j = a[11],
                                    $ = Math.atan2(A, L);
                                f.zOrigin && (F = -f.zOrigin, M = R * F - a[12], N = I * F - a[13], F = L * F + f.zOrigin - a[14]), f.rotationX = $ * D, $ && (w = Math.cos(-$), T = Math.sin(-$), _ = O * w + R * T, x = k * w + I * T, b = A * w + L * T, R = O * -T + R * w, I = k * -T + I * w, L = A * -T + L * w, j = z * -T + j * w, O = _, k = x, A = b), $ = Math.atan2(R, L), f.rotationY = $ * D, $ && (w = Math.cos(-$), T = Math.sin(-$), _ = S * w - R * T, x = P * w - I * T, b = E * w - L * T, I = P * T + I * w, L = E * T + L * w, j = C * T + j * w, S = _, P = x, E = b), $ = Math.atan2(P, S), f.rotation = $ * D, $ && (w = Math.cos(-$), T = Math.sin(-$), S = S * w + O * T, x = P * w + k * T, k = P * -T + k * w, A = E * -T + A * w, P = x), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY += 180), f.scaleX = (0 | Math.sqrt(S * S + P * P) * g + .5) / g, f.scaleY = (0 | Math.sqrt(k * k + I * I) * g + .5) / g, f.scaleZ = (0 | Math.sqrt(A * A + L * L) * g + .5) / g, f.skewX = 0, f.perspective = j ? 1 / (0 > j ? -j : j) : 0, f.x = M, f.y = N, f.z = F, f.svg && (f.x -= f.xOrigin - (f.xOrigin * S - f.yOrigin * O), f.y -= f.yOrigin - (f.yOrigin * P - f.xOrigin * k))
                            } else if (!(Et && !s && a.length && f.x === a[4] && f.y === a[5] && (f.rotationX || f.rotationY) || void 0 !== f.x && "none" === G(t, "display", i))) {
                                var q = a.length >= 6,
                                    W = q ? a[0] : 1,
                                    B = a[1] || 0,
                                    X = a[2] || 0,
                                    U = q ? a[3] : 1;
                                f.x = a[4] || 0, f.y = a[5] || 0, h = Math.sqrt(W * W + B * B), u = Math.sqrt(U * U + X * X), p = W || B ? Math.atan2(B, W) * D : f.rotation || 0, c = X || U ? Math.atan2(X, U) * D + p : f.skewX || 0, Math.abs(c) > 90 && 270 > Math.abs(c) && (d ? (h *= -1, c += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (u *= -1, c += 0 >= c ? 180 : -180)), f.scaleX = h, f.scaleY = u, f.rotation = p, f.skewX = c, Et && (f.rotationX = f.rotationY = f.z = 0, f.perspective = v, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * W + f.yOrigin * X), f.y -= f.yOrigin - (f.xOrigin * B + f.yOrigin * U))
                            }
                            f.zOrigin = y;
                            for (l in f) m > f[l] && f[l] > -m && (f[l] = 0)
                        }
                        return n && (t._gsTransform = f, f.svg && (bt && t.style[Tt] ? e.delayedCall(.001, function() {
                            $t(t.style, Tt)
                        }) : !bt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), f
                    },
                    Nt = function(t) {
                        var e, i, n = this.data,
                            r = -n.rotation * I,
                            s = r + n.skewX * I,
                            o = 1e5,
                            a = (0 | Math.cos(r) * n.scaleX * o) / o,
                            l = (0 | Math.sin(r) * n.scaleX * o) / o,
                            h = (0 | Math.sin(s) * -n.scaleY * o) / o,
                            u = (0 | Math.cos(s) * n.scaleY * o) / o,
                            p = this.t.style,
                            c = this.t.currentStyle;
                        if (c) {
                            i = l, l = -h, h = -i, e = c.filter, p.filter = "";
                            var f, d, g = this.t.offsetWidth,
                                y = this.t.offsetHeight,
                                v = "absolute" !== c.position,
                                _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                                w = n.x + g * n.xPercent / 100,
                                T = n.y + y * n.yPercent / 100;
                            if (null != n.ox && (f = (n.oxp ? .01 * g * n.ox : n.ox) - g / 2, d = (n.oyp ? .01 * y * n.oy : n.oy) - y / 2, w += f - (f * a + d * l), T += d - (f * h + d * u)), v ? (f = g / 2, d = y / 2, _ += ", Dx=" + (f - (f * a + d * l) + w) + ", Dy=" + (d - (f * h + d * u) + T) + ")") : _ += ", sizingMethod='auto expand')", p.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(z, _) : _ + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === h && 1 === u && (v && -1 === _.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && p.removeAttribute("filter")), !v) {
                                var S, P, E, C = 8 > m ? 1 : -1;
                                for (f = n.ieOffsetX || 0, d = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * y)) / 2 + w), n.ieOffsetY = Math.round((y - ((0 > u ? -u : u) * y + (0 > h ? -h : h) * g)) / 2 + T), yt = 0; 4 > yt; yt++) P = et[yt], S = c[P], i = -1 !== S.indexOf("px") ? parseFloat(S) : Q(this.t, P, parseFloat(S), S.replace(x, "")) || 0, E = i !== n[P] ? 2 > yt ? -n.ieOffsetX : -n.ieOffsetY : 2 > yt ? f - n.ieOffsetX : d - n.ieOffsetY, p[P] = (n[P] = Math.round(i - E * (0 === yt || 2 === yt ? 1 : C))) + "px"
                            }
                        }
                    },
                    Ft = $.set3DTransformRatio = $.setTransformRatio = function(t) {
                        var e, i, n, r, s, o, a, l, h, u, p, c, d, m, g, y, v, _, x, b, w, T, S, P = this.data,
                            E = this.t.style,
                            C = P.rotation,
                            O = P.rotationX,
                            k = P.rotationY,
                            A = P.scaleX,
                            z = P.scaleY,
                            R = P.scaleZ,
                            D = P.x,
                            L = P.y,
                            M = P.z,
                            N = P.svg,
                            F = P.perspective,
                            j = P.force3D;
                        if (!((1 !== t && 0 !== t || "auto" !== j || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && j || M || F || k || O) || bt && N || !Et) return void(C || P.skewX || N ? (C *= I, T = P.skewX * I, S = 1e5, e = Math.cos(C) * A, r = Math.sin(C) * A, i = Math.sin(C - T) * -z, s = Math.cos(C - T) * z, T && "simple" === P.skewType && (v = Math.tan(T), v = Math.sqrt(1 + v * v), i *= v, s *= v, P.skewY && (e *= v, r *= v)), N && (D += P.xOrigin - (P.xOrigin * e + P.yOrigin * i) + P.xOffset, L += P.yOrigin - (P.xOrigin * r + P.yOrigin * s) + P.yOffset, bt && (P.xPercent || P.yPercent) && (m = this.t.getBBox(), D += .01 * P.xPercent * m.width, L += .01 * P.yPercent * m.height), m = 1e-6, m > D && D > -m && (D = 0), m > L && L > -m && (L = 0)), x = (0 | e * S) / S + "," + (0 | r * S) / S + "," + (0 | i * S) / S + "," + (0 | s * S) / S + "," + D + "," + L + ")", N && bt ? this.t.setAttribute("transform", "matrix(" + x) : E[Tt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + x) : E[Tt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + z + "," + D + "," + L + ")");
                        if (f && (m = 1e-4, m > A && A > -m && (A = R = 2e-5), m > z && z > -m && (z = R = 2e-5), !F || P.z || P.rotationX || P.rotationY || (F = 0)), C || P.skewX) C *= I, g = e = Math.cos(C), y = r = Math.sin(C), P.skewX && (C -= P.skewX * I, g = Math.cos(C), y = Math.sin(C), "simple" === P.skewType && (v = Math.tan(P.skewX * I), v = Math.sqrt(1 + v * v), g *= v, y *= v, P.skewY && (e *= v, r *= v))), i = -y, s = g;
                        else {
                            if (!(k || O || 1 !== R || F || N)) return void(E[Tt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + L + "px," + M + "px)" + (1 !== A || 1 !== z ? " scale(" + A + "," + z + ")" : ""));
                            e = s = 1, i = r = 0
                        }
                        h = 1, n = o = a = l = u = p = 0, c = F ? -1 / F : 0, d = P.zOrigin, m = 1e-6, b = ",", w = "0", C = k * I, C && (g = Math.cos(C), y = Math.sin(C), a = -y, u = c * -y, n = e * y, o = r * y, h = g, c *= g, e *= g, r *= g), C = O * I, C && (g = Math.cos(C), y = Math.sin(C), v = i * g + n * y, _ = s * g + o * y, l = h * y, p = c * y, n = i * -y + n * g, o = s * -y + o * g, h *= g, c *= g, i = v, s = _), 1 !== R && (n *= R, o *= R, h *= R, c *= R), 1 !== z && (i *= z, s *= z, l *= z, p *= z), 1 !== A && (e *= A, r *= A, a *= A, u *= A), (d || N) && (d && (D += n * -d, L += o * -d, M += h * -d + d), N && (D += P.xOrigin - (P.xOrigin * e + P.yOrigin * i) + P.xOffset, L += P.yOrigin - (P.xOrigin * r + P.yOrigin * s) + P.yOffset), m > D && D > -m && (D = w), m > L && L > -m && (L = w), m > M && M > -m && (M = 0)), x = P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix3d(" : "matrix3d(", x += (m > e && e > -m ? w : e) + b + (m > r && r > -m ? w : r) + b + (m > a && a > -m ? w : a), x += b + (m > u && u > -m ? w : u) + b + (m > i && i > -m ? w : i) + b + (m > s && s > -m ? w : s), O || k ? (x += b + (m > l && l > -m ? w : l) + b + (m > p && p > -m ? w : p) + b + (m > n && n > -m ? w : n), x += b + (m > o && o > -m ? w : o) + b + (m > h && h > -m ? w : h) + b + (m > c && c > -m ? w : c) + b) : x += ",0,0,0,0,1,0,", x += D + b + L + b + M + b + (F ? 1 + -M / F : 1) + ")", E[Tt] = x
                    };
                h = Ct.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, _t("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, n, s, a, l) {
                        if (n._lastParsedTransform === l) return s;
                        n._lastParsedTransform = l;
                        var h, u, p, c, f, d, m, g, y, v = t._gsTransform,
                            _ = n._transform = Mt(t, r, !0, l.parseTransform),
                            x = t.style,
                            b = 1e-6,
                            w = wt.length,
                            T = l,
                            S = {},
                            P = "transformOrigin";
                        if ("string" == typeof T.transform && Tt) p = F.style, p[Tt] = T.transform, p.display = "block", p.position = "absolute", M.body.appendChild(F), h = Mt(F, null, !1), M.body.removeChild(F), null != T.xPercent && (h.xPercent = st(T.xPercent, _.xPercent)), null != T.yPercent && (h.yPercent = st(T.yPercent, _.yPercent));
                        else if ("object" == typeof T) {
                            if (h = {
                                    scaleX: st(null != T.scaleX ? T.scaleX : T.scale, _.scaleX),
                                    scaleY: st(null != T.scaleY ? T.scaleY : T.scale, _.scaleY),
                                    scaleZ: st(T.scaleZ, _.scaleZ),
                                    x: st(T.x, _.x),
                                    y: st(T.y, _.y),
                                    z: st(T.z, _.z),
                                    xPercent: st(T.xPercent, _.xPercent),
                                    yPercent: st(T.yPercent, _.yPercent),
                                    perspective: st(T.transformPerspective, _.perspective)
                                }, m = T.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (p in m) T[p] = m[p];
                                else T.rotation = m;
                                "string" == typeof T.x && -1 !== T.x.indexOf("%") && (h.x = 0, h.xPercent = st(T.x, _.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (h.y = 0, h.yPercent = st(T.y, _.yPercent)), h.rotation = ot("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : _.rotation, _.rotation, "rotation", S), Et && (h.rotationX = ot("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : _.rotationX || 0, _.rotationX, "rotationX", S), h.rotationY = ot("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : _.rotationY || 0, _.rotationY, "rotationY", S)), h.skewX = null == T.skewX ? _.skewX : ot(T.skewX, _.skewX), h.skewY = null == T.skewY ? _.skewY : ot(T.skewY, _.skewY), (u = h.skewY - _.skewY) && (h.skewX += u, h.rotation += u)
                        }
                        for (Et && null != T.force3D && (_.force3D = T.force3D, d = !0), _.skewType = T.skewType || _.skewType || o.defaultSkewType, f = _.force3D || _.z || _.rotationX || _.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, f || null == T.scale || (h.scaleZ = 1); --w > -1;) i = wt[w], c = h[i] - _[i], (c > b || -b > c || null != T[i] || null != L[i]) && (d = !0, s = new dt(_, i, _[i], c, s), i in S && (s.e = S[i]), s.xs0 = 0, s.plugin = a, n._overwriteProps.push(s.n));
                        return c = T.transformOrigin, _.svg && (c || T.svgOrigin) && (g = _.xOffset, y = _.yOffset, Rt(t, nt(c), h, T.svgOrigin, T.smoothOrigin), s = mt(_, "xOrigin", (v ? _ : h).xOrigin, h.xOrigin, s, P), s = mt(_, "yOrigin", (v ? _ : h).yOrigin, h.yOrigin, s, P), (g !== _.xOffset || y !== _.yOffset) && (s = mt(_, "xOffset", v ? g : _.xOffset, _.xOffset, s, P), s = mt(_, "yOffset", v ? y : _.yOffset, _.yOffset, s, P)), c = bt ? null : "0px 0px"), (c || Et && f && _.zOrigin) && (Tt ? (d = !0, i = Pt, c = (c || G(t, i, r, !1, "50% 50%")) + "", s = new dt(x, i, 0, 0, s, -1, P), s.b = x[i], s.plugin = a, Et ? (p = _.zOrigin, c = c.split(" "), _.zOrigin = (c.length > 2 && (0 === p || "0px" !== c[2]) ? parseFloat(c[2]) : p) || 0, s.xs0 = s.e = c[0] + " " + (c[1] || "50%") + " 0px", s = new dt(_, "zOrigin", 0, 0, s, -1, s.n), s.b = p, s.xs0 = s.e = _.zOrigin) : s.xs0 = s.e = c) : nt(c + "", _)), d && (n._transformType = _.svg && bt || !f && 3 !== this._transformType ? 2 : 3), s
                    },
                    prefix: !0
                }), _t("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), _t("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, s, o) {
                        e = this.format(e);
                        var a, l, h, u, p, c, f, d, m, g, y, v, _, x, b, w, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            S = t.style;
                        for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), a = e.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = V(T[l])), p = u = G(t, T[l], r, !1, "0px"), -1 !== p.indexOf(" ") && (u = p.split(" "), p = u[0], u = u[1]), c = h = a[l], f = parseFloat(p), v = p.substr((f + "").length), _ = "=" === c.charAt(1), _ ? (d = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), d *= parseFloat(c), y = c.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(c), y = c.substr((d + "").length)), "" === y && (y = n[i] || v), y !== v && (x = Q(t, "borderLeft", f, v), b = Q(t, "borderTop", f, v), "%" === y ? (p = 100 * (x / m) + "%", u = 100 * (b / g) + "%") : "em" === y ? (w = Q(t, "borderLeft", 1, "em"), p = x / w + "em", u = b / w + "em") : (p = x + "px", u = b + "px"), _ && (c = parseFloat(p) + d + y, h = parseFloat(u) + d + y)), o = gt(S, T[l], p + " " + u, c + " " + h, !1, "0px", o);
                        return o
                    },
                    prefix: !0,
                    formatter: pt("0px 0px 0px 0px", !1, !0)
                }), _t("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, s, o) {
                        var a, l, h, u, p, c, f = "background-position",
                            d = r || H(t, null),
                            g = this.format((d ? m ? d.getPropertyValue(f + "-x") + " " + d.getPropertyValue(f + "-y") : d.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            y = this.format(e);
                        if (-1 !== g.indexOf("%") != (-1 !== y.indexOf("%")) && (c = G(t, "backgroundImage").replace(C, ""), c && "none" !== c)) {
                            for (a = g.split(" "), l = y.split(" "), j.setAttribute("src", c), h = 2; --h > -1;) g = a[h], u = -1 !== g.indexOf("%"), u !== (-1 !== l[h].indexOf("%")) && (p = 0 === h ? t.offsetWidth - j.width : t.offsetHeight - j.height, a[h] = u ? parseFloat(g) / 100 * p + "px" : 100 * (parseFloat(g) / p) + "%");
                            g = a.join(" ")
                        }
                        return this.parseComplex(t.style, g, y, s, o)
                    },
                    formatter: nt
                }), _t("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: nt
                }), _t("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), _t("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), _t("transformStyle", {
                    prefix: !0
                }), _t("backfaceVisibility", {
                    prefix: !0
                }), _t("userSelect", {
                    prefix: !0
                }), _t("margin", {
                    parser: ct("marginTop,marginRight,marginBottom,marginLeft")
                }), _t("padding", {
                    parser: ct("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), _t("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, s, o) {
                        var a, l, h;
                        return 9 > m ? (l = t.currentStyle, h = 8 > m ? " " : ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(G(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, o)
                    }
                }), _t("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), _t("autoRound,strictUnits", {
                    parser: function(t, e, i, n, r) {
                        return r
                    }
                }), _t("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, s, o) {
                        return this.parseComplex(t.style, this.format(G(t, "borderTopWidth", r, !1, "0px") + " " + G(t, "borderTopStyle", r, !1, "solid") + " " + G(t, "borderTopColor", r, !1, "#000")), this.format(e), s, o)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(ut) || ["#000"])[0]
                    }
                }), _t("borderWidth", {
                    parser: ct("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), _t("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, r) {
                        var s = t.style,
                            o = "cssFloat" in s ? "cssFloat" : "styleFloat";
                        return new dt(s, o, 0, 0, r, -1, i, !1, 0, s[o], e)
                    }
                });
                var jt = function(t) {
                    var e, i = this.t,
                        n = i.filter || G(this.data, "filter") || "",
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !G(this.data, "filter")) : (i.filter = n.replace(T, ""),
                        e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(b, "opacity=" + r))
                };
                _t("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, s, o) {
                        var a = parseFloat(G(t, "opacity", r, !1, "1")),
                            l = t.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === G(t, "visibility", r) && 0 !== e && (a = 0), W ? s = new dt(l, "opacity", a, e - a, s) : (s = new dt(l, "opacity", 100 * a, 100 * (e - a), s), s.xn1 = h ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = jt), h && (s = new dt(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                    }
                });
                var $t = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    qt = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : $t(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                _t("className", {
                    parser: function(t, e, n, s, o, a, l) {
                        var h, u, p, c, f, d = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (o = s._classNamePT = new dt(t, n, 0, 0, o, 2), o.setRatio = qt, o.pr = -11, i = !0, o.b = d, u = J(t, r), p = t._gsClassPT) {
                            for (c = {}, f = p.data; f;) c[f.p] = 1, f = f._next;
                            p.setRatio(1)
                        }
                        return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : d.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), h = K(t, u, J(t), l, c), t.setAttribute("class", d), o.data = h.firstMPT, t.style.cssText = m, o = o.xfirst = s.parse(t, h.difs, o, a)
                    }
                });
                var Wt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, r, s, o = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) o.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Pt : l[i].p), $t(o, i);
                        r && ($t(o, Tt), s = this.t._gsTransform, s && (s.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                    }
                };
                for (_t("clearProps", {
                        parser: function(t, e, n, r, s) {
                            return s = new dt(t, n, 0, 0, s, 2), s.setRatio = Wt, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), yt = h.length; yt--;) xt(h[yt]);
                h = o.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, a) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = a, this._vars = e, u = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, r = H(t, ""), s = this._overwriteProps;
                    var h, f, m, g, y, v, _, x, b, T = t.style;
                    if (p && "" === T.zIndex && (h = G(t, "zIndex", r), ("auto" === h || "" === h) && this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (g = T.cssText, h = J(t, r), T.cssText = g + ";" + e, h = K(t, h, J(t)).difs, !W && w.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, T.cssText = g), this._firstPT = f = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                        for (b = 3 === this._transformType, Tt ? c && (p = !0, "" === T.zIndex && (_ = G(t, "zIndex", r), ("auto" === _ || "" === _) && this._addLazySet(T, "zIndex", 0)), d && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden"))) : T.zoom = 1, m = f; m && m._next;) m = m._next;
                        x = new dt(t, "transform", 0, 0, null, 2), this._linkCSSP(x, null, m), x.setRatio = Tt ? Ft : Nt, x.data = this._transform || Mt(t, r, !0), x.tween = a, x.pr = -1, s.pop()
                    }
                    if (i) {
                        for (; f;) {
                            for (v = f._next, m = g; m && m.pr > f.pr;) m = m._next;
                            (f._prev = m ? m._prev : y) ? f._prev._next = f: g = f, (f._next = m) ? m._prev = f : y = f, f = v
                        }
                        this._firstPT = g
                    }
                    return !0
                }, h.parse = function(t, e, i, s) {
                    var o, a, h, p, c, f, d, m, g, y, v = t.style;
                    for (o in e) f = e[o], a = l[o], a ? i = a.parse(t, f, o, this, i, s, e) : (c = G(t, o, r) + "", g = "string" == typeof f, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || g && S.test(f) ? (g || (f = ht(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = gt(v, o, c, f, !0, "transparent", i, 0, s)) : !g || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (h = parseFloat(c), d = h || 0 === h ? c.substr((h + "").length) : "", ("" === c || "auto" === c) && ("width" === o || "height" === o ? (h = it(t, o, r), d = "px") : "left" === o || "top" === o ? (h = Z(t, o, r), d = "px") : (h = "opacity" !== o ? 0 : 1, d = "")), y = g && "=" === f.charAt(1), y ? (p = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), p *= parseFloat(f), m = f.replace(x, "")) : (p = parseFloat(f), m = g ? f.replace(x, "") : ""), "" === m && (m = o in n ? n[o] : d), f = p || 0 === p ? (y ? p + h : p) + m : e[o], d !== m && "" !== m && (p || 0 === p) && h && (h = Q(t, o, h, d), "%" === m ? (h /= Q(t, o, 100, "%") / 100, e.strictUnits !== !0 && (c = h + "%")) : "em" === m ? h /= Q(t, o, 1, "em") : "px" !== m && (p = Q(t, o, p, m), m = "px"), y && (p || 0 === p) && (f = p + h + m)), y && (p += h), !h && 0 !== h || !p && 0 !== p ? void 0 !== v[o] && (f || "NaN" != f + "" && null != f) ? (i = new dt(v, o, p || h || 0, 0, i, -1, o, !1, 0, c, f), i.xs0 = "none" !== f || "display" !== o && -1 === o.indexOf("Style") ? f : c) : X("invalid " + o + " tween value: " + e[o]) : (i = new dt(v, o, h, p - h, i, 0, o, u !== !1 && ("px" === m || "zIndex" === o), 0, c, f), i.xs0 = m)) : i = gt(v, o, c, f, !0, null, i, 0, s)), s && i && !i.plugin && (i.plugin = s);
                    return i
                }, h.setRatio = function(t) {
                    var e, i, n, r = this._firstPT,
                        s = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : s > e && e > -s && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next
                            }
                }, h._enableTransforms = function(t) {
                    this._transform = this._transform || Mt(this._target, r, !0), this._transformType = this._transform.svg && bt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Bt = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                h._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new dt(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Bt, n.data = this
                }, h._linkCSSP = function(t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._kill = function(e) {
                    var i, n, r, s = e;
                    if (e.autoAlpha || e.alpha) {
                        s = {};
                        for (n in e) s[n] = e[n];
                        s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, s)
                };
                var Xt = function(t, e, i) {
                    var n, r, s, o;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Xt(t[r], e, i);
                    else
                        for (n = t.childNodes, r = n.length; --r > -1;) s = n[r], o = s.type, s.style && (e.push(J(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Xt(s, e, i)
                };
                return o.cascadeTo = function(t, i, n) {
                    var r, s, o, a, l = e.to(t, i, n),
                        h = [l],
                        u = [],
                        p = [],
                        c = [],
                        f = e._internals.reservedProps;
                    for (t = l._targets || l.target, Xt(t, u, c), l.render(i, !0, !0), Xt(t, p), l.render(0, !0, !0), l._enabled(!0), r = c.length; --r > -1;)
                        if (s = K(c[r], u[r], p[r]), s.firstMPT) {
                            s = s.difs;
                            for (o in n) f[o] && (s[o] = n[o]);
                            a = {};
                            for (o in s) a[o] = u[r][o];
                            h.push(e.fromTo(c[r], i, a, s))
                        }
                    return h
                }, t.activate([o]), o
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = t.prototype;
                e._onInitAllProps = function() {
                    for (var t, e, i, n = this._tween, r = n.vars.roundProps instanceof Array ? n.vars.roundProps : n.vars.roundProps.split(","), s = r.length, o = {}, a = n._propLookup.roundProps; --s > -1;) o[r[s]] = 1;
                    for (s = r.length; --s > -1;)
                        for (t = r[s], e = n._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(o, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : n._firstPT === e && (n._firstPT = i), e._next = e._prev = null, n._propLookup[t] = a), e = i;
                    return !1
                }, e._add = function(t, e, i, n) {
                    this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e)
                }
            }(),
            function() {
                var t = /(?:\d|\-|\+|=|#|\.)*/g,
                    e = /[A-Za-z%]/g;
                _gsScope._gsDefine.plugin({
                    propName: "attr",
                    API: 2,
                    version: "0.4.0",
                    init: function(i, n) {
                        var r, s, o, a, l;
                        if ("function" != typeof i.setAttribute) return !1;
                        this._target = i, this._proxy = {}, this._start = {}, this._end = {}, this._suffix = {};
                        for (r in n) this._start[r] = this._proxy[r] = s = i.getAttribute(r) + "", this._end[r] = o = n[r] + "", this._suffix[r] = a = e.test(o) ? o.replace(t, "") : e.test(s) ? s.replace(t, "") : "", a && (l = o.indexOf(a), -1 !== l && (o = o.substr(0, l))), this._addTween(this._proxy, r, parseFloat(s), o, r) || (this._suffix[r] = ""), "=" === o.charAt(1) && (this._end[r] = this._firstPT.s + this._firstPT.c + a), this._overwriteProps.push(r);
                        return !0
                    },
                    set: function(t) {
                        this._super.setRatio.call(this, t);
                        for (var e, i = this._overwriteProps, n = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start, s = r === this._proxy; --n > -1;) e = i[n], this._target.setAttribute(e, r[e] + (s ? this._suffix[e] : ""))
                    }
                })
            }(), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, n, r, s, o, a, l = e.useRadians === !0 ? 2 * Math.PI : 360,
                        h = 1e-6;
                    for (i in e) "useRadians" !== i && (a = (e[i] + "").split("_"), n = a[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), s = this.finals[i] = "string" == typeof n && "=" === n.charAt(1) ? r + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, o = s - r, a.length && (n = a.join("_"), -1 !== n.indexOf("short") && (o %= l, o !== o % (l / 2) && (o = 0 > o ? o + l : o - l)), -1 !== n.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * l) % l - (0 | o / l) * l : -1 !== n.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * l) % l - (0 | o / l) * l)), (o > h || -h > o) && (this._addTween(t, i, r, r + o, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
                    s = r.com.greensock,
                    o = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = s._class,
                    h = function(e, i) {
                        var n = l("easing." + e, function() {}, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, n
                    },
                    u = t.register || function() {},
                    p = function(t, e, i, n) {
                        var r = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return u(r, t), r
                    },
                    c = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function(e, i) {
                        var n = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, r.config = function(t) {
                            return new n(t)
                        }, n
                    },
                    d = p("Back", f("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function(t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    g = m.prototype = new t;
                return g.constructor = m, g.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), g.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = l("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, g.config = e.config = function(t) {
                    return new e(t)
                }, i = l("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, n, r, s, o, a, l = e.taper || "none", h = [], u = 0, p = 0 | (e.points || 20), f = p, d = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, y = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = d ? Math.random() : 1 / p * f, n = g ? g.getRatio(i) : i, "none" === l ? r = y : "out" === l ? (s = 1 - i, r = s * s * y) : "in" === l ? r = i * i * y : .5 > i ? (s = 2 * i, r = .5 * s * s * y) : (s = 2 * (1 - i), r = .5 * s * s * y), d ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), h[u++] = {
                        x: i,
                        y: n
                    };
                    for (h.sort(function(t, e) {
                            return t.x - e.x
                        }), a = new c(1, 1, null), f = p; --f > -1;) o = h[f], a = new c(o.x, o.y, a);
                    this._prev = new c(0, 0, 0 !== a.t ? a : a.next)
                }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, g.config = function(t) {
                    return new i(t)
                }, i.ease = new i, p("Bounce", h("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), h("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), h("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), p("Circ", h("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), h("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), h("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function(e, i, n) {
                    var r = l("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                        }, !0),
                        s = r.prototype = new t;
                    return s.constructor = r, s.getRatio = i, s.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, p("Elastic", n("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), n("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                }, .3), n("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
                }, .45)), p("Expo", h("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), h("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), h("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), p("Sine", h("SineOut", function(t) {
                    return Math.sin(t * a)
                }), h("SineIn", function(t) {
                    return -Math.cos(t * a) + 1
                }), h("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), u(r.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), d
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var n, r, s, o, a, l = function(t) {
                    var e, n = t.split("."),
                        r = i;
                    for (e = 0; n.length > e; e++) r[n[e]] = r = r[n[e]] || {};
                    return r
                },
                h = l("com.greensock"),
                u = 1e-10,
                p = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                c = function() {},
                f = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                d = {},
                m = function(n, r, s, o) {
                    this.sc = d[n] ? d[n].sc : [], d[n] = this, this.gsClass = null, this.func = s;
                    var a = [];
                    this.check = function(h) {
                        for (var u, p, c, f, g = r.length, y = g; --g > -1;)(u = d[r[g]] || new m(r[g], [])).gsClass ? (a[g] = u.gsClass, y--) : h && u.sc.push(this);
                        if (0 === y && s)
                            for (p = ("com.greensock." + n).split("."), c = p.pop(), f = l(p.join("."))[c] = this.gsClass = s.apply(s, a), o && (i[c] = f, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                    return f
                                }) : n === e && "undefined" != typeof module && module.exports && (module.exports = f)), g = 0; this.sc.length > g; g++) this.sc[g].check()
                    }, this.check(!0)
                },
                g = t._gsDefine = function(t, e, i, n) {
                    return new m(t, e, i, n)
                },
                y = h._class = function(t, e, i) {
                    return e = e || function() {}, g(t, [], function() {
                        return e
                    }, i), e
                };
            g.globals = i;
            var v = [0, 0, 1, 1],
                _ = [],
                x = y("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? v.concat(e) : v
                }, !0),
                b = x.map = {},
                w = x.register = function(t, e, i, n) {
                    for (var r, s, o, a, l = e.split(","), u = l.length, p = (i || "easeIn,easeOut,easeInOut").split(","); --u > -1;)
                        for (s = l[u], r = n ? y("easing." + s, null, !0) : h.easing[s] || {}, o = p.length; --o > -1;) a = p[o], b[s + "." + a] = b[a + s] = r[a] = t.getRatio ? t : t[a] || new t
                };
            for (s = x.prototype, s._calcEnd = !1, s.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = n.length; --r > -1;) s = n[r] + ",Power" + r, w(new x(null, null, 1, r), s, "easeOut", !0), w(new x(null, null, 2, r), s, "easeIn" + (0 === r ? ",easeNone" : "")), w(new x(null, null, 3, r), s, "easeInOut");
            b.linear = h.easing.Linear.easeIn, b.swing = h.easing.Quad.easeInOut;
            var T = y("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            s = T.prototype, s.addEventListener = function(t, e, i, n, r) {
                r = r || 0;
                var s, l, h = this._listeners[t],
                    u = 0;
                for (null == h && (this._listeners[t] = h = []), l = h.length; --l > -1;) s = h[l], s.c === e && s.s === i ? h.splice(l, 1) : 0 === u && r > s.pr && (u = l + 1);
                h.splice(u, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: r
                }), this !== o || a || o.wake()
            }, s.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, s.dispatchEvent = function(t) {
                var e, i, n, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) n = r[e], n && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var S = t.requestAnimationFrame,
                P = t.cancelAnimationFrame,
                E = Date.now || function() {
                    return (new Date).getTime()
                },
                C = E();
            for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !S;) S = t[n[r] + "RequestAnimationFrame"], P = t[n[r] + "CancelAnimationFrame"] || t[n[r] + "CancelRequestAnimationFrame"];
            y("Ticker", function(t, e) {
                var i, n, r, s, l, h = this,
                    p = E(),
                    f = e !== !1 && S,
                    d = 500,
                    m = 33,
                    g = "tick",
                    y = function(t) {
                        var e, o, a = E() - C;
                        a > d && (p += a - m), C += a, h.time = (C - p) / 1e3, e = h.time - l, (!i || e > 0 || t === !0) && (h.frame++, l += e + (e >= s ? .004 : s - e), o = !0), t !== !0 && (r = n(y)), o && h.dispatchEvent(g)
                    };
                T.call(h), h.time = h.frame = 0, h.tick = function() {
                    y(!0)
                }, h.lagSmoothing = function(t, e) {
                    d = t || 1 / u, m = Math.min(e, d, 0)
                }, h.sleep = function() {
                    null != r && (f && P ? P(r) : clearTimeout(r), n = c, r = null, h === o && (a = !1))
                }, h.wake = function() {
                    null !== r ? h.sleep() : h.frame > 10 && (C = E() - d + 5), n = 0 === i ? c : f && S ? S : function(t) {
                        return setTimeout(t, 0 | 1e3 * (l - h.time) + 1)
                    }, h === o && (a = !0), y(2)
                }, h.fps = function(t) {
                    return arguments.length ? (i = t, s = 1 / (i || 60), l = this.time + s, void h.wake()) : i
                }, h.useRAF = function(t) {
                    return arguments.length ? (h.sleep(), f = t, void h.fps(i)) : f
                }, h.fps(t), setTimeout(function() {
                    f && 5 > h.frame && h.useRAF(!1)
                }, 1500)
            }), s = h.Ticker.prototype = new h.events.EventDispatcher, s.constructor = h.Ticker;
            var O = y("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, B) {
                    a || o.wake();
                    var i = this.vars.useFrames ? W : B;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            o = O.ticker = new h.Ticker, s = O.prototype, s._dirty = s._gc = s._initted = s._paused = !1, s._totalTime = s._time = 0, s._rawPrevTime = -1, s._next = s._last = s._onUpdate = s._timeline = s.timeline = null, s._paused = !1;
            var k = function() {
                a && E() - C > 2e3 && o.wake(), setTimeout(k, 2e3)
            };
            k(), s.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, s.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, s.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, s.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, s.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, s.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, s.render = function() {}, s.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, s.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, s._enabled = function(t, e) {
                return a || o.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, s._kill = function() {
                return this._enabled(!1, !1)
            }, s.kill = function(t, e) {
                return this._kill(t, e), this
            }, s._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, s._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, s._callback = function(t) {
                var e = this.vars;
                e[t].apply(e[t + "Scope"] || e.callbackScope || this, e[t + "Params"] || _)
            }, s.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, s.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, s.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, s.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, s.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, s.totalTime = function(t, e, i) {
                if (a || o.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), D.length && U())
                }
                return this
            }, s.progress = s.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, s.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, s.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, s.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || u, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, s.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, s.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (a || t || o.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && this.render(n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, !0, !0)), this._gc && !t && this._enabled(!0, !1), this
            };
            var A = y("core.SimpleTimeline", function(t) {
                O.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            s = A.prototype = new O, s.constructor = A, s.kill()._gc = !1, s._first = s._last = s._recent = null, s._sortChildren = !1, s.add = s.insert = function(t, e) {
                var i, n;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (n = t._startTime; i && i._startTime > n;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._recent = t, this._timeline && this._uncache(!0), this
            }, s._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, s.render = function(t, e, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
            }, s.rawTime = function() {
                return a || o.wake(), this._totalTime
            };
            var z = y("TweenLite", function(e, i, n) {
                    if (O.call(this, i, n), this.render = z.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : z.selector(e) || e;
                    var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? q[z.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l], (a || e instanceof Array || e.push && f(e)) && "number" != typeof e[0])
                        for (this._targets = o = p(e), this._propLookup = [], this._siblings = [], r = 0; o.length > r; r++) s = o[r], s ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(p(s))) : (this._siblings[r] = Y(s, this, !1), 1 === l && this._siblings[r].length > 1 && H(s, this, null, 1, this._siblings[r])) : (s = o[r--] = z.selector(s), "string" == typeof s && o.splice(r + 1, 1)) : o.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = Y(e, this, !1), 1 === l && this._siblings.length > 1 && H(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -u, this.render(-this._delay))
                }, !0),
                R = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                I = function(t, e) {
                    var i, n = {};
                    for (i in t) $[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!N[i] || N[i] && N[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                };
            s = z.prototype = new O, s.constructor = z, s.kill()._gc = !1, s.ratio = 0, s._firstPT = s._targets = s._overwrittenProps = s._startAt = null, s._notifyPluginsOfEnabled = s._lazy = !1, z.version = "1.17.0", z.defaultEase = s._ease = new x(null, null, 1, 1), z.defaultOverwrite = "auto", z.ticker = o, z.autoSleep = 120, z.lagSmoothing = function(t, e) {
                o.lagSmoothing(t, e)
            }, z.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (z.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var D = [],
                L = {},
                M = z._internals = {
                    isArray: f,
                    isSelector: R,
                    lazyTweens: D
                },
                N = z._plugins = {},
                F = M.tweenLookup = {},
                j = 0,
                $ = M.reservedProps = {
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
                    callbackScope: 1
                },
                q = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                W = O._rootFramesTimeline = new A,
                B = O._rootTimeline = new A,
                X = 30,
                U = M.lazyRender = function() {
                    var t, e = D.length;
                    for (L = {}; --e > -1;) t = D[e], t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    D.length = 0
                };
            B._startTime = o.time, W._startTime = o.frame, B._active = W._active = !0, setTimeout(U, 1), O._updateRoot = z.render = function() {
                var t, e, i;
                if (D.length && U(), B.render((o.time - B._startTime) * B._timeScale, !1, !1), W.render((o.frame - W._startTime) * W._timeScale, !1, !1), D.length && U(), o.frame >= X) {
                    X = o.frame + (parseInt(z.autoSleep, 10) || 120);
                    for (i in F) {
                        for (e = F[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete F[i]
                    }
                    if (i = B._first, (!i || i._paused) && z.autoSleep && !W._first && 1 === o._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || o.sleep()
                    }
                }
            }, o.addEventListener("tick", O._updateRoot);
            var Y = function(t, e, i) {
                    var n, r, s = t._gsTweenID;
                    if (F[s || (t._gsTweenID = s = "t" + j++)] || (F[s] = {
                            target: t,
                            tweens: []
                        }), e && (n = F[s].tweens, n[r = n.length] = e, i))
                        for (; --r > -1;) n[r] === e && n.splice(r, 1);
                    return F[s].tweens
                },
                V = function(t, e, i, n) {
                    var r, s, o = t.vars.onOverwrite;
                    return o && (r = o(t, e, i, n)), o = z.onOverwrite, o && (s = o(t, e, i, n)), r !== !1 && s !== !1
                },
                H = function(t, e, i, n, r) {
                    var s, o, a, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length, s = 0; l > s; s++)
                            if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                            else if (5 === n) break;
                        return o
                    }
                    var h, p = e._startTime + u,
                        c = [],
                        f = 0,
                        d = 0 === e._duration;
                    for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || G(e, 0, d), 0 === G(a, h, d) && (c[f++] = a)) : p >= a._startTime && a._startTime + a.totalDuration() / a._timeScale > p && ((d || !a._initted) && 2e-10 >= p - a._startTime || (c[f++] = a)));
                    for (s = f; --s > -1;)
                        if (a = c[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !V(a, e)) continue;
                            a._enabled(!1, !1) && (o = !0)
                        }
                    return o
                },
                G = function(t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                        if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return s /= r, s > e ? s - e : i && s === e || !t._initted && 2 * u > s - e ? u : (s += t.totalDuration() / t._timeScale / r) > e + u ? 0 : s - e - u
                };
            s._init = function() {
                var t, e, i, n, r, s = this.vars,
                    o = this._overwrittenProps,
                    a = this._duration,
                    l = !!s.immediateRender,
                    h = s.ease;
                if (s.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (n in s.startAt) r[n] = s.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && s.lazy !== !1, r.startAt = r.delay = null, this._startAt = z.to(this.target, 0, r), l)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== a) return
                } else if (s.runBackwards && 0 !== a)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (l = !1), i = {};
                        for (n in s) $[n] && "autoCSS" !== n || (i[n] = s[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && s.lazy !== !1, i.immediateRender = l, this._startAt = z.to(this.target, 0, i), l) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    }
                if (this._ease = h = h ? h instanceof x ? h : "function" == typeof h ? new x(h, s.easeParams) : b[h] || z.defaultEase : z.defaultEase, s.easeParams instanceof Array && h.config && (this._ease = h.config.apply(h, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, o);
                if (e && z._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = s.onUpdate, this._initted = !0
            }, s._initProps = function(e, i, n, r) {
                var s, o, a, l, h, u;
                if (null == e) return !1;
                L[e._gsTweenID] && U(), this.vars.css || e.style && e !== t && e.nodeType && N.css && this.vars.autoCSS !== !1 && I(this.vars, e);
                for (s in this.vars) {
                    if (u = this.vars[s], $[s]) u && (u instanceof Array || u.push && f(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[s] = u = this._swapSelfInParams(u, this));
                    else if (N[s] && (l = new N[s])._onInitTween(e, this.vars[s], this)) {
                        for (this._firstPT = h = {
                                _next: this._firstPT,
                                t: l,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: s,
                                pg: !0,
                                pr: l._priority
                            }, o = l._overwriteProps.length; --o > -1;) i[l._overwriteProps[o]] = this._firstPT;
                        (l._priority || l._onInitAllProps) && (a = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[s] = h = {
                        _next: this._firstPT,
                        t: e,
                        p: s,
                        f: "function" == typeof e[s],
                        n: s,
                        pg: !1,
                        pr: 0
                    }, h.s = h.f ? e[s.indexOf("set") || "function" != typeof e["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(e[s]), h.c = "string" == typeof u && "=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * Number(u.substr(2)) : Number(u) - h.s || 0;
                    h && h._next && (h._next._prev = h)
                }
                return r && this._kill(r, e) ? this._initProps(e, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && H(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0), a)
            }, s.render = function(t, e, i) {
                var n, r, s, o, a = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > h || h === u && "isPause" !== this.data) && h !== t && (i = !0, h > u && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t : u);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== u || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t : u)), this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var p = t / l,
                        c = this._easeType,
                        f = this._easePower;
                    (1 === c || 3 === c && p >= .5) && (p = 1 - p), 3 === c && (p *= 2), 1 === f ? p *= p : 2 === f ? p *= p * p : 3 === f ? p *= p * p * p : 4 === f && (p *= p * p * p * p), this.ratio = 1 === c ? 1 - p : 2 === c ? p : .5 > t / l ? p / 2 : 1 - p / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, D.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > t && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i), e || (this._time !== a || n) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === u && o !== u && (this._rawPrevTime = 0))
                }
            }, s._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : z.selector(e) || e;
                var n, r, s, o, a, l, h, u, p, c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((f(e) || R(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (h = t || a, u = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (z.onOverwrite || this.vars.onOverwrite)) {
                            for (s in h) a[s] && (p || (p = []), p.push(s));
                            if ((p || !t) && !V(this, i, e, p)) return !1
                        }
                        for (s in h)(o = a[s]) && (c && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), u && (r[s] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, s.invalidate = function() {
                return this._notifyPluginsOfEnabled && z._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], O.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -u, this.render(-this._delay)), this
            }, s._enabled = function(t, e) {
                if (a || o.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = Y(n[i], this, !0);
                    else this._siblings = Y(this.target, this, !0)
                }
                return O.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? z._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, z.to = function(t, e, i) {
                return new z(t, e, i)
            }, z.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new z(t, e, i)
            }, z.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new z(t, e, n)
            }, z.delayedCall = function(t, e, i, n, r) {
                return new z(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, z.set = function(t, e) {
                return new z(t, 0, e)
            }, z.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : z.selector(t) || t;
                var i, n, r, s;
                if ((f(t) || R(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(z.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
                } else
                    for (n = Y(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n
            }, z.killTweensOf = z.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = z.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
            };
            var Q = y("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Q.prototype
            }, !0);
            if (s = Q.prototype, Q.version = "1.10.1", Q.API = 2, s._firstPT = null, s._addTween = function(t, e, i, n, r, s) {
                    var o, a;
                    return null != n && (o = "number" == typeof n || "=" !== n.charAt(1) ? Number(n) - Number(i) : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))) ? (this._firstPT = a = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: o,
                        f: "function" == typeof t[e],
                        n: r || e,
                        r: s
                    }, a._next && (a._next._prev = a), a) : void 0
                }, s.setRatio = function(t) {
                    for (var e, i = this._firstPT, n = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : n > e && e > -n && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, s._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, s._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, z._onPluginEvent = function(t, e) {
                    var i, n, r, s, o, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : s) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : s = a, a = o
                        }
                        a = e._firstPT = r
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, Q.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === Q.API && (N[(new t[e])._propName] = t[e]);
                    return !0
                }, g.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        r = t.overwriteProps,
                        s = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        o = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            Q.call(this, i, n), this._overwriteProps = r || []
                        }, t.global === !0),
                        a = o.prototype = new Q(i);
                    a.constructor = o, o.API = t.API;
                    for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                    return o.version = t.version, Q.activate([o]), o
                }, n = t._gsQueue) {
                for (r = 0; n.length > r; r++) n[r]();
                for (s in d) d[s].func || t.console.log("GSAP encountered missing dependency: com.greensock." + s)
            }
            a = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
            var i, n, r, s, o = function() {
                    t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                },
                a = _gsScope._gsDefine.globals,
                l = {},
                h = o.prototype = new t("css");
            h.constructor = o, o.version = "1.17.0", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, h = "px", o.suffixMap = {
                top: h,
                right: h,
                bottom: h,
                left: h,
                width: h,
                height: h,
                fontSize: h,
                padding: h,
                margin: h,
                perspective: h,
                lineHeight: ""
            };
            var u, p, c, f, d, m, g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                _ = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                x = /(?:\d|\-|\+|=|#|\.)*/g,
                b = /opacity *= *([^)]*)/i,
                w = /opacity:([^;]*)/i,
                T = /alpha\(opacity *=.+?\)/i,
                S = /^(rgb|hsl)/,
                P = /([A-Z])/g,
                E = /-([a-z])/gi,
                C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                O = function(t, e) {
                    return e.toUpperCase()
                },
                k = /(?:Left|Right|Width)/i,
                A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                z = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                R = /,(?=[^\)]*(?:\(|$))/gi,
                I = Math.PI / 180,
                D = 180 / Math.PI,
                L = {},
                M = document,
                N = function(t) {
                    return M.createElementNS ? M.createElementNS("http://www.w3.org/1999/xhtml", t) : M.createElement(t)
                },
                F = N("div"),
                j = N("img"),
                $ = o._internals = {
                    _specialProps: l
                },
                q = navigator.userAgent,
                W = function() {
                    var t = q.indexOf("Android"),
                        e = N("a");
                    return c = -1 !== q.indexOf("Safari") && -1 === q.indexOf("Chrome") && (-1 === t || Number(q.substr(t + 8, 1)) > 3), d = c && 6 > Number(q.substr(q.indexOf("Version/") + 8, 1)), f = -1 !== q.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (m = parseFloat(RegExp.$1)), e ? (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) : !1
                }(),
                B = function(t) {
                    return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                },
                X = function(t) {
                    window.console && console.log(t)
                },
                U = "",
                Y = "",
                V = function(t, e) {
                    e = e || F;
                    var i, n, r = e.style;
                    if (void 0 !== r[t]) return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                    return n >= 0 ? (Y = 3 === n ? "ms" : i[n], U = "-" + Y.toLowerCase() + "-", Y + t) : null
                },
                H = M.defaultView ? M.defaultView.getComputedStyle : function() {},
                G = o.getStyle = function(t, e, i, n, r) {
                    var s;
                    return W || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || H(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : B(t)
                },
                Q = $.convertToPixels = function(t, i, n, r, s) {
                    if ("px" === r || !r) return n;
                    if ("auto" === r || !n) return 0;
                    var a, l, h, u = k.test(i),
                        p = t,
                        c = F.style,
                        f = 0 > n;
                    if (f && (n = -n), "%" === r && -1 !== i.indexOf("border")) a = n / 100 * (u ? t.clientWidth : t.clientHeight);
                    else {
                        if (c.cssText = "border:0 solid red;position:" + G(t, "position") + ";line-height:0;", "%" !== r && p.appendChild) c[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                        else {
                            if (p = t.parentNode || M.body, l = p._gsCache, h = e.ticker.frame, l && u && l.time === h) return l.width * n / 100;
                            c[u ? "width" : "height"] = n + r
                        }
                        p.appendChild(F), a = parseFloat(F[u ? "offsetWidth" : "offsetHeight"]), p.removeChild(F), u && "%" === r && o.cacheWidths !== !1 && (l = p._gsCache = p._gsCache || {}, l.time = h, l.width = 100 * (a / n)), 0 !== a || s || (a = Q(t, i, n, r, !0))
                    }
                    return f ? -a : a
                },
                Z = $.calculateOffset = function(t, e, i) {
                    if ("absolute" !== G(t, "position", i)) return 0;
                    var n = "left" === e ? "Left" : "Top",
                        r = G(t, "margin" + n, i);
                    return t["offset" + n] - (Q(t, e, parseFloat(r), r.replace(x, "")) || 0)
                },
                J = function(t, e) {
                    var i, n, r, s = {};
                    if (e = e || H(t, null))
                        if (i = e.length)
                            for (; --i > -1;) r = e[i], (-1 === r.indexOf("-transform") || St === r) && (s[r.replace(E, O)] = e.getPropertyValue(r));
                        else
                            for (i in e)(-1 === i.indexOf("Transform") || Tt === i) && (s[i] = e[i]);
                    else if (e = t.currentStyle || t.style)
                        for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(E, O)] = e[i]);
                    return W || (s.opacity = B(t)), n = Mt(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, Et && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                },
                K = function(t, e, i, n, r) {
                    var s, o, a, l = {},
                        h = t.style;
                    for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(_, "") ? s : 0 : Z(t, o), void 0 !== h[o] && (a = new ft(h, o, h[o], a)));
                    if (n)
                        for (o in n) "className" !== o && (l[o] = n[o]);
                    return {
                        difs: l,
                        firstMPT: a
                    }
                },
                tt = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                },
                et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                it = function(t, e, i) {
                    var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                        r = tt[e],
                        s = r.length;
                    for (i = i || H(t, null); --s > -1;) n -= parseFloat(G(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(G(t, "border" + r[s] + "Width", i, !0)) || 0;
                    return n
                },
                nt = function(t, e) {
                    (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                    var i = t.split(" "),
                        n = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                        r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                    return null == r ? r = "center" === n ? "50%" : "0" : "center" === r && (r = "50%"), ("center" === n || isNaN(parseFloat(n)) && -1 === (n + "").indexOf("=")) && (n = "50%"), t = n + " " + r + (i.length > 2 ? " " + i[2] : ""), e && (e.oxp = -1 !== n.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === n.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(n.replace(_, "")), e.oy = parseFloat(r.replace(_, "")), e.v = t), e || t
                },
                rt = function(t, e) {
                    return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                },
                st = function(t, e) {
                    return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t)
                },
                ot = function(t, e, i, n) {
                    var r, s, o, a, l, h = 1e-6;
                    return null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : D) - (l ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= r, o !== o % (r / 2) && (o = 0 > o ? o + r : o - r)), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * r) % r - (0 | o / r) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (0 | o / r) * r)), a = e + o), h > a && a > -h && (a = 0), a
                },
                at = {
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
                lt = function(t, e, i) {
                    return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                },
                ht = o.parseColor = function(t) {
                    var e, i, n, r, s, o;
                    return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), at[t] ? at[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), n = t.charAt(3), t = "#" + e + e + i + i + n + n), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(g), r = Number(t[0]) % 360 / 360, s = Number(t[1]) / 100, o = Number(t[2]) / 100, i = .5 >= o ? o * (s + 1) : o + s - o * s, e = 2 * o - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = lt(r + 1 / 3, e, i), t[1] = lt(r, e, i), t[2] = lt(r - 1 / 3, e, i), t) : (t = t.match(g) || at.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : at.black
                },
                ut = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
            for (h in at) ut += "|" + h + "\\b";
            ut = RegExp(ut + ")", "gi");
            var pt = function(t, e, i, n) {
                    if (null == t) return function(t) {
                        return t
                    };
                    var r, s = e ? (t.match(ut) || [""])[0] : "",
                        o = t.split(s).join("").match(v) || [],
                        a = t.substr(0, t.indexOf(o[0])),
                        l = ")" === t.charAt(t.length - 1) ? ")" : "",
                        h = -1 !== t.indexOf(" ") ? " " : ",",
                        u = o.length,
                        p = u > 0 ? o[0].replace(g, "") : "";
                    return u ? r = e ? function(t) {
                        var e, c, f, d;
                        if ("number" == typeof t) t += p;
                        else if (n && R.test(t)) {
                            for (d = t.replace(R, "|").split("|"), f = 0; d.length > f; f++) d[f] = r(d[f]);
                            return d.join(",")
                        }
                        if (e = (t.match(ut) || [s])[0], c = t.split(e).join("").match(v) || [], f = c.length, u > f--)
                            for (; u > ++f;) c[f] = i ? c[0 | (f - 1) / 2] : o[f];
                        return a + c.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                    } : function(t) {
                        var e, s, c;
                        if ("number" == typeof t) t += p;
                        else if (n && R.test(t)) {
                            for (s = t.replace(R, "|").split("|"), c = 0; s.length > c; c++) s[c] = r(s[c]);
                            return s.join(",")
                        }
                        if (e = t.match(v) || [], c = e.length, u > c--)
                            for (; u > ++c;) e[c] = i ? e[0 | (c - 1) / 2] : o[c];
                        return a + e.join(h) + l
                    } : function(t) {
                        return t
                    }
                },
                ct = function(t) {
                    return t = t.split(","),
                        function(e, i, n, r, s, o, a) {
                            var l, h = (i + "").split(" ");
                            for (a = {}, l = 0; 4 > l; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                            return r.parse(e, a, s, o)
                        }
                },
                ft = ($._setPluginRatio = function(t) {
                    this.plugin.setRatio(t);
                    for (var e, i, n, r, s = this.data, o = s.proxy, a = s.firstMPT, l = 1e-6; a;) e = o[a.v], a.r ? e = Math.round(e) : l > e && e > -l && (e = 0), a.t[a.p] = e, a = a._next;
                    if (s.autoRotate && (s.autoRotate.rotation = o.rotation), 1 === t)
                        for (a = s.firstMPT; a;) {
                            if (i = a.t, i.type) {
                                if (1 === i.type) {
                                    for (r = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                    i.e = r
                                }
                            } else i.e = i.s + i.xs0;
                            a = a._next
                        }
                }, function(t, e, i, n, r) {
                    this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                }),
                dt = ($._parseToProxy = function(t, e, i, n, r, s) {
                    var o, a, l, h, u, p = n,
                        c = {},
                        f = {},
                        d = i._transform,
                        m = L;
                    for (i._transform = null, L = e, n = u = i.parse(t, e, n, r), L = m, s && (i._transform = d, p && (p._prev = null, p._prev && (p._prev._next = null))); n && n !== p;) {
                        if (1 >= n.type && (a = n.p, f[a] = n.s + n.c, c[a] = n.s, s || (h = new ft(n, "s", a, h, n.r), n.c = 0), 1 === n.type))
                            for (o = n.l; --o > 0;) l = "xn" + o, a = n.p + "_" + l, f[a] = n.data[l], c[a] = n[l], s || (h = new ft(n, l, a, h, n.rxp[l]));
                        n = n._next
                    }
                    return {
                        proxy: c,
                        end: f,
                        firstMPT: h,
                        pt: u
                    }
                }, $.CSSPropTween = function(t, e, n, r, o, a, l, h, u, p, c) {
                    this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof dt || s.push(this.n), this.r = h, this.type = a || 0, u && (this.pr = u, i = !0), this.b = void 0 === p ? n : p, this.e = void 0 === c ? n + r : c, o && (this._next = o, o._prev = this)
                }),
                mt = function(t, e, i, n, r, s) {
                    var o = new dt(t, e, i, n - i, r, -1, s);
                    return o.b = i, o.e = o.xs0 = n, o
                },
                gt = o.parseComplex = function(t, e, i, n, r, s, o, a, l, h) {
                    i = i || s || "", o = new dt(t, e, 0, 0, o, h ? 2 : 1, null, !1, a, i, n), n += "";
                    var p, c, f, d, m, v, _, x, b, w, T, P, E = i.split(", ").join(",").split(" "),
                        C = n.split(", ").join(",").split(" "),
                        O = E.length,
                        k = u !== !1;
                    for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (E = E.join(" ").replace(R, ", ").split(" "), C = C.join(" ").replace(R, ", ").split(" "), O = E.length), O !== C.length && (E = (s || "").split(" "), O = E.length), o.plugin = l, o.setRatio = h, p = 0; O > p; p++)
                        if (d = E[p], m = C[p], x = parseFloat(d), x || 0 === x) o.appendXtra("", x, rt(m, x), m.replace(y, ""), k && -1 !== m.indexOf("px"), !0);
                        else if (r && ("#" === d.charAt(0) || at[d] || S.test(d))) P = "," === m.charAt(m.length - 1) ? ")," : ")", d = ht(d), m = ht(m), b = d.length + m.length > 6, b && !W && 0 === m[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(C[p]).join("transparent")) : (W || (b = !1), o.appendXtra(b ? "rgba(" : "rgb(", d[0], m[0] - d[0], ",", !0, !0).appendXtra("", d[1], m[1] - d[1], ",", !0).appendXtra("", d[2], m[2] - d[2], b ? "," : P, !0), b && (d = 4 > d.length ? 1 : d[3], o.appendXtra("", d, (4 > m.length ? 1 : m[3]) - d, P, !1)));
                    else if (v = d.match(g)) {
                        if (_ = m.match(y), !_ || _.length !== v.length) return o;
                        for (f = 0, c = 0; v.length > c; c++) T = v[c], w = d.indexOf(T, f), o.appendXtra(d.substr(f, w - f), Number(T), rt(_[c], T), "", k && "px" === d.substr(w + T.length, 2), 0 === c), f = w + T.length;
                        o["xs" + o.l] += d.substr(f)
                    } else o["xs" + o.l] += o.l ? " " + d : d;
                    if (-1 !== n.indexOf("=") && o.data) {
                        for (P = o.xs0 + o.data.s, p = 1; o.l > p; p++) P += o["xs" + p] + o.data["xn" + p];
                        o.e = P + o["xs" + p]
                    }
                    return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
                },
                yt = 9;
            for (h = dt.prototype, h.l = h.pr = 0; --yt > 0;) h["xn" + yt] = 0, h["xs" + yt] = "";
            h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, n, r, s) {
                var o = this,
                    a = o.l;
                return o["xs" + a] += s && a ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new dt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = {
                    s: e + i
                }, o.rxp = {}, o.s = e, o.c = i, o.r = r, o)) : (o["xs" + a] += e + (n || ""), o)
            };
            var vt = function(t, e) {
                    e = e || {}, this.p = e.prefix ? V(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || pt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                },
                _t = $._registerComplexSpecialProp = function(t, e, i) {
                    "object" != typeof e && (e = {
                        parser: i
                    });
                    var n, r, s = t.split(","),
                        o = e.defaultValue;
                    for (i = i || [o], n = 0; s.length > n; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || o, r = new vt(s[n], e)
                },
                xt = function(t) {
                    if (!l[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        _t(t, {
                            parser: function(t, i, n, r, s, o, h) {
                                var u = a.com.greensock.plugins[e];
                                return u ? (u._cssRegister(), l[n].parse(t, i, n, r, s, o, h)) : (X("Error: " + e + " js file not loaded."), s)
                            }
                        })
                    }
                };
            h = vt.prototype, h.parseComplex = function(t, e, i, n, r, s) {
                var o, a, l, h, u, p, c = this.keyword;
                if (this.multi && (R.test(i) || R.test(e) ? (a = e.replace(R, "|").split("|"), l = i.replace(R, "|").split("|")) : c && (a = [e], l = [i])), l) {
                    for (h = l.length > a.length ? l.length : a.length, o = 0; h > o; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, c && (u = e.indexOf(c), p = i.indexOf(c), u !== p && (-1 === p ? a[o] = a[o].split(c).join("") : -1 === u && (a[o] += " " + c)));
                    e = a.join(", "), i = l.join(", ")
                }
                return gt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
            }, h.parse = function(t, e, i, n, s, o) {
                return this.parseComplex(t.style, this.format(G(t, this.p, r, !1, this.dflt)), this.format(e), s, o)
            }, o.registerSpecialProp = function(t, e, i) {
                _t(t, {
                    parser: function(t, n, r, s, o, a) {
                        var l = new dt(t, r, 0, 0, o, 2, r, !1, i);
                        return l.plugin = a, l.setRatio = e(t, n, s._tween, r), l
                    },
                    priority: i
                })
            }, o.useSVGTransformAttr = c || f;
            var bt, wt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                Tt = V("transform"),
                St = U + "transform",
                Pt = V("transformOrigin"),
                Et = null !== V("perspective"),
                Ct = $.Transform = function() {
                    this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = o.defaultForce3D !== !1 && Et ? o.defaultForce3D || "auto" : !1
                },
                Ot = window.SVGElement,
                kt = function(t, e, i) {
                    var n, r = M.createElementNS("http://www.w3.org/2000/svg", t),
                        s = /([a-z])([A-Z])/g;
                    for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                    return e.appendChild(r), r
                },
                At = M.documentElement,
                zt = function() {
                    var t, e, i, n = m || /Android/i.test(q) && !window.chrome;
                    return M.createElementNS && !n && (t = kt("svg", At), e = kt("rect", t, {
                        width: 100,
                        height: 50,
                        x: 100
                    }), i = e.getBoundingClientRect().width, e.style[Pt] = "50% 50%", e.style[Tt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(f && Et), At.removeChild(t)), n
                }(),
                Rt = function(t, e, i, n, r) {
                    var s, a, l, h, u, p, c, f, d, m, g, y, v, _, x = t._gsTransform,
                        b = Lt(t, !0);
                    x && (v = x.xOrigin, _ = x.yOrigin), (!n || 2 > (s = n.split(" ")).length) && (c = t.getBBox(), e = nt(e).split(" "), s = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * c.width : parseFloat(e[0])) + c.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * c.height : parseFloat(e[1])) + c.y]), i.xOrigin = h = parseFloat(s[0]), i.yOrigin = u = parseFloat(s[1]), n && b !== Dt && (p = b[0], c = b[1], f = b[2], d = b[3], m = b[4], g = b[5], y = p * d - c * f, a = h * (d / y) + u * (-f / y) + (f * g - d * m) / y, l = h * (-c / y) + u * (p / y) - (p * g - c * m) / y, h = i.xOrigin = s[0] = a, u = i.yOrigin = s[1] = l), x && (r || r !== !1 && o.defaultSmoothOrigin !== !1 ? (a = h - v, l = u - _, x.xOffset += a * b[0] + l * b[2] - a, x.yOffset += a * b[1] + l * b[3] - l) : x.xOffset = x.yOffset = 0), t.setAttribute("data-svg-origin", s.join(" "))
                },
                It = function(t) {
                    return !!(Ot && "function" == typeof t.getBBox && t.getCTM && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                },
                Dt = [1, 0, 0, 1, 0, 0],
                Lt = function(t, e) {
                    var i, n, r, s, o, a = t._gsTransform || new Ct,
                        l = 1e5;
                    if (Tt ? n = G(t, St, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(A), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), a.x || 0, a.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, (a.svg || t.getBBox && It(t)) && (i && -1 !== (t.style[Tt] + "").indexOf("matrix") && (n = t.style[Tt], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Dt;
                    for (r = (n || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], yt = r.length; --yt > -1;) s = Number(r[yt]), r[yt] = (o = s - (s |= 0)) ? (0 | o * l + (0 > o ? -.5 : .5)) / l + s : s;
                    return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                },
                Mt = $.getTransform = function(t, i, n, s) {
                    if (t._gsTransform && n && !s) return t._gsTransform;
                    var a, l, h, u, p, c, f = n ? t._gsTransform || new Ct : new Ct,
                        d = 0 > f.scaleX,
                        m = 2e-5,
                        g = 1e5,
                        y = Et ? parseFloat(G(t, Pt, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0,
                        v = parseFloat(o.defaultTransformPerspective) || 0;
                    if (f.svg = !(!t.getBBox || !It(t)), f.svg && (Rt(t, G(t, Pt, r, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), bt = o.useSVGTransformAttr || zt), a = Lt(t), a !== Dt) {
                        if (16 === a.length) {
                            var _, x, b, w, T, S = a[0],
                                P = a[1],
                                E = a[2],
                                C = a[3],
                                O = a[4],
                                k = a[5],
                                A = a[6],
                                z = a[7],
                                R = a[8],
                                I = a[9],
                                L = a[10],
                                M = a[12],
                                N = a[13],
                                F = a[14],
                                j = a[11],
                                $ = Math.atan2(A, L);
                            f.zOrigin && (F = -f.zOrigin, M = R * F - a[12], N = I * F - a[13], F = L * F + f.zOrigin - a[14]), f.rotationX = $ * D, $ && (w = Math.cos(-$), T = Math.sin(-$), _ = O * w + R * T, x = k * w + I * T, b = A * w + L * T, R = O * -T + R * w, I = k * -T + I * w, L = A * -T + L * w, j = z * -T + j * w, O = _, k = x, A = b), $ = Math.atan2(R, L), f.rotationY = $ * D, $ && (w = Math.cos(-$), T = Math.sin(-$), _ = S * w - R * T, x = P * w - I * T, b = E * w - L * T, I = P * T + I * w, L = E * T + L * w, j = C * T + j * w, S = _, P = x, E = b), $ = Math.atan2(P, S), f.rotation = $ * D, $ && (w = Math.cos(-$), T = Math.sin(-$), S = S * w + O * T, x = P * w + k * T, k = P * -T + k * w, A = E * -T + A * w, P = x), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY += 180), f.scaleX = (0 | Math.sqrt(S * S + P * P) * g + .5) / g, f.scaleY = (0 | Math.sqrt(k * k + I * I) * g + .5) / g, f.scaleZ = (0 | Math.sqrt(A * A + L * L) * g + .5) / g, f.skewX = 0, f.perspective = j ? 1 / (0 > j ? -j : j) : 0, f.x = M, f.y = N, f.z = F, f.svg && (f.x -= f.xOrigin - (f.xOrigin * S - f.yOrigin * O), f.y -= f.yOrigin - (f.yOrigin * P - f.xOrigin * k))
                        } else if (!(Et && !s && a.length && f.x === a[4] && f.y === a[5] && (f.rotationX || f.rotationY) || void 0 !== f.x && "none" === G(t, "display", i))) {
                            var q = a.length >= 6,
                                W = q ? a[0] : 1,
                                B = a[1] || 0,
                                X = a[2] || 0,
                                U = q ? a[3] : 1;
                            f.x = a[4] || 0, f.y = a[5] || 0, h = Math.sqrt(W * W + B * B), u = Math.sqrt(U * U + X * X), p = W || B ? Math.atan2(B, W) * D : f.rotation || 0, c = X || U ? Math.atan2(X, U) * D + p : f.skewX || 0, Math.abs(c) > 90 && 270 > Math.abs(c) && (d ? (h *= -1, c += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (u *= -1, c += 0 >= c ? 180 : -180)), f.scaleX = h, f.scaleY = u, f.rotation = p, f.skewX = c, Et && (f.rotationX = f.rotationY = f.z = 0, f.perspective = v, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * W + f.yOrigin * X), f.y -= f.yOrigin - (f.xOrigin * B + f.yOrigin * U))
                        }
                        f.zOrigin = y;
                        for (l in f) m > f[l] && f[l] > -m && (f[l] = 0)
                    }
                    return n && (t._gsTransform = f, f.svg && (bt && t.style[Tt] ? e.delayedCall(.001, function() {
                        $t(t.style, Tt)
                    }) : !bt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                        t.removeAttribute("transform")
                    }))), f
                },
                Nt = function(t) {
                    var e, i, n = this.data,
                        r = -n.rotation * I,
                        s = r + n.skewX * I,
                        o = 1e5,
                        a = (0 | Math.cos(r) * n.scaleX * o) / o,
                        l = (0 | Math.sin(r) * n.scaleX * o) / o,
                        h = (0 | Math.sin(s) * -n.scaleY * o) / o,
                        u = (0 | Math.cos(s) * n.scaleY * o) / o,
                        p = this.t.style,
                        c = this.t.currentStyle;
                    if (c) {
                        i = l, l = -h, h = -i, e = c.filter, p.filter = "";
                        var f, d, g = this.t.offsetWidth,
                            y = this.t.offsetHeight,
                            v = "absolute" !== c.position,
                            _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + l + ", M21=" + h + ", M22=" + u,
                            w = n.x + g * n.xPercent / 100,
                            T = n.y + y * n.yPercent / 100;
                        if (null != n.ox && (f = (n.oxp ? .01 * g * n.ox : n.ox) - g / 2, d = (n.oyp ? .01 * y * n.oy : n.oy) - y / 2, w += f - (f * a + d * l), T += d - (f * h + d * u)), v ? (f = g / 2, d = y / 2, _ += ", Dx=" + (f - (f * a + d * l) + w) + ", Dy=" + (d - (f * h + d * u) + T) + ")") : _ += ", sizingMethod='auto expand')", p.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(z, _) : _ + " " + e, (0 === t || 1 === t) && 1 === a && 0 === l && 0 === h && 1 === u && (v && -1 === _.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && p.removeAttribute("filter")), !v) {
                            var S, P, E, C = 8 > m ? 1 : -1;
                            for (f = n.ieOffsetX || 0, d = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * y)) / 2 + w), n.ieOffsetY = Math.round((y - ((0 > u ? -u : u) * y + (0 > h ? -h : h) * g)) / 2 + T), yt = 0; 4 > yt; yt++) P = et[yt], S = c[P], i = -1 !== S.indexOf("px") ? parseFloat(S) : Q(this.t, P, parseFloat(S), S.replace(x, "")) || 0, E = i !== n[P] ? 2 > yt ? -n.ieOffsetX : -n.ieOffsetY : 2 > yt ? f - n.ieOffsetX : d - n.ieOffsetY, p[P] = (n[P] = Math.round(i - E * (0 === yt || 2 === yt ? 1 : C))) + "px"
                        }
                    }
                },
                Ft = $.set3DTransformRatio = $.setTransformRatio = function(t) {
                    var e, i, n, r, s, o, a, l, h, u, p, c, d, m, g, y, v, _, x, b, w, T, S, P = this.data,
                        E = this.t.style,
                        C = P.rotation,
                        O = P.rotationX,
                        k = P.rotationY,
                        A = P.scaleX,
                        z = P.scaleY,
                        R = P.scaleZ,
                        D = P.x,
                        L = P.y,
                        M = P.z,
                        N = P.svg,
                        F = P.perspective,
                        j = P.force3D;
                    if (!((1 !== t && 0 !== t || "auto" !== j || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && j || M || F || k || O) || bt && N || !Et) return void(C || P.skewX || N ? (C *= I, T = P.skewX * I, S = 1e5, e = Math.cos(C) * A, r = Math.sin(C) * A, i = Math.sin(C - T) * -z, s = Math.cos(C - T) * z, T && "simple" === P.skewType && (v = Math.tan(T), v = Math.sqrt(1 + v * v), i *= v, s *= v, P.skewY && (e *= v, r *= v)), N && (D += P.xOrigin - (P.xOrigin * e + P.yOrigin * i) + P.xOffset, L += P.yOrigin - (P.xOrigin * r + P.yOrigin * s) + P.yOffset, bt && (P.xPercent || P.yPercent) && (m = this.t.getBBox(), D += .01 * P.xPercent * m.width, L += .01 * P.yPercent * m.height), m = 1e-6, m > D && D > -m && (D = 0), m > L && L > -m && (L = 0)), x = (0 | e * S) / S + "," + (0 | r * S) / S + "," + (0 | i * S) / S + "," + (0 | s * S) / S + "," + D + "," + L + ")", N && bt ? this.t.setAttribute("transform", "matrix(" + x) : E[Tt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + x) : E[Tt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + z + "," + D + "," + L + ")");
                    if (f && (m = 1e-4, m > A && A > -m && (A = R = 2e-5), m > z && z > -m && (z = R = 2e-5), !F || P.z || P.rotationX || P.rotationY || (F = 0)), C || P.skewX) C *= I, g = e = Math.cos(C), y = r = Math.sin(C), P.skewX && (C -= P.skewX * I, g = Math.cos(C), y = Math.sin(C), "simple" === P.skewType && (v = Math.tan(P.skewX * I), v = Math.sqrt(1 + v * v), g *= v, y *= v, P.skewY && (e *= v, r *= v))), i = -y, s = g;
                    else {
                        if (!(k || O || 1 !== R || F || N)) return void(E[Tt] = (P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + L + "px," + M + "px)" + (1 !== A || 1 !== z ? " scale(" + A + "," + z + ")" : ""));
                        e = s = 1, i = r = 0
                    }
                    h = 1, n = o = a = l = u = p = 0, c = F ? -1 / F : 0, d = P.zOrigin, m = 1e-6, b = ",", w = "0", C = k * I, C && (g = Math.cos(C), y = Math.sin(C), a = -y, u = c * -y, n = e * y, o = r * y, h = g, c *= g, e *= g, r *= g), C = O * I, C && (g = Math.cos(C), y = Math.sin(C), v = i * g + n * y, _ = s * g + o * y, l = h * y, p = c * y, n = i * -y + n * g, o = s * -y + o * g, h *= g, c *= g, i = v, s = _), 1 !== R && (n *= R, o *= R, h *= R, c *= R), 1 !== z && (i *= z, s *= z, l *= z, p *= z), 1 !== A && (e *= A, r *= A, a *= A, u *= A), (d || N) && (d && (D += n * -d, L += o * -d, M += h * -d + d), N && (D += P.xOrigin - (P.xOrigin * e + P.yOrigin * i) + P.xOffset, L += P.yOrigin - (P.xOrigin * r + P.yOrigin * s) + P.yOffset), m > D && D > -m && (D = w), m > L && L > -m && (L = w), m > M && M > -m && (M = 0)), x = P.xPercent || P.yPercent ? "translate(" + P.xPercent + "%," + P.yPercent + "%) matrix3d(" : "matrix3d(", x += (m > e && e > -m ? w : e) + b + (m > r && r > -m ? w : r) + b + (m > a && a > -m ? w : a), x += b + (m > u && u > -m ? w : u) + b + (m > i && i > -m ? w : i) + b + (m > s && s > -m ? w : s), O || k ? (x += b + (m > l && l > -m ? w : l) + b + (m > p && p > -m ? w : p) + b + (m > n && n > -m ? w : n), x += b + (m > o && o > -m ? w : o) + b + (m > h && h > -m ? w : h) + b + (m > c && c > -m ? w : c) + b) : x += ",0,0,0,0,1,0,", x += D + b + L + b + M + b + (F ? 1 + -M / F : 1) + ")", E[Tt] = x
                };
            h = Ct.prototype, h.x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, _t("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                parser: function(t, e, i, n, s, a, l) {
                    if (n._lastParsedTransform === l) return s;
                    n._lastParsedTransform = l;
                    var h, u, p, c, f, d, m, g, y, v = t._gsTransform,
                        _ = n._transform = Mt(t, r, !0, l.parseTransform),
                        x = t.style,
                        b = 1e-6,
                        w = wt.length,
                        T = l,
                        S = {},
                        P = "transformOrigin";
                    if ("string" == typeof T.transform && Tt) p = F.style, p[Tt] = T.transform, p.display = "block", p.position = "absolute", M.body.appendChild(F), h = Mt(F, null, !1), M.body.removeChild(F), null != T.xPercent && (h.xPercent = st(T.xPercent, _.xPercent)), null != T.yPercent && (h.yPercent = st(T.yPercent, _.yPercent));
                    else if ("object" == typeof T) {
                        if (h = {
                                scaleX: st(null != T.scaleX ? T.scaleX : T.scale, _.scaleX),
                                scaleY: st(null != T.scaleY ? T.scaleY : T.scale, _.scaleY),
                                scaleZ: st(T.scaleZ, _.scaleZ),
                                x: st(T.x, _.x),
                                y: st(T.y, _.y),
                                z: st(T.z, _.z),
                                xPercent: st(T.xPercent, _.xPercent),
                                yPercent: st(T.yPercent, _.yPercent),
                                perspective: st(T.transformPerspective, _.perspective)
                            }, m = T.directionalRotation, null != m)
                            if ("object" == typeof m)
                                for (p in m) T[p] = m[p];
                            else T.rotation = m;
                            "string" == typeof T.x && -1 !== T.x.indexOf("%") && (h.x = 0, h.xPercent = st(T.x, _.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (h.y = 0, h.yPercent = st(T.y, _.yPercent)), h.rotation = ot("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : _.rotation, _.rotation, "rotation", S), Et && (h.rotationX = ot("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : _.rotationX || 0, _.rotationX, "rotationX", S), h.rotationY = ot("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : _.rotationY || 0, _.rotationY, "rotationY", S)), h.skewX = null == T.skewX ? _.skewX : ot(T.skewX, _.skewX), h.skewY = null == T.skewY ? _.skewY : ot(T.skewY, _.skewY), (u = h.skewY - _.skewY) && (h.skewX += u, h.rotation += u)
                    }
                    for (Et && null != T.force3D && (_.force3D = T.force3D, d = !0), _.skewType = T.skewType || _.skewType || o.defaultSkewType, f = _.force3D || _.z || _.rotationX || _.rotationY || h.z || h.rotationX || h.rotationY || h.perspective, f || null == T.scale || (h.scaleZ = 1); --w > -1;) i = wt[w], c = h[i] - _[i], (c > b || -b > c || null != T[i] || null != L[i]) && (d = !0, s = new dt(_, i, _[i], c, s), i in S && (s.e = S[i]), s.xs0 = 0, s.plugin = a, n._overwriteProps.push(s.n));
                    return c = T.transformOrigin, _.svg && (c || T.svgOrigin) && (g = _.xOffset, y = _.yOffset, Rt(t, nt(c), h, T.svgOrigin, T.smoothOrigin), s = mt(_, "xOrigin", (v ? _ : h).xOrigin, h.xOrigin, s, P), s = mt(_, "yOrigin", (v ? _ : h).yOrigin, h.yOrigin, s, P), (g !== _.xOffset || y !== _.yOffset) && (s = mt(_, "xOffset", v ? g : _.xOffset, _.xOffset, s, P), s = mt(_, "yOffset", v ? y : _.yOffset, _.yOffset, s, P)), c = bt ? null : "0px 0px"), (c || Et && f && _.zOrigin) && (Tt ? (d = !0, i = Pt, c = (c || G(t, i, r, !1, "50% 50%")) + "", s = new dt(x, i, 0, 0, s, -1, P), s.b = x[i], s.plugin = a, Et ? (p = _.zOrigin, c = c.split(" "), _.zOrigin = (c.length > 2 && (0 === p || "0px" !== c[2]) ? parseFloat(c[2]) : p) || 0, s.xs0 = s.e = c[0] + " " + (c[1] || "50%") + " 0px", s = new dt(_, "zOrigin", 0, 0, s, -1, s.n), s.b = p, s.xs0 = s.e = _.zOrigin) : s.xs0 = s.e = c) : nt(c + "", _)), d && (n._transformType = _.svg && bt || !f && 3 !== this._transformType ? 2 : 3), s
                },
                prefix: !0
            }), _t("boxShadow", {
                defaultValue: "0px 0px 0px 0px #999",
                prefix: !0,
                color: !0,
                multi: !0,
                keyword: "inset"
            }), _t("borderRadius", {
                defaultValue: "0px",
                parser: function(t, e, i, s, o) {
                    e = this.format(e);
                    var a, l, h, u, p, c, f, d, m, g, y, v, _, x, b, w, T = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                        S = t.style;
                    for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), a = e.split(" "), l = 0; T.length > l; l++) this.p.indexOf("border") && (T[l] = V(T[l])), p = u = G(t, T[l], r, !1, "0px"), -1 !== p.indexOf(" ") && (u = p.split(" "), p = u[0], u = u[1]), c = h = a[l], f = parseFloat(p), v = p.substr((f + "").length), _ = "=" === c.charAt(1), _ ? (d = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), d *= parseFloat(c), y = c.substr((d + "").length - (0 > d ? 1 : 0)) || "") : (d = parseFloat(c), y = c.substr((d + "").length)), "" === y && (y = n[i] || v), y !== v && (x = Q(t, "borderLeft", f, v), b = Q(t, "borderTop", f, v), "%" === y ? (p = 100 * (x / m) + "%", u = 100 * (b / g) + "%") : "em" === y ? (w = Q(t, "borderLeft", 1, "em"), p = x / w + "em", u = b / w + "em") : (p = x + "px", u = b + "px"), _ && (c = parseFloat(p) + d + y, h = parseFloat(u) + d + y)), o = gt(S, T[l], p + " " + u, c + " " + h, !1, "0px", o);
                    return o
                },
                prefix: !0,
                formatter: pt("0px 0px 0px 0px", !1, !0)
            }), _t("backgroundPosition", {
                defaultValue: "0 0",
                parser: function(t, e, i, n, s, o) {
                    var a, l, h, u, p, c, f = "background-position",
                        d = r || H(t, null),
                        g = this.format((d ? m ? d.getPropertyValue(f + "-x") + " " + d.getPropertyValue(f + "-y") : d.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                        y = this.format(e);
                    if (-1 !== g.indexOf("%") != (-1 !== y.indexOf("%")) && (c = G(t, "backgroundImage").replace(C, ""), c && "none" !== c)) {
                        for (a = g.split(" "), l = y.split(" "), j.setAttribute("src", c), h = 2; --h > -1;) g = a[h], u = -1 !== g.indexOf("%"), u !== (-1 !== l[h].indexOf("%")) && (p = 0 === h ? t.offsetWidth - j.width : t.offsetHeight - j.height, a[h] = u ? parseFloat(g) / 100 * p + "px" : 100 * (parseFloat(g) / p) + "%");
                        g = a.join(" ")
                    }
                    return this.parseComplex(t.style, g, y, s, o)
                },
                formatter: nt
            }), _t("backgroundSize", {
                defaultValue: "0 0",
                formatter: nt
            }), _t("perspective", {
                defaultValue: "0px",
                prefix: !0
            }), _t("perspectiveOrigin", {
                defaultValue: "50% 50%",
                prefix: !0
            }), _t("transformStyle", {
                prefix: !0
            }), _t("backfaceVisibility", {
                prefix: !0
            }), _t("userSelect", {
                prefix: !0
            }), _t("margin", {
                parser: ct("marginTop,marginRight,marginBottom,marginLeft")
            }), _t("padding", {
                parser: ct("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), _t("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function(t, e, i, n, s, o) {
                    var a, l, h;
                    return 9 > m ? (l = t.currentStyle, h = 8 > m ? " " : ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(G(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, o)
                }
            }), _t("textShadow", {
                defaultValue: "0px 0px 0px #999",
                color: !0,
                multi: !0
            }), _t("autoRound,strictUnits", {
                parser: function(t, e, i, n, r) {
                    return r
                }
            }), _t("border", {
                defaultValue: "0px solid #000",
                parser: function(t, e, i, n, s, o) {
                    return this.parseComplex(t.style, this.format(G(t, "borderTopWidth", r, !1, "0px") + " " + G(t, "borderTopStyle", r, !1, "solid") + " " + G(t, "borderTopColor", r, !1, "#000")), this.format(e), s, o)
                },
                color: !0,
                formatter: function(t) {
                    var e = t.split(" ");
                    return e[0] + " " + (e[1] || "solid") + " " + (t.match(ut) || ["#000"])[0]
                }
            }), _t("borderWidth", {
                parser: ct("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), _t("float,cssFloat,styleFloat", {
                parser: function(t, e, i, n, r) {
                    var s = t.style,
                        o = "cssFloat" in s ? "cssFloat" : "styleFloat";
                    return new dt(s, o, 0, 0, r, -1, i, !1, 0, s[o], e)
                }
            });
            var jt = function(t) {
                var e, i = this.t,
                    n = i.filter || G(this.data, "filter") || "",
                    r = 0 | this.s + this.c * t;
                100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !G(this.data, "filter")) : (i.filter = n.replace(T, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(b, "opacity=" + r))
            };
            _t("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function(t, e, i, n, s, o) {
                    var a = parseFloat(G(t, "opacity", r, !1, "1")),
                        l = t.style,
                        h = "autoAlpha" === i;
                    return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === G(t, "visibility", r) && 0 !== e && (a = 0), W ? s = new dt(l, "opacity", a, e - a, s) : (s = new dt(l, "opacity", 100 * a, 100 * (e - a), s), s.xn1 = h ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = jt), h && (s = new dt(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                }
            });
            var $t = function(t, e) {
                    e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e))
                },
                qt = function(t) {
                    if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                        this.t.setAttribute("class", 0 === t ? this.b : this.e);
                        for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : $t(i, e.p), e = e._next;
                        1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                };
            _t("className", {
                parser: function(t, e, n, s, o, a, l) {
                    var h, u, p, c, f, d = t.getAttribute("class") || "",
                        m = t.style.cssText;
                    if (o = s._classNamePT = new dt(t, n, 0, 0, o, 2), o.setRatio = qt, o.pr = -11, i = !0, o.b = d, u = J(t, r), p = t._gsClassPT) {
                        for (c = {}, f = p.data; f;) c[f.p] = 1, f = f._next;
                        p.setRatio(1)
                    }
                    return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : d.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), h = K(t, u, J(t), l, c), t.setAttribute("class", d), o.data = h.firstMPT, t.style.cssText = m, o = o.xfirst = s.parse(t, h.difs, o, a)
                }
            });
            var Wt = function(t) {
                if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                    var e, i, n, r, s, o = this.t.style,
                        a = l.transform.parse;
                    if ("all" === this.e) o.cssText = "", r = !0;
                    else
                        for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Pt : l[i].p), $t(o, i);
                    r && ($t(o, Tt), s = this.t._gsTransform, s && (s.svg && this.t.removeAttribute("data-svg-origin"), delete this.t._gsTransform))
                }
            };
            for (_t("clearProps", {
                    parser: function(t, e, n, r, s) {
                        return s = new dt(t, n, 0, 0, s, 2), s.setRatio = Wt, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
                    }
                }), h = "bezier,throwProps,physicsProps,physics2D".split(","), yt = h.length; yt--;) xt(h[yt]);
            h = o.prototype, h._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, a) {
                if (!t.nodeType) return !1;
                this._target = t, this._tween = a, this._vars = e, u = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, r = H(t, ""), s = this._overwriteProps;
                var h, f, m, g, y, v, _, x, b, T = t.style;
                if (p && "" === T.zIndex && (h = G(t, "zIndex", r), ("auto" === h || "" === h) && this._addLazySet(T, "zIndex", 0)), "string" == typeof e && (g = T.cssText, h = J(t, r), T.cssText = g + ";" + e, h = K(t, h, J(t)).difs, !W && w.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, T.cssText = g), this._firstPT = f = e.className ? l.className.parse(t, e.className, "className", this, null, null, e) : this.parse(t, e, null), this._transformType) {
                    for (b = 3 === this._transformType, Tt ? c && (p = !0, "" === T.zIndex && (_ = G(t, "zIndex", r), ("auto" === _ || "" === _) && this._addLazySet(T, "zIndex", 0)), d && this._addLazySet(T, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (b ? "visible" : "hidden"))) : T.zoom = 1, m = f; m && m._next;) m = m._next;
                    x = new dt(t, "transform", 0, 0, null, 2), this._linkCSSP(x, null, m), x.setRatio = Tt ? Ft : Nt, x.data = this._transform || Mt(t, r, !0), x.tween = a, x.pr = -1, s.pop()
                }
                if (i) {
                    for (; f;) {
                        for (v = f._next, m = g; m && m.pr > f.pr;) m = m._next;
                        (f._prev = m ? m._prev : y) ? f._prev._next = f: g = f, (f._next = m) ? m._prev = f : y = f, f = v
                    }
                    this._firstPT = g
                }
                return !0
            }, h.parse = function(t, e, i, s) {
                var o, a, h, p, c, f, d, m, g, y, v = t.style;
                for (o in e) f = e[o], a = l[o], a ? i = a.parse(t, f, o, this, i, s, e) : (c = G(t, o, r) + "", g = "string" == typeof f, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || g && S.test(f) ? (g || (f = ht(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = gt(v, o, c, f, !0, "transparent", i, 0, s)) : !g || -1 === f.indexOf(" ") && -1 === f.indexOf(",") ? (h = parseFloat(c), d = h || 0 === h ? c.substr((h + "").length) : "", ("" === c || "auto" === c) && ("width" === o || "height" === o ? (h = it(t, o, r), d = "px") : "left" === o || "top" === o ? (h = Z(t, o, r), d = "px") : (h = "opacity" !== o ? 0 : 1, d = "")), y = g && "=" === f.charAt(1), y ? (p = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), p *= parseFloat(f), m = f.replace(x, "")) : (p = parseFloat(f), m = g ? f.replace(x, "") : ""), "" === m && (m = o in n ? n[o] : d), f = p || 0 === p ? (y ? p + h : p) + m : e[o], d !== m && "" !== m && (p || 0 === p) && h && (h = Q(t, o, h, d), "%" === m ? (h /= Q(t, o, 100, "%") / 100, e.strictUnits !== !0 && (c = h + "%")) : "em" === m ? h /= Q(t, o, 1, "em") : "px" !== m && (p = Q(t, o, p, m), m = "px"), y && (p || 0 === p) && (f = p + h + m)), y && (p += h), !h && 0 !== h || !p && 0 !== p ? void 0 !== v[o] && (f || "NaN" != f + "" && null != f) ? (i = new dt(v, o, p || h || 0, 0, i, -1, o, !1, 0, c, f), i.xs0 = "none" !== f || "display" !== o && -1 === o.indexOf("Style") ? f : c) : X("invalid " + o + " tween value: " + e[o]) : (i = new dt(v, o, h, p - h, i, 0, o, u !== !1 && ("px" === m || "zIndex" === o), 0, c, f), i.xs0 = m)) : i = gt(v, o, c, f, !0, null, i, 0, s)), s && i && !i.plugin && (i.plugin = s);
                return i
            }, h.setRatio = function(t) {
                var e, i, n, r = this._firstPT,
                    s = 1e-6;
                if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                    if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                        for (; r;) {
                            if (e = r.c * t + r.s, r.r ? e = Math.round(e) : s > e && e > -s && (e = 0), r.type)
                                if (1 === r.type)
                                    if (n = r.l, 2 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                    else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                            else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                            else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                            else {
                                for (i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                r.t[r.p] = i
                            } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                            else r.t[r.p] = e + r.xs0;
                            r = r._next
                        } else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                    else
                        for (; r;) {
                            if (2 !== r.type)
                                if (r.r && -1 !== r.type)
                                    if (e = Math.round(r.s + r.c), r.type) {
                                        if (1 === r.type) {
                                            for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                            r.t[r.p] = i
                                        }
                                    } else r.t[r.p] = e + r.xs0;
                            else r.t[r.p] = r.e;
                            else r.setRatio(t);
                            r = r._next
                        }
            }, h._enableTransforms = function(t) {
                this._transform = this._transform || Mt(this._target, r, !0), this._transformType = this._transform.svg && bt || !t && 3 !== this._transformType ? 2 : 3
            };
            var Bt = function() {
                this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            h._addLazySet = function(t, e, i) {
                var n = this._firstPT = new dt(t, e, 0, 0, this._firstPT, 2);
                n.e = i, n.setRatio = Bt, n.data = this
            }, h._linkCSSP = function(t, e, i, n) {
                return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, h._kill = function(e) {
                var i, n, r, s = e;
                if (e.autoAlpha || e.alpha) {
                    s = {};
                    for (n in e) s[n] = e[n];
                    s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                }
                return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, s)
            };
            var Xt = function(t, e, i) {
                var n, r, s, o;
                if (t.slice)
                    for (r = t.length; --r > -1;) Xt(t[r], e, i);
                else
                    for (n = t.childNodes, r = n.length; --r > -1;) s = n[r], o = s.type, s.style && (e.push(J(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Xt(s, e, i)
            };
            return o.cascadeTo = function(t, i, n) {
                var r, s, o, a, l = e.to(t, i, n),
                    h = [l],
                    u = [],
                    p = [],
                    c = [],
                    f = e._internals.reservedProps;
                for (t = l._targets || l.target, Xt(t, u, c), l.render(i, !0, !0), Xt(t, p), l.render(0, !0, !0), l._enabled(!0), r = c.length; --r > -1;)
                    if (s = K(c[r], u[r], p[r]), s.firstMPT) {
                        s = s.difs;
                        for (o in n) f[o] && (s[o] = n[o]);
                        a = {};
                        for (o in s) a[o] = u[r][o];
                        h.push(e.fromTo(c[r], i, a, s))
                    }
                return h
            }, t.activate([o]), o
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t) {
        "use strict";
        var e = function() {
            return (_gsScope.GreenSockGlobals || _gsScope)[t]
        };
        "function" == typeof define && define.amd ? define(["TweenLite"], e) : "undefined" != typeof module && module.exports && (require("../TweenLite.js"), module.exports = e())
    }("CSSPlugin");
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
            var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
                s = r.com.greensock,
                o = 2 * Math.PI,
                a = Math.PI / 2,
                l = s._class,
                h = function(e, i) {
                    var n = l("easing." + e, function() {}, !0),
                        r = n.prototype = new t;
                    return r.constructor = n, r.getRatio = i, n
                },
                u = t.register || function() {},
                p = function(t, e, i, n) {
                    var r = l("easing." + t, {
                        easeOut: new e,
                        easeIn: new i,
                        easeInOut: new n
                    }, !0);
                    return u(r, t), r
                },
                c = function(t, e, i) {
                    this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                },
                f = function(e, i) {
                    var n = l("easing." + e, function(t) {
                            this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        r = n.prototype = new t;
                    return r.constructor = n, r.getRatio = i, r.config = function(t) {
                        return new n(t)
                    }, n
                },
                d = p("Back", f("BackOut", function(t) {
                    return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                }), f("BackIn", function(t) {
                    return t * t * ((this._p1 + 1) * t - this._p1)
                }), f("BackInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                })),
                m = l("easing.SlowMo", function(t, e, i) {
                    e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                }, !0),
                g = m.prototype = new t;
            return g.constructor = m, g.getRatio = function(t) {
                var e = t + (.5 - t) * this._p;
                return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, m.ease = new m(.7, .7), g.config = m.config = function(t, e, i) {
                return new m(t, e, i)
            }, e = l("easing.SteppedEase", function(t) {
                t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
            }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function(t) {
                return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
            }, g.config = e.config = function(t) {
                return new e(t)
            }, i = l("easing.RoughEase", function(e) {
                e = e || {};
                for (var i, n, r, s, o, a, l = e.taper || "none", h = [], u = 0, p = 0 | (e.points || 20), f = p, d = e.randomize !== !1, m = e.clamp === !0, g = e.template instanceof t ? e.template : null, y = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = d ? Math.random() : 1 / p * f, n = g ? g.getRatio(i) : i, "none" === l ? r = y : "out" === l ? (s = 1 - i, r = s * s * y) : "in" === l ? r = i * i * y : .5 > i ? (s = 2 * i, r = .5 * s * s * y) : (s = 2 * (1 - i), r = .5 * s * s * y), d ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), h[u++] = {
                    x: i,
                    y: n
                };
                for (h.sort(function(t, e) {
                        return t.x - e.x
                    }), a = new c(1, 1, null), f = p; --f > -1;) o = h[f], a = new c(o.x, o.y, a);
                this._prev = new c(0, 0, 0 !== a.t ? a : a.next)
            }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function(t) {
                var e = this._prev;
                if (t > e.t) {
                    for (; e.next && t >= e.t;) e = e.next;
                    e = e.prev
                } else
                    for (; e.prev && e.t >= t;) e = e.prev;
                return this._prev = e, e.v + (t - e.t) / e.gap * e.c
            }, g.config = function(t) {
                return new i(t)
            }, i.ease = new i, p("Bounce", h("BounceOut", function(t) {
                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), h("BounceIn", function(t) {
                return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), h("BounceInOut", function(t) {
                var e = .5 > t;
                return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), p("Circ", h("CircOut", function(t) {
                return Math.sqrt(1 - (t -= 1) * t)
            }), h("CircIn", function(t) {
                return -(Math.sqrt(1 - t * t) - 1)
            }), h("CircInOut", function(t) {
                return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), n = function(e, i, n) {
                var r = l("easing." + e, function(t, e) {
                        this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                    }, !0),
                    s = r.prototype = new t;
                return s.constructor = r, s.getRatio = i, s.config = function(t, e) {
                    return new r(t, e)
                }, r
            }, p("Elastic", n("ElasticOut", function(t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
            }, .3), n("ElasticIn", function(t) {
                return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
            }, .3), n("ElasticInOut", function(t) {
                return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) + 1
            }, .45)), p("Expo", h("ExpoOut", function(t) {
                return 1 - Math.pow(2, -10 * t)
            }), h("ExpoIn", function(t) {
                return Math.pow(2, 10 * (t - 1)) - .001
            }), h("ExpoInOut", function(t) {
                return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), p("Sine", h("SineOut", function(t) {
                return Math.sin(t * a)
            }), h("SineIn", function(t) {
                return -Math.cos(t * a) + 1
            }), h("SineInOut", function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            })), l("easing.EaseLookup", {
                find: function(e) {
                    return t.map[e]
                }
            }, !0), u(r.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(e, "SteppedEase", "ease,"), d
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e, i) {
        "use strict";
        var n = function(t, e, i) {
                i = r.extend({}, r.options, i);
                var s, o, a = r.runValidations(t, e, i);
                for (s in a)
                    for (o in a[s])
                        if (r.isPromise(a[s][o])) throw new Error("Use validate.async if you want support for promises");
                return n.processValidationResults(a, i)
            },
            r = n;
        r.extend = function(t) {
            return [].slice.call(arguments, 1).forEach(function(e) {
                for (var i in e) t[i] = e[i]
            }), t
        }, r.extend(n, {
            version: {
                major: 0,
                minor: 8,
                patch: 0,
                metadata: "",
                toString: function() {
                    var t = r.format("%{major}.%{minor}.%{patch}", r.version);
                    return r.isEmpty(r.version.metadata) || (t += "+" + r.version.metadata), t
                }
            },
            Promise: "undefined" != typeof Promise ? Promise : null,
            moment: "undefined" != typeof moment ? moment : null,
            XDate: "undefined" != typeof XDate ? XDate : null,
            EMPTY_STRING_REGEXP: /^\s*$/,
            runValidations: function(t, e, i) {
                var n, s, o, a, l, h, u, p = [];
                (r.isDomElement(t) || r.isJqueryElement(t)) && (t = r.collectFormValues(t));
                for (n in e) {
                    o = r.getDeepObjectValue(t, n), a = r.result(e[n], o, t, n, i, e);
                    for (s in a) {
                        if (l = r.validators[s], !l) throw u = r.format("Unknown validator %{name}", {
                            name: s
                        }), new Error(u);
                        h = a[s], h = r.result(h, o, t, n, i, e), h && p.push({
                            attribute: n,
                            value: o,
                            validator: s,
                            options: h,
                            error: l.call(l, o, h, n, t)
                        })
                    }
                }
                return p
            },
            processValidationResults: function(t, e) {
                var i;
                switch (t = r.pruneEmptyErrors(t, e), t = r.expandMultipleErrors(t, e), t = r.convertErrorMessages(t, e), e.format || "grouped") {
                    case "detailed":
                        break;
                    case "flat":
                        t = r.flattenErrorsToArray(t);
                        break;
                    case "grouped":
                        t = r.groupErrorsByAttribute(t);
                        for (i in t) t[i] = r.flattenErrorsToArray(t[i]);
                        break;
                    default:
                        throw new Error(r.format("Unknown format %{format}", e))
                }
                return r.isEmpty(t) ? void 0 : t
            },
            async: function(t, e, i) {
                i = r.extend({}, r.async.options, i);
                var n = i.wrapErrors || function(t) {
                    return t
                };
                i.cleanAttributes !== !1 && (t = r.cleanAttributes(t, e));
                var s = r.runValidations(t, e, i);
                return new r.Promise(function(o, a) {
                    r.waitForResults(s).then(function() {
                        var l = r.processValidationResults(s, i);
                        l ? a(new n(l, i, t, e)) : o(t)
                    }, function(t) {
                        a(t)
                    })
                })
            },
            single: function(t, e, i) {
                return i = r.extend({}, r.single.options, i, {
                    format: "flat",
                    fullMessages: !1
                }), r({
                    single: t
                }, {
                    single: e
                }, i)
            },
            waitForResults: function(t) {
                return t.reduce(function(t, e) {
                    return r.isPromise(e.error) ? t.then(function() {
                        return e.error.then(function(t) {
                            e.error = t || null
                        }, function(t) {
                            if (t instanceof Error) throw t;
                            console.log("Foo"), r.error("Rejecting promises with the result is deprecated. Please use the resolve callback instead."), e.error = t
                        })
                    }) : t
                }, new r.Promise(function(t) {
                    t()
                }))
            },
            result: function(t) {
                var e = [].slice.call(arguments, 1);
                return "function" == typeof t && (t = t.apply(null, e)), t
            },
            isNumber: function(t) {
                return "number" == typeof t && !isNaN(t)
            },
            isFunction: function(t) {
                return "function" == typeof t
            },
            isInteger: function(t) {
                return r.isNumber(t) && t % 1 === 0
            },
            isObject: function(t) {
                return t === Object(t)
            },
            isDate: function(t) {
                return t instanceof Date
            },
            isDefined: function(t) {
                return null !== t && void 0 !== t
            },
            isPromise: function(t) {
                return !!t && r.isFunction(t.then)
            },
            isJqueryElement: function(t) {
                return t && r.isString(t.jquery)
            },
            isDomElement: function(t) {
                return t && r.isFunction(t.querySelectorAll) && r.isFunction(t.querySelector) ? r.isObject(document) && t === document ? !0 : "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName : !1
            },
            isEmpty: function(t) {
                var e;
                if (!r.isDefined(t)) return !0;
                if (r.isFunction(t)) return !1;
                if (r.isString(t)) return r.EMPTY_STRING_REGEXP.test(t);
                if (r.isArray(t)) return 0 === t.length;
                if (r.isDate(t)) return !1;
                if (r.isObject(t)) {
                    for (e in t) return !1;
                    return !0
                }
                return !1
            },
            format: r.extend(function(t, e) {
                return t.replace(r.format.FORMAT_REGEXP, function(t, i, n) {
                    return "%" === i ? "%{" + n + "}" : String(e[n])
                })
            }, {
                FORMAT_REGEXP: /(%?)%\{([^\}]+)\}/g
            }),
            prettify: function(t) {
                return r.isNumber(t) ? 100 * t % 1 === 0 ? "" + t : parseFloat(Math.round(100 * t) / 100).toFixed(2) : r.isArray(t) ? t.map(function(t) {
                    return r.prettify(t)
                }).join(", ") : r.isObject(t) ? t.toString() : (t = "" + t, t.replace(/([^\s])\.([^\s])/g, "$1 $2").replace(/\\+/g, "").replace(/[_-]/g, " ").replace(/([a-z])([A-Z])/g, function(t, e, i) {
                    return "" + e + " " + i.toLowerCase()
                }).toLowerCase())
            },
            stringifyValue: function(t) {
                return r.prettify(t)
            },
            isString: function(t) {
                return "string" == typeof t
            },
            isArray: function(t) {
                return "[object Array]" === {}.toString.call(t)
            },
            contains: function(t, e) {
                return r.isDefined(t) ? r.isArray(t) ? -1 !== t.indexOf(e) : e in t : !1
            },
            forEachKeyInKeypath: function(t, e, i) {
                if (!r.isString(e)) return void 0;
                var n, s = "",
                    o = !1;
                for (n = 0; n < e.length; ++n) switch (e[n]) {
                    case ".":
                        o ? (o = !1, s += ".") : (t = i(t, s, !1), s = "");
                        break;
                    case "\\":
                        o ? (o = !1, s += "\\") : o = !0;
                        break;
                    default:
                        o = !1, s += e[n]
                }
                return i(t, s, !0)
            },
            getDeepObjectValue: function(t, e) {
                return r.isObject(t) ? r.forEachKeyInKeypath(t, e, function(t, e) {
                    return r.isObject(t) ? t[e] : void 0
                }) : void 0
            },
            collectFormValues: function(t, e) {
                var i, n, s, o, a = {};
                if (r.isJqueryElement(t) && (t = t[0]), !t) return a;
                for (e = e || {}, s = t.querySelectorAll("input[name], textarea[name]"), i = 0; i < s.length; ++i) n = s.item(i), r.isDefined(n.getAttribute("data-ignored")) || (o = r.sanitizeFormValue(n.value, e), "number" === n.type ? o = +o : "checkbox" === n.type ? n.attributes.value ? n.checked || (o = a[n.name] || null) : o = n.checked : "radio" === n.type && (n.checked || (o = a[n.name] || null)), a[n.name] = o);
                for (s = t.querySelectorAll("select[name]"), i = 0; i < s.length; ++i) n = s.item(i), o = r.sanitizeFormValue(n.options[n.selectedIndex].value, e), a[n.name] = o;
                return a
            },
            sanitizeFormValue: function(t, e) {
                return e.trim && r.isString(t) && (t = t.trim()), e.nullify !== !1 && "" === t ? null : t
            },
            capitalize: function(t) {
                return r.isString(t) ? t[0].toUpperCase() + t.slice(1) : t
            },
            pruneEmptyErrors: function(t) {
                return t.filter(function(t) {
                    return !r.isEmpty(t.error)
                })
            },
            expandMultipleErrors: function(t) {
                var e = [];
                return t.forEach(function(t) {
                    r.isArray(t.error) ? t.error.forEach(function(i) {
                        e.push(r.extend({}, t, {
                            error: i
                        }))
                    }) : e.push(t)
                }), e
            },
            convertErrorMessages: function(t, e) {
                e = e || {};
                var i = [];
                return t.forEach(function(t) {
                    var n = t.error;
                    "^" === n[0] ? n = n.slice(1) : e.fullMessages !== !1 && (n = r.capitalize(r.prettify(t.attribute)) + " " + n), n = n.replace(/\\\^/g, "^"), n = r.format(n, {
                        value: r.stringifyValue(t.value)
                    }), i.push(r.extend({}, t, {
                        error: n
                    }))
                }), i
            },
            groupErrorsByAttribute: function(t) {
                var e = {};
                return t.forEach(function(t) {
                    var i = e[t.attribute];
                    i ? i.push(t) : e[t.attribute] = [t]
                }), e
            },
            flattenErrorsToArray: function(t) {
                return t.map(function(t) {
                    return t.error
                })
            },
            cleanAttributes: function(t, e) {
                function i(t, e, i) {
                    return r.isObject(t[e]) ? t[e] : t[e] = i ? !0 : {}
                }

                function n(t) {
                    var e, n = {};
                    for (e in t) t[e] && r.forEachKeyInKeypath(n, e, i);
                    return n
                }

                function s(t, e) {
                    if (!r.isObject(t)) return t;
                    var i, n, o = r.extend({}, t);
                    for (n in t) i = e[n], r.isObject(i) ? o[n] = s(o[n], i) : i || delete o[n];
                    return o
                }
                return r.isObject(e) && r.isObject(t) ? (e = n(e), s(t, e)) : {}
            },
            exposeModule: function(t, e, i, n, r) {
                i ? (n && n.exports && (i = n.exports = t), i.validate = t) : (e.validate = t, t.isFunction(r) && r.amd && r([], function() {
                    return t
                }))
            },
            warn: function(t) {
                "undefined" != typeof console && console.warn && console.warn("[validate.js] " + t)
            },
            error: function(t) {
                "undefined" != typeof console && console.error && console.error("[validate.js] " + t)
            }
        }), n.validators = {
            presence: function(t, e) {
                return e = r.extend({}, this.options, e), r.isEmpty(t) ? e.message || this.message || "can't be blank" : void 0
            },
            length: function(t, e, i) {
                if (!r.isEmpty(t)) {
                    e = r.extend({}, this.options, e);
                    var n, s = e.is,
                        o = e.maximum,
                        a = e.minimum,
                        l = e.tokenizer || function(t) {
                            return t
                        },
                        h = [];
                    t = l(t);
                    var u = t.length;
                    return r.isNumber(u) ? (r.isNumber(s) && u !== s && (n = e.wrongLength || this.wrongLength || "is the wrong length (should be %{count} characters)", h.push(r.format(n, {
                        count: s
                    }))), r.isNumber(a) && a > u && (n = e.tooShort || this.tooShort || "is too short (minimum is %{count} characters)", h.push(r.format(n, {
                        count: a
                    }))), r.isNumber(o) && u > o && (n = e.tooLong || this.tooLong || "is too long (maximum is %{count} characters)", h.push(r.format(n, {
                        count: o
                    }))), h.length > 0 ? e.message || h : void 0) : (r.error(r.format("Attribute %{attr} has a non numeric value for `length`", {
                        attr: i
                    })), e.message || this.notValid || "has an incorrect length")
                }
            },
            numericality: function(t, e) {
                if (!r.isEmpty(t)) {
                    e = r.extend({}, this.options, e);
                    var i, n, s = [],
                        o = {
                            greaterThan: function(t, e) {
                                return t > e
                            },
                            greaterThanOrEqualTo: function(t, e) {
                                return t >= e
                            },
                            equalTo: function(t, e) {
                                return t === e
                            },
                            lessThan: function(t, e) {
                                return e > t
                            },
                            lessThanOrEqualTo: function(t, e) {
                                return e >= t
                            }
                        };
                    if (e.noStrings !== !0 && r.isString(t) && (t = +t), !r.isNumber(t)) return e.message || this.notValid || "is not a number";
                    if (e.onlyInteger && !r.isInteger(t)) return e.message || this.notInteger || "must be an integer";
                    for (i in o)
                        if (n = e[i], r.isNumber(n) && !o[i](t, n)) {
                            var a = this["not" + r.capitalize(i)] || "must be %{type} %{count}";
                            s.push(r.format(a, {
                                count: n,
                                type: r.prettify(i)
                            }))
                        }
                    return e.odd && t % 2 !== 1 && s.push(this.notOdd || "must be odd"), e.even && t % 2 !== 0 && s.push(this.notEven || "must be even"), s.length ? e.message || s : void 0
                }
            },
            datetime: r.extend(function(t, e) {
                if (!r.isEmpty(t)) {
                    e = r.extend({}, this.options, e);
                    var i, n = [],
                        s = e.earliest ? this.parse(e.earliest, e) : 0 / 0,
                        o = e.latest ? this.parse(e.latest, e) : 0 / 0;
                    return t = this.parse(t, e), isNaN(t) || e.dateOnly && t % 864e5 !== 0 ? e.message || this.notValid || "must be a valid date" : (!isNaN(s) && s > t && (i = this.tooEarly || "must be no earlier than %{date}", i = r.format(i, {
                        date: this.format(s, e)
                    }), n.push(i)), !isNaN(o) && t > o && (i = this.tooLate || "must be no later than %{date}", i = r.format(i, {
                        date: this.format(o, e)
                    }), n.push(i)), n.length ? e.message || n : void 0)
                }
            }, {
                parse: function(t, e) {
                    if (r.isFunction(r.XDate)) return new r.XDate(t, !0).getTime();
                    if (r.isDefined(r.moment)) return +r.moment.utc(t);
                    throw new Error("Neither XDate or moment.js was found")
                },
                format: function(t, e) {
                    var i = e.dateFormat;
                    if (r.isFunction(r.XDate)) return i = i || (e.dateOnly ? "yyyy-MM-dd" : "yyyy-MM-dd HH:mm:ss"), new r.XDate(t, !0).toString(i);
                    if (r.isDefined(r.moment)) return i = i || (e.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD HH:mm:ss"), r.moment.utc(t).format(i);
                    throw new Error("Neither XDate or moment.js was found")
                }
            }),
            date: function(t, e) {
                return e = r.extend({}, e, {
                    dateOnly: !0
                }), r.validators.datetime.call(r.validators.datetime, t, e)
            },
            format: function(t, e) {
                (r.isString(e) || e instanceof RegExp) && (e = {
                    pattern: e
                }), e = r.extend({}, this.options, e);
                var i, n = e.message || this.message || "is invalid",
                    s = e.pattern;
                return r.isEmpty(t) ? void 0 : r.isString(t) ? (r.isString(s) && (s = new RegExp(e.pattern, e.flags)), i = s.exec(t), i && i[0].length == t.length ? void 0 : n) : n
            },
            inclusion: function(t, e) {
                if (!r.isEmpty(t) && (r.isArray(e) && (e = {
                        within: e
                    }), e = r.extend({}, this.options, e), !r.contains(e.within, t))) {
                    var i = e.message || this.message || "^%{value} is not included in the list";
                    return r.format(i, {
                        value: t
                    })
                }
            },
            exclusion: function(t, e) {
                if (!r.isEmpty(t) && (r.isArray(e) && (e = {
                        within: e
                    }), e = r.extend({}, this.options, e), r.contains(e.within, t))) {
                    var i = e.message || this.message || "^%{value} is restricted";
                    return r.format(i, {
                        value: t
                    })
                }
            },
            email: r.extend(function(t, e) {
                e = r.extend({}, this.options, e);
                var i = e.message || this.message || "is not a valid email";
                return r.isEmpty(t) ? void 0 : r.isString(t) && this.PATTERN.exec(t) ? void 0 : i
            }, {
                PATTERN: /^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i
            }),
            equality: function(t, e, i, n) {
                if (!r.isEmpty(t)) {
                    r.isString(e) && (e = {
                        attribute: e
                    }), e = r.extend({}, this.options, e);
                    var s = e.message || this.message || "is not equal to %{attribute}";
                    if (r.isEmpty(e.attribute) || !r.isString(e.attribute)) throw new Error("The attribute must be a non empty string");
                    var o = r.getDeepObjectValue(n, e.attribute),
                        a = e.comparator || function(t, e) {
                            return t === e
                        };
                    return a(t, o, e, i, n) ? void 0 : r.format(s, {
                        attribute: r.prettify(e.attribute)
                    })
                }
            }
        }, n.exposeModule(n, this, t, e, i)
    }.call(this, "undefined" != typeof exports ? exports : null, "undefined" != typeof module ? module : null, "undefined" != typeof define ? define : null),
    function(t) {
        function e() {}

        function i(t) {
            function i(e) {
                e.prototype.option || (e.prototype.option = function(e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                })
            }

            function r(e, i) {
                t.fn[e] = function(r) {
                    if ("string" == typeof r) {
                        for (var o = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                            var h = this[a],
                                u = t.data(h, e);
                            if (u)
                                if (t.isFunction(u[r]) && "_" !== r.charAt(0)) {
                                    var p = u[r].apply(u, o);
                                    if (void 0 !== p) return p
                                } else s("no such method '" + r + "' for " + e + " instance");
                            else s("cannot call methods on " + e + " prior to initialization; attempted to call '" + r + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var n = t.data(this, e);
                        n ? (n.option(r), n._init()) : (n = new i(this, r), t.data(this, e, n))
                    })
                }
            }
            if (t) {
                var s = "undefined" == typeof console ? e : function(t) {
                    console.error(t)
                };
                return t.bridget = function(t, e) {
                    i(e), r(t, e)
                }, t.bridget
            }
        }
        var n = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
    }(window),
    function(t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function() {};
        i.addEventListener ? n = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function() {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var r = function() {};
        i.removeEventListener ? r = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (r = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var s = {
            bind: n,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", s) : "object" == typeof exports ? module.exports = s : t.eventie = s
    }(window),
    function() {
        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        var n = t.prototype,
            r = this,
            s = r.EventEmitter;
        n.getListeners = function(t) {
            var e, i, n = this._getEvents();
            if (t instanceof RegExp) {
                e = {};
                for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
            } else e = n[t] || (n[t] = []);
            return e
        }, n.flattenListeners = function(t) {
            var e, i = [];
            for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
            return i
        }, n.getListenersAsObject = function(t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, n.addListener = function(t, i) {
            var n, r = this.getListenersAsObject(t),
                s = "object" == typeof i;
            for (n in r) r.hasOwnProperty(n) && -1 === e(r[n], i) && r[n].push(s ? i : {
                listener: i,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
            return this.getListeners(t), this
        }, n.defineEvents = function(t) {
            for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
            return this
        }, n.removeListener = function(t, i) {
            var n, r, s = this.getListenersAsObject(t);
            for (r in s) s.hasOwnProperty(r) && (n = e(s[r], i), -1 !== n && s[r].splice(n, 1));
            return this
        }, n.off = i("removeListener"), n.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, n.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, n.manipulateListeners = function(t, e, i) {
            var n, r, s = t ? this.removeListener : this.addListener,
                o = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (n = i.length; n--;) s.call(this, e, i[n]);
            else
                for (n in e) e.hasOwnProperty(n) && (r = e[n]) && ("function" == typeof r ? s.call(this, n, r) : o.call(this, n, r));
            return this
        }, n.removeEvent = function(t) {
            var e, i = typeof t,
                n = this._getEvents();
            if ("string" === i) delete n[t];
            else if (t instanceof RegExp)
                for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
            var i, n, r, s, o = this.getListenersAsObject(t);
            for (r in o)
                if (o.hasOwnProperty(r))
                    for (n = o[r].length; n--;) i = o[r][n], i.once === !0 && this.removeListener(t, i.listener), s = i.listener.apply(this, e || []), s === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, n.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this
        }, n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, t.noConflict = function() {
            return r.EventEmitter = s, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : r.EventEmitter = t
    }.call(this),
    function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof n[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, r = 0, s = i.length; s > r; r++)
                    if (e = i[r] + t, "string" == typeof n[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            n = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function(t, e) {
        function i(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function n() {}

        function r() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0, i = a.length; i > e; e++) {
                var n = a[e];
                t[n] = 0
            }
            return t
        }

        function s(e) {
            function n() {
                if (!c) {
                    c = !0;
                    var n = t.getComputedStyle;
                    if (h = function() {
                            var t = n ? function(t) {
                                return n(t, null)
                            } : function(t) {
                                return t.currentStyle
                            };
                            return function(e) {
                                var i = t(e);
                                return i || o("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                            }
                        }(), u = e("boxSizing")) {
                        var r = document.createElement("div");
                        r.style.width = "200px", r.style.padding = "1px 2px 3px 4px", r.style.borderStyle = "solid", r.style.borderWidth = "1px 2px 3px 4px", r.style[u] = "border-box";
                        var s = document.body || document.documentElement;
                        s.appendChild(r);
                        var a = h(r);
                        p = 200 === i(a.width), s.removeChild(r)
                    }
                }
            }

            function s(t) {
                if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var e = h(t);
                    if ("none" === e.display) return r();
                    var s = {};
                    s.width = t.offsetWidth, s.height = t.offsetHeight;
                    for (var o = s.isBorderBox = !(!u || !e[u] || "border-box" !== e[u]), c = 0, f = a.length; f > c; c++) {
                        var d = a[c],
                            m = e[d];
                        m = l(t, m);
                        var g = parseFloat(m);
                        s[d] = isNaN(g) ? 0 : g
                    }
                    var y = s.paddingLeft + s.paddingRight,
                        v = s.paddingTop + s.paddingBottom,
                        _ = s.marginLeft + s.marginRight,
                        x = s.marginTop + s.marginBottom,
                        b = s.borderLeftWidth + s.borderRightWidth,
                        w = s.borderTopWidth + s.borderBottomWidth,
                        T = o && p,
                        S = i(e.width);
                    S !== !1 && (s.width = S + (T ? 0 : y + b));
                    var P = i(e.height);
                    return P !== !1 && (s.height = P + (T ? 0 : v + w)), s.innerWidth = s.width - (y + b), s.innerHeight = s.height - (v + w), s.outerWidth = s.width + _, s.outerHeight = s.height + x, s
                }
            }

            function l(e, i) {
                if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
                var n = e.style,
                    r = n.left,
                    s = e.runtimeStyle,
                    o = s && s.left;
                return o && (s.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = r, o && (s.left = o), i
            }
            var h, u, p, c = !1;
            return s
        }
        var o = "undefined" == typeof console ? n : function(t) {
                console.error(t)
            },
            a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], s) : "object" == typeof exports ? module.exports = s(require("desandro-get-style-property")) : t.getSize = s(t.getStyleProperty)
    }(window),
    function(t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : o.push(t))
        }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== s.readyState;
            e.isReady || i || n()
        }

        function n() {
            e.isReady = !0;
            for (var t = 0, i = o.length; i > t; t++) {
                var n = o[t];
                n()
            }
        }

        function r(r) {
            return "complete" === s.readyState ? n() : (r.bind(s, "DOMContentLoaded", i), r.bind(s, "readystatechange", i), r.bind(t, "load", i)), e
        }
        var s = t.document,
            o = [];
        e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], r) : "object" == typeof exports ? module.exports = r(require("eventie")) : t.docReady = r(t.eventie)
    }(window),
    function(t) {
        function e(t, e) {
            return t[o](e)
        }

        function i(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function n(t, e) {
            i(t);
            for (var n = t.parentNode.querySelectorAll(e), r = 0, s = n.length; s > r; r++)
                if (n[r] === t) return !0;
            return !1
        }

        function r(t, n) {
            return i(t), e(t, n)
        }
        var s, o = function() {
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
                var r = e[i],
                    s = r + "MatchesSelector";
                if (t[s]) return s
            }
        }();
        if (o) {
            var a = document.createElement("div"),
                l = e(a, "div");
            s = l ? e : r
        } else s = n;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return s
        }) : "object" == typeof exports ? module.exports = s : window.matchesSelector = s
    }(Element.prototype),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
    }(window, function(t, e, i) {
        var n = {};
        n.extend = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, n.modulo = function(t, e) {
            return (t % e + e) % e
        };
        var r = Object.prototype.toString;
        n.isArray = function(t) {
            return "[object Array]" == r.call(t)
        }, n.makeArray = function(t) {
            var e = [];
            if (n.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, r = t.length; r > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, n.indexOf = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, n = t.length; n > i; i++)
                if (t[i] === e) return i;
            return -1
        }, n.removeFrom = function(t, e) {
            var i = n.indexOf(t, e); - 1 != i && t.splice(i, 1)
        }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
            return t instanceof HTMLElement
        } : function(t) {
            return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
        }, n.setText = function() {
            function t(t, i) {
                e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
            }
            var e;
            return t
        }(), n.getParent = function(t, e) {
            for (; t != document.body;)
                if (t = t.parentNode, i(t, e)) return t
        }, n.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function(t, e) {
            t = n.makeArray(t);
            for (var r = [], s = 0, o = t.length; o > s; s++) {
                var a = t[s];
                if (n.isElement(a))
                    if (e) {
                        i(a, e) && r.push(a);
                        for (var l = a.querySelectorAll(e), h = 0, u = l.length; u > h; h++) r.push(l[h])
                    } else r.push(a)
            }
            return r
        }, n.debounceMethod = function(t, e, i) {
            var n = t.prototype[e],
                r = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[r];
                t && clearTimeout(t);
                var e = arguments,
                    s = this;
                this[r] = setTimeout(function() {
                    n.apply(s, e), delete s[r]
                }, i || 100)
            }
        }, n.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var s = t.console;
        return n.htmlInit = function(i, r) {
            e(function() {
                for (var e = n.toDashed(r), o = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, h = o.length; h > l; l++) {
                    var u, p = o[l],
                        c = p.getAttribute(a);
                    try {
                        u = c && JSON.parse(c)
                    } catch (f) {
                        s && s.error("Error parsing " + a + " on " + p.nodeName.toLowerCase() + (p.id ? "#" + p.id : "") + ": " + f);
                        continue
                    }
                    var d = new i(p, u),
                        m = t.jQuery;
                    m && m.data(p, r, d)
                }
            })
        }, n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, n, r, s) {
            return e(t, i, n, r, s)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
    }(window, function(t, e, i, n, r) {
        function s(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function o(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function a(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }
        var l = t.getComputedStyle,
            h = l ? function(t) {
                return l(t, null)
            } : function(t) {
                return t.currentStyle
            },
            u = n("transition"),
            p = n("transform"),
            c = u && p,
            f = !!n("perspective"),
            d = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[u],
            m = ["transform", "transition", "transitionDuration", "transitionProperty"],
            g = function() {
                for (var t = {}, e = 0, i = m.length; i > e; e++) {
                    var r = m[e],
                        s = n(r);
                    s && s !== r && (t[r] = s)
                }
                return t
            }();
        r.extend(o.prototype, e.prototype), o.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, o.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, o.prototype.getSize = function() {
            this.size = i(this.element)
        }, o.prototype.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var n = g[i] || i;
                e[n] = t[i]
            }
        }, o.prototype.getPosition = function() {
            var t = h(this.element),
                e = this.layout.options,
                i = e.isOriginLeft,
                n = e.isOriginTop,
                r = t[i ? "left" : "right"],
                s = t[n ? "top" : "bottom"],
                o = parseInt(r, 10),
                a = parseInt(s, 10),
                l = this.layout.size;
            o = -1 != r.indexOf("%") ? o / 100 * l.width : o, a = -1 != s.indexOf("%") ? a / 100 * l.height : a, o = isNaN(o) ? 0 : o, a = isNaN(a) ? 0 : a, o -= i ? l.paddingLeft : l.paddingRight, a -= n ? l.paddingTop : l.paddingBottom, this.position.x = o, this.position.y = a
        }, o.prototype.layoutPosition = function() {
            var t = this.layout.size,
                e = this.layout.options,
                i = {},
                n = e.isOriginLeft ? "paddingLeft" : "paddingRight",
                r = e.isOriginLeft ? "left" : "right",
                s = e.isOriginLeft ? "right" : "left",
                o = this.position.x + t[n];
            i[r] = this.getXValue(o), i[s] = "";
            var a = e.isOriginTop ? "paddingTop" : "paddingBottom",
                l = e.isOriginTop ? "top" : "bottom",
                h = e.isOriginTop ? "bottom" : "top",
                u = this.position.y + t[a];
            i[l] = this.getYValue(u), i[h] = "", this.css(i), this.emitEvent("layout", [this])
        }, o.prototype.getXValue = function(t) {
            var e = this.layout.options;
            return e.percentPosition && !e.isHorizontal ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, o.prototype.getYValue = function(t) {
            var e = this.layout.options;
            return e.percentPosition && e.isHorizontal ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, o.prototype._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                r = parseInt(t, 10),
                s = parseInt(e, 10),
                o = r === this.position.x && s === this.position.y;
            if (this.setPosition(t, e), o && !this.isTransitioning) return void this.layoutPosition();
            var a = t - i,
                l = e - n,
                h = {};
            h.transform = this.getTranslate(a, l), this.transition({
                to: h,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, o.prototype.getTranslate = function(t, e) {
            var i = this.layout.options;
            return t = i.isOriginLeft ? t : -t, e = i.isOriginTop ? e : -e, t = this.getXValue(t), e = this.getYValue(e), f ? "translate3d(" + t + ", " + e + ", 0)" : "translate(" + t + ", " + e + ")"
        }, o.prototype.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, o.prototype.moveTo = c ? o.prototype._transitionTo : o.prototype.goTo, o.prototype.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, o.prototype._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, o.prototype._transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var n = this.element.offsetHeight;
                n = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var y = "opacity," + a(g.transform || "transform");
        o.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: y,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(d, this, !1))
        }, o.prototype.transition = o.prototype[u ? "_transition" : "_nonTransition"], o.prototype.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, o.prototype.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var v = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        o.prototype.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = v[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], s(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                    var n = e.onEnd[i];
                    n.call(this), delete e.onEnd[i]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, o.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1
        }, o.prototype._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var _ = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return o.prototype.removeTransitionStyles = function() {
            this.css(_)
        }, o.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, o.prototype.remove = function() {
            if (!u || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var t = this;
            this.once("transitionEnd", function() {
                t.removeElem()
            }), this.hide()
        }, o.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, o.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, o.prototype.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, o.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, o.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, o.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, o
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, r, s, o) {
            return e(t, i, n, r, s, o)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, i, n, r, s) {
        function o(t, e) {
            var i = r.getQueryElement(t);
            if (!i) return void(a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i, l && (this.$element = l(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e);
            var n = ++u;
            this.element.outlayerGUID = n, p[n] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var a = t.console,
            l = t.jQuery,
            h = function() {},
            u = 0,
            p = {};
        return o.namespace = "outlayer", o.Item = s, o.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, r.extend(o.prototype, i.prototype), o.prototype.option = function(t) {
            r.extend(this.options, t)
        }, o.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), r.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, o.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, o.prototype._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], r = 0, s = e.length; s > r; r++) {
                var o = e[r],
                    a = new i(o, this);
                n.push(a)
            }
            return n
        }, o.prototype._filterFindItemElements = function(t) {
            return r.filterFindElements(t, this.options.itemSelector)
        }, o.prototype.getItemElements = function() {
            for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
            return t
        }, o.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, o.prototype._init = o.prototype.layout, o.prototype._resetLayout = function() {
            this.getSize()
        }, o.prototype.getSize = function() {
            this.size = n(this.element)
        }, o.prototype._getMeasurement = function(t, e) {
            var i, s = this.options[t];
            s ? ("string" == typeof s ? i = this.element.querySelector(s) : r.isElement(s) && (i = s), this[t] = i ? n(i)[e] : s) : this[t] = 0
        }, o.prototype.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, o.prototype._getItemsForLayout = function(t) {
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var r = t[i];
                r.isIgnored || e.push(r)
            }
            return e
        }, o.prototype._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                for (var i = [], n = 0, r = t.length; r > n; n++) {
                    var s = t[n],
                        o = this._getItemLayoutPosition(s);
                    o.item = s, o.isInstant = e || s.isLayoutInstant, i.push(o)
                }
                this._processLayoutQueue(i)
            }
        }, o.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, o.prototype._processLayoutQueue = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                this._positionItem(n.item, n.x, n.y, n.isInstant)
            }
        }, o.prototype._positionItem = function(t, e, i, n) {
            n ? t.goTo(e, i) : t.moveTo(e, i)
        }, o.prototype._postLayout = function() {
            this.resizeContainer()
        }, o.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, o.prototype._getContainerSize = h, o.prototype._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, o.prototype._emitCompleteOnItems = function(t, e) {
            function i() {
                r.dispatchEvent(t + "Complete", null, [e])
            }

            function n() {
                o++, o === s && i()
            }
            var r = this,
                s = e.length;
            if (!e || !s) return void i();
            for (var o = 0, a = 0, l = e.length; l > a; a++) {
                var h = e[a];
                h.once(t, n)
            }
        }, o.prototype.dispatchEvent = function(t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), l)
                if (this.$element = this.$element || l(this.element), e) {
                    var r = l.Event(e);
                    r.type = t, this.$element.trigger(r, i)
                } else this.$element.trigger(t, i)
        }, o.prototype.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, o.prototype.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, o.prototype.stamp = function(t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    this.ignore(n)
                }
            }
        }, o.prototype.unstamp = function(t) {
            if (t = this._find(t))
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    r.removeFrom(this.stamps, n), this.unignore(n)
                }
        }, o.prototype._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = r.makeArray(t)) : void 0
        }, o.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }, o.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, o.prototype._manageStamp = h, o.prototype._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                r = n(t),
                s = {
                    left: e.left - i.left - r.marginLeft,
                    top: e.top - i.top - r.marginTop,
                    right: i.right - e.right - r.marginRight,
                    bottom: i.bottom - e.bottom - r.marginBottom
                };
            return s
        }, o.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, o.prototype.bindResize = function() {
            this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
        }, o.prototype.unbindResize = function() {
            this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
        }, o.prototype.onresize = function() {
            function t() {
                e.resize(), delete e.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, o.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, o.prototype.needsResizeLayout = function() {
            var t = n(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, o.prototype.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, o.prototype.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, o.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, o.prototype.reveal = function(t) {
            this._emitCompleteOnItems("reveal", t);
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.reveal()
            }
        }, o.prototype.hide = function(t) {
            this._emitCompleteOnItems("hide", t);
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.hide()
            }
        }, o.prototype.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, o.prototype.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, o.prototype.getItem = function(t) {
            for (var e = 0, i = this.items.length; i > e; e++) {
                var n = this.items[e];
                if (n.element === t) return n
            }
        }, o.prototype.getItems = function(t) {
            t = r.makeArray(t);
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var s = t[i],
                    o = this.getItem(s);
                o && e.push(o)
            }
            return e
        }, o.prototype.remove = function(t) {
            var e = this.getItems(t);
            if (this._emitCompleteOnItems("remove", e), e && e.length)
                for (var i = 0, n = e.length; n > i; i++) {
                    var s = e[i];
                    s.remove(), r.removeFrom(this.items, s)
                }
        }, o.prototype.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, i = this.items.length; i > e; e++) {
                var n = this.items[e];
                n.destroy()
            }
            this.unbindResize();
            var r = this.element.outlayerGUID;
            delete p[r], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, o.data = function(t) {
            t = r.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && p[e]
        }, o.create = function(t, e) {
            function i() {
                o.apply(this, arguments)
            }
            return Object.create ? i.prototype = Object.create(o.prototype) : r.extend(i.prototype, o.prototype), i.prototype.constructor = i, i.defaults = r.extend({}, o.defaults), r.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = o.data, i.Item = function() {
                s.apply(this, arguments)
            }, i.Item.prototype = new s, r.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
        }, o.Item = s, o
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
    }(window, function(t, e, i) {
        var n = t.create("masonry");
        return n.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;) this.colYs.push(0);
            this.maxY = 0
        }, n.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var n = this.columnWidth += this.gutter,
                r = this.containerWidth + this.gutter,
                s = r / n,
                o = n - r % n,
                a = o && 1 > o ? "round" : "floor";
            s = Math[a](s), this.cols = Math.max(s, 1)
        }, n.prototype.getContainerWidth = function() {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                i = e(t);
            this.containerWidth = i && i.innerWidth
        }, n.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                n = e && 1 > e ? "round" : "ceil",
                r = Math[n](t.size.outerWidth / this.columnWidth);
            r = Math.min(r, this.cols);
            for (var s = this._getColGroup(r), o = Math.min.apply(Math, s), a = i.indexOf(s, o), l = {
                    x: this.columnWidth * a,
                    y: o
                }, h = o + t.size.outerHeight, u = this.cols + 1 - s.length, p = 0; u > p; p++) this.colYs[a + p] = h;
            return l
        }, n.prototype._getColGroup = function(t) {
            if (2 > t) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                var r = this.colYs.slice(n, n + t);
                e[n] = Math.max.apply(Math, r)
            }
            return e
        }, n.prototype._manageStamp = function(t) {
            var i = e(t),
                n = this._getElementOffset(t),
                r = this.options.isOriginLeft ? n.left : n.right,
                s = r + i.outerWidth,
                o = Math.floor(r / this.columnWidth);
            o = Math.max(0, o);
            var a = Math.floor(s / this.columnWidth);
            a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, h = o; a >= h; h++) this.colYs[h] = Math.max(l, this.colYs[h])
        }, n.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
        }, n.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, n.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth
        }, n
    }), ! function(t) {
        function e() {}

        function i(t) {
            function i(e) {
                e.prototype.option || (e.prototype.option = function(e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                })
            }

            function r(e, i) {
                t.fn[e] = function(r) {
                    if ("string" == typeof r) {
                        for (var o = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                            var h = this[a],
                                u = t.data(h, e);
                            if (u)
                                if (t.isFunction(u[r]) && "_" !== r.charAt(0)) {
                                    var p = u[r].apply(u, o);
                                    if (void 0 !== p) return p
                                } else s("no such method '" + r + "' for " + e + " instance");
                            else s("cannot call methods on " + e + " prior to initialization; attempted to call '" + r + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var n = t.data(this, e);
                        n ? (n.option(r), n._init()) : (n = new i(this, r), t.data(this, e, n))
                    })
                }
            }
            if (t) {
                var s = "undefined" == typeof console ? e : function(t) {
                    console.error(t)
                };
                return t.bridget = function(t, e) {
                    i(e), r(t, e)
                }, t.bridget
            }
        }
        var n = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
    }(window),
    function(t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function() {};
        i.addEventListener ? n = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function() {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var r = function() {};
        i.removeEventListener ? r = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (r = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var s = {
            bind: n,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", s) : "object" == typeof exports ? module.exports = s : t.eventie = s
    }(window),
    function() {
        "use strict";

        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        var n = t.prototype,
            r = this,
            s = r.EventEmitter;
        n.getListeners = function(t) {
            var e, i, n = this._getEvents();
            if (t instanceof RegExp) {
                e = {};
                for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
            } else e = n[t] || (n[t] = []);
            return e
        }, n.flattenListeners = function(t) {
            var e, i = [];
            for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
            return i
        }, n.getListenersAsObject = function(t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, n.addListener = function(t, i) {
            var n, r = this.getListenersAsObject(t),
                s = "object" == typeof i;
            for (n in r) r.hasOwnProperty(n) && -1 === e(r[n], i) && r[n].push(s ? i : {
                listener: i,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
            return this.getListeners(t), this
        }, n.defineEvents = function(t) {
            for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
            return this
        }, n.removeListener = function(t, i) {
            var n, r, s = this.getListenersAsObject(t);
            for (r in s) s.hasOwnProperty(r) && (n = e(s[r], i), -1 !== n && s[r].splice(n, 1));
            return this
        }, n.off = i("removeListener"), n.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, n.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, n.manipulateListeners = function(t, e, i) {
            var n, r, s = t ? this.removeListener : this.addListener,
                o = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (n = i.length; n--;) s.call(this, e, i[n]);
            else
                for (n in e) e.hasOwnProperty(n) && (r = e[n]) && ("function" == typeof r ? s.call(this, n, r) : o.call(this, n, r));
            return this
        }, n.removeEvent = function(t) {
            var e, i = typeof t,
                n = this._getEvents();
            if ("string" === i) delete n[t];
            else if (t instanceof RegExp)
                for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
            var i, n, r, s, o = this.getListenersAsObject(t);
            for (r in o)
                if (o.hasOwnProperty(r))
                    for (n = o[r].length; n--;) i = o[r][n], i.once === !0 && this.removeListener(t, i.listener), s = i.listener.apply(this, e || []), s === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, n.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this
        }, n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, t.noConflict = function() {
            return r.EventEmitter = s, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : r.EventEmitter = t
    }.call(this),
    function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof n[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, r = 0, s = i.length; s > r; r++)
                    if (e = i[r] + t, "string" == typeof n[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            n = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function(t, e) {
        function i(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function n() {}

        function r() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0, i = a.length; i > e; e++) {
                var n = a[e];
                t[n] = 0
            }
            return t
        }

        function s(e) {
            function n() {
                if (!c) {
                    c = !0;
                    var n = t.getComputedStyle;
                    if (h = function() {
                            var t = n ? function(t) {
                                return n(t, null)
                            } : function(t) {
                                return t.currentStyle
                            };
                            return function(e) {
                                var i = t(e);
                                return i || o("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                            }
                        }(), u = e("boxSizing")) {
                        var r = document.createElement("div");
                        r.style.width = "200px", r.style.padding = "1px 2px 3px 4px", r.style.borderStyle = "solid", r.style.borderWidth = "1px 2px 3px 4px", r.style[u] = "border-box";
                        var s = document.body || document.documentElement;
                        s.appendChild(r);
                        var a = h(r);
                        p = 200 === i(a.width), s.removeChild(r)
                    }
                }
            }

            function s(t) {
                if (n(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var e = h(t);
                    if ("none" === e.display) return r();
                    var s = {};
                    s.width = t.offsetWidth, s.height = t.offsetHeight;
                    for (var o = s.isBorderBox = !(!u || !e[u] || "border-box" !== e[u]), c = 0, f = a.length; f > c; c++) {
                        var d = a[c],
                            m = e[d];
                        m = l(t, m);
                        var g = parseFloat(m);
                        s[d] = isNaN(g) ? 0 : g
                    }
                    var y = s.paddingLeft + s.paddingRight,
                        v = s.paddingTop + s.paddingBottom,
                        _ = s.marginLeft + s.marginRight,
                        x = s.marginTop + s.marginBottom,
                        b = s.borderLeftWidth + s.borderRightWidth,
                        w = s.borderTopWidth + s.borderBottomWidth,
                        T = o && p,
                        S = i(e.width);
                    S !== !1 && (s.width = S + (T ? 0 : y + b));
                    var P = i(e.height);
                    return P !== !1 && (s.height = P + (T ? 0 : v + w)), s.innerWidth = s.width - (y + b), s.innerHeight = s.height - (v + w), s.outerWidth = s.width + _, s.outerHeight = s.height + x, s
                }
            }

            function l(e, i) {
                if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
                var n = e.style,
                    r = n.left,
                    s = e.runtimeStyle,
                    o = s && s.left;
                return o && (s.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = r, o && (s.left = o), i
            }
            var h, u, p, c = !1;
            return s
        }
        var o = "undefined" == typeof console ? n : function(t) {
                console.error(t)
            },
            a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], s) : "object" == typeof exports ? module.exports = s(require("desandro-get-style-property")) : t.getSize = s(t.getStyleProperty)
    }(window),
    function(t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : o.push(t))
        }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== s.readyState;
            e.isReady || i || n()
        }

        function n() {
            e.isReady = !0;
            for (var t = 0, i = o.length; i > t; t++) {
                var n = o[t];
                n()
            }
        }

        function r(r) {
            return "complete" === s.readyState ? n() : (r.bind(s, "DOMContentLoaded", i), r.bind(s, "readystatechange", i), r.bind(t, "load", i)), e
        }
        var s = t.document,
            o = [];
        e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], r) : "object" == typeof exports ? module.exports = r(require("eventie")) : t.docReady = r(t.eventie)
    }(window),
    function(t) {
        "use strict";

        function e(t, e) {
            return t[o](e)
        }

        function i(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function n(t, e) {
            i(t);
            for (var n = t.parentNode.querySelectorAll(e), r = 0, s = n.length; s > r; r++)
                if (n[r] === t) return !0;
            return !1
        }

        function r(t, n) {
            return i(t), e(t, n)
        }
        var s, o = function() {
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
                var r = e[i],
                    s = r + "MatchesSelector";
                if (t[s]) return s
            }
        }();
        if (o) {
            var a = document.createElement("div"),
                l = e(a, "div");
            s = l ? e : r
        } else s = n;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return s
        }) : "object" == typeof exports ? module.exports = s : window.matchesSelector = s
    }(Element.prototype),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
    }(window, function(t, e, i) {
        var n = {};
        n.extend = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, n.modulo = function(t, e) {
            return (t % e + e) % e
        };
        var r = Object.prototype.toString;
        n.isArray = function(t) {
            return "[object Array]" == r.call(t)
        }, n.makeArray = function(t) {
            var e = [];
            if (n.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, r = t.length; r > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, n.indexOf = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, n = t.length; n > i; i++)
                if (t[i] === e) return i;
            return -1
        }, n.removeFrom = function(t, e) {
            var i = n.indexOf(t, e); - 1 != i && t.splice(i, 1)
        }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
            return t instanceof HTMLElement
        } : function(t) {
            return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
        }, n.setText = function() {
            function t(t, i) {
                e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
            }
            var e;
            return t
        }(), n.getParent = function(t, e) {
            for (; t != document.body;)
                if (t = t.parentNode, i(t, e)) return t
        }, n.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function(t, e) {
            t = n.makeArray(t);
            for (var r = [], s = 0, o = t.length; o > s; s++) {
                var a = t[s];
                if (n.isElement(a))
                    if (e) {
                        i(a, e) && r.push(a);
                        for (var l = a.querySelectorAll(e), h = 0, u = l.length; u > h; h++) r.push(l[h])
                    } else r.push(a)
            }
            return r
        }, n.debounceMethod = function(t, e, i) {
            var n = t.prototype[e],
                r = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[r];
                t && clearTimeout(t);
                var e = arguments,
                    s = this;
                this[r] = setTimeout(function() {
                    n.apply(s, e), delete s[r]
                }, i || 100)
            }
        }, n.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var s = t.console;
        return n.htmlInit = function(i, r) {
            e(function() {
                for (var e = n.toDashed(r), o = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, h = o.length; h > l; l++) {
                    var u, p = o[l],
                        c = p.getAttribute(a);
                    try {
                        u = c && JSON.parse(c)
                    } catch (f) {
                        s && s.error("Error parsing " + a + " on " + p.nodeName.toLowerCase() + (p.id ? "#" + p.id : "") + ": " + f);
                        continue
                    }
                    var d = new i(p, u),
                        m = t.jQuery;
                    m && m.data(p, r, d)
                }
            })
        }, n
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, n, r, s) {
            return e(t, i, n, r, s)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Outlayer = {}, t.Outlayer.Item = e(t, t.EventEmitter, t.getSize, t.getStyleProperty, t.fizzyUIUtils))
    }(window, function(t, e, i, n, r) {
        "use strict";

        function s(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function o(t, e) {
            t && (this.element = t, this.layout = e, this.position = {
                x: 0,
                y: 0
            }, this._create())
        }

        function a(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }
        var l = t.getComputedStyle,
            h = l ? function(t) {
                return l(t, null)
            } : function(t) {
                return t.currentStyle
            },
            u = n("transition"),
            p = n("transform"),
            c = u && p,
            f = !!n("perspective"),
            d = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "otransitionend",
                transition: "transitionend"
            }[u],
            m = ["transform", "transition", "transitionDuration", "transitionProperty"],
            g = function() {
                for (var t = {}, e = 0, i = m.length; i > e; e++) {
                    var r = m[e],
                        s = n(r);
                    s && s !== r && (t[r] = s)
                }
                return t
            }();
        r.extend(o.prototype, e.prototype), o.prototype._create = function() {
            this._transn = {
                ingProperties: {},
                clean: {},
                onEnd: {}
            }, this.css({
                position: "absolute"
            })
        }, o.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, o.prototype.getSize = function() {
            this.size = i(this.element)
        }, o.prototype.css = function(t) {
            var e = this.element.style;
            for (var i in t) {
                var n = g[i] || i;
                e[n] = t[i]
            }
        }, o.prototype.getPosition = function() {
            var t = h(this.element),
                e = this.layout.options,
                i = e.isOriginLeft,
                n = e.isOriginTop,
                r = t[i ? "left" : "right"],
                s = t[n ? "top" : "bottom"],
                o = this.layout.size,
                a = -1 != r.indexOf("%") ? parseFloat(r) / 100 * o.width : parseInt(r, 10),
                l = -1 != s.indexOf("%") ? parseFloat(s) / 100 * o.height : parseInt(s, 10);
            a = isNaN(a) ? 0 : a, l = isNaN(l) ? 0 : l, a -= i ? o.paddingLeft : o.paddingRight, l -= n ? o.paddingTop : o.paddingBottom, this.position.x = a, this.position.y = l
        }, o.prototype.layoutPosition = function() {
            var t = this.layout.size,
                e = this.layout.options,
                i = {},
                n = e.isOriginLeft ? "paddingLeft" : "paddingRight",
                r = e.isOriginLeft ? "left" : "right",
                s = e.isOriginLeft ? "right" : "left",
                o = this.position.x + t[n];
            i[r] = this.getXValue(o), i[s] = "";
            var a = e.isOriginTop ? "paddingTop" : "paddingBottom",
                l = e.isOriginTop ? "top" : "bottom",
                h = e.isOriginTop ? "bottom" : "top",
                u = this.position.y + t[a];
            i[l] = this.getYValue(u), i[h] = "", this.css(i), this.emitEvent("layout", [this])
        }, o.prototype.getXValue = function(t) {
            var e = this.layout.options;
            return e.percentPosition && !e.isHorizontal ? t / this.layout.size.width * 100 + "%" : t + "px"
        }, o.prototype.getYValue = function(t) {
            var e = this.layout.options;
            return e.percentPosition && e.isHorizontal ? t / this.layout.size.height * 100 + "%" : t + "px"
        }, o.prototype._transitionTo = function(t, e) {
            this.getPosition();
            var i = this.position.x,
                n = this.position.y,
                r = parseInt(t, 10),
                s = parseInt(e, 10),
                o = r === this.position.x && s === this.position.y;
            if (this.setPosition(t, e), o && !this.isTransitioning) return void this.layoutPosition();
            var a = t - i,
                l = e - n,
                h = {};
            h.transform = this.getTranslate(a, l), this.transition({
                to: h,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        }, o.prototype.getTranslate = function(t, e) {
            var i = this.layout.options;
            return t = i.isOriginLeft ? t : -t, e = i.isOriginTop ? e : -e, f ? "translate3d(" + t + "px, " + e + "px, 0)" : "translate(" + t + "px, " + e + "px)"
        }, o.prototype.goTo = function(t, e) {
            this.setPosition(t, e), this.layoutPosition()
        }, o.prototype.moveTo = c ? o.prototype._transitionTo : o.prototype.goTo, o.prototype.setPosition = function(t, e) {
            this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
        }, o.prototype._nonTransition = function(t) {
            this.css(t.to), t.isCleaning && this._removeStyles(t.to);
            for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }, o.prototype._transition = function(t) {
            if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                var n = this.element.offsetHeight;
                n = null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        };
        var y = "opacity," + a(g.transform || "transform");
        o.prototype.enableTransition = function() {
            this.isTransitioning || (this.css({
                transitionProperty: y,
                transitionDuration: this.layout.options.transitionDuration
            }), this.element.addEventListener(d, this, !1))
        }, o.prototype.transition = o.prototype[u ? "_transition" : "_nonTransition"], o.prototype.onwebkitTransitionEnd = function(t) {
            this.ontransitionend(t)
        }, o.prototype.onotransitionend = function(t) {
            this.ontransitionend(t)
        };
        var v = {
            "-webkit-transform": "transform",
            "-moz-transform": "transform",
            "-o-transform": "transform"
        };
        o.prototype.ontransitionend = function(t) {
            if (t.target === this.element) {
                var e = this._transn,
                    i = v[t.propertyName] || t.propertyName;
                if (delete e.ingProperties[i], s(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) {
                    var n = e.onEnd[i];
                    n.call(this), delete e.onEnd[i]
                }
                this.emitEvent("transitionEnd", [this])
            }
        }, o.prototype.disableTransition = function() {
            this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1
        }, o.prototype._removeStyles = function(t) {
            var e = {};
            for (var i in t) e[i] = "";
            this.css(e)
        };
        var _ = {
            transitionProperty: "",
            transitionDuration: ""
        };
        return o.prototype.removeTransitionStyles = function() {
            this.css(_)
        }, o.prototype.removeElem = function() {
            this.element.parentNode.removeChild(this.element), this.css({
                display: ""
            }), this.emitEvent("remove", [this])
        }, o.prototype.remove = function() {
            if (!u || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
            var t = this;
            this.once("transitionEnd", function() {
                t.removeElem()
            }), this.hide()
        }, o.prototype.reveal = function() {
            delete this.isHidden, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("visibleStyle");
            e[i] = this.onRevealTransitionEnd, this.transition({
                from: t.hiddenStyle,
                to: t.visibleStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, o.prototype.onRevealTransitionEnd = function() {
            this.isHidden || this.emitEvent("reveal")
        }, o.prototype.getHideRevealTransitionEndProperty = function(t) {
            var e = this.layout.options[t];
            if (e.opacity) return "opacity";
            for (var i in e) return i
        }, o.prototype.hide = function() {
            this.isHidden = !0, this.css({
                display: ""
            });
            var t = this.layout.options,
                e = {},
                i = this.getHideRevealTransitionEndProperty("hiddenStyle");
            e[i] = this.onHideTransitionEnd, this.transition({
                from: t.visibleStyle,
                to: t.hiddenStyle,
                isCleaning: !0,
                onTransitionEnd: e
            })
        }, o.prototype.onHideTransitionEnd = function() {
            this.isHidden && (this.css({
                display: "none"
            }), this.emitEvent("hide"))
        }, o.prototype.destroy = function() {
            this.css({
                position: "",
                left: "",
                right: "",
                top: "",
                bottom: "",
                transition: "",
                transform: ""
            })
        }, o
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, r, s, o) {
            return e(t, i, n, r, s, o)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.eventie, t.EventEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
    }(window, function(t, e, i, n, r, s) {
        "use strict";

        function o(t, e) {
            var i = r.getQueryElement(t);
            if (!i) return void(a && a.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));
            this.element = i, l && (this.$element = l(this.element)), this.options = r.extend({}, this.constructor.defaults), this.option(e);
            var n = ++u;
            this.element.outlayerGUID = n, p[n] = this, this._create(), this.options.isInitLayout && this.layout()
        }
        var a = t.console,
            l = t.jQuery,
            h = function() {},
            u = 0,
            p = {};
        return o.namespace = "outlayer", o.Item = s, o.defaults = {
            containerStyle: {
                position: "relative"
            },
            isInitLayout: !0,
            isOriginLeft: !0,
            isOriginTop: !0,
            isResizeBound: !0,
            isResizingContainer: !0,
            transitionDuration: "0.4s",
            hiddenStyle: {
                opacity: 0,
                transform: "scale(0.001)"
            },
            visibleStyle: {
                opacity: 1,
                transform: "scale(1)"
            }
        }, r.extend(o.prototype, i.prototype), o.prototype.option = function(t) {
            r.extend(this.options, t)
        }, o.prototype._create = function() {
            this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), r.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
        }, o.prototype.reloadItems = function() {
            this.items = this._itemize(this.element.children)
        }, o.prototype._itemize = function(t) {
            for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], r = 0, s = e.length; s > r; r++) {
                var o = e[r],
                    a = new i(o, this);
                n.push(a)
            }
            return n
        }, o.prototype._filterFindItemElements = function(t) {
            return r.filterFindElements(t, this.options.itemSelector)
        }, o.prototype.getItemElements = function() {
            for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
            return t
        }, o.prototype.layout = function() {
            this._resetLayout(), this._manageStamps();
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            this.layoutItems(this.items, t), this._isLayoutInited = !0
        }, o.prototype._init = o.prototype.layout, o.prototype._resetLayout = function() {
            this.getSize()
        }, o.prototype.getSize = function() {
            this.size = n(this.element)
        }, o.prototype._getMeasurement = function(t, e) {
            var i, s = this.options[t];
            s ? ("string" == typeof s ? i = this.element.querySelector(s) : r.isElement(s) && (i = s), this[t] = i ? n(i)[e] : s) : this[t] = 0
        }, o.prototype.layoutItems = function(t, e) {
            t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
        }, o.prototype._getItemsForLayout = function(t) {
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var r = t[i];
                r.isIgnored || e.push(r)
            }
            return e
        }, o.prototype._layoutItems = function(t, e) {
            if (this._emitCompleteOnItems("layout", t), t && t.length) {
                for (var i = [], n = 0, r = t.length; r > n; n++) {
                    var s = t[n],
                        o = this._getItemLayoutPosition(s);
                    o.item = s, o.isInstant = e || s.isLayoutInstant, i.push(o)
                }
                this._processLayoutQueue(i)
            }
        }, o.prototype._getItemLayoutPosition = function() {
            return {
                x: 0,
                y: 0
            }
        }, o.prototype._processLayoutQueue = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                this._positionItem(n.item, n.x, n.y, n.isInstant)
            }
        }, o.prototype._positionItem = function(t, e, i, n) {
            n ? t.goTo(e, i) : t.moveTo(e, i)
        }, o.prototype._postLayout = function() {
            this.resizeContainer()
        }, o.prototype.resizeContainer = function() {
            if (this.options.isResizingContainer) {
                var t = this._getContainerSize();
                t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
            }
        }, o.prototype._getContainerSize = h, o.prototype._setContainerMeasure = function(t, e) {
            if (void 0 !== t) {
                var i = this.size;
                i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
            }
        }, o.prototype._emitCompleteOnItems = function(t, e) {
            function i() {
                r.dispatchEvent(t + "Complete", null, [e])
            }

            function n() {
                o++, o === s && i()
            }
            var r = this,
                s = e.length;
            if (!e || !s) return void i();
            for (var o = 0, a = 0, l = e.length; l > a; a++) {
                var h = e[a];
                h.once(t, n)
            }
        }, o.prototype.dispatchEvent = function(t, e, i) {
            var n = e ? [e].concat(i) : i;
            if (this.emitEvent(t, n), l)
                if (this.$element = this.$element || l(this.element), e) {
                    var r = l.Event(e);
                    r.type = t, this.$element.trigger(r, i)
                } else this.$element.trigger(t, i)
        }, o.prototype.ignore = function(t) {
            var e = this.getItem(t);
            e && (e.isIgnored = !0)
        }, o.prototype.unignore = function(t) {
            var e = this.getItem(t);
            e && delete e.isIgnored
        }, o.prototype.stamp = function(t) {
            if (t = this._find(t)) {
                this.stamps = this.stamps.concat(t);
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    this.ignore(n)
                }
            }
        }, o.prototype.unstamp = function(t) {
            if (t = this._find(t))
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    r.removeFrom(this.stamps, n), this.unignore(n)
                }
        }, o.prototype._find = function(t) {
            return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = r.makeArray(t)) : void 0
        }, o.prototype._manageStamps = function() {
            if (this.stamps && this.stamps.length) {
                this._getBoundingRect();
                for (var t = 0, e = this.stamps.length; e > t; t++) {
                    var i = this.stamps[t];
                    this._manageStamp(i)
                }
            }
        }, o.prototype._getBoundingRect = function() {
            var t = this.element.getBoundingClientRect(),
                e = this.size;
            this._boundingRect = {
                left: t.left + e.paddingLeft + e.borderLeftWidth,
                top: t.top + e.paddingTop + e.borderTopWidth,
                right: t.right - (e.paddingRight + e.borderRightWidth),
                bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
            }
        }, o.prototype._manageStamp = h, o.prototype._getElementOffset = function(t) {
            var e = t.getBoundingClientRect(),
                i = this._boundingRect,
                r = n(t),
                s = {
                    left: e.left - i.left - r.marginLeft,
                    top: e.top - i.top - r.marginTop,
                    right: i.right - e.right - r.marginRight,
                    bottom: i.bottom - e.bottom - r.marginBottom
                };
            return s
        }, o.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, o.prototype.bindResize = function() {
            this.isResizeBound || (e.bind(t, "resize", this), this.isResizeBound = !0)
        }, o.prototype.unbindResize = function() {
            this.isResizeBound && e.unbind(t, "resize", this), this.isResizeBound = !1
        }, o.prototype.onresize = function() {
            function t() {
                e.resize(), delete e.resizeTimeout
            }
            this.resizeTimeout && clearTimeout(this.resizeTimeout);
            var e = this;
            this.resizeTimeout = setTimeout(t, 100)
        }, o.prototype.resize = function() {
            this.isResizeBound && this.needsResizeLayout() && this.layout()
        }, o.prototype.needsResizeLayout = function() {
            var t = n(this.element),
                e = this.size && t;
            return e && t.innerWidth !== this.size.innerWidth
        }, o.prototype.addItems = function(t) {
            var e = this._itemize(t);
            return e.length && (this.items = this.items.concat(e)), e
        }, o.prototype.appended = function(t) {
            var e = this.addItems(t);
            e.length && (this.layoutItems(e, !0), this.reveal(e))
        }, o.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                var i = this.items.slice(0);
                this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
            }
        }, o.prototype.reveal = function(t) {
            this._emitCompleteOnItems("reveal", t);
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.reveal()
            }
        }, o.prototype.hide = function(t) {
            this._emitCompleteOnItems("hide", t);
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.hide()
            }
        }, o.prototype.revealItemElements = function(t) {
            var e = this.getItems(t);
            this.reveal(e)
        }, o.prototype.hideItemElements = function(t) {
            var e = this.getItems(t);
            this.hide(e)
        }, o.prototype.getItem = function(t) {
            for (var e = 0, i = this.items.length; i > e; e++) {
                var n = this.items[e];
                if (n.element === t) return n
            }
        }, o.prototype.getItems = function(t) {
            t = r.makeArray(t);
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var s = t[i],
                    o = this.getItem(s);
                o && e.push(o)
            }
            return e
        }, o.prototype.remove = function(t) {
            var e = this.getItems(t);
            if (this._emitCompleteOnItems("remove", e), e && e.length)
                for (var i = 0, n = e.length; n > i; i++) {
                    var s = e[i];
                    s.remove(), r.removeFrom(this.items, s)
                }
        }, o.prototype.destroy = function() {
            var t = this.element.style;
            t.height = "", t.position = "", t.width = "";
            for (var e = 0, i = this.items.length; i > e; e++) {
                var n = this.items[e];
                n.destroy()
            }
            this.unbindResize();
            var r = this.element.outlayerGUID;
            delete p[r], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
        }, o.data = function(t) {
            t = r.getQueryElement(t);
            var e = t && t.outlayerGUID;
            return e && p[e]
        }, o.create = function(t, e) {
            function i() {
                o.apply(this, arguments)
            }
            return Object.create ? i.prototype = Object.create(o.prototype) : r.extend(i.prototype, o.prototype), i.prototype.constructor = i, i.defaults = r.extend({}, o.defaults), r.extend(i.defaults, e), i.prototype.settings = {}, i.namespace = t, i.data = o.data, i.Item = function() {
                s.apply(this, arguments)
            }, i.Item.prototype = new s, r.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
        }, o.Item = s, o
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
    }(window, function(t) {
        "use strict";

        function e() {
            t.Item.apply(this, arguments)
        }
        e.prototype = new t.Item, e.prototype._create = function() {
            this.id = this.layout.itemGUID++, t.Item.prototype._create.call(this), this.sortData = {}
        }, e.prototype.updateSortData = function() {
            if (!this.isIgnored) {
                this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
                var t = this.layout.options.getSortData,
                    e = this.layout._sorters;
                for (var i in t) {
                    var n = e[i];
                    this.sortData[i] = n(this.element, this)
                }
            }
        };
        var i = e.prototype.destroy;
        return e.prototype.destroy = function() {
            i.apply(this, arguments), this.css({
                display: ""
            })
        }, e
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
    }(window, function(t, e) {
        "use strict";

        function i(t) {
            this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
        }
        return function() {
            function t(t) {
                return function() {
                    return e.prototype[t].apply(this.isotope, arguments)
                }
            }
            for (var n = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], r = 0, s = n.length; s > r; r++) {
                var o = n[r];
                i.prototype[o] = t(o)
            }
        }(), i.prototype.needsVerticalResizeLayout = function() {
            var e = t(this.isotope.element),
                i = this.isotope.size && e;
            return i && e.innerHeight != this.isotope.size.innerHeight
        }, i.prototype._getMeasurement = function() {
            this.isotope._getMeasurement.apply(this, arguments)
        }, i.prototype.getColumnWidth = function() {
            this.getSegmentSize("column", "Width")
        }, i.prototype.getRowHeight = function() {
            this.getSegmentSize("row", "Height")
        }, i.prototype.getSegmentSize = function(t, e) {
            var i = t + e,
                n = "outer" + e;
            if (this._getMeasurement(i, n), !this[i]) {
                var r = this.getFirstItemSize();
                this[i] = r && r[n] || this.isotope.size["inner" + e]
            }
        }, i.prototype.getFirstItemSize = function() {
            var e = this.isotope.filteredItems[0];
            return e && e.element && t(e.element)
        }, i.prototype.layout = function() {
            this.isotope.layout.apply(this.isotope, arguments)
        }, i.prototype.getSize = function() {
            this.isotope.getSize(), this.size = this.isotope.size
        }, i.modes = {}, i.create = function(t, e) {
            function n() {
                i.apply(this, arguments)
            }
            return n.prototype = new i, e && (n.options = e), n.prototype.namespace = t, i.modes[t] = n, n
        }, i
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], e) : "object" == typeof exports ? module.exports = e(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : t.Masonry = e(t.Outlayer, t.getSize, t.fizzyUIUtils)
    }(window, function(t, e, i) {
        var n = t.create("masonry");
        return n.prototype._resetLayout = function() {
            this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
            var t = this.cols;
            for (this.colYs = []; t--;) this.colYs.push(0);
            this.maxY = 0
        }, n.prototype.measureColumns = function() {
            if (this.getContainerWidth(), !this.columnWidth) {
                var t = this.items[0],
                    i = t && t.element;
                this.columnWidth = i && e(i).outerWidth || this.containerWidth
            }
            var n = this.columnWidth += this.gutter,
                r = this.containerWidth + this.gutter,
                s = r / n,
                o = n - r % n,
                a = o && 1 > o ? "round" : "floor";
            s = Math[a](s), this.cols = Math.max(s, 1)
        }, n.prototype.getContainerWidth = function() {
            var t = this.options.isFitWidth ? this.element.parentNode : this.element,
                i = e(t);
            this.containerWidth = i && i.innerWidth
        }, n.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth % this.columnWidth,
                n = e && 1 > e ? "round" : "ceil",
                r = Math[n](t.size.outerWidth / this.columnWidth);
            r = Math.min(r, this.cols);
            for (var s = this._getColGroup(r), o = Math.min.apply(Math, s), a = i.indexOf(s, o), l = {
                    x: this.columnWidth * a,
                    y: o
                }, h = o + t.size.outerHeight, u = this.cols + 1 - s.length, p = 0; u > p; p++) this.colYs[a + p] = h;
            return l
        }, n.prototype._getColGroup = function(t) {
            if (2 > t) return this.colYs;
            for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
                var r = this.colYs.slice(n, n + t);
                e[n] = Math.max.apply(Math, r)
            }
            return e
        }, n.prototype._manageStamp = function(t) {
            var i = e(t),
                n = this._getElementOffset(t),
                r = this.options.isOriginLeft ? n.left : n.right,
                s = r + i.outerWidth,
                o = Math.floor(r / this.columnWidth);
            o = Math.max(0, o);
            var a = Math.floor(s / this.columnWidth);
            a -= s % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
            for (var l = (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight, h = o; a >= h; h++) this.colYs[h] = Math.max(l, this.colYs[h])
        }, n.prototype._getContainerSize = function() {
            this.maxY = Math.max.apply(Math, this.colYs);
            var t = {
                height: this.maxY
            };
            return this.options.isFitWidth && (t.width = this._getContainerFitWidth()), t
        }, n.prototype._getContainerFitWidth = function() {
            for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
            return (this.cols - t) * this.columnWidth - this.gutter
        }, n.prototype.needsResizeLayout = function() {
            var t = this.containerWidth;
            return this.getContainerWidth(), t !== this.containerWidth
        }, n
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
    }(window, function(t, e) {
        "use strict";

        function i(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }
        var n = t.create("masonry"),
            r = n.prototype._getElementOffset,
            s = n.prototype.layout,
            o = n.prototype._getMeasurement;
        i(n.prototype, e.prototype), n.prototype._getElementOffset = r, n.prototype.layout = s, n.prototype._getMeasurement = o;
        var a = n.prototype.measureColumns;
        n.prototype.measureColumns = function() {
            this.items = this.isotope.filteredItems, a.call(this)
        };
        var l = n.prototype._manageStamp;
        return n.prototype._manageStamp = function() {
            this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, l.apply(this, arguments)
        }, n
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("fitRows");
        return e.prototype._resetLayout = function() {
            this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
        }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = t.size.outerWidth + this.gutter,
                i = this.isotope.size.innerWidth + this.gutter;
            0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
            var n = {
                x: this.x,
                y: this.y
            };
            return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n
        }, e.prototype._getContainerSize = function() {
            return {
                height: this.maxY
            }
        }, e
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
    }(window, function(t) {
        "use strict";
        var e = t.create("vertical", {
            horizontalAlignment: 0
        });
        return e.prototype._resetLayout = function() {
            this.y = 0
        }, e.prototype._getItemLayoutPosition = function(t) {
            t.getSize();
            var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
                i = this.y;
            return this.y += t.size.outerHeight, {
                x: e,
                y: i
            }
        }, e.prototype._getContainerSize = function() {
            return {
                height: this.y
            }
        }, e
    }),
    function(t, e) {
        "use strict";
        "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function(i, n, r, s, o, a) {
            return e(t, i, n, r, s, o, a)
        }) : "object" == typeof exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
    }(window, function(t, e, i, n, r, s, o) {
        function a(t, e) {
            return function(i, n) {
                for (var r = 0, s = t.length; s > r; r++) {
                    var o = t[r],
                        a = i.sortData[o],
                        l = n.sortData[o];
                    if (a > l || l > a) {
                        var h = void 0 !== e[o] ? e[o] : e,
                            u = h ? 1 : -1;
                        return (a > l ? 1 : -1) * u
                    }
                }
                return 0
            }
        }
        var l = t.jQuery,
            h = String.prototype.trim ? function(t) {
                return t.trim()
            } : function(t) {
                return t.replace(/^\s+|\s+$/g, "")
            },
            u = document.documentElement,
            p = u.textContent ? function(t) {
                return t.textContent
            } : function(t) {
                return t.innerText
            },
            c = e.create("isotope", {
                layoutMode: "masonry",
                isJQueryFiltering: !0,
                sortAscending: !0
            });
        c.Item = s, c.LayoutMode = o, c.prototype._create = function() {
            this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
            for (var t in o.modes) this._initLayoutMode(t)
        }, c.prototype.reloadItems = function() {
            this.itemGUID = 0, e.prototype.reloadItems.call(this)
        }, c.prototype._itemize = function() {
            for (var t = e.prototype._itemize.apply(this, arguments), i = 0, n = t.length; n > i; i++) {
                var r = t[i];
                r.id = this.itemGUID++
            }
            return this._updateItemsSortData(t), t
        }, c.prototype._initLayoutMode = function(t) {
            var e = o.modes[t],
                i = this.options[t] || {};
            this.options[t] = e.options ? r.extend(e.options, i) : i, this.modes[t] = new e(this)
        }, c.prototype.layout = function() {
            return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
        }, c.prototype._layout = function() {
            var t = this._getIsInstant();
            this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
        }, c.prototype.arrange = function(t) {
            function e() {
                n.reveal(i.needReveal), n.hide(i.needHide)
            }
            this.option(t), this._getIsInstant();
            var i = this._filter(this.items);
            this.filteredItems = i.matches;
            var n = this;
            this._bindArrangeComplete(), this._isInstant ? this._noTransition(e) : e(), this._sort(), this._layout()
        }, c.prototype._init = c.prototype.arrange, c.prototype._getIsInstant = function() {
            var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
            return this._isInstant = t, t
        }, c.prototype._bindArrangeComplete = function() {
            function t() {
                e && i && n && r.dispatchEvent("arrangeComplete", null, [r.filteredItems])
            }
            var e, i, n, r = this;
            this.once("layoutComplete", function() {
                e = !0, t()
            }), this.once("hideComplete", function() {
                i = !0, t()
            }), this.once("revealComplete", function() {
                n = !0, t()
            })
        }, c.prototype._filter = function(t) {
            var e = this.options.filter;
            e = e || "*";
            for (var i = [], n = [], r = [], s = this._getFilterTest(e), o = 0, a = t.length; a > o; o++) {
                var l = t[o];
                if (!l.isIgnored) {
                    var h = s(l);
                    h && i.push(l), h && l.isHidden ? n.push(l) : h || l.isHidden || r.push(l)
                }
            }
            return {
                matches: i,
                needReveal: n,
                needHide: r
            }
        }, c.prototype._getFilterTest = function(t) {
            return l && this.options.isJQueryFiltering ? function(e) {
                return l(e.element).is(t)
            } : "function" == typeof t ? function(e) {
                return t(e.element)
            } : function(e) {
                return n(e.element, t)
            }
        }, c.prototype.updateSortData = function(t) {
            var e;
            t ? (t = r.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
        }, c.prototype._getSorters = function() {
            var t = this.options.getSortData;
            for (var e in t) {
                var i = t[e];
                this._sorters[e] = f(i)
            }
        }, c.prototype._updateItemsSortData = function(t) {
            for (var e = t && t.length, i = 0; e && e > i; i++) {
                var n = t[i];
                n.updateSortData()
            }
        };
        var f = function() {
            function t(t) {
                if ("string" != typeof t) return t;
                var i = h(t).split(" "),
                    n = i[0],
                    r = n.match(/^\[(.+)\]$/),
                    s = r && r[1],
                    o = e(s, n),
                    a = c.sortDataParsers[i[1]];
                return t = a ? function(t) {
                    return t && a(o(t))
                } : function(t) {
                    return t && o(t)
                }
            }

            function e(t, e) {
                var i;
                return i = t ? function(e) {
                    return e.getAttribute(t)
                } : function(t) {
                    var i = t.querySelector(e);
                    return i && p(i)
                }
            }
            return t
        }();
        c.sortDataParsers = {
            parseInt: function(t) {
                return parseInt(t, 10)
            },
            parseFloat: function(t) {
                return parseFloat(t)
            }
        }, c.prototype._sort = function() {
            var t = this.options.sortBy;
            if (t) {
                var e = [].concat.apply(t, this.sortHistory),
                    i = a(e, this.options.sortAscending);
                this.filteredItems.sort(i), t != this.sortHistory[0] && this.sortHistory.unshift(t)
            }
        }, c.prototype._mode = function() {
            var t = this.options.layoutMode,
                e = this.modes[t];
            if (!e) throw new Error("No layout mode: " + t);
            return e.options = this.options[t], e
        }, c.prototype._resetLayout = function() {
            e.prototype._resetLayout.call(this), this._mode()._resetLayout()
        }, c.prototype._getItemLayoutPosition = function(t) {
            return this._mode()._getItemLayoutPosition(t)
        }, c.prototype._manageStamp = function(t) {
            this._mode()._manageStamp(t)
        }, c.prototype._getContainerSize = function() {
            return this._mode()._getContainerSize()
        }, c.prototype.needsResizeLayout = function() {
            return this._mode().needsResizeLayout()
        }, c.prototype.appended = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i = this._filterRevealAdded(e);
                this.filteredItems = this.filteredItems.concat(i)
            }
        }, c.prototype.prepended = function(t) {
            var e = this._itemize(t);
            if (e.length) {
                this._resetLayout(), this._manageStamps();
                var i = this._filterRevealAdded(e);
                this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
            }
        }, c.prototype._filterRevealAdded = function(t) {
            var e = this._filter(t);
            return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
        }, c.prototype.insert = function(t) {
            var e = this.addItems(t);
            if (e.length) {
                var i, n, r = e.length;
                for (i = 0; r > i; i++) n = e[i], this.element.appendChild(n.element);
                var s = this._filter(e).matches;
                for (i = 0; r > i; i++) e[i].isLayoutInstant = !0;
                for (this.arrange(), i = 0; r > i; i++) delete e[i].isLayoutInstant;
                this.reveal(s)
            }
        };
        var d = c.prototype.remove;
        return c.prototype.remove = function(t) {
            t = r.makeArray(t);
            var e = this.getItems(t);
            d.call(this, t);
            var i = e && e.length;
            if (i)
                for (var n = 0; i > n; n++) {
                    var s = e[n];
                    r.removeFrom(this.filteredItems, s)
                }
        }, c.prototype.shuffle = function() {
            for (var t = 0, e = this.items.length; e > t; t++) {
                var i = this.items[t];
                i.sortData.random = Math.random()
            }
            this.options.sortBy = "random", this._sort(), this._layout()
        }, c.prototype._noTransition = function(t) {
            var e = this.options.transitionDuration;
            this.options.transitionDuration = 0;
            var i = t.call(this);
            return this.options.transitionDuration = e, i
        }, c.prototype.getFilteredItemElements = function() {
            for (var t = [], e = 0, i = this.filteredItems.length; i > e; e++) t.push(this.filteredItems[e].element);
            return t
        }, c
    }), ! function(t) {
        function e() {}

        function i(t) {
            function i(e) {
                e.prototype.option || (e.prototype.option = function(e) {
                    t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
                })
            }

            function r(e, i) {
                t.fn[e] = function(r) {
                    if ("string" == typeof r) {
                        for (var o = n.call(arguments, 1), a = 0, l = this.length; l > a; a++) {
                            var h = this[a],
                                u = t.data(h, e);
                            if (u)
                                if (t.isFunction(u[r]) && "_" !== r.charAt(0)) {
                                    var p = u[r].apply(u, o);
                                    if (void 0 !== p) return p
                                } else s("no such method '" + r + "' for " + e + " instance");
                            else s("cannot call methods on " + e + " prior to initialization; attempted to call '" + r + "'")
                        }
                        return this
                    }
                    return this.each(function() {
                        var n = t.data(this, e);
                        n ? (n.option(r), n._init()) : (n = new i(this, r), t.data(this, e, n))
                    })
                }
            }
            if (t) {
                var s = "undefined" == typeof console ? e : function(t) {
                    console.error(t)
                };
                return t.bridget = function(t, e) {
                    i(e), r(t, e)
                }, t.bridget
            }
        }
        var n = Array.prototype.slice;
        "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : i("object" == typeof exports ? require("jquery") : t.jQuery)
    }(window),
    function(t) {
        function e(t) {
            return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
        }

        function i(t, e) {
            var i = n(t, e) ? s : r;
            i(t, e)
        }
        var n, r, s;
        "classList" in document.documentElement ? (n = function(t, e) {
            return t.classList.contains(e)
        }, r = function(t, e) {
            t.classList.add(e)
        }, s = function(t, e) {
            t.classList.remove(e)
        }) : (n = function(t, i) {
            return e(i).test(t.className)
        }, r = function(t, e) {
            n(t, e) || (t.className = t.className + " " + e)
        }, s = function(t, i) {
            t.className = t.className.replace(e(i), " ")
        });
        var o = {
            hasClass: n,
            addClass: r,
            removeClass: s,
            toggleClass: i,
            has: n,
            add: r,
            remove: s,
            toggle: i
        };
        "function" == typeof define && define.amd ? define("classie/classie", o) : "object" == typeof exports ? module.exports = o : t.classie = o
    }(window),
    function() {
        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        var n = t.prototype,
            r = this,
            s = r.EventEmitter;
        n.getListeners = function(t) {
            var e, i, n = this._getEvents();
            if (t instanceof RegExp) {
                e = {};
                for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
            } else e = n[t] || (n[t] = []);
            return e
        }, n.flattenListeners = function(t) {
            var e, i = [];
            for (e = 0; e < t.length; e += 1) i.push(t[e].listener);
            return i
        }, n.getListenersAsObject = function(t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, n.addListener = function(t, i) {
            var n, r = this.getListenersAsObject(t),
                s = "object" == typeof i;
            for (n in r) r.hasOwnProperty(n) && -1 === e(r[n], i) && r[n].push(s ? i : {
                listener: i,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
            return this.getListeners(t), this
        }, n.defineEvents = function(t) {
            for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e]);
            return this
        }, n.removeListener = function(t, i) {
            var n, r, s = this.getListenersAsObject(t);
            for (r in s) s.hasOwnProperty(r) && (n = e(s[r], i), -1 !== n && s[r].splice(n, 1));
            return this
        }, n.off = i("removeListener"), n.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, n.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, n.manipulateListeners = function(t, e, i) {
            var n, r, s = t ? this.removeListener : this.addListener,
                o = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (n = i.length; n--;) s.call(this, e, i[n]);
            else
                for (n in e) e.hasOwnProperty(n) && (r = e[n]) && ("function" == typeof r ? s.call(this, n, r) : o.call(this, n, r));
            return this
        }, n.removeEvent = function(t) {
            var e, i = typeof t,
                n = this._getEvents();
            if ("string" === i) delete n[t];
            else if (t instanceof RegExp)
                for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
            var i, n, r, s, o = this.getListenersAsObject(t);
            for (r in o)
                if (o.hasOwnProperty(r))
                    for (n = o[r].length; n--;) i = o[r][n], i.once === !0 && this.removeListener(t, i.listener), s = i.listener.apply(this, e || []), s === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, n.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this
        }, n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, t.noConflict = function() {
            return r.EventEmitter = s, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : r.EventEmitter = t
    }.call(this),
    function(t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function() {};
        i.addEventListener ? n = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function() {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var r = function() {};
        i.removeEventListener ? r = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (r = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var s = {
            bind: n,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", s) : "object" == typeof exports ? module.exports = s : t.eventie = s
    }(window),
    function(t) {
        function e(t) {
            if (t) {
                if ("string" == typeof n[t]) return t;
                t = t.charAt(0).toUpperCase() + t.slice(1);
                for (var e, r = 0, s = i.length; s > r; r++)
                    if (e = i[r] + t, "string" == typeof n[e]) return e
            }
        }
        var i = "Webkit Moz ms Ms O".split(" "),
            n = document.documentElement.style;
        "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
            return e
        }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
    }(window),
    function(t) {
        function e(t) {
            var e = parseFloat(t),
                i = -1 === t.indexOf("%") && !isNaN(e);
            return i && e
        }

        function i() {}

        function n() {
            for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0, i = o.length; i > e; e++) {
                var n = o[e];
                t[n] = 0
            }
            return t
        }

        function r(i) {
            function r() {
                if (!c) {
                    c = !0;
                    var n = t.getComputedStyle;
                    if (h = function() {
                            var t = n ? function(t) {
                                return n(t, null)
                            } : function(t) {
                                return t.currentStyle
                            };
                            return function(e) {
                                var i = t(e);
                                return i || s("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), i
                            }
                        }(), u = i("boxSizing")) {
                        var r = document.createElement("div");
                        r.style.width = "200px", r.style.padding = "1px 2px 3px 4px", r.style.borderStyle = "solid", r.style.borderWidth = "1px 2px 3px 4px", r.style[u] = "border-box";
                        var o = document.body || document.documentElement;
                        o.appendChild(r);
                        var a = h(r);
                        p = 200 === e(a.width), o.removeChild(r)
                    }
                }
            }

            function a(t) {
                if (r(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                    var i = h(t);
                    if ("none" === i.display) return n();
                    var s = {};
                    s.width = t.offsetWidth, s.height = t.offsetHeight;
                    for (var a = s.isBorderBox = !(!u || !i[u] || "border-box" !== i[u]), c = 0, f = o.length; f > c; c++) {
                        var d = o[c],
                            m = i[d];
                        m = l(t, m);
                        var g = parseFloat(m);
                        s[d] = isNaN(g) ? 0 : g
                    }
                    var y = s.paddingLeft + s.paddingRight,
                        v = s.paddingTop + s.paddingBottom,
                        _ = s.marginLeft + s.marginRight,
                        x = s.marginTop + s.marginBottom,
                        b = s.borderLeftWidth + s.borderRightWidth,
                        w = s.borderTopWidth + s.borderBottomWidth,
                        T = a && p,
                        S = e(i.width);
                    S !== !1 && (s.width = S + (T ? 0 : y + b));
                    var P = e(i.height);
                    return P !== !1 && (s.height = P + (T ? 0 : v + w)), s.innerWidth = s.width - (y + b), s.innerHeight = s.height - (v + w), s.outerWidth = s.width + _, s.outerHeight = s.height + x, s
                }
            }

            function l(e, i) {
                if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
                var n = e.style,
                    r = n.left,
                    s = e.runtimeStyle,
                    o = s && s.left;
                return o && (s.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = r, o && (s.left = o), i
            }
            var h, u, p, c = !1;
            return a
        }
        var s = "undefined" == typeof console ? i : function(t) {
                console.error(t)
            },
            o = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
        "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], r) : "object" == typeof exports ? module.exports = r(require("desandro-get-style-property")) : t.getSize = r(t.getStyleProperty)
    }(window),
    function(t) {
        function e(t) {
            "function" == typeof t && (e.isReady ? t() : o.push(t))
        }

        function i(t) {
            var i = "readystatechange" === t.type && "complete" !== s.readyState;
            e.isReady || i || n()
        }

        function n() {
            e.isReady = !0;
            for (var t = 0, i = o.length; i > t; t++) {
                var n = o[t];
                n()
            }
        }

        function r(r) {
            return "complete" === s.readyState ? n() : (r.bind(s, "DOMContentLoaded", i), r.bind(s, "readystatechange", i), r.bind(t, "load", i)), e
        }
        var s = t.document,
            o = [];
        e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], r) : "object" == typeof exports ? module.exports = r(require("eventie")) : t.docReady = r(t.eventie)
    }(window),
    function(t) {
        function e(t, e) {
            return t[o](e)
        }

        function i(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function n(t, e) {
            i(t);
            for (var n = t.parentNode.querySelectorAll(e), r = 0, s = n.length; s > r; r++)
                if (n[r] === t) return !0;
            return !1
        }

        function r(t, n) {
            return i(t), e(t, n)
        }
        var s, o = function() {
            if (t.matches) return "matches";
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
                var r = e[i],
                    s = r + "MatchesSelector";
                if (t[s]) return s
            }
        }();
        if (o) {
            var a = document.createElement("div"),
                l = e(a, "div");
            s = l ? e : r
        } else s = n;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return s
        }) : "object" == typeof exports ? module.exports = s : window.matchesSelector = s
    }(Element.prototype),
    function(t, e) {
        "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("doc-ready"), require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.docReady, t.matchesSelector)
    }(window, function(t, e, i) {
        var n = {};
        n.extend = function(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, n.modulo = function(t, e) {
            return (t % e + e) % e
        };
        var r = Object.prototype.toString;
        n.isArray = function(t) {
            return "[object Array]" == r.call(t)
        }, n.makeArray = function(t) {
            var e = [];
            if (n.isArray(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var i = 0, r = t.length; r > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }, n.indexOf = Array.prototype.indexOf ? function(t, e) {
            return t.indexOf(e)
        } : function(t, e) {
            for (var i = 0, n = t.length; n > i; i++)
                if (t[i] === e) return i;
            return -1
        }, n.removeFrom = function(t, e) {
            var i = n.indexOf(t, e); - 1 != i && t.splice(i, 1)
        }, n.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
            return t instanceof HTMLElement
        } : function(t) {
            return t && "object" == typeof t && 1 == t.nodeType && "string" == typeof t.nodeName
        }, n.setText = function() {
            function t(t, i) {
                e = e || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), t[e] = i
            }
            var e;
            return t
        }(), n.getParent = function(t, e) {
            for (; t != document.body;)
                if (t = t.parentNode, i(t, e)) return t
        }, n.getQueryElement = function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        }, n.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, n.filterFindElements = function(t, e) {
            t = n.makeArray(t);
            for (var r = [], s = 0, o = t.length; o > s; s++) {
                var a = t[s];
                if (n.isElement(a))
                    if (e) {
                        i(a, e) && r.push(a);
                        for (var l = a.querySelectorAll(e), h = 0, u = l.length; u > h; h++) r.push(l[h])
                    } else r.push(a)
            }
            return r
        }, n.debounceMethod = function(t, e, i) {
            var n = t.prototype[e],
                r = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[r];
                t && clearTimeout(t);
                var e = arguments,
                    s = this;
                this[r] = setTimeout(function() {
                    n.apply(s, e), delete s[r]
                }, i || 100)
            }
        }, n.toDashed = function(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        };
        var s = t.console;
        return n.htmlInit = function(i, r) {
            e(function() {
                for (var e = n.toDashed(r), o = document.querySelectorAll(".js-" + e), a = "data-" + e + "-options", l = 0, h = o.length; h > l; l++) {
                    var u, p = o[l],
                        c = p.getAttribute(a);
                    try {
                        u = c && JSON.parse(c)
                    } catch (f) {
                        s && s.error("Error parsing " + a + " on " + p.nodeName.toLowerCase() + (p.id ? "#" + p.id : "") + ": " + f);
                        continue
                    }
                    var d = new i(p, u),
                        m = t.jQuery;
                    m && m.data(p, r, d)
                }
            })
        }, n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/cell", ["get-size/get-size"], function(i) {
            return e(t, i)
        }) : "object" == typeof exports ? module.exports = e(t, require("get-size")) : (t.Flickity = t.Flickity || {}, t.Flickity.Cell = e(t, t.getSize))
    }(window, function(t, e) {
        function i(t, e) {
            this.element = t, this.parent = e, this.create()
        }
        var n = "attachEvent" in t;
        return i.prototype.create = function() {
            this.element.style.position = "absolute", n && this.element.setAttribute("unselectable", "on"), this.x = 0, this.shift = 0
        }, i.prototype.destroy = function() {
            this.element.style.position = "";
            var t = this.parent.originSide;
            this.element.style[t] = ""
        }, i.prototype.getSize = function() {
            this.size = e(this.element)
        }, i.prototype.setPosition = function(t) {
            this.x = t, this.setDefaultTarget(), this.renderPosition(t)
        }, i.prototype.setDefaultTarget = function() {
            var t = "left" == this.parent.originSide ? "marginLeft" : "marginRight";
            this.target = this.x + this.size[t] + this.size.width * this.parent.cellAlign
        }, i.prototype.renderPosition = function(t) {
            var e = this.parent.originSide;
            this.element.style[e] = this.parent.getPositionValue(t)
        }, i.prototype.wrapShift = function(t) {
            this.shift = t, this.renderPosition(this.x + this.parent.slideableWidth * t)
        }, i.prototype.remove = function() {
            this.element.parentNode.removeChild(this.element)
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/animate", ["get-style-property/get-style-property", "fizzy-ui-utils/utils"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("desandro-get-style-property"), require("fizzy-ui-utils")) : (t.Flickity = t.Flickity || {}, t.Flickity.animatePrototype = e(t, t.getStyleProperty, t.fizzyUIUtils))
    }(window, function(t, e, i) {
        for (var n, r = 0, s = "webkit moz ms o".split(" "), o = t.requestAnimationFrame, a = t.cancelAnimationFrame, l = 0; l < s.length && (!o || !a); l++) n = s[l], o = o || t[n + "RequestAnimationFrame"], a = a || t[n + "CancelAnimationFrame"] || t[n + "CancelRequestAnimationFrame"];
        o && a || (o = function(e) {
            var i = (new Date).getTime(),
                n = Math.max(0, 16 - (i - r)),
                s = t.setTimeout(function() {
                    e(i + n)
                }, n);
            return r = i + n, s
        }, a = function(e) {
            t.clearTimeout(e)
        });
        var h = {};
        h.startAnimation = function() {
            this.isAnimating || (this.isAnimating = !0, this.restingFrames = 0, this.animate())
        }, h.animate = function() {
            this.applyDragForce(), this.applySelectedAttraction();
            var t = this.x;
            if (this.integratePhysics(), this.positionSlider(), this.settle(t), this.isAnimating) {
                var e = this;
                o(function() {
                    e.animate()
                })
            }
        };
        var u = e("transform"),
            p = !!e("perspective");
        return h.positionSlider = function() {
            var t = this.x;
            this.options.wrapAround && this.cells.length > 1 && (t = i.modulo(t, this.slideableWidth), t -= this.slideableWidth, this.shiftWrapCells(t)), t += this.cursorPosition, t = this.options.rightToLeft && u ? -t : t;
            var e = this.getPositionValue(t);
            u ? this.slider.style[u] = p && this.isAnimating ? "translate3d(" + e + ",0,0)" : "translateX(" + e + ")" : this.slider.style[this.originSide] = e
        }, h.positionSliderAtSelected = function() {
            if (this.cells.length) {
                var t = this.cells[this.selectedIndex];
                this.x = -t.target, this.positionSlider()
            }
        }, h.getPositionValue = function(t) {
            return this.options.percentPosition ? .01 * Math.round(t / this.size.innerWidth * 1e4) + "%" : Math.round(t) + "px"
        }, h.settle = function(t) {
            this.isPointerDown || Math.round(100 * this.x) != Math.round(100 * t) || this.restingFrames++, this.restingFrames > 2 && (this.isAnimating = !1, delete this.isFreeScrolling, p && this.positionSlider(), this.dispatchEvent("settle"))
        }, h.shiftWrapCells = function(t) {
            var e = this.cursorPosition + t;
            this._shiftCells(this.beforeShiftCells, e, -1);
            var i = this.size.innerWidth - (t + this.slideableWidth + this.cursorPosition);
            this._shiftCells(this.afterShiftCells, i, 1)
        }, h._shiftCells = function(t, e, i) {
            for (var n = 0, r = t.length; r > n; n++) {
                var s = t[n],
                    o = e > 0 ? i : 0;
                s.wrapShift(o), e -= s.size.outerWidth
            }
        }, h._unshiftCells = function(t) {
            if (t && t.length)
                for (var e = 0, i = t.length; i > e; e++) t[e].wrapShift(0)
        }, h.integratePhysics = function() {
            this.velocity += this.accel, this.x += this.velocity, this.velocity *= this.getFrictionFactor(), this.accel = 0
        }, h.applyForce = function(t) {
            this.accel += t
        }, h.getFrictionFactor = function() {
            return 1 - this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        }, h.getRestingPosition = function() {
            return this.x + this.velocity / (1 - this.getFrictionFactor())
        }, h.applyDragForce = function() {
            if (this.isPointerDown) {
                var t = this.dragX - this.x,
                    e = t - this.velocity;
                this.applyForce(e)
            }
        }, h.applySelectedAttraction = function() {
            var t = this.cells.length;
            if (!this.isPointerDown && !this.isFreeScrolling && t) {
                var e = this.cells[this.selectedIndex],
                    i = this.options.wrapAround && t > 1 ? this.slideableWidth * Math.floor(this.selectedIndex / t) : 0,
                    n = -1 * (e.target + i) - this.x,
                    r = n * this.options.selectedAttraction;
                this.applyForce(r)
            }
        }, h
    }),
    function(t, e) {
        if ("function" == typeof define && define.amd) define("flickity/js/flickity", ["classie/classie", "eventEmitter/EventEmitter", "eventie/eventie", "get-size/get-size", "fizzy-ui-utils/utils", "./cell", "./animate"], function(i, n, r, s, o, a, l) {
            return e(t, i, n, r, s, o, a, l)
        });
        else if ("object" == typeof exports) module.exports = e(t, require("desandro-classie"), require("wolfy87-eventemitter"), require("eventie"), require("get-size"), require("fizzy-ui-utils"), require("./cell"), require("./animate"));
        else {
            var i = t.Flickity;
            t.Flickity = e(t, t.classie, t.EventEmitter, t.eventie, t.getSize, t.fizzyUIUtils, i.Cell, i.animatePrototype)
        }
    }(window, function(t, e, i, n, r, s, o, a) {
        function l(t, e) {
            for (t = s.makeArray(t); t.length;) e.appendChild(t.shift())
        }

        function h(t, e) {
            var i = s.getQueryElement(t);
            return i ? (this.element = i, u && (this.$element = u(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(e), void this._create()) : void(c && c.error("Bad element for Flickity: " + (i || t)))
        }
        var u = t.jQuery,
            p = t.getComputedStyle,
            c = t.console,
            f = 0,
            d = {};
        h.defaults = {
            accessibility: !0,
            cellAlign: "center",
            freeScrollFriction: .075,
            friction: .28,
            percentPosition: !0,
            resize: !0,
            selectedAttraction: .025,
            setGallerySize: !0
        }, h.createMethods = [], s.extend(h.prototype, i.prototype), h.prototype._create = function() {
            var e = this.guid = ++f;
            this.element.flickityGUID = e, d[e] = this, this.selectedIndex = this.options.initialIndex || 0, this.restingFrames = 0, this.x = 0, this.velocity = 0, this.accel = 0, this.originSide = this.options.rightToLeft ? "right" : "left", this.viewport = document.createElement("div"), this.viewport.className = "flickity-viewport", h.setUnselectable(this.viewport), this._createSlider(), (this.options.resize || this.options.watchCSS) && (n.bind(t, "resize", this), this.isResizeBound = !0);
            for (var i = 0, r = h.createMethods.length; r > i; i++) {
                var s = h.createMethods[i];
                this[s]()
            }
            this.options.watchCSS ? this.watchCSS() : this.activate()
        }, h.prototype.option = function(t) {
            s.extend(this.options, t)
        }, h.prototype.activate = function() {
            if (!this.isActive) {
                this.isActive = !0, e.add(this.element, "flickity-enabled"), this.options.rightToLeft && e.add(this.element, "flickity-rtl"), this.getSize();
                var t = this._filterFindCellElements(this.element.children);
                l(t, this.slider), this.viewport.appendChild(this.slider), this.element.appendChild(this.viewport), this.reloadCells(), this.options.accessibility && (this.element.tabIndex = 0, n.bind(this.element, "keydown", this)), this.emit("activate"), this.positionSliderAtSelected(), this.select(this.selectedIndex)
            }
        }, h.prototype._createSlider = function() {
            var t = document.createElement("div");
            t.className = "flickity-slider", t.style[this.originSide] = 0, this.slider = t
        }, h.prototype._filterFindCellElements = function(t) {
            return s.filterFindElements(t, this.options.cellSelector)
        }, h.prototype.reloadCells = function() {
            this.cells = this._makeCells(this.slider.children), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize()
        }, h.prototype._makeCells = function(t) {
            for (var e = this._filterFindCellElements(t), i = [], n = 0, r = e.length; r > n; n++) {
                var s = e[n],
                    a = new o(s, this);
                i.push(a)
            }
            return i
        }, h.prototype.getLastCell = function() {
            return this.cells[this.cells.length - 1]
        }, h.prototype.positionCells = function() {
            this._sizeCells(this.cells), this._positionCells(0)
        }, h.prototype._positionCells = function(t) {
            t = t || 0, this.maxCellHeight = t ? this.maxCellHeight || 0 : 0;
            var e = 0;
            if (t > 0) {
                var i = this.cells[t - 1];
                e = i.x + i.size.outerWidth
            }
            for (var n, r = this.cells.length, s = t; r > s; s++) n = this.cells[s], n.setPosition(e), e += n.size.outerWidth, this.maxCellHeight = Math.max(n.size.outerHeight, this.maxCellHeight);
            this.slideableWidth = e, this._containCells()
        }, h.prototype._sizeCells = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                n.getSize()
            }
        }, h.prototype._init = h.prototype.reposition = function() {
            this.positionCells(), this.positionSliderAtSelected()
        }, h.prototype.getSize = function() {
            this.size = r(this.element), this.setCellAlign(), this.cursorPosition = this.size.innerWidth * this.cellAlign
        };
        var m = {
            center: {
                left: .5,
                right: .5
            },
            left: {
                left: 0,
                right: 1
            },
            right: {
                right: 0,
                left: 1
            }
        };
        h.prototype.setCellAlign = function() {
            var t = m[this.options.cellAlign];
            this.cellAlign = t ? t[this.originSide] : this.options.cellAlign
        }, h.prototype.setGallerySize = function() {
            this.options.setGallerySize && (this.viewport.style.height = this.maxCellHeight + "px")
        }, h.prototype._getWrapShiftCells = function() {
            if (this.options.wrapAround) {
                this._unshiftCells(this.beforeShiftCells), this._unshiftCells(this.afterShiftCells);
                var t = this.cursorPosition,
                    e = this.cells.length - 1;
                this.beforeShiftCells = this._getGapCells(t, e, -1), t = this.size.innerWidth - this.cursorPosition, this.afterShiftCells = this._getGapCells(t, 0, 1)
            }
        }, h.prototype._getGapCells = function(t, e, i) {
            for (var n = []; t > 0;) {
                var r = this.cells[e];
                if (!r) break;
                n.push(r), e += i, t -= r.size.outerWidth
            }
            return n
        }, h.prototype._containCells = function() {
            if (this.options.contain && !this.options.wrapAround && this.cells.length)
                for (var t = this.options.rightToLeft ? "marginRight" : "marginLeft", e = this.options.rightToLeft ? "marginLeft" : "marginRight", i = this.cells[0].size[t], n = this.getLastCell(), r = this.slideableWidth - n.size[e], s = r - this.size.innerWidth * (1 - this.cellAlign), o = r < this.size.innerWidth, a = 0, l = this.cells.length; l > a; a++) {
                    var h = this.cells[a];
                    h.setDefaultTarget(), o ? h.target = r * this.cellAlign : (h.target = Math.max(h.target, this.cursorPosition + i), h.target = Math.min(h.target, s))
                }
        }, h.prototype.dispatchEvent = function(t, e, i) {
            var n = [e].concat(i);
            if (this.emitEvent(t, n), u && this.$element)
                if (e) {
                    var r = u.Event(e);
                    r.type = t, this.$element.trigger(r, i)
                } else this.$element.trigger(t, i)
        }, h.prototype.select = function(t, e) {
            if (this.isActive) {
                var i = this.cells.length;
                this.options.wrapAround && i > 1 && (0 > t ? this.x -= this.slideableWidth : t >= i && (this.x += this.slideableWidth)), (this.options.wrapAround || e) && (t = s.modulo(t, i)), this.cells[t] && (this.selectedIndex = t, this.setSelectedCell(), this.startAnimation(), this.dispatchEvent("cellSelect"))
            }
        }, h.prototype.previous = function(t) {
            this.select(this.selectedIndex - 1, t)
        }, h.prototype.next = function(t) {
            this.select(this.selectedIndex + 1, t)
        }, h.prototype.setSelectedCell = function() {
            this._removeSelectedCellClass(), this.selectedCell = this.cells[this.selectedIndex], this.selectedElement = this.selectedCell.element, e.add(this.selectedElement, "is-selected")
        }, h.prototype._removeSelectedCellClass = function() {
            this.selectedCell && e.remove(this.selectedCell.element, "is-selected")
        }, h.prototype.getCell = function(t) {
            for (var e = 0, i = this.cells.length; i > e; e++) {
                var n = this.cells[e];
                if (n.element == t) return n
            }
        }, h.prototype.getCells = function(t) {
            t = s.makeArray(t);
            for (var e = [], i = 0, n = t.length; n > i; i++) {
                var r = t[i],
                    o = this.getCell(r);
                o && e.push(o)
            }
            return e
        }, h.prototype.getCellElements = function() {
            for (var t = [], e = 0, i = this.cells.length; i > e; e++) t.push(this.cells[e].element);
            return t
        }, h.prototype.getParentCell = function(t) {
            var e = this.getCell(t);
            return e ? e : (t = s.getParent(t, ".flickity-slider > *"), this.getCell(t))
        }, h.prototype.getAdjacentCellElements = function(t, e) {
            if (!t) return [this.selectedElement];
            e = void 0 === e ? this.selectedIndex : e;
            var i = this.cells.length;
            if (1 + 2 * t >= i) return this.getCellElements();
            for (var n = [], r = e - t; e + t >= r; r++) {
                var o = this.options.wrapAround ? s.modulo(r, i) : r,
                    a = this.cells[o];
                a && n.push(a.element)
            }
            return n
        }, h.prototype.uiChange = function() {
            this.emit("uiChange")
        }, h.prototype.childUIPointerDown = function(t) {
            this.emitEvent("childUIPointerDown", [t])
        }, h.prototype.onresize = function() {
            this.watchCSS(), this.resize()
        }, s.debounceMethod(h, "onresize", 150), h.prototype.resize = function() {
            this.isActive && (this.getSize(), this.options.wrapAround && (this.x = s.modulo(this.x, this.slideableWidth)), this.positionCells(), this._getWrapShiftCells(), this.setGallerySize(), this.positionSliderAtSelected())
        };
        var g = h.supportsConditionalCSS = function() {
            var t;
            return function() {
                if (void 0 !== t) return t;
                if (!p) return void(t = !1);
                var e = document.createElement("style"),
                    i = document.createTextNode('body:after { content: "foo"; display: none; }');
                e.appendChild(i), document.head.appendChild(e);
                var n = p(document.body, ":after").content;
                return t = -1 != n.indexOf("foo"), document.head.removeChild(e), t
            }
        }();
        h.prototype.watchCSS = function() {
            var t = this.options.watchCSS;
            if (t) {
                var e = g();
                if (!e) {
                    var i = "fallbackOn" == t ? "activate" : "deactivate";
                    return void this[i]()
                }
                var n = p(this.element, ":after").content; - 1 != n.indexOf("flickity") ? this.activate() : this.deactivate()
            }
        }, h.prototype.onkeydown = function(t) {
            if (this.options.accessibility && (!document.activeElement || document.activeElement == this.element))
                if (37 == t.keyCode) {
                    var e = this.options.rightToLeft ? "next" : "previous";
                    this.uiChange(), this[e]()
                } else if (39 == t.keyCode) {
                var i = this.options.rightToLeft ? "previous" : "next";
                this.uiChange(), this[i]()
            }
        }, h.prototype.deactivate = function() {
            if (this.isActive) {
                e.remove(this.element, "flickity-enabled"), e.remove(this.element, "flickity-rtl");
                for (var t = 0, i = this.cells.length; i > t; t++) {
                    var r = this.cells[t];
                    r.destroy()
                }
                this._removeSelectedCellClass(), this.element.removeChild(this.viewport), l(this.slider.children, this.element), this.options.accessibility && (this.element.removeAttribute("tabIndex"), n.unbind(this.element, "keydown", this)), this.isActive = !1, this.emit("deactivate")
            }
        }, h.prototype.destroy = function() {
            this.deactivate(), this.isResizeBound && n.unbind(t, "resize", this), this.emit("destroy"), u && this.$element && u.removeData(this.element, "flickity"), delete this.element.flickityGUID, delete d[this.guid]
        }, s.extend(h.prototype, a);
        var y = "attachEvent" in t;
        return h.setUnselectable = function(t) {
            y && t.setAttribute("unselectable", "on")
        }, h.data = function(t) {
            t = s.getQueryElement(t);
            var e = t && t.flickityGUID;
            return e && d[e]
        }, s.htmlInit(h, "flickity"), u && u.bridget && u.bridget("flickity", h), h.Cell = o, h
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("unipointer/unipointer", ["eventEmitter/EventEmitter", "eventie/eventie"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.Unipointer = e(t, t.EventEmitter, t.eventie)
    }(window, function(t, e, i) {
        function n() {}

        function r() {}
        r.prototype = new e, r.prototype.bindStartEvent = function(t) {
            this._bindStartEvent(t, !0)
        }, r.prototype.unbindStartEvent = function(t) {
            this._bindStartEvent(t, !1)
        }, r.prototype._bindStartEvent = function(e, n) {
            n = void 0 === n ? !0 : !!n;
            var r = n ? "bind" : "unbind";
            t.navigator.pointerEnabled ? i[r](e, "pointerdown", this) : t.navigator.msPointerEnabled ? i[r](e, "MSPointerDown", this) : (i[r](e, "mousedown", this), i[r](e, "touchstart", this))
        }, r.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, r.prototype.getTouch = function(t) {
            for (var e = 0, i = t.length; i > e; e++) {
                var n = t[e];
                if (n.identifier == this.pointerIdentifier) return n
            }
        }, r.prototype.onmousedown = function(t) {
            var e = t.button;
            e && 0 !== e && 1 !== e || this._pointerDown(t, t)
        }, r.prototype.ontouchstart = function(t) {
            this._pointerDown(t, t.changedTouches[0])
        }, r.prototype.onMSPointerDown = r.prototype.onpointerdown = function(t) {
            this._pointerDown(t, t)
        }, r.prototype._pointerDown = function(t, e) {
            this.isPointerDown || (this.isPointerDown = !0, this.pointerIdentifier = void 0 !== e.pointerId ? e.pointerId : e.identifier, this.pointerDown(t, e))
        }, r.prototype.pointerDown = function(t, e) {
            this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e])
        };
        var s = {
            mousedown: ["mousemove", "mouseup"],
            touchstart: ["touchmove", "touchend", "touchcancel"],
            pointerdown: ["pointermove", "pointerup", "pointercancel"],
            MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"]
        };
        return r.prototype._bindPostStartEvents = function(e) {
            if (e) {
                for (var n = s[e.type], r = e.preventDefault ? t : document, o = 0, a = n.length; a > o; o++) {
                    var l = n[o];
                    i.bind(r, l, this)
                }
                this._boundPointerEvents = {
                    events: n,
                    node: r
                }
            }
        }, r.prototype._unbindPostStartEvents = function() {
            var t = this._boundPointerEvents;
            if (t && t.events) {
                for (var e = 0, n = t.events.length; n > e; e++) {
                    var r = t.events[e];
                    i.unbind(t.node, r, this)
                }
                delete this._boundPointerEvents
            }
        }, r.prototype.onmousemove = function(t) {
            this._pointerMove(t, t)
        }, r.prototype.onMSPointerMove = r.prototype.onpointermove = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerMove(t, t)
        }, r.prototype.ontouchmove = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerMove(t, e)
        }, r.prototype._pointerMove = function(t, e) {
            this.pointerMove(t, e);

        }, r.prototype.pointerMove = function(t, e) {
            this.emitEvent("pointerMove", [t, e])
        }, r.prototype.onmouseup = function(t) {
            this._pointerUp(t, t)
        }, r.prototype.onMSPointerUp = r.prototype.onpointerup = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerUp(t, t)
        }, r.prototype.ontouchend = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerUp(t, e)
        }, r.prototype._pointerUp = function(t, e) {
            this._pointerDone(), this.pointerUp(t, e)
        }, r.prototype.pointerUp = function(t, e) {
            this.emitEvent("pointerUp", [t, e])
        }, r.prototype._pointerDone = function() {
            this.isPointerDown = !1, delete this.pointerIdentifier, this._unbindPostStartEvents(), this.pointerDone()
        }, r.prototype.pointerDone = n, r.prototype.onMSPointerCancel = r.prototype.onpointercancel = function(t) {
            t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t)
        }, r.prototype.ontouchcancel = function(t) {
            var e = this.getTouch(t.changedTouches);
            e && this._pointerCancel(t, e)
        }, r.prototype._pointerCancel = function(t, e) {
            this._pointerDone(), this.pointerCancel(t, e)
        }, r.prototype.pointerCancel = function(t, e) {
            this.emitEvent("pointerCancel", [t, e])
        }, r.getPointerPoint = function(t) {
            return {
                x: void 0 !== t.pageX ? t.pageX : t.clientX,
                y: void 0 !== t.pageY ? t.pageY : t.clientY
            }
        }, r
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("unidragger/unidragger", ["eventie/eventie", "unipointer/unipointer"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("unipointer")) : t.Unidragger = e(t, t.eventie, t.Unipointer)
    }(window, function(t, e, i) {
        function n() {}

        function r(t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }

        function s() {}

        function o() {
            return !1
        }
        s.prototype = new i, s.prototype.bindHandles = function() {
            this._bindHandles(!0)
        }, s.prototype.unbindHandles = function() {
            this._bindHandles(!1)
        };
        var a = t.navigator;
        s.prototype._bindHandles = function(t) {
            t = void 0 === t ? !0 : !!t;
            var i;
            i = a.pointerEnabled ? function(e) {
                e.style.touchAction = t ? "none" : ""
            } : a.msPointerEnabled ? function(e) {
                e.style.msTouchAction = t ? "none" : ""
            } : function() {
                t && h(o)
            };
            for (var n = t ? "bind" : "unbind", r = 0, s = this.handles.length; s > r; r++) {
                var o = this.handles[r];
                this._bindStartEvent(o, t), i(o), e[n](o, "click", this)
            }
        };
        var l = "attachEvent" in document.documentElement,
            h = l ? function(t) {
                "IMG" == t.nodeName && (t.ondragstart = o);
                for (var e = t.querySelectorAll("img"), i = 0, n = e.length; n > i; i++) {
                    var r = e[i];
                    r.ondragstart = o
                }
            } : n;
        s.prototype.pointerDown = function(i, n) {
            if ("INPUT" == i.target.nodeName && "range" == i.target.type) return this.isPointerDown = !1, void delete this.pointerIdentifier;
            this._dragPointerDown(i, n);
            var r = document.activeElement;
            r && r.blur && r.blur(), this._bindPostStartEvents(i), this.pointerDownScroll = s.getScrollPosition(), e.bind(t, "scroll", this), this.emitEvent("pointerDown", [i, n])
        }, s.prototype._dragPointerDown = function(t, e) {
            this.pointerDownPoint = i.getPointerPoint(e);
            var n = "touchstart" == t.type,
                s = t.target.nodeName;
            n || "SELECT" == s || r(t)
        }, s.prototype.pointerMove = function(t, e) {
            var i = this._dragPointerMove(t, e);
            this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i)
        }, s.prototype._dragPointerMove = function(t, e) {
            var n = i.getPointerPoint(e),
                r = {
                    x: n.x - this.pointerDownPoint.x,
                    y: n.y - this.pointerDownPoint.y
                };
            return !this.isDragging && this.hasDragStarted(r) && this._dragStart(t, e), r
        }, s.prototype.hasDragStarted = function(t) {
            return Math.abs(t.x) > 3 || Math.abs(t.y) > 3
        }, s.prototype.pointerUp = function(t, e) {
            this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e)
        }, s.prototype._dragPointerUp = function(t, e) {
            this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e)
        }, i.prototype.pointerDone = function() {
            e.unbind(t, "scroll", this)
        }, s.prototype._dragStart = function(t, e) {
            this.isDragging = !0, this.dragStartPoint = s.getPointerPoint(e), this.isPreventingClicks = !0, this.dragStart(t, e)
        }, s.prototype.dragStart = function(t, e) {
            this.emitEvent("dragStart", [t, e])
        }, s.prototype._dragMove = function(t, e, i) {
            this.isDragging && this.dragMove(t, e, i)
        }, s.prototype.dragMove = function(t, e, i) {
            r(t), this.emitEvent("dragMove", [t, e, i])
        }, s.prototype._dragEnd = function(t, e) {
            this.isDragging = !1;
            var i = this;
            setTimeout(function() {
                delete i.isPreventingClicks
            }), this.dragEnd(t, e)
        }, s.prototype.dragEnd = function(t, e) {
            this.emitEvent("dragEnd", [t, e])
        }, s.prototype.pointerDone = function() {
            e.unbind(t, "scroll", this), delete this.pointerDownScroll
        }, s.prototype.onclick = function(t) {
            this.isPreventingClicks && r(t)
        }, s.prototype._staticClick = function(t, e) {
            if (!this.isIgnoringMouseUp || "mouseup" != t.type) {
                var i = t.target.nodeName;
                if (("INPUT" == i || "TEXTAREA" == i) && t.target.focus(), this.staticClick(t, e), "mouseup" != t.type) {
                    this.isIgnoringMouseUp = !0;
                    var n = this;
                    setTimeout(function() {
                        delete n.isIgnoringMouseUp
                    }, 400)
                }
            }
        }, s.prototype.staticClick = function(t, e) {
            this.emitEvent("staticClick", [t, e])
        }, s.prototype.onscroll = function() {
            var t = s.getScrollPosition(),
                e = this.pointerDownScroll.x - t.x,
                i = this.pointerDownScroll.y - t.y;
            (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone()
        }, s.getPointerPoint = function(t) {
            return {
                x: void 0 !== t.pageX ? t.pageX : t.clientX,
                y: void 0 !== t.pageY ? t.pageY : t.clientY
            }
        };
        var u = void 0 !== t.pageYOffset;
        return s.getScrollPosition = function() {
            return {
                x: u ? t.pageXOffset : document.body.scrollLeft,
                y: u ? t.pageYOffset : document.body.scrollTop
            }
        }, s.getPointerPoint = i.getPointerPoint, s
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/drag", ["classie/classie", "eventie/eventie", "./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"], function(i, n, r, s, o) {
            return e(t, i, n, r, s, o)
        }) : "object" == typeof exports ? module.exports = e(t, require("desandro-classie"), require("eventie"), require("./flickity"), require("unidragger"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.classie, t.eventie, t.Flickity, t.Unidragger, t.fizzyUIUtils)
    }(window, function(t, e, i, n, r, s) {
        function o(t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }

        function a(e) {
            var i = r.getPointerPoint(e);
            return i.y - t.pageYOffset
        }
        s.extend(n.defaults, {
            draggable: !0,
            touchVerticalScroll: !0
        }), n.createMethods.push("_createDrag"), s.extend(n.prototype, r.prototype), n.prototype._createDrag = function() {
            this.on("activate", this.bindDrag), this.on("uiChange", this._uiChangeDrag), this.on("childUIPointerDown", this._childUIPointerDownDrag), this.on("deactivate", this.unbindDrag)
        }, n.prototype.bindDrag = function() {
            this.options.draggable && !this.isDragBound && (e.add(this.element, "is-draggable"), this.handles = [this.viewport], this.bindHandles(), this.isDragBound = !0)
        }, n.prototype.unbindDrag = function() {
            this.isDragBound && (e.remove(this.element, "is-draggable"), this.unbindHandles(), delete this.isDragBound)
        }, n.prototype._uiChangeDrag = function() {
            delete this.isFreeScrolling
        }, n.prototype._childUIPointerDownDrag = function(t) {
            o(t), this.pointerDownFocus(t)
        }, n.prototype.pointerDown = function(n, s) {
            if ("INPUT" == n.target.nodeName && "range" == n.target.type) return this.isPointerDown = !1, void delete this.pointerIdentifier;
            this._dragPointerDown(n, s);
            var o = document.activeElement;
            o && o.blur && o != this.element && o != document.body && o.blur(), this.pointerDownFocus(n), this.dragX = this.x, e.add(this.viewport, "is-pointer-down"), this._bindPostStartEvents(n), this.pointerDownScroll = r.getScrollPosition(), i.bind(t, "scroll", this), this.dispatchEvent("pointerDown", n, [s])
        };
        var l = {
                touchstart: !0,
                MSPointerDown: !0
            },
            h = {
                INPUT: !0,
                SELECT: !0
            };
        n.prototype.pointerDownFocus = function(t) {
            !this.options.accessibility || l[t.type] || h[t.target.nodeName] || this.element.focus()
        }, n.prototype.pointerMove = function(t, e) {
            var i = this._dragPointerMove(t, e);
            this.touchVerticalScrollMove(t, e, i), this._dragMove(t, e, i), this.dispatchEvent("pointerMove", t, [e, i])
        }, n.prototype.hasDragStarted = function(t) {
            return !this.isTouchScrolling && Math.abs(t.x) > 3
        }, n.prototype.pointerUp = function(t, i) {
            delete this.isTouchScrolling, e.remove(this.viewport, "is-pointer-down"), this.dispatchEvent("pointerUp", t, [i]), this._dragPointerUp(t, i)
        };
        var u = {
            touchmove: !0,
            MSPointerMove: !0
        };
        return n.prototype.touchVerticalScrollMove = function(e, i, n) {
            var r = this.options.touchVerticalScroll,
                s = "withDrag" == r ? !r : this.isDragging || !r;
            !s && u[e.type] && !this.isTouchScrolling && Math.abs(n.y) > 10 && (this.startScrollY = t.pageYOffset, this.pointerWindowStartY = a(i), this.isTouchScrolling = !0)
        }, n.prototype.dragStart = function(t, e) {
            this.dragStartPosition = this.x, this.startAnimation(), this.dispatchEvent("dragStart", t, [e])
        }, n.prototype.dragMove = function(t, e, i) {
            o(t), this.previousDragX = this.dragX;
            var n = this.options.rightToLeft ? -1 : 1,
                r = this.dragStartPosition + i.x * n;
            if (!this.options.wrapAround && this.cells.length) {
                var s = Math.max(-this.cells[0].target, this.dragStartPosition);
                r = r > s ? .5 * (r + s) : r;
                var a = Math.min(-this.getLastCell().target, this.dragStartPosition);
                r = a > r ? .5 * (r + a) : r
            }
            this.dragX = r, this.dragMoveTime = new Date, this.dispatchEvent("dragMove", t, [e, i])
        }, n.prototype.dragEnd = function(t, e) {
            this.options.freeScroll && (this.isFreeScrolling = !0);
            var i = this.dragEndRestingSelect();
            if (this.options.freeScroll && !this.options.wrapAround) {
                var n = this.getRestingPosition();
                this.isFreeScrolling = -n > this.cells[0].target && -n < this.getLastCell().target
            } else this.options.freeScroll || i != this.selectedIndex || (i += this.dragEndBoostSelect());
            delete this.previousDragX, this.select(i), this.dispatchEvent("dragEnd", t, [e])
        }, n.prototype.dragEndRestingSelect = function() {
            var t = this.getRestingPosition(),
                e = Math.abs(this.getCellDistance(-t, this.selectedIndex)),
                i = this._getClosestResting(t, e, 1),
                n = this._getClosestResting(t, e, -1),
                r = i.distance < n.distance ? i.index : n.index;
            return r
        }, n.prototype._getClosestResting = function(t, e, i) {
            for (var n = this.selectedIndex, r = 1 / 0, s = this.options.contain && !this.options.wrapAround ? function(t, e) {
                    return e >= t
                } : function(t, e) {
                    return e > t
                }; s(e, r) && (n += i, r = e, e = this.getCellDistance(-t, n), null !== e);) e = Math.abs(e);
            return {
                distance: r,
                index: n - i
            }
        }, n.prototype.getCellDistance = function(t, e) {
            var i = this.cells.length,
                n = this.options.wrapAround && i > 1,
                r = n ? s.modulo(e, i) : e,
                o = this.cells[r];
            if (!o) return null;
            var a = n ? this.slideableWidth * Math.floor(e / i) : 0;
            return t - (o.target + a)
        }, n.prototype.dragEndBoostSelect = function() {
            if (void 0 === this.previousDragX || !this.dragMoveTime || new Date - this.dragMoveTime > 100) return 0;
            var t = this.getCellDistance(-this.dragX, this.selectedIndex),
                e = this.previousDragX - this.dragX;
            return t > 0 && e > 0 ? 1 : 0 > t && 0 > e ? -1 : 0
        }, n.prototype.staticClick = function(t, e) {
            var i = this.getParentCell(t.target),
                n = i && i.element,
                r = i && s.indexOf(this.cells, i);
            this.dispatchEvent("staticClick", t, [e, n, r])
        }, n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("tap-listener/tap-listener", ["unipointer/unipointer"], function(i) {
            return e(t, i)
        }) : "object" == typeof exports ? module.exports = e(t, require("unipointer")) : t.TapListener = e(t, t.Unipointer)
    }(window, function(t, e) {
        function i(t) {
            t.preventDefault ? t.preventDefault() : t.returnValue = !1
        }

        function n(t) {
            this.bindTap(t)
        }
        n.prototype = new e, n.prototype.bindTap = function(t) {
            t && (this.unbindTap(), this.tapElement = t, this._bindStartEvent(t, !0))
        }, n.prototype.unbindTap = function() {
            this.tapElement && (this._bindStartEvent(this.tapElement, !0), delete this.tapElement)
        };
        var r = n.prototype.pointerDown;
        n.prototype.pointerDown = function(t) {
            "touchstart" == t.type && i(t), r.apply(this, arguments)
        };
        var s = void 0 !== t.pageYOffset;
        return n.prototype.pointerUp = function(i, n) {
            var r = e.getPointerPoint(n),
                o = this.tapElement.getBoundingClientRect(),
                a = s ? t.pageXOffset : document.body.scrollLeft,
                l = s ? t.pageYOffset : document.body.scrollTop,
                h = r.x >= o.left + a && r.x <= o.right + a && r.y >= o.top + l && r.y <= o.bottom + l;
            h && this.emitEvent("tap", [i, n])
        }, n.prototype.destroy = function() {
            this.pointerDone(), this.unbindTap()
        }, n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/prev-next-button", ["eventie/eventie", "./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, r, s) {
            return e(t, i, n, r, s)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.eventie, t.Flickity, t.TapListener, t.fizzyUIUtils)
    }(window, function(t, e, i, n, r) {
        function s(t, e) {
            this.direction = t, this.parent = e, this._create()
        }

        function o(t) {
            return "string" == typeof t ? t : "M " + t.x0 + ",50 L " + t.x1 + "," + (t.y1 + 50) + " L " + t.x2 + "," + (t.y2 + 50) + " L " + t.x3 + ",50  L " + t.x2 + "," + (50 - t.y2) + " L " + t.x1 + "," + (50 - t.y1) + " Z"
        }
        var a = "http://www.w3.org/2000/svg",
            l = function() {
                function t() {
                    if (void 0 !== e) return e;
                    var t = document.createElement("div");
                    return t.innerHTML = "<svg/>", e = (t.firstChild && t.firstChild.namespaceURI) == a
                }
                var e;
                return t
            }();
        return s.prototype = new n, s.prototype._create = function() {
            this.isEnabled = !0, this.isPrevious = -1 == this.direction;
            var t = this.parent.options.rightToLeft ? 1 : -1;
            this.isLeft = this.direction == t;
            var e = this.element = document.createElement("button");
            if (e.className = "flickity-prev-next-button", e.className += this.isPrevious ? " previous" : " next", e.setAttribute("type", "button"), i.setUnselectable(e), l()) {
                var n = this.createSVG();
                e.appendChild(n)
            } else this.setArrowText(), e.className += " no-svg";
            var r = this;
            this.onCellSelect = function() {
                r.update()
            }, this.parent.on("cellSelect", this.onCellSelect), this.on("tap", this.onTap), this.on("pointerDown", function(t, e) {
                r.parent.childUIPointerDown(e)
            })
        }, s.prototype.activate = function() {
            this.update(), this.bindTap(this.element), e.bind(this.element, "click", this), this.parent.element.appendChild(this.element)
        }, s.prototype.deactivate = function() {
            this.parent.element.removeChild(this.element), n.prototype.destroy.call(this), e.unbind(this.element, "click", this)
        }, s.prototype.createSVG = function() {
            var t = document.createElementNS(a, "svg");
            t.setAttribute("viewBox", "0 0 100 100");
            var e = document.createElementNS(a, "path"),
                i = o(this.parent.options.arrowShape);
            return e.setAttribute("d", i), e.setAttribute("class", "arrow"), this.isLeft || e.setAttribute("transform", "translate(100, 100) rotate(180) "), t.appendChild(e), t
        }, s.prototype.setArrowText = function() {
            var t = this.parent.options,
                e = this.isLeft ? t.leftArrowText : t.rightArrowText;
            r.setText(this.element, e)
        }, s.prototype.onTap = function() {
            if (this.isEnabled) {
                this.parent.uiChange();
                var t = this.isPrevious ? "previous" : "next";
                this.parent[t]()
            }
        }, s.prototype.handleEvent = r.handleEvent, s.prototype.onclick = function() {
            var t = document.activeElement;
            t && t == this.element && this.onTap()
        }, s.prototype.enable = function() {
            this.isEnabled || (this.element.disabled = !1, this.isEnabled = !0)
        }, s.prototype.disable = function() {
            this.isEnabled && (this.element.disabled = !0, this.isEnabled = !1)
        }, s.prototype.update = function() {
            var t = this.parent.cells;
            if (this.parent.options.wrapAround && t.length > 1) return void this.enable();
            var e = t.length ? t.length - 1 : 0,
                i = this.isPrevious ? 0 : e,
                n = this.parent.selectedIndex == i ? "disable" : "enable";
            this[n]()
        }, s.prototype.destroy = function() {
            this.deactivate()
        }, r.extend(i.defaults, {
            prevNextButtons: !0,
            leftArrowText: "‹",
            rightArrowText: "›",
            arrowShape: {
                x0: 10,
                x1: 60,
                y1: 50,
                x2: 70,
                y2: 40,
                x3: 30
            }
        }), i.createMethods.push("_createPrevNextButtons"), i.prototype._createPrevNextButtons = function() {
            this.options.prevNextButtons && (this.prevButton = new s(-1, this), this.nextButton = new s(1, this), this.on("activate", this.activatePrevNextButtons))
        }, i.prototype.activatePrevNextButtons = function() {
            this.prevButton.activate(), this.nextButton.activate(), this.on("deactivate", this.deactivatePrevNextButtons)
        }, i.prototype.deactivatePrevNextButtons = function() {
            this.prevButton.deactivate(), this.nextButton.deactivate(), this.off("deactivate", this.deactivatePrevNextButtons)
        }, i.PrevNextButton = s, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/page-dots", ["eventie/eventie", "./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"], function(i, n, r, s) {
            return e(t, i, n, r, s)
        }) : "object" == typeof exports ? module.exports = e(t, require("eventie"), require("./flickity"), require("tap-listener"), require("fizzy-ui-utils")) : e(t, t.eventie, t.Flickity, t.TapListener, t.fizzyUIUtils)
    }(window, function(t, e, i, n, r) {
        function s(t) {
            this.parent = t, this._create()
        }
        return s.prototype = new n, s.prototype._create = function() {
            this.holder = document.createElement("ol"), this.holder.className = "flickity-page-dots", i.setUnselectable(this.holder), this.dots = [];
            var t = this;
            this.onCellSelect = function() {
                t.updateSelected()
            }, this.parent.on("cellSelect", this.onCellSelect), this.on("tap", this.onTap), this.on("pointerDown", function(e, i) {
                t.parent.childUIPointerDown(i)
            })
        }, s.prototype.activate = function() {
            this.setDots(), this.updateSelected(), this.bindTap(this.holder), this.parent.element.appendChild(this.holder)
        }, s.prototype.deactivate = function() {
            this.parent.element.removeChild(this.holder), n.prototype.destroy.call(this)
        }, s.prototype.setDots = function() {
            var t = this.parent.cells.length - this.dots.length;
            t > 0 ? this.addDots(t) : 0 > t && this.removeDots(-t)
        }, s.prototype.addDots = function(t) {
            for (var e = document.createDocumentFragment(), i = []; t;) {
                var n = document.createElement("li");
                n.className = "dot", e.appendChild(n), i.push(n), t--
            }
            this.holder.appendChild(e), this.dots = this.dots.concat(i)
        }, s.prototype.removeDots = function(t) {
            for (var e = this.dots.splice(this.dots.length - t, t), i = 0, n = e.length; n > i; i++) {
                var r = e[i];
                this.holder.removeChild(r)
            }
        }, s.prototype.updateSelected = function() {
            this.selectedDot && (this.selectedDot.className = "dot"), this.dots.length && (this.selectedDot = this.dots[this.parent.selectedIndex], this.selectedDot.className = "dot is-selected")
        }, s.prototype.onTap = function(t) {
            var e = t.target;
            if ("LI" == e.nodeName) {
                this.parent.uiChange();
                var i = r.indexOf(this.dots, e);
                this.parent.select(i)
            }
        }, s.prototype.destroy = function() {
            this.deactivate()
        }, i.PageDots = s, r.extend(i.defaults, {
            pageDots: !0
        }), i.createMethods.push("_createPageDots"), i.prototype._createPageDots = function() {
            this.options.pageDots && (this.pageDots = new s(this), this.on("activate", this.activatePageDots), this.on("cellAddedRemoved", this.onCellAddedRemovedPageDots), this.on("deactivate", this.deactivatePageDots))
        }, i.prototype.activatePageDots = function() {
            this.pageDots.activate()
        }, i.prototype.onCellAddedRemovedPageDots = function() {
            this.pageDots.setDots()
        }, i.prototype.deactivatePageDots = function() {
            this.pageDots.deactivate()
        }, i.PageDots = s, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/player", ["eventEmitter/EventEmitter", "eventie/eventie", "./flickity"], function(t, i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(require("wolfy87-eventemitter"), require("eventie"), require("./flickity")) : e(t.EventEmitter, t.eventie, t.Flickity)
    }(window, function(t, e, i) {
        function n(t) {
            if (this.isPlaying = !1, this.parent = t, s) {
                var e = this;
                this.onVisibilityChange = function() {
                    e.visibilityChange()
                }
            }
        }
        var r, s;
        return "hidden" in document ? (r = "hidden", s = "visibilitychange") : "webkitHidden" in document && (r = "webkitHidden", s = "webkitvisibilitychange"), n.prototype = new t, n.prototype.play = function() {
            this.isPlaying = !0, delete this.isPaused, s && document.addEventListener(s, this.onVisibilityChange, !1), this.tick()
        }, n.prototype.tick = function() {
            if (this.isPlaying && !this.isPaused) {
                this.tickTime = new Date;
                var t = this.parent.options.autoPlay;
                t = "number" == typeof t ? t : 3e3;
                var e = this;
                this.timeout = setTimeout(function() {
                    e.parent.next(!0), e.tick()
                }, t)
            }
        }, n.prototype.stop = function() {
            this.isPlaying = !1, delete this.isPaused, this.clear(), s && document.removeEventListener(s, this.onVisibilityChange, !1)
        }, n.prototype.clear = function() {
            clearTimeout(this.timeout)
        }, n.prototype.pause = function() {
            this.isPlaying && (this.isPaused = !0, this.clear())
        }, n.prototype.unpause = function() {
            this.isPaused && this.play()
        }, n.prototype.visibilityChange = function() {
            var t = document[r];
            this[t ? "pause" : "unpause"]()
        }, i.createMethods.push("_createPlayer"), i.prototype._createPlayer = function() {
            this.player = new n(this), this.on("activate", this.activatePlayer), this.on("uiChange", this.stopPlayer), this.on("pointerDown", this.stopPlayer), this.on("deactivate", this.deactivatePlayer)
        }, i.prototype.activatePlayer = function() {
            this.options.autoPlay && (this.player.play(), e.bind(this.element, "mouseenter", this), this.isMouseenterBound = !0)
        }, i.prototype.stopPlayer = function() {
            this.player.stop()
        }, i.prototype.deactivatePlayer = function() {
            this.player.stop(), this.isMouseenterBound && (e.unbind(this.element, "mouseenter", this), delete this.isMouseenterBound)
        }, i.prototype.onmouseenter = function() {
            this.player.pause(), e.bind(this.element, "mouseleave", this)
        }, i.prototype.onmouseleave = function() {
            this.player.unpause(), e.unbind(this.element, "mouseleave", this)
        }, i.Player = n, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/add-remove-cell", ["./flickity", "fizzy-ui-utils/utils"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("./flickity"), require("fizzy-ui-utils")) : e(t, t.Flickity, t.fizzyUIUtils)
    }(window, function(t, e, i) {
        function n(t) {
            for (var e = document.createDocumentFragment(), i = 0, n = t.length; n > i; i++) {
                var r = t[i];
                e.appendChild(r.element)
            }
            return e
        }
        return e.prototype.insert = function(t, e) {
            var i = this._makeCells(t);
            if (i && i.length) {
                var r = this.cells.length;
                e = void 0 === e ? r : e;
                var s = n(i),
                    o = e == r;
                if (o) this.slider.appendChild(s);
                else {
                    var a = this.cells[e].element;
                    this.slider.insertBefore(s, a)
                }
                if (0 === e) this.cells = i.concat(this.cells);
                else if (o) this.cells = this.cells.concat(i);
                else {
                    var l = this.cells.splice(e, r - e);
                    this.cells = this.cells.concat(i).concat(l)
                }
                this._sizeCells(i);
                var h = e > this.selectedIndex ? 0 : i.length;
                this._cellAddedRemoved(e, h)
            }
        }, e.prototype.append = function(t) {
            this.insert(t, this.cells.length)
        }, e.prototype.prepend = function(t) {
            this.insert(t, 0)
        }, e.prototype.remove = function(t) {
            var e, n, r, s = this.getCells(t),
                o = 0;
            for (e = 0, n = s.length; n > e; e++) {
                r = s[e];
                var a = i.indexOf(this.cells, r) < this.selectedIndex;
                o -= a ? 1 : 0
            }
            for (e = 0, n = s.length; n > e; e++) r = s[e], r.remove(), i.removeFrom(this.cells, r);
            s.length && this._cellAddedRemoved(0, o)
        }, e.prototype._cellAddedRemoved = function(t, e) {
            e = e || 0, this.selectedIndex += e, this.selectedIndex = Math.max(0, Math.min(this.cells.length - 1, this.selectedIndex)), this.emitEvent("cellAddedRemoved", [t, e]), this.cellChange(t, !0)
        }, e.prototype.cellSizeChange = function(t) {
            var e = this.getCell(t);
            if (e) {
                e.getSize();
                var n = i.indexOf(this.cells, e);
                this.cellChange(n)
            }
        }, e.prototype.cellChange = function(t, e) {
            var i = this.slideableWidth;
            this._positionCells(t), this._getWrapShiftCells(), this.setGallerySize(), this.options.freeScroll ? (this.x += i - this.slideableWidth, this.positionSlider()) : (e && this.positionSliderAtSelected(), this.select(this.selectedIndex))
        }, e
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/lazyload", ["classie/classie", "eventie/eventie", "./flickity", "fizzy-ui-utils/utils"], function(i, n, r, s) {
            return e(t, i, n, r, s)
        }) : "object" == typeof exports ? module.exports = e(t, require("desandro-classie"), require("eventie"), require("./flickity"), require("fizzy-ui-utils")) : e(t, t.classie, t.eventie, t.Flickity, t.fizzyUIUtils)
    }(window, function(t, e, i, n, r) {
        function s(t) {
            if ("IMG" == t.nodeName && t.getAttribute("data-flickity-lazyload")) return [t];
            var e = t.querySelectorAll("img[data-flickity-lazyload]");
            return r.makeArray(e)
        }

        function o(t, e) {
            this.img = t, this.flickity = e, this.load()
        }
        return n.createMethods.push("_createLazyload"), n.prototype._createLazyload = function() {
            this.on("cellSelect", this.lazyLoad)
        }, n.prototype.lazyLoad = function() {
            var t = this.options.lazyLoad;
            if (t) {
                for (var e = "number" == typeof t ? t : 0, i = this.getAdjacentCellElements(e), n = [], r = 0, a = i.length; a > r; r++) {
                    var l = i[r],
                        h = s(l);
                    n = n.concat(h)
                }
                for (r = 0, a = n.length; a > r; r++) {
                    var u = n[r];
                    new o(u, this)
                }
            }
        }, o.prototype.handleEvent = r.handleEvent, o.prototype.load = function() {
            i.bind(this.img, "load", this), i.bind(this.img, "error", this), this.img.src = this.img.getAttribute("data-flickity-lazyload"), this.img.removeAttribute("data-flickity-lazyload")
        }, o.prototype.onload = function(t) {
            this.complete(t, "flickity-lazyloaded")
        }, o.prototype.onerror = function() {
            this.complete(event, "flickity-lazyerror")
        }, o.prototype.complete = function(t, n) {
            i.unbind(this.img, "load", this), i.unbind(this.img, "error", this);
            var r = this.flickity.getParentCell(this.img),
                s = r && r.element;
            this.flickity.cellSizeChange(s), e.add(this.img, n), this.flickity.dispatchEvent("lazyLoad", t, s)
        }, n.LazyLoader = o, n
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity/js/index", ["./flickity", "./drag", "./prev-next-button", "./page-dots", "./player", "./add-remove-cell", "./lazyload"], e) : "object" == typeof exports && (module.exports = e(require("./flickity"), require("./drag"), require("./prev-next-button"), require("./page-dots"), require("./player"), require("./add-remove-cell"), require("./lazyload")))
    }(window, function(t) {
        return t
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("flickity-as-nav-for/as-nav-for", ["classie/classie", "flickity/js/index", "fizzy-ui-utils/utils"], function(i, n, r) {
            return e(t, i, n, r)
        }) : "object" == typeof exports ? module.exports = e(t, require("desandro-classie"), require("flickity"), require("fizzy-ui-utils")) : t.Flickity = e(t, t.classie, t.Flickity, t.fizzyUIUtils)
    }(window, function(t, e, i, n) {
        return i.createMethods.push("_createAsNavFor"), i.prototype._createAsNavFor = function() {
            this.on("activate", this.activateAsNavFor), this.on("deactivate", this.deactivateAsNavFor), this.on("destroy", this.destroyAsNavFor);
            var t = this.options.asNavFor;
            if (t) {
                var e = this;
                setTimeout(function() {
                    e.setNavCompanion(t)
                })
            }
        }, i.prototype.setNavCompanion = function(t) {
            t = n.getQueryElement(t);
            var e = i.data(t);
            if (e && e != this) {
                this.navCompanion = e;
                var r = this;
                this.onNavCompanionSelect = function() {
                    r.navCompanionSelect()
                }, e.on("cellSelect", this.onNavCompanionSelect), this.on("staticClick", this.onNavStaticClick), this.navCompanionSelect()
            }
        }, i.prototype.navCompanionSelect = function() {
            if (this.navCompanion) {
                var t = this.navCompanion.selectedIndex;
                this.select(t), this.removeNavSelectedElement(), this.selectedIndex == t && (this.navSelectedElement = this.cells[t].element, e.add(this.navSelectedElement, "is-nav-selected"))
            }
        }, i.prototype.activateAsNavFor = function() {
            this.navCompanionSelect()
        }, i.prototype.removeNavSelectedElement = function() {
            this.navSelectedElement && (e.remove(this.navSelectedElement, "is-nav-selected"), delete this.navSelectedElement)
        }, i.prototype.onNavStaticClick = function(t, e, i, n) {
            "number" == typeof n && this.navCompanion.select(n)
        }, i.prototype.deactivateAsNavFor = function() {
            this.removeNavSelectedElement()
        }, i.prototype.destroyAsNavFor = function() {
            this.navCompanion && (this.navCompanion.off("cellSelect", this.onNavCompanionSelect), this.off("staticClick", this.onNavStaticClick), delete this.navCompanion)
        }, i
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["eventEmitter/EventEmitter", "eventie/eventie"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
    }(window, function(t, e, i) {
        function n(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function r(t) {
            return "[object Array]" === c.call(t)
        }

        function s(t) {
            var e = [];
            if (r(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function o(t, e, i) {
            if (!(this instanceof o)) return new o(t, e);
            "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = s(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), h && (this.jqDeferred = new h.Deferred);
            var r = this;
            setTimeout(function() {
                r.check()
            })
        }

        function a(t) {
            this.img = t
        }

        function l(t) {
            this.src = t, f[t] = this
        }
        var h = t.jQuery,
            u = t.console,
            p = "undefined" != typeof u,
            c = Object.prototype.toString;
        o.prototype = new e, o.prototype.options = {}, o.prototype.getImages = function() {
            this.images = [];
            for (var t = 0, e = this.elements.length; e > t; t++) {
                var i = this.elements[t];
                "IMG" === i.nodeName && this.addImage(i);
                var n = i.nodeType;
                if (n && (1 === n || 9 === n || 11 === n))
                    for (var r = i.querySelectorAll("img"), s = 0, o = r.length; o > s; s++) {
                        var a = r[s];
                        this.addImage(a)
                    }
            }
        }, o.prototype.addImage = function(t) {
            var e = new a(t);
            this.images.push(e)
        }, o.prototype.check = function() {
            function t(t, r) {
                return e.options.debug && p && u.log("confirm", t, r), e.progress(t), i++, i === n && e.complete(), !0
            }
            var e = this,
                i = 0,
                n = this.images.length;
            if (this.hasAnyBroken = !1, !n) return void this.complete();
            for (var r = 0; n > r; r++) {
                var s = this.images[r];
                s.on("confirm", t), s.check()
            }
        }, o.prototype.progress = function(t) {
            this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
            var e = this;
            setTimeout(function() {
                e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
            })
        }, o.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var e = this;
            setTimeout(function() {
                if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                    var i = e.hasAnyBroken ? "reject" : "resolve";
                    e.jqDeferred[i](e)
                }
            })
        }, h && (h.fn.imagesLoaded = function(t, e) {
            var i = new o(this, t, e);
            return i.jqDeferred.promise(h(this))
        }), a.prototype = new e, a.prototype.check = function() {
            var t = f[this.img.src] || new l(this.img.src);
            if (t.isConfirmed) return void this.confirm(t.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var e = this;
            t.on("confirm", function(t, i) {
                return e.confirm(t.isLoaded, i), !0
            }), t.check()
        }, a.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emit("confirm", this, e)
        };
        var f = {};
        return l.prototype = new e, l.prototype.check = function() {
            if (!this.isChecked) {
                var t = new Image;
                i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked = !0
            }
        }, l.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.prototype.onload = function(t) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(t)
        }, l.prototype.onerror = function(t) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
        }, l.prototype.confirm = function(t, e) {
            this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
        }, l.prototype.unbindProxyEvents = function(t) {
            i.unbind(t.target, "load", this), i.unbind(t.target, "error", this)
        }, o
    }),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["flickity/js/index", "imagesloaded/imagesloaded"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("flickity"), require("imagesloaded")) : t.Flickity = e(t, t.Flickity, t.imagesLoaded)
    }(window, function(t, e, i) {
        return e.createMethods.push("_createImagesLoaded"), e.prototype._createImagesLoaded = function() {
            this.on("activate", this.imagesLoaded)
        }, e.prototype.imagesLoaded = function() {
            function t(t, i) {
                var n = e.getParentCell(i.img);
                e.cellSizeChange(n && n.element), e.options.freeScroll || e.positionSliderAtSelected()
            }
            if (this.options.imagesLoaded) {
                var e = this;
                i(this.slider).on("progress", t)
            }
        }, e
    }),
    function() {
        function t() {}

        function e(t, e) {
            for (var i = t.length; i--;)
                if (t[i].listener === e) return i;
            return -1
        }

        function i(t) {
            return function() {
                return this[t].apply(this, arguments)
            }
        }
        var n = t.prototype,
            r = this,
            s = r.EventEmitter;
        n.getListeners = function(t) {
            var e, i, n = this._getEvents();
            if ("object" == typeof t) {
                e = {};
                for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
            } else e = n[t] || (n[t] = []);
            return e
        }, n.flattenListeners = function(t) {
            var e, i = [];
            for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
            return i
        }, n.getListenersAsObject = function(t) {
            var e, i = this.getListeners(t);
            return i instanceof Array && (e = {}, e[t] = i), e || i
        }, n.addListener = function(t, i) {
            var n, r = this.getListenersAsObject(t),
                s = "object" == typeof i;
            for (n in r) r.hasOwnProperty(n) && -1 === e(r[n], i) && r[n].push(s ? i : {
                listener: i,
                once: !1
            });
            return this
        }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
            return this.addListener(t, {
                listener: e,
                once: !0
            })
        }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
            return this.getListeners(t), this
        }, n.defineEvents = function(t) {
            for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
            return this
        }, n.removeListener = function(t, i) {
            var n, r, s = this.getListenersAsObject(t);
            for (r in s) s.hasOwnProperty(r) && (n = e(s[r], i), -1 !== n && s[r].splice(n, 1));
            return this
        }, n.off = i("removeListener"), n.addListeners = function(t, e) {
            return this.manipulateListeners(!1, t, e)
        }, n.removeListeners = function(t, e) {
            return this.manipulateListeners(!0, t, e)
        }, n.manipulateListeners = function(t, e, i) {
            var n, r, s = t ? this.removeListener : this.addListener,
                o = t ? this.removeListeners : this.addListeners;
            if ("object" != typeof e || e instanceof RegExp)
                for (n = i.length; n--;) s.call(this, e, i[n]);
            else
                for (n in e) e.hasOwnProperty(n) && (r = e[n]) && ("function" == typeof r ? s.call(this, n, r) : o.call(this, n, r));
            return this
        }, n.removeEvent = function(t) {
            var e, i = typeof t,
                n = this._getEvents();
            if ("string" === i) delete n[t];
            else if ("object" === i)
                for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
            else delete this._events;
            return this
        }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
            var i, n, r, s, o = this.getListenersAsObject(t);
            for (r in o)
                if (o.hasOwnProperty(r))
                    for (n = o[r].length; n--;) i = o[r][n], i.once === !0 && this.removeListener(t, i.listener), s = i.listener.apply(this, e || []), s === this._getOnceReturnValue() && this.removeListener(t, i.listener);
            return this
        }, n.trigger = i("emitEvent"), n.emit = function(t) {
            var e = Array.prototype.slice.call(arguments, 1);
            return this.emitEvent(t, e)
        }, n.setOnceReturnValue = function(t) {
            return this._onceReturnValue = t, this
        }, n._getOnceReturnValue = function() {
            return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
        }, n._getEvents = function() {
            return this._events || (this._events = {})
        }, t.noConflict = function() {
            return r.EventEmitter = s, t
        }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
            return t
        }) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
    }.call(this),
    function(t) {
        function e(e) {
            var i = t.event;
            return i.target = i.target || i.srcElement || e, i
        }
        var i = document.documentElement,
            n = function() {};
        i.addEventListener ? n = function(t, e, i) {
            t.addEventListener(e, i, !1)
        } : i.attachEvent && (n = function(t, i, n) {
            t[i + n] = n.handleEvent ? function() {
                var i = e(t);
                n.handleEvent.call(n, i)
            } : function() {
                var i = e(t);
                n.call(t, i)
            }, t.attachEvent("on" + i, t[i + n])
        });
        var r = function() {};
        i.removeEventListener ? r = function(t, e, i) {
            t.removeEventListener(e, i, !1)
        } : i.detachEvent && (r = function(t, e, i) {
            t.detachEvent("on" + e, t[e + i]);
            try {
                delete t[e + i]
            } catch (n) {
                t[e + i] = void 0
            }
        });
        var s = {
            bind: n,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", s) : t.eventie = s
    }(this),
    function(t, e) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(i, n) {
            return e(t, i, n)
        }) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
    }(window, function(t, e, i) {
        function n(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function r(t) {
            return "[object Array]" === c.call(t)
        }

        function s(t) {
            var e = [];
            if (r(t)) e = t;
            else if ("number" == typeof t.length)
                for (var i = 0, n = t.length; n > i; i++) e.push(t[i]);
            else e.push(t);
            return e
        }

        function o(t, e, i) {
            if (!(this instanceof o)) return new o(t, e);
            "string" == typeof t && (t = document.querySelectorAll(t)), this.elements = s(t), this.options = n({}, this.options), "function" == typeof e ? i = e : n(this.options, e), i && this.on("always", i), this.getImages(), h && (this.jqDeferred = new h.Deferred);
            var r = this;
            setTimeout(function() {
                r.check()
            })
        }

        function a(t) {
            this.img = t
        }

        function l(t) {
            this.src = t, f[t] = this
        }
        var h = t.jQuery,
            u = t.console,
            p = void 0 !== u,
            c = Object.prototype.toString;
        o.prototype = new e, o.prototype.options = {}, o.prototype.getImages = function() {
            this.images = [];
            for (var t = 0, e = this.elements.length; e > t; t++) {
                var i = this.elements[t];
                "IMG" === i.nodeName && this.addImage(i);
                var n = i.nodeType;
                if (n && (1 === n || 9 === n || 11 === n))
                    for (var r = i.querySelectorAll("img"), s = 0, o = r.length; o > s; s++) {
                        var a = r[s];
                        this.addImage(a)
                    }
            }
        }, o.prototype.addImage = function(t) {
            var e = new a(t);
            this.images.push(e)
        }, o.prototype.check = function() {
            function t(t, r) {
                return e.options.debug && p && u.log("confirm", t, r), e.progress(t), i++, i === n && e.complete(), !0
            }
            var e = this,
                i = 0,
                n = this.images.length;
            if (this.hasAnyBroken = !1, !n) return void this.complete();
            for (var r = 0; n > r; r++) {
                var s = this.images[r];
                s.on("confirm", t), s.check()
            }
        }, o.prototype.progress = function(t) {
            this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
            var e = this;
            setTimeout(function() {
                e.emit("progress", e, t), e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
            })
        }, o.prototype.complete = function() {
            var t = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var e = this;
            setTimeout(function() {
                if (e.emit(t, e), e.emit("always", e), e.jqDeferred) {
                    var i = e.hasAnyBroken ? "reject" : "resolve";
                    e.jqDeferred[i](e)
                }
            })
        }, h && (h.fn.imagesLoaded = function(t, e) {
            var i = new o(this, t, e);
            return i.jqDeferred.promise(h(this))
        }), a.prototype = new e, a.prototype.check = function() {
            var t = f[this.img.src] || new l(this.img.src);
            if (t.isConfirmed) return void this.confirm(t.isLoaded, "cached was confirmed");
            if (this.img.complete && void 0 !== this.img.naturalWidth) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
            var e = this;
            t.on("confirm", function(t, i) {
                return e.confirm(t.isLoaded, i), !0
            }), t.check()
        }, a.prototype.confirm = function(t, e) {
            this.isLoaded = t, this.emit("confirm", this, e)
        };
        var f = {};
        return l.prototype = new e, l.prototype.check = function() {
            if (!this.isChecked) {
                var t = new Image;
                i.bind(t, "load", this), i.bind(t, "error", this), t.src = this.src, this.isChecked = !0
            }
        }, l.prototype.handleEvent = function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        }, l.prototype.onload = function(t) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(t)
        }, l.prototype.onerror = function(t) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(t)
        }, l.prototype.confirm = function(t, e) {
            this.isConfirmed = !0, this.isLoaded = t, this.emit("confirm", this, e)
        }, l.prototype.unbindProxyEvents = function(t) {
            i.unbind(t.target, "load", this), i.unbind(t.target, "error", this)
        }, o
    }),
    function(t) {
        "use strict";

        function e(t) {
            return new RegExp("(^|\\s+)" + t + "(\\s+|$)")
        }

        function i(t, e) {
            var i = n(t, e) ? s : r;
            i(t, e)
        }
        var n, r, s;
        "classList" in document.documentElement ? (n = function(t, e) {
            return t.classList.contains(e)
        }, r = function(t, e) {
            t.classList.add(e)
        }, s = function(t, e) {
            t.classList.remove(e)
        }) : (n = function(t, i) {
            return e(i).test(t.className)
        }, r = function(t, e) {
            n(t, e) || (t.className = t.className + " " + e)
        }, s = function(t, i) {
            t.className = t.className.replace(e(i), " ")
        });
        var o = {
            hasClass: n,
            addClass: r,
            removeClass: s,
            toggleClass: i,
            has: n,
            add: r,
            remove: s,
            toggle: i
        };
        "function" == typeof define && define.amd ? define(o) : "object" == typeof exports ? module.exports = o : t.classie = o
    }(window);