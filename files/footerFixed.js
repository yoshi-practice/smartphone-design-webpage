/*- footerFixed.js MIT-style license. 2007 Kazuma Nishihata [to-R] http://blog.webcreativepark.net -*/ !new function () {
    function e() {
        document.getElementsByTagName("body")[0].clientHeight;
        document.getElementById(o).style.top = "0px";
        var e = document.getElementById(o).offsetTop,
            t = document.getElementById(o).offsetHeight;
        if (window.innerHeight) var n = window.innerHeight;
        else if (document.documentElement && 0 != document.documentElement.clientHeight) var n = document.documentElement.clientHeight;
        n > e + t && (document.getElementById(o).style.position = "relative", document.getElementById(o).style.top = n - t - e - 1 + "px")
    }

    function t(e) {
        function t() {
            i != n.offsetHeight && (e(), i = n.offsetHeight)
        }
        var n = document.createElement("div"),
            o = document.createTextNode("S");
        n.appendChild(o), n.style.visibility = "hidden", n.style.position = "absolute", n.style.top = "0", document.body.appendChild(n);
        var i = n.offsetHeight;
        setInterval(t, 1e3)
    }

    function n(e, t, n) {
        try {
            e.addEventListener(t, n, !1)
        } catch (o) {
            e.attachEvent("on" + t, n)
        }
    }
    var o = "footer";
    n(window, "load", e), n(window, "load", function () {
        t(e)
    }), n(window, "resize", e)
};
