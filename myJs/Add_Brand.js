$(function(){
	let addBrand = new Vue({
		el : '.left_add',
		methods : {
			selectLogo(){
				flag = $("#flag")
				var file = event.target.files[0]
				// 确认选择的文件是图片
				if(null != file && file.type.indexOf("image") == 0) {
				    var reader = new FileReader()
				    reader.readAsDataURL(file)
				    reader.onload = function() {
				        // 图片base64化
				        var newUrl = this.result
				        $("#brandLogoImg").prop("src", newUrl)
						if(flag.val() === '0'){
							flag.val('1')
						}
				    }
				}
			}
		}
	})
})