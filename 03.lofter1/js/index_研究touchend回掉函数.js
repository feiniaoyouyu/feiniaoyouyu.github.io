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
    onTouchEnd: function (swiper) { // 用户手指松开slide时调用的回掉函数
      // console.log('你放弃我了吗?');
      // console.log(swiper);
      console.log(swiper.translate);
      // 计算 移动到底部的距离
      // console.log($('.section3-movement-container').height());
      // console.log($('.section3-movement-container .swiper-slide').height());
      // 到底部 移动的距离 -85
      var maxDistance = $('.section3-movement-container').height() - $('.section3-movement-container .swiper-slide').height();
      console.log(maxDistance);

      // 判断是否超过100
      // -120 +85   <-100
      if ((swiper.translate - maxDistance) < -100) {
        console.log('哥们，你啦多了，我准备去刷新了');

        // 创建 loading div  追加到 我们这个 slide中
        $('<div class="loading"></div>').appendTo('.section3-movement-container .swiper-slide');
        // 重新计算 slide的尺寸
        swiper.updateSlidesSize()
        // 过一会之后 干掉 loadingdiv  还原尺寸
        // 请求相应回来之后 调用
        setTimeout(function () {
          $('.section3-movement-container .swiper-slide .loading').remove();
          // 重新计算 slide的尺寸
          swiper.updateSlidesSize()
        },1000)
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