//胚胎库存
var myLinePeitai = echarts.init(document.getElementById('my-line-peitai'),'shine');

// optionPeitai = {
// //  title : {
// //      text: '未来一周气温变化',
// //      subtext: '纯属虚构'
// //  },
//     tooltip : {
//         trigger: 'axis'
//     },
//     legend: {
//         data:['胚胎库存']
//     },
//     toolbox: {
//         show : false,
//         feature : {
//             mark : {show: true},
//             dataView : {show: true, readOnly: false},
//             magicType : {show: true, type: ['line', 'bar']},
//             restore : {show: true},
//             saveAsImage : {show: true}
//         }
//     },
//     calculable : true,
//     xAxis : [
//         {
//             type : 'category',
//             boundaryGap : false,
//             axisLabel: {
//                 fontSize: 16
//             },
//             data : getHByDays(12)
//         }
//     ],
//     yAxis : [
//         {
//             type : 'value',
//             axisLabel : {
//                 formatter: '{value}',
//                 fontSize: 16
//             }
//         }
//     ],
//     series : [
//         {
//             name:'胚胎库存',
//             type:'line',
//              data:[1915, 1823, 1906, 1993, 2135, 2076, 1985, 1893, 1931,1820,1896,1943],
//             markPoint : {
//                 data : [
//                     {type : 'max', name: '最大值'},
//                     {type : 'min', name: '最小值'}
//                 ]
//             },
//             markLine : {
//                 data : [
//                     {type : 'average', name: '平均值'}
//                 ]
//             }
//         }
//     ]
// };
var data = [1915, 1823, 1906, 1993, 2135, 2076, 1985, 1893, 1931,1820,1896,1943];
optionPeitai = {
    // title: {
    //     text: '特性示例：渐变色 阴影 点击缩放',
    //     subtext: 'Feature Sample: Gradient Color, Shadow, Click Zoom'
    // },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    xAxis: {
        data : getHByDays(12),
        axisLabel: {
            inside: false,
            textStyle: {
                color: '#fff'
            },
            fontSize: 14
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true
        },
        z: 10
    },
    yAxis: {
        axisLine: {
            show: true
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            textStyle: {
                color: '#fff'
            },
            fontSize: 14
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        // { // For shadow
        //     type: 'bar',
        //     itemStyle: {
        //         normal: {color: 'rgba(0,0,0,0.05)'}
        //     },
        //     barGap:'-100%',
        //     barCategoryGap:'40%',
        //     data: data,
        //     animation: false
        // },
        {
            type: 'bar',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#fff'},
                            {offset: 0.55, color: '#c23531'},
                            {offset: 1, color: '#c23531'}
                        ]
                    )
                },
                emphasis: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#c23531'},
                            {offset: 0.7, color: '#c23531'},
                            {offset: 1, color: '#fff'}
                        ]
                    )
                }
            },
            data: data
        }
    ]
};

myLinePeitai.setOption(optionPeitai);
window.addEventListener("resize",function(){
    myLinePeitai.resize();
});
var zoomSize = 5;

