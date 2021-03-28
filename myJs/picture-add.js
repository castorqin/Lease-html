$(function(){
	let pictureEdit = new Vue({
		el : '#add_picture',
		data : {
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
				pictures : [
					{pictureUrl : 'images/239961.jpg', pictureId : '557788'},
					{pictureUrl : 'images/239961.jpg', pictureId : '987654'},
					{pictureUrl : 'images/239961.jpg', pictureId : '456321'},
				] // 图片
			}
		},
		methods : {
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
				    }
				}
			},
			deletePicture(id){
				alert(id)
				$('#' + id).remove()
			}
		}
	})
})