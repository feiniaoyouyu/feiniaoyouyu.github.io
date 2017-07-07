// 计算屏幕宽度 /20 设置给 html的font-size
var fontSize = window.screen.width / 20;
document.querySelector('html').style.fontSize = fontSize + 'px';
// 屏幕尺寸发生改变时 重新计算html的font-size
window.onresize = function () {
    // 计算屏幕宽度 /20 设置给 html的font-size
    var fontSize = window.screen.width / 20;
    document.querySelector('html').style.fontSize = fontSize + 'px';
}
