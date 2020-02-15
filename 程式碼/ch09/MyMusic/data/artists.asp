<%
	id = request("id")
	total=3
	if id=0 then total=30
%>
{
	
	success: true,
	total: <%=total%>,
	data:[
		<% if id=1 or id = 0 then %>
			{id: 1, name: '林子祥' , artistcategory_id: 1},
			{id: 2, name: '周華健' , artistcategory_id: 1},
			{id: 3, name: '劉歡' , artistcategory_id: 1},
		<%end if%>

		<% if id=2 or id = 0 then %>
			{id: 4, name: '王菲' , artistcategory_id: 2},
			{id: 5, name: '那英' , artistcategory_id: 2},
			{id: 6, name: '劉若英' , artistcategory_id: 2},
		<%end if%>

		<% if id=3 or id = 0 then %>
			{id: 7, name: '玖月奇蹟' , artistcategory_id: 3},
			{id: 8, name: '黑鴨子' , artistcategory_id: 3},
			{id: 9, name: '鳳凰傳奇' , artistcategory_id: 3},
		<%end if%>

		<% if id=4 or id = 0 then %>
			{id: 10, name: '貝多芬' , artistcategory_id: 4},
			{id: 11, name: '肖邦' , artistcategory_id: 4},
			{id: 12, name: '邁克爾·傑克遜' , artistcategory_id: 4},
		<%end if%>

		<% if id=5 or id = 0 then %>
			{id: 13, name: '席琳·迪翁' , artistcategory_id: 5},
			{id: 14, name: '布蘭妮' , artistcategory_id: 5},
			{id: 15, name: '麥當娜' , artistcategory_id: 5},
		<%end if%>

		<% if id=6 or id = 0 then %>
			{id: 16, name: '披頭士樂隊' , artistcategory_id: 6},
			{id: 17, name: '老鷹樂隊' , artistcategory_id: 6},
			{id: 18, name: '滾石樂隊' , artistcategory_id: 6},
		<%end if%>

		<% if id=7 or id = 0 then %>
			{id: 19, name: '安七炫' , artistcategory_id: 7},
			{id: 20, name: '安在旭' , artistcategory_id: 7},
			{id: 21, name: '黃永燦' , artistcategory_id: 7},
		<%end if%>

		<% if id=8 or id = 0 then %>
			{id: 22, name: '李秀英' , artistcategory_id: 8},
			{id: 23, name: '酒井法子' , artistcategory_id: 8},
			{id: 24, name: '張娜拉' , artistcategory_id: 8},
		<%end if%>

		<% if id=9 or id = 0 then %>
			{id: 25, name: '少女時代' , artistcategory_id: 9},
			{id: 26, name: 'EXILE' , artistcategory_id: 9},
			{id: 27, name: '東方神起' , artistcategory_id: 9},
		<%end if%>

		<% if id=10 or id = 0 then %>
			{id: 28, name: 'Academy of St. Martin-in-the-Fields' , artistcategory_id: 10},
			{id: 29, name: '阿拉坦其其格扎格達蘇榮' , artistcategory_id: 10},
			{id: 30, name: '阿廖' , artistcategory_id: 10},
		<%end if%>
		
	]
}