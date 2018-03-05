$(function(){
	//nav动效
	$("header li").mouseover(function(){
		$(this).find("p").css("display","block").parent().siblings().find("p").css("display","none");
	}).mouseleave(function(){
		$(this).find("p").css("display","none");
	});
	
	//five_icon
	$(".five_icon li").mouseover(function(){
		$(this).css("z-index","999");
		$(this).find(".a2").css("opacity",1);
		$(this).find(".a2").children(".li_title").css("transform","translateX(0)");
		$(this).find(".a2").children("p").css({"transform":"translateX(0)"});
		$(this).find(".a2").children(".next").css("transform","translateX(0)");
	}).mouseout(function(){
		$(this).find(".a2").css({"opacity":0});
		$(this).find(".a2").children(".li_title").css("transform","translateX(150px)");
		$(this).find(".a2").children("p").css("transform","translateX(-180px)");
		$(this).find(".a2").children(".next").css("transform","translateX(50px)");
	});
	
	//案例下面的li标签点击效果
	$(".case li").click(function(){
		var xb=$(this).index();
		window.location.href="brand_case.html?id="+xb;
	});
	//banner图下面的图标点击效果
	$(".five_icon .a2").click(function(){
		var xb2=$(this).parent("li").index();
		window.location.href="Scope_of_business.html?id="+xb2;
	});
	
	
	//about_us页面的点击事件
	var spjj=$("section li").eq(0).offset().top;
	var qywh=$("section li").eq(1).offset().top;    
	var fwtx=$("section li").eq(2).offset().top;
	var czlc=$("section li").eq(3).offset().top;
	$(".container .left p").click(function(){
		var inx=$(this).index();
		if(inx==0){
			$("body").animate({"scrollTop":spjj},500);
		}else if(inx==1){
			$("body").animate({"scrollTop":qywh},500);
		}else if(inx==2){
			$("body").animate({"scrollTop":fwtx},500);
		}else if(inx==3){
			$("body").animate({"scrollTop":czlc},500);
		}
	});
	
	
	//brand_case页面的点击事件
	//标题点击事件
	$(".container .title a").click(function(){
		var ind=$(this).parent().index();
		$(".container .title li").eq(ind).find("a").addClass("vr_active").parent().siblings().find("a").removeClass("vr_active");
		$(".container .photo li").eq(ind).css("display","block").siblings().css("display","none");
		if(ind==0){
			$(".container .photo li:eq(0) dl").eq(0).css("display","block").siblings("dl").css("display","none");
			$(".container .photo .btn span").eq(0).addClass("btn_active").siblings().removeClass();
		}
	});
	
	//平面创意设计翻页点击事件
	$(".container .photo li:eq(0) dl").eq(0).css("display","block");
	$(".container .photo .btn span").click(function(){
		var ins=$(this).index();
		$(".container .photo li:eq(0) dl").eq(ins).css("display","block").siblings("dl").css("display","none");
		$(this).addClass("btn_active").siblings().removeClass();
	});
	
});
