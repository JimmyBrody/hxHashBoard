var myLineChartJiaoliao = echarts.init(document.getElementById('my-line-chart-jiaoliao'), 'shine');

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
	return r;
}

optionJiaoliao12h = {
//  title : {
//      text: '未来一周气温变化',
//      subtext: '纯属虚构'
//  },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['胶料库存']
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLabel: {
                fontSize: 14
            },
            data : getHByDays(12),
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value}',
                fontSize: 14
            }
        }
    ],
    series : [
        {
            name:'胶料库存',
            type:'line',
             data:[1915, 1823, 1906, 1993, 2135, 2076, 1985, 1893, 1931,1820,1896,1943],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
    ]
};

optionJiaoliao10day = {
//  title : {
//      text: '未来一周气温变化',
//      subtext: '纯属虚构'
//  },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['胶料库存']
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLabel: {
                fontSize: 14
            },
            data : getDateByDays(10)
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value}',
                fontSize: 14
            }
        }
    ],
    series : [
        {
            name:'胶料库存',
            type:'line',
             data:[1915, 1823, 1906, 1993, 2135, 2076, 1985, 1893, 1931,1820,1896,1943],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
    ]
};

optionJiaoliao12m = {
	//  title : {
//      text: '未来一周气温变化',
//      subtext: '纯属虚构'
//  },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['胶料库存']
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            boundaryGap : false,
            axisLabel: {
                fontSize: 14
            },
            data : getMByNum(12)
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value}',
                fontSize: 14
            }
        }
    ],
    series : [
        {
            name:'胶料库存',
            type:'line',
             data:[1915, 1823, 1906, 1993, 2135, 2076, 1985, 1893, 1931,1820,1896,1943],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
            markLine : {
                data : [
                    {type : 'average', name: '平均值'}
                ]
            }
        }
    ]
};
var isCarousel = true;
var dindex = 1;
var options = [optionJiaoliao12h, optionJiaoliao10day, optionJiaoliao12m];
var h2s = ["胶料消耗曲线图(近12小时)", "胶料消耗曲线图(近10天)", "胶料消耗曲线图(近12月)"];
var mytimer = setInterval("diCarousel()", 5000); //1000为1秒钟

function diCarousel() {
	if(!isCarousel) {
		return;
	}
	myLineChartJiaoliao.clear();
	myLineChartJiaoliao.setOption(options[dindex]);
	document.getElementById('jiaoliaoH2').innerHTML = h2s[dindex];
	dindex++;
	if(dindex == 3) {
		dindex = 0;
	}
}

myLineChartJiaoliao.setOption(options[0]);
document.getElementById('jiaoliaoH2').innerHTML = h2s[0];

window.addEventListener("resize", function() {
	myLineChartJiaoliao.resize();
});