$(function(){
	let transaction = new Vue({
		el : '.page-content',
		data : {
			shop : {
				transactionAmount : '556',
				orderCount : '778',
				successTransaction : '996',
				failTrasaction : '565',
				refundAmount : '123456'
			},
			orderCart : {}
		},
		created() {
			// 初始化页面获取商品
			let formDate = new FormData()
			let config = {
					headers: {
						'Content-Type':'multipart/form-data'
					}
				}
			formDate.append('bid', 4)
			axios.post('http://localhost:8082/getByBid',formDate,config).then((response)=>{
				this.$set(this, 'orderCart', response.data['data'])
					$(document).ready(function(){
								 
								  $(".t_Record").width($(window).width()-60);
								  //当文档窗口发生改变时 触发  
						    $(window).resize(function(){
								 $(".t_Record").width($(window).width()-60);
								});
						 });
							 
							 
						        require.config({
						            paths: {
						                echarts: './assets/dist'
						            }
						        });
						        require(
						            [
						                'echarts',
										'echarts/theme/macarons',
						                'echarts/chart/line',   // 按需加载所需图表，如需动态类型切换功能，别忘了同时加载相应图表
						                'echarts/chart/bar'
						            ],
						            function (ec,theme) {
						                var myChart = ec.init(document.getElementById('main'),theme);
						               option = {
						    title : {
						        text: '月购买订单交易记录',
						        subtext: '实时获取用户订单购买记录'
						    },
						    tooltip : {
						        trigger: 'axis'
						    },
						    legend: {
						        data:['所有订单','完成','失败','买断']
						    },
						    toolbox: {
						        show : true,
						        feature : {
						            mark : {show: true},
						            dataView : {show: true, readOnly: false},
						            magicType : {show: true, type: ['line', 'bar']},
						            restore : {show: true},
						            saveAsImage : {show: true}
						        }
						    },
						    calculable : true,
						    xAxis : [
						        {
						            type : 'category',
						            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
						        }
						    ],
						    yAxis : [
						        {
						            type : 'value'
						        }
						    ],
						    series : [
						        {
						            name:'所有订单',
						            type:'bar',
						            data:[120, 49, 70, 232, 256, 767, 1356, 1622, 326, 200,164, 133],
						            markPoint : {
						                data : [
						                    {type : 'max', name: '最大值'},
						                    {type : 'min', name: '最小值'}
						                ]
						            }           
						        },
						        {
						            name:'完成',
						            type:'bar',
						            data:[26, 59, 30, 84, 27, 77, 176, 1182, 487, 188, 60, 23],
						            markPoint : {
						                data : [
						                    {name : '年最高', value : 1182, xAxis: 7, yAxis: 1182, symbolSize:18},
						                    {name : '年最低', value : 23, xAxis: 11, yAxis: 3}
						                ]
						            },
						           
									
						        }
								, {
						            name:'失败',
						            type:'bar',
						            data:[26, 59, 60, 264, 287, 77, 176, 122, 247, 148, 60, 23],
						            markPoint : {
						                data : [
						                    {name : '年最高', value : 172, xAxis: 7, yAxis: 172, symbolSize:18},
						                    {name : '年最低', value : 23, xAxis: 11, yAxis: 3}
						                ]
						            },
						           
								}
								, {
						            name:'买断',
						            type:'bar',
						            data:[26, 59, 80, 24, 87, 70, 175, 1072, 48, 18, 69, 63],
						            markPoint : {
						                data : [
						                    {name : '年最高', value : 1072, xAxis: 7, yAxis: 1072, symbolSize:18},
						                    {name : '年最低', value : 22, xAxis: 11, yAxis: 3}
						                ]
						            },
						           
								}
						    ]
						};
						                    
						myChart.setOption(option);
					}
						        );
			})
		}
	})
})