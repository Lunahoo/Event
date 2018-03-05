$(function(){
	//初始化
	$(".pro_li1").css("background","url(img/after.png)");
	$(".pro_li1").find(".product_qp").show();
				
	$("#product_tabs li").mouseover(function(){
		var u=$(this).index();
		$(this).css("background","url(img/after.png)").siblings().css("background","url(img/before.png)");
		$(this).find(".product_qp").show().parent().siblings().find(".product_qp").hide();
		$("#product_content li").eq(u).show().siblings().hide();
	})
				
})