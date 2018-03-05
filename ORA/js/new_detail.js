$(function () {
	var href=this.location.href;
	var index=href.indexOf("=");
	var id=href.substring(index+1);
	$.ajax({
		type:'get',
		url:'http://zhyd.10010oa.com/services/getNewsInfo.php',
		dataType:'json',
        data:{Id:id},
		success:function (data) {
            var json=data.info;
            var mainTitle='<h2>'+json.title+'</h2><div class="text_span"><span>新闻来源：人才金港新闻中心</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>编辑：'+json.uname+'</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>发布时间：'+json.ctime+'</span></div>';
            document.title = json.title;			//对应ID改变title
		    $(".text_title").append(mainTitle);
            $(".text_contain_down").append(json.content);
            
        }
	});
});