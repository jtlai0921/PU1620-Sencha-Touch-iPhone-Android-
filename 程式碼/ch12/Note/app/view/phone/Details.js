Ext.define('Note.view.phone.Details', {
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
