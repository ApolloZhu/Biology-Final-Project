function randomInInterval(lhs, rhs) {
	'use strict';
    return parseInt(Math.random() * (rhs - lhs + 1) + lhs);
}

function setGlobalContents() {
    'use strict';
    $("div:first").addClass("firstBlock");
    $("#header").html("<nav class=\"navbar navbar-default navbar-fixed-top\"><div class=\"container-fluid\"><div class=\"navbar-header\"> <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\" #navbar\" aria-expanded=\"false\" id=\"navbarButton\"><span class=\"sr-only\">Toggle navigation</span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span><span class=\"icon-bar\"></span></button> <a class=\"navbar-brand\" href=\"index.html\">Ocean Wolf</a></div><div class=\"collapse navbar-collapse\" id=\"navbar\"><ul class=\"nav navbar-nav\"><li><a href=\"evolution.html\">Evolve</a></li><li><a href=\"reproduction.html\">Reproduce</a></li><li><a href=\"maintain.html\">Survive</a></li></ul><ul class=\"nav navbar-nav navbar-right visible-xs\" id=\"additionalMenu\"><li><a href=\"https://wwitdc.com\" target=\" _blank\">WWITDC</a></li><li><a href=\"http://www.fcps.edu/OaktonHS\" target=\" _blank\">Oakton HS</a></li><li><a href=\"mailto:public-apollonian@outlook.com?subject=Feedback on Bio Final Proj\">Contact Us</a></li><li><a href=\"license.html\">License</a></li></ul><ul class=\"nav navbar-nav navbar-right hidden-xs\" id=\"additionalMenu-xs\"><li class=\"dropdown\"  id=\"dropdown\"><a href=\" #\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"menuitem\" aria-expanded=\"false\" aria-haspopup=\"true\">More <span class=\"caret\"></span></a><ul class=\"dropdown-menu\" role=\"menu\"><li><a href=\"https://wwitdc.com\" target=\" _blank\">WWITDC</a></li><li><a href=\"http://www.fcps.edu/OaktonHS\" target=\" _blank\">Oakton HS</a></li><li class=\"divider\"></li><li><a href=\"mailto:public-apollonian@outlook.com?subject=Feedback on Bio Final Proj\">Contact Us</a></li><li><a href=\"license.html\">License</a></li></ul></li></ul></div></div></nav>");
    $("#footer").html("<div class=\"container\"><div class=\"row\"><div class=\"text-center col-md-6 col-md-offset-3\"><h4>About</h4><p>Copyright &copy; 2016 <a href=\"http://wwitdc.com\", target=\"_blank\">WWITDC</a> &middot; All Rights Reserved.</p></div></div></div>");
    var height = Math.max($(document).height(), $(window).height());
    height += randomInInterval(0, 200);
    var rotation = 600 + randomInInterval(-100, 300);
    var str = "@-webkit-keyframes square { 0% { -webkit-transform: translateY(0); transform: translateY(0); } 100% {-webkit-transform: translateY(-" + height + "px) rotate(" + rotation + "deg); transform: translateY(-" + height + "px) rotate(" + rotation + "deg); } } @keyframes square { 0% { -webkit-transform: translateY(0); transform: translateY(0); } 100% { -webkit-transform: translateY(-" + height + "px) rotate(" + rotation + "deg); transform: translateY(-" + height + "px) rotate(" + rotation + "deg); } }";
    $("style").html(str);
    $("#dropdown").hover(function () { $(".dropdown-toggle").dropdown("toggle"); });
    $("#Image").hover(function () {
        console.log("Hi");
        var top = $("#Image").offset().top - 50;
        $("html, body").scrollTop(top);
    }, function () {
        $("html body").stop(true);
    });
	$(".floating").hover(function(){
			$("#label").html($(this).attr("id"));
			$("#description").html($(this).attr("description"));
		}, function(){
			$("#label").text("Hover part of Ocean wolf to see what it is");
			$("#description").text("");
		}
	);
	$(".z-class-node").click(function() {
		// Two classes: add/remove class `collpased`
		var index = $(this).attr("id").slice(7);
		var needToSlideDown = $(this).hasClass("folded");
		if (needToSlideDown){
			$(this).removeClass("folded");
		} else {
			$(this).addClass("folded");
		}
		var i = 9;
		while (i > index){
			if (needToSlideDown) {
				$("#trophic"+i).slideDown();
				$("#trophic"+i).removeClass("folded");
			} else {
				$("#trophic"+i).slideUp();
				$("#trophic"+i).addClass("folded");
			}
			i--;
		}
	});
}