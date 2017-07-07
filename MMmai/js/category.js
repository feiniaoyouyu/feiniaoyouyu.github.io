$(function () {
    $.ajax({
        url: "http://139.199.192.48:9090/api/getcategorytitle",
        success: function (data) {
            // console.log(data);
            var res = template('template-title', data);
            $('.main>ul').html(res);

            var flag = true;
            $('.main>ul>li>a').click(function () {
                var $_this = $(this);
                $.ajax({
                    url: "http://139.199.192.48:9090/api/getcategory",
                    data: {
                        titleid: $_this.data('titleId')
                    },
                    success: function (data) {
                        var res = template('template-content', data);
                        // console.log(data);
                        $_this.next('.sub_menu').html(res);

                        // if (flag) {
                        //     $_this.next('.sub_menu').addClass('hide');
                        //     flag = false;
                        // } else {
                        //     $_this.next('.sub_menu').removeClass('hide');
                        //     flag = true;
                        // }
                        $_this.next('.sub_menu').toggleClass("hide");
                    }
                })
                //   $this.siblings('ol').css('display','block');
            })
        }
    })
})