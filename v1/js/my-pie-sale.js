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
//              {
//                  value:1548,
//                  name: '幽州',
//                  label: {
//                      normal: {
//                          formatter: [
//                              '{title|{b}}{abg|}',
//                              '  {weatherHead|天气}{valueHead|天数}{rateHead|占比}',
//                              '{hr|}',
//                              '  {Sunny|}{value|202}{rate|55.3%}',
//                              '  {Cloudy|}{value|142}{rate|38.9%}',
//                              '  {Showers|}{value|21}{rate|5.8%}'
//                          ].join('\n'),
//                          backgroundColor: '#eee',
//                          borderColor: '#777',
//                          borderWidth: 1,
//                          borderRadius: 4,
//                          rich: {
//                              title: {
//                                  color: '#eee',
//                                  align: 'center'
//                              },
//                              abg: {
//                                  backgroundColor: '#333',
//                                  width: '100%',
//                                  align: 'right',
//                                  height: 25,
//                                  borderRadius: [4, 4, 0, 0]
//                              },
//                              Sunny: {
//                                  height: 30,
//                                  align: 'left',
//                                  backgroundColor: {
//                                      image: weatherIcons.Sunny
//                                  }
//                              },
//                              Cloudy: {
//                                  height: 30,
//                                  align: 'left',
//                                  backgroundColor: {
//                                      image: weatherIcons.Cloudy
//                                  }
//                              },
//                              Showers: {
//                                  height: 30,
//                                  align: 'left',
//                                  backgroundColor: {
//                                      image: weatherIcons.Showers
//                                  }
//                              },
//                              weatherHead: {
//                                  color: '#333',
//                                  height: 24,
//                                  align: 'left'
//                              },
//                              hr: {
//                                  borderColor: '#777',
//                                  width: '100%',
//                                  borderWidth: 0.5,
//                                  height: 0
//                              },
//                              value: {
//                                  width: 20,
//                                  padding: [0, 20, 0, 30],
//                                  align: 'left'
//                              },
//                              valueHead: {
//                                  color: '#333',
//                                  width: 20,
//                                  padding: [0, 20, 0, 30],
//                                  align: 'center'
//                              },
//                              rate: {
//                                  width: 40,
//                                  align: 'right',
//                                  padding: [0, 10, 0, 0]
//                              },
//                              rateHead: {
//                                  color: '#333',
//                                  width: 40,
//                                  align: 'center',
//                                  padding: [0, 10, 0, 0]
//                              }
//                          }
//                      }
//                  }
//              },
                {value:85, name: '已完成'},
                {value:5, name: '未完成'},
                {value:10, name: '取消'}
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
