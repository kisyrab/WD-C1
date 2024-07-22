$(function(){
    ///메뉴
    
    $(".main > li").hover(function(){
        $(this).find(".sub").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
    })

    //이미지슬라이드
    var n = 0;
    $(".fade li").hide()
    $(".fade li").eq(0).show();
    
    setInterval(function(){
        if(n==2){
            n=0;
        }else{
            n++;
        }
        $(".fade li").eq(n).fadeIn().siblings().fadeOut();

    }, 2500)


    //탭

    $(".cont1 h2").click(function(){
        $(".cont1 h2").removeClass('on')
        $(this).addClass('on')
        $(".cont1 ul").hide();
        $(this).next().css({display : "flex"});
    })



})//j