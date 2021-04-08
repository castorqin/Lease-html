$(function(){
	let orderForm = new Vue({
		el : '#cover_style',
		data : {
			orders : []
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
				this.$set(this, 'orders', response.data['data'])
							
			})
			// axios.post('http://localhost:8082/getLogistics',formDate,config).then((response)=>{
			// 	alert(JSON.stringify(response.data['data']))
			// 	// this.$set(this, 'orders', response.data['data'])
							
			// })
		},
		methods : {
			// 改变订单状态
			changeStatus(orderId, status){
				let formDate = new FormData()
				let config = {
						headers: {
							'Content-Type':'multipart/form-data'
						}
					}
				formDate.append('bid', 4)
				axios.post('http://localhost:8082/getByBid',formDate,config).then((response)=>{
					// alert(JSON.stringify(response.data['data']))
					this.$set(this, 'orders', response.data['data'])
								
				})
			},
			// 订单详情
			orderDetailed(index){
				sessionStorage.setItem('order', JSON.stringify(this.orders[index]))
				window.location.href = "../BackstageManager/order_detailed.html"
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