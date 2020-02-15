Ext.define('FirstApp.view.Product', {
    extend: 'Ext.Container',
    xtype: 'product',
    requires: [
    ],

    
    config: {
	     items: [
        	{
        		xtype: "button",
        		text: "檢視產品",
        		centered: true
	        }
        ]
    }
});
