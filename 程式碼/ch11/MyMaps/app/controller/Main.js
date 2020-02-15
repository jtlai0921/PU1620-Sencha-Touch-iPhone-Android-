Ext.define('MyMaps.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
		refs: {
			main: 'main',
			map: 'map',
			
		},

		control: {
			'button[iconCls=home]': {
				tap: 'onHomeTap'
			},
			'button[iconCls=search]':{
				tap: 'onSearchTap'
			}
		},
		
		views: [
			'Search'
		]
    
    },
    
    launch: function () {
    },

	onHomeTap: function(){
		var me =this,
			map = me.getMap(),
			position = me.getMain().getCurrentPosition();
		map.getMap().panTo(new google.maps.LatLng(position.latitude, position.longitude));
	},
	
	onSearchTap: function(cmp){
		var me =this,
			view = me.searchview;
		if(!view){
			view = Ext.create('MyMaps.view.Search');
			view.setMap(me.getMap().getMap());
			me.searchview = view;
		}
		var hidden = view.isHidden();
        if (hidden || hidden === null) {
			view.showBy(cmp);
		}else{
			view.hide();
		}
		
	}

});
