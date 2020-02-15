Ext.define("MyShop.model.Product", {
    extend: 'Ext.data.Model',
    requires:[
    	'Ext.tux.proxy.Format'
    ],
    
    config: {
		fields:[
			'productid',
			'name',
			'intro',
			'services',
			{name: 'price' , type: 'float' },
			{name: 'refsprice' , type: 'float' },
			'promotions',
			'stock',
			'bestrate',
			'mediumrate',
			'poorrate',
			'comment',
			'consulting',
			'images'
		],
		proxy:{
			type: 'format',
			api:{
				read: "data/product.asp"
			}
		}
    }
});
