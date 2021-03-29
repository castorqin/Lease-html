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
			},
			product : {
				productTitle : '红米k40 pro 512G 12G', // 商品详细名称
				shortTitle : '红米k40', // 商品简略名称
				id : '55667788', // 商品编号
				originPlace : '湖南/长沙', // 产地
				material : '塑料/金属', // 材质
				brand : 'Redmi', // 品牌
				productWeight : '100', // 商品重量
				deposit : '4999', // 押金
				rentPrice : '5999', // 租金
				quality : '九成新', // 成色
				category : '2',
				stock : '456',
				keyWords : '红米k40', // 关键字
				introduction : '此为最新款红米手机,搭载了xx处理器', // 介绍
				picture : 'images/239961.jpg'// 图片
			}
		},
		method : {
			
		}
	})
})