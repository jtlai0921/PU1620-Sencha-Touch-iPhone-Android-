Ext.define('MyShop.view.cart.dataview.Item', {
    extend: 'Ext.dataview.component.DataItem',
    requires: [
    	'MyShop.view.cart.Item'
    ],
    xtype: 'cartitem',

    config: {
    	cartItemView:true,
       
		dataMap: {
		    getCartItemView: {
		        setProductId: 'productid',
		        setTitle: 'productname',
		        setQuantity: 'quantity',
		        setPrice: 'price'
		    }
		}
       
    },
    
	applyCartItemView: function(config) {
	    return Ext.factory(config,'MyShop.view.cart.Item', this.getCartItemView());
	},
	
	updateCartItemView: function(newview, oldview) {
		var me =this;
	    if (oldview) {
	        oldview.deleteButton.un('tap', me.onDeleteButtonTap , me);
	        oldview.plusButton.un('tap', me.onPlusButtonTap , me);
	        oldview.minusButton.un('tap', me.onMinusButtonTap , me);
	        oldview.quantity.un('change' , me.onQuantityChange, me);
	        oldview.title.getParent().getParent().element.un('tap',me.onProductTap, me);
	        me.remove(oldview);
	    }
	
	    if (newview) {
	        me.add(newview);
	        newview.deleteButton.on('tap', me.onDeleteButtonTap , me);
	        newview.plusButton.on('tap', me.onPlusButtonTap , me);
	        newview.minusButton.on('tap', me.onMinusButtonTap , me);
	        newview.quantity.on('change' , me.onQuantityChange, me);
	        newview.title.getParent().getParent().element.on('tap',me.onProductTap, me);
	    }        
	},
	
	onDeleteButtonTap: function(){
		var me = this,
			record = me.getRecord();
		Ext.Msg.confirm('移除商品', '您確認要移除商品：'+ record.data.productname, 
			function(buttonId){
				if(buttonId=='yes'){
					var me = this,
						record = me.getRecord(),
						store = Ext.getStore('Carts');
					record.erase();
					store.load();
				}
		}, me)
	},
	
	onPlusButtonTap: function(){
		this.processQuantity(1);
	},
	
	onMinusButtonTap: function(){
		this.processQuantity(-1);
	},
	
	processQuantity: function(changeValue){
		var me = this,
			view = me.getCartItemView(),
			value = view.quantity.getValue()+changeValue;
		if(value>=0){
			view.quantity.setValue(value);
		}
	},
	
	onQuantityChange: function(cmp, newValue, oldValue, eOpts){
		if(newValue!=oldValue){			
			var record = this.getRecord(),
				quantity = record.data.quantity;
			if(quantity!= newValue){				
				record.set('quantity', newValue);
				record.set('subtotal', newValue* record.data.price);
				record.commit();
			}
		}
	},
	
	onProductTap: function(){
		console.log('開啟產品訊息檢視');
	}
   
});
