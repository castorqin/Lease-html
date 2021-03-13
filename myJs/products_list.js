$(function(){
	let productList = new Vue({
		el : '#products_style',
		data : {
			products : [
				{
					id : '8848',
					subTittle : '小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y',
					originalPrice : '5467',
					nowPrice : '4525',
					stock : '123456',
					saleCount : '123456',
					addTime : '2014-6-11 11:11:42',
					status : '1'
				},
				{
					id : '9981',
					subTittle : '小米',
					originalPrice : '4456',
					nowPrice : '33232',
					stock : '55665',
					saleCount : '45454',
					addTime : '2022-6-11 11:11:42',
					status : '0'
				},
				{
					id : '7758',
					subTittle : 'IPone',
					originalPrice : '10086',
					nowPrice : '68001',
					stock : '158581',
					saleCount : '5',
					addTime : '2322-6-11 11:11:42',
					status : '1'
				}
			],
			len : 3
		},
		created() {
			// 初始化页面获取商品
			let formDate = new FormData()
			let config = {
					headers: {
						'Content-Type':'multipart/form-data'
					}
				}
			// axios.post('',formDate,config).then((response)=>{
			// 	this.$set(this, 'products', response.data['data'])
			// })
		},
		methods : {
			// 改变商品状态
			changeStatus(id, newStatus){
				alert(newStatus)
				// 与后端交互
				let formDate = new FormData()
				// formDate.append('id', id)
				// formDate.append('status', newStatus)
				let config = {
						headers: {
							'Content-Type':'multipart/form-data'
						}
					}
				axios.post('',formDate,config).then((response)=>{
					
				})
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
			// 批量删除商品
			batchDelete(){
				layer.confirm('确认要删除吗？',function(index){
					layer.msg('已删除!',{icon:1,time:1000});
					let selectedProducts = [];
					let productInformations = $(".productInformation")
					let len = productInformations.length
					for(let i = 0; i < len; i++){
						if(productInformations[i].children[0].children[0].children[0].checked){
							selectedProducts.push(this.products[i].id)
						}
					}
				})
			}
		}
	})
})