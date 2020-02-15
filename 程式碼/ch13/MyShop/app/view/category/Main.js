Ext.define('MyShop.view.category.Main', {
    extend: 'Ext.Container',
    xtype: 'categorymain',
    requires: [
    	'Ext.TitleBar',
    	'MyShop.view.category.CategoryList'
    ],
    config: {
    	layout:'fit',
    	items:[
    		{
    			xtype: 'titlebar',
    			docked: 'top',
		    	title: '全部分類別'
    		},
    		{
    			xtype: 'categorylistview',
    			id: 'firstcategorylistview'
    		}
    	]
    }
    
});
