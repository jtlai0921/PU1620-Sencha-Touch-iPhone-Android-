<%
 id = Request("id")
%>
{
	success: true,
	msg: "",
	data:[
		{
			<%if id =1 then%>
				'productid': 1,
				'name': '最超值的滑鼠',
				'intro': '介紹文字',
				'services': '1年保修',
				'price': 50,
				'refsprice': 100,
				'promotions': '滿100減20',
				'stock':{
					'廣東' : 1,
					'北京' : 2
				},
				'bestrate': 100,
				'mediumrate': 10,
				'poorrate': 3,
				'comment': 100,
				'consulting': 2,
				'images': [
					'resources/images/products/1.png',
					'resources/images/products/2.png',
					'resources/images/products/3.png',
					'resources/images/products/4.png',
					'resources/images/products/5.png',
					'resources/images/products/6.png',
					'resources/images/products/7.png',
					'resources/images/products/8.png',
					'resources/images/products/9.png',
					'resources/images/products/10.png'
				]
			<%end if%>

			<%if id =2 then%>
				'productid': 2,
				'name': '最超值的寬帶路由器',
				'intro': '介紹文字',
				'services': '3年保修',
				'price': 199,
				'refsprice': 100,
				'promotions': '滿100減20',
				'stock':{
					'廣東' : 1,
					'北京' : 2
				},
				'bestrate': 100,
				'mediumrate': 10,
				'poorrate': 3,
				'comment': 100,
				'consulting': 2,
				'images': [
					'resources/images/products/1.png',
					'resources/images/products/2.png',
					'resources/images/products/3.png',
					'resources/images/products/4.png',
					'resources/images/products/5.png',
					'resources/images/products/6.png',
					'resources/images/products/7.png',
					'resources/images/products/8.png',
					'resources/images/products/9.png',
					'resources/images/products/10.png'
				]
			<%end if%>

		}
	]
}
