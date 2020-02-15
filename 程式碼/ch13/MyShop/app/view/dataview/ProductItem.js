Ext.define('MyShop.view.dataview.ProductItem', {
    extend: 'Ext.dataview.component.DataItem',
    requires: [
    	'MyShop.view.ProductItem'
    ],
    xtype: 'productitem',

    config: {
    	productItemView:true,
       
		dataMap: {
		    getProductItemView: {
		        setProductImage: 'image',
		        setProductTitle: 'title',
		        setProductInfo: 'info',
		        setProductPrice: 'price'
		    }
		}
       
    },
    
	applyProductItemView: function(config) {
	    return Ext.factory(config,'MyShop.view.ProductItem', this.getProductItemView());
	},
	
	updateProductItemView: function(newview, oldview) {
	    if (oldview) {
	        this.remove(oldview);
	    }
	
	    if (newview) {
	        this.add(newview);
	    }        
	},
	
	updateRecord: function(record){
        if (!record) {
            return;
        };
		var me= this;
			store = record.stores[0],
			index = store.indexOf(record);
		me.callParent(arguments);
		me.getProductItemView().setStyle('background:'+ (index % 2 ==0 ? '#fff;' : ';'  ));
	}
   
});
