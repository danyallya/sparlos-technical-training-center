$(document).ready(function () {


    $("#courses .item").each(function () {
        var colorR = Math.floor((Math.random() * 256));
        var colorG = Math.floor((Math.random() * 256));
        var colorB = Math.floor((Math.random() * 256));
        $(this).css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
    });
    $(".head").each(function () {
        var colorR = Math.floor((Math.random() * 256));
        var colorG = Math.floor((Math.random() * 256));
        var colorB = Math.floor((Math.random() * 256));
        $(this).css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
    });
    $("#teachers .item .name").each(function () {
        var colorR = Math.floor((Math.random() * 256));
        var colorG = Math.floor((Math.random() * 256));
        var colorB = Math.floor((Math.random() * 256));
        $(this).css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
    });
    $("#about-us .item").each(function () {
        var colorR = Math.floor((Math.random() * 256));
        var colorG = Math.floor((Math.random() * 256));
        var colorB = Math.floor((Math.random() * 256));
        $(this).css("border-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
    });
    $("#courses-info .item").each(function () {
        var colorR = Math.floor((Math.random() * 256));
        var colorG = Math.floor((Math.random() * 256));
        var colorB = Math.floor((Math.random() * 256));
        $(this).css("border-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
    });
    var xsection1 = $('#contact-us').offset().top;
    $('.contact-us').click(function () {
        $('html , body').animate({scrollTop: xsection1}, 2000);

    });
});