Ext.define('MyShop.view.cart.List', {
    extend: 'Ext.dataview.DataView',
 	xtype : 'cartlistview',
   	requires: [
   		'MyShop.view.cart.dataview.Item'
    ],

    config: {
	    useComponents: true,
	    defaultType: 'cartitem',
	    store: 'Carts'
    }

   
});
