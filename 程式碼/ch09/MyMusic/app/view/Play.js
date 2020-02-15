Ext.define('MyMusic.view.Play', {
    extend: 'Ext.Container',
    xtype: 'playview',
    requires: [
    	'Ext.Img',
    	'Ext.Label',
    	'Ext.field.Slider',
    	'Ext.SegmentedButton',
    	'Ext.Audio'
    ],
    
    config: {
	    layout: 'vbox',
	    padding: '5 5 5 5',
    	items:[
    		{
    			flex: 1,
    			layout: 'hbox',
    			items:[
    				{xtype: 'image' , src: 'resources/icons/disc.png', width:200, height: 200 },
    				{
    					flex:1,
    					layout:{
    						type: 'vbox',
    						align: 'center',
    						pack: 'center',
    					},
    					items:[
    						{
    							xtype: 'segmentedbutton',
    							id: 'loopButton',
    							allowDepress: true,
    							items:[
    								{iconCls: 'loop', ui: 'action', pressed: true}
    							]
    						},    						
    						{xtype: 'component', height:40},
    						{
    							xtype: 'segmentedbutton',
    							id: 'mutedButton',
    							allowDepress: true,
    							items:[
    								{iconCls: 'volume', ui: 'action'}
    							]
    						}   						
    					]
    				}
    			]
    		},
    		{
    			height: 40,
    			html: '歌曲',
    			id: 'songName'
    		},
    		{
    			height: 40,
    			html: '歌手',
    			id: 'songArtist'
    		},
    		{
    			height: 40,
    			layout: {
    				type: 'hbox', 
    				align: 'center', 
    				pack: 'center'
    			},
    			defaultType: 'button',
    			defaults: {ui: 'plain' , width:80},
    			items: [
    				{iconCls: 'prev' , id: 'prevButton'},
    				{iconCls: 'play', id: 'playButton'},
    				{iconCls: 'stop', id: 'stopButton'},
    				{iconCls: 'next', id: 'nextButton'}
    			]
    		},
    		{
    			height:60,
    			xtype: 'sliderfield'
    		},
    		{
    			xtype: 'audio',
    			hidden: true,
    		}
    	]
    }
});
