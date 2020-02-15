Ext.define('MyShop.view.action.dataview.Item', {
    extend: 'Ext.dataview.component.DataItem',
    requires: [
    	'MyShop.view.action.Item'
    ],
    xtype: 'actionitem',

    config: {
    	actionItemView:true,
       
		dataMap: {
		    getActionItemView: {
		        setIcon: 'icon',
		        setTitle: 'title'
		    }
		}
       
    },
    
	applyActionItemView: function(config) {
	    return Ext.factory(config,'MyShop.view.action.Item', this.getActionItemView());
	},
	
	updateActionItemView: function(newview, oldview) {
		var me =this;
	    if (oldview) {
	        me.remove(oldview);
	    }
	
	    if (newview) {
	        me.add(newview);
	    }        
	}
   
});
