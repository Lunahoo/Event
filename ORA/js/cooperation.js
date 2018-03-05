
$(function(){
	var timer=setInterval(run,400);
	function run(){
		$(".cooperation_lb").animate({"left":-$(".cooperation_lb li").outerWidth(true)},1500,function(){
				$(".cooperation_lb li:eq(0)").appendTo(".cooperation_lb");
				$(".cooperation_lb").css("left","0");
		})
	}
})
