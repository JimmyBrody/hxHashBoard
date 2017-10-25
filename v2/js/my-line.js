var myLineChartLunTai = echarts.init(document.getElementById('line-chart-luntai'), 'shine');

optionLuntai = {
	//  title : {
	//      text: '未来一周气温变化',
	//      subtext: '纯属虚构'
	//  },

	tooltip: {
		trigger: 'axis'
	},
	legend: {
		data: ['公司', '老线', '全钢一']
	},
	toolbox: {
		show: false,
		feature: {
			mark: {
				show: true
			},
			dataView: {
				show: true,
				readOnly: false
			},
			magicType: {
				show: true,
				type: ['line', 'bar']
			},
			restore: {
				show: true
			},
			saveAsImage: {
				show: true
			}
		}
	},
	calculable: true,
	xAxis: [{
		type: 'category',
		boundaryGap: false,
		data: getDateByDays(22)
	}],
	yAxis: [{
		type: 'value',
		axisLabel: {
			formatter: '{value}'
		},
		max: 100,
		min: 95,
		maxInterval: 10
	}],
	series: [{
			name: '公司',
			type: 'line',
			data: [99.11, 99.22, 98.95, 98.94, 99.11, 98.94, 99.10, 99.03, 99.25, 99.34, 99.35, 99.51, 99.40, 99.54, 99.51, 99.48, 99.51, 99.36, 99.29, 99.27, 99.00, 99.23],
			markPoint: {
				data: [{
						type: 'max',
						name: '最大值'
					},
					{
						type: 'min',
						name: '最小值'
					}
				]
			},
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}]
			}
		},
		{
			name: '老线',
			type: 'line',
			data: [99.07, 98.95, 98.71, 98.74, 98.87, 98.80, 98.92, 98.85, 99.08, 99.26, 99.35, 99.48, 99.39, 99.43, 99.47, 99.54, 99.55, 99.34, 99.31, 99.28, 98.98, 99.13],
			markPoint: {
				data: [{
						type: 'max',
						name: '最大值'
					},
					{
						type: 'min',
						name: '最小值'
					}
				]
			},
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}]
			}
		},
		{
			name: '全钢一',
			type: 'line',
			data: [99.20, 99.69, 98.38, 98.28, 99.55, 98.21, 99.44, 99.35, 99.58, 99.49, 99.36, 99.57, 99.43, 99.74, 99.58, 99.35, 99.43, 99.40, 99.25, 99.26, 99.05, 99.43],
			markPoint: {
				data: [{
						type: 'max',
						name: '最大值'
					},
					{
						type: 'min',
						name: '最小值'
					}
				]
			},
			markLine: {
				data: [{
					type: 'average',
					name: '平均值'
				}]
			}
		}

	]
};

myLineChartLunTai.setOption(optionLuntai);
window.addEventListener("resize", function() {
	myLineChartLunTai.resize();
});