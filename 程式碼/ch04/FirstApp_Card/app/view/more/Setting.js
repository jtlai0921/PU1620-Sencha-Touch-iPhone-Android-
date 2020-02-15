Ext.define('FirstApp.view.more.Setting', {
    extend: 'Ext.Container',
    xtype: 'settingview',
    requires: [
    	'FirstApp.view.more.Account',
    	'FirstApp.view.more.Theme'
    ],
    
    config: {
    	title: "設定",
	     items: [
	     	{
	     		xtype: "button",
	     		text: "賬號設定"
			},
			{
	     		xtype: "button",
	     		text: "主旨設定"
			}
        ]
    }
});
