<%
	categoryid = request("node")
%>
{
	success: true,
	data:[
			{categoryid: '1' , title: '服裝鞋帽', image: 'resources/images/products/1.png', info:'女裝/男裝/內衣', 
				promotions: {promotionsid: 1, image: 'resources/images/Promotions/1.png' , title: '服裝鞋帽促銷專場', color: '#a5db94'},
				children: [
					{categoryid: '1001' , title: '女裝', image: 'resources/images/products/1.png', info:'襯衫/針織衫', 
						children: [
							{categoryid: '1001001' , title: '襯衫'},
							{categoryid: '1001002' , title: '針織衫'}
						]
					},
					{categoryid: '1002' , title: '男裝', image: 'resources/images/products/1.png', info:'襯衫/針織衫', 
						children: [
							{categoryid: '1002001' , title: '襯衫'},
							{categoryid: '1002002' , title: '針織衫'}
						]
					}
				]
			},
			{categoryid: '2' , title: '手機', image: 'resources/images/products/2.png', info:'手機通信/電信業者/手機配件', 
				promotions : {promotionsid: 2, image: 'resources/images/Promotions/1.png' , title: '手機促銷專場', color: '#a5db94'},
				children: [
					{categoryid: '2001' , title: '手機通信', image: 'resources/images/products/1.png', info:'襯衫/針織衫', 
						children: [
							{categoryid: '2001001' , title: '手機'},
							{categoryid: '2001002' , title: '對講機'}
						]
					},
					{categoryid: '2002' , title: '電信業者', image: 'resources/images/products/1.png', info:'襯衫/針織衫', 
						children: [
							{categoryid: '2002001' , title: '購機送費'},
							{categoryid: '2002002' , title: '選號入網'}
						]
					}
				]
			},
			{categoryid: '3' , title: '數碼', image: 'resources/images/products/3.png', info:'攝影攝影/數碼配件/時尚影音',
				children: [
					{categoryid: '3001' , title: '攝影攝影', image: 'resources/images/products/1.png', info:'襯衫/針織衫', 
						children: [
							{categoryid: '3001001' , title: '數碼相機'},
							{categoryid: '3001002' , title: '單反相機'}
						]
					},
					{categoryid: '3002' , title: '數碼配件', image: 'resources/images/products/1.png', info:'襯衫/針織衫', 
						children: [
							{categoryid: '3002001' , title: '儲存卡'},
							{categoryid: '3002002' , title: '濾鏡'}
						]
					}
				]
			},
			{categoryid: '4' , title: '電腦、辦公', image: 'resources/images/products/4.png', info:'電腦整機/電腦配件/外接設備產品', 
				promotions: {promotionsid: 2, image: 'resources/images/Promotions/2.png' , title: '數碼促銷專場', color: '#7bbee7'},
				children: [
					{categoryid: '4001' , title: '電腦整機', image: 'resources/images/products/1.png', info:'襯衫/針織衫', 
						children: [
							{categoryid: '4001001' , title: '筆記型電腦'},
							{categoryid: '4001002' , title: '超級本'}
						]
					},
					{categoryid: '4002' , title: '電腦配件', image: 'resources/images/products/1.png', info:'襯衫/針織衫', 
						children: [
							{categoryid: '4002001' , title: 'CPU'},
							{categoryid: '4002002' , title: '主板'}
						]
					}
				]
				
			},
			{categoryid: '5' , title: '個護化妝', image: 'resources/images/products/5.png', info:'面部護理/身體護理/口腔護理',
				children: [
					{categoryid: '1001' , title: '面部護理', image: 'resources/images/products/1.png', info:'襯衫/針織衫', 
						children: [
							{categoryid: '1001001' , title: '潔面乳'},
							{categoryid: '1001002' , title: '爽膚水'}
						]
					},
					{categoryid: '1002' , title: '身體護理', image: 'resources/images/products/1.png', info:'襯衫/針織衫', 
						children: [
							{categoryid: '1002001' , title: '洗發護發'},
							{categoryid: '1002002' , title: '沐浴'}
						]
					}
				]
			},
			{categoryid: '6' , title: '圖書', image: 'resources/images/products/6.png', info:'英文原版書/小說/文學',
				children: [
					{categoryid: '6001' , title: '小說', image: 'resources/images/products/1.png', info:'襯衫/針織衫', 
						children: [
							{categoryid: '6001001' , title: '中國當代小說'},
							{categoryid: '6001002' , title: '針中國近現代小說'}
						]
					},
					{categoryid: '6002' , title: '文學', image: 'resources/images/products/1.png', info:'襯衫/針織衫', 
						children: [
							{categoryid: '6002001' , title: '中國文學'},
							{categoryid: '6002002' , title: '針外國文學'}
						]
					}
				]
			},
			{categoryid: '7' , title: '家用電器', image: 'resources/images/products/7.png', info:'大家電/生活電器/廚房電器',
				children: [
					{categoryid: '7001' , title: '大家電', image: 'resources/images/products/1.png', info:'襯衫/針織衫', 
						children: [
							{categoryid: '7001001' , title: '平板電視'},
							{categoryid: '7001002' , title: '空調'}
						]
					},
					{categoryid: '7002' , title: '生活電器', image: 'resources/images/products/1.png', info:'襯衫/針織衫', 
						children: [
							{categoryid: '7002001' , title: '淨化器'},
							{categoryid: '7002002' , title: '電風扇'}
						]
					}
				]
			},
			{categoryid: '8' , title: '母嬰', image: 'resources/images/products/8.png', info:'奶粉/營養輔食/尿褲濕巾',
				children: [
					{categoryid: '9001' , title: '奶粉', image: 'resources/images/products/1.png', info:'襯衫/針織衫', 
						children: [
							{categoryid: '9001001' , title: '品牌奶粉'},
							{categoryid: '9001002' , title: '媽媽奶粉'}
						]
					},
					{categoryid: '9002' , title: '營養輔食', image: 'resources/images/products/1.png', info:'襯衫/針織衫', 
						children: [
							{categoryid: '9002001' , title: '嬰幼營養'},
							{categoryid: '9002002' , title: '初乳'}
						]
					}
				]
			},
			{categoryid: '9' , title: '食品飲料、保健食品', image: 'resources/images/products/9.png', info:'進口食品/地方特產/休閒食品',
				children: [
					{categoryid: '9001' , title: '進口食品', image: 'resources/images/products/1.png', info:'襯衫/針織衫', 
						children: [
							{categoryid: '9001001' , title: '餅干蛋糕'},
							{categoryid: '9001002' , title: '休閒零食'}
						]
					},
					{categoryid: '9002' , title: '地方特產', image: 'resources/images/products/1.png', info:'襯衫/針織衫', 
						children: [
							{categoryid: '9002001' , title: '華北'},
							{categoryid: '9002002' , title: '西北'}
						]
					}
				]
			},
			{categoryid: '10' , title: '家居安裝', image: 'resources/images/products/10.png', info:'家紡/燈具/生活日用',
				children: [
					{categoryid: '10001' , title: '家紡', image: 'resources/images/products/1.png', info:'襯衫/針織衫', 
						children: [
							{categoryid: '10001001' , title: '被子'},
							{categoryid: '10001002' , title: '床品件套'}
						]
					},
					{categoryid: '10002' , title: '燈具', image: 'resources/images/products/1.png', info:'襯衫/針織衫', 
						children: [
							{categoryid: '10002001' , title: '台燈'},
							{categoryid: '10002002' , title: '節能燈'}
						]
					}
				]
			}
	]

}
                                    