Ext.define("MyMusic.model.Artist", {
    extend: "Ext.data.Model",
    requires:[
    	'Ext.tux.util.Pinyin'
    ],

    config: {
		fields: [
			{name: 'id' , type: 'int'},
		 	'name',
		 	{name: 'artistcategory_id', type: 'int'},
			{
				name:"pinyin", 
				convert:function(v,record){
					return Ext.Pinyin.getCamelChars(record.data.name);
				}
			}
		]
    }
});