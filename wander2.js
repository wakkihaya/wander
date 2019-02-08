$(document).ready(function () {

    $('.image1').bxSlider({
        pause:2000,
        dots:false,
        auto:true,
        controls:false,
        pager:false
         });

    $('.menu-trigger').on('click',function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $('.g-nav').removeClass("show");
        }else{
            $(this).addClass("active");
            $('.g-nav').addClass("show");
        }
        // $('.g-nav').toggleClass("unshow");//cssがうまく切り替わらないよ
     });


    $('a[href^=#]').click(function () {//aタグのスピードを遅くする。

        var href =$(this).attr("href");
        var target= $(href=="#" || href == "" ? 'html' :href);

        var targetY = target.offset().top;

        $("html,body").animate({scrollTop:targetY},800,"swing");
        return false;

    });
    // planがなくなってしまったのと、追加したらずれちゃう
    $('#plansm').hover(function(){
        $(this).append('<div class = "hoverplan"><a href="wantsukucontents.html"> <p>Guidence for overseas students<br>with 4 patterns<br>>></p></a></div>');
    }, function () {
        $(".hoverplan").remove();
    });

    $('#stylesm').hover(function () {
        $(this).append('<div class="hoverplan" ><a href="wantsukucontents.html#Style"> <p>Overseas Students<br>×<br>Japanese Students<br>>> </p></a></div>');
    },function () {
        $(".hoverplan").remove();
    });

});



