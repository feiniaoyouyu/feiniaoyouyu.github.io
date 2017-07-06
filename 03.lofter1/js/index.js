$(function () {
  // 使用数组 保存 文本信息
  var rootTabBarInfo = ['首页', '发现', '消息', '我的'];
  // 最顶级的swiper
  var rootSwiper = new Swiper('.root-swiper-container', {
    // 分页器
    pagination: '#rootTabbar',
    // 分页器可以点击
    paginationClickable: true,
    // 自己设置 分页器中标签结构
    paginationBulletRender: function (swiper, index, className) {
      return '<span class="' + className + '">' + rootTabBarInfo[index] + '</span>';
    }
  })
  // 为 最顶级swiper的 分页中 添加一个 额外的元素
  // 创建一个 a标签 并且添加到rootTabbar
  // 子元素 添加到 父容器中使用的 appendTo 
  // 父元素。append(子元素)
  $('<a class="camera" href="javascript:void(0)"></a>').appendTo('#rootTabbar');

  // 区域1的 swiper 
  var sec1Swiper = new Swiper('.section1-swiper-container', {
    // 分页器
    pagination: '#sec1Tabbar',
    // 分页器可以点击
    paginationClickable: true,
    // 自己设置 分页器中标签结构
    paginationBulletRender: function (swiper, index, className) {
      if (index == 0) {
        return '<span class="' + className + '">关注</span>';
      } else {
        return '<span class="' + className + '">订阅</span>';
      }

    }
  })

  // 区域1的swiper 分页器中的 小按钮
  $('<a class="addFriends" href="javascript:void(0)"></a>').appendTo('#sec1Tabbar');

  // 区域1的 订阅区域的swiper
  var section1BookSwiper = new Swiper('.section1-book-container', {
    scrollbar: '#section1BookScrollbar',
    direction: 'vertical',
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true,
    roundLengths: true, //防止文字模糊

  })


  // 区域2 内容自由滚动的 swiper
  var section2Swiper = new Swiper('.section2-main-container', {
    scrollbar: '#section2MainScrollbar',
    direction: 'vertical',
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true,
    roundLengths: true, //防止文字模糊

  })

  // 区域2 内部 最顶部的 banner 轮播图
  var section2BannerSwiper = new Swiper('.section2-main-banner', {
    pagination: '#section2bannerPagination',
  });

  // 区域2 内部 穿搭的 轮播图
  var section2ClothSwiper = new Swiper('.section2-cloth-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
      rotate: 90,
      stretch: -28,
      depth: 100,
      modifier: 1,
      slideShadows: false
    }
  })


  // 区域3的swiper
  // 区域1的 swiper 
  var sec3Swiper = new Swiper('.section3-swiper-container', {
    // 分页器
    pagination: '#sec3Tabbar',
    // 分页器可以点击
    paginationClickable: true,
    // 自己设置 分页器中标签结构
    paginationBulletRender: function (swiper, index, className) {
      if (index == 0) {
        return '<span class="' + className + '">动态</span>';
      } else if (index == 1) {
        return '<span class="' + className + '">消息</span>';

      } else {
        return '<span class="' + className + '">聊天</span>';
      }
    }
  })

  //  区域3 内部的 swiper -- 动态 
  var section3MoveMentSwiper = new Swiper('.section3-movement-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true,
    roundLengths: true, //防止文字模糊
    onTouchEnd: function (swiper) { //  在用户拖拉slide结束时
      //       判断拖拉的距离 比 最大的还要大 100
      // 计算最大的距离      
      var maxDistance = $('.section3-movement-container').height() - $('.section3-movement-container .swiper-slide').height();
      // 获取移动的距离
      var moveDistance = swiper.translate;
      // 做减法 判断插值
      if ((moveDistance - maxDistance) < -100) {
        //           刷新
        //               添加loadingdiv
        $('<div class="loading"></div>').appendTo('.section3-movement-container .swiper-slide');
        //               重新计算slide的尺寸
        swiper.updateSlidesSize();
        //               ajax获取数据--->服务器
        $.ajax({
          url: 'http://127.0.0.1/03.lofter1/data/backData.php',
          success: function (data) {
            console.log(data);
            // 删除 loading div
            $('.section3-movement-container .swiper-slide .loading').remove();
            // 重新计算slide的尺寸
            swiper.updateSlidesSize();
            // 调用模板引擎的方法
            for (var i = 0; i < data.length; i++) {
              var result = template('template', data[i]);
              console.log(result);
              $(result).appendTo('.section3-movement-container .swiper-slide');
              // 重新计算slide的尺寸
              swiper.updateSlidesSize();
            }
          }
        })
      }
    }
  })
  //  区域3 内部的 swiper -- 信息
  var section3MessageSwiper = new Swiper('.section3-message-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true,
    roundLengths: true, //防止文字模糊
  })
  //  区域3 内部的 swiper -- 聊天 
  var section3ChatSwiper = new Swiper('.section3-chat-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    mousewheelControl: true,
    freeMode: true,
    roundLengths: true, //防止文字模糊
  })
})