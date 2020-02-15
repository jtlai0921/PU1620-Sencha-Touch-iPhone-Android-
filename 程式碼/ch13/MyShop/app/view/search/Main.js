Ext.define('MyShop.view.search.Main', {
    extend: 'Ext.Panel',
    xtype: 'searchmain',
    requires: [
    	'Ext.Toolbar'
    ],
    config: {
    	style: 'z-index:10;',
    	items:[
    		{
    			xtype: 'toolbar',
    			docked: 'top',
    			items:[
    				{text: '傳回', ui: 'back'},
    				{xtype:'textfield',flex:1},
    				{iconCls: 'search'}
    			]
    		},
    		{
    		}
    	]
    }
    
});
