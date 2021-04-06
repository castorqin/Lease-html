$(function(){
	let brandManage = new Vue({
		el : '#brand_style',
		data : {
			brands : []
		},
		created() {
			// 初始化页面获取品牌
			let formDate = new FormData()
			let config = {
					headers: {
						'Content-Type':'multipart/form-data'
					}
				}
			formDate.append('businessId', 4)
			axios.post('http://localhost:8077/getbrand',formDate,config).then((response)=>{
				// alert(JSON.stringify(response.data['data']))
				this.$set(this, 'brands', response.data['data'])
							
			})
		},
		methods : {
			// 编辑品牌
			editBrand(bid, businessId){
				alert("编辑" + id)
			},
			// 删除单个品牌
			deleteBrand(bid){
				layer.confirm('确认要删除吗？',function(index){
					layer.msg('已删除!',{icon:1,time:1000});
					$('#' + bid).remove()
					let formDate = new FormData()
					let config = {
							headers: {
								'Content-Type':'multipart/form-data'
							}
						}
					formDate.append('bid', bid)
					axios.post('http://localhost:8077/delBrand',formDate,config).then((response)=>{
						// alert(JSON.stringify(response.data['data']))
						this.$set(this, 'brands', response.data['data'])
									
					})
				})
			},
			// 编辑品牌
			edit(index){
				sessionStorage.setItem('brand', JSON.stringify(this.brands[index]))
				window.location.href = "../BackstageManager/Edit_Brand.html"
			}
		}
	})
})