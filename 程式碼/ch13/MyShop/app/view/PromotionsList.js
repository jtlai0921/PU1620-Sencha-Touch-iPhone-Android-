Ext.define('MyShop.view.PromotionsList', {
    extend: 'Ext.dataview.DataView',
 	xtype : 'promotionslistview',
   	requires: [
   		'MyShop.view.dataview.PromotionsItem',
   		'Ext.plugin.ListPaging'
    ],

    config: {
	    useComponents: true,
	    defaultType: 'promotionsitem',
	    store: {
			autoLoad: true,
	        fields: [ 
	        	'promotionsid', 'image', 'title','color'
	        ],
			proxy:{
				type: 'format',
				api:{
					read: "data/Promotions.asp",
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
