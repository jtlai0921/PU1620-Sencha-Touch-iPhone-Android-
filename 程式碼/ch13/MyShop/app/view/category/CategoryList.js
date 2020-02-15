Ext.define('MyShop.view.category.CategoryList', {
    extend: 'Ext.dataview.DataView',
 	xtype : 'categorylistview',
   	requires: [
   		'MyShop.view.category.dataview.CategoryItem'
    ],

    config: {
	    useComponents: true,
	    defaultType: 'categoryitem',
    	style: 'background:#fff',
	    store: {
	        fields: [ 
	        	'categoryid', 'image', 'title','info', 'children', 'promotions'
	        ],
			proxy:{
				type: 'format',
				api:{
					read: "data/Category.asp",
				}
			}
	    }
    }

   
});
