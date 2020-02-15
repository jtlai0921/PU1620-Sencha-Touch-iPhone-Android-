<%@Language=VBScript  CodePage=65001%>
<%
	Response.Charset="utf-8"
	Session.CodePage=65001
	picture = request("data")
	xmlstr= "<data>" & picture& "</data>"
	
	Dim xml : Set xml=Server.CreateObject("MSXML2.DOMDocument")
	Dim stm : Set stm=Server.CreateObject("ADODB.Stream")
	xml.resolveExternals=False
	xml.loadxml(xmlstr)
	xml.documentElement.setAttribute "xmlns:dt","urn:schemas-microsoft-com:datatypes"
	xml.documentElement.dataType = "bin.base64"
	stm.Type=1
	stm.Open
	stm.Write xml.documentElement.nodeTypedValue
	stm.SaveToFile "C:\FirstApp\photo\1.jpg"
	stm.Close
	Set xml=Nothing
	Set stm=Nothing
%>

{
	success: true,
	data: 'photo/1.jpg'
}