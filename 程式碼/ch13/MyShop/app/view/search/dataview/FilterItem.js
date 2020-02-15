Ext.define('MyShop.view.search.dataview.FilterItem', {
    extend: 'Ext.dataview.component.DataItem',
    requires: [
    	'MyShop.view.search.FilterItem'
    ],
    xtype: 'filteritem',

    config: {
    	filterItemView:true,
       
		dataMap: {
		    getFilterItemView: {
		        setValue: 'value',
		        setText: 'text'
		    }
		}
       
    },
    
	applyFilterItemView: function(config) {
	    return Ext.factory(config,'MyShop.view.search.FilterItem', this.getFilterItemView());
	},
	
	updateFilterItemView: function(newview, oldview) {
	    if (newview) {
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
		me.getFilterItemView().setStyle('background:'+ (index % 2 ==0 ? '#fff;' : ';'  ));
	}
   
});
