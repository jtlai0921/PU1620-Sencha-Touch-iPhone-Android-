Ext.define("MyMusic.store.Playlist", {
    extend: "Ext.data.Store",
    requires:[
    	'Ext.data.proxy.Sql'
    ],

    config: {
    	autoLoad: true,
    	autoSync: true,
    	syncRemoveedRecords: false,
    	model: 'MyMusic.model.Playlist',
		proxy:{
			type: 'sql',
   			database: 'MyMusic',
   			table: 'Playlist'
		}
    }
});