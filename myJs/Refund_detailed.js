$(function(){
	let refundDetailed = new Vue({
		el : '.Refund_detailed',
		data : {
			refundOrder : {
				orderId : 'NJHDXJ201509-001', // 订单编号
				refundName : 'doinb', // 退款人姓名
				refundPhone : '16543432343', // 退款人电话
				postalCode : '411423', // 收件地邮编
				receiveAddress : '湖南省张家界市永定区吉首大学张家界校区图书馆', // 收件地址
				payment : '在线支付', // 支付方式
				status : '0', // 订单状态
				orderTime : '', // 订单创建时间
				expireTime : '', // 订单过期时间
				deposit : '223', // 定金
				unitPrice : '345', // 单天价格
				num : '60', // 租借天数
				courier : '圆通快递' // 快递
			}
		},
		method : {
			
		}
	})
})