Ext.define("MyMusic.store.Category", {
    extend: "Ext.data.TreeStore",
    requires:[
    	'Ext.tux.proxy.Format'
    ],

    config: {
    	fields: ['id' ,"text"],
	    sorters: "text",
	    root: { id: 'root' , text: 'root'},
		proxy:{
			type: 'format',
			api:{
				read: "data/Category.asp",
			}
		}
    }
});