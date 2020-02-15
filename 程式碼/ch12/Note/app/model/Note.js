Ext.define("Note.model.Note", {
    extend: "Ext.data.Model",
    requires: [
    	'Ext.data.identifier.Uuid',
    	'Ext.data.proxy.Sql'
    ],
    config: {
    	identifier: 'uuid',
		fields: [      	
		 'title',
		 'content',
		],
		proxy: {
			type: 'sql',
   			database: 'MyNote',
   			table: 'Note'
   		}
    }
 });