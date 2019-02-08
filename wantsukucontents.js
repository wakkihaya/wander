$(document).ready(function () {
    $('a[href^=#]').click(function () {//aタグのスピードを遅くする。

        var href =$(this).attr("href");
        var target= $(href=="#" || href == "" ? 'html' :href);

        var targetY = target.offset().top;

        $("html,body").animate({scrollTop:targetY},800,"swing");
        return false;

    });

});