Ext.define('Note.view.Details', {
    extend: 'Ext.Container',
    xtype: 'detailsview',
    requires: [
        'Ext.TitleBar',
    ],
    
    config: {
    	styleHtmlContent: true,
    	scrollable: true,
    	
    	items:[
	    	{
	            docked: 'top',
	            xtype: 'titlebar',
	            title: '',
			    items: [
			    	{text: '傳回', align: 'left', ui: 'back'},
			    ]
			}
		]
    }
});
