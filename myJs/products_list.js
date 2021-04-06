$(function(){
	let productList = new Vue({
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
			editProduct(id){
				alert("编辑" + id)
			},
			// 删除单个商品
			deleteProduct(id){
				layer.confirm('确认要删除吗？',function(index){
					layer.msg('已删除!',{icon:1,time:1000});
					$('#' + id).remove()
					let products = productList.products
					for(let i in products){
						// 删除对应商品
						if(products[i].id === id){
							delete products[i]
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
			// 编辑品牌
			edit(index){
				sessionStorage.setItem('product', JSON.stringify(this.products[index]))
				window.location.href = "../BackstageManager/picture-edit.html"
			}
		}
	})
})