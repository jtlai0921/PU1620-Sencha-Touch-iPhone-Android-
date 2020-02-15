Ext.define("MyMusic.model.Song", {
    extend: "Ext.data.Model",
    requires:[
    	'Ext.tux.util.Pinyin'
    ],

    config: {
		fields: [
		 	'name',
		 	'url',
		 	'artist',
		 	'aritst_id',
			{
				name:"pinyin", 
				convert:function(v,record){
					return Ext.Pinyin.getCamelChars(record.data.name);
				}
			}
		]
    }
});