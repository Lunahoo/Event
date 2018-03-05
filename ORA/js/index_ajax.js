$(function () {
	$.ajax({
		type:'get',
		url:'http://zhyd.10010oa.com/services/getNewsList.php',
		dataType:'json',
		success:function (data) {
			var errcode = data.errcode;
			var json = data.info;
			var year=[];
			var month=[];
			for (var j = 0; j < json.length; j++) {
				var date=json[j].ctime;
				var dateTime=date.split(" ")[0].split("-");
				year.push(dateTime[0]);
				month.push(dateTime[1]+"-"+dateTime[2]);
			}
			var dataFirst='';
			if(json[0].pic!='') {
				dataFirst+='<a href=news_detail.html?id='+json[0].id+'><img src="' +  json[0].pic + '"></a>';
			}else {
				dataFirst+='<a href=news_detail.html?id='+json[0].id+'>'+'<img src="img/rckf.jpg">';
			}
			dataFirst+='<a href=news_detail.html?id='+json[0].id+'><div class="news_ban">'
				+'<h4>'+json[0].title+'</h4><p>'+json[0].des+'</p><div class="news_time">'+month[0]+'/<span>'+year[0]+'</span></div>'
				+'</div></a>';

			$(".news_left").append(dataFirst);
			var newList='';
			for (var i = 1; i < 4; i++) {
				if(i==3){
					newList+=
						'<li class="article_lastli">'
						+'<div class="article">'
						+'<div class="list_time">'+month[i]+'/<span>'+year[i]+'</span></div>'
						+'<a href=news_detail.html?id='+json[i].id+' class="h4" style="-moz-user-select:-moz-none;"  onselectstart="return false;">'+json[i].title+'</a>'
						+'</div>'
						+'<a href=news_detail.html?id='+json[i].id+' class="paragraph" style="-moz-user-select:-moz-none;"  onselectstart="return false;"> '+json[i].des+'</a>'
						+'<p><a href="news-center.html" target="_blank" class="p" style="-moz-user-select:-moz-none;"  onselectstart="return false;"><b>更多新闻 >></b></a></p>'
						+'</li>';
				}else{
					newList+=
						'<li>'
						+'<div class="article">'
						+'<div class="list_time">'+month[i]+'/<span>'+year[i]+'</span></div>'
						+'<a href=news_detail.html?id='+json[i].id+' class="h4" style="-moz-user-select:-moz-none;"  onselectstart="return false;">'+json[i].title+'</a>'
						+'</div>'
						+'<a href=news_detail.html?id='+json[i].id+' class="paragraph" style="-moz-user-select:-moz-none;"  onselectstart="return false;"> '+json[i].des+'</a>'
						+'</li>';
				}

			}
			$("#news_list").append(newList);
		}
	});
});