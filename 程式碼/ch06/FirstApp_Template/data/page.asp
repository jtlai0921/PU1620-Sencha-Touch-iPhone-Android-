<%
	page = request("page")
%>
<%if page=2 then%>
{
	success: true,
	total: 31,
	data:[
		{text:11},{text:12},{text:13},{text:14},{text:15},{text:16},{text:17},{text:18},{text:19},{text:20}
	]
}
<%elseif page=3 then%>
{
	success: true,
	total: 31,
	data:[
		{text:21},{text:22},{text:23},{text:24},{text:25},{text:26},{text:27},{text:28},{text:29},{text:30}
	]
}
<%elseif page=4 then%>
{
	success: true,
	total: 31,
	data:[
		{text:41}
	]
}
<%else%>
{
	success: true,
	total: 31,
	data:[
		{text:1},{text:2},{text:3},{text:4},{text:5},{text:6},{text:7},{text:8},{text:9},{text:10}
	]
}
<%end if%>