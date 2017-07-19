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