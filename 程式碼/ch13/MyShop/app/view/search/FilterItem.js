Ext.define('MyShop.view.search.FilterItem', {
    extend: 'Ext.Container',
 	xtype : 'filteritemview',
    requires: [
    ],

    config: {
    	layout: 'hbox',
    	padding: 5,
    	style: 'line-height:40px;',
    	items:[
    		{
    			width: 60,
       		},
       		{
       			flex: 1,
       			style: 'text-align: right;'
       		}
    	]
    },

	initialize : function() {
		var me=this
			items = me.getItems().items;
		me.callParent();
		me.text=items[0];
		me.value=items[1];
	},
    
    setText: function(value){
    	this.text.setHtml(value);
    },
    
    setValue: function(value){
    	var temp= value;
    	if(value!='全部'){
    		temp = '<em style="color:red;">' +value+'</em>'
    	}
    	this.value.setHtml(temp);
    }

});
