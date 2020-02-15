Ext.define('FirstApp.view.Info', {
    extend: 'Ext.Container',
    xtype: 'infoview',
    requires: [
    ],
	    
    config: {

	    items: [
	     	{
	     		xtype: "button",
	     		text: "更新提示"
			},
	     	{
	     		xtype: "button",
	     		text: "清理"
			}
        ]
    }
});
