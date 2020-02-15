Ext.define('MyMusic.view.SongAction', {
    extend: 'Ext.ActionSheet',
    xtype: 'songactionview',
    
    config: {
    	items:[
    		{
    			text: '新增到播放清單', 
    			ui: 'action',
    			handler: function(cmp){
			    	var record = cmp.getParent().getRecord();
			    	store = Ext.StoreManager.get('Playlist'),
			    	data = record.data;
			    	data.original_id = data.id;
			    	delete data.id;
			    	store.add(data);
			    	cmp.getParent().hide();	
    			}
    		},
    		{
    			text: '取消' , 
    			ui: 'confirm',
    			handler: function(cmp){
			    	cmp.getParent().hide();
    			}
    		}
    	]
    }
});
