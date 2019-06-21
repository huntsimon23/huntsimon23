Date.now || (Date.now = function() {
        return (new Date).getTime()
    }),
    function() {
        for (var a = ["ms", "moz", "webkit", "o"], b = 0; b < a.length && !window.requestAnimationFrame; ++b) {
            var c = a[b];
            window.requestAnimationFrame = window[c + "RequestAnimationFrame"], window.cancelAnimationFrame = window[c + "CancelAnimationFrame"] || window[c + "CancelRequestAnimationFrame"]
        }
        if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
            var d = 0;
            window.requestAnimationFrame = function(a) {
                var b = Date.now(),
                    c = Math.max(d + 16, b);
                return setTimeout(function() {
                    a(d = c)
                }, c - b)
            }, window.cancelAnimationFrame = clearTimeout
        }
    }(), $(function() {
        "use strict";
        var a = $("<ul></ul>"),
            b = $("<li><a></a></li>"),
            c = a.clone().addClass("nav nav-side"),
            d = $(".md h1");
        d.each(function() {
            var d, e, f = $(this),
                g = b.clone(),
                h = f.attr("id");
            g.children("a").attr("href", "#" + h).text(f.text()), g.appendTo(c), d = f.nextUntil("h1", "h2,h3,h4"), d.length && (e = a.clone().appendTo(g), d.each(function() {
                var a = $(this),
                    c = b.clone(),
                    d = h + "_" + a.attr("id");
                a.attr("id", d), c.children("a").attr("href", "#" + d).text(a.text()), c.appendTo(e)
            }))
        });
        var e = $(".col-nav");
        c.children("li:first-of-type").addClass("active"), c.appendTo(e), c = $(".nav-side");
        var f = $("body");
        f.scrollspy({
            target: ".col-nav",
            offset: 100
        });
        var g;
        if ($(window).on("resize", function() {
                clearTimeout(g), g = setTimeout(function() {
                    f.scrollspy("refresh")
                }, 200)
            }), c.affix({
                offset: {
                    top: 140
                }
            }), Modernizr.touch) {
            var h = new iScroll("colNav", {
                hScroll: !1,
                vScrollbar: !1
            });
            FastClick.attach(document.body)
        }
        var i = $(".navbar-toggle-side"),
            j = function() {
                var a = e.outerWidth(),
                    b = "translate(" + a + "px, -50%)";
                i.css({
                    "-webkit-transform": b,
                    "-ms-transform": b,
                    transform: b
                })
            };
        $(".navbar-toggle-side").on("click", function() {
            if (!f.hasClass("nav-side-shown")) {
                f.addClass("nav-side-shown"), j();
                var a, b = function() {
                    Modernizr.touch && h.refresh()
                };
                $(window).on("resize.sideToggle", function() {
                    clearTimeout(a), a = setTimeout(function() {
                        j(), b()
                    }, 50)
                }), $("body").on("activate.bs.scrollspy", function() {
                    setTimeout(b, 500)
                }), setTimeout(function() {
                    f.one("click.sideToggle", function() {
                        $(window).off("resize.sideToggle"), setTimeout(function() {
                            f.removeClass("nav-side-shown").off("activate.bs.scrollspy", b), i.attr("style", ""), i.removeClass("transitions-off")
                        }, 10)
                    }), i.addClass("transitions-off")
                }, 500)
            }
        }), $("a").on("click", function(a) {
            var b = $(this),
                c = b.attr("href");
            if (!(c.indexOf("#") === !1 || c.length < 2)) {
                var d = $(c);
                "undefined" != typeof d && d.length && (a.preventDefault(), $("body, html").animate({
                    scrollTop: d.offset().top-20
                }, "slow", function() {
                    location.hash = c
                }))
            }
        }), $(".md p img:only-child").unwrap(), $.expr[":"].external = function(a) {
            return !a.href.match(/^mailto\:/) && a.hostname != location.hostname && !a.href.match(/^javascript\:/) && !a.href.match(/^$/)
        }, $("a:external").attr("target", "_blank"), 
        $("#file-structure").nextUntil("h1").filter("ul").addClass("file-structure"),
        $(".nav-side li ul").each(function() {
        	$(this).parent().addClass('menuPlus');
        });
    });