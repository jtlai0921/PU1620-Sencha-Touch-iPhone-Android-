<%
	actid = request("actid")
	promotionsid= request("promotionsid")
	hotid = request("hotid")
	key = request("key")
	categoryid = request("categoryid")
%>
{
	success: true,
	total: 30,
	data:[
		<%if actid = 1 then%>
			{productid: 1, image: 'resources/images/products/1.png' , title: '最超值鍵碟滑鼠', info: '滿減' , price: 68},
			{productid: 2, image: 'resources/images/products/2.png' , title: '最超值寬帶路由器', info: '', price: 100.5}
		<%end if%>

		<%if actid = 2 then%>
			{productid: 3, image: 'resources/images/products/3.png' , title: 'T恤', info: '滿減' , price: 32},
			{productid: 4, image: 'resources/images/products/4.png' , title: '西裝', info: '', price: 1050.5}
		<%end if%>

		<%if actid = 3 then%>
			{productid: 5, image: 'resources/images/products/5.png' , title: '電視機', info: '滿減' , price: 2000},
			{productid: 6, image: 'resources/images/products/6.png' , title: '洗衣機', info: '', price: 800}
		<%end if%>

		<%if actid = 4 then%>
			{productid: 7, image: 'resources/images/products/7.png' , title: '5寸大屏', info: '滿減' , price: 2100},
			{productid: 8, image: 'resources/images/products/8.png' , title: '超強四核', info: '', price: 3000}
		<%end if%>

		<%if actid = 5 then%>
			{productid: 9, image: 'resources/images/products/9.png' , title: '雷射印表機', info: '滿減' , price: 1680},
			{productid: 10, image: 'resources/images/products/10.png' , title: '噴墨印表機', info: '', price: 300.5}
		<%end if%>

		<%if promotionsid >0 then%>
			{productid: 1, image: 'resources/images/products2/1.png' , title: '最超值鍵碟滑鼠', info: '滿減' , price: 68},
			{productid: 2, image: 'resources/images/products2/2.png' , title: '最超值寬帶路由器', info: '', price: 100.5},
			{productid: 3, image: 'resources/images/products2/3.png' , title: '大1.5匹壁掛式家用冷暖無氟直流變頻空調陶瓷白僅3199元，店慶爆款，值得信賴！', info: '滿減' , price: 3199},
			{productid: 4, image: 'resources/images/products2/4.png' , title: '西裝', info: '', price: 100.5}
		<%end if%>

		<%if hotid >0 then%>
			{productid: 1, image: 'resources/images/products/1.png' , title: '產品1', price: 68},
			{productid: 2, image: 'resources/images/products/2.png' , title: '產品2', price: 100.5},
			{productid: 3, image: 'resources/images/products/3.png' , title: '產品3', price: 200},
			{productid: 4, image: 'resources/images/products/4.png' , title: '產品4', price: 300.5},
			{productid: 5, image: 'resources/images/products/5.png' , title: '產品5', price: 400},
			{productid: 6, image: 'resources/images/products/6.png' , title: '產品6', price: 500.5},
			{productid: 7, image: 'resources/images/products/7.png' , title: '產品7', price: 600},
			{productid: 8, image: 'resources/images/products/8.png' , title: '產品8', price: 700.5},
			{productid: 9, image: 'resources/images/products/9.png' , title: '產品9', price: 800},
			{productid: 10, image: 'resources/images/products/10.png' , title: '產品10', price: 900.5}
		<%end if%>

		<%if len(key) >0 or categoryid>0 then%>
			{productid: 1, image: 'resources/images/products/1.png' , title: '最超值鍵碟滑鼠', info: '滿減' , price: 68},
			{productid: 2, image: 'resources/images/products/2.png' , title: '最超值寬帶路由器', info: '', price: 100.5},
			{productid: 3, image: 'resources/images/products/3.png' , title: 'T恤', info: '滿減' , price: 32},
			{productid: 4, image: 'resources/images/products/4.png' , title: '西裝', info: '', price: 1050.5},
			{productid: 5, image: 'resources/images/products/5.png' , title: '電視機', info: '滿減' , price: 2000},
			{productid: 6, image: 'resources/images/products/6.png' , title: '洗衣機', info: '', price: 800},
			{productid: 7, image: 'resources/images/products/7.png' , title: '5寸大屏', info: '滿減' , price: 2100},
			{productid: 8, image: 'resources/images/products/8.png' , title: '超強四核', info: '', price: 3000},
			{productid: 9, image: 'resources/images/products/9.png' , title: '雷射印表機', info: '滿減' , price: 1680},
			{productid: 10, image: 'resources/images/products/10.png' , title: '噴墨印表機', info: '', price: 300.5}
		<%end if%>

	]
}

