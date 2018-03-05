$('.M-box').pagination({
        callback:function(api){
            $('.now').text(api.getCurrent());
        }
    },function(api){
        $('.now').text(api.getCurrent());
});

// 设置案例详情页任何图片居中显示
var img = $('.content_img>img');
var width =img.width(),height = img.height();
var w = -(width/2),h=-(height/2);
img.css({
	'marginLeft':w + 'px',
	'marginTop':h + 'px'
});

console.log("%c ", "background: url(http://www.oraclebaycloud.com/img/logo.png) no-repeat center;padding-left:400px;padding-bottom: 200px;");