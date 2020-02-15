Ext.define('MyShop.view.ProductList', {
    extend: 'Ext.dataview.DataView',
 	xtype : 'productlistview',
   	requires: [
   		'MyShop.view.dataview.ProductItem',
   		'Ext.plugin.ListPaging'
    ],

    config: {
	    useComponents: true,
	    defaultType: 'productitem',
	    store: {
	        fields: [ 
	        	'productid', 'image', 'title','info', 'price'
	        ],
			proxy:{
				type: 'format',
				api:{
					read: "data/Products.asp",
				}
			}
	    },
	    plugins: [
	        {
	            xclass: 'Ext.plugin.ListPaging',
	            autoPaging: true
	        }
	    ]
    }

   
});
