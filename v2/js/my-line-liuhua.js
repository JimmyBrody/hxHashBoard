//硫化成型产量
var myLineChartLiuhuachxing = echarts.init(document.getElementById('line-chart-Liuhuachxing'),'shine');

optionLiuhuachxing = {
 title : {
     text: '单位：分钟',
     textStyle:{
        fontSize: 14
     }
     
 },
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
                fontSize: 14
            },
            data : getHByDays(10)
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
            name:'成型节拍',
            type:'line',
            data:[4.7, 4.6, 4.5, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0,5.0],
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
             data:[47, 48, 45, 50, 46, 44, 48, 43, 49,47],
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

