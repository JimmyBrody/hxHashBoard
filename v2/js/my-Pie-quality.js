var myPieQuality = echarts.init(document.getElementById('my-pie-quality'),'shine');

optionPieQuality = {
//  title: {
//      text: '销售月订单完成率',
//      subtext: '数据',
//      left: 'center'
//  },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
 color:['#0fffff','#f0ffff','#ff00ff','#ffff0f','#fffff0'],
    legend: {
//         orient: 'vertical',
//         top: 'middle',
        bottom: 10,
        left: 'center',
        data: ['问题一', '问题二','问题三','问题四','问题五']
    },
    series : [
        {
            type: 'pie',
            radius : '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data:[
                {value:22, name: '问题一'},
                {value:33, name: '问题二'},
                {value:31, name: '问题三'},
                {value:16, name: '问题四'},
                {value:5, name: '问题五'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};


                    
                    


myPieQuality.setOption(optionPieQuality);
window.addEventListener("resize",function(){
    myPieQuality.resize();
});
