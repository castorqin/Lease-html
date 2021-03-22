$(function(){
	let brandManage = new Vue({
		el : '#brand_style',
		data : {
			brands : [
				{
					id : '1234', // 品牌编号
					logo : 'products/logo/34.jpg', // 品牌logo
					brandName : '玉兰油OLAY', // 品牌名称
					area : '法国', // 所属地区
					introduction : '玉兰油OLAY，是宝洁公司全球著名的护肤品牌，OLAY以全球高科技护肤研发技术为后盾......', // 描述
					addTime : '2014-6-11 11:11:42', // 加入时间
					status : '1', // 状态
				},
				{
					id : '5678', // 品牌编号
					logo : 'products/logo/245.jpg', // 品牌logo
					brandName : '御泥坊', // 品牌名称
					area : '法国', // 所属地区
					introduction : '玉兰油OLAY，是宝洁公司全球著名的护肤品牌，OLAY以全球高科技护肤研发技术为后盾......', // 描述
					addTime : '2014-8-20 11:11:42', // 加入时间
					status : '1', // 状态
				},
				{
					id : '9981', // 品牌编号
					logo : 'products/logo/199.jpg', // 品牌logo
					brandName : '薇姿', // 品牌名称
					area : '法国', // 所属地区
					introduction : '玉兰油OLAY，是宝洁公司全球著名的护肤品牌，OLAY以全球高科技护肤研发技术为后盾......', // 描述
					addTime : '2014-6-11 11:11:42', // 加入时间
					status : '1', // 状态
				},
				{
					id : '7749', // 品牌编号
					logo : 'products/logo/152.jpg', // 品牌logo
					brandName : '丝塔芙', // 品牌名称
					area : '法国', // 所属地区
					introduction : '玉兰油OLAY，是宝洁公司全球著名的护肤品牌，OLAY以全球高科技护肤研发技术为后盾......', // 描述
					addTime : '2017-6-11 11:11:42', // 加入时间
					status : '0', // 状态
				}
			]
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
				// 改变品牌状态
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
				// 编辑品牌
				editBrand(id){
					alert("编辑" + id)
				},
				// 删除单个品牌
				deleteBrand(id){
					layer.confirm('确认要删除吗？',function(index){
						layer.msg('已删除!',{icon:1,time:1000});
						$('#' + id).remove()
						
					})
				},
				// 批量删除品牌
				batchDelete(){
					layer.confirm('确认要删除吗？',function(index){
					layer.msg('已删除!',{icon:1,time:1000});
					let selectedBrands = [];
					let brandInformations = $(".brandInformation")
					let len = brandInformations.length
					for(let i = 0; i < len; i++){
						if(brandInformations[i].children[0].children[0].children[0].checked){
							let id = brandInformations[i].children[1].innerText
							
							let brands = brandManage.brands
							for(let j in brands){
								// 删除对应商品
								if(brands[j].id === id){
									$('#' + id).remove()
									selectedBrands.push(id)
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
						}
					}
				})
				}
			
		}
	})
})