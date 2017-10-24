var myBarmass = echarts.init(document.getElementById('my-bar-mass'),'shine');



optionBarMass = {
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
            data : ['10月20日', '10月21日', '10月22日', '10月23日', '10月24日', '10月25日', '10月26日', '10月27日', '10月28日', '10月29日'],
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
            barWidth: '50%',
            data:[10, 52, 200, 334, 390, 330, 220, 550, 660 ,770]
        }
    ]
};
                    
                    


myBarmass.setOption(optionBarMass);
window.addEventListener("resize",function(){
    myBarmass.resize();
});
