<%
	id = request("node")
%>
{
	success: true,
	data:[
		<%if id = "root" then%>
			{id: '100' , text: '流派'},
			{id: '200' , text: '年代'},
			{id: '300' , text: '風格'},
			{id: '400' , text: '地區或語系'}
		<%end if %>


		<%if id = "100" then%>
			{id: '100001' , text: '流行', leaf: true},
			{id: '100002' , text: '搖滾', leaf: true},
			{id: '100003' , text: '節奏', leaf: true},
			{id: '100004' , text: '布魯斯', leaf: true},
			{id: '100005' , text: '嘻哈', leaf: true},
			{id: '100006' , text: '鄉村', leaf: true},
			{id: '100007' , text: '民謠', leaf: true},
			{id: '100008' , text: '電子', leaf: true},
			{id: '100009' , text: '爵士', leaf: true}
		<%end if %>


		<%if id = "200" then%>
			{id: '200001' , text: '70', leaf: true},
			{id: '200002' , text: '80', leaf: true},
			{id: '200003' , text: '90', leaf: true},
			{id: '200004' , text: '紅歌', leaf: true},
			{id: '200005' , text: '古風', leaf: true},
			{id: '200006' , text: ' 流金歲月 ', leaf: true}
		<%end if %>

		<%if id = "300" then%>
			{id: '300001' , text: '小清新', leaf: true},
			{id: '300002' , text: '原生態', leaf: true},
			{id: '300003' , text: 'DJ', leaf: true},
			{id: '300004' , text: '舞曲', leaf: true},
			{id: '300005' , text: '輕音樂', leaf: true},
			{id: '300006' , text: ' 唯美 ', leaf: true},
			{id: '300007' , text: ' 純淨 ', leaf: true},
			{id: '300008' , text: ' 舒緩 ', leaf: true},
			{id: '300009' , text: ' 勁爆 ', leaf: true},
			{id: '300010' , text: ' 激情 ', leaf: true},
			{id: '300011' , text: ' 節奏 ', leaf: true},
			{id: '300012' , text: ' 熱鬧 ', leaf: true},
			{id: '300013' , text: ' 動感 ', leaf: true},
			{id: '300014' , text: ' 慢搖 ', leaf: true}
		<%end if %>

		<%if id = "400" then%>
			{id: '400001' , text: '英語', leaf: true},
			{id: '400002' , text: '港台', leaf: true},
			{id: '400003' , text: '日語', leaf: true},
			{id: '400004' , text: '韓語', leaf: true},
			{id: '400005' , text: '俄羅斯', leaf: true},
			{id: '400006' , text: ' 藏歌 ', leaf: true},
			{id: '400007' , text: ' 法語 ', leaf: true},
			{id: '400008' , text: ' 閩南語 ', leaf: true},
			{id: '400009' , text: ' 粵語 ', leaf: true},
			{id: '400010' , text: ' 拉丁 ', leaf: true},
			{id: '400011' , text: ' 民歌 ', leaf: true}
		<%end if %>
	]
}
                                    