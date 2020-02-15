Ext.define('FirstApp.view.More', {
    extend: 'Ext.navigation.View',
    xtype: 'moreview',
    requires: [
    ],
	    
    config: {
 		defaultBackButtonText: "傳回",

	    items: [
	     	{
	     		title: "更多",
	     		items:[
			     	{
			     		xtype: "button",
			     		text: "設定"
					},
					{
			     		xtype: "button",
			     		text: "關於"
					}
				]
			}
        ]
    }
});
