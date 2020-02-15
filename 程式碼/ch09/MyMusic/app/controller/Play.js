Ext.define('MyMusic.controller.Play', {
    extend: 'Ext.app.Controller',
    
    config: {
		refs: {
			playView: 'playview',
			loopButton: '#loopButton',
			mutedButton: '#mutedButton',
			songName: '#songName',
			songArtist: '#songArtist',
			prevButton: '#prevButton',
			playButton: '#playButton',
			stopButton: '#stopButton',
			nextButton: '#nextButton',
			playProgress: 'sliderfield',
			audio: 'audio',
		},

		control: {
			playView : {
				show : 'onShow'
			},
			audio: {
				ended: 'onAudioEnded',
				timeupdate: 'onTimeUpdate'
			},
			playButton : {
				tap: 'onPlayButtonTap'
			},
			playProgress: {
				dragstart: 'onDragStart',
				dragend: 'onDragEnd'
			},
			loopButton: {
				toggle: 'onLoopButtonToggle'
			},
			mutedButton: {
				toggle: 'onMutedButtonToggle'
			},
			stopButton: {
				tap: 'onStopButtonTap'
			}
		},
		
		views: [
		],
		
		settingsStore: null,
		
		playlistStore: null,
		
		muted: null,
		
		loop: null,
		
		currentIndex: null
    
    },
    
    
    
    launch: function () {
    	var me = this;
    	me.setSettingsStore(Ext.getStore('Settings'));
    	me.setPlaylistStore(Ext.getStore('Playlist'));
    	var store= me.getSettingsStore(),
    		muted = store.getById('Muted'),
    		loop = store.getById('Loop'),
    		currentIndex = store.getById('CurrenIndex');
    	if(!muted){
    		me.setMuted(false);
    	}else{
    		me.setMuted(muted.data.value);
    	}
    	if(!loop){
    		me.setLoop(true);
    	}else{
    		me.setLoop(loop.data.value);
    	}
    	if(!currentIndex){
    		me.setCurrentIndex(0);
    	}else{
    		me.setCurrentIndex(currentIndex.data.value);
    	}
		var mutedButton = me.getMutedButton(),
			loopButton = me.getLoopButton();
    	mutedButton.setPressedButtons(me.getMuted() ? [mutedButton.getItems().items[0]] : []);
    	loopButton.setPressedButtons(me.getLoop() ?  [loopButton.getItems().items[0]] : []);
    	me.getPlaylistStore().on('refresh',me.onRefresh, me);
    },
    
    updateMuted: function(value){
    	var me = this,
    		store = this.getSettingsStore(),
    		record = store.getById('Muted');
    	if(!record){
    		store.add({key:'Muted', value: value});
    	}else{
			record.set('value', value);
			record.commit();
    	}
		me.getMutedButton().getItems().items[0].setIconCls(value? 'muted': 'volume');
		me.getAudio().setMuted(value);
    },

    updateLoop: function(value){
    	var store = this.getSettingsStore(),
    		record = store.getById('Loop');
    	if(!record){
    		store.add({key:'Loop', value: value});
    	}else{
			record.set('value', value);
			record.commit();
    	}
    },

    updateCurrentIndex: function(value){
    	var store = this.getSettingsStore(),
    		record = store.getById('CurrentIndex');
    	if(!record){
    		store.add({key:'CurrentIndex', value: value});
    	}else{
			record.set('CurrentIndex', value);
			record.commit();
    	}
    },
    
    onRefresh: function(store,data, eOpts){
    	var me= this,
    		store = me.getPlaylistStore(),
    		currentIndex = me.getCurrentIndex(),
    		count = store.getCount();
    	if(count > 0){
    		if(currentIndex >= count){
    			currentIndex = 0;
    			me.setCurrentIndex(0);
    		}
			var record = store.getAt(currentIndex);
			me.getSongName().setHtml(record.data.name);
			me.getSongArtist().setHtml(record.data.name);
			me.getAudio().setUrl(record.data.url);
    	}else{
			me.getSongName().setHtml('');
			me.getSongArtist().setHtml('');
			me.getAudio().setUrl('');
		}
    },
    
    onShow: function(){
    	if(this.getPlayButton().getIconCls()=='play'){
	    	if(this.getPlaylistStore().isLoaded()){
	    		this.onRefresh();
	    	}
	    }
    },
    
    onAudioEnded: function(cmp, time, eOpts){
    	var me= this,
    		store = me.getPlaylistStore(),
    		currentIndex = me.getCurrentIndex() + 1,
    		count = store.getCount(),
    		loop = me.getLoop();
    	if( currentIndex >= count  ){
    		if(loop){
    			currentIndex == 0;
    			me.setCurrentIndex(0);
    			me.onRefresh();
    			me.getAudio().play();
    			me.getPlayButton().setIconCls('pause');
    		}else{
    			currentIndex == count - 1;
    			me.setCurrentIndex(currentIndex);
    			me.onRefresh();
    			me.getPlayButton().setIconCls('play');
    		}    		
    	}else{
    		me.setCurrentIndex(currentIndex);
    		me.onRefresh();
    		me.getAudio().play();
    		me.getPlayButton().setIconCls('pause');
    	}
    },

	onPlayButtonTap: function(cmp){
		var me = this,
			cls =  cmp.getIconCls();
			audio =me.getAudio();
		if(audio.getUrl()!=""){
			if(cls=='play'){
				audio.play();
				cmp.setIconCls('pause');
			}else{
				audio.pause();
				cmp.setIconCls('play');
			}
		}
	},
	
	onTimeUpdate: function(cmp, time, eOpts){
		var me = this,
			playProgress = me.getPlayProgress(),
			duration = cmp.getDuration();
		if(duration>0){    						
			playProgress.setValue(time*100/duration);
		}else{
			playProgress.setValue(1);
		}
	},
	
	onDragStart: function( cmp, sl, thumb, value, e, eOpts ){
		var me = this,
			playButton = me.getPlayButton();
		if(playButton.getIconCls()=='pause'){
			me.getAudio().pause();
		}
	},
	
	onDragEnd:function( cmp, sl, thumb, value, e, eOpts ){
		var me = this,
			audio = me.getAudio(),
			playButton =me.getPlayButton();
		audio.media.dom.currentTime=audio.getDuration()*value[0]/100;
		if(playButton.getIconCls()=='pause'){
			audio.play();
		}
	},
	
	onLoopButtonToggle: function(container, button, pressed){
		this.setLoop(pressed);
	},
	
	onMutedButtonToggle: function(container, button, pressed){
		var me=this;
		me.setMuted(pressed);
	},
	
	onStopButtonTap: function(){
		var me = this;
		me.getAudio().stop();
		me.getPlayButton().setIconCls('play');
	}

});
