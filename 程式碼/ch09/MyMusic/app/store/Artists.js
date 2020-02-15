Ext.define("MyMusic.store.Artists", {
    extend: "Ext.data.Store",
    requires:[
    	'Ext.tux.proxy.Format'
    ],

    config: {
    	model: 'MyMusic.model.Artist',    	
	    sorters:"name",
		grouper:{
			groupFn: function(record) {
		   		return record.data.pinyin[0];
			}	    	
		},			
		proxy:{
			type: 'format',
			api:{
				read: "data/artists.asp",
			}
		}
    }
});