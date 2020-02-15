Ext.define('MyShop.model.Cart', {
    extend: 'Ext.data.Model',
    config: {
    	identifier: 'uuid',
        fields: [
        	'productid' , 'productname', 'price' , 
        	'quantity' , 'subtotal'
        ],
        idProperty:"id",
        proxy: {
            type: 'localstorage',
            id  : 'MyShopCart'
        }
    }
});
