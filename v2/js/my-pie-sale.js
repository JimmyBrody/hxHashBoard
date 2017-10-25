var myPieSale = echarts.init(document.getElementById('my-pie-sale'),'shine');

optionPieSale = {
//  title: {
//      text: '销售月订单完成率',
//      subtext: '数据',
//      left: 'center'
//  },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
//  color:['#ffffff','#ffffff','#ffffff'],
    legend: {
//         orient: 'vertical',
//         top: 'middle',
        bottom: 10,
        left: 'center',
        data: ['已完成', '未完成','取消']
    },
    series : [
        {
            type: 'pie',
            radius : '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data:[
                {value:85, name: '已完成'},
                {value:15, name: '未完成'},
                {value:3, name: '取消'}
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


                    
                    


myPieSale.setOption(optionPieSale);
window.addEventListener("resize",function(){
    myPieSale.resize();
});
