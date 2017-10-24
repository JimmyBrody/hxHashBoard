$(function() {
	$(".div1").hide();
	$(".div1").eq(0).show();
})
/*window.onload = function() //用window的onload事件，窗体加载完毕的时候
{*/
//var index = 0;
//var timer = setInterval(function() {
//	index = (index == 2) ? 0 : index + 1;
	//某个div显示，其他的隐藏
//	$(".div1").hide();
//	$(".div1").eq((index - 1)).show(); //
//}, 500); //轮播时间
/*}*/

function a() {
	var index = 0;
	var timer = setInterval(function() {
		index = (index == 2) ? 0 : index + 1;
		//某个div显示，其他的隐藏
		$(".div1").hide();
		$(".div1").eq((index - 1)).show(); //
	}, 500); //轮播时间
}

function b() {
}

function ff() {
	var v = document.getElementById("my-bar-10d");
	v.onmouseover = a;
	v.onmouseout = b;
	
	var m = document.getElementById("my-bar-6y");
	m.onmouseover = a;
	m.onmouseout = b;
	
	var n = document.getElementById("my-bar-12m");
	n.onmouseover = a;
	n.onmouseout = b;
}

//$(function() {
//	$(".div2").hide();
//	$(".div2").eq(0).show();
//})
//window.onload = function() //用window的onload事件，窗体加载完毕的时候
//{
//	var index = 0;
//	var timer = setInterval(function() {
//		index = (index == 2) ? 0 : index + 1;
//		//某个div显示，其他的隐藏
//		$(".div2").hide();
//		$(".div2").eq((index - 1)).show(); //
//	}, 2000); //轮播时间
//}