Ext.define('MyShop.view.category.Second', {
    extend: 'Ext.Container',
    xtype: 'categorysecond',
    requires: [
    	'Ext.TitleBar',
    	'MyShop.view.category.CategoryList',
    	'MyShop.view.ProductImageList'
    ],
    config: {
    	layout: 'fit',
    	items:[
    		{
    			xtype: 'titlebar',
    			docked: 'top',
		    	title: '',
		    	items:[
		    		{text: '傳回', ui: 'back'}
		    	]
    		},
    		{
    			xtype: 'promotionsitemview',
    			docked: 'top',
    			hidden:true
    		},
    		{
    			xtype: 'categorylistview',
    			id: 'secondcategorylistview'
    		}
    	]
    }
    
});
