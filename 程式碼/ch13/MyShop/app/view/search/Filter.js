Ext.define('MyShop.view.search.Filter', {
    extend: 'Ext.Panel',
    xtype: 'searchfilter',
    requires: [
    	'Ext.TitleBar',
    	'Ext.dataview.DataView',
    	'MyShop.view.search.dataview.FilterItem'	
    ],
    config: {
    	style: 'z-index:10;',
    	layout: 'fit',
    	items:[
    		{
    			xtype: 'titlebar',
    			docked: 'top',
    			items:[
    				{text: '傳回', ui: 'back', align: 'left'},
    				{text: '完成', align: 'right'}
    			]
    		},
    		{
    			xtype: 'dataview',
			    useComponents: true,
			    defaultType: 'filteritem',
    			store: 'Filters'
    		}
    	]
    }
    
});
