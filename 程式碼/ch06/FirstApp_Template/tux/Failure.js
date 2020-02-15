Ext.define('Ext.tux.Failure',{
	singleton: true,
	
	Ajax: function(response,options){
		if(response.status==404){
			Ext.Msg.alert("錯誤訊息","錯誤的請求位址。");
		}else if (response.status==500) {
			Ext.Msg.alert("錯誤訊息","伺服器內定錯誤。");		
		}else{
			Ext.Msg.alert("錯誤訊息",Ext.String.format('錯誤程式碼：{0}<br\>響應：{1}', response.status ,response.responseText));
		}
	},

	Proxy: function(proxy, response, options, epots){
		if(response.status==200){
			var result=eval("(" + response.responseText + ")"),
				msg=result.msg || "發生錯誤";
			Ext.Msg.alert("訊息",msg);
		}else{
			Ext.tux.Failure.Ajax(response,options);
		}
	}
	
});
