$(function(){
	let orderForm = new Vue({
		el : '#cover_style',
		data : {
			orders : [
				{
					orderId : '20160705445622', // 订单编号
					productTitle : '小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y', // 商品名称
					totalPrice : '456.5', // 总价
					unitPrice : '14', // 单天价格
					num : '2', // 租借天数
					orderTime : '2016-7-5', // 订单创建时间  
					expireTime : '2016-7-8', // 租界商品到期时间
					category : '食品', // 商品类型
					status : '0' // 订单状态 0代表商家代发货
				},
				{
					orderId : '44545646456466', // 订单编号
					productTitle : '24期免息【当天发货/送PD快充】Apple/苹果 iPhone 12 Pro Max 5G手机国行官方旗舰店5g/iPhone12pro max 13', // 商品名称
					totalPrice : '12334', // 总价
					unitPrice : '545', // 单天价格
					num : '789', // 租借天数
					orderTime : '2016-7-5', //订单创建时间  
					expireTime : '2016-10-10', // 租界商品到期时间
					category : '食品', // 商品类型
					status : '1' // 订单状态 1代表商家已发货
				},
				{
					orderId : '113255566565454', // 订单编号
					productTitle : '24期免息花呗分期付款0首付Huawei/华为 Mate 40 pro 5G手机全网通麒麟9000新款mate40pro官方旗舰店保时捷5g', // 商品名称
					totalPrice : '88950', // 总价
					unitPrice : '3387', // 单天价格
					num : '1212', // 租借天数
					orderTime : '2016-12-5', //订单创建时间  
					expireTime : '2018-9-8', // 租界商品到期时间
					category : '食品', // 商品类型
					status : '2' // 订单状态 2代表租家已收货
				},
				{
					orderId : '9875656232211111', // 订单编号
					productTitle : '【下拉入会享更高优惠】vivo iQOO U3新品5G大电池学生游戏手机官方旗舰店官网正品爱酷vivoiqoou3 vivou3', // 商品名称
					totalPrice : '985256.12', // 总价
					unitPrice : '56656', // 单天价格
					num : '9542', // 租借天数
					orderTime : '2017-11-8', //订单创建时间  
					expireTime : '2019-2-28', // 租界商品到期时间
					category : '食品', // 商品类型
					status : '3' // 订单状态 3代表租家待退还
				},
				{
					orderId : '1232156565666666', // 订单编号
					productTitle : '【享24期免息 优惠高达1000元 】一加OnePlus 8 Pro 5G旗舰手机2K+120Hz 柔性屏骁龙865官方旗舰店', // 商品名称
					totalPrice : '456.5', // 总价
					unitPrice : '14', // 单天价格
					num : '2', // 租借天数
					orderTime : '2016-7-5', //订单创建时间  
					expireTime : '2016-7-8', // 租界商品到期时间
					category : '食品', // 商品类型
					status : '4' // 订单状态 4代表租家已退还
				},
				{
					orderId : '20160705445622', // 订单编号
					productTitle : '小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y', // 商品名称
					totalPrice : '456.5', // 总价
					unitPrice : '14', // 单天价格
					num : '2', // 租借天数
					orderTime : '2016-7-5', //订单创建时间  
					expireTime : '2016-7-8', // 租界商品到期时间
					category : '食品', // 商品类型
					status : '5' // 订单状态 5代表商家已收货订单完成
				},
				{
					orderId : '20160705445622', // 订单编号
					productTitle : '【稀缺货源享12期免息】meizu魅族18骁龙888防抖5G手机2K屏幕小屏满血旗舰零广告智能拍照游戏官方旗舰', // 商品名称
					totalPrice : '456.5', // 总价
					unitPrice : '14', // 单天价格
					num : '2', // 租借天数
					orderTime : '2016-7-5', //订单创建时间  
					expireTime : '2016-7-8', // 租界商品到期时间
					category : '食品', // 商品类型
					status : '6' // 订单状态 6代表租家待评论
				},
				{
					orderId : '9875656232211111', // 订单编号
					productTitle : '【下拉入会享更高优惠】vivo iQOO U3新品5G大电池学生游戏手机官方旗舰店官网正品爱酷vivoiqoou3 vivou3', // 商品名称
					totalPrice : '985256.12', // 总价
					unitPrice : '56656', // 单天价格
					num : '9542', // 租借天数
					orderTime : '2017-11-8', //订单创建时间  
					expireTime : '2019-2-28', // 租界商品到期时间
					category : '食品', // 商品类型
					status : '7' // 订单状态 7代表租家已买断
				},
			]
		},
		methods : {
			
		}
	})
})