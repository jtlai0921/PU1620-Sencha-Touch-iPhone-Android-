Ext.define('Note.controller.tablet.Main', {
    extend: 'Note.controller.Main',
    
    config: {
		control: {
			main: {
				show: 'onShow'
			},
		    'list': {
		    	itemtap : 'onItemTap'
		    },
		    'button[iconCls=delete]': {
		    	tap: 'onDeleteTap'
		    },
		    'button[text=編輯]': {
		    	tap: 'onEditTap'		    	
		    }
		},
		
		views: [
			'Form'
		]
    
    },
    
    launch: function () {
    	var me = this,
    		store = Ext.getStore('Notes');
    	store.on('refresh',me.onRefesh,me);
    },

	onAdd: function () {
		var me=this,
			main= me.getMain(),
			noteform = me.noteform;
		if(!noteform){
			noteform = Ext.create("Note.view.Form");
			me.noteform = noteform;
			Ext.Viewport.add(noteform);
		}
		noteform.setValues({id:'', title:'', content:''});
		noteform.down('titlebar').setTitle('新增記事');
		noteform.show();
	},
	
	onRefesh: function(){
		var me = this,
			main = me.getMain(),
			painted = main.isPainted(),
			store= Ext.getStore('Notes'),
			count = store.getCount();
		if( painted & count >0 ){
			var record = store.getAt(0),
				view = main.down('container[flex=1]');
			main.down('list').select(record);
			view.setRecord(record);
			view.down('titlebar').setTitle(record.data.title);
			view.setHtml(record.data.content);
		}
	},
	
	onShow: function(){
		var store= Ext.getStore('Notes');
		if(store.isLoaded()){
			me.onRefesh();
		}
	},
	
	onItemTap: function(cmp , index, target, record, e, eOpts){
		var me = this,
			main = me.getMain(),
			view = main.down('container[flex=1]');
		view.setRecord(record);
		view.down('titlebar').setTitle(record.data.title);
		view.setHtml(record.data.content);
	},
	
	onDeleteTap: function(cmp){
    	var me=this,
    		view = me.getMain().down('container[flex=1]'),
    		rec=view.getRecord();
		Ext.Msg.confirm('移除','確定移除記事：'+ rec.data.title+'？', 
			function(buttonId, value , opts){
				var me = this;
				if(buttonId=="yes"){
					var record = me.getRecord();
					record.erase();
				}
			},
			view
		)
	},
	
	onEditTap: function(cmp){
    	var me=this,
    		view = cmp.up('container[flex=1]'),
    		rec=view.getRecord();
    	if(rec){
			var noteform = me.noteform;
			if(!noteform){
				noteform = Ext.create("Note.view.Form");
				me.noteform = noteform;
				Ext.Viewport.add(noteform);
			}
    		noteform.setRecord(rec);
    		noteform.show();
    	}else{
    		Ext.Msg.alert('訊息', '請選取一條記錄再編輯。');
    	}
	}	

});
