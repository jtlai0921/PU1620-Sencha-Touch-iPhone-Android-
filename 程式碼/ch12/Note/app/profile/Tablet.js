Ext.define('Note.profile.Tablet', {
    extend: 'Ext.app.Profile',
	config:{
	    controllers: ['Main'],
	
	    views: [
	        'Main'
	    ],
	},

    isActive: function() {
        return Ext.os.deviceType == 'Tablet';
    },
    
    launch: function(){
        Ext.fly('appLoadingIndicator').destroy();
        //Ext.Viewport.setHtml(Ext.os.deviceType);

        Ext.Viewport.add(Ext.create('Note.view.tablet.Main'));
    }
});