let productList
$(function(){
	productList = new Vue({
		el : '#products_style',
		data : {
			products : []
		},
		created() {
			// 初始化页面获取商品
			let formDate = new FormData()
			let config = {
					headers: {
						'Content-Type':'multipart/form-data'
					}
				}
			formDate.append('businessId', 4)
			formDate.append('pageIndex', 1)
			formDate.append('num', 4)
			axios.post('http://localhost:8077/getProduct',formDate,config).then((response)=>{
				// alert(JSON.stringify(response.data['data']))
				this.$set(this, 'products', response.data['data'])
			})
		},
		methods : {
			// 改变商品状态
			changeStatus(id, newStatus, productIndex){
				// 与后端交互
				let formDate = new FormData()
				formDate.append('pid', id)
				formDate.append('bid', 4)
				formDate.append('status', newStatus)
				let config = {
						headers: {
							'Content-Type':'multipart/form-data'
						}
					}
				axios.post('http://localhost:8077/modifyProduct',formDate,config).then((response)=>{
					productList.products[productIndex].status = newStatus
				})
			},
			// 停用商品
			start(id, productIndex){
				layer.confirm('确认要启用吗？',function(index){
					productList.changeStatus(id, 1, productIndex)
					layer.msg('已启用!',{icon: 6,time:1000});
				});
			},
			// 启用商品
			stop(id, productIndex){
				layer.confirm('确认要停用吗？',function(index){
					productList.changeStatus(id, 0, productIndex)
					layer.msg('已停用!',{icon: 5,time:1000});
				});
			},
			// 删除商品
			deleteProduct(id, productIndex){
				layer.confirm('确认要删除吗？',function(index){
					productList.changeStatus(id, -1, productIndex)
					layer.msg('已删除!',{icon:1,time:1000});
				});
			},
			// 编辑商品
			edit(index){
				alert(JSON.stringify(this.products[index]))
				sessionStorage.setItem('product', JSON.stringify(this.products[index]))
				window.location.href = "../BackstageManager/picture-edit.html"
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