$(document).ready(function () {

    $('.menu-trigger1').on('click',function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $('.box').removeClass("show");
        }else{
            $(this).addClass("active");
            $('.box').addClass("show");
        }

    });

    $('.box_back li a').on('click',function () {
        $('.box').removeClass("show");
        $('.menu-trigger1').removeClass("active");
    });

    $('a[href^=#]').click(function () {//aタグのスピードを遅くする。

        var href =$(this).attr("href");
        var target= $(href=="#" || href == "" ? 'html' :href);

        var targetY = target.offset().top;

        $("html,body").animate({scrollTop:targetY},800,"swing");
        return false;

    });

    $(window).scroll(function () {
        if($(this).scrollTop()<100){
            $('.head').css('background-color','transparent');
            $('.head').css('transition','all .2s ease-in');
            $('#title1 img').css('opacity','0.7');
        }else{
            $('.head').css('background-color','#000');
            $('.head').css('transition','all .2s ease-in');
            $('#title1 img').css('opacity','1.0');
        }

    })

});