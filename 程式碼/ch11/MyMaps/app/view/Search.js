Ext.define('MyMaps.view.Search', {
    extend: 'Ext.Panel',
    xtype: 'searchview',
    requires: [
    	'Ext.field.Text'
    ],
    config: {
    	
    	items:[
    		{xtype: 'textfield', placeHolder: '請輸入搜尋文字', width: 200 }
    	],    	  	
		listeners:{			
       		painted: {
       			single: true,
       			fn: 'onPainted'
       		}
		},
		
		map: null
       
    },
 
	onPainted: function(cmp, eOpts){
		var me = this;
			input = me.down('textfield').getComponent().input.dom,
  			searchBox = new google.maps.places.SearchBox(input),
  			map = me.getMap(),
  			markers = [];
			

  		google.maps.event.addListener(searchBox, 'places_changed', function() {
    		var places = searchBox.getPlaces();

    		for (var i = 0, marker; marker = markers[i]; i++) {
      			marker.setMap(null);
    		}

    		markers = [];
    		var bounds = new google.maps.LatLngBounds();
    		for (var i = 0, place; place = places[i]; i++) {
      			var image = {
        			url: place.icon,
        			size: new google.maps.Size(71, 71),
        			origin: new google.maps.Point(0, 0),
        			anchor: new google.maps.Point(17, 34),
        			scaledSize: new google.maps.Size(25, 25)
      			};

	      		var marker = new google.maps.Marker({
	        		map: map,
	        		icon: image,
	        		title: place.name,
	        		position: place.geometry.location
	      		});
	
	      		markers.push(marker);
	
	      		bounds.extend(place.geometry.location);
    		}

    		map.fitBounds(bounds);
  		});

  		google.maps.event.addListener(map, 'bounds_changed', function() {
    		var bounds = map.getBounds();
    		searchBox.setBounds(bounds);
  		});
	}
    
});
