Ext.define('MyShop.view.HomeSecond', {
    extend: 'Ext.Container',
    xtype: 'homesecond',
    requires: [
    	'Ext.TitleBar',
    	'MyShop.view.ProductImageList',
    	'MyShop.view.PromotionsList2',
    	'Ext.plugin.ListPaging'
    ],
    config: {
		scrollable: {
		    direction: 'vertical',
		    directionLock: true
		},
		layout: 'vbox',
		items:[
			{
				xtype : 'titlebar',
				title: '服裝城',
				docked: 'top',
				ui:'pink'
			},
			{
				height:20,
				html: '<p style="text-align:center">熱賣商品</p>',				
			},
			{
				height: 160,
				xtype: 'productimagelistview'
			},
			{
				flex:1,
				xtype: 'promotionslist2view',
				style: 'background:#fff;'
			}
		]
    },
    
    initialize: function(){
    	var me =this,
    		productimagelistStore = null,
    		promotionslist2Store = null;
    	me.productimagelistview = me.down('productimagelistview');
    	me.promotionslist2view= me.down('promotionslist2view');
    	productimagelistStore = me.productimagelistview.getStore();
    	promotionslist2Store = me.promotionslist2view.getStore();
    	productimagelistStore.getProxy().setExtraParams({hotid:1});
    	promotionslist2Store.getProxy().setExtraParams({hotid:1});
    	productimagelistStore.load();
    	promotionslist2Store.load();
    }
});
