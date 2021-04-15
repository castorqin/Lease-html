$(function(){
	if(sessionStorage.getItem('brand') === null){
		history.go(-1)
	}
	
	let brandDetailed = new Vue({
		el : '#brandDetailed',
		data : {
			brand : JSON.parse(sessionStorage.getItem('brand')),
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