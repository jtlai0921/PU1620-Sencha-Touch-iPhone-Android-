Ext.define('MyMusic.view.Song', {
    extend: 'Ext.List',
    xtype: 'songview',
    requires: [
    	'Ext.plugin.ListPaging',
    	'MyMusic.view.SongAction'
    ],
    config: {
    	store: {
    		model: 'MyMusic.model.Song',
		    sorters: 'name',
			grouper:{
				groupFn: function(record) {
			   		return record.data.pinyin[0];
				}	    	
			},			
			proxy:{
				type: 'format',
				api:{
					read: "data/songs.asp",
				}
			}
    	},
    	itemTpl: '{name}',
    	indexBar: true,
    	grouped:true,
	    plugins: [
	        {
	            xclass: 'Ext.plugin.ListPaging',
	            autoPaging: true
	        }
	    ],
    	listeners: {
    		itemtap: 'onMyItemTap'
    	}
    },
    
    onMyItemTap: function(cmp, index, target, record, e, eOpts){
    	var me = this,
    		songaction = me.songaction;
    	if(!songaction){
    		songaction = Ext.create('MyMusic.view.SongAction');
    		Ext.Viewport.add(songaction);
    	}
    	songaction.setRecord(record);
    	songaction.show();
    }
});
