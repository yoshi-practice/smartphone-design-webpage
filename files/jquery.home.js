/* LOGOBOX HEIGHT */
$(document).ready(function () {
    hsize = $(window).height();
    $("#logobox").css("height", hsize + "px");
});
$(window).resize(function () {
    hsize = $(window).height();
    $("#logobox").css("height", hsize + "px");
});
