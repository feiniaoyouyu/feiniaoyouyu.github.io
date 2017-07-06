//  轮播图
var swiper = new Swiper('.root-swiper-container', {
    pagination: '#root-pagination-bar',
    paginationClickable: true,
    loop: true,
    autoplay:2000,
    autoplayDisableOnInteraction: false,
});

//点击出现车型遮罩层
$('.btn').click(function () {
    console.log('hh');
    $('.mask').animate({
        right: 0,
    })
})
//点击隐藏遮罩层
$('.mask').click(function(){
    $(this).animate({
        right: '100%',
    })
})
$('.message').click(function(e){
    // return false;
    e.stopPropagation();
})