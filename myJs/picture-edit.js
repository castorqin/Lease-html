$(function(){
	if(sessionStorage.getItem('product') === null){
		history.go(-1)
	}
	
	let pictureEdit = new Vue({
		el : '#add_picture',
		data : {
			product : JSON.parse(sessionStorage.getItem('product')),
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
			// alert(this.product.imgList[0])
		},
		methods : {
			// 选择图片
			selectPicture(id){
				flag = $("#flag"+id)
				var file = event.target.files[0];
				// 确认选择的文件是图片
				if(null != file && file.type.indexOf("image") == 0) {
				    var reader = new FileReader()
				    reader.readAsDataURL(file)
				    reader.onload = function() {
				        // 图片base64化
				        var newUrl = this.result
				        $("#picture"+id+"_img").prop("src", newUrl)
						if(flag.val() === "0"){
							flag.val("1")
						}
						
						// 上传图片获取url
						// let formDate = new FormData()
						// let config = {
						// 		headers: {
						// 			'Content-Type':'multipart/form-data'
						// 		}
						// 	}
						// formDate.append('file', document.getElementById("picture"+id+"File").files[0])
						// axios.post('http://localhost:8077/addImg',formDate,config).then((response)=>{
						// 	alert(JSON.stringify(response.data['data']))
						// 	this.$set(this, 'brands', response.data['data'])
						// })
				    }
				}
			},
			deletePicture(id){
				alert(id)
				$('#' + id).remove()
			},
			// 更新商品信息
			saveProduct(){
				let flag1 = ($("#flag1").val() != '0' && $("#flag2").val() != '0' && $("#flag3").val() != '0' && $("#flag4").val() != '0' && $("#flag5").val() != '0')
				if(!flag1){
					swal("","请上传所有图片","error")
				}else{
					// 商品名称
					let subTittle = $("#subTittle")
					// 类别
					let category = $("#category option:selected")
					// 品牌
					let brand = $("#brand option:selected")
					// 成色
					let quality = $("#quality option:selected")
					// 材质
					let material = $("#material")
					// 重量
					let weight = $("#weight")
					// 库存
					let stock = $("#stock")
					// 买断
					let buyPrice = $("#buyPrice")
					// 押金
					let deposit = $("#deposit")
					// 租价
					let rent = $("#rent")
					// 关键词
					let keyWords = $("#keyWords")
					// 产品介绍
					let productDescribe = $("#productDescribe")
					
					let formDate = new FormData()
					let config = {
							headers: {
								'Content-Type':'multipart/form-data'
							}
						}
					formDate.append('subTittle', subTittle.val())
					formDate.append('category', category.val())
					formDate.append('brand', brand.val())
					formDate.append('quality', quality.val())
					formDate.append('material', material.val())
					formDate.append('weight', weight.val())
					formDate.append('stock', stock.val())
					formDate.append('buyPrice', buyPrice.val())
					formDate.append('deposit', deposit.val())
					formDate.append('rent', rent.val())
					formDate.append('keyWords', keyWords.val())
					formDate.append('productDescribe', productDescribe.val())
					formDate.append('businessId', 4)
					axios.post('http://localhost:8077/addProduct',formDate,config).then((response)=>{
						alert(JSON.stringify(response.data['data']))
						let formDate1 = new FormData()
						formDate.append('img', response.data['data'])
						formDate.append('pid', pictureEdit.pictures)
						// axios.post('http://localhost:8077/addProductImg',formDate1,config)
					})
				}
			}	
		}
	})
})