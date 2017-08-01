$(function () {
    // banner轮播图区
    var topSwiper = new Swiper('.top-swiper-container', {
        pagination: '#top-pagination-bar',
        paginationClickable: true,
        loop: true,
        autoplay: 1500,
        autoplayDisableOnInteraction: false,
    });
    /*神韵演出轮播图*/
    var activeSwiper = new Swiper('.active-swiper-container', {
        pagination: '#active-pagination-bar',
        paginationClickable: true,
        loop: true,
        autoplay: 1500,
        autoplayDisableOnInteraction: false,
    });
    /*天然温泉轮播图*/
    var springSwiper = new Swiper('.spring-swiper-container', {
        pagination: '#spring-pagination-bar',
        paginationClickable: true,
        loop: true,
        autoplay: 1500,
        autoplayDisableOnInteraction: false,
    });
    /*美食轮播图*/
    var foodSwiper = new Swiper('.food-swiper-container', {
        pagination: '#food-pagination-bar',
        paginationClickable: true,
        loop: true,
        autoplay: 1500,
        autoplayDisableOnInteraction: false,
    });
    // 优惠信息轮播
    (function () {
        $('.message ul li').first().clone().appendTo($('.message ul'));
        var timer = null;
        var num = 0;
        var liHeight = $('.message ul li').height();
         $(window).resize(function() {
            liHeight = $('.message ul li').height();
        });
        timer = setInterval(function () {
            if(num >= $('.message ul li').length - 1) {
                $('.message ul').css('top',0);
                num = 0;
            }
            num ++; 
            // console.log($('.message ul li').length);           
            $('.message ul').animate({
                top: -liHeight * num,
            })
        }, 1500);
    })()


})