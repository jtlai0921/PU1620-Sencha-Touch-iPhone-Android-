Ext.define('MyShop.view.dataview.PromotionsItem', {
    extend: 'Ext.dataview.component.DataItem',
    requires: [
    	'MyShop.view.PromotionsItem'
    ],
    xtype: 'promotionsitem',

    config: {
    	promotionsItemView:true,
       
		dataMap: {
		    getPromotionsItemView: {
		        setImage: 'image',
		        setTitle: 'title',
		        setBackgroudColor: 'color'
		    }
		}
       
    },
    
	applyPromotionsItemView: function(config) {
	    return Ext.factory(config,'MyShop.view.PromotionsItem', this.getPromotionsItemView());
	},
	
	updatePromotionsItemView: function(newview, oldview) {
	    if (oldview) {
	        this.remove(oldview);
	    }
	
	    if (newview) {
	        this.add(newview);
	    }        
	}
   
});
