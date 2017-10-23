var myLineChartLunTaiDay = echarts.init(document.getElementById('pie-day'),'shine');

optionPieDay = {
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
//          detail : {
//              backgroundColor: 'rgba(30,144,255,0.8)',
//              borderWidth: 1,
//              borderColor: '#fff',
//              shadowColor : '#fff', //默认透明
//              shadowBlur: 5,
//              offsetCenter: [0, '50%'],       // x, y，单位px
//              textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
//                  fontWeight: 'bolder',
//                  color: '#fff'
//              }
//          },
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
            detail : {
            	formatter:'{value}%'
            	
            },
            data:[{value: 98, name: '当日硫化'}]
        }
    ]
};

//clearInterval(timeTicket);
//timeTicket = setInterval(function (){
//  option.series[0].data[0].value = (Math.random()*100).toFixed(2) - 0;
//  myChart.setOption(option, true);
//},2000);
                    
                    


myLineChartLunTaiDay.setOption(optionPieDay);
window.addEventListener("resize",function(){
    myLineChartLunTaiDay.resize();
});

