Ext.define('Note.view.phone.Main', {	
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
    	'Ext.TitleBar',
    	'Ext.dataview.List',
    	'Note.view.phone.Details'    	
    ],
    config: {
    	layout: 'card',
    	items:[
    		{
	    		xtype: 'list',
		    	itemTpl: '{title}',
		    	store: 'Notes',
		    	onItemDisclosure: true,
		        items: {
		            docked: 'top',
		            xtype: 'titlebar',
		            title: '記事本',
				    items: [
				        {iconCls: 'add', align: 'right'}
				    ]
		        }
	    	}
	    ]
    }
});
