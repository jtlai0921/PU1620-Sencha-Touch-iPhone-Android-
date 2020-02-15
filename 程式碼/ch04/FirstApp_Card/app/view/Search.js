Ext.define('FirstApp.view.Search', {
    extend: 'Ext.Container',
    xtype: 'search',
    requires: [
    ],

    
    config: {
	     items: [
	     	{
	     		xtype: "toolbar",
	     		docked: "top",
	     		items:[
		        	{
		        		xtype: "textfield",
		        		label:"搜尋："
		        		
			        },
			        {text: "搜尋"}
			    ]
			},
			{
				html: "搜尋",
				centered: true
			}
        ]
    }
});
