$(function(){
	let refund = new Vue({
		el : '#refund_style',
		data : {
			orders : [
				// {
				// 	orderId : '0', // 订单编号
				// 	productTitle : '【下拉入会享更高优惠】vivo iQOO U3新品5G大电池学生游戏手机官方旗舰店官网正品爱酷vivoiqoou3 vivou3', // 商品名称
				// 	totalPrice : '985256.12', // 总价
				// 	unitPrice : '56656', // 单天价格
				// 	orderTime : '2017-11-8', //订单创建时间  
				// 	expireTime : '2019-2-28', // 租界商品到期时间
				// 	deposit : '200', // 商品类型
				// 	refunAmount : '56656',
				// 	status : '10', // 订单状态 买家申请退货
				// 	refundInstructions : '成色与描述不符!'
				// },
				// {
				// 	orderId : '1', // 订单编号
				// 	productTitle : '【下拉入会享更高优惠】vivo iQOO U3新品5G大电池学生游戏手机官方旗舰店官网正品爱酷vivoiqoou3 vivou3', // 商品名称
				// 	totalPrice : '985256.12', // 总价
				// 	unitPrice : '56656', // 单天价格
				// 	orderTime : '2017-11-8', //订单创建时间  
				// 	expireTime : '2019-2-28', // 租界商品到期时间
				// 	deposit : '200', // 商品类型
				// 	refunAmount : '56656',
				// 	status : '11', // 订单状态 卖家同意退货等待对方发货
				// 	refundInstructions : '成色与描述不符!'
				// },
				// {
				// 	orderId : '2', // 订单编号
				// 	productTitle : '【下拉入会享更高优惠】vivo iQOO U3新品5G大电池学生游戏手机官方旗舰店官网正品爱酷vivoiqoou3 vivou3', // 商品名称
				// 	totalPrice : '985256.12', // 总价
				// 	unitPrice : '56656', // 单天价格
				// 	orderTime : '2017-11-8', //订单创建时间  
				// 	expireTime : '2019-2-28', // 租界商品到期时间
				// 	deposit : '200', // 商品类型
				// 	refunAmount : '56656',
				// 	status : '12', // 订单状态 买家已发货
				// 	refundInstructions : '成色与描述不符!'
				// },
				// {
				// 	orderId : '3', // 订单编号
				// 	productTitle : '【下拉入会享更高优惠】vivo iQOO U3新品5G大电池学生游戏手机官方旗舰店官网正品爱酷vivoiqoou3 vivou3', // 商品名称
				// 	totalPrice : '985256.12', // 总价
				// 	unitPrice : '56656', // 单天价格
				// 	orderTime : '2017-11-8', //订单创建时间  
				// 	expireTime : '2019-2-28', // 租界商品到期时间
				// 	deposit : '200', // 商品类型
				// 	refunAmount : '56656',
				// 	status : '14', // 订单状态 卖家确认已收货退款
				// 	refundInstructions : '成色与描述不符!'
				// },
				// {
				// 	orderId : '4', // 订单编号
				// 	productTitle : '【下拉入会享更高优惠】vivo iQOO U3新品5G大电池学生游戏手机官方旗舰店官网正品爱酷vivoiqoou3 vivou3', // 商品名称
				// 	totalPrice : '985256.12', // 总价
				// 	unitPrice : '56656', // 单天价格
				// 	orderTime : '2017-11-8', //订单创建时间  
				// 	expireTime : '2019-2-28', // 租界商品到期时间
				// 	deposit : '200', // 商品类型
				// 	refunAmount : '56656',
				// 	status : '15', // 订单状态 买家已撤回退款
				// 	refundInstructions : '成色与描述不符!'
				// },
				// {
				// 	orderId : '5', // 订单编号
				// 	productTitle : '【下拉入会享更高优惠】vivo iQOO U3新品5G大电池学生游戏手机官方旗舰店官网正品爱酷vivoiqoou3 vivou3', // 商品名称
				// 	totalPrice : '985256.12', // 总价
				// 	unitPrice : '56656', // 单天价格
				// 	orderTime : '2017-11-8', //订单创建时间  
				// 	expireTime : '2019-2-28', // 租界商品到期时间
				// 	deposit : '200', // 商品类型
				// 	refunAmount : '56656',
				// 	status : '16', // 订单状态 长时间未处理退货平台已介入
				// 	refundInstructions : '成色与描述不符!'
				// },
				// {
				// 	orderId : '6', // 订单编号
				// 	productTitle : '【下拉入会享更高优惠】vivo iQOO U3新品5G大电池学生游戏手机官方旗舰店官网正品爱酷vivoiqoou3 vivou3', // 商品名称
				// 	totalPrice : '985256.12', // 总价
				// 	unitPrice : '56656', // 单天价格
				// 	orderTime : '2017-11-8', //订单创建时间  
				// 	expireTime : '2019-2-28', // 租界商品到期时间
				// 	deposit : '200', // 商品类型
				// 	refunAmount : '56656',
				// 	status : '17', // 订单状态 换货待处理
				// 	refundInstructions : '成色与描述不符!'
				// },
				// {
				// 	orderId : '7', // 订单编号
				// 	productTitle : '小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y', // 商品名称
				// 	totalPrice : '456.5', // 总价
				// 	unitPrice : '14', // 单天价格
				// 	orderTime : '2016-7-5', //订单创建时间  
				// 	expireTime : '2016-7-8', // 租界商品到期时间
				// 	deposit : '200', // 商品类型
				// 	refunAmount : '0',
				// 	status : '18', // 订单状态 买家撤销换货
				// 	refundInstructions : '垃圾东西!'
				// },
				// {
				// 	orderId : '8', // 订单编号
				// 	productTitle : '小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y', // 商品名称
				// 	totalPrice : '456.5', // 总价
				// 	unitPrice : '14', // 单天价格
				// 	orderTime : '2016-7-5', //订单创建时间  
				// 	expireTime : '2016-7-8', // 租界商品到期时间
				// 	deposit : '200', // 商品类型
				// 	refunAmount : '0',
				// 	status : '19', // 订单状态 平台已介入换货
				// 	refundInstructions : '垃圾东西!'
				// },
				// {
				// 	orderId : '9', // 订单编号
				// 	productTitle : '小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y', // 商品名称
				// 	totalPrice : '456.5', // 总价
				// 	unitPrice : '14', // 单天价格
				// 	orderTime : '2016-7-5', //订单创建时间  
				// 	expireTime : '2016-7-8', // 租界商品到期时间
				// 	deposit : '200', // 商品类型
				// 	refunAmount : '0',
				// 	status : '20', // 订单状态 平台已介入换货
				// 	refundInstructions : '垃圾东西!'
				// },
				// {
				// 	orderId : '10', // 订单编号
				// 	productTitle : '小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y', // 商品名称
				// 	totalPrice : '456.5', // 总价
				// 	unitPrice : '14', // 单天价格
				// 	orderTime : '2016-7-5', //订单创建时间  
				// 	expireTime : '2016-7-8', // 租界商品到期时间
				// 	deposit : '200', // 商品类型
				// 	refunAmount : '0',
				// 	status : '21', // 订单状态 平台已介入换货
				// 	refundInstructions : '垃圾东西!'
				// },
				// {
				// 	orderId : '11', // 订单编号
				// 	productTitle : '小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y', // 商品名称
				// 	totalPrice : '456.5', // 总价
				// 	unitPrice : '14', // 单天价格
				// 	orderTime : '2016-7-5', //订单创建时间  
				// 	expireTime : '2016-7-8', // 租界商品到期时间
				// 	deposit : '200', // 商品类型
				// 	refunAmount : '0',
				// 	status : '22', // 订单状态 平台已介入换货
				// 	refundInstructions : '垃圾东西!'
				// },
				// {
				// 	orderId : '12', // 订单编号
				// 	productTitle : '小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y', // 商品名称
				// 	totalPrice : '456.5', // 总价
				// 	unitPrice : '14', // 单天价格
				// 	orderTime : '2016-7-5', //订单创建时间  
				// 	expireTime : '2016-7-8', // 租界商品到期时间
				// 	deposit : '200', // 商品类型
				// 	refunAmount : '0',
				// 	status : '23', // 订单状态 平台已介入换货
				// 	refundInstructions : '垃圾东西!'
				// }
			]
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
				// alert(JSON.stringify(response.data['data']))
				console.log(JSON.stringify(response.data['data']))
				this.$set(this, 'orders', response.data['data'])				
			})
		},
		methods : {
				// 改变订单状态
				changeStatus(id, newStatus, orderIndex){
						// alert(refund.orders[orderIndex].status)
						// 与后端交互
						let formDate = new FormData()
						formDate.append('status', newStatus)
						formDate.append('orderId', id)
						let config = {
								headers: {
									'Content-Type':'multipart/form-data'
								}
							}
						axios.post('http://localhost:8082/updateGoods',formDate,config).then((response)=>{
							refund.orders[orderIndex].status = newStatus
						})
					},
					// 同意退款
					agreeRefund(id, orderIndex){
						layer.confirm('同意退款吗？',function(index){
							refund.changeStatus(id, 11, orderIndex)
							layer.msg('操作成功,待对方退还!',{icon: 6,time:1000});
						});
					},
					// 拒绝退款
					refusedRefund(id, orderIndex){
						layer.confirm('确定拒绝退款吗？',function(index){
							refund.changeStatus(id, 15, orderIndex)
							layer.msg('已拒绝!',{icon: 5,time:1000});
						});
					},
					// 同意换货
					agreeChange(id, orderIndex){
						layer.confirm('同意换货吗？',function(index){
							refund.changeStatus(id, 11, orderIndex)
							layer.msg('操作成功,待对方退还!',{icon: 6,time:1000});
						});
					},
					// 拒绝换货
					refusedChange(id, orderIndex){
						layer.confirm('确定拒绝换货吗？',function(index){
							refund.changeStatus(id, 19, orderIndex)
							layer.msg('已拒绝!',{icon: 5,time:1000});
						});
					},
					// 确认收货
					confirmReceipt(id, orderIndex){
						let status
						if(refund.orders[orderIndex].status == 12){
							status = 14
						}
						else{
							status = 1
						}
							
						layer.confirm('确定已收货？',function(index){
							refund.changeStatus(id, status, orderIndex)
							layer.msg('收货成功',{icon: 6,time:1000});
						});
					},
					// 立即退款
					refundNow(id, orderIndex){
						layer.confirm('确定退款？',function(index){
							refund.changeStatus(id, 22, orderIndex)
							layer.msg('退款成功',{icon: 6,time:1000});
						});
					},
				// 删除单个订单
				deleteOrder(id, orderIndex){
					layer.confirm('确认要删除吗？',function(index){
						refund.changeStatus(id, 23, orderIndex)
						layer.msg('已删除!',{icon:1,time:1000});
					})
				},
				// 订单详情
				orderDetailed(orderId){
					let formDate = new FormData()
					let config = {
							headers: {
								'Content-Type':'multipart/form-data'
							}
						}
					formDate.append('bid', 4)
					formDate.append('id', orderId)
					axios.post('http://localhost:8082/getDetailByBId',formDate,config).then((response)=>{
						// alert(JSON.stringify(response.data['data']))
						sessionStorage.setItem('order', JSON.stringify(response.data['data']))	
						window.location.href = "../BackstageManager/Refund_detailed.html"
					})
				},
				getTime(timeStampt){
					 let date = new Date(timeStampt);
					 let y = date.getFullYear();
					 let m = date.getMonth() + 1;
					 m = m < 10 ? ('0' + m) : m;
					 let d = date.getDate();
					 d = d < 10 ? ('0' + d) : d;
					 let h = date.getHours();
					 h = h < 10 ? ('0' + h) : h;
					 let minute = date.getMinutes();
					 let second = date.getSeconds();
					 minute = minute < 10 ? ('0' + minute) : minute;
					 second = second < 10 ? ('0' + second) : second;
					 return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
				}
		}
	})
})