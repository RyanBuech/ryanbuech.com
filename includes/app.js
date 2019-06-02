$(function ()
{
    "use strict";

    $(".gametable img").click(function()
    {
        var $src = $(this).attr("src");

        $(".imgpopup").fadeIn();
        $(".imgshow img").attr("src", $src);
    });

    $(".close").click(function()
    {
        var $src = $(this).attr("src");

        $(".imgpopup").fadeOut();
    });

    $(".imgpopup").click(function()
    {
        var $src = $(this).attr("src");

        $(".imgpopup").fadeOut();
    });

    $(".nav").click(function()
    {
        var $src = $(this).attr("src");

        $(".imgpopup").fadeOut();
    });
});