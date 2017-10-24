
var myBarChart = echarts.init(document.getElementById('my-bar-test'), 'shine');

Date.prototype.format = function(format) {
	if(!format) {
		format = this.fullPattern || "yyyy-MM-dd HH:mm:ss";
	}

	var o = {
		"M+": this.getMonth() + 1, // month
		"d+": this.getDate(), // day
		"H+": this.getHours(), // hour (24)
		"h+": this.getHours() % 12, // hour (12)
		"m+": this.getMinutes(), // minute
		"s+": this.getSeconds(), // second
		"q+": Math.floor((this.getMonth() + 3) / 3), // quarter
		"S": this.getMilliseconds()
	};

	if(/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "")
			.substr(4 - RegExp.$1.length));
	}

	for(var k in o) {
		if(new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		}
	}

	return format;
};

function getDateByDays(days) {
	
	
	var r = Array.apply(null, new Array(days))
		.map((v, i) => {
			d = new Date();
			d.setDate(d.getDate() - i);
			return d.format("M-dd");
		});
		r = r.reverse();
	return r;
}

function getHByDays(hours) {
	
	
	var r = Array.apply(null, new Array(hours))
		.map((v, i) => {
			d = new Date();
			d.setHours(d.getHours() - i);
			return d.format("dd-hh");
		});
		r = r.reverse();
		
	return r;
}

optionBar10Day = {
	color: ['#3398DB'],
	tooltip: {
		trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		axisLabel: {
			fontSize: 16
		},
		//data: ['10-20', '10-21', '10-22', '10-23', '10-24', '10-25', '10-26', '10月27日', '10月28日', '10月29日'],
		data: getDateByDays(10),
		axisTick: {
			alignWithLabel: true
		}
	}],
	yAxis: [{
		type: 'value',
		axisLabel: {
			fontSize: 16
		},
	}],
	series: [{
		name: '',
		type: 'bar',
		barWidth: '50%',
		data: [21300, 19000, 17030, 19960, 23541, 19860, 22300, 17690, 17450, 16020]
	}]
};

optionBar12m = {
	color: ['#3398DB'],
	tooltip: {
		trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		axisLabel: {
			fontSize: 16
		},
		data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
		//data: getHByDays(12),
		axisTick: {
			alignWithLabel: true
		}
	}],
	yAxis: [{
		type: 'value',
		axisLabel: {
			fontSize: 16
		},
	}],
	series: [{
		name: '',
		type: 'bar',
		barWidth: '60%',
		data: [1000, 5200, 2000, 3340, 3900, 3300, 2200, 5500, 6600, 7700, 9900, 1000]
	}]
};

optionBar6y = {
	color: ['#3398DB'],
	tooltip: {
		trigger: 'axis',
		axisPointer: { // 坐标轴指示器，坐标轴触发有效
			type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		}
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		axisLabel: {
			fontSize: 16
		},
		data: ['2011年', '2012年', '2013年', '2014年', '2015年', '2016年'],
		axisTick: {
			alignWithLabel: true
		}
	}],
	yAxis: [{
		type: 'value',
		axisLabel: {
			fontSize: 16
		},
	}],
	series: [{
		name: '',
		type: 'bar',
		barWidth: '35%',
		data: [10000, 52000, 20000, 33400, 39000, 33000]
	}]
};
var isCarousel = true;
var dindex = 1;
var options = [optionBar10Day,optionBar12m,optionBar6y];
var h2s = ["朝阳正品进仓产量(日-近10天)","朝阳正品进仓产量(月-连续12个月)","朝阳正品进仓产量(年-近6年)"];
var mytimer = setInterval("diCarousel()", 1000); //1000为1秒钟

function diCarousel(){
	if(!isCarousel){
		return;
	}
	myBarChart.clear();
	myBarChart.setOption(options[dindex]);
	document.getElementById('myh2').innerHTML = h2s[dindex];
	dindex++;
	if(dindex==3){
		dindex = 0;
	}
}

myBarChart.setOption(options[0]);
document.getElementById('myh2').innerHTML = h2s[0];

window.addEventListener("resize", function() {
	myBarChart.resize();
});