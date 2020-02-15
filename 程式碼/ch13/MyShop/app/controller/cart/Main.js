Ext.define('MyShop.controller.cart.Main', {
    extend: 'Ext.app.Controller',
    requires:[
    ],
    
    config: {
		refs: {
			main : 'cartmain',
			total: 'cartmain label',
			tabButton: 'button[iconCls=cart]'
		},

		control: {
			main : {
				show: 'onCartMainShow',
				initialize: 'onCartMainInitialize'
			}
		},
		
		views: [
		]
    
    },
    
    launch: function () {
    },
    
    onCartMainShow: function(){
    	this.onStoreRecordChange();
    },
    
    onCartMainInitialize: function(){
    	var store= Ext.getStore('Carts');
    	store.on({
    		refresh: 'onStoreRecordChange',
    		removerecords: 'onStoreRecordChange',
    		updaterecord: 'onStoreRecordChange',
    		scope: this
    	});
    },
    
    onStoreRecordChange: function(){
    	var me = this,
    		total = me.getTotal(),
    		store = Ext.getStore('Carts');
    	total.setHtml(Ext.String.format('總計：<em style="color:red;">￥{0}</em>',Ext.Number.toFixed(store.sum('subtotal'),2)));
    	me.getTabButton().setBadgeText(store.getCount());
    }

});
