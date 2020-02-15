<%
	id = request("id")
	cid = request("cid")
	total=0
	if id<=10 then total=3
	if cid = 200001 then total=3
%>
{
	
	success: true,
	total: <%=total%>,
	data:[
		<% if id=1 then %>
			{id: 1, artist: '林子祥' , aritst_id: 1 , name: '男兒當自強' , url: ''},
			{id: 2, artist: '林子祥' , aritst_id: 1 , name: '真的漢子' , url: ''},
			{id: 3, artist: '林子祥' , aritst_id: 1 , name: '最愛是誰' , url: ''},
		<%end if%>

		<% if id=2 then %>
			{id: 4, artist: '周華健' , aritst_id: 2 , name: '濃情化不開' , url: ''},
			{id: 5, artist: '周華健' , aritst_id: 2 , name: '愛相隨' , url: ''},
			{id: 6, artist: '周華健' , aritst_id: 2 , name: '讓我歡喜讓我憂' , url: ''},
		<%end if%>

		<% if id=3 then %>
			{id: 7, artist: '劉歡' , aritst_id: 3 , name: '少年壯志不言愁' , url: ''},
			{id: 8, artist: '劉歡' , aritst_id: 3 , name: '千萬次的問' , url: ''},
			{id: 9, artist: '劉歡' , aritst_id: 3 , name: '從頭再來' , url: ''},
		<%end if%>

		<% if id=4 then %>
			{id: 10, artist: '王菲' , aritst_id: 4 , name: '容易受傷的女人' , url: ''},
			{id: 11, artist: '王菲' , aritst_id: 4 , name: '約定' , url: ''},
			{id: 12, artist: '王菲' , aritst_id: 4 , name: '我願意' , url: ''},
		<%end if%>

		<% if id=5 then %>
			{id: 13, artist: '那英' , aritst_id: 5 , name: '一笑而過' , url: ''},
			{id: 14, artist: '那英' , aritst_id: 5 , name: '霧裡看花' , url: ''},
			{id: 15, artist: '那英' , aritst_id: 5 , name: '征服' , url: ''},
		<%end if%>

		<% if id=6 then %>
			{id: 16, artist: '劉若英' , aritst_id: 6 , name: '成全' , url: ''},
			{id: 17, artist: '劉若英' , aritst_id: 6 , name: '為愛癡狂' , url: ''},
			{id: 18, artist: '劉若英' , aritst_id: 6 , name: '一輩子孤單' , url: ''},
		<%end if%>

		<% if id=7 then %>
			{id: 19, artist: '玖月奇蹟' , aritst_id: 7 , name: '中國美' , url: ''},
			{id: 20, artist: '玖月奇蹟' , aritst_id: 7 , name: '中國范兒' , url: ''},
			{id: 21, artist: '玖月奇蹟' , aritst_id: 7 , name: '傾國傾城' , url: ''},
		<%end if%>

		<% if id=8 then %>
			{id: 22, artist: '黑鴨子' , aritst_id: 8 , name: '我們的田野' , url: ''},
			{id: 23, artist: '黑鴨子' , aritst_id: 8 , name: '半個月亮爬上來 ' , url: ''},
			{id: 24, artist: '黑鴨子' , aritst_id: 8 , name: '花兒為什麼這樣紅' , url: ''},
		<%end if%>

		<% if id=9 then %>
			{id: 25, artist: '鳳凰傳奇' , aritst_id: 9 , name: '最炫民族風' , url: ''},
			{id: 26, artist: '鳳凰傳奇' , aritst_id: 9 , name: '月亮之上' , url: ''},
			{id: 27, artist: '鳳凰傳奇' , aritst_id: 9 , name: '荷塘月色' , url: ''},
		<%end if%>

		<% if id=10 then %>
			{id: 28, artist: '貝多芬' , aritst_id: 10 , name: '命運交響曲' , url: 'mp3/命運交響曲.mp3'},
			{id: 29, artist: '貝多芬' , aritst_id: 10 , name: '獻給愛麗絲' , url: 'mp3/獻給愛麗絲.mp3'},
			{id: 30, artist: '貝多芬' , aritst_id: 10 , name: '歡樂頌' , url: 'mp3/歡樂頌.mp3'},
		<%end if%>

		<% if cid=200001 then %>
			{id: 31, artist: '周華健' , aritst_id: 2 , name: '風雨無阻' , url: ''},
			{id: 32, artist: '林憶蓮' , aritst_id: 11 , name: '愛上一個不回家的人' , url: ''},
			{id: 33, artist: '張雨生' , aritst_id: 12 , name: '大海' , url: ''},
		<%end if%>
		
	]
}