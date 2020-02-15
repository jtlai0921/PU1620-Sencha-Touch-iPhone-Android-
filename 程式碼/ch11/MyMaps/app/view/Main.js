Ext.define('MyMaps.view.Main', {
    extend: 'Ext.Container',
    xtype: 'main',
    requires: [
        'Ext.Toolbar',
        'Ext.Map'
    ],
    config: {
    	
    	layout: 'fit',
        items: [
            {
            	xtype: 'toolbar',
            	docked: 'top',
            	items:[
            		{iconCls: 'home'},
            		{iconCls: 'search'}
            	]
            }
        ],
        
        settingsStore: null,
        
        currentPosition: null
        
    },
 
     updateCurrentPosition: function(value){
    	var store = this.getSettingsStore(),
    		record = store.getById('CurrentPosition');
    	if(!record){
    		store.add({key:'CurrentPosition', value: value});
    	}else{
			record.set('value', value);
			record.commit();
    	}
    },
    
    beforeInitialize: function(){
    	var me = this;
    	me.setSettingsStore(Ext.getStore('Settings'));
    	var store= me.getSettingsStore(),
    		position = store.getById('CurrentPosition');
    	if(!position){
    		me.setCurrentPosition({ latitude: 23.166876, longitude: 113.263321 });
    	}else{
    		me.setCurrentPosition(position.data.value);
    	}
    	position = me.getCurrentPosition();
    	me.add({
    		xtype: 'map',
    		mapOptions:{
    			center : new google.maps.LatLng(position.latitude, position.longitude),
    			zoom: 16,
    			mapTypeId: google.maps.MapTypeId.HYBRID
    		}
    	});
    	me.geo = Ext.create('Ext.util.Geolocation');
    	me.geo.on('locationupdate',me.onLlocationupdate,me);
    	me.geo.on('locationerror',me.onLocationerror,me);
    },
    
    onLlocationupdate: function(geo){
    	this.setCurrentPosition({latitude: geo.getLatitude(), longitude: geo.getLongitude()});
    	console.log(geo.getLatitude(),geo.getLongitude());
    },
    
    onLocationerror: function(geo, bTimeout, bPermissionDenied, bLocationUnavailable, message){
    	if(bTimeout){
    		console.log('timeout');
    	}else{
    		console.log(message);
    	}
    }
});
