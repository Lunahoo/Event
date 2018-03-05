$(function () {
	var totalPage=0;
	var pageSize=6;//默认加载6条数据
	var currentNum=1;

	getPageNum(currentNum);//默认加载第一页数据
	$.ajax({
		url:'http://zhyd.10010oa.com/services/getNewsList.php',
		dataType:'json',
		async:false,
		success:function(data){
			var json = data.info;
			totalPage=data.totalRecord;
		}
	
	});
	var pageNum=Math.ceil(totalPage/pageSize);//获取总页数
	$("#pagination2").pagination({
		currentPage: 1,
		totalPage: pageNum,
		isShow: true,
		count: 6,
		prevPageText: "< 上一页",
		nextPageText: "下一页 >",
		callback: function(current) {
			currentNum=current;
			$(".up_right").html("");
			$(".container_down>ul").html("");
			getPageNum(currentNum);
		}
	});

	function getPageNum(){
		$.ajax({
			type:'get',
			url:'http://zhyd.10010oa.com/services/getNewsList.php?Page='+currentNum+'&Pagesize='+pageSize,
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
				
				var i=0;
				if(currentNum<=1){
					$(".container_up").html('<div class="up_left"><img src="img/pic1.png"></div><div class="up_right"></div>');
					$(".container_up").css({"width":"1198px","height":"334px","box-shadow":" 0 0 0 1px #eee","border-bottom":"solid 1px #cdcdcd"});
					i=1;
					var dataFirst='<h3><a href="news_detail.html?id='+json[0].id+'" style="-moz-user-select:-moz-none;"  onselectstart="return false;">'+json[0].title+'</a></h3>'
					+'<p><a href="news_detail.html?id='+json[0].id+'" style="-moz-user-select:-moz-none;"  onselectstart="return false;">'+json[0].des+'</a></p>'
					+'<div class="up_right_div">'
					+'<div class="time">'+month[0]+'/<span>'+year[0]+'</span></div>'
					+'<div class="detail"><a href="news_detail.html?id='+json[0].id+'" style="-moz-user-select:-moz-none;"  onselectstart="return false;"><b>查看详情>></b></a></div>'
					+'</div>';
				if(json[0].pic!=''){
					$(".up_left").html('<img src="'+json[0].pic+'"/>');
					console.log(json[0].pic);
				}
				$(".up_right").append(dataFirst);
				var newList='';
				for (i; i < json.length; i++) {
					newList+=
						'<li>'
						+'<div class="li_left">'
						+'<div class="num">'+month[i]+'</div>'
						+'<div class="num2">'+year[i]+'</div>'
						+'</div>'
						+'<div class="li_middle">'
						+'<h4><a href="news_detail.html?id='+json[i].id+'" style="-moz-user-select:-moz-none;"  onselectstart="return false;">'+json[i].title+'</a></h4>'
						+'<p><a href="news_detail.html?id='+json[i].id+'" style="-moz-user-select:-moz-none;"  onselectstart="return false;"> '+json[i].des+'</a></p>'
						+'</div>'
						+'<div class="li_right">';
					if(json[i].pic!=''){
						newList+='<img src="'+json[i].pic+'">';
					}else {
						newList+='<img src="img/pic2.png">';
					}
					newList+='</div>'
						+'</li>';

				}
				$(".container_down>ul").append(newList);
				}else if(currentNum>1){
					$(".container_up").html("");
					$(".container_up").css({"width":"0","height":"0"});
					var newList='';
				for (i; i < json.length; i++) {
					newList+=
						'<li>'
						+'<div class="li_left">'
						+'<div class="num">'+month[i]+'</div>'
						+'<div class="num2">'+year[i]+'</div>'
						+'</div>'
						+'<div class="li_middle">'
						+'<h4><a href="news_detail.html?id='+json[i].id+'" style="-moz-user-select:-moz-none;"  onselectstart="return false;">'+json[i].title+'</a></h4>'
						+'<p><a href="news_detail.html?id='+json[i].id+'" style="-moz-user-select:-moz-none;"  onselectstart="return false;"> '+json[i].des+'</a></p>'
						+'</div>'
						+'<div class="li_right">';
					if(json[i].pic!=''){
						newList+='<img src="'+json[i].pic+'">';
					}else {
						newList+='<img src="img/pic2.png">';
					}
					newList+='</div>'
						+'</li>';

				}
				$(".container_down>ul").append(newList);
				}
				
			}
		});
		$("body").animate({
			scrollTop:0
		},500)

	}



});