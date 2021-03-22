$(function(){
	let brandDetailed = new Vue({
		el : '#brandDetailed',
		data : {
			brand : {
				brandName : '玉兰油OLAY',
				area : '法国',
				id : 'HG7755',
				productNum : '3456',
				addTime : '2016-6-21 34：23',
				status : '0',
				introduction : '玉兰油OLAY，是宝洁公司全球著名的护肤品牌，是中国区最大护肤品牌，在大陆已持续十年呈两位数增长。OLAY以全球高科技护肤研发技术为后盾，在深入了解中国女性对护肤和美的需要的基础上，不断扩大产品范围，目前已经涵盖了护肤和沐浴系列，真正帮助女性全面周到地呵护自己的肌肤。玉兰油全球销售额近十亿美金，成为世界上最大、最著名的护肤品牌之一。卓越的护肤功效获得世界爱美女性肯定，迅速畅销150多个国家。'
			},
			products : [
				{
					id : '8848',// 编号
					subTittle : '小米 Max 全网通 高配版 3GB内存 64GB ROM 金色 移动联通电信4G手机Y',// 名称
					deposit : '5467',// 押金
					rentPrice : '4525', // 租价
					stock : '123456', // 库存
					saleCount : '123456', // 销量
					addTime : '2014-6-11 11:11:42', // 发布时间
					status : '1' // 状态
				},
				{
					id : '9981',
					subTittle : '小米',
					deposit : '4456',
					rentPrice : '33232',
					stock : '55665',
					saleCount : '45454',
					addTime : '2022-6-11 11:11:42',
					status : '0'
				},
				{
					id : '7758',
					subTittle : 'IPone',
					deposit : '10086',
					rentPrice : '68001',
					stock : '158581',
					saleCount : '5',
					addTime : '2322-6-11 11:11:42',
					status : '1'
				}
			]
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
						let products = brandDetailed.products
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
								let id = productInformations[i].children[1].innerText
								let products = brandDetailed.products
								for(let j in products){
									// 删除对应商品
									if(products[j].id === id){
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
								selectedProducts.push(id)
							}
						}
					})
				}
			
		}
	})
})