$(function(){
	let refund = new Vue({
		el : '#refund_style',
		data : {
			orders : [
				{
					orderId : '9875656232211111', // 订单编号
					productTitle : '【下拉入会享更高优惠】vivo iQOO U3新品5G大电池学生游戏手机官方旗舰店官网正品爱酷vivoiqoou3 vivou3', // 商品名称
					totalPrice : '985256.12', // 总价
					unitPrice : '56656', // 单天价格
					orderTime : '2017-11-8', //订单创建时间  
					expireTime : '2019-2-28', // 租界商品到期时间
					deposit : '200', // 商品类型
					refunAmount : '56656',
					status : '1', // 订单状态 买家申请退货
					refundInstructions : '成色与描述不符!'
				},
				{
					orderId : '9875656232211111', // 订单编号
					productTitle : '【下拉入会享更高优惠】vivo iQOO U3新品5G大电池学生游戏手机官方旗舰店官网正品爱酷vivoiqoou3 vivou3', // 商品名称
					totalPrice : '985256.12', // 总价
					unitPrice : '56656', // 单天价格
					orderTime : '2017-11-8', //订单创建时间  
					expireTime : '2019-2-28', // 租界商品到期时间
					deposit : '200', // 商品类型
					refunAmount : '56656',
					status : '2', // 订单状态 卖家同意退货等待对方发货
					refundInstructions : '成色与描述不符!'
				},
				{
					orderId : '9875656232211111', // 订单编号
					productTitle : '【下拉入会享更高优惠】vivo iQOO U3新品5G大电池学生游戏手机官方旗舰店官网正品爱酷vivoiqoou3 vivou3', // 商品名称
					totalPrice : '985256.12', // 总价
					unitPrice : '56656', // 单天价格
					orderTime : '2017-11-8', //订单创建时间  
					expireTime : '2019-2-28', // 租界商品到期时间
					deposit : '200', // 商品类型
					refunAmount : '56656',
					status : '3', // 订单状态 买家已发货
					refundInstructions : '成色与描述不符!'
				},
				{
					orderId : '9875656232211111', // 订单编号
					productTitle : '【下拉入会享更高优惠】vivo iQOO U3新品5G大电池学生游戏手机官方旗舰店官网正品爱酷vivoiqoou3 vivou3', // 商品名称
					totalPrice : '985256.12', // 总价
					unitPrice : '56656', // 单天价格
					orderTime : '2017-11-8', //订单创建时间  
					expireTime : '2019-2-28', // 租界商品到期时间
					deposit : '200', // 商品类型
					refunAmount : '56656',
					status : '4', // 订单状态 卖家确认已收货退款
					refundInstructions : '成色与描述不符!'
				},
				{
					orderId : '9875656232211111', // 订单编号
					productTitle : '【下拉入会享更高优惠】vivo iQOO U3新品5G大电池学生游戏手机官方旗舰店官网正品爱酷vivoiqoou3 vivou3', // 商品名称
					totalPrice : '985256.12', // 总价
					unitPrice : '56656', // 单天价格
					orderTime : '2017-11-8', //订单创建时间  
					expireTime : '2019-2-28', // 租界商品到期时间
					deposit : '200', // 商品类型
					refunAmount : '56656',
					status : '5', // 订单状态 买家已撤回退款
					refundInstructions : '成色与描述不符!'
				},
				{
					orderId : '9875656232211111', // 订单编号
					productTitle : '【下拉入会享更高优惠】vivo iQOO U3新品5G大电池学生游戏手机官方旗舰店官网正品爱酷vivoiqoou3 vivou3', // 商品名称
					totalPrice : '985256.12', // 总价
					unitPrice : '56656', // 单天价格
					orderTime : '2017-11-8', //订单创建时间  
					expireTime : '2019-2-28', // 租界商品到期时间
					deposit : '200', // 商品类型
					refunAmount : '56656',
					status : '6', // 订单状态 长时间未处理退货平台已介入
					refundInstructions : '成色与描述不符!'
				},
				{
					orderId : '9875656232211111', // 订单编号
					productTitle : '【下拉入会享更高优惠】vivo iQOO U3新品5G大电池学生游戏手机官方旗舰店官网正品爱酷vivoiqoou3 vivou3', // 商品名称
					totalPrice : '985256.12', // 总价
					unitPrice : '56656', // 单天价格
					orderTime : '2017-11-8', //订单创建时间  
					expireTime : '2019-2-28', // 租界商品到期时间
					deposit : '200', // 商品类型
					refunAmount : '56656',
					status : '7', // 订单状态 换货待处理
					refundInstructions : '成色与描述不符!'
				},
				{
					orderId : '20160705445622', // 订单编号
					productTitle : '小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y', // 商品名称
					totalPrice : '456.5', // 总价
					unitPrice : '14', // 单天价格
					orderTime : '2016-7-5', //订单创建时间  
					expireTime : '2016-7-8', // 租界商品到期时间
					deposit : '200', // 商品类型
					refunAmount : '0',
					status : '8', // 订单状态 买家撤销换货
					refundInstructions : '垃圾东西!'
				},
				{
					orderId : '20160705445622', // 订单编号
					productTitle : '小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y', // 商品名称
					totalPrice : '456.5', // 总价
					unitPrice : '14', // 单天价格
					orderTime : '2016-7-5', //订单创建时间  
					expireTime : '2016-7-8', // 租界商品到期时间
					deposit : '200', // 商品类型
					refunAmount : '0',
					status : '9', // 订单状态 平台已介入换货
					refundInstructions : '垃圾东西!'
				},
				{
					orderId : '20160705445622', // 订单编号
					productTitle : '小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y', // 商品名称
					totalPrice : '456.5', // 总价
					unitPrice : '14', // 单天价格
					orderTime : '2016-7-5', //订单创建时间  
					expireTime : '2016-7-8', // 租界商品到期时间
					deposit : '200', // 商品类型
					refunAmount : '0',
					status : '10', // 订单状态 平台已介入换货
					refundInstructions : '垃圾东西!'
				}
			]
		},
		methods : {
				// 改变订单状态
				changeStatus(id, newStatus){
						if(newStatus == '1'){
							layer.confirm('确认要启用吗？',function(index){
								$('#' + id).find(".td-manage").prepend('<a style="text-decoration:none" class="btn btn-xs btn-success" onClick="member_stop(this,id)" href="javascript:;" title="停用"><i class="icon-ok bigger-120"></i></a>');
								$('#' + id).find(".td-status").html('<span class="label label-success radius">已启用</span>');
								$('#' + id).find(".start").remove()
								layer.msg('已启用!',{icon: 6,time:1000});
							});
						}else{
							layer.confirm('确认要停用吗？',function(index){
								$('#' + id).find(".td-manage").prepend('<a style="text-decoration:none" class="btn btn-xs " onClick="member_start(this,id)" href="javascript:;" title="启用"><i class="icon-ok bigger-120"></i></a>');
								$('#' + id	).find(".td-status").html('<span class="label label-defaunt radius">已停用</span>');
								$('#' + id).find(".stop").remove()
								layer.msg('已停用!',{icon: 5,time:1000});
							});
						}
						// 与后端交互
						let formDate = new FormData()
						// formDate.append('id', id)
						// formDate.append('status', newStatus)
						let config = {
								headers: {
									'Content-Type':'multipart/form-data'
								}
							}
						// axios.post('',formDate,config).then((response)=>{
							
						// })
					},
				// 编辑商品
				editOrder(id){
					alert("编辑" + id)
				},
				// 删除单个订单
				deleteOrder(id){
					layer.confirm('确认要删除吗？',function(index){
						layer.msg('已删除!',{icon:1,time:1000});
						$('#' + id).remove()
						let orders = refund.orders
						for(let i in orders){
							// 删除对应商品
							if(orders[i].orderId === id){
								// let formDate = new FormData()
								// formDate.append('id', id)
								// formDate.append('status', newStatus)
								// let config = {
								// 		headers: {
								// 			'Content-Type':'multipart/form-data'
								// 		}
								// 	}
								// axios.post('',formDate,config).then((response)=>{
									
								// })
							}
						}
					})
				},
				// 批量删除订单
				batchDelete(){
					layer.confirm('确认要删除吗？',function(index){
						layer.msg('已删除!',{icon:1,time:1000});
						let selectedOrders = [];
						let orderInformations = $(".orderInformation")
						let len = orderInformations.length
						for(let i = 0; i < len; i++){
							if(orderInformations[i].children[0].children[0].children[0].checked){
								let id = orderInformations[i].children[1].innerText
								let orders = refund.orders
								for(let j in orders){
									// 删除对应商品
									if(orders[j].orderId === id){
										$('#' + id).remove()
										// let formDate = new FormData()
										// formDate.append('id', id)
										// formDate.append('status', newStatus)
										// let config = {
										// 		headers: {
										// 			'Content-Type':'multipart/form-data'
										// 		}
										// 	}
										// axios.post('',formDate,config).then((response)=>{
											
										// })
									}
								}
								selectedOrders.push(id)
							}
						}
					})
				}
			
		}
	})
})