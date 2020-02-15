Ext.define('Note.profile.Phone', {
    extend: 'Ext.app.Profile',
    
	config:{
	    controllers: ['Main', 'Details' , 'Menu'],
	
	    views: [
	        'Main'
	    ],
	},

    isActive: function() {
        return Ext.os.deviceType == 'Phone';
    },
    
    launch: function(){
        Ext.fly('appLoadingIndicator').destroy();
        //Ext.Viewport.setHtml(Ext.os.deviceType);

        Ext.Viewport.add(Ext.create('Note.view.phone.Main'));
    }
});