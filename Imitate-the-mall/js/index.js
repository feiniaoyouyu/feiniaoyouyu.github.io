$(function () {
    var arrText = [
        '例如：荷棠鱼坊烧鱼 或 樱花日本料理',
        '例如：昌平区育新站龙旗广场2号楼609室',
        '例如：万达影院双人情侣券',
        '例如：东莞出事了，大老虎是谁？',
        '例如：北京初春降雪，天气变幻莫测'
    ];
    $('.ipt').val(arrText[0]);
    $('.bar li').click(function () {
        $(this).addClass('active').siblings('li').removeClass('active');
        var currentIndex = $(this).index();
        $('.ipt').val(arrText[currentIndex]);
        $('.ipt').focus(function () {
            $(this).val('');
        })
        $('.ipt').blur(function () {
            $(this).val(arrText[currentIndex]);
        })
    })
    // 点击上下切换
    var olLiHeight = $('.bottom ol li').height();
    var length = $('.bottom ol li').length;
    var timer = null;
    var num = 0;
    $('.bottom .up').click(function () {
        if (num == length - 1) {
            num = 0;
            $('.bottom ol').css('top', 0);
        }
        num++;
        $('.bottom ol').stop().animate({
            'top': -olLiHeight * num,
        })
    })
    // console.log(num);
    $('.bottom .down').click(function () {
        if (num == 0) {
            num = length - 1;
            $('.bottom ol').css('top', -olLiHeight * num);

        }
        num--;
        $('.bottom ol').stop().animate({
            'top': -olLiHeight * num,
        })
    })
    timer = setInterval(function () {
        $('.bottom .up').click();
    }, 1000)
    $('.bottom').hover(function () {
        clearInterval(timer);
    }, function () {
        timer = setInterval(function () {
            $('.bottom .up').click();
        }, 1000)
    })
    // 菜单切换
    $('.tagNav li').click(function () {
        var curIndex = $(this).index();
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.tagContent').eq(curIndex).addClass('active').siblings().removeClass('active');
    })
    // 图片切换
    var picArr = ['爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方'];
    var picTimer = null;
    var count = 0;
    $('.pic ol li').click(function () {
        var curIndex = $(this).index();
        count = curIndex;
        $(this).addClass('active').siblings().removeClass('active');
        $('.pic ul li').eq(curIndex).addClass('active').siblings().removeClass('active');
        $('.pic p').html(picArr[curIndex]);
    })
    changePic();
    $('.pic').hover(function () {
        clearInterval(picTimer);
    }, function () {
        changePic();
    })
    function changePic() {
        picTimer = setInterval(function () {
            var picLength = $('.pic ol li').length;
            if (count == picLength - 1) {
                count = -1;
            }
            count++;

            // console.log(count);
            $('.pic ol li').eq(count).click();
        }, 1000)
    }
    // 方图hover区
    var squareArr = [
        '人气值3',
        '人气值4',
        '人气值5',
        '人气值6',
        '人气值7',
        '人气值10',
    ];
    $('.square li').hover(function () {
        var squareIndex = $(this).index();
        $('<p>' + squareArr[squareIndex] + '</p>').appendTo($(this));
    }, function () {
        $(this).find('p').remove();
    })
    // 图片变大dinner区
    // $(' <div class="bigMore"><img src="img/content/bbs_img1.gif" alt=""><a href="javascript:;">你没见过的古怪餐厅</a><p>阿瑞斯</p><span>ONE</span></div>').appendTo($('.dinner li').first());
    $('.dinner li').hover(function () {
        $(this).find('.normal').addClass('hide').end().siblings('li').find('.normal').removeClass('hide');;
      
        $('.dinner li').find('.bigMore').remove();
        $(' <div class="bigMore"><img src="img/content/bbs_img1.gif" alt=""><a href="javascript:;">你没见过的古怪餐厅</a><p>阿瑞斯</p><span>ONE</span></div>').appendTo($(this));

    })
})