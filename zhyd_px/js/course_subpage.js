$(function () {
    $('.left_nav li').click(function () {
        var index = $(this).index();
        $(this).addClass('bgBtn').siblings().removeClass('bgBtn');
        $(".left_content_show li").eq(index).addClass('showPage').siblings().removeClass('showPage');
    });
});