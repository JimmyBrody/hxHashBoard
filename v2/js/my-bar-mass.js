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
            data : getDateByDays2(10),
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
