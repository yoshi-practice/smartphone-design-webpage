/* LOGOBOX HEIGHT */
$(document).ready(function () {
    hsize = $(window).height();
    $("#logobox").css("height", hsize + "px");
});
$(window).resize(function () {
    hsize = $(window).height();
    $("#logobox").css("height", hsize + "px");
});
$(document).ready(function () {
    var scrollOff = function (e) {
        e.preventDefault();
    }
    document.addEventListener('touchmove', scrollOff, {
        passive: false
    });
});
