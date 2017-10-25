//硫化成型产量
var myLineChartLiuhuachxing = echarts.init(document.getElementById('line-chart-Liuhuachxing'),'shine');

optionLiuhuachxing = {
//  title : {
//      text: '未来一周气温变化',
//      subtext: '纯属虚构'
//  },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['成型节拍','硫化节拍']
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
                fontSize: 16
            },
            data : getHByDays(10)
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel : {
                formatter: '{value}',
                fontSize: 16
            }
        }
    ],
    series : [
        {
            name:'成型节拍',
            type:'line',
            data:[50, 50, 50, 50, 50, 50, 50, 50, 50,50],
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
        },
        
        {
            name:'硫化节拍',
            type:'line',
             data:[25, 25, 25, 25, 25, 25, 25, 25, 25,25],
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

myLineChartLiuhuachxing.setOption(optionLiuhuachxing);
window.addEventListener("resize",function(){
    myLineChartLiuhuachxing.resize();
});

