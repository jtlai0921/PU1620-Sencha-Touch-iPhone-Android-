Ext.define("Note.store.Notes", {
    extend: "Ext.data.Store",    
    config: {
    	model: 'Note.model.Note',
    	autoLoad:true,
	    syncRemovedRecords: false,
	    sorters: 'title',
		proxy: {
			type: 'sql',
   			database: 'MyNote',
   			table: 'Note'
   		}
    }
 });