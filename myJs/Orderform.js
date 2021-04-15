$(function(){
	let orderForm = new Vue({
		el : '#cover_style',
		data : {
			orders : [],
			logistics : []
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
				this.$set(this, 'orders', response.data['data'])			
			})
		},
		methods : {
			// 改变订单状态
			changeStatus(id, newStatus, orderIndex){
				let formDate = new FormData()
				let config = {
						headers: {
							'Content-Type':'multipart/form-data'
						}
					}
				formDate.append('status', newStatus)
				formDate.append('orderId', id)
				axios.post('http://localhost:8082/updateGoods',formDate,config).then((response)=>{
					orderForm.orders[orderIndex].status = newStatus
				})
			},
			Delivery_stop(obj, orderId, orderIndex){
				layer.open({
			        type: 1,
			        title: '发货',
					maxmin: true, 
					shadeClose:false,
			        area : ['500px' , ''],
			        content:$('#Delivery_stop'),
					btn:['确定','取消'],
					yes: function(index, layero){		
					if($('#deliver').val()==""){
						layer.alert('快递号不能为空！',{
			               title: '提示框',				
						  icon:0,		
						  }) 
						
						}else{			
						 layer.confirm('提交成功！',function(index){
							 orderForm.deliver(orderId, orderIndex)
							layer.msg('已发货!',{icon: 6,time:1000});
						});  
						layer.close(index);    		  
					  }
					
					}
				})
			},
			deliver(orderId, orderIndex){
				let type = $("#deliver option:selected").val()
				let deliverId = $("#deliverId").val()
				let formDate = new FormData()
				let config = {
						headers: {
							'Content-Type':'multipart/form-data'
						}
					}
				formDate.append('number', deliverId)
				formDate.append('oid', orderId)
				formDate.append('type', type)
				axios.post('http://localhost:8082/addLogistics',formDate,config).then((response)=>{
					orderForm.changeStatus(orderId, 2, orderIndex)
				})
			},
			// 确认收货
			confirmReceipt(id, orderIndex){
				layer.confirm('确定已收货？',function(index){
					orderForm.changeStatus(id, 6, orderIndex)
					layer.msg('收货成功',{icon: 6,time:1000});
				});
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
					window.location.href = "../BackstageManager/order_detailed.html"
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