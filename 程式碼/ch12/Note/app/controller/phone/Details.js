Ext.define('Note.controller.phone.Details', {
    extend: 'Ext.app.Controller',
    
    config: {
		refs: {
		    main: "main",
		},
		
		control: {
		    'button[text=傳回]': {
		        tap: 'onBack'
		    }
		}
    },
    
    launch: function () {
    },
    
    onBack: function(){
    	var me=this,
    		main = me.getMain();
    	main.setActiveItem(main.down('list'));
    	
    }

});
