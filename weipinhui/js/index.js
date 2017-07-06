$(function() {
    // 顶部登录鼠标移入移出显示隐藏事件
    $('.guangdong')
    .on('mouseenter',function(){
       $(this).css('color','red');
       $('.left-hover').show();
       $('#rotate').css({
           transform: 'rotate(180deg)',
           transformOrigin: '50% 25%',
           borderColor: 'red transparent transparent transparent'
       })
    })
    .on('mouseleave',function(){
       $(this).css('color','gray');
       $('.left-hover').hide();
       $('#rotate').css({
           transform: 'rotate(0deg)',
           borderColor: '#999 transparent transparent transparent'
       })
    })
    $(window).on('scroll',function(){
        console.log($('.wen').scrollTop());
        if($('body').scrollTop() >= $('.loginbar').height() + $('.logo').height() + $('.main-nav').height()) {
            $('.main-nav').addClass('fix');
            $('.wen').css('marginTop',$('.main-nav').height())
        } else {
            $('.main-nav').removeClass('fix');
            $('.wen').css('marginTop',0);
        }
    })

})