

var myLineChartLunTaiBan = echarts.init(document.getElementById('pie-ban'),'shine');




optionPieBan = {
    title:{
        text:'当班硫化',
        top:240,
        right:80,
    },
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
            detail : {formatter:'{value}%',
                offsetCenter: [0, '60%']
            }, 
            axisLine: {            // 坐标轴线  
             lineStyle: {       // 属性lineStyle控制线条样式  
                 color: [[0.2, '#c23531'], [0.8, '#63869e'], [1, '#91c7ae']]
                        }  
            },  
            data:[{value: 99}]
        }
    ]
};

//clearInterval(timeTicket);
//timeTicket = setInterval(function (){
//  option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
//  myChart.setOption(option, true);
//},2000);
                    
                    


myLineChartLunTaiBan.setOption(optionPieBan);
window.addEventListener("resize",function(){
    myLineChartLunTaiBan.resize();
});

