<%
	username = Request("username")
	password = Request("password")
%>
<% if username="user" and password="123456" then  %>
{
	success: true,
	msg: "",
	data:{
		hasLogin: true,
		username: '黃燈橋',
		balance: 100,
		points: 60
	}
}
<%else%>
{
	success: false,
	msg: "使用者名稱或密碼錯誤。",
	data:{}
}
<%end if%>
