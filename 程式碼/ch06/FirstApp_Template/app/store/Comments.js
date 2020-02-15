Ext.define("FirstApp.store.Comments", {
    extend: 'Ext.data.Store',

    config: {
	    model: 'FirstApp.model.Comment',
    	listeners: {
    		load :function( store, records, success, operation, eopts){
    			console.log("Load:",arguments);
    		},
    		
    		refresh: function(Store,data,eopts){
    			console.log("Refresh:",arguments);
    		}
    	}
  
    }
})
