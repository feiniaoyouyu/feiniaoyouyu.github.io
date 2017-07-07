window.onload = function() {
    changeColor();
    countDownTime();
}

function changeColor() {
    var header = document.querySelector('header');
    var bannerHeight = document.querySelector('.banner').offsetHeight;
    // console.log(bannerHeight);

    window.onscroll = function() {
        var percent = document.body.scrollTop / bannerHeight;
        // console.log(percent);
        if (percent >= 0.8) {
            percent = 0.8;
        }
        header.style.backgroundColor = "rgba(201, 21, 35," + percent + ")";
    }
}

function countDownTime() {
    var total = 3 * 60 * 60;
    var lis = document.querySelectorAll('.sec-kill .top li');
    // console.log(lis);
    var countTimer = setInterval(function() {
        total--;
        var hour = Math.floor(total / 3600);
        var minute = Math.floor((total % 3600) / 60);
        var second = total % 60;

        lis[0].innerHTML = Math.floor(hour / 10);
        lis[1].innerHTML = hour % 10;
        lis[3].innerHTML = Math.floor(minute / 10);
        lis[4].innerHTML = minute % 10;
        lis[6].innerHTML = Math.floor(second / 10);
        lis[7].innerHTML = second % 10;
    }, 1000);
}