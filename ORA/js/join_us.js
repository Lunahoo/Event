$(function(){
	$(".sort_left li").eq(0).addClass("a_color");
	$(".sort_left li").eq(0).append('<span></span><p><img src="img/ju_sj_03.png"></p>');
	$(".sort_right li").eq(0).css("display","block");
	$(".sort_left li").mouseover(function(){
		var index=$(this).index();
		$(".sort_left li").find("span").remove().find("p").remove();
		$(".sort_left li").find("img").remove();
		$(this).append('<span></span><p><img src="img/ju_sj_03.png"></p>');
		$(".sort_right li").css("display","none").eq(index).css("display","block");
		$(".sort_left li").removeClass("a_color").eq(index).addClass("a_color");
	})
})
