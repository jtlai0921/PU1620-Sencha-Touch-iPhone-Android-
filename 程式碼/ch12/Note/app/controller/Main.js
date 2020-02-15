Ext.define('Note.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
		refs: {
		    main: "main",
		},

		control: {
		    'button[iconCls=add]': {
		        tap: 'onAdd'
		    }
		},
		
		views: [
		]
    
    },
    
    launch: function () {
    },

	onAdd: function () {
	}
	
	

});
