$(function(){
	$(window).resize(infinite);
	function infinite() {
		var htmlWidth = $('html').width();
		if (htmlWidth >= 750) {
			$("html").css({
				"font-size" : "24px"
			});
		} else {
			$("html").css({
				"font-size" :  24 / 750 * htmlWidth + "px"
			});
		}
	}infinite();
});
//  (function (doc, win) {
//         var docEl = doc.documentElement,
//                 resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//                 recalc = function () {
//                     var clientWidth = docEl.clientWidth;
//                     if (!clientWidth) return;
//                     docEl.style.fontSize = 28 * (clientWidth / 750) + 'px';
//                 };

//         if (!doc.addEventListener) return;
//         win.addEventListener(resizeEvt, recalc, false);
//         doc.addEventListener('DOMContentLoaded', recalc, false);
//     })(document, window);