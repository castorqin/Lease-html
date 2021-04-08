$(function(){
	if(sessionStorage.getItem('order') === null){
		history.go(-1)
	}
	
	let orderDetailed = new Vue({
		el : '#orderDetailed',
		data : {
			order : JSON.parse(sessionStorage.getItem('order')),
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