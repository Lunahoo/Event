$(function(){
	"use strict";
	//训练课程
	$(".course_down .book_up").mouseover(function(){
		$(this).css("width","406px");
		$(this).find(".book_introduction").css("display","block");
		$(this).find(".book_title").css({"height":"255px","background-size":"35px 255px","transform":"translateY(-13px)"});
		$(this).parents("li").css("z-index","999").siblings().css("z-index","666");
	}).mouseleave(function(){
		$(this).css("width","35px");
		$(this).find(".book_title").css({"height":"241px","background-size":"35px 241px","transform":"translateY(0)"});
		$(this).find(".book_introduction").css("display","none");
	});
			
	$(".course_center .book_down").mouseover(function(){
		$(this).css("width","406px");
		$(this).find(".book_introduction").css("display","block");
		$(this).find(".book_title").css({"height":"255px","background-size":"35px 255px"});
		$(this).parents("li").css("z-index","999").siblings().css("z-index","666");
	}).mouseleave(function(){
		$(this).css("width","35px");
		$(this).find(".book_title").css({"height":"241px","background-size":"35px 241px"});
		$(this).find(".book_introduction").css("display","none");
	});
	
	$(".course_center #book_down").mouseover(function(){
		$(this).css("width","406px");
		$(this).find(".book_introduction").css("display","block");
		$(this).find(".book_title").css({"height":"255px","background-size":"35px 255px","transform":"translateX(-371px)"});
		$(this).parents("li").css("z-index","999").siblings().css("z-index","666");
	}).mouseleave(function(){
		$(this).css("width","35px");
		$(this).find(".book_title").css({"height":"241px","background-size":"35px 241px","transform":"translateX(0)"});
		$(this).find(".book_introduction").css("display","none");
	});
	
//	讲师中心
	$(".teacher_center li").mouseover(function(){
		$(this).find(".teacher_up").css("background","#c9caca").parents("li").siblings().find(".teacher_up").css("background","#aaabab");
		$(this).css("box-shadow","0 0 10px 0 #1e1e1e").siblings().css("box-shadow","none");
	}).mouseleave(function(){
		$(this).find(".teacher_up").css("background","#aaabab");
		$(this).css("box-shadow","none");
	});
	
	
})