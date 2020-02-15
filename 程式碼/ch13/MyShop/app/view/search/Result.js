Ext.define('MyShop.view.search.Result', {
    extend: 'Ext.Panel',
    xtype: 'searchresult',
    requires: [
    	'Ext.TitleBar',
    	'Ext.SegmentedButton',
    	'MyShop.view.ProductList'
    ],
    config: {
    	style: 'z-index:10;',
    	layout: 'fit',
    	key: null,
    	categoryId: null,
    	items:[
    		{
    			xtype: 'titlebar',
    			docked: 'top',
    			items:[
    				{text: '傳回', ui: 'back', align: 'left'},
    				{text: '篩選', align: 'right'}
    			]
    		},
    		{
    			xtype: 'segmentedbutton',
    			docked: 'top',
    			margin: 5,
    			defaults:{
    				ui: 'action',
    				flex:1
    			},
    			items: [
    				{text: '價格', iconAlign: 'right'},
    				{text: '銷量'},
    				{text: '關聯度' , pressed: true}
    			]
    		},
    		{
    			xtype: 'productlistview'
    		}
    	]
    }
    
});
