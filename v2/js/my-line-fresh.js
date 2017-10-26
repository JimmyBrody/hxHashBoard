var myLineChartFresh = echarts.init(document.getElementById('line-chart-fresh'), 'shine');


var data = [];
var now = new Date(2015,10,26);
var oneDay = 24 * 3600 * 1000;
var oneSecond = 24 *3600 * 1000;
var value = Math.random() * 1000;
function randomData3() {
    now = new Date(+now + oneSecond);
    value = value + Math.random() * 21 - 10;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
            Math.round(value)
        ]
    }
}
for (var i = 0; i < 1000; i++) {
    data.push(randomData3());
    // console.log(data);
    
}


option = {
    // title: {
    //     text: '动态数据 + 时间坐标轴'
    // },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() ) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        },
        // data:myDate
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        },
            },
    series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: data
    }]
};

setInterval(function () {

    for (var i = 0; i < 5; i++) {
        data.shift();
        data.push(randomData3());
    }
    myLineChartFresh.setOption(option,true);
}, 1000);
window.addEventListener("resize", function() {
    myLineChartFresh.resize();
});

function getHoursByDays(hours) {
    
    
    var r = Array.apply(null, new Array(hours))
        .map((v, i) => {
            d = new Date();
            d.setHours(d.getHours() - i - 1);
            return d.format("HH:00");
        });
        r = r.reverse();
        console.log(r);
    return r;
}