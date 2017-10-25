//胚胎库存
var myLinePeitai = echarts.init(document.getElementById('my-line-peitai'),'shine');

optionPeitai = {
//  title : {
//      text: '未来一周气温变化',
//      subtext: '纯属虚构'
//  },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['胚胎库存']
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
            data : getHByDays(12)
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
            name:'胚胎库存',
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

myLinePeitai.setOption(optionPeitai);
window.addEventListener("resize",function(){
    myLinePeitai.resize();
});

