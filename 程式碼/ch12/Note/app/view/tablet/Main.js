Ext.define('Note.view.tablet.Main', {	
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
    	'Ext.TitleBar',
    	'Ext.dataview.List'
    ],
    config: {
    	layout: 'hbox',
    	items:[
    		{
	    		xtype: 'list',
		    	itemTpl: '{title}',
		    	store: 'Notes',
		    	width: 300,
		        items: {
		            docked: 'top',
		            xtype: 'titlebar',
		            title: '記事本',
		            items:[
		            	{iconCls: 'add' , align: 'left'},
		            	{iconCls: 'delete' , align: 'right'}
		            ]
		        }
	    	},
	    	{
		    	styleHtmlContent: true,
		    	scrollable: true,
		    	flex: 1,
		    	items:[
			    	{
			            docked: 'top',
			            xtype: 'titlebar',
			            title: '',
			            items:[
			            	{text: '編輯' , align: 'right'}
			            ]
					}
				]
	    		
	    	}
	    ]
    }
});
