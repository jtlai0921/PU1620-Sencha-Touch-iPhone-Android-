Ext.define('MyMusic.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
		refs: {
		    mainArtist: "navigationview[title=歌手]",
		},

		control: {
		    'list[title=歌手類別別]': {
		    	itemtap: 'onArtistCategoryItemTap'
		    },
		    'nestedlist': {
		    	leafitemtap : 'onLeafItemTap'
		    },
		    'playlistview': {
		    	itemtap: 'onPlaylistItemTap'
		    }
		},
		
		views: [
			'Artists' , 'Song'
		]
    
    },
    
    launch: function () {
    },

	onArtistCategoryItemTap: function (cmp, index, target, record, e, eOpts) {
		var me = this,
			artistsview = cmp.getParent().down('artistsview');
		if(!artistsview){
			artistsview = Ext.create('MyMusic.view.Artists');
			me.getMainArtist().add(artistsview);
			artistsview.on('itemtap',me.onArtistsItemTap, me);
		}
		var store = artistsview.getStore();
		store.getProxy().setExtraParams({id:record.data.id});
		//若果使用過濾模式，可使用以下程式碼
		//store.clearFilter(true);
		//store.filter('artistcategory_id',record.data.id);
		store.load();
		me.getMainArtist().getNavigationBar().setTitle(record.data.text);
		me.getMainArtist().push(artistsview);
	},
	
	onArtistsItemTap: function(cmp, index, target, record, e, eOpts){
		var me = this,
			songview = cmp.getParent().down('songview');
		if(!songview){
			songview = Ext.create('MyMusic.view.Song');
			me.getMainArtist().add(songview);
			songview.on('itemtap',me.onSongItemTap, me);
		}
		var store = songview.getStore();
		store.getProxy().setExtraParams({id:record.data.id});
		store.load();
		me.getMainArtist().getNavigationBar().setTitle(record.data.name+'的歌曲');
		me.getMainArtist().push(songview);
	},
	
    onLeafItemTap: function(cmp, list, index, target, record, e, eOpts){
    	var store = cmp.getDetailCard().getStore();
    	//若果要修改傳送位址，可使用以下敘述，敘述中的newurl為新的位址
    	//store.getProxy().setApi({read: 'newurl'});
		store.getProxy().setExtraParams({cid:record.data.id});
		store.load();
    },

    onPlaylistItemTap: function(cmp, index, target, record, e, eOpts){
    	var me = cmp.getParent()
    		actionsheet = me.actionsheet;
    	if(!actionsheet){
    		actionsheet = Ext.create('Ext.ActionSheet',{
    			items:[
    				{text: '移除目前歌曲', ui: 'action',
    					handler: function(cmp){
    						var record = cmp.getParent().getRecord();
    						record.erase();
    						cmp.getParent().hide();
    					}
    				},
    				{text: '從目前歌曲開始播放', ui: 'action', scope: this,
    					handler: function(cmp){
    						var store= Ext.getStore('Playlist'),
    							record = cmp.getParent().getRecord(),
    							index = store.indexOf(record),
    							ctl = this.getApplication().getController('Play');
    						ctl.setCurrentIndex(index);
    						ctl.onRefresh();
    						ctl.getAudio().play();
    						ctl.getPlayButton().setIconCls('pause');
    						cmp.getParent().hide();
    					}
    				},
    				{text: '清理播放清單', ui: 'action', 
    					handler: function(cmp){
    						var store = Ext.StoreManager.get('Playlist'),
    							datas = store.getData();
    						for(var i=datas.length-1; i>=0; i--){
    							datas.items[i].erase();
    						}
    						cmp.getParent().hide();
    					}
    				},
    				{text: '同步到伺服器', ui: 'action',
    					handler: function(cmp){
    						var store = Ext.StoreManager.get('Playlist'),
    							datas = store.getData(),
    							ids=[];
    						for(var i=datas.length-1; i>=0; i--){
    							ids.push(datas.items[i].data.original_id)
    						}
    						Ext.Ajax.request({
    							url: 'data/playlist.asp',
    							params: {id: ids.join(',')},
								success: function(response,options){
									var result=eval("(" + response.responseText + ")"),
										msg="";
									if(result && result.success){
										msg= result.msg;
									}else {
										msg= result.msg || "發生錯誤。"
									}
									Ext.Msg.alert("訊息",msg);
								},
								
								failure: Ext.tux.Failure.Ajax
    							
    						});
    						cmp.getParent().hide();
    					}
    				},
    				{text: '同步到本機', ui: 'action',
    					handler: function(cmp){
    						Ext.Ajax.request({
    							url: 'data/playlist.json',
								success: function(response,options){
									var result=eval("(" + response.responseText + ")"),
										msg="";
									if(result && result.success){
			    						var store = Ext.StoreManager.get('Playlist'),
			    							datas = store.getData();
			    						for(var i=datas.length-1; i>=0; i--){
			    							datas.items[i].erase();
			    						}
			    						store.add(result.data);
			    						cmp.getParent().hide();
										msg= '同步已完成。';
									}else {
										msg= result.msg || "發生錯誤。"
									}
									Ext.Msg.alert("訊息",msg);
								},
								
								failure: Ext.tux.Failure.Ajax
    							
    						});    						
    					}
    				},
    				{text: '取消', ui: 'confirm', 
    					handler: function(cmp){
    						cmp.getParent().hide();
    					}
    				}
    			]
    		});
    		var items = actionsheet.getItems().items;
    		Ext.Viewport.add(actionsheet);
    	}
    	actionsheet.setRecord(record);
    	actionsheet.show();
    }

});
