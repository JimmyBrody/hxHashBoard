var myLineChartLiuhuachxingCl = echarts.init(document.getElementById('line-chart-LiuhuachxingCl'),'shine');

optionLiuhuachxingCl = {
//  title : {
//      text: '未来一周气温变化',
//      subtext: '纯属虚构'
//  },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['成型产量','硫化产量']
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
            data : ['周一','周二','周三','周四','周五','周六','周日']
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
            name:'成型产量',
            type:'line',
             data:[21000, 20000, 21000, 22000, 21000, 20000, 21000],
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
            name:'硫化产量',
            type:'line',
             data:[20000, 19000, 22000, 19000, 23000, 18000, 22000],
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

myLineChartLiuhuachxingCl.setOption(optionLiuhuachxingCl);
window.addEventListener("resize",function(){
    myLineChartLiuhuachxingCl.resize();
});