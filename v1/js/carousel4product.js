$(function() {
	$(".div1").hide();
	$(".div1").eq(0).show();
})
/*window.onload = function() //用window的onload事件，窗体加载完毕的时候
{*/
var index = 0;
var timer = setInterval(function() {
	index = (index == 2) ? 0 : index + 1;
	//某个div显示，其他的隐藏
	$(".div1").hide();
	$(".div1").eq((index - 1)).show(); //
}, 2000);//轮播时间
/*}*/

$(function() {
	$(".div2").hide();
	$(".div2").eq(0).show();
})
/*window.onload = function() //用window的onload事件，窗体加载完毕的时候
{*/
var index = 0;
var timer = setInterval(function() {
	index = (index == 2) ? 0 : index + 1;
	//某个div显示，其他的隐藏
	$(".div2").hide();
	$(".div2").eq((index - 1)).show(); //
}, 2000);//轮播时间
/*}*/