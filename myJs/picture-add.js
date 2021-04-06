$(function(){
	let pictureEdit = new Vue({
		el : '#add_picture',
		data : {
			brands : [],
			product : {
				productTitle : '红米k40 pro 512G 12G', // 商品详细名称
				shortTitle : '红米k40', // 商品简略名称
				id : '55667788', // 商品编号
				originPlace : '湖南/长沙', // 产地
				material : '塑料/金属', // 材质
				brand : 'Redmi', // 品牌
				productWeight : '100', // 商品重量
				deposit : '4999', // 押金
				rentPrice : '5999', // 租金
				quality : '九成新', // 成色
				category : '2',
				stock : '456',
				keyWords : '红米k40', // 关键字
				introduction : '此为最新款红米手机,搭载了xx处理器', // 介绍
			},
			pictures : [] // 图片
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
			// 选择图片
			selectPicture(id){
				// 上传图片获取url
				let file = document.getElementById("picture"+id+"File").files[0]
				// 确认选择的文件是图片
				if(null != file && file.type.indexOf("image") == 0) {
				   let formDate = new FormData()
				   let config = {
				   		headers: {
				   			'Content-Type':'multipart/form-data'
				   		}
				   	}
				   formDate.append('file', file)
				   axios.post('http://localhost:8077/addImg',formDate,config).then((response)=>{
				   	$("#picture"+id+"_img").prop("src", response.data['data'])
				   	let flag =  $("#flag"+id).val() === '1'
				   	if(flag){
				   		this.$set(this.pictures, id - 1, JSON.stringify(response.data['data']))
				   	}else{
				   		$("#flag"+id).val("1")
				   		this.pictures.push(JSON.stringify(response.data['data']))
				   	}
				   })
				}
			},
			// 保存新商品
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
						// alert(JSON.stringify(response.data['data']))
						let formDate1 = new FormData()
						formDate1.append('img', pictureEdit.pictures)
						formDate1.append('pid', response.data['data'])
						axios.post('http://localhost:8077/addProductImg',formDate1,config).then((response)=>{
							window.location.href = '../Products_List.html'
						})
					})
				}
			}	
		}
	})
})