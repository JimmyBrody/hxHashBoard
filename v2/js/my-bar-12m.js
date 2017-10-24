var myBar12m = echarts.init(document.getElementById('my-bar-12m'),'shine');

optionBar12m = {
    color: ['#3398DB'],
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            axisLabel: {
                fontSize: 16
            },
            data : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value',
            axisLabel: {
                fontSize: 16
            },
        }
    ],
    series : [
        {
            name:'',
            type:'bar',
            barWidth: '60%',
            data:[1000,5200, 2000, 3340, 3900, 3300, 2200, 5500, 6600,7700, 9900, 1000]
        }
    ]
};
                    
                    


myBar12m.setOption(optionBar12m);
window.addEventListener("resize",function(){
    myBar12m.resize();
});
