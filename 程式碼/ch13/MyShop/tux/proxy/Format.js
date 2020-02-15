Ext.define('Ext.tux.proxy.Format', {
    extend: 'Ext.data.proxy.Ajax',
    requires: [
        'Ext.tux.Failure'
    ],

    alias: 'proxy.format',

	config:{
		reader: {
		    type: 'json',
		    rootProperty : "data",
		    messageProperty: "msg"
		},
		writer:{
			type: "json",
		    encode: true,
		    rootProperty: "data",
		    allowSingle: false
		},
		listeners:{
		    exception : function(){
		    	Ext.tux.Failure.Proxy.apply(this,arguments);
		    }
		}
   
	}
    
});
