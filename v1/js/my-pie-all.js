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
            data:[{value: 96, name: '当日进仓'}]
        }
    ]
};

//clearInterval(timeTicket);
//timeTicket = setInterval(function (){
//  option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
//  myChart.setOption(option, true);
//},2000);
                    
                    


myLineChartLunTaiDay.setOption(optionPieAll);
window.addEventListener("resize",function(){
    myLineChartLunTaiDay.resize();
});

