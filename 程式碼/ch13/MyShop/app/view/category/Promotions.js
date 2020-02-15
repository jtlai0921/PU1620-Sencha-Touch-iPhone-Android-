Ext.define('MyShop.view.category.Promotions', {
    extend: 'Ext.Container',
    xtype: 'categorypromotionsview',
    requires: [
    	'Ext.TitleBar',
    	'MyShop.view.PromotionsList2'
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
    			xtype: 'promotionslist2view',
    		}
    	]
    }
    
});
