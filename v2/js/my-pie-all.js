var myLineChartLunTaiDay = echarts.init(document.getElementById('pie-all'),'shine');



optionPieAll = {
  tooltip : {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        show : false,
        feature : {
            mark : {show: true},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    series : [
        {
            name:'硫化产量完成率',
            type:'gauge',
            title : {
                textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
                    fontWeight: 'bolder',
                    fontSize: 16,
                    fontStyle: 'italic',
                    color: '#fff',
                    shadowColor : '#fff', //默认透明
                    shadowBlur: 10
                }
            },
            detail : {formatter:'{value}%'},
            axisLine: {            // 坐标轴线  
                     lineStyle: {       // 属性lineStyle控制线条样式  
                         color: [[0.2, '#c23531'], [0.8, '#63869e'], [1, '#91c7ae']]
                                }  
                            },     
            data:[{value: 99, name: '当日进仓'}]
        }
    ]
};
                    
                    


myLineChartLunTaiDay.setOption(optionPieAll);
window.addEventListener("resize",function(){
    myLineChartLunTaiDay.resize();
});

