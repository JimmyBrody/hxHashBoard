var myCharts1 = echarts.init(document.getElementById('pic1'));
var option1 = {
	backgroundColor: 'rgba(0,0,0,0)',

	title: {
		text: '销售月计划订单完成率',
		left: 'center',
		top: 10,
		textStyle: {
			color: 'rgba(0,0,0,0)'
		}
	},
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {d}%"
	},

	visualMap: {
		show: false,
		min: 500,
		max: 600,
		inRange: {
			colorLightness: [0, 1]
		}
	},
	series: [{
		name: '销售月计划订单完成率',
		type: 'pie',
		clockwise: 'true',
		startAngle: '0',
		radius: '60%',
		center: ['50%', '50%'],
		data: [{
				value: 70,
				name: '已完成',
				itemStyle: {
					normal: {
						color: 'rgb(255,192,0)',
						shadowBlur: '90',
						shadowColor: 'rgba(0,0,0,0.8)',
						shadowOffsetY: '30'
					}
				}
			},
			{
				value: 10,
				name: '未完成',
				itemStyle: {
					normal: {
						color: 'rgb(1,175,80)'
					}
				}
			},
			{
				value: 20,
				name: '取消',
				itemStyle: {
					normal: {
						color: 'rgb(122,48,158)'
					}
				}
			}

		],
	}]
};
//配色2
var option2 = {
	backgroundColor: 'rgba(0,0,0,0)',

	title: {
		/*text: '销售月计划订单完成率',
		left: 'center',
		top: 10,
		textStyle: {
			color: 'rgba(0,0,0,0)'
		}*/
	},
	tooltip: {
		trigger: 'item',
		formatter: "{a} <br/>{b} : {d}%"
	},

	visualMap: {
		show: false,
		min: 500,
		max: 600,
		inRange: {
			colorLightness: [0, 1]
		}
	},
	series: [{
		name: '销售月计划订单完成率',
		type: 'pie',
		clockwise: 'true',
		startAngle: '0',
		radius: '60%',
		center: ['50%', '50%'],
		data: [{
				value: 70,
				name: '已完成',
				itemStyle: {
					normal: {
						color: 'rgba(255,255,255,0.8)',
						shadowBlur: '90',
					}
				}
			},
			{
				value: 10,
				name: '未完成',
				itemStyle: {
					normal: {
						color: 'rgba(255,255,255,0.6)'
					}
				}
			},
			{
				value: 20,
				name: '取消',
				itemStyle: {
					normal: {
						color: 'rgba(255,255,255,0.4)'
					}
				}
			}

		],
	}]
};


var option3 = {
	title : {
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        x : 'center',
        y : 'bottom',
        data:['rose1','rose2','rose3']
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            dataView : {show: true, readOnly: false},
            magicType : {
                show: true, 
                type: ['pie', 'funnel']
            },
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    series : [
       
        {
            name:'销售月计划订单完成率',
            type:'pie',
            radius : [30, 110],
            center : ['55%', 200],
            roseType : 'area',
            x: '50%',               // for funnel
            max: 40,                // for funnel
            sort : 'ascending',     // for funnel
            data:[
                {value:90, name:'已完成'},
                {value:2, name:'未完成'},
                {value:8, name:'取消'}
            ]
        }
    ]
};
myCharts1.setOption(option1);
window.addEventListener("resize",function(){
    myCharts1.resize();
});