var myBar6y = echarts.init(document.getElementById('my-bar-6y'),'shine');

optionBar6y = {
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
            data : ['2011年', '2012年', '2013年', '2014年', '2015年', '2016年'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'',
            type:'bar',
            barWidth: '35%',
            data:[10000, 52000, 20000, 33400, 39000, 33000]
        }
    ]
};
                    
                    


myBar6y.setOption(optionBar6y);
window.addEventListener("resize",function(){
    myBar12m.resize();
});
