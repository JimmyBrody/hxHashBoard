var myLineChartLunTai = echarts.init(document.getElementById('line-chart-luntai'),'shine');

optionLuntai = {
//  title : {
//      text: '未来一周气温变化',
//      subtext: '纯属虚构'
//  },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['合格率']
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
            data : ['20日','21日','22日','23日','24日','25日','26日','27日','28日','29日']
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value}'
            }
        }
    ],
    series : [
        {
            name:'最高气温',
            type:'line',
             data:[92.0, 94.9, 97.0, 83.2, 95.6, 96.7, 95.6, 92.2, 99.6,99.0],
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
                    


myLineChartLunTai.setOption(optionLuntai);
window.addEventListener("resize",function(){
    myLineChartLunTai.resize();
});

