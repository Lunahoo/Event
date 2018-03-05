$(function () {
	/*tab start*/
	$('.navbar_content li').click(function () {
		var index =$(this).index();
		console.log(index);
		$(this).addClass("add").siblings().removeClass("add");
		$(".about_content li").eq(index).show().siblings().hide();
	});
	/*tab end*/
});