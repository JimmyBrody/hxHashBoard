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
 // color:['#0fffff','#f0ffff','#ff00ff','#ffff0f','#fffff0'],
    legend: {
//         orient: 'vertical',
//         top: 'middle',
        bottom: 10,
        left: 'center'
    },
    series : [
        {
            type: 'pie',
            radius : '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data:[
                {value:21, name: '问题一'},
                {value:23, name: '问题二'},
                {value:25, name: '问题三'},
                {value:27, name: '问题四'},
                {value:29, name: '问题五'}
            ],
            // itemStyle:{ 
            // normal:{ 
            //       label:{ 
            //         show: true, 
            //         formatter: '{b} : {c} ({d}%)' 
            //       }, 
            //       labelLine :{show:true} 
            //     } 
            // } 
            roseType: 'radius',
            label: {
                normal: {
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.9)'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};


                    
                    


myPieQuality.setOption(optionPieQuality);
window.addEventListener("resize",function(){
    myPieQuality.resize();
});
