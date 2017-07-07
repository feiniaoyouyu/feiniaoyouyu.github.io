$(function () {
    // 主区滑动main-swiper-container
    var swiper = new Swiper('.main-swiper-container', {
        scrollbar: '#mainScrollbar',
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheelControl: true,
        freeMode: true,
        roundLengths: true, //防止文字模糊
    });



    //菜单栏部分ajax请求++++++++++++++++++++++++++++++++
    $.ajax({
        url: "http://139.199.192.48:9090/api/getindexmenu",
        success: function (data) {
            console.log(data);
            var result = template("caiDan-template", data);
            // console.log(result);
            $('#caidanUl').append(result);
            $('#caidanUl>li').each(function (index, element) {
                // console.log(index);
                // console.log(element);
                if (index == 7) {
                    $(element).attr('id', 'moreLi');

                }
                if (index > 7) {
                    $(element).addClass('ul-more');
                    // console.log($(this));


                }

            })
            // 点击展示ul-more++++++++++++++++
            $('#moreLi').click(function () {
                $('#caidanUl .ul-more').fadeToggle(1);
            })
        }
    })
   
    // 折扣部分ajax请求+++++++++++++++
    // $('#btn').click(function() {
    $.ajax({
        type: "get",
        url: "http://139.199.192.48:9090/api/getmoneyctrl",
        success: function (data) {
            // console.log(data);
            // var obj = {};
            // obj.data = data;
            // console.log(obj);

            var result = template('template-zk', data);
            // console.log(result);
            $(result).appendTo('.main-swiper-container .swiper-slide .zk-container-main');
        }

    })
    // })

})