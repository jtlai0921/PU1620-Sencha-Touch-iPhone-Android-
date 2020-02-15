Ext.define("MyMusic.model.Playlist", {
    extend: "Ext.data.Model",

    config: {
    	identifier: 'uuid',
		fields: [
		 	'name',
		 	'url',
		 	'artist',
		 	{name: 'aritst_id', type : 'int'},
		 	{name: 'original_id', type : 'int'}
		],
		proxy:{
			type: 'sql',
   			database: 'MyMusic',
   			table: 'Playlist'
		}
    }
});